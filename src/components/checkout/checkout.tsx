"use client";

import { SpaceShip } from "@/api/spaceShips";
import { useState } from "react";
import { getShipsInCart } from "@/api/shoppingCart";
import Navigation from "@/components/navigation";
import { Cart } from "@/components/checkout/cart";
import { InvoiceForm } from "@/components/checkout/invoice-form";

const Checkout = ({ ships }: { ships: SpaceShip[] }) => {
  const [shipsInCart] = useState(getShipsInCart(ships));

  return (
    <>
      <div className="flex w-full flex-col items-center gap-12 py-8 sm:px-8">
        <header className="flex w-full flex-col items-center gap-12">
          <Navigation
            selectedPage={"checkout"}
            numItemsInCart={shipsInCart.length}
          />
          <h1 className="text-3xl">Checkout</h1>
        </header>

        <main className="w-max-[1024px] flex flex-col gap-8 md:flex-row">
          <Cart ships={shipsInCart} />
          {shipsInCart.length > 0 && <InvoiceForm />}
        </main>
      </div>
    </>
  );
};

export default Checkout;
