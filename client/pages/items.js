import Header from "../components/Header";
import Itemtable from "../components/Itemtable";
export default function Home({ items }) {
  return (
    <div>
      <Header />
      <Itemtable items={items} />
    </div>
  );
}
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:8080/items");
  const data = await res.json();

  return {
    props: { items: data },
  };
};
