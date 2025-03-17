"use client"
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import SectionContainer from "../container/SectionContainer"
import SectionHeader from "../layout/SectionHeader"
import SectionContent from "../layout/SectionContent"


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

export default function CashFlowLineChart() {
  return (
    <SectionContainer className="mb-4">

      <SectionHeader title={"Cashflow"} />

      <SectionContent>

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

      </SectionContent>

    </SectionContainer>

  )
}
