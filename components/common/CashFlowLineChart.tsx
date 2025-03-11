"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import FilterButton from "./FilterButton"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]
const chartDataSecond = [
  { month: "January", desktop: 186, mobile: 100 },
  { month: "February", desktop: 305, mobile: 220 },
  { month: "March", desktop: 370, mobile: 140 },
  { month: "April", desktop: 120, mobile: 210 },
  { month: "May", desktop: 421, mobile: 150 },
  { month: "June", desktop: 234, mobile: 160 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export default function CashFlowLineChart({ className }: { className: string }) {
  return (
    <div className={`border rounded-2xl p-4 ${className}`}>

      <Card>

        <CardHeader>
          <div className="flex justify-between">
            <div className="">
              <CardTitle>Cash Flow</CardTitle>
              <CardDescription>January - June 2025</CardDescription>
            </div>
            <div className="">
              <FilterButton />
            </div>
          </div>

        </CardHeader >

        <CardContent>
          <ChartContainer className="aspect-[3/1]" config={chartConfig}>
            <LineChart
              accessibilityLayer
              data={chartDataSecond}
              margin={{

                top: 20,
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Line
                dataKey="desktop"
                type="natural"
                stroke="var(--color-desktop)"
                strokeWidth={2}
                dot={{
                  fill: "var(--color-desktop)",
                }}
                activeDot={{
                  r: 6,
                }}
              >
                <LabelList
                  position="top"
                  offset={12}
                  className="fill-foreground"
                  fontSize={12}
                />
              </Line>
            </LineChart>
          </ChartContainer>
        </CardContent>

        {/* <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Showing total visitors for the last 6 months
          </div>
        </CardFooter> */}

      </Card>
    </div>

  )
}
