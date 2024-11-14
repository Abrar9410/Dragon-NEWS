import moment from "moment";
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 py-8">
            <div className="pt-4">
                <img src={logo} alt="" />
            </div>
            <h2 className="text-gray-400">Journalism Without Fear or Favour</h2>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;