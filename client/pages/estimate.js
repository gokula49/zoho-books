import React from 'react'
import Estimate from '../components/Estimate';
import Header from '../components/Header';

function estimate({estimatesitems}) {
    return (
        <div style={{ display: "flex" }}>
            <Header />
            <Estimate estimatesitems={estimatesitems}/>
        </div>
    )
}
export const getStaticProps = async () => {
    const res = await fetch("http://localhost:8080/estimates");
    const data = await res.json();
  
    return {
      props: { estimatesitems: data },
    };
  };

export default estimate
