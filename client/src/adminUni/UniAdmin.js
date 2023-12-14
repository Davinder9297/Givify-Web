// import Header from './Header';
//  import {GoOrganization} from 'react-icons/go';

// import Sidebar from "../Sidebar";
import SidebarUni from "./SidebarUni";
import updateProfileNGO from "../UpdateProfileNGO";
// import NGODashboard from "../NGODashboard";

// import { Link } from "react-router-dom";
// import NgoPage from "./NgoPage";


export default function UniAdmin() {
    return (<>
        {/* <Header/> */}
        <div className="flex w-full">

            <SidebarUni/>
            {/* <updateProfileNGO/> */}
            {/* <NGODashboard/> */}
        </div>


    </>)
}