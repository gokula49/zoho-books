import React from 'react'
import Header from '../components/Header';
import Vendor from '../components/Vendor';

function vendor({vendorsitems}) {
    return (
        <div style={{ display: "flex" }}>
            <Header />
            <Vendor vendorsitems={vendorsitems}/>
        </div>
    )
}
export const getStaticProps = async () => {
    const res = await fetch("http://localhost:8080/vendors");
    const data = await res.json();
  
    return {
      props: { vendorsitems: data },
    };
  };
export default vendor;
