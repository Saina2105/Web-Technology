document.getElementsByTagName("h1")[1].innerHTML="getElementsByTagName";
document.getElementsByClassName("p1")[0].innerHTML="Hello! This is week 10";
document.getElementsByClassName("p1")[0].style.cssText="background-color:orange; color:blue; font-size:28px";
var select = document.getElementsByClassName("p1");
for(var i=0; i<=select.length;i++){
    select[i].style.cssText="background-color:orange; color:blue; font-size:20px";
 
}