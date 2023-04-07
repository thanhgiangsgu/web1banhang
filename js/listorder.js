var CartArray = []
var Orders = []
var index = 0


kt = JSON.parse(localStorage.getItem("ktMuahang"))
Orders = JSON.parse(localStorage.getItem("Orders"))
console.log(Orders)

function checkorder()
{
    var usename = kt.username;
    console.log(usename)
    for (var i = 0;i< Orders.length; i++)
    {
        if (usename == Orders[i].infoEmail)
        {
            index++;
            console.log(Orders[i].infoEmail)
            showOrder(Orders[i].donhang,Orders[i].totalprice,Orders[i].paymentmethods,Orders[i].infoName,Orders[i].Date)
        }
    }
    //if (index == 0 ) alert("Không tồn tại đơn hàng nào!")
}



function showOrder(id,totalprice,payment,infoname,infodate)
{
    CartArray = JSON.parse(localStorage.getItem(id))
    var adddiv = document.createElement("div")
    divcontent = ''
    divcontent += '<div class="box-order"><ul class="group-info">'
    divcontent += '<li class="group-info-item"><span class="order-title">Đơn hàng: '+id+' </span>'
    divcontent += '<span class="total-price">'+totalprice.toLocaleString("de-DE")+' VNĐ</span></li>'
    divcontent += '<li class="group-info-item"><span class="date-order">Ngày '+infodate+'</span>'
    divcontent += '<span class="info-name">'+infoname+'</span><span class="payment"> '+payment+'</span></li>'
    divcontent += '<li class="group-info-item divider-1"></li></ul>'
    divcontent += '<section class="cart"><form action=""> <table><thead><tr><th>Sản phẩm</th><th>Size</th><th>Giá</th><th>Số lượng</th></tr></thead><tbody>'
    
    for (var i = 0;i< CartArray.length;i++)
    {
        divcontent += '<tr><td style="display:flex; align-items: center;"><img src="'+CartArray[i].productImg+'" style="width:70px" alt="">'+CartArray[i].productName+'</td><td>'+CartArray[i].productSize+'</td><td><p style="margin-bottom: 0px"><span>'+CartArray[i].productPrice+'</span><sup>đ</sup></p></td><td><span>'+CartArray[i].productAmount+'</span></td></tr>'
    }
    
    divcontent += '</tbody></table></form> </section></div>'
   
    adddiv.innerHTML = divcontent
    var cartTable = document.querySelector(".group-right")

    cartTable.append(adddiv)
}
checkorder()

function logout()
{
    localStorage.setItem("ktMuahang" , null)
}