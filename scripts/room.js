// ---------- Floor ----------

const floorGeometry = new THREE.PlaneGeometry(width, depth);
const floor = new THREE.Mesh(floorGeometry, floorMaterial);

floor.rotation.x = -Math.PI / 2;

scene.add(floor);


// ---------- Ceiling (faces downward) ----------

const ceilingGeometry = new THREE.PlaneGeometry(width, depth);
const ceiling = createCeilingSurface(ceilingGeometry, ceilingMirrorInLobby);

ceiling.position.x = 0;
ceiling.position.y = height;
ceiling.position.z = 0;
ceiling.rotation.x = Math.PI / 2;

scene.add(ceiling);


// ---------- Back wall (opening for the second hallway, next to the snack bar) ----------

const backWallLeftGeometry = new THREE.BoxGeometry(8.8, height, wallThickness);
const backWallLeft = new THREE.Mesh(backWallLeftGeometry, wallMaterial);

backWallLeft.position.x = -1.8;
backWallLeft.position.y = height / 2;
backWallLeft.position.z = -depth / 2 - wallThickness / 2;

scene.add(backWallLeft);


const backWallRightGeometry = new THREE.BoxGeometry(1.2, height, wallThickness);
const backWallRight = new THREE.Mesh(backWallRightGeometry, wallMaterial);

backWallRight.position.x = 5.6;
backWallRight.position.y = height / 2;
backWallRight.position.z = -depth / 2 - wallThickness / 2;

scene.add(backWallRight);


const backWallTopGeometry = new THREE.BoxGeometry(2.4, 1.9, wallThickness);
const backWallTop = new THREE.Mesh(backWallTopGeometry, wallMaterial);

backWallTop.position.x = 3.8;
backWallTop.position.y = 3.55;
backWallTop.position.z = -depth / 2 - wallThickness / 2;

scene.add(backWallTop);


// ---------- Front wall (faces inward, so it doesn't block the view from outside) ----------

const frontWallGeometry = new THREE.PlaneGeometry(width, height);
const frontWall = new THREE.Mesh(frontWallGeometry, wallMaterial);

frontWall.position.x = 0;
frontWall.position.y = height / 2;
frontWall.position.z = depth / 2;
frontWall.rotation.y = Math.PI;

scene.add(frontWall);


// ---------- Left wall (one big window with a black frame, toward the front corner) ----------

const leftWallBackGeometry = new THREE.BoxGeometry(wallThickness, height, 4.7);
const leftWallBack = new THREE.Mesh(leftWallBackGeometry, wallMaterial);

leftWallBack.position.x = -width / 2 - wallThickness / 2;
leftWallBack.position.y = height / 2;
leftWallBack.position.z = -2.15;

scene.add(leftWallBack);


const leftWallFrontGeometry = new THREE.BoxGeometry(wallThickness, height, 0.3);
const leftWallFront = new THREE.Mesh(leftWallFrontGeometry, wallMaterial);

leftWallFront.position.x = -width / 2 - wallThickness / 2;
leftWallFront.position.y = height / 2;
leftWallFront.position.z = 4.35;

scene.add(leftWallFront);


const leftWallBottomGeometry = new THREE.BoxGeometry(wallThickness, 0.5, 4);
const leftWallBottom = new THREE.Mesh(leftWallBottomGeometry, wallMaterial);

leftWallBottom.position.x = -width / 2 - wallThickness / 2;
leftWallBottom.position.y = 0.25;
leftWallBottom.position.z = 2.2;

scene.add(leftWallBottom);


const leftWallTopGeometry = new THREE.BoxGeometry(wallThickness, 0.5, 4);
const leftWallTop = new THREE.Mesh(leftWallTopGeometry, wallMaterial);

leftWallTop.position.x = -width / 2 - wallThickness / 2;
leftWallTop.position.y = 4.25;
leftWallTop.position.z = 2.2;

scene.add(leftWallTop);


const windowGlassGeometry = new THREE.PlaneGeometry(4, 3.5);
const windowGlass = new THREE.Mesh(windowGlassGeometry, glassMaterial);

windowGlass.position.x = -width / 2 - wallThickness / 2;
windowGlass.position.y = 2.25;
windowGlass.position.z = 2.2;
windowGlass.rotation.y = Math.PI / 2;

scene.add(windowGlass);


const windowFrameTopGeometry = new THREE.BoxGeometry(0.3, 0.2, 4);
const windowFrameTop = new THREE.Mesh(windowFrameTopGeometry, windowFrameMaterial);

windowFrameTop.position.x = -width / 2 - wallThickness / 2;
windowFrameTop.position.y = 3.9;
windowFrameTop.position.z = 2.2;

scene.add(windowFrameTop);


const windowFrameBottomGeometry = new THREE.BoxGeometry(0.3, 0.2, 4);
const windowFrameBottom = new THREE.Mesh(windowFrameBottomGeometry, windowFrameMaterial);

windowFrameBottom.position.x = -width / 2 - wallThickness / 2;
windowFrameBottom.position.y = 0.6;
windowFrameBottom.position.z = 2.2;

scene.add(windowFrameBottom);


const windowFrameLeftGeometry = new THREE.BoxGeometry(0.3, 3.5, 0.2);
const windowFrameLeft = new THREE.Mesh(windowFrameLeftGeometry, windowFrameMaterial);

windowFrameLeft.position.x = -width / 2 - wallThickness / 2;
windowFrameLeft.position.y = 2.25;
windowFrameLeft.position.z = 0.3;

scene.add(windowFrameLeft);


const windowFrameRightGeometry = new THREE.BoxGeometry(0.3, 3.5, 0.2);
const windowFrameRight = new THREE.Mesh(windowFrameRightGeometry, windowFrameMaterial);

windowFrameRight.position.x = -width / 2 - wallThickness / 2;
windowFrameRight.position.y = 2.25;
windowFrameRight.position.z = 4.1;

scene.add(windowFrameRight);


const windowFrameMiddleGeometry = new THREE.BoxGeometry(0.3, 3.5, 0.2);
const windowFrameMiddle = new THREE.Mesh(windowFrameMiddleGeometry, windowFrameMaterial);

windowFrameMiddle.position.x = -width / 2 - wallThickness / 2;
windowFrameMiddle.position.y = 2.25;
windowFrameMiddle.position.z = 2.2;

scene.add(windowFrameMiddle);


// ---------- Right wall (door opening to the first hallway) ----------

const rightWallBackGeometry = new THREE.BoxGeometry(wallThickness, height, 5.1);
const rightWallBack = new THREE.Mesh(rightWallBackGeometry, wallMaterial);

rightWallBack.position.x = width / 2 + wallThickness / 2;
rightWallBack.position.y = height / 2;
rightWallBack.position.z = -1.95;

scene.add(rightWallBack);


const rightWallFrontGeometry = new THREE.BoxGeometry(wallThickness, height, 2.1);
const rightWallFront = new THREE.Mesh(rightWallFrontGeometry, wallMaterial);

rightWallFront.position.x = width / 2 + wallThickness / 2;
rightWallFront.position.y = height / 2;
rightWallFront.position.z = 3.45;

scene.add(rightWallFront);


const rightWallTopGeometry = new THREE.BoxGeometry(wallThickness, 1.9, 1.8);
const rightWallTop = new THREE.Mesh(rightWallTopGeometry, wallMaterial);

rightWallTop.position.x = width / 2 + wallThickness / 2;
rightWallTop.position.y = 3.55;
rightWallTop.position.z = 1.5;

scene.add(rightWallTop);


// ---------- HALLWAYS ----------

const rightHallFloorGeometry = new THREE.PlaneGeometry(8, 2.4);
const rightHallFloor = new THREE.Mesh(rightHallFloorGeometry, floorMaterial);

rightHallFloor.position.x = 10;
rightHallFloor.position.y = 0;
rightHallFloor.position.z = 1.5;
rightHallFloor.rotation.x = -Math.PI / 2;

scene.add(rightHallFloor);


const rightHallCeilingGeometry = new THREE.PlaneGeometry(8, 2.4);
const rightHallCeiling = createCeilingSurface(rightHallCeilingGeometry, ceilingMirrorInHallways);

rightHallCeiling.position.x = 10;
rightHallCeiling.position.y = 3;
rightHallCeiling.position.z = 1.5;
rightHallCeiling.rotation.x = Math.PI / 2;

scene.add(rightHallCeiling);


const rightHallWallBackGeometry = new THREE.PlaneGeometry(8, 3);
const rightHallWallBack = new THREE.Mesh(rightHallWallBackGeometry, wallMaterial);

rightHallWallBack.position.x = 10;
rightHallWallBack.position.y = 1.5;
rightHallWallBack.position.z = 0.3;

scene.add(rightHallWallBack);


const rightHallWallFrontGeometry = new THREE.PlaneGeometry(8, 3);
const rightHallWallFront = new THREE.Mesh(rightHallWallFrontGeometry, wallMaterial);

rightHallWallFront.position.x = 10;
rightHallWallFront.position.y = 1.5;
rightHallWallFront.position.z = 2.7;
rightHallWallFront.rotation.y = Math.PI;

scene.add(rightHallWallFront);


const rightHallEndWallGeometry = new THREE.PlaneGeometry(2.4, 3);
const rightHallEndWall = new THREE.Mesh(rightHallEndWallGeometry, wallMaterial);

rightHallEndWall.position.x = 14;
rightHallEndWall.position.y = 1.5;
rightHallEndWall.position.z = 1.5;
rightHallEndWall.rotation.y = -Math.PI / 2;

scene.add(rightHallEndWall);


const backHallFloorGeometry = new THREE.PlaneGeometry(2.4, 8);
const backHallFloor = new THREE.Mesh(backHallFloorGeometry, floorMaterial);

backHallFloor.position.x = 3.8;
backHallFloor.position.y = 0;
backHallFloor.position.z = -8.5;
backHallFloor.rotation.x = -Math.PI / 2;

scene.add(backHallFloor);


const backHallCeilingGeometry = new THREE.PlaneGeometry(2.4, 8);
const backHallCeiling = createCeilingSurface(backHallCeilingGeometry, ceilingMirrorInHallways);

backHallCeiling.position.x = 3.8;
backHallCeiling.position.y = 3;
backHallCeiling.position.z = -8.5;
backHallCeiling.rotation.x = Math.PI / 2;

scene.add(backHallCeiling);


const backHallWallLeftGeometry = new THREE.PlaneGeometry(8, 3);
const backHallWallLeft = new THREE.Mesh(backHallWallLeftGeometry, wallMaterial);

backHallWallLeft.position.x = 2.6;
backHallWallLeft.position.y = 1.5;
backHallWallLeft.position.z = -8.5;
backHallWallLeft.rotation.y = Math.PI / 2;

scene.add(backHallWallLeft);


const backHallWallRightGeometry = new THREE.PlaneGeometry(8, 3);
const backHallWallRight = new THREE.Mesh(backHallWallRightGeometry, wallMaterial);

backHallWallRight.position.x = 5;
backHallWallRight.position.y = 1.5;
backHallWallRight.position.z = -8.5;
backHallWallRight.rotation.y = -Math.PI / 2;

scene.add(backHallWallRight);


const backHallEndWallGeometry = new THREE.PlaneGeometry(2.4, 3);
const backHallEndWall = new THREE.Mesh(backHallEndWallGeometry, wallMaterial);

backHallEndWall.position.x = 3.8;
backHallEndWall.position.y = 1.5;
backHallEndWall.position.z = -12.5;

scene.add(backHallEndWall);


// ---------- SNACK BAR ----------

// ---------- Snack bar (back counter, side counter and front counter make a U shape) ----------

// Counter faces. A box takes 6 materials in this order: right (+x), left (-x), top, bottom, front (+z), back (-z)
// cOut = outside (faces the lobby), cIn = inside (faces the staff aisle / wall), cTop = countertop
const cOut = counterOutsideMaterial;
const cIn = counterInsideMaterial;
const cTop = counterTopMaterial;


const backCounterGeometry = new THREE.BoxGeometry(8, 1.1, 1.1);

const backCounter = new THREE.Mesh(backCounterGeometry, [cIn, cIn, cTop, cIn, cIn, cIn]);

backCounter.position.x = -2;
backCounter.position.y = 0.55;
backCounter.position.z = -3.95;

scene.add(backCounter);


// ---------- Side counter (split in two, with a gap for the half door) ----------

const sideCounterX = 2.25;
const sideCounterBackZ = -4.5;       // flush with the back wall
const sideCounterFrontZ = -0.825;    // flush with the front of the front counter
const gateCenterZ = -2.7;            // where the half door is (inside the staff aisle)
const gateWidth = 1.0;               // width of the opening

const gateGapStartZ = gateCenterZ - gateWidth / 2;   // gap runs from here...
const gateGapEndZ = gateCenterZ + gateWidth / 2;     // ...to here

const sideCounterBackLength = gateGapStartZ - sideCounterBackZ;
const sideCounterBackGeometry = new THREE.BoxGeometry(0.5, 1.1, sideCounterBackLength);
const sideCounterBack = new THREE.Mesh(sideCounterBackGeometry, [cOut, cIn, cTop, cIn, cIn, cIn]);

sideCounterBack.position.x = sideCounterX;
sideCounterBack.position.y = 0.55;
sideCounterBack.position.z = (sideCounterBackZ + gateGapStartZ) / 2;

scene.add(sideCounterBack);

const sideCounterFrontLength = sideCounterFrontZ - gateGapEndZ;
const sideCounterFrontGeometry = new THREE.BoxGeometry(0.5, 1.1, sideCounterFrontLength);
const sideCounterFront = new THREE.Mesh(sideCounterFrontGeometry, [cOut, cIn, cTop, cIn, cOut, cIn]);

sideCounterFront.position.x = sideCounterX;
sideCounterFront.position.y = 0.55;
sideCounterFront.position.z = (gateGapEndZ + sideCounterFrontZ) / 2;

scene.add(sideCounterFront);


// ---------- Front counter ----------


const frontCounterLeftGeometry = new THREE.BoxGeometry(2.8, 1.1, 1.15);

const frontCounterLeft = new THREE.Mesh(frontCounterLeftGeometry, [cOut, cIn, cTop, cIn, cOut, cIn]);

frontCounterLeft.position.x = -4.6;
frontCounterLeft.position.y = 0.55;
frontCounterLeft.position.z = -1.4;

scene.add(frontCounterLeft);


const frontCounterRightGeometry = new THREE.BoxGeometry(2.8, 1.1, 1.15);

const frontCounterRight = new THREE.Mesh(frontCounterRightGeometry, [cIn, cOut, cTop, cIn, cOut, cIn]);

frontCounterRight.position.x = 0.6;
frontCounterRight.position.y = 0.55;
frontCounterRight.position.z = -1.4;

scene.add(frontCounterRight);


// ---------- Display base ----------

const snackBaseGeometry = new THREE.BoxGeometry(2.4, 0.45, 1.15);

const snackBase = new THREE.Mesh(snackBaseGeometry, [cOut, cOut, cTop, cIn, cOut, cIn]);

snackBase.position.x = -2;
snackBase.position.y = 0.225;
snackBase.position.z = -1.4;

scene.add(snackBase);


// ---------- Built-in glass display ----------


const snackGlassFrontGeometry = new THREE.BoxGeometry(2.4, 0.6, 0.06);

const snackGlassFront = new THREE.Mesh(snackGlassFrontGeometry, glassMaterial);

snackGlassFront.position.x = -2;
snackGlassFront.position.y = 0.8;
snackGlassFront.position.z = -0.82;

scene.add(snackGlassFront);


const snackGlassBackGeometry = new THREE.BoxGeometry(2.4, 0.6, 0.06);

const snackGlassBack = new THREE.Mesh(snackGlassBackGeometry, glassMaterial);

snackGlassBack.position.x = -2;
snackGlassBack.position.y = 0.8;
snackGlassBack.position.z = -1.98;

scene.add(snackGlassBack);


const snackGlassSideGeometry = new THREE.BoxGeometry(0.06, 0.6, 1.15);

const snackGlassLeft = new THREE.Mesh(snackGlassSideGeometry, glassMaterial);

snackGlassLeft.position.x = -3.2;
snackGlassLeft.position.y = 0.8;
snackGlassLeft.position.z = -1.4;

scene.add(snackGlassLeft);


const snackGlassRight = new THREE.Mesh(snackGlassSideGeometry, glassMaterial);

snackGlassRight.position.x = -0.8;
snackGlassRight.position.y = 0.8;
snackGlassRight.position.z = -1.4;

scene.add(snackGlassRight);


const snackGlassTopGeometry = new THREE.BoxGeometry(2.4, 0.06, 1.15);

const snackGlassTop = new THREE.Mesh(snackGlassTopGeometry, glassMaterial);

snackGlassTop.position.x = -2;
snackGlassTop.position.y = 1.1;
snackGlassTop.position.z = -1.4;

scene.add(snackGlassTop);

// ---------- Shelves inside glass ----------


const snackShelfGeometry = new THREE.BoxGeometry(2.4, 0.035, 0.9);

const snackShelf1 = new THREE.Mesh(snackShelfGeometry, shelfMaterial);

snackShelf1.position.x = -2;
snackShelf1.position.y = 0.6;
snackShelf1.position.z = -1.4;

scene.add(snackShelf1);


const snackShelf2 = new THREE.Mesh(snackShelfGeometry, shelfMaterial);

snackShelf2.position.x = -2;
snackShelf2.position.y = 0.87;
snackShelf2.position.z = -1.4;

scene.add(snackShelf2);


// ---------- Snacks ----------


const redChipGeometry = new THREE.BoxGeometry(0.22, 0.18, 0.16);

const redChip1 = new THREE.Mesh(redChipGeometry, displayChipRedMaterials);

redChip1.position.x = -2.65;
redChip1.position.y = 0.7;
redChip1.position.z = -1.4;

scene.add(redChip1);


const yellowChipGeometry = new THREE.BoxGeometry(0.22, 0.18, 0.16);

const yellowChip1 = new THREE.Mesh(yellowChipGeometry, displayChipYellowMaterials);

yellowChip1.position.x = -2;
yellowChip1.position.y = 0.7;
yellowChip1.position.z = -1.4;

scene.add(yellowChip1);


const redChip2 = new THREE.Mesh(redChipGeometry, displayChipRedMaterials);

redChip2.position.x = -1.35;
redChip2.position.y = 0.7;
redChip2.position.z = -1.4;

scene.add(redChip2);


const yellowChip2 = new THREE.Mesh(yellowChipGeometry, displayChipYellowMaterials);

yellowChip2.position.x = -2.55;
yellowChip2.position.y = 0.97;
yellowChip2.position.z = -1.4;

scene.add(yellowChip2);


const redChip3 = new THREE.Mesh(redChipGeometry, displayChipRedMaterials);

redChip3.position.x = -2;
redChip3.position.y = 0.97;
redChip3.position.z = -1.4;

scene.add(redChip3);


const yellowChip3 = new THREE.Mesh(yellowChipGeometry, displayChipYellowMaterials);

yellowChip3.position.x = -1.45;
yellowChip3.position.y = 0.97;
yellowChip3.position.z = -1.4;

scene.add(yellowChip3);

// ---------- Snack Bar Order Screens ----------


const orderScreenGeometry = new THREE.BoxGeometry(2.8, 1.5, 0.15);
const orderScreen1 = new THREE.Mesh(orderScreenGeometry, orderScreenMaterial);

orderScreen1.position.x = -4.3;
orderScreen1.position.y = 3.75;
orderScreen1.position.z = -1.4;

scene.add(orderScreen1);


const orderDisplayGeometry = new THREE.BoxGeometry(2.5, 1.25, 0.03);
const orderDisplay1 = new THREE.Mesh(orderDisplayGeometry, orderDisplayMaterial);

orderDisplay1.position.x = -4.3;
orderDisplay1.position.y = 3.75;
orderDisplay1.position.z = -1.31;

scene.add(orderDisplay1);


const orderScreen2 = new THREE.Mesh(orderScreenGeometry, orderScreenMaterial);

orderScreen2.position.x = -2;
orderScreen2.position.y = 3.75;
orderScreen2.position.z = -1.4;

scene.add(orderScreen2);


const orderDisplay2 = new THREE.Mesh(orderDisplayGeometry, orderDisplayMaterial);

orderDisplay2.position.x = -2;
orderDisplay2.position.y = 3.75;
orderDisplay2.position.z = -1.31;

scene.add(orderDisplay2);


const orderScreen3 = new THREE.Mesh(orderScreenGeometry, orderScreenMaterial);

orderScreen3.position.x = 0.3;
orderScreen3.position.y = 3.75;
orderScreen3.position.z = -1.4;

scene.add(orderScreen3);


const orderDisplay3 = new THREE.Mesh(orderDisplayGeometry, orderDisplayMaterial);

orderDisplay3.position.x = 0.3;
orderDisplay3.position.y = 3.75;
orderDisplay3.position.z = -1.31;

scene.add(orderDisplay3);


// ---------- Chip shelf on the back wall ----------
// (shortened so the two soda machines fit on the left)

const chipShelfGeometry = new THREE.BoxGeometry(5.2, 0.1, 0.5);
const chipShelf = new THREE.Mesh(chipShelfGeometry, shelfMaterial);

chipShelf.position.x = -0.7;
chipShelf.position.y = 2;
chipShelf.position.z = -4.25;

scene.add(chipShelf);


const chip3Geometry = new THREE.BoxGeometry(0.6, 0.7, 0.2);
const chip3 = new THREE.Mesh(chip3Geometry, shelfChipRedMaterials);

chip3.position.x = -2;
chip3.position.y = 2.4;
chip3.position.z = -4.25;

scene.add(chip3);


const chip4Geometry = new THREE.BoxGeometry(0.6, 0.7, 0.2);
const chip4 = new THREE.Mesh(chip4Geometry, shelfChipYellowMaterials);

chip4.position.x = -0.5;
chip4.position.y = 2.4;
chip4.position.z = -4.25;

scene.add(chip4);


const chip5Geometry = new THREE.BoxGeometry(0.6, 0.7, 0.2);
const chip5 = new THREE.Mesh(chip5Geometry, shelfChipRedMaterials);

chip5.position.x = 1;
chip5.position.y = 2.4;
chip5.position.z = -4.25;

scene.add(chip5);


// ---------- Chips under the shelf (standing on the back counter) ----------

const underChipGeometry = new THREE.BoxGeometry(0.6, 0.7, 0.2);

[-2.8, -2.0, -1.2, -0.4, 0.4, 1.2].forEach(function (x, i) {

  const underChip = new THREE.Mesh(underChipGeometry, i % 2 === 0 ? shelfChipYellowMaterials : shelfChipRedMaterials);

  underChip.position.x = x;
  underChip.position.y = 1.45;      
  underChip.position.z = -4.25;

  scene.add(underChip);

});


// ---------- Menu screens above the chips ----------

const menuScreen1Geometry = new THREE.BoxGeometry(2.2, 1, 0.1);
const menuScreen1 = new THREE.Mesh(menuScreen1Geometry, menuScreen1Materials);

menuScreen1.position.x = -4.8;
menuScreen1.position.y = 3.3;
menuScreen1.position.z = -4.4;

scene.add(menuScreen1);


const menuScreen2Geometry = new THREE.BoxGeometry(2.2, 1, 0.1);
const menuScreen2 = new THREE.Mesh(menuScreen2Geometry, menuScreen2Materials);

menuScreen2.position.x = -2.3;
menuScreen2.position.y = 3.3;
menuScreen2.position.z = -4.4;

scene.add(menuScreen2);


const menuScreen3Geometry = new THREE.BoxGeometry(2.2, 1, 0.1);
const menuScreen3 = new THREE.Mesh(menuScreen3Geometry, menuScreen3Materials);

menuScreen3.position.x = 0.2;
menuScreen3.position.y = 3.3;
menuScreen3.position.z = -4.4;

scene.add(menuScreen3);


// ---------- Cash register ----------

const registerBodyGeometry = new THREE.BoxGeometry(0.8, 0.18, 0.5);

const registerBody = new THREE.Mesh(registerBodyGeometry, registerMaterial);

registerBody.position.x = 0.5;
registerBody.position.y = 1.19;
registerBody.position.z = -1.4;

scene.add(registerBody);


const registerBaseGeometry = new THREE.BoxGeometry(0.7, 0.06, 0.42);

const registerBase = new THREE.Mesh(registerBaseGeometry, registerMaterial);

registerBase.position.x = 0.5;
registerBase.position.y = 1.31;
registerBase.position.z = -1.55;

scene.add(registerBase);


// ---------- Cash register monitors ----------

const registerScreenGeometry = new THREE.BoxGeometry(0.32, 0.24, 0.04);

const registerScreen1 = new THREE.Mesh(registerScreenGeometry, registerMonitorMaterial);

registerScreen1.position.x = 0.27;
registerScreen1.position.y = 1.49;
registerScreen1.position.z = -1.5;

registerScreen1.rotation.x = -Math.PI / 10;

scene.add(registerScreen1);


const registerScreen2 = new THREE.Mesh(registerScreenGeometry, registerMonitorMaterial);

registerScreen2.position.x = 0.73;
registerScreen2.position.y = 1.49;
registerScreen2.position.z = -1.5;

registerScreen2.rotation.x = -Math.PI / 10;

scene.add(registerScreen2);


// ---------- Monitor frames ----------

const registerFrameGeometry = new THREE.BoxGeometry(0.38, 0.3, 0.03);

const registerFrame1 = new THREE.Mesh(registerFrameGeometry, registerMaterial);

registerFrame1.position.x = 0.27;
registerFrame1.position.y = 1.49;
registerFrame1.position.z = -1.53;

registerFrame1.rotation.x = -Math.PI / 10;

scene.add(registerFrame1);


const registerFrame2 = new THREE.Mesh(registerFrameGeometry, registerMaterial);

registerFrame2.position.x = 0.73;
registerFrame2.position.y = 1.49;
registerFrame2.position.z = -1.53;

registerFrame2.rotation.x = -Math.PI / 10;

scene.add(registerFrame2);


// ---------- Monitor supports ----------

const registerSupportGeometry = new THREE.BoxGeometry(0.05, 0.16, 0.05);

const registerSupport1 = new THREE.Mesh(registerSupportGeometry, registerMaterial);

registerSupport1.position.x = 0.27;
registerSupport1.position.y = 1.38;
registerSupport1.position.z = -1.55;

scene.add(registerSupport1);


const registerSupport2 = new THREE.Mesh(registerSupportGeometry, registerMaterial);

registerSupport2.position.x = 0.73;
registerSupport2.position.y = 1.38;
registerSupport2.position.z = -1.55;

scene.add(registerSupport2);


// ---------- Cash register buttons ----------

const registerButtonGeometry = new THREE.BoxGeometry(0.07, 0.02, 0.07);

const registerButton1 = new THREE.Mesh(registerButtonGeometry, registerButtonMaterial);

registerButton1.position.x = 0.3;
registerButton1.position.y = 1.15;
registerButton1.position.z = -1.25;

scene.add(registerButton1);


const registerButton2 = new THREE.Mesh(registerButtonGeometry, registerButtonMaterial);

registerButton2.position.x = 0.42;
registerButton2.position.y = 1.15;
registerButton2.position.z = -1.25;

scene.add(registerButton2);


const registerButton3 = new THREE.Mesh(registerButtonGeometry, registerButtonMaterial);

registerButton3.position.x = 0.54;
registerButton3.position.y = 1.15;
registerButton3.position.z = -1.25;

scene.add(registerButton3);


const registerButton4 = new THREE.Mesh(registerButtonGeometry, registerButtonMaterial);

registerButton4.position.x = 0.66;
registerButton4.position.y = 1.15;
registerButton4.position.z = -1.25;

scene.add(registerButton4);


// ---------- Cash register customer screen ----------

// Small display on the front of the register, tilted back like the monitors.
const registerDisplayMaterial = new THREE.MeshBasicMaterial({ color: 0xbff5cf });

const registerDisplayStandGeometry = new THREE.BoxGeometry(0.05, 0.07, 0.05);
const registerDisplayStand = new THREE.Mesh(registerDisplayStandGeometry, registerMaterial);

registerDisplayStand.position.x = 0.5;
registerDisplayStand.position.y = 1.315;
registerDisplayStand.position.z = -1.25;

scene.add(registerDisplayStand);


const registerDisplayFrameGeometry = new THREE.BoxGeometry(0.3, 0.17, 0.03);
const registerDisplayFrame = new THREE.Mesh(registerDisplayFrameGeometry, registerMaterial);

registerDisplayFrame.position.x = 0.5;
registerDisplayFrame.position.y = 1.4;
registerDisplayFrame.position.z = -1.26;

registerDisplayFrame.rotation.x = -Math.PI / 10;

scene.add(registerDisplayFrame);


const registerDisplayGeometry = new THREE.BoxGeometry(0.26, 0.13, 0.02);
const registerDisplay = new THREE.Mesh(registerDisplayGeometry, registerDisplayMaterial);

registerDisplay.position.x = 0.5;
registerDisplay.position.y = 1.4;
registerDisplay.position.z = -1.24;

registerDisplay.rotation.x = -Math.PI / 10;

scene.add(registerDisplay);


// ---------- Popcorn Machine (front counter, left side, facing the customers) ----------

const popcornMachinePos = { x: -4.6, z: -1.4 };

(function () {

  const g = new THREE.Group();
  g.position.set(popcornMachinePos.x, 0, popcornMachinePos.z);

  function add(geometry, material, x, y, z) {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    g.add(mesh);
    return mesh;
  }

  add(new THREE.BoxGeometry(1.0, 0.25, 0.9), popcornMachineMaterial, 0, 1.225, 0);

  add(new THREE.BoxGeometry(0.9, 0.85, 0.8), popcornGlassMaterial, 0, 1.775, 0);

  add(new THREE.BoxGeometry(1.0, 0.12, 0.9), popcornRedMaterial, 0, 2.26, 0);

  add(new THREE.BoxGeometry(0.65, 0.08, 0.55), popcornHeaterMaterial, 0, 1.4, 0);

  const pieceGeometry = new THREE.BoxGeometry(0.12, 0.1, 0.12);
  add(pieceGeometry, popcornMaterial, -0.25, 1.65, -0.15);
  add(pieceGeometry, popcornMaterial, -0.05, 1.7, 0.05);
  add(pieceGeometry, popcornMaterial, 0.15, 1.63, 0.2);
  add(pieceGeometry, popcornMaterial, 0.1, 1.8, -0.1);
  add(pieceGeometry, popcornMaterial, -0.15, 1.85, 0.15);

  scene.add(g);

})();


// ---------- Soda Dispensers (two, on the back counter, left side) ----------

const sodaMachineXs = [-5.45, -4.35];

function createSodaMachine(x) {

  const g = new THREE.Group();
  g.position.set(x, 0, 0);

  function add(geometry, material, px, py, pz, rotX) {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(px, py, pz);
    if (rotX) mesh.rotation.x = rotX;
    g.add(mesh);
    return mesh;
  }

  add(new THREE.BoxGeometry(1.0, 1.3, 0.8), sodaMachineMaterial, 0, 1.75, -3.95);

  add(new THREE.BoxGeometry(1.05, 0.12, 0.85), sodaMetalMaterial, 0, 2.46, -3.95);

  add(new THREE.BoxGeometry(0.75, 0.5, 0.05), sodaPanelMaterial, 0, 1.95, -3.52);

  const buttonGeometry = new THREE.CylinderGeometry(0.055, 0.055, 0.04, 12);
  add(buttonGeometry, sodaButtonMaterial, -0.22, 2.05, -3.48, Math.PI / 2);
  add(buttonGeometry, popcornYellowMaterial, 0, 2.05, -3.48, Math.PI / 2);
  add(buttonGeometry, popcornRedMaterial, 0.22, 2.05, -3.48, Math.PI / 2);

  add(new THREE.BoxGeometry(0.18, 0.18, 0.18), sodaNozzleMaterial, 0, 1.55, -3.48);

  add(new THREE.CylinderGeometry(0.1, 0.07, 0.22, 12), sodaCupMaterials, 0, 1.3, -3.42);

  scene.add(g);
}

sodaMachineXs.forEach(createSodaMachine);


// ---------- Snack bar half door (press G to open / close) ----------

// The pivot sits on the hinge. Rotating it swings the whole door.
const gatePivot = new THREE.Group();
gatePivot.position.set(sideCounterX, 0, gateGapStartZ);
scene.add(gatePivot);

const gateLeafLength = gateWidth - 0.04;
const gateLeafMiddle = 0.02 + gateLeafLength / 2;

// Door panel (waist height, like a bar flap)
const gateLeaf = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.9, gateLeafLength), gateLeafMaterials);
gateLeaf.position.set(0, 0.55, gateLeafMiddle);
gatePivot.add(gateLeaf);

// Gold rail on top
const gateRail = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.04, gateLeafLength + 0.02), gateTrimMaterial);
gateRail.position.set(0, 1.02, gateLeafMiddle);
gatePivot.add(gateRail);

// Gold handles (one each side)
const gateHandleGeometry = new THREE.SphereGeometry(0.035, 12, 12);

const gateHandleFront = new THREE.Mesh(gateHandleGeometry, gateTrimMaterial);
gateHandleFront.position.set(0.06, 0.8, gateLeafLength - 0.08);
gatePivot.add(gateHandleFront);

const gateHandleBack = new THREE.Mesh(gateHandleGeometry, gateTrimMaterial);
gateHandleBack.position.set(-0.06, 0.8, gateLeafLength - 0.08);
gatePivot.add(gateHandleBack);

// Gold hinges
const gateHingeGeometry = new THREE.CylinderGeometry(0.025, 0.025, 0.12, 10);

const gateHinge1 = new THREE.Mesh(gateHingeGeometry, gateTrimMaterial);
gateHinge1.position.set(0, 0.25, 0.01);
gatePivot.add(gateHinge1);

const gateHinge2 = new THREE.Mesh(gateHingeGeometry, gateTrimMaterial);
gateHinge2.position.set(0, 0.8, 0.01);
gatePivot.add(gateHinge2);

// How far it swings open (into the staff area)
const gateOpenAngle = -Math.PI / 2;


// ---------- LOBBY DECORATIONS ----------

// ---------- Rope barriers (three poles, like a queue in a cinema) ----------

const postGeometry = new THREE.CylinderGeometry(0.05, 0.05, 1, 12);

// A rope hanging between two poles: it sags in the middle like a real rope.
// centerX = the middle between the two poles (the poles are 2 apart)
const ropeSag = 0.45;         // how far the middle hangs down (bigger = droopier)
const ropeHookHeight = 0.95;  // where the rope is hooked on the poles

function addDroopyRope(centerX, z) {

  const points = [];
  const steps = 16;

  for (let i = 0; i <= steps; i++) {
    const t = i / steps;                       // 0 = first pole, 1 = second pole
    const x = centerX - 0.95 + t * 1.9;        // from the side of one pole to the side of the next
    const dip = 1 - Math.pow(t * 2 - 1, 2);    // 0 at the poles, 1 in the middle
    points.push(new THREE.Vector3(x, ropeHookHeight - ropeSag * dip, z));
  }

  const curve = new THREE.CatmullRomCurve3(points);
  const rope = new THREE.Mesh(new THREE.TubeGeometry(curve, 48, 0.03, 10, false), ropeMaterial);
  scene.add(rope);
  return rope;
}
const ropeOffsetX = 1;


const ropePostA1 = new THREE.Mesh(postGeometry, postMaterial);
ropePostA1.position.x = -5.5 + ropeOffsetX;
ropePostA1.position.y = 0.5;
ropePostA1.position.z = 0.8;
scene.add(ropePostA1);

const ropePostA2 = new THREE.Mesh(postGeometry, postMaterial);
ropePostA2.position.x = -3.5 + ropeOffsetX;
ropePostA2.position.y = 0.5;
ropePostA2.position.z = 0.8;
scene.add(ropePostA2);

const ropePostA3 = new THREE.Mesh(postGeometry, postMaterial);
ropePostA3.position.x = -1.5 + ropeOffsetX;
ropePostA3.position.y = 0.5;
ropePostA3.position.z = 0.8;
scene.add(ropePostA3);

const ropeA1 = addDroopyRope(-4.5 + ropeOffsetX, 0.8);

const ropeA2 = addDroopyRope(-2.5 + ropeOffsetX, 0.8);

const ropePostA4 = new THREE.Mesh(postGeometry, postMaterial);
ropePostA4.position.x = 0.5 + ropeOffsetX;
ropePostA4.position.y = 0.5;
ropePostA4.position.z = 0.8;
scene.add(ropePostA4);

const ropeA3 = addDroopyRope(-0.5 + ropeOffsetX, 0.8);


// ---------- Poster Geometry ----------

const posterGeometry = new THREE.BoxGeometry(1.04, 1.68, 0.02);
const posterFrameTopGeometry = new THREE.BoxGeometry(1.2, 0.08, 0.08);
const posterFrameSideGeometry = new THREE.BoxGeometry(0.08, 1.68, 0.08);


// ---------- Movie Posters ----------


const poster1 = new THREE.Mesh(posterGeometry, lobbyPosterMaterials[0]);

poster1.position.x = -4.5;
poster1.position.y = 1.8;
poster1.position.z = 4.485;

scene.add(poster1);

const poster1Top = new THREE.Mesh(posterFrameTopGeometry, posterFrameMaterial);

poster1Top.position.x = -4.5;
poster1Top.position.y = 2.66;
poster1Top.position.z = 4.46;

scene.add(poster1Top);

const poster1Bottom = new THREE.Mesh(posterFrameTopGeometry, posterFrameMaterial);

poster1Bottom.position.x = -4.5;
poster1Bottom.position.y = 0.94;
poster1Bottom.position.z = 4.46;

scene.add(poster1Bottom);

const poster1Left = new THREE.Mesh(posterFrameSideGeometry, posterFrameMaterial);

poster1Left.position.x = -5.06;
poster1Left.position.y = 1.8;
poster1Left.position.z = 4.46;

scene.add(poster1Left);

const poster1Right = new THREE.Mesh(posterFrameSideGeometry, posterFrameMaterial);

poster1Right.position.x = -3.94;
poster1Right.position.y = 1.8;
poster1Right.position.z = 4.46;

scene.add(poster1Right);


const poster2 = new THREE.Mesh(posterGeometry, lobbyPosterMaterials[1]);

poster2.position.x = -1.5;
poster2.position.y = 1.8;
poster2.position.z = 4.485;

scene.add(poster2);

const poster2Top = new THREE.Mesh(posterFrameTopGeometry, posterFrameMaterial);

poster2Top.position.x = -1.5;
poster2Top.position.y = 2.66;
poster2Top.position.z = 4.46;

scene.add(poster2Top);

const poster2Bottom = new THREE.Mesh(posterFrameTopGeometry, posterFrameMaterial);

poster2Bottom.position.x = -1.5;
poster2Bottom.position.y = 0.94;
poster2Bottom.position.z = 4.46;

scene.add(poster2Bottom);

const poster2Left = new THREE.Mesh(posterFrameSideGeometry, posterFrameMaterial);

poster2Left.position.x = -2.06;
poster2Left.position.y = 1.8;
poster2Left.position.z = 4.46;

scene.add(poster2Left);

const poster2Right = new THREE.Mesh(posterFrameSideGeometry, posterFrameMaterial);

poster2Right.position.x = -0.94;
poster2Right.position.y = 1.8;
poster2Right.position.z = 4.46;

scene.add(poster2Right);


const poster3 = new THREE.Mesh(posterGeometry, lobbyPosterMaterials[2]);

poster3.position.x = 1.5;
poster3.position.y = 1.8;
poster3.position.z = 4.485;

scene.add(poster3);

const poster3Top = new THREE.Mesh(posterFrameTopGeometry, posterFrameMaterial);

poster3Top.position.x = 1.5;
poster3Top.position.y = 2.66;
poster3Top.position.z = 4.46;

scene.add(poster3Top);

const poster3Bottom = new THREE.Mesh(posterFrameTopGeometry, posterFrameMaterial);

poster3Bottom.position.x = 1.5;
poster3Bottom.position.y = 0.94;
poster3Bottom.position.z = 4.46;

scene.add(poster3Bottom);

const poster3Left = new THREE.Mesh(posterFrameSideGeometry, posterFrameMaterial);

poster3Left.position.x = 0.94;
poster3Left.position.y = 1.8;
poster3Left.position.z = 4.46;

scene.add(poster3Left);

const poster3Right = new THREE.Mesh(posterFrameSideGeometry, posterFrameMaterial);

poster3Right.position.x = 2.06;
poster3Right.position.y = 1.8;
poster3Right.position.z = 4.46;

scene.add(poster3Right);


const poster4 = new THREE.Mesh(posterGeometry, lobbyPosterMaterials[3]);

poster4.position.x = 4.5;
poster4.position.y = 1.8;
poster4.position.z = 4.485;

scene.add(poster4);

const poster4Top = new THREE.Mesh(posterFrameTopGeometry, posterFrameMaterial);

poster4Top.position.x = 4.5;
poster4Top.position.y = 2.66;
poster4Top.position.z = 4.46;

scene.add(poster4Top);

const poster4Bottom = new THREE.Mesh(posterFrameTopGeometry, posterFrameMaterial);

poster4Bottom.position.x = 4.5;
poster4Bottom.position.y = 0.94;
poster4Bottom.position.z = 4.46;

scene.add(poster4Bottom);

const poster4Left = new THREE.Mesh(posterFrameSideGeometry, posterFrameMaterial);

poster4Left.position.x = 3.94;
poster4Left.position.y = 1.8;
poster4Left.position.z = 4.46;

scene.add(poster4Left);

const poster4Right = new THREE.Mesh(posterFrameSideGeometry, posterFrameMaterial);

poster4Right.position.x = 5.06;
poster4Right.position.y = 1.8;
poster4Right.position.z = 4.46;

scene.add(poster4Right);


// ---------- Hallway Posters (3 in each hallway, same style as the lobby ones) ----------

// where the night lights for these posters go (lighting.js reads this list)
const hallwayPosterLightSpots = [];

// wallX / wallZ = the spot on the wall, rotY = which way the wall faces
// (0 = faces +z, Math.PI / 2 = faces +x, -Math.PI / 2 = faces -x)
function addHallwayPoster(wallX, wallZ, rotY, material) {

  const g = new THREE.Group();
  g.position.set(wallX, 0, wallZ);
  g.rotation.y = rotY;

  function add(geometry, material, x, y, z) {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    g.add(mesh);
  }

  add(posterGeometry, material || posterMaterial, 0, 1.8, 0.015);

  add(posterFrameTopGeometry, posterFrameMaterial, 0, 2.66, 0.04);
  add(posterFrameTopGeometry, posterFrameMaterial, 0, 0.94, 0.04);
  add(posterFrameSideGeometry, posterFrameMaterial, -0.56, 1.8, 0.04);
  add(posterFrameSideGeometry, posterFrameMaterial, 0.56, 1.8, 0.04);

  scene.add(g);

  // light spot: 0.4 in front of the poster, same height as the lobby poster lights
  hallwayPosterLightSpots.push({
    x: wallX + Math.sin(rotY) * 0.4,
    y: 2.1,
    z: wallZ + Math.cos(rotY) * 0.4
  });
}

// Right hallway: on the back wall (z = 0.3)
[8, 10, 12].forEach(function (x, i) {
  addHallwayPoster(x, 0.3, 0, rightHallPosterMaterials[i]);
});

// Back hallway: on the right wall (x = 5)
[-7, -9, -11].forEach(function (z, i) {
  addHallwayPoster(5, z, -Math.PI / 2, backHallPosterMaterials[i]);
});


// ---------- Cardboard Cutouts + Studio Lights ----------

// where the studio spotlights go (lighting.js reads this list)
const cutoutLightSpots = [];

// Tall standee cutouts (taller than a person) with a cardboard stand
const cutoutHeight = 3.5;

// x / z = where the picture stands, rotY = which way it faces
// (Math.PI = faces -z, -Math.PI / 2 = faces -x), width = how wide the cutout is
// (the picture gets stretched / squeezed to fit)
function addPosterCutout(x, z, rotY, frontMaterial, width) {

  const footZ = -(0.2 + cutoutHeight * 0.12);  // how far back the stand leg reaches (taller = further)
  const legTopY = cutoutHeight * 0.75;         // where the leg is attached on the back

  const g = new THREE.Group();
  g.position.set(x, 0, z);
  g.rotation.y = rotY;

  // the picture (material order: right, left, top, bottom, front, back)
  const panel = new THREE.Mesh(
    new THREE.BoxGeometry(width, cutoutHeight, 0.04),
    [cutoutEdgeMaterial, cutoutEdgeMaterial, cutoutEdgeMaterial, cutoutEdgeMaterial, frontMaterial, cutoutEdgeMaterial]
  );
  panel.position.set(0, 0.05 + cutoutHeight / 2, 0);
  g.add(panel);

  // base plate it stands on (reaches back under the leg)
  const base = new THREE.Mesh(new THREE.BoxGeometry(width * 0.8, 0.05, 0.25 - footZ + 0.08), cutoutEdgeMaterial);
  base.position.set(0, 0.025, (0.25 + footZ - 0.08) / 2);
  g.add(base);

  // leg propping it up from behind
  const rise = legTopY - 0.05;
  const legLength = Math.sqrt(rise * rise + (-footZ) * (-footZ));
  const leg = new THREE.Mesh(new THREE.BoxGeometry(width * 0.35, legLength, 0.03), cutoutEdgeMaterial);
  leg.position.set(0, 0.05 + rise / 2, footZ / 2 - 0.02);
  leg.rotation.x = Math.atan2(-footZ, rise);
  g.add(leg);

  scene.add(g);
}


// Chunky black studio light on the floor (scale makes it smaller), aimed at (tx, ty, tz)
function addStudioLight(x, z, tx, ty, tz, scale) {

  const pivotY = 0.26 * scale;
  const yaw = Math.atan2(tx - x, tz - z);
  const flat = Math.sqrt((tx - x) * (tx - x) + (tz - z) * (tz - z));
  const pitch = Math.atan2(ty - pivotY, flat);

  const g = new THREE.Group();
  g.position.set(x, 0, z);
  g.rotation.y = yaw;
  g.scale.set(scale, scale, scale);

  function add(parent, geometry, material, px, py, pz) {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(px, py, pz);
    parent.add(mesh);
    return mesh;
  }

  add(g, new THREE.BoxGeometry(0.34, 0.04, 0.3), studioLightBodyMaterial, 0, 0.02, 0);

  // the two arms holding the light
  add(g, new THREE.BoxGeometry(0.03, 0.24, 0.05), studioLightBodyMaterial, -0.155, 0.16, 0);
  add(g, new THREE.BoxGeometry(0.03, 0.24, 0.05), studioLightBodyMaterial, 0.155, 0.16, 0);

  // the light itself tilts up on a pivot
  const pivot = new THREE.Group();
  pivot.position.set(0, 0.26, 0);
  pivot.rotation.x = -pitch;
  g.add(pivot);

  const housingGeometry = new THREE.CylinderGeometry(0.12, 0.12, 0.34, 16);
  housingGeometry.rotateX(Math.PI / 2);
  add(pivot, housingGeometry, studioLightBodyMaterial, 0, 0, 0.03);

  const rimGeometry = new THREE.CylinderGeometry(0.145, 0.145, 0.05, 16);
  rimGeometry.rotateX(Math.PI / 2);
  add(pivot, rimGeometry, studioLightBodyMaterial, 0, 0, 0.2);

  const lensGeometry = new THREE.CylinderGeometry(0.105, 0.105, 0.01, 16);
  lensGeometry.rotateX(Math.PI / 2);
  add(pivot, lensGeometry, studioLightLensMaterial, 0, 0, 0.227);

  add(pivot, new THREE.BoxGeometry(0.2, 0.2, 0.06), studioLightBodyMaterial, 0, 0, -0.17);

  scene.add(g);

  // light position: just in front of the lens
  const reach = 0.22 * scale;
  cutoutLightSpots.push({
    x: x + Math.sin(yaw) * Math.cos(pitch) * reach,
    y: pivotY + Math.sin(pitch) * reach,
    z: z + Math.cos(yaw) * Math.cos(pitch) * reach,
    tx: tx, ty: ty, tz: tz
  });
}

const studioLightScale = 0.7;
const cutoutAimY = 1.8;     // height the lights aim at on the cutout (about the middle)


// Cutout 1: by the right wall, next to the back hallway (faces into the lobby)
// - wide, because there is a lot of empty wall here
const cutout1Width = 3.4;
const cutout1Z = -2.6;
addPosterCutout(5.26, cutout1Z, -Math.PI / 2, cutoutFront1Material, cutout1Width);
addStudioLight(4.4, cutout1Z - 1.45, 5.26, cutoutAimY, cutout1Z, studioLightScale);
addStudioLight(4.4, cutout1Z + 1.45, 5.26, cutoutAimY, cutout1Z, studioLightScale);

// Cutout 2: by the front wall, between the middle two posters
// - skinny, so it doesn't cover the posters beside it (they start at x = -0.94 and 0.94)
const cutout2Width = 1.7;
addPosterCutout(0, 3.76, Math.PI, cutoutFront2Material, cutout2Width);
addStudioLight(-1.7, 3.05, 0, cutoutAimY, 3.76, studioLightScale);
addStudioLight(1.7, 3.05, 0, cutoutAimY, 3.76, studioLightScale);


// ---------- Trailer Screens ----------


const trailerScreenGeometry = new THREE.BoxGeometry(1.2, 3.0, 0.12);
const trailerScreen1 = new THREE.Mesh(trailerScreenGeometry, trailerFrameMaterial);

trailerScreen1.position.x = -3.0;
trailerScreen1.position.y = 1.7;
trailerScreen1.position.z = 4.0;

scene.add(trailerScreen1);

const trailerDisplayGeometry = new THREE.BoxGeometry(1.02, 2.65, 0.03);
const trailerDisplay1 = new THREE.Mesh(trailerDisplayGeometry, trailerDisplay1Materials);

trailerDisplay1.position.x = -3.0;
trailerDisplay1.position.y = 1.75;
trailerDisplay1.position.z = 3.92;

scene.add(trailerDisplay1);


const trailerBaseGeometry = new THREE.BoxGeometry(1.5, 0.3, 0.8);
const trailerBase1 = new THREE.Mesh(trailerBaseGeometry, trailerFrameMaterial);

trailerBase1.position.x = -3.0;
trailerBase1.position.y = 0.15;
trailerBase1.position.z = 4.0;

scene.add(trailerBase1);


const trailerStandGeometry = new THREE.BoxGeometry(0.3, 0.55, 0.3);
const trailerStand1 = new THREE.Mesh(trailerStandGeometry, trailerFrameMaterial);

trailerStand1.position.x = -3.0;
trailerStand1.position.y = 0.575;
trailerStand1.position.z = 4.08;

scene.add(trailerStand1);


const trailerScreen2 = new THREE.Mesh(trailerScreenGeometry, trailerFrameMaterial);

trailerScreen2.position.x = 3.0;
trailerScreen2.position.y = 1.7;
trailerScreen2.position.z = 4.0;

scene.add(trailerScreen2);

const trailerDisplay2 = new THREE.Mesh(trailerDisplayGeometry, trailerDisplay2Materials);

trailerDisplay2.position.x = 3.0;
trailerDisplay2.position.y = 1.75;
trailerDisplay2.position.z = 3.92;

scene.add(trailerDisplay2);


const trailerBase2 = new THREE.Mesh(trailerBaseGeometry, trailerFrameMaterial);

trailerBase2.position.x = 3.0;
trailerBase2.position.y = 0.15;
trailerBase2.position.z = 4.0;

scene.add(trailerBase2);


const trailerStand2 = new THREE.Mesh(trailerStandGeometry, trailerFrameMaterial);

trailerStand2.position.x = 3.0;
trailerStand2.position.y = 0.575;
trailerStand2.position.z = 4.08;

scene.add(trailerStand2);


// ---------- FLOOR COVERINGS ----------

// ---------- Movie carpet (both theater doors lead to the snack bar) ----------

const carpetBackHallLeftX = 3.0;        // back hall strip, left edge
const carpetBackHallRightX = 4.6;       // back hall strip, right edge
const carpetBackHallEndZ = -12.45;      // stops at the theater doors

const carpetRoomStartX = -5.7;          // wide part in the room: left end
const carpetRoomEndX = 5.3;             // wide part in the room: right end
const carpetRoomBackZ = -0.7;           // wide part: edge next to the snack bar
const carpetRoomFrontZ = 3.0;           // wide part: edge toward the front wall

const carpetRightHallBackZ = 0.7;       // right hall strip, back edge
const carpetRightHallFrontZ = 2.3;      // right hall strip, front edge
const carpetRightHallEndX = 13.95;      // stops at the theater doors

// The shape is drawn in (x, -z) because it gets laid flat afterwards
const carpetShape = new THREE.Shape();
carpetShape.moveTo(carpetRoomStartX, -carpetRoomBackZ);
carpetShape.lineTo(carpetBackHallLeftX, -carpetRoomBackZ);
carpetShape.lineTo(carpetBackHallLeftX, -carpetBackHallEndZ);
carpetShape.lineTo(carpetBackHallRightX, -carpetBackHallEndZ);
carpetShape.lineTo(carpetBackHallRightX, -carpetRoomBackZ);
carpetShape.lineTo(carpetRoomEndX, -carpetRoomBackZ);
carpetShape.lineTo(carpetRoomEndX, -carpetRightHallBackZ);
carpetShape.lineTo(carpetRightHallEndX, -carpetRightHallBackZ);
carpetShape.lineTo(carpetRightHallEndX, -carpetRightHallFrontZ);
carpetShape.lineTo(carpetRoomEndX, -carpetRightHallFrontZ);
carpetShape.lineTo(carpetRoomEndX, -carpetRoomFrontZ);
carpetShape.lineTo(carpetRoomStartX, -carpetRoomFrontZ);
carpetShape.closePath();

const carpet = new THREE.Mesh(new THREE.ShapeGeometry(carpetShape), carpetMaterial);
carpet.rotation.x = -Math.PI / 2;
carpet.position.y = 0.012;
carpet.userData.noShadow = true;
scene.add(carpet);


// ---------- Snack bar floor (separate tile floor inside the U) ----------

const snackFloorMinX = -6;
const snackFloorMaxX = 2.5;      // reaches under the door gap in the side counter
const snackFloorBackZ = -4.5;
const snackFloorFrontZ = -0.825;

const snackFloorWidth = snackFloorMaxX - snackFloorMinX;
const snackFloorDepth = snackFloorFrontZ - snackFloorBackZ;

const snackFloorGeometry = new THREE.PlaneGeometry(snackFloorWidth, snackFloorDepth);

// repeat the tile texture: one copy of the image covers snackFloorTileSize x snackFloorTileSize
const snackFloorUV = snackFloorGeometry.attributes.uv;
for (let i = 0; i < snackFloorUV.count; i++) {
  snackFloorUV.setXY(
    i,
    snackFloorUV.getX(i) * snackFloorWidth / snackFloorTileSize,
    snackFloorUV.getY(i) * snackFloorDepth / snackFloorTileSize
  );
}

const snackFloor = new THREE.Mesh(snackFloorGeometry, snackFloorMaterial);
snackFloor.rotation.x = -Math.PI / 2;
snackFloor.position.set((snackFloorMinX + snackFloorMaxX) / 2, 0.008, (snackFloorBackZ + snackFloorFrontZ) / 2);
snackFloor.userData.noShadow = true;
scene.add(snackFloor);


// ---------- THEATER DOORS AND ARCHES ----------

// ---------- Theater entrance doors ----------

// Builds a pair of double doors. Local z = 0 is the wall, +z points into the hallway.
function createTheaterDoors(signMaterial) {

  const doors = new THREE.Group();

  // Frame: two sides and a top
  const jambGeometry = new THREE.BoxGeometry(0.1, 2.5, 0.14);

  const jambLeft = new THREE.Mesh(jambGeometry, theaterDoorFrameMaterial);
  jambLeft.position.set(-0.85, 1.25, 0.07);
  doors.add(jambLeft);

  const jambRight = new THREE.Mesh(jambGeometry, theaterDoorFrameMaterial);
  jambRight.position.set(0.85, 1.25, 0.07);
  doors.add(jambRight);

  const header = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.1, 0.14), theaterDoorFrameMaterial);
  header.position.set(0, 2.45, 0.07);
  doors.add(header);

  // Two door leaves, each with a window, kick plate and push bar
  const leafGeometry = new THREE.BoxGeometry(0.78, 2.35, 0.06);
  const windowGeometry = new THREE.BoxGeometry(0.34, 0.8, 0.07);
  const kickGeometry = new THREE.BoxGeometry(0.74, 0.18, 0.07);
  const barGeometry = new THREE.CylinderGeometry(0.018, 0.018, 0.6, 10);

  [-0.4, 0.4].forEach(function (x) {

    const leaf = new THREE.Mesh(leafGeometry, theaterDoorMaterial);
    leaf.position.set(x, 1.195, 0.06);
    doors.add(leaf);

    const glass = new THREE.Mesh(windowGeometry, theaterDoorWindowMaterial);
    glass.position.set(x, 1.65, 0.06);
    doors.add(glass);

    const kick = new THREE.Mesh(kickGeometry, theaterKickMaterial);
    kick.position.set(x, 0.11, 0.06);
    doors.add(kick);

    const bar = new THREE.Mesh(barGeometry, theaterMetalMaterial);
    bar.rotation.z = Math.PI / 2;
    bar.position.set(x, 1.05, 0.11);
    doors.add(bar);

  });

  // Sign above the doors
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 0.28), signMaterial);
  sign.position.set(0, 2.75, 0.02);
  doors.add(sign);

  return doors;
}

// Back hallway (end wall at z = -12.5)
const theaterDoorsBack = createTheaterDoors(theaterSign1Material);
theaterDoorsBack.position.set(3.8, 0, -12.499);
scene.add(theaterDoorsBack);

// Right hallway (end wall at x = 14)
const theaterDoorsRight = createTheaterDoors(theaterSign2Material);
theaterDoorsRight.position.set(13.999, 0, 1.5);
theaterDoorsRight.rotation.y = -Math.PI / 2;
scene.add(theaterDoorsRight);

// ---------- Right Hallway Arch ----------

// The frame is a bit thicker than the wall so it sticks out on both sides
const archThickness = wallThickness + 0.1;
const rightArchX = width / 2 + wallThickness / 2;    // middle of the right wall


const rightArchLeftGeometry = new THREE.BoxGeometry(archThickness, 2.6, 0.3);
const rightArchLeft = new THREE.Mesh(rightArchLeftGeometry, archWallMaterial);

rightArchLeft.position.set(rightArchX, 1.3, 0.6);

scene.add(rightArchLeft);


const rightArchRightGeometry = new THREE.BoxGeometry(archThickness, 2.6, 0.3);
const rightArchRight = new THREE.Mesh(rightArchRightGeometry, archWallMaterial);

rightArchRight.position.set(rightArchX, 1.3, 2.4);

scene.add(rightArchRight);


const rightArchTopGeometry = new THREE.BoxGeometry(archThickness, 0.4, 1.8);
const rightArchTop = new THREE.Mesh(rightArchTopGeometry, archWallMaterial);

rightArchTop.position.set(rightArchX, 2.8, 1.5);

scene.add(rightArchTop);


const rightArchTrimGeometry = new THREE.BoxGeometry(archThickness + 0.04, 0.08, 1.8);
const rightArchTrim = new THREE.Mesh(rightArchTrimGeometry, archTrimMaterial);

rightArchTrim.position.set(rightArchX, 3.02, 1.5);

scene.add(rightArchTrim);


// ---------- Back Hallway Arch ----------

const backArchZ = -depth / 2 - wallThickness / 2;    // middle of the back wall


const backArchLeftGeometry = new THREE.BoxGeometry(0.3, 2.6, archThickness);
const backArchLeft = new THREE.Mesh(backArchLeftGeometry, archWallMaterial);

backArchLeft.position.set(2.6, 1.3, backArchZ);

scene.add(backArchLeft);


const backArchRightGeometry = new THREE.BoxGeometry(0.3, 2.6, archThickness);
const backArchRight = new THREE.Mesh(backArchRightGeometry, archWallMaterial);

backArchRight.position.set(5.0, 1.3, backArchZ);

scene.add(backArchRight);


const backArchTopGeometry = new THREE.BoxGeometry(2.4, 0.4, archThickness);
const backArchTop = new THREE.Mesh(backArchTopGeometry, archWallMaterial);

backArchTop.position.set(3.8, 2.8, backArchZ);

scene.add(backArchTop);


const backArchTrimGeometry = new THREE.BoxGeometry(2.4, 0.08, archThickness + 0.04);
const backArchTrim = new THREE.Mesh(backArchTrimGeometry, archTrimMaterial);

backArchTrim.position.set(3.8, 3.02, backArchZ);

scene.add(backArchTrim);


// ---------- FLOOR LIGHTS AND THE CUBE ----------

// ---------- Ambient floor lights (metal ring + glowing centre) ----------

const floorLightRimGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.02, 24);
const floorLightDotGeometry = new THREE.CircleGeometry(0.065, 20);
const floorLightGlowGeometry = new THREE.PlaneGeometry(0.9, 0.9);

function addFloorLight(x, z) {

  const rim = new THREE.Mesh(floorLightRimGeometry, floorLightRimMaterial);
  rim.position.set(x, 0.01, z);
  rim.userData.noShadow = true;
  scene.add(rim);

  const dot = new THREE.Mesh(floorLightDotGeometry, floorLightMaterial);
  dot.rotation.x = -Math.PI / 2;
  dot.position.set(x, 0.022, z);
  dot.userData.noShadow = true;
  scene.add(dot);

  const glow = new THREE.Mesh(floorLightGlowGeometry, floorGlowMaterial);
  glow.rotation.x = -Math.PI / 2;
  glow.position.set(x, 0.016, z);
  glow.userData.noShadow = true;
  scene.add(glow);

}

// Back hallway, left side
for (let z = -11.8; z <= -5; z += 1) {
  addFloorLight(2.8, z);
}

// Back hallway, right side - comes down along the carpet edge
for (let z = -11.8; z <= -1.7; z += 1) {
  addFloorLight(4.8, z);
}

// Around the right end of the wide carpet, up to the right hallway
addFloorLight(4.8, -0.9);
addFloorLight(5.55, -0.1);

// Right hallway, back side
for (let x = 6.5; x <= 13.5; x += 1) {
  addFloorLight(x, 0.5);
}

// Along the front edge of the wide carpet
for (let x = -5.2; x <= 4.8; x += 1) {
  addFloorLight(x, 3.25);
}

// Around the front-right corner, into the right hallway
addFloorLight(5.55, 2.9);

// Right hallway, front side
for (let x = 6.5; x <= 13.5; x += 1) {
  addFloorLight(x, 2.5);
}


// ---------- Simple Cube ----------

const cubeGeometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

cube.position.set(1.2, 1.2, -1.4);

scene.add(cube);