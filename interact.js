$(".modalbox").click(function(){
    let Classmodal = $(this).attr("class").split(' ')[1];
    console.log(Classmodal);
    let modal = document.getElementsByClassName(Classmodal)[1];
    console.log(modal)
    modal.style.display = "block";
    $(window).click(function(){
    if (event.target == modal) {
        modal.style.display = "none";
        }
    });
    $("span").click(function(){
        modal.style.display = "none";
    })
});
  
$(document).ready(function(){
    modal.style.display ="block";
});

var modal = document.getElementById("myModal");

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
  }