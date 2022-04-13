class DataboardController {
  // [GET] /databoard
  showDataboard(req, res, next) {
    res.json("Databoard");
  }
}

module.exports = new DataboardController();
