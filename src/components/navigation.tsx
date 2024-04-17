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
      <nav
        aria-label="Main"
        className="flex w-full flex-col items-center gap-4 lg:flex-row lg:justify-between"
      >
        <Link href="/">
          <img src={"/images/logo.png"} width="40" height="40" alt="Homepage" />
        </Link>

        <div className="flex flex-col gap-4 md:flex-row">
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

        <div className="flex items-center">
          <Link href="/checkout">
            <img
              src={"/images/cart.png"}
              width="24"
              height="20"
              alt="Checkout"
            />
          </Link>
          <p className="rounded-full bg-amber-500 px-2">{numItemsInCart}</p>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
