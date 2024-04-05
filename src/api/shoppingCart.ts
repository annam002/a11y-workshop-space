import { SpaceShip } from "@/api/spaceShips";

const cart = [] as string[];

export const addToCart = (shipId: string) => {
  if (cart.indexOf(shipId) === -1) {
    cart.push(shipId);
  }
};

export const getNumItemsInCart = () => cart.length;

export const isShipInCart = (shipId: string) => cart.indexOf(shipId) !== -1;

export const getShipsInCart = (allShips: SpaceShip[]) => {
  return allShips.filter((ship) => isShipInCart(ship.id));
};
