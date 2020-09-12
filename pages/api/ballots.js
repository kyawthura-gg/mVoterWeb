import { fetchToken } from './auth';
import MaePaySohAPI from '../../gateway/api';

export default async function (req, res) {
  try {
    const {
      category = 'normal',
    } = req.query;

    const token = await fetchToken(req);

    if (!token) {
      return res.status(500).send({ error: 'No secret token provided.' })
    }

    const api = new MaePaySohAPI(token);

    const response = await api.getBallots(category);
    const { data } = response.data;

    return res.status(200).send({ data });
  } catch (error) {
    console.error(error);
  }
}