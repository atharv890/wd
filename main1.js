const firebaseConfig = {
    apiKey: "AIzaSyCFXnj-KRYHrXJ-41HOQOEG-gGijSmtHTU",
    authDomain: "kwitterh.firebaseapp.com",
    databaseURL: "https://kwitterh-default-rtdb.firebaseio.com",
    projectId: "kwitterh",
    storageBucket: "kwitterh.appspot.com",
    messagingSenderId: "60775983530",
    appId: "1:60775983530:web:1742051fa406f419fee3d3"
  };

const app = initializeApp(firebaseConfig);
function submit(){
username=document.getElementById("username").value;
firebase.database().ref("/").child(username).update({key:"2",key2:"3"});

}