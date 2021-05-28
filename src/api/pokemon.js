import axios from 'axios';

const paginationSize = process.env.VUE_APP_PAGINATION_SIZE;

const get = (page = 1) => axios.get('/pokemon', {
  params: {
    limit: paginationSize,
    offset: (page - 1) * paginationSize,
  },
});

const getByName = (name) => axios.get(`/pokemon/${name}`);

export default { get, getByName };
