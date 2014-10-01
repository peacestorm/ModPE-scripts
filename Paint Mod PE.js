ModPE.setItem(394,"repeater",0,"White Paint Brush");
ModPE.setItem(510,"iron_horse_armor",0,"Orange Paint Brush");
ModPE.setItem(511,"gold_horse_armor",0,"Magenta Paint Brush");
ModPE.setItem(509,"minecart_furnace",0,"Light Blue Paint Brush");
ModPE.setItem(508,"minecart_hopper",0,"Yellow Paint Brush");
ModPE.setItem(507,"minecart_chest",0,"Lime Green Paint Brush");
ModPE.setItem(401,"brewing_stand",0,"Pink Paint Brush");
ModPE.setItem(402,"book_writable",0,"Gray Paint Brush");
ModPE.setItem(403,"book_enchanted",0,"Light Gray Paint Brush");
ModPE.setItem(395,"diamond_horse_armor",0,"Cyan Paint Brush");
ModPE.setItem(396,"fishing_rod_cast",0,"Purple Paint Brush");
ModPE.setItem(397,"minecart_tnt",0,"Blue Paint Brush");
ModPE.setItem(410,"hopper",0,"Brown Paint Brush");
ModPE.setItem(399,"fishing_rod_uncast",0,"Green Paint Brush");
ModPE.setItem(322,"book_written",0,"Red Paint Brush");
ModPE.setItem(326,"comparator",0,"Black Paint Brush");

Player.addItemCreativeInv(394,1,0);
Player.addItemCreativeInv(510,1,0);
Player.addItemCreativeInv(511,1,0);
Player.addItemCreativeInv(509,1,0);
Player.addItemCreativeInv(508,1,0);
Player.addItemCreativeInv(507,1,0);
Player.addItemCreativeInv(401,1,0);
Player.addItemCreativeInv(402,1,0);
Player.addItemCreativeInv(403,1,0);
Player.addItemCreativeInv(395,1,0);
Player.addItemCreativeInv(396,1,0);
Player.addItemCreativeInv(397,1,0);
Player.addItemCreativeInv(410,1,0);
Player.addItemCreativeInv(399,1,0);
Player.addItemCreativeInv(322,1,0);
Player.addItemCreativeInv(326,1,0);

Item.addShapedRecipe(394, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 15, "t", 280, 0]); 

Item.addShapedRecipe(510, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 14, "t", 280, 0]); 

Item.addShapedRecipe(511, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 13, "t", 280, 0]); 

Item.addShapedRecipe(509, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 12, "t", 280, 0]); 

Item.addShapedRecipe(508, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 11, "t", 280, 0]); 

Item.addShapedRecipe(507, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 10, "t", 280, 0]); 

Item.addShapedRecipe(401, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 9, "t", 280, 0]); 

Item.addShapedRecipe(402, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 8, "t", 280, 0]); 

Item.addShapedRecipe(403, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 7, "t", 280, 0]); 

Item.addShapedRecipe(395, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 6, "t", 280, 0]); 

Item.addShapedRecipe(396, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 5, "t", 280, 0]); 

Item.addShapedRecipe(397, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 4, "t", 280, 0]); 

Item.addShapedRecipe(410, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 3, "t", 280, 0]); 

Item.addShapedRecipe(399, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 2, "t", 280, 0]); 

Item.addShapedRecipe(322, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 1, "t", 280, 0]); 

Item.addShapedRecipe(326, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 0, "t", 280, 0]); 

function newLevel() {
    clientMessage(ChatColor.GREEN+"AgameR Paint Mod PE"+ChatColor.RED+" 1.2 "+ChatColor.WHITE+"by peacestorm initialized");
};

function procCmd(cmd) {
    cmd = cmd.toLowerCase();
    if (cmd == "changelog paintmodpe"){
        clientMessage("AgameR Paint Mod PE Changelog - 1.0: Initial release | 1.1: Added crafting recipes | 1.2: Paint any block you want, fixed item id conflict with the TooManyItems addon, added a new crafting recipe for the white paint brush");
    }
};

function useItem(x,y,z,i,b) {
var block = getTile(x,y,z)
if(i == 394) {
if(block == 35) {
Level.setTile(x,y,z,35,0);
}else {
Level.setTile(x,y,z,159,0)
}}else if(i == 510) {
if(block == 35) {
Level.setTile(x,y,z,35,1);
}else {
Level.setTile(x,y,z,159,1)
}}else if(i == 511) {
if(block == 35) {
Level.setTile(x,y,z,35,2);
}else {
Level.setTile(x,y,z,159,2)
}}else if(i == 509) {
if(block == 35) {
Level.setTile(x,y,z,35,3);
}else {
Level.setTile(x,y,z,159,3)
}}else if(i == 508) {
if(block == 35) {
Level.setTile(x,y,z,35,4);
}else {
Level.setTile(x,y,z,159,4)
}}else if(i == 507) {
if(block == 35) {
Level.setTile(x,y,z,35,5);
}else {
Level.setTile(x,y,z,159,5)
}}else if(i == 401) {
if(block == 35) {
Level.setTile(x,y,z,35,6);
}else {
Level.setTile(x,y,z,159,6)
}}else if(i == 402) {
if(block == 35) {
Level.setTile(x,y,z,35,7);
}else {
Level.setTile(x,y,z,159,7)
}}else if(i == 403) {
if(block == 35) {
Level.setTile(x,y,z,35,8);
}else {
Level.setTile(x,y,z,159,8)
}}else if(i == 395) {
if(block == 35) {
Level.setTile(x,y,z,35,9);
}else {
Level.setTile(x,y,z,159,9)
}}else if(i == 396) {
if(block == 35) {
Level.setTile(x,y,z,35,10);
}else {
Level.setTile(x,y,z,159,10)
}}else if(i == 397) {
if(block == 35) {
Level.setTile(x,y,z,35,11);
}else {
Level.setTile(x,y,z,159,11)
}}else if(i == 410) {
if(block == 35) {
Level.setTile(x,y,z,35,12);
}else {
Level.setTile(x,y,z,159,12)
}}else if(i == 399) {
if(block == 35) {
Level.setTile(x,y,z,35,13);
}else {
Level.setTile(x,y,z,159,13)
}}else if(i == 322) {
if(block == 35) {
Level.setTile(x,y,z,35,14);
}else {
Level.setTile(x,y,z,159,14)
}}else if(i == 326) {
if(block == 35) {
Level.setTile(x,y,z,35,15);
}else {
Level.setTile(x,y,z,159,15)
}}};

//*Copyright*
//-------------
//You may:
//Edit this mod for personal use
//Create a review of this mod
//
//You may NOT:
//Distribute this mod without permission of peacestorm
//Claim that this mod is yours
//Include this mod in your modpack without permission
//Use code of this mod in your own mod without permission
//Monetize this mod by using AdFly or any other monetizing method

//*Credits*
//-----------
//Creator: peacestorm

//*Mod info*
//------------
//Mod version: 1.2
//For full changelog, do /changelog paintmodpe

//*Ideas*
//---------
//If you have any ideas for this mod, please send them to my MC-Forum account, or on Twitter: @AgameR_Modder
