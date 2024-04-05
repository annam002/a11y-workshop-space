import { spaceShips } from "@/api/spaceShips";
import FilteredShipCatalogue from "@/components/filtered-ship-catalogue";

export default async function Ships() {
  const ships = await spaceShips();
  return (
    <>
      <FilteredShipCatalogue ships={ships} selectedPage={"destroyer"} />
    </>
  );
}
