import Card from "./Card";

const Academics = () => {

    return (
        <section id="academics" className="w-full flex justify-center items-center bg-white backdrop-blur-lg text-cyan-800 py-12 h-auto border border-orange-300">

            <div className="container md:mx-12 my-10 px-6 flex flex-col items-center justify-center gap-6">
                <h1 className="text-4xl font-bold mb-6">Academics</h1>
                <Card imageUrl="/images/Wales-TSD-logo.jpg"
                    title="PHD COMPUTING"
                    company="UNIVERSITY OF WALES TRINITY SAINT DAVID"
                    duration="02/2025 – CURRENT"
                    description="• Deep Learning-Based Synthesis of 360° Virtual Reality Photorealistic Scenes from Monocular 2D Videos"
                    link="https://www.uwtsd.ac.uk/" />

                <Card imageUrl="/images/Wales-TSD-logo.jpg"
                    title="MASTER OF SCIENCE IN SOFTWARE ENGINEERING AND ARTIFICIAL INTELLIGENCE"
                    company="UNIVERSITY OF WALES TRINITY SAINT DAVID"
                    duration="10/2024"
                    description="• Dissertation in Deep Learning Model for 12 Lead ECG classification 
                                • Coursework Cloud Computing Docker Compose Deployment of Django/React application in AWS. 
                                • Coursework in AI Meta Ensemble Deep Learning Model for Sentiment Analysis 
                                • Coursework in Software Engineering Agile Plan Conception and Design 
                                • Grade: Distinction"
                    link="https://www.uwtsd.ac.uk/" />

                <Card imageUrl="/images/hope-uni-logo.jpg"
                    title="BACHELOR OF SCIENCE IN COMPUTER SCIENCE"
                    company="LIVERPOOL HOPE UNIVERSITY"
                    duration="07/2023"
                    description="• Dissertation in Machine Learning: Bellman Ford and Dijkstra Comparison 
                                • Coursework in 3D Unity C# 
                                • Coursework in Machine Learning 
                                • Coursework in MERN stack 
                                • Coursework in LUA 
                                • Grade : 1st Class A+"
                    link="https://www.hope.ac.uk/" />
            </div>
        </section>
    );
}

export default Academics;
