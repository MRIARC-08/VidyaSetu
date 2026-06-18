import Link from 'next/link';
import { ArrowRight, BookOpen, Users, Zap, CheckCircle } from 'lucide-react';

export default function PublicHomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 lg:py-40 bg-gradient-to-b from-blue-50 to-white flex items-center justify-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto text-center z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-6 shadow-sm border border-blue-200">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
            Empowering Education for Everyone
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8">
            The Bridge to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Better Learning
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            VidyaSetu connects passionate teachers with eager students,
            providing an intuitive platform for seamless knowledge sharing and
            interactive learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/register"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2"
            >
              Get Started <ArrowRight size={20} />
            </Link>
            <Link
              href="/login"
              className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 rounded-xl font-bold text-lg transition-all shadow-sm hover:shadow-md flex items-center gap-2"
            >
              Log In
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to enhance the educational experience
              for both educators and learners.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="h-8 w-8 text-blue-500" />,
                title: 'Comprehensive Curriculum',
                description:
                  'Access well-structured courses, notes, and NCERT materials tailored to your learning goals.',
              },
              {
                icon: <Users className="h-8 w-8 text-indigo-500" />,
                title: 'Interactive Classrooms',
                description:
                  'Engage in seamless communication between teachers and students with real-time updates.',
              },
              {
                icon: <Zap className="h-8 w-8 text-amber-500" />,
                title: 'Smart Assessments',
                description:
                  'Take quizzes, track progress, and get instant feedback to identify areas for improvement.',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 space-y-8">
              <div>
                <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-semibold mb-4">
                  For Students
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Learn at your own pace
                </h3>
                <p className="text-gray-600 text-lg">
                  Access a vast library of resources, participate in interactive
                  quizzes, and track your academic journey with comprehensive
                  progress analytics.
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  'Access NCERT solutions and notes',
                  'Take practice quizzes',
                  'Track learning progress',
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-gray-700 font-medium"
                  >
                    <CheckCircle className="text-green-500 h-5 w-5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2 bg-gradient-to-tr from-indigo-100 to-blue-50 rounded-3xl p-8 aspect-square md:aspect-auto md:h-[400px] flex items-center justify-center border border-indigo-50 shadow-inner relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-indigo-200"></div>
              <div className="relative z-10 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl max-w-sm w-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Student Portal</p>
                    <p className="text-sm text-gray-500">
                      Active Learning Mode
                    </p>
                  </div>
                </div>
                <div className="space-y-3 mt-6">
                  <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full w-[70%]"></div>
                  </div>
                  <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-500 rounded-full w-[45%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mt-24">
            <div className="bg-gradient-to-tr from-amber-100 to-orange-50 rounded-3xl p-8 aspect-square md:aspect-auto md:h-[400px] flex items-center justify-center border border-amber-50 shadow-inner relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-amber-200"></div>
              <div className="relative z-10 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl max-w-sm w-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <BookOpen className="text-amber-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Teacher Dashboard</p>
                    <p className="text-sm text-gray-500">Class Management</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
                    <p className="text-3xl font-bold text-gray-900">12</p>
                    <p className="text-xs text-gray-500 mt-1">Active Classes</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
                    <p className="text-3xl font-bold text-gray-900">145</p>
                    <p className="text-xs text-gray-500 mt-1">Students</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-4">
                  For Teachers
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Empower your teaching
                </h3>
                <p className="text-gray-600 text-lg">
                  Create engaging content, manage classrooms effortlessly, and
                  evaluate student performance with advanced analytics tools.
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  'Upload study materials and notes',
                  'Create and evaluate quizzes',
                  'Monitor student performance',
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-gray-700 font-medium"
                  >
                    <CheckCircle className="text-green-500 h-5 w-5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits CTA */}
      <section className="py-24 px-6 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to transform your educational journey?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of students and teachers who are already using
            VidyaSetu to bridge the gap in learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg"
            >
              Create Free Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
