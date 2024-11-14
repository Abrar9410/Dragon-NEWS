import { Outlet } from "react-router-dom";
import Categories from "../components/categories";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import SocialLogin from "../components/SocialLogin";
import FindUs from "../components/FindUs";


const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className="w-11/12 mx-auto my-6">
                <Navbar></Navbar>
            </nav>
            <main className="w-11/12 mx-auto grid md:grid-cols-12 gap-6 my-12">
                <aside className="md:col-span-3">
                    <h3 className="text-xl font-semibold pb-8">All Categories</h3>
                    <Categories></Categories>
                </aside>
                <section className="md:col-span-6">
                    <h3 className="text-xl font-semibold pb-8">Dragon News Home</h3>
                    <Outlet></Outlet>
                </section>
                <aside className="md:col-span-3">
                    <h3 className="text-xl font-bold pb-8">Login With</h3>
                    <SocialLogin></SocialLogin>
                    <h3 className="text-xl font-semibold pb-8">Find Us On</h3>
                    <FindUs></FindUs>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;