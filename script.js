function scrollToSection(clickedEle , DestinationEle , behavior){
    const clicked = document.querySelector(clickedEle);
    const Destination = document.querySelector(DestinationEle);
    clicked.addEventListener('click',()=>{
        Destination.scrollIntoView({behavior:behavior})
    })
}

scrollToSection('.fooLogo p','.header',"smooth")
scrollToSection(".portfolio",".heading" , "smooth");
scrollToSection(".about",".mainPart","smooth");
scrollToSection(".hire-me",".send","smooth");