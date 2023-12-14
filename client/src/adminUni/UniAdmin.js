// import Header from './Header';
//  import {GoOrganization} from 'react-icons/go';

// import Sidebar from "../Sidebar";
import SidebarUni from "./SidebarUni";
import UniDashboard from "../adminUni/UniDashboard";
// import NGODashboard from "../NGODashboard";

// import { Link } from "react-router-dom";
// import NgoPage from "./NgoPage";


export default function UniAdmin() {
    return (<>
        {/* <Header/> */}
        <div className="flex w-full">

            <SidebarUni/>
            {/* <updateProfileNGO/> */}
            <UniDashboard/>
        </div>


    </>)
}