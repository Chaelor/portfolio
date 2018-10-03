$("document").ready(function() {
  $(".hide-li").on("click", function () {
    $(".sidenav").hide();
    $(".sidenav-overlay").hide();
    $("body").css({ "overflow": "visible" });
  });
  //initializes the side navbar
  $(".sidenav").sidenav();
  AOS.init();
});
