import {cartObj} from './cartObj'
export function checkIfItemInCartAndReturnAmount(product_id:number){
    console.log(cartObj.products)
    let index= cartObj.products.findIndex(x=>x.id===product_id)
    if(index>-1) return cartObj.products[index].amount
    else return 0
}
export function calculateTotalAmount(){
    let  total =0
    for(let item of cartObj.products){
        if(item.amount&&item.id)total+=(item.price*item.amount)
    }
  cartObj.totalAmount=total
}