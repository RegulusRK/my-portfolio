

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">About Me</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4 text-blue-500">Who am I?</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              I'm a budding full-stack developer with a strong passion for design
              and a growing love for creating smooth, user-friendly experiences.
              I'm still early in my journey, but I’m always excited to learn and
              improve every day. With a background in both front-end and back-end 
              technologies, I bridge the gap between design and functionality.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              My journey in tech started with curiosity about how things work, which evolved into a 
              career building digital products that solve real problems. I enjoy the challenge of 
              turning complex ideas into simple, elegant solutions.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open 
              source projects, or enjoying the outdoors to recharge my creative energy.
            </p>
          </div>
          
          <div className="order-1 md:order-2 bg-gradient-to-br from-blue-500/20 to-blue-900/20 p-8 rounded-lg">
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold mb-1">Name:</h4>
                <p className="text-gray-300">Rafael Cristino</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Email:</h4>
                <p className="text-gray-300">rafaelcristino022@gmail.com</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Location:</h4>
                <p className="text-gray-300">Itaquaquecetuba, SP</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Experience:</h4>
                <p className="text-gray-300">2+ Years</p>
              </div>
              <div className="pt-4">
                <a 
                  href="#contact" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;