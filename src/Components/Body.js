// import { Header } from "./Header"
import { Outlet } from "react-router-dom"
// import MainContainer from "./MainContainer"
import { SideBar } from "./SideBar"

export const Body=()=>{
    return(
        <div className="d-flex">
             <SideBar/>
            <Outlet/>

        
        </div>
    )
}