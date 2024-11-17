import { useContext } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";


const Register = () => {

    const {user, createAccount} = useContext(AuthContext);
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createAccount(email, password);
    }

    return (
        <div className="bg-base-200 pb-8">
            <nav className="w-11/12 mx-auto py-6">
                <Navbar></Navbar>
            </nav>
            <div className="w-11/12 md:w-1/2 mx-auto border border-base-200 p-8 sm:p-12 md:p-16 lg:p-20 bg-white rounded-md my-4">
                <h2 className="text-center text-4xl font-bold">Register Your Account</h2>
                <hr className="my-12" />
                <form onSubmit={handleRegister} className="px-5 flex flex-col gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="tex-xl font-semibold">Name</span>
                        </label>
                        <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                    </div>
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
                    </div>
                    <div className="form-control gap-4 mt-4">
                        <button className="btn btn-primary">Register</button>
                        <p className="text-center">Already Have an Account? <Link to="/login" className="text-red-500">Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;