// The cats array (global scope)
const cats = ["Milo", "Otis", "Garfield"];

// 1. Destructively append a cat to the end of the array
function destructivelyAppendCat(name) {
  cats.push(name);
}

// 2. Destructively prepend a cat to the beginning of the array
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// 3. Destructively remove the last cat from the array
function destructivelyRemoveLastCat() {
  cats.pop();
}

// 4. Destructively remove the first cat from the array
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// 5. Non-destructively append a cat to the end of the array
function appendCat(name) {
  return [...cats, name];
}

// 6. Non-destructively prepend a cat to the beginning of the array
function prependCat(name) {
  return [name, ...cats];
}

// 7. Non-destructively remove the last cat from the array
function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}

// 8. Non-destructively remove the first cat from the array
function removeFirstCat() {
  return cats.slice(1);
}
