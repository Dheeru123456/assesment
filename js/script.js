function topDetails(){
    document.getElementById("contact-list").style.display = "block";
}

function hideTopDetails(){
    document.getElementById("contact-list").style.display = "none";
}

function showContent(){
    document.getElementById("nav-content").style.display = "block";
}

function hideShowContent(){
    document.getElementById("nav-content").style.display = "none";
}


function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);