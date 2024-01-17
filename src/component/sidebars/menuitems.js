
import { RiUserShared2Line } from "react-icons/ri";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiLogOutCircle } from "react-icons/bi";
import { LuLayoutDashboard } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { SiOpenstreetmap } from "react-icons/si";

export const menuItems = [
    { name: 'Dashboard', path: '/', icon: <LuLayoutDashboard fontSize={25} color='gray' /> },
    { name: 'Users', path: '/users', icon: <RiUserShared2Line fontSize={25} color='gray' /> },
    { name: 'Products', path: '/products', icon: <MdProductionQuantityLimits fontSize={25} color='gray' /> },
    { name: 'Map View', path: '/mapview', icon: <SiOpenstreetmap fontSize={25} color='gray' /> },
    { name: 'Calender', path: '/calender', icon: <SlCalender fontSize={25} color='gray' /> },
    { name: 'Profile', path: '/profile', icon: <CgProfile fontSize={25} color='gray' /> },
    
    // { name: 'Settings', path: '/products', icon: <MdProductionQuantityLimits fontSize={25} color='gray' /> },
    // { name: 'Application', path: '/users', icon: <RiUserShared2Line fontSize={25} color='gray' /> },
    // { name: 'List', path: '/products', icon: <MdProductionQuantityLimits fontSize={25} color='gray' /> },
    // { name: 'Profile', path: '/users', icon: <RiUserShared2Line fontSize={25} color='gray' /> },
    
    { name: 'Log Out', path: '/auth/login', icon: <BiLogOutCircle fontSize={25} color='gray' /> },

]