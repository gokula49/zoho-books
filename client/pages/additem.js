import AddItem from "../components/AddItem";
import Header from "../components/Header";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Items</title>
      </Head>
      <div style={{ display: "flex" }}>
        <Header />
        <AddItem />
      </div>
    </>
  );
}
