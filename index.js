function redirectbank()
{
    location.href = "bank.html"
}
function redirectgovernment()
{
    location.href = "government.html"
}
function redirectbeneficiaries()
{
    location.href = "beneficiaries.html"
}
function redirectbuilder()
{
    location.href = "builder.html"
}
function redirectpanchayat()
{
    location.href = "panchayat.html"
}
function redirecttrusties()
{
    location.href = "trusties.html"
}
function redirectgallery()
        {
            location.href = "gallery.html"
        }
        function redirectcharity()
        {
            location.href = "charity.html"
        }
var menubar = document.querySelector(".menubar")
        var sidenav = document.querySelector(".side-navbar")
        menubar.addEventListener("click",function()
        {
            sidenav.style.transitionDuration = `500ms`;
            sidenav.style.left = "0"
        })

        var xmark = document.querySelector(".xmark")
        xmark.addEventListener("click",function () {
            sidenav.style.transitionDuration = `500ms`
            sidenav.style.left = "-60%"
        })