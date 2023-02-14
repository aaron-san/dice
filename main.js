const dice = document.querySelector(".dice");
const rollBtn = document.querySelector(".roll");

let randomDice = () => {
  let output = [1, 2, 3, 4, 5, 6];
  let random = Math.floor(Math.random() * output.length + 1);
  return random;
};

const elem = document.querySelector(".dice");
let randomNum;
const rollD = () => {
  rollBtn.disabled = true;
  let id = null;

  let destinationX = 0;
  let destinationY = 0;

  let rotationX = 0;
  let rotationY = 0;
  clearInterval(id);

  // Set interval
  id = setInterval(frame, 0.1);
  randomNum = randomDice();

  const nRotations = 3;
  switch (randomNum) {
    case 1:
      destinationX = nRotations * 360 + 0;
      destinationY = nRotations * 360 + 0;
      break;
    case 6:
      destinationX = nRotations * 360 + 180;
      destinationY = nRotations * 360 + 0;
      break;
    case 2:
      destinationX = nRotations * 360 + -90;
      destinationY = nRotations * 360 + 0;
      break;
    case 5:
      destinationX = nRotations * 360 + 90;
      destinationY = nRotations * 360 + 0;
      break;
    case 3:
      destinationX = nRotations * 360 + 0;
      destinationY = nRotations * 360 + 90;
      break;
    case 4:
      destinationX = nRotations * 360 + 0;
      destinationY = nRotations * 360 + -90;
      break;
    default:
      break;
  }

  const incrementX = (destinationX - rotationX) / 700;
  const incrementY = (destinationY - rotationY) / 700;
  function frame() {
    if (rotationX < destinationX + 1) {
      rotationX = rotationX + incrementX;
    }
    if (rotationY < destinationY + 1) {
      rotationY = rotationY + incrementY;
    }

    if (rotationX >= destinationX + 1 && rotationY >= destinationY + 1) {
      clearInterval(id);
      rollBtn.disabled = false;
    } else {
      elem.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    }
  }
};

rollBtn.addEventListener("click", rollD);
