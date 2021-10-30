import dynamic from 'next/dynamic';
import Header from "../components/Header";



const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/dashboard/BankingChart'),
  { ssr: false }
)

function Home() {
  return (
    <div style={{display:"flex"}} >
      <Header />



    <div style={{display:"flex",flexDirection:"column" , border:"solid 1px lightgrey", margin:"100px 50px 50px 70px" , borderRadius:"20px"}} >
    <h3 style={{margin:"40px 0px 0px 90px",fontWeight:"500",fontSize:"1.9rem"}}>Banking Overview</h3>
    
    {/* <hr style={{color:"red", backgroundColor:"green"}}/> */}


        <div style={{display:"flex"}} >
            <img style={{width:"100px",margin:"80px 0px 90px 90px",alignItems:"center",justifyContent:"center", backgroundColor:"lightgrey",borderRadius:"10px",padding:"20px"}} src="/hand-holding-usd-solid.svg"/>
            <div style={{display:"flex" , flexDirection:"column"}} >
                <p style={{margin:"90px 10px 10px 10px" ,fontSize:"larger"}} >Cash in Hand</p>
                <h3 style={{margin:"10px 10px"}} >₹0.00</h3>
            </div>
        </div>

        
        <DynamicComponentWithNoSSR />
    </div>
     
    </div>
  )
}

export default Home
  

