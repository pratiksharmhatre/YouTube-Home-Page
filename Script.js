var MenuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");



MenuIcon.onclick = function()
{
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container"); 
}





var slideIndex = 0;


showSlides();
function showSlides()
{
    var i;
    var slides = document.getElementsByClassName("banner-slide");
    for(i = 0; i< slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length)
    {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);
}