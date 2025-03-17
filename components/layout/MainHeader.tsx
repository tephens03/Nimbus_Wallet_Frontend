"use client";
import { usePathname } from "next/navigation";
import { Search, Bell, MessageSquare } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function MainHeader({ userFullName }: { userFullName: string }) {
  const currentRoute = usePathname();

  // Improve title parsing for multi-segment routes
  const currentPageTitle =
    currentRoute === "/"
      ? "Dashboard"
      : currentRoute
        .split("/")
        .filter(Boolean) // Remove empty segments
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" / ");

  return (
    <header className="flex flex-wrap items-center justify-between px-6 lg:px-8 py-3">
      {/* Left - Page Title */}
      <h1 className="text-xl md:text-2xl font-bold">{currentPageTitle}</h1>

      {/* Right - Search + Notifications + User Info */}
      <div className="flex items-center gap-x-4 md:gap-x-6">

        {/* Search Bar - Visible on larger screens, expandable on small screens */}
        <div className="relative hidden md:flex items-center bg-gray-200 px-3 py-2 rounded-3xl flex-grow max-w-lg w-[300px] lg:w-[400px]">
          <Search size={18} className="text-gray-600" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none pl-2 flex-grow text-sm text-gray-800"
          />
        </div>

        {/* Icons (Notifications & Messages) */}
        <div className="flex gap-x-2">
          {/* Notification Icon */}
          <button className="relative p-2 rounded-full bg-green-100 hover:bg-gray-300 transition">
            <Bell size={22} className="text-gray-700" />
            <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
          </button>

          {/* Message Icon */}
          <button className="relative p-2 rounded-full bg-green-100 hover:bg-gray-300 transition">
            <MessageSquare size={22} className="text-gray-700" />
            <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
          </button>
        </div>

        {/* User Info */}
        <div className="flex flex-col items-start">
          <p className="font-bold text-sm md:text-base">{userFullName}</p>
          <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-2 py-0.5 rounded-md">
            Director
          </span>
        </div>

        {/* User Avatar */}
        <button className="p-1.5 rounded-full hover:bg-gray-300 transition">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </button>
      </div>
    </header>
  );
}
