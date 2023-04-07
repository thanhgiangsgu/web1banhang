const btncart = document.querySelectorAll(".product-btns .btn-cart")
var CartArray =[]; 
btncart.forEach(function(button,index){
    button.addEventListener("click", function(event){{
        var btnItem = event.target
        var product = btnItem.parentElement.parentElement.parentElement
        //var productImg = product.querySelector("img").getAttribute("src");
        var productName = product.querySelector(".product-name").innerText
        //var productPrice = product.querySelector(".product-price").innerText
        for (var i = 0; i < CartArray.length;i++)
        {
            if (CartArray[i].productName == productName)
            {
                alert("Sản phẩm này đã có trong giỏ hàng")
                return
            }
        }
        if (localStorage.getItem("Cart") != null) 
        CartArray = JSON.parse(localStorage.getItem("Cart"))
        //console.log(CartArray)
        localCart = {productName: product.querySelector(".product-name").innerText,productImg: product.querySelector("img").getAttribute("src"), productPrice: product.querySelector(".product-price-js").innerText}
        //console.log(localCart)
        CartArray.push(localCart)
        localStorage.setItem("Cart",JSON.stringify(CartArray))
    }})
})







