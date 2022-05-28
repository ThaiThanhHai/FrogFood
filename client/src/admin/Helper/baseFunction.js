const getCreateAt = (item) => {
  const date = item.split("T");
  return date[0];
};

const unique = (arr) => {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

const splitDay = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i].split("T");
    newArr.push(tmp[0]);
  }

  return newArr;
};

module.exports = { getCreateAt, unique, splitDay };
