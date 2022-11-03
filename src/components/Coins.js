import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((resp) => resp.json());

const Coins = () => {
  const { data } = useSWR(
    "https://api2.binance.com/api/v3/ticker/24hr",
    fetcher,
    {
      suspense: true,
    }
  );

  return (
    <div>
      {data?.map((coin) => (
        <h1>{coin.lastPrice}</h1>
      ))}
    </div>
  );
};

export default Coins;
