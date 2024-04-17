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
      <div className="flex w-full flex-col items-center gap-12 py-8 sm:px-8">
        <header className="flex w-full flex-col items-center gap-12">
          <Navigation
            selectedPage={selectedPage}
            numItemsInCart={itemsInCart}
          />
          <h1 className="mx-auto text-3xl">Welcome to Hexa Space Inc.</h1>
        </header>
        <main className="flex w-full flex-col items-center gap-4">
          <Search executeSearch={(searchTerm) => setSearchTerm(searchTerm)} />
          <div className="flex w-full flex-col gap-8 px-4 md:flex-row">
            <nav
              aria-label="Filter"
              className="flex flex-col items-center gap-8 md:items-start"
            >
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
            </nav>

            <div aria-live="polite" aria-atomic="true" className="w-full">
              {shipsToDisplay.length === 0 && (
                <div className="text-center text-xl">No spaceships found</div>
              )}
              {shipsToDisplay.length > 0 && (
                <>
                  <div className="mb-4 text-center text-xl">
                    {shipsToDisplay.length} spaceships found
                  </div>
                  <div className="flex w-full flex-col justify-center gap-4 md:flex-row md:flex-wrap">
                    {shipsToDisplay.map((ship) => (
                      <Ship
                        key={ship.id}
                        ship={ship}
                        addToCart={addToCartAndRefresh}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default FilteredShipCatalogue;
