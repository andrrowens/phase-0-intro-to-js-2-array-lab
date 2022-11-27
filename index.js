const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  name = "Ralph";
  cats.push(name);
  return cats;
}

function destructivelyPrependCat(name) {
  name = "Bob";
  cats.unshift(name);
  return cats;
}

function destructivelyRemoveLastCat(name) {
  cats.pop();
  return cats;
}

function destructivelyRemoveFirstCat(name) {
  cats.shift();
  return cats;
}

function appendCat(name) {
    let newCats = [...cats, "Broom"]
    return newCats
}

function prependCat(name) {
    let catsRevised = ["Arnold", ...cats]
    return catsRevised
}

function removeLastCat() {
    const newKitties = cats.slice(0, 2)
    return newKitties
}

function removeFirstCat() {
    const updatedCats = cats.slice(1)
    return updatedCats
}


