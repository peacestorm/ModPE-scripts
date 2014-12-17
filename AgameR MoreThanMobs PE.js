ModPE.overrideTexture("images/mob/ghost.png","http://www.minecraftskins.com/newuploaded_skins/skin_2014071400103165344.png");
ModPE.overrideTexture("images/mob/blue_creeper.png","http://i.imgur.com/UlqC7m5.jpg");
ModPE.overrideTexture("images/mob/wolfgirl.png","http://www.minecraftskins.com/newuploaded_skins/skin_2014061510555588986.png");
ModPE.overrideTexture("images/mob/brown_chicken.png","http://i.imgur.com/0zTsjOu.jpg");
ModPE.overrideTexture("images/mob/ender_spider.png","http://i.imgur.com/vQCwwgs.png");
ModPE.overrideTexture("images/mob/ender_cow.png","http://i.imgur.com/0Lrbs3L.png");
ModPE.overrideTexture("images/mob/pirate.png","http://www.minecraftskins.com/newuploaded_skins/skin_2014072410443157496.png");
ModPE.overrideTexture("images/mob/mimic.png","http://i.imgur.com/BTcKiRQ.png");

ModPE.setItem(500,"spawn_egg",7,"Spawn Ghost");
ModPE.setItem(501,"spawn_egg",6,"Spawn Wolf Girl");
ModPE.setItem(502,"spawn_egg",6,"Spawn Blue Creeper");
ModPE.setItem(503,"spawn_egg",0,"Spawn Brown Chicken");
ModPE.setItem(504,"spawn_egg",11,"Spawn Ender Spider");
ModPE.setItem(505,"spawn_egg",6,"Spawn Ender Cow");
ModPE.setItem(506,"spawn_egg",6,"Spawn Pirate");
ModPE.setItem(407,"spawn_egg",7,"Spawn Mimic");
ModPE.setItem(434,"experience_bottle",0,"Experience Bottle");
ModPE.setFoodItem(435,"potion_bottle_drinkable",0,20,"Healing Potion");
ModPE.setFoodItem(436,"potion_bottle_empty",0,0,"Potion of Death");

//Spawn Eggs in creative!
Player.addItemCreativeInv(500,1,0);
Player.addItemCreativeInv(501,1,0);
Player.addItemCreativeInv(502,1,0);
Player.addItemCreativeInv(503,1,0);
Player.addItemCreativeInv(504,1,0);
Player.addItemCreativeInv(505,1,0);
Player.addItemCreativeInv(506,1,0);
Player.addItemCreativeInv(407,1,0);
Player.addItemCreativeInv(434,1,0);
Player.addItemCreativeInv(435,1,0);
Player.addItemCreativeInv(436,1,0);

var GUI;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

function newLevel() {
   ctx.runOnUiThread(new java.lang.Runnable(){
   
   
                     run: function(){
		
        try{
		
		   GUI = new android.widget.PopupWindow();
		   var layout = new android.widget.LinearLayout(ctx);
		   var btn = new android.widget.Button(ctx);
		   
		   layout.setOrientation(android.widget.LinearLayout.VERTICAL);
		   layout.addView(btn);
		   
		   
		   GUI.setContentView(layout);
		   GUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
		   GUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
		   GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.LEFT, 0, 0);
		   
		   btn.setText("[?]");
		   btn.setOnClickListener(new android.view.View.OnClickListener(){
		   
		                          onClick: function(p1){
								  
		     var builder = new android.app.AlertDialog.Builder(ctx);
			 builder.setMessage("You're using a beta build of AgameR MoreThanMobs PE. Please report bugs.");
			 builder.setNegativeButton("Ok", new android.content.DialogInterface.OnClickListener(){
			 
			                            onClick: function(p1, p2){
										
				p1.cancel();				
										
										
			}							
			 
		    });
										
		var dialog = builder.create();
		dialog.show();
			
			}
								  
				                  });
		
		}
		catch(err){
		
		   print("Error: " + err)
		
		}
}
                     });

    clientMessage(ChatColor.GREEN+"AgameR MoreThanMobs PE"+ChatColor.RED+" 2.2 (Build 2) "+ChatColor.WHITE+"by peacestorm initialized");
};

function modTick() {
ModPE.showTipMessage("AgameR MoreThanMobs PE 2.2 Build 2");
};

function procCmd(cmd) {
    cmd = cmd.toLowerCase();
    if (cmd == "changelog morethanmobspe"){
        clientMessage("AgameR MoreThanMobs PE Changelog - 1.0: Initial release | 1.1: Added the Ender Spider | 2.0: Added Ender Cow, Pirate, a healing potion, a potion of death and a experience bottle, name of the mod changed to AgameR MoreThanMobs | 2.1: Added /summon command and /disguise command | 2.2: Added Mimic mob; Improved spawn eggs; Better Ender Cow skin; Experience bottle now works");
    }else if (cmd == "summon ghost"){
        var ghost = Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 32, "mob/ghost.png");
		Entity.setRenderType(ghost,EntityRenderType.player);
	}else if (cmd == "summon wolfgirl"){
        var wolfgirl = Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 33, "mob/wolfgirl.png");
		Entity.setRenderType(wolfgirl,EntityRenderType.player);
	}else if (cmd == "summon bluecreeper"){
        var bluecreeper = Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 33, "mob/blue_creeper.png");
	}else if (cmd == "summon brownchicken"){
        var brownchicken = Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 10, "mob/brown_chicken.png");
	}else if (cmd == "summon enderspider"){
        var enderspider = Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 35, "mob/ender_spider.png");
        }else if (cmd == "summon endercow"){
        var endercow = Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 11, "mob/ender_cow.png");
	}else if (cmd == "summon pirate"){
        var pirate = Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 32, "mob/pirate.png");
		Entity.setRenderType(pirate,EntityRenderType.player);
	}else if (cmd == "summon mimic"){
        var mimic = Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 37, "mob/mimic.png");
	}else if (cmd == "disguise ghost"){
        Entity.setMobSkin(Player.getEntity(), "mob/ghost.png");
		Entity.setRenderType(Player.getEntity(), EntityRenderType.player);
	}else if (cmd == "disguise wolfgirl"){
        Entity.setMobSkin(Player.getEntity(), "mob/wolfgirl.png");
		Entity.setRenderType(Player.getEntity(), EntityRenderType.player);
	}else if (cmd == "disguise bluecreeper"){
        Entity.setMobSkin(Player.getEntity(), "mob/blue_creeper.png");
		Entity.setRenderType(Player.getEntity(), EntityRenderType.creeper);
	}else if (cmd == "disguise brownchicken"){
        Entity.setMobSkin(Player.getEntity(), "mob/brown_chicken.png");
		Entity.setRenderType(Player.getEntity(), EntityRenderType.chicken);
	}else if (cmd == "disguise enderspider"){
        Entity.setMobSkin(Player.getEntity(), "mob/ender_spider.png");
		Entity.setRenderType(Player.getEntity(), EntityRenderType.spider);
	}else if (cmd == "disguise endercow"){
        Entity.setMobSkin(Player.getEntity(), "mob/ender_cow.png");
		Entity.setRenderType(Player.getEntity(), EntityRenderType.cow);
	}else if (cmd == "disguise pirate"){
        Entity.setMobSkin(Player.getEntity(), "mob/pirate.png");
		Entity.setRenderType(Player.getEntity(), EntityRenderType.player);
	}else if (cmd == "disguise mimic"){
        Entity.setMobSkin(Player.getEntity(), "mob/mimic.png");
		Entity.setRenderType(Player.getEntity(), EntityRenderType.slime);
    }
};

function useItem(x, y, z, itemId, blockId, side){
var gamemode = Level.getGameMode();
if(itemId == 500){var ghost = Level.spawnMob(x,y+1,z,32,"mob/ghost.png");
Entity.setRenderType(ghost,EntityRenderType.player);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 500, Player.getCarriedItemCount() - 1);
}}else if(itemId == 501){var wolfgirl = Level.spawnMob(x,y+1,z,33,"mob/wolfgirl.png");
Entity.setRenderType(wolfgirl,EntityRenderType.player);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 501, Player.getCarriedItemCount() - 1);
}}else if(itemId == 502){var bluecreeper = Level.spawnMob(x,y+1,z,33,"mob/blue_creeper.png");
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 502, Player.getCarriedItemCount() - 1);
}}else if(itemId == 503){var brownchicken = Level.spawnMob(x,y+1,z,10,"mob/brown_chicken.png");
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 503, Player.getCarriedItemCount() - 1);
}}else if(itemId == 504){var enderspider = Level.spawnMob(x,y+1,z,35,"mob/ender_spider.png");
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 504, Player.getCarriedItemCount() - 1);
}}else if(itemId == 505){var endercow = Level.spawnMob(x,y+1,z,11,"mob/ender_cow.png");
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 505, Player.getCarriedItemCount() - 1);
}}else if(itemId == 506){var pirate = Level.spawnMob(x,y+1,z,32,"mob/pirate.png");
Entity.setRenderType(pirate,EntityRenderType.player);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 506, Player.getCarriedItemCount() - 1);
}}else if(itemId == 407){var mimic = Level.spawnMob(x,y+1,z,37,"mob/mimic.png");
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 407, Player.getCarriedItemCount() - 1);
}}else if(itemId == 434){var experiencebottle = setVelY(Player.getEntity(),5);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 434, Player.getCarriedItemCount() - 1);
}}else if(itemId == 435){var healingpotion = Player.setHealth(20);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 435, Player.getCarriedItemCount() - 1);
}}else if(itemId == 436){var potionofdeath = Player.setHealth(0);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 436, Player.getCarriedItemCount() - 1);
}}};

/*function attackHook(attacker,victim){
if(Player.getCarriedItem() == itemId){
var render = Entity.getRenderType(victim);
clientMessage("Rendertype: "+render);
}}*/

function leaveGame(){
}

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
//Based on the PC-version of AgameR MoreMobs/MoreThanMobs

//*Mod info*
//------------
//Mod version: 2.2 (Build 2)
//For full changelog, do /changelog morethanmobspe

//*Todo-list*
//-------------
//More items (maybe in 3.0)
//More Mobs with custom rendertypes
//Custom sounds? (far far future)
//Built-in textures - No texturepack anymore

//*Ideas*
//---------
//If you have any ideas for this mod, please send them to my MC-Forum account, or on Twitter: @AgameR_Modder
