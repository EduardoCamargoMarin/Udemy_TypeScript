"use strict";
let itemInput;
let itemName;
itemInput = 10; //deixou como unknown
itemInput = 'Apple';
if (itemInput === 'string') {
    itemName = itemInput; // o TS reclama e pede para verificar a não ser que coloque uma condição
}
