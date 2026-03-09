import Card from "./Card";

const Research = () => {

    return (
        <section id="research" className="w-full flex justify-center items-center bg-white backdrop-blur-lg text-cyan-800 py-12 h-auto border border-orange-300">
            
            <div className="container md:mx-12 my-10 px-6 flex flex-col items-center justify-center gap-6">
                <h1 className="text-4xl font-bold mb-6">Research and Publications</h1>
                <Card imageUrl="/images/social_networks.jpg"
                    title="An Experimental Comparison of the Effect of Text Preprocessing for Sentiment Analysis Using Ensemble Model"
                    company="Responsible Artificial Intelligence. ICRAI 2024. Lecture Notes in Networks and Systems, vol 1504. Springer, Singapore."
                    duration="11/2025"
                    description="Ebbi, H.B., Vasanwala, M.T.S., Joseph, S. (2025)."
                    link="https://doi.org/10.1007/978-981-96-8441-0_19" />
            </div>
        </section>
    );
}

export default Research;
