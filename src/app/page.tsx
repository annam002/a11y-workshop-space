import {getSpaceShips} from "@/bounded_contexts/space-ship-store-front/api-adapter/getSpaceShips";
import {getClaps} from "@/bounded_contexts/space-ship-store-front/api-adapter/getClaps";
import {attachClapsToShips} from "@/bounded_contexts/space-ship-store-front/clap-adapter/attachClapsToShips";
import Navigation from "@/bounded_contexts/space-ship-store-front/ui-adapter/navigation";
import FilteredShipCatalogue from "@/bounded_contexts/space-ship-store-front/ui-adapter/filtered-ship-catalogue";

export default async function Home() {
    const ships = await getSpaceShips();
    const claps = await getClaps();
    const shipsWithClaps = attachClapsToShips({claps, ships});

    return (
      <div className="w-full flex flex-col items-center my-8 gap-12">
          <Navigation selectedPage={"all"}/>
          <div className="text-3xl mx-auto">Welcome to Hexa Space Inc.</div>
          <FilteredShipCatalogue shipsWithClaps={shipsWithClaps}/>
      </div>
    )
  }
