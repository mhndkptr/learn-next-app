import { useRouter } from "next/router";

const DetailProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  //   console.log(router);
  // query mengikuti nama file di dalam kurung siku
  return (
    <div>
      <h1>Detail Product</h1>
      <p>Product : {id}</p>
    </div>
  );
};

export default DetailProductPage;
