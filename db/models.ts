import { Champions } from './schema';

interface Attributes {
  top?: Boolean;
  jung?: Boolean;
  mid?: Boolean;
  bot?: Boolean;
  supp?: Boolean;
};

interface Skins {
  num: Number;
  name: String;
};

interface Champs {
  name: String;
  meta?: Attributes;
  thirst?: Attributes;
  skins: Array<Skins>;
};

export async function getChampion(condition:string): Promise<Champs[] | void> {
  try {
    const champions = await Champions.find({[condition]: true});
    const parse = champions.map((champ) => {
      const name:String = champ.name;
      const skins:Array<Skins> = champ.skins;
      return {name: name, skins: skins};
    })
    return parse;

  } catch (err) {
    console.log(err);
  }
};

export async function allChampion(condition:string): Promise<String[] | void> {
  try {
    const champions = await Champions.find({[condition]: {'$exists': true}})
    const parse = champions.map((champ) => {
      return champ.name;
    })
    console.log('FINISHED PARSE');
    return parse;
  } catch (err) {
    console.log(err)
  }
}

export async function loadData(data: Array<Champs>): Promise<void> {
  try {
    Champions.insertMany(data);
    console.log('Data submited');

  } catch (err) {
    console.log(err);
  }
};