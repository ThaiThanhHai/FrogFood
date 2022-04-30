const getCreateAt = (item) => {
  const date = item.split("T");
  return date[0];
};

module.exports = { getCreateAt };
