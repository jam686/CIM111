$(document).ready(function() {
console.log("running?");
  $(".s1").hide();
  $(".s2").hide();
  $(".s3").hide();
  $(".s4").hide();
  $(".s5").hide();
  $(".s6").hide();


  console.log("addText is online");

 	$(".pasta").on("click", function() {
 		$(".userText").html("");

  });






      $(".pastamaking").hide();

    //  var hideStatus = false;


        //SHOW AND HIDE EVENTS
        $(".pasta").on("click", function() {


    /*    if(hideStatus == false) {
        console.log ("Follow the step");
          $(".step 1").hide();
          $(".step 2").hide();
          $(".step 3").hide();
          $(".step 4").hide();
          $(".step 5").hide();
          $(".step 6").hide();

            hideStatus = true;
}
*/


            $("boxes.two").on("click", function() {
              console.log("test");


});
            $("boxes three").on("click", function() {
            $(".step 2").show();
});
            $("boxes four").on("click", function() {
            $(".step 3").show();
});
            $("boxes five").on("click", function() {
            $(".step 4").show();
});
            $("boxes six").on("click", function() {
            $(".step 5").show();
});
            $("boxes seven").on("click", function() {
            $(".step 6").show();
});
            hideStatus = false;

}); // event listener .pasta








/*
          // if true
          if(hideStatus == false){
              ("Step 1");
              $(".2").hide();
              $(".3").hide();
              $(".4").hide();
              $(".5").hide();
              $(".6").hide();
              $(".7").hide();
              $(".8").hide();
              $(".9").hide();
              $(".dogCatcher").show();

              hideStatus = true;
          }
          else{
             ("Hide");
              $(".2").show();
              $(".3").show();
              $(".4").show();
              $(".5").show();
              $(".6").show();
              $(".7").show();
              $(".8").show();
              $(".9").show();
              $(".pastamaking").hide();
              hideStatus = false;
          }
*/

}); // closer DOC ready
