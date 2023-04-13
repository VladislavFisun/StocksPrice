import { apiItem } from "../types/types"
import {makeAutoObservable} from 'mobx'



class ApiList{
   Loading:boolean=false
   Error:boolean=false

stockFolder:apiItem[]=[]

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
      return
   }
   this.stockFavoriteFolder =[...this.stockFavoriteFolder,item]
 }
 removeFavoriteFromFolder=(item:apiItem)=>{
    this.stockFavoriteFolder= this.stockFavoriteFolder.filter(elem=> elem.displaySymbol!==item.displaySymbol)  
 }



 toggleLoading=(arg:boolean)=>{
   this.Loading=arg
 }
 toggleError=(arg:boolean)=>{
   this.Error=arg
 }

}

export default new ApiList()