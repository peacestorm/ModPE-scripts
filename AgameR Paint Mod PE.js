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
			 builder.setMessage("You're using a beta build of AgameR Paint Mod PE. Please report bugs.");
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

    */
	if(initialized == false){
		clientMessage(ChatColor.GREEN+"AgameR Paint Mod PE"+ChatColor.RED+" 1.3.1 "+ChatColor.WHITE+"by peacestorm initialized");
		initialized = true;
	}else if(initialized == true){
		clientMessage(ChatColor.GREEN+"AgameR Paint Mod PE"+ChatColor.RED+" 1.3.1 "+ChatColor.WHITE+"by peacestorm");
	}
};

function modTick() {
//ModPE.showTipMessage("AgameR Paint Mod PE 1.3 Build X");
};

function procCmd(cmd) {
    cmd = cmd.toLowerCase();
    if (cmd == "changelog paintmodpe"){
        clientMessage("AgameR Paint Mod PE Changelog - 1.0: Initial release | 1.1: Added crafting recipes | 1.2: Paint any block you want, fixed item id conflict with the TooManyItems addon, added a new crafting recipe for the white paint brush | 1.2.1: Used paintbrushes will now turn into empty paintbrushes in survival; Added an easter egg | 1.2.2: Removed survival functionalities introduced in 1.2.1 due to crashes; Fixed some things | 1.2.3: Added a new and improved survival system; Fixed bugs | 1.3: Added carpet painting; Some improvements | 1.3.1: Painting mobs no longer damages them; Some improvements");
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
Level.setTile(x,y,z,171,2)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 511, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 511, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else {
Level.setTile(x,y,z,159,2)
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
Level.setTile(x,y,z,171,3)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 509, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 509, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else {
Level.setTile(x,y,z,159,3)
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
Level.setTile(x,y,z,171,4)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 508, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 508, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else {
Level.setTile(x,y,z,159,4)
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
Level.setTile(x,y,z,171,5)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 507, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 507, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else {
Level.setTile(x,y,z,159,5)
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
Level.setTile(x,y,z,171,6)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 401, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 401, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else {
Level.setTile(x,y,z,159,6)
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
Level.setTile(x,y,z,171,12)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 410, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 410, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else {
Level.setTile(x,y,z,159,12)
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
Level.setTile(x,y,z,171,13)
if(gamemode == 0){
Entity.setCarriedItem(Player.getEntity(), 399, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
if(Player.getCarriedItemData() > 10){
Entity.setCarriedItem(Player.getEntity(), 399, Player.getCarriedItemCount() - 1);
Player.addItemInventory(437,1,0);
}}}else {
Level.setTile(x,y,z,159,13)
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
Level.setTile(x,y,z,171,15)
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
//Betatester: Ethan061903

//*Mod info*
//------------
//Mod version: 1.3.1
//For full changelog, do /changelog paintmodpe

//*Ideas*
//---------
//If you have any ideas for this mod, please send them to my MC-Forum account, or on Twitter: @AgameR_Modder
