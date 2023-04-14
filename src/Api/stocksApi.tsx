import axios from "axios"
import { MyReturnType } from "../types/types"


 export const getApiData:any=async()=>{
    let response = await axios.get("https://finnhub.io/api/v1/stock/symbol?exchange=US&token=cgst5spr01qkisfipemgcgst5spr01qkisfipen0")
     return await response.data
     }
     export const getApiPrice:any = async(symbol:string)=>{
      let response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=cgst5spr01qkisfipemgcgst5spr01qkisfipen0`)
     
      return response.data
    }
    export const getApiProfile:any = async(arg:string)=>{
      let response = await axios.get(`https://finnhub.io/api/v1/stock/profile2?symbol=${arg}&token=cgst5spr01qkisfipemgcgst5spr01qkisfipen0`)
     
      return await response.data
    }


 
