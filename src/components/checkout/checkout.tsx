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
      <div className="my-8 flex w-full flex-col items-center gap-20">
        <Navigation
          selectedPage={"checkout"}
          numItemsInCart={shipsInCart.length}
        />
        <div className="w-max-[750px] flex flex-col gap-12">
          <Cart ships={shipsInCart} />
          <InvoiceForm />
        </div>
      </div>
    </>
  );
};

export default Checkout;
