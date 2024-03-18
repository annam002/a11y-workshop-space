'use client';

import {useRouter} from "next/navigation";

const Navigation = ({selectedPage, numItemsInCart} : {selectedPage: string, numItemsInCart: number}) => {
    const pages = [
        { path: "all", pageName: "all", displayName: "All"},
        { path: "ships", pageName: "ship", displayName: "Ships" },
        { path: "deathstars", pageName: "star", displayName: "Death Stars" },
        { path: "destroyers", pageName: "destroyer", displayName: "Star Destroyers" }
    ];

    const router = useRouter();
    const goToPage = (path: string) => {
        if (path === "all") {
            router.push("/");
        }
        else {
            router.push(`/${path}`);
        }
    };

    return (
        <>
            <div className="relative w-full">
                <img src={"/images/logo.png"} width={"40px"} height={"40px"} onClick={() => router.push("/")}
                     className="cursor-pointer absolute left-2"/>
                <div className="flex items-center absolute right-2">
                    <img src={"/images/cart.png"} className="" width="24px" height="20px"/>
                    <p className="bg-amber-500 rounded-full px-1">{numItemsInCart}</p>
                </div>
                <div className="flex gap-4 absolute left-16">
                    {pages.map(filterValue =>
                        <div onClick={() => goToPage(filterValue.path)}
                             key={filterValue.path}
                             className={`shrink-0 py-2 cursor-pointer ${filterValue.pageName === selectedPage ? "font-bold" : ""}`}>
                            {filterValue.displayName}
                        </div>
                    )}
                </div>
            </div>
        </>);
}

export default Navigation;
