CartArray = []
function showCart()
{
    var addtr = document.createElement("tr")
    
    CartArray = JSON.parse(localStorage.getItem("Cart"))
    for (var i = 0; i < CartArray.length;i++)
    {
        var productImg = CartArray[i].productImg
        var productName = CartArray[i].productName
        var productPrice = CartArray[i].productPrice
        var productAmount = CartArray[i].productAmount
        var productSize = CartArray[i].productSize
        addcart(productPrice,productImg,productName,productAmount,productSize)
    }
    //var trcontent = '<tr><td style="display:flex; align-items: center;"><img src="'+productImg+'" style="width:70px" alt=""><span class="title">'+productName+'</span></td><td><p><span class="prices">'+productPrice+'</span><sup>đ</sup></p></td><td><input  style="width:30px; outline:none" type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="cart-delete">Xoá</span></td></tr>'
    //var trcontent = '<tr><td style="display:flex; align-items: center;"><img src="images/hot-product-1.jpg" style="width:70px" alt="">Iphone</td><td><p><span>320.000</span><sup>đ</sup></p></td><td><input  style="width:30px; outline:none" type="number" value="1" min="1"></td><td style="cursor: pointer;">Xoá</td></tr>'
    
}

showCart();

function addcart(productPrice,productImg,productName,productAmount,productSize)
{
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    
    var trcontent = '<tr><td style="display:flex; align-items: center;"><img src="'+productImg+'" style="width:70px" alt=""><span class="title">'+productName+'</span></td><td><input class="size-product" type="number" value="'+productSize+'" min="35" max="45" style="width:50px; outline:none"></td><td><p><span class="prices">'+productPrice+'</span><sup>đ</sup></p></td><td><input class="amount-product" style="width:50px; outline:none" type="number" value="'+productAmount+'" min="1"></td><td style="cursor: pointer;"><span class="cart-delete">Xoá</span></td></tr>'
    //var trcontent = '<tr><td style="display:flex; align-items: center;"><img src="images/hot-product-1.jpg" style="width:70px" alt="">Iphone</td><td><p><span>320.000</span><sup>đ</sup></p></td><td><input  style="width:30px; outline:none" type="number" value="1" min="1"></td><td style="cursor: pointer;">Xoá</td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    cartTable.append(addtr)

    carttotal()
    deleteCart()
}


// Totalprice 

function carttotal ()
{
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC = 0
    for ( var i = 0;i<cartItem.length;i++)
    {
        var inputValue = cartItem[i].querySelector(".amount-product").value
        var productPrice = cartItem[i].querySelector(".prices").innerHTML
        CartArray[i].productAmount = inputValue;
        localStorage.setItem("Cart",JSON.stringify(CartArray))
        //console.log(productPrice)
        totalA = inputValue*productPrice
        totalC = totalC + totalA
        //console.log(totalA)
        //totalD = totalC.toLocaleString("de-DE")
    }

    var cartTotalA = document.querySelector(".price-total span")
    cartTotalA.innerHTML = totalC.toLocaleString("de-DE")
    inputchange()
}

function deleteCart()
{
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++)
    {
        var productT = document.querySelectorAll(".cart-delete")
        productT[i].addEventListener("click",function(event){
            var cartDelete = event.target
            var cartitemR = cartDelete.parentElement.parentElement
            //console.log(cartitemR)
            nameDelete = cartitemR.querySelector(".title").innerHTML
            console.log(nameDelete)
            cartitemR.remove()
            savelocalstorage(nameDelete)
            carttotal()
        })
    }
}

function inputchange()
{
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i = 0; i<cartItem.length;i++)
    {
        var inputValue = cartItem[i].querySelector(".amount-product")
        inputValue.addEventListener("change",function(){
            carttotal()
        })
    }
}

function savelocalstorage(nameDelete)
{
    CartArray = JSON.parse(localStorage.getItem("Cart"))
    tmpCart = [];
    for (var i = 0; i < CartArray.length;i++)
    {
        var productImg = CartArray[i].productImg
        var productName = CartArray[i].productName
        var productPrice = CartArray[i].productPrice
        console.log(productPrice,productName,productImg)
        if (nameDelete != productName)
        {
            localCart = {productName: productName,productImg: productImg, productPrice: productPrice}
            tmpCart.push(localCart)
            localStorage.setItem("Cart",JSON.stringify(tmpCart))
        }
    }
    localStorage.setItem("Cart",JSON.stringify(tmpCart))
}