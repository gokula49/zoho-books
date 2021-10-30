import React from "react";
import Invoice from "../components/Invoice";
import Header from "../components/Header";
function Invoices({ invoices }) {
  return (
    <div style={{ display: "flex" }}>
      <Header />
      <Invoice invoices={invoices} />
    </div>
  );
}
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:8080/invoices");
  const data = await res.json();

  return {
    props: { invoices: data },
  };
};
export default Invoices;
