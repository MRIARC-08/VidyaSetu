'use client'
import { Card } from "@/components/ui/card";
import Image from "next/image";
import book from "@/assets/book.png"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "radix-ui";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [email,setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("") 
  const [err, setErr] = useState<string>("")
  const router = useRouter()

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>)=>{
    e.preventDefault()
    setErr("")
    if ([password, email].some((v)=>(v.trim()== ""))){
      setErr("All Sections are nessecery")
      return
    }


  }
  


  return (
    <main className="bg-secondary h-screen w-screen flex overflow-hidden">
      <div className="flex-1 h-screen bg-indigo-600  bg-gradient-to-br from-[#4F46E5] to-[#1325EC]
        [background-image:radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] 
        [background-size:28px_28px] md:block hidden">

        <div className="p-10 flex flex-col gap-10">
          <div className="text-white font-extrabold text-xl flex gap-1 items-center ">
            <div>
              <svg width="28" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.2586 0C2.22518 2.03341 0.840405 4.62414 0.279385 7.44461C-0.281635 10.265 0.00629795 13.1885 1.10678 15.8453C2.20726 18.5021 4.07085 20.7729 6.46187 22.3705C8.85294 23.9681 11.6641 24.8209 14.5397 24.8209C17.4154 24.8209 20.2265 23.9681 22.6176 22.3705C25.0086 20.7728 26.8722 18.5021 27.9727 15.8453C29.0732 13.1885 29.3611 10.265 28.8001 7.44461C28.2391 4.62414 26.8543 2.03341 24.8209 0L14.5397 10.2811L4.2586 0Z" fill="white"/>
              </svg>

            </div>
            <div>
              Vidyasetu

            </div>
          </div>
          <div className="flex justify-center">
            

            <Image src={book}  alt="book" className=" absolute z-1 "></Image>

            <div className=" inset-0   text-white z-20 pointer-events-none">
              <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M128 256C128 326.645 185.355 384 256 384C326.645 384 384 326.645 384 256C384 185.355 326.645 128 256 128C185.355 128 128 185.355 128 256V256" stroke="white" stroke-opacity="0.4" stroke-width="0.64" stroke-dasharray="5.12 5.12"/>
              <path d="M64 256C64 361.968 150.032 448 256 448C361.968 448 448 361.968 448 256C448 150.032 361.968 64 256 64C150.032 64 64 150.032 64 256V256" stroke="white" stroke-opacity="0.4" stroke-width="0.256" stroke-dasharray="10.24 10.24"/>
              <path d="M256 256L128 128" stroke="white" stroke-opacity="0.4" stroke-width="0.64"/>
              <path d="M256 256L384 128" stroke="white" stroke-opacity="0.4" stroke-width="0.64"/>
              <path d="M256 256L192 384" stroke="white" stroke-opacity="0.4" stroke-width="0.64"/>
              <path d="M256 256L320 384" stroke="white" stroke-opacity="0.4" stroke-width="0.64"/>
              <path d="M122.88 128C122.88 130.826 125.174 133.12 128 133.12C130.826 133.12 133.12 130.826 133.12 128C133.12 125.174 130.826 122.88 128 122.88C125.174 122.88 122.88 125.174 122.88 128Z" fill="white"/>
              <path d="M378.88 128C378.88 130.826 381.174 133.12 384 133.12C386.826 133.12 389.12 130.826 389.12 128C389.12 125.174 386.826 122.88 384 122.88C381.174 122.88 378.88 125.174 378.88 128Z" fill="white"/>
              <path d="M186.88 384C186.88 386.826 189.174 389.12 192 389.12C194.826 389.12 197.12 386.826 197.12 384C197.12 381.174 194.826 378.88 192 378.88C189.174 378.88 186.88 381.174 186.88 384Z" fill="white"/>
              <path d="M314.88 384C314.88 386.826 317.174 389.12 320 389.12C322.826 389.12 325.12 386.826 325.12 384C325.12 381.174 322.826 378.88 320 378.88C317.174 378.88 314.88 381.174 314.88 384Z" fill="white"/>
              </svg>

            </div>
          </div>

          <div className="text-white text-center  -mt-16 flex gap-8 flex-col justify-center items-center">
            <p className="text-4xl font-bold tracking-wide w-[80%]">
              Join 50,000+ students mastering NCERT the smart way.
            </p>

            <p className="tracking-wide text-[16px] max-w-[60%] text-center">
              Our AI-powered platform adapts to your learning
              pace, making exam preparation stress-free and
              effective.
            </p>

          </div>

         



        </div>
         <p className="-mt-10 text-white text-[10px] pl-10">© 2023 Vidyasetu. AI-Powered Learning.</p>
        
      </div>
      <div className="flex-1 h-screen pr-10 pt-2">
        <p className="flex justify-end text-[14px]">Need help?  <span className="pl-2 text-button"> Contact Support</span></p>

        <div className="w-full h-full flex justify-center flex-col items-center">
          <div className="w-[80%] h-[60%] flex flex-col gap-8 ">
            <div className="flex flex-col gap-2">

              <p className="capitalize text-3xl font-bold ">
                welcome back 
              </p>
              <p className="text-[16px] text-black/40 ">Please enter your details to sign in.</p>
            </div>

            <div className="text-black flex flex-col justify-center items-center gap-6">
              <Button className="text-black bg-primary-foreground md:w-[60%] w-full">

                <div>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_0_1818)">
                  <path d="M18.8 10.2083C18.8 9.55834 18.7417 8.93334 18.6333 8.33334H10V11.8833H14.9333C14.7167 13.025 14.0667 13.9917 13.0917 14.6417V16.95H16.0667C17.8 15.35 18.8 13 18.8 10.2083Z" fill="#4285F4"/>
                  <path d="M9.99974 19.1667C12.4747 19.1667 14.5497 18.35 16.0664 16.95L13.0914 14.6417C12.2747 15.1917 11.2331 15.525 9.99974 15.525C7.61641 15.525 5.59141 13.9167 4.86641 11.75H1.81641V14.1167C3.32474 17.1083 6.41641 19.1667 9.99974 19.1667Z" fill="#34A853"/>
                  <path d="M4.86634 11.7417C4.68301 11.1917 4.57467 10.6083 4.57467 10C4.57467 9.39166 4.68301 8.80833 4.86634 8.25833V5.89166H1.81634C1.19134 7.125 0.833008 8.51666 0.833008 10C0.833008 11.4833 1.19134 12.875 1.81634 14.1083L4.19134 12.2583L4.86634 11.7417Z" fill="#FBBC05"/>
                  <path d="M9.99974 4.48334C11.3497 4.48334 12.5497 4.95001 13.5081 5.85001L16.1331 3.22501C14.5414 1.74168 12.4747 0.833344 9.99974 0.833344C6.41641 0.833344 3.32474 2.89168 1.81641 5.89168L4.86641 8.25834C5.59141 6.09168 7.61641 4.48334 9.99974 4.48334Z" fill="#EA4335"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_0_1818">
                  <rect width="20" height="20" fill="white"/>
                  </clipPath>
                  </defs>
                  </svg>


                </div>

                <p>
                 Continue with Google

                </p>

                
              </Button>

              <div className="w-full flex justify-center items-center gap-1 text-black/40 ">
               <hr className="h-[2px] bg-black/10 flex-1"/>
               <p className="w-max ">or with email</p>
               <hr className="h-[2px] bg-black/10 flex-1"/>

              </div>

              <form className="md:w-[60%] w-full flex flex-col gap-6" onSubmit={handleSubmit}>

                <div className="gap-2 flex flex-col">

                  <label htmlFor="email"> Email Address</label>
                  <Input className="bg-primary-foreground" placeholder="student@example.com" id="email" value={email} onChange={(e)=>(setEmail(e.target.value))} ></Input>


                </div>

                <div className="gap-2 flex flex-col">

                  <div className="flex justify-between items-center">

                   <label htmlFor="password"> Password</label>
                   <p className="text-button text-[14px]">Forgot password?</p>
                  </div>

                  <Input className="bg-primary-foreground" placeholder="••••••••" id="password" value={password} onChange={(e)=>(setPassword(e.target.value))}></Input>


                </div>

                <div className="flex text-center gap-1 items-center text-black/60 text-[14px] ">
                  <Input type="checkbox" className="w-3"></Input>
                  <p>Remember me</p>
                </div>

                <div>
                  <Input className="bg-button text-white capitalize font-bold hover:bg-button/90 cursor-pointer transition-all duration-300 ease-in" type="submit" value="log in"></Input>
                </div>
                
                <p className="text-red-500 text-center text-[14px] -mt-4 font-light">{err}</p>
              </form>

              <p>Don't have an account? <span className="text-button cursor-pointer" onClick={()=>(router.push("/register"))}>Sign up for free</span></p>


            </div>

          </div>
        </div>
      </div>
    </main>
  )
}
