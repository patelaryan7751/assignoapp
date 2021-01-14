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
     var assname = document.querySelector('#phnno1').value;
        if(room!=null && room!="" && room!=" " && assname!=null && assname!="" && assname!=" "){
        var pq=document.getElementById("loadar");
    pq.style.display="block";
        var pqi=document.getElementById("demo1");
         pqi.textContent="";
 vali();
            function vali(){

     
    
  
  
    
    
    
                

            
                
             
    
        
         var tgref=firebase.database().ref(`${sessionStorage.getItem("uids")}/${sessionStorage.getItem("roomi")}/Assigment/${document.getElementById("phnno1").value}/`);
    var data={
        link:document.getElementById("phnno").value,
        assname:document.getElementById("phnno1").value
        
         }
     tgref.set(data).then(function(){
        
        
    
            if(document.getElementById("phnno").value!=null && document.getElementById("phnno").value!="" && 
              document.getElementById("phnno").value!=" " && document.getElementById("phnno1").value!=null && document.getElementById("phnno1").value!="" && 
              document.getElementById("phnno1").value!=" "){
                getcredential();
                function getcredential() {

console.log("fum");
 
    
     
         
       var nhjcordiref= firebase.database().ref(`${sessionStorage.getItem("uids")}/${sessionStorage.getItem("roomi")}/msg/`);
     nhjcordiref.orderByChild("fcmtokenstudent").on("child_added", function(data){
          var newVoke= data.val();
         console.log(data.val().fcmtokenstudent);
         $.ajax({
             url:'https://fcm.googleapis.com/fcm/send',
             method: 'POST',
             headers:{
                 
                 'Content-Type':'application/json',
                 'Authorization':'key=AAAA9xHhKfA:APA91bGrzRaoi6RqOk49fGi66kjvGHXh6Dc8vNL89SdCn4WMyGohj3wBNpp1_pFpQgkz0pG7xPhHt130Bpe2x3eQJTw7hzjvLt-3EYQm-w9tZ0CB_UCr05JSWz4-Ls65C2HL9mTHzSvn'
             },
             data:JSON.stringify({
                'to':data.val().fcmtokenstudent,'data':{'message':document.getElementById("phnno1").value,'icon':'https://assigno-b8431.web.app/images/assigno.png','image':'https://assigno-b8431.web.app/images/assigno.png','click_action':`https://assigno-b8431.web.app/studass.html?uid=${sessionStorage.getItem("uids")}&roomname=${sessionStorage.getItem("roomi")}`}
             }),
             success: function(response){
                 console.log(response);
             },
             error: function(xhr,status,error){
                 console.log(xhr.error);
             }
             });
         


        
window.alert("SENT!!!");
         var pq=document.getElementById("loadar");
    pq.style.display="none";
          window.open(`${sessionStorage.getItem("link")}`,'_self');
    
});
     
    
    }
     
                 
                
            
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