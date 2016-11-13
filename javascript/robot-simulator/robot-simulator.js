const EAST = 'east';
const WEST = 'west';
const NORTH = 'north';
const SOUTH = 'south';

const DIRECTIONS = [NORTH, EAST, SOUTH, WEST];
const TOTAL_DIRECTIONS = 4;
const ADVANCE_DIRECTION_COORDS = {
  [NORTH]: [0, 1],
  [EAST]: [1, 0],
  [SOUTH]: [0, -1],
  [WEST]: [-1, 0],
}
const INSTRUCTIONS_MAP = {
  'R': 'turnRight',
  'L': 'turnLeft',
  'A': 'advance',
}

function orient(bearing) {
  if (DIRECTIONS.some(a=>a===bearing)) {
    return bearing
  }
  throw 'Invalid Robot Bearing';
  return bearing;
}

function turnRight(bearing) {
  const idx = DIRECTIONS.findIndex(b=>b===bearing) + 1;
  return idx >= TOTAL_DIRECTIONS ? DIRECTIONS[0] : DIRECTIONS[idx];
}
function turnLeft(bearing) {
  const idx = DIRECTIONS.findIndex(b=>b===bearing) - 1;
  return idx < 0 ? DIRECTIONS[3] : DIRECTIONS[idx];
}
function at(x, y) {
  return [x, y];
}
function advance(coords, bearing) {
  return [coords[0] + ADVANCE_DIRECTION_COORDS[bearing][0], coords[1] + ADVANCE_DIRECTION_COORDS[bearing][1]];
}
function instructions(inst) {
  return [...inst].map(i=>INSTRUCTIONS_MAP[i]);
}

function Robot() {
  this.coordinates = [0, 0];
  this.bearing = '';
  return {
    orient(bearing) {this.bearing = orient(bearing)},
    turnRight() {this.bearing = turnRight(this.bearing)},
    turnLeft() {this.bearing = turnLeft(this.bearing)},
    at(x,y) {this.coordinates = at(x,y)},
    advance() {this.coordinates = advance(this.coordinates, this.bearing)},
    instructions,
    place(p) {
      this.coordinates = at(p.x, p.y);
      this.bearing = orient(p.direction);
    },
    evaluate(inst) {
      this.instructions(inst).forEach((c)=>this[c]());
    }
  };
}

module.exports = Robot;
