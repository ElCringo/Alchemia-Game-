/*Functions for all interactions are to be stored here. The game's UI will have 4 slots: 2 ingredient slots, 1 reaction slot, and 1 result slot. 
2 ingredients will be chosen from a list of ingredients by first clicking on the window in which the content is to be changed, and then clicking the ingredient to fill the slot.
There will be "Empty Slot" button too, to empty each of the slots.
The Processing method will be chosen from another list. The interaction with the slot will be the same as in other cases.
Result slot will contain the object created through the interactions of the two ingredients, based on the logic defined by the chosen processing method.
Resulting object will be tested for having values (see ingredient list) above 3 or below 0. If that will be the case, game is over.
The ultimate goal of the game is to combine the compounds until one reaches a "Philosopher's Stone" (Object with all scores of 3).
Other achievements can be considered, like adding other combinations to create.
There will be a large number of substances that will not have any name. It is uncertain how to name them at this point.
Maybe the best solution would be to present its elemental scores in some way, with the name consisting of some unreadable "magical" signs that would be randomly generated.
*/

// Functions below.
function generate() { //This function will lead to a window with all ingredients, and equipment to choose from (i.e. start the game).

};

function slot1() { //This function will let the player chose the first ingredient (to be presented in slot 1).

};

function emptySlot1() { //This function will empty the 1st slot (returning the object to the equipment).

};

function slot2() { //This function will let the player chose the second ingredient (to be presented in slot 2).

};

function emptySlot2() { //This function will empty the 2nd slot (returning the object to the equipment).

};

function processSlot() { //This function will let the player chose the processing method to be used (to be presented in a slot located below the 2 other slots).

};

function emptyProcessSlot() { //This function will empty the process slot, (returning the object to the equipment).

};

function reaction() { //This function will create a new object from objects in slot 1 and slot 2 according to the logic of object located in the processSlot.

};

function returnToEq() { //This function will return new object from the reaction slot to the equipment.

};

function safetyCheck() { //This function will check if the component created in the reaction slot has any values above 3 or below 0. If so, the function will induce "Game Over".

};

function win() { //This function will check if the component created in the reaction slot has all values equal to 3. If so, the function will induce "Win".

};
