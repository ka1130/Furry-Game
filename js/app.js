(function () {

  document.addEventListener("DOMContentLoaded", function (event) {

    var Furry = function (x, y, dir) {
      this.x = x;
      this.y = y;
      this.dir = dir;
    };

    var Coin = function (x, y) {
      this.x = x;
      this.y = y;
    };

    var Board = function (board, furry, coin, score) {

    };

    var myFurry = new Furry(0, 0, "right");
    var myCoin = new Coin((Math.floor(Math.random() * 10)), (Math.floor(Math.random() * 10)));

    console.log(myFurry, myCoin);


    //end
  }, false);

})();