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
import { accounts } from "@/model/transaction";

export function CardCarousel() {

  const [isVisible, setIsVisible] = React.useState(false);

  const handleVisible = () => {
    const currentState = isVisible
    setIsVisible(!currentState)
  }

  const formatIdentifier = (input: string) => {
    return input.match(/.{1,4}/g)?.join(" ") || "";
  }

  return (

    <Carousel className="w-full max-w-[300px]">


      <CarouselContent>
        {accounts.map((account, index) => {

          // Format balance into whole dollars & cents separately


          let formatted_balance = new Intl.NumberFormat("de-DE", { style: "currency", currency: account.currency }).format(account.balance)
          let formatted_identifier = formatIdentifier(account.identifier)
          const identifier = isVisible ? formatted_identifier : `•••• •••• •••• ${formatted_identifier.slice(-4)}`

          return (
            <CarouselItem key={index} className="basis-full">

              <Card className="bg-green-900 text-white rounded-xl aspect-[5/3] flex flex-col justify-between p-4">
                {/* Bank Name & Type */}
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold">{account.bank}</span>
                  <span className="opacity-70">{account.provider}</span>
                </div>

                <div onClick={handleVisible} className="flex items-center justify-center gap-2 text-base font-mono tracking-widest text-center cursor-pointer">
                  {identifier} {isVisible ? <EyeOff size={16} /> : <Eye size={16} />}
                </div>

                {/* Name & Expiry */}
                <div className="flex justify-between text-xs opacity-80">
                  <span>{formatted_balance} </span>
                  <span>{account.expiryDate}</span>
                </div>


              </Card>
            </CarouselItem>)
        })}

      </CarouselContent>
      <CarouselNext />
      <CarouselPrevious />

    </Carousel>
  );
}
