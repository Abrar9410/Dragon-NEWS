import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Loading from "../components/Loading";


const Login = () => {

    const {user, loading, loginWithEmailAndPassword} = useContext(AuthContext);
    
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        loginWithEmailAndPassword(email, password);
    }

    return (
        <div className="bg-base-200 pb-8">
            <nav className="w-11/12 mx-auto py-6">
                <Navbar></Navbar>
            </nav>
            <div className="w-11/12 md:w-1/2 mx-auto border border-base-200 p-8 sm:p-12 md:p-16 lg:p-20 bg-white rounded-md my-4">
                <h2 className="text-center text-4xl font-bold">Login to Your Account</h2>
                <hr className="my-12"/>
                <form onSubmit={handleLogin} className="px-5 flex flex-col gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="tex-xl font-semibold">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="tex-xl font-semibold">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control gap-4">
                        <button className="btn btn-primary">Login</button>
                        <p className="text-center">Don't Have an Account? <Link to="/register" className="text-red-500">Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;