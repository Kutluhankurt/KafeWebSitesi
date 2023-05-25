import axios from "axios";
import Head from "next/head";
import Home from "./Home";
import Input from "@/components/Input";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Index({ categoryList, productList }) {

  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true" />
      
    </Head>
    <Home categoryList={categoryList} productList={productList} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
  
  
  const product = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/products`
  );
  
  return {
    props: {
      categoryList: res.data ? res.data : [],
      productList: product.data ? product.data : [],
    },
  };
};
