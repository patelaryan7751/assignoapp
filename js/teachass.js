var us=document.getElementById("user");
us.textContent=sessionStorage.getItem("emails");
document.getElementById("createass").addEventListener("click",cretefass);
function cretefass(){
    
     window.open('assigncreate.html','_self');

}

document.getElementById("home").addEventListener("click",cretefhom);
function cretefhom(){
    
     window.open('teacher.html','_self');

}
var url_string1=window.location.href;
         sessionStorage.setItem("link",url_string1);
          var url_string=decodeURI(url_string1);
         console.log(url_string);
var url= new URL(url_string);
var roomname =url.searchParams.get("roomname");
sessionStorage.setItem("roomi",roomname);

