import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./index.scss";

export default function SearchUsers({ setIsSearch, setSearchInput }) {
  return (
    <div className="search-users">
      <input
        placeholder="Search Friends.."
        onChange={(event) => setSearchInput(event.target.value)}
      />

      <AiOutlineCloseCircle
        className="close-icon"
        size={20}
        onClick={() => {
          setIsSearch(false);
          setSearchInput("");
        }}
      />
    </div>
  );
}
