"use client";

import { useState } from "react";
import { Rates } from "./rates";
import { DEFAULT_NUM_OF_MONTH, monthlyRate, SpaceShip } from "@/api/spaceShips";
import { isShipInCart } from "@/api/shoppingCart";

export const Ship = ({
  ship,
  addToCart,
}: {
  ship: SpaceShip;
  addToCart: (shipId: string) => void;
}) => {
  const [numberOfRates, setNumberOfRates] = useState(DEFAULT_NUM_OF_MONTH);

  const availabilityClass =
    ship.inStock > 0
      ? ship.inStock > 5
        ? "bg-green-500"
        : "bg-yellow-500"
      : "bg-red-500";

  const availabilityLabel =
    ship.inStock > 0
      ? ship.inStock > 5
        ? "In Stock"
        : "Limited Stock"
      : "Out of Stock";

  return (
    <>
      <section
        aria-labelledby={`ship-${ship.id}`}
        className="flex flex-col items-center gap-4 rounded bg-gray-100 p-6 text-gray-800 shadow-sm"
      >
        <h2 className="text-2xl" id={`ship-${ship.id}`}>
          {ship.name}
        </h2>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="w-full max-w-48 lg:max-w-60">
            <img
              src={`/images${ship.image}`}
              className="m-4 rounded object-scale-down"
              alt=""
            />
          </div>
          <div className="m-4 flex flex-col gap-4">
            <dl
              aria-label="Properties"
              aria-describedby={`ship-${ship.id}`}
              className="flex flex-col gap-2"
            >
              <dd className="font-bold">Location:</dd>
              <dt>{ship.location}</dt>
              {ship.mileage && (
                <>
                  <dd className="font-bold">Mileage (ly):</dd>:{" "}
                  <dt data-testid="ship-mileage"> {ship.mileage}</dt>
                </>
              )}
              <dd className="font-bold">Availability:</dd>
              <dt className="flex flex-wrap items-center gap-0.5">
                <span
                  className={
                    "inline-block h-[24px] w-[24px] rounded-3xl border border-gray-500 " +
                    availabilityClass
                  }
                />
                {availabilityLabel}
              </dt>
              <dd className="font-bold">Price:</dd>
              <dt data-testid="ship-price">{ship.price}</dt>
              <dd className="font-bold" id={`monthlyRate-${ship.id}`}>Monthly Rate:</dd>
              <dt>{monthlyRate(ship, numberOfRates).toFixed(2)}</dt>
            </dl>
            <div>
              <Rates
                describedby={`ship-${ship.id} monthlyRate-${ship.id}`}
                numberOfRates={numberOfRates}
                setNumberOfRates={setNumberOfRates}
              />
              <div>Pay in {numberOfRates} Rates</div>
            </div>
            <div className="flex justify-end">
              <button
                disabled={isShipInCart(ship.id)}
                onClick={() => addToCart(ship.id)}
                aria-label={`Add ${ship.name} to cart`}
              >
                <img
                  src={
                    isShipInCart(ship.id)
                      ? "/images/cartAdded.png"
                      : "/images/cart.png"
                  }
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
