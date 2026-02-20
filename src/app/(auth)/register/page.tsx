'use client'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ReactElement, useRef, useState } from "react";


export default function LoginPage() {

  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [err, setErr] = useState<string>("")
  const [passC, setPassC] = useState<string>("")
  const status = useRef(null)


  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>)=>{
    e.preventDefault()
    setErr("")
    setPassC("")
    if([email,password,name].some((v)=>(v.trim()=== ""))){
      setErr( "! Every section is neccessery")
      return
    }

    if(password.trim().length < 8){
      setPassC("Password must have 8 characters")
      return
    }
  }

  const router = useRouter()
  return (
    <main className="flex h-screen w-screen overflow-hidden">
      {/* Left Side - Glowing Glass Section */}
      <div className="relative flex-1 hidden md:flex flex-col bg-gradient-to-br from-[#4F46E5] to-[#1325EC] overflow-hidden">

        {/* Dot Overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none
          [background-image:radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)]
          [background-size:32px_32px]"></div>

        {/* Big Glow Circle */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
          <div className="w-[500px] h-[500px] rounded-full 
                          bg-cyan-400/20 
                          blur-3xl 
                          shadow-[0_0_80px_rgba(0,255,255,0.25)] 
                          animate-[pulse_6s_ease-in-out_infinite]" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col p-10 gap-10 h-full justify-between">
          {/* Logo */}
          <div className="text-white font-extrabold text-xl flex gap-1 items-center">
            <svg width="28" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.2586 0C2.22518 2.03341 0.840405 4.62414 0.279385 7.44461C-0.281635 10.265 0.00629795 13.1885 1.10678 15.8453C2.20726 18.5021 4.07085 20.7729 6.46187 22.3705C8.85294 23.9681 11.6641 24.8209 14.5397 24.8209C17.4154 24.8209 20.2265 23.9681 22.6176 22.3705C25.0086 20.7728 26.8722 18.5021 27.9727 15.8453C29.0732 13.1885 29.3611 10.265 28.8001 7.44461C28.2391 4.62414 26.8543 2.03341 24.8209 0L14.5397 10.2811L4.2586 0Z" fill="white"/>
            </svg>
            Vidyasetu
          </div>

          {/* Main Icon with Glass + Shadow */}
          <div className="flex-1 flex flex-col justify-center items-center gap-6 ">

            <div className="h-60 w-60 relative  flex items-center justify-center">

              <div className="w-40 h-36 rounded-[68px] flex justify-center items-center relative
                              border border-white/20
                              bg-white/5 
                              backdrop-blur-xl 
                              shadow-[0_0_80px_rgba(0,255,255,0.25)]">
                <svg width="92" height="75" viewBox="0 0 92 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M45.8333 75L16.6667 59.1667V34.1667L0 25L45.8333 0L91.6667 25V58.3333H83.3333V29.5833L75 34.1667V59.1667L45.8333 75ZM45.8333 40.4167L74.375 25L45.8333 9.58333L17.2917 25L45.8333 40.4167ZM45.8333 65.5208L66.6667 54.2708V38.5417L45.8333 50L25 38.5417V54.2708L45.8333 65.5208Z" fill="white"/>
                </svg>
              </div>

              <div className="absolute top-4 right-9 border border-white/20
                              bg-white/5 
                              backdrop-blur-xl 
                              shadow-[0_0_80px_rgba(0,255,255,0.25)] p-2 w-max rounded-md h-10 text-center flex justify-center items-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 20V15.7C2.05 14.8333 1.3125 13.8208 0.7875 12.6625C0.2625 11.5042 0 10.2833 0 9C0 6.5 0.875 4.375 2.625 2.625C4.375 0.875 6.5 0 9 0C11.0833 0 12.9292 0.6125 14.5375 1.8375C16.1458 3.0625 17.1917 4.65833 17.675 6.625L18.975 11.75C19.0583 12.0667 19 12.3542 18.8 12.6125C18.6 12.8708 18.3333 13 18 13H16V16C16 16.55 15.8042 17.0208 15.4125 17.4125C15.0208 17.8042 14.55 18 14 18H12V20H10V16H14V11H16.7L15.75 7.125C15.3667 5.60833 14.55 4.375 13.3 3.425C12.05 2.475 10.6167 2 9 2C7.06667 2 5.41667 2.675 4.05 4.025C2.68333 5.375 2 7.01667 2 8.95C2 9.95 2.20417 10.9 2.6125 11.8C3.02083 12.7 3.6 13.5 4.35 14.2L5 14.8V20H3ZM8 13H10L10.15 11.75C10.2833 11.7 10.4042 11.6417 10.5125 11.575C10.6208 11.5083 10.7167 11.4333 10.8 11.35L11.95 11.85L12.95 10.15L11.95 9.4C11.9833 9.26667 12 9.13333 12 9C12 8.86667 11.9833 8.73333 11.95 8.6L12.95 7.85L11.95 6.15L10.8 6.65C10.7167 6.56667 10.6208 6.49167 10.5125 6.425C10.4042 6.35833 10.2833 6.3 10.15 6.25L10 5H8L7.85 6.25C7.71667 6.3 7.59583 6.35833 7.4875 6.425C7.37917 6.49167 7.28333 6.56667 7.2 6.65L6.05 6.15L5.05 7.85L6.05 8.6C6.01667 8.73333 6 8.86667 6 9C6 9.13333 6.01667 9.26667 6.05 9.4L5.05 10.15L6.05 11.85L7.2 11.35C7.28333 11.4333 7.37917 11.5083 7.4875 11.575C7.59583 11.6417 7.71667 11.7 7.85 11.75L8 13ZM9 10.5C8.58333 10.5 8.22917 10.3542 7.9375 10.0625C7.64583 9.77083 7.5 9.41667 7.5 9C7.5 8.58333 7.64583 8.22917 7.9375 7.9375C8.22917 7.64583 8.58333 7.5 9 7.5C9.41667 7.5 9.77083 7.64583 10.0625 7.9375C10.3542 8.22917 10.5 8.58333 10.5 9C10.5 9.41667 10.3542 9.77083 10.0625 10.0625C9.77083 10.3542 9.41667 10.5 9 10.5Z" fill="white"/>
                </svg>

              </div>

              <div className=" absolute bottom-4 left-9 border border-white/20
                              bg-white/5 
                              backdrop-blur-xl 
                              shadow-[0_0_80px_rgba(0,255,255,0.25)] p-2 w-max rounded-md h-10 text-center flex justify-center items-center">
                <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 5.9V4.2C13.55 3.96667 14.1125 3.79167 14.6875 3.675C15.2625 3.55833 15.8667 3.5 16.5 3.5C16.9333 3.5 17.3583 3.53333 17.775 3.6C18.1917 3.66667 18.6 3.75 19 3.85V5.45C18.6 5.3 18.1958 5.1875 17.7875 5.1125C17.3792 5.0375 16.95 5 16.5 5C15.8667 5 15.2583 5.07917 14.675 5.2375C14.0917 5.39583 13.5333 5.61667 13 5.9ZM13 11.4V9.7C13.55 9.46667 14.1125 9.29167 14.6875 9.175C15.2625 9.05833 15.8667 9 16.5 9C16.9333 9 17.3583 9.03333 17.775 9.1C18.1917 9.16667 18.6 9.25 19 9.35V10.95C18.6 10.8 18.1958 10.6875 17.7875 10.6125C17.3792 10.5375 16.95 10.5 16.5 10.5C15.8667 10.5 15.2583 10.575 14.675 10.725C14.0917 10.875 13.5333 11.1 13 11.4ZM13 8.65V6.95C13.55 6.71667 14.1125 6.54167 14.6875 6.425C15.2625 6.30833 15.8667 6.25 16.5 6.25C16.9333 6.25 17.3583 6.28333 17.775 6.35C18.1917 6.41667 18.6 6.5 19 6.6V8.2C18.6 8.05 18.1958 7.9375 17.7875 7.8625C17.3792 7.7875 16.95 7.75 16.5 7.75C15.8667 7.75 15.2583 7.82917 14.675 7.9875C14.0917 8.14583 13.5333 8.36667 13 8.65ZM5.5 12C6.28333 12 7.04583 12.0875 7.7875 12.2625C8.52917 12.4375 9.26667 12.7 10 13.05V3.2C9.31667 2.8 8.59167 2.5 7.825 2.3C7.05833 2.1 6.28333 2 5.5 2C4.9 2 4.30417 2.05833 3.7125 2.175C3.12083 2.29167 2.55 2.46667 2 2.7V12.6C2.58333 12.4 3.1625 12.25 3.7375 12.15C4.3125 12.05 4.9 12 5.5 12ZM12 13.05C12.7333 12.7 13.4708 12.4375 14.2125 12.2625C14.9542 12.0875 15.7167 12 16.5 12C17.1 12 17.6875 12.05 18.2625 12.15C18.8375 12.25 19.4167 12.4 20 12.6V2.7C19.45 2.46667 18.8792 2.29167 18.2875 2.175C17.6958 2.05833 17.1 2 16.5 2C15.7167 2 14.9417 2.1 14.175 2.3C13.4083 2.5 12.6833 2.8 12 3.2V13.05ZM11 16C10.2 15.3667 9.33333 14.875 8.4 14.525C7.46667 14.175 6.5 14 5.5 14C4.8 14 4.1125 14.0917 3.4375 14.275C2.7625 14.4583 2.11667 14.7167 1.5 15.05C1.15 15.2333 0.8125 15.225 0.4875 15.025C0.1625 14.825 0 14.5333 0 14.15V2.1C0 1.91667 0.0458333 1.74167 0.1375 1.575C0.229167 1.40833 0.366667 1.28333 0.55 1.2C1.31667 0.8 2.11667 0.5 2.95 0.3C3.78333 0.1 4.63333 0 5.5 0C6.46667 0 7.4125 0.125 8.3375 0.375C9.2625 0.625 10.15 1 11 1.5C11.85 1 12.7375 0.625 13.6625 0.375C14.5875 0.125 15.5333 0 16.5 0C17.3667 0 18.2167 0.1 19.05 0.3C19.8833 0.5 20.6833 0.8 21.45 1.2C21.6333 1.28333 21.7708 1.40833 21.8625 1.575C21.9542 1.74167 22 1.91667 22 2.1V14.15C22 14.5333 21.8375 14.825 21.5125 15.025C21.1875 15.225 20.85 15.2333 20.5 15.05C19.8833 14.7167 19.2375 14.4583 18.5625 14.275C17.8875 14.0917 17.2 14 16.5 14C15.5 14 14.5333 14.175 13.6 14.525C12.6667 14.875 11.8 15.3667 11 16Z" fill="white"/>
                </svg>

              </div>
            </div>

            <p className="font-extrabold text-3xl tracking-wide text-white text-center max-w-[60%]">
              Start your journey to
              academic excellence.
            </p>

            <p className=" text-[14px] tracking-wide text-white text-center max-w-[60%]">
              Join thousands of students mastering their NCERT
              curriculum with AI-driven personalized learning.
            </p>

          </div>

          {/* Footer */}
          <p className="text-white text-[10px]">© 2023 Vidyasetu. AI-Powered Learning.</p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 h-screen flex flex-col pr-10 pt-4">
        <p className="flex justify-end text-[14px]">
          Need help? <span className="pl-2 text-button"> Contact Support</span>
        </p>

        <div className="flex flex-1 justify-center items-center">
          <div className="w-[80%] flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <p className="capitalize text-3xl font-bold">Create account</p>
              <p className="text-[16px] text-black/40">Sign up to get started with your learning journey.</p>
            </div>

            {/* Google Button */}
            <div className="w-full h-full justify-center items-center  flex flex-col gap-8">

              <Button className="text-black bg-primary-foreground w-full md:w-3/5 flex items-center justify-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <g clipPath="url(#clip0_0_1818)">
                    <path d="M18.8 10.2083C18.8 9.55834 18.7417 8.93334 18.6333 8.33334H10V11.8833H14.9333C14.7167 13.025 14.0667 13.9917 13.0917 14.6417V16.95H16.0667C17.8 15.35 18.8 13 18.8 10.2083Z" fill="#4285F4"/>
                    <path d="M9.99974 19.1667C12.4747 19.1667 14.5497 18.35 16.0664 16.95L13.0914 14.6417C12.2747 15.1917 11.2331 15.525 9.99974 15.525C7.61641 15.525 5.59141 13.9167 4.86641 11.75H1.81641V14.1167C3.32474 17.1083 6.41641 19.1667 9.99974 19.1667Z" fill="#34A853"/>
                    <path d="M4.86634 11.7417C4.68301 11.1917 4.57467 10.6083 4.57467 10C4.57467 9.39166 4.68301 8.80833 4.86634 8.25833V5.89166H1.81634C1.19134 7.125 0.833008 8.51666 0.833008 10C0.833008 11.4833 1.19134 12.875 1.81634 14.1083L4.19134 12.2583L4.86634 11.7417Z" fill="#FBBC05"/>
                    <path d="M9.99974 4.48334C11.3497 4.48334 12.5497 4.95001 13.5081 5.85001L16.1331 3.22501C14.5414 1.74168 12.4747 0.833344 9.99974 0.833344C6.41641 0.833344 3.32474 2.89168 1.81641 5.89168L4.86641 8.25834C5.59141 6.09168 7.61641 4.48334 9.99974 4.48334Z" fill="#EA4335"/>
                  </g>
                </svg>
                Continue with Google
              </Button>

              {/* Or separator */}
             <div className="w-full flex justify-center items-center gap-1 text-black/40 ">
               <hr className="h-[2px] bg-black/10 flex-1"/>
               <p className="w-max ">or sign up with email</p>
               <hr className="h-[2px] bg-black/10 flex-1"/>

              </div>

              {/* Email Form */}
              <form className="flex flex-col gap-6 md:w-3/5 w-full" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <label htmlFor="fullName">Full Name</label>
                  <Input className="bg-primary-foreground" placeholder="MRiARC" id="fullName"  onChange={(e)=>(setName(e.target.value))} value={name}/>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <label htmlFor="email">Email Address</label>
                  </div>
                  <Input className="bg-primary-foreground" type="email" placeholder="student@example.com" id="email" required onChange={(e)=>(setEmail(e.target.value))} value={email}/>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <label htmlFor="password">Create Password</label>
                  </div>
                  <Input className="bg-primary-foreground" type="password" placeholder="Min. 8 characters" id="password" required onChange={(e)=>(setPassword(e.target.value))} value={password}/>
                  <p  className="text-red-500  text-[14px] font-light">{passC}</p>
                </div>
                <div className="flex items-center gap-2 text-black/60 text-[14px]">
                  <Input type="checkbox" className="w-3" name="privacy" required/>
                  <p className="w-max text-[12px]">I agree to the Terms of Service and Privacy Policy</p>
                </div>
                <Input type="submit" className="bg-button text-white font-bold cursor-pointer hover:bg-button/90 transition-all" value="Create Account"/>
                <p className="text-red-500 text-center text-[14px] -mt-4 font-light">{err}</p>
                

                

              </form>
             

              <p className="mt-2">Already have an account? <span className="text-button cursor-pointer" onClick={()=>(router.push("/login"))}>Log in</span></p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}