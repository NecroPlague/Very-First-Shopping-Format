let productsContainer = document.querySelector('#products');
let cartHeader = document.querySelector(".cart-header");
let cartContainer = document.querySelector(".cart");

function showAllProducts(){
    for(let i = 0; i < products.length; i++){
        productsContainer.innerHTML += `<div class="product-items">
        <div class="product-img"><img src="` + products[i].imgsrc + `" alt=""></div>
        <div class="product-title">` + products[i].name + `</div>
        <div class="product-stock">موجودی : ` + products[i].instock +`</div>
        <div class="product-data">
            <div class="product-price">` + products[i].price + `</div>
            <div class="add-to-cart"><i class="fa-solid fa-cart-shopping"></i></div>
        </div>
    </div>`;
    }
}

showAllProducts();

let n = 0;
cartHeader.addEventListener('click' , function(){
    if(n==0){
        cartContainer.style.bottom = "-365px";
        n++;
    }else{
        cartContainer.style.bottom = "-10px";
        n = 0;
    }
    
});