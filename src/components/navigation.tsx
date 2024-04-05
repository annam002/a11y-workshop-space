"use client";

import { useRouter } from "next/navigation";

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

  const router = useRouter();
  const goToPage = (path: string) => {
    if (path === "all") {
      router.push("/");
    } else {
      router.push(`/${path}`);
    }
  };

  return (
    <>
      <div className="relative w-full">
        <img
          src={"/images/logo.png"}
          width={"40px"}
          height={"40px"}
          onClick={() => router.push("/")}
          className="absolute left-2 cursor-pointer"
        />
        <div className="absolute right-2 flex items-center">
          <img
            src={"/images/cart.png"}
            className="cursor-pointer"
            width="24px"
            height="20px"
            onClick={() => router.push("/checkout")}
          />
          <p className="rounded-full bg-amber-500 px-2">{numItemsInCart}</p>
        </div>
        <div className="absolute left-16 flex gap-4">
          {pages.map((filterValue) => (
            <div
              onClick={() => goToPage(filterValue.path)}
              key={filterValue.path}
              className={`shrink-0 cursor-pointer py-2 ${filterValue.pageName === selectedPage ? "font-bold" : ""}`}
            >
              {filterValue.displayName}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;
