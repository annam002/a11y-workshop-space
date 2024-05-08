export const Rates = ({
  numberOfRates,
  setNumberOfRates,
  describedby,
}: {
  numberOfRates: number;
  setNumberOfRates: (rates: number) => void;
  describedby: string;
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
    aria-label="Rates"
    aria-describedby={describedby}
  />
);
