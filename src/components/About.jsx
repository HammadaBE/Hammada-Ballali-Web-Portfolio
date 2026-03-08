const About = (props) => {
    const {description} = props;
  return (
        <section id="about" className="w-full bg-cyan-white backdrop-blur-lg  text-cyan-800 flex items-center py-12 h-auto border border-orange-300 scroll-mt-20">
            <div className="container mx-auto px-6 flex flex-col items-center justify-center">  
                    <h1 className="text-4xl font-bold mb-6">About Me</h1>
                    <p className="text-xl max-w-2xl text-center text-cyan-800">{description}</p>
            </div>
        </section>
  );
}

export default About;