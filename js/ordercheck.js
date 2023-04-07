var CartArray = []
var Orders = []


Orders = JSON.parse(localStorage.getItem("Orders"))
console.log(Orders)

function checkorder()
{
    var getemail = document.getElementById("info-email").value
    var getphone = document.getElementById("info-phone").value
    var getid = document.getElementById("info-id").value
    if (getemail != "" || getphone != "" || getid != "")
    {
        for (var i = 0; i < Orders.length ; i++)
        {
            if (getemail == Orders[i].infoEmail || getphone == Orders[i].infoPhone || getid == Orders[i].donhang)
            {
                console.log("OK")
                showOrder(Orders[i].donhang,Orders[i].totalprice,Orders[i].paymentmethods,Orders[i].infoName,Orders[i].Date)
            }
        }
    } else 
    {
        alert("Vui lòng nhập đầy đủ thông tin! ")
    }
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
        divcontent += '<tr><td style="display:flex; align-items: center;"><img src="'+CartArray[i].productImg+'" style="width:70px" alt="">'+CartArray[i].productName+'</td><td>'+CartArray[i].productSize+'</td><td><p><span>'+CartArray[i].productPrice+'</span><sup>đ</sup></p></td><td><span>'+CartArray[i].productAmount+'</span></td></tr>'
    }
    
    divcontent += '</tbody></table></form> </section></div>'
   
    adddiv.innerHTML = divcontent
    var cartTable = document.querySelector(".order-check-container")

    cartTable.append(adddiv)
}












 



         