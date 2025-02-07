"use client"

import { Home, Settings, User, Wallet, Receipt, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        className="absolute top-4 left-4 md:hidden text-white bg-gray-800 p-2 rounded-md z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 bg-gray-800 text-white p-4 
                    flex flex-col items-center space-y-6 h-screen 
                    transition-transform duration-300 ease-in-out 
                    ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 w-16`}
      >
        <nav className="flex flex-col items-center space-y-6 flex-1">
          <ul className="space-y-6">
            <li className="hover:bg-gray-700 p-2 rounded-lg cursor-pointer">
              <Home size={24} />
            </li>
            <li className="hover:bg-gray-700 p-2 rounded-lg cursor-pointer">
              <Wallet size={24} />
            </li>
            <li className="hover:bg-gray-700 p-2 rounded-lg cursor-pointer">
              <Receipt size={24} />
            </li>
            <li className="hover:bg-gray-700 p-2 rounded-lg cursor-pointer">
              <User size={24} />
            </li>
            <li className="hover:bg-gray-700 p-2 rounded-lg cursor-pointer">
              <Settings size={24} />
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
