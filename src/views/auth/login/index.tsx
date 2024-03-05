import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./Login.module.scss";

const LoginViews = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/product");
  };

  return (
    <div className={styles.login}>
      <h1 className="text-4xl font-bold">Login Page</h1>
      <button onClick={() => handleLogin()}>Login</button>
      <p style={{ color: "red", border: "1px solid red", borderRadius: "10px" }}>
        Belum punya akun? registrasi <Link href={"/auth/register"}>disini</Link>
      </p>
    </div>
  );
};

export default LoginViews;
