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
        className="my-4 flex w-[450px] items-center justify-center gap-2"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          className="grow-1 w-[300px] border border-gray-200 p-2"
        />
        <button type="submit">
          <img src="/images/search.png" />
        </button>
      </form>
    </>
  );
};

export default Search;
