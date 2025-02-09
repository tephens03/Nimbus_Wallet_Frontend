import { Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Header() {
  return (
    <header className="bg-black text-white h-12 px-4 flex justify-between items-center w-full">
      {/* Left - Empty Space for Sidebar */}
      <div className="w-12"></div>

      {/* Center - Slim Search Bar (Hidden on Mobile) */}
      <div className="hidden md:flex items-center bg-purple-950 px-3 py-1.5 rounded-lg flex-grow max-w-md">
        <Search size={18} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-white pl-2 flex-grow text-sm"
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
