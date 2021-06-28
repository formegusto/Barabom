import { Item } from '../types/track';

const musicutils = {
  getMusicAritst(item: Item) {
    return `${item.artists[0].name} - ${item.name}`;
  },
};

export default musicutils;
