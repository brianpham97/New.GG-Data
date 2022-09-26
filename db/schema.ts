import { Schema, model } from 'mongoose';

const attributeSchema = new Schema ({
  top: Boolean,
  jung: Boolean,
  mid: Boolean,
  bot: Boolean,
  supp: Boolean
});

const skinSchema = new Schema ({
  num: {type: Number, required: true},
  name: {type: String, required: true}
});

const championSchema = new Schema ({
  name: {type: String, required: true},
  meta: attributeSchema,
  thirst: attributeSchema,
  skins: {type: [skinSchema], required: true}
});

export const Champions = model('Champions', championSchema);