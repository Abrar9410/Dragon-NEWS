

const NewsCard = ({news}) => {
    const {} = news;
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
            {/* Header with Author Info */}
            <div className="flex items-center bg-base-200 p-4">
                <img
                    src={news.author.img}
                    alt="Author"
                    className="w-10 h-10 rounded-full border border-gray-300"
                />
                <div className="ml-3">
                    <p className="font-semibold text-sm">{news.author.name}</p>
                    <p className="text-xs text-gray-500">
                        {new Date(news.author.published_date).toLocaleDateString()}
                    </p>
                </div>
            </div>

            {/* Thumbnail Image */}
            <div className="p-4">
                <img
                    src={news.thumbnail_url}
                    alt="Thumbnail"
                    className="w-full h-[35vh]"
                />
            </div>

            {/* Card Body */}
            <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800">{news.title}</h2>
                <p className="text-sm text-gray-600 mt-2">
                    {news.details.substring(0, 120)}...
                </p>
                <button className="text-yellow-500 text-sm font-semibold hover:underline outline-none">
                    Read More
                </button>
            </div>

            {/* Footer with Rating, Views, and Read More */}
            <div className="p-4 flex justify-between items-center border-t border-gray-200">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center text-sm">
                        <span className="text-yellow-500 font-bold">{news.rating.number}</span>
                        <span className="ml-1 text-gray-500">({news.rating.badge})</span>
                    </div>
                    <div className="text-gray-500 text-sm">Views: {news.total_view}</div>
                </div>
                
            </div>
        </div>
    );    
};

export default NewsCard;