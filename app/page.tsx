import { CardCarousel } from "@/components/common/CardCarousel";
import LineChart_1 from "@/components/common/LineChart";
import PieChart_1 from "@/components/common/PieChart";
import MoneyDisplay from "@/components/common/MoneyDisplay";
import Statistic from "@/components/common/Statistic";
import Transaction from "@/components/common/Transaction";


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

          <div className="sm:flex-[3] gap-4">
            <LineChart_1 className="mb-4" />
            <Transaction headerOn={true} />
          </div>

        </div>




      </div>

      {/* Right Section (4 parts) */}
      <div className="flex-[4]">
        <PieChart_1 />
      </div>

    </div>
  );
}
