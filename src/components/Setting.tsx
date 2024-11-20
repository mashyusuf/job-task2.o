"use client";

import React, { useState } from "react";
import { FiChevronLeft, FiSettings } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoLanguage } from "react-icons/io5";
import { PiCardsThreeBold } from "react-icons/pi";
import { TbCategory } from "react-icons/tb";
import Image from "next/image"; 
import icon from "../app/assets/loginIcon.png"; // Login icon

export default function Setting() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Settings Icon for Small Devices */}
      <button
        className="block sm:hidden fixed top-4 right-4 rounded-full z-50"
        onClick={() => setIsMenuOpen(true)}
      >
        <FiSettings
          className="text-green-600 hover:bg-gray-300 font-bold"
          size={24}
        />
      </button>

      {/* Full-Screen Menu for Small Devices */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
          {/* Back Button */}
          <div className="flex items-center p-4 ">
            <button
              className="p-2 rounded-full hover:bg-gray-200"
              onClick={() => setIsMenuOpen(false)}
            >
              <FiChevronLeft size={24} />
            </button>
            <h2 className="text-lg font-semibold ml-3">Settings</h2>
          </div>
          {/* Menu Content */}
          {renderSettingsMenu()}
        </div>
      )}

      {/* Sidebar for Medium and Larger Devices */}
      <div className="hidden sm:block h-full max-w-screen-sm shadow-lg fixed">
        {renderSettingsMenu()}
      </div>
    </div>
  );

  // Function to render the shared settings menu content
  function renderSettingsMenu() {
    return (
      <div className="p-2">
        {/* Login Icon, Down Arrow, and Settings Header */}
        <div className="flex items-center space-x-3 mb-6 justify-end hidden sm:flex md:flex">
          <Image
            src={icon}
            alt="Login Icon"
            className="rounded-full"
            width={40}
            height={40}
          />
          <div className="flex items-center space-x-2">
            <IoMdArrowDropdown size={20} />
          </div>
        </div>

        {/* Menu Options */}
        <ul className="space-y-6">
          <li className="flex items-center space-x-4 hover:text-green-600">
            <IoLanguage size={24} className="text-gray-600" />
            <span className="text-sm font-medium">Language Settings</span>
          </li>
          <li className="flex items-center space-x-4 hover:text-green-600">
            <PiCardsThreeBold size={24} className="text-gray-600" />
            <span className="text-sm font-medium">General Settings</span>
          </li>
          <li className="flex items-center space-x-4 hover:text-green-600">
            <TbCategory size={24} className="text-gray-600" />
            <span className="text-sm font-medium">Font Settings</span>
          </li>
          <li className="flex items-center space-x-4  hover:text-green-800">
            <TbCategory size={24} className="text-gray-600" />
            <span className="text-sm font-medium">Appearance Settings</span>
          </li>
          <li className="flex items-center justify-between px-3 py-2 bg-gray-100 rounded-lg">
            <span className="text-sm font-medium">Night Mode</span>
            {/* Toggle Button */}
            <input
              type="checkbox"
              className="toggle text-xs sm:text-sm"
              defaultChecked
            />
          </li>
        </ul>
      </div>
    );
  }
}
