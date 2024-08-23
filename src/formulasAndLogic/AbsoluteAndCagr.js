export function calculateAbsoluteProfit(begAmount,endAmount){
    const begAmount1= parseInt(begAmount)
    const endAmount1 = parseInt(endAmount)
  const absoluteProfit = ((endAmount1-begAmount1)/begAmount1)*100
  console.log(typeof(begAmount1))
  return absoluteProfit;
}
export function calculateCAGR(begAmount,endAmount,Years){
    const begAmount1= parseInt(begAmount)
    const endAmount1 = parseInt(endAmount)
    const Years1 = parseInt(Years)
  console.log(typeof(Years1))

 return ((endAmount1/begAmount1)**(1/Years1)-1)*100;
}