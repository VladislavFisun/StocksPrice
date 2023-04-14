import axios from "axios"
import { MyReturnType } from "../types/types"


 export const getApiData:any=async()=>{
    let response = await axios.get("https://finnhub.io/api/v1/stock/symbol?exchange=US&token=cgsoeq1r01qkisfimdrgcgsoeq1r01qkisfimds0")
     return await response.data
     }
     export const getApiPrice:any = async(symbol:string)=>{
      let response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=cgs0idpr01qkrsgj0630cgs0idpr01qkrsgj063g`)
     
      return response.data
    }
    export const getApiProfile:any = async(arg:string)=>{
      let response = await axios.get(`https://finnhub.io/api/v1/stock/profile2?symbol=${arg}&token=cgs0idpr01qkrsgj0630cgs0idpr01qkrsgj063g`)
     
      return await response.data
    }


 
