import { useRouter } from "next/router";

export default function Blog() {
  const router = useRouter();
  const navigateHome = () =>{
      router.replace('/')
  }

  console.log(router);
  

  return (
    <>
      <h1>Welcome to my blog{router.asPath}</h1>
      <button onClick={navigateHome}>Go to home</button>
    </>
  );
}
