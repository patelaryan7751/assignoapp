(function ($) {
    "use strict";

    
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(e){
        e.preventDefault();
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);
document.querySelector('#joinroom').onclick = function(){
      var joinl = document.querySelector('#joino').value;

    if(joinl!=null &&joinl!="" && joinl!=" "){
         var pq=document.getElementById("loadar");
    pq.style.display="block";
        setst();
        
    };

     function setst(){
    
    var url_string1=document.getElementById("joino").value;
         sessionStorage.setItem("link",url_string1);
          var url_string=decodeURI(url_string1);
         console.log(url_string);
var url= new URL(url_string);
var uid=url.searchParams.get("uid");
var roomname =url.searchParams.get("roomname"); 
         var ukref= firebase.database().ref(`${uid}/${roomname}/student/${sessionStorage.getItem("uids")}`);
    var data={
        email:sessionStorage.getItem("emails"),
        uid:sessionStorage.getItem("uids")
    }
    ukref.set(data).then(function(data){
        var ukref= firebase.database().ref(`${sessionStorage.getItem("uids")}/${roomname}`);
    var data={
        roomname:roomname,
        link:`https://assigno-b8431.web.app/studass.html?uid=${uid}&roomname=${roomname}`
    }
    ukref.update(data).then(function(data){
                         
                          over();
    function over()
    {
         var pq=document.getElementById("loadar");
    pq.style.display="none";
        
       
             window.open('student.html','_self');
        }
    });
    });
                         }
        
        
    
         
   
     }
    

        




firebase.auth().onAuthStateChanged(function(user) {
  if(!user){
 var pq=document.getElementById("loadar");
    pq.style.display="none";
       window.open('index.html','_self');
   } 
    else{
        
   
    
         var user = firebase.auth().currentUser;
       console.log(user.email);
       sessionStorage.setItem("vemkey",user.email);

    
    


        
    }
 
  
    
});