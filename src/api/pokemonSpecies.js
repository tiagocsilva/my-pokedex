import axios from 'axios';

const getByPokemonName = (name) => axios.get(`/pokemon-species/${name}`);

export default { getByPokemonName };
