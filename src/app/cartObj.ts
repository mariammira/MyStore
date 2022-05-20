import { Product} from './product.model'
let dummyProduct:Product={
    id: 0,
    name: '',
    description: '',
    price: 0,
    url: '',
    amount:0
 }
export var cartObj={
    totalAmount:0,
    products:[dummyProduct],
    userInfo:{
        name:'',
        address:'',
        creditCardNumber:0
    }
}
// export var userInfo={
//     name:'',
//     address:'',
//     creditCardNumber:0
// }