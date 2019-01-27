var basketPrice = 0
var basket = [ {item: "Синтезатор", itemPrice: 12000, itemCount: 1},
               {item: "Педаль", itemPrice: 1500, itemCount: 1},
               {item: "Нотные сборники", itemPrice: 1500, itemCount: 5},
            ]
basket.pop({item: "Стойка", itemPrice: 1700, itemCount: 1})
function countBasketPrice(basket) {
    for (var i = 0; i < basket.length; i++) {
        basketPrice = basketPrice + basket[i].itemPrice * basket[i].itemCount
    }
    return basketPrice
}
console.log(basket)
console.log("Общая стоимость:" + " " + basketPrice)