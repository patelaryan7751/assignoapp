importScripts('https://www.gstatic.com/firebasejs/4.3.0/firebase-app.js');
importScripts('firebase-messaging.js');

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

const messaging= firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload){
    const title='Assigno';
    const options={
      body: payload.data.message,
      icon: payload.data.icon,
      image:payload.data.image,
        data:{
      click_action: payload.data.click_action
        }
      
    };
    return self.registration.showNotification(title,options);
    
});
self.addEventListener('notificationclick', function(event){
    var action_click=event.notification.data.click_action;
    event.notification.close();
    
    event.waitUntil(
        clients.openWindow(action_click)
    );
    
});