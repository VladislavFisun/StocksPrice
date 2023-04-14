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

 toggleFavoriteToFolder=(item:apiItem)=>{
   
   const differ =this.stockFavoriteFolder.find(arg=>arg.description===item.description)
   if(differ){
      this.stockFavoriteFolder = this.stockFavoriteFolder.filter(arg=>arg.currency!==item.currency)
   }
   else{
      this.stockFavoriteFolder =[...this.stockFavoriteFolder,item]
   }
 }
 removeFavoriteFromFolder=(item:apiItem)=>{
    this.stockFavoriteFolder= this.stockFavoriteFolder.filter(elem=> elem.displaySymbol!==item.displaySymbol)  
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