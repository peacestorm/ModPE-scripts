ModPE.overrideTexture("images/mob/char_grass.png","http://i.imgur.com/zAjeODx.png");
ModPE.overrideTexture("images/mob/char_dirt.png","http://i.imgur.com/o0h68Yx.png");
ModPE.overrideTexture("images/mob/char_stone.png","http://i.imgur.com/bbvgn6X.png");
ModPE.overrideTexture("images/mob/char_sand.png","http://i.imgur.com/kQRdWkf.png");
ModPE.overrideTexture("images/mob/char_wood.png","http://i.imgur.com/UXDvSJx.png");
ModPE.overrideTexture("images/mob/char_woodenplanks.png","http://i.imgur.com/uTLc2GE.png");
ModPE.overrideTexture("images/mob/char_chest.png","http://i.imgur.com/COq01OY.png");
ModPE.overrideTexture("images/mob/char_glass.png","http://i.imgur.com/cMgjgLm.png");
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

var GUI;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

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

    */clientMessage(ChatColor.GREEN+"AgameR Hats Mod PE"+ChatColor.RED+" 1.2 "+ChatColor.WHITE+"by peacestorm initialized");
};

function modTick() {
//ModPE.showTipMessage("AgameR Hats Mod PE 1.2 Build 2");
};

function procCmd(cmd) {
    cmd = cmd.toLowerCase();
    if (cmd == "changelog hatsmodpe"){
        clientMessage("AgameR Hats Mod PE Changelog - 1.0: Initial release | 1.1: Added much more block hats; Improved some hats | 1.2 - The christmas update: Added more hats; Improved some hats");
    }else if (cmd == "hat set grass"){
        Entity.setMobSkin(Player.getEntity(),"mob/char_grass.png");
    }else if (cmd == "hat set dirt"){
        Entity.setMobSkin(Player.getEntity(),"mob/char_dirt.png");
    }else if (cmd == "hat set stone"){
        Entity.setMobSkin(Player.getEntity(),"mob/char_stone.png");
    }else if (cmd == "hat set sand"){
        Entity.setMobSkin(Player.getEntity(),"mob/char_sand.png");
    }else if (cmd == "hat set wood"){
        Entity.setMobSkin(Player.getEntity(),"mob/char_wood.png");
    }else if (cmd == "hat set woodenplanks"){
        Entity.setMobSkin(Player.getEntity(),"mob/char_woodenplanks.png");
    }else if (cmd == "hat set chest"){
        Entity.setMobSkin(Player.getEntity(),"mob/char_chest.png");
    }else if (cmd == "hat set glass"){
        Entity.setMobSkin(Player.getEntity(),"mob/char_glass.png");
    }else if (cmd == "hat set cobblestone"){
        Entity.setMobSkin(Player.getEntity(),"mob/char_cobblestone.png");
    }else if (cmd == "hat set bedrock"){
        Entity.setMobSkin(Player.getEntity(),"mob/char_bedrock.png");
    }else if (cmd == "hat set obsidian"){
        Entity.setMobSkin(Player.getEntity(),"mob/char_obsidian.png");
    }else if (cmd == "hat set cactus"){
        Entity.setMobSkin(Player.getEntity(),"mob/char_cactus.png");
    }else if (cmd == "hat set glowstone"){
        Entity.setMobSkin(Player.getEntity(),"mob/char_glowstone.png");
    }else if (cmd == "hat set ice"){
        Entity.setMobSkin(Player.getEntity(),"mob/char_ice.png");
    }else if (cmd == "hat set netherrack"){
        Entity.setMobSkin(Player.getEntity(),"mob/char_netherrack.png");
    }else if (cmd == "hat set snow"){
        Entity.setMobSkin(Player.getEntity(),"mob/char_snow.png");
    }else if (cmd == "hat set sponge"){
        Entity.setMobSkin(Player.getEntity(),"mob/char_sponge.png");
    }else if (cmd == "hat set gravel"){
        Entity.setMobSkin(Player.getEntity(),"mob/char_gravel.png");
    }else if (cmd == "hat set bricks"){
        Entity.setMobSkin(Player.getEntity(),"mob/char_bricks.png");
    }else if (cmd == "hat set mushroom"){
        Entity.setMobSkin(Player.getEntity(),"mob/char_mushroom.png");
    }else if (cmd == "hat set tnt"){
        Entity.setMobSkin(Player.getEntity(),"mob/char_tnt.png");
    }else if (cmd == "hat set santahat"){
        Entity.setMobSkin(Player.getEntity(),"mob/char_santahat.png");
    }else if (cmd == "hat set elfhat"){
        Entity.setMobSkin(Player.getEntity(),"mob/char_elfhat.png");
    }else if (cmd == "hat set villagerhat"){
        Entity.setMobSkin(Player.getEntity(),"mob/char_villagerhat.png");
    }else if (cmd == "hat set creeperhat"){
        Entity.setMobSkin(Player.getEntity(),"mob/char_creeperhat.png");
    }else if (cmd == "hat set pighat"){
        Entity.setMobSkin(Player.getEntity(),"mob/char_pighat.png");
    }else if (cmd == "hat set zombiehat"){
        Entity.setMobSkin(Player.getEntity(),"mob/char_zombiehat.png");
	}else if (cmd == "hat set herobrinehat"){
        Entity.setMobSkin(Player.getEntity(),"mob/char_herobrinehat.png");
    }else if (cmd == "hat set 3dglasses"){
        Entity.setMobSkin(Player.getEntity(),"mob/char_3dglasses.png");
    }else if (cmd == "hat set froghat"){
        Entity.setMobSkin(Player.getEntity(),"mob/char_froghat.png");
    }else if (cmd == "hat set cap"){
        Entity.setMobSkin(Player.getEntity(),"mob/char_cap.png");
    }else if (cmd == "hat set tophat"){
        Entity.setMobSkin(Player.getEntity(),"mob/char_tophat.png");
    }else if (cmd == "hat set present"){
        Entity.setMobSkin(Player.getEntity(),"mob/char_present.png");
    }else if (cmd == "hat set popcorn"){
        Entity.setMobSkin(Player.getEntity(),"mob/char_popcorn.png")
    }else if (cmd == "hat set nyancat"){
        Entity.setMobSkin(Player.getEntity(),"mob/char_nyancat.png")
    }else if (cmd == "hat reset"){
        Entity.setMobSkin(Player.getEntity(),"mob/char.png");
    }else if (cmd == "hat types"){
        clientMessage("grass, dirt, stone, sand, wood, woodenplanks, chest, glass, cobblestone, bedrock, obsidian, cactus, glowstone, ice, netherrack, snow, sponge, gravel, bricks, mushroom, tnt, santahat, elfhat, villagerhat, creeperhat, pighat, zombiehat, herobrinehat, 3dglasses, froghat, cap, tophat, present, popcorn, nyancat");
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
//Mod version: 1.2
//For full changelog, do /changelog hatsmodpe


//*Ideas*
//---------
//If you have any ideas for this mod, please send them to my MC-Forum account, or on Twitter: @AgameR_Modder
