import axios from 'axios';

const getByUrl = (url) => axios.get(url);

export default { getByUrl };
