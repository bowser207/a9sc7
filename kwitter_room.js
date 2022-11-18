const firebaseConfig = {
    apiKey: "AIzaSyCv-IlA7zVbYCg-sYSaB_yv8JeyOMq13hg",
    authDomain: "hyundai-chat-app.firebaseapp.com",
    projectId: "hyundai-chat-app",
    storageBucket: "hyundai-chat-app.appspot.com",
    messagingSenderId: "196472241181",
    appId: "1:196472241181:web:f3e1b21f7664eef24b5af4"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function logOut()
  {
    window.location = "index.html"
  }