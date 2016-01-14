$(function() {
  $("form#survey").submit(function(event) {
    var morality = $("select#morality").val();
    var cape = $("select#cape").val();
    var friends = $("select#friends").val();

    var hero = null;
    var count = 0;


      //morality
    if (morality === "YES") {
      //capes
      if(cape === "YES") {
        //friends
        if(friends === "YES"){
          hero = "Superman";  //cape friends
        } else {
          hero = "Batman";    //cape no friends
        }
        //no cape
      } else {
        if(friends === "YES"){
          hero = "Iron Man";  //no cape friends
        } else {
          hero = "Hulk";      //no cape no friends
        }
      }


      //morality
    } else {
      //capes
      if(cape === "YES") {
        //friends
        if(friends === "YES"){
          hero = "Magneto";     //cape friends
        } else {
          hero = "Dr. Doom";    //cape no friends
        }
        //no cape
      } else {
        //friends
        if(friends === "YES"){
          hero = "Joker"; //no cape friends
        } else {
          hero = "Deathstroke"; //no cape no friends
        }
      }
    }

    $("#hero").text(hero);
    $(".result").show();
    event.preventDefault();
  })
});
