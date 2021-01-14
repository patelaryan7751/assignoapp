var config = {

    
apiKey: "AIzaSyDXQixVgedAZmg8uFHlbVK5LaZiqghf7tw",
  authDomain: "friendlychat-55f4c.firebaseapp.com",
  databaseURL: "https://friendlychat-55f4c.firebaseio.com",
  projectId: "friendlychat-55f4c",
  storageBucket: "friendlychat-55f4c.appspot.com",
  messagingSenderId: "1061156891120",
  appId: "1:1061156891120:web:f884b1e126b62cbf7e5535",
  measurementId: "G-EZSBC50K62"
};
firebase.initializeApp(config);

/*var hjcordiref= firebase.database().ref("crimecredential/");
     hjcordiref.orderByChild('email').equalTo(sessionStorage.getItem("emails")).on("child_added", function(data){
          var newVoke = data.val();
         console.log(data.val.key);
        
     });*/





const messaging = firebase.messaging();
messaging.requestPermission().then(function(){
    console.log("granted");
    
      getRegisterToken();
       
   
    
}).catch(function(err){
    console.log("user denied");
});
function getRegisterToken(){
    

// Get Instance ID token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
messaging.getToken().then((currentToken) => {
  if (currentToken) {
      
      var cordiRef = firebase.database().ref(`${sessionStorage.getItem("uidteach")}/${sessionStorage.getItem("roomi")}/msg/${sessionStorage.getItem("uids")}`);
    var data={
        fcmtokenstudent:currentToken
        }
    cordiRef.set(data).then(function(){
      console.log(currentToken);
    sendTokenToServer(currentToken);
         
    });
  }else {
    // Show permission request.
    console.log('No Instance ID token available. Request permission to generate one.');
    // Show permission UI.
    
    setTokenSentToServer(false);
  
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  
  setTokenSentToServer(false);
});
}
  function setTokenSentToServer(sent) {
    window.localStorage.setItem('sentToServer', sent ? '1' : '0');
  }
function sendTokenToServer(currentToken) {
    if (!isTokenSentToServer()) {
      console.log('Sending token to server...');
      // TODO(developer): Send the current token to your server.
      setTokenSentToServer(true);
    } else {
      console.log('Token already sent to server so won\'t send it again ' +
          'unless it changes');
    }

  }
function isTokenSentToServer() {
    return window.localStorage.getItem('sentToServer') === '1';
  }


// Reference messages collection
