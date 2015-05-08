ModPE.overrideTexture("images/mob/white.png","http://i.imgur.com/OnAoGUC.png");
ModPE.overrideTexture("images/mob/orange.png","http://i.imgur.com/vYmuP0R.png");
ModPE.overrideTexture("images/mob/magenta.png","http://i.imgur.com/0xNF7Tq.png");
ModPE.overrideTexture("images/mob/lightblue.png","http://i.imgur.com/ctgWh7b.png");
ModPE.overrideTexture("images/mob/yellow.png","http://i.imgur.com/79fJGKx.png");
ModPE.overrideTexture("images/mob/limegreen.png","http://i.imgur.com/Ttb33ro.png");
ModPE.overrideTexture("images/mob/pink.png","http://i.imgur.com/NlWZwei.png");
ModPE.overrideTexture("images/mob/gray.png","http://i.imgur.com/mBQr0Ol.png");
ModPE.overrideTexture("images/mob/lightgray.png","http://i.imgur.com/448b8QN.png");
ModPE.overrideTexture("images/mob/cyan.png","http://i.imgur.com/yb9eOy7.png");
ModPE.overrideTexture("images/mob/purple.png","http://i.imgur.com/ytbBxTn.png");
ModPE.overrideTexture("images/mob/blue.png","http://i.imgur.com/ks9GRBp.png");
ModPE.overrideTexture("images/mob/brown.png","http://i.imgur.com/eFdiDWr.png");
ModPE.overrideTexture("images/mob/green.png","http://i.imgur.com/s4W0IuF.png");
ModPE.overrideTexture("images/mob/red.png","http://i.imgur.com/lqQJYW3.png");
ModPE.overrideTexture("images/mob/black.png","http://i.imgur.com/j2y5JxL.png");

ModPE.setItem(437,"quiver",0,"Paint Brush",64);
ModPE.setItem(394,"repeater",0,"White Paint Brush",64);
ModPE.setItem(510,"iron_horse_armor",0,"Orange Paint Brush",64);
ModPE.setItem(511,"gold_horse_armor",0,"Magenta Paint Brush",64);
ModPE.setItem(509,"minecart_furnace",0,"Light Blue Paint Brush",64);
ModPE.setItem(508,"minecart_hopper",0,"Yellow Paint Brush",64);
ModPE.setItem(507,"minecart_chest",0,"Lime Green Paint Brush",64);
ModPE.setItem(401,"brewing_stand",0,"Pink Paint Brush",64);
ModPE.setItem(402,"book_writable",0,"Gray Paint Brush",64);
ModPE.setItem(403,"book_enchanted",0,"Light Gray Paint Brush",64);
ModPE.setItem(395,"diamond_horse_armor",0,"Cyan Paint Brush",64);
ModPE.setItem(396,"fishing_rod_cast",0,"Purple Paint Brush",64);
ModPE.setItem(397,"minecart_tnt",0,"Blue Paint Brush",64);
ModPE.setItem(410,"hopper",0,"Brown Paint Brush",64);
ModPE.setItem(399,"fishing_rod_uncast",0,"Green Paint Brush",64);
ModPE.setItem(322,"book_written",0,"Red Paint Brush",64);
ModPE.setItem(326,"comparator",0,"Black Paint Brush",64);

//Wooden Planks
Block.defineBlock(176,"Orange Wooden Planks",[["planks",0]],0,2,0);
Block.setColor(176,[0xFF6600]);
Block.setDestroyTime(176,3);
Block.defineBlock(177,"Magenta Wooden Planks",[["planks",0]],0,2,0);
Block.setColor(177,[0xFF00FF]);
Block.setDestroyTime(177,3);
Block.defineBlock(178,"Light Blue Wooden Planks",[["planks",0]],0,2,0);
Block.setColor(178,[0x4169E1]);
Block.setDestroyTime(178,3);
Block.defineBlock(179,"Yellow Wooden Planks",[["planks",0]],0,2,0);
Block.setColor(179,[0xFFFF00]);
Block.setDestroyTime(179,3);
Block.defineBlock(180,"Lime Green Wooden Planks",[["planks",0]],0,2,0);
Block.setColor(180,[0x32CD32]);
Block.setDestroyTime(180,3);
Block.defineBlock(181,"Pink Wooden Planks",[["planks",0]],0,2,0);
Block.setColor(181,[0xFF1493]);
Block.setDestroyTime(181,3);
Block.defineBlock(182,"Gray Wooden Planks",[["planks",0]],0,2,0);
Block.setColor(182,[0x696969]);
Block.setDestroyTime(182,3);
Block.defineBlock(193,"Light Gray Wooden Planks",[["planks",0]],0,2,0);
Block.setColor(193,[0x808080]);
Block.setDestroyTime(193,3);
Block.defineBlock(194,"Cyan Wooden Planks",[["planks",0]],0,2,0);
Block.setColor(194,[0x00FFFF]);
Block.setDestroyTime(194,3);
Block.defineBlock(195,"Purple Wooden Planks",[["planks",0]],0,2,0);
Block.setColor(195,[0x800080]);
Block.setDestroyTime(195,3);
Block.defineBlock(196,"Blue Wooden Planks",[["planks",0]],0,2,0);
Block.setColor(196,[0x00008B]);
Block.setDestroyTime(196,3);
Block.defineBlock(197,"Brown Wooden Planks",[["planks",0]],0,2,0);
Block.setColor(197,[0x8B4513]);
Block.setDestroyTime(197,3);
Block.defineBlock(198,"Green Wooden Planks",[["planks",0]],0,2,0);
Block.setColor(198,[0x008000]);
Block.setDestroyTime(198,3);
Block.defineBlock(199,"Red Wooden Planks",[["planks",0]],0,2,0);
Block.setColor(199,[0xFF0000]);
Block.setDestroyTime(199,3);
Block.defineBlock(200,"Black Wooden Planks",[["planks",0]],0,2,0);
Block.setColor(200,[0x000000]);
Block.setDestroyTime(200,3);

//Glass
Block.defineBlock(201,"Orange Tinted Glass",[["glass",0]],0,false,0);
Block.setColor(201,[0xFF6600]);
Block.setDestroyTime(201,0.45);
Block.setRenderLayer(201, 5);
Block.defineBlock(202,"Magenta Tinted Glass",[["glass",0]],0,false,0);
Block.setColor(202,[0xFF00FF]);
Block.setDestroyTime(202,0.45);
Block.setRenderLayer(202, 5);
Block.defineBlock(203,"Light Blue Tinted Glass",[["glass",0]],0,false,0);
Block.setColor(203,[0x4169E1]);
Block.setDestroyTime(203,0.45);
Block.setRenderLayer(203, 5);
Block.defineBlock(204,"Yellow Tinted Glass",[["glass",0]],0,false,0);
Block.setColor(204,[0xFFFF00]);
Block.setDestroyTime(204,0.45);
Block.setRenderLayer(204, 5);
Block.defineBlock(205,"Lime Green Tinted Glass",[["glass",0]],0,false,0);
Block.setColor(205,[0x32CD32]);
Block.setDestroyTime(205,0.45);
Block.setRenderLayer(205, 5);
Block.defineBlock(206,"Pink Tinted Glass",[["glass",0]],0,false,0);
Block.setColor(206,[0xFF1493]);
Block.setDestroyTime(206,0.45);
Block.setRenderLayer(206, 5);
Block.defineBlock(207,"Gray Tinted Glass",[["glass",0]],0,false,0);
Block.setColor(207,[0x696969]);
Block.setDestroyTime(207,0.45);
Block.setRenderLayer(207, 5);
Block.defineBlock(208,"Light Gray Tinted Glass",[["glass",0]],0,false,0);
Block.setColor(208,[0x808080]);
Block.setDestroyTime(208,0.45);
Block.setRenderLayer(208, 5);
Block.defineBlock(209,"Cyan Tinted Glass",[["glass",0]],0,false,0);
Block.setColor(209,[0x00FFFF]);
Block.setDestroyTime(209,0.45);
Block.setRenderLayer(209, 5);
Block.defineBlock(210,"Purple Tinted Glass",[["glass",0]],0,false,0);
Block.setColor(210,[0x800080]);
Block.setDestroyTime(210,0.45);
Block.setRenderLayer(210, 5);
Block.defineBlock(211,"Blue Tinted Glass",[["glass",0]],0,false,0);
Block.setColor(211,[0x00008B]);
Block.setDestroyTime(211,0.45);
Block.setRenderLayer(211, 5);
Block.defineBlock(212,"Brown Tinted Glass",[["glass",0]],0,false,0);
Block.setColor(212,[0x8B4513]);
Block.setDestroyTime(212,0.45);
Block.setRenderLayer(212, 5);
Block.defineBlock(213,"Green Tinted Glass",[["glass",0]],0,false,0);
Block.setColor(213,[0x008000]);
Block.setDestroyTime(213,0.45);
Block.setRenderLayer(213, 5);
Block.defineBlock(214,"Red Tinted Glass",[["glass",0]],0,false,0);
Block.setColor(214,[0xFF0000]);
Block.setDestroyTime(214,0.45);
Block.setRenderLayer(214, 5);
Block.defineBlock(215,"Black Tinted Glass",[["glass",0]],0,false,0);
Block.setColor(215,[0x000000]);
Block.setDestroyTime(215,0.45);
Block.setRenderLayer(215, 5);

//Sponge
Block.defineBlock(216,"Orange Sponge",[["sponge",0]],0,2,0);
Block.setColor(216,[0xFF6600]);
Block.setDestroyTime(216,0.6);
Block.defineBlock(217,"Magenta Sponge",[["sponge",0]],0,2,0);
Block.setColor(217,[0xFF00FF]);
Block.setDestroyTime(217,0.6);
Block.defineBlock(218,"Light Blue Sponge",[["sponge",0]],0,2,0);
Block.setColor(218,[0x4169E1]);
Block.setDestroyTime(218,0.6);
Block.defineBlock(219,"Yellow Sponge",[["sponge",0]],0,2,0);
Block.setColor(219,[0xFFFF00]);
Block.setDestroyTime(219,0.6);
Block.defineBlock(220,"Lime Green Sponge",[["sponge",0]],0,2,0);
Block.setColor(220,[0x32CD32]);
Block.setDestroyTime(220,0.6);
Block.defineBlock(221,"Pink Sponge",[["sponge",0]],0,2,0);
Block.setColor(221,[0xFF1493]);
Block.setDestroyTime(221,0.6);
Block.defineBlock(222,"Gray Sponge",[["sponge",0]],0,2,0);
Block.setColor(222,[0x696969]);
Block.setDestroyTime(222,0.6);
Block.defineBlock(223,"Light Gray Sponge",[["sponge",0]],0,2,0);
Block.setColor(223,[0x808080]);
Block.setDestroyTime(223,0.6);
Block.defineBlock(224,"Cyan Sponge",[["sponge",0]],0,2,0);
Block.setColor(224,[0x00FFFF]);
Block.setDestroyTime(224,0.6);
Block.defineBlock(225,"Purple Sponge",[["sponge",0]],0,2,0);
Block.setColor(225,[0x800080]);
Block.setDestroyTime(225,0.6);
Block.defineBlock(226,"Blue Sponge",[["sponge",0]],0,2,0);
Block.setColor(226,[0x00008B]);
Block.setDestroyTime(226,0.6);
Block.defineBlock(227,"Brown Sponge",[["sponge",0]],0,2,0);
Block.setColor(227,[0x8B4513]);
Block.setDestroyTime(227,0.6);
Block.defineBlock(228,"Green Sponge",[["sponge",0]],0,2,0);
Block.setColor(228,[0x008000]);
Block.setDestroyTime(228,0.6);
Block.defineBlock(229,"Red Sponge",[["sponge",0]],0,2,0);
Block.setColor(229,[0xFF0000]);
Block.setDestroyTime(229,0.6);
Block.defineBlock(230,"Black Sponge",[["sponge",0]],0,2,0);
Block.setColor(230,[0x000000]);
Block.setDestroyTime(230,0.6);

//Leaves
Block.defineBlock(231,"Orange Leaves",[["leaves",0]],0,false,0);
Block.setColor(231,[0xFF6600]);
Block.setDestroyTime(231,0.2);
Block.setRenderLayer(231, 1);
Block.defineBlock(232,"Magenta Leaves",[["leaves",0]],0,false,0);
Block.setColor(232,[0xFF00FF]);
Block.setDestroyTime(232,0.2);
Block.setRenderLayer(232, 1);
Block.defineBlock(233,"Light Blue Leaves",[["leaves",0]],0,false,0);
Block.setColor(233,[0x4169E1]);
Block.setDestroyTime(233,0.2);
Block.setRenderLayer(233, 1);
Block.defineBlock(234,"Yellow Leaves",[["leaves",0]],0,false,0);
Block.setColor(234,[0xFFFF00]);
Block.setDestroyTime(234,0.2);
Block.setRenderLayer(234, 1);
Block.defineBlock(235,"Lime Green Leaves",[["leaves",0]],0,false,0);
Block.setColor(235,[0x32CD32]);
Block.setDestroyTime(235,0.2);
Block.setRenderLayer(235, 1);
Block.defineBlock(236,"Pink Leaves",[["leaves",0]],0,false,0);
Block.setColor(236,[0xFF1493]);
Block.setDestroyTime(236,0.2);
Block.setRenderLayer(236, 1);
Block.defineBlock(237,"Gray Leaves",[["leaves",0]],0,false,0);
Block.setColor(237,[0x696969]);
Block.setDestroyTime(237,0.2);
Block.setRenderLayer(237, 1);
Block.defineBlock(238,"Light Gray Leaves",[["leaves",0]],0,false,0);
Block.setColor(238,[0x808080]);
Block.setDestroyTime(238,0.2);
Block.setRenderLayer(238, 1);
Block.defineBlock(239,"Cyan Leaves",[["leaves",0]],0,false,0);
Block.setColor(239,[0x00FFFF]);
Block.setDestroyTime(239,0.2);
Block.setRenderLayer(239, 1);
Block.defineBlock(240,"Purple Leaves",[["leaves",0]],0,false,0);
Block.setColor(240,[0x800080]);
Block.setDestroyTime(240,0.2);
Block.setRenderLayer(240, 1);
Block.defineBlock(241,"Blue Leaves",[["leaves",0]],0,false,0);
Block.setColor(241,[0x00008B]);
Block.setRenderLayer(241, 1);
Block.setDestroyTime(241,0.2);
Block.defineBlock(242,"Brown Leaves",[["leaves",0]],0,false,0);
Block.setColor(242,[0x8B4513]);
Block.setDestroyTime(242,0.2);
Block.setRenderLayer(242, 1);
Block.defineBlock(244,"Green Leaves",[["leaves",0]],0,false,0);
Block.setColor(244,[0x008000]);
Block.setDestroyTime(244,0.2);
Block.setRenderLayer(244, 1);
Block.defineBlock(250,"Red Leaves",[["leaves",0]],0,false,0);
Block.setColor(250,[0xFF0000]);
Block.setDestroyTime(250,0.2);
Block.setRenderLayer(250, 1);
Block.defineBlock(251,"Black Leaves",[["leaves",0]],0,false,0);
Block.setColor(251,[0x000000]);
Block.setDestroyTime(251,0.2);
Block.setRenderLayer(251, 1);

Player.addItemCreativeInv(176,1,0);
Player.addItemCreativeInv(177,1,0);
Player.addItemCreativeInv(178,1,0);
Player.addItemCreativeInv(179,1,0);
Player.addItemCreativeInv(180,1,0);
Player.addItemCreativeInv(181,1,0);
Player.addItemCreativeInv(182,1,0);
Player.addItemCreativeInv(193,1,0);
Player.addItemCreativeInv(194,1,0);
Player.addItemCreativeInv(195,1,0);
Player.addItemCreativeInv(196,1,0);
Player.addItemCreativeInv(197,1,0);
Player.addItemCreativeInv(198,1,0);
Player.addItemCreativeInv(199,1,0);
Player.addItemCreativeInv(200,1,0);
Player.addItemCreativeInv(201,1,0);
Player.addItemCreativeInv(202,1,0);
Player.addItemCreativeInv(203,1,0);
Player.addItemCreativeInv(204,1,0);
Player.addItemCreativeInv(205,1,0);
Player.addItemCreativeInv(206,1,0);
Player.addItemCreativeInv(207,1,0);
Player.addItemCreativeInv(208,1,0);
Player.addItemCreativeInv(209,1,0);
Player.addItemCreativeInv(210,1,0);
Player.addItemCreativeInv(211,1,0);
Player.addItemCreativeInv(212,1,0);
Player.addItemCreativeInv(213,1,0);
Player.addItemCreativeInv(214,1,0);
Player.addItemCreativeInv(215,1,0);
Player.addItemCreativeInv(216,1,0);
Player.addItemCreativeInv(217,1,0);
Player.addItemCreativeInv(218,1,0);
Player.addItemCreativeInv(219,1,0);
Player.addItemCreativeInv(220,1,0);
Player.addItemCreativeInv(221,1,0);
Player.addItemCreativeInv(222,1,0);
Player.addItemCreativeInv(223,1,0);
Player.addItemCreativeInv(224,1,0);
Player.addItemCreativeInv(225,1,0);
Player.addItemCreativeInv(226,1,0);
Player.addItemCreativeInv(227,1,0);
Player.addItemCreativeInv(228,1,0);
Player.addItemCreativeInv(229,1,0);
Player.addItemCreativeInv(230,1,0);
Player.addItemCreativeInv(231,1,0);
Player.addItemCreativeInv(232,1,0);
Player.addItemCreativeInv(233,1,0);
Player.addItemCreativeInv(234,1,0);
Player.addItemCreativeInv(235,1,0);
Player.addItemCreativeInv(236,1,0);
Player.addItemCreativeInv(237,1,0);
Player.addItemCreativeInv(238,1,0);
Player.addItemCreativeInv(239,1,0);
Player.addItemCreativeInv(240,1,0);
Player.addItemCreativeInv(241,1,0);
Player.addItemCreativeInv(242,1,0);
Player.addItemCreativeInv(243,1,0);
Player.addItemCreativeInv(244,1,0);
Player.addItemCreativeInv(250,1,0);
Player.addItemCreativeInv(251,1,0);

Item.setMaxDamage(437, 10);
Item.setMaxDamage(394, 10);
Item.setMaxDamage(510, 10);
Item.setMaxDamage(511, 10);
Item.setMaxDamage(509, 10);
Item.setMaxDamage(508, 10);
Item.setMaxDamage(507, 10);
Item.setMaxDamage(401, 10);
Item.setMaxDamage(402, 10);
Item.setMaxDamage(403, 10);
Item.setMaxDamage(395, 10);
Item.setMaxDamage(396, 10);
Item.setMaxDamage(397, 10);
Item.setMaxDamage(410, 10);
Item.setMaxDamage(399, 10);
Item.setMaxDamage(322, 10);
Item.setMaxDamage(326, 10);

Player.addItemCreativeInv(437,1,0);
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

Item.addShapedRecipe(437, 1, 0, [
"   ",
"   ",
" t "
], 
["t", 280, 0]);

Item.addShapedRecipe(394, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 15, "t", 437, 0]);

Item.addShapedRecipe(510, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 14, "t", 437, 0]); 

Item.addShapedRecipe(511, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 13, "t", 437, 0]); 

Item.addShapedRecipe(509, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 12, "t", 437, 0]); 

Item.addShapedRecipe(508, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 11, "t", 437, 0]); 

Item.addShapedRecipe(507, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 10, "t", 437, 0]); 

Item.addShapedRecipe(401, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 9, "t", 437, 0]); 

Item.addShapedRecipe(402, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 8, "t", 437, 0]); 

Item.addShapedRecipe(403, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 7, "t", 437, 0]); 

Item.addShapedRecipe(395, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 6, "t", 437, 0]); 

Item.addShapedRecipe(396, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 5, "t", 437, 0]); 

Item.addShapedRecipe(397, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 4, "t", 437, 0]); 

Item.addShapedRecipe(410, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 3, "t", 437, 0]); 

Item.addShapedRecipe(399, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 2, "t", 437, 0]); 

Item.addShapedRecipe(322, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 1, "t", 437, 0]); 

Item.addShapedRecipe(326, 1, 0, [
"   ",
" s ",
" t "
], 
["s", 351, 0, "t", 437, 0]);

function Web(url) {
    activity.runOnUiThread(new java.lang.Runnable({
        run: function() {
            activity.startActivity(new android.content.Intent(android.content.Intent.ACTION_VIEW, android.net.Uri.parse(url)));
        }
    }));
}

var GUI;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

const CURRENT_VERSION = "2.0 Build 2";
var latestVersion;

var currentActivity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var sdcard = android.os.Environment.getExternalStorageDirectory();

var initialized = false;

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
                     });

    if (initialized == false) {
        initialized = true;
        clientMessage(ChatColor.GREEN + "[AgameR Paint Mod PE]" + ChatColor.WHITE + " Initialized");
    }
    new java.lang.Thread(new java.lang.Runnable() {
        run: function() {
            getLatestVersion();
            if (latestVersion != CURRENT_VERSION && latestVersion != undefined) {
                clientMessage(ChatColor.GREEN + "[AgameR Paint Mod PE]" + ChatColor.WHITE + " There is a new version available (v" + latestVersion + ")!");
            } else {
                currentActivity.runOnUiThread(new java.lang.Runnable() {
                    run: function() {
                        android.widget.Toast.makeText(currentActivity, new android.text.Html.fromHtml("<b>AgameR Paint Mod PE</b> You have the latest version"), 0).show();
                    }
                });
            }
        }
    }).start();
};

function getLatestVersion() {
    try {
        // download content
        var url = new java.net.URL("https://raw.githubusercontent.com/peacestorm/ModPE-scripts/master/version/agamer-paintmodpe-version");
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

        // close what needs to be closed
        bufferedVersionReader.close();

        // test
        //clientMessage(CURRENT_VERSION + " " + latestVersion);
    } catch (err) {
        clientMessage(ChatColor.GREEN + "[AgameR Paint Mod PE]" + ChatColor.WHITE + " Can't check for updates, please check your Internet connection.");
        ModPE.log("[AgameR Paint Mod PE] getLatestVersion() caught an error: " + err);
    }
}

function modTick() {
ModPE.showTipMessage("AgameR Paint Mod PE v"+CURRENT_VERSION+"\nMCPE v"+ModPE.getMinecraftVersion());
};

function procCmd(cmd) {
    cmd = cmd.toLowerCase();
    if (cmd == "changelog paintmodpe"){
        clientMessage("AgameR Paint Mod PE Changelog - 1.0: Initial release | 1.1: Added crafting recipes | 1.2: Paint any block you want, fixed item id conflict with the TooManyItems addon, added a new crafting recipe for the white paint brush | 1.2.1: Used paintbrushes will now turn into empty paintbrushes in survival; Added an easter egg | 1.2.2: Removed survival functionalities introduced in 1.2.1 due to crashes; Fixed some things | 1.2.3: Added a new and improved survival system; Fixed bugs | 1.3: Added carpet painting; Some improvements | 1.3.1: Painting mobs no longer damages them; Some improvements | 2.0: Added many new colored blocks; Added an update checker");
    }
};

function attackHook(attacker, victim) {
    var selecteditem = Player.getCarriedItem();
	var gamemode = Level.getGameMode()
    if (attacker == Player.getEntity()) {
        if (selecteditem == 394) {
		    Entity.setMobSkin(victim,"mob/white.png");
			if(gamemode == 0){
			Entity.setCarriedItem(attacker, 394, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
			if(Player.getCarriedItemData() > 10){
			Entity.setCarriedItem(attacker, 394, Player.getCarriedItemCount() - 1);
			Player.addItemInventory(437,1,0);
			}}else if (Entity.getEntityTypeId(victim)==1||Entity.getEntityTypeId(victim)==2||Entity.getEntityTypeId(victim)==3||Entity.getEntityTypeId(victim)==4||Entity.getEntityTypeId(victim)==5||Entity.getEntityTypeId(victim)==6||Entity.getEntityTypeId(victim)==7||Entity.getEntityTypeId(victim)==8||Entity.getEntityTypeId(victim)==9||Entity.getEntityTypeId(victim)==10||Entity.getEntityTypeId(victim)==11||Entity.getEntityTypeId(victim)==12||Entity.getEntityTypeId(victim)==13||Entity.getEntityTypeId(victim)==14||Entity.getEntityTypeId(victim)==15||Entity.getEntityTypeId(victim)==16||Entity.getEntityTypeId(victim)==17||Entity.getEntityTypeId(victim)==18||Entity.getEntityTypeId(victim)==19||Entity.getEntityTypeId(victim)==20||Entity.getEntityTypeId(victim)==21||Entity.getEntityTypeId(victim)==22||Entity.getEntityTypeId(victim)==23||Entity.getEntityTypeId(victim)==24||Entity.getEntityTypeId(victim)==25||Entity.getEntityTypeId(victim)==26||Entity.getEntityTypeId(victim)==27||Entity.getEntityTypeId(victim)==28||Entity.getEntityTypeId(victim)==29||Entity.getEntityTypeId(victim)==30||Entity.getEntityTypeId(victim)==31||Entity.getEntityTypeId(victim)==32||Entity.getEntityTypeId(victim)==33||Entity.getEntityTypeId(victim)==34||Entity.getEntityTypeId(victim)==35||Entity.getEntityTypeId(victim)==36||Entity.getEntityTypeId(victim)==37||Entity.getEntityTypeId(victim)==38||Entity.getEntityTypeId(victim)==39||Entity.getEntityTypeId(victim)==40){
			preventDefault();
		}}else if (selecteditem == 510) {
		    Entity.setMobSkin(victim,"mob/orange.png");
			if(gamemode == 0){
			Entity.setCarriedItem(attacker, 510, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
			if(Player.getCarriedItemData() > 10){
			Entity.setCarriedItem(attacker, 510, Player.getCarriedItemCount() - 1);
			Player.addItemInventory(437,1,0);
			}}else if (Entity.getEntityTypeId(victim)==1||Entity.getEntityTypeId(victim)==2||Entity.getEntityTypeId(victim)==3||Entity.getEntityTypeId(victim)==4||Entity.getEntityTypeId(victim)==5||Entity.getEntityTypeId(victim)==6||Entity.getEntityTypeId(victim)==7||Entity.getEntityTypeId(victim)==8||Entity.getEntityTypeId(victim)==9||Entity.getEntityTypeId(victim)==10||Entity.getEntityTypeId(victim)==11||Entity.getEntityTypeId(victim)==12||Entity.getEntityTypeId(victim)==13||Entity.getEntityTypeId(victim)==14||Entity.getEntityTypeId(victim)==15||Entity.getEntityTypeId(victim)==16||Entity.getEntityTypeId(victim)==17||Entity.getEntityTypeId(victim)==18||Entity.getEntityTypeId(victim)==19||Entity.getEntityTypeId(victim)==20||Entity.getEntityTypeId(victim)==21||Entity.getEntityTypeId(victim)==22||Entity.getEntityTypeId(victim)==23||Entity.getEntityTypeId(victim)==24||Entity.getEntityTypeId(victim)==25||Entity.getEntityTypeId(victim)==26||Entity.getEntityTypeId(victim)==27||Entity.getEntityTypeId(victim)==28||Entity.getEntityTypeId(victim)==29||Entity.getEntityTypeId(victim)==30||Entity.getEntityTypeId(victim)==31||Entity.getEntityTypeId(victim)==32||Entity.getEntityTypeId(victim)==33||Entity.getEntityTypeId(victim)==34||Entity.getEntityTypeId(victim)==35||Entity.getEntityTypeId(victim)==36||Entity.getEntityTypeId(victim)==37||Entity.getEntityTypeId(victim)==38||Entity.getEntityTypeId(victim)==39||Entity.getEntityTypeId(victim)==40){
			preventDefault();
	    }}else if (selecteditem == 511) {
		    Entity.setMobSkin(victim,"mob/magenta.png");
			if(gamemode == 0){
			Entity.setCarriedItem(attacker, 511, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
			if(Player.getCarriedItemData() > 10){
			Entity.setCarriedItem(attacker, 511, Player.getCarriedItemCount() - 1);
			Player.addItemInventory(437,1,0);
			}}else if (Entity.getEntityTypeId(victim)==1||Entity.getEntityTypeId(victim)==2||Entity.getEntityTypeId(victim)==3||Entity.getEntityTypeId(victim)==4||Entity.getEntityTypeId(victim)==5||Entity.getEntityTypeId(victim)==6||Entity.getEntityTypeId(victim)==7||Entity.getEntityTypeId(victim)==8||Entity.getEntityTypeId(victim)==9||Entity.getEntityTypeId(victim)==10||Entity.getEntityTypeId(victim)==11||Entity.getEntityTypeId(victim)==12||Entity.getEntityTypeId(victim)==13||Entity.getEntityTypeId(victim)==14||Entity.getEntityTypeId(victim)==15||Entity.getEntityTypeId(victim)==16||Entity.getEntityTypeId(victim)==17||Entity.getEntityTypeId(victim)==18||Entity.getEntityTypeId(victim)==19||Entity.getEntityTypeId(victim)==20||Entity.getEntityTypeId(victim)==21||Entity.getEntityTypeId(victim)==22||Entity.getEntityTypeId(victim)==23||Entity.getEntityTypeId(victim)==24||Entity.getEntityTypeId(victim)==25||Entity.getEntityTypeId(victim)==26||Entity.getEntityTypeId(victim)==27||Entity.getEntityTypeId(victim)==28||Entity.getEntityTypeId(victim)==29||Entity.getEntityTypeId(victim)==30||Entity.getEntityTypeId(victim)==31||Entity.getEntityTypeId(victim)==32||Entity.getEntityTypeId(victim)==33||Entity.getEntityTypeId(victim)==34||Entity.getEntityTypeId(victim)==35||Entity.getEntityTypeId(victim)==36||Entity.getEntityTypeId(victim)==37||Entity.getEntityTypeId(victim)==38||Entity.getEntityTypeId(victim)==39||Entity.getEntityTypeId(victim)==40){
			preventDefault();
		}}else if (selecteditem == 509) {
		    Entity.setMobSkin(victim,"mob/lightblue.png");
			if(gamemode == 0){
			Entity.setCarriedItem(attacker, 509, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
			if(Player.getCarriedItemData() > 10){
			Entity.setCarriedItem(attacker, 509, Player.getCarriedItemCount() - 1);
			Player.addItemInventory(437,1,0);
			}}else if (Entity.getEntityTypeId(victim)==1||Entity.getEntityTypeId(victim)==2||Entity.getEntityTypeId(victim)==3||Entity.getEntityTypeId(victim)==4||Entity.getEntityTypeId(victim)==5||Entity.getEntityTypeId(victim)==6||Entity.getEntityTypeId(victim)==7||Entity.getEntityTypeId(victim)==8||Entity.getEntityTypeId(victim)==9||Entity.getEntityTypeId(victim)==10||Entity.getEntityTypeId(victim)==11||Entity.getEntityTypeId(victim)==12||Entity.getEntityTypeId(victim)==13||Entity.getEntityTypeId(victim)==14||Entity.getEntityTypeId(victim)==15||Entity.getEntityTypeId(victim)==16||Entity.getEntityTypeId(victim)==17||Entity.getEntityTypeId(victim)==18||Entity.getEntityTypeId(victim)==19||Entity.getEntityTypeId(victim)==20||Entity.getEntityTypeId(victim)==21||Entity.getEntityTypeId(victim)==22||Entity.getEntityTypeId(victim)==23||Entity.getEntityTypeId(victim)==24||Entity.getEntityTypeId(victim)==25||Entity.getEntityTypeId(victim)==26||Entity.getEntityTypeId(victim)==27||Entity.getEntityTypeId(victim)==28||Entity.getEntityTypeId(victim)==29||Entity.getEntityTypeId(victim)==30||Entity.getEntityTypeId(victim)==31||Entity.getEntityTypeId(victim)==32||Entity.getEntityTypeId(victim)==33||Entity.getEntityTypeId(victim)==34||Entity.getEntityTypeId(victim)==35||Entity.getEntityTypeId(victim)==36||Entity.getEntityTypeId(victim)==37||Entity.getEntityTypeId(victim)==38||Entity.getEntityTypeId(victim)==39||Entity.getEntityTypeId(victim)==40){
			preventDefault();
		}}else if (selecteditem == 508) {
		    Entity.setMobSkin(victim,"mob/yellow.png");
			if(gamemode == 0){
			Entity.setCarriedItem(attacker, 508, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
			if(Player.getCarriedItemData() > 10){
			Entity.setCarriedItem(attacker, 508, Player.getCarriedItemCount() - 1);
			Player.addItemInventory(437,1,0);
			}}else if (Entity.getEntityTypeId(victim)==1||Entity.getEntityTypeId(victim)==2||Entity.getEntityTypeId(victim)==3||Entity.getEntityTypeId(victim)==4||Entity.getEntityTypeId(victim)==5||Entity.getEntityTypeId(victim)==6||Entity.getEntityTypeId(victim)==7||Entity.getEntityTypeId(victim)==8||Entity.getEntityTypeId(victim)==9||Entity.getEntityTypeId(victim)==10||Entity.getEntityTypeId(victim)==11||Entity.getEntityTypeId(victim)==12||Entity.getEntityTypeId(victim)==13||Entity.getEntityTypeId(victim)==14||Entity.getEntityTypeId(victim)==15||Entity.getEntityTypeId(victim)==16||Entity.getEntityTypeId(victim)==17||Entity.getEntityTypeId(victim)==18||Entity.getEntityTypeId(victim)==19||Entity.getEntityTypeId(victim)==20||Entity.getEntityTypeId(victim)==21||Entity.getEntityTypeId(victim)==22||Entity.getEntityTypeId(victim)==23||Entity.getEntityTypeId(victim)==24||Entity.getEntityTypeId(victim)==25||Entity.getEntityTypeId(victim)==26||Entity.getEntityTypeId(victim)==27||Entity.getEntityTypeId(victim)==28||Entity.getEntityTypeId(victim)==29||Entity.getEntityTypeId(victim)==30||Entity.getEntityTypeId(victim)==31||Entity.getEntityTypeId(victim)==32||Entity.getEntityTypeId(victim)==33||Entity.getEntityTypeId(victim)==34||Entity.getEntityTypeId(victim)==35||Entity.getEntityTypeId(victim)==36||Entity.getEntityTypeId(victim)==37||Entity.getEntityTypeId(victim)==38||Entity.getEntityTypeId(victim)==39||Entity.getEntityTypeId(victim)==40){
			preventDefault();
		}}else if (selecteditem == 507) {
		    Entity.setMobSkin(victim,"mob/limegreen.png");
			if(gamemode == 0){
			Entity.setCarriedItem(attacker, 507, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
			if(Player.getCarriedItemData() > 10){
			Entity.setCarriedItem(attacker, 507, Player.getCarriedItemCount() - 1);
			Player.addItemInventory(437,1,0);
			}}else if (Entity.getEntityTypeId(victim)==1||Entity.getEntityTypeId(victim)==2||Entity.getEntityTypeId(victim)==3||Entity.getEntityTypeId(victim)==4||Entity.getEntityTypeId(victim)==5||Entity.getEntityTypeId(victim)==6||Entity.getEntityTypeId(victim)==7||Entity.getEntityTypeId(victim)==8||Entity.getEntityTypeId(victim)==9||Entity.getEntityTypeId(victim)==10||Entity.getEntityTypeId(victim)==11||Entity.getEntityTypeId(victim)==12||Entity.getEntityTypeId(victim)==13||Entity.getEntityTypeId(victim)==14||Entity.getEntityTypeId(victim)==15||Entity.getEntityTypeId(victim)==16||Entity.getEntityTypeId(victim)==17||Entity.getEntityTypeId(victim)==18||Entity.getEntityTypeId(victim)==19||Entity.getEntityTypeId(victim)==20||Entity.getEntityTypeId(victim)==21||Entity.getEntityTypeId(victim)==22||Entity.getEntityTypeId(victim)==23||Entity.getEntityTypeId(victim)==24||Entity.getEntityTypeId(victim)==25||Entity.getEntityTypeId(victim)==26||Entity.getEntityTypeId(victim)==27||Entity.getEntityTypeId(victim)==28||Entity.getEntityTypeId(victim)==29||Entity.getEntityTypeId(victim)==30||Entity.getEntityTypeId(victim)==31||Entity.getEntityTypeId(victim)==32||Entity.getEntityTypeId(victim)==33||Entity.getEntityTypeId(victim)==34||Entity.getEntityTypeId(victim)==35||Entity.getEntityTypeId(victim)==36||Entity.getEntityTypeId(victim)==37||Entity.getEntityTypeId(victim)==38||Entity.getEntityTypeId(victim)==39||Entity.getEntityTypeId(victim)==40){
			preventDefault();
		}}else if (selecteditem == 401) {
		    Entity.setMobSkin(victim,"mob/pink.png");
			if(gamemode == 0){
			Entity.setCarriedItem(attacker, 401, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
			if(Player.getCarriedItemData() > 10){
			Entity.setCarriedItem(attacker, 401, Player.getCarriedItemCount() - 1);
			Player.addItemInventory(437,1,0);
			}}else if (Entity.getEntityTypeId(victim)==1||Entity.getEntityTypeId(victim)==2||Entity.getEntityTypeId(victim)==3||Entity.getEntityTypeId(victim)==4||Entity.getEntityTypeId(victim)==5||Entity.getEntityTypeId(victim)==6||Entity.getEntityTypeId(victim)==7||Entity.getEntityTypeId(victim)==8||Entity.getEntityTypeId(victim)==9||Entity.getEntityTypeId(victim)==10||Entity.getEntityTypeId(victim)==11||Entity.getEntityTypeId(victim)==12||Entity.getEntityTypeId(victim)==13||Entity.getEntityTypeId(victim)==14||Entity.getEntityTypeId(victim)==15||Entity.getEntityTypeId(victim)==16||Entity.getEntityTypeId(victim)==17||Entity.getEntityTypeId(victim)==18||Entity.getEntityTypeId(victim)==19||Entity.getEntityTypeId(victim)==20||Entity.getEntityTypeId(victim)==21||Entity.getEntityTypeId(victim)==22||Entity.getEntityTypeId(victim)==23||Entity.getEntityTypeId(victim)==24||Entity.getEntityTypeId(victim)==25||Entity.getEntityTypeId(victim)==26||Entity.getEntityTypeId(victim)==27||Entity.getEntityTypeId(victim)==28||Entity.getEntityTypeId(victim)==29||Entity.getEntityTypeId(victim)==30||Entity.getEntityTypeId(victim)==31||Entity.getEntityTypeId(victim)==32||Entity.getEntityTypeId(victim)==33||Entity.getEntityTypeId(victim)==34||Entity.getEntityTypeId(victim)==35||Entity.getEntityTypeId(victim)==36||Entity.getEntityTypeId(victim)==37||Entity.getEntityTypeId(victim)==38||Entity.getEntityTypeId(victim)==39||Entity.getEntityTypeId(victim)==40){
			preventDefault();
		}}else if (selecteditem == 402) {
		    Entity.setMobSkin(victim,"mob/gray.png");
			if(gamemode == 0){
			Entity.setCarriedItem(attacker, 402, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
			if(Player.getCarriedItemData() > 10){
			Entity.setCarriedItem(attacker, 402, Player.getCarriedItemCount() - 1);
			Player.addItemInventory(437,1,0);
			}}else if (Entity.getEntityTypeId(victim)==1||Entity.getEntityTypeId(victim)==2||Entity.getEntityTypeId(victim)==3||Entity.getEntityTypeId(victim)==4||Entity.getEntityTypeId(victim)==5||Entity.getEntityTypeId(victim)==6||Entity.getEntityTypeId(victim)==7||Entity.getEntityTypeId(victim)==8||Entity.getEntityTypeId(victim)==9||Entity.getEntityTypeId(victim)==10||Entity.getEntityTypeId(victim)==11||Entity.getEntityTypeId(victim)==12||Entity.getEntityTypeId(victim)==13||Entity.getEntityTypeId(victim)==14||Entity.getEntityTypeId(victim)==15||Entity.getEntityTypeId(victim)==16||Entity.getEntityTypeId(victim)==17||Entity.getEntityTypeId(victim)==18||Entity.getEntityTypeId(victim)==19||Entity.getEntityTypeId(victim)==20||Entity.getEntityTypeId(victim)==21||Entity.getEntityTypeId(victim)==22||Entity.getEntityTypeId(victim)==23||Entity.getEntityTypeId(victim)==24||Entity.getEntityTypeId(victim)==25||Entity.getEntityTypeId(victim)==26||Entity.getEntityTypeId(victim)==27||Entity.getEntityTypeId(victim)==28||Entity.getEntityTypeId(victim)==29||Entity.getEntityTypeId(victim)==30||Entity.getEntityTypeId(victim)==31||Entity.getEntityTypeId(victim)==32||Entity.getEntityTypeId(victim)==33||Entity.getEntityTypeId(victim)==34||Entity.getEntityTypeId(victim)==35||Entity.getEntityTypeId(victim)==36||Entity.getEntityTypeId(victim)==37||Entity.getEntityTypeId(victim)==38||Entity.getEntityTypeId(victim)==39||Entity.getEntityTypeId(victim)==40){
			preventDefault();
	    }}else if (selecteditem == 403) {
		    Entity.setMobSkin(victim,"mob/lightgray.png");
			if(gamemode == 0){
			Entity.setCarriedItem(attacker, 403, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
			if(Player.getCarriedItemData() > 10){
			Entity.setCarriedItem(attacker, 403, Player.getCarriedItemCount() - 1);
			Player.addItemInventory(437,1,0);
			}}else if (Entity.getEntityTypeId(victim)==1||Entity.getEntityTypeId(victim)==2||Entity.getEntityTypeId(victim)==3||Entity.getEntityTypeId(victim)==4||Entity.getEntityTypeId(victim)==5||Entity.getEntityTypeId(victim)==6||Entity.getEntityTypeId(victim)==7||Entity.getEntityTypeId(victim)==8||Entity.getEntityTypeId(victim)==9||Entity.getEntityTypeId(victim)==10||Entity.getEntityTypeId(victim)==11||Entity.getEntityTypeId(victim)==12||Entity.getEntityTypeId(victim)==13||Entity.getEntityTypeId(victim)==14||Entity.getEntityTypeId(victim)==15||Entity.getEntityTypeId(victim)==16||Entity.getEntityTypeId(victim)==17||Entity.getEntityTypeId(victim)==18||Entity.getEntityTypeId(victim)==19||Entity.getEntityTypeId(victim)==20||Entity.getEntityTypeId(victim)==21||Entity.getEntityTypeId(victim)==22||Entity.getEntityTypeId(victim)==23||Entity.getEntityTypeId(victim)==24||Entity.getEntityTypeId(victim)==25||Entity.getEntityTypeId(victim)==26||Entity.getEntityTypeId(victim)==27||Entity.getEntityTypeId(victim)==28||Entity.getEntityTypeId(victim)==29||Entity.getEntityTypeId(victim)==30||Entity.getEntityTypeId(victim)==31||Entity.getEntityTypeId(victim)==32||Entity.getEntityTypeId(victim)==33||Entity.getEntityTypeId(victim)==34||Entity.getEntityTypeId(victim)==35||Entity.getEntityTypeId(victim)==36||Entity.getEntityTypeId(victim)==37||Entity.getEntityTypeId(victim)==38||Entity.getEntityTypeId(victim)==39||Entity.getEntityTypeId(victim)==40){
			preventDefault();
		}}else if (selecteditem == 395) {
		    Entity.setMobSkin(victim,"mob/cyan.png");
			if(gamemode == 0){
			Entity.setCarriedItem(attacker, 395, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
			if(Player.getCarriedItemData() > 10){
			Entity.setCarriedItem(attacker, 395, Player.getCarriedItemCount() - 1);
			Player.addItemInventory(437,1,0);
			}}else if (Entity.getEntityTypeId(victim)==1||Entity.getEntityTypeId(victim)==2||Entity.getEntityTypeId(victim)==3||Entity.getEntityTypeId(victim)==4||Entity.getEntityTypeId(victim)==5||Entity.getEntityTypeId(victim)==6||Entity.getEntityTypeId(victim)==7||Entity.getEntityTypeId(victim)==8||Entity.getEntityTypeId(victim)==9||Entity.getEntityTypeId(victim)==10||Entity.getEntityTypeId(victim)==11||Entity.getEntityTypeId(victim)==12||Entity.getEntityTypeId(victim)==13||Entity.getEntityTypeId(victim)==14||Entity.getEntityTypeId(victim)==15||Entity.getEntityTypeId(victim)==16||Entity.getEntityTypeId(victim)==17||Entity.getEntityTypeId(victim)==18||Entity.getEntityTypeId(victim)==19||Entity.getEntityTypeId(victim)==20||Entity.getEntityTypeId(victim)==21||Entity.getEntityTypeId(victim)==22||Entity.getEntityTypeId(victim)==23||Entity.getEntityTypeId(victim)==24||Entity.getEntityTypeId(victim)==25||Entity.getEntityTypeId(victim)==26||Entity.getEntityTypeId(victim)==27||Entity.getEntityTypeId(victim)==28||Entity.getEntityTypeId(victim)==29||Entity.getEntityTypeId(victim)==30||Entity.getEntityTypeId(victim)==31||Entity.getEntityTypeId(victim)==32||Entity.getEntityTypeId(victim)==33||Entity.getEntityTypeId(victim)==34||Entity.getEntityTypeId(victim)==35||Entity.getEntityTypeId(victim)==36||Entity.getEntityTypeId(victim)==37||Entity.getEntityTypeId(victim)==38||Entity.getEntityTypeId(victim)==39||Entity.getEntityTypeId(victim)==40){
			preventDefault();
		}}else if (selecteditem == 396) {
		    Entity.setMobSkin(victim,"mob/purple.png");
			if(gamemode == 0){
			Entity.setCarriedItem(attacker, 396, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
			if(Player.getCarriedItemData() > 10){
			Entity.setCarriedItem(attacker, 396, Player.getCarriedItemCount() - 1);
			Player.addItemInventory(437,1,0);
			}}else if (Entity.getEntityTypeId(victim)==1||Entity.getEntityTypeId(victim)==2||Entity.getEntityTypeId(victim)==3||Entity.getEntityTypeId(victim)==4||Entity.getEntityTypeId(victim)==5||Entity.getEntityTypeId(victim)==6||Entity.getEntityTypeId(victim)==7||Entity.getEntityTypeId(victim)==8||Entity.getEntityTypeId(victim)==9||Entity.getEntityTypeId(victim)==10||Entity.getEntityTypeId(victim)==11||Entity.getEntityTypeId(victim)==12||Entity.getEntityTypeId(victim)==13||Entity.getEntityTypeId(victim)==14||Entity.getEntityTypeId(victim)==15||Entity.getEntityTypeId(victim)==16||Entity.getEntityTypeId(victim)==17||Entity.getEntityTypeId(victim)==18||Entity.getEntityTypeId(victim)==19||Entity.getEntityTypeId(victim)==20||Entity.getEntityTypeId(victim)==21||Entity.getEntityTypeId(victim)==22||Entity.getEntityTypeId(victim)==23||Entity.getEntityTypeId(victim)==24||Entity.getEntityTypeId(victim)==25||Entity.getEntityTypeId(victim)==26||Entity.getEntityTypeId(victim)==27||Entity.getEntityTypeId(victim)==28||Entity.getEntityTypeId(victim)==29||Entity.getEntityTypeId(victim)==30||Entity.getEntityTypeId(victim)==31||Entity.getEntityTypeId(victim)==32||Entity.getEntityTypeId(victim)==33||Entity.getEntityTypeId(victim)==34||Entity.getEntityTypeId(victim)==35||Entity.getEntityTypeId(victim)==36||Entity.getEntityTypeId(victim)==37||Entity.getEntityTypeId(victim)==38||Entity.getEntityTypeId(victim)==39||Entity.getEntityTypeId(victim)==40){
			preventDefault();
		}}else if (selecteditem == 397) {
		    Entity.setMobSkin(victim,"mob/blue.png");
			if(gamemode == 0){
			Entity.setCarriedItem(attacker, 397, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
			if(Player.getCarriedItemData() > 10){
			Entity.setCarriedItem(attacker, 397, Player.getCarriedItemCount() - 1);
			Player.addItemInventory(437,1,0);
			}}else if (Entity.getEntityTypeId(victim)==1||Entity.getEntityTypeId(victim)==2||Entity.getEntityTypeId(victim)==3||Entity.getEntityTypeId(victim)==4||Entity.getEntityTypeId(victim)==5||Entity.getEntityTypeId(victim)==6||Entity.getEntityTypeId(victim)==7||Entity.getEntityTypeId(victim)==8||Entity.getEntityTypeId(victim)==9||Entity.getEntityTypeId(victim)==10||Entity.getEntityTypeId(victim)==11||Entity.getEntityTypeId(victim)==12||Entity.getEntityTypeId(victim)==13||Entity.getEntityTypeId(victim)==14||Entity.getEntityTypeId(victim)==15||Entity.getEntityTypeId(victim)==16||Entity.getEntityTypeId(victim)==17||Entity.getEntityTypeId(victim)==18||Entity.getEntityTypeId(victim)==19||Entity.getEntityTypeId(victim)==20||Entity.getEntityTypeId(victim)==21||Entity.getEntityTypeId(victim)==22||Entity.getEntityTypeId(victim)==23||Entity.getEntityTypeId(victim)==24||Entity.getEntityTypeId(victim)==25||Entity.getEntityTypeId(victim)==26||Entity.getEntityTypeId(victim)==27||Entity.getEntityTypeId(victim)==28||Entity.getEntityTypeId(victim)==29||Entity.getEntityTypeId(victim)==30||Entity.getEntityTypeId(victim)==31||Entity.getEntityTypeId(victim)==32||Entity.getEntityTypeId(victim)==33||Entity.getEntityTypeId(victim)==34||Entity.getEntityTypeId(victim)==35||Entity.getEntityTypeId(victim)==36||Entity.getEntityTypeId(victim)==37||Entity.getEntityTypeId(victim)==38||Entity.getEntityTypeId(victim)==39||Entity.getEntityTypeId(victim)==40){
			preventDefault();
		}}else if (selecteditem == 410) {
		    Entity.setMobSkin(victim,"mob/brown.png");
			if(gamemode == 0){
			Entity.setCarriedItem(attacker, 410, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
			if(Player.getCarriedItemData() > 10){
			Entity.setCarriedItem(attacker, 410, Player.getCarriedItemCount() - 1);
			Player.addItemInventory(437,1,0);
			}}else if (Entity.getEntityTypeId(victim)==1||Entity.getEntityTypeId(victim)==2||Entity.getEntityTypeId(victim)==3||Entity.getEntityTypeId(victim)==4||Entity.getEntityTypeId(victim)==5||Entity.getEntityTypeId(victim)==6||Entity.getEntityTypeId(victim)==7||Entity.getEntityTypeId(victim)==8||Entity.getEntityTypeId(victim)==9||Entity.getEntityTypeId(victim)==10||Entity.getEntityTypeId(victim)==11||Entity.getEntityTypeId(victim)==12||Entity.getEntityTypeId(victim)==13||Entity.getEntityTypeId(victim)==14||Entity.getEntityTypeId(victim)==15||Entity.getEntityTypeId(victim)==16||Entity.getEntityTypeId(victim)==17||Entity.getEntityTypeId(victim)==18||Entity.getEntityTypeId(victim)==19||Entity.getEntityTypeId(victim)==20||Entity.getEntityTypeId(victim)==21||Entity.getEntityTypeId(victim)==22||Entity.getEntityTypeId(victim)==23||Entity.getEntityTypeId(victim)==24||Entity.getEntityTypeId(victim)==25||Entity.getEntityTypeId(victim)==26||Entity.getEntityTypeId(victim)==27||Entity.getEntityTypeId(victim)==28||Entity.getEntityTypeId(victim)==29||Entity.getEntityTypeId(victim)==30||Entity.getEntityTypeId(victim)==31||Entity.getEntityTypeId(victim)==32||Entity.getEntityTypeId(victim)==33||Entity.getEntityTypeId(victim)==34||Entity.getEntityTypeId(victim)==35||Entity.getEntityTypeId(victim)==36||Entity.getEntityTypeId(victim)==37||Entity.getEntityTypeId(victim)==38||Entity.getEntityTypeId(victim)==39||Entity.getEntityTypeId(victim)==40){
			preventDefault();
		}}else if (selecteditem == 399) {
		    Entity.setMobSkin(victim,"mob/green.png");
			if(gamemode == 0){
			Entity.setCarriedItem(attacker, 399, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
			if(Player.getCarriedItemData() > 10){
			Entity.setCarriedItem(attacker, 399, Player.getCarriedItemCount() - 1);
			Player.addItemInventory(437,1,0);
			}}else if (Entity.getEntityTypeId(victim)==1||Entity.getEntityTypeId(victim)==2||Entity.getEntityTypeId(victim)==3||Entity.getEntityTypeId(victim)==4||Entity.getEntityTypeId(victim)==5||Entity.getEntityTypeId(victim)==6||Entity.getEntityTypeId(victim)==7||Entity.getEntityTypeId(victim)==8||Entity.getEntityTypeId(victim)==9||Entity.getEntityTypeId(victim)==10||Entity.getEntityTypeId(victim)==11||Entity.getEntityTypeId(victim)==12||Entity.getEntityTypeId(victim)==13||Entity.getEntityTypeId(victim)==14||Entity.getEntityTypeId(victim)==15||Entity.getEntityTypeId(victim)==16||Entity.getEntityTypeId(victim)==17||Entity.getEntityTypeId(victim)==18||Entity.getEntityTypeId(victim)==19||Entity.getEntityTypeId(victim)==20||Entity.getEntityTypeId(victim)==21||Entity.getEntityTypeId(victim)==22||Entity.getEntityTypeId(victim)==23||Entity.getEntityTypeId(victim)==24||Entity.getEntityTypeId(victim)==25||Entity.getEntityTypeId(victim)==26||Entity.getEntityTypeId(victim)==27||Entity.getEntityTypeId(victim)==28||Entity.getEntityTypeId(victim)==29||Entity.getEntityTypeId(victim)==30||Entity.getEntityTypeId(victim)==31||Entity.getEntityTypeId(victim)==32||Entity.getEntityTypeId(victim)==33||Entity.getEntityTypeId(victim)==34||Entity.getEntityTypeId(victim)==35||Entity.getEntityTypeId(victim)==36||Entity.getEntityTypeId(victim)==37||Entity.getEntityTypeId(victim)==38||Entity.getEntityTypeId(victim)==39||Entity.getEntityTypeId(victim)==40){
			preventDefault();
		}}else if (selecteditem == 322) {
		    Entity.setMobSkin(victim,"mob/red.png");
			if(gamemode == 0){
			Entity.setCarriedItem(attacker, 322, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
			if(Player.getCarriedItemData() > 10){
			Entity.setCarriedItem(attacker, 322, Player.getCarriedItemCount() - 1);
			Player.addItemInventory(437,1,0);
			}}else if (Entity.getEntityTypeId(victim)==1||Entity.getEntityTypeId(victim)==2||Entity.getEntityTypeId(victim)==3||Entity.getEntityTypeId(victim)==4||Entity.getEntityTypeId(victim)==5||Entity.getEntityTypeId(victim)==6||Entity.getEntityTypeId(victim)==7||Entity.getEntityTypeId(victim)==8||Entity.getEntityTypeId(victim)==9||Entity.getEntityTypeId(victim)==10||Entity.getEntityTypeId(victim)==11||Entity.getEntityTypeId(victim)==12||Entity.getEntityTypeId(victim)==13||Entity.getEntityTypeId(victim)==14||Entity.getEntityTypeId(victim)==15||Entity.getEntityTypeId(victim)==16||Entity.getEntityTypeId(victim)==17||Entity.getEntityTypeId(victim)==18||Entity.getEntityTypeId(victim)==19||Entity.getEntityTypeId(victim)==20||Entity.getEntityTypeId(victim)==21||Entity.getEntityTypeId(victim)==22||Entity.getEntityTypeId(victim)==23||Entity.getEntityTypeId(victim)==24||Entity.getEntityTypeId(victim)==25||Entity.getEntityTypeId(victim)==26||Entity.getEntityTypeId(victim)==27||Entity.getEntityTypeId(victim)==28||Entity.getEntityTypeId(victim)==29||Entity.getEntityTypeId(victim)==30||Entity.getEntityTypeId(victim)==31||Entity.getEntityTypeId(victim)==32||Entity.getEntityTypeId(victim)==33||Entity.getEntityTypeId(victim)==34||Entity.getEntityTypeId(victim)==35||Entity.getEntityTypeId(victim)==36||Entity.getEntityTypeId(victim)==37||Entity.getEntityTypeId(victim)==38||Entity.getEntityTypeId(victim)==39||Entity.getEntityTypeId(victim)==40){
			preventDefault();
		}}else if (selecteditem == 326) {
		    Entity.setMobSkin(victim,"mob/black.png");
			if(gamemode == 0){
			Entity.setCarriedItem(attacker, 326, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
			if(Player.getCarriedItemData() > 10){
			Entity.setCarriedItem(attacker, 326, Player.getCarriedItemCount() - 1);
			Player.addItemInventory(437,1,0);
		    }}else if (Entity.getEntityTypeId(victim)==1||Entity.getEntityTypeId(victim)==2||Entity.getEntityTypeId(victim)==3||Entity.getEntityTypeId(victim)==4||Entity.getEntityTypeId(victim)==5||Entity.getEntityTypeId(victim)==6||Entity.getEntityTypeId(victim)==7||Entity.getEntityTypeId(victim)==8||Entity.getEntityTypeId(victim)==9||Entity.getEntityTypeId(victim)==10||Entity.getEntityTypeId(victim)==11||Entity.getEntityTypeId(victim)==12||Entity.getEntityTypeId(victim)==13||Entity.getEntityTypeId(victim)==14||Entity.getEntityTypeId(victim)==15||Entity.getEntityTypeId(victim)==16||Entity.getEntityTypeId(victim)==17||Entity.getEntityTypeId(victim)==18||Entity.getEntityTypeId(victim)==19||Entity.getEntityTypeId(victim)==20||Entity.getEntityTypeId(victim)==21||Entity.getEntityTypeId(victim)==22||Entity.getEntityTypeId(victim)==23||Entity.getEntityTypeId(victim)==24||Entity.getEntityTypeId(victim)==25||Entity.getEntityTypeId(victim)==26||Entity.getEntityTypeId(victim)==27||Entity.getEntityTypeId(victim)==28||Entity.getEntityTypeId(victim)==29||Entity.getEntityTypeId(victim)==30||Entity.getEntityTypeId(victim)==31||Entity.getEntityTypeId(victim)==32||Entity.getEntityTypeId(victim)==33||Entity.getEntityTypeId(victim)==34||Entity.getEntityTypeId(victim)==35||Entity.getEntityTypeId(victim)==36||Entity.getEntityTypeId(victim)==37||Entity.getEntityTypeId(victim)==38||Entity.getEntityTypeId(victim)==39||Entity.getEntityTypeId(victim)==40){
			preventDefault();
    }}}};

function useItem(x,y,z,i,b) {
var gamemode = Level.getGameMode();
if(i == 394) {
if(b == 35) {
Level.setTile(x,y,z,35,0);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 394, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 394, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 171){
Level.setTile(x,y,z,171,0)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 394, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 394, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 5||b == 176||b == 177||b == 178||b == 179||b == 180||b == 181||b == 182||b == 193||b == 194||b == 195||b == 196||b == 197||b == 198||b == 199||b == 200){
Level.setTile(x,y,z,5,0)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 394, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 394, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 19||b == 216||b == 217||b == 218||b == 219||b == 220||b == 221||b == 222||b == 223||b == 224||b == 225||b == 226||b == 227||b == 228||b == 229||b == 230){
Level.setTile(x,y,z,19,0)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 394, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 394, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else {
Level.setTile(x,y,z,159,0)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 394, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 394, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);

}}}}else if(i == 510) {
if(b == 35) {
Level.setTile(x,y,z,35,1);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 510, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 510, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 171){
Level.setTile(x,y,z,171,1)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 510, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 510, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 5||b == 176||b == 177||b == 178||b == 179||b == 180||b == 181||b == 182||b == 193||b == 194||b == 195||b == 196||b == 197||b == 198||b == 199||b == 200){
Level.setTile(x,y,z,176,0)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 510, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 510, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 19||b == 216||b == 217||b == 218||b == 219||b == 220||b == 221||b == 222||b == 223||b == 224||b == 225||b == 226||b == 227||b == 228||b == 229||b == 230){
Level.setTile(x,y,z,216,0)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 510, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 510, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else {
Level.setTile(x,y,z,159,1)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 510, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 510, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);

}}}}else if(i == 511) {
if(b == 35) {
Level.setTile(x,y,z,35,2);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 511, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 511, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 171){
Level.setTile(x,y,z,171,2);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 511, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 511, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 5||b == 176||b == 177||b == 178||b == 179||b == 180||b == 181||b == 182||b == 193||b == 194||b == 195||b == 196||b == 197||b == 198||b == 199||b == 200){
Level.setTile(x,y,z,177,0);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 511, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 511, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 19||b == 216||b == 217||b == 218||b == 219||b == 220||b == 221||b == 222||b == 223||b == 224||b == 225||b == 226||b == 227||b == 228||b == 229||b == 230){
Level.setTile(x,y,z,217,0);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 510, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 510, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else {
Level.setTile(x,y,z,159,2);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 511, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 511, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);

}}}}else if(i == 509) {
if(b == 35) {
Level.setTile(x,y,z,35,3);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 509, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 509, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 171){
Level.setTile(x,y,z,171,3);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 509, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 509, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 5||b == 176||b == 177||b == 178||b == 179||b == 180||b == 181||b == 182||b == 193||b == 194||b == 195||b == 196||b == 197||b == 198||b == 199||b == 200){
Level.setTile(x,y,z,178,0);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 509, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 509, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 19||b == 216||b == 217||b == 218||b == 219||b == 220||b == 221||b == 222||b == 223||b == 224||b == 225||b == 226||b == 227||b == 228||b == 229||b == 230){
Level.setTile(x,y,z,218,0);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 507, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 507, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else {
Level.setTile(x,y,z,159,3);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 509, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 509, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);

}}}}else if(i == 508) {
if(b == 35) {
Level.setTile(x,y,z,35,4);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 508, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 508, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 171){
Level.setTile(x,y,z,171,4);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 508, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 508, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 5||b == 176||b == 177||b == 178||b == 179||b == 180||b == 181||b == 182||b == 193||b == 194||b == 195||b == 196||b == 197||b == 198||b == 199||b == 200){
Level.setTile(x,y,z,179,0);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 508, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 508, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 19||b == 216||b == 217||b == 218||b == 219||b == 220||b == 221||b == 222||b == 223||b == 224||b == 225||b == 226||b == 227||b == 228||b == 229||b == 230){
Level.setTile(x,y,z,219,0);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 508, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 508, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else {
Level.setTile(x,y,z,159,4);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 508, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 508, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);

}}}}else if(i == 507) {
if(b == 35) {
Level.setTile(x,y,z,35,5);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 507, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 507, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 171){
Level.setTile(x,y,z,171,5);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 507, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 507, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 5||b == 176||b == 177||b == 178||b == 179||b == 180||b == 181||b == 182||b == 193||b == 194||b == 195||b == 196||b == 197||b == 198||b == 199||b == 200){
Level.setTile(x,y,z,180,0)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 507, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 507, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 19||b == 216||b == 217||b == 218||b == 219||b == 220||b == 221||b == 222||b == 223||b == 224||b == 225||b == 226||b == 227||b == 228||b == 229||b == 230){
Level.setTile(x,y,z,220,0)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 507, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 507, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else {
Level.setTile(x,y,z,159,5);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 507, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 507, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);

}}}}else if(i == 401) {
if(b == 35) {
Level.setTile(x,y,z,35,6);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 401, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 401, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 171){
Level.setTile(x,y,z,171,6);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 401, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 401, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 5||b == 176||b == 177||b == 178||b == 179||b == 180||b == 181||b == 182||b == 193||b == 194||b == 195||b == 196||b == 197||b == 198||b == 199||b == 200){
Level.setTile(x,y,z,181,0);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 401, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 401, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 19||b == 216||b == 217||b == 218||b == 219||b == 220||b == 221||b == 222||b == 223||b == 224||b == 225||b == 226||b == 227||b == 228||b == 229||b == 230){
Level.setTile(x,y,z,221,0)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 401, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 401, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else {
Level.setTile(x,y,z,159,6);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 401, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 401, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);

}}}}else if(i == 402) {
if(b == 35) {
Level.setTile(x,y,z,35,7);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 402, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 402, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 171){
Level.setTile(x,y,z,171,7)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 402, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 402, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 5||b == 176||b == 177||b == 178||b == 179||b == 180||b == 181||b == 182||b == 193||b == 194||b == 195||b == 196||b == 197||b == 198||b == 199||b == 200){
Level.setTile(x,y,z,182,0)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 402, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 402, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 19||b == 216||b == 217||b == 218||b == 219||b == 220||b == 221||b == 222||b == 223||b == 224||b == 225||b == 226||b == 227||b == 228||b == 229||b == 230){
Level.setTile(x,y,z,222,0)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 402, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 402, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else {
Level.setTile(x,y,z,159,7)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 402, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 402, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);

}}}}else if(i == 403) {
if(b == 35) {
Level.setTile(x,y,z,35,8);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 403, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 403, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 171){
Level.setTile(x,y,z,171,8)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 403, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 403, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 5||b == 176||b == 177||b == 178||b == 179||b == 180||b == 181||b == 182||b == 193||b == 194||b == 195||b == 196||b == 197||b == 198||b == 199||b == 200){
Level.setTile(x,y,z,193,0)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 403, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 403, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 19||b == 216||b == 217||b == 218||b == 219||b == 220||b == 221||b == 222||b == 223||b == 224||b == 225||b == 226||b == 227||b == 228||b == 229||b == 230){
Level.setTile(x,y,z,223,0)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 403, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 403, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else {
Level.setTile(x,y,z,159,8)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 403, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 403, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);

}}}}else if(i == 395) {
if(b == 35) {
Level.setTile(x,y,z,35,9);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 395, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 395, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 171){
Level.setTile(x,y,z,171,9)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 395, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 395, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 5||b == 176||b == 177||b == 178||b == 179||b == 180||b == 181||b == 182||b == 193||b == 194||b == 195||b == 196||b == 197||b == 198||b == 199||b == 200){
Level.setTile(x,y,z,194,0)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 395, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 395, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 19||b == 216||b == 217||b == 218||b == 219||b == 220||b == 221||b == 222||b == 223||b == 224||b == 225||b == 226||b == 227||b == 228||b == 229||b == 230){
Level.setTile(x,y,z,224,0)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 395, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 395, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
/*}}}else if(b == 66||b == 27){
clientMessage("Rails can't be painted, sorry");*/
}}}else {
Level.setTile(x,y,z,159,9)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 395, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 395, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);

}}}}else if(i == 396) {
if(b == 35) {
Level.setTile(x,y,z,35,10);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 396, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 396, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 171){
Level.setTile(x,y,z,171,10)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 396, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 396, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 5||b == 176||b == 177||b == 178||b == 179||b == 180||b == 181||b == 182||b == 193||b == 194||b == 195||b == 196||b == 197||b == 198||b == 199||b == 200){
Level.setTile(x,y,z,195,0)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 396, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 396, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 19||b == 216||b == 217||b == 218||b == 219||b == 220||b == 221||b == 222||b == 223||b == 224||b == 225||b == 226||b == 227||b == 228||b == 229||b == 230){
Level.setTile(x,y,z,225,0)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 396, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 396, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else {
Level.setTile(x,y,z,159,10)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 396, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 396, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);

}}}}else if(i == 397) {
if(b == 35) {
Level.setTile(x,y,z,35,11);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 397, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 397, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 171){
Level.setTile(x,y,z,171,11)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 397, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 397, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 5||b == 176||b == 177||b == 178||b == 179||b == 180||b == 181||b == 182||b == 193||b == 194||b == 195||b == 196||b == 197||b == 198||b == 199||b == 200){
Level.setTile(x,y,z,196,0)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 397, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 397, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 19||b == 216||b == 217||b == 218||b == 219||b == 220||b == 221||b == 222||b == 223||b == 224||b == 225||b == 226||b == 227||b == 228||b == 229||b == 230){
Level.setTile(x,y,z,226,0)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 397, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 397, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else {
Level.setTile(x,y,z,159,11)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 397, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 397, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);

}}}}else if(i == 410) {
if(b == 35) {
Level.setTile(x,y,z,35,12);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 410, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 410, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 171){
Level.setTile(x,y,z,171,12);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 410, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 410, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 5||b == 176||b == 177||b == 178||b == 179||b == 180||b == 181||b == 182||b == 193||b == 194||b == 195||b == 196||b == 197||b == 198||b == 199||b == 200){
Level.setTile(x,y,z,197,0);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 410, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 410, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 19||b == 216||b == 217||b == 218||b == 219||b == 220||b == 221||b == 222||b == 223||b == 224||b == 225||b == 226||b == 227||b == 228||b == 229||b == 230){
Level.setTile(x,y,z,227,0);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 410, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 410, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else {
Level.setTile(x,y,z,159,12);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 410, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 410, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);

}}}}else if(i == 399) {
if(b == 35) {
Level.setTile(x,y,z,35,13);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 399, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 399, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 171){
Level.setTile(x,y,z,171,13);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 399, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 399, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 5||b == 176||b == 177||b == 178||b == 179||b == 180||b == 181||b == 182||b == 193||b == 194||b == 195||b == 196||b == 197||b == 198||b == 199||b == 200){
Level.setTile(x,y,z,198,0);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 399, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 399, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 19||b == 216||b == 217||b == 218||b == 219||b == 220||b == 221||b == 222||b == 223||b == 224||b == 225||b == 226||b == 227||b == 228||b == 229||b == 230){
Level.setTile(x,y,z,228,0)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 399, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 399, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else {
Level.setTile(x,y,z,159,13);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 399, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 399, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);

}}}}else if(i == 322) {
if(b == 35) {
Level.setTile(x,y,z,35,14);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 322, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 322, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 171){
Level.setTile(x,y,z,171,14)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 322, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 322, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 5||b == 176||b == 177||b == 178||b == 179||b == 180||b == 181||b == 182||b == 193||b == 194||b == 195||b == 196||b == 197||b == 198||b == 199||b == 200){
Level.setTile(x,y,z,199,0)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 322, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 322, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 19||b == 216||b == 217||b == 218||b == 219||b == 220||b == 221||b == 222||b == 223||b == 224||b == 225||b == 226||b == 227||b == 228||b == 229||b == 230){
Level.setTile(x,y,z,229,0)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 322, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 322, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else {
Level.setTile(x,y,z,159,14)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 322, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 322, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);

}}}}else if(i == 326) {
if(b == 35) {
Level.setTile(x,y,z,35,15);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 326, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 326, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 171){
Level.setTile(x,y,z,171,15);
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 326, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 326, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 5||b == 176||b == 177||b == 178||b == 179||b == 180||b == 181||b == 182||b == 193||b == 194||b == 195||b == 196||b == 197||b == 198||b == 199||b == 200){
Level.setTile(x,y,z,200,0)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 326, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 326, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else if(b == 19||b == 216||b == 217||b == 218||b == 219||b == 220||b == 221||b == 222||b == 223||b == 224||b == 225||b == 226||b == 227||b == 228||b == 229||b == 230){
Level.setTile(x,y,z,230,0)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 326, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 326, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else {
Level.setTile(x,y,z,159,15)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 326, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 326, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}}};

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
//Mod version: 2.0
//For full changelog, do /changelog paintmodpe

//*Ideas*
//---------
//If you have any ideas for this mod, please send them to my MC-Forum account, or on Twitter: @AgameR_Modder
