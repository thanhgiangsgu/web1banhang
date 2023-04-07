
var infoCus = []
infoCus = JSON.parse(localStorage.getItem("ktMuahang"))

function showInfo()
{
    if (localStorage.getItem("ktMuahang") != null) 
    {
        document.querySelector("#info-name").value = infoCus.fullname
        document.querySelector("#info-phone").value = infoCus.sodienthoai
        document.querySelector("#info-address").value = infoCus.diachi
    }
}

showInfo()

function update()
{
    username = infoCus.username
    infoCus.fullname = document.getElementById("info-name").value
    infoCus.sodienthoai = document.getElementById("info-phone").value
    infoCus.diachi = document.getElementById("info-address").value
    localStorage.setItem("ktMuahang", JSON.stringify(infoCus))
    uduser = JSON.parse(localStorage.getItem("user"))
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

function logout()
{
    localStorage.setItem("ktMuahang" , null)
}


