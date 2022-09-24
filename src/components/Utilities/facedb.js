// add local storage to manage data 
const addDb = id =>{
   let shoppingCard ;

// add shopping card
 const storeCard = localStorage.getItem('shoping-product')
 if(storeCard){
    shoppingCard = JSON.parse(storeCard)
 }
 else{
    shoppingCard = {}
 }


//    add quantity
   const quantity = shoppingCard[id];
   if(quantity){
    const newQuantity = quantity + 1;
    shoppingCard[id] = newQuantity;
   }
   else{
    shoppingCard[id] = 1;
   }
   localStorage.setItem('shoping-product', JSON.stringify(shoppingCard))
}

const deleteDb = id =>{
    const storeCard = localStorage.getItem('shoping-product');
    const shoppingCard = JSON.parse(storeCard)
    if(id in shoppingCard){
        delete shoppingCard[id];
        localStorage.setItem('shoping-product', JSON.stringify(shoppingCard))
    }
}

const deleteShopingCard =() =>{
    localStorage.removeItem('shoping-product')
}
export {
    addDb,
    deleteDb,
    deleteShopingCard
   
}