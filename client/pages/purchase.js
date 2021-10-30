import React from 'react'
import Header from '../components/Header';
import Purchase from '../components/Purchase';

function purchase({purchaseitems}) {
    return (
        <div style={{ display: "flex" }}>
            <Header />
            <Purchase purchaseitems={purchaseitems}/>
        </div>
    )
}
export const getStaticProps = async () => {
    const res = await fetch("http://localhost:8080/purchases");
    const data = await res.json();
  
    return {
      props: { purchaseitems: data },
    };
  };
export default purchase
