export const Rates = ({
  numberOfRates,
  setNumberOfRates,
}: {
  numberOfRates: number;
  setNumberOfRates: (rates: number) => void;
}) => (
  <input
    data-testid="number-of-rates"
    type="range"
    id="rates"
    name="rates"
    min="2"
    max="24"
    value={numberOfRates}
    onChange={(e) => setNumberOfRates(Number(e.target.value))}
  />
);
