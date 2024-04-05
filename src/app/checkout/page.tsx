import { spaceShips } from "@/api/spaceShips";
import Checkout from "@/components/checkout/checkout";

export default async function CheckoutPage() {
  const ships = await spaceShips();
  return (
    <>
      <Checkout ships={ships} />
    </>
  );
}
