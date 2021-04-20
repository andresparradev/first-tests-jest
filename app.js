function sum(a, b) {
  if(!a || !b || typeof a !== 'number' || typeof b !== 'number') return
  return a + b
}

module.exports = {
  sum
}