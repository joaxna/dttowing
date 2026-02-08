$(document).ready(function(){
  $("#Spanish").hide();
  $("#Philippine").hide();
  $("#French").hide();
  $("#English").show();   
  
  $(".modeS").click(function(){
    $(".modS").toggleClass("filterShow");  
  }); 
  $(".lanS").click(function(){ 
    $(".langS").toggleClass("filterShow");
  });  
  function resetTheme() {
  $(".titles, .navBarT, .modS, .langS, .footer")
    .removeClass("darkMode greyMd ligthM");

  $(".mdS, .bt2, .modeS, .lanS, .tryIt")
    .removeClass("darkModeM greyMdM ligthMM");
}
  $(".drkM").click(function () {
    resetTheme();
    $(".titles, .navBarT, .modS, .langS, .footer")
      .addClass("darkMode");
    $(".mdS, .bt2, .modeS, .lanS, .tryIt")
      .addClass("darkModeM");
    $("body").removeClass("modeL modeG modeN").addClass("modeD");
  });

  $(".lgth").click(function () {
    resetTheme();

    $(".titles, .navBarT, .modS, .langS, .footer")
      .addClass("ligthM");

    $(".mdS, .bt2, .modeS, .lanS, .tryIt")
      .addClass("ligthMM");

    $("body").removeClass("modeD modeG modeN").addClass("modeL");
  });

  $(".greyM").click(function () {
    resetTheme();

    $(".titles, .navBarT, .modS, .langS, .footer")
      .addClass("greyMd");

    $(".mdS, .bt2, .modeS, .lanS, .tryIt")
      .addClass("greyMdM");

    $("body").removeClass("modeL modeD modeN").addClass("modeG");
  });
  $(".normMd").click(function () {
    resetTheme();
    $("body").removeClass("modeD modeL modeG").addClass("modeN");
  });

  function showLang(lang) {
    $("#English, #Spanish, #French, #Philippine").hide();
    $("#" + lang).show();
  }

  $(".lan1").click(() => showLang("Spanish"));
  $(".lan2").click(() => showLang("French"));
  $(".lan3").click(() => showLang("English"));
  $(".lan4").click(() => showLang("Philippine"));
});
