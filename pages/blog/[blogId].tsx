import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async (context) => {
   return {
    props: {
      myNumber: Math.random(),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { blogId: "1" },
      },
      {
        params: { blogId: "2" },
      },
    ],
    fallback: true,
  };
};

export default function IndividualBlog(props) {
  const router = useRouter();
  console.log(router);

  if(router.isFallback){
      return <h1>Loading .....</h1>
  }

  return <h1>These are individual blogs {props.myNumber}</h1>;
}
