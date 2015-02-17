/*Config (change default settings)*/ 
var theme = "MCPE"; //<-- Default theme; All themes: Alternative, MCPE

/*Todo:
Add themes [MCPE (added),TRANSPARENT (beta 4,5?),ANDROID (beta 4,5?)]
Add more hacks
Add heal/kill button (will maybe be added in beta 4 or 5)
Save theme and other options
*/

ModPE.setFoodItem(256,"shovel",2,9999,"Iron Shovel [EATABLE]");
ModPE.setFoodItem(257,"pickaxe",2,9999,"Iron Pickaxe [EATABLE]");
ModPE.setFoodItem(258,"axe",2,9999,"Iron Axe [EATABLE]");
ModPE.setFoodItem(259,"flint_and_steel",0,9999,"Flint and Steel [EATABLE]");
ModPE.setFoodItem(262,"arrow",0,9999,"Arrow [EATABLE]");
ModPE.setFoodItem(263,"coal",0,9999,"Coal [EATABLE]");
ModPE.setFoodItem(264,"diamond",0,9999,"Diamond [EATABLE]");
ModPE.setFoodItem(265,"iron_ingot",0,9999,"Iron Ingot [EATABLE]");
ModPE.setFoodItem(266,"gold_ingot",0,9999,"Gold Ingot [EATABLE]");
ModPE.setFoodItem(267,"sword",2,9999,"Iron Sword [EATABLE]");
ModPE.setFoodItem(268,"sword",0,9999,"Wooden Sword [EATABLE]");
ModPE.setFoodItem(269,"shovel",0,9999,"Wooden Shovel [EATABLE]");
ModPE.setFoodItem(270,"pickaxe",0,9999,"Wooden Pickaxe [EATABLE]");
ModPE.setFoodItem(271,"axe",0,9999,"Wooden Axe [EATABLE]");
ModPE.setFoodItem(272,"sword",1,9999,"Stone Sword [EATABLE]");
ModPE.setFoodItem(273,"shovel",1,9999,"Stone Shovel [EATABLE]");
ModPE.setFoodItem(274,"pickaxe",1,9999,"Stone Pickaxe [EATABLE]");
ModPE.setFoodItem(275,"axe",1,9999,"Stone Axe [EATABLE]");
ModPE.setFoodItem(276,"sword",4,9999,"Diamond Sword [EATABLE]");
ModPE.setFoodItem(277,"shovel",4,9999,"Diamond Shovel [EATABLE]");
ModPE.setFoodItem(278,"pickaxe",4,9999,"Diamond Pickaxe [EATABLE]");
ModPE.setFoodItem(279,"axe",4,9999,"Diamond Axe [EATABLE]");
ModPE.setFoodItem(280,"stick",0,9999,"Stick [EATABLE]");
ModPE.setFoodItem(281,"bowl",0,9999,"Bowl [EATABLE]");
ModPE.setFoodItem(283,"sword",3,9999,"Golden Sword [EATABLE]");
ModPE.setFoodItem(284,"shovel",3,9999,"Golden Shovel [EATABLE]");
ModPE.setFoodItem(285,"pickaxe",3,9999,"Golden Pickaxe [EATABLE]");
ModPE.setFoodItem(286,"axe",3,9999,"Golden Axe [EATABLE]");
ModPE.setFoodItem(287,"string",0,9999,"String [EATABLE]");
ModPE.setFoodItem(288,"feather",0,9999,"Feather [EATABLE]");
ModPE.setFoodItem(289,"gunpowder",0,9999,"Gunpowder [EATABLE]");
ModPE.setFoodItem(290,"hoe",0,9999,"Wooden Hoe [EATABLE]");
ModPE.setFoodItem(291,"hoe",1,9999,"Stone Hoe [EATABLE]");
ModPE.setFoodItem(292,"hoe",2,9999,"Iron Hoe [EATABLE]");
ModPE.setFoodItem(293,"hoe",4,9999,"Diamond Hoe [EATABLE]");
ModPE.setFoodItem(294,"hoe",3,9999,"Golden Hoe [EATABLE]");
ModPE.setFoodItem(359,"shears",0,9999,"Shears [EATABLE]");

/*OptiFine things*/
Block.defineBlock(2,"Grass Block",[["dirt",0],["grass",2],["grass",2],["grass",2],["grass",2],["grass",2]],0);
/*---------------*/

var path = android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang";
var settingsIcon = " iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAIAAADZrBkAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAAFCSURBVDhPlY7/SsJQFMfvq+zeu102386BN/slxtpIW39EQaRoYCWK0JaVlQQhPoCB/qUPEdQDdO7OtihoLvbh8N0557MzMn0arhZvyHIxW85naVZ1rjrYT6e+7ysN+B7gduKsooDgDjimsMj0WWmNupsTUxRMA7To2q9ZBkpT1xKtGXUzKgY4ZYnCv67tQwUHDpLJYzgZhY2ac15zsisCf6iuvT4EwJlXzYkwLKGb5GU4AE6cyqlT+fx4B7KzMITQDTIOeuOgf1zdBnD8Z95TWeeGwQUZDbrA0U45F7tlTnXOdHLX69z3O/XN0nq2VKWUM8ZJeN2+7V4cbNi5kDbVOKOcBFetm8uWWyrmhGmMajTWPFn0pJ1dUQMHTKUB6cfWkl5rSynxhVEG4WemaYagMmrNQxffsRXvJUtpPw7wQNDoF3gj74+Vc8xUAAAAAElFTkSuQmCC ";
var mcpeButtonIcon = " iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAABhSURBVEhLY9izcTVNEW0tKExNB1kwta2RRkhDXYvGFqhpDnUf0N6C0SAigEZTEUE0mooIotFURBCNpiKCaDQVEUSjqYggGk1FBBEoFRWlpgNDCsgCIy0EwhTErwyrrLoWAI4KV9f/jHdkAAAAAElFTkSuQmCC ";
var mcpeExitButtonIcon = " iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAAHMSURBVDhPjZDbSgJRFIb3qzgHx3oE38nCySxRyvJQGIFk2IUJBuLUdDQC6XBfN3XVCxgk5Eus1loza9weggY+9t7/+te/1x71fOfD5/tbwEe4/snrAu0NqtUqcNBL/3Kh4T9QSMJZAkUhL30fjsvbTCNcdUgTZj0JZ5kJJ/LnzEylONcomkDTJOI8kQ8UFpiC4s/3kOGz1jgeDWGMun4hhfBEFETP4wI2SkgUFjbQnoJEj4LkaU+35/CIHJW2oIGIURrHo68pTXTxR08bXHswuO5BfbcA9Z08JJPJ6aaZlSAP+xHHTjDqwe8CcbiVi5AwvVnOVNO9ju0w6t7rQL/XgYPCBlMrZHmV/0FPY8KwWj47Ab1xywHbioO66baB2NvMMPu5TBigTRKG8R4hj3gt0wbLsEFdnbXgstOCStaF8no6aoxCFpxprWTT7DcMi1EX7RM4R0prq7Drrga3a830Twh9QoK8hBGzwESUd9oED4OK6RQjP1pCiu4KbC/QSSu6KTANk1Fem4KaXBDIKOagYRI2radwIgMnwqAeT9RkUYpi1Bsm+yCU9wiFBBNhkOu6QTIKcgOPjOusrp91TdEXNYbNUtSNs7qOGTPhF1U7V2AcJE8CAAAAAElFTkSuQmCC "

Base64Decode(android.util.Base64.decode(settingsIcon, 0), path + "/settings.png");
Base64Decode(android.util.Base64.decode(mcpeButtonIcon, 0), path + "/mcpebutton.png");
Base64Decode(android.util.Base64.decode(mcpeExitButtonIcon, 0), path + "/mcpeexitbutton.png");

function Base64Decode(byteArray, Path) {
    try {
        var File = new java.io.File(Path);
        if (!File.exists()) {
            File.createNewFile();
            var Stream = new java.io.FileOutputStream(File);
            Stream.write(byteArray);
            Stream.close();
        }
    } catch (err) {
        print(err);
    }
}

var GUI;
var menu;
var exitUI;

var sBtn = new android.graphics.BitmapFactory.decodeFile(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/settings.png");
var mcpeBtn = new android.graphics.BitmapFactory.decodeFile(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/mcpebutton.png");
var mcpeExitBtn = new android.graphics.BitmapFactory.decodeFile(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/mcpeexitbutton.png");

var settingsButton = new android.graphics.drawable.BitmapDrawable(sBtn);
var mcpeButtonImage = new android.graphics.drawable.BitmapDrawable(mcpeBtn);
var mcpeExitButtonImage = new android.graphics.drawable.BitmapDrawable(mcpeExitBtn);

var State = false;
var State1 = false;
var State2 = false;
var State3 = false;
var State4 = false;
var State5 = false;
var State6 = false;
var optionsState = false;

function leaveGame(){
	State = false;
	State1 = false;
	State2 = false;
	State3 = false;
	State4 = false;
	State5 = false;
	State6 = false;
	closeMenu();
}

function dip2px(dips){
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}
//Add menu button
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
try{
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var menuBtn = new android.widget.Button(ctx);
menuBtn.setBackgroundDrawable(settingsButton);
menuBtn.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg){
mainMenu();
exit();
}
}));
layout.addView(menuBtn);

GUI = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 90, 0);
}catch(err){
print('An error occured: ' + err);
}
}}));

function mainMenu(){
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
try{
var menuLayout = new android.widget.LinearLayout(ctx);
var menuScroll = new android.widget.ScrollView(ctx);
var menuLayout1 = new android.widget.LinearLayout(ctx);
menuLayout.setOrientation(1);
menuLayout1.setOrientation(1);
menuScroll.addView(menuLayout);
menuLayout1.addView(menuScroll);
//--------Add Title--------//
var name = new android.widget.TextView(ctx);
name.setTextSize(20);
name.setText("AgameR MoreOptions PE");//Title
name.setTextColor(android.graphics.Color.WHITE); //Color
name.setGravity(android.view.Gravity.CENTER);

menuLayout.addView(name);
//--------Add Buttons-------//
var version = new android.widget.TextView(ctx);
version.setTextSize(15);
version.setText("v1.0 Beta 3");//Title
version.setTextColor(android.graphics.Color.WHITE); //Color
version.setGravity(android.view.Gravity.CENTER);

menuLayout.addView(version);

var hacksTitle = new android.widget.TextView(ctx);
hacksTitle.setTextSize(12);
hacksTitle.setText("Hacks");//Title
hacksTitle.setTextColor(android.graphics.Color.WHITE); //Color
hacksTitle.setGravity(android.view.Gravity.CENTER);

menuLayout.addView(hacksTitle);

var button = new android.widget.Button(ctx);
if(State==false&&theme=="Alternative"){
	Entity.setCollisionSize(Player.getEntity(), 1, 2);
	button.setText("Walk through blocks | OFF");
	button.setBackgroundColor(android.graphics.Color.RED);
}else if(State==true&&theme=="Alternative"){
	Entity.setCollisionSize(Player.getEntity(), 0, 0);
	button.setText("Walk through blocks | ON");
	button.setBackgroundColor(android.graphics.Color.GREEN);
}else if(State==false&&theme=="MCPE"){
	Entity.setCollisionSize(Player.getEntity(), 1, 2);
	button.setText("Walk through blocks | OFF");
	button.setBackgroundDrawable(mcpeButtonImage);
}else if(State==true&&theme=="MCPE"){
	Entity.setCollisionSize(Player.getEntity(), 0, 0);
	button.setText("Walk through blocks | ON");
	button.setBackgroundDrawable(mcpeButtonImage);
}
button.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg){
	if(State==false&&theme=="Alternative"){
    State = true;
    Entity.setCollisionSize(Player.getEntity(), 0, 0);
	button.setText("Walk through blocks | ON");
	button.setBackgroundColor(android.graphics.Color.GREEN);
	}else if(State==true&&theme=="Alternative"){
	State = false;
	Entity.setCollisionSize(Player.getEntity(), 1, 2);
	button.setText("Walk through blocks | OFF");
	button.setBackgroundColor(android.graphics.Color.RED);
	}else if(State==false&&theme=="MCPE"){
    State = true;
    Entity.setCollisionSize(Player.getEntity(), 0, 0);
	button.setText("Walk through blocks | ON");
	button.setBackgroundDrawable(mcpeButtonImage);
	}else if(State==true&&theme=="MCPE"){
	State = false;
	Entity.setCollisionSize(Player.getEntity(), 1, 2);
	button.setText("Walk through blocks | OFF");
	button.setBackgroundDrawable(mcpeButtonImage);
	}
}
}));
menuLayout.addView(button);

var button1 = new android.widget.Button(ctx);
if(State1==false&&theme=="Alternative"){
	button1.setText("No attack damage | OFF");
	button1.setBackgroundColor(android.graphics.Color.RED);
}else if(State1==true&&theme=="Alternative"){
	button1.setText("No attack damage | ON");
	button1.setBackgroundColor(android.graphics.Color.GREEN);
}else if(State1==false&&theme=="MCPE"){
	button1.setText("No attack damage | OFF");
	button1.setBackgroundDrawable(mcpeButtonImage);
}else if(State1==true&&theme=="MCPE"){
	button1.setText("No attack damage | ON");
	button1.setBackgroundDrawable(mcpeButtonImage);
}

button1.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg){
	if(State1==false&&theme=="Alternative"){
	State1 = true;
	button1.setText("No attack damage | ON");
	button1.setBackgroundColor(android.graphics.Color.GREEN);
	}else if(State1==true&&theme=="Alternative"){
	State1 = false;
	button1.setText("No attack damage | OFF");
	button1.setBackgroundColor(android.graphics.Color.RED);
	}else if(State1==false&&theme=="MCPE"){
	State1 = true;
	button1.setText("No attack damage | ON");
	button1.setBackgroundDrawable(mcpeButtonImage);
	}else if(State1==true&&theme=="MCPE"){
	State1 = false;
	button1.setText("No attack damage | OFF");
	button1.setBackgroundDrawable(mcpeButtonImage);
	}
}
}));
menuLayout.addView(button1);

var button2 = new android.widget.Button(ctx);
if(State2==false&&theme=="Alternative"){
	if(Level.getGameMode()==1){
	State2 = true;
	button2.setText("Fly | ON");
	Player.setCanFly(1);
    }else if(Level.getGameMode()==0){
	State2 = false;
	button2.setText("Fly | OFF");
	Player.setCanFly(0);
	}
	button2.setBackgroundColor(android.graphics.Color.RED);
}else if(State2==true&&theme=="Alternative"){
	if(Level.getGameMode()==1){
	State2 = true;
	button2.setText("Fly | ON");
	Player.setCanFly(1);
    }else if(Level.getGameMode()==0){
	State2 = true;
	button2.setText("Fly | ON");
	Player.setCanFly(1);
	}
	button2.setBackgroundColor(android.graphics.Color.GREEN);
}else if(State2==false&&theme=="MCPE"){
	if(Level.getGameMode()==1){
	State2 = true;
	button2.setText("Fly | ON");
	Player.setCanFly(1);
    }else if(Level.getGameMode()==0){
	State2 = false;
	button2.setText("Fly | OFF");
	Player.setCanFly(0);
	}
	button2.setBackgroundDrawable(mcpeButtonImage);
}else if(State2==true&&theme=="MCPE"){
	if(Level.getGameMode()==1){
	State2 = true;
	button2.setText("Fly | ON");
	Player.setCanFly(1);
    }else if(Level.getGameMode()==0){
	State2 = true;
	button2.setText("Fly | ON");
	Player.setCanFly(1);
	}
	button2.setBackgroundDrawable(mcpeButtonImage);
}

button2.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg){
	if(State2==false&&theme=="Alternative"){
	if(Level.getGameMode()==1){
	State2 = true;
	button2.setText("Fly | ON");
	Player.setCanFly(1);
    }else if(Level.getGameMode()==0){
	State2 = true;
	button2.setText("Fly | ON");
	Player.setCanFly(1);
	}
	button2.setBackgroundColor(android.graphics.Color.GREEN);
	}else if(State2==true&&theme=="Alternative"){
	if(Level.getGameMode()==1){
	State2 = true;
	button2.setText("Fly | ON");
	Player.setCanFly(1);
    }else if(Level.getGameMode()==0){
	State2 = false;
	button2.setText("Fly | OFF");
	Player.setCanFly(0);
	}
	button2.setBackgroundColor(android.graphics.Color.RED);
	}else if(State2==false&&theme=="MCPE"){
	if(Level.getGameMode()==1){
	State2 = true;
	button2.setText("Fly | ON");
	Player.setCanFly(1);
    }else if(Level.getGameMode()==0){
	State2 = true;
	button2.setText("Fly | ON");
	Player.setCanFly(1);
	}
	button2.setBackgroundDrawable(mcpeButtonImage);
	}else if(State2==true&&theme=="MCPE"){
	if(Level.getGameMode()==1){
	State2 = true;
	button2.setText("Fly | ON");
	Player.setCanFly(1);
    }else if(Level.getGameMode()==0){
	State2 = false;
	button2.setText("Fly | OFF");
	Player.setCanFly(0);
	}
	button2.setBackgroundDrawable(mcpeButtonImage);
	}
}
}));
menuLayout.addView(button2);

var button3 = new android.widget.Button(ctx);
if(State3==false&&theme=="Alternative"){
button3.setText("Set entities on fire | OFF");
button3.setBackgroundColor(android.graphics.Color.RED);
}else if(State3==true&&theme=="Alternative"){
button3.setText("Set entities on fire | ON");
button3.setBackgroundColor(android.graphics.Color.GREEN);
}else if(State3==false&&theme=="MCPE"){
button3.setText("Set entities on fire | OFF");
button3.setBackgroundDrawable(mcpeButtonImage);
}else if(State3==true&&theme=="MCPE"){
button3.setText("Set entities on fire | ON");
button3.setBackgroundDrawable(mcpeButtonImage);
}

button3.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg){
	if(State3==false&&theme=="Alternative"){
	State3 = true;
	button3.setText("Set entities on fire | ON");
	button3.setBackgroundColor(android.graphics.Color.GREEN);
	}else if(State3==true&&theme=="Alternative"){
	State3 = false;
	button3.setText("Set entities on fire | OFF");
	button3.setBackgroundColor(android.graphics.Color.RED);
	}else if(State3==false&&theme=="MCPE"){
	State3 = true;
	button3.setText("Set entities on fire | ON");
	button3.setBackgroundDrawable(mcpeButtonImage);
	}else if(State3==true&&theme=="MCPE"){
	State3 = false;
	button3.setText("Set entities on fire | OFF");
	button3.setBackgroundDrawable(mcpeButtonImage);
	}
}
}));
menuLayout.addView(button3);

var button4 = new android.widget.Button(ctx);
if(State4==false&&theme=="Alternative"){
	ModPE.setGameSpeed(20);
	button4.setText("Gamespeed x2 | OFF");
	button4.setBackgroundColor(android.graphics.Color.RED);
}else if(State4==true&&theme=="Alternative"){
	ModPE.setGameSpeed(40);
	button4.setText("Gamespeed x2 | ON");
	button4.setBackgroundColor(android.graphics.Color.GREEN);
}else if(State4==false&&theme=="MCPE"){
	ModPE.setGameSpeed(20);
	button4.setText("Gamespeed x2 | OFF");
	button4.setBackgroundDrawable(mcpeButtonImage);
}else if(State4==true&&theme=="MCPE"){
	ModPE.setGameSpeed(40);
	button4.setText("Gamespeed x2 | ON");
	button4.setBackgroundDrawable(mcpeButtonImage);
}
button4.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg){
	if(State4==false&&theme=="Alternative"){
	State4 = true;
	ModPE.setGameSpeed(40);
	button4.setText("Gamespeed x2 | ON");
	button4.setBackgroundColor(android.graphics.Color.GREEN);
	}else if(State4==true&&theme=="Alternative"){
	State4 = false;
	ModPE.setGameSpeed(20);
	button4.setText("Gamespeed x2 | OFF");
	button4.setBackgroundColor(android.graphics.Color.RED);
	}else if(State4==false&&theme=="MCPE"){
	State4 = true;
	ModPE.setGameSpeed(40);
	button4.setText("Gamespeed x2 | ON");
	button4.setBackgroundDrawable(mcpeButtonImage);
 }else if(State4==true&&theme=="MCPE"){
	State4 = false;
	ModPE.setGameSpeed(20);
	button4.setText("Gamespeed x2 | OFF");
	button4.setBackgroundDrawable(mcpeButtonImage);
 }
}
}));
menuLayout.addView(button4);

var button5 = new android.widget.Button(ctx);
if(State5==false&&theme=="Alternative"){
 button5.setText("TapSpammer | OFF");
 button5.setBackgroundColor(android.graphics.Color.RED);
}else if(State5==true&&theme=="Alternative"){
 button5.setText("TapSpammer | ON");
 button5.setBackgroundColor(android.graphics.Color.GREEN);
}else if(State5==false&&theme=="MCPE"){
 button5.setText("TapSpammer | OFF");
 button5.setBackgroundDrawable(mcpeButtonImage);
}else if(State5==true&&theme=="MCPE"){
 button5.setText("TapSpammer | ON");
 button5.setBackgroundDrawable(mcpeButtonImage);
}
button5.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg){
	if(State5==false&&theme=="Alternative"){
	State5 = true;
	button5.setText("TapSpammer | ON");
	button5.setBackgroundColor(android.graphics.Color.GREEN);
	}else if(State5==true&&theme=="Alternative"){
	State5 = false;
	button5.setText("TapSpammer | OFF");
	button5.setBackgroundColor(android.graphics.Color.RED);
	}else if(State5==false&&theme=="MCPE"){
	State5 = true;
	button5.setText("TapSpammer | ON");
	button5.setBackgroundDrawable(mcpeButtonImage);
	}else if(State5==true&&theme=="MCPE"){
	State5 = false;
	button5.setText("TapSpammer | OFF");
	button5.setBackgroundDrawable(mcpeButtonImage);
	}
}
}));
menuLayout.addView(button5);

var button6 = new android.widget.Button(ctx);
if(State6==false&&theme=="Alternative"){
 button6.setText("Sneaking | OFF");
 button6.setBackgroundColor(android.graphics.Color.RED);
 Entity.setSneaking(Player.getEntity(), 0);
}else if(State6==true&&theme=="Alternative"){
 button6.setText("Sneaking | ON");
 button6.setBackgroundColor(android.graphics.Color.GREEN);
 Entity.setSneaking(Player.getEntity(), 1);
}else if(State6==false&&theme=="MCPE"){
 button6.setText("Sneaking | OFF");
 button6.setBackgroundDrawable(mcpeButtonImage);
 Entity.setSneaking(Player.getEntity(), 0);
}else if(State6==true&&theme=="MCPE"){
 button6.setText("Sneaking | ON");
 button6.setBackgroundDrawable(mcpeButtonImage);
 Entity.setSneaking(Player.getEntity(), 1);
}
button6.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg){
	if(State6==false&&theme=="Alternative"){
	State6 = true;
	Entity.setSneaking(Player.getEntity(), 1);
	button6.setText("Sneaking | ON");
	button6.setBackgroundColor(android.graphics.Color.GREEN);
	}else if(State6==true&&theme=="Alternative"){
	State6 = false;
	Entity.setSneaking(Player.getEntity(), 0);
	button6.setText("Sneaking | OFF");
	button6.setBackgroundColor(android.graphics.Color.RED);
	}else if(State6==false&&theme=="MCPE"){
	State6 = true;
	Entity.setSneaking(Player.getEntity(), 1);
	button6.setText("Sneaking | ON");
	button6.setBackgroundDrawable(mcpeButtonImage);
	}else if(State6==true&&theme=="MCPE"){
	State6 = false;
	Entity.setSneaking(Player.getEntity(), 0);
	button6.setText("Sneaking | OFF");
	button6.setBackgroundDrawable(mcpeButtonImage);
	}
}
}));
menuLayout.addView(button6);

var optionsTitle = new android.widget.TextView(ctx);
optionsTitle.setTextSize(12);
optionsTitle.setText("Options");//Title
optionsTitle.setTextColor(android.graphics.Color.WHITE); //Color
optionsTitle.setGravity(android.view.Gravity.CENTER);

menuLayout.addView(optionsTitle);

var coordsButton = new android.widget.Button(ctx);
if(optionsState==false&&theme=="Alternative"){
	coordsButton.setText("Show coords | OFF");
	coordsButton.setBackgroundColor(android.graphics.Color.RED);
}else if(optionsState==true&&theme=="Alternative"){
	coordsButton.setText("Show coords | ON");
	coordsButton.setBackgroundColor(android.graphics.Color.GREEN);
}else if(optionsState==false&&theme=="MCPE"){
	coordsButton.setText("Show coords | OFF");
	coordsButton.setBackgroundDrawable(mcpeButtonImage);
}else if(optionsState==true&&theme=="MCPE"){
	coordsButton.setText("Show coords | ON");
	coordsButton.setBackgroundDrawable(mcpeButtonImage);
}

coordsButton.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg){
	if(optionsState==false&&theme=="Alternative"){
	optionsState = true;
	coordsButton.setText("Show coords | ON");
	coordsButton.setBackgroundColor(android.graphics.Color.GREEN);
	}else if(optionsState==true&&theme=="Alternative"){
	optionsState = false;
	coordsButton.setText("Show coords | OFF");
	coordsButton.setBackgroundColor(android.graphics.Color.RED);
	}else if(optionsState==false&&theme=="MCPE"){
	optionsState = true;
	coordsButton.setText("Show coords | ON");
	coordsButton.setBackgroundDrawable(mcpeButtonImage);
	}else if(optionsState==true&&theme=="MCPE"){
	optionsState = false;
	coordsButton.setText("Show coords | OFF");
	coordsButton.setBackgroundDrawable(mcpeButtonImage);
	}
}
}));
menuLayout.addView(coordsButton);

var infoButton = new android.widget.Button(ctx);
if(theme=="Alternative"){
infoButton.setText("Info");
infoButton.setBackgroundColor(android.graphics.Color.GRAY);
}else if(theme=="MCPE"){
infoButton.setText("Info");
infoButton.setBackgroundDrawable(mcpeButtonImage);
}
infoButton.setOnClickListener(new android.view.View.OnClickListener({
	onClick: function(viewarg){
			var builder = new android.app.AlertDialog.Builder(ctx);
			builder.setMessage("Thanks for using the AgameR MoreOptions PE! Special thanks to Ethan061903 for betatesting, AntiModPE, Desno365 and everyone else who helped with making this mod possible!");
			builder.setPositiveButton("Follow @AgameR_Modder on Twitter", new android.content.DialogInterface.OnClickListener(){
			 
			                            onClick: function(p1, p2){
										
				Web("http://twitter.com/AgameR_Modder");
				p1.cancel();
				closeMenu();
										
										
			}							
			 
		    });
			builder.setNegativeButton("Ok", new android.content.DialogInterface.OnClickListener(){
			 
			                            onClick: function(p1, p2){
										
				p1.cancel();				
										
										
			}							
			 
		    });
										
		var dialog = builder.create();
		dialog.show();
	}			
}));
menuLayout.addView(infoButton);

var changelogButton = new android.widget.Button(ctx);
if(theme=="Alternative"){
changelogButton.setText("Changelog");
changelogButton.setBackgroundColor(android.graphics.Color.GRAY);
}else if(theme=="MCPE"){
changelogButton.setText("Changelog");
changelogButton.setBackgroundDrawable(mcpeButtonImage);
}
changelogButton.setOnClickListener(new android.view.View.OnClickListener({
	onClick: function(viewarg){
			var builder = new android.app.AlertDialog.Builder(ctx);
			builder.setMessage("v1.0 Beta 1: Initial release | v1.0 Beta 2: Name changed to AgameR MoreOptions PE, new icon, added coords option, added better grass, added every item eatable, added changelog, improved some things | v1.0 Beta 3: Added themes, added sneaking, improved fly");
			builder.setPositiveButton("Follow @AgameR_Modder on Twitter for updates", new android.content.DialogInterface.OnClickListener(){
			 
			                            onClick: function(p1, p2){
										
				Web("http://twitter.com/AgameR_Modder");
				p1.cancel();
				closeMenu();
										
										
			}							
			 
		    });
			builder.setNegativeButton("Ok", new android.content.DialogInterface.OnClickListener(){
			 
			                            onClick: function(p1, p2){
										
				p1.cancel();				
										
										
			}							
			 
		    });
										
		var dialog = builder.create();
		dialog.show();
	}			
}));
menuLayout.addView(changelogButton);

//--------Add CheckBox--------//
/*var checked5 = false;
var button5 = new android.widget.CheckBox(ctx);
button5.setText('Button 5');
button5.setChecked(checked5);
button5.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg){
if(!checked5){
checked5 = true;
//Your code
}else{
checked5 = false;
//Your code
}
button5.setChecked(checked5);
}
}));
menuLayout.addView(button5);*/

//More buttons...
menu = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
}catch(error){
print('An error occured: ' + error);
}
}}));
}
//Exit button
function exit(){
var ctxe = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctxe.runOnUiThread(new java.lang.Runnable({ run: function(){
try{
var xLayout = new android.widget.LinearLayout(ctxe);
var xButton = new android.widget.Button(ctxe);
if(theme=="Alternative"){
xButton.setText('X');//Text
xButton.setTextColor(android.graphics.Color.WHITE);
}else if(theme=="MCPE"){
xButton.setBackgroundDrawable(mcpeExitButtonImage);
}
xButton.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg){
exitUI.dismiss(); //Close
menu.dismiss(); //Close
}
}));
xLayout.addView(xButton);
exitUI = new android.widget.PopupWindow(xLayout, dip2px(40), dip2px(40));
exitUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
exitUI.showAtLocation(ctxe.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
}catch(exception){
print(exception);
}
}}));
}

function closeMenu(){
var ctxe = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctxe.runOnUiThread(new java.lang.Runnable({ run: function(){
try{
exitUI.dismiss(); //Close
menu.dismiss(); //Close
}catch(exception){
print(exception);
};
}
}
));
}

function attackHook(attacker,victim){
if(State1==true){
if(Player.getEntity()==victim){
preventDefault();
}}
else if(State3==true){
if(Player.getEntity()==attacker){
Entity.setFireTicks(victim,9999);
}}}

function modTick(){
	var xcoord = Player.getX();
    var ycoord = Player.getY();
    var zcoord = Player.getZ();
	if(optionsState==true){
	ModPE.showTipMessage("X: "+parseInt(xcoord)+" Y: "+parseInt(ycoord)+" Z: "+parseInt(zcoord));
	}else if(Entity.getHealth(Player.getEntity()) < 1){
	State = false;
	State1 = false;
	State2 = false;
	if(Level.getGameMode==1){
	Player.setCanFly(1);
	}else if(Level.getGameMode==0){
	Player.setCanFly(0);
	}
	State3 = false;
	State4 = false;
	ModPE.setGameSpeed(20);
	State5 = false;
	State6 = false;
	}
}

var activity=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
function Web(url){
  activity.runOnUiThread(new java.lang.Runnable({
    run: function(){
      activity.startActivity(new android.content.Intent(android.content.Intent.ACTION_VIEW,android.net.Uri.parse(url)));
      }
    }));
}

function useItem(x,y,z,i,b){
	if(State5==true){
		Server.sendChat("SPAM!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
	}
}
