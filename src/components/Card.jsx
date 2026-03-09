import { Button } from "./ui";

const Card = (props) => {
    const { title, company, duration, description, imageUrl, link } = props;

    const renderDescription = () => {
        if (!description?.includes('•')) {
            return <p className="text-gray-700 mb-4">{description}</p>;
        }

        const items = description.split('•').map(s => s.trim()).filter(Boolean);
        const hasIntro = !description.trim().startsWith('•');
        const intro = hasIntro ? items.shift() : null;

        return (
            <div className="text-gray-700 mb-4">
                {intro && <p className="mb-2">{intro}</p>}
                <ul className="list-disc list-outside pl-5">
                    {items.map((item, index) => (
                        <li key={index} className="mb-1">{item}</li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <div className="md:w-1/2 bg-white rounded-lg shadow-md overflow-hidden whitespace-pre-line">
            <img src={imageUrl} alt={title} className="w-full aspect-video object-contain" />
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{company}</p>
                <p className="text-gray-500 mb-4">{duration}</p>
                {renderDescription()}
                <Button variant="outline" size="sm" asChild>
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                    Learn More
                </a>
                </Button>
            </div>
        </div>
    );
};

export default Card;