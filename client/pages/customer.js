import React from 'react'
import Customer from '../components/Customer';
import Header from '../components/Header';
function customer({customeritems}) {
    return (
        <div style={{ display: "flex" }}>
            <Header />
            <Customer customeritems={customeritems}/>
        </div>
    )
}
export const getStaticProps = async () => {
    const res = await fetch("http://localhost:8080/customers");
    const data = await res.json();
  
    return {
      props: { customeritems: data },
    };
  };
export default customer
