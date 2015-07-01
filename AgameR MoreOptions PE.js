/*Mod created by peacestorm
*
* Thanks to:
* MyNameIsTriXz (for helping with some hacks and stuff to make this mod better)
* Ethan061903 (for betatesting)
* Desno365 (for some things)
* AntiModPE (for helping me with some things)
* Do not copy without permission!
* For more copyright/permissions, look at the bottom of this file!*/

/*Config (change default settings)*/
var theme = "MCPE"; //<-- Default theme; All themes: Alternative, MCPE, Blue
var crossButtonPosition = "right"; //<-- Cross button position
var spamMessage = "Spam!!!!!";
var betterGrass = "fast"; //<-- Default better grass option; All options: normal, fast, off
var fullScreen = "off"; //<-- Default fullscreen option; All options: off, on
var showList = "on"; //...
var useOldIcon = "off"; //...

/*Todo:
Add themes [Blue (half done)]
Add more hacks, cheats, other things
~Save theme and other options~ DONE! Only some options left!
*/

/*ModPE.setFoodItem(256,"shovel",2,9999,"Iron Shovel [EATABLE]");
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
ModPE.setFoodItem(359,"shears",0,9999,"Shears [EATABLE]");*/

//showHacksStates();

// add these variables in your mod

const CURRENT_VERSION = "1.0.0-pre2";
var latestVersion;
var targetMCPEVersion = "0.11.x";
var mcpeVersion = ModPE.getMinecraftVersion();
const MOD_AUTHOR = "peacestorm";
const MOD_CREDITS = "@MyNameIsTriXz (helped me the most), @Desno365, @RedstoneGunMade, @AntiModPE";

var currentActivity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var sdcard = android.os.Environment.getExternalStorageDirectory();

var f = 0;
var count = 0;

var defaultDestroyTimeAll = [
    null, 1.5, 0.6, 0.5, 2, 2, 0, -1, null, null, null, null, 0.5, 0.6, 3, 3, 3, 2, 0.2, 0.6, 0.3, 3, 3, null, 0.8, null, 0.2, 0.7, null, null, 4, 0, 0, null, null, 0.8, null, 0, 0, 0, 0, 3, 5, 2, 2, 2, 0, 1.5, 2, 50, 0, 0, null, 2, 2.5, null, 3, 5, 2.5, 0, 0.6, 3.5, 3.5, 1, 3, 0.4, 0.7, 2, 1, null, null, 5, null, 3, 3, null, null, null, 0.1, 0.5, 0.2, 0.4, 0.6, 0, null, 2, 1, 0.4, 0.3, null, 1, 0.5, null, null, -1, 3, null, 1.5, null, null, 5, 0.3, 1, 0, 0, null, 2, 2, 1.5, null, null, 2, null, 2, null, null, null, null, null, null, null, null, null, null, null, null, null, 0.8, null, null, null, null, null, 2, 2, 2, null, null, 2, null, 0, 0, null, null, null, null, null, null, null, null, null, null, null, null, 0.8, 0.8, 2, 2, null, null, null, null, null, null, null, null, null, null, null, 0.5, 0.1, 5, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, 3.5, 50, 5, 0.6, 0.6, 5, null, null, null, null, 0
];

Block.setDestroyTimeAll = function(destroyTime) {
    for (i = 0; i < 256; i++) {
        Block.setDestroyTime(i, destroyTime);
    }
}

Block.setDestroyTimeDefaultAll = function() {
    for (i = 0; i < 256; i++) {
        Block.setDestroyTime(i, defaultDestroyTimeAll[i]);
    }
}

var villagerSkin = ["butcher", "farmer", "librarian", "priest", "smith", "villager"];

function getRandomVillagerSkin() {
  return villagerSkin[Math.floor(villagerSkin.length * Math.random())];
}

var initialized = false;

function newLevel() {
    if (initialized == false) {
        initialized = true;
        clientMessage(ChatColor.BLUE + "[AgameR MoreOptions PE]" + ChatColor.WHITE + " Initialized");
    }Load();
	initializeOptiFine();
    new java.lang.Thread(new java.lang.Runnable() {
        run: function() {
            getLatestVersion();
            if (latestVersion != CURRENT_VERSION && latestVersion != undefined) {
                clientMessage(ChatColor.BLUE + "[AgameR MoreOptions PE]" + ChatColor.WHITE + " There is a new version available (v" + latestVersion + ")!");
            } else {
                currentActivity.runOnUiThread(new java.lang.Runnable() {
                    run: function() {
                        android.widget.Toast.makeText(currentActivity, new android.text.Html.fromHtml("<b>AgameR MoreOptions PE</b> You have the latest version"), 0).show();
                    }
                });
            }
        }
    }).start();
	if(Level.getGameMode() == 1){
	State2 = true;
	}
	if(showList == "on"){
	showHacksList();
	}
}


function getLatestVersion() {
    try {
        // download content
        var url = new java.net.URL("https://raw.githubusercontent.com/peacestorm/ModPE-scripts/master/version/agamer-moreoptionspe-version");
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
        clientMessage(ChatColor.BLUE + "[AgameR MoreOptions PE]" + ChatColor.WHITE + " Can't check for updates, please check your Internet connection.");
        ModPE.log("[AgameR MoreOptions PE] getLatestVersion() caught an error: " + err);
    }
}

/*OptiFine things*/
initializeOptiFine();

function initializeOptiFine() {
        if (betterGrass == "normal") {
            Block.defineBlock(2, "Grass Block", [
                ["dirt", 0],
                ["grass", 2],
                ["grass", 2],
                ["grass", 2],
                ["grass", 2],
                ["grass", 2]
            ], 3, 32, 4);
            Block.setDestroyTime(2, 0.6);
        } else if (betterGrass == "fast") {
            Block.defineBlock(2, "Grass Block", [
                ["dirt", 0],
                ["grass", 2],
                ["grass", 2],
                ["grass", 2],
                ["grass", 2],
                ["grass", 2]
            ], 3);
            Block.setDestroyTime(2, 0.6);
        } else if (betterGrass == "off") {
            Block.defineBlock(2, "Grass Block", [
                ["grass", 3],
                ["grass", 2],
                ["grass", 3],
                ["grass", 3],
                ["grass", 3],
                ["grass", 3]
            ], 3);
            Block.setDestroyTime(2, 0.6);
        }
    }
    /*---------------*/
//TexturePack support
var getContext = function() {
    return com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
};

var createUiThread = function(func) {
    getContext().runOnUiThread(new java.lang.Runnable({
        run: function() {
            func(getContext());
        }
    }));
};

var GuiSize = android.util.TypedValue.applyDimension(android.util.TypedValue.COMPLEX_UNIT_DIP, 2, getContext().getResources().getDisplayMetrics());
var GetGui = function(){return android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/gui.png"));};
var TrimImage = function(bitmap,x,y,width,height){return android.graphics.Bitmap.createBitmap(bitmap,x,y,width,height);};
var GetSpritesheet = function(){return android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/spritesheet.png"));};
var GetTouchgui = function(){return android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/touchgui.png"));};
var GetGui = function(){return android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/gui.png"));};

var trimImage = function(bitmap, x, y, width, height) {
    return android.graphics.Bitmap.createBitmap(bitmap, x, y, width, height);
};

var getStretchedImage = function(bm, x, y, stretchWidth, stretchHeight, width, height) {
    var blank = android.graphics.Bitmap.createBitmap(width, height, android.graphics.Bitmap.Config.ARGB_8888);
    var Bitmap = android.graphics.Bitmap;
    var part1 = Bitmap.createBitmap(bm, 0, 0, x, y);
    var part2 = Bitmap.createBitmap(bm, x, 0, stretchWidth, y);
    var part3 = Bitmap.createBitmap(bm, x+stretchWidth, 0, bm.getWidth()-x-stretchWidth, y);
    var part4 = Bitmap.createBitmap(bm, 0, y, x, stretchHeight);
    var part5 = Bitmap.createBitmap(bm, x, y, stretchWidth, stretchHeight);
    var part6 = Bitmap.createBitmap(bm, x+stretchWidth, y, bm.getWidth()-x-stretchWidth, stretchHeight);
    var part7 = Bitmap.createBitmap(bm, 0, y+stretchHeight, x, bm.getHeight()-y-stretchHeight);
    var part8 = Bitmap.createBitmap(bm, x, y+stretchHeight, stretchWidth, bm.getHeight()-y-stretchHeight);
    var part9 = Bitmap.createBitmap(bm, x+stretchWidth, y+stretchHeight, bm.getWidth()-x-stretchWidth, bm.getHeight()-y-stretchHeight);
    var canvas = new android.graphics.Canvas(blank);
    canvas.drawBitmap(part1, 0, 0, null);
    canvas.drawBitmap(Bitmap.createScaledBitmap(part2, width-bm.getWidth()+stretchWidth, y, false), x, 0, null);
    canvas.drawBitmap(part3, width-bm.getWidth()+stretchWidth+x, 0, null);
    canvas.drawBitmap(Bitmap.createScaledBitmap(part4, x, height-bm.getHeight()+stretchHeight, false), 0, y, null);
    canvas.drawBitmap(Bitmap.createScaledBitmap(part5, width-bm.getWidth()+stretchWidth, height-bm.getHeight()+stretchHeight, false), x, y, null);
    canvas.drawBitmap(Bitmap.createScaledBitmap(part6, part3.getWidth(), height-bm.getHeight()+stretchHeight, false), width-bm.getWidth()+stretchWidth+x, y, null);
    canvas.drawBitmap(part7, 0, height-bm.getHeight()+stretchHeight+y, null);
    canvas.drawBitmap(Bitmap.createScaledBitmap(part8, width-bm.getWidth()+stretchWidth, part7.getHeight(), false), x, height-bm.getHeight()+stretchHeight+y, null);
    canvas.drawBitmap(part9, width-bm.getWidth()+stretchWidth+x, height-bm.getHeight()+stretchHeight+y, null);

    return new android.graphics.drawable.BitmapDrawable(blank);
};

function minecraftText(text)
{
	var defaultTextView = new android.widget.TextView(ctx); 
	defaultTextView.setText(text);
	defaultTextView.setTypeface(mcpeFont);
	defaultTextView.setTextColor(android.graphics.Color.WHITE);
		if(android.os.Build.VERSION.SDK_INT > 19){ // KITKAT
		defaultTextView.setShadowLayer(1, Math.round(defaultTextView.getLineHeight() / 8), Math.round(defaultTextView.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
		}else{
		defaultTextView.setShadowLayer(0.0001, Math.round(defaultTextView.getLineHeight() / 8), Math.round(defaultTextView.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
		}
	return defaultTextView;
}

function minecraftButtonO(text)//Main button
{
	var defaultButton = new android.widget.Button(ctx); 
	defaultButton.setText(text);
	defaultButton.setOnTouchListener(new android.view.View.OnTouchListener()
	{
		onTouch: function(v, event)
		{defaultButton.setSoundEffectsEnabled(false);
			var action = event.getActionMasked();
			if(action == android.view.MotionEvent.ACTION_CANCEL || action == android.view.MotionEvent.ACTION_UP)
			{
				var bNP = unmcpeBtn;
				bNP.setFilterBitmap(false);
				bNP.setAntiAlias(false);
				defaultButton.setBackgroundDrawable(bNP);
				defaultButton.setTextColor(android.graphics.Color.parseColor("#FFDDDDDD"));
				defaultButton.setPadding(0, 0, 0, 0);
			}else
			{
				var bNP = mcpeBtn;
				bNP.setFilterBitmap(false);
				bNP.setAntiAlias(false);
				defaultButton.setBackgroundDrawable(bNP);
				defaultButton.setTextColor(android.graphics.Color.parseColor("#FFFBFF97"));
				defaultButton.setPadding(0, Math.round(defaultButton.getLineHeight() / 8), 0, 0);
			}
			return false;
		}
	});
	
	var bNP = unmcpeBtn;
	bNP.setFilterBitmap(false);
	bNP.setAntiAlias(false);
	defaultButton.setBackgroundDrawable(bNP);
	defaultButton.setTypeface(mcpeFont);
	defaultButton.setPaintFlags(defaultButton.getPaintFlags() | android.graphics.Paint.SUBPIXEL_TEXT_FLAG);
	defaultButton.setTextSize(15);
	defaultButton.setTextColor(android.graphics.Color.parseColor("#FFDDDDDD"));
	if(android.os.Build.VERSION.SDK_INT > 19){ // KITKAT
	defaultButton.setShadowLayer(1, Math.round(defaultButton.getLineHeight() / 8), Math.round(defaultButton.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
	}else{
	defaultButton.setShadowLayer(0.0001, Math.round(defaultButton.getLineHeight() / 8), Math.round(defaultButton.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
	}
	defaultButton.setPadding(0, 0, 0, 0);
	defaultButton.setLineSpacing(0, 1.15);
	return defaultButton;
}

function minecraftButtonRed(text)//menu buttons
{
	var defaultButton = new android.widget.Button(ctx); 
	defaultButton.setText(text);
	defaultButton.setOnTouchListener(new android.view.View.OnTouchListener()
	{
		onTouch: function(v, event)
		{defaultButton.setSoundEffectsEnabled(false);
			var action = event.getActionMasked();
			if(action == android.view.MotionEvent.ACTION_CANCEL || action == android.view.MotionEvent.ACTION_UP)
			{
				var bNP = unclicked_image;
				bNP.setFilterBitmap(false);
				bNP.setAntiAlias(false);
				defaultButton.setBackgroundDrawable(bNP);
				defaultButton.setTextColor(android.graphics.Color.RED);
				defaultButton.setPadding(0, 0, 0, 0);
			}else
			{
				var bNP = clicked_image;
				bNP.setFilterBitmap(false);
				bNP.setAntiAlias(false);
				defaultButton.setBackgroundDrawable(bNP);
				defaultButton.setTextColor(android.graphics.Color.parseColor("#FFFBFF97"));
				defaultButton.setPadding(0, Math.round(defaultButton.getLineHeight() / 8), 0, 0);
			}
			return false;
		}
	});
	
	var bNP = unclicked_image;
	bNP.setFilterBitmap(false);
	bNP.setAntiAlias(false);
	defaultButton.setBackgroundDrawable(bNP);
	defaultButton.setTypeface(mcpeFont);
	defaultButton.setPaintFlags(defaultButton.getPaintFlags() | android.graphics.Paint.SUBPIXEL_TEXT_FLAG);
	defaultButton.setTextSize(15);
	defaultButton.setTextColor(android.graphics.Color.parseColor("#FFDDDDDD"));
	if(android.os.Build.VERSION.SDK_INT > 19){ // KITKAT
	defaultButton.setShadowLayer(1, Math.round(defaultButton.getLineHeight() / 8), Math.round(defaultButton.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
	}else{
	defaultButton.setShadowLayer(0.0001, Math.round(defaultButton.getLineHeight() / 8), Math.round(defaultButton.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
	}
	defaultButton.setPadding(0, 0, 0, 0);
	defaultButton.setLineSpacing(0, 1.15);
	return defaultButton;
}

function minecraftButton(text)//menu buttons
{
	var defaultButton = new android.widget.Button(ctx); 
	defaultButton.setText(text);
	defaultButton.setOnTouchListener(new android.view.View.OnTouchListener()
	{
		onTouch: function(v, event)
		{defaultButton.setSoundEffectsEnabled(false);
			var action = event.getActionMasked();
			if(action == android.view.MotionEvent.ACTION_CANCEL || action == android.view.MotionEvent.ACTION_UP)
			{
				var bNP = unclicked_image;
				bNP.setFilterBitmap(false);
				bNP.setAntiAlias(false);
				defaultButton.setBackgroundDrawable(bNP);
				defaultButton.setTextColor(android.graphics.Color.parseColor("#FFDDDDDD"));
				defaultButton.setPadding(0, 0, 0, 0);
			}else
			{
				var bNP = clicked_image;
				bNP.setFilterBitmap(false);
				bNP.setAntiAlias(false);
				defaultButton.setBackgroundDrawable(bNP);
				defaultButton.setTextColor(android.graphics.Color.parseColor("#FFFBFF97"));
				defaultButton.setPadding(0, Math.round(defaultButton.getLineHeight() / 8), 0, 0);
			}
			return false;
		}
	});
	
	var bNP = unclicked_image;
	bNP.setFilterBitmap(false);
	bNP.setAntiAlias(false);
	defaultButton.setBackgroundDrawable(bNP);
	defaultButton.setTypeface(mcpeFont);
	defaultButton.setPaintFlags(defaultButton.getPaintFlags() | android.graphics.Paint.SUBPIXEL_TEXT_FLAG);
	defaultButton.setTextSize(15);
	defaultButton.setTextColor(android.graphics.Color.parseColor("#FFDDDDDD"));
	if(android.os.Build.VERSION.SDK_INT > 19){ // KITKAT
	defaultButton.setShadowLayer(1, Math.round(defaultButton.getLineHeight() / 8), Math.round(defaultButton.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
	}else{
	defaultButton.setShadowLayer(0.0001, Math.round(defaultButton.getLineHeight() / 8), Math.round(defaultButton.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
	}
	defaultButton.setPadding(0, 0, 0, 0);
	defaultButton.setLineSpacing(0, 1.15);
	return defaultButton;
}

function minecraftButtonX(text)//menu buttons
{
	var defaultButton = new android.widget.Button(ctx); 
	defaultButton.setText(text);
	defaultButton.setOnTouchListener(new android.view.View.OnTouchListener()
	{
		onTouch: function(v, event)
		{defaultButton.setSoundEffectsEnabled(false);
			var action = event.getActionMasked();
			if(action == android.view.MotionEvent.ACTION_CANCEL || action == android.view.MotionEvent.ACTION_UP)
			{
				var bNP = unmcpeX;
				bNP.setFilterBitmap(false);
				bNP.setAntiAlias(false);
				defaultButton.setBackgroundDrawable(bNP);
				defaultButton.setTextColor(android.graphics.Color.parseColor("#FFDDDDDD"));
				defaultButton.setPadding(0, 0, 0, 0);
			}else
			{
				var bNP = mcpeX;
				bNP.setFilterBitmap(false);
				bNP.setAntiAlias(false);
				defaultButton.setBackgroundDrawable(bNP);
				defaultButton.setTextColor(android.graphics.Color.parseColor("#FFFBFF97"));
				defaultButton.setPadding(0, Math.round(defaultButton.getLineHeight() / 8), 0, 0);
			}
			return false;
		}
	});
	
	var bNP = unmcpeX;
	bNP.setFilterBitmap(false);
	bNP.setAntiAlias(false);
	defaultButton.setBackgroundDrawable(bNP);
	defaultButton.setTypeface(mcpeFont);
	defaultButton.setPaintFlags(defaultButton.getPaintFlags() | android.graphics.Paint.SUBPIXEL_TEXT_FLAG);
	defaultButton.setTextSize(15);
	defaultButton.setTextColor(android.graphics.Color.parseColor("#FFDDDDDD"));
	if(android.os.Build.VERSION.SDK_INT > 19){ // KITKAT
	defaultButton.setShadowLayer(1, Math.round(defaultButton.getLineHeight() / 8), Math.round(defaultButton.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
	}else{
	defaultButton.setShadowLayer(0.0001, Math.round(defaultButton.getLineHeight() / 8), Math.round(defaultButton.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
	}
	defaultButton.setPadding(0, 0, 0, 0);
	defaultButton.setLineSpacing(0, 1.15);
	return defaultButton;
}

var path = android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/minecraftpe/mods";
var mcpeFont;
var mcpeFontString = " AAEAAAAKAIAAAwAgT1MvMmYu99QAAAEoAAAAYGNtYXCJMItJAAAEyAAAALRnbHlmMIJYzgAAByAAADXkaGVhZPV0Di8AAACsAAAANmhoZWEIAwLRAAAA5AAAACRobXR4LIADgAAAAYgAAANAbG9jYV+9UiwAAAV8AAABom1heHAA2wAoAAABCAAAACBuYW1l4R57mwAAPQQAAAfmcG9zdABpADMAAETsAAAAIAABAAAAAQAAjaZTG18PPPUAAAQAAAAAAMjvOpgAAAAAyPCPmgAA/4AEgAOAAAAACAACAAAAAAAAAAEAAAOA/4AAAAUAAAD9gASAAAEAAAAAAAAAAAAAAAAAAADQAAEAAADQACgACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgJnAZAABQAEAgACAAAA/8ACAAIAAAACAAAzAMwAAAAABAAAAAAAAACAAAAHAAAACgAAAAAAAAAARlNUUgBAAA0hIgOA/4AAAAOAAIAAAAH7AAAAAAKAA4AAAAAgAAABAAAAAAAAAAAAAAABAAAAAQAAAAIAAAACgAAAAwAAAAMAAAADAAAAAQAAAAKAAAACgAAAAoAAAAMAAAABAAAAAwAAAAEAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAEAAAABAAAAAoAAAAMAAAACgAAAAoAAAAOAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAIAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAIAAAADAAAAAgAAAAMAAAADAAAAAYAAAAMAAAADAAAAAwAAAAMAAAADAAAAAoAAAAMAAAADAAAAAQAAAAMAAAACgAAAAYAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAACAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAoAAAAEAAAACgAAAA4AAAAEAAAACgAAAAoAAAAIAAAADAAAAAQAAAAMAAAADgAAAAgAAAAMAAAADAAAAAoAAgAOAAAADAAAAAgAAAAMAAAABgAAAAYAAAAMAAYADAAAAAwAAAAEAAAACgACAAQAAAAIAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAOAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAKAAAADAACAAwAAAAIAAAADgAAAA4AAAAMAAAADAAAAAwAAAAOAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADgAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAABgAAAAYAAAAMAAAACgACAA4AAAAMAAAADAAAAAwAAAAOAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAA4AAAAGAAAABgAAAAYAAAAGAAAACgAAAAoAAAAKAAAACAAAAAYAAAAMAAAAAgAAAAYAAAAMAAAAFAAAAAAAAAgAAAAMAAAAUAAMAAQAAABQABACgAAAAJAAgAAQABAAAAA0AfgCmAN4A7wD/AVMBeCAUIB4gICAiICYgOiCsISL//wAAAAAADQAgAKEAqADgAPEBUgF4IBQgGCAgICIgJiA5IKwhIv//AAH/9f/j/8H/wP+//77/bP9I4K3gquCp4KjgpeCT4CLfrQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKgAqACoAKgA8AFAAgACuAOABIAEuAVIBdgGaAbIBvgHKAdYB+AIoAj4CcAKkAsgC7gMWAzQDagOWA6oDvgPsBAAELARYBH4EmgTABOQE/gUUBSgFSgViBXYFjgW8BcoF7gYSBjIGTgZ6BpwGyAbaBvQHHAdAB3oHngfGB9gIAAgSCDQIQAhMCGwIkAi0CNYI9gkSCTYJVgloCYgJsgnECegJ/goeCkQKaAqICqoKxgrcCwALGgtSC3ILkgu4C8QL6gwIDBoMNAxUDHYMqgy+DOwNDA0eDVwNbA16DZ4Nqg2+DdwN8A4CDhAOJA5EDlAOYg5wDoQOwA76Dy4PZg+OD7IP1BACEDQQXBB+EKAQ0hDwEQ4ROhFcEXgRlBG8EdwSABIyEloSghK0EuoTFhNOE3gTmBO4E+QUChQ2FFwUghSoFNoVEBU8FWIVjhXAFegWDhZAFmwWgBaSFrIWyhbyFxoXQhd0F6oX1hfwGBgYNBhQGHgYmBjAGOYZEhkyGWAZkBmcGa4ZwBnSGeYaBBoiGkAaVhpkGnoakBqmGtAa8gAAAAUAAAAAA4ADgAADAAcACwASABYAACU1IxUlNSEVNzUjFSU1IyIHBhUBESERAcCPAR3+44+PAR2OPCkq/s8DgH+OjqaPj6aPj6eNKSo6/Y4DgPyAAAIAAAAAAIADgAADAAcAADE1MxUDETMRgICAgIABAAKA/YAAAAIAAAIAAYADgAADAAcAABkBMxEzETMRgICAAgABgP6AAYD+gAAAAAACAAAAAAKAA4AAAwAfAAABNSMVAxEjNTM1IzUzETMRMxEzETMVIxUzFSMRIxEjEQGAgICAgICAgICAgICAgICAAYCAgP6AAQCAgIABAP8AAQD/AICAgP8AAQD/AAAAAAAFAAAAAAKAA4AABwALAA8AEwAbAAAhNSE1IRUjFRM1MxUlNSEVJTUzFT0BMzUzFSEVAQD/AAIAgICA/gABgP4AgICAAQCAgICAAQCAgICAgICAgICAgICAAAAAAAcAAAAAAoADgAADAAcACwAPABMAFwAbAAAxNTMVIREzESURMxkBNTMVNREzESURMxElNTMVgAGAgP4AgICA/gCAAYCAgIABAP8AgAEA/wABAICAgAEA/wCAAQD/AICAgAAAAAAIAAAAAAKAA4AAAwAHAAsADwAbAB8AIwAnAAAzNSEVMzUzFSURMxEBNTMVATUjNSM1MzUzETMRATUzFTM1MxUlNTMVgAEAgID9gIABgID/AICAgICA/oCAgID/AICAgICAgAEA/wABAICA/wCAgICA/wD/AAIAgICAgICAgAAAAAEAAAIAAIADgAADAAAZATMRgAIAAYD+gAAAAAAFAAAAAAIAA4AAAwAHAAsADwATAAAhNSEVJTUzFSURMxkBNTMVPQEhFQEAAQD+gID/AICAAQCAgICAgIABgP6AAYCAgICAgAAFAAAAAAIAA4AAAwAHAAsADwATAAAxNSEVPQEzFTURMxEBNTMVJTUhFQEAgID/AID+gAEAgICAgICAAYD+gAGAgICAgIAAAAAFAAABAAIAAoAAAwAHAAsADwATAAARNTMVITUzFSU1IRUlNTMVITUzFYABAID+gAEA/oCAAQCAAQCAgICAgICAgICAgIAAAAABAAAAgAKAAwAACwAAJREhNSERMxEhFSERAQD/AAEAgAEA/wCAAQCAAQD/AID/AAABAAD/gACAAQAAAwAAFREzEYCAAYD+gAABAAABgAKAAgAAAwAAETUhFQKAAYCAgAABAAAAAACAAQAAAwAAMREzEYABAP8AAAAFAAAAAAKAA4AAAwAHAAsADwATAAAxNTMVNREzGQE1MxU1ETMZATUzFYCAgICAgICAAQD/AAEAgICAAQD/AAEAgIAAAAUAAAAAAoADgAADAAcADwAXABsAADM1IRUBNTMVAREzETMVIxUhESM1MzUzEQE1IRWAAYD/AID+gICAgAGAgICA/gABgICAAYCAgP8AAoD+gICAAYCAgP2AAoCAgAAAAAEAAAAAAoADgAALAAAxNSERIzUzNTMRIRUBAICAgAEAgAIAgID9AIAAAAAABgAAAAACgAOAAAcACwAPABMAFwAbAAAxETMVITUzEQE1MxU9ASEVATUzFQURMxEBNSEVgAGAgP4AgAEA/gCAAYCA/gABgAEAgID/AAEAgICAgIABAICAgAEA/wABAICAAAAAAAcAAAAAAoADgAADAAcACwAPABMAFwAbAAAzNSEVJTUzFSERMxEBNSEVATUzFQURMxEBNSEVgAGA/gCAAYCA/oABAP4AgAGAgP4AAYCAgICAgAEA/wABAICAAQCAgIABAP8AAQCAgAAAAwAAAAACgAOAAAMABwATAAATNTMVPQEzFRMRIREzFSERIzUhEYCAgID+AIABgIABAAIAgICAgID9gAEAAQCAAYCA/IAAAAAABAAAAAACgAOAAAMABwALABMAADM1IRUlNTMVIREzEQERIRUhFSEVgAGA/gCAAYCA/YACgP4AAYCAgICAgAGA/oABgAGAgICAAAAAAAUAAAAAAoADgAADAAcADwATABcAADM1IRU1ETMRIREzFSEVIRkBNTMVPQEhFYABgID9gIABgP6AgAEAgICAAQD/AAIAgID/AAIAgICAgIAAAwAAAAACgAOAAAMABwAPAAAhETMZATUzFTURIRUjESERAQCAgP6AgAKAAYD+gAGAgICAAQCAAQD+gAAABwAAAAACgAOAAAMABwALAA8AEwAXABsAADM1IRUlETMRIREzEQE1IRUlETMRIREzEQE1IRWAAYD+AIABgID+AAGA/gCAAYCA/gABgICAgAEA/wABAP8AAQCAgIABAP8AAQD/AAEAgIAAAAAABQAAAAACgAOAAAMABwALABMAFwAAMzUhFT0BMxUBETMRATUhNSERMxEBNSEVgAEAgP4AgAGA/oABgID+AAGAgICAgIABgAEA/wD/AICAAQD+AAIAgIAAAAIAAAAAAIACgAADAAcAADERMxEDETMRgICAAQD/AAGAAQD/AAAAAAACAAD/gACAAoAAAwAHAAAVETMRAxEzEYCAgIABgP6AAgABAP8AAAAABwAAAAACAAOAAAMABwALAA8AEwAXABsAACE1MxUlNTMVJTUzFSU1MxU9ATMVPQEzFT0BMxUBgID/AID/AID/AICAgICAgICAgICAgICAgICAgICAgICAgAAAAAACAAAAgAKAAgAAAwAHAAA9ASEVATUhFQKA/YACgICAgAEAgIAAAAAABwAAAAACAAOAAAMABwALAA8AEwAXABsAADE1MxU9ATMVPQEzFT0BMxUlNTMVJTUzFSU1MxWAgICA/wCA/wCA/wCAgICAgICAgICAgICAgICAgICAgIAAAAYAAAAAAoADgAADAAcACwAPABMAFwAAITUzFQM1MxU9ATMVATUzFQURMxEBNSEVAQCAgICA/gCAAYCA/gABgICAAQCAgICAgAEAgICAAQD/AAEAgIAAAAAEAAAAAAMAA4AAAwAHAA8AEwAAMzUhFSURMxE3ESERMxEzEQE1IRWAAgD9gICAAQCAgP2AAgCAgIACgP2AgAGA/wABgP4AAgCAgAAAAgAAAAACgAOAAAsADwAAMREzFSE1MxEjESEZATUhFYABgICA/oABgAMAgID9AAIA/gADAICAAAADAAAAAAKAA4AAAwAHABMAACURMxEDNTMVAREhFSEVIRUhESEVAgCAgID9gAIA/oABgP6AAYCAAYD+gAIAgID9gAOAgICA/oCAAAAABQAAAAACgAOAAAMABwALAA8AEwAAMzUhFT0BMxUhETMRATUzFSU1IRWAAYCA/YCAAYCA/gABgICAgICAAoD9gAIAgICAgIAAAgAAAAACgAOAAAMACwAAJREzEQURIRUhESEVAgCA/YACAP6AAYCAAoD9gIADgID9gIAAAAEAAAAAAoADgAALAAAxESEVIRUhFSERIRUCgP4AAQD/AAIAA4CAgID+gIAAAQAAAAACgAOAAAkAADERIRUhFSEVIRECgP4AAQD/AAOAgICA/gAAAAQAAAAAAoADgAADAAkADQARAAAzNSEVNREjNSERIREzGQE1IRWAAYCAAQD9gIACAICAgAGAgP4AAoD9gAKAgIAAAAAAAQAAAAACgAOAAAsAADERMxEhETMRIxEhEYABgICA/oADgP8AAQD8gAIA/gAAAAAAAQAAAAABgAOAAAsAADE1MxEjNSEVIxEzFYCAAYCAgIACgICA/YCAAAMAAAAAAoADgAADAAcACwAAMzUhFSU1MxUhETMRgAGA/gCAAYCAgICAgIADAP0AAAUAAAAAAoADgAADAAcACwATABcAACERMxEBNTMVAzUzFQERMxEhFSERATUzFQIAgP8AgICA/gCAAQD/AAGAgAGA/oABgICAAQCAgP2AA4D/AID+AAMAgIAAAAAAAQAAAAACgAOAAAUAADERMxEhFYACAAOA/QCAAAMAAAAAAoADgAADAAsAEwAAATUzFQERMxUzFSMRIREjNTM1MxEBAID+gICAgAGAgICAAgCAgP4AA4CAgP2AAoCAgPyAAAAAAAMAAAAAAoADgAADAAsAEwAAATUzFQERMxUzFSMRIREjNTMRMxEBAID+gICAgAGAgICAAgCAgP4AA4CAgP2AAYCAAYD8gAAAAAQAAAAAAoADgAADAAcACwAPAAAzNSEVJREzESERMxEBNSEVgAGA/gCAAYCA/gABgICAgAKA/YACgP2AAoCAgAACAAAAAAKAA4AAAwANAAABNTMVAREhFSEVIRUhEQIAgP2AAgD+gAGA/oACgICA/YADgICAgP4AAAYAAAAAAoADgAADAAcACwAPABMAFwAAMzUhFTM1MxUlNTMVIREzESURMxEBNSEVgAEAgID/AID+AIABgID+AAGAgICAgICAgAKA/YCAAgD+AAIAgIAAAAADAAAAAAKAA4AAAwAHABEAACERMxEDNTMVAREhFSEVIRUhEQIAgICA/YACAP6AAYD+gAIA/gACgICA/YADgICAgP4AAAYAAAAAAoADgAADAAcACwAPABMAFwAAMzUhFSU1MxUhETMRATUhFSU1MxU9ASEVgAGA/gCAAYCA/gABgP4AgAIAgICAgIABgP6AAYCAgICAgICAgAAAAAABAAAAAAKAA4AABwAAIREhNSEVIREBAP8AAoD/AAMAgID9AAADAAAAAAKAA4AAAwAHAAsAADM1IRUlETMRIREzEYABgP4AgAGAgICAgAMA/QADAP0AAAAABQAAAAACgAOAAAMABwALAA8AEwAAITUzFSURMxEzETMRAREzESERMxEBAID/AICAgP4AgAGAgICAgAEA/wABAP8AAQACAP4AAgD+AAAAAAADAAAAAAKAA4AAAwALABMAAAE1MxUBETMRMxUjFSE1IzUzETMRAQCA/oCAgIABgICAgAEAgID/AAOA/YCAgICAAoD8gAAAAAAJAAAAAAKAA4AAAwAHAAsADwATABcAGwAfACMAADERMxEhETMRATUzFTM1MxUlNTMVJTUzFTM1MxUlNTMVITUzFYABgID+AICAgP8AgP8AgICA/gCAAYCAAYD+gAGA/oABgICAgICAgICAgICAgICAgICAAAUAAAAAAoADgAADAAcACwAPABMAACERMxEBNTMVMzUzFSU1MxUhNTMVAQCA/wCAgID+AIABgIACgP2AAoCAgICAgICAgIAAAAUAAAAAAoADgAAFAAkADQARABcAADERMxUhFQE1MxU9ATMVPQEzFT0BITUhEYACAP4AgICA/gACgAEAgIABAICAgICAgICAgICA/wAAAAAAAQAAAAABgAOAAAcAADERIRUhESEVAYD/AAEAA4CA/YCAAAAABQAAAAACgAOAAAMABwALAA8AEwAAITUzFSURMxEBNTMVJREzEQE1MxUCAID/AID/AID/AID/AICAgIABAP8AAQCAgIABAP8AAQCAgAAAAAABAAAAAAGAA4AABwAAMTUhESE1IREBAP8AAYCAAoCA/IAAAAAFAAACAAKAA4AAAwAHAAsADwATAAARNTMVITUzFSU1MxUzNTMVJTUzFYABgID+AICAgP8AgAIAgICAgICAgICAgICAAAEAAP+AAoAAAAADAAAVNSEVAoCAgIAAAAEAAAMAAQADgAADAAARNSEVAQADAICAAAMAAAAAAoACgAADAA0AEQAAPQEzHQE1ITUhNSE1MxEBNSEVgAGA/oABgID+AAGAgICAgICAgID+AAIAgIAAAAADAAAAAAKAA4AAAwAHABEAACURMxEBNSEVAREzETMVIxEhFQIAgP6AAQD+AICAgAGAgAGA/oABgICA/gADgP6AgP8AgAAAAAAFAAAAAAKAAoAAAwAHAAsADwATAAAzNSEVPQEzFSERMxEBNTMVJTUhFYABgID9gIABgID+AAGAgICAgIABgP6AAQCAgICAgAADAAAAAAKAA4AAAwAHABEAADURMxkBNSEVATUhESM1MxEzEYABAP8AAYCAgICAAYD+gAGAgID+AIABAIABgPyAAAAAAAMAAAAAAoACgAADAA0AEQAAMzUhFSURMxUhNTMRIRURNSEVgAIA/YCAAYCA/gABgICAgAGAgID/AIABgICAAAACAAAAAAIAA4AACwAPAAAzESM1MzUzFSEVIRkBNSEVgICAgAEA/wABAAIAgICAgP4AAwCAgAAAAAMAAP+AAoACgAADAAcAEQAAFTUhFQERMxEBNSE1IREhNSERAgD+AIABgP6AAYD+gAIAgICAAYABAP8A/wCAgAEAgP2AAAAAAAMAAAAAAoADgAADAAcADwAAIREzEQE1IRUBETMRMxUjEQIAgP6AAQD+AICAgAIA/gACAICA/gADgP6AgP6AAAACAAAAAACAA4AAAwAHAAAxETMRAzUzFYCAgAKA/YADAICAAAAEAAD/gAKAAwAAAwAHAAsADwAAFzUhFSURMxEhETMRAzUzFYABgP4AgAGAgICAgICAgAEA/wACAP4AAoCAgAAABQAAAAACAAOAAAMABwALAA8AFwAAITUzFSU1MxUDNTMVPQEzFQERMxEzFSMRAYCA/wCAgICA/gCAgICAgICAgAEAgICAgID+AAOA/gCA/wAAAAAAAgAAAAABAAOAAAMABwAAMzUzFSURMxGAgP8AgICAgAMA/QAABAAAAAACgAKAAAMABwANABEAAAERMxETETMRIREhFSMRATUzFQEAgICA/YABAIABAIABAAEA/wD/AAIA/gACgID+AAIAgIAAAgAAAAACgAKAAAMACQAAIREzESERIRUhEQIAgP2AAgD+gAIA/gACgID+AAAEAAAAAAKAAoAAAwAHAAsADwAAMzUhFSURMxEhETMRATUhFYABgP4AgAGAgP4AAYCAgIABgP6AAYD+gAGAgIAAAwAA/4ACgAKAAAMADwATAAABETMRAREzFTMVIxUhFSEREzUhFQIAgP2AgICAAYD+gIABAAEAAQD/AP6AAwCAgICA/wACgICAAAAAAAMAAP+AAoACgAADAAcAEwAAGQEzGQE1IRUTESE1ITUjNTM1MxGAAQCA/oABgICAgAEAAQD/AAEAgID9gAEAgICAgP0AAAAAAAMAAAAAAoACgAADAAsADwAAATUzFQERMxUzFSMREzUhFQIAgP2AgICAgAEAAYCAgP6AAoCAgP6AAgCAgAAAAAAFAAAAAAKAAoAAAwAHAAsADwATAAAxNSEVPQEzFSU1IRUlNTMVPQEhFQIAgP4AAYD+AIACAICAgICAgICAgICAgICAAAIAAAAAAYADgAADAA8AACE1MxUlESM1MxEzETMVIxEBAID/AICAgICAgICAAYCAAQD/AID+gAAAAgAAAAACgAKAAAMACQAANREzERU1IREzEYABgICAAgD+AICAAgD9gAAAAAAFAAAAAAKAAoAAAwAHAAsADwATAAAhNTMVJTUzFTM1MxUlETMRIREzEQEAgP8AgICA/gCAAYCAgICAgICAgIABgP6AAYD+gAACAAAAAAKAAoAAAwANAAA1ETMRFTUzETMRMxEzEYCAgICAgAIA/gCAgAEA/wACAP2AAAAACQAAAAACgAKAAAMABwALAA8AEwAXABsAHwAjAAAxNTMVITUzFSU1MxUzNTMVJTUzFSU1MxUzNTMVJTUzFSE1MxWAAYCA/gCAgID/AID/AICAgP4AgAGAgICAgICAgICAgICAgICAgICAgICAgIAAAAMAAP+AAoACgAADAAcADwAAFzUhFQERMxEBNSE1IREzEYABgP4AgAGA/oABgICAgIABgAGA/oD/AICAAYD9gAADAAAAAAKAAoAABwALABMAADE1MzUzFSEVATUzFT0BITUhFSMVgIABgP6AgP6AAoCAgICAgAEAgICAgICAgAAABQAAAAACAAOAAAMABwALAA8AEwAAITUhFSURMxEBNTMVNREzGQE1IRUBAAEA/oCA/wCAgAEAgICAAQD/AAEAgICAAQD/AAEAgIAAAAEAAAAAAIADgAADAAAxETMRgAOA/IAAAAUAAAAAAgADgAADAAcACwAPABMAADE1IRU1ETMZATUzFSURMxEBNSEVAQCAgP8AgP6AAQCAgIABAP8AAQCAgIABAP8AAQCAgAAAAAAEAAACgAMAA4AAAwAHAAsADwAAETUzFSE1IRUlNSEVITUzFYABAAEA/gABAAEAgAKAgICAgICAgICAAAACAAAAAACAA4AAAwAHAAAxETMRAzUzFYCAgAKA/YADAICAAAADAAAAAAIAAwAAAwAHAAsAADM1IRUlETMZATUhFYABgP4AgAGAgICAAgD+AAIAgIAAAAAAAgAAAAACAAMAAA8AEwAAMTUzESM1MzUzFTMVIxEhFQE1MxWAgICAgIABAP8AgIABAICAgID/AIACgICAAAAAAAUAAAEAAYACgAADAAcACwAPABMAABE1MxUzNTMVJTUzFSU1MxUzNTMVgICA/wCA/wCAgIABAICAgICAgICAgICAgAAABQAAAAACgAOAABMAFwAbAB8AIwAAITUjNTM1IzUzNTMVMxUjFTMVIxUBNTMVMzUzFSU1MxUhNTMVAQCAgICAgICAgID/AICAgP4AgAGAgICAgICAgICAgIACgICAgICAgICAgAAAAAACAAAAAACAA4AAAwAHAAAxETMRAxEzEYCAgAGA/oACAAGA/oAAAAAABQAA/4ACgAMAAAcACwAPABMAGwAABTUjNSEVIxUTNTMVIREzEQE1MxUlNTM1MxUzFQEAgAGAgICA/YCAAYCA/gCAgICAgICAgAEAgIABgP6AAQCAgICAgICAAAADAAAAAAMAA4AABwALAA8AAAERIRUjFTMVFxEhEQcRIREBAAEAgICA/gCAAwABAAGAgICAgAKA/YCAA4D8gAAAAQAAAQABgAMAAAcAABkBITUhNSERAQD/AAGAAQABAICA/gAACgAAAAACgAKAAAMABwALAA8AEwAXABsAHwAjACcAACE1MxUzNTMVJTUzFTM1MxUlNTMVMzUzFSU1MxUzNTMVJTUzFTM1MxUBAICAgP4AgICA/gCAgID/AICAgP8AgICAgICAgICAgICAgICAgICAgICAgICAgICAAAAAAAEAAACAAoABgAAFAAAlNSE1IRECAP4AAoCAgID/AAAAAQCAAQACAAGAAAMAABM1IRWAAYABAICAAAAAAAMAAAAAAwADgAAFAA0AEQAAAREhESMVBTUjNTMRIREHESERAQABAIABAICA/gCAAwABAAGA/wCAgICAAYD9gIADgPyAAAAAAAEAAAMAAoADgAADAAARNSEVAoADAICAAAIAAAIAAYADgAADAAcAAAE1IxUHESERAQCAgAGAAoCAgIABgP6AAAACAAD/gAKAAwAAAwAPAAAVNSEVAREhNSERMxEhFSERAoD+gP8AAQCAAQD/AICAgAEAAQCAAQD/AID/AAACAAACAAEAA4AABQAJAAAZATMVMxUDNTMVgICAgAIAAQCAgAEAgIAAAQAAAgABAAOAAAcAABE1MzUjNSERgIABAAIAgICA/oAAAAAAAQGAAwACgAOAAAMAAAE1IRUBgAEAAwCAgAAAAAEAAP+AAoADAAAJAAAVETMRIREzESEVgAGAgP4AgAOA/YACgP0AgAADAAAAAAKAAwAAAwANABEAABE1MxUTESM1MzUjNSERMxEzEYCAgICAAQCAgAIAgID+AAGAgICA/QADAP0AAAAAAQAAAYAAgAIAAAMAABE1MxWAAYCAgAAAAgCA/4ACAACAAAMABwAAFzUhFT0BMxWAAQCAgICAgICAAAAAAQAAAoAAgAOAAAMAABkBMxGAAoABAP8AAAAAAAIAAAIAAYADgAADAAcAAAE1IxUHESERAQCAgAGAAoCAgIABgP6AAAAKAAAAAAKAAoAAAwAHAAsADwATABcAGwAfACMAJwAAMTUzFTM1MxUlNTMVMzUzFSU1MxUzNTMVJTUzFTM1MxUlNTMVMzUzFYCAgP8AgICA/wCAgID+AICAgP4AgICAgICAgICAgICAgICAgICAgICAgICAgICAAAAIAAAAAAKAA4AAAwAJAA0AEQAVABkAHQAhAAAxNTMVIREzFTMVJREzESU1MxUlNTMVNREzESURMxElNTMVgAEAgID+AIABAID+gICA/gCAAYCAgIABAICAgAEA/wCAgICAgICAAQD/AIABAP8AgICAAAAAAAcAAAAAAoADgAADAAcADQARABUAGQAdAAAxNTMVNREzEQU1IxEhEQE1MxU1ETMRJREzESU1MxWAgAEAgAEA/oCAgP4AgAGAgICAgAEA/wCAgAEA/oABgICAgAEA/wCAAQD/AICAgAAABwAAAAACgAOAAAMABwANABEAFQAdACEAADE1MxU1ETMRBTUjESERATUzFTURMxEhNTM1IzUhEQE1MxWAgAEAgAEA/oCAgP4AgIABAAEAgICAgAEA/wCAgAEA/oABgICAgAEA/wCAgID+gAEAgIAAAAYAAAAAAoADgAADAAcACwAPABMAFwAAMzUhFT0BMxUhETMZATUzFT0BMxUDNTMVgAGAgP2AgICAgICAgICAgAEA/wABAICAgICAAQCAgAAAAwAAAAACgAOAAAsADwATAAAxETMVITUzESMRIRkBNSEVATUhFYABgICA/oABgP4AAQACAICA/gABAP8AAgCAgAEAgIAAAAAAAwAAAAACgAOAAAsADwATAAAxETMVITUzESMRIRkBNSEVAzUhFYABgICA/oABgIABAAIAgID+AAEA/wACAICAAQCAgAAFAAAAAAKAA4AACwAPABMAFwAbAAAxETMVITUzESMRIRkBNSEVJTUzFSE1MxUlNSEVgAGAgID+gAGA/gCAAYCA/gABgAIAgID+AAEA/wACAICAgICAgICAgIAAAAUAAAAAAwADgAALAA8AFwAbAB8AADERMxUhNTMRIxEhEQM1Mx0BNSE1IRUjFQE1IRUhNTMVgAGAgID+gICAAQABAID+gAEAAQCAAgCAgP4AAQD/AAKAgICAgICAgAEAgICAgAAEAAAAAAKAA4AACwAPABMAFwAAMREzFSE1MxEjESEZATUhFQE1MxUzNTMVgAGAgID+gAGA/oCAgIACAICA/gABAP8AAgCAgAEAgICAgAAAAAMAAAAAAoADgAALAA8AEwAAMREzFSE1MxEjESEZATUhFQE1MxWAAYCAgP6AAYD/AIACAICA/gABAP8AAgCAgAEAgIAAAQAAAAACgAOAABUAADERMxUzNSM1IRUhFTMVIxEhFSERIxGAgIACAP8AgIABAP6AgAMAgICAgICA/oCAAgD+AAAAAAAHAAD/gAKAA4AAAwAHAAsADwATABcAGwAABTUhFT0BMxUlNSEVPQEzFSERMxEBNTMVJTUhFQEAAQCA/gABgID9gIABgID+AAGAgICAgICAgICAgICAAgD+AAGAgICAgIAAAAAAAgAAAAACgAOAAAsADwAAMREhFSEVIRUhFSEVATUhFQKA/gABAP8AAgD9gAEAAoCAgICAgAMAgIAAAAAAAgAAAAACgAOAAAsADwAAMREhFSEVIRUhFSEVATUhFQKA/gABAP8AAgD/AAEAAoCAgICAgAMAgIAAAAAABQAAAAACgAOAAAkADQARABUAGQAAMREzFSEVIRUhFQE1IRUlNTMVITUzFSU1IRWAAQD/AAIA/gABgP4AgAGAgP4AAYACAICAgIACAICAgICAgICAgIAAAAMAAAAAAoADgAALAA8AEwAAMREhFSEVIRUhFSEVATUzFTM1MxUCgP4AAQD/AAIA/gCAgIACgICAgICAAwCAgICAAAAAAgAAAAACAAOAAAsADwAAMzUzESM1IRUjETMVATUhFYCAgAGAgID+AAEAgAGAgID+gIADAICAAAACAIAAAAKAA4AACwAPAAAzNTMRIzUhFSMRMxUDNSEVgICAAYCAgIABAIABgICA/oCAAwCAgAAAAAQAAAAAAoADgAALAA8AEwAXAAAzNTMRIzUhFSMRMxUBNTMVITUzFSU1IRWAgIABgICA/gCAAYCA/gABgIABgICA/oCAAoCAgICAgICAAAAAAwAAAAABgAOAAAsADwATAAAxNTMRIzUhFSMRMxUBNTMVMzUzFYCAAYCAgP6AgICAgAGAgID+gIADAICAgIAAAAIAAAAAAwADgAADABMAACURMxEFESM1MxEhFSERMxUjESEVAoCA/YCAgAIA/oCAgAGAgAKA/YCAAYCAAYCA/wCA/wCAAAAAAAUAAAAAAwADgAADAAsAFQAZAB0AAAE1MxUBETMRMxUjESE1IzUzESM1IREBNSEVITUzFQEAgP6AgICAAYCAgIABAP4AAQABAIABAICA/wADAP8AgP6AgIABgID9AAMAgICAgAAFAAAAAAKAA4AAAwAHAAsADwATAAAzNSEVJREzESERMxEBNSEVATUhFYABgP4AgAGAgP4AAYD+AAEAgICAAYD+gAGA/oABgICAAQCAgAAAAAUAAAAAAoADgAADAAcACwAPABMAADM1IRUlETMRIREzEQE1IRUDNSEVgAGA/gCAAYCA/gABgIABAICAgAGA/oABgP6AAYCAgAEAgIAAAAAABwAAAAACgAOAAAMABwALAA8AEwAXABsAADM1IRUlETMRIREzEQE1IRUlNTMVITUzFSU1IRWAAYD+AIABgID+AAGA/gCAAYCA/gABgICAgAGA/oABgP6AAYCAgICAgICAgICAAAcAAAAAAwADgAADAAcACwAPABcAGwAfAAAzNSEVJREzESERMxEBNTMdATUhNSEVIxUBNSEVITUzFYABgP4AgAGAgP2AgAEAAQCA/oABAAEAgICAgAGA/oABgP6AAgCAgICAgICAAQCAgICAAAYAAAAAAoADgAADAAcACwAPABMAFwAAMzUhFSURMxEhETMRATUhFSU1MxUhNTMVgAGA/gCAAYCA/gABgP4AgAGAgICAgAIA/gACAP4AAgCAgICAgICAAAAJAAAAgAKAAwAAAwAHAAsADwATABcAGwAfACMAAD0BMxUhNTMVJTUzFTM1MxUlNTMVJTUzFTM1MxUlNTMVITUzFYABgID+AICAgP8AgP8AgICA/gCAAYCAgICAgICAgICAgICAgICAgICAgICAgIAAAwAAAAACgAOAAAMADQAXAAABETMRATUjETMRMxUhFTURIzUhNSEVMxEBAID/AICAgAEAgP8AAYCAAQABgP6A/wCAAoD+AICAgAIAgICA/YAAAAAABAAAAAACgAOAAAMABwALAA8AADM1IRUlETMRIREzEQE1IRWAAYD+AIABgID9gAEAgICAAgD+AAIA/gACgICAAAQAAAAAAoADgAADAAcACwAPAAAzNSEVJREzESERMxEBNSEVgAGA/gCAAYCA/wABAICAgAIA/gACAP4AAoCAgAAGAAAAAAKAA4AAAwAHAAsADwATABcAADM1IRUlETMRIREzEQE1MxUhNTMVJTUhFYABgP4AgAGAgP2AgAGAgP4AAYCAgIABgP6AAYD+gAIAgICAgICAgAAABQAAAAACgAOAAAMABwALAA8AEwAAMzUhFSURMxEhETMRATUzFTM1MxWAAYD+AIABgID+AICAgICAgAIA/gACAP4AAoCAgICAAAAAAAYAAAAAAoADgAADAAcACwAPABMAFwAAIREzEQE1MxUzNTMVJTUzFSE1MxUBNSEVAQCA/wCAgID+AIABgID9gAEAAYD+gAGAgICAgICAgICAAQCAgAAAAAADAAD/gAKAAwAAAwAHABMAACURMxEBNSEVAREzETMVIxEhFSEVAgCA/oABAP4AgICAAYD+gIABgP6AAYCAgP2AA4D/AID/AICAAAAABAAAAAACgAOAAAMADQARABUAAD0BMx0BNSE1ITUhNTMRATUhFQE1IRWAAYD+gAGAgP4AAYD+AAEAgICAgICAgID+AAIAgIABAICAAAQAAAAAAoADgAADAA0AEQAVAAA9ATMdATUhNSE1ITUzEQE1IRUDNSEVgAGA/oABgID+AAGAgAEAgICAgICAgID+AAIAgIABAICAAAAGAAAAAAKAA4AAAwANABEAFQAZAB0AAD0BMx0BNSE1ITUhNTMRATUhFSU1MxUhNTMVJTUhFYABgP6AAYCA/gABgP4AgAGAgP4AAYCAgICAgICAgP4AAgCAgICAgICAgICAAAAABgAAAAADAAOAAAMADQARABkAHQAhAAA9ATMdATUhNSE1ITUzEQE1Mx0BNSE1IRUjFQE1IRUhNTMVgAGA/oABgID9gIABAAEAgP6AAQABAICAgICAgICAgP4AAoCAgICAgICAAQCAgICAAAAABQAAAAACgAOAAAMADQARABUAGQAAPQEzHQE1ITUhNSE1MxEBNSEVATUzFTM1MxWAAYD+gAGAgP4AAYD+gICAgICAgICAgICA/gACAICAAQCAgICAAAAAAAQAAAAAAoADgAADAA0AEQAVAAA9ATMdATUhNSE1ITUzEQE1IRUBNTMVgAGA/oABgID+AAGA/wCAgICAgICAgID+AAIAgIABAICAAAAEAAAAAAKAAoAAAwAVABkAHQAAPQEzHQE1MzUjNTM1MxUzNTMRIRUhFQE1MxUzNTMVgICAgICAgP8AAQD+AICAgICAgICAgICAgID/AICAAgCAgICAAAAABwAA/4ACgAMAAAMABwALAA8AEwAXABsAAAU1IRU9ATMVJTUhFT0BMxUhETMRATUzFSU1IRUBAAEAgP4AAYCA/YCAAYCA/gABgICAgICAgICAgICAgAGA/oABAICAgICAAAAAAAQAAAAAAoADgAADAA0AEQAVAAAzNSEVJREzFSE1MxEhFRE1IRUBNSEVgAIA/YCAAYCA/gABgP4AAQCAgIABgICA/wCAAYCAgAEAgIAAAAAABAAAAAACgAOAAAMADQARABUAADM1IRUlETMVITUzESEVETUhFQM1IRWAAgD9gIABgID+AAGAgAEAgICAAYCAgP8AgAGAgIABAICAAAYAAAAAAoADgAADAA0AEQAVABkAHQAAMzUhFSURMxUhNTMRIRURNSEVJTUzFSE1MxUlNSEVgAIA/YCAAYCA/gABgP4AgAGAgP4AAYCAgIABgICA/wCAAYCAgICAgICAgICAAAAFAAAAAAKAA4AAAwANABEAFQAZAAAzNSEVJREzFSE1MxEhFRE1IRUBNTMVMzUzFYACAP2AgAGAgP4AAYD+gICAgICAgAGAgID/AIABgICAAQCAgICAAAAAAgAAAAABAAOAAAMABwAAMxEzEQE1IRWAgP8AAQACgP2AAwCAgAAAAAIAAAAAAQADgAADAAcAADERMxEDNSEVgIABAAKA/YADAICAAAQAAAAAAoADgAADAAcACwAPAAAhETMRATUzFSE1MxUlNSEVAQCA/oCAAYCA/gABgAKA/YACgICAgICAgIAAAAADAIAAAAIAA4AAAwAHAAsAACERMxEBNTMVMzUzFQEAgP8AgICAAoD9gAMAgICAgAAEAAAAAAMAA4AAAwAPABMAFwAAIREzESERMxUhNSEVIxUhGQE1IRUhNTMVAgCA/YCAAQABAID+gAEAAQCAAgD+AAMAgICAgP4AAwCAgICAAAUAAAAAAoADgAADAAcACwAPABMAADM1IRUlETMRIREzEQE1IRUBNSEVgAGA/gCAAYCA/gABgP4AAQCAgIABgP6AAYD+gAGAgIABAICAAAAABQAAAAACgAOAAAMABwALAA8AEwAAMzUhFSURMxEhETMRATUhFQM1IRWAAYD+AIABgID+AAGAgAEAgICAAYD+gAGA/oABgICAAQCAgAAAAAAHAAAAAAKAA4AAAwAHAAsADwATABcAGwAAMzUhFSURMxEhETMRATUhFSU1MxUhNTMVJTUhFYABgP4AgAGAgP4AAYD+AIABgID+AAGAgICAAYD+gAGA/oABgICAgICAgICAgIAABwAAAAADAAOAAAMABwALAA8AFwAbAB8AADM1IRUlETMRIREzEQE1Mx0BNSE1IRUjFQE1IRUhNTMVgAGA/gCAAYCA/YCAAQABAID+gAEAAQCAgICAAYD+gAGA/oACAICAgICAgIABAICAgIAABgAAAAACgAOAAAMABwALAA8AEwAXAAAzNSEVJREzESERMxEBNSEVATUzFTM1MxWAAYD+AIABgID+AAGA/oCAgICAgIABgP6AAYD+gAGAgIABAICAgIAAAAMAAACAAoADAAADAAcACwAAJTUzFQE1IRUBNTMVAQCA/oACgP6AgICAgAEAgIABAICAAAADAAAAAAKAAoAAAwANABcAAAE1MxUBNSMRMxEzFSEVNREjNSE1IRUzEQEAgP8AgICAAQCA/wABgIABAICA/wCAAYD/AICAgAEAgICA/oAAAAMAAAAAAoADgAADAAkADQAANREzERU1IREzEQE1IRWAAYCA/YABAIACAP4AgIACAP2AAwCAgAAAAwAAAAACgAOAAAMACQANAAA1ETMRFTUhETMRATUhFYABgID/AAEAgAIA/gCAgAIA/YADAICAAAAFAAAAAAKAA4AAAwAJAA0AEQAVAAA1ETMRFTUhETMRATUzFSE1MxUlNSEVgAGAgP2AgAGAgP4AAYCAAYD+gICAAYD+AAKAgICAgICAgAAAAAQAAAAAAoADgAADAAkADQARAAA1ETMRFTUhETMRATUzFTM1MxWAAYCA/gCAgICAAgD+AICAAgD9gAMAgICAgAAEAAD/gAKAA4AAAwAHAA8AEwAAFzUhFQERMxEBNSE1IREzEQE1IRWAAYD+AIABgP6AAYCA/YABAICAgAGAAYD+gP8AgIABgP2AAwCAgAAAAAMAAP+AAoADgAADAAcAEwAAJREzEQE1IRUBETMRMxUjESEVIRUCAID+gAEA/gCAgIABgP6AgAGA/oABgICA/YAEAP6AgP8AgIAAAAAFAAD/gAKAA4AAAwAHAA8AEwAXAAAXNSEVAREzEQE1ITUhETMRATUzFTM1MxWAAYD+AIABgP6AAYCA/gCAgICAgIABgAGA/oD/AICAAYD9gAMAgICAgAAAAgAAAAACgAOAAAMAEwAANREzERU1MxEjNSEVIRUzFSMRIRWAgIACAP8AgIABAIACgP2AgIACgICAgID+gIAAAAUAAAAAAoACgAADAAcACwAPABsAADM1MxUzNSEVJREzGQE1MxUZATMVMzUjNSERIRWAgIABAP2AgICAgIABAP8AgICAgIABgP6AAYCAgP6AAYCAgID+gIAAAAAABwAAAAACgAOAAAMABwALAA8AEwAXABsAACERMxEBNTMVMzUzFSU1MxUhNTMVATUzFTM1MxUBAID/AICAgP4AgAGAgP4AgICAAYD+gAGAgICAgICAgICAAQCAgICAAAAAAQAAAYADAAIAAAMAABE1IRUDAAGAgIAAAgAAAgABAAOAAAMABwAAGQEzGQE1MxWAgAIAAQD/AAEAgIAAAgAAAgABAAOAAAMABwAAETUzFTURMxGAgAIAgICAAQD/AAAAAgAA/4ABAAEAAAMABwAAFTUzFTURMxGAgICAgIABAP8AAAAAAgAAAgABAAOAAAMABwAAEzUzFSURMxGAgP8AgAIAgICAAQD/AAAAAAQAAAIAAgADgAADAAcACwAPAAAZATMRMxEzEQE1MxUzNTMVgICA/wCAgIACAAEA/wABAP8AAQCAgICAAAQAAAIAAgADgAADAAcACwAPAAARNTMVMzUzFSURMxEzETMRgICA/wCAgIACAICAgICAAQD/AAEA/wAAAAQAAP+AAgABAAADAAcACwAPAAAVNTMVMzUzFSURMxEzETMRgICA/wCAgICAgICAgIABAP8AAQD/AAAAAAEAAAAAAYADAAALAAAzESM1MxEzETMVIxGAgICAgIABgIABAP8AgP6AAAAAAQAAAYABAAKAAAMAABkBIREBAAGAAQD/AAAAAAMAAAAAAoAAgAADAAcACwAAMTUzFTM1MxUzNTMVgICAgICAgICAgIAAAAAAAwAAAAABAAGAAAMABwALAAAzNTMVJTUzFT0BMxWAgP8AgICAgICAgICAgAADAAAAAAEAAYAAAwAHAAsAADE1MxU9ATMVJTUzFYCA/wCAgICAgICAgIAAAAMAAAAAAoADgAADABcAGwAAITUhFSU1IzUzNSM1MzUzFSEVIRUhFSEVETUhFQEAAYD+AICAgICAAQD/AAEA/wABgICAgICAgICAgICAgIACgICAAAIAAAIABIADgAAHABMAABMRIzUhFSMRIREhESMRIxUjNSMRgIABgIABAAKAgICAgAIAAQCAgP8AAYD+gAEAgID/AAAAAAAiAZ4AAQAAAAAAAAAZAAAAAQAAAAAAAQAJAIYAAQAAAAAAAgAHADcAAQAAAAAAAwAUABkAAQAAAAAABAARAC0AAQAAAAAABQALAD4AAQAAAAAABgAJAIYAAQAAAAAABwA8AEkAAQAAAAAACAAeAMIAAQAAAAAACQAKAAoAAQAAAAAACgAmAIUAAQAAAAAACwAXAKsAAQAAAAAADAA5AMIAAQAAAAAADQAoAPsAAQAAAAAADgAuASMAAQAAAAAAEwApAVEAAQAAAAABAAAIAXoAAwABBAkAAAJKAqwAAwABBAkAAQASArgAAwABBAkAAgAOAZYAAwABBAkAAwAiAYIAAwABBAkABAAiAYIAAwABBAkABQAWAaQAAwABBAkABgASArgAAwABBAkABwDGAboAAwABBAkACAAsAoAAAwABBAkACQAKAyQAAwABBAkACgJKAqwAAwABBAkACwA+BPYAAwABBAkADAAiBTQAAwABBAkADQBQBVYAAwABBAkADgBcBaYAAwABBAkAEwA2BgIAAwABBAkBAAAQBjhDb3B5cmlnaHQgYm9iZ3JhdHRvbiAyMDEwRm9udFN0cnVjdCBNaW5lY3JhZnRNaW5lY3JhZnQgUmVndWxhclZlcnNpb24gMS4wRm9udFN0cnVjdCBpcyBhIHRyYWRlbWFyayBvZiBGU0kgRm9udFNob3AgSW50ZXJuYXRpb25hbCBHbWJIHE1pbmVjcmFmdB0gd2FzIGJ1aWx0IHdpdGggRm9udFN0cnVjdApodHRwOi8vd3d3LmZvbnRzaG9wLmNvbWh0dHA6Ly9mb250c3RydWN0LmZvbnRzaG9wLmNvbS9mb250c3RydWN0aW9ucy9zaG93LzM5NDEzM0NyZWF0aXZlIENvbW1vbnMgQXR0cmlidXRpb24gU2hhcmUgQWxpa2VodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1zYS8zLjAvRml2ZSBiaWcgcXVhY2tpbmcgemVwaHlycyBqb2x0IG15IHdheCBiZWRBUUFNZEZwbgBNAGkAbgBlAGMAcgBhAGYAdAAgAFIAZQBnAHUAbABhAHIAVgBlAHIAcwBpAG8AbgAgADEALgAwAFQAaABlACAAIgBEAGoARABDAEgAIgAgAG4AYQBtAGUAIABpAHMAIABvAHcAbgAgAGIAeQAgAG0AZQAgACgAZABqAGQAYwBoAC4AYwBvAG0AKQAuAA0ACgANAAoAVABoAGUAIAAiAE0AaQBuAGUAYwByAGEAZgB0ACIAIABnAGEAbQBlACAAaQBzACAAbwB3AG4AIABiAHkAIABNAG8AagBhAG4AZwAgAFMAcABlAGMAaQBmAGkAYwBhAHQAaQBvAG4AcwAuAEYAbwBuAHQAcwB0AHIAdQBjAHQAIABiAHkAIABGAG8AbgB0AFMAaABvAHAAVABoAGkAcwAgACIATQBpAG4AZQBjAHIAYQBmAHQAIgAgAGYAbwBuAHQAIAB3AGEAcwAgAGEAZABhAHAAdABlAGQAIABpAG4AdABvACAAVAByAHUAZQBUAHkAcABlACAAZgBpAGwAZQAgAGIAeQAgAG0AZQAgACgARABqAEQAQwBIACkALgANAAoADQAKAFQAaABpAHMAIAAiAE0AaQBuAGUAYwByAGEAZgB0ACIAIABmAG8AbgB0ACAAaQBzACAAdQBuAGQAZQByACAAQwByAGUAYQB0AGkAdgBlACAAQwBvAG0AbQBvAG4AcwAgAEwAaQBjAGUAbgBzAGUAIAAoAFMAaABhAHIAZQAgAEEAbABpAGsAZQApAC4ADQAKAA0ACgBUAGgAZQAgACIARABqAEQAQwBIACIAIABuAGEAbQBlACAAaQBzACAAbwB3AG4AIABiAHkAIABtAGUAIAAoAGQAagBkAGMAaAAuAGMAbwBtACkALgANAAoADQAKAFQAaABlACAAIgBNAGkAbgBlAGMAcgBhAGYAdAAiACAAZgBvAG4AdAAgAHMAdAB5AGwAZQAgAHcAYQBzACAAbQBhAGQAZQAgAGIAeQAgAE4AbwB0AGMAaAAuAA0ACgANAAoAVABoAGUAIAAiAE0AaQBuAGUAYwByAGEAZgB0ACIAIABnAGEAbQBlACAAaQBzACAAbwB3AG4AIABiAHkAIABNAG8AagBhAG4AZwAgAFMAcABlAGMAaQBmAGkAYwBhAHQAaQBvAG4AcwAuAGgAdAB0AHAAOgAvAC8AZgBvAG4AdABzAHQAcgB1AGMAdAAuAGYAbwBuAHQAcwBoAG8AcAAuAGMAbwBtAC8AaAB0AHQAcAA6AC8ALwBkAGoAZABjAGgALgBjAG8AbQAvAEMAcgBlAGEAdABpAHYAZQAgAEMAbwBtAG0AbwBuAHMAIABBAHQAdAByAGkAYgB1AHQAaQBvAG4AIABTAGgAYQByAGUAIABBAGwAaQBrAGUAaAB0AHQAcAA6AC8ALwBjAHIAZQBhAHQAaQB2AGUAYwBvAG0AbQBvAG4AcwAuAG8AcgBnAC8AbABpAGMAZQBuAHMAZQBzAC8AYgB5AC0AcwBhAC8AMwAuADAALwBNAGkAbgBlAGMAcgBhAGYAdAAgAGkAcwAgAGoAdQBzAHQAIABhAHcAZQBzAG8AbQBlACAAIQBBAFEAQQBNAGQARgBwAG4AAAADAAAAAAAAAGYAMwAAAAAAAAAAAAAAAAAAAAAAAAAA ";
//var settingsIcon = " iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAIAAADZrBkAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAAFCSURBVDhPlY7/SsJQFMfvq+zeu102386BN/slxtpIW39EQaRoYCWK0JaVlQQhPoCB/qUPEdQDdO7OtihoLvbh8N0557MzMn0arhZvyHIxW85naVZ1rjrYT6e+7ysN+B7gduKsooDgDjimsMj0WWmNupsTUxRMA7To2q9ZBkpT1xKtGXUzKgY4ZYnCv67tQwUHDpLJYzgZhY2ac15zsisCf6iuvT4EwJlXzYkwLKGb5GU4AE6cyqlT+fx4B7KzMITQDTIOeuOgf1zdBnD8Z95TWeeGwQUZDbrA0U45F7tlTnXOdHLX69z3O/XN0nq2VKWUM8ZJeN2+7V4cbNi5kDbVOKOcBFetm8uWWyrmhGmMajTWPFn0pJ1dUQMHTKUB6cfWkl5rSynxhVEG4WemaYagMmrNQxffsRXvJUtpPw7wQNDoF3gj74+Vc8xUAAAAAElFTkSuQmCC ";
var settingsIcon = " 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 ";
var mcpeButtonOldIcon = " iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAABhSURBVEhLY9izcTVNEW0tKExNB1kwta2RRkhDXYvGFqhpDnUf0N6C0SAigEZTEUE0mooIotFURBCNpiKCaDQVEUSjqYggGk1FBBEoFRWlpgNDCsgCIy0EwhTErwyrrLoWAI4KV9f/jHdkAAAAAElFTkSuQmCC ";
var blackIconTransparent = " iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGElEQVR42mNkYGCoZyABMDGQCEY1jBQNAD+jAJe/Rx5TAAAAAElFTkSuQmCC ";
var mcpeExitButtonIcon = " iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAAHMSURBVDhPjZDbSgJRFIb3qzgHx3oE38nCySxRyvJQGIFk2IUJBuLUdDQC6XBfN3XVCxgk5Eus1loza9weggY+9t7/+te/1x71fOfD5/tbwEe4/snrAu0NqtUqcNBL/3Kh4T9QSMJZAkUhL30fjsvbTCNcdUgTZj0JZ5kJJ/LnzEylONcomkDTJOI8kQ8UFpiC4s/3kOGz1jgeDWGMun4hhfBEFETP4wI2SkgUFjbQnoJEj4LkaU+35/CIHJW2oIGIURrHo68pTXTxR08bXHswuO5BfbcA9Z08JJPJ6aaZlSAP+xHHTjDqwe8CcbiVi5AwvVnOVNO9ju0w6t7rQL/XgYPCBlMrZHmV/0FPY8KwWj47Ab1xywHbioO66baB2NvMMPu5TBigTRKG8R4hj3gt0wbLsEFdnbXgstOCStaF8no6aoxCFpxprWTT7DcMi1EX7RM4R0prq7Drrga3a830Twh9QoK8hBGzwESUd9oED4OK6RQjP1pCiu4KbC/QSSu6KTANk1Fem4KaXBDIKOagYRI2radwIgMnwqAeT9RkUYpi1Bsm+yCU9wiFBBNhkOu6QTIKcgOPjOusrp91TdEXNYbNUtSNs7qOGTPhF1U7V2AcJE8CAAAAAElFTkSuQmCC "
//var mcpeExitButtonPressedIcon = " iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC41ZYUyZQAAAYpJREFUOE+dkN1OwkAQRtc34IWQ0AKKoFQo8S8hUhMCwaiUIkHUhKhcwo1eeY+JJPKI485sZ7uFmqhNTnZ39pvTacXLXQDvr3PFW7j+yCyhNgfXdYFE0/EgMfAbSCIECJRMxwF41X2iGa4mWGPWM0JsKdREwUaYqB1sNHKNoWlQhBKUqZC6/PpcEHQ2GlfLBaxk3XyhnghF+Hl0IRtZomVhA+5RxPUN0fPIhyfJ+WEZmhIOcuNq+RGrcZ3z+tMmwx5MhjfQcPagUSlCKpWKN62tCGYoL1EiyWNwBchZeUfDMrOZz3hnZrXowe/Cfa8Lp6UCcVLK08r/Az+NCGWc46wWja7bgBzt5ojjYi4UGJOEMtpLMMNZLRpetuC224J6wQI3n9WNWpJwxrVeyFJeiwadCwgkNTsDVSuj3m404z9BzAkRzCJa1G970JciJ5sm+EezxLG2oZJQx5pjpQ1RB0UeXTAY5LBqiGTxuiHyaSKPinzJQbMh2isp7SXRRFJk23ZU+D/0JF38AQHf5C2bwVq5FZkAAAAASUVORK5CYII="
var mcpeBackground = " iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC41ZYUyZQAAAtZJREFUeF7tmMGJXEEMRDedTcHgm0++G2xwCHP0xQGYyWBzcXRrXjOvqdV8B1DQByGppFJDMd2f0cvfPz/f325fl/3+9mnZFfbj8+uHur6d/0JAYzaQ3+/3jTkw69SsN/PXL8ACQObYzCWKt/NfUON2u20g1QQjVz29uFgzfwlgkQJkMXEHctDE2vnrDZAk0QYNzD5jjAPFW/nrDcgCj0c2eEjGeVA7fz+CNgDaYBMHXOFYO3+/AYLpVdZm+2ZNrJG/BMAELGaeptLEcpv5W4BZxDt4kjDvWjv/6Qpg2cynQxyMgVdxK//DZ/BqyP+Muj3N/P1fwMKv71+WdxAxB9CMJyfOejN/XwGbjNNrmTugnb8FSFXIeSTMxZJIzEDjVv7ZBxDQmA3kKCjmwKxTs97MP/sA1OBbKZBqgpGrnl5crJm/H0E8Bchi4g7koIm1888+QNUEeTyywUMyzoPa+WcfMMH0KmuzfbMm1shfAmACFjNPU2liuc38LcAs4h08SZh3rZ3/dAWwbObTIQ7GwKu4lX/2ASSSsbMPeMTptcwd0M7fAqQq5DwS5mJJJGagcSv/7AMIaMwGchQUc2DWqVlv5p99AGrwrRRINcHIVU8vLtbM348gngJkMXEHctDE2vlnH6Bqgjwe2eAhGedB7fyzD5hgepW12b5ZE2vkLwEwAYuZp6k0sdxm/hZgFvEOniTMu9bOf7oCWDbz6RAHY+BV3Mo/+wASydjZBzzi9FrmDmjnbwFSFXIeCXOxJBIz0LiVf/YBBDRmAzkKijkw69SsN/PPPgA1+FYKpJpg5KqnFxdr5u9HEE8Bspi4AzloYu38sw9QNUEej2zwkIzzoHb+2QdMML3K2mzfrIk18pcAmIDFzNNUmlhuM38LMIt4B08S5l1r5z9dASyb+XSIgzHwKm7ln30AiWTs7AMecXotcwe087cAqQo5j4S5WBKJGWjcyX99/wcRaXxvqKBwrwAAAABJRU5ErkJggg== "
var logoImage = " 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 ";
var dividerImage = " iVBORw0KGgoAAAANSUhEUgAAAgAAAAADCAIAAABqESAqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAAAtSURBVFhH7dUxEQAwCASw91DBddEVURjqjgVyFw/JqwZgoeRcADYaIQCwQvUH6c9EiHECEccAAAAASUVORK5CYII= ";
Base64Decode(android.util.Base64.decode(mcpeFontString, 0), path + "/minecraft.ttf");
Base64Decode(android.util.Base64.decode(settingsIcon, 0), path + "/settings.png");
Base64Decode(android.util.Base64.decode(mcpeButtonOldIcon, 0), path + "/mcpebutton.png");
Base64Decode(android.util.Base64.decode(blackIconTransparent, 0), path + "/blackt.png");
Base64Decode(android.util.Base64.decode(mcpeExitButtonIcon, 0), path + "/mcpeexitbutton.png");
//Base64Decode(android.util.Base64.decode(mcpeExitButtonPressedIcon, 0), path + "/mcpeexitbuttonpressed.png");
Base64Decode(android.util.Base64.decode(mcpeBackground, 0), path + "/mcpebackground.png");

function Base64Decode(byteArray, Path) {
    try {
        var File = new java.io.File(Path);
        if (!File.exists()) {
            File.createNewFile();
            var Stream = new java.io.FileOutputStream(File);
            Stream.write(byteArray);
            Stream.close();
        }
        mcpeFont = new android.graphics.Typeface.createFromFile(path + "/minecraft.ttf");
    } catch (err) {
        print(err);
    }
}

var GUI;
var menu;
var exitUI;

var sBtn = new android.graphics.BitmapFactory.decodeFile(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/minecraftpe/mods/settings.png");
var mcpeBtnOld = new android.graphics.BitmapFactory.decodeFile(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/minecraftpe/mods/mcpebutton.png");
var blackTBtn = new android.graphics.BitmapFactory.decodeFile(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/minecraftpe/mods/blackt.png");
var mcpeExitBtn = new android.graphics.BitmapFactory.decodeFile(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/minecraftpe/mods/mcpeexitbutton.png");
//var mcpeBckgrnd = new android.graphics.BitmapFactory.decodeFile(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/minecraftpe/mods/mcpebackground.png");

var settingsButton = new android.graphics.drawable.BitmapDrawable(sBtn);
var mcpeButtonOldImage = new android.graphics.drawable.BitmapDrawable(mcpeBtnOld);
var blackTImage = new android.graphics.drawable.BitmapDrawable(blackTBtn);
var mcpeExitButtonImage = new android.graphics.drawable.BitmapDrawable(mcpeExitBtn);
//var mcpeExitButtonPressedImage = new android.graphics.drawable.BitmapDrawable(mcpeExitBtn);
//var mcpeBackgroundImage = new android.graphics.drawable.BitmapDrawable(mcpeBckgrnd);*/

var mcpeBtn = getStretchedImage(android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 0, 32, 8, 8), 8*GuiSize, 8*GuiSize, false), 3.7*GuiSize, 4*GuiSize, 2*GuiSize, 2*GuiSize, getContext().getScreenWidth()/11, getContext().getScreenHeight()/14);
var unmcpeBtn = getStretchedImage(android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 8, 32, 8, 8), 8*GuiSize, 8*GuiSize, false), 3.7*GuiSize, 4*GuiSize, 2*GuiSize, 2*GuiSize, getContext().getScreenWidth()/11, getContext().getScreenHeight()/14);
var clicked_image = getStretchedImage(android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 0, 32, 8, 8), 8*GuiSize, 8*GuiSize, false), 3.7*GuiSize, 4*GuiSize, 2*GuiSize, 2*GuiSize, getContext().getScreenWidth()/2, getContext().getScreenHeight()/10);
var unclicked_image = getStretchedImage(android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 8, 32, 8, 8), 8*GuiSize, 8*GuiSize, false), 3.7*GuiSize, 4*GuiSize, 2*GuiSize, 2*GuiSize, getContext().getScreenWidth()/2, getContext().getScreenHeight()/10);
//var mcpeExitBtn = new android.graphics.BitmapFactory.decodeFile(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/mcpeexitbutton.png");
var unmcpeX = getStretchedImage(android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 8, 32, 8, 8), 8*GuiSize, 8*GuiSize, false), 3.7*GuiSize, 4*GuiSize, 2*GuiSize, 2*GuiSize, getContext().getScreenWidth()/18.5, getContext().getScreenHeight()/19);
var mcpeX = getStretchedImage(android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 0, 32, 8, 8), 8*GuiSize, 8*GuiSize, false), 3.7*GuiSize, 4*GuiSize, 2*GuiSize, 2*GuiSize, getContext().getScreenWidth()/19.5, getContext().getScreenHeight()/19);

var State = false;
var State1 = false;
var State2 = false;
var State3 = false;
var State4 = false;
var State5 = false;
var State6 = false;
var State7 = false;
var State8 = false;
var State9 = false;
var State10 = false;
var State11 = false;
var State12 = false;
var State13 = false;
var State14 = false;
var State15 = false;
var State16 = false;
var State17 = false;
var State18 = false;
var State19 = false;
var State20 = false;
var State21 = false;

var spawn = false;
var entityId;

function spawnEntity(entityId){

}

function destroyBlock(x, y, z, side) {
    var data = Level.getData(x, y, z);
    var tile = Level.getTile(x, y, z);
    var gamemode = Level.getGameMode();
    if (gamemode == 0) {
        if (State14 == true) {
            if (tile == 1 && getCarriedItem() == 270 || tile == 1 && getCarriedItem() == 257 || tile == 1 && getCarriedItem() == 274 || tile == 1 && getCarriedItem() == 278 || tile == 1 && getCarriedItem() == 285 || tile == 4 && getCarriedItem() == 270 || tile == 4 && getCarriedItem() == 257 || tile == 4 && getCarriedItem() == 274 || tile == 4 && getCarriedItem() == 278 || tile == 4 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 4, 63);
            } else if (tile == 1 && getCarriedItem() != 270 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285 || tile == 4 && getCarriedItem() != 270 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 4, 64);
            }
            if (tile == 2 || tile == 3) {
                Level.dropItem(x, y, z, 0.5, 3, 63);
            }
            if (tile == 5 || tile == 6 || tile == 12 || tile == 13) {
                Level.dropItem(x, y, z, 0.5, tile, 63, data);
            }
            if (tile == 14 && getCarriedItem() == 257 || tile == 14 && getCarriedItem() == 278 || tile == 14 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 14, 63);
            } else if (tile == 14 && getCarriedItem() != 257 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 14, 64);
            }
            if (tile == 15 && getCarriedItem() == 257 || tile == 15 && getCarriedItem() == 274 || tile == 15 && getCarriedItem() == 278 || tile == 15 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 15, 63);
            } else if (tile == 15 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 15, 64);
            }
            if (tile == 16 && getCarriedItem() == 270 || tile == 16 && getCarriedItem() == 257 || tile == 16 && getCarriedItem() == 274 || tile == 16 && getCarriedItem() == 278 || tile == 16 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 263, 63);
            } else if (tile == 16 && getCarriedItem() != 270 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 263, 64);
            }
            if (tile == 17) {
                Level.dropItem(x, y, z, 0.5, 17, 63, data);
            }
            if (tile == 18 && getCarriedItem() == 359) {
                Level.dropItem(x, y, z, 0.5, 18, 63);
            } else if (tile == 18 && getCarriedItem() != 359) {
                Level.dropItem(x, y, z, 0.5, 18, 64);
            }
            if (tile == 19 || tile == 20) {
                Level.dropItem(x, y, z, 0.5, tile, 63, data);
            }
            if (tile == 21 && getCarriedItem() == 257 || tile == 21 && getCarriedItem() == 274 || tile == 21 && getCarriedItem() == 278 || tile == 21 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 21, 63);
            } else if (tile == 21 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 21, 64);
            }
            if (tile == 22 && getCarriedItem() == 257 || tile == 22 && getCarriedItem() == 274 || tile == 22 && getCarriedItem() == 278 || tile == 22 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 22, 63);
            } else if (tile == 22 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 22, 64);
            }
            if (tile == 24 && getCarriedItem() == 270 || tile == 24 && getCarriedItem() == 257 || tile == 24 && getCarriedItem() == 274 || tile == 24 && getCarriedItem() == 278 || tile == 24 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 24, 63);
            } else if (tile == 24 && getCarriedItem() != 270 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 24, 64);
            }
            if (tile == 26) {
                Level.dropItem(x, y, z, 0.5, 26, 63, data);
            }
            if (tile == 27 && getCarriedItem() == 270 || tile == 27 && getCarriedItem() == 257 || tile == 27 && getCarriedItem() == 274 || tile == 27 && getCarriedItem() == 278 || tile == 27 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 27, 63);
            } else if (tile == 27 && getCarriedItem() != 270 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 27, 64);
            }
            if (tile == 30 && getCarriedItem() == 359) {
                Level.dropItem(x, y, z, 0.5, 287, 63);
            } else if (tile == 30 && getCarriedItem() != 359) {
                Level.dropItem(x, y, z, 0.5, 287, 64);
            }
            if (tile == 31 && getCarriedItem() == 359 || tile == 32 & getCarriedItem() == 359) {
                Level.dropItem(x, y, z, 0.5, tile, 63, data);
            } else if (tile == 31 && getCarriedItem() != 359 || tile == 32 && getCarriedItem() != 359) {
                Level.dropItem(x, y, z, 0.5, tile, 64, data);
            }
            if (tile == 37 || tile == 38 || tile == 39 || tile == 40) {
                Level.dropItem(x, y, z, 0.5, tile, 63);
            }
            if (tile == 41 && getCarriedItem() == 257 || tile == 41 && getCarriedItem() == 278 || tile == 41 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 41, 63);
            } else if (tile == 41 && getCarriedItem() != 257 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 41, 64);
            }
            if (tile == 42 && getCarriedItem() == 257 || tile == 42 && getCarriedItem() == 274 || tile == 42 && getCarriedItem() == 278 || tile == 42 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 42, 63);
            } else if (tile == 42 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 42, 64);
            }
            if (tile == 44 && getCarriedItem() == 257 || tile == 44 && getCarriedItem() == 270 || tile == 44 && getCarriedItem() == 274 || tile == 44 && getCarriedItem() == 278 || tile == 44 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 44, 63);
            } else if (tile == 44 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 44, 64);
            }
            if (tile == 45 && getCarriedItem() == 270 || tile == 45 && getCarriedItem() == 257 || tile == 45 && getCarriedItem() == 274 || tile == 45 && getCarriedItem() == 278 || tile == 45 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 45, 63);
            } else if (tile == 45 && getCarriedItem() != 270 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 45, 64);
            }
            if (tile == 47) {
                Level.dropItem(x, y, z, 0.5, 340, 61);
            }
            if (tile == 48 && getCarriedItem() == 270 || tile == 48 && getCarriedItem() == 257 || tile == 48 && getCarriedItem() == 274 || tile == 48 && getCarriedItem() == 278 || tile == 48 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 48, 63);
            } else if (tile == 48 && getCarriedItem() != 270 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 48, 64);
            }
            if (tile == 49 && getCarriedItem() == 278 || tile == 246 && getCarriedItem() == 278) {
                Level.dropItem(x, y, z, 0.5, 49, 63);
            } else if (tile == 49 && getCarriedItem() != 278 || tile == 246 && getCarriedItem() != 278) {
                Level.dropItem(x, y, z, 0.5, 49, 64);
            }
            if (tile == 50 || tile == 53 || tile == 54) {
                Level.dropItem(x, y, z, 0.5, tile, 63);
            }
            if (tile == 56 && getCarriedItem() == 257 || tile == 57 && getCarriedItem() == 257 || tile == 56 && getCarriedItem() == 278 || tile == 57 && getCarriedItem() == 278 || tile == 56 && getCarriedItem() == 285 || tile == 57 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, tile, 63);
            } else if (tile == 56 && getCarriedItem() != 257 && getCarriedItem() != 278 && getCarriedItem() != 285 || tile == 57 && getCarriedItem() != 257 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, tile, 64);
            }
            if (tile == 61 && getCarriedItem() == 270 || tile == 61 && getCarriedItem() == 257 || tile == 61 && getCarriedItem() == 274 || tile == 61 && getCarriedItem() == 278 || tile == 61 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 61, 63);
            } else if (tile == 61 && getCarriedItem() != 270 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 61, 64);
            }
            if (tile == 63 || tile == 64 || tile == 65 || tile == 66) {
                Level.dropItem(x, y, z, 0.5, tile, 63);
            }
            if (tile == 67 && getCarriedItem() == 270 || tile == 67 && getCarriedItem() == 257 || tile == 67 && getCarriedItem() == 274 || tile == 67 && getCarriedItem() == 278 || tile == 67 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 67, 63);
            } else if (tile == 67 && getCarriedItem() != 270 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 67, 64);
            }
            if (tile == 73 && getCarriedItem() == 257 || tile == 73 && getCarriedItem() == 278 || tile == 73 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 331, 63);
            } else if (tile == 73 && getCarriedItem() != 257 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 331, 64);
            }
            if (tile == 78 && getCarriedItem() == 256 || tile == 78 && getCarriedItem() == 269 || tile == 78 && getCarriedItem() == 273 || tile == 78 && getCarriedItem() == 277 || tile == 78 && getCarriedItem() == 284) {
                Level.dropItem(x, y, z, 0.5, 332, 63);
            } else if (tile == 78 && getCarriedItem() != 256 && getCarriedItem() != 269 && getCarriedItem() != 273 && getCarriedItem() != 277 && getCarriedItem() != 284) {
                Level.dropItem(x, y, z, 0.5, 332, 64);
            }
            if (tile == 80 && getCarriedItem() == 256 || tile == 80 && getCarriedItem() == 269 || tile == 80 && getCarriedItem() == 273 || tile == 80 && getCarriedItem() == 277 || tile == 80 && getCarriedItem() == 284) {
                Level.dropItem(x, y, z, 0.5, 332, 60);
            } else if (tile == 80 && getCarriedItem() != 256 && getCarriedItem() != 269 && getCarriedItem() != 273 && getCarriedItem() != 277 && getCarriedItem() != 284) {
                Level.dropItem(x, y, z, 0.5, 332, 64);
            }
            if (tile == 81 || tile == 82 || tile == 83 || tile == 85 || tile == 86 || tile == 89 || tile == 91 || tile == 96 || tile == 102 || tile == 107) {
                Level.dropItem(x, y, z, 0.5, tile, 63);
            }
            if (tile == 87 && getCarriedItem() == 257 || tile == 87 && getCarriedItem() == 270 || tile == 87 && getCarriedItem() == 274 || tile == 87 && getCarriedItem() == 278 || tile == 87 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 87, 63);
            } else if (tile == 87 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 87, 64);
            }
            if (tile == 98 && getCarriedItem() == 257 || tile == 98 && getCarriedItem() == 270 || tile == 98 && getCarriedItem() == 274 || tile == 98 && getCarriedItem() == 278 || tile == 98 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 98, 63);
            } else if (tile == 98 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 98, 64);
            }
            if (tile == 101 && getCarriedItem() == 257 || tile == 101 && getCarriedItem() == 270 || tile == 101 && getCarriedItem() == 274 || tile == 101 && getCarriedItem() == 278 || tile == 101 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 101, 63);
            } else if (tile == 101 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 101, 64);
            }
            if (tile == 103) {
                Level.dropItem(x, y, z, 0.5, 360, 57);
            }
            if (tile == 108 && getCarriedItem() == 257 || tile == 108 && getCarriedItem() == 270 || tile == 108 && getCarriedItem() == 274 || tile == 108 && getCarriedItem() == 278 || tile == 108 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 108, 63);
            } else if (tile == 108 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 108, 64);
            }
            if (tile == 109 && getCarriedItem() == 257 || tile == 109 && getCarriedItem() == 270 || tile == 109 && getCarriedItem() == 274 || tile == 109 && getCarriedItem() == 278 || tile == 109 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 109, 63);
            } else if (tile == 109 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 109, 64);
            }
            if (tile == 112 && getCarriedItem() == 257 || tile == 112 && getCarriedItem() == 270 || tile == 112 && getCarriedItem() == 274 || tile == 112 && getCarriedItem() == 278 || tile == 112 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 112, 63);
            } else if (tile == 112 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 112, 64);
            }
            if (tile == 114 && getCarriedItem() == 257 || tile == 114 && getCarriedItem() == 270 || tile == 114 && getCarriedItem() == 274 || tile == 114 && getCarriedItem() == 278 || tile == 114 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 114, 63);
            } else if (tile == 114 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 114, 64);
            }
            if (tile == 128 && getCarriedItem() == 257 || tile == 128 && getCarriedItem() == 270 || tile == 128 && getCarriedItem() == 274 || tile == 128 && getCarriedItem() == 278 || tile == 128 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 128, 63);
            } else if (tile == 128 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 128, 64);
            }
            if (tile == 134 || tile == 135 || tile == 136 || tile == 158 || tile == 170 || tile == 171 || tile == 245 || tile == 247) {
                Level.dropItem(x, y, z, 0.5, tile, 63, data);
            }
            if (tile == 139 && getCarriedItem() == 257 || tile == 139 && getCarriedItem() == 270 || tile == 139 && getCarriedItem() == 274 || tile == 139 && getCarriedItem() == 278 || tile == 139 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 139, 63);
            } else if (tile == 139 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 139, 64);
            }
            if (tile == 155 && getCarriedItem() == 257 || tile == 155 && getCarriedItem() == 270 || tile == 155 && getCarriedItem() == 274 || tile == 155 && getCarriedItem() == 278 || tile == 155 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 155, 63);
            } else if (tile == 155 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 155, 64);
            }
            if (tile == 156 && getCarriedItem() == 257 || tile == 156 && getCarriedItem() == 270 || tile == 156 && getCarriedItem() == 274 || tile == 156 && getCarriedItem() == 278 || tile == 156 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 156, 63);
            } else if (tile == 156 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 156, 64);
            }
            if (tile == 173 && getCarriedItem() == 257 || tile == 173 && getCarriedItem() == 270 || tile == 173 && getCarriedItem() == 274 || tile == 173 && getCarriedItem() == 278 || tile == 173 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 173, 63);
            } else if (tile == 173 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 173, 64);
            }
            if (tile == 244 && getCarriedItem() == 257 || tile == 244 && getCarriedItem() == 270 || tile == 244 && getCarriedItem() == 274 || tile == 244 && getCarriedItem() == 278 || tile == 244 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 457, 63);
            } else if (tile == 244 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 457, 64);
            }
            if (tile == 250) {
                Level.dropItem(x, y, z, 0, 247, 64);
            }
        }
    }
}

function leaveGame() {
    State = false;
    State1 = false;
    State2 = false;
    State3 = false;
    State4 = false;
    State5 = false;
    State6 = false;
    State7 = false;
    State8 = false;
    State9 = false;
    State10 = false;
    State11 = false;
    State12 = false;
    State13 = false;
    State14 = false;
    State15 = false;
	State16 = false;
	State17 = false;
	State18 = false;
	State19 = false;
	State20 = false;
	State21 = false;
	closeMenu();
	if(showList == "on"){
		closeHacksList();
	}
}

function dip2px(dips) {
        var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
        return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
    }
    //Add menu button
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({
    run: function() {
        try {
			Load();
            var layout = new android.widget.LinearLayout(ctx);
            layout.setOrientation(1);
			
			var menuBtn = new android.widget.Button(ctx);
			if(useOldIcon == "on"){
            menuBtn = new android.widget.Button(ctx);
			menuBtn.setBackgroundDrawable(settingsButton);
			}else if(useOldIcon == "off"){
			menuBtn = minecraftButtonO("•••");
			}
			
			menuBtn.setTextSize(20);
            menuBtn.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg) {
                    Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 100);
                    mainMenu();
                    exit();
                }
            }));
            layout.addView(menuBtn);

            GUI = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
            GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 90, 0);
        } catch (err) {
            print('An error occured: ' + err);
        }
    }
}));

/*function showHacksStates() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                hacksStatesGUI = new android.widget.PopupWindow(ctx);
                var layout = new android.widget.LinearLayout(ctx);
                hacksStatesGUI.setContentView(layout);
                var StatesText = new android.widget.TextView(ctx);
                var StateText = "";
                var State1Text = "";
                StatesText.setTextSize(10);
                if (State == true) {
                    StateText = "Walk through blocks | ";
                } else if (State == false) {
                    StateText = "";
                } else if (State1 == true) {
                    StateText1 = "No attack damage | ";
                } else if (State1 == false) {
                    StateText1 = "";
                }
                StatesText.setText(StateText + State1Text); //Title
                StatesText.setTypeface(mcpeFont);
                StatesText.setTextColor(android.graphics.Color.WHITE); //Color
                StatesText.setGravity(android.view.Gravity.CENTER);
                layout.addView(StatesText);
            } catch (error) {
                print('An error occured: ' + error);
            }
        }
    }))
}*/

function showHacksList(){
	if(showList == "on"){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
    try{
    var hacksListLayout = new android.widget.LinearLayout(ctx);
    var hacksListScroll = new android.widget.ScrollView(ctx);
    var hacksListLayout1 = new android.widget.LinearLayout(ctx);
    hacksListLayout.setOrientation(1);
    hacksListLayout1.setOrientation(1);
    hacksListScroll.addView(hacksListLayout);
    hacksListLayout1.addView(hacksListScroll);
    //--------Add Buttons-------//
					/*var newLineText = new android.widget.TextView(ctx);
					var authorText = new android.widget.TextView(ctx);
					var currentModVersionText = new android.widget.TextView(ctx);
					var targetMCPEVersionText = new android.widget.TextView(ctx);
					var MCPEVersionText = new android.widget.TextView(ctx);
					var newLine2Text = new android.widget.TextView(ctx);
					var btn = new android.widget.Button(ctx);*/
					var StateText = "";
					var State1Text = "";
					var State2Text = "";
					var State3Text = "";
					var State4Text = "";
					var State5Text = "";
					var State6Text = "";
					var State7Text = "";
					var State8Text = "";
					var State9Text = "";
					var State10Text = "";
					var State11Text = "";
					var State12Text = "";
					var State13Text = "";
					var State14Text = "";
					var State15Text = "";
					var State16Text = "";
					var State17Text = "";
					var State18Text = "";
					var State19Text = "";
					var State20Text = "";
					var State21Text = "";
					if (State == true) {
                    StateText = "Walk through blocks\n";
					} else if (State == false) {
                    StateText = "";
					} if (State1 == true) {
                    State1Text = "InstaHeal\n";
					} else if (State1 == false) {
                    State1Text = "";
					} if (State2 == true) {
                    State2Text = "Fly\n";
					} else if (State2 == false) {
                    State2Text = "";
					} if (State3 == true) {
                    State3Text = "Set entities on fire\n";
					} else if (State3 == false) {
                    State3Text = "";
					} if (State4 == true) {
                    State4Text = "Gamespeed x2\n";
					} else if (State4 == false) {
                    State4Text = "";
					} if (State5 == true) {
                    State5Text = "TapSpammer\n";
					} else if (State5 == false) {
                    State5Text = "";
					} if (State6 == true) {
                    State6Text = "Sneaking\n";
					} else if (State6 == false) {
                    State6Text = "";
					} if (State7 == true) {
                    State7Text = "Zoom\n";
					} else if (State7 == false) {
                    State7Text = "";
					} if (State8 == true) {
                    State8Text = "Show coords\n";
					} else if (State8 == false) {
                    State8Text = "";
					} if (State9 == true) {
                    State9Text = "InstaMine\n";
					} else if (State9 == false) {
                    State9Text = "";
					} if (State10 == true) {
                    State10Text = "Knockback\n";
					} else if (State10 == false) {
                    State10Text = "";
					} if (State11 == true) {
                    State11Text = "X-Ray\n";
					} else if (State11 == false) {
                    State11Text = "";
					} if (State12 == true) {
                    State12Text = "Always day\n";
					} else if (State12 == false) {
                    State12Text = "";
					} if (State13 == true) {
                    State13Text = "Saddle Up\n";
					} else if (State13 == false) {
                    State13Text = "";
					} if (State14 == true) {
                    State14Text = "StackDrop\n";
					} else if (State14 == false) {
                    State14Text = "";
					} if (State15 == true) {
                    State15Text = "TapTeleporter\n";
					} else if (State15 == false) {
                    State15Text = "";
					} if (State16 == true) {
                    State16Text = "InstaKill\n";
					} else if (State16 == false) {
                    State16Text = "";
					} if (State17 == true) {
                    State17Text = "SignEditor\n";
					} else if (State17 == false) {
                    State17Text = "";
					} if (State18 == true) {
                    State18Text = "All items eatable\n";
					} else if (State18 == false) {
                    State18Text = "";
					} if (State19 == true) {
                    State19Text = "Sprinting\n";
					} else if (State19 == false) {
                    State19Text = "";
					} if (State20 == true) {
                    State20Text = "JetPack\n";
					} else if (State20 == false) {
                    State20Text = "";
					} if (State21 == true) {
                    State21Text = "HighJump\n";
					} else if (State21 == false) {
                    State21Text = "";
					}
					var StatesText = minecraftText(StateText + State1Text + State2Text + State3Text + State4Text + State5Text + State6Text + State7Text + State8Text + State9Text + State10Text + State11Text + State12Text + State13Text + State14Text + State15Text + State16Text + State17Text + State18Text + State19Text + State20Text + State21Text);
					StatesText.setTextSize(10);
					//StatesText.setText(StateText + State1Text); //Title
					hacksListLayout.addView(StatesText);
					//var spritesheet = android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 0, 0, 16, 16), 16*GuiSize, 16*GuiSize, false);
					/*newLineText.setText("\n");
					authorText.setText("Author : " + MOD_AUTHOR);
					currentModVersionText.setText("Current mod version : v" + CURRENT_VERSION);
					targetMCPEVersionText.setText("Target MCPE version : v" + targetMCPEVersion);
					MCPEVersionText.setText("Current MCPE version : v" + mcpeVersion);
					newLine2Text.setText("\n");
                    //btn.setText("Ok");*/
     
    //More buttons...
    hacksList = new android.widget.PopupWindow(hacksListLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth() / 4, ctx.getWindowManager().getDefaultDisplay().getHeight() / 2);
    //hacksList.setBackgroundDrawable(getStretchedImage(spritesheet, 4*GuiSize, 4*GuiSize, 8*GuiSize, 8*GuiSize,getContext().getScreenWidth()/2, getContext().getScreenHeight()));
    hacksList.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
    }catch(error){
    print('An error occured: ' + error);
    }
    }}));
	}
}

function reloadHacksList(){
	if(showList == "on"){
	hacksList.dismiss();
	showHacksList();
	}
}

function aboutScreen(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
    try{
    var aboutMenuLayout = new android.widget.LinearLayout(ctx);
    var aboutMenuScroll = new android.widget.ScrollView(ctx);
    var aboutMenuLayout1 = new android.widget.LinearLayout(ctx);
    aboutMenuLayout.setOrientation(1);
    aboutMenuLayout1.setOrientation(1);
    aboutMenuScroll.addView(aboutMenuLayout);
    aboutMenuLayout1.addView(aboutMenuScroll);
    //--------Add Buttons-------//
					/*var newLineText = new android.widget.TextView(ctx);
					var authorText = new android.widget.TextView(ctx);
					var currentModVersionText = new android.widget.TextView(ctx);
					var targetMCPEVersionText = new android.widget.TextView(ctx);
					var MCPEVersionText = new android.widget.TextView(ctx);
					var newLine2Text = new android.widget.TextView(ctx);
					var btn = new android.widget.Button(ctx);*/
					var newLineText = minecraftText("\n");
					var authorsText = minecraftText("Author : " + MOD_AUTHOR);
					var creditsText = minecraftText("Credits : " + MOD_CREDITS);
					var currentModVersionText = minecraftText("Current mod version : v" + CURRENT_VERSION);
					var targetMCPEVersionText = minecraftText("Target MCPE version : v" + targetMCPEVersion);
					var MCPEVersionText = minecraftText("Current MCPE version : v" + mcpeVersion);
					var newLine2Text = minecraftText("\n");
					var btn = minecraftButton("Ok");
                    var dialogLayout = new android.widget.LinearLayout(ctx);
					var spritesheet = android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 0, 0, 16, 16), 16*GuiSize, 16*GuiSize, false);
					authorsText.setGravity(android.view.Gravity.CENTER);
					creditsText.setGravity(android.view.Gravity.CENTER);
					currentModVersionText.setGravity(android.view.Gravity.CENTER);
					targetMCPEVersionText.setGravity(android.view.Gravity.CENTER);
					MCPEVersionText.setGravity(android.view.Gravity.CENTER);
                    aboutMenuLayout.addView(newLineText);
                    aboutMenuLayout.addView(authorsText);
                    aboutMenuLayout.addView(creditsText);
                    aboutMenuLayout.addView(currentModVersionText);
                    aboutMenuLayout.addView(targetMCPEVersionText);
                    aboutMenuLayout.addView(MCPEVersionText);
                    aboutMenuLayout.addView(newLine2Text);
                    aboutMenuLayout.addView(btn);
					/*newLineText.setText("\n");
					authorText.setText("Author : " + MOD_AUTHOR);
					currentModVersionText.setText("Current mod version : v" + CURRENT_VERSION);
					targetMCPEVersionText.setText("Target MCPE version : v" + targetMCPEVersion);
					MCPEVersionText.setText("Current MCPE version : v" + mcpeVersion);
					newLine2Text.setText("\n");
                    //btn.setText("Ok");*/
                    btn.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
							Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 100);
                            aboutMenu.dismiss();
                        }
                    });
     
    //More buttons...
    aboutMenu = new android.widget.PopupWindow(aboutMenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight());
    aboutMenu.setBackgroundDrawable(getStretchedImage(spritesheet, 4*GuiSize, 4*GuiSize, 8*GuiSize, 8*GuiSize,getContext().getScreenWidth()/2, getContext().getScreenHeight()));
    aboutMenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP, 0, 0);
    }catch(error){
    print('An error occured: ' + error);
    }
    }}));
    }

function disableHacks(){
	    State = false;
        State1 = false;
        State2 = false;
        if (Level.getGameMode == 1) {
            Player.setCanFly(1);
        } else if (Level.getGameMode == 0) {
            Player.setCanFly(0);
        }
        State3 = false;
        State4 = false;
        ModPE.setGameSpeed(20);
        State5 = false;
        State6 = false;
        State7 = false;
        State8 = false;
        State9 = false;
        State10 = false;
        State11 = false;
        State12 = false;
        State13 = false;
        State14 = false;
        State15 = false;
		State16 = false;
		State17 = false;
		State18 = false;
		State19 = false;
		State20 = false;
		State21 = false;
}
	
function mainMenu() {
        var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                try {
                    var menuLayout = new android.widget.LinearLayout(ctx);
                    var menuScroll = new android.widget.ScrollView(ctx);
                    var menuLayout1 = new android.widget.LinearLayout(ctx);
                    menuLayout.setOrientation(1);
                    menuLayout1.setOrientation(1);
                    menuScroll.addView(menuLayout);
                    menuLayout1.addView(menuScroll);
                    //--------Add Title--------//
					var divider = android.util.Base64.decode(dividerImage, 0);
                    var logo = android.util.Base64.decode(logoImage, 0);
                    var logoViewer = new android.widget.ImageView(ctx);
                    logoViewer.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(logo, 0, logo.length));
					logoViewer.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
							Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 100);
							exitUI.dismiss(); //Close
							menu.dismiss();
							aboutScreen();
						}
                    }));
                    menuLayout.addView(logoViewer);

                    /*var name = new android.widget.TextView(ctx);
                    name.setTextSize(20);
                    name.setText("AgameR MoreOptions PE");//Title
                    //name.setTypeface(mcpeFont);
                    name.setTextColor(android.graphics.Color.WHITE); //Color
                    name.setGravity(android.view.Gravity.CENTER);
                    if(theme=="Blue"){
                    name.setTypeface(mcpeFont);
                    }

                    menuLayout.addView(name);*/
                    //--------Add Buttons-------//
                    var version = new android.widget.TextView(ctx);
                    //version.setTextSize(15);
                    version.setTextSize(20);
                    version.setText("v" + CURRENT_VERSION); //Title
                    //version.setTypeface(mcpeFont);
                    version.setTextColor(android.graphics.Color.WHITE); //Color
                    version.setGravity(android.view.Gravity.CENTER);
                    if (theme == "Blue") {
                        version.setTypeface(mcpeFont);
                    }

                    menuLayout.addView(version);

					
                    var hacksTitle = new android.widget.TextView(ctx);
                    hacksTitle.setTextSize(12);
                    hacksTitle.setText("\nHacks"); //Title
                    //hacksTitle.setTypeface(mcpeFont);
                    hacksTitle.setTextColor(android.graphics.Color.WHITE); //Color
                    hacksTitle.setGravity(android.view.Gravity.CENTER);
                    if (theme == "Blue") {
                        hacksTitle.setTypeface(mcpeFont);
                        hacksTitle.setTextColor(android.graphics.Color.WHITE);
						if(android.os.Build.VERSION.SDK_INT > 19){ // KITKAT
						hacksTitle.setShadowLayer(1, Math.round(hacksTitle.getLineHeight() / 8), Math.round(hacksTitle.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
						}else{
						hacksTitle.setShadowLayer(0.0001, Math.round(hacksTitle.getLineHeight() / 8), Math.round(hacksTitle.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
						}
                    }

					
					
					var panicButton = new android.widget.Button(ctx);
                    if (theme == "Alternative") {
						panicButton = new android.widget.Button(ctx);
                        panicButton.setText("Panic");
						panicButton.setTextColor(android.graphics.Color.RED);
                        panicButton.setBackgroundColor(android.graphics.Color.GRAY);
                    } else if (theme == "MCPE") {
						panicButton = minecraftButtonRed("Panic");
						panicButton.setTextColor(android.graphics.Color.RED);
                        //panicButton.setTypeface(mcpeFont);
                        //panicButton.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (theme == "Blue") {
						panicButton = new android.widget.Button(ctx);
                        panicButton.setText("Panic");
						panicButton.setTextColor(android.graphics.Color.RED);
                        panicButton.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                        panicButton.setTypeface(mcpeFont);
                    }
                    panicButton.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 100);
							disableHacks();
							menu.dismiss();
							exitUI.dismiss();
							mainMenu();
							exit();
							reloadHacksList();
                            if (theme == "Alternative") {
                                panicButton.setText("Panic");
								panicButton.setTextColor(android.graphics.Color.RED);
                                panicButton.setBackgroundColor(android.graphics.Color.GRAY);
                            } else if (theme == "MCPE") {
                                panicButton.setText("Panic");
                                //panicButton.setTypeface(mcpeFont);
                                //panicButton.setBackgroundDrawable(mcpeButtonOldImage);
							} else if (theme == "Blue") {
                                panicButton.setText("Panic");
                                panicButton.setTextColor(android.graphics.Color.RED);
								panicButton.setBackgroundColor(android.graphics.Color.TRANSPARENT);
								panicButton.setTypeface(mcpeFont);
                            }
                        }
                    }));
                    

                    var button = new android.widget.Button(ctx);
                    if (State == false && theme == "Alternative") {
						button = new android.widget.Button(ctx);
                        Entity.setCollisionSize(Player.getEntity(), 0.6, 1.8);
                        button.setText("Walk through blocks | OFF");
                        button.setBackgroundColor(android.graphics.Color.RED);
                    } else if (State == true && theme == "Alternative") {
						button = new android.widget.Button(ctx);
                        Entity.setCollisionSize(Player.getEntity(), 0, 0);
                        button.setText("Walk through blocks | ON");
                        button.setBackgroundColor(android.graphics.Color.GREEN);
                    } else if (State == false && theme == "MCPE") {
						button = minecraftButton("Walk through blocks | OFF");
                        Entity.setCollisionSize(Player.getEntity(), 0.6, 1.8);
                        //button.setTypeface(mcpeFont);
                        //button.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State == true && theme == "MCPE") {
						button = minecraftButton("Walk through blocks | ON");
                        Entity.setCollisionSize(Player.getEntity(), 0, 0);
                        button.setText("Walk through blocks | ON");
                        //button.setTypeface(mcpeFont);
                        //button.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State == false && theme == "Blue") {
						button = new android.widget.Button(ctx);
                        button.setText("Walk through blocks | OFF");
						button.setTextColor(android.graphics.Color.WHITE);
                        button.setBackgroundColor(android.graphics.Color.TRANSPARENT);
						button.setTypeface(mcpeFont);
                    } else if (State == true && theme == "Blue") {
						button = new android.widget.Button(ctx);
                        button.setText("Walk through blocks | ON");
						button.setTextColor(android.graphics.Color.BLUE);
                        button.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                        button.setTypeface(mcpeFont);
                    }
					
                    button.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 100);
                            if (State == false && theme == "Alternative") {
                                State = true;
								reloadHacksList();
                                Entity.setCollisionSize(Player.getEntity(), 0, 0);
                                button.setText("Walk through blocks | ON");
                                button.setBackgroundColor(android.graphics.Color.GREEN);
                            } else if (State == true && theme == "Alternative") {
                                State = false;
								reloadHacksList();
                                Entity.setCollisionSize(Player.getEntity(), 0.6, 1.8);
                                button.setText("Walk through blocks | OFF");
                                button.setBackgroundColor(android.graphics.Color.RED);
                            } else if (State == false && theme == "MCPE") {
                                State = true;
								reloadHacksList();
                                Entity.setCollisionSize(Player.getEntity(), 0, 0);
                                button.setText("Walk through blocks | ON");
                                //button.setTypeface(mcpeFont);
                                //button.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (State == true && theme == "MCPE") {
                                State = false;
								reloadHacksList();
                                Entity.setCollisionSize(Player.getEntity(), 0.6, 1.8);
                                button.setText("Walk through blocks | OFF");
                                //button.setTypeface(mcpeFont);
                                //button.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (State == false && theme == "Blue") {
								State = true;
								reloadHacksList();
								Entity.setCollisionSize(Player.getEntity(), 0, 0);
								button.setText("Walk through blocks | ON");
								button.setTextColor(android.graphics.Color.BLUE);
								button.setBackgroundColor(android.graphics.Color.TRANSPARENT);
								button.setTypeface(mcpeFont);
							} else if (State == true && theme == "Blue") {
								State = false;
								reloadHacksList();
								Entity.setCollisionSize(Player.getEntity(), 0.6, 1.8);
								button.setText("Walk through blocks | OFF");
								button.setTextColor(android.graphics.Color.WHITE);
								button.setBackgroundColor(android.graphics.Color.TRANSPARENT);
								button.setTypeface(mcpeFont);
							}
                        }
                    }));
                    

                    var button1 = new android.widget.Button(ctx);
                    if (State1 == false && theme == "Alternative") {
						button1 = new android.widget.Button(ctx);
                        button1.setText("InstaHeal | OFF");
                        button1.setBackgroundColor(android.graphics.Color.RED);
                    } else if (State1 == true && theme == "Alternative") {
						button1 = new android.widget.Button(ctx);
                        button1.setText("InstaHeal | ON");
                        button1.setBackgroundColor(android.graphics.Color.GREEN);
                    } else if (State1 == false && theme == "MCPE") {
						button1 = minecraftButton("InstaHeal | OFF");
                        //button1.setTypeface(mcpeFont);
                        //button1.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State1 == true && theme == "MCPE") {
						button1 = minecraftButton("InstaHeal | ON");
                        //button1.setTypeface(mcpeFont);
                        //button1.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State1 == false && theme == "Blue") {
						button1 = new android.widget.Button(ctx);
                        button1.setText("InstaHeal | OFF");
						button1.setTextColor(android.graphics.Color.WHITE);
                        button1.setBackgroundColor(android.graphics.Color.TRANSPARENT);
						button1.setTypeface(mcpeFont);
                    } else if (State1 == true && theme == "Blue") {
						button1 = new android.widget.Button(ctx);
                        button1.setText("InstaHeal | ON");
						button1.setTextColor(android.graphics.Color.BLUE);
                        button1.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                        button1.setTypeface(mcpeFont);
                    }

                    button1.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 100);
                            if (State1 == false && theme == "Alternative") {
                                State1 = true;
								reloadHacksList();
                                button1.setText("InstaHeal | ON");
                                button1.setBackgroundColor(android.graphics.Color.GREEN);
                            } else if (State1 == true && theme == "Alternative") {
                                State1 = false;
								reloadHacksList();
                                button1.setText("InstaHeal | OFF");
                                button1.setBackgroundColor(android.graphics.Color.RED);
                            } else if (State1 == false && theme == "MCPE") {
                                State1 = true;
								reloadHacksList();
                                button1.setText("InstaHeal | ON");
                                //button1.setTypeface(mcpeFont);
                                //button1.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (State1 == true && theme == "MCPE") {
                                State1 = false;
								reloadHacksList();
                                button1.setText("InstaHeal | OFF");
                                //button1.setTypeface(mcpeFont);
                                //button1.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (State1 == false && theme == "Blue") {
								State1 = true;
								reloadHacksList();
								button1.setText("InstaHeal | ON");
								button1.setTextColor(android.graphics.Color.BLUE);
								button1.setBackgroundColor(android.graphics.Color.TRANSPARENT);
								button1.setTypeface(mcpeFont);
							} else if (State1 == true && theme == "Blue") {
								State1 = false;
								reloadHacksList();
								button1.setText("InstaHeal | OFF");
								button1.setTextColor(android.graphics.Color.WHITE);
								button1.setBackgroundColor(android.graphics.Color.TRANSPARENT);
								button1.setTypeface(mcpeFont);
							}
                        }
                    }));
                    

                    var button2 = new android.widget.Button(ctx);
                    if (State2 == false && theme == "Alternative") {
                        if (Level.getGameMode() == 1) {
							button2 = new android.widget.Button(ctx);
                            State2 = true;
                            button2.setText("Fly | ON");
                            Player.setCanFly(1);
                        } else if (Level.getGameMode() == 0) {
							button2 = new android.widget.Button(ctx);
                            State2 = false;
                            button2.setText("Fly | OFF");
                            Player.setCanFly(0);
                        }
                        button2.setBackgroundColor(android.graphics.Color.RED);
                    } else if (State2 == true && theme == "Alternative") {
                        if (Level.getGameMode() == 1) {
							button2 = new android.widget.Button(ctx);
                            State2 = true;
                            button2.setText("Fly | ON");
                            Player.setCanFly(1);
                        } else if (Level.getGameMode() == 0) {
							button2 = new android.widget.Button(ctx);
                            State2 = true;
                            button2.setText("Fly | ON");
                            Player.setCanFly(1);
                        }
                        button2.setBackgroundColor(android.graphics.Color.GREEN);
                    } else if (State2 == false && theme == "MCPE") {
                        if (Level.getGameMode() == 1) {
							button2 = minecraftButton("Fly | ON");
                            State2 = true;
                            Player.setCanFly(1);
                        } else if (Level.getGameMode() == 0) {
							button2 = minecraftButton("Fly | OFF");
                            State2 = false;
                            Player.setCanFly(0);
                        }
                        //button2.setTypeface(mcpeFont);
                        //button2.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State2 == true && theme == "MCPE") {
                        if (Level.getGameMode() == 1) {
							button2 = minecraftButton("Fly | ON");
                            State2 = true;
                            Player.setCanFly(1);
                        } else if (Level.getGameMode() == 0) {
							button2 = minecraftButton("Fly | ON");
                            State2 = true;
                            Player.setCanFly(1);
                        }
                        //button2.setTypeface(mcpeFont);
                        //button2.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State2 == false && theme == "Blue") {
                        if (Level.getGameMode() == 1) {
							button2 = new android.widget.Button(ctx);
							button2.setText("Fly | ON");
							button2.setTextColor(android.graphics.Color.BLUE);
							button2.setBackgroundColor(android.graphics.Color.TRANSPARENT);
							button2.setTypeface(mcpeFont);
                            State2 = true;
                            Player.setCanFly(1);
                        } else if (Level.getGameMode() == 0) {
							button2 = new android.widget.Button(ctx);
							button2.setText("Fly | OFF");
							button2.setTextColor(android.graphics.Color.WHITE);
							button2.setBackgroundColor(android.graphics.Color.TRANSPARENT);
							button2.setTypeface(mcpeFont);
                            State2 = false;
                            Player.setCanFly(0);
                        }
                        //button2.setTypeface(mcpeFont);
                        //button2.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State2 == true && theme == "Blue") {
                        if (Level.getGameMode() == 1) {
							button2 = new android.widget.Button(ctx);
							button2.setText("Fly | ON");
							button2.setTextColor(android.graphics.Color.BLUE);
							button2.setBackgroundColor(android.graphics.Color.TRANSPARENT);
							button2.setTypeface(mcpeFont);
                            State2 = true;
                            Player.setCanFly(1);
                        } else if (Level.getGameMode() == 0) {
							button2 = new android.widget.Button(ctx);
							button2.setText("Fly | ON");
							button2.setTextColor(android.graphics.Color.BLUE);
							button2.setBackgroundColor(android.graphics.Color.TRANSPARENT);
							button2.setTypeface(mcpeFont);
                            State2 = true;
                            Player.setCanFly(1);
                        }
                        //button2.setTypeface(mcpeFont);
                        //button2.setBackgroundDrawable(mcpeButtonOldImage);
                    }

                    button2.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 100);
                            if (State2 == false && theme == "Alternative") {
                                if (Level.getGameMode() == 1) {
                                    State2 = true;
									reloadHacksList();
                                    button2.setText("Fly | ON");
									button2.setBackgroundColor(android.graphics.Color.GREEN);
                                    Player.setCanFly(1);
                                } else if (Level.getGameMode() == 0) {
                                    State2 = true;
									reloadHacksList();
                                    button2.setText("Fly | ON");
									button2.setBackgroundColor(android.graphics.Color.GREEN);
                                    Player.setCanFly(1);
                                }
                            } else if (State2 == true && theme == "Alternative") {
                                if (Level.getGameMode() == 1) {
                                    State2 = true;
									reloadHacksList();
                                    button2.setText("Fly | ON");
									button2.setBackgroundColor(android.graphics.Color.GREEN);
                                    Player.setCanFly(1);
                                } else if (Level.getGameMode() == 0) {
                                    State2 = false;
									reloadHacksList();
                                    button2.setText("Fly | OFF");
									button2.setBackgroundColor(android.graphics.Color.RED);
                                    Player.setCanFly(0);
                                }
                            } else if (State2 == false && theme == "MCPE") {
                                if (Level.getGameMode() == 1) {
                                    State2 = true;
									reloadHacksList();
                                    button2.setText("Fly | ON");
                                    Player.setCanFly(1);
                                } else if (Level.getGameMode() == 0) {
                                    State2 = true;
									reloadHacksList();
                                    button2.setText("Fly | ON");
                                    Player.setCanFly(1);
                                }
                                //button2.setTypeface(mcpeFont);
                                //button2.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (State2 == true && theme == "MCPE") {
                                if (Level.getGameMode() == 1) {
                                    State2 = true;
									reloadHacksList();
                                    button2.setText("Fly | ON");
                                    Player.setCanFly(1);
                                } else if (Level.getGameMode() == 0) {
                                    State2 = false;
									reloadHacksList();
                                    button2.setText("Fly | OFF");
                                    Player.setCanFly(0);
                                }
                                //button2.setTypeface(mcpeFont);
                                //button2.setBackgroundDrawable(mcpeButtonOldImage);
							} else if (State2 == false && theme == "Blue") {
                                if (Level.getGameMode() == 1) {
                                    State2 = true;
									reloadHacksList();
                                    button2.setText("Fly | ON");
									button2.setTextColor(android.graphics.Color.BLUE);
									button2.setBackgroundColor(android.graphics.Color.TRANSPARENT);
									button2.setTypeface(mcpeFont);
                                    Player.setCanFly(1);
                                } else if (Level.getGameMode() == 0) {
                                    State2 = true;
									reloadHacksList();
                                    button2.setText("Fly | ON");
									button2.setTextColor(android.graphics.Color.BLUE);
									button2.setBackgroundColor(android.graphics.Color.TRANSPARENT);
									button2.setTypeface(mcpeFont);
                                    Player.setCanFly(1);
                                }
                                //button2.setTypeface(mcpeFont);
                                //button2.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (State2 == true && theme == "Blue") {
                                if (Level.getGameMode() == 1) {
                                    State2 = true;
									reloadHacksList();
                                    button2.setText("Fly | ON");
									button2.setTextColor(android.graphics.Color.BLUE);
									button2.setBackgroundColor(android.graphics.Color.TRANSPARENT);
									button2.setTypeface(mcpeFont);
                                    Player.setCanFly(1);
                                } else if (Level.getGameMode() == 0) {
                                    State2 = false;
									reloadHacksList();
                                    button2.setText("Fly | OFF");
									button2.setTextColor(android.graphics.Color.WHITE);
									button2.setBackgroundColor(android.graphics.Color.TRANSPARENT);
									button2.setTypeface(mcpeFont);
                                    Player.setCanFly(0);
                                }
                                //button2.setTypeface(mcpeFont);
                                //button2.setBackgroundDrawable(mcpeButtonOldImage);
                            }
                        }
                    }));
                   

                    var button3 = new android.widget.Button(ctx);
                    if (State3 == false && theme == "Alternative") {
						button3 = new android.widget.Button(ctx);
                        button3.setText("Set entities on fire | OFF");
                        button3.setBackgroundColor(android.graphics.Color.RED);
                    } else if (State3 == true && theme == "Alternative") {
						button3 = new android.widget.Button(ctx);
                        button3.setText("Set entities on fire | ON");
                        button3.setBackgroundColor(android.graphics.Color.GREEN);
                    } else if (State3 == false && theme == "MCPE") {
						button3 = minecraftButton("Set entities on fire | OFF");
                        //button3.setTypeface(mcpeFont);
                        //button3.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State3 == true && theme == "MCPE") {
						button3 = minecraftButton("Set entities on fire | ON");
                        //button3.setTypeface(mcpeFont);
                        //button3.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State3 == false && theme == "Blue") {
						button3 = new android.widget.Button(ctx);
                        button3.setText("Set entities on fire | OFF");
						button3.setTextColor(android.graphics.Color.WHITE);
                        button3.setBackgroundColor(android.graphics.Color.TRANSPARENT);
						button3.setTypeface(mcpeFont);
                    } else if (State3 == true && theme == "Blue") {
						button3 = new android.widget.Button(ctx);
                        button3.setText("Set entities on fire | ON");
						button3.setTextColor(android.graphics.Color.BLUE);
                        button3.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                        button3.setTypeface(mcpeFont);
                    }

                    button3.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 100);
                            if (State3 == false && theme == "Alternative") {
                                State3 = true;
								reloadHacksList();
                                button3.setText("Set entities on fire | ON");
                                button3.setBackgroundColor(android.graphics.Color.GREEN);
                            } else if (State3 == true && theme == "Alternative") {
                                State3 = false;
								reloadHacksList();
                                button3.setText("Set entities on fire | OFF");
                                button3.setBackgroundColor(android.graphics.Color.RED);
                            } else if (State3 == false && theme == "MCPE") {
                                State3 = true;
								reloadHacksList();
                                button3.setText("Set entities on fire | ON");
                                //button3.setTypeface(mcpeFont);
                                //button3.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (State3 == true && theme == "MCPE") {
                                State3 = false;
								reloadHacksList();
                                button3.setText("Set entities on fire | OFF");
                                //button3.setTypeface(mcpeFont);
                                //button3.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (State3 == false && theme == "Blue") {
								State3 = true;
								reloadHacksList();
								button3.setText("Set entities on fire | ON");
								button3.setTextColor(android.graphics.Color.BLUE);
								button3.setBackgroundColor(android.graphics.Color.TRANSPARENT);
								button3.setTypeface(mcpeFont);
							} else if (State3 == true && theme == "Blue") {
								State3 = false;
								reloadHacksList();
								button3.setText("Set entities on fire | OFF");
								button3.setTextColor(android.graphics.Color.WHITE);
								button3.setBackgroundColor(android.graphics.Color.TRANSPARENT);
								button3.setTypeface(mcpeFont);
							}
                        }
                    }));
                    

                    var button4 = new android.widget.Button(ctx);
                    if (State4 == false && theme == "Alternative") {
						button4 = new android.widget.Button(ctx);
                        ModPE.setGameSpeed(20);
                        button4.setText("Gamespeed x2 | OFF");
                        button4.setBackgroundColor(android.graphics.Color.RED);
                    } else if (State4 == true && theme == "Alternative") {
						button4 = new android.widget.Button(ctx);
                        ModPE.setGameSpeed(40);
                        button4.setText("Gamespeed x2 | ON");
                        button4.setBackgroundColor(android.graphics.Color.GREEN);
                    } else if (State4 == false && theme == "MCPE") {
						button4 = minecraftButton("Gamespeed x2 | OFF");
                        ModPE.setGameSpeed(20);
                        //button4.setTypeface(mcpeFont);
                        //button4.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State4 == true && theme == "MCPE") {
						button4 = minecraftButton("Gamespeed x2 | ON");
                        ModPE.setGameSpeed(40);
                        //button4.setTypeface(mcpeFont);
                        //button4.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State4 == false && theme == "Blue") {
						button4 = new android.widget.Button(ctx);
						ModPE.setGameSpeed(20);
                        button4.setText("Gamespeed x2 | OFF");
						button4.setTextColor(android.graphics.Color.WHITE);
                        button4.setBackgroundColor(android.graphics.Color.TRANSPARENT);
						button4.setTypeface(mcpeFont);
                    } else if (State4 == true && theme == "Blue") {
						button4 = new android.widget.Button(ctx);
						ModPE.setGameSpeed(40);
                        button4.setText("Gamespeed x2 | ON");
						button4.setTextColor(android.graphics.Color.BLUE);
                        button4.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                        button4.setTypeface(mcpeFont);
                    }
					
                    button4.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 100);
                            if (State4 == false && theme == "Alternative") {
                                State4 = true;
								reloadHacksList();
                                ModPE.setGameSpeed(40);
                                button4.setText("Gamespeed x2 | ON");
                                button4.setBackgroundColor(android.graphics.Color.GREEN);
                            } else if (State4 == true && theme == "Alternative") {
                                State4 = false;
								reloadHacksList();
                                ModPE.setGameSpeed(20);
                                button4.setText("Gamespeed x2 | OFF");
                                button4.setBackgroundColor(android.graphics.Color.RED);
                            } else if (State4 == false && theme == "MCPE") {
                                State4 = true;
								reloadHacksList();
                                ModPE.setGameSpeed(40);
                                button4.setText("Gamespeed x2 | ON");
                                //button4.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (State4 == true && theme == "MCPE") {
                                State4 = false;
								reloadHacksList();
                                ModPE.setGameSpeed(20);
                                button4.setText("Gamespeed x2 | OFF");
                                //button4.setTypeface(mcpeFont);
                                //button4.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (State4 == false && theme == "Blue") {
								State4 = true;
								reloadHacksList();
								ModPE.setGameSpeed(40);
								button4.setText("Gamespeed x2 | ON");
								button4.setTextColor(android.graphics.Color.BLUE);
								button4.setBackgroundColor(android.graphics.Color.TRANSPARENT);
								button4.setTypeface(mcpeFont);
							} else if (State4 == true && theme == "Blue") {
								State4 = false;
								reloadHacksList();
								ModPE.setGameSpeed(20);
								button4.setText("Gamespeed x2 | OFF");
								button4.setTextColor(android.graphics.Color.WHITE);
								button4.setBackgroundColor(android.graphics.Color.TRANSPARENT);
								button4.setTypeface(mcpeFont);
							}
                        }
                    }));
                    

                    var button5 = new android.widget.Button(ctx);
                    if (State5 == false && theme == "Alternative") {
						button5 = new android.widget.Button(ctx);
                        button5.setText("TapSpammer | OFF");
                        button5.setBackgroundColor(android.graphics.Color.RED);
                    } else if (State5 == true && theme == "Alternative") {
						button5 = new android.widget.Button(ctx);
                        button5.setText("TapSpammer | ON");
                        button5.setBackgroundColor(android.graphics.Color.GREEN);
                    } else if (State5 == false && theme == "MCPE") {
						button5 = minecraftButton("TapSpammer | OFF");
                        //button5.setTypeface(mcpeFont);
                        //button5.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State5 == true && theme == "MCPE") {
						button5 = minecraftButton("TapSpammer | ON");
                        //button5.setTypeface(mcpeFont);
                        //button5.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State5 == false && theme == "Blue") {
						button5 = new android.widget.Button(ctx);
                        button5.setText("TapSpammer | OFF");
						button5.setTextColor(android.graphics.Color.WHITE);
                        button5.setBackgroundColor(android.graphics.Color.TRANSPARENT);
						button5.setTypeface(mcpeFont);
                    } else if (State5 == true && theme == "Blue") {
						button5 = new android.widget.Button(ctx);
                        button5.setText("TapSpammer | ON");
						button5.setTextColor(android.graphics.Color.BLUE);
                        button5.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                        button5.setTypeface(mcpeFont);
                    }
					
                    button5.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 100);
                            if (State5 == false && theme == "Alternative") {
                                State5 = true;
								reloadHacksList();
                                button5.setText("TapSpammer | ON");
                                button5.setBackgroundColor(android.graphics.Color.GREEN);
                            } else if (State5 == true && theme == "Alternative") {
                                State5 = false;
								reloadHacksList();
                                button5.setText("TapSpammer | OFF");
                                button5.setBackgroundColor(android.graphics.Color.RED);
                            } else if (State5 == false && theme == "MCPE") {
                                State5 = true;
								reloadHacksList();
                                button5.setText("TapSpammer | ON");
                                //button5.setTypeface(mcpeFont);
                                //button5.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (State5 == true && theme == "MCPE") {
                                State5 = false;
								reloadHacksList();
                                button5.setText("TapSpammer | OFF");
                                //button5.setTypeface(mcpeFont);
                                //button5.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (State5 == false && theme == "Blue") {
								State5 = true;
								reloadHacksList();
								button5.setText("TapSpammer | ON");
								button5.setTextColor(android.graphics.Color.BLUE);
								button5.setBackgroundColor(android.graphics.Color.TRANSPARENT);
								button5.setTypeface(mcpeFont);
							} else if (State5 == true && theme == "Blue") {
								State5 = false;
								reloadHacksList();
								button5.setText("TapSpammer | OFF");
								button5.setTextColor(android.graphics.Color.WHITE);
								button5.setBackgroundColor(android.graphics.Color.TRANSPARENT);
								button5.setTypeface(mcpeFont);
							}
                        }
                    }));
                    

                    var button6 = new android.widget.Button(ctx);
                    if (State6 == false && theme == "Alternative") {
						button6 = new android.widget.Button(ctx);
                        button6.setText("Sneaking | OFF");
                        button6.setBackgroundColor(android.graphics.Color.RED);
                        Entity.setSneaking(Player.getEntity(), 0);
                    } else if (State6 == true && theme == "Alternative") {
						button6 = new android.widget.Button(ctx);
                        button6.setText("Sneaking | ON");
                        button6.setBackgroundColor(android.graphics.Color.GREEN);
                        Entity.setSneaking(Player.getEntity(), 1);
                    } else if (State6 == false && theme == "MCPE") {
						button6 = minecraftButton("Sneaking | OFF");
                        //button6.setTypeface(mcpeFont);
                        //button6.setBackgroundDrawable(mcpeButtonOldImage);
                        Entity.setSneaking(Player.getEntity(), 0);
                    } else if (State6 == true && theme == "MCPE") {
						button6 = minecraftButton("Sneaking | ON");
                        //button6.setTypeface(mcpeFont);
                        //button6.setBackgroundDrawable(mcpeButtonOldImage);
                        Entity.setSneaking(Player.getEntity(), 1);
                    } else if (State6 == false && theme == "Blue") {
						button6 = new android.widget.Button(ctx);
                        button6.setText("Sneaking | OFF");
						button6.setTextColor(android.graphics.Color.WHITE);
                        button6.setBackgroundColor(android.graphics.Color.TRANSPARENT);
						button6.setTypeface(mcpeFont);
						Entity.setSneaking(Player.getEntity(), 0);
                    } else if (State6 == true && theme == "Blue") {
						button6 = new android.widget.Button(ctx);
                        button6.setText("Sneaking | ON");
						button6.setTextColor(android.graphics.Color.BLUE);
                        button6.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                        button6.setTypeface(mcpeFont);
						Entity.setSneaking(Player.getEntity(), 1);
                    }
					
                    button6.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 100);
                            if (State6 == false && theme == "Alternative") {
                                State6 = true;
								reloadHacksList();
                                Entity.setSneaking(Player.getEntity(), 1);
                                button6.setText("Sneaking | ON");
                                button6.setBackgroundColor(android.graphics.Color.GREEN);
                            } else if (State6 == true && theme == "Alternative") {
                                State6 = false;
								reloadHacksList();
                                Entity.setSneaking(Player.getEntity(), 0);
                                button6.setText("Sneaking | OFF");
                                button6.setBackgroundColor(android.graphics.Color.RED);
                            } else if (State6 == false && theme == "MCPE") {
                                State6 = true;
								reloadHacksList();
                                Entity.setSneaking(Player.getEntity(), 1);
                                button6.setText("Sneaking | ON");
                                //button6.setTypeface(mcpeFont);
                                //button6.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (State6 == true && theme == "MCPE") {
                                State6 = false;
								reloadHacksList();
                                Entity.setSneaking(Player.getEntity(), 0);
                                button6.setText("Sneaking | OFF");
                                //button6.setTypeface(mcpeFont);
                                //button6.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (State6 == false && theme == "Blue") {
								State6 = true;
								reloadHacksList();
								Entity.setSneaking(Player.getEntity(), 1);
								button6.setText("Sneaking | ON");
								button6.setTextColor(android.graphics.Color.BLUE);
								button6.setBackgroundColor(android.graphics.Color.TRANSPARENT);
								button6.setTypeface(mcpeFont);
							} else if (State6 == true && theme == "Blue") {
								State6 = false;
								reloadHacksList();
								Entity.setSneaking(Player.getEntity(), 0);
								button6.setText("Sneaking | OFF");
								button6.setTextColor(android.graphics.Color.WHITE);
								button6.setBackgroundColor(android.graphics.Color.TRANSPARENT);
								button6.setTypeface(mcpeFont);
							}
                        }
                    }));
                    

                    var button7 = new android.widget.Button(ctx);
                    if (State7 == false && theme == "Alternative") {
						button7 = new android.widget.Button(ctx);
                        button7.setText("Zoom | OFF");
                        button7.setBackgroundColor(android.graphics.Color.RED);
                        ModPE.resetFov();
                    } else if (State7 == true && theme == "Alternative") {
						button7 = new android.widget.Button(ctx);
                        button7.setText("Zoom | ON");
                        button7.setBackgroundColor(android.graphics.Color.GREEN);
                        ModPE.setFov(10);
                    } else if (State7 == false && theme == "MCPE") {
						button7 = minecraftButton("Zoom | OFF");
                        //button7.setTypeface(mcpeFont);
                        //button7.setBackgroundDrawable(mcpeButtonOldImage);
                        ModPE.resetFov();
                    } else if (State7 == true && theme == "MCPE") {
                        button7 = minecraftButton("Zoom | ON");
                        //button7.setTypeface(mcpeFont);
                        //button7.setBackgroundDrawable(mcpeButtonOldImage);
                        ModPE.setFov(10);
                    } else if (State7 == false && theme == "Blue") {
						button7 = new android.widget.Button(ctx);
                        button7.setText("Zoom | OFF");
						button7.setTextColor(android.graphics.Color.WHITE);
                        button7.setBackgroundColor(android.graphics.Color.TRANSPARENT);
						button7.setTypeface(mcpeFont);
						ModPE.resetFov();
                    } else if (State7 == true && theme == "Blue") {
						button7 = new android.widget.Button(ctx);
                        button7.setText("Zoom | ON");
						button7.setTextColor(android.graphics.Color.BLUE);
                        button7.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                        button7.setTypeface(mcpeFont);
						ModPE.setFov(10);
                    }
					
                    button7.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 100);
                            if (State7 == false && theme == "Alternative") {
                                State7 = true;
								reloadHacksList();
                                ModPE.setFov(10);
                                button7.setText("Zoom | ON");
                                button7.setBackgroundColor(android.graphics.Color.GREEN);
                            } else if (State7 == true && theme == "Alternative") {
                                State7 = false;
								reloadHacksList();
                                ModPE.resetFov();
                                button7.setText("Zoom | OFF");
                                button7.setBackgroundColor(android.graphics.Color.RED);
                            } else if (State7 == false && theme == "MCPE") {
                                State7 = true;
								reloadHacksList();
                                ModPE.setFov(10);
                                button7.setText("Zoom | ON");
                                //button7.setTypeface(mcpeFont);
                                //button7.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (State7 == true && theme == "MCPE") {
                                State7 = false;
								reloadHacksList();
                                ModPE.resetFov();
                                button7.setText("Zoom | OFF");
                                //button7.setTypeface(mcpeFont);
                                //button7.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (State7 == false && theme == "Blue") {
								State7 = true;
								reloadHacksList();
								ModPE.setFov(10);
								button7.setText("Zoom | ON");
								button7.setTextColor(android.graphics.Color.BLUE);
								button7.setBackgroundColor(android.graphics.Color.TRANSPARENT);
								button7.setTypeface(mcpeFont);
							} else if (State7 == true && theme == "Blue") {
								State7 = false;
								reloadHacksList();
								ModPE.resetFov();
								button7.setText("Zoom | OFF");
								button7.setTextColor(android.graphics.Color.WHITE);
								button7.setBackgroundColor(android.graphics.Color.TRANSPARENT);
								button7.setTypeface(mcpeFont);
							}
                        }
                    }));
                    

                    var button8 = new android.widget.Button(ctx);
                    if (State8 == false && theme == "Alternative") {
						button8 = new android.widget.Button(ctx);
                        button8.setText("Show coords | OFF");
                        button8.setBackgroundColor(android.graphics.Color.RED);
                    } else if (State8 == true && theme == "Alternative") {
						button8 = new android.widget.Button(ctx);
                        button8.setText("Show coords | ON");
                        button8.setBackgroundColor(android.graphics.Color.GREEN);
                    } else if (State8 == false && theme == "MCPE") {
						button8 = minecraftButton("Show coords | OFF");
                        //button8.setTypeface(mcpeFont);
                        //button8.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State8 == true && theme == "MCPE") {
						button8 = minecraftButton("Show coords | ON");
                        //button8.setTypeface(mcpeFont);
                        //button8.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State8 == false && theme == "Blue") {
						button8 = new android.widget.Button(ctx);
                        button8.setText("Show coords | OFF");
						button8.setTextColor(android.graphics.Color.WHITE);
                        button8.setBackgroundColor(android.graphics.Color.TRANSPARENT);
						button8.setTypeface(mcpeFont);
                    } else if (State8 == true && theme == "Blue") {
						button8 = new android.widget.Button(ctx);
                        button8.setText("Show coords | ON");
						button8.setTextColor(android.graphics.Color.BLUE);
                        button8.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                        button8.setTypeface(mcpeFont);
                    }

                    button8.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 100);
                            if (State8 == false && theme == "Alternative") {
                                State8 = true;
								reloadHacksList();
                                button8.setText("Show coords | ON");
                                button8.setBackgroundColor(android.graphics.Color.GREEN);
                            } else if (State8 == true && theme == "Alternative") {
                                State8 = false;
								reloadHacksList();
                                button8.setText("Show coords | OFF");
                                button8.setBackgroundColor(android.graphics.Color.RED);
                            } else if (State8 == false && theme == "MCPE") {
                                State8 = true;
								reloadHacksList();
                                button8.setText("Show coords | ON");
                                //button8.setTypeface(mcpeFont);
                                //button8.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (State8 == true && theme == "MCPE") {
                                State8 = false;
								reloadHacksList();
                                button8.setText("Show coords | OFF");
                                //button8.setTypeface(mcpeFont);
                                //button8.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (State8 == false && theme == "Blue") {
								State8 = true;
								reloadHacksList();
								button8.setText("Show coords | ON");
								button8.setTextColor(android.graphics.Color.BLUE);
								button8.setBackgroundColor(android.graphics.Color.TRANSPARENT);
								button8.setTypeface(mcpeFont);
							} else if (State8 == true && theme == "Blue") {
								State8 = false;
								reloadHacksList();
								button8.setText("Show coords | OFF");
								button8.setTextColor(android.graphics.Color.WHITE);
								button8.setBackgroundColor(android.graphics.Color.TRANSPARENT);
								button8.setTypeface(mcpeFont);
							}
                        }
                    }));
                    

                    var button9 = new android.widget.Button(ctx);
                    if (State9 == false && theme == "Alternative") {
						button9 = new android.widget.Button(ctx);
                        Block.setDestroyTimeDefaultAll();
                        button9.setText("InstaMine | OFF");
                        button9.setBackgroundColor(android.graphics.Color.RED);
                    } else if (State9 == true && theme == "Alternative") {
						button9 = new android.widget.Button(ctx);
                        Block.setDestroyTimeAll(0);
                        button9.setText("InstaMine | ON");
                        button9.setBackgroundColor(android.graphics.Color.GREEN);
                    } else if (State9 == false && theme == "MCPE") {
						button9 = minecraftButton("InstaMine | OFF");
                        Block.setDestroyTimeDefaultAll();
                        //button9.setTypeface(mcpeFont);
                        //button9.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State9 == true && theme == "MCPE") {
						button9 = minecraftButton("InstaMine | ON");
                        Block.setDestroyTimeAll(0);
                        //button9.setTypeface(mcpeFont);
                        //button9.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State9 == false && theme == "Blue") {
						button9 = new android.widget.Button(ctx);
                        button9.setText("InstaMine | OFF");
						button9.setTextColor(android.graphics.Color.WHITE);
                        button9.setBackgroundColor(android.graphics.Color.TRANSPARENT);
						button9.setTypeface(mcpeFont);
                    } else if (State9 == true && theme == "Blue") {
						button9 = new android.widget.Button(ctx);
                        button9.setText("InstaMine | ON");
						button9.setTextColor(android.graphics.Color.BLUE);
                        button9.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                        button9.setTypeface(mcpeFont);
                    }

                    button9.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 100);
                            if (State9 == false && theme == "Alternative") {
                                State9 = true;
								reloadHacksList();
                                Block.setDestroyTimeAll(0);
                                button9.setText("InstaMine | ON");
                                button9.setBackgroundColor(android.graphics.Color.GREEN);
                            } else if (State9 == true && theme == "Alternative") {
                                State9 = false;
								reloadHacksList();
                                Block.setDestroyTimeDefaultAll(0);
                                button9.setText("InstaMine | OFF");
                                button9.setBackgroundColor(android.graphics.Color.RED);
                            } else if (State9 == false && theme == "MCPE") {
                                State9 = true;
								reloadHacksList();
                                Block.setDestroyTimeAll(0);
                                button9.setText("InstaMine | ON");
                                //button8.setTypeface(mcpeFont);
                                //button9.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (State9 == true && theme == "MCPE") {
                                State9 = false;
								reloadHacksList();
                                Block.setDestroyTimeDefaultAll();
                                button9.setText("InstaMine | OFF");
                                //button8.setTypeface(mcpeFont);
                                //button9.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (State9 == false && theme == "Blue") {
								State9 = true;
								reloadHacksList();
								button9.setText("InstaMine | ON");
								button9.setTextColor(android.graphics.Color.BLUE);
								button9.setBackgroundColor(android.graphics.Color.TRANSPARENT);
								button9.setTypeface(mcpeFont);
							} else if (State9 == true && theme == "Blue") {
								State9 = false;
								reloadHacksList();
								button9.setText("InstaMine | OFF");
								button9.setTextColor(android.graphics.Color.WHITE);
								button9.setBackgroundColor(android.graphics.Color.TRANSPARENT);
								button9.setTypeface(mcpeFont);
							}
                        }
                    }));
                    

                    var button10 = new android.widget.Button(ctx);
                    if (State10 == false && theme == "Alternative") {
						button10 = new android.widget.Button(ctx);
                        button10.setText("Knockback | OFF");
                        button10.setBackgroundColor(android.graphics.Color.RED);
                    } else if (State10 == true && theme == "Alternative") {
						button10 = new android.widget.Button(ctx);
                        button10.setText("Knockback | ON");
                        button10.setBackgroundColor(android.graphics.Color.GREEN);
                    } else if (State10 == false && theme == "MCPE") {
                        button10 = minecraftButton("Knockback | OFF");
                        //button10.setTypeface(mcpeFont);
                        //button10.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State10 == true && theme == "MCPE") {
                        button10 = minecraftButton("Knockback | ON");
                        //button10.setTypeface(mcpeFont);
                        //button10.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State10 == false && theme == "Blue") {
						button10 = new android.widget.Button(ctx);
                        button10.setText("Knockback | OFF");
						button10.setTextColor(android.graphics.Color.WHITE);
                        button10.setBackgroundColor(android.graphics.Color.TRANSPARENT);
						button10.setTypeface(mcpeFont);
                    } else if (State10 == true && theme == "Blue") {
						button10 = new android.widget.Button(ctx);
                        button10.setText("Knockback | ON");
						button10.setTextColor(android.graphics.Color.BLUE);
                        button10.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                        button10.setTypeface(mcpeFont);
                    }

                    button10.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 100);
                            if (State10 == false && theme == "Alternative") {
                                State10 = true;
								reloadHacksList();
                                State10.setText("Knockback | ON");
                                button10.setBackgroundColor(android.graphics.Color.GREEN);
                            } else if (State10 == true && theme == "Alternative") {
                                State10 = false;
								reloadHacksList();
                                button10.setText("Knockback | OFF");
                                button10.setBackgroundColor(android.graphics.Color.RED);
                            } else if (State10 == false && theme == "MCPE") {
                                State10 = true;
								reloadHacksList();
                                button10.setText("Knockback | ON");
                                //button10.setTypeface(mcpeFont);
                                //button10.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (State10 == true && theme == "MCPE") {
                                State10 = false;
								reloadHacksList();
                                button10.setText("Knockback | OFF");
                                //button10.setTypeface(mcpeFont);
                                //button10.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (State10 == false && theme == "Blue") {
                                State10 = true;
								reloadHacksList();
                                button10.setText("Knockback | ON");
								button10.setTextColor(android.graphics.Color.BLUE);
                                button10.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                                button10.setTypeface(mcpeFont);
                            } else if (State10 == true && theme == "Blue") {
                                State10 = false;
								reloadHacksList();
                                button10.setText("Knockback | OFF");
								button10.setTextColor(android.graphics.Color.WHITE);
                                button10.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                                button10.setTypeface(mcpeFont);
                            }
                        }
                    }));
                    

                    var button11 = new android.widget.Button(ctx);
                    if (State11 == false && theme == "Alternative") {
						button11 = new android.widget.Button(ctx);
                        xRay(0);
                        button11.setText("X-Ray | OFF");
                        button11.setBackgroundColor(android.graphics.Color.RED);
                    } else if (State11 == true && theme == "Alternative") {
						button11 = new android.widget.Button(ctx);
                        xRay(1);
                        button11.setText("X-Ray | ON");
                        button11.setBackgroundColor(android.graphics.Color.GREEN);
                    } else if (State11 == false && theme == "MCPE") {
						button11 = minecraftButton("X-Ray | OFF");
                        xRay(0);
                        //button11.setTypeface(mcpeFont);
                        //button11.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State11 == true && theme == "MCPE") {
						button11 = minecraftButton("X-Ray | ON");
                        xRay(1);
                        //button11.setTypeface(mcpeFont);
                        //button11.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State11 == false && theme == "Blue") {
						button11 = new android.widget.Button(ctx);
						xRay(0);
						button11.setText("X-Ray | OFF");
						button11.setTextColor(android.graphics.Color.WHITE);
						button11.setBackgroundColor(android.graphics.Color.TRANSPARENT);
						button11.setTypeface(mcpeFont);
                        //button11.setTypeface(mcpeFont);
                        //button11.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State11 == true && theme == "Blue") {
						button11 = new android.widget.Button(ctx);
						xRay(1);
						button11.setText("X-Ray | ON");
						button11.setTextColor(android.graphics.Color.BLUE);
						button11.setBackgroundColor(android.graphics.Color.TRANSPARENT);
						button11.setTypeface(mcpeFont);
                        //button11.setTypeface(mcpeFont);
                        //button11.setBackgroundDrawable(mcpeButtonOldImage);
                    }

                    button11.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 100);
                            if (State11 == false && theme == "Alternative") {
                                State11 = true;
								reloadHacksList();
                                xRay(1);
                                State11.setText("X-Ray | ON");
                                button11.setBackgroundColor(android.graphics.Color.GREEN);
                            } else if (State11 == true && theme == "Alternative") {
                                State11 = false;
								reloadHacksList();
                                xRay(0);
                                button11.setText("X-Ray | OFF");
                                button11.setBackgroundColor(android.graphics.Color.RED);
                            } else if (State11 == false && theme == "MCPE") {
                                State11 = true;
								reloadHacksList();
                                xRay(1);
                                button11.setText("X-Ray | ON");
                                //button11.setTypeface(mcpeFont);
                                //button11.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (State11 == true && theme == "MCPE") {
                                State11 = false;
								reloadHacksList();
                                xRay(0);
                                button11.setText("X-Ray | OFF");
                                //button11.setTypeface(mcpeFont);
                                //button11.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (State11 == false && theme == "Blue") {
								State11 = true;
								reloadHacksList();
								xRay(1);
								button11.setText("X-Ray | ON");
								button11.setTextColor(android.graphics.Color.BLUE);
								button11.setBackgroundColor(android.graphics.Color.TRANSPARENT);
								button11.setTypeface(mcpeFont);
							} else if (State11 == true && theme == "Blue") {
								State11 = false;
								reloadHacksList();
								xRay(0);
								button11.setText("X-Ray | OFF");
								button11.setTextColor(android.graphics.Color.WHITE);
								button11.setBackgroundColor(android.graphics.Color.TRANSPARENT);
								button11.setTypeface(mcpeFont);
							}
                        }
                    }));
                    

                    var button12 = new android.widget.Button(ctx);
                    if (State12 == false && theme == "Alternative") {
						button12 = new android.widget.Button(ctx);
                        button12.setText("Always day | OFF");
                        button12.setBackgroundColor(android.graphics.Color.RED);
                    } else if (State12 == true && theme == "Alternative") {
						button12 = new android.widget.Button(ctx);
                        button12.setText("Always day | ON");
                        button12.setBackgroundColor(android.graphics.Color.GREEN);
                    } else if (State12 == false && theme == "MCPE") {
						button12 = minecraftButton("Always day | OFF");
                        //button11.setTypeface(mcpeFont);
                        //button12.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State12 == true && theme == "MCPE") {
						button12 = minecraftButton("Always day | ON");
                        //button11.setTypeface(mcpeFont);
                        //button12.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State12 == false && theme == "Blue") {
						button12 = new android.widget.Button(ctx);
						button12.setText("Always day | OFF");
						button12.setTextColor(android.graphics.Color.WHITE);
						button12.setBackgroundColor(android.graphics.Color.TRANSPARENT);
						button12.setTypeface(mcpeFont);
                        //button12.setTypeface(mcpeFont);
                        //button12.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State12 == true && theme == "Blue") {
						button12 = new android.widget.Button(ctx);
						button12.setText("Always day | ON");
						button12.setTextColor(android.graphics.Color.BLUE);
						button12.setBackgroundColor(android.graphics.Color.TRANSPARENT);
						button12.setTypeface(mcpeFont);
                        //button12.setTypeface(mcpeFont);
                        //button12.setBackgroundDrawable(mcpeButtonOldImage);
                    }

                    button12.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 100);
                            if (State12 == false && theme == "Alternative") {
                                State12 = true;
								reloadHacksList();
                                button12.setText("Always day | ON");
                                button12.setBackgroundColor(android.graphics.Color.GREEN);
                            } else if (State12 == true && theme == "Alternative") {
                                State12 = false;
								reloadHacksList();
                                button12.setText("Always day | OFF");
                                button12.setBackgroundColor(android.graphics.Color.RED);
                            } else if (State12 == false && theme == "MCPE") {
                                State12 = true;
								reloadHacksList();
                                button12.setText("Always day | ON");
                                //button12.setTypeface(mcpeFont);
                                //button12.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (State12 == true && theme == "MCPE") {
                                State12 = false;
								reloadHacksList();
                                button12.setText("Always day | OFF");
                                //button12.setTypeface(mcpeFont);
                                //button12.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (State12 == false && theme == "Blue") {
								State12 = true;
								reloadHacksList();
								button12.setText("Always day | ON");
								button12.setTextColor(android.graphics.Color.BLUE);
								button12.setBackgroundColor(android.graphics.Color.TRANSPARENT);
								button12.setTypeface(mcpeFont);
							} else if (State12 == true && theme == "Blue") {
								State12 = false;
								reloadHacksList();
								button12.setText("Always day | OFF");
								button12.setTextColor(android.graphics.Color.WHITE);
								button12.setBackgroundColor(android.graphics.Color.TRANSPARENT);
								button12.setTypeface(mcpeFont);
							}
                        }
                    }));
                    

                    var button13 = new android.widget.Button(ctx);
                    if (State13 == false && theme == "Alternative") {
						button13 = new android.widget.Button(ctx);
                        button13.setText("Saddle Up | OFF");
                        button13.setBackgroundColor(android.graphics.Color.RED);
                    } else if (State13 == true && theme == "Alternative") {
						button13 = new android.widget.Button(ctx);
                        button13.setText("Saddle Up | ON");
                        button13.setBackgroundColor(android.graphics.Color.GREEN);
                    } else if (State13 == false && theme == "MCPE") {
                        button13 = minecraftButton("Saddle Up | OFF");
                        //button13.setTypeface(mcpeFont);
                        //button13.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State13 == true && theme == "MCPE") {
                        button13 = minecraftButton("Saddle Up | ON");
                        //button13.setTypeface(mcpeFont);
                        //button13.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State13 == false && theme == "Blue") {
						button13 = new android.widget.Button(ctx);
						button13.setText("Saddle Up | OFF");
						button13.setTextColor(android.graphics.Color.WHITE);
						button13.setBackgroundColor(android.graphics.Color.TRANSPARENT);
						button13.setTypeface(mcpeFont);
                        //button13.setTypeface(mcpeFont);
                        //button13.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State13 == true && theme == "Blue") {
						button13 = new android.widget.Button(ctx);
						button13.setText("Saddle Up | ON");
						button13.setTextColor(android.graphics.Color.BLUE);
						button13.setBackgroundColor(android.graphics.Color.TRANSPARENT);
						button13.setTypeface(mcpeFont);
                        //button13.setTypeface(mcpeFont);
                        //button13.setBackgroundDrawable(mcpeButtonOldImage);
                    }

                    button13.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 100);
                            if (State13 == false && theme == "Alternative") {
                                State13 = true;
								reloadHacksList();
                                button13.setText("Saddle Up | ON");
                                button13.setBackgroundColor(android.graphics.Color.GREEN);
                            } else if (State13 == true && theme == "Alternative") {
                                State13 = false;
								reloadHacksList();
                                button13.setText("Saddle Up | OFF");
                                button13.setBackgroundColor(android.graphics.Color.RED);
                            } else if (State13 == false && theme == "MCPE") {
                                State13 = true;
								reloadHacksList();
                                button13.setText("Saddle Up | ON");
                                //button13.setTypeface(mcpeFont);
                                //button13.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (State13 == true && theme == "MCPE") {
                                State13 = false;
								reloadHacksList();
                                button13.setText("Saddle Up | OFF");
                                //button13.setTypeface(mcpeFont);
                                //button13.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (State13 == false && theme == "Blue") {
								State13 = true;
								reloadHacksList();
								button13.setText("Saddle Up | ON");
								button13.setTextColor(android.graphics.Color.BLUE);
								button13.setBackgroundColor(android.graphics.Color.TRANSPARENT);
								button13.setTypeface(mcpeFont);
							} else if (State13 == true && theme == "Blue") {
								State13 = false;
								reloadHacksList();
								button13.setText("Saddle Up | OFF");
								button13.setTextColor(android.graphics.Color.WHITE);
								button13.setBackgroundColor(android.graphics.Color.TRANSPARENT);
								button13.setTypeface(mcpeFont);
							}
                        }
                    }));
                    

                    var button14 = new android.widget.Button(ctx);
                    if (State14 == false && theme == "Alternative") {
						button14 = new android.widget.Button(ctx);
                        button14.setText("StackDrop | OFF");
                        button14.setBackgroundColor(android.graphics.Color.RED);
                    } else if (State14 == true && theme == "Alternative") {
						button14 = new android.widget.Button(ctx);
                        button14.setText("StackDrop | ON");
                        button14.setBackgroundColor(android.graphics.Color.GREEN);
                    } else if (State14 == false && theme == "MCPE") {
						button14 = minecraftButton("StackDrop | OFF");
                        //button14.setTypeface(mcpeFont);
                        //button14.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State14 == true && theme == "MCPE") {
						button14 = minecraftButton("StackDrop | ON");
                        //button14.setTypeface(mcpeFont);
                        //button14.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State14 == false && theme == "Blue") {
						button14 = new android.widget.Button(ctx);
						button14.setText("StackDrop | OFF");
						button14.setTextColor(android.graphics.Color.WHITE);
						button14.setBackgroundColor(android.graphics.Color.TRANSPARENT);
						button14.setTypeface(mcpeFont);
                        //button14.setTypeface(mcpeFont);
                        //button14.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State14 == true && theme == "Blue") {
						button14 = new android.widget.Button(ctx);
						button14.setText("StackDrop | ON");
						button14.setTextColor(android.graphics.Color.BLUE);
						button14.setBackgroundColor(android.graphics.Color.TRANSPARENT);
						button14.setTypeface(mcpeFont);
                        //button14.setTypeface(mcpeFont);
                        //button14.setBackgroundDrawable(mcpeButtonOldImage);
                    }

                    button14.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 100);
                            if (State14 == false && theme == "Alternative") {
                                State14 = true;
								reloadHacksList();
                                button14.setText("StackDrop | ON");
                                button14.setBackgroundColor(android.graphics.Color.GREEN);
                            } else if (State14 == true && theme == "Alternative") {
                                State14 = false;
								reloadHacksList();
                                button14.setText("StackDrop | OFF");
                                button14.setBackgroundColor(android.graphics.Color.RED);
                            } else if (State14 == false && theme == "MCPE") {
                                State14 = true;
								reloadHacksList();
                                button14.setText("StackDrop | ON");
                                //button14.setTypeface(mcpeFont);
                                //button14.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (State14 == true && theme == "MCPE") {
                                State14 = false;
								reloadHacksList();
                                button14.setText("StackDrop | OFF");
                                //button14.setTypeface(mcpeFont);
                                //button14.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (State14 == false && theme == "Blue") {
								State14 = true;
								reloadHacksList();
								button14.setText("StackDrop | ON");
								button14.setTextColor(android.graphics.Color.BLUE);
								button14.setBackgroundColor(android.graphics.Color.TRANSPARENT);
								button14.setTypeface(mcpeFont);
							} else if (State14 == true && theme == "Blue") {
								State14 = false;
								reloadHacksList();
								button14.setText("StackDrop | OFF");
								button14.setTextColor(android.graphics.Color.WHITE);
								button14.setBackgroundColor(android.graphics.Color.TRANSPARENT);
								button14.setTypeface(mcpeFont);
							}
                        }
                    }));
                    

                    var button15 = new android.widget.Button(ctx);
                    if (State15 == false && theme == "Alternative") {
						button15 = new android.widget.Button(ctx);
                        button15.setText("TapTeleporter | OFF");
                        button15.setBackgroundColor(android.graphics.Color.RED);
                    } else if (State15 == true && theme == "Alternative") {
						button15 = new android.widget.Button(ctx);
                        button15.setText("TapTeleporter | ON");
                        button15.setBackgroundColor(android.graphics.Color.GREEN);
                    } else if (State15 == false && theme == "MCPE") {
						button15 = minecraftButton("TapTeleporter | OFF");
                        //button15.setTypeface(mcpeFont);
                        //button15.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State15 == true && theme == "MCPE") {
						button15 = minecraftButton("TapTeleporter | ON");
                        //button15.setTypeface(mcpeFont);
                        //button15.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State15 == false && theme == "Blue") {
						button15 = new android.widget.Button(ctx);
                        button15.setText("TapTeleporter | OFF");
						button15.setTextColor(android.graphics.Color.WHITE);
                        button15.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                        button15.setTypeface(mcpeFont);
                    } else if (State15 == true && theme == "Blue") {
						button15 = new android.widget.Button(ctx);
                        button15.setText("TapTeleporter | ON");
						button15.setTextColor(android.graphics.Color.BLUE);
                        button15.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                        button15.setTypeface(mcpeFont);
                    }

                    button15.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 100);
                            if (State15 == false && theme == "Alternative") {
                                State15 = true;
								reloadHacksList();
                                button15.setText("TapTeleporter | ON");
                                button15.setBackgroundColor(android.graphics.Color.GREEN);
                            } else if (State15 == true && theme == "Alternative") {
                                State15 = false;
								reloadHacksList();
                                button15.setText("TapTeleporter | OFF");
                                button15.setBackgroundColor(android.graphics.Color.RED);
                            } else if (State15 == false && theme == "MCPE") {
                                State15 = true;
								reloadHacksList();
                                button15.setText("TapTeleporter | ON");
                                //button15.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (State15 == true && theme == "MCPE") {
                                State15 = false;
								reloadHacksList();
                                button15.setText("TapTeleporter | OFF");
                                //button15.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (State15 == false && theme == "Blue") {
                                State15 = true;
								reloadHacksList();
                                button15.setText("TapTeleporter | ON");
								button15.setTextColor(android.graphics.Color.BLUE);
                                button15.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                                button15.setTypeface(mcpeFont);
                            } else if (State15 == true && theme == "Blue") {
                                State15 = false;
								reloadHacksList();
                                button15.setText("TapTeleporter | OFF");
								button15.setTextColor(android.graphics.Color.WHITE);
                                button15.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                                button15.setTypeface(mcpeFont);
                            }
                        }
                    }));
					
					
					var button16 = new android.widget.Button(ctx);
                    if (State16 == false && theme == "Alternative") {
						button16 = new android.widget.Button(ctx);
                        button16.setText("InstaKill | OFF");
                        button16.setBackgroundColor(android.graphics.Color.RED);
                    } else if (State16 == true && theme == "Alternative") {
						button16 = new android.widget.Button(ctx);
                        button16.setText("InstaKill | ON");
                        button16.setBackgroundColor(android.graphics.Color.GREEN);
                    } else if (State16 == false && theme == "MCPE") {
						button16 = minecraftButton("InstaKill | OFF");
                        //button16.setTypeface(mcpeFont);
                        //button16.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State16 == true && theme == "MCPE") {
						button16 = minecraftButton("InstaKill | ON");
                        //button16.setTypeface(mcpeFont);
                        //button16.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State16 == false && theme == "Blue") {
						button16 = new android.widget.Button(ctx);
                        button16.setText("InstaKill | OFF");
						button16.setTextColor(android.graphics.Color.WHITE);
                        button16.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                        button16.setTypeface(mcpeFont);
                    } else if (State16 == true && theme == "Blue") {
						button16 = new android.widget.Button(ctx);
                        button16.setText("InstaKill | ON");
						button16.setTextColor(android.graphics.Color.BLUE);
                        button16.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                        button16.setTypeface(mcpeFont);
                    }
					
					button16.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 100);
                            if (State16 == false && theme == "Alternative") {
                                State16 = true;
								reloadHacksList();
                                button16.setText("InstaKill | ON");
                                button16.setBackgroundColor(android.graphics.Color.GREEN);
                            } else if (State16 == true && theme == "Alternative") {
                                State16 = false;
								reloadHacksList();
                                button16.setText("InstaKill | OFF");
                                button16.setBackgroundColor(android.graphics.Color.RED);
                            } else if (State16 == false && theme == "MCPE") {
                                State16 = true;
								reloadHacksList();
                                button16.setText("InstaKill | ON");
                                //button16.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (State16 == true && theme == "MCPE") {
                                State16 = false;
								reloadHacksList();
                                button16.setText("InstaKill | OFF");
                                //button16.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (State16 == false && theme == "Blue") {
                                State16 = true;
								reloadHacksList();
                                button16.setText("InstaKill | ON");
								button16.setTextColor(android.graphics.Color.BLUE);
                                button16.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                                button16.setTypeface(mcpeFont);
                            } else if (State16 == true && theme == "Blue") {
                                State16 = false;
								reloadHacksList();
                                button16.setText("InstaKill | OFF");
								button16.setTextColor(android.graphics.Color.WHITE);
                                button16.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                                button16.setTypeface(mcpeFont);
                            }
                        }
                    }));
					
					
					var button17 = new android.widget.Button(ctx);
                    if (State17 == false && theme == "Alternative") {
						button17 = new android.widget.Button(ctx);
                        button17.setText("SignEditor | OFF");
                        button17.setBackgroundColor(android.graphics.Color.RED);
                    } else if (State17 == true && theme == "Alternative") {
						button17 = new android.widget.Button(ctx);
                        button17.setText("SignEditor | ON");
                        button17.setBackgroundColor(android.graphics.Color.GREEN);
                    } else if (State17 == false && theme == "MCPE") {
						button17 = minecraftButton("SignEditor | OFF");
                        //button17.setTypeface(mcpeFont);
                        //button17.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State17 == true && theme == "MCPE") {
						button17 = minecraftButton("SignEditor | ON");
                        //button17.setTypeface(mcpeFont);
                        //button17.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State17 == false && theme == "Blue") {
						button17 = new android.widget.Button(ctx);
                        button17.setText("SignEditor | OFF");
						button17.setTextColor(android.graphics.Color.WHITE);
                        button17.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                        button17.setTypeface(mcpeFont);
                    } else if (State17 == true && theme == "Blue") {
						button17 = new android.widget.Button(ctx);
                        button17.setText("SignEditor | ON");
						button17.setTextColor(android.graphics.Color.BLUE);
                        button17.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                        button17.setTypeface(mcpeFont);
                    }
					
					button17.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 100);
                            if (State17 == false && theme == "Alternative") {
                                State17 = true;
								reloadHacksList();
                                button17.setText("SignEditor | ON");
                                button17.setBackgroundColor(android.graphics.Color.GREEN);
                            } else if (State17 == true && theme == "Alternative") {
                                State17 = false;
								reloadHacksList();
                                button17.setText("SignEditor | OFF");
                                button17.setBackgroundColor(android.graphics.Color.RED);
                            } else if (State17 == false && theme == "MCPE") {
                                State17 = true;
								reloadHacksList();
                                button17.setText("SignEditor | ON");
                                //button17.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (State17 == true && theme == "MCPE") {
                                State17 = false;
								reloadHacksList();
                                button17.setText("SignEditor | OFF");
                                //button17.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (State17 == false && theme == "Blue") {
                                State17 = true;
								reloadHacksList();
                                button17.setText("SignEditor | ON");
								button17.setTextColor(android.graphics.Color.BLUE);
                                button17.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                                button17.setTypeface(mcpeFont);
                            } else if (State17 == true && theme == "Blue") {
                                State17 = false;
								reloadHacksList();
                                button17.setText("SignEditor | OFF");
								button17.setTextColor(android.graphics.Color.WHITE);
                                button17.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                                button17.setTypeface(mcpeFont);
                            }
                        }
                    }));
					
					
					var button18 = new android.widget.Button(ctx);
                    if (State18 == false && theme == "Alternative") {
						button18 = new android.widget.Button(ctx);
						allItemsEatable(0);
                        button18.setText("All items eatable | OFF");
                        button18.setBackgroundColor(android.graphics.Color.RED);
                    } else if (State18 == true && theme == "Alternative") {
						button18 = new android.widget.Button(ctx);
						allItemsEatable(1);
                        button18.setText("All items eatable | ON");
                        button18.setBackgroundColor(android.graphics.Color.GREEN);
                    } else if (State18 == false && theme == "MCPE") {
						button18 = minecraftButton("All items eatable | OFF");
						allItemsEatable(0);
                        //button18.setTypeface(mcpeFont);
                        //button18.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State18 == true && theme == "MCPE") {
						button18 = minecraftButton("All items eatable | ON");
						allItemsEatable(1);
                        //button18.setTypeface(mcpeFont);
                        //button18.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State18 == false && theme == "Blue") {
						button18 = new android.widget.Button(ctx);
						allItemsEatable(0);
                        button18.setText("All items eatable | OFF");
						button18.setTextColor(android.graphics.Color.WHITE);
                        button18.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                        button18.setTypeface(mcpeFont);
                    } else if (State18 == true && theme == "Blue") {
						button18 = new android.widget.Button(ctx);
						allItemsEatable(1);
                        button18.setText("All items eatable | ON");
						button18.setTextColor(android.graphics.Color.BLUE);
                        button18.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                        button18.setTypeface(mcpeFont);
                    }
					
					button18.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 100);
                            if (State18 == false && theme == "Alternative") {
                                State18 = true;
								reloadHacksList();
								allItemsEatable(1);
                                button18.setText("All items eatable | ON");
                                button18.setBackgroundColor(android.graphics.Color.GREEN);
                            } else if (State18 == true && theme == "Alternative") {
                                State18 = false;
								reloadHacksList();
								allItemsEatable(0);
                                button18.setText("All items eatable | OFF");
                                button18.setBackgroundColor(android.graphics.Color.RED);
                            } else if (State18 == false && theme == "MCPE") {
                                State18 = true;
								reloadHacksList();
								allItemsEatable(1);
                                button18.setText("All items eatable | ON");
                                //button18.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (State18 == true && theme == "MCPE") {
                                State18 = false;
								reloadHacksList();
								allItemsEatable(0);
                                button18.setText("All items eatable | OFF");
                                //button18.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (State18 == false && theme == "Blue") {
                                State18 = true;
								reloadHacksList();
								allItemsEatable(1);
                                button18.setText("All items eatable | ON");
								button18.setTextColor(android.graphics.Color.BLUE);
                                button18.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                                button18.setTypeface(mcpeFont);
                            } else if (State18 == true && theme == "Blue") {
                                State18 = false;
								reloadHacksList();
								allItemsEatable(0);
                                button18.setText("All items eatable | OFF");
								button18.setTextColor(android.graphics.Color.WHITE);
                                button18.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                                button18.setTypeface(mcpeFont);
                            }
                        }
                    }));
					
					
					var button19 = new android.widget.Button(ctx);
                    if (State19 == false && theme == "Alternative") {
						button19 = new android.widget.Button(ctx);
                        button19.setText("Sprinting | OFF");
                        button19.setBackgroundColor(android.graphics.Color.RED);
                    } else if (State19 == true && theme == "Alternative") {
						button19 = new android.widget.Button(ctx);
                        button19.setText("Sprinting | ON");
                        button19.setBackgroundColor(android.graphics.Color.GREEN);
                    } else if (State19 == false && theme == "MCPE") {
						button19 = minecraftButton("Sprinting | OFF");
                        //button19.setTypeface(mcpeFont);
                        //button19.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State19 == true && theme == "MCPE") {
						button19 = minecraftButton("Sprinting | ON");
                        //button19.setTypeface(mcpeFont);
                        //button19.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State19 == false && theme == "Blue") {
						button19 = new android.widget.Button(ctx);
                        button19.setText("Sprinting | OFF");
						button19.setTextColor(android.graphics.Color.WHITE);
                        button19.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                        button19.setTypeface(mcpeFont);
                    } else if (State19 == true && theme == "Blue") {
						button19 = new android.widget.Button(ctx);
                        button19.setText("Sprinting | ON");
						button19.setTextColor(android.graphics.Color.BLUE);
                        button19.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                        button19.setTypeface(mcpeFont);
                    }
					
					button19.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 100);
                            if (State19 == false && theme == "Alternative") {
                                State19 = true;
								reloadHacksList();
								f = 1;
                                button19.setText("Sprinting | ON");
                                button19.setBackgroundColor(android.graphics.Color.GREEN);
                            } else if (State19 == true && theme == "Alternative") {
                                State19 = false;
								reloadHacksList();
								f = 0;
                                button19.setText("Sprinting | OFF");
                                button19.setBackgroundColor(android.graphics.Color.RED);
                            } else if (State19 == false && theme == "MCPE") {
                                State19 = true;
								reloadHacksList();
								f = 1;
                                button19.setText("Sprinting | ON");
                                //button19.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (State19 == true && theme == "MCPE") {
                                State19 = false;
								reloadHacksList();
								f = 0;
                                button19.setText("Sprinting | OFF");
                                //button19.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (State19 == false && theme == "Blue") {
                                State19 = true;
								reloadHacksList();
								f = 1;
                                button19.setText("Sprinting | ON");
								button19.setTextColor(android.graphics.Color.BLUE);
                                button19.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                                button19.setTypeface(mcpeFont);
                            } else if (State19 == true && theme == "Blue") {
                                State19 = false;
								reloadHacksList();
								f = 0;
                                button19.setText("Sprinting | OFF");
								button19.setTextColor(android.graphics.Color.WHITE);
                                button19.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                                button19.setTypeface(mcpeFont);
                            }
                        }
                    }));
                    
					
					var button20 = new android.widget.Button(ctx);
                    if (State20 == false && theme == "Alternative") {
						button20 = new android.widget.Button(ctx);
                        button20.setText("JetPack | OFF");
                        button20.setBackgroundColor(android.graphics.Color.RED);
                    } else if (State20 == true && theme == "Alternative") {
						button20 = new android.widget.Button(ctx);
                        button20.setText("JetPack | ON");
                        button20.setBackgroundColor(android.graphics.Color.GREEN);
                    } else if (State20 == false && theme == "MCPE") {
						button20 = minecraftButton("JetPack | OFF");
                        //button20.setTypeface(mcpeFont);
                        //button20.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State20 == true && theme == "MCPE") {
						button20 = minecraftButton("JetPack | ON");
                        //button20.setTypeface(mcpeFont);
                        //button20.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State20 == false && theme == "Blue") {
						button20 = new android.widget.Button(ctx);
                        button20.setText("JetPack | OFF");
						button20.setTextColor(android.graphics.Color.WHITE);
                        button20.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                        button20.setTypeface(mcpeFont);
                    } else if (State20 == true && theme == "Blue") {
						button20 = new android.widget.Button(ctx);
                        button20.setText("JetPack | ON");
						button20.setTextColor(android.graphics.Color.BLUE);
                        button20.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                        button20.setTypeface(mcpeFont);
                    }
					
					button20.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 100);
                            if (State20 == false && theme == "Alternative") {
                                State20 = true;
								reloadHacksList();
                                button20.setText("JetPack | ON");
                                button20.setBackgroundColor(android.graphics.Color.GREEN);
                            } else if (State20 == true && theme == "Alternative") {
                                State20 = false;
								reloadHacksList();
                                button20.setText("JetPack | OFF");
                                button20.setBackgroundColor(android.graphics.Color.RED);
                            } else if (State20 == false && theme == "MCPE") {
                                State20 = true;
								reloadHacksList();
                                button20.setText("JetPack | ON");
                                //button20.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (State20 == true && theme == "MCPE") {
                                State20 = false;
								reloadHacksList();
                                button20.setText("JetPack | OFF");
                                //button20.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (State20 == false && theme == "Blue") {
                                State20 = true;
								reloadHacksList();
                                button20.setText("JetPack | ON");
								button20.setTextColor(android.graphics.Color.BLUE);
                                button20.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                                button20.setTypeface(mcpeFont);
                            } else if (State20 == true && theme == "Blue") {
                                State20 = false;
								reloadHacksList();
                                button20.setText("JetPack | OFF");
								button20.setTextColor(android.graphics.Color.WHITE);
                                button20.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                                button20.setTypeface(mcpeFont);
                            }
                        }
                    }));
					
					
					var button21= new android.widget.Button(ctx);
                    if (State21 == false && theme == "Alternative") {
						button21 = new android.widget.Button(ctx);
                        button21.setText("HighJump | OFF");
                        button21.setBackgroundColor(android.graphics.Color.RED);
                    } else if (State21 == true && theme == "Alternative") {
						button21 = new android.widget.Button(ctx);
                        button21.setText("HighJump | ON");
                        button21.setBackgroundColor(android.graphics.Color.GREEN);
                    } else if (State21 == false && theme == "MCPE") {
						button21 = minecraftButton("HighJump | OFF");
                        //button21.setTypeface(mcpeFont);
                        //button21.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State21 == true && theme == "MCPE") {
						button21 = minecraftButton("HighJump | ON");
                        //button21.setTypeface(mcpeFont);
                        //button21.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (State21 == false && theme == "Blue") {
						button21 = new android.widget.Button(ctx);
                        button21.setText("HighJump | OFF");
						button21.setTextColor(android.graphics.Color.WHITE);
                        button21.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                        button21.setTypeface(mcpeFont);
                    } else if (State21 == true && theme == "Blue") {
						button21 = new android.widget.Button(ctx);
                        button21.setText("HighJump | ON");
						button21.setTextColor(android.graphics.Color.BLUE);
                        button21.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                        button21.setTypeface(mcpeFont);
                    }
					
					button21.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 100);
                            if (State21 == false && theme == "Alternative") {
                                State21 = true;
								reloadHacksList();
                                button21.setText("HighJump | ON");
                                button21.setBackgroundColor(android.graphics.Color.GREEN);
                            } else if (State21 == true && theme == "Alternative") {
                                State21 = false;
								reloadHacksList();
                                button21.setText("HighJump | OFF");
                                button21.setBackgroundColor(android.graphics.Color.RED);
                            } else if (State21 == false && theme == "MCPE") {
                                State21 = true;
								reloadHacksList();
                                button21.setText("HighJump | ON");
                                //button21.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (State21 == true && theme == "MCPE") {
                                State21 = false;
								reloadHacksList();
                                button21.setText("HighJump | OFF");
                                //button21.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (State21 == false && theme == "Blue") {
                                State21 = true;
								reloadHacksList();
                                button21.setText("HighJump | ON");
								button21.setTextColor(android.graphics.Color.BLUE);
                                button21.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                                button21.setTypeface(mcpeFont);
                            } else if (State21 == true && theme == "Blue") {
                                State21 = false;
								reloadHacksList();
                                button21.setText("HighJump | OFF");
								button21.setTextColor(android.graphics.Color.WHITE);
                                button21.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                                button21.setTypeface(mcpeFont);
                            }
                        }
                    }));
					
					var dividerViewer = new android.widget.ImageView(ctx);
                    dividerViewer.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(divider, 0, divider.length));

                    var cheatsTitle = new android.widget.TextView(ctx);
                    cheatsTitle.setTextSize(12);
                    cheatsTitle.setText("\nCheats"); //Title
                    //cheatsTitle.setTypeface(mcpeFont);
                    cheatsTitle.setTextColor(android.graphics.Color.WHITE); //Color
                    cheatsTitle.setGravity(android.view.Gravity.CENTER);
                    if (theme == "Blue") {
                        cheatsTitle.setTypeface(mcpeFont);
						cheatsTitle.setTextColor(android.graphics.Color.WHITE);
						if(android.os.Build.VERSION.SDK_INT > 19){ // KITKAT
						cheatsTitle.setShadowLayer(1, Math.round(cheatsTitle.getLineHeight() / 8), Math.round(cheatsTitle.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
						}else{
						cheatsTitle.setShadowLayer(0.0001, Math.round(cheatsTitle.getLineHeight() / 8), Math.round(cheatsTitle.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
						}
                    }

                    

                    var cheatsButton1 = new android.widget.Button(ctx);
                    if (theme == "Alternative") {
						cheatsButton1 = new android.widget.Button(ctx);
                        cheatsButton1.setText("Add item to inventory");
                        cheatsButton1.setBackgroundColor(android.graphics.Color.GRAY);
                    } else if (theme == "MCPE") {
						cheatsButton1 = minecraftButton("Add item to inventory");
                        //cheatsButton1.setTypeface(mcpeFont);
                        //cheatsButton1.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (theme == "Blue") {
						cheatsButton1 = new android.widget.Button(ctx);
                        cheatsButton1.setText("Add item to inventory");
                        cheatsButton1.setBackgroundColor(android.graphics.Color.TRANSPARENT);
						cheatsButton1.setTypeface(mcpeFont);
					}
                    cheatsButton1.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 100);
                            if (theme == "Alternative") {
                                cheatsButton1.setText("Add item to inventory");
                                cheatsButton1.setBackgroundColor(android.graphics.Color.GRAY);
                            } else if (theme == "MCPE") {
                                cheatsButton1.setText("Add item to inventory");
                                //cheatsButton1.setTypeface(mcpeFont);
                                //cheatsButton1.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (theme == "Blue") {
                                cheatsButton1.setText("Add item to inventory");
                                cheatsButton1.setBackgroundColor(android.graphics.Color.TRANSPARENT);
								cheatsButton1.setTypeface(mcpeFont);
                            }
                            openMenu("additem");
                        }
                    }));
                    

                    var cheatsButton2 = new android.widget.Button(ctx);
                    if (theme == "Alternative") {
						cheatsButton2 = new android.widget.Button(ctx);
                        cheatsButton2.setText("Gamemode");
                        cheatsButton2.setBackgroundColor(android.graphics.Color.GRAY);
                    } else if (theme == "MCPE") {
						cheatsButton2 = minecraftButton("Gamemode");
                        //cheatsButton2.setTypeface(mcpeFont);
                        //cheatsButton2.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (theme == "Blue") {
						cheatsButton2 = new android.widget.Button(ctx);
                        cheatsButton2.setText("Gamemode");
                        cheatsButton2.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                        cheatsButton2.setTypeface(mcpeFont);
                    }

                    cheatsButton2.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 100);
                            if (theme == "Alternative") {
                                cheatsButton2.setText("Gamemode");
                                cheatsButton2.setBackgroundColor(android.graphics.Color.GRAY);
                            } else if (theme == "MCPE") {
                                cheatsButton2.setText("Gamemode");
                                //cheatsButton2.setTypeface(mcpeFont);
                                //cheatsButton2.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (theme == "Blue") {
                                cheatsButton2.setText("Gamemode");
                                cheatsButton2.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                                cheatsButton2.setTypeface(mcpeFont);
                            }
                            openMenu("gamemode");
                        }
                    }));
                    

                    var cheatsButton3 = new android.widget.Button(ctx);
                    if (theme == "Alternative") {
						cheatsButton3 = new android.widget.Button(ctx);
                        cheatsButton3.setText("Time");
                        cheatsButton3.setBackgroundColor(android.graphics.Color.GRAY);
                    } else if (theme == "MCPE") {
						cheatsButton3 = minecraftButton("Time");
                        //cheatsButton3.setTypeface(mcpeFont);
                        //cheatsButton3.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (theme == "Blue") {
						cheatsButton3 = new android.widget.Button(ctx);
                        cheatsButton3.setText("Time");
                        cheatsButton3.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                        cheatsButton3.setTypeface(mcpeFont);
                    }

                    cheatsButton3.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 100);
                            if (theme == "Alternative") {
                                cheatsButton3.setText("Time");
                                cheatsButton3.setBackgroundColor(android.graphics.Color.GRAY);
                            } else if (theme == "MCPE") {
                                cheatsButton3.setText("Time");
                                //cheatsButton3.setTypeface(mcpeFont);
                                //cheatsButton3.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (theme == "Blue") {
                                cheatsButton3.setText("Time");
                                cheatsButton3.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                                cheatsButton3.setTypeface(mcpeFont);
                            }
                            openMenu("time");
                        }
                    }));
                    

                    var cheatsButton4 = new android.widget.Button(ctx);
                    if (theme == "Alternative") {
						cheatsButton4 = new android.widget.Button(ctx);
                        cheatsButton4.setText("Health");
                        cheatsButton4.setBackgroundColor(android.graphics.Color.GRAY);
                    } else if (theme == "MCPE") {
						cheatsButton4 = minecraftButton("Health");
                        //cheatsButton4.setTypeface(mcpeFont);
                        //cheatsButton4.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (theme == "Blue") {
						cheatsButton4 = new android.widget.Button(ctx);
                        cheatsButton4.setText("Health");
                        cheatsButton4.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                        cheatsButton4.setTypeface(mcpeFont);
                    }

                    cheatsButton4.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 100);
                            if (theme == "Alternative") {
                                cheatsButton4.setText("Health");
                                cheatsButton4.setBackgroundColor(android.graphics.Color.GRAY);
                            } else if (theme == "MCPE") {
                                cheatsButton4.setText("Health");
                                //cheatsButton4.setTypeface(mcpeFont);
                                //cheatsButton4.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (theme == "Blue") {
                                cheatsButton4.setText("Health");
                                cheatsButton4.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                                cheatsButton4.setTypeface(mcpeFont);
                            }
                            openMenu("health");
                        }
                    }));
                    
					
				    var cheatsButton5 = new android.widget.Button(ctx);
                    if (theme == "Alternative") {
						cheatsButton5 = new android.widget.Button(ctx);
                        cheatsButton5.setText("Effects");
                        cheatsButton5.setBackgroundColor(android.graphics.Color.GRAY);
                    } else if (theme == "MCPE") {
						cheatsButton5 = minecraftButton("Effects");
                        //cheatsButton5.setTypeface(mcpeFont);
                        //cheatsButton5.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (theme == "Blue") {
						cheatsButton5 = new android.widget.Button(ctx);
                        cheatsButton5.setText("Effects");
                        cheatsButton5.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                        cheatsButton5.setTypeface(mcpeFont);
                    }

                    cheatsButton5.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 100);
                            if (theme == "Alternative") {
                                cheatsButton5.setText("Effects");
                                cheatsButton5.setBackgroundColor(android.graphics.Color.GRAY);
                            } else if (theme == "MCPE") {
                                cheatsButton5.setText("Effects");
                                //cheatsButton5.setTypeface(mcpeFont);
                                //cheatsButton5.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (theme == "Blue") {
                                cheatsButton5.setText("Effects");
                                cheatsButton5.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                                cheatsButton5.setTypeface(mcpeFont);
                            }
                            openMenu("effects");
                        }
                    }));
                    
					var dividerViewer1 = new android.widget.ImageView(ctx);
                    dividerViewer1.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(divider, 0, divider.length));
					
                    var otherTitle = new android.widget.TextView(ctx);
                    otherTitle.setTextSize(12);
                    otherTitle.setText("\nOther"); //Title
                    otherTitle.setTextColor(android.graphics.Color.WHITE); //Color
                    otherTitle.setGravity(android.view.Gravity.CENTER);
                    if (theme == "Blue") {
                        otherTitle.setTypeface(mcpeFont);
						otherTitle.setTextColor(android.graphics.Color.WHITE);
						if(android.os.Build.VERSION.SDK_INT > 19){ // KITKAT
						otherTitle.setShadowLayer(1, Math.round(otherTitle.getLineHeight() / 8), Math.round(otherTitle.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
						}else{
						otherTitle.setShadowLayer(0.0001, Math.round(otherTitle.getLineHeight() / 8), Math.round(otherTitle.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
						}
                    }

                    

                    var otherButton1 = new android.widget.Button(ctx);
                    if (theme == "Alternative") {
						otherButton1 = new android.widget.Button(ctx);
                        otherButton1.setText("Morph");
                        otherButton1.setBackgroundColor(android.graphics.Color.GRAY);
                    } else if (theme == "MCPE") {
						otherButton1 = minecraftButton("Morph");
                        //otherButton1.setTypeface(mcpeFont);
                        //otherButton1.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (theme == "Blue") {
						otherButton1 = new android.widget.Button(ctx);
                        otherButton1.setText("Morph");
                        otherButton1.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                        otherButton1.setTypeface(mcpeFont);
                    }

                    otherButton1.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 100);
                            if (theme == "Alternative") {
                                otherButton1.setText("Morph");
                                otherButton1.setBackgroundColor(android.graphics.Color.GRAY);
                            } else if (theme == "MCPE") {
                                otherButton1.setText("Morph");
                                //cheatsButton5.setTypeface(mcpeFont);
                                //otherButton1.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (theme == "Blue") {
                                otherButton1.setText("Morph");
                                otherButton1.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                                otherButton1.setTypeface(mcpeFont);
                            }
                            openMenu("morph");
                        }
                    }));
                    
					
					menuLayout.addView(hacksTitle);
					menuLayout.addView(panicButton);
					menuLayout.addView(button);
					menuLayout.addView(button1);
					menuLayout.addView(button2);
					menuLayout.addView(button3);
					menuLayout.addView(button4);
					menuLayout.addView(button5);
					menuLayout.addView(button6);
					menuLayout.addView(button7);
					menuLayout.addView(button8);
					menuLayout.addView(button9);
					menuLayout.addView(button10);
					menuLayout.addView(button11);
					menuLayout.addView(button12);
					menuLayout.addView(button13);
					menuLayout.addView(button14);
					menuLayout.addView(button15);
					menuLayout.addView(button16);
					menuLayout.addView(button17);
					menuLayout.addView(button18);
					menuLayout.addView(button19);
					menuLayout.addView(button20);
					menuLayout.addView(button21);
					if(theme=="Blue"){
						menuLayout.addView(dividerViewer);
					}
					menuLayout.addView(cheatsTitle);
					menuLayout.addView(cheatsButton1);
					menuLayout.addView(cheatsButton2);
					menuLayout.addView(cheatsButton3);
					menuLayout.addView(cheatsButton4);
					menuLayout.addView(cheatsButton5);
					if(theme=="Blue"){
						menuLayout.addView(dividerViewer1);
					}
					menuLayout.addView(otherTitle);
					menuLayout.addView(otherButton1);
					
                    var dividerViewer2 = new android.widget.ImageView(ctx);
                    dividerViewer2.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(divider, 0, divider.length));
					if(theme=="Blue"){
						menuLayout.addView(dividerViewer2);
					}
					
                    var infoTitle = new android.widget.TextView(ctx);
                    infoTitle.setTextSize(12);
                    infoTitle.setText("\nInfo"); //Title
                    infoTitle.setTextColor(android.graphics.Color.WHITE); //Color
                    infoTitle.setGravity(android.view.Gravity.CENTER);
                    if (theme == "Blue") {
                        infoTitle.setTypeface(mcpeFont);
						infoTitle.setTextColor(android.graphics.Color.WHITE);
						if(android.os.Build.VERSION.SDK_INT > 19){ // KITKAT
						infoTitle.setShadowLayer(1, Math.round(infoTitle.getLineHeight() / 8), Math.round(infoTitle.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
						}else{
						infoTitle.setShadowLayer(0.0001, Math.round(infoTitle.getLineHeight() / 8), Math.round(infoTitle.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
						}
                    }

                    menuLayout.addView(infoTitle);

                    var settingsButton = new android.widget.Button(ctx);
                    if (theme == "Alternative") {
						settingsButton = new android.widget.Button(ctx);
                        settingsButton.setText("Settings");
                        settingsButton.setBackgroundColor(android.graphics.Color.GRAY);
                    } else if (theme == "MCPE") {
						settingsButton = minecraftButton("Settings");
                        //settingsButton.setTypeface(mcpeFont);
                        //settingsButton.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (theme == "Blue") {
						settingsButton = new android.widget.Button(ctx);
                        settingsButton.setText("Settings");
                        settingsButton.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                        settingsButton.setTypeface(mcpeFont);
                    }
                    settingsButton.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 100);
                            openMenu("modsettings");
                        }
                    }));
                    menuLayout.addView(settingsButton);

                    var aboutButton = new android.widget.Button(ctx);
                    if (theme == "Alternative") {
						aboutButton = new android.widget.Button(ctx);
                        aboutButton.setText("About");
                        aboutButton.setBackgroundColor(android.graphics.Color.GRAY);
                    } else if (theme == "MCPE") {
						aboutButton = minecraftButton("About");
                        //aboutButton.setTypeface(mcpeFont);
                        //aboutButton.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (theme == "Blue") {
						aboutButton = new android.widget.Button(ctx);
                        aboutButton.setText("About");
                        aboutButton.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                        aboutButton.setTypeface(mcpeFont);
                    }
                    aboutButton.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 100);
                            var builder = new android.app.AlertDialog.Builder(ctx);
                            builder.setTitle("About");
                            builder.setMessage("Thanks for using AgameR MoreOptions PE! Special thanks to Ethan061903 for betatesting, MyNameIsTriXz, AntiModPE, Desno365 and everyone else who helped with making this mod possible!");
                            builder.setPositiveButton("Follow @AgameR_Modder on Twitter", new android.content.DialogInterface.OnClickListener() {

                                onClick: function(p1, p2) {

                                    Web("http://twitter.com/AgameR_Modder");
                                    p1.cancel();
                                    closeMenu();


                                }

                            });
                            builder.setNegativeButton("Ok", new android.content.DialogInterface.OnClickListener() {

                                onClick: function(p1, p2) {

                                    p1.cancel();


                                }

                            });

                            var dialog = builder.create();
                            dialog.show();
                        }
                    }));
                    menuLayout.addView(aboutButton);

                    var changelogButton = new android.widget.Button(ctx);
                    if (theme == "Alternative") {
						changelogButton = new android.widget.Button(ctx);
                        changelogButton.setText("Changelog");
                        changelogButton.setBackgroundColor(android.graphics.Color.GRAY);
                    } else if (theme == "MCPE") {
						changelogButton = minecraftButton("Changelog");
                        //changelogButton.setTypeface(mcpeFont);
                        //changelogButton.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (theme == "Blue") {
						changelogButton = new android.widget.Button(ctx);
                        changelogButton.setText("Changelog");
                        changelogButton.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                        changelogButton.setTypeface(mcpeFont);
                    }
                    changelogButton.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 100);
                            var builder = new android.app.AlertDialog.Builder(ctx);
                            builder.setTitle("Changelog");
                            builder.setMessage(/*"v1.0 Beta 1: Initial release | v1.0 Beta 2: Name changed to AgameR MoreOptions PE, new icon, added coords option, added better grass, added every item eatable, added changelog, improved some things | v1.0 Beta 3: Added themes, added sneaking, improved fly, fixed grass being unbreakable | "*/ "v1.0.0-pre: Added zoom, InstaMine, X-ray, cheats, knockback, 64 item drop, improved layout, added an update checker (thanks @desno365!), fixed some hacks and more | v1.0.0-pre2: Added Morph (not finished yet), finished the new theme called Blue, improved cheats, improved Better Grass, improved menu layout (added logo), fixed bugs, improved the update checker to support Android 5.1 (thanks @desno365!), settings now save and added more settings");
                            builder.setPositiveButton("Follow @AgameR_Modder on Twitter for updates", new android.content.DialogInterface.OnClickListener() {

                                onClick: function(p1, p2) {

                                    Web("http://twitter.com/AgameR_Modder");
                                    p1.cancel();
                                    closeMenu();


                                }

                            });
                            builder.setNegativeButton("Ok", new android.content.DialogInterface.OnClickListener() {

                                onClick: function(p1, p2) {

                                    p1.cancel();


                                }

                            });

                            var dialog = builder.create();
                            dialog.show();
                        }
                    }));
                    menuLayout.addView(changelogButton);

                    var updateButton = new android.widget.Button(ctx);
                    if (theme == "Alternative") {
						updateButton = new android.widget.Button(ctx);
                        updateButton.setText("Check for updates");
                        updateButton.setBackgroundColor(android.graphics.Color.GRAY);
                    } else if (theme == "MCPE") {
						updateButton = minecraftButton("Check for updates");
                        //updateButton.setTypeface(mcpeFont);
                        //updateButton.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (theme == "Blue") {
						updateButton = new android.widget.Button(ctx);
                        updateButton.setText("Check for updates");
                        updateButton.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                        updateButton.setTypeface(mcpeFont);
                    }
                    updateButton.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 100);
                            // check for updates
                            new java.lang.Thread(new java.lang.Runnable() {
                                run: function() {
                                    getLatestVersion();
                                    if (latestVersion != CURRENT_VERSION && latestVersion != undefined) {
                                        clientMessage(ChatColor.BLUE + "[AgameR MoreOptions PE]" + ChatColor.WHITE + " There is a new version available (v" + latestVersion + ")!");
                                    } else {
                                        currentActivity.runOnUiThread(new java.lang.Runnable() {
                                            run: function() {
                                                android.widget.Toast.makeText(currentActivity, new android.text.Html.fromHtml("<b>AgameR MoreOptions PE</b> You have the latest version"), 0).show();
                                            }
                                        });
                                    }
                                }
                            }).start();
                        }
                    }));
                    menuLayout.addView(updateButton);

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
					if (fullScreen == "off") {
                    menu = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth() / 2, ctx.getWindowManager().getDefaultDisplay().getHeight());
					} else if (fullScreen == "on") {
					menu = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight());
					}
					
                    if (theme == "Alternative") {
                        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
                    } else if (theme == "MCPE") {
                        menu.setBackgroundDrawable(blackTImage /*mcpeBackgroundImage*/ /*new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK)*/);
                    } else if (theme == "Blue") {
                        menu.setBackgroundDrawable(blackTImage /*mcpeBackgroundImage*/ /*new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK)*/);
                    }
                    menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
					
					/*var WindowManager = ctx.getSystemService(ctx.WINDOW_SERVICE);
					ctx.getWindow().addFlags(ctx.getWindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
					ctx.getWindow().setStatusBarColor(android.graphics.Color.RED);*/
                } catch (error) {
                    print('An error occured: ' + error);
                }
            }
        }));
    }
    //Exit button
function exit() {
    var ctxe = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctxe.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var xLayout = new android.widget.LinearLayout(ctxe);
                var xButton = new android.widget.Button(ctxe);
                if (theme == "Alternative") {
					xButton = new android.widget.Button(ctxe);
                    xButton.setText("X"); //Text
                } else if (theme == "MCPE") {
					xButton = minecraftButtonX("X");
                } else if (theme == "Blue") {
					xButton = new android.widget.Button(ctxe);
                    xButton.setText("X"); //Text
                    xButton.setTypeface(mcpeFont);
                }
				/*xButton.setOnTouchListener(new android.view.View.OnTouchListener({
                    onClick: function(viewarg) {
						if(theme == "MCPE"){
						xButton.setBackgroundDrawable(mcpeExitButtonPressedImage);
                    }
                }}));*/
                xButton.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 100);
                        exitUI.dismiss(); //Close
                        menu.dismiss(); //Close
                    }
                }));
                xLayout.addView(xButton);
                exitUI = new android.widget.PopupWindow(xLayout, dip2px(40), dip2px(40));
                exitUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                if (crossButtonPosition == "right") {
                    exitUI.showAtLocation(ctxe.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
                } else if (crossButtonPosition == "left") {
                    exitUI.showAtLocation(ctxe.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
                }
            } catch (exception) {
                print(exception);
            }
        }
    }));
}

function closeMenu() {
    var ctxe = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctxe.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                exitUI.dismiss(); //Close
                menu.dismiss(); //Close
            } catch (exception) {
                //print(exception);
            };
        }
    }));
}

function closeHacksList() {
    var ctxe = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctxe.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                hacksList.dismiss(); //Close
            } catch (exception) {
                //print(exception);
            };
        }
    }));
}

function attackHook(attacker, victim) {
    if (State3 == true) {
        if (Player.getEntity() == attacker) {
            Entity.setFireTicks(victim, 9999);
        }
    } else if (State10 == true) {
        if (Player.getEntity() == attacker) {
            setVelX(victim, 4);
            setVelY(victim, 2);
        }
    } else if (State13 == true) {
        if (Player.getEntity() == attacker) {
            Entity.rideAnimal(attacker, victim);
            ModPE.showTipMessage("Tap Jump to jump off the entity");
        }
    } else if (State16 == true) {
		if (Player.getEntity() == attacker) {
			Entity.setHealth(victim, 1);
		}
	}
}

function modTick() {
    var xcoord = Player.getX();
    var ycoord = Player.getY();
    var zcoord = Player.getZ();
    if (State8 == true) {
        ModPE.showTipMessage("X: " + parseInt(xcoord) + " Y: " + parseInt(ycoord) + " Z: " + parseInt(zcoord));
    } else if (State12 == true) {
        Level.setTime(1400);
	} else if (State1 == true) {
		Player.setHealth(20);
	} else if (State19 == true) {
		if(f==1)
      {
			   Xpos=getPlayerX();
        Zpos=getPlayerZ();
        f = f + 1;
      }
      else if(f==3)
      {
        f=1;
        Xdiff=getPlayerX()-Xpos;
        Zdiff=getPlayerZ()-Zpos;
        setVelX(getPlayerEnt(),Xdiff);
        setVelZ(getPlayerEnt(),Zdiff);
        Xdiff=0;
        Zdiff=0;
      }
  if(f!=1)
  {
  f = f + 1;

}
	} else if (State20 == true) {
		//JetPack
		var hit = getYaw()+90; 
		var hitY = getPitch()-180;
		x = Math.cos(hit*(Math.PI/180));
		y = Math.sin(hitY*(Math.PI/180));
		z = Math.sin(hit*(Math.PI/180));
		setVelX(Player.getEntity(), x*3);
		setVelY(Player.getEntity(), y*3);
		setVelZ(Player.getEntity(), z*3);
	}if(State21==true){
if(Player.isFlying()==false){
 
GetVY = Entity.getVelY(Player.getEntity())
if(GetVY > 0.06){

Entity.setVelY(Player.getEntity(), 0.54);
count++

}




if(count==1){
Entity.setVelY(Player.getEntity(), 0.48);
}



if(count==2){
Entity.setVelY(Player.getEntity(), 0.42);
}


if(count==3){
Entity.setVelY(Player.getEntity(), 0.36);
}

if(count==4){
Entity.setVelY(Player.getEntity(), 0.31);
}



if(count==5){
Entity.setVelY(Player.getEntity(), 0.26);
}

if(count==6){
Entity.setVelY(Player.getEntity(), 0.22);
}


if(count==7){
Entity.setVelY(Player.getEntity(), -0.078);
count = 0;
}


}
}else if (Entity.getHealth(Player.getEntity()) < 1) {
        State = false;
        State1 = false;
        State2 = false;
        if (Level.getGameMode == 1) {
            Player.setCanFly(1);
        } else if (Level.getGameMode == 0) {
            Player.setCanFly(0);
        }
        State3 = false;
        State4 = false;
        ModPE.setGameSpeed(20);
        State5 = false;
        State6 = false;
        State7 = false;
        State8 = false;
        State9 = false;
        State10 = false;
        State11 = false;
        State12 = false;
        State13 = false;
        State14 = false;
        State15 = false;
		State16 = false;
		State17 = false;
		State18 = false;
		State19 = false;
		State20 = false;
		State21 = false;
    }
}

var activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

function Web(url) {
    activity.runOnUiThread(new java.lang.Runnable({
        run: function() {
            activity.startActivity(new android.content.Intent(android.content.Intent.ACTION_VIEW, android.net.Uri.parse(url)));
        }
    }));
}

function useItem(x, y, z, itemId, blockId) {
    if (State5 == true) {
        Server.sendChat(spamMessage);
    } else if (State15 == true) {
        Entity.setPosition(Player.getEntity(), x, y + 3, z);
    } else if (State17 == true) {
		if (blockId == 63||blockId == 68) {
			var signX = x;
			var signY = y;
			var signZ = z;
			openMenu("signeditor");
		}
	}
}

function saveFile(directory, filename) {
    try {
        directory = android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/" + directory; // The file should be saved into the world directory.
        var newFile = new java.io.File(directory, filename);
        var directory = new java.io.File(directory);
        var success = directory.mkdirs(); // creates the directory if not already created
        if (!success) { // if not succeeded
            throw new java.io.IOException("Directory " + directory + "cannot be created"); // throws an IOException. new java.io.IOException(String) has a string parameter as a message.
        }
        /*
        newFile.delete();
        Add the above if you want to replace the file.
        */
        newFile.createNewFile(); // creates a blank new file
        var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile)); // creates the output writer
        outWrite.append("");
        outWrite.close(); // closes the writer; not necessary to close, but better do it
        return false; // tells that it succeeds; not necessary to catch, but better do it
    } catch (thrown) { // catches the error in the try block
        return thrown.toString(); // returns a human-readable description of the error. The most common one is java.io.IOException that there is no such file
    }
}

function readFile(directory, filename, wantBytes) { // wantBytes: true or false
    try {
        directory = android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/" + directory;
        var inFile = new java.io.File(directory, filename);
        if (!inFile.isFile()) return "notfile"; // check if it is a file
        var inStream = new java.io.FileReader(inFile);
        if (wantBytes) {
            inStream.read(bytes); // stores the contents into bytes
            var bytes = new Array();
            return bytes;
        }
        var inBuffer = new java.io.BufferedReader(inStream);
        var line = "";
        var returner = "";
        while ((line = inBuffer.readLine()) != null) { // read http://docs.oracle.com/javase/7/docs/api/java/io/BufferedReader.html#readLine()
            returner = returner + line + java.lang.System.getProperty("line.seperator");
        }
        return returner;
    } catch (error) {
        return error.toString();
    }
}

function addItemInv(itemId, amount, damage) {
    var gamemode = Level.getGameMode();
    if (gamemode == 0) {
        Player.addItemInventory(itemId, amount, damage);
    } else if (gamemode == 1) {
        Entity.setCarriedItem(Player.getEntity(), itemId, 1, damage);
    }
}

function openMenu(menu) {
    if (menu == "time") {
        ctx.runOnUiThread(new java.lang.Runnable() {
            run: function() {
                try {
                    dialogGUI = new android.widget.PopupWindow();
                    var btn = new android.widget.Button(ctx);
                    var btn1 = new android.widget.Button(ctx);
                    var dialogLayout = new android.widget.LinearLayout(ctx);
                    dialogLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
                    dialogLayout.addView(btn);
                    dialogLayout.addView(btn1);
                    var dialog = new android.app.Dialog(ctx);
                    dialog.setContentView(dialogLayout);
                    dialog.setTitle("Time");
                    btn.setText("Day");
                    btn1.setText("Night");
                    dialogGUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                    dialog.show();
                    btn.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.setTime(0);
                            dialog.dismiss();
                        }
                    });
                    btn1.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.setTime(12000);
                            dialog.dismiss();
                        }
                    });
                } catch (e) {
                    print("Error: " + e);
                }
            }
        });
		
	} else if (menu == "modinfo") {
        ctx.runOnUiThread(new java.lang.Runnable() {
            run: function() {
                try {
                    dialogGUI = new android.widget.PopupWindow();
					/*var newLineText = new android.widget.TextView(ctx);
					var authorText = new android.widget.TextView(ctx);
					var currentModVersionText = new android.widget.TextView(ctx);
					var targetMCPEVersionText = new android.widget.TextView(ctx);
					var MCPEVersionText = new android.widget.TextView(ctx);
					var newLine2Text = new android.widget.TextView(ctx);
					var btn = new android.widget.Button(ctx);*/
					var newLineText = minecraftText("\n");
					var authorText = minecraftText("Author : " + MOD_AUTHOR);
					var currentModVersionText = minecraftText("Current mod version : v" + CURRENT_VERSION);
					var targetMCPEVersionText = minecraftText("Target MCPE version : v" + targetMCPEVersion);
					var MCPEVersionText = minecraftText("Current MCPE version : v" + mcpeVersion);
					var newLine2Text = minecraftText("\n");
					var btn = minecraftButton("Ok");
                    var dialogLayout = new android.widget.LinearLayout(ctx);
					var spritesheet = android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 0, 0, 16, 16), 16*GuiSize, 16*GuiSize, false);
					dialogLayout.setBackgroundDrawable(getStretchedImage(spritesheet, 4*GuiSize, 4*GuiSize, 8*GuiSize, 8*GuiSize,getContext().getScreenWidth()/2, getContext().getScreenHeight()));
                    dialogLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
					authorText.setGravity(android.view.Gravity.CENTER);
					currentModVersionText.setGravity(android.view.Gravity.CENTER);
					targetMCPEVersionText.setGravity(android.view.Gravity.CENTER);
					MCPEVersionText.setGravity(android.view.Gravity.CENTER);
					var paddingPixel = 25;
					var density = ctx.getResources().getDisplayMetrics().density
					var paddingDp = paddingPixel * density;
					dialogLayout.setPadding(0,paddingDp,0,0);
					btn.setPadding(1, 0, 1, 1);
                    dialogLayout.addView(newLineText);
                    dialogLayout.addView(authorText);
                    dialogLayout.addView(currentModVersionText);
                    dialogLayout.addView(targetMCPEVersionText);
                    dialogLayout.addView(MCPEVersionText);
                    dialogLayout.addView(newLine2Text);
                    dialogLayout.addView(btn);
                    var dialog = new android.app.Dialog(ctx);
					var title = "";
                    dialog.setContentView(dialogLayout);
                    dialog.setTitle(title);
					/*newLineText.setText("\n");
					authorText.setText("Author : " + MOD_AUTHOR);
					currentModVersionText.setText("Current mod version : v" + CURRENT_VERSION);
					targetMCPEVersionText.setText("Target MCPE version : v" + targetMCPEVersion);
					MCPEVersionText.setText("Current MCPE version : v" + mcpeVersion);
					newLine2Text.setText("\n");
                    //btn.setText("Ok");*/
                    dialogGUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                    dialog.show();
                    btn.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
							Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 100);
                            dialog.dismiss();
                        }
                    });
                } catch (e) {
                    print("Error: " + e)
                }
            }
        });
		
	    } else if (menu == "signeditor") {
        ctx.runOnUiThread(new java.lang.Runnable() {
            run: function() {
                try {
                    dialogGUI = new android.widget.PopupWindow();
                    var btn = new android.widget.Button(ctx);
                    var btn1 = new android.widget.Button(ctx);
                    var inputBar = new android.widget.EditText(ctx);
                    var inputBar1 = new android.widget.EditText(ctx);
                    var inputBar2 = new android.widget.EditText(ctx);
                    var inputBar3 = new android.widget.EditText(ctx);
                    var dialogLayout = new android.widget.LinearLayout(ctx);
                    dialogLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
                    dialogLayout.addView(inputBar);
                    dialogLayout.addView(inputBar1);
                    dialogLayout.addView(inputBar2);
                    dialogLayout.addView(inputBar3);
                    dialogLayout.addView(btn);
                    dialogLayout.addView(btn1);
                    var dialog = new android.app.Dialog(ctx);
                    dialog.setContentView(dialogLayout);
                    dialog.setTitle("SignEditor [WIP]");
                    btn.setText("Ok");
                    btn1.setText("Cancel");
                    inputBar.setHint("Line 1");
                    inputBar1.setHint("Line 2");
                    inputBar2.setHint("Line 3");
                    inputBar3.setHint("Line 4");
                    dialogGUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                    dialog.show();
                    btn.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            var line0 = inputBar.getText();
							var line1 = inputBar1.getText();
                            var line2 = inputBar2.getText();
                            var line3 = inpurBar3.getText();
                            Level.setSignText(signX, signY, signZ, 0, line0.toString());
                            /*Level.setSignText(signX, signY, signZ, 1, line1);
                            Level.setSignText(signX, signY, signZ, 2, line2);
                            Level.setSignText(signX, signY, signZ, 3, line3);*/
                            dialog.dismiss();
                        }
                    });
					btn1.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            dialog.dismiss();
                        }
                    });
                } catch (e) {
                    print("Error: " + e)
                }
            }
        });

    } else if (menu == "gamemode") {
        ctx.runOnUiThread(new java.lang.Runnable() {
            run: function() {
                try {
                    dialogGUI = new android.widget.PopupWindow();
                    var btn = new android.widget.Button(ctx);
                    var btn1 = new android.widget.Button(ctx);
                    var dialogLayout = new android.widget.LinearLayout(ctx);
                    dialogLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
                    dialogLayout.addView(btn);
                    dialogLayout.addView(btn1);
                    var dialog = new android.app.Dialog(ctx);
                    dialog.setContentView(dialogLayout);
                    dialog.setTitle("Gamemode");
                    btn.setText("Survival");
                    btn1.setText("Creative");
                    dialogGUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                    dialog.show();
                    btn.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.setGameMode(0);
                            dialog.dismiss();
                        }
                    });
                    btn1.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.setGameMode(1);
                            dialog.dismiss();
                        }
                    });
                } catch (e) {
                    print("Error: " + e)
                }
            }
        });

    } else if (menu == "additem") {
        ctx.runOnUiThread(new java.lang.Runnable() {
            run: function() {
                try {
                    dialogGUI = new android.widget.PopupWindow();
                    var btn = new android.widget.Button(ctx);
                    var inputBar = new android.widget.EditText(ctx);
                    var inputBar1 = new android.widget.EditText(ctx);
                    var inputBar2 = new android.widget.EditText(ctx);
		    inputBar.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
		    inputBar1.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
		    inputBar2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
                    var dialogLayout = new android.widget.LinearLayout(ctx);
                    dialogLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
                    dialogLayout.addView(inputBar);
                    dialogLayout.addView(inputBar1);
                    dialogLayout.addView(inputBar2);
                    dialogLayout.addView(btn);
                    var dialog = new android.app.Dialog(ctx);
                    dialog.setContentView(dialogLayout);
                    dialog.setTitle("Add item to inventory");
                    btn.setText("Ok");
                    inputBar.setHint("ID");
                    inputBar1.setHint("Damage");
                    inputBar2.setHint("Amount");
                    dialogGUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                    dialog.show();
                    btn.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            var itemId = inputBar.getText();
							var damage = inputBar1.getText();
                            var amount = inputBar2.getText();
                            addItemInv(itemId, amount, damage);
                            dialog.dismiss();
                        }
                    });
                } catch (e) {
                    print("Error: " + e)
                }
            }
        });

    } else if (menu == "health") {
        ctx.runOnUiThread(new java.lang.Runnable() {
            run: function() {
                try {
                    dialogGUI = new android.widget.PopupWindow();
                    var btn = new android.widget.Button(ctx);
                    var inputBar = new android.widget.EditText(ctx);
					inputBar.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
                    var dialogLayout = new android.widget.LinearLayout(ctx);
                    dialogLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
                    dialogLayout.addView(inputBar);
                    dialogLayout.addView(btn);
                    var dialog = new android.app.Dialog(ctx);
                    dialog.setContentView(dialogLayout);
                    dialog.setTitle("Health");
                    btn.setText("Ok");
                    inputBar.setHint("0 = kill; 20 = full health");
                    dialogGUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                    dialog.show();
                    btn.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            var health = inputBar.getText();
                            Entity.setHealth(Player.getEntity(), health);
                            dialog.dismiss();
                        }
                    });
                } catch (e) {
                    print("Error: " + e)
                }
            }
        });


    } else if (menu == "morph") {
        ctx.runOnUiThread(new java.lang.Runnable() {
            run: function() {
                try {
                    dialogGUI = new android.widget.PopupWindow();
                    var btn = new android.widget.Button(ctx);
                    var btn1 = new android.widget.Button(ctx);
                    var btn2 = new android.widget.Button(ctx);
					var btn3 = new android.widget.Button(ctx);
					var btn4 = new android.widget.Button(ctx);
					var btn5 = new android.widget.Button(ctx);
					var btn6 = new android.widget.Button(ctx);
					var btn7 = new android.widget.Button(ctx);
					var btn8 = new android.widget.Button(ctx);
					var btn9 = new android.widget.Button(ctx);
					var btn10 = new android.widget.Button(ctx);
					var btn11 = new android.widget.Button(ctx);
					var btn12 = new android.widget.Button(ctx);
                    var dialogLayout = new android.widget.LinearLayout(ctx);
                    dialogLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
                    dialogLayout.addView(btn);
                    dialogLayout.addView(btn1);
                    dialogLayout.addView(btn2);
                    dialogLayout.addView(btn3);
					dialogLayout.addView(btn4);
					dialogLayout.addView(btn5);
					dialogLayout.addView(btn6);
					dialogLayout.addView(btn7);
					dialogLayout.addView(btn8);
					dialogLayout.addView(btn9);
					dialogLayout.addView(btn10);
                    dialogLayout.addView(btn11);
					dialogLayout.addView(btn12);
                    var dialog = new android.app.Dialog(ctx);
                    dialog.setContentView(dialogLayout);
                    dialog.setTitle("Morph");
		    btn.setText("TNT");
            btn1.setText("Chicken");
            btn2.setText("Cow");
		    btn3.setText("Mooshroom");
		    btn4.setText("Pig");
		    btn5.setText("Sheep");
		    btn6.setText("Steve");
		    btn7.setText("Skeleton");
		    btn8.setText("Spider");
		    btn9.setText("Silverfish");
		    btn10.setText("Creeper");
		    btn11.setText("Enderman");
		    btn12.setText("Minecart");
                    dialogGUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                    dialog.show();
                    btn.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Entity.setRenderType(Player.getEntity(),2);
                            dialog.dismiss();
                        }
                    });
                    btn1.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Entity.setRenderType(Player.getEntity(),5);
			    Entity.setMobSkin(Player.getEntity(),"mob/chicken.png");
                            dialog.dismiss();
                        }
                    });
                    btn2.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Entity.setRenderType(Player.getEntity(),6);
			    Entity.setMobSkin(Player.getEntity(),"mob/cow.png");
                            dialog.dismiss();
                        }
		    });
                    btn3.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Entity.setRenderType(Player.getEntity(),7);
			    Entity.setMobSkin(Player.getEntity(),"mob/mooshroom.png");
                            dialog.dismiss();
                        }
                    });
                    btn4.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Entity.setRenderType(Player.getEntity(),8);
			    Entity.setMobSkin(Player.getEntity(),"mob/pig.png");
                            dialog.dismiss();
                        }
                    });
                    btn5.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Entity.setRenderType(Player.getEntity(),9);
			    Entity.setMobSkin(Player.getEntity(),"mob/sheep.png");
                            dialog.dismiss();
                        }
                    });
                    btn6.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Entity.setRenderType(Player.getEntity(),13);
			    Entity.setMobSkin(Player.getEntity(),"mob/char.png");
                            dialog.dismiss();
                        }
                    });
                    btn7.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Entity.setRenderType(Player.getEntity(),14);
			    Entity.setMobSkin(Player.getEntity(),"mob/skeleton.png");
                            dialog.dismiss();
                        }
                    });
                    btn8.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Entity.setRenderType(Player.getEntity(),15);
			    Entity.setMobSkin(Player.getEntity(),"mob/spider.png");
                            dialog.dismiss();
                        }
                    });
                    btn9.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Entity.setRenderType(Player.getEntity(),16);
			    Entity.setMobSkin(Player.getEntity(),"mob/silverfish.png");
                            dialog.dismiss();
                        }
                    });
                    btn10.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Entity.setRenderType(Player.getEntity(),17);
			    Entity.setMobSkin(Player.getEntity(),"mob/creeper.png");
                            dialog.dismiss();
                        }
                    });
                    btn11.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Entity.setRenderType(Player.getEntity(),19);
			    Entity.setMobSkin(Player.getEntity(),"mob/enderman.png");
                            dialog.dismiss();
                        }
                    });
                    btn12.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Entity.setRenderType(Player.getEntity(),26);
			    Entity.setMobSkin(Player.getEntity(),"entity/minecart.png");
                            dialog.dismiss();
                        }
                    });
                } catch (e) {
                    print("Error: " + e)
                }
            }
        });
    } else if (menu == "effects") {
        ctx.runOnUiThread(new java.lang.Runnable() {
            run: function() {
                try {
                    dialogGUI = new android.widget.PopupWindow();
                    var btn = new android.widget.Button(ctx);
                    var btn1 = new android.widget.Button(ctx);
					var particlesTitle = new android.widget.TextView(ctx);
                    var toggleButton = new android.widget.ToggleButton(ctx);
                    var inputBar = new android.widget.EditText(ctx);
                    var inputBar1 = new android.widget.EditText(ctx);
					inputBar.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
					inputBar1.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
                    var dialogLayout = new android.widget.LinearLayout(ctx);
                    dialogLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
                    dialogLayout.addView(inputBar);
                    dialogLayout.addView(inputBar1);
                    dialogLayout.addView(particlesTitle);
                    dialogLayout.addView(toggleButton);
                    dialogLayout.addView(btn);
                    dialogLayout.addView(btn1);
                    var dialog = new android.app.Dialog(ctx);
                    dialog.setContentView(dialogLayout);
                    dialog.setTitle("Effects");
					particlesTitle.setText("Particles");
					particlesTitle.setTextSize(10);
                    btn.setText("Set effect");
					btn1.setText("Cancel");
                    inputBar.setHint("Effect ID");
                    inputBar1.setHint("Duration in seconds");
                    dialogGUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                    dialog.show();
					var toggled = true;
					toggleButton.setChecked(toggled);
					toggleButton.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
							if(toggled==true){
							toggled = false;
							}if(toggled==false){
							toggled = true;
							}
                        }
                    });
                    btn.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            var effectId = inputBar.getText();
                            var seconds = inputBar1.getText();
                            Entity.addEffect(getPlayerEnt(),parseInt(effectId),parseInt(seconds)*20,toggled,toggled);
                            dialog.dismiss();
                        }
                    });
					btn1.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            dialog.dismiss();
                        }
                    });
                } catch (e) {
                    print("Error: " + e)
                }
            }
        });

    } else if (menu == "modsettings") {
        ctx.runOnUiThread(new java.lang.Runnable() {
            run: function() {
                try {
                    dialogGUI = new android.widget.PopupWindow();
                    var dialogLayout = new android.widget.LinearLayout(ctx);
					var spritesheet = android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 0, 0, 16, 16), 16*GuiSize, 16*GuiSize, false);
					dialogLayout.setBackgroundDrawable(getStretchedImage(spritesheet, 4*GuiSize, 4*GuiSize, 8*GuiSize, 8*GuiSize,getContext().getScreenWidth()/2, getContext().getScreenHeight()));
                    dialogLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
                    var dialog = new android.app.Dialog(ctx);
					dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
                    dialog.setContentView(dialogLayout);
                    dialog.setTitle("Settings");
                    dialogGUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                    dialog.show();
                    var layoutTitle = new android.widget.TextView(ctx);
                    layoutTitle.setTextSize(12);
                    layoutTitle.setText("Theme & Layout"); //Title
                    //layoutTitle.setTypeface(mcpeFont);
                    layoutTitle.setTextColor(android.graphics.Color.WHITE); //Color
                    layoutTitle.setGravity(android.view.Gravity.CENTER);

                    dialogLayout.addView(layoutTitle);

                    var exitPositionButton = new android.widget.Button(ctx);
                    if (theme == "Alternative" && crossButtonPosition == "right") {
						exitPositionButton = minecraftButton("Exit button position | RIGHT");
                    } else if (theme == "Alternative" && crossButtonPosition == "left") {
						exitPositionButton = minecraftButton("Exit button position | LEFT");
                    } else if (theme == "MCPE" && crossButtonPosition == "right") {
						exitPositionButton = minecraftButton("Exit button position | RIGHT");
                        //exitPositionButton.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (theme == "MCPE" && crossButtonPosition == "left") {
                        exitPositionButton = minecraftButton("Exit button position | LEFT");
                        //exitPositionButton.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (theme == "Blue" && crossButtonPosition == "right") {
						exitPositionButton = minecraftButton("Exit button position | RIGHT");
                    } else if (theme == "Blue" && crossButtonPosition == "left") {
						exitPositionButton = minecraftButton("Exit button position | LEFT");
                    }
                    exitPositionButton.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            if (theme == "Alternative" && crossButtonPosition == "right") {
                                crossButtonPosition = "left";
								Save();
                                exitPositionButton.setText("Exit button position | LEFT");
                            } else if (theme == "Alternative" && crossButtonPosition == "left") {
                                crossButtonPosition = "right";
								Save();
                                exitPositionButton.setText("Exit button position | RIGHT");
                            } else if (theme == "MCPE" && crossButtonPosition == "right") {
                                crossButtonPosition = "left";
								Save();
                                exitPositionButton.setText("Exit button position | LEFT");
                                //exitPositionButton.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (theme == "MCPE" && crossButtonPosition == "left") {
                                crossButtonPosition = "right";
								Save();
                                exitPositionButton.setText("Exit button position | RIGHT");
                                //exitPositionButton.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (theme == "Blue" && crossButtonPosition == "right") {
                                crossButtonPosition = "left";
								Save();
                                exitPositionButton.setText("Exit button position | LEFT");
                            } else if (theme == "Blue" && crossButtonPosition == "left") {
                                crossButtonPosition = "right";
								Save();
                                exitPositionButton.setText("Exit button position | RIGHT");
                            }
                        }
                    }));
                    dialogLayout.addView(exitPositionButton);

                    var themeButton = new android.widget.Button(ctx);
                    if (theme == "Alternative") {
						themeButton = minecraftButton("Theme | Alternative");
                    } else if (theme == "MCPE") {
						themeButton = minecraftButton("Theme | MCPE");
                        //themeButton.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (theme == "Blue") {
						themeButton = minecraftButton("Theme | Blue");
                    }
                    themeButton.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            if (theme == "Alternative") {
                                theme = "MCPE";
								Save();
                                themeButton.setText("Theme | MCPE");
                                //themeButton.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (theme == "MCPE") {
                                theme = "Blue";
								Save();
                                themeButton.setText("Theme | Blue");
                            } else if (theme == "Blue") {
                                theme = "Alternative";
								Save();
                                themeButton.setText("Theme | Alternative");
                            }
                        }
                    }));
                    dialogLayout.addView(themeButton);
					
                    var fullScreenButton = new android.widget.Button(ctx);
                    if (theme == "Alternative" && fullScreen == "off") {
                        fullScreenButton = minecraftButton("Fullscreen | OFF");
                    } else if (theme == "Alternative" && fullScreen == "on") {
                        fullScreenButton = minecraftButton("Fullscreen | ON");
                    } else if (theme == "MCPE" && fullScreen == "off") {
                        fullScreenButton = minecraftButton("Fullscreen | OFF");
                        //fullScreenButton.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (theme == "MCPE" && fullScreen == "on") {
                        fullScreenButton = minecraftButton("Fullscreen | ON");
                        //fullScreenButton.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (theme == "Blue" && fullScreen == "off") {
                        fullScreenButton = minecraftButton("Fullscreen | OFF");
                    } else if (theme == "Blue" && fullScreen == "on") {
                        fullScreenButton = minecraftButton("Fullscreen | ON");
                    }
                    fullScreenButton.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            if (theme == "Alternative" && fullScreen == "off") {
                                fullScreen = "on";
								Save();
                                fullScreenButton.setText("Fullscreen | ON");
                            } else if (theme == "Alternative" && fullScreen == "on") {
                                fullScreen = "off";
								Save();
                                fullScreenButton.setText("Fullscreen | OFF");
                            } else if (theme == "MCPE" && fullScreen == "off") {
                                fullScreen = "on";
								Save();
                                fullScreenButton.setText("Fullscreen | ON");
                                //fullScreenButton.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (theme == "MCPE" && fullScreen == "on") {
                                fullScreen = "off";
								Save();
                                fullScreenButton.setText("Fullscreen | OFF");
                                //fullScreenButton.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (theme == "Blue" && fullScreen == "off") {
                                fullScreen = "on";
								Save();
                                fullScreenButton.setText("Fullscreen | ON");
                            } else if (theme == "Blue" && fullScreen == "on") {
                                fullScreen = "off";
								Save();
                                fullScreenButton.setText("Fullscreen | OFF");
                            }
                        }
                    }));
                    dialogLayout.addView(fullScreenButton);
					
					var hacksListButton = new android.widget.Button(ctx);
                    if (theme == "Alternative" && showList == "off") {
						hacksListButton = minecraftButton("Show hack list | OFF");
                    } else if (theme == "Alternative" && showList == "on") {
						hacksListButton = minecraftButton("Show hack list | ON");
                    } else if (theme == "MCPE" && showList == "off") {
                        hacksListButton = minecraftButton("Show hack list | OFF");
                        //hacksListButton.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (theme == "MCPE" && showList == "on") {
                        hacksListButton = minecraftButton("Show hack list | ON");
                        //hacksListButton.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (theme == "Blue" && showList == "off") {
                        hacksListButton = minecraftButton("Show hack list | OFF");
                    } else if (theme == "Blue" && showList == "on") {
                        hacksListButton = minecraftButton("Show hack list | ON");
                    }
                    hacksListButton.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            if (theme == "Alternative" && showList == "off") {
                                showList = "on";
								Save();
								showHacksList();
                                hacksListButton.setText("Show hack list | ON");
                            } else if (theme == "Alternative" && showList == "on") {
                                showList = "off";
								Save();
								hacksList.dismiss();
                                hacksListButton.setText("Show hack list | OFF");
                            } else if (theme == "MCPE" && showList == "off") {
                                showList = "on";
								Save();
								showHacksList();
                                hacksListButton.setText("Show hack list | ON");
                                //hacksListButton.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (theme == "MCPE" && showList == "on") {
                                showList = "off";
								Save();
								hacksList.dismiss();
                                hacksListButton.setText("Show hack list | OFF");
                                //hacksListButton.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (theme == "Blue" && showList == "off") {
                                showList = "on";
								Save();
								showHacksList();
                                hacksListButton.setText("Show hack list | ON");
                            } else if (theme == "Blue" && showList == "on") {
                                showList = "off";
								Save();
								hacksList.dismiss();
                                hacksListButton.setText("Show hack list | OFF");
                            }
                        }
                    }));
                    dialogLayout.addView(hacksListButton);
					
					var oldIconButton = new android.widget.Button(ctx);
                    if (theme == "Alternative" && useOldIcon == "off") {
						oldIconButton = minecraftButton("Use old icon | OFF");
                    } else if (theme == "Alternative" && useOldIcon == "on") {
                        oldIconButton = minecraftButton("Use old icon | ON");
                    } else if (theme == "MCPE" && useOldIcon == "off") {
                        oldIconButton = minecraftButton("Use old icon | OFF");
                        //oldIconButton.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (theme == "MCPE" && useOldIcon == "on") {
                        oldIconButton = minecraftButton("Use old icon | ON");
                        //oldIconButton.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (theme == "Blue" && useOldIcon == "off") {
                        oldIconButton = minecraftButton("Use old icon | OFF");
                    } else if (theme == "Blue" && useOldIcon == "on") {
                        oldIconButton = minecraftButton("Use old icon | ON");
                    }
                    oldIconButton.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            if (theme == "Alternative" && useOldIcon == "off") {
                                useOldIcon = "on";
								Save();
                                oldIconButton.setText("Use old icon | ON");
                            } else if (theme == "Alternative" && useOldIcon == "on") {
                                useOldIcon = "off";
								Save();
                                oldIconButton.setText("Use old icon | OFF");
                            } else if (theme == "MCPE" && useOldIcon == "off") {
                                useOldIcon = "on";
								Save();
                                oldIconButton.setText("Use old icon | ON");
                                //oldIconButton.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (theme == "MCPE" && useOldIcon == "on") {
                                useOldIcon = "off";
								Save();
                                oldIconButton.setText("Use old icon | OFF");
                                //oldIconButton.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (theme == "Blue" && useOldIcon == "off") {
                                useOldIcon = "on";
								Save();
                                oldIconButton.setText("Use old icon | ON");
                            } else if (theme == "Blue" && useOldIcon == "on") {
                                useOldIcon = "off";
								Save();
                                oldIconButton.setText("Use old icon | OFF");
                            }
                        }
                    }));
                    dialogLayout.addView(oldIconButton);

                    var optiFineTitle = new android.widget.TextView(ctx);
                    optiFineTitle.setTextSize(12);
                    optiFineTitle.setText("\nOptiFine"); //Title
                    //optiFineTitle.setTypeface(mcpeFont);
                    optiFineTitle.setTextColor(android.graphics.Color.WHITE); //Color
                    optiFineTitle.setGravity(android.view.Gravity.CENTER);

                    dialogLayout.addView(optiFineTitle);

                    var betterGrassButton = new android.widget.Button(ctx);
                    if (theme == "Alternative" && betterGrass == "normal") {
						betterGrassButton = minecraftButton("Better Grass | NORMAL");
                    } else if (theme == "Alternative" && betterGrass == "fast") {
                        betterGrassButton = minecraftButton("Better Grass | FAST");
                    } else if (theme == "Alternative" && betterGrass == "off") {
                        betterGrassButton = minecraftButton("Better Grass | OFF");
                    } else if (theme == "MCPE" && betterGrass == "normal") {
                        betterGrassButton = minecraftButton("Better Grass | NORMAL");
                        //betterGrassButton.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (theme == "MCPE" && betterGrass == "fast") {
                        betterGrassButton = minecraftButton("Better Grass | FAST");
                        //betterGrassButton.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (theme == "MCPE" && betterGrass == "off") {
                        betterGrassButton = minecraftButton("Better Grass | OFF");
                        //betterGrassButton.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (theme == "Blue" && betterGrass == "normal") {
                        betterGrassButton = minecraftButton("Better Grass | NORMAL");
                    } else if (theme == "Blue" && betterGrass == "fast") {
                        betterGrassButton = minecraftButton("Better Grass | FAST");
                    } else if (theme == "Blue" && betterGrass == "off") {
                        betterGrassButton = minecraftButton("Better Grass | OFF");
                    }
                    betterGrassButton.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            if (theme == "Alternative" && betterGrass == "normal") {
                                betterGrass = "fast";
								initializeOptiFine();
								Save();
                                betterGrassButton.setText("Better Grass | FAST");
                            } else if (theme == "Alternative" && betterGrass == "fast") {
                                betterGrass = "off";
								initializeOptiFine();
								Save();
                                betterGrassButton.setText("Better Grass | OFF");
                            } else if (theme == "Alternative" && betterGrass == "off") {
                                betterGrass = "normal";
								initializeOptiFine();
								Save();
                                betterGrassButton.setText("Better Grass | NORMAL");
                            } else if (theme == "MCPE" && betterGrass == "normal") {
                                betterGrass = "fast";
								initializeOptiFine();
								Save();
                                betterGrassButton.setText("Better Grass | FAST");
                            } else if (theme == "MCPE" && betterGrass == "fast") {
                                betterGrass = "off";
								initializeOptiFine();
								Save();
                                betterGrassButton.setText("Better Grass | OFF");
                            } else if (theme == "MCPE" && betterGrass == "off") {
                                betterGrass = "normal";
								initializeOptiFine();
								Save();
                                betterGrassButton.setText("Better Grass | NORMAL");
                            } else if (theme == "Blue" && betterGrass == "normal") {
                                betterGrass = "fast";
								initializeOptiFine();
								Save();
                                betterGrassButton.setText("Better Grass | FAST");
                            } else if (theme == "Blue" && betterGrass == "fast") {
                                betterGrass = "off";
								initializeOptiFine();
								Save();
                                betterGrassButton.setText("Better Grass | OFF");
                            } else if (theme == "Blue" && betterGrass == "off") {
                                betterGrass = "normal";
								initializeOptiFine();
								Save();
                                betterGrassButton.setText("Better Grass | NORMAL");
                            }
                        }
                    }));
                    dialogLayout.addView(betterGrassButton);

                } catch (e) {
                    print("Error: " + e)
                }
            }
        });

    }
}

function allItemsEatable(onOrOff) {
	if (onOrOff == 1) {
		for (i = 255; i < 382; i++) {
			ModPE.setFoodItem(i,"apple_golden",0,5,"Item [EATABLE]");
		}
		for (i = 384; i < 512; i++) {
			ModPE.setFoodItem(i,"apple_golden",0,5,"Item [EATABLE]");
		}
	} else if (onOrOff == 0) {
		//ModPE.setItem(4000,"random_spawn_egg",0,"Spawn Random Mob");
	}
}

function xRay(onOrOff) {
    if (onOrOff == 1) {
        var RenderLayer = 1;
        ///////// CHESTS ARE NOW GLOWING OR HAVE THE SAME BRIGHTNESS AS TORCHES, ITS GOOD TO TROLL YOUR FRIENDS, GLOWSTONE AND ANOTHER BLOCK HAS NOW NO BRIGHTNESS, THE PLAYER CAN SEE NOW BETTER THROUGH BLOCKS
        Block.setLightLevel(54, 15);
        Block.setLightLevel(86, 0);
        Block.setLightLevel(89, 0);

        Block.setRenderLayer(1, RenderLayer);
        Block.setRenderLayer(2, RenderLayer);
        Block.setRenderLayer(3, RenderLayer);
        Block.setRenderLayer(4, RenderLayer);
        Block.setRenderLayer(5, RenderLayer);
        Block.setRenderLayer(6, RenderLayer);
        Block.setRenderLayer(7, RenderLayer);
        Block.setRenderLayer(8, RenderLayer);
        Block.setRenderLayer(9, RenderLayer);
        Block.setRenderLayer(10, RenderLayer);
        Block.setRenderLayer(11, RenderLayer);
        Block.setRenderLayer(12, RenderLayer);
        Block.setRenderLayer(13, RenderLayer);
        Block.setRenderLayer(14, RenderLayer);
        Block.setRenderLayer(15, RenderLayer);
        Block.setRenderLayer(16, RenderLayer);
        Block.setRenderLayer(17, RenderLayer);
        Block.setRenderLayer(18, RenderLayer);
        Block.setRenderLayer(19, RenderLayer);
        Block.setRenderLayer(20, RenderLayer);
        Block.setRenderLayer(21, RenderLayer);
        Block.setRenderLayer(22, RenderLayer);
        Block.setRenderLayer(23, RenderLayer);
        Block.setRenderLayer(24, RenderLayer);
        Block.setRenderLayer(25, RenderLayer);
        Block.setRenderLayer(26, RenderLayer);
        Block.setRenderLayer(27, RenderLayer);
        Block.setRenderLayer(28, RenderLayer);
        Block.setRenderLayer(29, RenderLayer);
        Block.setRenderLayer(30, RenderLayer);
        Block.setRenderLayer(31, RenderLayer);
        Block.setRenderLayer(32, RenderLayer);
        Block.setRenderLayer(33, RenderLayer);
        Block.setRenderLayer(34, RenderLayer);
        Block.setRenderLayer(35, RenderLayer);
        Block.setRenderLayer(36, RenderLayer);
        Block.setRenderLayer(37, RenderLayer);
        Block.setRenderLayer(38, RenderLayer);
        Block.setRenderLayer(39, RenderLayer);
        Block.setRenderLayer(40, RenderLayer);
        Block.setRenderLayer(41, RenderLayer);
        Block.setRenderLayer(42, RenderLayer);
        Block.setRenderLayer(43, RenderLayer);
        Block.setRenderLayer(44, RenderLayer);
        Block.setRenderLayer(45, RenderLayer);
        Block.setRenderLayer(46, RenderLayer);
        Block.setRenderLayer(47, RenderLayer);
        Block.setRenderLayer(48, RenderLayer);
        Block.setRenderLayer(49, RenderLayer);
        Block.setRenderLayer(50, RenderLayer);
        Block.setRenderLayer(51, RenderLayer);
        Block.setRenderLayer(52, RenderLayer);
        Block.setRenderLayer(53, RenderLayer);
        Block.setRenderLayer(54, RenderLayer);
        Block.setRenderLayer(55, RenderLayer);
        Block.setRenderLayer(56, RenderLayer);
        Block.setRenderLayer(57, RenderLayer);
        Block.setRenderLayer(58, RenderLayer);
        Block.setRenderLayer(59, RenderLayer);
        Block.setRenderLayer(60, RenderLayer);
        Block.setRenderLayer(61, RenderLayer);
        Block.setRenderLayer(62, RenderLayer);
        Block.setRenderLayer(63, RenderLayer);
        Block.setRenderLayer(64, RenderLayer);
        Block.setRenderLayer(65, RenderLayer);
        Block.setRenderLayer(66, RenderLayer);
        Block.setRenderLayer(67, RenderLayer);
        Block.setRenderLayer(68, RenderLayer);
        Block.setRenderLayer(69, RenderLayer);
        Block.setRenderLayer(70, RenderLayer);
        Block.setRenderLayer(71, RenderLayer);
        Block.setRenderLayer(72, RenderLayer);
        Block.setRenderLayer(73, RenderLayer);
        Block.setRenderLayer(74, RenderLayer);
        Block.setRenderLayer(75, RenderLayer);
        Block.setRenderLayer(76, RenderLayer);
        Block.setRenderLayer(77, RenderLayer);
        Block.setRenderLayer(78, RenderLayer);
        Block.setRenderLayer(79, RenderLayer);
        Block.setRenderLayer(80, RenderLayer);
        Block.setRenderLayer(81, RenderLayer);
        Block.setRenderLayer(82, RenderLayer);
        Block.setRenderLayer(83, RenderLayer);
        Block.setRenderLayer(84, RenderLayer);
        Block.setRenderLayer(85, RenderLayer);
        Block.setRenderLayer(86, RenderLayer);
        Block.setRenderLayer(87, RenderLayer);
        Block.setRenderLayer(88, RenderLayer);
        Block.setRenderLayer(89, RenderLayer);
        Block.setRenderLayer(90, RenderLayer);
        Block.setRenderLayer(91, RenderLayer);
        Block.setRenderLayer(92, RenderLayer);
        Block.setRenderLayer(93, RenderLayer);
        Block.setRenderLayer(94, RenderLayer);
        Block.setRenderLayer(95, RenderLayer);
        Block.setRenderLayer(96, RenderLayer);
        Block.setRenderLayer(97, RenderLayer);
        Block.setRenderLayer(98, RenderLayer);
        Block.setRenderLayer(99, RenderLayer);
        Block.setRenderLayer(100, RenderLayer);
        Block.setRenderLayer(101, RenderLayer);
        Block.setRenderLayer(102, RenderLayer);
        Block.setRenderLayer(103, RenderLayer);
        Block.setRenderLayer(104, RenderLayer);
        Block.setRenderLayer(105, RenderLayer);
        Block.setRenderLayer(106, RenderLayer);
        Block.setRenderLayer(107, RenderLayer);
        Block.setRenderLayer(108, RenderLayer);
        Block.setRenderLayer(109, RenderLayer);
        Block.setRenderLayer(110, RenderLayer);
        Block.setRenderLayer(111, RenderLayer);
        Block.setRenderLayer(112, RenderLayer);
        Block.setRenderLayer(113, RenderLayer);
        Block.setRenderLayer(114, RenderLayer);
        Block.setRenderLayer(115, RenderLayer);
        Block.setRenderLayer(117, RenderLayer);
        Block.setRenderLayer(118, RenderLayer);
        Block.setRenderLayer(119, RenderLayer);
        Block.setRenderLayer(120, RenderLayer);
        Block.setRenderLayer(121, RenderLayer);
        Block.setRenderLayer(122, RenderLayer);
        Block.setRenderLayer(123, RenderLayer);
        Block.setRenderLayer(124, RenderLayer);
        Block.setRenderLayer(125, RenderLayer);
        Block.setRenderLayer(126, RenderLayer);
        Block.setRenderLayer(127, RenderLayer);
        Block.setRenderLayer(128, RenderLayer);
        Block.setRenderLayer(129, RenderLayer);
        Block.setRenderLayer(130, RenderLayer);
        Block.setRenderLayer(131, RenderLayer);
        Block.setRenderLayer(132, RenderLayer);
        Block.setRenderLayer(133, RenderLayer);
        Block.setRenderLayer(134, RenderLayer);
        Block.setRenderLayer(135, RenderLayer);
        Block.setRenderLayer(136, RenderLayer);
        Block.setRenderLayer(137, RenderLayer);
        Block.setRenderLayer(138, RenderLayer);
        Block.setRenderLayer(139, RenderLayer);
        Block.setRenderLayer(140, RenderLayer);
        Block.setRenderLayer(141, RenderLayer);
        Block.setRenderLayer(142, RenderLayer);
        Block.setRenderLayer(143, RenderLayer);
        Block.setRenderLayer(144, RenderLayer);
        Block.setRenderLayer(145, RenderLayer);
        Block.setRenderLayer(146, RenderLayer);
        Block.setRenderLayer(147, RenderLayer);
        Block.setRenderLayer(148, RenderLayer);
        Block.setRenderLayer(149, RenderLayer);
        Block.setRenderLayer(150, RenderLayer);
        Block.setRenderLayer(151, RenderLayer);
        Block.setRenderLayer(152, RenderLayer);
        Block.setRenderLayer(153, RenderLayer);
        Block.setRenderLayer(154, RenderLayer);
        Block.setRenderLayer(155, RenderLayer);
        Block.setRenderLayer(156, RenderLayer);
        Block.setRenderLayer(157, RenderLayer);
        Block.setRenderLayer(158, RenderLayer);
        Block.setRenderLayer(159, RenderLayer);
        Block.setRenderLayer(160, RenderLayer);
        Block.setRenderLayer(161, RenderLayer);
        Block.setRenderLayer(162, RenderLayer);
        Block.setRenderLayer(163, RenderLayer);
        Block.setRenderLayer(164, RenderLayer);
        Block.setRenderLayer(165, RenderLayer);
        Block.setRenderLayer(166, RenderLayer);
        Block.setRenderLayer(167, RenderLayer);
        Block.setRenderLayer(168, RenderLayer);
        Block.setRenderLayer(169, RenderLayer);
        Block.setRenderLayer(170, RenderLayer);
        Block.setRenderLayer(171, RenderLayer);
        Block.setRenderLayer(172, RenderLayer);
        Block.setRenderLayer(173, RenderLayer);
        Block.setRenderLayer(174, RenderLayer);
        Block.setRenderLayer(175, RenderLayer);
        Block.setRenderLayer(176, RenderLayer);
        Block.setRenderLayer(177, RenderLayer);
        Block.setRenderLayer(178, RenderLayer);
        Block.setRenderLayer(179, RenderLayer);
        Block.setRenderLayer(180, RenderLayer);
        Block.setRenderLayer(181, RenderLayer);
        Block.setRenderLayer(182, RenderLayer);
        Block.setRenderLayer(183, RenderLayer);
        Block.setRenderLayer(184, RenderLayer);
        Block.setRenderLayer(185, RenderLayer);
        Block.setRenderLayer(186, RenderLayer);
        Block.setRenderLayer(187, RenderLayer);
        Block.setRenderLayer(188, RenderLayer);
        Block.setRenderLayer(189, RenderLayer);
        Block.setRenderLayer(190, RenderLayer);
        Block.setRenderLayer(191, RenderLayer);
        Block.setRenderLayer(192, RenderLayer);
        Block.setRenderLayer(193, RenderLayer);
        Block.setRenderLayer(194, RenderLayer);
        Block.setRenderLayer(195, RenderLayer);
        Block.setRenderLayer(196, RenderLayer);
        Block.setRenderLayer(197, RenderLayer);
        Block.setRenderLayer(198, RenderLayer);
        Block.setRenderLayer(199, RenderLayer);
        Block.setRenderLayer(200, RenderLayer);
        Block.setRenderLayer(201, RenderLayer);
        Block.setRenderLayer(202, RenderLayer);
        Block.setRenderLayer(203, RenderLayer);
        Block.setRenderLayer(204, RenderLayer);
        Block.setRenderLayer(205, RenderLayer);
        Block.setRenderLayer(206, RenderLayer);
        Block.setRenderLayer(207, RenderLayer);
        Block.setRenderLayer(208, RenderLayer);
        Block.setRenderLayer(209, RenderLayer);
        Block.setRenderLayer(210, RenderLayer);
        Block.setRenderLayer(211, RenderLayer);
        Block.setRenderLayer(212, RenderLayer);
        Block.setRenderLayer(213, RenderLayer);
        Block.setRenderLayer(214, RenderLayer);
        Block.setRenderLayer(215, RenderLayer);
        Block.setRenderLayer(217, RenderLayer);
        Block.setRenderLayer(218, RenderLayer);
        Block.setRenderLayer(219, RenderLayer);
        Block.setRenderLayer(220, RenderLayer);
        Block.setRenderLayer(221, RenderLayer);
        Block.setRenderLayer(222, RenderLayer);
        Block.setRenderLayer(223, RenderLayer);
        Block.setRenderLayer(224, RenderLayer);
        Block.setRenderLayer(225, RenderLayer);
        Block.setRenderLayer(226, RenderLayer);
        Block.setRenderLayer(227, RenderLayer);
        Block.setRenderLayer(228, RenderLayer);
        Block.setRenderLayer(229, RenderLayer);
        Block.setRenderLayer(230, RenderLayer);
        Block.setRenderLayer(231, RenderLayer);
        Block.setRenderLayer(232, RenderLayer);
        Block.setRenderLayer(233, RenderLayer);
        Block.setRenderLayer(234, RenderLayer);
        Block.setRenderLayer(235, RenderLayer);
        Block.setRenderLayer(236, RenderLayer);
        Block.setRenderLayer(237, RenderLayer);
        Block.setRenderLayer(238, RenderLayer);
        Block.setRenderLayer(239, RenderLayer);
        Block.setRenderLayer(240, RenderLayer);
        Block.setRenderLayer(241, RenderLayer);
        Block.setRenderLayer(242, RenderLayer);
        Block.setRenderLayer(243, RenderLayer);
        Block.setRenderLayer(244, RenderLayer);
        Block.setRenderLayer(245, RenderLayer);
        Block.setRenderLayer(246, RenderLayer);
        Block.setRenderLayer(247, RenderLayer);
        Block.setRenderLayer(248, RenderLayer);
        Block.setRenderLayer(249, RenderLayer);
        Block.setRenderLayer(250, RenderLayer);
        Block.setRenderLayer(251, RenderLayer);
        Block.setRenderLayer(252, RenderLayer);
        Block.setRenderLayer(253, RenderLayer);
        Block.setRenderLayer(254, RenderLayer);
        Block.setRenderLayer(255, RenderLayer);
    } else if (onOrOff == 0) {
        OpaqLayer = 0;

        Block.setLightLevel(54, 0);
        Block.setLightLevel(86, 15);
        Block.setLightLevel(89, 15);

        Block.setRenderLayer(1, OpaqLayer);
        Block.setRenderLayer(2, OpaqLayer);
        Block.setRenderLayer(3, OpaqLayer);
        Block.setRenderLayer(4, OpaqLayer);
        Block.setRenderLayer(5, OpaqLayer);
        Block.setRenderLayer(6, OpaqLayer);
        Block.setRenderLayer(7, OpaqLayer);
        Block.setRenderLayer(8, OpaqLayer);
        Block.setRenderLayer(9, OpaqLayer);
        Block.setRenderLayer(10, OpaqLayer);
        Block.setRenderLayer(11, OpaqLayer);
        Block.setRenderLayer(12, OpaqLayer);
        Block.setRenderLayer(13, OpaqLayer);
        Block.setRenderLayer(14, OpaqLayer);
        Block.setRenderLayer(15, OpaqLayer);
        Block.setRenderLayer(17, OpaqLayer);
        Block.setRenderLayer(18, OpaqLayer);
        Block.setRenderLayer(19, OpaqLayer);
        Block.setRenderLayer(20, 1);
        Block.setRenderLayer(21, OpaqLayer);
        Block.setRenderLayer(22, OpaqLayer);
        Block.setRenderLayer(23, OpaqLayer);
        Block.setRenderLayer(24, OpaqLayer);
        Block.setRenderLayer(25, OpaqLayer);
        Block.setRenderLayer(26, OpaqLayer);
        Block.setRenderLayer(27, OpaqLayer);
        Block.setRenderLayer(28, OpaqLayer);
        Block.setRenderLayer(29, OpaqLayer);
        Block.setRenderLayer(30, OpaqLayer);
        Block.setRenderLayer(31, OpaqLayer);
        Block.setRenderLayer(32, OpaqLayer);
        Block.setRenderLayer(33, OpaqLayer);
        Block.setRenderLayer(34, OpaqLayer);
        Block.setRenderLayer(35, OpaqLayer);
        Block.setRenderLayer(36, OpaqLayer);
        Block.setRenderLayer(37, OpaqLayer);
        Block.setRenderLayer(38, OpaqLayer);
        Block.setRenderLayer(39, OpaqLayer);
        Block.setRenderLayer(40, OpaqLayer);
        Block.setRenderLayer(41, OpaqLayer);
        Block.setRenderLayer(42, OpaqLayer);
        Block.setRenderLayer(43, OpaqLayer);
        Block.setRenderLayer(44, OpaqLayer);
        Block.setRenderLayer(45, OpaqLayer);
        Block.setRenderLayer(46, OpaqLayer);
        Block.setRenderLayer(47, OpaqLayer);
        Block.setRenderLayer(48, OpaqLayer);
        Block.setRenderLayer(49, OpaqLayer);
        Block.setRenderLayer(50, OpaqLayer);
        Block.setRenderLayer(51, OpaqLayer);
        Block.setRenderLayer(52, OpaqLayer);
        Block.setRenderLayer(53, OpaqLayer);
        Block.setRenderLayer(54, OpaqLayer);
        Block.setRenderLayer(55, OpaqLayer);
        Block.setRenderLayer(56, OpaqLayer);
        Block.setRenderLayer(57, OpaqLayer);
        Block.setRenderLayer(58, OpaqLayer);
        Block.setRenderLayer(59, OpaqLayer);
        Block.setRenderLayer(60, OpaqLayer);
        Block.setRenderLayer(61, OpaqLayer);
        Block.setRenderLayer(62, OpaqLayer);
        Block.setRenderLayer(63, OpaqLayer);
        Block.setRenderLayer(64, OpaqLayer);
        Block.setRenderLayer(65, OpaqLayer);
        Block.setRenderLayer(66, OpaqLayer);
        Block.setRenderLayer(67, OpaqLayer);
        Block.setRenderLayer(68, OpaqLayer);
        Block.setRenderLayer(69, OpaqLayer);
        Block.setRenderLayer(70, OpaqLayer);
        Block.setRenderLayer(71, OpaqLayer);
        Block.setRenderLayer(72, OpaqLayer);
        Block.setRenderLayer(73, OpaqLayer);
        Block.setRenderLayer(74, OpaqLayer);
        Block.setRenderLayer(75, OpaqLayer);
        Block.setRenderLayer(76, OpaqLayer);
        Block.setRenderLayer(77, OpaqLayer);
        Block.setRenderLayer(78, OpaqLayer);
        Block.setRenderLayer(79, OpaqLayer);
        Block.setRenderLayer(80, OpaqLayer);
        Block.setRenderLayer(81, OpaqLayer);
        Block.setRenderLayer(82, OpaqLayer);
        Block.setRenderLayer(83, OpaqLayer);
        Block.setRenderLayer(84, OpaqLayer);
        Block.setRenderLayer(85, OpaqLayer);
        Block.setRenderLayer(86, OpaqLayer);
        Block.setRenderLayer(87, OpaqLayer);
        Block.setRenderLayer(88, OpaqLayer);
        Block.setRenderLayer(89, OpaqLayer);
        Block.setRenderLayer(90, OpaqLayer);
        Block.setRenderLayer(91, OpaqLayer);
        Block.setRenderLayer(92, OpaqLayer);
        Block.setRenderLayer(93, OpaqLayer);
        Block.setRenderLayer(94, OpaqLayer);
        Block.setRenderLayer(95, OpaqLayer);
        Block.setRenderLayer(96, OpaqLayer);
        Block.setRenderLayer(97, OpaqLayer);
        Block.setRenderLayer(98, OpaqLayer);
        Block.setRenderLayer(99, OpaqLayer);
        Block.setRenderLayer(100, OpaqLayer);
        Block.setRenderLayer(101, OpaqLayer);
        Block.setRenderLayer(102, OpaqLayer);
        Block.setRenderLayer(103, OpaqLayer);
        Block.setRenderLayer(104, OpaqLayer);
        Block.setRenderLayer(105, OpaqLayer);
        Block.setRenderLayer(106, OpaqLayer);
        Block.setRenderLayer(107, OpaqLayer);
        Block.setRenderLayer(108, OpaqLayer);
        Block.setRenderLayer(109, OpaqLayer);
        Block.setRenderLayer(110, OpaqLayer);
        Block.setRenderLayer(111, OpaqLayer);
        Block.setRenderLayer(112, OpaqLayer);
        Block.setRenderLayer(113, OpaqLayer);
        Block.setRenderLayer(114, OpaqLayer);
        Block.setRenderLayer(115, OpaqLayer);
        Block.setRenderLayer(117, OpaqLayer);
        Block.setRenderLayer(118, OpaqLayer);
        Block.setRenderLayer(119, OpaqLayer);
        Block.setRenderLayer(120, OpaqLayer);
        Block.setRenderLayer(121, OpaqLayer);
        Block.setRenderLayer(122, OpaqLayer);
        Block.setRenderLayer(123, OpaqLayer);
        Block.setRenderLayer(124, OpaqLayer);
        Block.setRenderLayer(125, OpaqLayer);
        Block.setRenderLayer(126, OpaqLayer);
        Block.setRenderLayer(127, OpaqLayer);
        Block.setRenderLayer(128, OpaqLayer);
        Block.setRenderLayer(129, OpaqLayer);
        Block.setRenderLayer(130, OpaqLayer);
        Block.setRenderLayer(131, OpaqLayer);
        Block.setRenderLayer(132, OpaqLayer);
        Block.setRenderLayer(133, OpaqLayer);
        Block.setRenderLayer(134, OpaqLayer);
        Block.setRenderLayer(135, OpaqLayer);
        Block.setRenderLayer(136, OpaqLayer);
        Block.setRenderLayer(137, OpaqLayer);
        Block.setRenderLayer(138, OpaqLayer);
        Block.setRenderLayer(139, OpaqLayer);
        Block.setRenderLayer(140, OpaqLayer);
        Block.setRenderLayer(141, OpaqLayer);
        Block.setRenderLayer(142, OpaqLayer);
        Block.setRenderLayer(143, OpaqLayer);
        Block.setRenderLayer(144, OpaqLayer);
        Block.setRenderLayer(145, OpaqLayer);
        Block.setRenderLayer(146, OpaqLayer);
        Block.setRenderLayer(147, OpaqLayer);
        Block.setRenderLayer(148, OpaqLayer);
        Block.setRenderLayer(149, OpaqLayer);
        Block.setRenderLayer(150, OpaqLayer);
        Block.setRenderLayer(151, OpaqLayer);
        Block.setRenderLayer(152, OpaqLayer);
        Block.setRenderLayer(153, OpaqLayer);
        Block.setRenderLayer(154, OpaqLayer);
        Block.setRenderLayer(155, OpaqLayer);
        Block.setRenderLayer(156, OpaqLayer);
        Block.setRenderLayer(157, OpaqLayer);
        Block.setRenderLayer(158, OpaqLayer);
        Block.setRenderLayer(159, OpaqLayer);
        Block.setRenderLayer(160, OpaqLayer);
        Block.setRenderLayer(161, OpaqLayer);
        Block.setRenderLayer(162, OpaqLayer);
        Block.setRenderLayer(163, OpaqLayer);
        Block.setRenderLayer(164, OpaqLayer);
        Block.setRenderLayer(165, OpaqLayer);
        Block.setRenderLayer(166, OpaqLayer);
        Block.setRenderLayer(167, OpaqLayer);
        Block.setRenderLayer(168, OpaqLayer);
        Block.setRenderLayer(169, OpaqLayer);
        Block.setRenderLayer(170, OpaqLayer);
        Block.setRenderLayer(171, OpaqLayer);
        Block.setRenderLayer(172, OpaqLayer);
        Block.setRenderLayer(173, OpaqLayer);
        Block.setRenderLayer(174, OpaqLayer);
        Block.setRenderLayer(175, OpaqLayer);
        Block.setRenderLayer(176, OpaqLayer);
        Block.setRenderLayer(177, OpaqLayer);
        Block.setRenderLayer(178, OpaqLayer);
        Block.setRenderLayer(179, OpaqLayer);
        Block.setRenderLayer(180, OpaqLayer);
        Block.setRenderLayer(181, OpaqLayer);
        Block.setRenderLayer(182, OpaqLayer);
        Block.setRenderLayer(183, OpaqLayer);
        Block.setRenderLayer(184, OpaqLayer);
        Block.setRenderLayer(185, OpaqLayer);
        Block.setRenderLayer(186, OpaqLayer);
        Block.setRenderLayer(187, OpaqLayer);
        Block.setRenderLayer(188, OpaqLayer);
        Block.setRenderLayer(189, OpaqLayer);
        Block.setRenderLayer(190, OpaqLayer);
        Block.setRenderLayer(191, OpaqLayer);
        Block.setRenderLayer(192, OpaqLayer);
        Block.setRenderLayer(193, OpaqLayer);
        Block.setRenderLayer(194, OpaqLayer);
        Block.setRenderLayer(195, OpaqLayer);
        Block.setRenderLayer(196, OpaqLayer);
        Block.setRenderLayer(197, OpaqLayer);
        Block.setRenderLayer(198, OpaqLayer);
        Block.setRenderLayer(199, OpaqLayer);
        Block.setRenderLayer(200, OpaqLayer);
        Block.setRenderLayer(201, OpaqLayer);
        Block.setRenderLayer(202, OpaqLayer);
        Block.setRenderLayer(203, OpaqLayer);
        Block.setRenderLayer(204, OpaqLayer);
        Block.setRenderLayer(205, OpaqLayer);
        Block.setRenderLayer(206, OpaqLayer);
        Block.setRenderLayer(207, OpaqLayer);
        Block.setRenderLayer(208, OpaqLayer);
        Block.setRenderLayer(209, OpaqLayer);
        Block.setRenderLayer(210, OpaqLayer);
        Block.setRenderLayer(211, OpaqLayer);
        Block.setRenderLayer(212, OpaqLayer);
        Block.setRenderLayer(213, OpaqLayer);
        Block.setRenderLayer(214, OpaqLayer);
        Block.setRenderLayer(215, OpaqLayer);
        Block.setRenderLayer(217, OpaqLayer);
        Block.setRenderLayer(218, OpaqLayer);
        Block.setRenderLayer(219, OpaqLayer);
        Block.setRenderLayer(220, OpaqLayer);
        Block.setRenderLayer(221, OpaqLayer);
        Block.setRenderLayer(222, OpaqLayer);
        Block.setRenderLayer(223, OpaqLayer);
        Block.setRenderLayer(224, OpaqLayer);
        Block.setRenderLayer(225, OpaqLayer);
        Block.setRenderLayer(226, OpaqLayer);
        Block.setRenderLayer(227, OpaqLayer);
        Block.setRenderLayer(228, OpaqLayer);
        Block.setRenderLayer(229, OpaqLayer);
        Block.setRenderLayer(230, OpaqLayer);
        Block.setRenderLayer(231, OpaqLayer);
        Block.setRenderLayer(232, OpaqLayer);
        Block.setRenderLayer(233, OpaqLayer);
        Block.setRenderLayer(234, OpaqLayer);
        Block.setRenderLayer(235, OpaqLayer);
        Block.setRenderLayer(236, OpaqLayer);
        Block.setRenderLayer(237, OpaqLayer);
        Block.setRenderLayer(238, OpaqLayer);
        Block.setRenderLayer(239, OpaqLayer);
        Block.setRenderLayer(240, OpaqLayer);
        Block.setRenderLayer(241, OpaqLayer);
        Block.setRenderLayer(242, OpaqLayer);
        Block.setRenderLayer(243, OpaqLayer);
        Block.setRenderLayer(244, OpaqLayer);
        Block.setRenderLayer(245, OpaqLayer);
        Block.setRenderLayer(248, OpaqLayer);
        Block.setRenderLayer(249, OpaqLayer);
        Block.setRenderLayer(250, OpaqLayer);
        Block.setRenderLayer(251, OpaqLayer);
        Block.setRenderLayer(252, OpaqLayer);
        Block.setRenderLayer(253, OpaqLayer);
        Block.setRenderLayer(254, OpaqLayer);
        Block.setRenderLayer(255, OpaqLayer);
    }
    var originalTile = getTile(Player.getX(), Player.getY(), Player.getZ());
    setTile(Player.getX(), Player.getY(), Player.getZ(), originalTile, 0);
}

var settingsPath = android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/minecraftpe/mods/";
	
function Save(){
    java.io.File(settingsPath).mkdirs();
    var newFile = new java.io.File(settingsPath,"moreoptionspe.txt");
    newFile.createNewFile();
    var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
    outWrite.append(theme.toString());
    outWrite.append(","+crossButtonPosition.toString());  //We need to separate all variables. We split them with ","
    outWrite.append(","+spamMessage.toString());
	outWrite.append(","+betterGrass.toString());
	outWrite.append(","+fullScreen.toString());
	outWrite.append(","+showList.toString());
	outWrite.append(","+useOldIcon.toString());
    outWrite.close();
    }
	
function Load(){
    if(!java.io.File(settingsPath+"moreoptionspe.txt").exists())
        return;
    var file = new java.io.File(settingsPath+"moreoptionspe.txt");
    var fos = new java.io.FileInputStream(file);
    var str = new java.lang.StringBuilder();
    var ch;
    while((ch=fos.read())!=-1)
        str.append(java.lang.Character(ch));
    theme = str.toString().split(",")[0];  //Here we split text by ","
    crossButtonPosition = str.toString().split(",")[1];
    spamMessage = str.toString().split(",")[2];
	betterGrass = str.toString().split(",")[3];
	fullScreen = str.toString().split(",")[4];
	showList = str.toString().split(",")[5];
	useOldIcon = str.toString().split(",")[6];
    fos.close();
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

//*Mod info*
//------------
//Mod version: 1.0.0-pre2
//For full changelog, look at the mod's menu ingame


//*Ideas*
//---------
//If you have any ideas for this mod, please send them to my MC-Forum account, or on Twitter: @AgameR_Modder