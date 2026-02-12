<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCHMIBHlYGqyw4U7ZZplwi4LgQxga99nLM",
    authDomain: "aamilna.firebaseapp.com",
    projectId: "aamilna",
    storageBucket: "aamilna.firebasestorage.app",
    messagingSenderId: "127180284017",
    appId: "1:127180284017:web:b024e50670228b085f7bd0"
  };

  const app = initializeApp(firebaseConfig);
  window.auth = getAuth(app);
  window.db = getFirestore(app);
</script>
