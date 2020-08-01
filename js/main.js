
// show cart 
// IIFE
(function() {
    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');

    cartInfo.addEventListener('click', function() {
        cart.classList.toggle('show-cart');  
    })
})();

// add items to the cart
(function() {
    const cartBtn = document.querySelectorAll('.store-item-icon');
    
    cartBtn.forEach(function(btn) {
        btn.addEventListener('click', function(event) {
            if (event.target.parentElement.classList.contains('store-item-icon')) {
                let path = event.target.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.src;
                let pos = path.indexOf('timberland') + 10;
                let parPath = path.slice(pos);
                
                const item = {};
                item.img = `img-cart${parPath}`
                
                let name = event.target.parentElement.parentElement.previousElementSibling.firstElementChild.textContent;
                item.name = name;
                
                let price = event.target.parentElement.previousElementSibling.textContent;
                let finalPrice = price.slice(0,2).trim()
                item.price = finalPrice;

                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item','d-flex','justify-content-between','justify-content-between','py-3','px-3');

                cartItem.innerHTML = `
                  <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
                  <div class="cart-item-text d-flex align-items-center">
                    <p id="cart-item-title" class="font-weight-bold mb-0 mr-4 text-capitalize">${item.name}</p>
                    <span>€</span>
                    <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
                  </div>
                  <a href="#" id='cart-item-remove' class="cart-item-remove">
                    <i class="fa fa-trash my-3"></i>
                  </a>
                </div>`;

                // select cart
                const cart = document.getElementById('cart');
                const total = document.querySelector('.cart-total-container');

                cart.insertBefore(cartItem, total)
                alert('article added to the cart')


                // clear cart
                const clearCart = document.getElementById('clear-cart');
                console.log(clearCart);
                
                clearCart.addEventListener('click', function() {
                    console.log("Maka");
                    
                    
                })
                
                showTotal(); 
            }
        })
    })
    // show totals
    function showTotal() {
        const total = [];
        const items = document.querySelectorAll('.cart-item-price');
        
        items.forEach(function(item) {
            total.push(parseFloat(item.textContent));
        });

        const totalMoney = total.reduce(function(total, item) {
            total += item;
            return total;
        },0);
        const finalMoney = totalMoney.toFixed(2);

        document.getElementById('cart-total').textContent = finalMoney;
        document.getElementById('item-count').textContent = total.length;
    }


})();


