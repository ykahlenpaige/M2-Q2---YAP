// ---------- MATERIALS ----------
// To change a picture, scroll down to "ALL YOUR PICTURES".


// ---------- SHINY METAL ----------

const reflectionBrightnessDay = 1.6;     // how strong the reflections are in the daytime
const reflectionBrightnessNight = 0.7;   // ...and at night (lighting.js uses these)

function createReflectionEnvironment() {

  try {

    const studio = new THREE.Scene();

    studio.add(new THREE.Mesh(
      new THREE.BoxGeometry(24, 12, 24),
      new THREE.MeshBasicMaterial({ color: 0x555a68, side: THREE.BackSide })
    ));

    // bright light panels (colour values above 1 = brighter than white)
    function lightPanel(w, h, x, y, z, rx, ry, r, g, b) {
      const panel = new THREE.Mesh(
        new THREE.PlaneGeometry(w, h),
        new THREE.MeshBasicMaterial({ color: new THREE.Color().setRGB(r, g, b), side: THREE.DoubleSide })
      );
      panel.position.set(x, y, z);
      panel.rotation.set(rx, ry, 0);
      studio.add(panel);
    }

    [-6, -2, 2, 6].forEach(function (x) {
      lightPanel(2.2, 14, x, 5.9, 0, Math.PI / 2, 0, 6, 5.2, 4);
    });
    lightPanel(7, 4, -11.9, 2, 2, 0, Math.PI / 2, 3.2, 4.2, 6);
    lightPanel(10, 3, 0, 2.5, -11.9, 0, 0, 2.4, 1.8, 1.2);
    lightPanel(10, 3, 0, 2.5, 11.9, 0, 0, 2.4, 1.8, 1.2);
    lightPanel(8, 2.5, 11.9, 2.5, 0, 0, Math.PI / 2, 1.8, 1.4, 1.0);

    const generator = new THREE.PMREMGenerator(renderer);
    const environment = generator.fromScene(studio, 0.02).texture;
    generator.dispose();
    return environment;

  } catch (error) {

    return null;

  }
}

const reflectionEnvironment = createReflectionEnvironment();

const shinyMetalMaterials = [];

// shinyMetal(colour, roughness): roughness 0 = perfect mirror, 1 = dull
function shinyMetal(color, roughness) {
  const material = new THREE.MeshStandardMaterial({
    color: color,
    metalness: 1,
    roughness: roughness,
    envMap: reflectionEnvironment,
    envMapIntensity: reflectionBrightnessDay
  });
  shinyMetalMaterials.push(material);
  return material;
}

function setMetalReflection(brightness) {
  shinyMetalMaterials.forEach(function (material) {
    material.envMapIntensity = brightness;
  });
}


// ---------- PLAIN MATERIALS (just a colour, no picture) ----------

// solid(colour, extras) = normal material; glossy(colour) = shiny frame material
function solid(color, extras) {
  return new THREE.MeshStandardMaterial(Object.assign({ color: color }, extras));
}

function glossy(color) {
  return new THREE.MeshPhongMaterial({ color: color, specular: 0x777777, shininess: 100 });
}

// ---------- Room ----------

const wallMaterial = solid(0xe9e4da);
const windowFrameMaterial = solid(0x111111);
const glassMaterial = solid(0xbfe3ff, { transparent: true, opacity: 0.4, side: THREE.DoubleSide });


// ---------- Snack bar ----------

const counterMaterial = solid(0xc4121a);
const shelfMaterial = solid(0x8b5a2b);
const chipRedMaterial = solid(0xd62828);
const chipYellowMaterial = solid(0xf4c430);
const screenMaterial = solid(0x222222);
const orderScreenMaterial = solid(0x111111);
const registerMaterial = solid(0x333333);
const registerMonitorMaterial = new THREE.MeshBasicMaterial({ color: 0xbff5cf });
const registerButtonMaterial = solid(0xd4af37);


// ---------- Rope barriers ----------

const postMaterial = shinyMetal(0xd4af37, 0.12);
const ropeMaterial = createRopeMaterial();


// ---------- Poster frames and trailer screens ----------

const posterFrameMaterial = glossy(0x111111);
const trailerFrameMaterial = glossy(0x222222);
const trailerDisplayMaterial = solid(0x222222, { emissive: 0xffe0a3, emissiveIntensity: 3.0 });


// ---------- Popcorn machine ----------

const popcornMachineMaterial = solid(0x222222);
const popcornGlassMaterial = solid(0xbfe3ff, { transparent: true, opacity: 0.3 });
const popcornYellowMaterial = solid(0xffc928);
const popcornRedMaterial = solid(0xc4121a);
const popcornMaterial = solid(0xffe8a3);
const popcornHeaterMaterial = solid(0xffc928, { emissive: 0xff9a2e, emissiveIntensity: 0 });


// ---------- Soda dispensers ----------

const sodaMachineMaterial = solid(0x333333);
const sodaButtonMaterial = solid(0xc4121a);
const sodaMetalMaterial = solid(0xbfc5cc, { metalness: 0.6, roughness: 0.3 });
const sodaNozzleMaterial = solid(0x111111);
const sodaCupMaterial = solid(0xffffff);
const sodaPanelMaterial = solid(0xbfc5cc, {
  metalness: 0.6,
  roughness: 0.3,
  emissive: 0xbfe3ff,
  emissiveIntensity: 0
});


// ---------- Hallway arches ----------

const archWallMaterial = solid(0xd8cfbd);
const archTrimMaterial = shinyMetal(0xd4af37, 0.15);


// ---------- Theater doors ----------

const theaterDoorMaterial = solid(0x1d2233, { roughness: 0.6 });
const theaterDoorFrameMaterial = solid(0x0e1018, { roughness: 0.7 });
const theaterDoorWindowMaterial = solid(0x0a1428, { roughness: 0.2, metalness: 0.3 });
const theaterMetalMaterial = shinyMetal(0xe8ecf2, 0.05);
const theaterKickMaterial = createShinySilverPlateMaterial();


// ---------- Snack bar half door ----------

const gateMaterial = solid(0xc4121a);
const gateTrimMaterial = solid(0xd4af37, { roughness: 0.4, metalness: 0.3 });


// ---------- Ambient floor lights ----------

const floorLightRimMaterial = solid(0xb8bcc6, { roughness: 0.4, metalness: 0.3 });
const floorLightMaterial = solid(0xffffff, { emissive: 0xfff2d0, emissiveIntensity: 0.6 });


// ---------- Cardboard cutout edges, studio lights, cube ----------

const cutoutEdgeMaterial = solid(0xfaf4e6, { roughness: 1 });
const studioLightBodyMaterial = solid(0x141414, { roughness: 0.5, metalness: 0.3 });
const studioLightLensMaterial = solid(0xffffff, { emissive: 0xfff0d0, emissiveIntensity: 0 });
const cubeMaterial = solid(0x4f8cff, { roughness: 0.6 });


// ---------- TEXTURED MATERIALS (pictures) ----------


const IMAGE_FOLDER = 'texture/';

// Floors
const floorImage = 'cinemafloor.jpg';
const carpetImage = 'carpet.jpg';
// tile floor inside the snack bar ('' = black & white checker). A list = tries each name until one loads.
const snackFloorImage = ['floor2.jpg', 'floor2.png', 'floor2.jpeg'];

// Posters on the walls
const posterImage = '';

// Lobby posters, in order poster1, poster2, poster3, poster4 (room.js, x = -4.5, -1.5, 1.5, 4.5)
const lobbyPosterImages = ['pacificrim.jpg', 'Spiderman.jpg', 'Superman.jpg', 'avatar.jpg'];

// Right hallway posters (the first hallway), x = 8, 10, 12
const rightHallPosterImages = ['chans.jpg', 'rae.png', 'vinnie.png'];

// Back hallway posters (the second hallway), z = -7, -9, -11
const backHallPosterImages = ['jw1.jpg', 'jw2.jpg', 'jw3.jpg'];

// Walls (also used for the ceilings, which share the wall material)
const wallImage = 'wall.jpg';

// Snack bar counter: outside = the sides that face the lobby, inside = the sides that face the
// staff aisle, top = the countertop
const counterOutsideImage = 'snackbarpanel.jpg';
const counterInsideImage = 'snackbarbackpanel.jpg';
const counterTopImage = 'countertop.jpg';

// Snacks, in order [red one, yellow one]
const shelfChipImages = [['dorits.png', 'doritos.png', 'Dorits.png'], ['tates.png', 'tate.png', 'Tates.png']];
const displayChipImages = [['nerds.png', 'nerd.png', 'Nerds.png'], ['m&ms.png', 'mms.png', 'm&m.png']];

// The cups under the soda machines
const cupImage = 'cup.png';

// The ceilings are mirrors (true = mirror, false = plain wall colour/picture)
const ceilingMirrorInLobby = true;
const ceilingMirrorInHallways = true;
const ceilingMirrorTint = 0xdfe6ee;
const ceilingMirrorQuality = 0.75;

// The third menu screen above the chips shows this picture (it tries each name until one loads)
const menuScreenImage = ['hbcameo.png'];
// How it fits the screen:  'contain' = whole picture visible (dark bars if the shape differs),
//                          'cover'   = fills the screen (edges get cropped)
const menuScreenImageFit = 'contain';

// The little cube on the counter
const cubeImage = 'meat.jpg';

// Cardboard cutouts
const cutoutImage1 = 'Shin_Godzilla.png';
const cutoutImage2 = 'resident evil.jpeg';

// The two tall trailer screens in the lobby: left (x = -3) and right (x = 3)
// Videos live in the texture folder too. They are always muted and loop.
const trailerVideos = ['Killmonger.mp4', 'FrankCastle.mp4'];

// How a video fits a trailer screen (the screens are tall and thin, videos are usually wide):
//   'cover'   = fills the whole screen, never squished (the sides get cropped)
//   'stretch' = forced to the screen shape (squished)
const trailerVideoFit = 'cover';

// With 'cover': which part of a wide video stays visible.
// 0 = left edge, 0.5 = centre, 1 = right edge. One number per video, same order as above.
const trailerVideoFocusX = [0.5, 0.5];

// The three big screens above the front counter: left, middle, right
const orderScreenImages = ['Foodposter1.png', 'Foodposter2.png', 'Foodposter3.png'];

// How a picture fits an order screen:
//   'contain' = whole picture visible, never squished (dark bars if the shape is different)
//   'cover'   = fills the whole screen, never squished (the edges get cropped)
//   'stretch' = forced to the screen shape (squished if the shape is different)
const orderImageFit = 'contain';

// How big one copy of a tiling picture is, in room units (the room is 12 wide).
// Bigger number = bigger tiles.
const floorTileSize = 2.0;
const carpetTileSize = 2.0;
const snackFloorTileSize = 0.8;
const wallTileSize = 3.0;
const counterPanelTileSize = 1.1;
const counterTopTileSize = 1.5;


// ---------------------------------------------------------------------
//  Everything below makes the pictures work. No need to edit it.
// ---------------------------------------------------------------------

// Loads a picture from the texture folder and puts it on a material.
// repeat = true makes the picture tile (for floors).
// fileName can also be a list of names: they are tried in order until one loads.
function putImageOn(material, fileName, repeat, afterLoad) {

  const names = Array.isArray(fileName) ? fileName : [fileName];

  function tryName(i) {

    if (names[i] === undefined || names[i] === '') return;

    new THREE.TextureLoader().load(
      IMAGE_FOLDER + names[i],
      function (texture) {
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.anisotropy = 8;
        if (repeat) {
          texture.wrapS = THREE.RepeatWrapping;
          texture.wrapT = THREE.RepeatWrapping;
        }
        if (afterLoad) afterLoad(texture);
        material.map = texture;
        material.color.set(0xffffff);
        material.needsUpdate = true;
      },
      undefined,
      function () {
        tryName(i + 1);
      }
    );
  }

  tryName(0);
}

// Makes a picture repeat across the room using the world position (x, z) as the texture
// coordinates, so room.js doesn't need to know about it: every mesh that uses the material
// gets tiles of the same size, whatever the size of the mesh is.
function applyWorldTiling(material, tileSize, cacheKey) {

  material.customProgramCacheKey = function () {
    return cacheKey;
  };

  material.onBeforeCompile = function (shader) {

    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec2 vWorldTileUV;')
      .replace(
        '#include <uv_vertex>',
        '#include <uv_vertex>\nvWorldTileUV = (modelMatrix * vec4(position, 1.0)).xz / ' + tileSize.toFixed(3) + ';'
      );

    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec2 vWorldTileUV;')
      .replace(
        '#include <map_fragment>',
        '#ifdef USE_MAP\n  diffuseColor *= texture2D(map, vWorldTileUV);\n#endif'
      );
  };
}


// Same idea, but for any surface (walls, counters, tops). The picture repeats using the world
// position, and which two axes it uses depends on which way the surface faces, so a long
// counter and a short counter get the same size tiles and nothing is stretched.
// The sign flips keep the picture the right way round when seen from outside.
function applyWorldTilingAllSides(material, tileSize, cacheKey) {

  material.customProgramCacheKey = function () {
    return cacheKey;
  };

  material.onBeforeCompile = function (shader) {

    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec2 vWorldTileUV;')
      .replace(
        '#include <uv_vertex>',
        '#include <uv_vertex>\n' +
        'vec3 tileWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;\n' +
        'vec3 tileWorldNormal = normalize(mat3(modelMatrix) * normal);\n' +
        'vec3 tileAbsNormal = abs(tileWorldNormal);\n' +
        'vec2 tileUV;\n' +
        'if (tileAbsNormal.y >= tileAbsNormal.x && tileAbsNormal.y >= tileAbsNormal.z) {\n' +
        '  tileUV = vec2(tileWorldPos.x, -tileWorldPos.z);\n' +
        '} else if (tileAbsNormal.x > tileAbsNormal.z) {\n' +
        '  tileUV = vec2(-sign(tileWorldNormal.x) * tileWorldPos.z, tileWorldPos.y);\n' +
        '} else {\n' +
        '  tileUV = vec2(sign(tileWorldNormal.z) * tileWorldPos.x, tileWorldPos.y);\n' +
        '}\n' +
        'vWorldTileUV = tileUV / ' + tileSize.toFixed(3) + ';'
      );

    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec2 vWorldTileUV;')
      .replace(
        '#include <map_fragment>',
        '#ifdef USE_MAP\n  diffuseColor *= texture2D(map, vWorldTileUV);\n#endif'
      );
  };
}


// ---------- Walls and ceilings ----------

applyWorldTilingAllSides(wallMaterial, wallTileSize, 'wall-tiling');
putImageOn(wallMaterial, wallImage, true);


// ---------- Snack bar counter (outside / inside / countertop) ----------

const counterOutsideMaterial = solid(0xc4121a);
applyWorldTilingAllSides(counterOutsideMaterial, counterPanelTileSize, 'counter-outside-tiling');
putImageOn(counterOutsideMaterial, counterOutsideImage, true);

const counterInsideMaterial = solid(0x8f0d14);
applyWorldTilingAllSides(counterInsideMaterial, counterPanelTileSize, 'counter-inside-tiling');
putImageOn(counterInsideMaterial, counterInsideImage, true);

const counterTopMaterial = solid(0xc4121a);
applyWorldTilingAllSides(counterTopMaterial, counterTopTileSize, 'counter-top-tiling');
putImageOn(counterTopMaterial, counterTopImage, true);


// ---------- Snack bar half door ----------

// The door swings, so it uses a normal picture (not the fixed-in-the-room tiling) and the
// picture turns with it. Both big sides show the same picture as the inside of the counter.
const gateFaceMaterial = solid(0x8f0d14);
putImageOn(gateFaceMaterial, counterInsideImage);
const gateEdgeMaterial = solid(0x8f0d14);

// box order: right, left, top, bottom, front, back
const gateLeafMaterials = [gateFaceMaterial, gateFaceMaterial, gateEdgeMaterial, gateEdgeMaterial, gateEdgeMaterial, gateEdgeMaterial];


// ---------- Snack boxes (picture on the front and back, plain colour on the sides) ----------

// returns 6 materials in the order of a box: right, left, top, bottom, front, back
function createPackageMaterials(color, fileName) {
  const side = solid(color);
  const face = solid(color);
  putImageOn(face, fileName);
  return [side, side, side, side, face, face];
}

const shelfChipRedMaterials = createPackageMaterials(0xd62828, shelfChipImages[0]);
const shelfChipYellowMaterials = createPackageMaterials(0xf4c430, shelfChipImages[1]);
const displayChipRedMaterials = createPackageMaterials(0xd62828, displayChipImages[0]);
const displayChipYellowMaterials = createPackageMaterials(0xf4c430, displayChipImages[1]);


// ---------- Cups ----------

// The picture wraps around the cup. repeat 2 / offset 0.5 puts the whole picture on the
// half of the cup that faces the customers (the other half gets a second copy).
const cupSideMaterial = solid(0xffffff);
putImageOn(cupSideMaterial, cupImage, true, function (texture) {
  texture.repeat.x = 2;
  texture.offset.x = 0.5;
});
const cupTopMaterial = solid(0xffffff);

// a cylinder takes 3 materials: side, top, bottom
const sodaCupMaterials = [cupSideMaterial, cupTopMaterial, cupTopMaterial];


// ---------- The cube ----------

putImageOn(cubeMaterial, cubeImage);


// ---------- Floors and carpet ----------

const floorMaterial = solid(0xb08a63);
applyWorldTiling(floorMaterial, floorTileSize, 'cinema-floor-tiling');
putImageOn(floorMaterial, floorImage, true);

const carpetMaterial = solid(0x7a1220, { roughness: 1 });
applyWorldTiling(carpetMaterial, carpetTileSize, 'carpet-tiling');
putImageOn(carpetMaterial, carpetImage, true);

// snack bar floor (room.js sets up the tiling for this one)
const snackFloorMaterial = new THREE.MeshStandardMaterial({
  map: createCheckerTexture(),
  roughness: 0.35
});
putImageOn(snackFloorMaterial, snackFloorImage, true);


// ---------- Posters ----------

const posterMaterial = solid(0x8b1e1e);
putImageOn(posterMaterial, posterImage);

function createPosterMaterial(fileName) {
  const material = solid(0x8b1e1e);
  putImageOn(material, fileName);
  return material;
}

const lobbyPosterMaterials = lobbyPosterImages.map(createPosterMaterial);
const rightHallPosterMaterials = rightHallPosterImages.map(createPosterMaterial);
const backHallPosterMaterials = backHallPosterImages.map(createPosterMaterial);


// ---------- Cardboard cutout fronts ----------

// printed front of a cutout (grey until the picture has loaded)
function createCutoutFrontMaterial(fileName) {
  const material = solid(0x888888, { roughness: 0.8 });
  putImageOn(material, fileName);
  return material;
}

const cutoutFront1Material = createCutoutFrontMaterial(cutoutImage1);
const cutoutFront2Material = createCutoutFrontMaterial(cutoutImage2);


// ---------- Order screens (one picture per screen) ----------

// The three screens share one material. The pictures are drawn side by side on one canvas,
// and each screen shows its own third (picked by where the screen stands: left, middle, right).
//
// In room.js each screen is 2.5 wide but their centres are only 2.3 apart, so they overlap
// and would flicker. So each screen only shows the middle 2.3 of itself (they then touch).
// 2.3 wide x 1.25 tall = the shape of 1104 x 600.
const orderCellWidth = 1104;
const orderCellHeight = 600;

const orderCanvas = document.createElement('canvas');
orderCanvas.width = orderCellWidth * 3;
orderCanvas.height = orderCellHeight;
const orderContext = orderCanvas.getContext('2d');

orderContext.fillStyle = '#222222';
orderContext.fillRect(0, 0, orderCanvas.width, orderCanvas.height);

const orderTexture = new THREE.CanvasTexture(orderCanvas);
orderTexture.colorSpace = THREE.SRGBColorSpace;
// no mipmaps, so the edge of one picture never bleeds into its neighbour
orderTexture.generateMipmaps = false;
orderTexture.minFilter = THREE.LinearFilter;
orderTexture.magFilter = THREE.LinearFilter;

function drawOrderPicture(image, index) {

  const x = index * orderCellWidth;

  orderContext.fillStyle = '#111111';
  orderContext.fillRect(x, 0, orderCellWidth, orderCellHeight);

  const scaleToWidth = orderCellWidth / image.width;
  const scaleToHeight = orderCellHeight / image.height;

  if (orderImageFit === 'stretch') {

    orderContext.drawImage(image, x, 0, orderCellWidth, orderCellHeight);

  } else if (orderImageFit === 'cover') {

    const scale = Math.max(scaleToWidth, scaleToHeight);
    const cropWidth = orderCellWidth / scale;
    const cropHeight = orderCellHeight / scale;
    orderContext.drawImage(
      image,
      (image.width - cropWidth) / 2, (image.height - cropHeight) / 2, cropWidth, cropHeight,
      x, 0, orderCellWidth, orderCellHeight
    );

  } else {

    const scale = Math.min(scaleToWidth, scaleToHeight);
    const drawWidth = image.width * scale;
    const drawHeight = image.height * scale;
    orderContext.drawImage(
      image,
      x + (orderCellWidth - drawWidth) / 2, (orderCellHeight - drawHeight) / 2,
      drawWidth, drawHeight
    );

  }

  orderTexture.needsUpdate = true;
}

orderScreenImages.forEach(function (fileName, index) {

  if (fileName === '' || index > 2) return;

  const image = new Image();

  image.onload = function () {
    drawOrderPicture(image, index);
  };


  image.src = IMAGE_FOLDER + fileName;

});

// Basic material = the screens show the pictures at full brightness (like real screens)
const orderDisplayMaterial = new THREE.MeshBasicMaterial({ map: orderTexture });

orderDisplayMaterial.customProgramCacheKey = function () {
  return 'order-display-atlas';
};

orderDisplayMaterial.onBeforeCompile = function (shader) {

  shader.vertexShader = shader.vertexShader
    .replace('#include <common>', '#include <common>\nvarying float vOrderWorldX;')
    .replace(
      '#include <project_vertex>',
      '#include <project_vertex>\nvOrderWorldX = (modelMatrix * vec4(transformed, 1.0)).x;'
    );

  // The fragment shader works out which screen it is on (left, middle or right) and draws
  // that screen's picture across the middle 2.3 of the screen, exactly once.
  // Screen centres in room.js: x = -4.3, -2.0, 0.3
  shader.fragmentShader = shader.fragmentShader
    .replace('#include <common>', '#include <common>\nvarying float vOrderWorldX;')
    .replace(
      '#include <map_fragment>',
      '#ifdef USE_MAP\n' +
      '  float orderIndex = vOrderWorldX < -3.15 ? 0.0 : (vOrderWorldX < -0.85 ? 1.0 : 2.0);\n' +
      '  float orderLocalX = vOrderWorldX - (-4.3 + 2.3 * orderIndex);\n' +
      '  if (abs(orderLocalX) > 1.15) discard;\n' +
      '  float orderU = clamp(orderLocalX / 2.3 + 0.5, 0.001, 0.999);\n' +
      '  vec2 orderUV = vec2((orderU + orderIndex) / 3.0, vMapUv.y);\n' +
      '  diffuseColor *= texture2D(map, orderUV);\n' +
      '#endif'
    );
};


// ---------- Trailer screens (videos) ----------

// shape of the picture area of a trailer screen in room.js (1.02 wide x 2.65 tall)
const trailerScreenAspect = 1.02 / 2.65;

// Makes the 6 materials for a trailer display box: only the front face (the one that
// faces the lobby, index 5) plays the video, every other face stays dark.
function createTrailerDisplayMaterials(fileName, focusX) {

  const videoMaterial = new THREE.MeshBasicMaterial({ color: 0x222222 });
  const materials = [
    trailerFrameMaterial, trailerFrameMaterial, trailerFrameMaterial,
    trailerFrameMaterial, trailerFrameMaterial, videoMaterial
  ];

  if (fileName === '') return materials;

  const video = document.createElement('video');
  video.src = IMAGE_FOLDER + fileName;
  video.muted = true;
  video.defaultMuted = true;
  video.loop = true;
  video.playsInline = true;
  video.preload = 'auto';
  video.setAttribute('muted', '');
  video.setAttribute('playsinline', '');

  const texture = new THREE.VideoTexture(video);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.generateMipmaps = false;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;

  videoMaterial.map = texture;
  videoMaterial.color.set(0xffffff);

  // once the video size is known, crop it so it fits the tall screen
  video.addEventListener('loadedmetadata', function () {

    texture.repeat.set(1, 1);
    texture.offset.set(0, 0);

    if (trailerVideoFit === 'cover') {

      const videoAspect = video.videoWidth / video.videoHeight;

      if (videoAspect > trailerScreenAspect) {
        // video is wider than the screen: crop the sides
        texture.repeat.x = trailerScreenAspect / videoAspect;
        texture.offset.x = (1 - texture.repeat.x) * focusX;
      } else {
        // video is taller than the screen: crop top and bottom
        texture.repeat.y = videoAspect / trailerScreenAspect;
        texture.offset.y = (1 - texture.repeat.y) / 2;
      }
    }

    videoMaterial.needsUpdate = true;
  });


  // muted videos may autoplay; if the browser still refuses, start on the first click/key
  function startVideo() {
    video.play().catch(function () {
      function retry() {
        video.play();
        window.removeEventListener('pointerdown', retry);
        window.removeEventListener('keydown', retry);
      }
      window.addEventListener('pointerdown', retry);
      window.addEventListener('keydown', retry);
    });
  }
  startVideo();

  return materials;
}

const trailerDisplay1Materials = createTrailerDisplayMaterials(trailerVideos[0] || '', trailerVideoFocusX[0]);
const trailerDisplay2Materials = createTrailerDisplayMaterials(trailerVideos[1] || '', trailerVideoFocusX[1]);


// ---------- Ceiling mirror ----------

// A flat mirror: draws the room again from the mirrored point of view and shows it on itself.
// Put it on a plane that faces the way you want (rotation.x = Math.PI / 2 faces down).
function createMirror(geometry) {

  const mirror = new THREE.Mesh(geometry);
  const virtualCamera = new THREE.PerspectiveCamera();
  const textureMatrix = new THREE.Matrix4();

  function targetWidth() { return Math.max(2, Math.round(window.innerWidth * window.devicePixelRatio * ceilingMirrorQuality)); }
  function targetHeight() { return Math.max(2, Math.round(window.innerHeight * window.devicePixelRatio * ceilingMirrorQuality)); }

  const renderTarget = new THREE.WebGLRenderTarget(targetWidth(), targetHeight(), {
    samples: 4,
    type: THREE.HalfFloatType
  });

  window.addEventListener('resize', function () {
    renderTarget.setSize(targetWidth(), targetHeight());
  });

  const colorChunk = THREE.ShaderChunk.colorspace_fragment
    ? '#include <colorspace_fragment>'
    : '#include <encodings_fragment>';

  mirror.material = new THREE.ShaderMaterial({
    uniforms: {
      tint: { value: new THREE.Color(ceilingMirrorTint) },
      tDiffuse: { value: renderTarget.texture },
      textureMatrix: { value: textureMatrix }
    },
    vertexShader:
      'uniform mat4 textureMatrix;\n' +
      'varying vec4 vUv;\n' +
      'void main() {\n' +
      '  vUv = textureMatrix * vec4(position, 1.0);\n' +
      '  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n' +
      '}',
    fragmentShader:
      'uniform vec3 tint;\n' +
      'uniform sampler2D tDiffuse;\n' +
      'varying vec4 vUv;\n' +
      'void main() {\n' +
      '  vec4 base = texture2DProj(tDiffuse, vUv);\n' +
      '  gl_FragColor = vec4(base.rgb * tint, 1.0);\n' +
      '  #include <tonemapping_fragment>\n' +
      '  ' + colorChunk + '\n' +
      '}'
  });

  const planeNormal = new THREE.Vector3();
  const mirrorPosition = new THREE.Vector3();
  const cameraPosition = new THREE.Vector3();
  const rotationMatrix = new THREE.Matrix4();
  const lookAtPosition = new THREE.Vector3();
  const view = new THREE.Vector3();
  const target = new THREE.Vector3();
  const clipPlane = new THREE.Vector4();
  const clipQ = new THREE.Vector4();
  const plane = new THREE.Plane();

  mirror.onBeforeRender = function (renderer, scene, camera) {

    mirrorPosition.setFromMatrixPosition(mirror.matrixWorld);
    cameraPosition.setFromMatrixPosition(camera.matrixWorld);
    rotationMatrix.extractRotation(mirror.matrixWorld);

    planeNormal.set(0, 0, 1).applyMatrix4(rotationMatrix);

    // looking at the back of the mirror: nothing to draw
    view.subVectors(mirrorPosition, cameraPosition);
    if (view.dot(planeNormal) > 0) return;

    // where the reflected camera stands and looks
    view.reflect(planeNormal).negate().add(mirrorPosition);

    rotationMatrix.extractRotation(camera.matrixWorld);
    lookAtPosition.set(0, 0, -1).applyMatrix4(rotationMatrix).add(cameraPosition);

    target.subVectors(mirrorPosition, lookAtPosition).reflect(planeNormal).negate().add(mirrorPosition);

    virtualCamera.position.copy(view);
    virtualCamera.up.set(0, 1, 0).applyMatrix4(rotationMatrix).reflect(planeNormal);
    virtualCamera.lookAt(target);
    virtualCamera.far = camera.far;
    virtualCamera.updateMatrixWorld();
    virtualCamera.projectionMatrix.copy(camera.projectionMatrix);

    // lets the reflected picture line up with the mirror surface
    textureMatrix.set(
      0.5, 0.0, 0.0, 0.5,
      0.0, 0.5, 0.0, 0.5,
      0.0, 0.0, 0.5, 0.5,
      0.0, 0.0, 0.0, 1.0
    );
    textureMatrix.multiply(virtualCamera.projectionMatrix);
    textureMatrix.multiply(virtualCamera.matrixWorldInverse);
    textureMatrix.multiply(mirror.matrixWorld);

    // cut off everything on the wrong side of the mirror (the ceiling itself, the roof)
    plane.setFromNormalAndCoplanarPoint(planeNormal, mirrorPosition);
    plane.applyMatrix4(virtualCamera.matrixWorldInverse);
    clipPlane.set(plane.normal.x, plane.normal.y, plane.normal.z, plane.constant);

    const projection = virtualCamera.projectionMatrix;
    clipQ.x = (Math.sign(clipPlane.x) + projection.elements[8]) / projection.elements[0];
    clipQ.y = (Math.sign(clipPlane.y) + projection.elements[9]) / projection.elements[5];
    clipQ.z = -1.0;
    clipQ.w = (1.0 + projection.elements[10]) / projection.elements[14];
    clipPlane.multiplyScalar(2.0 / clipPlane.dot(clipQ));

    projection.elements[2] = clipPlane.x;
    projection.elements[6] = clipPlane.y;
    projection.elements[10] = clipPlane.z + 1.0;
    projection.elements[14] = clipPlane.w;

    // draw the room from the reflected camera into the mirror's picture
    const previousTarget = renderer.getRenderTarget();
    const previousXr = renderer.xr.enabled;
    const previousShadowUpdate = renderer.shadowMap.autoUpdate;

    mirror.visible = false;
    renderer.xr.enabled = false;
    renderer.shadowMap.autoUpdate = false;

    renderer.setRenderTarget(renderTarget);
    renderer.state.buffers.depth.setMask(true);
    if (renderer.autoClear === false) renderer.clear();
    renderer.render(scene, virtualCamera);

    renderer.xr.enabled = previousXr;
    renderer.shadowMap.autoUpdate = previousShadowUpdate;
    renderer.setRenderTarget(previousTarget);
    mirror.visible = true;
  };

  return mirror;
}

// A ceiling piece: a mirror, or a plain wall-material plane if the mirror is switched off
function createCeilingSurface(geometry, useMirror) {
  return useMirror ? createMirror(geometry) : new THREE.Mesh(geometry, wallMaterial);
}


// ---------- Rope (twisted strands, drawn with canvas) ----------

function createRopeMaterial() {

  const size = 128;

  // draws diagonal strands; light = the picture, dark = the bump (relief)
  function strandCanvas(base, strand, groove) {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = base;
    ctx.fillRect(0, 0, size, size);
    for (let k = -2; k <= 3; k++) {
      ctx.strokeStyle = groove;
      ctx.lineWidth = 7;
      ctx.beginPath();
      ctx.moveTo(k * 64 - 4, -4);
      ctx.lineTo(k * 64 + size - 4, size - 4);
      ctx.stroke();
      ctx.strokeStyle = strand;
      ctx.lineWidth = 22;
      ctx.beginPath();
      ctx.moveTo(k * 64 + 20, 0);
      ctx.lineTo(k * 64 + size + 20, size);
      ctx.stroke();
    }
    return canvas;
  }

  const colorTexture = new THREE.CanvasTexture(strandCanvas('#6e1010', '#b82a2a', '#3d0707'));
  colorTexture.colorSpace = THREE.SRGBColorSpace;
  const bumpTexture = new THREE.CanvasTexture(strandCanvas('#303030', '#d0d0d0', '#000000'));

  [colorTexture, bumpTexture].forEach(function (texture) {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(10, 1);       // 10 twists along a rope, 1 around it
    texture.anisotropy = 8;
  });

  return new THREE.MeshStandardMaterial({
    map: colorTexture,
    bumpMap: bumpTexture,
    bumpScale: 2,
    roughness: 0.9
  });
}


// ---------- Silver plate (gives a flat shiny plate some streaks so it reads as polished metal) ----------

function createShinySilverPlateMaterial() {

  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');

  const streaks = ctx.createLinearGradient(0, 0, 256, 0);
  streaks.addColorStop(0.00, '#8f959f');
  streaks.addColorStop(0.18, '#f4f6fa');
  streaks.addColorStop(0.34, '#a9afb9');
  streaks.addColorStop(0.55, '#ffffff');
  streaks.addColorStop(0.74, '#9aa1ab');
  streaks.addColorStop(1.00, '#dde1e8');
  ctx.fillStyle = streaks;
  ctx.fillRect(0, 0, 256, 64);

  // lighter band along the top edge, like a bevel catching the light
  const bevel = ctx.createLinearGradient(0, 0, 0, 64);
  bevel.addColorStop(0, 'rgba(255,255,255,0.55)');
  bevel.addColorStop(0.25, 'rgba(255,255,255,0)');
  bevel.addColorStop(1, 'rgba(0,0,0,0.25)');
  ctx.fillStyle = bevel;
  ctx.fillRect(0, 0, 256, 64);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;

  const material = shinyMetal(0xffffff, 0.06);
  material.map = texture;
  return material;
}


// ---------- Menu screens above the chips (digital menu: TV frame + neon text) ----------

const MENU_W = 1100;
const MENU_H = 500;
const MENU_FRAME = 34;

function menuRoundedRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

// Draws the black TV frame, and calls drawScreen(x, y, w, h) to paint inside the glass.
function drawMenuTv(ctx, drawScreen) {

  ctx.fillStyle = '#050505';
  ctx.fillRect(0, 0, MENU_W, MENU_H);

  // thin lighter edge on the frame
  ctx.strokeStyle = '#2b2b2f';
  ctx.lineWidth = 3;
  menuRoundedRect(ctx, 4, 4, MENU_W - 8, MENU_H - 8, 16);
  ctx.stroke();

  const f = MENU_FRAME;
  const x = f, y = f, w = MENU_W - 2 * f, h = MENU_H - 2 * f;

  ctx.save();
  menuRoundedRect(ctx, x, y, w, h, 14);
  ctx.clip();

  drawScreen(x, y, w, h);

  // soft glare across the glass
  const glare = ctx.createLinearGradient(0, y, MENU_W, y + h);
  glare.addColorStop(0, 'rgba(255,255,255,0.08)');
  glare.addColorStop(0.4, 'rgba(255,255,255,0)');
  glare.addColorStop(1, 'rgba(255,255,255,0.03)');
  ctx.fillStyle = glare;
  ctx.fillRect(x, y, w, h);

  ctx.restore();

  ctx.strokeStyle = 'rgba(255,255,255,0.18)';
  ctx.lineWidth = 2;
  menuRoundedRect(ctx, x, y, w, h, 14);
  ctx.stroke();
}

// Neon sign text: wide coloured glow with a pale glowing core.
function drawNeonText(ctx, text, x, y, font, glow, core) {
  ctx.font = font;
  ctx.shadowColor = glow;
  ctx.fillStyle = glow;
  [46, 26, 12].forEach(function (blur) {
    ctx.shadowBlur = blur;
    ctx.fillText(text, x, y);
  });
  ctx.shadowBlur = 0;
  ctx.fillStyle = core;
  ctx.fillText(text, x, y);
}

// Neon sign with just one big word (SNACKS / DRINKS), neon colours { glow, core, back }
function createNeonSignTexture(word, neon) {

  const canvas = document.createElement('canvas');
  canvas.width = MENU_W;
  canvas.height = MENU_H;
  const ctx = canvas.getContext('2d');

  drawMenuTv(ctx, function (x, y, w, h) {

    // dark glass with a faint coloured glow in the middle
    const back = ctx.createRadialGradient(MENU_W / 2, MENU_H / 2, 40, MENU_W / 2, MENU_H / 2, 620);
    back.addColorStop(0, neon.back);
    back.addColorStop(1, '#030206');
    ctx.fillStyle = back;
    ctx.fillRect(x, y, w, h);

    // neon tube border (outer + thinner inner tube)
    ctx.save();
    ctx.strokeStyle = neon.glow;
    ctx.shadowColor = neon.glow;
    ctx.shadowBlur = 16;
    ctx.lineWidth = 5;
    menuRoundedRect(ctx, x + 14, y + 14, w - 28, h - 28, 12);
    ctx.stroke();
    ctx.lineWidth = 3;
    menuRoundedRect(ctx, x + 30, y + 30, w - 60, h - 60, 8);
    ctx.stroke();
    ctx.restore();

    // the word, as big as fits inside the border
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    let fontSize = 210;
    const fontFor = function (size) { return '900 ' + size + 'px "Arial Black", Impact, Arial, sans-serif'; };
    ctx.font = fontFor(fontSize);
    const maxWidth = w - 140;
    const measured = ctx.measureText(word).width;
    if (measured > maxWidth) fontSize = Math.floor(fontSize * maxWidth / measured);

    drawNeonText(ctx, word, MENU_W / 2, MENU_H / 2 + 6, fontFor(fontSize), neon.glow, neon.core);
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}

// A menu screen that shows a picture inside the TV frame (tries each file name in order)
function createMenuImageTexture(fileNames, fit) {

  const canvas = document.createElement('canvas');
  canvas.width = MENU_W;
  canvas.height = MENU_H;
  const ctx = canvas.getContext('2d');

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;

  function paint(image) {
    drawMenuTv(ctx, function (x, y, w, h) {
      ctx.fillStyle = '#050505';
      ctx.fillRect(x, y, w, h);
      if (!image) return;
      const scaleToWidth = w / image.width;
      const scaleToHeight = h / image.height;
      const scale = fit === 'cover' ? Math.max(scaleToWidth, scaleToHeight) : Math.min(scaleToWidth, scaleToHeight);
      const drawWidth = image.width * scale;
      const drawHeight = image.height * scale;
      ctx.drawImage(image, x + (w - drawWidth) / 2, y + (h - drawHeight) / 2, drawWidth, drawHeight);
    });
    texture.needsUpdate = true;
  }

  paint(null);

  if (typeof fileNames === 'string') fileNames = fileNames === '' ? [] : [fileNames];

  function tryName(i) {
    if (i >= fileNames.length) return;
    const image = new Image();
    image.onload = function () { paint(image); };
    image.onerror = function () {
      tryName(i + 1);
    };
    image.src = IMAGE_FOLDER + fileNames[i];
  }
  tryName(0);

  return texture;
}

// 6 materials for a box: only the front face (+z, index 4) shows the menu
function createMenuScreenMaterials(texture) {
  const face = new THREE.MeshBasicMaterial({ map: texture });
  return [screenMaterial, screenMaterial, screenMaterial, screenMaterial, face, screenMaterial];
}

const menuScreen1Materials = createMenuScreenMaterials(createNeonSignTexture('SNACKS',
  { glow: '#b026ff', core: '#ecc6ff', back: '#1d0838' }));

const menuScreen2Materials = createMenuScreenMaterials(createNeonSignTexture('DRINKS',
  { glow: '#1f9bff', core: '#c4e8ff', back: '#06223d' }));

const menuScreen3Materials = createMenuScreenMaterials(createMenuImageTexture(menuScreenImage, menuScreenImageFit));


// ---------- Pictures drawn with canvas (no files needed) ----------

// Black & white checker, placeholder for the snack bar floor
function createCheckerTexture() {

  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#f2f2f2';
  ctx.fillRect(0, 0, size, size);

  ctx.fillStyle = '#1a1a1a';
  ctx.fillRect(size / 2, 0, size / 2, size / 2);
  ctx.fillRect(0, size / 2, size / 2, size / 2);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}

// Soft round glow (used for the light pools around the floor lights)
function createGlowTexture() {

  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');

  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, 'rgba(255,255,255,1)');
  gradient.addColorStop(0.25, 'rgba(255,255,255,0.45)');
  gradient.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

// Sign above a theater door, e.g. createSignTexture('THEATER 1')
function createSignTexture(text) {

  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 102;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#0b0d14';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = '#d4af37';
  ctx.lineWidth = 6;
  ctx.strokeRect(6, 6, canvas.width - 12, canvas.height - 12);

  ctx.fillStyle = '#f4e3b0';
  ctx.font = 'bold 56px Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, canvas.width / 2, canvas.height / 2 + 3);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}


// ---------- Theater door signs ----------

function makeTheaterSignMaterial(text) {
  const signTexture = createSignTexture(text);
  return new THREE.MeshStandardMaterial({
    map: signTexture,
    emissive: 0xffffff,
    emissiveMap: signTexture,
    emissiveIntensity: 0.2
  });
}

const theaterSign1Material = makeTheaterSignMaterial('ENTRANCE');
const theaterSign2Material = makeTheaterSignMaterial('THEATER 2');


// ---------- Floor light glow (soft glow on the floor, only visible at night) ----------

const floorGlowMaterial = new THREE.MeshBasicMaterial({
  map: createGlowTexture(),
  color: 0xffe9b8,
  transparent: true,
  opacity: 0,
  depthWrite: false,
  blending: THREE.AdditiveBlending
});