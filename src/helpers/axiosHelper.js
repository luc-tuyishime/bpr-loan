import 'dotenv/config';
import axios from 'axios';
import * as urlHelper from './urlHelper';

const { NODE_ENV } = process.env;
const { userManagementUrl, botUrl } = urlHelper.backend;

// // const CROSS_ORIGIN_URL = 'https://cors-anywhere.herokuapp.com';

// eslint-disable-next-line import/no-anonymous-default-export
export default (data = {}) => {
  const { URL } = data;

  const baseURL =
    URL ||
    (userManagementUrl && `${userManagementUrl}/api/v1`) ||
    (botUrl && `${botUrl}/api/v1`);

  return (NODE_ENV === 'test' && axios) || axios.create({ baseURL });
};
