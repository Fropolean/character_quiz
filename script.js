$(function() {
  $("form#survey").submit(function(event) {
    var question1 = $("select#question1").val();
    var question2 = $("select#question2").val();
    var morality = $("select#morality").val();
    var cape = $("select#cape").val();
    var friends = $("select#friends").val();
    var gender = $("select#gender").val();
    var dog = $("select#dog").val();


    var hero = null;
    var count = 0; //if positive; strong:if zero; weak

    if (question1 === "YES" && question2 === "YES") {
      count += 3;
    } else if(question1 === "YES") {
      count += 1;
    }

//$("#result").append('<img src="" alt="">');

// alert(count);


    if(gender === "MALE") {     //male
        //morality
      if (morality === "YES") {
        //capes
        if(cape === "YES") {
          //friends
          if(friends === "YES" && count > 2){
            hero = "Superman";  //cape friends SUPER STRONG
 //cape friends SUPER STRONG
          } else if(friends === "YES" && count >= 1) {
            hero = "Thor";  //cape friends not as strong
          } else {
            hero = "Batman";    //cape no friends
          }
          //no cape
        } else {
          if(friends === "YES" && count === 1){
            hero = "Iron Man";  //no cape friends
          } else if(friends === "YES") {
            hero = "Professor X";
          } else  {
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
    } else {//female

      //morality
    if (morality === "YES") {
      //capes
      if(cape === "YES") {
        //friends
        if(friends === "YES" && count > 2) {
          hero = "Power Girl";  //cape friends
        } else if (friends === "YES" && count >= 1) {
          hero = "Batgirl"
        }
          else {
          hero = "Storm";    //cape no friends
        }
        //no cape
      } else {
        if(friends === "YES"){
          hero = "Jean Grey";  //no cape friends
        } else if (friends === "YES" && count > 1) {
          hero = "Jessica Jones"; //no cape no friends med-strong
        } else {
          hero = "Rogue";      //no cape no friends
        }
      }
      //end good female heros
      //morality is BAD
    } else {
      //capes
      if(cape === "YES") {
        //friends
        if(friends === "YES" && count > 2) {
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
  } //end females
    //dog
    if(dog === "YES") {
      hero = "Krypto";
    }

    $("#hero").text(hero);
    $(".result").show();

    event.preventDefault();
  })
});
