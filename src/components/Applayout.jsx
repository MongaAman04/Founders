import { Outlet } from "react-router-dom"
import { Header } from "./header"
import { Footer } from "./pages/footer"

export const Applayout = ()=>{
    return (
        <>
        {/* <Header/> */}
        <Outlet/>
        <Footer/>
        </>
    )
}