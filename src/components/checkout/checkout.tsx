"use client";

import { SpaceShip } from "@/api/getSpaceShips";
import { useState } from "react";
import { getShipsInCart } from "@/api/shoppingCart";
import Navigation from "@/components/navigation";
import { Cart } from "@/components/checkout/cart";
import { InvoiceForm } from "@/components/checkout/invoice-form";

const Checkout = ({ ships }: { ships: SpaceShip[] }) => {
  const [shipsInCart] = useState(getShipsInCart(ships));

  return (
    <>
      <div className="my-8 flex w-full flex-col items-center gap-12">
        <Navigation
          selectedPage={"checkout"}
          numItemsInCart={shipsInCart.length}
        />
        <div className="text-3xl">Checkout</div>
        <div className="w-max-[750px] flex gap-8">
          <Cart ships={shipsInCart} />
          <InvoiceForm />
        </div>
      </div>
    </>
  );
};

export default Checkout;
