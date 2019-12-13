import {Award} from '../models/statistics';

export const AwardIconMap: {[k in Award]: string} = {
  [Award.amateur]: 'https://openmoji.org/data/color/svg/1F423.svg',
  [Award.beginner]: 'https://openmoji.org/data/color/svg/1F9D2.svg',
  [Award.expert]: 'https://openmoji.org/data/color/svg/1F468-200D-2708-FE0F.svg',
  [Award.pro]: 'https://openmoji.org/data/color/svg/1F396.svg',
  [Award.superhero]: 'https://openmoji.org/data/color/svg/1F9B8-200D-2642-FE0F.svg'
};
