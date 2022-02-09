function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const isSameId = (obj1, obj2) => obj1.id === obj2.id;

const isValidArrayFormat = (array) => {
  let clickableCardCount = 0;
  array.forEach((item) => {
    if ((item.clicked === false)) clickableCardCount += 1;
  });
  return (clickableCardCount);
};

function generateTurnData(data, count=4) {
  const array = [];

  while (array.length <= count) {
    if ((array.length === count)){
      if (isValidArrayFormat(array)) break;
      array.length = 0;
    }

    const object = data[randomInteger(0, data.length-1)];

    if (array.length) {
      let duplicate = 0;
      array.forEach((item) => {
        if (isSameId(item, object)) duplicate += 1;
      });
      if (!duplicate) array.push(object);
    } else {
      array.push(object);
    }
  }
  return array;
};

export { randomInteger, generateTurnData };
