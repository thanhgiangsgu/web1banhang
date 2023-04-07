
var CartArray = JSON.parse(localStorage.getItem("Cart"))
var OrdersArray = []
var infoCus = []
var totalprice = 0
if (localStorage.getItem("Orders") != null) 
        OrdersArray = JSON.parse(localStorage.getItem("Orders"))



function showcheckouts()
{
    var addul = document.createElement("ul")
    var ulcontent = "";
    if (localStorage.getItem("ktMuahang") != null) 
    {
        infoCus = JSON.parse(localStorage.getItem("ktMuahang"))
        document.querySelector("#info-name").value = infoCus.fullname
        document.querySelector("#info-email").value = infoCus.username
        document.querySelector("#info-phone").value = infoCus.sodienthoai
        document.querySelector("#info-address").value = infoCus.diachi
    }

    ulcontent += '<ul class="list-group">'
    ulcontent += '<li class="list-group-item cart-title">ĐƠN HÀNG <span style="font-size: 12px">(MÃ ĐƠN HÀNG :  '+(OrdersArray.length + 1)+')</span></li>'
    ulcontent += '<li class="list-group-item cart-divider"></li>'
    
    for (var i=0;i< CartArray.length;i++)
    {
        
        var price1 = 0
        var price2 = Number(CartArray[i].productPrice);
        totalprice += price2*CartArray[i].productAmount;
        price1 = price2.toLocaleString("de-DE")
        ulcontent += '<li class="list-group-item name-and-price"><span class="name-product">'+CartArray[i].productName+'</span><span class="price-product">'+price1+'</span></li>'
        ulcontent += '<li class="list-group-item size-and-amount"><span class="size-product"> Size : '+CartArray[i].productSize+'</span><span class="amount-product">x '+CartArray[i].productAmount+'</span></li>'
    }
    
    
    //ulcontent += '<li class="list-group-item name-and-price"><span class="name-product">Vintas Flannel - High Top - Cement</span><span class="price-product">495.000 VNĐ</span></li>'
    //ulcontent += '<li class="list-group-item size-and-amount"><span class="size-product">Size: 41</span><span class="amount-product">x 2</span></li>'
    ulcontent += '<li class="list-group-item cart-divider-1"></li>'
    ulcontent += '<li class="list-group-item current-price"><span class="title-order">Đơn hàng</span> <span class="title-current-price">'+totalprice.toLocaleString("de-DE")+' VNĐ</span></li>'
    var phivanchuyen = 20000;
    if (totalprice > 2000000) phivanchuyen = 0
    ulcontent += '<li class="list-group-item shipping-fee"><span class="phivanchuyen">Phí vận chuyển</span><span class="title-shipping-fee">'+phivanchuyen+' VNĐ</span></li>'
    ulcontent += '<li class="list-group-item cart-divider-1"></li>'
    ulcontent += '<li class="list-group-item"> <span class="title-total-price">TỔNG CỘNG</span><span class="title-total-price-2"><span class="total-price">'+(totalprice - phivanchuyen).toLocaleString("de-DE")+'</span>VNĐ</span></li>'
    ulcontent += '<li class="list-group-item"><a ><button data-href="completed.html" class="btn-cart" onclick="check()">HOÀN TẤT ĐƠN HÀNG</button></a></li></ul>'

    addul.innerHTML = ulcontent
    cartTable = document.querySelector(".cart-container")
    cartTable.append(addul)
}

showcheckouts()

function complete(infoName,infoEmail,infoPhone,infoAddress)
{
    var date = new Date();

    var infodate = ""
    infodate += date.getDate() + "/"
    infodate += (date.getMonth()+1) + "/"
    infodate += date.getFullYear()
    localStorage.setItem('DH'+ (OrdersArray.length + 1),JSON.stringify(CartArray))
    document.getElementsByName('select')
    .forEach(radio => {
        if (radio.checked){
            thanhtoan = radio.value
        }
    })
    
    Orders = {
        donhang: 'DH'+ (OrdersArray.length + 1),
        infoName: infoName,
        infoEmail: infoEmail, 
        infoPhone: infoPhone,
        infoAddress: infoAddress,
        paymentmethods: thanhtoan, 
        totalprice: totalprice,
        Date: infodate
    }
    console.log(Orders)  
    OrdersArray.push(Orders);
    localStorage.setItem("Orders", JSON.stringify(OrdersArray))
    var link = document.querySelector(".list-group-item a");
    if (localStorage.getItem("ktMuahang") != null) 
    {
        link.href = "complete.html"
    }
     else 
    {
        alert("Bạn vui lòng đăng nhập")
        link.href = "testlogin.html"
    }
}

function check()
{
    var infoName = document.getElementById("info-name").value
    var infoEmail = document.getElementById("info-email").value
    var infoPhone = document.getElementById("info-phone").value
    var infoAddress = document.getElementById("info-address").value
    if (infoName == "" || infoEmail == "" || infoPhone == "" || infoAddress == "")
        alert("Vui lòng nhập đầy đủ thông tin")
        else complete(infoName,infoEmail,infoPhone,infoAddress)
}
// ---------------------------------Xuat quan ly don hang ----------
var danhdau="Chưa Xử Lý";
function xuatQuanLyProductAdmin()
{
    if(localStorage.getItem('Orders') === null)
        return false;
    OrdersArray = JSON.parse(localStorage.getItem("Orders"))
    var tr="";
        tr +=` <tr>                  
        <td>Mã</td>
        <td>Tên</td>
        <td>Email</td>
        <td>Số điện thoại</td>
        <td>Địa chỉ</td>
        <td>Phương thức thanh toán</td>
        <td>Giá</td>                   
        <td>Xử lý</td> 
        <td>Đánh dấu</td> 
        <td>Xóa</td> 
    </tr>`
    for(i=0 ;i<OrdersArray.length ;i++)
    {
        tr += '<tr>'
        tr += '<td>'+OrdersArray[i].donhang+'</td>'
        tr += '<td>'+OrdersArray[i].infoName+'</td>'
        tr += '<td>'+OrdersArray[i].infoEmail+'</td>'
        tr += '<td>'+OrdersArray[i].infoPhone+'</td>'
        tr += '<td>'+OrdersArray[i].infoAddress+'</td>'
        tr += '<td>'+OrdersArray[i].paymentmethods+'</td>'
        tr += '<td>'+(OrdersArray[i].totalprice).toLocaleString()+'</td>                   '
        tr += '<td><button onclick="xuatChiTietDonHang(\''+OrdersArray[i].donhang+'\')">Chi Tiết Đơn Hàng</button> </td> '
        tr += '<td><button id="danhdau'+i+'" onclick="danhdau('+i+') ">'+localStorage.getItem('danhdau'+i)+'</button></td>'
        tr += '<td><button onclick="deleteQuanLyProductAdmin(\''+OrdersArray[i].donhang+'\')">&times</button> </td> '
        tr += '</tr>        '
    }
    document.getElementById('userlist').innerHTML=tr;
}

function deleteQuanLyProductAdmin(deleteMa)
{
    if(confirm("Bạn có chắc muốn xóa chưa ?"))
    {
    OrdersArray = JSON.parse(localStorage.getItem("Orders"))
    for(i=0; i<OrdersArray.length ;i++)
    {
        if(OrdersArray[i].donhang == deleteMa)
        {
            localStorage.setItem('danhdau'+i,"Chưa Xử Lý")
            // alert("Ban muon xoa tai khoan nay??");
            OrdersArray.splice(i,1);
        }
    }
    localStorage.setItem('Orders',JSON.stringify(OrdersArray));
    xuatQuanLyProductAdmin()
   }
}

function themQuanLyProductAdmin()
{
    document.getElementById('them-title').style.display="none";
    document.getElementById('admin-them-user').innerHTML="<div style='background: aqua;width: 140px;padding: 5px;' onclick='nhanhang()'>Nhận hàng hôm nay</div>";
    document.getElementById('them-list').innerHTML="Danh Sách Đơn Hàng";
}
function xuatChiTietDonHang(type)
{
    document.getElementById('modal-admin-donhang').style.display="flex";
    CartArray=JSON.parse(localStorage.getItem(type))
    var tr="";
    tr +=`<tr>
    <td>Hình ảnh</td>
    <td>Tên giày</td>
    <td>Size</td>
    <td>Số lượng</td>
    <td>Tổng tiền</td>
    </tr>`
    for(i=0 ;i<CartArray.length;i++)
    {
        tr += '<tr>'
        tr += '<td><img src="'+CartArray[i].productImg+'"></td>'
        tr += '<td>'+CartArray[i].productName+'</td>'  
        tr += '<td>'+CartArray[i].productSize+'</td>'    
        tr += '<td>'+CartArray[i].productAmount+'</td>'  
        tr += '<td>'+(CartArray[i].productPrice).toLocaleString()+'</td>'  
        tr += '</tr>'
    }
    document.getElementById("modal-body-admin-donhang").innerHTML=tr;
}

function hideXuatChiTietDonHang()
{
    document.getElementById('modal-admin-donhang').style.display="none";
}
function danhdau(i)
{
    var danhdau ="Đã xử lý";
    document.getElementById('danhdau'+i).innerHTML=danhdau;
    localStorage.setItem('danhdau'+i,JSON.stringify(danhdau));  
}

function nhanhang()
{
    if(OrdersArray.length == 0)
    for(i=0 ;i<CartArray.length ;i++)
    {
        localStorage.setItem('danhdau'+i,"Chưa Xử Lý");
    }
}
nhanhang();