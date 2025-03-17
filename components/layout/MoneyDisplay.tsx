import { formatCurrency } from "@/lib/utils";
import { ArrowUpCircle, ArrowDownCircle, MoreVertical } from "lucide-react";
import React from "react";

interface MoneyDisplayProps {
    title: string;
    currency: string;
    value: number;
    status: string;
}

const MoneyDisplay: React.FC<MoneyDisplayProps> = (prop: MoneyDisplayProps) => {

    const arrowStatus = prop.status == "up" ? <ArrowUpCircle size={18} /> : <ArrowDownCircle size={18} />
    const iconStatus = prop.status == "up" ? "bg-green-100 text-green-900" : "bg-red-100 text-red-900"

    return (
        <div className="flex flex-col justify-between rounded-2xl p-4 w-full max-w-[300px] sm:aspect-[5/3] sm:max-w-[180px] sm:aspect-square rounded-xl border shadow">

            {/* Top Section with Icon and Menu */}
            <div className="flex justify-between items-start">
                {/* Money In Icon (Arrow Up) */}
                <div className={`bg-green-100 p-2 rounded-lg`}>
                    {arrowStatus}
                </div>
                {/* Three-dot menu */}
                <MoreVertical size={18} className="text-gray-400" />
            </div>

            <div className="flex flex-col gap-4">
                {/* Growth Percentage (Optional, but could be replaced with other values if needed) */}
                <div className={`flex items-center gap-1 ${iconStatus} text-xs font-medium px-2 py-1 rounded-lg w-fit`}>
                    {arrowStatus}
                    +1.78%
                </div>

                <div className="">
                    {/* Balance */}
                    <div className="text-2xl font-bold text-gray-900">{formatCurrency(prop.currency, prop.value)}</div>

                    {/* Description */}
                    <div className="text-sm text-gray-500">{prop.title}</div>
                </div>
            </div>

        </div>
    );
}

export default MoneyDisplay