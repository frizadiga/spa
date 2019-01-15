import axios from 'axios';

const options = {
  baseURL: 'http://167.99.74.58:1337',
};

const Fetch = axios.create(options);

export default Fetch;