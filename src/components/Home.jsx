const Home = (props) => {
    const { name, title, profilePhoto } = props;

    return (
        // Cleaned up the section classes: removed the broken 'h-' and fixed 'w-full'
        <section id="home" className="w-full bg-gray-900 text-white flex items-center py-12 border border-orange-300">
            {/* 1. flex-col: Stack name and photo on mobile
                2. md:flex-row: Side-by-side on screens >= 768px
                3. items-center: Keeps everything vertically centered
            */}
            <div className="container mx-auto px-6 pt-12 flex flex-col md:flex-row items-center">
                
                {/* Text Content: Center text on mobile, left-align on desktop */}
                <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
                    <h1 className="text-4xl font-bold mb-4">{name}</h1>
                    <h2 className="text-2xl text-gray-400 mb-6">{title}</h2>
                </div>

                {/* Image Content: Center on mobile, right-align on desktop */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    <img 
                        src={profilePhoto} 
                        alt={`${name}'s profile`} 
                        className="w-64 h-64 rounded-full object-cover border-4 border-gray-700" 
                    />
                </div>
            </div>
        </section>
    );
};

export default Home;