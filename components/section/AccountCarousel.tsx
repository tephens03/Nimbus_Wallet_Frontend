"use client"
import { useContext } from "react";
import * as React from "react";
import { Eye, EyeOff } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { formatCurrency, formatHiddenIdentifier, formatNumericIdentifier, isNumeric } from "@/lib/utils";
import { AppContext } from "@/store/app-context";


export default function AccountCarousel() {
  const context = useContext(AppContext);

  const accounts = context?.accounts ?? []

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(prev => !prev);

  const renderIdentifier = (account: typeof accounts[0], isVisible: boolean) => {
    const isIdentifierNumeric = isNumeric(account.identifier);

    let formattedIdentifier = isIdentifierNumeric
      ? formatNumericIdentifier(account.identifier)
      : account.identifier;

    return isIdentifierNumeric && !isVisible
      ? formatHiddenIdentifier(formattedIdentifier!)
      : formattedIdentifier;
  };

  const renderBalance = (account: typeof accounts[0]) => {
    return formatCurrency(account.currency, account.balance);
  };

  const renderExpiryDate = (expiryDate?: string) => {
    return expiryDate || "N/A";
  };

  return (

    < Carousel className="w-full max-w-[300px]" >

      <CarouselContent>

        {accounts.map((account, index) => (

          <CarouselItem key={index} className="basis-full">
            <Card className="bg-gradient-to-r from-green-900 to-green-700 text-white rounded-xl aspect-[5/3] flex flex-col justify-between p-6 shadow hover:shadow-2xl|transform|hover:scale-105|transition-all|duration-300|ease-in-out|">
              {/* Bank Name & Type */}
              <div className="flex justify-between items-center text-xs mb-4">
                <span className="font-semibold text-lg">{account.bank}</span>
                <span className="opacity-80 text-sm">{account.provider}</span>
              </div>

              {/* Identifier with Toggle Visibility */}
              <div
                onClick={toggleVisibility}
                className="flex items-center justify-center gap-2 text-base font-mono tracking-widest text-center cursor-pointer mt-4"
              >
                {/* Render the identifier (i.e., card number) */}
                <span className="font-bold">{renderIdentifier(account, isVisible)}</span>

                {/* Eye Icon for visibility toggle */}
                {isNumeric(account.identifier) && (
                  isVisible ? <EyeOff size={18} className="text-white" /> : <Eye size={18} className="text-white" />
                )}
              </div>

              {/* Balance & Expiry Date */}
              <div className="flex justify-between items-center text-xs opacity-70 mt-4">
                <span className="text-sm">{renderBalance(account)}</span>
                <span className="text-sm">{renderExpiryDate(account.expiryDate)}</span>
              </div>
            </Card>
          </CarouselItem>


        ))}

      </CarouselContent>

      <CarouselNext />

      <CarouselPrevious />

    </Carousel >
  );
}
