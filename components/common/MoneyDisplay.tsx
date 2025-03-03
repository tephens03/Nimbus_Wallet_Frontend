import { Card } from "@/components/ui/card";
import { TrendingUp, MoreVertical } from "lucide-react";

export default function MoneyDisplay() {
    return (
        <Card className="bg-black text-white shadow-md rounded-2xl p-4 w-full max-w-[200px] flex flex-col gap-4">
            
            {/* Top Section with Icon and Menu */}
            <div className="flex justify-between items-start">
                {/* Placeholder Icon */}
                <div className="bg-green-100 p-2 rounded-lg">
                    <TrendingUp size={20} className="text-green-900" />
                </div>
                {/* Three-dot menu */}
                <MoreVertical size={18} className="text-gray-400" />
            </div>

            {/* Growth Percentage */}
            <div className="flex items-center gap-1 bg-green-100 text-green-900 text-xs font-medium px-2 py-1 rounded-lg w-fit">
                <TrendingUp size={12} />
                +1.78%
            </div>

            {/* Balance */}
            <div className="text-2xl font-bold text-gray-900">$78,000</div>

            {/* Description */}
            <div className="text-sm text-gray-500">Total Income</div>
        </Card>
    );
}
