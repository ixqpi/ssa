document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value

    if (username === "ixqpi" && password === "ssa12") {
        alert("Successfully logged in!");
       
        // الانتقال إلى الصفحة الرئيسية بعد تسجيل الدخول بنجاح
        window.location.href = "main.html";

    }else{
        alert("Incorrect username or password.");}
  
    

});
