let hydra, hydraCanvas;
hydraCanvas = document.getElementById("myCanvas");
hydraCanvas.width = window.innerWidth;
hydraCanvas.height = window.innerHeight;
hydraCanvas.getContext("webgl", { preserveDrawingBuffer: true });
hydra = new Hydra({
  canvas: hydraCanvas,
  detectAudio: false,
  enableStreamCapture: false
});

var s = 1;
var h = 1;
var st = 1;

s0.initVideo(
    "assets/MPEG0038.mp4"
  );
  src(o0)
    .scrollY(-0.003)
    .blend(o0)
    .layer(
      src(s0)
        .scale([5, 1].smooth().fast(0.3))
        .luma(0.5, 0)
        .modulate(noise(2), 0.01)
        .modulate(o0, 0.1)
        .modulateRotate(osc(3), 1)
        .scale(() => s)
        .hue(() => h)
        .saturate(() => st)
    )
    .out();