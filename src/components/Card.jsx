
const Card = (props) => {
    const { title, company, duration, description, imageUrl, link } = props;

    return (
        <div className="w-1/2 bg-white rounded-lg shadow-md overflow-hidden whitespace-pre-line">
            <img src={imageUrl} alt={title} className="w-full aspect-video object-contain" />
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{company}</p>
                <p className="text-gray-500 mb-4">{duration}</p>
                <p className="text-gray-700 mb-4">{description}</p>
                <a href={link} className="text-blue-500 hover:text-blue-700">
                    Learn More
                </a>
            </div>
        </div>
    );
};

export default Card;