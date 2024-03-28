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
        <div className="text-xl" id="location">
          Location
        </div>
        <div
          className="flex flex-col"
          role={"group"}
          aria-labelledby="location"
        >
          {locationFilterValues.map((filterValue) => (
            <label
              key={filterValue}
              className={`cursor-pointer border border-solid border-gray-200 px-6 py-2 ${
                filterValue === currentFilter ? "bg-gray-200" : ""
              } focus-within:outline focus-within:outline-2 focus-within:outline-offset-4 focus-within:outline-gray-500`}
            >
              <input
                type="radio"
                name="location"
                value={filterValue}
                onChange={() => filterByLocation(filterValue)}
                className="appearance-none focus-visible:outline-none"
              />
              {filterValue}
            </label>
          ))}
        </div>
      </div>
    </>
  );
};

export default LocationFilter;
