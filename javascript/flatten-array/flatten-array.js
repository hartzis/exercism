function flatten(arr) {
  return arr.reduce((acc, l)=>{
    return acc.concat( Array.isArray(l) ? flatten(l) : l )
      .filter(i => i !== null);
  }, []);
}

function Flattener() {
  return {
    flatten,
  }
}

module.exports = Flattener;
