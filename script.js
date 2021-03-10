/******MOBILE NAV******/
function openNav() {
    document.getElementById("mobileMenu").style.width = "100%";
}

function closeNav() {
    document.getElementById("mobileMenu").style.width = "0%";
}

/****CATEGORYCHOOSER****/
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

const wholeContainer = document.querySelector(".containerCategory");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
  wholeContainer.addEventListener("mouseleave", function( event ) {
      optionsContainer.classList.remove("active");  
  }, false);
});


optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
      
    let actualSelection = o.querySelector("input").id;
    
    let allBlogItem = document.getElementsByClassName("card");
    if (actualSelection == "all") {
        for (var i = 0; i < allBlogItem.length; i++) {
            allBlogItem[i].style.display = "block";
        }
    }else{
        for (var i = 0; i < allBlogItem.length; i++) {
            if (allBlogItem[i].classList.contains(actualSelection)) {
                allBlogItem[i].style.display = "block";
            } else {
                allBlogItem[i].style.display = "none";
            }
        } 
    }
      
      
    optionsContainer.classList.remove("active");  
  });
});

/*****VIDEOLATEST*****/


