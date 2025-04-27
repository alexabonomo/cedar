import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Initialize Hydra
let hydraCanvas = document.getElementById("myCanvas");
hydraCanvas.width = window.innerWidth;
hydraCanvas.height = window.innerHeight;
hydraCanvas.getContext("webgl", { preserveDrawingBuffer: true });

const hydra = new Hydra({
  canvas: hydraCanvas,
  detectAudio: false,
  enableStreamCapture: false
});

// Init video
s0.initVideo("assets/MPEG0038.mp4");

// Initialize THREE.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, 
  window.innerWidth / window.innerHeight, 
  0.1, 
  1000
);

// Setup renderer
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0); // Transparent background

// Attach renderer canvas to the document (optional)
document.body.appendChild(renderer.domElement);

// Position the camera
camera.position.z = 1.5;

// Load GLTF model
const loader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('/examples/jsm/libs/draco/');
loader.setDRACOLoader(dracoLoader);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(1, 1, 1).normalize();
scene.add(directionalLight);

loader.load(
  'assets/bible.glb',
  function (gltf) {
    scene.add(gltf.scene);
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  function (error) {
    console.error('An error happened', error);
  }
);

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
  requestAnimationFrame(animate);

    // Rotate the object if the mouse is being held down
    if (controls.mouseButtons.LEFT === THREE.MOUSE.PAN && controls.mouseButtons.MIDDLE === THREE.MOUSE.DOLLY && controls.mouseButtons.RIGHT === THREE.MOUSE.ROTATE) {
        if (controls.mouseButtonsState[THREE.MOUSE.RIGHT]) {
            object.rotation.y += 0.01; // Adjust the rotation speed as needed
        }
    }
  renderer.render(scene, camera);
}
animate();

// Hydra integration with Three.js
s1.init({ src: renderer.domElement });

// Hydra visual composition
var s = 1;
var h = 1;
var st = 1;

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
  .layer(src(s1))
  .out();

var rot = function() {
  src(o0)
    .blend(osc(10, 0.3, 0.5), 0.001)
    .scale(1, 0.99)
    .modulateRotate(osc(3), 0.02)
    .saturate(1.01)
    .scrollY(-0.002)
    .scale(() => s)
    .hue(() => h)
    .saturate(() => st)
    .blend(o0)
    .out();
};

var thunder = function() {
  s0.initVideo(
    "assets/MPEG0033.mp4"
  );
  src(o0)
    .colorama(-0.05)
    .thresh()
    .scale(1.001)
    .blend(o0)
    .layer(
      src(s0)
        .modulate(noise(2), 0.01)
        .luma(0.7, 0.3)
        .scale(() => s)
        .hue(() => h)
        .saturate(() => st)
    )
    .out();
};

var cloud = function() {
  s0.initVideo(
    "assets/MPEG0027.mp4"
  );
  src(o0)
    .blend(osc(10, 0.1, 0.5), 0.01)
    .modulate(o0, -0.001)
    .blend(o0)
    .layer(
      src(s0)
        .luma(0.8, 0)
        .modulate(noise(8), 0.01)
        .modulate(o0, -0.01)
        .scale(() => s)
        .hue(() => h)
        .saturate(() => st)
    )
    .out();
};

var lightning = function() {
  s1.initVideo(
    "assets/MPEG0018.mp4"
  );

  src(s1)
    .scrollX([-0.1, 0.1].fast(12))
    .scale(1, 0.3)
    .invert([0, 1].fast(4))
    .modulate(o0, -0.001)
    .scale(() => s)
    .hue(() => h)
    .saturate(() => st)
    .out();
};

var rainbow = function() {
  s2.initVideo(
    "assets/MPEG0034.mp4"
  );

  src(s2)
    .hue(() => h)
    .scale(1, 0.8, 1)
    .saturate(8)
    .blend(osc(3, 1, 10))
    .blend(
      gradient()
        .hue(() => time * 0.5)
        .saturate(0.5)
        .scrollY(0, -0.3)
    )
    .modulate(o0, -0.5)
    .blend(o0, 0.8)
    .layer(
      src(s2)
        .scale(1, 0.8, 1)
        .luma(0.7, 0.5)
    )
    .saturate(() => st)
    .scale(() => s)
    .out();
};

var mockSuns = function() {
  s2.initVideo(
    "assets/MPEG0038.mp4"
  );

  src(s2)
    .scale(1, 0.3)
    .scrollY([0, 0.01].smooth())
    .scrollX([0, 0.01].smooth())
    .modulateScale(osc(3, 0.3), 0.1)
    .add(
      noise(2, 1)
        .thresh(0.1, 0.5)
        .mult(osc(10, 0, 1))
        .scale(() => s)
        .hue(() => h)
        .saturate(() => st)
        .modulate(o0)
    )
    .layer(
      osc(100, -0.01)
        .kaleid(200)
        .scale(1, 0.45)
        .mask(shape(200, 0.4, 0).scale(1, 0.5, 1.2))
        .luma(0.99, 0.5)
        .scrollY(0.05)
        .mult(
          osc(100, -0.1, 1)
            .kaleid(200)
            .scale(1, 0.45)
        )
    )
    .modulate(o0, -0.001)
    .out();
};

var sunnySpells = function() {
  s3.initVideo(
    "assets/MPEG0040.mp4"
  );

  src(o0)
    .blend(osc(10, -0.5, 0.3).rotate(() => Math.PI / 2), 0.05)
    .scrollY(-0.001)
    .modulate(o0, -0.001)
    .blend(o0)
    .layer(
      src(s3)
        .scale(1, 0.9)
        .luma(0.8, 0)
        .hue(() => h)
    )
    .layer(
      src(s3)
        .hue(() => h)
        .scale(1, 0.9)
        .mask(
          shape(4, 0.3, 0)
            .scale(1, 1, 0.4)
            .scrollY(-0.36)
        )
    )
    .scale(() => s)
    .saturate(() => st)
    .blend(
      gradient()
        .scale(0.5)
        .repeat(5, 5)
        .scrollY(0, -0.3)
        .hue(0.5),
      0.01
    )
    .out();
};

var rain = function() {
  s3.initVideo(
    "assets/MPEG0053.mp4"
  );
  src(o0)
    .scrollX(-0.001)
    .scrollY(-0.001)
    .layer(
      src(s3)
        .scale(1, 0.3)
        .luma(0.2)
        .add(
          osc(300, 0)
            .luma(0.998)
            .rotate(-0.3)
            .mult(
              noise(8, 1)
                .thresh()
                .scrollY(0, -0.1)
            )
        )
    )
    .scale(() => s)
    .hue(() => h)
    .saturate(() => st)
    .add(noise(5, 1), 0.3)
    .out();
};

  function random() {
    var hydraArray = [
      thunder,
      cloud,
      lightning,
      rainbow,
      mockSuns,
      sunnySpells,
      rain,
      rot
    ];
    var hydraRandom = hydraArray[Math.floor(Math.random() * hydraArray.length)];
    // return hydraRandom;
    hydraRandom();
    console.log(hydraRandom);
  }


  class ButtonElement {
    constructor({ name, func, toggle }) {
      this.name = name;
      this.func = func;
      this.toggle = !!toggle;
      this.player = undefined;
      this.active = false;
      const button = document.createElement("div");
      this.el = button;
      button.innerHTML = name;
      button.className = "changebutton";
      button.addEventListener("click", () => {
        this.onclick();
      })
      const buttonsElement = document.querySelector(".buttons");
      buttonsElement.appendChild(button);
    }
    onclick() {
      if (this.toggle) {
        this.active = !this.active;
        if (this.active) {
          this.player = this.func();
        }
        else {
          if (this.player !== undefined) {
            this.player.stop();
          }
        }
        this.el.className = `soundbutton ${ this.active ? "active" : "" }`;
      }
      else {
        this.func();
      }
    }
  }
  
  const buttonObjects = [
    { name: "dataset", func: dataset},
    { name: "change", func: random }
  ].map(e => new ButtonElement(e));

  function dataset() {
      var strWindowFeatures = "location=yes,height=570,width=520,scrollbars=yes,status=yes";
      var URL = "https://drive.google.com/drive/folders/1PBhSHouIRlB1czMqxAsUDnkf9h_ecH4u?usp=sharing" + location.href;
      var win = window.open(URL, "_blank", strWindowFeatures);
  }