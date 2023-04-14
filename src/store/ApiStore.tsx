import { apiItem } from "../types/types"
import {makeAutoObservable} from 'mobx'



class ApiList{
   Loading:boolean=false
   Error:boolean=false

stockFolder:apiItem[]=[]

newsArray:any=[]

stockFavoriteFolder:apiItem[]=[]

constructor(){
    makeAutoObservable(this)
}
 updateStockFolder=(arr:apiItem[])=>{
    this.stockFolder=arr
    
 }

 updateFavoritStockFolder=(arg:apiItem[])=>{
   this.stockFavoriteFolder=arg
 }

 toggleFavoriteToFolder=(item:apiItem)=>{
   
   const differ =this.stockFavoriteFolder.find(arg=>arg.symbol===item.symbol)
   if(differ){
      this.stockFavoriteFolder = this.stockFavoriteFolder.filter(arg=>arg.symbol!==item.symbol)
   }
   else{
      this.stockFavoriteFolder =[...this.stockFavoriteFolder,item]
   }
 }
 removeFavoriteFromFolder=(item:string)=>{
    this.stockFavoriteFolder= this.stockFavoriteFolder.filter((elem)=> elem.symbol!=item)  
 }

uploadNewsArray=(arr:any)=>{
   this.newsArray = [...this.newsArray,...arr]
}

 toggleLoading=(arg:boolean)=>{
   this.Loading=arg
 }
 toggleError=(arg:boolean)=>{
   this.Error=arg
 }

}

export default new ApiList()