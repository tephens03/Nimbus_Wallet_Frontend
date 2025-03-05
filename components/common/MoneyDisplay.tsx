import { Card } from "@/components/ui/card";
import { ArrowUpCircle, ArrowDownCircle, MoreVertical } from "lucide-react";

export default function MoneyDisplay() {
    return (
        <div className="flex flex-col justify-between rounded-2xl p-4 w-full max-w-[300px] sm:aspect-[5/3] sm:max-w-[180px] sm:aspect-square rounded-xl border shadow">
            {/* <Card className="bg-black sm:max-w-[20px] text-white shadow-md rounded-2xl p-4 w-full max-w-[200px] flex flex-col gap-4"> */}

            {/* // <Card className="w-full flex flex-col gap-4 rounded-2xl p-4 box-content  max-w-[300px] min-w-[300px]"> */}
            {/* <Card className="bg-black sm:max-w-[200px] text-white shadow-md rounded-2xl p-4 w-full max-w-[3000px] flex flex-col gap-4"> */}

            {/* Top Section with Icon and Menu */}
            <div className="flex justify-between items-start">
                {/* Money In Icon (Arrow Up) */}
                <div className="bg-green-100 p-2 rounded-lg">
                    <ArrowUpCircle size={20} className="text-green-900" />
                </div>
                {/* Three-dot menu */}
                <MoreVertical size={18} className="text-gray-400" />
            </div>

            <div className="flex flex-col gap-4">
                {/* Growth Percentage (Optional, but could be replaced with other values if needed) */}
                <div className="flex items-center gap-1 bg-green-100 text-green-900 text-xs font-medium px-2 py-1 rounded-lg w-fit">
                    <ArrowUpCircle size={12} />
                    +1.78%
                </div>

                <div className="">
                    {/* Balance */}
                    <div className="text-2xl font-bold text-gray-900">$78,000</div>

                    {/* Description */}
                    <div className="text-sm text-gray-500">Total Income</div>
                </div>
            </div>

        </div>
    );
}
