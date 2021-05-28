import { shallowMount } from '@vue/test-utils';
import PokemonCard from '@/components/pokemonCard/PokemonCard.vue';

describe('PokemonCard.vue', () => {
  it('renders a pokemon name', () => {
    const name = 'Bulbasaur';
    const wrapper = shallowMount(PokemonCard, {
      propsData: { name },
    });

    expect(wrapper.find('.pokemon-name').text()).toMatch(name);
  });
});
