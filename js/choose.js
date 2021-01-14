firebase.auth().onAuthStateChanged(function(user) {
   if(user){
       console.log(user);
      email=user.email; 
       uid=user.uid;
       sessionStorage.setItem("emails",email);
        sessionStorage.setItem("uids",uid);
       var cliref = firebase.database().ref('crimecredential/');
       cliref.orderByChild("email").equalTo(user.email).on("child_added", function(data){
           
        var newVoke=data.val()
        console.log(newVoke.adharno);
           window.open(`${newVoke.adharno}.html`,'_self');
       });
       
       

   } 
    else{
        
   
        window.open('index1.html','_self');
    }
    
   
    
    


        
    });



