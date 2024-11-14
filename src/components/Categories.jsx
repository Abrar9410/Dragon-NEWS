import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const Categories = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category))
    }, [])

    return (
        <>
            <div className="flex flex-col justify-center items-center gap-2">
                {
                    categories.map(category=>
                        <NavLink key={category.category_id} to={`/category/${category.category_id}`}
                            className={({ isActive }) => isActive ? "text-black font-semibold bg-base-300 w-full text-center text-xl py-2 rounded-md" : "text-gray-400 w-full text-center text-xl py-2"}
                        >
                            {category.category_name}
                        </NavLink>
                    )
                }
            </div>
        </>
    );
};

export default Categories;