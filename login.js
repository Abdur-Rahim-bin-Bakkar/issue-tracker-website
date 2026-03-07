document.getElementById("loginBtn").addEventListener("click",()=>{
    const username= document.getElementById("username")
    const Password= document.getElementById("Password")
    
    if(username.value.trim() === "admin" && Password.value.trim() === "admin123"){
        window.location.assign("./more files/index.html")
    }
    else{
        alert('user name is: admin, and password is: admin123')
        return;
    }

})



