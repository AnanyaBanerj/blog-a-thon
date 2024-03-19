
$(document).ready(function () {
$(".filter-item").click(function () {
const value = $(this).attr("data-filter");
if (value == "all") {
     $(".post-box").show("1000");
} else {
$(".post-box")
.not("." + value)
.hide("1000");
$(".post-box")
.filter("." + value)
.show("1000");
}
});

$(".filter-item").click(function(){
    $(this).addClass("active-filter").siblings().removeClass("active-filter");
})
});

let header = document.querySelector('header')

window.addEventListener("scroll", () =>{
    header.classList.toggle("shadow", window.scrollY>0);
});
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 100) { // Adjust the scroll position as needed
        header.style.transform = 'translateY(-100%)';
        header.style.opacity = 0;
    } else {
        header.style.transform = 'translateY(0)';
        header.style.opacity = 1;
    }
});

// localStorage.addClass(123);

//search bar

// Define the search function
function performSearch() {
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();
    var postBoxes = document.querySelectorAll(".post-box");

    document.body.classList.add("search-active");

    postBoxes.forEach(function(postBox) {
        var postTitle = postBox.querySelector(".post-title");

        if (postTitle.textContent.toLowerCase().includes(searchTerm)) {
            postBox.style.display = "block";
        } else {
            postBox.style.display = "none";
        }
    });
}

function clearSearch() {
    document.getElementById("searchInput").value = "";
    var postBoxes = document.querySelectorAll(".post-box");

    postBoxes.forEach(function(postBox) {
        postBox.style.display = "block";
    });
    document.body.classList.remove("search-active");
}

document.getElementById("searchButton").addEventListener("click", performSearch);

document.getElementById("searchInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        performSearch();
    }
});


function clearSearchInput() {
    document.getElementById("searchInput").value = "";
}


window.addEventListener('load', clearSearchInput);