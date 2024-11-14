import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className="flex items-center gap-1 p-2 bg-base-200">
            <p className="px-4 py-2 bg-[#D72050] text-base-100 text-xl">Latest</p>
            <Marquee pauseOnHover={true} speed={100} className="space-x-10 text-lg font-semibold">
                <Link to="/news" className="ml-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, aliquam.</Link>
                <Link to="/news" className="ml-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, aliquam.</Link>
                <Link to="/news" className="ml-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, aliquam.</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;