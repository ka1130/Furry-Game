(function () {

  document.addEventListener("DOMContentLoaded", function (event) {

    var Furry = function () {
      this.x = 0;
      this.y = 0;
      this.dir = "right";
    };

    var Coin = function () {
      this.x = Math.floor(Math.random() * 10);
      this.y = Math.floor(Math.random() * 10);
    };

    var Game = function () {
      this.board = document.getElementById("board").children;
      this.furry = new Furry();
      this.coin = new Coin();
      this.score = 0;
    };

    Game.prototype.getIndex = function (x, y) {
      console.log(x + y * 10);
      return x + y * 10;
    };

    Game.prototype.drawGame = function () {
      var furryPos = this.getIndex(this.furry.x, this.furry.y);
      var coinPos = this.getIndex(this.coin.x, this.coin.y);

      this.board[furryPos].classList.add("furry");
      this.board[coinPos].classList.add("coin");
    };

    var myGame = new Game();
    myGame.drawGame();

    console.log(myGame);


    //end
  }, false);

})();