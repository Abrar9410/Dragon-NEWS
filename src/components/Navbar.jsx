import { NavLink } from "react-router-dom";
import userImg from "../assets/user.png"
import navLogo from "../assets/nav-logo.png"


const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="">
                <img src={navLogo} alt="logo" />
            </div>
            <div className="text-gray-400 space-x-4">
                <NavLink to="/" className={({isActive})=> isActive? "text-black font-bold": ""}>Home</NavLink>
                <NavLink to="/career" className={({isActive})=> isActive? "text-black font-bold": ""}>Career</NavLink>
                <NavLink to="/about" className={({isActive})=> isActive? "text-black font-bold": ""}>About</NavLink>
            </div>
            <div className="flex justify-end items-center gap-2">
                <img src={userImg} alt="empty_user" />
                <button className="bg-[#403F3F] text-base-100 font-semibold text-xl px-9 py-2">Login</button>
            </div>
        </div>
    );
};

export default Navbar;