import { BarChartLegend } from "@/components/charts/BarChartLegend";
import { BarChartLine } from "@/components/charts/BarChartLine";
import { BigChartLine } from "@/components/charts/BigChartLine";
import { RadialChartShape } from "@/components/charts/RadialChartShape";

export default function Page() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-muted/50">
            <BarChartLegend />
          </div>
          <div className="aspect-video rounded-xl bg-muted/50">
            <BarChartLine />
          </div>
          <div className="aspect-video rounded-xl bg-muted/50">
            <RadialChartShape />
          </div>
        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
          <BigChartLine />
        </div>
      </div>
    </main>
  );
}
