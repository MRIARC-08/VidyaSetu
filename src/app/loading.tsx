'use client';

import { UserCircle, Settings, Lock, Server, Layers } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#FCFCFC] flex flex-col font-sans text-black relative overflow-hidden">
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes fillProgress {
          0% { width: 0%; }
          10% { width: 15%; }
          50% { width: 68%; }
          100% { width: 95%; }
        }
        .animate-progress {
          animation: fillProgress 10s cubic-bezier(0.1, 0.7, 0.1, 1) forwards;
        }
      `}</style>


      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 w-full flex justify-center overflow-hidden">
        <span className="text-[26vw] font-black text-gray-100/60 leading-none tracking-tighter whitespace-nowrap">
          VIDYASETU
        </span>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center relative z-10 px-6 mt-[-5vh]">

        <div className="w-16 h-16 bg-black rounded-md flex items-center justify-center mb-12 shadow-2xl animate-float">
          <Layers className="w-7 h-7 text-white" strokeWidth={1.5} />
        </div>


        <div className="text-center max-w-3xl mb-16">
          <h1 className="text-5xl md:text-[4rem] font-bold tracking-tight leading-[1.05] mb-6">
            Curating Your<br />Curriculum...
          </h1>
          <p className="text-gray-500 text-lg md:text-xl font-medium">
            Accessing archived manuscripts and institutional lectures<br className="hidden md:block" />
            from the <span className="font-bold text-gray-800">Monolith repository</span>.
          </p>
        </div>

 
        <div className="w-full max-w-[480px]">
          <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden mb-4 relative">
            <div 
              className="h-full bg-[#1A1A1A] rounded-full animate-progress relative overflow-hidden"
            >
              
              <div className="absolute top-0 left-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]"></div>
            </div>
          </div>
          <div className="flex justify-between items-center text-[10px] font-bold tracking-widest text-gray-500 uppercase">
            <span>System Indexing</span>
            <span className="animate-pulse">Loading...</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 px-10 pb-10 flex justify-between items-end">
        <div className="space-y-2.5">
          <div className="w-8 h-[2px] bg-gray-300 mb-4"></div>
          <p className="text-[9px] font-bold tracking-widest text-gray-400 uppercase">Institutional Authority</p>
          <p className="text-[10px] font-bold text-gray-500 uppercase">VidyaSetu V4.0.2</p>
        </div>
        <div className="space-y-2.5 text-right">
          <p className="text-[9px] font-bold tracking-widest text-gray-400 uppercase">Reference: MS-2044-X</p>
          <p className="text-[10px] font-bold text-gray-500 uppercase">Archival Integrity Verified</p>
          <div className="w-8 h-[2px] bg-gray-300 ml-auto mt-4"></div>
        </div>
      </div>


      <div className="bg-[#F5F5F5] py-5 flex justify-center items-center gap-16 text-[10px] font-bold tracking-widest text-gray-400 uppercase relative z-10 border-t border-gray-200/50">
        <div className="flex items-center gap-3">
          <Lock className="w-3.5 h-3.5" strokeWidth={2.5} />
          <span>Encrypted Session</span>
        </div>
        <div className="flex items-center gap-3">
          <Server className="w-3.5 h-3.5" strokeWidth={2.5} />
          <span>Node 01-A</span>
        </div>
      </div>
    </div>
  );
}
