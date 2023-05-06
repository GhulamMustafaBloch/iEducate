bars= document.querySelector(".bars");
NavBar= document.querySelector(".NavBar");
navlist = document.querySelector(".Nav_List");
rightnave = document.querySelector(".right_nave");
bars.addEventListener('click', ()=>{
    navlist.classList.toggle("opacity")
    // NavBar.classList.toggle("h_nav")
    rightnave.classList.toggle("opacity")
    NavBar.classList.toggle("hight")
})