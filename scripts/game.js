class Game {
  constructor(canva, snake) {
    this.canva = canva;
    this.snake = snake;
    this.difficultyLevel = 1;
  }

  start() {
    canva.drawGrid(20, 20, '#eee');
    this._initEvents();
    let counter = 0;

    canva.loop(() => {
      counter++;

      if(counter == 10 - this.difficultyLevel) {
        counter = 0;

        canva.drawGrid(20, 20, '#eee');
        snake.takeStep();
        snake.draw(canva);
  
        canva.pixel(10, 10, canva.randomColor())
      }
    })
  }

  _initEvents() {
    canva.onKey('ArrowUp', () => {
      snake.changeDirection('up');
    }).onKey('ArrowDown', () => {
      snake.changeDirection('down');
    }).onKey('ArrowRight', () => {
      snake.changeDirection('right');
    }).onKey('ArrowLeft', () => {
      snake.changeDirection('left');
    });
  }
}