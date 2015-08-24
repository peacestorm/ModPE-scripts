ModPE.overrideTexture("images/mob/ghost.png","http://www.minecraftskins.com/newuploaded_skins/skin_2014071400103165344.png");
ModPE.overrideTexture("images/mob/blue_creeper.png","http://i.imgur.com/UlqC7m5.jpg");
ModPE.overrideTexture("images/mob/wolfgirl.png","http://www.minecraftskins.com/newuploaded_skins/skin_2014061510555588986.png");
ModPE.overrideTexture("images/mob/brown_chicken.png","http://i.imgur.com/0zTsjOu.jpg");
ModPE.overrideTexture("images/mob/ender_spider.png","http://i.imgur.com/vQCwwgs.png");
ModPE.overrideTexture("images/mob/ender_cow.png","http://i.imgur.com/0Lrbs3L.png");
ModPE.overrideTexture("images/mob/pirate.png","http://www.minecraftskins.com/newuploaded_skins/skin_2014072410443157496.png");
ModPE.overrideTexture("images/mob/chest_mimic.png","http://i.imgur.com/BTcKiRQ.png");

ModPE.setItem(500,"spawn_egg",7,"Spawn Ghost");
ModPE.setItem(501,"spawn_egg",6,"Spawn Wolf Girl");
ModPE.setItem(502,"spawn_egg",6,"Spawn Blue Creeper");
ModPE.setItem(503,"spawn_egg",0,"Spawn Brown Chicken");
ModPE.setItem(504,"spawn_egg",11,"Spawn Ender Spider");
ModPE.setItem(505,"spawn_egg",6,"Spawn Ender Cow");
ModPE.setItem(506,"spawn_egg",6,"Spawn Pirate");
ModPE.setItem(407,"spawn_egg",7,"Spawn Mimic");
ModPE.setFoodItem(434,"experience_bottle",0,0,"Experience Bottle");
ModPE.setFoodItem(435,"potion_bottle_drinkable",0,20,"Healing Potion");
ModPE.setFoodItem(436,"potion_bottle_empty",0,0,"Potion of Death");

//Spawn Eggs in creative!
ModPE.initCreativeItems = function() {
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
}

var GUI;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

const CURRENT_VERSION = "2.3";
var latestVersion;
var latestPocketEditionVersion;

var currentActivity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var sdcard = android.os.Environment.getExternalStorageDirectory();

var initialized = false;

function newLevel() {
/*   ctx.runOnUiThread(new java.lang.Runnable(){
   
   
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
		   GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP | android.view.Gravity.LEFT, 0, 0);
		   
		   btn.setText("[?]");
		   btn.setOnClickListener(new android.view.View.OnClickListener(){
		   
		                          onClick: function(p1){
								  
		     var builder = new android.app.AlertDialog.Builder(ctx);
     builder.setTitle("Info");
			 builder.setMessage("You're using a beta build of AgameR Paint Mod PE. Please report bugs.");
			 builder.setNegativeButton("Ok", new android.content.DialogInterface.OnClickListener(){
			 
			                            onClick: function(p1, p2){
										
				p1.cancel();				
										
										
			}							
			 
		    });
builder.setPositiveButton("Report bugs", new android.content.DialogInterface.OnClickListener(){
			 
			                            onClick: function(p1, p2){
										
				p1.cancel();				
     Web("http://twitter.com/AgameR_Modder");
										
										
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
                     });*/
	ModPE.initCreativeItems();
    if (initialized == false) {
        initialized = true;
        clientMessage(ChatColor.LIGHT_PURPLE + "[AgameR MoreThanMobs PE]" + ChatColor.WHITE + " Initialized");
    }
    new java.lang.Thread(new java.lang.Runnable() {
        run: function() {
            getLatestVersion();
            if (latestVersion != CURRENT_VERSION && latestVersion != undefined) {
                clientMessage(ChatColor.LIGHT_PURPLE + "[AgameR MoreThanMobs PE]" + ChatColor.WHITE + " There is a new version available (v" + latestVersion + " for Minecraft Pocket Edition v" + latestPocketEditionVersion + ")!");
            } else {
                currentActivity.runOnUiThread(new java.lang.Runnable() {
                    run: function() {
                        android.widget.Toast.makeText(currentActivity, new android.text.Html.fromHtml("<b>AgameR MoreThanMobs PE</b> You have the latest version"), 0).show();
                    }
                });
            }
        }
    }).start();
};

function getLatestVersion() {
    try {
        // download content
        var url = new java.net.URL("https://raw.githubusercontent.com/peacestorm/ModPE-scripts/master/version/agamer-morethanmobspe-version");
        var connection = url.openConnection();

        // get content
        inputStream = connection.getInputStream();

        // read result
        var loadedVersion = "";
        var bufferedVersionReader = new java.io.BufferedReader(new java.io.InputStreamReader(inputStream));
        var rowVersion = "";
        while ((rowVersion = bufferedVersionReader.readLine()) != null) {
            loadedVersion += rowVersion;
        }
        latestVersion = loadedVersion.split(" ")[0];
        latestPocketEditionVersion = loadedVersion.split(" ")[1];

        // close what needs to be closed
        bufferedVersionReader.close();

        // test
        //clientMessage(CURRENT_VERSION + " " + latestVersion);
    } catch (err) {
        clientMessage(ChatColor.LIGHT_PURPLE + "[AgameR MoreThanMobs PE]" + ChatColor.WHITE + " Can't check for updates, please check your Internet connection.");
        ModPE.log("[AgameR MoreThanMobs PE] getLatestVersion() caught an error: " + err);
    }
}

var nowAmount, nowId, nowData, lastAmount, lastId, lastData, lastBlock, nowSlotId, lastSlotId;
 
//add food item id's here 
var foodItems = [260,282,297,319,320,349,350,357,360,363,364,365,366,367,391,392,393,400,434,435,436];
 
//add inventory blocks here - or farming...
var invBlocks = [54,58,60,61,62];
 
var tick = 0;
 
function modTick(){
	//ModPE.showTipMessage("AgameR MoreThanMobs PE 2.3 Build X");
    //DO NOT EDIT BELOW UNLESS YOU KNOW WHAT YOU ARE DOING
    lastBlock = Player.getPointedBlockId();
    nowId = Player.getCarriedItem();
    nowData = Player.getCarriedItemData();
    nowAmount = Player.getCarriedItemCount();
    nowSlotId = Player.getSelectedSlotId();
    if(foodItems.indexOf(nowId)>=0){ //if the carried item is in foodItems array
        tick++; //add to tick
        if(tick==10){ //if tick is 20
            tick=0; //set tick back to 0
            if(nowId==lastId){ //if the lastId & nowId match
                if(nowData==lastData){ //if the lastData & nowData match
                    if((lastAmount-1)==nowAmount){ //if the lastAmount is 1 more than nowAmount
                        if(invBlocks.indexOf(lastBlock)==-1){ //if the last block tapped was not an inv block
                            eatHook(lastId); //call eatHook
                        }
                    }
                }
            }
            lastId = Player.getCarriedItem();
            lastData = Player.getCarriedItemData();
            lastAmount = Player.getCarriedItemCount();
            lastSlotId = Player.getSelectedSlotId();
        }
    }
    //trying to fix the single item bug...
    if(nowId==0){ //if the player is now holding air
        if(foodItems.indexOf(lastId)>=0){ //if the last item is in foodItems array
            if(lastAmount==1){ //if the last amount is 1
                if(nowSlotId==lastSlotId){
                    if(invBlocks.indexOf(lastBlock)==-1){ //if the last block tapped wasn't an inv block
                        eatHook(lastId); //call eatHook
                        lastId=0; //set last item to 0
                    }
                }
            }
        }
    }
    if(foodItems.indexOf(nowId)==-1){ //if the held item is not in the foodItems array
        if(nowId!==0){ //if item is not 0
            lastId=0; //set last item to 0
        }
    }
    //DO NOT EDIT ABOVE THIS UNLESS YOU KNOW WHAT YOU ARE DOING
}
 
function eatHook(foodId){ //when the player eats an item
    if(foodId==434){ //if you eat an apple
        //clientMessage("Debug message: [WORKS]"); //does this.
		setVelY(Player.getEntity(),5);
    }if(foodId==435){ //if you eat an apple
        //clientMessage("Debug message: [WORKS]"); //does this.
		Player.setHealth(20);
    }if(foodId==436){ //if you eat an apple
        //clientMessage("Debug message: [WORKS]"); //does this.
		Player.setHealth(0);
    }
}

function procCmd(cmd) {
    cmd = cmd.toLowerCase();
    if (cmd == "changelog morethanmobspe"){
        clientMessage("AgameR MoreThanMobs PE Changelog - 1.0: Initial release | 1.1: Added the Ender Spider | 2.0: Added Ender Cow, Pirate, a healing potion, a potion of death and a experience bottle, name of the mod changed to AgameR MoreThanMobs | 2.1: Added /summon command and /disguise command | 2.2: Added Mimic mob; Improved spawn eggs; Better Ender Cow skin; Experience bottle now works; Some improvements | 2.3: Updated for 0.11.x; Added an update checker (thanks @Desno365!); Overall improvements");
    }else if (cmd == "summon ghost"){
        var ghost = Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 34, "mob/ghost.png");
	Entity.setRenderType(ghost,EntityRenderType.human);
	Entity.setCarriedItem(ghost,434,1,0);
	}else if (cmd == "summon wolfgirl"){
        var wolfgirl = Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 33, "mob/wolfgirl.png");
	Entity.setRenderType(wolfgirl,EntityRenderType.human);
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
	Entity.setRenderType(pirate,EntityRenderType.human);
	}else if (cmd == "summon mimic"){
        var mimic = Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 37, "mob/chest_mimic.png");
	}else if (cmd == "disguise ghost"){
        Entity.setMobSkin(Player.getEntity(), "mob/ghost.png");
	Entity.setRenderType(Player.getEntity(), EntityRenderType.human);
	}else if (cmd == "disguise wolfgirl"){
        Entity.setMobSkin(Player.getEntity(), "mob/wolfgirl.png");
	Entity.setRenderType(Player.getEntity(), EntityRenderType.human);
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
	Entity.setRenderType(Player.getEntity(), EntityRenderType.human);
	}else if (cmd == "disguise mimic"){
        Entity.setMobSkin(Player.getEntity(), "mob/chest_mimic.png");
	Entity.setRenderType(Player.getEntity(), EntityRenderType.slime);
    }
};

function useItem(x, y, z, itemId, blockId, side){
var gamemode = Level.getGameMode();
if(itemId == 500){var ghost = Level.spawnMob(x,y+1,z,34,"mob/ghost.png");
Entity.setRenderType(ghost,EntityRenderType.human);
Entity.setCarriedItem(ghost,434,1,0);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 500, Player.getCarriedItemCount() - 1);
}}else if(itemId == 501){var wolfgirl = Level.spawnMob(x,y+1,z,33,"mob/wolfgirl.png");
Entity.setRenderType(wolfgirl,EntityRenderType.human);
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
Entity.setRenderType(pirate,EntityRenderType.human);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 506, Player.getCarriedItemCount() - 1);
}}else if(itemId == 407){var mimic = Level.spawnMob(x,y+1,z,37,"mob/chest_mimic.png");
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 407, Player.getCarriedItemCount() - 1);
}}else if(itemId == 434){
if(gamemode == 1){
var experiencebottle = setVelY(Player.getEntity(),5);
}}else if(itemId == 435){
if(gamemode == 1){
var healingpotion = Player.setHealth(20);
}}else if(itemId == 436){
if(gamemode == 1){
var potionofdeath = Player.setHealth(0);
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
//Mod version: 2.3
//For full changelog, do /changelog morethanmobspe

//*Todo-list*
//-------------
//More items (maybe in 3.0)
//More Mobs with custom rendertypes
//Custom sounds? (far far future)

//*Ideas*
//---------
//If you have any ideas for this mod, please send them to my MC-Forum account, or on Twitter: @AgameR_Modder