import { CardCarousel } from "@/components/common/CardCarousel";
import LineChart_1 from "@/components/common/LineChart";
import MoneyDisplay from "@/components/common/MoneyDisplay";
import Balance from "@/components/dashboard/DashboardBalance";

export default function Home() {
  return (
    <div className="flex flex-wrap gap-4 w-full">

      {/* Left Section (3 parts) */}
      <div className="flex-[6] flex flex-col">
        <div className="flex flex-wrap gap-4 justify-between mb-4">
          <CardCarousel />
          <MoneyDisplay />
          <MoneyDisplay />
          <MoneyDisplay />
        </div>

        <div>
          <LineChart_1 />
        </div>

      </div>

      {/* Right Section (4 parts) */}
      <div className="flex-[2] bg-gray-200 p-4 rounded-lg">
      <MoneyDisplay />
      <MoneyDisplay />
      <MoneyDisplay />
      <MoneyDisplay />
      <MoneyDisplay />
      <MoneyDisplay />
      <MoneyDisplay />

      </div>

    </div>
  );
}
