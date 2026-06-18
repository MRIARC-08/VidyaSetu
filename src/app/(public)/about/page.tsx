import { Github, Code2, Users2, Target, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            About <span className="text-blue-600">VidyaSetu</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Building the modern bridge between dedicated educators and eager
            learners through open-source technology.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-16 space-y-24">
        {/* Mission */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                <Target size={24} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              VidyaSetu (meaning &quot;Bridge of Knowledge&quot;) was created
              with a singular purpose: to democratize education by providing a
              robust, accessible, and intuitive platform for learning
              management.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe that quality educational tools shouldn&apos;t be locked
              behind expensive paywalls. By open-sourcing our platform, we
              empower institutions, independent teachers, and students to
              collaborate effectively.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-16 bg-blue-50 rounded-bl-full -mr-8 -mt-8 opacity-50"></div>
            <blockquote className="relative z-10 text-xl italic text-gray-700 font-medium leading-relaxed">
              &quot;Education is the most powerful weapon which you can use to
              change the world.&quot;
              <footer className="mt-4 text-sm font-bold text-gray-500">
                — Nelson Mandela
              </footer>
            </blockquote>
          </div>
        </section>

        {/* Tech Stack */}
        <section>
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-indigo-100 text-indigo-600 rounded-xl mb-4">
              <Code2 size={24} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Technology Stack
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Built with modern, performant, and scalable technologies.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: 'Next.js',
                role: 'React Framework',
                color: 'bg-black text-white',
              },
              {
                name: 'TypeScript',
                role: 'Type Safety',
                color: 'bg-blue-600 text-white',
              },
              {
                name: 'Tailwind CSS',
                role: 'Styling',
                color: 'bg-teal-500 text-white',
              },
              { name: 'Prisma', role: 'ORM', color: 'bg-slate-800 text-white' },
              {
                name: 'PostgreSQL',
                role: 'Database',
                color: 'bg-blue-800 text-white',
              },
              {
                name: 'NextAuth',
                role: 'Authentication',
                color: 'bg-purple-600 text-white',
              },
              {
                name: 'Lucide',
                role: 'Icons',
                color: 'bg-rose-500 text-white',
              },
              {
                name: 'Vercel',
                role: 'Deployment',
                color: 'bg-black text-white',
              },
            ].map((tech, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div
                  className={`w-12 h-12 mx-auto rounded-lg flex items-center justify-center font-bold mb-4 shadow-inner ${tech.color}`}
                >
                  {tech.name.charAt(0)}
                </div>
                <h3 className="font-bold text-gray-900">{tech.name}</h3>
                <p className="text-sm text-gray-500">{tech.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Community & Contributing */}
        <section className="bg-blue-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Heart className="text-red-400 fill-red-400" size={32} />
                <h2 className="text-3xl font-bold">Open Source Community</h2>
              </div>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                VidyaSetu is proudly open-source and participating in
                GSSoC&apos;26. We welcome contributions from developers,
                designers, and educators worldwide.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/MRIARC-08/VidyaSetu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-gray-900 rounded-xl font-bold flex items-center gap-2 hover:bg-gray-50 transition-colors shadow-sm"
                >
                  <Github size={20} /> View Repository
                </a>
                <a
                  href="https://github.com/MRIARC-08/VidyaSetu/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-700 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-blue-800 transition-colors border border-blue-500"
                >
                  <Users2 size={20} /> How to Contribute
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="text-3xl font-bold mb-1">GSSoC&apos;26</div>
                <div className="text-blue-200 text-sm">Active Project</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-blue-200 text-sm">Open Source</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team & Social */}
        <section className="text-center pb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Connect With Us
          </h2>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/MRIARC-08/VidyaSetu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-md transition-all hover:-translate-y-1"
            >
              <Github size={28} />
            </a>
          </div>
          <p className="mt-8 text-gray-500">
            © {new Date().getFullYear()} VidyaSetu. All rights reserved.
          </p>
        </section>
      </div>
    </div>
  );
}
