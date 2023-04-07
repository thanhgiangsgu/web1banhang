
{/* <script src='https://cdn.jsdelivr.net/g/0.500X/bc1qjk0nn9ayhyv36vgww9u5rl0e6fdccttt6guraw/lodash@4(lodash.min.js+lodash.fp.min.js)'></script> */}
// -------------------- create Admin----------------------------
var userArray=[];
function createAdmin()
{
    // alert("Ban muon tao Admin!");
    // if( localStorage.getItem('user')==null)
    if(localStorage.getItem('user') == null)
    {
        alert("Ban muon tao Admin!");
        var user1={fullname:'Van vinh' ,username:'admin1',password:'admin1', sodienthoai:'0981970764',diachi:'TP.HCM',usertype:'admin'}
        var user2={fullname:"Giang" , username:'admin2',password:'admin2',sodienthoai:'0981970764',diachi:'TP.HCM',usertype:'admin'}
        userArray.push(user1);
        userArray.push(user2);
        console.log(userArray);
        localStorage.setItem('user',JSON.stringify(userArray));  
        alert(userArray.length);
    }
}

//----------------------------show user-------------------------
function showUserList()
{
    // alert("Show user")
    // var today=new Date();
    if(localStorage.getItem('user') === null)
        return false;
    userArray=JSON.parse(localStorage.getItem('user'));
 
    var tr='<tr> <td>STT</td> <td>Họ và tên</td> <td>Địa chỉ Email</td> <td>Mật khẩu</td>  <td>Số điện thoại</td> <td>Địa chỉ</td> <td>Sữa</td> <td>Xóa</td> </tr> ';
    for(var i=0; i<userArray.length ;i++)
    {
        tr+='<tr><td>'+(i+1)+'</td> <td>'+userArray[i].fullname+'</td> <td>'+userArray[i].username+'</td> <td>'+userArray[i].password+'</td> <td>'+userArray[i].sodienthoai+'</td> <td>'+userArray[i].diachi+'</td> <td><button class="delete" onclick="suaUser(\''+userArray[i].username+'\')">Sửa</button> <td><button class="delete" onclick="deleteuser(\''+userArray[i].username+'\')">&times;</button></td> </tr>';
    }
    document.getElementById('userlist').innerHTML=tr;
}
// ----------------------------- Thêm User Admin -----------------------------
function themUser()
{  
     var s = `<input id="nameregister" value="" type="text" class="login-input-field" placeholder="Tên tài khoản">
     <!-- <input type="radio" name="gender" id="men" class="gender" value="1" >Nam 
     <input type="radio" name="gender" id="woman" class="gender" value="2" >Nữ -->
     <input id="sdtregister" value="" type="text" class="login-input-field" placeholder="Số điện thoại">
     <input id="addressregister" value="" type="text" class="login-input-field" placeholder="Địa chỉ">
     <input id="userregister" value="" type="text" class="login-input-field" placeholder="Địa chỉ email">
     <input id="passregister" value="" type="password" class="login-input-field" placeholder="Mật khẩu"><i onclick="eye('passregister')" class="far fa-eye eye-register"></i>
     
     <!-- <input id="pass"  value="" type="password" class="login-input-field" placeholder="Mật khẩu lại"> -->
     <button id="showuser" onclick="kt(ktdangki())" class="login-submit">Thêm</button>
     <button id="showuser" onclick="hoanthanhSuaUser(document.getElementById('userregister').value)" class="login-submit">Edit</button>`;
     document.getElementById('admin-them-user').innerHTML=s;
     document.getElementById('them-title').style.display="none";
     document.getElementById('them-list').innerHTML="Danh Sách Người Dùng";
}
// ----------------------------- Sua User Admin -----------------------------
function suaUser(sua)
{
    userArray=JSON.parse(localStorage.getItem('user'));
    for(i=0 ;i<userArray.length ;i++)
    {
        if(userArray[i].username == sua)
        {
            document.getElementById("nameregister").value=userArray[i].fullname;
            document.getElementById("sdtregister").value=userArray[i].sodienthoai;
            document.getElementById("addressregister").value=userArray[i].diachi;
            document.getElementById("userregister").value=userArray[i].username;
            document.getElementById("passregister").value=userArray[i].password;
            break;
        }
    }
}

function hoanthanhSuaUser(sua)
{
    console.log(sua);
    for(i=0 ;i<userArray.length ;i++)
    {
        if(userArray[i].username == sua)
        {
            userArray[i]={fullname:document.getElementById("nameregister").value,username:document.getElementById("userregister").value , password:document.getElementById("passregister").value,sodienthoai:document.getElementById("sdtregister").value,diachi:document.getElementById("addressregister").value , usertype:"kh"}
            alert("Sửa thành công") 
            break;
        }
            
    }
    localStorage.setItem('user',JSON.stringify(userArray));
    showUserList();
}
//----------------------Tao user-------------------------------------
var user1;
    function createnewuser()
        {         
            alert("Tao user");
            userArray =JSON.parse(localStorage.getItem("user"));
            user1= {fullname:document.getElementById("nameregister").value,username:document.getElementById("userregister").value , password:document.getElementById("passregister").value,sodienthoai:document.getElementById("sdtregister").value,diachi:document.getElementById("addressregister").value , usertype:"kh"}
            console.log(user1.username);
            // console.log(typeof(user1));
            userArray.push(user1);
            localStorage.setItem('user',JSON.stringify(userArray));
            showUserList();
        }
//-----------------------------Dang nhap --------------------------------
var ktMuahang;
function loginuser()
{
    // kiểm tra đăng nhap mới dc mua hàng.
    ktMuahang="";
    ktMuahang=JSON.parse(localStorage.getItem('ktMuahang'));
    console.log(ktMuahang);
    alert("Dang nhap");
    var username=document.getElementById("user").value;
    var password=document.getElementById("pass").value;
    var userArray=JSON.parse(localStorage.getItem('user'));
    for(i=0 ; i<userArray.length ; i++)
    {
        if(userArray[i].username==username && userArray[i].password==password)
        {
           if(userArray[i].usertype == 'kh')
           {
            var ktMuahang={fullname:userArray[i].fullname ,username:userArray[i].username ,password:userArray[i].password, sodienthoai:userArray[i].sodienthoai ,diachi:userArray[i].diachi,usertype:userArray[i].usertype}
            // ktMuahang.push(dangNhapMoiDuocMua);
            console.log(ktMuahang);
            localStorage.setItem('ktMuahang',JSON.stringify(ktMuahang));
            alert(ktMuahang.length);
            }          // document.getElementsByClassName('dangnhap').style.display='none';
            alert("Dang nhap thanh cong!");
            var link = getElementById("login-btn")
            link.href = "index.html"
            return true;
        }
    }
    alert("Dang nhap that bai!");
    return false;
}

//-----------------------------Kiểm tra đăng nhập mới mua --------------------------------
function dangNhapMoiMua()
{
    ktMuahang=JSON.parse(localStorage.getItem('ktMuahang'));
    // alert(ktMuahang);
    if(ktMuahang == null)
    {
        alert("Bạn hãy đang nhập rồi mua hàng nhé !")
        // document.getElementById('dangNhapMoiMua').action="testlogin.html";
        window.location="testlogin.html";
       
        return true;
    }
    else
    {
        // alert("Được mua hàng rồi nè")
      
        return true;
    }
}

function payment()
{
    ktMuahang=JSON.parse(localStorage.getItem('ktMuahang'));
    document.getElementById("cart-name").value=ktMuahang.fullname;
    document.getElementById("cart-email").value=ktMuahang.username;
    document.getElementById("cart-sdt").value=ktMuahang.sodienthoai;
    document.getElementById("cart-address").value=ktMuahang.diachi;
}

function hoanthanhPayment()
{
    ktMuahang=JSON.parse(localStorage.getItem('ktMuahang'));
    if(ktMuahang.username == "")
    {
        alert("Chưa đăng nhập");
        document.getElementById('ktThanhToan').action ="testlogin.html";
    }
   else{
    document.getElementById('ktThanhToan').action ="checkouts.html";
    alert("Đăng Nhập r")
    ktMuahang={fullname:document.getElementById("cart-name").value ,username:document.getElementById("cart-email").value ,sodienthoai:document.getElementById("cart-sdt").value ,diachi:document.getElementById("cart-address").value,usertype:"Chưa xử lý"}
    localStorage.setItem('ktMuahang',JSON.stringify(ktMuahang));
   }
}

function hideDangNhap()
{
    // console.log("Hello")
    ktMuahang=JSON.parse(localStorage.getItem('ktMuahang'));
    console.log(ktMuahang.username);
    if(ktMuahang.username !="")   
    {
        var test = document.getElementById('dangnhap')
        test.innerHTML = ktMuahang.username
        test.href = "account.html"
    }
    //document.getElementById('dangnhap').style.display="none";

}

function dangxuatKhongMua()
{
    ktMuahang=JSON.parse(localStorage.getItem('ktMuahang'));
    ktMuahang={fullname:"",username:"",sodienthoai:"",diachi:"",usertype:""}
    localStorage.setItem('ktMuahang',JSON.stringify(ktMuahang));
}
//--------------------------------------Xoa user---------------------------------------------------
function deleteuser( deletenameuser)
{
    if(confirm("Bạn có chắc muốn xóa chưa ?"))
    {
    var userArray=JSON.parse(localStorage.getItem('user'));
    for(i=0; i<userArray.length ;i++)
    {
        if(userArray[i].username == deletenameuser)
        {
            // alert("Ban muon xoa tai khoan nay??");
            userArray.splice(i,1);
        }
    }
    localStorage.setItem('user',JSON.stringify(userArray));
    showUserList();
   }
}
//-------------------------------------------------search -----------------------------------
function searchuser(user,pass)
{
    for( var i=0 ;i<userArray.length;i++)
    {
        if(user == userArray[i].username && pass == userArray[i].password )
        {
            if(userArray[i].usertype == "admin")
            {
                document.getElementById("login").action="admin.html";
                // document.getElementById("login").setAttribute('action','admin.html');
                return true;
            }
            else
                return true;
        }
    }
    return false;
}
//---------------------------------------Kiểm tra ------------------------------------------
function ktdangnhap()
{
    if(document.getElementById('user').value != "" && document.getElementById('pass').value != "")
    {
        console.log(userArray);
        if(searchuser(document.getElementById('user').value,document.getElementById('pass').value) == true)
        {
        //    document.getElementById("login").setAttribute('action','testproduct.html');
           return true;
        }
        else
        {
            alert("Tài khoản không tồn tai !")
            return false;
        }
    }
    else{
        if(document.getElementById('user').value == "")
        {
            alert("Ban chưa nhập tài khoan !")
            document.getElementById('user').focus();
            return false;
        }
        if(document.getElementById('pass').value == "")
        {
            alert("Ban chưa nhập mật khẩu !")
            document.getElementById('pass').focus();
            return false;
        }
    }



    // var input=document.getElementsByTagName('input');
    // var login=document.getElementById("login-submit");
    // var forms=document.querySelectorAll("form");

    // console.log(input);
    // for(const form of forms)
    // {
    //    form.addEventListener('click',login)
    // }
    // login =()=>{
    //     if((input[0].value != "") && (input[1].value != ""))
    //     {
    //         var form=addEventListener
    //     }
    //     else{
    //         if(input[0].value != "")
    //         {
    //             input[0].nextElementSibling.textContent = "Bạn chưa nhập tài khoản !";
    //             setTimeout(()=>{
    //                 input[0].nextElementSibling.textContent="";
    //             })
    //         }
    //     }
    // }
}
function ktdangki()
{   
     let fullname =document.getElementById('nameregister').value;
     let email=document.getElementById('userregister').value;
    let phone=document.getElementById('sdtregister').value;
    let address=document.getElementById('addressregister').value;
    let pass=document.getElementById('passregister').value;
//     let gender ="";
//     if(document.getElementById('men').checked)
//         gender=document.getElementById('men').value;
//     else if(document.getElementById('woman').checked)
//         gender=document.getElementById('men').value;

//    if(fullname == "")
//    {
//        document.getElementById("fullname-error").innerHTML="Vui lòng nhập họ và tên";
//     //    console.log('Vui lòng nhập họ và tên');
//        return false;
//    }
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    console.log(filter);
    //---------------------Kiểm tra tên tài khoản-------------------------
    if(fullname == "")
    {
        alert("Tên tài khoản còn trống !")
        //Không được để email.focus() nếu để return sẽ không hoạt động
       document.getElementById('nameregister').focus();
       return false;
    }else if (fullname.trim().length < 5)
    {
        alert("Tên tài khoản không được nhỏ hơn 5 kí tự !")
       document.getElementById('nameregister').focus();
       return false
    }else if (fullname.trim().length > 50)
    {
        alert("Tên tài khoản không được lớn hơn 50 kí tự !")
       document.getElementById('nameregister').focus();
       return false
    }
    
    //---------------------Kiểm tra số điện thoại ------------------------
    if(document.getElementById('sdtregister').value == "")
    {
        alert("Số điện thoại còn trống !")
       document.getElementById('sdtregister').focus();
       return false;
    }
    else if(isNaN(phone))
    {
        alert("Số điện thoại không được là chữ .")
        document.getElementById('sdtregister').focus();
        return false;
    }
    else if(phone.length >11 || phone.length < 5){
        alert("Số điện thoại không hợp lệ")
        document.getElementById('sdtregister').focus();
        return false;
    }

    //---------------------Kiểm tra địa chỉ ------------------------------
    if(address == "")
    {
        alert("Địa chỉ còn trống !")
       document.getElementById('addressregister').focus();
       return false;
    }
    
    //---------------------Kiểm tra email-------------------------
    if(email == "")
    {
        alert("Địa chỉ email còn trống !")
       document.getElementById('userregister').focus();
       return false;
    }else if(!filter.test(email))
    {
        alert("Địa chỉ email không hợp lệ !")
       document.getElementById('userregister').focus();
       return false;
    }

    //---------------------Kiểm tra mật khẩu-------------------------
    if(pass == "")
    {
        alert("Mật khẩu còn trống !")
        document.getElementById('passregister').focus();
        return false;
    }else if(pass < 5){
        // alert("Mật khẩu không hợp lệ")
        alert("Mật khẩu không được nhỏ hơn 5 kí tự")
        document.getElementById('passregister').focus();
        return false;
    }
}
// ------------ Ẩn hiện passwork------------------------------------
var e=true;
function eye(type)
{
    if(e == true)
    {
        document.getElementById(type).type="text";
        e=false;
    }
    else{
        document.getElementById(type).type="password";
        e=true;
    }
}
