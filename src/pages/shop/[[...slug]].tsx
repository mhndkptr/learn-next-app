import { useRouter } from "next/router";

const ShopPage = () => {
  const { query } = useRouter();
  // query mengikuti nama file di dalam kurung siku
  return (
    <div>
      <h1>Shop Page</h1>
      <p>
        Shop : {query.slug ? query.slug[0] : ""} - {query.slug ? query.slug[1] : ""}
      </p>
    </div>
  );
};

export default ShopPage;
