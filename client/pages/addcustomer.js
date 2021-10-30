import AddCustomers from "../components/AddCustomers";
import Header from "../components/Header";
export default function addCustomers() {
  return (
    <div style={{ display: "flex" }}>
      <Header />
      <AddCustomers />
    </div>
  );
}
