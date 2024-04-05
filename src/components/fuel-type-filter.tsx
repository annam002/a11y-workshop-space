"use client";

const FuelTypeFilter = ({
  currentFilter,
  fuelTypeFilterValues,
  filterByFuelType,
}: {
  currentFilter: string;
  fuelTypeFilterValues: string[];
  filterByFuelType: (fuelType: string) => void;
}) => {
  return (
    <>
      <div className="flex flex-col gap-4 px-4">
        <div className="text-xl">Fuel Type</div>
        <div className="flex flex-col">
          {fuelTypeFilterValues.map((filterValue) => (
            <div
              onClick={() => filterByFuelType(filterValue)}
              key={filterValue}
              className={`cursor-pointer border border-solid border-gray-200 px-6 py-2 ${filterValue === currentFilter ? "bg-gray-200" : ""}`}
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
