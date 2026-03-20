import Card from "./Card";

const Projects = () => {

    const projects = [
        {
            imageUrl: "/images/VSDemo.png",
            title: "VISIONSCOPES",
            duration: "06/2025 – In development",
            link: "https://github.com/HammadaBE/VisionScopes-Demo",
            description: `• React · TypeScript · Tailwind CSS · Django · PostgreSQL · Docker · REST API · JWT Authentication
• A full-stack web application designed to enable users to upload monocular video footage of closed spaces and retrieve AI-generated 3D view synthesis through a machine learning pipeline.
• Engineered a React/TypeScript/Tailwind frontend with a Django REST Framework backend, implementing JWT-based user authentication and a media submission system (notes, designed to scale to video uploads)
• Configured a PostgreSQL database with a fully containerised architecture using Docker Compose, enabling one-command local.
• Planned full cloud deployment on Azure/AWS with Nginx as a reverse proxy once the ML model integration is complete
• Designed with scalability in mind: the submission pipeline will feed into a monocular depth estimation and 3D view synthesis ML model.
• Fully testable locally — requires only Docker Desktop; setup and launch instructions are provided in the repository's README.md`
        },
        {
            imageUrl: "/images/RentACarAndroid.jpg",
            title: "RENT A CAR APP ANDROID",
            duration: "06/2025 – In development",
            link: "https://github.com/HammadaBE/RentACarAndroidApp",
            description: `• Kotlin · Android SDK · Gradle: A native Android application allowing users to browse available vehicles and book a rental for a selected date.
• Built entirely in Kotlin following Android development best practices
• Implemented a car selection and date booking flow across multiple screens
• Managed UI state and navigation using Android's activity/fragment lifecycle`
        }
    ];

    return (
        <section id="projects" className="w-full flex justify-center items-center bg-white backdrop-blur-lg text-cyan-800 py-12 h-auto border border-orange-300">
            <div className="container md:mx-12 my-10 px-6 flex flex-col items-center justify-center gap-6">
                <h1 className="text-4xl font-bold mb-6">Projects</h1>
                {projects.map((project, index) => (
                    <Card
                        key={index}
                        imageUrl={project.imageUrl}
                        title={project.title}
                        duration={project.duration}
                        description={project.description}
                        link={project.link}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;
