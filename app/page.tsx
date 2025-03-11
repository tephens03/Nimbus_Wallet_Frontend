import AccountCarousel from "@/components/common/AccountCarousel";
import CashFlowLineChart from "@/components/common/CashFlowLineChart";
import SpendingCategoryPieChart from "@/components/common/SpendingCategoryPieChart";
import MoneyDisplay from "@/components/common/MoneyDisplay";
import TransactionTable from "@/components/common/TransactionTable";
import SavingPlans from "@/components/common/SavingPlans";



export default function Home() {
  return (
    <div className="flex flex-wrap gap-4 w-full">

      {/* Left Section (3 parts) */}
      <div className="flex-[14] flex flex-col">

        <div className="flex flex-wrap gap-4 justify-between mb-4">
          <AccountCarousel />

          <MoneyDisplay title="Total Savings" value={120} currency="CAD" status="up" />
          <MoneyDisplay title="Total Incomes" value={120} currency="CAD" status="up" />
          <MoneyDisplay title="Total Saving" value={120} currency="CAD" status="down" />
        </div>



        <div className="sm:flex gap-4">

          <div className="sm:flex-[2]">
            <SavingPlans />
          </div>

          <div className="sm:flex-[3] gap-4">
            <CashFlowLineChart className="mb-4" />
            <TransactionTable headerVisible={true} />

          </div>

        </div>




      </div>

      {/* Right Section (4 parts) */}
      <div className="flex-[4]">
        <SpendingCategoryPieChart />
      </div>

    </div>
  );
}
