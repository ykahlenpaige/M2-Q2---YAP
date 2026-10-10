// ---------- Lighting ----------

const ambientLight = new THREE.HemisphereLight(0xffffff, 0x8a7a66, 1);
scene.add(ambientLight);

const sunLight = new THREE.DirectionalLight(0xfff1d6, 2);
sunLight.position.set(5, 8, 5);

sunLight.castShadow = true;

sunLight.shadow.mapSize.width = 2048;
sunLight.shadow.mapSize.height = 2048;

sunLight.shadow.camera.left = -15;
sunLight.shadow.camera.right = 15;
sunLight.shadow.camera.top = 15;
sunLight.shadow.camera.bottom = -15;

sunLight.shadow.camera.near = 0.1;
sunLight.shadow.camera.far = 50;

scene.add(sunLight);

// ---------- Movie Poster Lights ----------

const posterLight1 = new THREE.PointLight(0xffd27a, 0, 2.5);
posterLight1.position.set(-4.5, 2.1, 4.1);
posterLight1.castShadow = true;
scene.add(posterLight1);

const posterLight2 = new THREE.PointLight(0xffd27a, 0, 2.0);
posterLight2.position.set(-1.5, 2.1, 4.1);
posterLight2.castShadow = true;
scene.add(posterLight2);

const posterLight3 = new THREE.PointLight(0xffd27a, 0, 2.0);
posterLight3.position.set(1.5, 2.1, 4.1);
posterLight3.castShadow = true;
scene.add(posterLight3);

const posterLight4 = new THREE.PointLight(0xffd27a, 0, 2.0);
posterLight4.position.set(4.5, 2.1, 4.1);
posterLight4.castShadow = true;
scene.add(posterLight4);


// ---------- Hallway Poster Lights ----------

// One light per hallway poster (no shadows, so they stay cheap)

const hallwayPosterLightIntensity = 1.5;

const hallwayPosterLights = hallwayPosterLightSpots.map(function (spot) {
  const light = new THREE.PointLight(0xffd27a, 0, 2.0);
  light.position.set(spot.x, spot.y, spot.z);
  scene.add(light);
  return light;
});


// ---------- Cutout Studio Lights ----------

// Spotlights from the floor, aimed only at the cardboard cutouts (two per cutout)
// (the room stays dark around them). Tweak the number to make them brighter / dimmer.

const cutoutLightIntensity = 40;

const cutoutLights = cutoutLightSpots.map(function (spot) {
  const light = new THREE.SpotLight(0xfff0d6, 0, 7);
  light.position.set(spot.x, spot.y, spot.z);
  light.target.position.set(spot.tx, spot.ty, spot.tz);
  light.angle = 0.9;
  light.penumbra = 0.6;
  light.decay = 2;
  light.castShadow = false;
  scene.add(light);
  scene.add(light.target);
  return light;
});


// ---------- Snack Display Light ----------

// Lights up the snack display at night

const displayLightIntensity = 0.3;   // tweak this to make the case brighter / dimmer

const snackDisplayLights = [];

[0.83, 1.06].forEach(function (y) {          // under the upper shelf, under the glass top
  [-2.65, -2, -1.35].forEach(function (x) {
    const light = new THREE.PointLight(0xffe0a3, 0, 2);
    light.position.set(x, y, -1.1);
    scene.add(light);
    snackDisplayLights.push(light);
  });
});


// ---------- Soda & Popcorn Machine Lights ----------

// Subtle glow around the machines at night (tweak these to taste)
const sodaLightIntensity = 0.5;
const popcornLightIntensity = 0.7;

const sodaLights = sodaMachineXs.map(function (x) {
  const light = new THREE.PointLight(0xbfe3ff, 0, 1.8);
  light.position.set(x, 2.0, -3.2);          // just in front of the panel
  scene.add(light);
  return light;
});

const popcornLight = new THREE.PointLight(0xffc766, 0, 2.2);
popcornLight.position.set(popcornMachinePos.x, 1.75, popcornMachinePos.z);   // inside the glass
scene.add(popcornLight);


// ---------- Snackbar Overhead Lights ----------

// Soft warm light above the snackbar

const snackLight1 = new THREE.SpotLight(0xffe2b8, 2.0);
snackLight1.position.set(-4, 4.3, -3.0);
snackLight1.target.position.set(-4, 0.5, -3.5);
snackLight1.angle = Math.PI / 4;
snackLight1.penumbra = 0.7;
snackLight1.decay = 2;
snackLight1.distance = 4.5;
snackLight1.castShadow = false;
scene.add(snackLight1);
scene.add(snackLight1.target);


// Second snackbar light

const snackLight2 = new THREE.SpotLight(0xffe2b8, 2.0);
snackLight2.position.set(-1, 4.3, -3.0);
snackLight2.target.position.set(-1, 0.5, -3.5);
snackLight2.angle = Math.PI / 4;
snackLight2.penumbra = 0.7;
snackLight2.decay = 2;
snackLight2.distance = 4.5;
snackLight2.castShadow = false;
scene.add(snackLight2);
scene.add(snackLight2.target);


// Third snackbar light

const snackLight3 = new THREE.SpotLight(0xffe2b8, 2.0);
snackLight3.position.set(1.5, 4.3, -2.5);
snackLight3.target.position.set(1.5, 0.5, -3.0);
snackLight3.angle = Math.PI / 4;
snackLight3.penumbra = 0.7;
snackLight3.decay = 2;
snackLight3.distance = 4.5;
snackLight3.castShadow = false;
scene.add(snackLight3);
scene.add(snackLight3.target);

// Spotlights with decay 2 fade out fast, so they need a much bigger number than 2.
// Tweak these to make the snackbar lights brighter / dimmer.
const snackLightDayIntensity = 8;     // faint in daytime (the sun is already bright)
const snackLightNightIntensity = 25;  // clearly visible at night

const snackOverheadLights = [snackLight1, snackLight2, snackLight3];


// ---------- Day / Night ----------

// Press N to switch

let isNight = false;

function updateDayNight() {

  if (isNight) {

    // Night

    scene.background.set(0x05070d);
    ambientLight.intensity = 0.15;

    sunLight.intensity = 0.2;
    sunLight.color.set(0x8899ff);

    posterLight1.intensity = 1.5;
    posterLight2.intensity = 1.5;
    posterLight3.intensity = 1.5;
    posterLight4.intensity = 1.5;
    hallwayPosterLights.forEach(function (l) { l.intensity = hallwayPosterLightIntensity; });

    cutoutLights.forEach(function (l) { l.intensity = cutoutLightIntensity; });
    studioLightLensMaterial.emissiveIntensity = 1.5;

    snackDisplayLights.forEach(function (l) { l.intensity = displayLightIntensity; });

    trailerDisplayMaterial.emissiveIntensity = 1.2;

    setMetalReflection(reflectionBrightnessNight);

    orderDisplayMaterial.emissiveIntensity = 1.2;

    floorLightMaterial.emissiveIntensity = 1.5;
    floorGlowMaterial.opacity = 0.8;

    snackOverheadLights.forEach(function (l) { l.intensity = snackLightNightIntensity; });

    sodaLights.forEach(function (l) { l.intensity = sodaLightIntensity; });
    popcornLight.intensity = popcornLightIntensity;
    sodaPanelMaterial.emissiveIntensity = 0.5;
    popcornHeaterMaterial.emissiveIntensity = 1.0;

    theaterSign1Material.emissiveIntensity = 1.2;
    theaterSign2Material.emissiveIntensity = 1.2;

  } else {

    // Day

    scene.background.set(0xcfe8ff);
    ambientLight.intensity = 1;

    sunLight.intensity = 2;
    sunLight.color.set(0xfff1d6);

    posterLight1.intensity = 0;
    posterLight2.intensity = 0;
    posterLight3.intensity = 0;
    posterLight4.intensity = 0;
    hallwayPosterLights.forEach(function (l) { l.intensity = 0; });

    cutoutLights.forEach(function (l) { l.intensity = 0; });
    studioLightLensMaterial.emissiveIntensity = 0;

    snackDisplayLights.forEach(function (l) { l.intensity = 0; });

    trailerDisplayMaterial.emissiveIntensity = 0.5;

    setMetalReflection(reflectionBrightnessDay);

    orderDisplayMaterial.emissiveIntensity = 0;

    floorLightMaterial.emissiveIntensity = 0.3;
    floorGlowMaterial.opacity = 0;

    snackOverheadLights.forEach(function (l) { l.intensity = snackLightDayIntensity; });

    sodaLights.forEach(function (l) { l.intensity = 0; });
    popcornLight.intensity = 0;
    sodaPanelMaterial.emissiveIntensity = 0;
    popcornHeaterMaterial.emissiveIntensity = 0;

    theaterSign1Material.emissiveIntensity = 0.2;
    theaterSign2Material.emissiveIntensity = 0.2;

  }

}

updateDayNight();


// ---------- Shadows ----------

scene.traverse(function (object) {

  if (object.isMesh) {

    object.castShadow = true;
    object.receiveShadow = true;

    // glass is see-through, so it shouldn't cast a solid shadow
    if (object.material === glassMaterial) object.castShadow = false;

    // carpet, floor lights and glows are flat, no need for shadows
    if (object.userData.noShadow) object.castShadow = false;

  }

});


// ---------- Keyboard ----------

// Press N to switch between day and night

window.addEventListener('keydown', function (e) {

  if (e.key === 'n' || e.key === 'N') {

    isNight = !isNight;
    updateDayNight();

  }

});