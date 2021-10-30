import React from "react";
import Header from "../components/Header";
import Sales from "../components/Sales";

function sales({ salesitems }) {
  return (
    <div style={{ display: "flex" }}>
      <Header />
      <Sales salesitems={salesitems} />
    </div>
  );
}

export default sales;
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:8080/sales");
  const data = await res.json();

  return {
    props: { salesitems: data },
  };
};
