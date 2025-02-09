"use client";
import { ArrowRightLeft, Send, Wallet, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function MoneyDisplay({ balance }: { balance: number }) {
    const [isVisible, setIsVisible] = useState(true);

    // Format balance into whole dollars & cents separately
    const [dollars, cents] = isVisible
        ? balance.toFixed(2).split(".")
        : ["•••••", "••"];

    return (
        <div className="bg-black rounded-xl shadow-md text-white flex flex-col md:flex-row justify-between items-start md:items-center w-full space-y-4 md:space-y-0">
            {/* Balance & Eye Icon */}
            <div className="flex items-center">
                <h2 className="text-4xl md:text-5xl font-semibold flex items-baseline">


                    <span>{`$${dollars}`}</span>
                    <span className="text-lg md:text-2xl ml-1 opacity-80">{`.${cents}`}</span>

                </h2>
                <button
                    onClick={() => setIsVisible(!isVisible)}
                    className="text-gray-400 hover:text-white transition p-1 ml-2"
                >
                    {isVisible ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
            </div>

            {/* Action Buttons (Left-Aligned on Small Screens) */}
            <div className="flex flex-wrap justify-start gap-2 md:gap-3">
                <ActionButton icon={<ArrowRightLeft size={12} />} label="Move" />
                <ActionButton icon={<Wallet size={12} />} label="Request" />
                <ActionButton icon={<Send size={12} />} label="Transfer" />
            </div>
        </div>
    );
}

/* Reusable Button Component (Compact & Uniform Size) */
function ActionButton({ icon, label }: { icon: React.ReactNode; label: string }) {
    return (
        <button className="flex items-center justify-center bg-gray-900 px-3 py-2 min-w-[80px] md:min-w-[90px] rounded-lg transition hover:bg-gray-800 text-xs gap-1">
            {icon}
            <span>{label}</span>
        </button>
    );
}
