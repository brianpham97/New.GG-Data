export interface Role {
  top?: Boolean;
  jung?: Boolean;
  mid?: Boolean;
  bot?: Boolean;
  supp?: Boolean;
};

export interface Skins {
  num: Number;
  name: String;
  _id?: any;
};

export interface Champs {
  name: String;
  meta?: Role;
  thirst?: Role;
  skins: Array<Skins>;
};

export interface Final {
  name: String;
  skin: Skins
}