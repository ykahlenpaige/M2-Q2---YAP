// ---------- Basic setup ----------

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// Stop the page from scrolling and remove the white border / gap around the canvas
document.documentElement.style.overflow = 'hidden';
document.body.style.margin = '0';
document.body.style.overflow = 'hidden';
document.body.style.background = '#1b1f2a';
renderer.domElement.style.display = 'block';
renderer.domElement.style.touchAction = 'none';
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1b1f2a);

const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 200);


// ---------- Room size ----------

const width = 12;
const depth = 9;
const height = 4.5;
const wallThickness = 0.2;


// ---------- Resize ----------

window.addEventListener('resize', function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});


// ---------- Animation loop ----------

const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);

  updateMovement(clock.getDelta());

  renderer.render(scene, camera);
}

// start once every script file has loaded
window.addEventListener('load', animate);