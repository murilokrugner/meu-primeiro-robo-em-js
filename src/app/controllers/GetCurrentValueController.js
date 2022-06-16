const { robo } = require("../../functions");
class GetCurrentValueController {
  async index(req, res) {
    setInterval(async () => {
      robo();
    }, 60000);
  }
}

module.exports = new GetCurrentValueController();
