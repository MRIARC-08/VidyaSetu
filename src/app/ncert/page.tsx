'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import authFetch from '@/lib/auth/authFetch';
import { Search, BookOpen, ChevronRight, CheckCircle2 } from 'lucide-react';

const CLASS_DATA = [
  {
    class: '9',
    title: 'FOUNDATION LEVEL',
    heading: 'Class IX',
    dis: 'Core conceptual frameworks and initial research methodologies.',
    points: ['FUNDAMENTAL SCIENCES', 'ADVANCED LITERACY'],
  },
  {
    class: '10',
    title: 'CRITICAL SYNTHESIS',
    heading: 'Class X',
    dis: 'Systematic deep-dives into analytical reasoning and global archives.',
    points: ['BOARD PREPARATION', 'ANALYTICAL LOGIC'],
  },
  {
    class: '11',
    title: 'SPECIALIZATION',
    heading: 'Class XI',
    dis: 'Discipline-specific tracks including Advanced STEM and Humanities.',
    points: ['STREAM SELECTION', 'CAREER MAPPING'],
  },
  {
    class: '12',
    title: 'APEX CURATORS',
    heading: 'Class XII',
    dis: 'Final mastery of subjects and preparation for global symposia.',
    points: ['GRADUATE PATHWAY', 'CAPSTONE RESEARCH'],
  },
];

export default function Page() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [isUpdating, setIsUpdating] = useState<string | null>(null);

  const filteredClasses = CLASS_DATA.filter((item) =>
    item.heading.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.points.some((p) => p.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const selectClass = async (cal: string) => {
    setIsUpdating(cal);
    try {
      const user = await authFetch({
        url: '/api/user/updateUser',
        options: {
          method: 'POST',
          body: JSON.stringify({ class: cal }),
        },
      });

      if (user?.message?.class) {
        router.push(`/ncert/${user.message.class}`);
      } else {
        router.push(`/ncert/${cal}`);
      }
    } catch {
      router.push(`/ncert/${cal}`);
    } finally {
      setIsUpdating(null);
    }
  };

  return (
    <div className="bg-background min-h-screen flex flex-col justify-between p-6 md:p-12 gap-12">
      <div className="flex flex-col gap-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-primary/60">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-primary">NCERT Curriculum</span>
        </nav>

        {/* Header and Search Header */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 border-b border-border/40 pb-8">
          <div>
            <div className="flex gap-2 items-center mb-3">
              <div className="h-[2px] bg-primary w-12" />
              <p className="text-xs tracking-widest font-semibold text-primary/70">ACADEMIC TIERS</p>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Select Your <span className="text-accent">Academic Tier</span>
            </h1>
            <p className="text-sm md:text-base text-primary/70 pt-3 max-w-xl">
              Choose your standard to filter relevant NCERT modules, curriculum trees, and interactive chapter quizzes.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search tier or focus area..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-accent/10 border border-border/60 pl-9 pr-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {filteredClasses.map((val) => (
            <div
              key={val.class}
              className="flex flex-col justify-between bg-card text-card-foreground border border-border/60 p-6 rounded-xl relative overflow-hidden group hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute -right-2 -top-6 text-9xl font-black text-accent/10 select-none pointer-events-none group-hover:text-primary/10 transition-colors">
                {val.class}
              </div>

              <div className="relative z-10 flex flex-col gap-4">
                <span className="text-xs tracking-wider font-bold text-primary/70">{val.title}</span>
                <h2 className="text-3xl font-bold">{val.heading}</h2>
                <div className="w-10 h-1 bg-primary group-hover:w-16 transition-all duration-300" />
                <p className="text-sm text-muted-foreground">{val.dis}</p>

                <div className="flex flex-col gap-2 pt-2">
                  {val.points.map((pt) => (
                    <div key={pt} className="flex gap-2 items-center text-xs font-semibold text-primary/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                disabled={isUpdating === val.class}
                onClick={() => selectClass(val.class)}
                className="mt-8 w-full py-3 bg-primary text-primary-foreground font-semibold text-xs tracking-wider rounded-md hover:bg-primary/90 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
              >
                <BookOpen className="w-4 h-4" />
                {isUpdating === val.class ? 'INITIALIZING...' : 'EXPLORE SYLLABUS'}
              </button>
            </div>
          ))}
        </div>
      </div>

      <footer className="border-t border-border/40 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-muted-foreground gap-4">
        <p>© 2026 THE MONOLITH ACADEMY • NCERT PORTAL</p>
        <div className="flex gap-6">
          <Link href="/ncert" className="hover:text-primary transition-colors">All Classes</Link>
          <Link href="/quiz" className="hover:text-primary transition-colors">Quizzes</Link>
        </div>
      </footer>
    </div>
  );
}
