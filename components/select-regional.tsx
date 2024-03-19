import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const regional = [
  "AAI",
  "DIRETORIA",
  "UAJ",
  "UANE",
  "UAR",
  "UCF",
  "UCS",
  "UGP",
  "UGE",
  "UGIP",
  "UIC",
  "UMC",
  "UTIC",
  "Regional Centro",
  "Regional Curitiba",
  "Regional Leste",
  "Regional Leste- São José",
  "Regional Noroeste",
  "Regional Norte",
  "Regional Oeste",
  "Regional Sul"
];

export function SelectRegional() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Selecione sua Regional" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {regional.map((e, i) => {
            return (
              <SelectItem key={i} value={e}>
                {e}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
