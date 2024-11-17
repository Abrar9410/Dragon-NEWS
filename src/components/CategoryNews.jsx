import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";


const CategoryNews = () => {

    const {data} = useLoaderData();

    return (
        <div className="flex flex-col gap-4">
            {
                data.map(news=>(
                    <NewsCard key={news._id} news={news}></NewsCard>
                ))
            }
        </div>
    );
};

export default CategoryNews;