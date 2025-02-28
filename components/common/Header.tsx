"use client"
import { usePathname } from 'next/navigation'
import { Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Header({ userFullName }: { userFullName: string }) {
  const currentRoute = usePathname()
  const currentPageTitle = currentRoute == '/' ? "Dashboard" : currentRoute[1].toLocaleUpperCase() + currentRoute.slice(2)

  return (
    <header className="gap-4  px-6 lg:px-8 bg-black py-4 lg:py    flex flex-wrap justify-between items-center ">

      {/* Dashboard Title & Welcome Message */}
      <div className="min-w-[200px]">
        <h1 className="text-xl text-white md:text-2xl font-bold">{currentPageTitle}</h1>
        <p className="text-gray-400 text-sm md:text-base">Welcome back, {userFullName}</p>
      </div>

      {/* Center - Slim Search Bar (Hidden on Mobile) */}
      <div className="hidden md:flex items-center bg-white px-3 py-1.5 rounded-lg flex-grow max-w-md">
        <Search size={18} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none  pl-2 flex-grow text-sm"
        />
      </div>

      {/* Right - Smaller User Icon Button */}
      <button className="p-1.5 rounded hover:bg-gray-700">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </button>

    </header>


  );
}
