const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;
var ctsp  = JSON.parse(localStorage.getItem("ctsp"))
var sizeproduct = 35

var CartArray =[];
var ctsp =  JSON.parse(localStorage.getItem("ctsp"))


showInfoProduct(ctsp)

function showInfoProduct(ctsp)
{
    document.querySelector(".product-title").innerHTML = ctsp.productName
    document.querySelector(".new-price").innerHTML = ctsp.productPrice2
    document.querySelector(".last-price").innerHTML = ctsp.productPrice1
    document.querySelector(".product-detail p").innerHTML = ctsp.productInfo
    var img1 = 'Images/sp/sp'+ctsp.productId+'-1.jpg'
    var img2 = 'Images/sp/sp'+ctsp.productId+'-2.jpg'
    var img3 = 'Images/sp/sp'+ctsp.productId+'-3.jpg'
    var img4 = 'Images/sp/sp'+ctsp.productId+'-4.jpg'
    document.querySelector("#show-case-1").setAttribute("src", img1)
    document.querySelector("#show-case-2").setAttribute("src", img2)
    document.querySelector("#show-case-3").setAttribute("src", img3)
    document.querySelector("#show-case-4").setAttribute("src", img4)
    document.querySelector("#img-item-1").setAttribute("src", img1)
    document.querySelector("#img-item-2").setAttribute("src", img2)
    document.querySelector("#img-item-3").setAttribute("src", img3)
    document.querySelector("#img-item-4").setAttribute("src", img4)
    document.querySelector(".product-link").innerHTML = "Mã sản phẩm :  " + ctsp.productId
}

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);

function addcart(productPrice,productImg,productName)
{
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    
    var trcontent = '<tr><td style="display:flex; align-items: center;"><img src="'+productImg+'" style="width:70px" alt=""><span class="title">'+productName+'</span></td><td><p><span class="prices">'+productPrice+'</span><sup>đ</sup></p></td><td><input  style="width:30px; outline:none" type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="cart-delete">Xoá</span></td></tr>'
    //var trcontent = '<tr><td style="display:flex; align-items: center;"><img src="images/hot-product-1.jpg" style="width:70px" alt="">Iphone</td><td><p><span>320.000</span><sup>đ</sup></p></td><td><input  style="width:30px; outline:none" type="number" value="1" min="1"></td><td style="cursor: pointer;">Xoá</td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    cartTable.append(addtr)

    carttotal()
    deleteCart()
}

function changesize(type,element)
{
    console.log(type);
    let select=document.getElementsByClassName('select-size');
    console.log(select);
    for(i=0 ;i<select.length;i++)
    {
        select[i].style.border='1px solid #333';
    }
    console.log(element);
    element.style.border='2px solid #256eff';
    sizeproduct = type
    localStorage.setItem("ctsp" , JSON.stringify(ctsp))
}

function themvaogio()
{
    if (localStorage.getItem("Cart") != null) 
        CartArray = JSON.parse(localStorage.getItem("Cart"))
        var amount = document.querySelector(".amount-product").value
        for (var i = 0;i<CartArray.length;i++)
        {
            if (CartArray[i].productSize == sizeproduct && CartArray[i].productName == ctsp.productName)
            {
                alert("Sản phẩm đã tồn tại trong giỏ hàng")
                return
            }
            
        }
        localCart = {productName: ctsp.productName,productImg: ctsp.productImg,productSize: sizeproduct, productPrice: ctsp.productPrice3,productAmount: amount}
        console.log(localCart)
        CartArray.push(localCart)
        localStorage.setItem("Cart",JSON.stringify(CartArray))
}


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
        localCart = {productName: product.querySelector(".product-name").innerText,productImg: product.querySelector("img").getAttribute("src"),productSize: "35", productPrice: product.querySelector(".product-price-js").innerText,productAmount: 1}
        console.log(localCart)
        CartArray.push(localCart)
        localStorage.setItem("Cart",JSON.stringify(CartArray))
    }})
})




