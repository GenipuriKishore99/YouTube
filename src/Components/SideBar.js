import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import MainContainer from "./MainContainer";
// import { toggleOpen } from "../utils/ShowHide";

export const SideBar=()=>{

    const isOpenToggle=useSelector((store)=>store.app.isOpen)

    if(!isOpenToggle) return null;

    
    return(
        <div className="shadow-lg">
            <h2>Subsciption</h2>
            <ul className="p-2 m-2 list-unstyled">
            <li>Home</li>
            <li>Crickets</li>
            <li>Holly</li>
            <li>Kids</li>
            </ul>
            <h2>Games</h2>
            <ul className="p-2 m-2 style-none list-unstyled">
                <li>Football</li>
                <li>Football</li>
                <li>Football</li>
                <li>Football</li>
                <li>Football</li>
            </ul>
            <h2>Kids</h2>
            <ul className=" list-unstyled p-2 m-2">
                <li>Childs</li>
                <li>Childs</li>
                <li>Childs</li>
                <li>Childs</li>
                <li>Childs</li>
            </ul>
            {/* <MainContainer/> */}
        </div>
    )
}