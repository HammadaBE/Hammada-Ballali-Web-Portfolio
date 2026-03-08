const Home = (props) => {
    const { name, title, profilePhoto} = props;

    return (
        <section id="home" className="w-full bg-gray-900 text-white flex items-center py-12 h- border border-orange-300">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <h1 className="text-4xl font-bold mb-4">{name}</h1>
                    <h2 className="text-2xl text-gray-400 mb-6">{title}</h2>
                                    </div>
                <div className="w-full md:w-1/2 flex justify-end mr-4 mt-12" >
                    <img src={profilePhoto} alt={`${name}'s profile`} className="w-64 h-64 rounded-full object-cover border-4 border-gray-700" />
                </div>
            </div>
        </section>
    );
};

export default Home;