import Link from 'next/link';
import { Bell, User } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-black overflow-hidden">


      <div className="flex-1 flex flex-col md:flex-row relative z-10 h-full justify-center items-center">
     
        <div className="w-full md:w-1/2 relative flex flex-col justify-center px-10 md:px-12 lg:px-24 min-h-[50vh] md:min-h-0">
          <div className="relative w-max mt-[-8vh]">
            <span className="absolute -top-12 -left-4 md:-top-20 md:-left-8 text-[9rem] md:text-[16rem] font-bold text-gray-100 select-none z-0 tracking-tighter leading-none">
              ERR.
            </span>
            <h1 className="relative text-[8rem] md:text-[14rem] leading-none font-bold tracking-tighter z-10 text-black">
              404
            </h1>
            <div className="w-full h-3 md:h-4 bg-black mt-2 md:mt-4 relative z-10"></div>
          </div>
          
        </div>

     
        <div className="w-full md:w-1/2 flex flex-col relative h-full min-h-[50vh] md:min-h-0">

          <div className="flex-1 flex flex-col justify-end pb-12 px-10 md:px-12 lg:px-20 bg-white z-10">
            <div className="max-w-[500px] space-y-6">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Exception Error
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tight leading-[1.05]">
                The requested<br />page could not be<br />located.
              </h2>
              <p className="text-gray-500 leading-relaxed text-[15px] max-w-[90%]">
                The document or section you are looking for may have been moved, renamed, or is currently unavailable in our archives. Please verify the URL or return to the dashboard.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/ncert" 
                  className="bg-[#1A1A1A] hover:bg-black text-white px-8 py-4  text-[13px] font-semibold transition-colors text-center font-semibold"
                >
                  Return to Explore
                </Link>
                <Link 
                  href="/dashboard" 
                  className="bg-[#F5F5F5] hover:bg-[#EAEAEA] text-black px-8 py-4  text-[13px] font-semibold transition-colors text-center"
                >
                  Go to Dashboard
                </Link>
              </div>
            </div>
          </div>
    
        </div>
      </div>
    </div>
  );
}
