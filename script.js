$(function() {
  $("form#survey").submit(function(event) {
    var morality = $("select#morality").val();
    var cape = $("select#cape").val();
    var friends = $("select#friends").val();
    var gender = $("select#gender").val();
    var dog = $("select#dog").val();


    var hero = null;
    var count = 0;

    if(gender === "MALE") {     //male
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
            hero = "Joker";       //no cape friends
          } else {
            hero = "Deathstroke"; //no cape no friends
          }
        }
      }
    } else {                      //female

      //morality
    if (morality === "YES") {
      //capes
      if(cape === "YES") {
        //friends
        if(friends === "YES"){
          hero = "Power Girl";  //cape friends
        } else {
          hero = "Batgirl (Cassandra)";    //cape no friends
        }
        //no cape
      } else {
        if(friends === "YES"){
          hero = "Jean Grey";  //no cape friends
        } else {
          hero = "Rogue";      //no cape no friends
        }
      }


      //morality (bad)
    } else {
      //capes
      if(cape === "YES") {
        //friends
        if(friends === "YES"){
          hero = "Emma Frost";     //cape friends
        } else {
          hero = "Dark Angel";    //cape no friends
        }
        //no cape
      } else {
        //friends
        if(friends === "YES"){
          hero = "Harley Quinn"; //no cape friends
        } else {
          hero = "Mystique"; //no cape no friends
        }
      }
    }



    }
    //dog
    if(dog === "YES") {
      hero = "Krypto";
    }

    $("#hero").text(hero);
    $(".result").show();
    event.preventDefault();
  })
});
