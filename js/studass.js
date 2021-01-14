var us=document.getElementById("user");
us.textContent=sessionStorage.getItem("emails");

document.getElementById("home").addEventListener("click",cretefhom);
function cretefhom(){
    
     window.open('student.html','_self');

}
var url_string1=window.location.href;
         sessionStorage.setItem("link",url_string1);
          var url_string=decodeURI(url_string1);
         console.log(url_string);
var url= new URL(url_string);
var uidteach= url.searchParams.get("uid");
var roomname =url.searchParams.get("roomname");
sessionStorage.setItem("uidteach",uidteach);
sessionStorage.setItem("roomi",roomname);

