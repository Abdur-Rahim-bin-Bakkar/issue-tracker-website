function tabFun(e){
    let tabs = document.querySelectorAll(".change");
    tabs.forEach(tabI=>{
        tabI.classList.remove('btn-primary')
    })
    document.getElementById(e).classList.add('btn-primary')

}