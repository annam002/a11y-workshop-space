"use client";

import { Ship } from "@/components/ship";
import { useState } from "react";
import { SpaceShip } from "@/api/getSpaceShips";
import Search from "@/components/search";
import LocationFilter from "@/components/location-filter";
import Navigation from "@/components/navigation";
import { addToCart, getNumItemsInCart } from "@/api/shoppingCart";

const FilteredShipCatalogue = ({
  ships,
  selectedPage,
}: {
  ships: SpaceShip[];
  selectedPage: string;
}) => {
  const [locationFilter, setLocationFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsInCart, setItemsInCart] = useState(getNumItemsInCart());

  const locationFilterValues = ["All"];
  new Set(
    ships.map((ship) => ship.location).sort((a, b) => a.localeCompare(b)),
  ).forEach((location) => locationFilterValues.push(location));

  const determineShipsToDisplay = () => {
    const shipsOnPage =
      selectedPage === "all"
        ? ships
        : ships.filter((ship) => ship.type === selectedPage);
    const filteredShips =
      locationFilter === "All"
        ? shipsOnPage
        : shipsOnPage.filter((ship) => ship.location === locationFilter);
    if (searchTerm.length > 0) {
      return filteredShips.filter((ship) =>
        ship.name.toLowerCase().startsWith(searchTerm.toLowerCase()),
      );
    }
    return filteredShips;
  };

  const addToCartAndRefresh = (shipId: string) => {
    addToCart(shipId);
    setItemsInCart(getNumItemsInCart());
  };

  const shipsToDisplay = determineShipsToDisplay();

  return (
    <>
      <div className="my-8 flex w-full flex-col items-center gap-12">
        <Navigation selectedPage={selectedPage} numItemsInCart={itemsInCart} />
        <div className="mx-auto text-3xl">Welcome to Hexa Space Inc.</div>
        <div className="flex w-full flex-col items-center">
          <Search executeSearch={(searchTerm) => setSearchTerm(searchTerm)} />
          <div className="flex w-full flex-nowrap gap-8 px-4">
            <LocationFilter
              currentFilter={locationFilter}
              locationFilterValues={locationFilterValues}
              filterByLocation={(filterValue) => setLocationFilter(filterValue)}
            />

            {shipsToDisplay.length === 0 && (
              <div className="w-full p-10 text-center">
                These are not the ships you are looking for...
              </div>
            )}
            {shipsToDisplay.length > 0 && (
              <div className="flex w-full flex-row flex-wrap justify-center gap-4">
                {shipsToDisplay.map((ship) => (
                  <Ship
                    key={ship.id}
                    ship={ship}
                    addToCart={addToCartAndRefresh}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilteredShipCatalogue;
