"use client";

import { FormEvent, useState } from "react";

const Search = ({
  executeSearch,
}: {
  executeSearch: (searchTerm: string) => void;
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    executeSearch(searchTerm);
  };

  return (
    <>
      <form
        className="md:w-90 my-4 flex w-60 items-center justify-center gap-2"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          className="grow-1 w-[200px] border border-gray-200 p-2 md:w-[300px]"
        />
        <button type="submit">
          <img src="/images/search.png" alt="Search" />
        </button>
      </form>
    </>
  );
};

export default Search;
