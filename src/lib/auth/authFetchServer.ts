// 'use server'
// import { AuthControllers } from "@/modules/auth/auth.controller"
// import { is } from "zod/v4/locales";
// let isRefreshed: Promise<boolean> | null = null;

// const refresh = async()=>{
//     console.log("===========running============")
//     const res = await AuthControllers.refresh()

//     return res.ok
// }
// const authFetchServer = async(cal: any)=>{
//     let res = await cal()
    
//     console.log(res.status, "===========running============")
   

    
//     if (res.status === 401){
//         if (!isRefreshed){
           
//             isRefreshed = refresh().finally(()=>(
//                 isRefreshed = null
//             ))

//         }

//         const refreshed = await isRefreshed

//         if(refreshed){
//             res = await cal()
//         }
//     }

//     return res 
// }

// export default authFetchServer;