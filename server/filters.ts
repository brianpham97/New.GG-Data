export const filterChamp = (champs:any): any => {
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

const filterSkins = (skins:any): any => {
  const filter = skins.map((champ:any) => {
    const length = champ.skins.length;
    const random = (Math.floor(Math.random() * length));
    let skin = champ.skins[random];
    return {name: champ.name, skin: {num: skin.num, name: skin.name}};
  })

  return filter;
}

