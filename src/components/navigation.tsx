"use client";

import Link from "next/link";

const Navigation = ({
  selectedPage,
  numItemsInCart,
}: {
  selectedPage: string;
  numItemsInCart: number;
}) => {
  const pages = [
    { path: "all", pageName: "all", displayName: "All" },
    { path: "ships", pageName: "ship", displayName: "Ships" },
    { path: "deathstars", pageName: "star", displayName: "Death Stars" },
    {
      path: "destroyers",
      pageName: "destroyer",
      displayName: "Star Destroyers",
    },
  ];

  return (
    <>
      <div className="relative w-full">
        <Link href="/" className="absolute left-2">
          <img src={"/images/logo.png"} width="40" height="40" />
        </Link>

        <div className="absolute left-16 flex gap-4">
          {pages.map((filterValue) => (
            <Link
              href={filterValue.path === "all" ? "/" : filterValue.path}
              key={filterValue.path}
              className={`shrink-0 py-2 ${filterValue.pageName === selectedPage ? "font-bold" : ""}`}
            >
              {filterValue.displayName}
            </Link>
          ))}
        </div>

        <div className="absolute right-2 flex items-center">
          <Link href="/checkout">
            <img src={"/images/cart.png"} width="24" height="20" />
          </Link>
          <p className="rounded-full bg-amber-500 px-2">{numItemsInCart}</p>
        </div>
      </div>
    </>
  );
};

export default Navigation;
