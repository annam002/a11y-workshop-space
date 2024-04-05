import { getSpaceShips } from "@/api/getSpaceShips";
import Checkout from "@/components/checkout/checkout";

export default async function CheckoutPage() {
  const ships = await getSpaceShips();
  return (
    <>
      <Checkout ships={ships} />
    </>
  );
}
