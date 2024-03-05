import ProductView from "@/views/product";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/swr/fetcher";

const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [products, setProducts] = useState([]);
  const { push } = useRouter();

  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, []);

  const { data, error, isLoading } = useSWR("/api/product", fetcher);

  return (
    <>
      <ProductView products={isLoading ? [] : data.data} />
    </>
  );
};

export default ProductPage;
