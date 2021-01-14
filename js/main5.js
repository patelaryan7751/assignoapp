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
document.querySelector('#createroom').onclick = function(){
      var room = document.querySelector('#phnno').value;
        if(room!=null && room!="" && room!=" "){
        
            
        var pq=document.getElementById("loadar");
    pq.style.display="block";
        var pqi=document.getElementById("demo1");
         pqi.textContent="";
 vali();
            function vali(){

     
    
  
  
    
    
    
                

            
                
             
    
        
         var tgref=firebase.database().ref(`${sessionStorage.getItem("uids")}/${document.getElementById("phnno").value}`);
    var data={
        roomname:document.getElementById("phnno").value
        
         }
     tgref.set(data).then(function(){
        
        
    
            if(document.getElementById("phnno").value!=null && document.getElementById("phnno").value!="" && 
              document.getElementById("phnno").value!=" "){
                 var pq=document.getElementById("loadar");
    pq.style.display="none";
            window.open('teacher.html','_self');
            }
        
        
    });
  
     }
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