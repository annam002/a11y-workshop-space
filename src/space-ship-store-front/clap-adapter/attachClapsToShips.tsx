import { SpaceShip } from "../domain/space-ship";
import { Claps } from "./claps";

export const attachClapsToShips = ({claps, ships}: {claps: Claps, ships: SpaceShip[]}) =>
  ships.map((ship) => (
    {...ship, claps: claps[ship.id] ?? 0 }
  ))