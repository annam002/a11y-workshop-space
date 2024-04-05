"use client";

import { Ship } from "@/components/ship";
import { useState } from "react";
import { getFuelTypes, getLocations, SpaceShip } from "@/api/spaceShips";
import Search from "@/components/search";
import LocationFilter from "@/components/location-filter";
import Navigation from "@/components/navigation";
import { addToCart, getNumItemsInCart } from "@/api/shoppingCart";
import FuelTypeFilter from "@/components/fuel-type-filter";

const FilteredShipCatalogue = ({
  ships,
  selectedPage,
}: {
  ships: SpaceShip[];
  selectedPage: string;
}) => {
  const [locationFilter, setLocationFilter] = useState("All");
  const [fuelTypeFilter, setFuelTypeFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsInCart, setItemsInCart] = useState(getNumItemsInCart());

  const determineShipsToDisplay = () => {
    const shipsOnPage =
      selectedPage === "all"
        ? ships
        : ships.filter((ship) => ship.type === selectedPage);

    const shipsFilteredByLocation =
      locationFilter === "All"
        ? shipsOnPage
        : shipsOnPage.filter((ship) => ship.location === locationFilter);

    const shipsFilteredByFuelType =
      fuelTypeFilter === "All"
        ? shipsFilteredByLocation
        : shipsFilteredByLocation.filter(
            (ship) => ship.fuelType === fuelTypeFilter,
          );

    if (searchTerm.length > 0) {
      return shipsFilteredByFuelType.filter((ship) =>
        ship.name.toLowerCase().startsWith(searchTerm.toLowerCase()),
      );
    }
    return shipsFilteredByFuelType;
  };

  const addToCartAndRefresh = (shipId: string) => {
    addToCart(shipId);
    setItemsInCart(getNumItemsInCart());
  };

  const shipsToDisplay = determineShipsToDisplay();

  const [locationFilterValues] = useState(getLocations(shipsToDisplay));
  const [fuelTypeFilterValues] = useState(getFuelTypes(shipsToDisplay));

  return (
    <>
      <div className="my-8 flex w-full flex-col items-center gap-12">
        <Navigation selectedPage={selectedPage} numItemsInCart={itemsInCart} />
        <div className="mx-auto text-3xl">Welcome to Hexa Space Inc.</div>
        <div className="flex w-full flex-col items-center gap-4">
          <Search executeSearch={(searchTerm) => setSearchTerm(searchTerm)} />
          <div className="flex w-full flex-nowrap gap-8 px-4">
            <div className="flex flex-col gap-8">
              <LocationFilter
                currentFilter={locationFilter}
                locationFilterValues={locationFilterValues}
                filterByLocation={(filterValue) =>
                  setLocationFilter(filterValue)
                }
              />
              <FuelTypeFilter
                currentFilter={fuelTypeFilter}
                fuelTypeFilterValues={fuelTypeFilterValues}
                filterByFuelType={(filterValue) =>
                  setFuelTypeFilter(filterValue)
                }
              />
            </div>

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
