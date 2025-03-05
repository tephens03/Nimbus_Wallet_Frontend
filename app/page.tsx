import { CardCarousel } from "@/components/common/CardCarousel";
import LineChart_1 from "@/components/common/LineChart";
import MoneyDisplay from "@/components/common/MoneyDisplay";
import Transaction from "@/components/common/Transaction";
import Balance from "@/components/dashboard/DashboardBalance";

export default function Home() {
  return (
    <div className="flex flex-wrap gap-4 w-full">

      {/* Left Section (3 parts) */}
      <div className="flex-[14] flex flex-col">

        <div className="flex flex-wrap gap-4 justify-between mb-4">
          <CardCarousel />
          <MoneyDisplay />
          <MoneyDisplay />
          <MoneyDisplay />
        </div>



        <div className="sm:flex gap-4">

          <div className="sm:flex-[2]">
            <Transaction headerOn={true} />
          </div>

          <div className="sm:flex-[3]">
            <LineChart_1  />
          </div>

        </div>




      </div>

      {/* Right Section (4 parts) */}
      <div className="flex-[4] bg-gray-200 p-4 rounded-lg">
        right-bar
      </div>

    </div>
  );
}
