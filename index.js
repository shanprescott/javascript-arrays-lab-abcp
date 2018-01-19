const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']

function  destructivelyAppendKitten(name) {
  kittens.push('Ralph')
  return kittens
  
}
destructivelyAppendKitten();

kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyPrependKitten(name) {
  kittens.unshift('Bob')
  return kittens
}
destructivelyPrependKitten();

kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
  
}
destructivelyRemoveLastKitten();