import Ong from '../models/Ong';

class OngController {
  async index(request, response) {
    const ongs = await Ong.findAll({
      order: ['id'],
      attributes: ['id', 'name', 'email', 'whatsapp', 'city', 'uf'],
    });

    return response.json(ongs);
  }

  async store(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    const { id } = await Ong.create({ name, email, whatsapp, city, uf });

    return response.json({ id });
  }
}

export default new OngController();
