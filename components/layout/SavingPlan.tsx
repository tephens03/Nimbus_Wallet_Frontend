import React from 'react';
import { Wallet, MoreVertical } from 'lucide-react'; // Make sure to import these icons properly.
import { Progress } from "@/components/ui/progress"
import { formatCurrency } from '@/lib/utils';


interface SavingPlanProps {
    title: string;
    target: number;
    current: number;
    currency: string;
    className?: string;

}

const SavingPlan: React.FC<SavingPlanProps> = ({ title, target, current, currency, className = '' }) => {
    const progressPercentage = (current / target) * 100;

    return (
        <div className={`rounded-xl p-4 border shadow ${className}`}>
            {/* Top Section with Icon and Menu */}

            <div className="flex justify-between items-center mb-6">
                {/* Money In Icon (Arrow Up) */}
                <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                        <Wallet className="text-green-500" size={18} />
                    </div>
                    <div className="flex flex-col items-start">
                        <div className="font-semibold text-gray-800">{title}</div>
                    </div>
                </div>

                <MoreVertical size={18} className="text-gray-500 cursor-pointer" />
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
                <Progress value={progressPercentage} />
            </div>

            {/* Progress Information */}
            <div className="flex justify-between items-center text-gray-800">
                <span className="text-sm font-medium">{formatCurrency(currency, current)} ({progressPercentage.toFixed(2)}%)</span>
                <span className="text-sm font-semibold text-gray-800">{formatCurrency(currency, target)}</span>
            </div>
        </div>
    );
}

export default SavingPlan;
