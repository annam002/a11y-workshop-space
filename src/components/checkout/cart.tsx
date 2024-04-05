"use client";

import { SpaceShip } from "@/api/getSpaceShips";
import { useState } from "react";

export const Cart = ({ ships }: { ships: SpaceShip[] }) => {
  const getTotalPrice = () => {
    if (ships.length === 0) {
      return 0;
    }
    return ships
      .map((ship) => ship.price)
      .reduce((previous, current) => previous + current);
  };

  const [totalPrice] = useState(getTotalPrice());

  return (
    <div className="flex w-full flex-col items-start gap-4">
      <div className="text-3xl">Ships in Cart</div>
      {ships.length === 0 && <div>Oh no! There are no items in the cart!</div>}
      {ships.length > 0 && (
        <div className="grid w-full grid-cols-2 grid-rows-2 justify-between gap-x-8 gap-y-4">
          {ships.map((ship) => (
            <>
              <span>{ship.name}</span>
              <span>{ship.price} Credits</span>
            </>
          ))}
          <span className="font-bold">Total</span>
          <span className="font-bold">{totalPrice} Credits</span>
        </div>
      )}
    </div>
  );
};
