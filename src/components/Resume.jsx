import Card from "./Card";

const Resume = () => {

     return (
        <section id="resume" className="w-full flex justify-center items-center bg-white backdrop-blur-lg text-cyan-800 py-12 h-auto border border-orange-300">
            
            <div className="container md:mx-12 my-10 px-6 flex flex-col items-center justify-center gap-6">
                <h1 className="text-4xl font-bold mb-6">Resume CV</h1>
                <Card imageUrl="/images/profileImage.jpg"
                    title="Resume CV" size="large"
                    company=""
                    duration=""
                    description="Download My Resume in PDF Format"
                    link="public/resume/Hammada Ballali CV UK SE.pdf" />
            </div>

        </section>
    );
}
export default Resume;
