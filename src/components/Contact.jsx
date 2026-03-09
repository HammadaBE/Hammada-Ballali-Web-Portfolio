import { Button } from "./ui";

const Contact = () => {
    return (
        <section id="contact" className="w-full flex justify-center items-center bg-slate-500 text-white py-12 h-auto border border-gray-800">          
            <div className="container md:mx-12 my-5 px-6 flex flex-col items-center justify-center gap-6">
                <h1 className="text-6xl font-bold mb-6">Contact</h1>
                <p className="text-3xl text-white mb-4 text-center">Feel free to reach out to me via email or connect with me on LinkedIn!</p>
                <div className="flex space-x-4">
                    <Button variant="outline" size="sm" asChild>
                        <a href="mailto:ballaliebbihammada@gmail.com" className="text-2xl text-white hover:text-white transition-colors">Email</a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                        <a href="https://www.linkedin.com/in/hammada-ballali-ebbi-4aa5091ba/" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-white transition-colors">LinkedIn</a>
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default Contact; 