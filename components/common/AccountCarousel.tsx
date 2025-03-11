"use client"
import * as React from "react";
import { Eye, EyeOff } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { accounts } from "@/model/account";
import { formatCurrency, formatHiddenIdentifier, formatNumericIdentifier, isNumeric } from "@/lib/utils";

export default function AccountCarousel() {
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
    <Carousel className="w-full max-w-[300px]">
      <CarouselContent>
        {accounts.map((account, index) => (
          <CarouselItem key={index} className="basis-full">
            <Card className="bg-green-900 text-white rounded-xl aspect-[5/3] flex flex-col justify-between p-4">
              {/* Bank Name & Type */}
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold">{account.bank}</span>
                <span className="opacity-70">{account.provider}</span>
              </div>

              {/* Identifier with Toggle Visibility */}
              <div
                onClick={toggleVisibility}
                className="flex items-center justify-center gap-2 text-base font-mono tracking-widest text-center cursor-pointer"
              >
                {renderIdentifier(account, isVisible)}
                {isNumeric(account.identifier) && (
                  isVisible ? <EyeOff size={16} /> : <Eye size={16} />
                )}
              </div>

              {/* Balance & Expiry Date */}
              <div className="flex justify-between text-xs opacity-80">
                <span>{renderBalance(account)}</span>
                <span>{renderExpiryDate(account.expiryDate)}</span>
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselNext />
      <CarouselPrevious />
    </Carousel>
  );
}
