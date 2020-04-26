class Snake {
  constructor() {
    this.body = [
      { x: 5, y: 5},
      { x: 4, y: 5},
      { x: 3, y: 5}
    ];

    this.directionLocked = false;
    this.direction = 'up';
  }

  changeDirection(direction) {
    if (this.directionLocked) {
      return;
    }

    const invalidMovements = {
      up: 'down',
      down: 'up',
      left: 'right',
      right: 'left'
    }

    if(invalidMovements[this.direction] != direction) {
      this.direction = direction;
      this.directionLocked = true;
    }
  }
  
  takeStep() {
    const body = this.body;
  
    body.pop();
    body.unshift(this._getNextStep());

    this.directionLocked = false;
  }

  draw(canva) {
    const body = this.body;

    body.forEach((pixel) => {
      canva.pixel(pixel.x, pixel.y, '#000');
    });
  }

  tail() {
    const body = this.body;
    
    return body[body.length - 1]
  }
  
  _getNextStep() {
    const firstPixel = this.body[0];

    switch (this.direction) {
      case 'up':
        return { x: firstPixel.x, y: firstPixel.y - 1 }
      case 'down':
        return { x: firstPixel.x, y: firstPixel.y + 1 }
      case 'left':
        return { x: firstPixel.x -1 , y: firstPixel.y }
      case 'right':
        return { x: firstPixel.x + 1 , y: firstPixel.y }
    }
  }
}