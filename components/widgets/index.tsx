import { AwardIcon, GemIcon, X, Check } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface PropsAward {
  place?: string;
}

const achievements = [
  {
    name: "STORY001",
    description: "Create your first story to share with the community.",
    done: false,
  },
  {
    name: "PUSH001",
    description: "Emit your first push to the repository.",
    done: false,
  },
  {
    name: "MERGE001",
    description: "Merge your first pull request successfully.",
    done: false,
  },
  {
    name: "REVIEW001",
    description: "Review a teammate's code for the first time.",
    done: false,
  },
  {
    name: "BUGFIX001",
    description: "Fix your first reported bug in the system.",
    done: false,
  },
  {
    name: "DEPLOY001",
    description:
      "Complete your first deployment to the production environment.",
    done: true,
  },
];

export default function Awards(props: PropsAward) {
  const colors: Record<string, { background: string; medalColor: string }> = {
    Bronze: { background: "#F2DCC9", medalColor: "#b87333" },
    Prata: { background: "#F2F2F2", medalColor: "#8C8C8C" },
    Ouro: { background: "#0700E0FF", medalColor: "#FFD500" },
    Diamante: { background: "#F2F2F2", medalColor: "#2A5CBF" },
  };

  const selectedColors = colors[props.place ?? "Prata"];

  const iconAward = () => {
    return (
      <>
        <div
          className={`flex items-center p-2 rounded-lg border-2 border-[${selectedColors.medalColor}]`}
          style={{ background: selectedColors.background }}
        >
          {props.place != "Diamante" ? (
            <AwardIcon
              color={selectedColors.medalColor}
              height={26}
              widths={26}
            />
          ) : (
            <GemIcon
              color={selectedColors.medalColor}
              height={26}
              widths={26}
            />
          )}
        </div>
      </>
    );
  };

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <div className="flex flex-col items-center mr-1">{iconAward()}</div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <div className="flex flex-row items-center">
              Você é:&nbsp;<DialogTitle> {props.place}</DialogTitle>{" "}
              {props.place != "Diamante" ? (
                <AwardIcon
                  color={selectedColors.medalColor}
                  height={26}
                  widths={26}
                />
              ) : (
                <GemIcon
                  color={selectedColors.medalColor}
                  height={26}
                  widths={26}
                />
              )}
            </div>
            <DialogDescription asChild>
              <ScrollArea className="h-[300px] md:h-[400px] w-full rounded-md border p-4">
                <Table>
                  <TableCaption>
                    Essas são todas suas conquistas até o momento.
                  </TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Conquista</TableHead>
                      <TableHead className="w-[200]">Descrição</TableHead>
                      <TableHead className="text-right">Progresso</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {achievements.map((achievement) => (
                      <TableRow key={achievement.name}>
                        <TableCell className="font-normal">
                          {achievement.name}
                        </TableCell>
                        <TableCell>{achievement.description}</TableCell>
                        <TableCell className="flex justify-center item-center">
                          {achievement.done ? (
                            <Check color="green" width={18} height={18} />
                          ) : (
                            <X color="red" width={18} height={18} />
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
