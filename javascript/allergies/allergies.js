const EGGS = 'eggs'
const PEAN = 'peanuts'
const SHELL = 'shellfish'
const STRAW = 'strawberries'
const TOM = 'tomatoes'
const CHOC = 'chocolate'
const POLL = 'pollen'
const CATS = 'cats'

const ALLERGIES = {
  [EGGS]: 1,
  [PEAN]: 2,
  [SHELL]: 4,
  [STRAW]: 8,
  [TOM]: 16,
  [CHOC]: 32,
  [POLL]: 64,
  [CATS]: 128,
}
const ALLERGIES_ORDER = [EGGS, PEAN, SHELL, STRAW, TOM, CHOC, POLL, CATS].reverse();
const ALLERGIES_VALUES = Object.keys(ALLERGIES).reduce((acc, k)=>{
  return Object.assign(acc, {[ALLERGIES[k]]: k});
}, {});

function getList(value) {
  if (ALLERGIES_VALUES[value]) return [ALLERGIES_VALUES[value]];
  return ALLERGIES_ORDER.reduce((acc, a)=>{
    if (acc.value === 0) return acc;
    const remainder = acc.value - ALLERGIES[a];
    if (remainder >= 0) {
      return {value: remainder, list: acc.list.concat(a)};
    }
    return acc;
  }, {value, list: []}).list.reverse();
}

function allergicTo({allergy, list}) {
  return list.indexOf(allergy) > -1;
}

function Allergies(value) {
  while (value >= 256) {
    value = value - 256
  }
  this.allergies = getList(value)
  return {
    list: ()=>this.allergies,
    allergicTo: (a)=>allergicTo({allergy: a, list: this.allergies}),
  }
}

module.exports = Allergies;
