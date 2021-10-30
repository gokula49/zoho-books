import Form from "../components/Form";
import Header from "../components/Header";

export default function newEstimate({ customers, items }) {
  return (
    <div>
      <Header />
      <Form
        title="New Estimate"
        additional="Estimates"
        customers={customers}
        items={items}
      />
    </div>
  );
}

export const getStaticProps = async () => {
  const customersData = await fetch("http://localhost:8080/customers");
  const customersJSON = await customersData.json();

  const itemsData = await fetch("http://localhost:8080/items");
  const itemsJSON = await itemsData.json();

  return {
    props: { customers: customersJSON, items: itemsJSON },
  };
};
