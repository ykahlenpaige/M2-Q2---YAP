// ---------- Free roam camera ----------
// WASD / arrows = walk, Q/E = down/up, Scroll = fly toward where you look, Shift = faster
// Drag = look around, Scroll = zoom, R = top view, N = day/night, G = open/close snack bar door

// start inside the room, looking toward the snack bar
camera.position.set(4, 1.7, 3);

let yaw = 0.8;
let pitch = -0.1;

camera.rotation.order = 'YXZ';
camera.rotation.y = yaw;
camera.rotation.x = pitch;

const keys = {};

window.addEventListener('keydown', function (e) {
  keys[e.key.toLowerCase()] = true;
});

window.addEventListener('keyup', function (e) {
  keys[e.key.toLowerCase()] = false;
});


// ---------- Top view (R) ----------

function goToTopView() {
  camera.position.set(4, 32, -3);
  yaw = 0;
  pitch = -1.55;
  camera.rotation.y = yaw;
  camera.rotation.x = pitch;
}

window.addEventListener('keydown', function (e) {
  if (e.key === 'r' || e.key === 'R') {
    goToTopView();
  }
});


// ---------- Mouse look ----------

let isDragging = false;
let lastMouseX = 0;
let lastMouseY = 0;

renderer.domElement.addEventListener('pointerdown', function (e) {
  isDragging = true;
  lastMouseX = e.clientX;
  lastMouseY = e.clientY;
  renderer.domElement.setPointerCapture(e.pointerId);
});

renderer.domElement.addEventListener('pointerup', function () {
  isDragging = false;
});

renderer.domElement.addEventListener('pointermove', function (e) {
  if (!isDragging) return;

  yaw -= (e.clientX - lastMouseX) * 0.004;
  pitch -= (e.clientY - lastMouseY) * 0.004;
  lastMouseX = e.clientX;
  lastMouseY = e.clientY;

  // don't let the camera flip over (can look straight up or down)
  pitch = Math.min(Math.max(pitch, -1.55), 1.55);

  camera.rotation.y = yaw;
  camera.rotation.x = pitch;
});

// Scroll wheel moves you forward / backward where you're looking
renderer.domElement.addEventListener('wheel', function (e) {
  e.preventDefault(); // don't scroll the page

  const direction = new THREE.Vector3();
  camera.getWorldDirection(direction);

  camera.position.addScaledVector(direction, -e.deltaY * 0.02);
  camera.position.y = Math.max(camera.position.y, 0.5);
}, { passive: false });


// ---------- Movement ----------

function updateMovement(delta) {
  updateGate(delta);

  let speed = 7;
  if (keys['shift']) speed = 12;

  const step = speed * delta;

  // forward and right, flat on the ground (so you never slowly sink)
  const forwardX = -Math.sin(yaw);
  const forwardZ = -Math.cos(yaw);
  const rightX = Math.cos(yaw);
  const rightZ = -Math.sin(yaw);

  if (keys['w'] || keys['arrowup']) {
    camera.position.x += forwardX * step;
    camera.position.z += forwardZ * step;
  }
  if (keys['s'] || keys['arrowdown']) {
    camera.position.x -= forwardX * step;
    camera.position.z -= forwardZ * step;
  }
  if (keys['d'] || keys['arrowright']) {
    camera.position.x += rightX * step;
    camera.position.z += rightZ * step;
  }
  if (keys['a'] || keys['arrowleft']) {
    camera.position.x -= rightX * step;
    camera.position.z -= rightZ * step;
  }
  if (keys['e']) camera.position.y += step;
  if (keys['q']) camera.position.y -= step;

  // stay above the floor, no limit going up
  camera.position.y = Math.max(camera.position.y, 0.5);
}


// ---------- Snack bar half door (G) ----------

let gateOpen = false;

window.addEventListener('keydown', function (e) {
  if (e.key === 'g' || e.key === 'G') {
    gateOpen = !gateOpen;
  }
});

// swings the door smoothly toward open or closed
function updateGate(delta) {
  const target = gateOpen ? gateOpenAngle : 0;
  gatePivot.rotation.y += (target - gatePivot.rotation.y) * Math.min(1, delta * 6);
}