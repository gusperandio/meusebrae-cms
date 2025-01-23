"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ArrowUpDown,
  ChevronDown,
  ChevronRight,
  MoreHorizontal,
  Trash2,
  Copy,
  Pencil,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const deleteBtn = (
  <Button variant="destructive" size="icon">
    <Trash2 color="white" />
  </Button>
);

const editBtn = (
  <Button color="blue" size="icon">
    <Pencil />
  </Button>
);

const copyBtn = (cpf: string) => (
  <Button
    variant="outline"
    size="icon"
    onClick={() => navigator.clipboard.writeText(cpf)}
  >
    <Copy />
  </Button>
);

const data: Usuario[] = [
  {
    id: "1",
    nome: "João Silva",
    email: "joao.silva@example.com",
    dataNascimento: "1990-05-15",
    cpf: "123.456.789-00",
    celular: "(11) 98765-4321",
    ultimoLogin: "2025-01-20T18:30:00",
    dataCadastro: "2024-12-01T10:15:00",
    status: "desativado",
  },
  {
    id: "2",
    nome: "Maria Oliveira",
    email: "maria.oliveira@example.com",
    dataNascimento: "1985-08-25",
    cpf: "987.654.321-00",
    celular: "(21) 91234-5678",
    ultimoLogin: "2025-01-22T08:00:00",
    dataCadastro: "2024-11-15T14:45:00",
    status: "ativo",
  },
  {
    id: "3",
    nome: "Carlos Mendes",
    email: "carlos.mendes@example.com",
    dataNascimento: "1995-03-10",
    cpf: "654.321.987-00",
    celular: "(31) 99876-5432",
    ultimoLogin: "2025-01-23T09:45:00",
    dataCadastro: "2024-10-10T09:00:00",
    status: "ativo",
  },
];

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export type Usuario = {
  id: string;
  nome: string;
  email: string;
  dataNascimento: string;
  cpf: string;
  celular: string;
  ultimoLogin: string;
  dataCadastro: string;
  status: "ativo" | "desativado";
};

const columns: ColumnDef<Usuario>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "nome",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nome
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("nome")}</div>,
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "cpf",
    header: "Cpf",
    cell: ({ row }) => <div className="capitalize">{row.getValue("cpf")}</div>,
  },
  {
    accessorKey: "celular",
    header: "Celular",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("celular")}</div>
    ),
  },
  {
    accessorKey: "dataNascimento",
    header: "Data de Nascimento",
    cell: ({ row }) => {
      const newDate = new Date(row.getValue("dataNascimento"));
      const formattedDate = new Intl.DateTimeFormat("pt-BR", {
        dateStyle: "short",
      }).format(newDate);
      return <div className="capitalize">{formattedDate}</div>;
    },
  },
  {
    accessorKey: "ultimoLogin",
    header: "Último Login",
    cell: ({ row }) => {
      const newDate = new Date(row.getValue("ultimoLogin"));
      const formattedDate = new Intl.DateTimeFormat("pt-BR", {
        dateStyle: "short",
        timeStyle: "short",
      }).format(newDate);
      return <div className="capitalize">{formattedDate}</div>;
    },
  },
  {
    accessorKey: "dataCadastro",
    header: "Data de Cadastro",
    cell: ({ row }) => {
      const newDate = new Date(row.getValue("dataCadastro"));
      const formattedDate = new Intl.DateTimeFormat("pt-BR", {
        dateStyle: "short",
        timeStyle: "short",
      }).format(newDate);
      return <div className="capitalize">{formattedDate}</div>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      let dataRow: string = row.getValue("status");
      return (
        <div
          className={cn(
            "capitalize",
            dataRow.toLowerCase() !== "ativo"
              ? "text-red-500"
              : "text-green-500"
          )}
        >
          {dataRow}
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const userDatas = row.original;
      return (
        <div className="flex space-x-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>{copyBtn(userDatas.cpf)}</TooltipTrigger>
              <TooltipContent>
                <p>Copiar CPF</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {editBtn}
          {deleteBtn}
        </div>
      );
    },
  },
];

export default function Page() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <main className="w-full m-auto flex flex-col p-4 ">
      <div className="flex items-center py-4 space-x-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Colunas <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="text-center">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </main>
  );
}
