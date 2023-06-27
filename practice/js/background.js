const imgList = ["0.png", "1.png", "2.png"];

const chosenImg = imgList[Math.floor(Math.random() * imgList.length)];

const bgImg = document.createElement("img");

bgImg.src = `../img/${chosenImg}`;

document.body.appendChild(bgImg);

