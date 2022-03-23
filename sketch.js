let sketch = function (p) {
  function startRunning() {
    p.loop();
  }

  function stopRunning() {
    p.noLoop();
  }

  p.setup = function () {
    let canvas = p.createCanvas(400, 400);
    p.angleMode(p.DEGREES);

    canvas.mouseOver(startRunning);
    canvas.mouseOut(stopRunning);
    p.noLoop();
  };

  p.draw = function () {
    p.background(220);

    let radius = p.map(p.sin(p.frameCount), -1, 1, 10, 200);
    p.ellipse(p.width / 2, p.height / 2, radius);
  };
};

new p5(sketch, "p5-container-1");
new p5(sketch, "p5-container-2");
new p5(sketch, "p5-container-3");
new p5(sketch, "p5-container-4");
