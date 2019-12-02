const clothesColors = {
  'black': {
    color1: '#999',
    color2: '#555',
    color3: '#777'
  },
  'red': {
    color1: '#B77',
    color2: '#955',
    color3: '#500'
  }
};
const hairColors = {
  'blond': '#d7c163',
  'brown': '#7d4519'
};
const skinColors = {
  'black': '#684e3c',
  'white': '#f7e2d3'
};
const eyeColors = {
  'black': '#222',
  'blue': '#2a91cc'
};

export function drawCharacter(ctx, gender, skinColor, hairColor, eyeColor, charClass, clotheColor) {
  drawBody(ctx, gender, skinColors[skinColor], hairColors[hairColor]);
  drawEyes(ctx, eyeColors[eyeColor]);
  if (clotheColor) drawClothes(ctx, gender, charClass, clothesColors[clotheColor]);
  if (charClass) drawWeapon(ctx, charClass);
}

function drawBody(ctx, gender, skinColor, hairColor) {
  if (!skinColor) skinColor = 'grey';
  if (!hairColor) hairColor = 'black';
  // Hair back
  if (gender === 'F' && hairColor) {
    ctx.fillStyle = hairColor;
    ctx.beginPath();
    ctx.moveTo(87, 15);
    ctx.lineTo(70, 50);
    ctx.lineTo(130, 50);
    ctx.lineTo(113, 15);
    ctx.closePath();
    ctx.fill();
  }

  // Head
  ctx.fillStyle = skinColor;
  ctx.beginPath();
  ctx.arc(100, 30, 20, 0.4 * Math.PI, 0.6 * Math.PI, true);
  ctx.closePath();
  ctx.fill();

  // Hair front
  if (hairColor) {
    ctx.fillStyle = hairColor;
    ctx.beginPath();
    ctx.arc(100, 30, 20, 1.2 * Math.PI, 1.7 * Math.PI, false);
    ctx.lineTo(117, 19);
    ctx.closePath();
    ctx.fill();
  }

  // Neck
  ctx.fillStyle = skinColor;
  ctx.fillRect(92, 40, 16, 15);

  // Trunk
  ctx.fillRect(80, 55, 40, 60);

  // Arms
  ctx.strokeStyle = skinColor;
  ctx.beginPath();
  ctx.lineWidth = 10;
  ctx.moveTo(85, 57);
  ctx.lineTo(60, 110);
  ctx.closePath();
  ctx.stroke();
  ctx.beginPath();
  ctx.lineWidth = 10;
  ctx.moveTo(115, 57);
  ctx.lineTo(135, 110);
  ctx.closePath();
  ctx.stroke();

  // Legs
  ctx.fillStyle = skinColor;
  ctx.fillRect(80, 115, 17, 60);
  ctx.fillRect(103, 115, 17, 60);

  // Feet
  ctx.fillStyle = skinColor;
  ctx.beginPath();
  ctx.moveTo(80, 175);
  ctx.lineTo(70, 185);
  ctx.lineTo(97, 185);
  ctx.lineTo(97, 175);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(120, 175);
  ctx.lineTo(130, 185);
  ctx.lineTo(103, 185);
  ctx.lineTo(103, 175);
  ctx.closePath();
  ctx.fill();
}

function drawEyes(ctx, color) {
  if (!color) color = 'black';
  // Eye left
  // Eye white
  ctx.fillStyle = "#FFF";
  ctx.beginPath();
  ctx.arc(92, 30, 5, 0, 2 * Math.PI, true);
  ctx.closePath();
  ctx.fill();
  // Eye black
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(92, 30, 3, 0, 2 * Math.PI, true);
  ctx.closePath();
  ctx.fill();
  // Eye reflection
  ctx.fillStyle = "#FFF";
  ctx.beginPath();
  ctx.arc(93, 29, 1, 0, 2 * Math.PI, true);
  ctx.closePath();
  ctx.fill();

  // Eye right
  // Eye white
  ctx.fillStyle = "#FFF";
  ctx.beginPath();
  ctx.arc(108, 30, 5, 0, 2 * Math.PI, true);
  ctx.closePath();
  ctx.fill();
  // Eye black
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(108, 30, 3, 0, 2 * Math.PI, true);
  ctx.closePath();
  ctx.fill();
  // Eye reflection
  ctx.fillStyle = "#FFF";
  ctx.beginPath();
  ctx.arc(109, 29, 1, 0, 2 * Math.PI, true);
  ctx.closePath();
  ctx.fill();
}

function drawClothes(ctx, gender, charClass, clothesColors) {
  if (gender === 'M') {
  	// Tshirt trunk
  	ctx.fillStyle = clothesColors.color1;
  	ctx.beginPath();
  	ctx.moveTo(92, 55);
    ctx.lineTo(80, 55);
    ctx.lineTo(80, 105);
    ctx.lineTo(120, 105);
    ctx.lineTo(120, 55);
    ctx.lineTo(108, 55);
    ctx.lineTo(100, 58);
    ctx.lineTo(92, 55);
    ctx.closePath();
    ctx.fill();
    // Tshirt arms
    ctx.strokeStyle = clothesColors.color1;
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.moveTo(85, 57);
    ctx.lineTo(64, 100);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.moveTo(115, 57);
    ctx.lineTo(131, 100);
    ctx.closePath();
    ctx.stroke();
  } else if (gender === 'F') {
  	// Tshirt trunk
  	ctx.fillStyle = clothesColors.color1;
  	ctx.beginPath();
  	ctx.moveTo(92, 55);
    ctx.lineTo(80, 55);
    ctx.lineTo(80, 105);
    ctx.lineTo(120, 105);
    ctx.lineTo(120, 55);
    ctx.lineTo(108, 55);
    ctx.lineTo(100, 70);
    ctx.lineTo(92, 55);
    ctx.closePath();
    ctx.fill();
    // Tshirt arms
    ctx.strokeStyle = clothesColors.color1;
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.moveTo(85, 57);
    ctx.lineTo(74, 80);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.moveTo(115, 57);
    ctx.lineTo(124, 80);
    ctx.closePath();
    ctx.stroke();
  }

  // Pants
  ctx.fillStyle = clothesColors.color2;
  // Trunk
  ctx.fillRect(80, 105, 40, 10);
  // Legs
  ctx.fillRect(80, 115, 17, 60);
  ctx.fillRect(103, 115, 17, 60);

  // Shoes
  ctx.fillStyle = clothesColors.color3;
  ctx.beginPath();
  ctx.moveTo(80, 175);
  ctx.lineTo(70, 185);
  ctx.lineTo(97, 185);
  ctx.lineTo(97, 175);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(120, 175);
  ctx.lineTo(130, 185);
  ctx.lineTo(103, 185);
  ctx.lineTo(103, 175);
  ctx.closePath();
  ctx.fill();
}

function drawWeapon(ctx, charClass) {
  if (charClass === 'warrior') {
    // Sword
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.fillStyle = '#999';
    ctx.moveTo(58, 100);
    ctx.lineTo(45, 40);
    ctx.lineTo(49, 33);
    ctx.lineTo(55, 37);
    ctx.lineTo(62, 100);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.strokeStyle = '#BBB';
    ctx.moveTo(60, 100);
    ctx.lineTo(49, 33);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.fillStyle = '#740';
    ctx.moveTo(51, 102);
    ctx.lineTo(70, 94);
    ctx.lineTo(70, 99);
    ctx.lineTo(51, 107);
    ctx.closePath();
    ctx.fill();
  } else if (charClass === 'wizard') {
    // Magic stick
    ctx.strokeStyle = "#740";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(60, 40);
    ctx.lineTo(65, 185);
    ctx.closePath();
    ctx.stroke();
    // Jewel
    ctx.strokeStyle = "#AA2";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(60, 35);
    ctx.lineTo(60, 41);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "#489";
    ctx.beginPath();
    ctx.arc(59.7, 31, 5, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
  }
}
