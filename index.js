const cats = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat (name) {
    var tempArray = [];
    tempArray.push(cats.pop());
    tempArray.push(cats.pop());
    tempArray.push(cats.pop());
    cats.push(name);
    cats.push(tempArray.pop());
    cats.push(tempArray.pop());
    cats.push(tempArray.pop());
}
function destructivelyRemoveLastCat(name) {
    cats.pop();
}
function destructivelyRemoveFirstCat(name) {
    var tempArray = [];
    tempArray.push(cats.pop());
    tempArray.push(cats.pop());
    cats.pop();
    cats.push(tempArray.pop());
    cats.push(tempArray.pop());
}
function appendCat(name) {
    var tempArray =[];
    tempArray.push(cats[0]);
    tempArray.push(cats[1]);
    tempArray.push(cats[2]);
    tempArray.push(name);
    return tempArray;
}
function prependCat (name) {
    var tempArray =[];
    tempArray.push(name); 
    tempArray.push(cats[0]);
    tempArray.push(cats[1]);
    tempArray.push(cats[2]); 
    return tempArray; 
}
function removeLastCat(name) {
    var tempArray = [];
    tempArray.push(cats[0]);
    tempArray.push(cats[1]);
    return tempArray;
}
function removeFirstCat(name) {
    var tempArray = [];
    tempArray.push(cats[1]);
    tempArray.push(cats[2]); 
    return tempArray;

}
 