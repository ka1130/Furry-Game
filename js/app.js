(function () {

  document.addEventListener("DOMContentLoaded", function (event) {

    var Furry = function () {
      this.x;
      this.y;
      this.dir;
    };

    var Coin = function () {
      this.x = Math.floor(Math.random() * 10);
      this.y = Math.floor(Math.random() * 10);
    };

    var Board = function (board, furry, coin, score) {
      this.board = document.getElementById("board").children;
      this.furry = new Furry();
      this.coin = new Coin();
      this.score = 0;
    };


    console.log(Board);


    //end
  }, false);

})();