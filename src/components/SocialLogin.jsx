import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";

const SocialLogin = () => {

    const { user, loginWithGoogle, loginWithGithub } = useContext(AuthContext);

    return (
        <div className="space-y-2 mb-14">
            <button onClick={loginWithGoogle} disabled={user} className="w-full flex justify-center items-center gap-1 py-2 text-[#403F3F] outline-none text-xs border border-[#403F3F] hover:text-blue-400 hover:border-blue-400 rounded-lg">
                <FaGoogle />
                <span>Login with Google</span>
            </button>
            <button onClick={loginWithGithub} disabled={user} className="w-full flex justify-center items-center gap-1 py-2 text-[#403F3F] outline-none text-xs border border-[#403F3F] hover:text-blue-400 hover:border-blue-400 rounded-lg">
                <FaGithub />
                <span>Login with Github</span>
            </button>
        </div>
    );
};

export default SocialLogin;