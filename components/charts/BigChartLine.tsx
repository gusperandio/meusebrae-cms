"use client";

import * as React from "react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { date: "2024-04-01", android: 222, iOS: 150 },
  { date: "2024-04-02", android: 97, iOS: 180 },
  { date: "2024-04-03", android: 167, iOS: 120 },
  { date: "2024-04-04", android: 242, iOS: 260 },
  { date: "2024-04-05", android: 373, iOS: 290 },
  { date: "2024-04-06", android: 301, iOS: 340 },
  { date: "2024-04-07", android: 245, iOS: 180 },
  { date: "2024-04-08", android: 409, iOS: 320 },
  { date: "2024-04-09", android: 59, iOS: 110 },
  { date: "2024-04-10", android: 261, iOS: 190 },
  { date: "2024-04-11", android: 327, iOS: 350 },
  { date: "2024-04-12", android: 292, iOS: 210 },
  { date: "2024-04-13", android: 342, iOS: 380 },
  { date: "2024-04-14", android: 137, iOS: 220 },
  { date: "2024-04-15", android: 120, iOS: 170 },
  { date: "2024-04-16", android: 138, iOS: 190 },
  { date: "2024-04-17", android: 446, iOS: 360 },
  { date: "2024-04-18", android: 364, iOS: 410 },
  { date: "2024-04-19", android: 243, iOS: 180 },
  { date: "2024-04-20", android: 89, iOS: 150 },
  { date: "2024-04-21", android: 137, iOS: 200 },
  { date: "2024-04-22", android: 224, iOS: 170 },
  { date: "2024-04-23", android: 138, iOS: 230 },
  { date: "2024-04-24", android: 387, iOS: 290 },
  { date: "2024-04-25", android: 215, iOS: 250 },
  { date: "2024-04-26", android: 75, iOS: 130 },
  { date: "2024-04-27", android: 383, iOS: 420 },
  { date: "2024-04-28", android: 122, iOS: 180 },
  { date: "2024-04-29", android: 315, iOS: 240 },
  { date: "2024-04-30", android: 454, iOS: 380 },
  { date: "2024-05-01", android: 165, iOS: 220 },
  { date: "2024-05-02", android: 293, iOS: 310 },
  { date: "2024-05-03", android: 247, iOS: 190 },
  { date: "2024-05-04", android: 385, iOS: 420 },
  { date: "2024-05-05", android: 481, iOS: 390 },
  { date: "2024-05-06", android: 498, iOS: 520 },
  { date: "2024-05-07", android: 388, iOS: 300 },
  { date: "2024-05-08", android: 149, iOS: 210 },
  { date: "2024-05-09", android: 227, iOS: 180 },
  { date: "2024-05-10", android: 293, iOS: 330 },
  { date: "2024-05-11", android: 335, iOS: 270 },
  { date: "2024-05-12", android: 197, iOS: 240 },
  { date: "2024-05-13", android: 197, iOS: 160 },
  { date: "2024-05-14", android: 448, iOS: 490 },
  { date: "2024-05-15", android: 473, iOS: 380 },
  { date: "2024-05-16", android: 338, iOS: 400 },
  { date: "2024-05-17", android: 499, iOS: 420 },
  { date: "2024-05-18", android: 315, iOS: 350 },
  { date: "2024-05-19", android: 235, iOS: 180 },
  { date: "2024-05-20", android: 177, iOS: 230 },
  { date: "2024-05-21", android: 82, iOS: 140 },
  { date: "2024-05-22", android: 81, iOS: 120 },
  { date: "2024-05-23", android: 252, iOS: 290 },
  { date: "2024-05-24", android: 294, iOS: 220 },
  { date: "2024-05-25", android: 201, iOS: 250 },
  { date: "2024-05-26", android: 213, iOS: 170 },
  { date: "2024-05-27", android: 420, iOS: 460 },
  { date: "2024-05-28", android: 233, iOS: 190 },
  { date: "2024-05-29", android: 78, iOS: 130 },
  { date: "2024-05-30", android: 340, iOS: 280 },
  { date: "2024-05-31", android: 178, iOS: 230 },
  { date: "2024-06-01", android: 178, iOS: 200 },
  { date: "2024-06-02", android: 470, iOS: 410 },
  { date: "2024-06-03", android: 103, iOS: 160 },
  { date: "2024-06-04", android: 439, iOS: 380 },
  { date: "2024-06-05", android: 88, iOS: 140 },
  { date: "2024-06-06", android: 294, iOS: 250 },
  { date: "2024-06-07", android: 323, iOS: 370 },
  { date: "2024-06-08", android: 385, iOS: 320 },
  { date: "2024-06-09", android: 438, iOS: 480 },
  { date: "2024-06-10", android: 155, iOS: 200 },
  { date: "2024-06-11", android: 92, iOS: 150 },
  { date: "2024-06-12", android: 492, iOS: 420 },
  { date: "2024-06-13", android: 81, iOS: 130 },
  { date: "2024-06-14", android: 426, iOS: 380 },
  { date: "2024-06-15", android: 307, iOS: 350 },
  { date: "2024-06-16", android: 371, iOS: 310 },
  { date: "2024-06-17", android: 475, iOS: 520 },
  { date: "2024-06-18", android: 107, iOS: 170 },
  { date: "2024-06-19", android: 341, iOS: 290 },
  { date: "2024-06-20", android: 408, iOS: 450 },
  { date: "2024-06-21", android: 169, iOS: 210 },
  { date: "2024-06-22", android: 317, iOS: 270 },
  { date: "2024-06-23", android: 480, iOS: 530 },
  { date: "2024-06-24", android: 132, iOS: 180 },
  { date: "2024-06-25", android: 141, iOS: 190 },
  { date: "2024-06-26", android: 434, iOS: 380 },
  { date: "2024-06-27", android: 448, iOS: 490 },
  { date: "2024-06-28", android: 149, iOS: 200 },
  { date: "2024-06-29", android: 103, iOS: 160 },
  { date: "2024-06-30", android: 446, iOS: 400 },
];

const chartConfig = {
  views: {
    label: "Page Views",
  },
  android: {
    label: "Android",
    color: "hsl(var(--chart-6))",
  },
  iOS: {
    label: "iOS",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function BigChartLine() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("android");

  const total = React.useMemo(
    () => ({
      android: chartData.reduce((acc, curr) => acc + curr.android, 0),
      iOS: chartData.reduce((acc, curr) => acc + curr.iOS, 0),
    }),
    []
  );

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Line Chart - Interactive</CardTitle>
          <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription>
        </div>
        <div className="flex">
          {["android", "iOS"].map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Line
              dataKey={activeChart}
              type="monotone"
              stroke={`var(--color-${activeChart})`}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
