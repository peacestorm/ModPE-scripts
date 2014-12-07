Block.defineBlock(25,"Iron Block 2x1","iron_block",0);
Block.setShape(25,0,0,0,1,2,1);
Player.addItemCreativeInv(25,1,0);
Item.addShapedRecipe(25, 1, 0, [
"   ",
" i ",
" i "
], 
["i", 42, 0]);

Block.defineBlock(250,"Gold Block 2x1","gold_block",0);
Block.setShape(250,0,0,0,1,2,1);
Player.addItemCreativeInv(250,1,0);
Item.addShapedRecipe(250, 1, 0, [
"   ",
" i ",
" i "
], 
["i", 41, 0]);

Block.defineBlock(251,"Diamond Block 2x1","diamond_block",0);
Block.setShape(251,0,0,0,1,2,1);
Player.addItemCreativeInv(251,1,0);
Item.addShapedRecipe(251, 1, 0, [
"   ",
" i ",
" i "
], 
["i", 57, 0]);

Block.defineBlock(252,"Coal Block 2x1","coal_block",0);
Block.setShape(252,0,0,0,1,2,1);
Player.addItemCreativeInv(252,1,0);
Item.addShapedRecipe(252, 1, 0, [
"   ",
" i ",
" i "
], 
["i", 173, 0]);

Block.defineBlock(253,"Lapis Block 2x1","lapis_block",0);
Block.setShape(253,0,0,0,1,2,1);
Player.addItemCreativeInv(253,1,0);
Item.addShapedRecipe(253, 1, 0, [
"   ",
" i ",
" i "
], 
["i", 22, 0]);

Block.defineBlock(254,"Emerald Block 2x1","emerald_block",0);
Block.setShape(254,0,0,0,1,2,1);
Player.addItemCreativeInv(254,1,0);
Item.addShapedRecipe(254, 1, 0, [
"   ",
" i ",
" i "
], 
["i", 133, 0]);

Block.defineBlock(122,"Polished Andesite 2x1",[["stone",6]],0);
Block.setShape(122,0,0,0,1,2,1);
Player.addItemCreativeInv(122,1,0);
Item.addShapedRecipe(122, 1, 0, [
"   ",
" i ",
" i "
], 
["i", 1, 6]);

Block.defineBlock(123,"Polished Diorite 2x1",[["stone",4]],0);
Block.setShape(123,0,0,0,1,2,1);
Player.addItemCreativeInv(123,1,0);
Item.addShapedRecipe(123, 1, 0, [
"   ",
" i ",
" i "
], 
["i", 1, 4]);

Block.defineBlock(124,"Polished Granite 2x1",[["stone",2]],0);
Block.setShape(124,0,0,0,1,2,1);
Player.addItemCreativeInv(124,1,0);
Item.addShapedRecipe(124, 1, 0, [
"   ",
" i ",
" i "
], 
["i", 1, 2]);

Block.defineBlock(143,"Iron Slab","iron_block",0);
Block.setShape(143,0,0,0,1,0.5,1);
Player.addItemCreativeInv(143,1,0);
Item.addShapedRecipe(143, 6, 0, [
"   ",
"iii",
"   "
], 
["i", 42, 0]);

Block.defineBlock(144,"Gold Slab","gold_block",0);
Block.setShape(144,0,0,0,1,0.5,1);
Player.addItemCreativeInv(144,1,0);
Item.addShapedRecipe(144, 6, 0, [
"   ",
"iii",
"   "
], 
["i", 41, 0]);

Block.defineBlock(145,"Diamond Slab","diamond_block",0);
Block.setShape(145,0,0,0,1,0.5,1);
Player.addItemCreativeInv(145,1,0);
Item.addShapedRecipe(145, 6, 0, [
"   ",
"iii",
"   "
], 
["i", 57, 0]);

Block.defineBlock(146,"Coal Slab","coal_block",0);
Block.setShape(146,0,0,0,1,0.5,1);
Player.addItemCreativeInv(146,1,0);
Item.addShapedRecipe(146, 6, 0, [
"   ",
"iii",
"   "
], 
["i", 173, 0]);

Block.defineBlock(147,"Lapis Slab","lapis_block",0);
Block.setShape(147,0,0,0,1,0.5,1);
Player.addItemCreativeInv(147,1,0);
Item.addShapedRecipe(147, 6, 0, [
"   ",
"iii",
"   "
], 
["i", 22, 0]);

Block.defineBlock(148,"Emerald Slab","emerald_block",0);
Block.setShape(148,0,0,0,1,0.5,1);
Player.addItemCreativeInv(148,1,0);
Item.addShapedRecipe(148, 6, 0, [
"   ",
"iii",
"   "
], 
["i", 133, 0]);

Block.defineBlock(149,"Polished Andesite Slab",[["stone",6]]);
Block.setShape(149,0,0,0,1,0.5,1);
Player.addItemCreativeInv(149,1,0);
Item.addShapedRecipe(149, 6, 0, [
"   ",
"iii",
"   "
], 
["i", 1, 6]);

Block.defineBlock(150,"Polished Diorite Slab",[["stone",4]]);
Block.setShape(150,0,0,0,1,0.5,1);
Player.addItemCreativeInv(150,1,0);
Item.addShapedRecipe(150, 6, 0, [
"   ",
"iii",
"   "
], 
["i", 1, 4]);

Block.defineBlock(151,"Polished Granite Slab",[["stone",2]]);
Block.setShape(151,0,0,0,1,0.5,1);
Player.addItemCreativeInv(151,1,0);
Item.addShapedRecipe(151, 6, 0, [
"   ",
"iii",
"   "
], 
["i", 1, 2]);

function newLevel() {
    clientMessage(ChatColor.GREEN+"AgameR MoreThanBlocks PE"+ChatColor.RED+" 0.4 BETA "+ChatColor.WHITE+"by peacestorm initialized");
};

function procCmd(cmd) {
    cmd = cmd.toLowerCase();
    if (cmd == "changelog morethanblockspe"){
        clientMessage("AgameR MoreThanBlocks PE Changelog - 0.1 BETA: Initial release | 0.2 BETA: Added Iron, Gold, Diamond, Coal, Lapis and Emerald Slabs | 0.3 BETA: Added 2x1 blocks and slabs for Diorite, Andesite and Granite | 0.4 BETA: Added crafting recipes");
}};

//*Copyright & Permissions*
//-------------
//You may:
//Edit this mod for personal use
//Create a review of this mod, as long as you give me credits and you put the link of this mod in the description
//
//You may NOT:
//Distribute this mod without permission of peacestorm
//Claim that this mod is yours
//Include this mod in your modpack without permission of peacestorm
//Use code of this mod in your own mod without permission of peacestorm
//Monetize this mod by using AdFly or any other monetizing method
//
//For things that aren't listed here, always ask me


//*Credits*
//-----------
//Creator: peacestorm

//*Mod info*
//------------
//Mod version: 0.4 BETA
//For full changelog, do /changelog morethanblockspe


//*Ideas*
//---------
//If you have any ideas for this mod, please send them to my MC-Forum account, or on Twitter: @AgameR_Modder
