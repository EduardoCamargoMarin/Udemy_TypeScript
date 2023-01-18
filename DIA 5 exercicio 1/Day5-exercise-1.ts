// Day 5 - Exercise 1
interface cartItem {
  id: number
  title:string
  variantId?:number //um ponto de interrogação deixa como algo não obrigatório.

}




function addToCart(item: cartItem) {
    console.log(`Adding "${item.title}" to cart.`);
  }

  addToCart({id: 1, title: 'shoes'});
