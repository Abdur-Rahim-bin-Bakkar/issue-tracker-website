document.getElementById("loginBtn").addEventListener("click",()=>{
    const username= document.getElementById("username")
    const Password= document.getElementById("Password")
    
    if(username.value === "admin" && Password.value === "admin123"){
        window.location.assign("./more files/index2.html")
    }
    else{
        alert('user name is: admin, and password is: admin123')
        return;
    }

})



