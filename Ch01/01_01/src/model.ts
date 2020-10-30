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

let displayName: string = "Jess's standing desk";
let inventoryType: string = "furniture";
let trackingNumber: string = "FD123455";
let createDate: Date = new Date();
let originalCost: number = 425;
// or:
// let originalCost = 425 as number;
// (gradual typing) - will allow reassigning to any other type
// let originalCost: any = 425;
// let originalCost = 425 as any;
// originalCost = "a lot of money"

interface InventoryItem {
  displayName: string;
  inventoryType: string;
  readonly trackingNumber: string;
  createDate: Date;
  originalCost?: number;

  // Also allowed
  // addNote(note: string): string;
  addNote?: (note: string) => string;
}

// void or object can be used as a return type
// using inline type definition
function getInventoryItem(
  trackingNumber: string
): InventoryItem {
  return null;
}

function saveInventoryItem(item: InventoryItem) {}

let inventoryItem = getInventoryItem(trackingNumber);
inventoryItem.createDate = new Date();

saveInventoryItem(inventoryItem);
