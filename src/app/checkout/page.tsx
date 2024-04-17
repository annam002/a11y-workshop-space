import { spaceShips } from "@/api/spaceShips";
import Checkout from "@/components/checkout/checkout";
import { Metadata } from "playwright/test";

export const metadata: Metadata = {
  title: "Hexaspace Checkout",
};

export default async function CheckoutPage() {
  const ships = await spaceShips();
  return (
    <>
      <Checkout ships={ships} />
    </>
  );
}
