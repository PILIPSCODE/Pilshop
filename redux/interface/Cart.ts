

export interface Carti {
    ProductName:String,
    Price:Number,
    img:String,
    Tag:String,
    id:String,
    stock:Number,
    isChecked:Boolean,
    Rate:Number,
}


export interface CartItems{
    product:Carti,
    jmlh:Number
}
export interface User{
    name:String,
    email :String
   password:String,
    repeatPassword:String
}
export interface Wishlist{
    product:Carti,
    liked:Boolean
}


export interface cekCheked{
    id:String,
    iscek:Boolean,
}


export interface payment{
    paymentWith:String,
    // numberkredorno:
}

export interface FiltString{
    Filter:String,
    in:String,
}
export interface FiltNumber{
    Filter:Number,
    in:String,
}

