// TS Types (primitives)
// string
// boolean
// number
// bigint
// null
// undefined
// symbol
// non-primitives
// object
// any
// types like Date, etc fall under the object umbrella
var displayName = "Jess's standing desk";
var inventoryType = "furniture";
var trackingNumber = "FD123455";
var createDate = new Date();
var originalCost = 425;
// void or object can be used as a return type
// using inline type definition
function getInventoryItem(trackingNumber) {
    return null;
}
function saveInventoryItem(item) { }
var inventoryItem = getInventoryItem(trackingNumber);
inventoryItem.createDate = new Date();
saveInventoryItem(inventoryItem);
