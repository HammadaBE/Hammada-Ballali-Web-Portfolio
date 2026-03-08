import './index.css'
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import WorkExperience from './components/WorkExperience';

export default function App() {
  return (

    <div className="flex flex-col justify-center">
      <Header />
      <Home
        name="Hammada Ballali"
        title="Software Engineer"
        profilePhoto="images\profileImage.jpg"
      />
      <About
        description="Experienced IT professional and PhD candidate in Computer Vision with a strong foundation in machine learning and data analysis. Proficient in designing and implementing Python-based solutions, developing ML models, and optimizing workflows for data-driven applications. Skilled in leveraging Python libraries such as TensorFlow, PyTorch, and scikit-learn to build, train, and deploy models for predictive analytics, computer vision, and automation. Experienced in deploying applications on Windows and Ubuntu servers, managing AWS services, and integrating machine learning pipelines into cloud environments. Adept at automating processes using Python scripts and Docker, with hands-on experience in tools like Kafka and Kubernetes. Passionate about AI and machine learning, with a focus on advancing cutting-edge technologies in computer vision to deliver innovative and impactful solutions. I also enjoy working with the Django–React–Tailwind stack."
      />
      <WorkExperience />

    </div>



  )
}
