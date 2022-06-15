import { robo } from "../../../index";

class GetCurrentValueController {
  async index(req, res) {
    setInterval(() => {
      robo();
    }, 2000);
  }
}

export default new GetCurrentValueController();
