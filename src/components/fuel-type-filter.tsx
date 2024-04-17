"use client";

import React, { useEffect } from "react";

const FuelTypeFilter = ({
  currentFilter,
  fuelTypeFilterValues,
  filterByFuelType,
}: {
  currentFilter: string;
  fuelTypeFilterValues: string[];
  filterByFuelType: (fuelType: string) => void;
}) => {
  useEffect(() => {
    if (
      document.getElementById("fuelTypeGroup")?.contains(document.activeElement)
    ) {
      const index = fuelTypeFilterValues.indexOf(currentFilter);
      document.getElementById("radio-value-" + index)?.focus();
    }
  }, [currentFilter, fuelTypeFilterValues]);

  const previousIndex = () => {
    const currentIndex = fuelTypeFilterValues.indexOf(currentFilter);
    if (currentIndex === 0) {
      return fuelTypeFilterValues[fuelTypeFilterValues.length - 1];
    }
    return fuelTypeFilterValues[currentIndex - 1];
  };

  const nextIndex = () => {
    const currentIndex = fuelTypeFilterValues.indexOf(currentFilter);
    if (currentIndex === fuelTypeFilterValues.length - 1) {
      return fuelTypeFilterValues[0];
    }
    return fuelTypeFilterValues[currentIndex + 1];
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case "Up":
      case "ArrowUp":
      case "Left":
      case "ArrowLeft":
        filterByFuelType(previousIndex());
        event.stopPropagation();
        event.preventDefault();
        return;

      case "Down":
      case "ArrowDown":
      case "Right":
      case "ArrowRight":
        filterByFuelType(nextIndex());
        event.stopPropagation();
        event.preventDefault();
        return;
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4 px-4">
        <h2 className="text-xl" id="fuelType">
          Fuel Type
        </h2>
        <div
          role="radiogroup"
          aria-labelledby="fuelType"
          className="flex flex-col"
          onKeyDown={handleKeyDown}
          id="fuelTypeGroup"
        >
          {fuelTypeFilterValues.map((filterValue, index) => (
            <div
              role="radio"
              id={"radio-value-" + index}
              aria-checked={filterValue === currentFilter ? "true" : "false"}
              tabIndex={filterValue === currentFilter ? 0 : -1}
              onClick={() => filterByFuelType(filterValue)}
              key={filterValue}
              className={
                "cursor-pointer border border-solid border-gray-200 px-6 py-2 text-left " +
                (filterValue === currentFilter ? "bg-gray-200 " : "") +
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-500"
              }
            >
              {filterValue}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FuelTypeFilter;
