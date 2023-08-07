import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <>
      <div className="w-full flex justify-center mb-10 gap-2">
        <button className="text-white bg-black p-2 px-3 rounded-lg">
          <FaSearch size={20} />
        </button>
        <input
          placeholder="Search In Here !!!"
          type="text"
          className="w-7/12 h-12 max-md:w-10/12 border rounded-xl px-2 border-black"
        />
      </div>
    </>
  );
};

export default Search;
