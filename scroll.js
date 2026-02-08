var radioValue=""; 
$(document).ready(function(){
    $(".topS").click(function() {  
        $('html, body').animate({
            scrollTop: $(".titles").offset().top
        }, 1000);
    });    
});
function topicF() {
    var ele = document.getElementsByName('titles');
    var elT ="";
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
            elT= ele[i].value;
    }
    const element = document.querySelector('.'+elT); 
    element.scrollIntoView();
  }
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 180;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);