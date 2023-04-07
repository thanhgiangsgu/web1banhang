
var infoCus = []
infoCus = JSON.parse(localStorage.getItem("ktMuahang"))
uduser = JSON.parse(localStorage.getItem("user"))
username = infoCus.username

function update()
{ 
        var pass1 = document.querySelector("#pass1").value 
        var pass2 = document.querySelector("#pass2").value 
        var pass3 = document.querySelector("#pass3").value
        if (pass1 == "" || pass2 == "" || pass3 == "")
        {
            alert("Vui lòng nhập đầy đủ thông tin")
        } else 
        {
            if (pass2 != pass3)
            {
                alert("Mật khẩu mới không chính xác")
            } else 
            {
                for (var i = 0;i<uduser.length;i++)
                {
                    if (username == uduser[i].username)
                    {
                        console.log(uduser[i],pass1)
                        if (uduser[i].password == pass1)
                        {
                            uduser[i].password = pass2
                            infoCus.password == pass2
                            alert("Thay đổi mật khẩu thành công")
                            localStorage.setItem("user",JSON.stringify(uduser))
                            localStorage.setItem("ktMuahang",JSON.stringify(infoCus))
                        } else 
                        {
                            alert("Mật khẩu hiện tại không chính xác")
                        }
                    }
                }
            }
        }
}

showInfo()

function updatcace()
{
    
    infoCus.password = pass3;
    localStorage.setItem("ktMuahang", JSON.stringify(infoCus))
    
    for (var i = 0;i< uduser.length;i++ )
    {
        if (username == uduser[i].username)
        {
            uduser[i].fullname = infoCus.fullname
            uduser[i].sodienthoai = infoCus.sodienthoai
            uduser[i].diachi = infoCus.diachi
            localStorage.setItem("user", JSON.stringify(uduser))
            alert("Cập nhật thành công")
        }
    }
    showInfo()
}

function clickeye1()
{
     var x = document.getElementById("pass1")
     var y = document.getElementById("hide1")
     var z = document.getElementById("hide2")

     if (x.type === 'password')
     {
         x.type = "text"
         y.style.display = "block";
         z.style.display = "none";
     }
      else 
     {
        x.type = "password"
        y.style.display = "none";
        z.style.display = "block";
     }
}
function clickeye2()
{
     var x = document.getElementById("pass2")
     var y = document.getElementById("hide1")
     var z = document.getElementById("hide2")

     if (x.type === 'password')
     {
         x.type = "text"
         y.style.display = "block";
         z.style.display = "none";
     }
      else 
     {
        x.type = "password"
        y.style.display = "none";
        z.style.display = "block";
     }
}
function clickeye3()
{
     var x = document.getElementById("pass3")
     var y = document.getElementById("hide1")
     var z = document.getElementById("hide2")

     if (x.type === 'password')
     {
         x.type = "text"
         y.style.display = "block";
         z.style.display = "none";
     }
      else 
     {
        x.type = "password"
        y.style.display = "none";
        z.style.display = "block";
     }
}

function logout()
{
    localStorage.setItem("ktMuahang" , null)
}