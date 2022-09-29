import { Champs, Final } from "../interface";

export const filterChamp = (champs:Champs[]): Final[] => {
  let count = 3;
  let filteredChamps = [];

  while (count !== 0) {
    let length = champs.length;
    let random = (Math.floor(Math.random() * length));
    filteredChamps.push(champs[random]);
    champs.splice(random, 1);

    count--;
    length--;
  }

  return filterSkins(filteredChamps);
}

export const shuffleChamps = (champs:String[]):String[] => {
  const count = champs.length;
  for (let i = 0; i < count; i++) {
    let num = Math.floor(Math.random() * count);
    let holder = champs[i];
    champs[i] = champs[num]
    champs[num] = holder;
  }
  return champs;
}

const filterSkins = (skins:Champs[]): Final[] => {
  const filter = skins.map((champ:Champs) => {
    const length = champ.skins.length;
    const random = (Math.floor(Math.random() * length));
    let skin = champ.skins[random];
    return {name: champ.name, skin: {num: skin.num, name: skin.name}};
  })

  return filter;
}

