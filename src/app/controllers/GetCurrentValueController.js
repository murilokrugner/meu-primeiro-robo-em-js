const robo = require("../../functions");

class GetCurrentValueController {
  async index(req, res) {
    setInterval(() => {
      robo();
    }, 2000);
  }
}

export default new GetCurrentValueController();
