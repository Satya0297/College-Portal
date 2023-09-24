function init(){
    const sideBar = document.querySelector(".sidebar-container");
    const hamburger = document.querySelector(".hamburger");
    const closeButton = document.querySelector(".close-button");
    
    
    const showsidebar = () => {
        sideBar.classList.add("show-sidebar");
        console.log(sideBar.classList);
    }
    
    const closesidebar = () => {
        sideBar.classList.remove("show-sidebar");
    }
    
    hamburger.addEventListener("click",showsidebar);
    closeButton.addEventListener("click",closesidebar);
}
init();

function navscroll() {

    const navcontainer = document.querySelector(".nav-container");
    
    window.addEventListener("scroll",function () {
        const scrollcount = window.scrollY;
        const targetcount = window.innerWidth >= 992 ? 70 : 50;
        if(scrollcount >= targetcount )
        {
           navcontainer.classList.add("sticky-nav");
        }else{
            navcontainer.classList.remove("sticky-nav");
        }
    });

}
navscroll();