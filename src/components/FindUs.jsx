import FBLogo from "../assets/fb.png"
import InstagramLogo from "../assets/instagram.png"
import TwitterLogo from "../assets/twitter.png"

const FindUs = () => {
    return (
        <div className="join join-vertical flex flex-col rounded-sm *:w-full">
            <button className="join-item px-2 py-4 text-gray-400 flex justify-start items-center gap-2 border border-gray-400">
                <img src={FBLogo} alt="fb_logo" />
                <span>Facebook</span>
            </button>
            <button className="join-item px-2 py-4 text-gray-400 flex justify-start items-center gap-2 border border-gray-400">
                <img src={InstagramLogo} alt="instagram_logo" />
                <span>Instagram</span>
            </button>
            <button className="join-item px-2 py-4 text-gray-400 flex justify-start items-center gap-2 border border-gray-400">
                <img src={TwitterLogo} alt="twitter_logo" />
                <span>Twitter</span>
            </button>
        </div>
    );
};

export default FindUs;