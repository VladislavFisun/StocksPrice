export type MyReturnType = {
    getStocks: () => Promise<any>;
  }

  export type apiItem={
    currency:string
description: string
displaySymbol:string
figi: string
isin: any
mic: string
shareClassFIGI: string
symbol: string
symbol2: string
type: string
  }

  export type CandlesType={
    c:number[],
    h:number[],
    l:number[],
    o:number[],
    s:string,
    t:number[],
    v:number[]

  }