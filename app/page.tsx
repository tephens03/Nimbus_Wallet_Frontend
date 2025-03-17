import AccountCarousel from "@/components/section/AccountCarousel";
import CashFlow from "@/components/section/CashFlow";
import SpendingCategory from "@/components/section/SpendingCategoryStatistics";

import TransactionTable from "@/components/section/Transactions";
import SavingPlans from "@/components/section/SavingPlans";
import Investments from "@/components/section/Investments";
import Summary from "@/components/section/Summary";



export default function Home() {
  return (

    <div className="flex flex-wrap gap-4 w-full">

      {/* Left Section (3 parts) */}
      <div className="flex-[14] flex flex-col">

        <div className="flex flex-wrap gap-4 justify-between mb-4">
          <AccountCarousel />
          <Summary />
        </div>



        <div className="sm:flex gap-4">
          <div className="sm:flex-[2]">
            <SavingPlans />
          </div>
          <div className="sm:flex-[4] gap-4">
            <CashFlow />
            <TransactionTable />
          </div>
        </div>

      </div>


      {/* Right Section (4 parts) */}
      <div className="flex-[4]">
        <SpendingCategory />
        <Investments />
      </div>

    </div>
  );
}
