class Retro {
  constructor(canvaSelector) {
    this.pixelSize = 20;
    this.frameInterval = 100;

    this.canva = document.querySelector(canvaSelector);
    this.context = this.canva.getContext('2d');
  }

  pixel(x, y, color) {
    const context = this.context;
    const pixelSize = this.pixelSize;

    context.beginPath();
    context.rect(
      (x * pixelSize) + (x*2),
      (y * pixelSize) + (y*2),
      pixelSize,
      pixelSize
    );

    context.fillStyle = color;
    context.fill();
  }

  drawGrid(x, y, color) {
    for(let i=0; i< y; i++) {
      for (let j = 0; j < x; j++) {
        this.pixel(j, i, color);
      }
    }
  }

  randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  loop(loopFunction) {
    this.loopInterval = setInterval(
      loopFunction,
      this.frameInterval
    );
  }

  stopLoop() {
    clearInterval(this.loopInterval);
  }

  onKey(key, keypressFunction){
    document.addEventListener('keydown', (event) => {
      const keyName = event.key;
      
      if(keyName == key) {
        event.preventDefault();
        keypressFunction()
      };
    });
  }
}