"use client";

const LocationFilter = ({
  currentFilter,
  locationFilterValues,
  filterByLocation,
}: {
  currentFilter: string;
  locationFilterValues: string[];
  filterByLocation: (location: string) => void;
}) => {
  return (
    <>
      <div className="flex flex-col gap-4 px-4">
        <div className="text-xl">Location</div>
        <div className="flex flex-col">
          {locationFilterValues.map((filterValue) => (
            <button
              onClick={() => filterByLocation(filterValue)}
              key={filterValue}
              className={`border border-solid border-gray-200 px-6 py-2 text-left ${filterValue === currentFilter ? "bg-gray-200" : ""}`}
            >
              {filterValue}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default LocationFilter;
