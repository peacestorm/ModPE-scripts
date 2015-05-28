ModPE.overrideTexture("images/mob/char_grass.png","http://i.imgur.com/zAjeODx.png");
ModPE.overrideTexture("images/mob/char_dirt.png","http://i.imgur.com/o0h68Yx.png");
ModPE.overrideTexture("images/mob/char_stone.png","http://i.imgur.com/bbvgn6X.png");
ModPE.overrideTexture("images/mob/char_sand.png","http://i.imgur.com/kQRdWkf.png");
ModPE.overrideTexture("images/mob/char_wood.png","http://i.imgur.com/UXDvSJx.png");
ModPE.overrideTexture("images/mob/char_woodenplanks.png","http://i.imgur.com/uTLc2GE.png");
ModPE.overrideTexture("images/mob/char_chest.png","http://i.imgur.com/COq01OY.png");
ModPE.overrideTexture("images/mob/char_glass.png","http://i.imgur.com/cX3atMD.png");
ModPE.overrideTexture("images/mob/char_cobblestone.png","http://i.imgur.com/ipsdv2g.png");
ModPE.overrideTexture("images/mob/char_bedrock.png","http://i.imgur.com/1IgjViJ.png");
ModPE.overrideTexture("images/mob/char_obsidian.png","http://i.imgur.com/Blh6h1c.png");
ModPE.overrideTexture("images/mob/char_cactus.png","http://i.imgur.com/hPN8Ut8.png");
ModPE.overrideTexture("images/mob/char_glowstone.png","http://i.imgur.com/z8OfJfQ.png");
ModPE.overrideTexture("images/mob/char_ice.png","http://i.imgur.com/MaLGuqs.png");
ModPE.overrideTexture("images/mob/char_netherrack.png","http://i.imgur.com/JuOeD46.png");
ModPE.overrideTexture("images/mob/char_snow.png","http://i.imgur.com/zrocHB3.png");
ModPE.overrideTexture("images/mob/char_sponge.png","http://i.imgur.com/Mob1g1k.png");
ModPE.overrideTexture("images/mob/char_gravel.png","http://i.imgur.com/XfRFdN1.png");
ModPE.overrideTexture("images/mob/char_bricks.png","http://i.imgur.com/l6GdVgG.png");
ModPE.overrideTexture("images/mob/char_mushroom.png","http://i.imgur.com/8O0zLG6.png");
ModPE.overrideTexture("images/mob/char_tnt.png","http://i.imgur.com/ctniXgJ.png");
ModPE.overrideTexture("images/mob/char_santahat.png","http://i.imgur.com/1QFmx8U.png");
ModPE.overrideTexture("images/mob/char_elfhat.png","http://i.imgur.com/wOBtf1F.png");
ModPE.overrideTexture("images/mob/char_villagerhat.png","http://i.imgur.com/lIOE3SP.png");
ModPE.overrideTexture("images/mob/char_creeperhat.png","http://i.imgur.com/zCHuSFL.png");
ModPE.overrideTexture("images/mob/char_pighat.png","http://i.imgur.com/cLySmoz.png");
ModPE.overrideTexture("images/mob/char_zombiehat.png","http://i.imgur.com/SLIW2io.png");
ModPE.overrideTexture("images/mob/char_herobrinehat.png","http://i.imgur.com/S0Mi8Di.png");
ModPE.overrideTexture("images/mob/char_3dglasses.png","http://i.imgur.com/QjCZFJu.png");
ModPE.overrideTexture("images/mob/char_froghat.png","http://i.imgur.com/p0b66lE.png");
ModPE.overrideTexture("images/mob/char_cap.png","http://i.imgur.com/IujDaE3.png");
ModPE.overrideTexture("images/mob/char_tophat.png","http://i.imgur.com/ahNdG9m.png");
ModPE.overrideTexture("images/mob/char_present.png","http://i.imgur.com/r1ndlvu.png");
ModPE.overrideTexture("images/mob/char_popcorn.png","http://i.imgur.com/xAxzHBt.png");
ModPE.overrideTexture("images/mob/char_nyancat.png","http://i.imgur.com/KtfJ4pz.png");

Entity.setHat = function(hat,entity){
if(hat==null){
if(entity==null){
Entity.setMobSkin(Player.getEntity(),"mob/char.png");
}else{
Entity.setMobSkin(entity,"mob/char.png");
}}else{
Entity.setMobSkin(entity,hat);
}
}

var GUI;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

var initialized = false;

function newLevel() {
   /*ctx.runOnUiThread(new java.lang.Runnable(){
   
   
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
			 builder.setMessage("You're using a beta build of AgameR Hats Mod PE. Please report bugs.");
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

    */if(initialized == false){
		clientMessage(ChatColor.GREEN+"AgameR Hats Mod PE"+ChatColor.RED+" 1.2.1 "+ChatColor.WHITE+"by peacestorm initialized");
		initialized = true;
	}else if(initialized == true){
		clientMessage(ChatColor.GREEN+"AgameR Hats Mod PE"+ChatColor.RED+" 1.2.1 "+ChatColor.WHITE+"by peacestorm");
	}
};

function modTick() {
//ModPE.showTipMessage("AgameR Hats Mod PE 1.2 Build 2"); <-- Beta builds
//ModPE.showTipMessage(Entity.getMobSkin(Player.getEntity())); <-- Current hat
};

function procCmd(cmd) {
    cmd = cmd.split(" ");
    if (cmd[0] == "changelog"){
	    if (cmd[1] == "hatsmodpe"){
        clientMessage("AgameR Hats Mod PE Changelog - 1.0: Initial release | 1.1: Added much more block hats; Improved some hats | 1.2 - The christmas update: Added more hats; Improved some hats | 1.2.1: Fixed some bugs; Some improvements");
	}}else if (cmd[0] == "hat"){
	if (cmd[1] == "set"){
	if (cmd[2] == "grass"){
        Entity.setHat("mob/char_" + cmd[2] + ".png",Player.getEntity());
    }else if (cmd[2] == "dirt"){
        Entity.setHat("mob/char_" + cmd[2] + ".png",Player.getEntity());
    }else if (cmd[2] == "stone"){
        Entity.setHat("mob/char_" + cmd[2] + ".png",Player.getEntity());
    }else if (cmd[2] == "sand"){
        Entity.setHat("mob/char_" + cmd[2] + ".png",Player.getEntity());
    }else if (cmd[2] == "wood"){
        Entity.setHat("mob/char_" + cmd[2] + ".png",Player.getEntity());
    }else if (cmd[2] == "woodenplanks"){
        Entity.setHat("mob/char_" + cmd[2] + ".png",Player.getEntity());
    }else if (cmd[2] == "chest"){
        Entity.setHat("mob/char_" + cmd[2] + ".png",Player.getEntity());
    }else if (cmd[2] == "glass"){
        Entity.setHat("mob/char_" + cmd[2] + ".png",Player.getEntity());
    }else if (cmd[2] == "cobblestone"){
        Entity.setHat("mob/char_" + cmd[2] + ".png",Player.getEntity());
    }else if (cmd[2] == "bedrock"){
        Entity.setHat("mob/char_" + cmd[2] + ".png",Player.getEntity());
    }else if (cmd[2] == "obsidian"){
        Entity.setHat("mob/char_" + cmd[2] + ".png",Player.getEntity());
    }else if (cmd[2] == "cactus"){
        Entity.setHat("mob/char_" + cmd[2] + ".png",Player.getEntity());
    }else if (cmd[2] == "glowstone"){
        Entity.setHat("mob/char_" + cmd[2] + ".png",Player.getEntity());
    }else if (cmd[2] == "ice"){
        Entity.setHat("mob/char_" + cmd[2] + ".png",Player.getEntity());
    }else if (cmd[2] == "netherrack"){
        Entity.setHat("mob/char_" + cmd[2] + ".png",Player.getEntity());
    }else if (cmd[2] == "snow"){
        Entity.setHat("mob/char_" + cmd[2] + ".png",Player.getEntity());
    }else if (cmd[2] == "sponge"){
        Entity.setHat("mob/char_" + cmd[2] + ".png",Player.getEntity());
    }else if (cmd[2] == "gravel"){
        Entity.setHat("mob/char_" + cmd[2] + ".png",Player.getEntity());
    }else if (cmd[2] == "bricks"){
        Entity.setHat("mob/char_" + cmd[2] + ".png",Player.getEntity());
    }else if (cmd[2] == "mushroom"){
        Entity.setHat("mob/char_" + cmd[2] + ".png",Player.getEntity());
    }else if (cmd[2] == "tnt"){
        Entity.setHat("mob/char_" + cmd[2] + ".png",Player.getEntity());
    }else if (cmd[2] == "santahat"){
        Entity.setHat("mob/char_" + cmd[2] + ".png",Player.getEntity());
    }else if (cmd[2] == "elfhat"){
        Entity.setHat("mob/char_" + cmd[2] + ".png",Player.getEntity());
    }else if (cmd[2] == "villagerhat"){
        Entity.setHat("mob/char_" + cmd[2] + ".png",Player.getEntity());
    }else if (cmd[2] == "creeperhat"){
        Entity.setHat("mob/char_" + cmd[2] + ".png",Player.getEntity());
    }else if (cmd[2] == "pighat"){
        Entity.setHat("mob/char_" + cmd[2] + ".png",Player.getEntity());
    }else if (cmd[2] == "zombiehat"){
        Entity.setHat("mob/char_" + cmd[2] + ".png",Player.getEntity());
	}else if (cmd[2] == "herobrinehat"){
        Entity.setHat("mob/char_" + cmd[2] + ".png",Player.getEntity());
    }else if (cmd[2] == "3dglasses"){
        Entity.setHat("mob/char_" + cmd[2] + ".png",Player.getEntity());
    }else if (cmd[2] == "froghat"){
        Entity.setHat("mob/char_" + cmd[2] + ".png",Player.getEntity());
    }else if (cmd[2] == "cap"){
        Entity.setHat("mob/char_" + cmd[2] + ".png",Player.getEntity());
    }else if (cmd[2] == "tophat"){
        Entity.setHat("mob/char_" + cmd[2] + ".png",Player.getEntity());
    }else if (cmd[2] == "present"){
        Entity.setHat("mob/char_" + cmd[2] + ".png",Player.getEntity());
    }else if (cmd[2] == "popcorn"){
        Entity.setHat("mob/char_" + cmd[2] + ".png",Player.getEntity());
    }else if (cmd[2] == "nyancat"){
        Entity.setHat("mob/char_" + cmd[2] + ".png",Player.getEntity());
    }}else if (cmd[1] == "reset"){
        Entity.setHat("mob/char.png",Player.getEntity());
	}else if (cmd[1] == "types"){
        clientMessage("grass, dirt, stone, sand, wood, woodenplanks, chest, glass, cobblestone, bedrock, obsidian, cactus, glowstone, ice, netherrack, snow, sponge, gravel, bricks, mushroom, tnt, santahat, elfhat, villagerhat, creeperhat, pighat, zombiehat, herobrinehat, 3dglasses, froghat, cap, tophat, present, popcorn, nyancat");
}}};

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
//Mod version: 1.2.1
//For full changelog, do /changelog hatsmodpe


//*Ideas*
//---------
//If you have any ideas for this mod, please send them to my MC-Forum account, or on Twitter: @AgameR_Modder
