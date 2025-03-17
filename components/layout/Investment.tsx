import React from 'react';

interface InvesmentProps {
    title: string;
    price: number;
    quantity: number;
    diffPercentage: number;
    isGain: boolean;
    className?: string
}

const Invesment: React.FC<InvesmentProps> = ({ title, price, quantity, diffPercentage, isGain, className = "" }) => {
    return (
        <div className={`flex items-center justify-between space-x-6 rounded-xl p-4 border shadow ${className}`}>
            <div className="flex-1">
                {/* Title */}
                <div className="text-lg font-semibold text-gray-800">{title}</div>

                {/* Date and Time */}
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <div>2 Dec, 2021</div>
                    <small className="opacity-70">9:14pm</small>
                </div>

                {/* Quantity and Bonds */}
                <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
                    <div>{quantity} Bonds</div>
                </div>
            </div>

            <div className="flex flex-col items-end">
                {/* Amount */}
                <div className="text-xl font-bold text-gray-800">${price}</div>

                {/* Percentage Change */}
                <small className={`text-sm ${isGain ? 'text-green-600' : 'text-red-600'} font-semibold`}>
                    {isGain ? '+' : '-'}{diffPercentage}%
                </small>
            </div>
        </div>
    );
};

export default Invesment;
