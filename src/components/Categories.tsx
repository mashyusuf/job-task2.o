import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import Dua from "./Dua";

export default function Categories() {
  return (
    <div className="flex-col">
      <h1>Dua Page</h1>
      <div className="">
        <h1 className="bg-[#1FA45B] text-xl font-bold text-white border-y flex justify-center rounded-t-xl w-full py-4">
          Categories
        </h1>

        <label className="input input-bordered flex items-center gap-2 p-2 mx-2 mt-2">
          <IoSearchOutline className="text-gray-500" />
          <input
            type="text"
            className="grow text-sm py-1 px-2"
            placeholder="Search by Categories"
          />
        </label>
      </div>
      <Dua />
    </div>
  );
}
