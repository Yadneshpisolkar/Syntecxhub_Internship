export default function PortfolioWebsite() {
  const projects = [
    {
      title: 'E-Commerce App',
      desc: 'Modern shopping application with responsive UI.',
      tech: 'React, Tailwind CSS',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200',
    },
    {
      title: 'Food Delivery UI',
      desc: 'Mobile-first food delivery platform design.',
      tech: 'Figma, React',
      image:
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200',
    },
    {
      title: 'Portfolio Dashboard',
      desc: 'Analytics dashboard with reusable UI components.',
      tech: 'React, Charts',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200',
    },
  ];

  const skills = [
    'UI Design',
    'UX Research',
    'Figma',
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Tailwind CSS',
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">
            MyPortfolio
          </h1>

          <ul className="hidden md:flex gap-8 font-medium">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-32 pb-20 px-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6">
              Hi, I'm Yadnesh 👋
            </h2>

            <p className="text-lg mb-8">
              UI/UX Designer & Frontend Developer passionate about
              building beautiful digital experiences.
            </p>

            <div className="flex gap-4">
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold">
                Hire Me
              </button>

              <button className="border border-white px-6 py-3 rounded-xl font-semibold">
                View Work
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800"
              alt="Profile"
              className="w-80 h-80 rounded-full object-cover border-4 border-white"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>

          <p className="text-lg text-gray-600">
            I am a creative designer and developer who enjoys
            creating modern and user-centered digital products.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-indigo-50 p-6 rounded-2xl text-center shadow"
              >
                <h3 className="font-semibold text-lg text-indigo-700">
                  {skill}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-52 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    {project.desc}
                  </p>

                  <p className="text-sm text-indigo-600 font-medium mb-5">
                    {project.tech}
                  </p>

                  <button className="bg-indigo-600 text-white px-5 py-2 rounded-xl">
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Contact Me
          </h2>

          <form className="grid gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded-xl border"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-4 rounded-xl border"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="p-4 rounded-xl border"
            ></textarea>

            <button className="bg-indigo-600 text-white py-4 rounded-xl">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>© 2026 Yadnesh Portfolio</p>
      </footer>
    </div>
  );
}