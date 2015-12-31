/**
* #######################
* © (Copyright) 2014-2015
* @name AgameR Paint Mod PE
* @author peacestorm
* #######################
**/

var PaintModPE = {};

var paintAnyBlockSetting = "on";

var GUI;
var menu;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

const CURRENT_VERSION = "3.0-pre";
const MOD_NAME = "AgameR Paint Mod PE";
const MOD_AUTHOR = "peacestorm";
var latestVersion;
var latestPocketEditionVersion;
var minimalMCPEVersion = "0.12.0";

var currentActivity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var sdcard = android.os.Environment.getExternalStorageDirectory();

var newScript;

var currentPaintGunColor = "White";

var crossHairImage = android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/paintgun_crosshair.png"));

ModPE.overrideTexture("images/mob/white.png", "http://i.imgur.com/OnAoGUC.png");
ModPE.overrideTexture("images/mob/orange.png", "http://i.imgur.com/vYmuP0R.png");
ModPE.overrideTexture("images/mob/magenta.png", "http://i.imgur.com/0xNF7Tq.png");
ModPE.overrideTexture("images/mob/lightblue.png", "http://i.imgur.com/ctgWh7b.png");
ModPE.overrideTexture("images/mob/yellow.png", "http://i.imgur.com/79fJGKx.png");
ModPE.overrideTexture("images/mob/limegreen.png", "http://i.imgur.com/Ttb33ro.png");
ModPE.overrideTexture("images/mob/pink.png", "http://i.imgur.com/NlWZwei.png");
ModPE.overrideTexture("images/mob/gray.png", "http://i.imgur.com/mBQr0Ol.png");
ModPE.overrideTexture("images/mob/lightgray.png", "http://i.imgur.com/448b8QN.png");
ModPE.overrideTexture("images/mob/cyan.png", "http://i.imgur.com/yb9eOy7.png");
ModPE.overrideTexture("images/mob/purple.png", "http://i.imgur.com/ytbBxTn.png");
ModPE.overrideTexture("images/mob/blue.png", "http://i.imgur.com/ks9GRBp.png");
ModPE.overrideTexture("images/mob/brown.png", "http://i.imgur.com/eFdiDWr.png");
ModPE.overrideTexture("images/mob/green.png", "http://i.imgur.com/s4W0IuF.png");
ModPE.overrideTexture("images/mob/red.png", "http://i.imgur.com/lqQJYW3.png");
ModPE.overrideTexture("images/mob/black.png", "http://i.imgur.com/j2y5JxL.png");

function dip2px(dips) {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

var metrics = new android.util.DisplayMetrics();
ctx.getWindowManager().getDefaultDisplay().getMetrics(metrics);
var displayHeight = metrics.heightPixels;
var displayWidth = metrics.widthPixels;
var deviceDensity = metrics.density;

var headerGUI = null;

function header(str) {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var layout = new android.widget.LinearLayout(ctx);
                layout.setOrientation(1);

                var spritesheet = android.graphics.Bitmap.createScaledBitmap(android.graphics.Bitmap.createBitmap(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/touchgui.png")), 153, 27, 8, 24), 256, 256, false);

                var button = new android.widget.Button(ctx);

                button.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(spritesheet));

                button.setText(str);
                MinecraftButtonLibrary.addMinecraftStyleToTextView(button);
                button.setTextSize(16);
                button.setTextColor(android.graphics.Color.parseColor("#F5F5F5"));
                if(android.os.Build.VERSION.SDK_INT > 19) { // KITKAT
					button.setShadowLayer(1, Math.round(button.getLineHeight() / 8), Math.round(button.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
				} else {
					button.setShadowLayer(0.0001, Math.round(button.getLineHeight() / 8), Math.round(button.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
				}

                layout.addView(button);

                headerGUI = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);

                //Making it look lile an MCPE header, to the exact pixel, on every device!

                var dY = displayHeight / 104;

                //Put +84 after displayWidth, if it isn't fitting the whole screen. It works everytime. :)
                headerGUI.setHeight(displayHeight / dY);
                headerGUI.setWidth(displayWidth);

                headerGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP | android.view.Gravity.CENTER, 0, 0);
            } catch(err) {
                print('An error occured: ' + err);
            }
        }
    }));
}

function showMainButton() {
ctx.runOnUiThread(new java.lang.Runnable() {


            run: function () {

                try {



                    // BUTTON
                    var squareButtonWidth = 48; // in dp
                    var squareButton = new android.widget.Button(ctx); // (textSize, enableSound); Set textSize to null for default text size. Set enableSound to false for no click sound
                    squareButton.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function (p1) {
							popupInfo.dismiss();
							mainMenu();
							header("Main Menu");

                            /*var builder = new android.app.AlertDialog.Builder(ctx);
                            builder.setTitle("Info");
                            builder.setMessage("You're using a beta build of AgameR Paint Mod PE. Please report bugs.");
                            builder.setNegativeButton("Ok", new android.content.DialogInterface.OnClickListener() {

                                onClick: function (p1, p2) {

                                    p1.cancel();


                                }

                            });
                            builder.setPositiveButton("Report bugs", new android.content.DialogInterface.OnClickListener() {

                                onClick: function (p1, p2) {

                                    p1.cancel();
                                    Web("http://twitter.com/AgameR_Modder");


                                }

                            });

                            var dialog = builder.create();
                            dialog.show();*/

                        }
                    });
                    squareButton.setText("[?]");
					
					var bluePaintbrushIcon = new android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createScaledBitmap(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/items-opaque/blue_paintbrush_0.png")), dip2px(64), dip2px(64), false));
                    squareButton.setBackgroundDrawable(bluePaintbrushIcon);
                    squareButton.setLayoutParams(new android.view.ViewGroup.LayoutParams(convertDpToPixel(squareButtonWidth), convertDpToPixel(squareButtonWidth)));

                    // POPUP FOR THE SECOND BUTTON
                    popupInfo = new android.widget.PopupWindow(squareButton, convertDpToPixel(squareButtonWidth), convertDpToPixel(squareButtonWidth));
                    popupInfo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                    popupInfo.showAtLocation(currentActivity.getWindow()
                        .getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.BOTTOM, 0, 0);
                } catch (err) {
                    clientMessage("Error: " + err);
                }
            }
});

}

var settingsPath = android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/minecraftpe/mods/";

PaintModPE.saveMainSettings = function() {
    java.io.File(settingsPath).mkdirs();
    var newFile = new java.io.File(settingsPath, "paintmodpe.txt");
    newFile.createNewFile();
    var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
    outWrite.append(paintAnyBlockSetting.toString());
    //outWrite.append("," + crossButtonPosition.toString()); //We need to separate all variables. We split them with ","

    outWrite.close();
}

PaintModPE.loadMainSettings = function() {
    if(!java.io.File(settingsPath + "paintmodpe.txt").exists())
        return;
    var file = new java.io.File(settingsPath + "paintmodpe.txt");
    var fos = new java.io.FileInputStream(file);
    var str = new java.lang.StringBuilder();
    var ch;
    while((ch = fos.read()) != -1)
        str.append(java.lang.Character(ch));
	if(str.toString().split(",")[0] != null && str.toString().split(",")[0] != undefined) {
    paintAnyBlockSetting = str.toString().split(",")[0]; //Here we split text by ","
	}
    fos.close();
}

PaintModPE.installedExtensions = [];

PaintModPE.getInstalledExtensions = function() {
	var scripts = net.zhuoweizhang.mcpelauncher.ScriptManager.scripts;
    for(var i = 0; i < scripts.size(); i++) {
        var script = scripts.get(i);
        var scope = script.scope;
        if(org.mozilla.javascript.ScriptableObject.hasProperty(scope, "PaintModPE_Library")) {
			PaintModPE.installedExtensions.push(script.name);
		}
	}
};

PaintModPE.loadMainSettings();
showMainButton();

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
    name.setTextSize(26);
    MinecraftButtonLibrary.addMinecraftStyleToTextView(name);
    name.setText("\nAgameR Paint Mod PE\n");//Title
    name.setTextColor(android.graphics.Color.GREEN); //Color
    name.setGravity(android.view.Gravity.CENTER);
  
    menuLayout.addView(name);
    //--------Add Buttons-------//
    var button = MinecraftButton();
    button.setText("Settings");
    button.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
    menu.dismiss(); //Close
    headerGUI.dismiss(); //Close
	settingsMenu();
	header("Settings");
    }
    }));
    menuLayout.addView(button);
     
    var button1 = MinecraftButton();
    button1.setText("Extensions");
    button1.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
    menu.dismiss(); //Close
    headerGUI.dismiss(); //Close
	extensionsMenu();
	header("Extensions");
    }
    }));
    menuLayout.addView(button1);
     
    var button2 = MinecraftButton();
    button2.setText("About");
    button2.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
    menu.dismiss(); //Close
    headerGUI.dismiss(); //Close
	aboutMenu();
	header("About");
    }
    }));
    menuLayout.addView(button2);
	
	var newLine = new android.widget.TextView(ctx);
	newLine.setText("\n\n");
	menuLayout.addView(newLine);
	
	var exitButton = MinecraftButton();
    exitButton.setText("Exit");
    exitButton.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
    menu.dismiss(); //Close
    headerGUI.dismiss(); //Close
	showMainButton();
    }
    }));
    menuLayout.addView(exitButton);
	
	var dirt = new android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createScaledBitmap(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/background.png")), dip2px(64), dip2px(64), false));
	dirt.setColorFilter(android.graphics.Color.rgb(70, 70, 70), android.graphics.PorterDuff.Mode.MULTIPLY);
	dirt.setTileModeXY(android.graphics.Shader.TileMode.REPEAT, android.graphics.Shader.TileMode.REPEAT);
	
	var headerHeight = displayHeight / (displayHeight / 104);
     
    //More buttons...
    menu = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight() - headerHeight);
    menu.setBackgroundDrawable(dirt);
    menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.BOTTOM, 0, 0);
    }catch(error){
    print('An error occured: ' + error);
    }
    }}));
    }
	
function settingsMenu(){
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
    name.setTextSize(26);
    MinecraftButtonLibrary.addMinecraftStyleToTextView(name);
    name.setText("\nAgameR Paint Mod PE\n");//Title
    name.setTextColor(android.graphics.Color.GREEN); //Color
    name.setGravity(android.view.Gravity.CENTER);
  
    menuLayout.addView(name);
    //--------Add Buttons-------//
    var paintAnyBlockButton = new android.widget.Switch(ctx);
	MinecraftButtonLibrary.addMinecraftStyleToTextView(paintAnyBlockButton);
	paintAnyBlockButton.setText("Paint any block (some blocks won't keep their texture)");
	if(paintAnyBlockSetting == "off") {
		paintAnyBlockButton.setChecked(false);
	}if(paintAnyBlockSetting == "on") {
		paintAnyBlockButton.setChecked(true);
	}
	paintAnyBlockButton.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
		onCheckedChanged: function(){
			if(paintAnyBlockSetting == "off"){
				paintAnyBlockSetting = "on";
				paintAnyBlockButton.setChecked(true);
				PaintModPE.saveMainSettings();
			}else if(paintAnyBlockSetting == "on"){
				paintAnyBlockSetting = "off";
				paintAnyBlockButton.setChecked(false);
				PaintModPE.saveMainSettings();
			}
		}
	}));
    menuLayout.addView(paintAnyBlockButton);
	
	var newLine = new android.widget.TextView(ctx);
	newLine.setText("\n\n");
	menuLayout.addView(newLine);
	
	var backButton = MinecraftButton();
    backButton.setText("Back");
    backButton.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
    menu.dismiss(); //Close
    headerGUI.dismiss(); //Close
	mainMenu();
	header("Main Menu");
    }
    }));
    menuLayout.addView(backButton);
	
	var exitButton = MinecraftButton();
    exitButton.setText("Exit");
    exitButton.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
    menu.dismiss(); //Close
    headerGUI.dismiss(); //Close
	showMainButton();
    }
    }));
    menuLayout.addView(exitButton);
	
	var dirt = new android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createScaledBitmap(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/background.png")), dip2px(64), dip2px(64), false));
	dirt.setColorFilter(android.graphics.Color.rgb(70, 70, 70), android.graphics.PorterDuff.Mode.MULTIPLY);
	dirt.setTileModeXY(android.graphics.Shader.TileMode.REPEAT, android.graphics.Shader.TileMode.REPEAT);
	
	var headerHeight = displayHeight / (displayHeight / 104);
     
    //More buttons...
    menu = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight() - headerHeight);
    menu.setBackgroundDrawable(dirt);
    menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.BOTTOM, 0, 0);
    }catch(error){
    print('An error occured: ' + error);
    }
    }}));
    }
	
function extensionsMenu(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
    try{
	PaintModPE.getInstalledExtensions();
    var menuLayout = new android.widget.LinearLayout(ctx);
    var menuScroll = new android.widget.ScrollView(ctx);
    var menuLayout1 = new android.widget.LinearLayout(ctx);
    menuLayout.setOrientation(1);
    menuLayout1.setOrientation(1);
    menuScroll.addView(menuLayout);
    menuLayout1.addView(menuScroll);
    //--------Add Title--------//
    var name = new android.widget.TextView(ctx);
    name.setTextSize(26);
    MinecraftButtonLibrary.addMinecraftStyleToTextView(name);
    name.setText("\nAgameR Paint Mod PE\n");//Title
    name.setTextColor(android.graphics.Color.GREEN); //Color
    name.setGravity(android.view.Gravity.CENTER);
  
    menuLayout.addView(name);
    //--------Add Buttons-------//
	var extensionsTextView = new android.widget.TextView(ctx);
	MinecraftButtonLibrary.addMinecraftStyleToTextView(extensionsTextView);
	extensionsTextView.setText("Installed extensions:");
	extensionsTextView.setGravity(android.view.Gravity.CENTER);
	menuLayout.addView(extensionsTextView);
	
	if(PaintModPE.installedExtensions[0] != undefined && PaintModPE.installedExtensions[0] != null) {
		var extension1TextView = new android.widget.TextView(ctx);
		MinecraftButtonLibrary.addMinecraftStyleToTextView(extension1TextView);
		extension1TextView.setText("1. " + PaintModPE.installedExtensions[0]);
		extension1TextView.setGravity(android.view.Gravity.CENTER);
		menuLayout.addView(extension1TextView);
	}
	
	if(PaintModPE.installedExtensions[1] != undefined && PaintModPE.installedExtensions[1] != null) {
		var extension2TextView = new android.widget.TextView(ctx);
		MinecraftButtonLibrary.addMinecraftStyleToTextView(extension2TextView);
		extension2TextView.setText("2. " + PaintModPE.installedExtensions[1]);
		extension2TextView.setGravity(android.view.Gravity.CENTER);
		menuLayout.addView(extension2TextView);
	}
	
	if(PaintModPE.installedExtensions[2] != undefined && PaintModPE.installedExtensions[2] != null) {
		var extension3TextView = new android.widget.TextView(ctx);
		MinecraftButtonLibrary.addMinecraftStyleToTextView(extension3TextView);
		extension3TextView.setText("3. " + PaintModPE.installedExtensions[2]);
		extension3TextView.setGravity(android.view.Gravity.CENTER);
		menuLayout.addView(extension3TextView);
	}
	
	if(PaintModPE.installedExtensions[3] != undefined && PaintModPE.installedExtensions[3] != null) {
		var extension4TextView = new android.widget.TextView(ctx);
		MinecraftButtonLibrary.addMinecraftStyleToTextView(extension4TextView);
		extension4TextView.setText("4. " + PaintModPE.installedExtensions[3]);
		extension4TextView.setGravity(android.view.Gravity.CENTER);
		menuLayout.addView(extension4TextView);
	}
	
	if(PaintModPE.installedExtensions[4] != undefined && PaintModPE.installedExtensions[4] != null) {
		var extension5TextView = new android.widget.TextView(ctx);
		MinecraftButtonLibrary.addMinecraftStyleToTextView(extension5TextView);
		extension5TextView.setText("5. " + PaintModPE.installedExtensions[4]);
		extension5TextView.setGravity(android.view.Gravity.CENTER);
		menuLayout.addView(extension5TextView);
	}
	
	var newLine = new android.widget.TextView(ctx);
	newLine.setText("\n\n");
	menuLayout.addView(newLine);
	
	var backButton = MinecraftButton();
    backButton.setText("Back");
    backButton.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
	PaintModPE.installedExtensions = [];
    menu.dismiss(); //Close
    headerGUI.dismiss(); //Close
	mainMenu();
	header("Main Menu");
    }
    }));
    menuLayout.addView(backButton);
	
	var exitButton = MinecraftButton();
    exitButton.setText("Exit");
    exitButton.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
	PaintModPE.installedExtensions = [];
    menu.dismiss(); //Close
    headerGUI.dismiss(); //Close
	showMainButton();
    }
    }));
    menuLayout.addView(exitButton);
	
	var dirt = new android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createScaledBitmap(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/background.png")), dip2px(64), dip2px(64), false));
	dirt.setColorFilter(android.graphics.Color.rgb(70, 70, 70), android.graphics.PorterDuff.Mode.MULTIPLY);
	dirt.setTileModeXY(android.graphics.Shader.TileMode.REPEAT, android.graphics.Shader.TileMode.REPEAT);
	
	var headerHeight = displayHeight / (displayHeight / 104);
     
    //More buttons...
    menu = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight() - headerHeight);
    menu.setBackgroundDrawable(dirt);
    menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.BOTTOM, 0, 0);
    }catch(error){
    print('An error occured: ' + error);
    }
    }}));
    }
	
function aboutMenu(){
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
    name.setTextSize(26);
    MinecraftButtonLibrary.addMinecraftStyleToTextView(name);
    name.setText("\nAgameR Paint Mod PE\n");//Title
    name.setTextColor(android.graphics.Color.GREEN); //Color
    name.setGravity(android.view.Gravity.CENTER);
  
    menuLayout.addView(name);
    //--------Add Buttons-------//
	var versionTextView = new android.widget.TextView(ctx);
	MinecraftButtonLibrary.addMinecraftStyleToTextView(versionTextView);
	versionTextView.setText("v" + CURRENT_VERSION);
	versionTextView.setGravity(android.view.Gravity.CENTER);
	menuLayout.addView(versionTextView);
	
	var authorTextView = new android.widget.TextView(ctx);
	MinecraftButtonLibrary.addMinecraftStyleToTextView(authorTextView);
	authorTextView.setText("Developed by " + MOD_AUTHOR);
	authorTextView.setGravity(android.view.Gravity.CENTER);
	menuLayout.addView(authorTextView);
	
	var newLine = new android.widget.TextView(ctx);
	newLine.setText("\n\n");
	menuLayout.addView(newLine);
	
	var backButton = MinecraftButton();
    backButton.setText("Back");
    backButton.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
    menu.dismiss(); //Close
    headerGUI.dismiss(); //Close
	mainMenu();
	header("Main Menu");
    }
    }));
    menuLayout.addView(backButton);
	
	var exitButton = MinecraftButton();
    exitButton.setText("Exit");
    exitButton.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
    menu.dismiss(); //Close
    headerGUI.dismiss(); //Close
	showMainButton();
    }
    }));
    menuLayout.addView(exitButton);
	
	var dirt = new android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createScaledBitmap(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/background.png")), dip2px(64), dip2px(64), false));
	dirt.setColorFilter(android.graphics.Color.rgb(70, 70, 70), android.graphics.PorterDuff.Mode.MULTIPLY);
	dirt.setTileModeXY(android.graphics.Shader.TileMode.REPEAT, android.graphics.Shader.TileMode.REPEAT);
	
	var headerHeight = displayHeight / (displayHeight / 104);
     
    //More buttons...
    menu = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight() - headerHeight);
    menu.setBackgroundDrawable(dirt);
    menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.BOTTOM, 0, 0);
    }catch(error){
    print('An error occured: ' + error);
    }
    }}));
    }

// The following code is copyright of Desno365, licensed under the Creative Commons Attribution-NonCommercial 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/4.0/

function convertDpToPixel(dp)
{
	//
	return Math.round(dp * deviceDensity);
}

function defaultSubTitle(subtitle) // TextView with Minecraft background
{
	var padding = convertDpToPixel(8);

	var bg = android.graphics.drawable.GradientDrawable();
	bg.setColor(android.graphics.Color.parseColor("#FF736A6F"));
	bg.setShape(android.graphics.drawable.GradientDrawable.RECTANGLE);
	bg.setStroke(convertDpToPixel(2), android.graphics.Color.parseColor("#FF93898B"));

	var title = new android.widget.TextView(ctx);
	MinecraftButtonLibrary.addMinecraftStyleToTextView(title);
	title.setText(subtitle);
	title.setTextColor(android.graphics.Color.WHITE);
	title.setBackgroundDrawable(bg);
	title.setPadding(padding, padding, padding, padding);

	return title;
}

function warningSubTitle(subtitle) // TextView with Minecraft background (edited by peacestorm)
{
	var padding = convertDpToPixel(8);

	var bg = android.graphics.drawable.GradientDrawable();
	bg.setColor(android.graphics.Color.parseColor("#FF6200"));
	bg.setShape(android.graphics.drawable.GradientDrawable.RECTANGLE);
	bg.setStroke(convertDpToPixel(2), android.graphics.Color.parseColor("#FF8800"));

	var title = new android.widget.TextView(ctx);
	MinecraftButtonLibrary.addMinecraftStyleToTextView(title);
	title.setText(subtitle);
	title.setTextColor(android.graphics.Color.WHITE);
	title.setBackgroundDrawable(bg);
	title.setPadding(padding, padding, padding, padding);

	return title;
}

function normalSubTitle(subtitle) // TextView with Minecraft background (edited by peacestorm)
{
	var padding = convertDpToPixel(8);

	var bg = android.graphics.drawable.GradientDrawable();
	bg.setColor(android.graphics.Color.parseColor("#216904"));
	bg.setShape(android.graphics.drawable.GradientDrawable.RECTANGLE);
	bg.setStroke(convertDpToPixel(2), android.graphics.Color.parseColor("#3EC20A"));

	var title = new android.widget.TextView(ctx);
	MinecraftButtonLibrary.addMinecraftStyleToTextView(title);
	title.setText(subtitle);
	title.setTextColor(android.graphics.Color.WHITE);
	title.setBackgroundDrawable(bg);
	title.setPadding(padding, padding, padding, padding);

	return title;
}

//End of Desno365's code

PaintModPE.paintExplosion = function(x, y, z, paintColor) {
	Level.explode(x, y, z, 0);
			if(getTile(x, y, z) != 0) {
            PaintModPE.paintBlock(x, y, z, paintColor, getTile(x, y, z), true, false);
			}
			if(getTile(x-1, y, z) != 0) {
			PaintModPE.paintBlock(x-1, y, z, paintColor, getTile(x-1, y, z), true, false);
			}
			if(getTile(x-2, y, z) != 0) {
			PaintModPE.paintBlock(x-2, y, z, paintColor, getTile(x-2, y, z), true, false);
			}
			if(getTile(x+1, y, z) != 0) {
			PaintModPE.paintBlock(x+1, y, z, paintColor, getTile(x+1, y, z), true, false);
			}
			if(getTile(x+2, y, z) != 0) {
			PaintModPE.paintBlock(x+2, y, z, paintColor, getTile(x+2, y, z), true, false);
			}
			if(getTile(x+1, y, z+1) != 0) {
			PaintModPE.paintBlock(x+1, y, z+1, paintColor, getTile(x+1, y, z+1), true, false);
			}
			if(getTile(x+2, y, z+2) != 0) {
			PaintModPE.paintBlock(x+2, y, z+2, paintColor, getTile(x+2, y, z+2), true, false);
			}
			if(getTile(x+1, y, z+2) != 0) {
			PaintModPE.paintBlock(x+1, y, z+2, paintColor, getTile(x+1, y, z+2), true, false);
			}
			if(getTile(x+2, y, z+1) != 0) {
			PaintModPE.paintBlock(x+2, y, z+1, paintColor, getTile(x+2, y, z+1), true, false);
			}
			if(getTile(x-1, y, z-1) != 0) {
			PaintModPE.paintBlock(x-1, y, z-1, paintColor, getTile(x-1, y, z-1), true, false);
			}
			if(getTile(x-2, y, z-2) != 0) {
			PaintModPE.paintBlock(x-2, y, z-2, paintColor, getTile(x-2, y, z-2), true, false);
			}
			if(getTile(x-1, y, z-2) != 0) {
			PaintModPE.paintBlock(x-1, y, z-2, paintColor, getTile(x-1, y, z-2), true, false);
			}
			if(getTile(x-2, y, z-1) != 0) {
			PaintModPE.paintBlock(x-2, y, z-1, paintColor, getTile(x-2, y, z-1), true, false);
			}
			if(getTile(x+1, y, z-1) != 0) {
			PaintModPE.paintBlock(x+1, y, z-1, paintColor, getTile(x+1, y, z-1), true, false);
			}
			if(getTile(x+2, y, z-1) != 0) {
			PaintModPE.paintBlock(x+2, y, z-1, paintColor, getTile(x+2, y, z-1), true, false);
			}
			if(getTile(x+1, y, z-2) != 0) {
			PaintModPE.paintBlock(x+1, y, z-2, paintColor, getTile(x+1, y, z-2), true, false);
			}
			if(getTile(x+2, y, z-2) != 0) {
			PaintModPE.paintBlock(x+2, y, z-2, paintColor, getTile(x+2, y, z-2), true, false);
			}
			if(getTile(x-1, y, z+1) != 0) {
			PaintModPE.paintBlock(x-1, y, z+1, paintColor, getTile(x-1, y, z+1), true, false);
			}
			if(getTile(x-1, y, z+2) != 0) {
			PaintModPE.paintBlock(x-1, y, z+2, paintColor, getTile(x-1, y, z+2), true, false);
			}
			if(getTile(x-2, y, z+1) != 0) {
			PaintModPE.paintBlock(x-2, y, z+1, paintColor, getTile(x-2, y, z+1), true, false);
			}
			if(getTile(x-2, y, z+2) != 0) {
			PaintModPE.paintBlock(x-2, y, z+2, paintColor, getTile(x-2, y, z+2), true, false);
			}
			if(getTile(x, y, z-1) != 0) {
			PaintModPE.paintBlock(x, y, z-1, paintColor, getTile(x, y, z-1), true, false);
			}
			if(getTile(x, y, z-2) != 0) {
			PaintModPE.paintBlock(x, y, z-2, paintColor, getTile(x, y, z-2), true, false);
			}
			if(getTile(x, y, z+1) != 0) {
			PaintModPE.paintBlock(x, y, z+1, paintColor, getTile(x, y, z+1), true, false);
			}
			if(getTile(x, y, z+2) != 0) {
			PaintModPE.paintBlock(x, y, z+2, paintColor, getTile(x, y, z+2), true, false);
			}
}

PaintModPE.paintBlock = function (x, y, z, paintColor, b, paintAnyBlock, showTipMessage) {
    switch (paintColor) {
    case "White":
        {
            if (b == 35) {
                Level.setTile(x, y, z, 35, 0);
            } else if (b == 159) {
                Level.setTile(x, y, z, 159, 0);
            } else if (b == 171) {
                Level.setTile(x, y, z, 171, 0);
            } else if (b == 5 || b == 176 || b == 177 || b == 178 || b == 179 || b == 180 || b == 181 || b == 182 || b == 193 || b == 194 || b == 195 || b == 196 || b == 197 || b == 198 || b == 199 || b == 200) {
                Level.setTile(x, y, z, 5, 0);
            } else if (b == 20 || b == 201 || b == 202 || b == 203 || b == 204 || b == 205 || b == 206 || b == 207 || b == 208 || b == 209 || b == 210 || b == 211 || b == 212 || b == 213 || b == 214 || b == 215) {
                Level.setTile(x, y, z, 20, 0);
            } else if (b == 19 || b == 216 || b == 217 || b == 218 || b == 219 || b == 220 || b == 221 || b == 222 || b == 223 || b == 224 || b == 225 || b == 226 || b == 227 || b == 228 || b == 229 || b == 230) {
                Level.setTile(x, y, z, 19, 0);
            } else if (b == 18 || b == 161 || b == 231 || b == 232 || b == 233 || b == 234 || b == 235 || b == 236 || b == 237 || b == 238 || b == 239 || b == 240 || b == 241 || b == 242 || b == 244 || b == 250 || b == 251) {
                Level.setTile(x, y, z, 18, 0);
            } else {
				if(paintAnyBlock == false || paintAnyBlock == "off") {
					if(showTipMessage == true) {
						ModPE.showTipMessage("This block can't be painted!");
					}
				}else{
					Level.setTile(x, y, z, 159, 0);
				}
            }
            break;
        }
    case "Orange":
        {
            if (b == 35) {
                Level.setTile(x, y, z, 35, 1);
            } else if (b == 159) {
                Level.setTile(x, y, z, 159, 1);
            } else if (b == 171) {
                Level.setTile(x, y, z, 171, 1);
            } else if (b == 5 || b == 176 || b == 177 || b == 178 || b == 179 || b == 180 || b == 181 || b == 182 || b == 193 || b == 194 || b == 195 || b == 196 || b == 197 || b == 198 || b == 199 || b == 200) {
                Level.setTile(x, y, z, 176, 0);
            } else if (b == 20 || b == 201 || b == 202 || b == 203 || b == 204 || b == 205 || b == 206 || b == 207 || b == 208 || b == 209 || b == 210 || b == 211 || b == 212 || b == 213 || b == 214 || b == 215) {
                Level.setTile(x, y, z, 201, 0);
            } else if (b == 19 || b == 216 || b == 217 || b == 218 || b == 219 || b == 220 || b == 221 || b == 222 || b == 223 || b == 224 || b == 225 || b == 226 || b == 227 || b == 228 || b == 229 || b == 230) {
                Level.setTile(x, y, z, 216, 0);
            } else if (b == 18 || b == 161 || b == 231 || b == 232 || b == 233 || b == 234 || b == 235 || b == 236 || b == 237 || b == 238 || b == 239 || b == 240 || b == 241 || b == 242 || b == 244 || b == 250 || b == 251) {
                Level.setTile(x, y, z, 231, 0);
            } else {
                if(paintAnyBlock == false || paintAnyBlock == "off") {
					if(showTipMessage == true) {
						ModPE.showTipMessage("This block can't be painted!");
					}
				}else{
					Level.setTile(x, y, z, 159, 1);
				}
            }
            break;
        }
    case "Magenta":
        {
            if (b == 35) {
                Level.setTile(x, y, z, 35, 2);
            } else if (b == 159) {
                Level.setTile(x, y, z, 159, 2);
            } else if (b == 171) {
                Level.setTile(x, y, z, 171, 2);
            } else if (b == 5 || b == 176 || b == 177 || b == 178 || b == 179 || b == 180 || b == 181 || b == 182 || b == 193 || b == 194 || b == 195 || b == 196 || b == 197 || b == 198 || b == 199 || b == 200) {
                Level.setTile(x, y, z, 177, 0);
            } else if (b == 20 || b == 201 || b == 202 || b == 203 || b == 204 || b == 205 || b == 206 || b == 207 || b == 208 || b == 209 || b == 210 || b == 211 || b == 212 || b == 213 || b == 214 || b == 215) {
                Level.setTile(x, y, z, 202, 0);
            } else if (b == 19 || b == 216 || b == 217 || b == 218 || b == 219 || b == 220 || b == 221 || b == 222 || b == 223 || b == 224 || b == 225 || b == 226 || b == 227 || b == 228 || b == 229 || b == 230) {
                Level.setTile(x, y, z, 217, 0);
            } else if (b == 18 || b == 161 || b == 231 || b == 232 || b == 233 || b == 234 || b == 235 || b == 236 || b == 237 || b == 238 || b == 239 || b == 240 || b == 241 || b == 242 || b == 244 || b == 250 || b == 251) {
                Level.setTile(x, y, z, 232, 0);
            } else {
                if(paintAnyBlock == false || paintAnyBlock == "off") {
					if(showTipMessage == true) {
						ModPE.showTipMessage("This block can't be painted!");
					}
				}else{
					Level.setTile(x, y, z, 159, 2);
				}
            }
            break;
        }
    case "Light Blue":
        {
            if (b == 35) {
                Level.setTile(x, y, z, 35, 3);
            } else if (b == 159) {
                Level.setTile(x, y, z, 159, 3);
            } else if (b == 171) {
                Level.setTile(x, y, z, 171, 3);
            } else if (b == 5 || b == 176 || b == 177 || b == 178 || b == 179 || b == 180 || b == 181 || b == 182 || b == 193 || b == 194 || b == 195 || b == 196 || b == 197 || b == 198 || b == 199 || b == 200) {
                Level.setTile(x, y, z, 178, 0);
            } else if (b == 20 || b == 201 || b == 202 || b == 203 || b == 204 || b == 205 || b == 206 || b == 207 || b == 208 || b == 209 || b == 210 || b == 211 || b == 212 || b == 213 || b == 214 || b == 215) {
                Level.setTile(x, y, z, 203, 0);
            } else if (b == 19 || b == 216 || b == 217 || b == 218 || b == 219 || b == 220 || b == 221 || b == 222 || b == 223 || b == 224 || b == 225 || b == 226 || b == 227 || b == 228 || b == 229 || b == 230) {
                Level.setTile(x, y, z, 218, 0);
            } else if (b == 18 || b == 161 || b == 231 || b == 232 || b == 233 || b == 234 || b == 235 || b == 236 || b == 237 || b == 238 || b == 239 || b == 240 || b == 241 || b == 242 || b == 244 || b == 250 || b == 251) {
                Level.setTile(x, y, z, 233, 0);
            } else {
                if(paintAnyBlock == false || paintAnyBlock == "off") {
					if(showTipMessage == true) {
						ModPE.showTipMessage("This block can't be painted!");
					}
				}else{
					Level.setTile(x, y, z, 159, 3);
				}
            }
            break;
        }
    case "Yellow":
        {
            if (b == 35) {
                Level.setTile(x, y, z, 35, 4);
            } else if (b == 159) {
                Level.setTile(x, y, z, 159, 4);
            } else if (b == 171) {
                Level.setTile(x, y, z, 171, 4);
            } else if (b == 5 || b == 176 || b == 177 || b == 178 || b == 179 || b == 180 || b == 181 || b == 182 || b == 193 || b == 194 || b == 195 || b == 196 || b == 197 || b == 198 || b == 199 || b == 200) {
                Level.setTile(x, y, z, 179, 0);
            } else if (b == 20 || b == 201 || b == 202 || b == 203 || b == 204 || b == 205 || b == 206 || b == 207 || b == 208 || b == 209 || b == 210 || b == 211 || b == 212 || b == 213 || b == 214 || b == 215) {
                Level.setTile(x, y, z, 204, 0);
            } else if (b == 19 || b == 216 || b == 217 || b == 218 || b == 219 || b == 220 || b == 221 || b == 222 || b == 223 || b == 224 || b == 225 || b == 226 || b == 227 || b == 228 || b == 229 || b == 230) {
                Level.setTile(x, y, z, 219, 0);
            } else if (b == 18 || b == 161 || b == 231 || b == 232 || b == 233 || b == 234 || b == 235 || b == 236 || b == 237 || b == 238 || b == 239 || b == 240 || b == 241 || b == 242 || b == 244 || b == 250 || b == 251) {
                Level.setTile(x, y, z, 234, 0);
            } else {
                if(paintAnyBlock == false || paintAnyBlock == "off") {
					if(showTipMessage == true) {
						ModPE.showTipMessage("This block can't be painted!");
					}
				}else{
					Level.setTile(x, y, z, 159, 4);
				}
            }
            break;
        }
    case "Lime Green":
        {
            if (b == 35) {
                Level.setTile(x, y, z, 35, 5);
            } else if (b == 159) {
                Level.setTile(x, y, z, 159, 5);
            } else if (b == 171) {
                Level.setTile(x, y, z, 171, 5);
            } else if (b == 5 || b == 176 || b == 177 || b == 178 || b == 179 || b == 180 || b == 181 || b == 182 || b == 193 || b == 194 || b == 195 || b == 196 || b == 197 || b == 198 || b == 199 || b == 200) {
                Level.setTile(x, y, z, 180, 0);
            } else if (b == 20 || b == 201 || b == 202 || b == 203 || b == 204 || b == 205 || b == 206 || b == 207 || b == 208 || b == 209 || b == 210 || b == 211 || b == 212 || b == 213 || b == 214 || b == 215) {
                Level.setTile(x, y, z, 205, 0);
            } else if (b == 19 || b == 216 || b == 217 || b == 218 || b == 219 || b == 220 || b == 221 || b == 222 || b == 223 || b == 224 || b == 225 || b == 226 || b == 227 || b == 228 || b == 229 || b == 230) {
                Level.setTile(x, y, z, 220, 0);
            } else if (b == 18 || b == 161 || b == 231 || b == 232 || b == 233 || b == 234 || b == 235 || b == 236 || b == 237 || b == 238 || b == 239 || b == 240 || b == 241 || b == 242 || b == 244 || b == 250 || b == 251) {
                Level.setTile(x, y, z, 235, 0);
            } else {
                if(paintAnyBlock == false || paintAnyBlock == "off") {
					if(showTipMessage == true) {
						ModPE.showTipMessage("This block can't be painted!");
					}
				}else{
					Level.setTile(x, y, z, 159, 5);
				}
            }
            break;
        }
    case "Pink":
        {
            if (b == 35) {
                Level.setTile(x, y, z, 35, 6);
            } else if (b == 159) {
                Level.setTile(x, y, z, 159, 6);
            } else if (b == 171) {
                Level.setTile(x, y, z, 171, 6);
            } else if (b == 5 || b == 176 || b == 177 || b == 178 || b == 179 || b == 180 || b == 181 || b == 182 || b == 193 || b == 194 || b == 195 || b == 196 || b == 197 || b == 198 || b == 199 || b == 200) {
                Level.setTile(x, y, z, 181, 0);
            } else if (b == 20 || b == 201 || b == 202 || b == 203 || b == 204 || b == 205 || b == 206 || b == 207 || b == 208 || b == 209 || b == 210 || b == 211 || b == 212 || b == 213 || b == 214 || b == 215) {
                Level.setTile(x, y, z, 206, 0);
            } else if (b == 19 || b == 216 || b == 217 || b == 218 || b == 219 || b == 220 || b == 221 || b == 222 || b == 223 || b == 224 || b == 225 || b == 226 || b == 227 || b == 228 || b == 229 || b == 230) {
                Level.setTile(x, y, z, 221, 0);
            } else if (b == 18 || b == 161 || b == 231 || b == 232 || b == 233 || b == 234 || b == 235 || b == 236 || b == 237 || b == 238 || b == 239 || b == 240 || b == 241 || b == 242 || b == 244 || b == 250 || b == 251) {
                Level.setTile(x, y, z, 236, 0);
            } else {
                if(paintAnyBlock == false || paintAnyBlock == "off") {
					if(showTipMessage == true) {
						ModPE.showTipMessage("This block can't be painted!");
					}
				}else{
					Level.setTile(x, y, z, 159, 6);
				}
            }
            break;
        }
    case "Gray":
        {
            if (b == 35) {
                Level.setTile(x, y, z, 35, 7);
            } else if (b == 159) {
                Level.setTile(x, y, z, 159, 7);
            } else if (b == 171) {
                Level.setTile(x, y, z, 171, 7);
            } else if (b == 5 || b == 176 || b == 177 || b == 178 || b == 179 || b == 180 || b == 181 || b == 182 || b == 193 || b == 194 || b == 195 || b == 196 || b == 197 || b == 198 || b == 199 || b == 200) {
                Level.setTile(x, y, z, 182, 0);
            } else if (b == 20 || b == 201 || b == 202 || b == 203 || b == 204 || b == 205 || b == 206 || b == 207 || b == 208 || b == 209 || b == 210 || b == 211 || b == 212 || b == 213 || b == 214 || b == 215) {
                Level.setTile(x, y, z, 207, 0);
            } else if (b == 19 || b == 216 || b == 217 || b == 218 || b == 219 || b == 220 || b == 221 || b == 222 || b == 223 || b == 224 || b == 225 || b == 226 || b == 227 || b == 228 || b == 229 || b == 230) {
                Level.setTile(x, y, z, 222, 0);
            } else if (b == 18 || b == 161 || b == 231 || b == 232 || b == 233 || b == 234 || b == 235 || b == 236 || b == 237 || b == 238 || b == 239 || b == 240 || b == 241 || b == 242 || b == 244 || b == 250 || b == 251) {
                Level.setTile(x, y, z, 237, 0);
            } else {
                if(paintAnyBlock == false || paintAnyBlock == "off") {
					if(showTipMessage == true) {
						ModPE.showTipMessage("This block can't be painted!");
					}
				}else{
					Level.setTile(x, y, z, 159, 7);
				}
            }
            break;
        }
    case "Light Gray":
        {
            if (b == 35) {
                Level.setTile(x, y, z, 35, 8);
            } else if (b == 159) {
                Level.setTile(x, y, z, 159, 8);
            } else if (b == 171) {
                Level.setTile(x, y, z, 171, 8);
            } else if (b == 5 || b == 176 || b == 177 || b == 178 || b == 179 || b == 180 || b == 181 || b == 182 || b == 193 || b == 194 || b == 195 || b == 196 || b == 197 || b == 198 || b == 199 || b == 200) {
                Level.setTile(x, y, z, 193, 0);
            } else if (b == 20 || b == 201 || b == 202 || b == 203 || b == 204 || b == 205 || b == 206 || b == 207 || b == 208 || b == 209 || b == 210 || b == 211 || b == 212 || b == 213 || b == 214 || b == 215) {
                Level.setTile(x, y, z, 208, 0);
            } else if (b == 19 || b == 216 || b == 217 || b == 218 || b == 219 || b == 220 || b == 221 || b == 222 || b == 223 || b == 224 || b == 225 || b == 226 || b == 227 || b == 228 || b == 229 || b == 230) {
                Level.setTile(x, y, z, 223, 0);
            } else if (b == 18 || b == 161 || b == 231 || b == 232 || b == 233 || b == 234 || b == 235 || b == 236 || b == 237 || b == 238 || b == 239 || b == 240 || b == 241 || b == 242 || b == 244 || b == 250 || b == 251) {
                Level.setTile(x, y, z, 238, 0);
            } else {
                if(paintAnyBlock == false || paintAnyBlock == "off") {
					if(showTipMessage == true) {
						ModPE.showTipMessage("This block can't be painted!");
					}
				}else{
					Level.setTile(x, y, z, 159, 8);
				}
            }
            break;
        }
    case "Cyan":
        {
            if (b == 35) {
                Level.setTile(x, y, z, 35, 9);
            } else if (b == 159) {
                Level.setTile(x, y, z, 159, 9);
            } else if (b == 171) {
                Level.setTile(x, y, z, 171, 9);
            } else if (b == 5 || b == 176 || b == 177 || b == 178 || b == 179 || b == 180 || b == 181 || b == 182 || b == 193 || b == 194 || b == 195 || b == 196 || b == 197 || b == 198 || b == 199 || b == 200) {
                Level.setTile(x, y, z, 194, 0);
            } else if (b == 20 || b == 201 || b == 202 || b == 203 || b == 204 || b == 205 || b == 206 || b == 207 || b == 208 || b == 209 || b == 210 || b == 211 || b == 212 || b == 213 || b == 214 || b == 215) {
                Level.setTile(x, y, z, 209, 0);
            } else if (b == 19 || b == 216 || b == 217 || b == 218 || b == 219 || b == 220 || b == 221 || b == 222 || b == 223 || b == 224 || b == 225 || b == 226 || b == 227 || b == 228 || b == 229 || b == 230) {
                Level.setTile(x, y, z, 224, 0);
            } else if (b == 18 || b == 161 || b == 231 || b == 232 || b == 233 || b == 234 || b == 235 || b == 236 || b == 237 || b == 238 || b == 239 || b == 240 || b == 241 || b == 242 || b == 244 || b == 250 || b == 251) {
                Level.setTile(x, y, z, 239, 0);
            } else {
                if(paintAnyBlock == false || paintAnyBlock == "off") {
					if(showTipMessage == true) {
						ModPE.showTipMessage("This block can't be painted!");
					}
				}else{
					Level.setTile(x, y, z, 159, 9);
				}
            }
            break;
        }
    case "Purple":
        {
            if (b == 35) {
                Level.setTile(x, y, z, 35, 10);
            } else if (b == 159) {
                Level.setTile(x, y, z, 159, 10);
            } else if (b == 171) {
                Level.setTile(x, y, z, 171, 10);
            } else if (b == 5 || b == 176 || b == 177 || b == 178 || b == 179 || b == 180 || b == 181 || b == 182 || b == 193 || b == 194 || b == 195 || b == 196 || b == 197 || b == 198 || b == 199 || b == 200) {
                Level.setTile(x, y, z, 195, 0);
            } else if (b == 20 || b == 201 || b == 202 || b == 203 || b == 204 || b == 205 || b == 206 || b == 207 || b == 208 || b == 209 || b == 210 || b == 211 || b == 212 || b == 213 || b == 214 || b == 215) {
                Level.setTile(x, y, z, 210, 0);
            } else if (b == 19 || b == 216 || b == 217 || b == 218 || b == 219 || b == 220 || b == 221 || b == 222 || b == 223 || b == 224 || b == 225 || b == 226 || b == 227 || b == 228 || b == 229 || b == 230) {
                Level.setTile(x, y, z, 225, 0);
            } else if (b == 18 || b == 161 || b == 231 || b == 232 || b == 233 || b == 234 || b == 235 || b == 236 || b == 237 || b == 238 || b == 239 || b == 240 || b == 241 || b == 242 || b == 244 || b == 250 || b == 251) {
                Level.setTile(x, y, z, 240, 0);
            } else {
                if(paintAnyBlock == false || paintAnyBlock == "off") {
					if(showTipMessage == true) {
						ModPE.showTipMessage("This block can't be painted!");
					}
				}else{
					Level.setTile(x, y, z, 159, 10);
				}
            }
            break;
			} case "Blue": {
				if (b == 35) {
					Level.setTile(x, y, z, 35, 11);
				} else if (b == 159) {
					Level.setTile(x, y, z, 159, 11);
				} else if (b == 171) {
					Level.setTile(x, y, z, 171, 11);
				} else if (b == 5 || b == 176 || b == 177 || b == 178 || b == 179 || b == 180 || b == 181 || b == 182 || b == 193 || b == 194 || b == 195 || b == 196 || b == 197 || b == 198 || b == 199 || b == 200) {
					Level.setTile(x, y, z, 196, 0);
				} else if (b == 20 || b == 201 || b == 202 || b == 203 || b == 204 || b == 205 || b == 206 || b == 207 || b == 208 || b == 209 || b == 210 || b == 211 || b == 212 || b == 213 || b == 214 || b == 215) {
					Level.setTile(x, y, z, 211, 0);
				} else if (b == 19 || b == 216 || b == 217 || b == 218 || b == 219 || b == 220 || b == 221 || b == 222 || b == 223 || b == 224 || b == 225 || b == 226 || b == 227 || b == 228 || b == 229 || b == 230) {
					Level.setTile(x, y, z, 226, 0);
				} else if (b == 18 || b == 161 || b == 231 || b == 232 || b == 233 || b == 234 || b == 235 || b == 236 || b == 237 || b == 238 || b == 239 || b == 240 || b == 241 || b == 242 || b == 244 || b == 250 || b == 251) {
					Level.setTile(x, y, z, 241, 0);
				} else {
					if(paintAnyBlock == false || paintAnyBlock == "off") {
						if(showTipMessage == true) {
							ModPE.showTipMessage("This block can't be painted!");
						}
					}else{
						Level.setTile(x, y, z, 159, 11);
					}
				}
				break;
			} case "Brown": {
				if (b == 35) {
					Level.setTile(x, y, z, 35, 12);
				} else if (b == 159) {
					Level.setTile(x, y, z, 159, 12);
				} else if (b == 171) {
					Level.setTile(x, y, z, 171, 12);
				} else if (b == 5 || b == 176 || b == 177 || b == 178 || b == 179 || b == 180 || b == 181 || b == 182 || b == 193 || b == 194 || b == 195 || b == 196 || b == 197 || b == 198 || b == 199 || b == 200) {
					Level.setTile(x, y, z, 197, 0);
				} else if (b == 20 || b == 201 || b == 202 || b == 203 || b == 204 || b == 205 || b == 206 || b == 207 || b == 208 || b == 209 || b == 210 || b == 211 || b == 212 || b == 213 || b == 214 || b == 215) {
					Level.setTile(x, y, z, 212, 0);
				} else if (b == 19 || b == 216 || b == 217 || b == 218 || b == 219 || b == 220 || b == 221 || b == 222 || b == 223 || b == 224 || b == 225 || b == 226 || b == 227 || b == 228 || b == 229 || b == 230) {
					Level.setTile(x, y, z, 227, 0);
				} else if (b == 18 || b == 161 || b == 231 || b == 232 || b == 233 || b == 234 || b == 235 || b == 236 || b == 237 || b == 238 || b == 239 || b == 240 || b == 241 || b == 242 || b == 244 || b == 250 || b == 251) {
					Level.setTile(x, y, z, 242, 0);
				} else {
					if(paintAnyBlock == false || paintAnyBlock == "off") {
						if(showTipMessage == true) {
							ModPE.showTipMessage("This block can't be painted!");
						}
					}else{
						Level.setTile(x, y, z, 159, 12);
					}
				}
				break;
			} case "Green": {
                if (b == 35) {
                    Level.setTile(x, y, z, 35, 13);
                } else if (b == 159) {
                    Level.setTile(x, y, z, 159, 13);
                } else if (b == 171) {
                    Level.setTile(x, y, z, 171, 13);
                } else if (b == 5 || b == 176 || b == 177 || b == 178 || b == 179 || b == 180 || b == 181 || b == 182 || b == 193 || b == 194 || b == 195 || b == 196 || b == 197 || b == 198 || b == 199 || b == 200) {
                    Level.setTile(x, y, z, 198, 0);
                } else if (b == 20 || b == 201 || b == 202 || b == 203 || b == 204 || b == 205 || b == 206 || b == 207 || b == 208 || b == 209 || b == 210 || b == 211 || b == 212 || b == 213 || b == 214 || b == 215) {
                    Level.setTile(x, y, z, 213, 0);
                } else if (b == 19 || b == 216 || b == 217 || b == 218 || b == 219 || b == 220 || b == 221 || b == 222 || b == 223 || b == 224 || b == 225 || b == 226 || b == 227 || b == 228 || b == 229 || b == 230) {
                    Level.setTile(x, y, z, 228, 0);
                } else if (b == 18 || b == 161 || b == 231 || b == 232 || b == 233 || b == 234 || b == 235 || b == 236 || b == 237 || b == 238 || b == 239 || b == 240 || b == 241 || b == 242 || b == 244 || b == 250 || b == 251) {
                    Level.setTile(x, y, z, 244, 0);
                } else {
                    if(paintAnyBlock == false || paintAnyBlock == "off") {
						if(showTipMessage == true) {
							ModPE.showTipMessage("This block can't be painted!");
						}
					}else{
						Level.setTile(x, y, z, 159, 13);
					}
                }
                break;
            } case "Red": {
                if (b == 35) {
                    Level.setTile(x, y, z, 35, 14);
                } else if (b == 159) {
                    Level.setTile(x, y, z, 159, 14);
                } else if (b == 171) {
                    Level.setTile(x, y, z, 171, 14);
                } else if (b == 5 || b == 176 || b == 177 || b == 178 || b == 179 || b == 180 || b == 181 || b == 182 || b == 193 || b == 194 || b == 195 || b == 196 || b == 197 || b == 198 || b == 199 || b == 200) {
                    Level.setTile(x, y, z, 199, 0);
                } else if (b == 20 || b == 201 || b == 202 || b == 203 || b == 204 || b == 205 || b == 206 || b == 207 || b == 208 || b == 209 || b == 210 || b == 211 || b == 212 || b == 213 || b == 214 || b == 215) {
                    Level.setTile(x, y, z, 214, 0);
                } else if (b == 19 || b == 216 || b == 217 || b == 218 || b == 219 || b == 220 || b == 221 || b == 222 || b == 223 || b == 224 || b == 225 || b == 226 || b == 227 || b == 228 || b == 229 || b == 230) {
                    Level.setTile(x, y, z, 229, 0);
                } else if (b == 18 || b == 161 || b == 231 || b == 232 || b == 233 || b == 234 || b == 235 || b == 236 || b == 237 || b == 238 || b == 239 || b == 240 || b == 241 || b == 242 || b == 244 || b == 250 || b == 251) {
                    Level.setTile(x, y, z, 250, 0);
                } else {
                    if(paintAnyBlock == false || paintAnyBlock == "off") {
						if(showTipMessage == true) {
							ModPE.showTipMessage("This block can't be painted!");
						}
					}else{
						Level.setTile(x, y, z, 159, 14);
					}
                }
                break;
            } case "Black": {
                if (b == 35) {
                    Level.setTile(x, y, z, 35, 15);
                } else if (b == 159) {
                    Level.setTile(x, y, z, 159, 15);
                } else if (b == 171) {
                    Level.setTile(x, y, z, 171, 15);
                } else if (b == 5 || b == 176 || b == 177 || b == 178 || b == 179 || b == 180 || b == 181 || b == 182 || b == 193 || b == 194 || b == 195 || b == 196 || b == 197 || b == 198 || b == 199 || b == 200) {
                    Level.setTile(x, y, z, 200, 0);
                } else if (b == 20 || b == 201 || b == 202 || b == 203 || b == 204 || b == 205 || b == 206 || b == 207 || b == 208 || b == 209 || b == 210 || b == 211 || b == 212 || b == 213 || b == 214 || b == 215) {
                    Level.setTile(x, y, z, 215, 0);
                } else if (b == 19 || b == 216 || b == 217 || b == 218 || b == 219 || b == 220 || b == 221 || b == 222 || b == 223 || b == 224 || b == 225 || b == 226 || b == 227 || b == 228 || b == 229 || b == 230) {
                    Level.setTile(x, y, z, 230, 0);
                } else if (b == 18 || b == 161 || b == 231 || b == 232 || b == 233 || b == 234 || b == 235 || b == 236 || b == 237 || b == 238 || b == 239 || b == 240 || b == 241 || b == 242 || b == 244 || b == 250 || b == 251) {
                    Level.setTile(x, y, z, 251, 0);
                } else {
                    if(paintAnyBlock == false || paintAnyBlock == "off") {
						if(showTipMessage == true) {
							ModPE.showTipMessage("This block can't be painted!");
						}
					}else{
						Level.setTile(x, y, z, 159, 15);
					}
                }
                break;
            }
        }
    };

PaintModPE.paintEntity = function (paintColor, entity) {
	preventDefault();
	if (Entity.getEntityTypeId(entity) == 84 || Entity.getEntityTypeId(entity) == 90 || Entity.getEntityTypeId(entity) == 83) {
		ModPE.showTipMessage("This entity can't be painted!");
	}else{
		switch (paintColor) {
			case "White": {
				Entity.setMobSkin(entity, "mob/white.png");
				break;
			} case "Orange": {
				Entity.setMobSkin(entity, "mob/orange.png");
				break;
			} case "Magenta": {
				Entity.setMobSkin(entity, "mob/magenta.png");
				break;
			} case "Light Blue": {
				Entity.setMobSkin(entity, "mob/lightblue.png");
				break;
			} case "Yellow": {
				Entity.setMobSkin(entity, "mob/yellow.png");
				break;
			} case "Lime Green": {
				Entity.setMobSkin(entity, "mob/limegreen.png");
				break;
			} case "Pink": {
				Entity.setMobSkin(entity, "mob/pink.png");
				break;
			} case "Gray": {
				Entity.setMobSkin(entity, "mob/gray.png");
				break;
			} case "Light Gray": {
				Entity.setMobSkin(entity, "mob/lightgray.png");
				break;
			} case "Cyan": {
				Entity.setMobSkin(entity, "mob/cyan.png");
				break;
			} case "Purple": {
				Entity.setMobSkin(entity, "mob/purple.png");
				break;
			} case "Blue": {
				Entity.setMobSkin(entity, "mob/blue.png");
				break;
			} case "Brown": {
				Entity.setMobSkin(entity, "mob/brown.png");
				break;
			} case "Green": {
				Entity.setMobSkin(entity, "mob/green.png");
				break;
			} case "Red": {
				Entity.setMobSkin(entity, "mob/red.png");
				break;
			} case "Black": {
				Entity.setMobSkin(entity, "mob/black.png");
				break;
			}
		}
	}
};

PaintModPE.damagePaintbrush = function () {
    var gamemode = Level.getGameMode();
    if (gamemode == 0) {
        Entity.setCarriedItem(Player.getEntity(), Player.getCarriedItem(), Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
        if (Player.getCarriedItemData() > 100) {
            Entity.setCarriedItem(Player.getEntity(), Player.getCarriedItem(), Player.getCarriedItemCount() - 1);
            Player.addItemInventory(3030, 1, 0);
        }
    }
};

PaintModPE.getVersion = function () {
    return CURRENT_VERSION;
};

PaintModPE.getLatestVersion = function () {
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
        latestPocketEditionVersion = loadedVersion.split(" ")[1];

        // close what needs to be closed
        bufferedVersionReader.close();

        // test
        //clientMessage(CURRENT_VERSION + " " + latestVersion);
    } catch (err) {
        clientMessage(ChatColor.GREEN + "[AgameR Paint Mod PE]" + ChatColor.WHITE + " Can't check for updates, please check your Internet connection.");
        ModPE.log("[AgameR Paint Mod PE] getLatestVersion() caught an error: " + err);
    }
};

PaintModPE.fullScreenMessage = function(text) {
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var fullScreenMenuLayout = new android.widget.LinearLayout(ctx);
                var fullScreenMenuScroll = new android.widget.ScrollView(ctx);
                var fullScreenMenuLayout1 = new android.widget.LinearLayout(ctx);
                fullScreenMenuLayout.setOrientation(1);
                fullScreenMenuLayout1.setOrientation(1);
                fullScreenMenuScroll.addView(fullScreenMenuLayout);
                fullScreenMenuLayout1.addView(fullScreenMenuScroll);
                //--------Add Buttons-------//
                /*var newLineText = new android.widget.TextView(ctx);
                var authorText = new android.widget.TextView(ctx);
                var currentModVersionText = new android.widget.TextView(ctx);
                var targetMCPEVersionText = new android.widget.TextView(ctx);
                var MCPEVersionText = new android.widget.TextView(ctx);
                var newLine2Text = new android.widget.TextView(ctx);
                var aboutOkBtn = new android.widget.Button(ctx);*/
                var newLineText = new android.widget.TextView();
                newLineText.setText("\n");
				MinecraftButtonLibrary.addMinecraftStyleToTextView(newLineText)
                var fullScreenText = new android.widget.TextView(text);
                fullScreenText.setText(text);
				MinecraftButtonLibrary.addMinecraftStyleToTextView(fullScreenText)
                var spritesheet = android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 0, 0, 16, 16), 16 * GuiSize, 16 * GuiSize, false);
                fullScreenText.setGravity(android.view.Gravity.CENTER);
                fullScreenMenuLayout.addView(newLineText);
                fullScreenMenuLayout.addView(fullScreenText);
                /*newLineText.setText("\n");
					authorText.setText("Author : " + MOD_AUTHOR);
					currentModVersionText.setText("Current mod version : v" + CURRENT_VERSION);
					targetMCPEVersionText.setText("Target MCPE version : v" + targetMCPEVersion);
					MCPEVersionText.setText("Current MCPE version : v" + mcpeVersion);
					newLine2Text.setText("\n");
                    //btn.setText("Ok");*/
				
				//Background stuff...
				var dirt = new android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createScaledBitmap(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/background.png")), dip2px(64), dip2px(64), false));
				dirt.setColorFilter(android.graphics.Color.rgb(70, 70, 70), android.graphics.PorterDuff.Mode.MULTIPLY);
				dirt.setTileModeXY(android.graphics.Shader.TileMode.REPEAT, android.graphics.Shader.TileMode.REPEAT);

                //More buttons...
                fullScreenMenu = new android.widget.PopupWindow(fullScreenMenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight());
                fullScreenMenu.setBackgroundDrawable(dirt);
                fullScreenMenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP, 0, 0);
            } catch(error) {
                print('An error occured: ' + error);
            }
        }
    }));
}

PaintModPE.autoUpdater = function() {
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		var ru  = new java.lang.Runnable({ run: function() {
			try {
				var scriptUrl = new java.net.URL("https://raw.githubusercontent.com/peacestorm/ModPE-scripts/master/AgameR_Paint_Mod_PE.js");
				var connection = scriptUrl.openConnection();
				connection.setRequestMethod("GET");
				connection.setDoOutput(true);
				connection.connect();
				connection.getContentLength();
				var input = connection.getInputStream();
				var contents = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 1024);
				var bytesRead = 0;
				while((bytesRead = input.read(contents)) != -1) { 
					newScript += new java.lang.String(contents, 0, bytesRead);			   
				}
				var patchesFolder = ctx.getDir("modscripts", 0);
				var scriptFile = new java.io.File(patchesFolder, "AgameR Paint Mod PE " + latestVersion + ".js");
				var printWriter = new java.io.PrintWriter(scriptFile);
				printWriter.write(newScript);
				printWriter.flush();
				printWriter.close();
				try {
					net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(scriptFile, false);
					net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(scriptFile, true);
					PaintModPE.fullScreenMessage("Now disable the old version of the mod and restart BlockLauncher!");
				} catch(e) {
					//clientMessage("Error: Line 1255: " + e);
				}
			} catch(e) {
				clientMessage("Error: Line 1259: " + e);
			}
		}});
		var th = new java.lang.Thread(ru);
		th.start();
		}
	}));
}

PaintModPE.getMyScriptName = function() {
	var scripts = net.zhuoweizhang.mcpelauncher.ScriptManager.scripts;
    for(var i = 0; i < scripts.size(); i++) {
        var script = scripts.get(i);
        var scope = script.scope;
        if(org.mozilla.javascript.ScriptableObject.hasProperty(scope, "PaintModPE"))
            return script.name;
	}
};

PaintModPE.showMessage = function(type, message) {
	if(type == "warning") {
		    ctx.runOnUiThread(new java.lang.Runnable() {
            run: function() {
                try {
                    var dialogGUI = new android.widget.PopupWindow();
					var warningText = warningSubTitle("Warning!");
					var newLineTextView = new android.widget.TextView(ctx);
					newLineTextView.setText("\n");
                    var text = new android.widget.TextView(ctx);
					MinecraftButtonLibrary.addMinecraftStyleToTextView(text);
                    text.setText(message);
					var newLineTextView2 = new android.widget.TextView(ctx);
					newLineTextView2.setText("\n");
                    var btn = MinecraftButton(16, true);
                    btn.setText("Ok");
                    var dialogLayout = new android.widget.LinearLayout(ctx);
					text.setPadding(50, 0, 50, 0);
					//Background stuff...
					var dirt = new android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createScaledBitmap(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/background.png")), dip2px(64), dip2px(64), false));
					dirt.setColorFilter(android.graphics.Color.rgb(70, 70, 70), android.graphics.PorterDuff.Mode.MULTIPLY);
					dirt.setTileModeXY(android.graphics.Shader.TileMode.REPEAT, android.graphics.Shader.TileMode.REPEAT);
                    dialogLayout.setBackgroundDrawable(dirt);
                    dialogLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
                    dialogLayout.addView(warningText);
                    dialogLayout.addView(newLineTextView);
                    dialogLayout.addView(text);
					dialogLayout.addView(newLineTextView2);
                    dialogLayout.addView(btn);
                    var dialog = new android.app.Dialog(ctx);
                    dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
                    dialog.setContentView(dialogLayout);
                    dialog.setTitle("Warning!");
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
                } catch(e) {
                    print("Error: " + e);
					ModPE.log("Error: " + e);
                }
            }
        });
	}if(type == "update") {
			ctx.runOnUiThread(new java.lang.Runnable() {
            run: function() {
                try {
                    var dialogGUI = new android.widget.PopupWindow();
					var updateText = normalSubTitle("New version available!");
					var newLineTextView = new android.widget.TextView(ctx);
					newLineTextView.setText("\n");
                    var text = new android.widget.TextView(ctx);
					MinecraftButtonLibrary.addMinecraftStyleToTextView(text);
					text.setText(message);
					var newLineTextView2 = new android.widget.TextView(ctx);
					newLineTextView2.setText("\n");
                    var btn = MinecraftButton(16, true);
                    btn.setText("Later!");
                    var btnUpdate = MinecraftButton(16, true);
                    btnUpdate.setText("Install now!");
                    var dialogLayout = new android.widget.LinearLayout(ctx);
					text.setPadding(50, 0, 50, 0);
					//Background stuff...
					var dirt = new android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createScaledBitmap(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/background.png")), dip2px(64), dip2px(64), false));
					dirt.setColorFilter(android.graphics.Color.rgb(70, 70, 70), android.graphics.PorterDuff.Mode.MULTIPLY);
					dirt.setTileModeXY(android.graphics.Shader.TileMode.REPEAT, android.graphics.Shader.TileMode.REPEAT);
                    dialogLayout.setBackgroundDrawable(dirt);
                    dialogLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
                    dialogLayout.addView(updateText);
                    dialogLayout.addView(newLineTextView);
                    dialogLayout.addView(text);
					dialogLayout.addView(newLineTextView2);
                    dialogLayout.addView(btn);
                    dialogLayout.addView(btnUpdate);
                    var dialog = new android.app.Dialog(ctx);
                    dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
                    dialog.setContentView(dialogLayout);
                    dialog.setTitle("Update available!");
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
					btnUpdate.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 100);
							dialog.dismiss();
							PaintModPE.autoUpdater();
                        }
                    });
                } catch(e) {
                    print("Error: " + e);
					ModPE.log("Error: " + e);
                }
            }
        });
	}
};

ModPE.setItem(3030, "empty_paintbrush", 0, "Empty Paintbrush", 64);
ModPE.setItem(3031, "white_paintbrush", 0, "White Paintbrush", 64);
ModPE.setItem(3032, "orange_paintbrush", 0, "Orange Paintbrush", 64);
ModPE.setItem(3033, "magenta_paintbrush", 0, "Magenta Paintbrush", 64);
ModPE.setItem(3034, "lightblue_paintbrush", 0, "Light Blue Paintbrush", 64);
ModPE.setItem(3035, "yellow_paintbrush", 0, "Yellow Paintbrush", 64);
ModPE.setItem(3036, "lime_paintbrush", 0, "Lime Green Paintbrush", 64);
ModPE.setItem(3037, "pink_paintbrush", 0, "Pink Paintbrush", 64);
ModPE.setItem(3038, "darkgrey_paintbrush", 0, "Gray Paintbrush", 64);
ModPE.setItem(3039, "lightgrey_paintbrush", 0, "Light Gray Paintbrush", 64);
ModPE.setItem(3040, "cyan_paintbrush", 0, "Cyan Paintbrush", 64);
ModPE.setItem(3041, "purple_paintbrush", 0, "Purple Paintbrush", 64);
ModPE.setItem(3042, "blue_paintbrush", 0, "Blue Paintbrush", 64);
ModPE.setItem(3043, "brown_paintbrush", 0, "Brown Paintbrush", 64);
ModPE.setItem(3044, "green_paintbrush", 0, "Green Paintbrush", 64);
ModPE.setItem(3045, "red_paintbrush", 0, "Red Paintbrush", 64);
ModPE.setItem(3046, "black_paintbrush", 0, "Black Paintbrush", 64);
ModPE.setItem(3047, "rainbow_paint_bucket", 0, "Bucket with Rainbow Paint", 64);
ModPE.setItem(3493, "rainbow_paintgun", 0, "Paint Gun", 64);

//Wooden Planks
Block.defineBlock(176, "Orange Wooden Planks", [["planks", 0]], 0, 2, 0);
Block.setColor(176, [0xFF6600]);
Block.setDestroyTime(176, 3);
Block.defineBlock(177, "Magenta Wooden Planks", [["planks", 0]], 0, 2, 0);
Block.setColor(177, [0xFF00FF]);
Block.setDestroyTime(177, 3);
Block.defineBlock(178, "Light Blue Wooden Planks", [["planks", 0]], 0, 2, 0);
Block.setColor(178, [0x4169E1]);
Block.setDestroyTime(178, 3);
Block.defineBlock(179, "Yellow Wooden Planks", [["planks", 0]], 0, 2, 0);
Block.setColor(179, [0xFFFF00]);
Block.setDestroyTime(179, 3);
Block.defineBlock(180, "Lime Green Wooden Planks", [["planks", 0]], 0, 2, 0);
Block.setColor(180, [0x32CD32]);
Block.setDestroyTime(180, 3);
Block.defineBlock(181, "Pink Wooden Planks", [["planks", 0]], 0, 2, 0);
Block.setColor(181, [0xFF1493]);
Block.setDestroyTime(181, 3);
Block.defineBlock(182, "Gray Wooden Planks", [["planks", 0]], 0, 2, 0);
Block.setColor(182, [0x696969]);
Block.setDestroyTime(182, 3);
Block.defineBlock(193, "Light Gray Wooden Planks", [["planks", 0]], 0, 2, 0);
Block.setColor(193, [0x808080]);
Block.setDestroyTime(193, 3);
Block.defineBlock(194, "Cyan Wooden Planks", [["planks", 0]], 0, 2, 0);
Block.setColor(194, [0x00FFFF]);
Block.setDestroyTime(194, 3);
Block.defineBlock(195, "Purple Wooden Planks", [["planks", 0]], 0, 2, 0);
Block.setColor(195, [0x800080]);
Block.setDestroyTime(195, 3);
Block.defineBlock(196, "Blue Wooden Planks", [["planks", 0]], 0, 2, 0);
Block.setColor(196, [0x00008B]);
Block.setDestroyTime(196, 3);
Block.defineBlock(197, "Brown Wooden Planks", [["planks", 0]], 0, 2, 0);
Block.setColor(197, [0x8B4513]);
Block.setDestroyTime(197, 3);
Block.defineBlock(198, "Green Wooden Planks", [["planks", 0]], 0, 2, 0);
Block.setColor(198, [0x008000]);
Block.setDestroyTime(198, 3);
Block.defineBlock(199, "Red Wooden Planks", [["planks", 0]], 0, 2, 0);
Block.setColor(199, [0xFF0000]);
Block.setDestroyTime(199, 3);
Block.defineBlock(200, "Black Wooden Planks", [["planks", 0]], 0, 2, 0);
Block.setColor(200, [0x000000]);
Block.setDestroyTime(200, 3);

//Glass
Block.defineBlock(201, "Orange Tinted Glass", [["glass", 0]], 0, false, 0);
Block.setColor(201, [0xFF6600]);
Block.setDestroyTime(201, 0.45);
Block.setRenderLayer(201, 5);
Block.defineBlock(202, "Magenta Tinted Glass", [["glass", 0]], 0, false, 0);
Block.setColor(202, [0xFF00FF]);
Block.setDestroyTime(202, 0.45);
Block.setRenderLayer(202, 5);
Block.defineBlock(203, "Light Blue Tinted Glass", [["glass", 0]], 0, false, 0);
Block.setColor(203, [0x4169E1]);
Block.setDestroyTime(203, 0.45);
Block.setRenderLayer(203, 5);
Block.defineBlock(204, "Yellow Tinted Glass", [["glass", 0]], 0, false, 0);
Block.setColor(204, [0xFFFF00]);
Block.setDestroyTime(204, 0.45);
Block.setRenderLayer(204, 5);
Block.defineBlock(205, "Lime Green Tinted Glass", [["glass", 0]], 0, false, 0);
Block.setColor(205, [0x32CD32]);
Block.setDestroyTime(205, 0.45);
Block.setRenderLayer(205, 5);
Block.defineBlock(206, "Pink Tinted Glass", [["glass", 0]], 0, false, 0);
Block.setColor(206, [0xFF1493]);
Block.setDestroyTime(206, 0.45);
Block.setRenderLayer(206, 5);
Block.defineBlock(207, "Gray Tinted Glass", [["glass", 0]], 0, false, 0);
Block.setColor(207, [0x696969]);
Block.setDestroyTime(207, 0.45);
Block.setRenderLayer(207, 5);
Block.defineBlock(208, "Light Gray Tinted Glass", [["glass", 0]], 0, false, 0);
Block.setColor(208, [0x808080]);
Block.setDestroyTime(208, 0.45);
Block.setRenderLayer(208, 5);
Block.defineBlock(209, "Cyan Tinted Glass", [["glass", 0]], 0, false, 0);
Block.setColor(209, [0x00FFFF]);
Block.setDestroyTime(209, 0.45);
Block.setRenderLayer(209, 5);
Block.defineBlock(210, "Purple Tinted Glass", [["glass", 0]], 0, false, 0);
Block.setColor(210, [0x800080]);
Block.setDestroyTime(210, 0.45);
Block.setRenderLayer(210, 5);
Block.defineBlock(211, "Blue Tinted Glass", [["glass", 0]], 0, false, 0);
Block.setColor(211, [0x00008B]);
Block.setDestroyTime(211, 0.45);
Block.setRenderLayer(211, 5);
Block.defineBlock(212, "Brown Tinted Glass", [["glass", 0]], 0, false, 0);
Block.setColor(212, [0x8B4513]);
Block.setDestroyTime(212, 0.45);
Block.setRenderLayer(212, 5);
Block.defineBlock(213, "Green Tinted Glass", [["glass", 0]], 0, false, 0);
Block.setColor(213, [0x008000]);
Block.setDestroyTime(213, 0.45);
Block.setRenderLayer(213, 5);
Block.defineBlock(214, "Red Tinted Glass", [["glass", 0]], 0, false, 0);
Block.setColor(214, [0xFF0000]);
Block.setDestroyTime(214, 0.45);
Block.setRenderLayer(214, 5);
Block.defineBlock(215, "Black Tinted Glass", [["glass", 0]], 0, false, 0);
Block.setColor(215, [0x000000]);
Block.setDestroyTime(215, 0.45);
Block.setRenderLayer(215, 5);

//Sponge
Block.defineBlock(216, "Orange Sponge", [["sponge", 0]], 0, 2, 0);
Block.setColor(216, [0xFF6600]);
Block.setDestroyTime(216, 0.6);
Block.defineBlock(217, "Magenta Sponge", [["sponge", 0]], 0, 2, 0);
Block.setColor(217, [0xFF00FF]);
Block.setDestroyTime(217, 0.6);
Block.defineBlock(218, "Light Blue Sponge", [["sponge", 0]], 0, 2, 0);
Block.setColor(218, [0x4169E1]);
Block.setDestroyTime(218, 0.6);
Block.defineBlock(219, "Yellow Sponge", [["sponge", 0]], 0, 2, 0);
Block.setColor(219, [0xFFFF00]);
Block.setDestroyTime(219, 0.6);
Block.defineBlock(220, "Lime Green Sponge", [["sponge", 0]], 0, 2, 0);
Block.setColor(220, [0x32CD32]);
Block.setDestroyTime(220, 0.6);
Block.defineBlock(221, "Pink Sponge", [["sponge", 0]], 0, 2, 0);
Block.setColor(221, [0xFF1493]);
Block.setDestroyTime(221, 0.6);
Block.defineBlock(222, "Gray Sponge", [["sponge", 0]], 0, 2, 0);
Block.setColor(222, [0x696969]);
Block.setDestroyTime(222, 0.6);
Block.defineBlock(223, "Light Gray Sponge", [["sponge", 0]], 0, 2, 0);
Block.setColor(223, [0x808080]);
Block.setDestroyTime(223, 0.6);
Block.defineBlock(224, "Cyan Sponge", [["sponge", 0]], 0, 2, 0);
Block.setColor(224, [0x00FFFF]);
Block.setDestroyTime(224, 0.6);
Block.defineBlock(225, "Purple Sponge", [["sponge", 0]], 0, 2, 0);
Block.setColor(225, [0x800080]);
Block.setDestroyTime(225, 0.6);
Block.defineBlock(226, "Blue Sponge", [["sponge", 0]], 0, 2, 0);
Block.setColor(226, [0x00008B]);
Block.setDestroyTime(226, 0.6);
Block.defineBlock(227, "Brown Sponge", [["sponge", 0]], 0, 2, 0);
Block.setColor(227, [0x8B4513]);
Block.setDestroyTime(227, 0.6);
Block.defineBlock(228, "Green Sponge", [["sponge", 0]], 0, 2, 0);
Block.setColor(228, [0x008000]);
Block.setDestroyTime(228, 0.6);
Block.defineBlock(229, "Red Sponge", [["sponge", 0]], 0, 2, 0);
Block.setColor(229, [0xFF0000]);
Block.setDestroyTime(229, 0.6);
Block.defineBlock(230, "Black Sponge", [["sponge", 0]], 0, 2, 0);
Block.setColor(230, [0x000000]);
Block.setDestroyTime(230, 0.6);

//Leaves
Block.defineBlock(231, "Orange Leaves", [["leaves", 0]], 0, false, 0);
Block.setColor(231, [0xFF6600]);
Block.setDestroyTime(231, 0.2);
Block.setRenderLayer(231, 1);
Block.defineBlock(232, "Magenta Leaves", [["leaves", 0]], 0, false, 0);
Block.setColor(232, [0xFF00FF]);
Block.setDestroyTime(232, 0.2);
Block.setRenderLayer(232, 1);
Block.defineBlock(233, "Light Blue Leaves", [["leaves", 0]], 0, false, 0);
Block.setColor(233, [0x4169E1]);
Block.setDestroyTime(233, 0.2);
Block.setRenderLayer(233, 1);
Block.defineBlock(234, "Yellow Leaves", [["leaves", 0]], 0, false, 0);
Block.setColor(234, [0xFFFF00]);
Block.setDestroyTime(234, 0.2);
Block.setRenderLayer(234, 1);
Block.defineBlock(235, "Lime Green Leaves", [["leaves", 0]], 0, false, 0);
Block.setColor(235, [0x32CD32]);
Block.setDestroyTime(235, 0.2);
Block.setRenderLayer(235, 1);
Block.defineBlock(236, "Pink Leaves", [["leaves", 0]], 0, false, 0);
Block.setColor(236, [0xFF1493]);
Block.setDestroyTime(236, 0.2);
Block.setRenderLayer(236, 1);
Block.defineBlock(237, "Gray Leaves", [["leaves", 0]], 0, false, 0);
Block.setColor(237, [0x696969]);
Block.setDestroyTime(237, 0.2);
Block.setRenderLayer(237, 1);
Block.defineBlock(238, "Light Gray Leaves", [["leaves", 0]], 0, false, 0);
Block.setColor(238, [0x808080]);
Block.setDestroyTime(238, 0.2);
Block.setRenderLayer(238, 1);
Block.defineBlock(239, "Cyan Leaves", [["leaves", 0]], 0, false, 0);
Block.setColor(239, [0x00FFFF]);
Block.setDestroyTime(239, 0.2);
Block.setRenderLayer(239, 1);
Block.defineBlock(240, "Purple Leaves", [["leaves", 0]], 0, false, 0);
Block.setColor(240, [0x800080]);
Block.setDestroyTime(240, 0.2);
Block.setRenderLayer(240, 1);
Block.defineBlock(241, "Blue Leaves", [["leaves", 0]], 0, false, 0);
Block.setColor(241, [0x00008B]);
Block.setRenderLayer(241, 1);
Block.setDestroyTime(241, 0.2);
Block.defineBlock(242, "Brown Leaves", [["leaves", 0]], 0, false, 0);
Block.setColor(242, [0x8B4513]);
Block.setDestroyTime(242, 0.2);
Block.setRenderLayer(242, 1);
Block.defineBlock(244, "Green Leaves", [["leaves", 0]], 0, false, 0);
Block.setColor(244, [0x008000]);
Block.setDestroyTime(244, 0.2);
Block.setRenderLayer(244, 1);
Block.defineBlock(250, "Red Leaves", [["leaves", 0]], 0, false, 0);
Block.setColor(250, [0xFF0000]);
Block.setDestroyTime(250, 0.2);
Block.setRenderLayer(250, 1);
Block.defineBlock(251, "Black Leaves", [["leaves", 0]], 0, false, 0);
Block.setColor(251, [0x000000]);
Block.setDestroyTime(251, 0.2);
Block.setRenderLayer(251, 1);

Block.defineBlock(255, "Rainbow Paint Bomb", [["paint_bomb", 2], ["paint_bomb", 1], ["paint_bomb", 0], ["paint_bomb", 0], ["paint_bomb", 0], ["paint_bomb", 0]], false, 0);
Block.setDestroyTime(255, 0);

var randomPaintLiquidColor = [[0xFFFFFF], [0xFF6600], [0xFF00FF], [0x4169E1], [0xFFFF00], [0x32CD32], [0xFF1493], [0x696969], [0x808080], [0x00FFFF], [0x800080], [0x00008B], [0x8B4513], [0x00FF00], [0xFF0000], [0x000000]];

function getRandomPaintLiquidColor() {
	return randomPaintLiquidColor[Math.floor(randomPaintLiquidColor.length * Math.random())]; []
}

Block.defineBlock(255, "Rainbow Paint Liquid", "flowing_water", 3, 32, 0);
Block.setColor(255, getRandomPaintLiquidColor());
Block.setDestroyTime(255, 0);

/*Player.addItemCreativeInv(176,1,0);
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
Player.addItemCreativeInv(251,1,0);*/

var paintball;

var betaDevelopment = true;

Item.setMaxDamage(3030, 100);
Item.setMaxDamage(3031, 100);
Item.setMaxDamage(3032, 100);
Item.setMaxDamage(3033, 100);
Item.setMaxDamage(3034, 100);
Item.setMaxDamage(3035, 100);
Item.setMaxDamage(3036, 100);
Item.setMaxDamage(3037, 100);
Item.setMaxDamage(3038, 100);
Item.setMaxDamage(3039, 100);
Item.setMaxDamage(3040, 100);
Item.setMaxDamage(3041, 100);
Item.setMaxDamage(3042, 100);
Item.setMaxDamage(3043, 100);
Item.setMaxDamage(3044, 100);
Item.setMaxDamage(3045, 100);
Item.setMaxDamage(3046, 100);

var loadBlocksCreativeInv = false;

ModPE.initCreativeItems = function () {
	for(i = 3030; i++; i < 3048) {
		Player.addItemCreativeInv(i, 1, 0);
	}
    Player.addItemCreativeInv(3493, 1, 0);
    Player.addItemCreativeInv(255, 1, 0);
    if (loadBlocksCreativeInv == true) {
        Player.addItemCreativeInv(176, 1, 0);
        Player.addItemCreativeInv(177, 1, 0);
        Player.addItemCreativeInv(178, 1, 0);
        Player.addItemCreativeInv(179, 1, 0);
        Player.addItemCreativeInv(180, 1, 0);
        Player.addItemCreativeInv(181, 1, 0);
        Player.addItemCreativeInv(182, 1, 0);
        Player.addItemCreativeInv(193, 1, 0);
        Player.addItemCreativeInv(194, 1, 0);
        Player.addItemCreativeInv(195, 1, 0);
        Player.addItemCreativeInv(196, 1, 0);
        Player.addItemCreativeInv(197, 1, 0);
        Player.addItemCreativeInv(198, 1, 0);
        Player.addItemCreativeInv(199, 1, 0);
        Player.addItemCreativeInv(200, 1, 0);
        Player.addItemCreativeInv(201, 1, 0);
        Player.addItemCreativeInv(202, 1, 0);
        Player.addItemCreativeInv(203, 1, 0);
        Player.addItemCreativeInv(204, 1, 0);
        Player.addItemCreativeInv(205, 1, 0);
        Player.addItemCreativeInv(206, 1, 0);
        Player.addItemCreativeInv(207, 1, 0);
        Player.addItemCreativeInv(208, 1, 0);
        Player.addItemCreativeInv(209, 1, 0);
        Player.addItemCreativeInv(210, 1, 0);
        Player.addItemCreativeInv(211, 1, 0);
        Player.addItemCreativeInv(212, 1, 0);
        Player.addItemCreativeInv(213, 1, 0);
        Player.addItemCreativeInv(214, 1, 0);
        Player.addItemCreativeInv(215, 1, 0);
        Player.addItemCreativeInv(216, 1, 0);
        Player.addItemCreativeInv(217, 1, 0);
        Player.addItemCreativeInv(218, 1, 0);
        Player.addItemCreativeInv(219, 1, 0);
        Player.addItemCreativeInv(220, 1, 0);
        Player.addItemCreativeInv(221, 1, 0);
        Player.addItemCreativeInv(222, 1, 0);
        Player.addItemCreativeInv(223, 1, 0);
        Player.addItemCreativeInv(224, 1, 0);
        Player.addItemCreativeInv(225, 1, 0);
        Player.addItemCreativeInv(226, 1, 0);
        Player.addItemCreativeInv(227, 1, 0);
        Player.addItemCreativeInv(228, 1, 0);
        Player.addItemCreativeInv(229, 1, 0);
        Player.addItemCreativeInv(230, 1, 0);
        Player.addItemCreativeInv(231, 1, 0);
        Player.addItemCreativeInv(232, 1, 0);
        Player.addItemCreativeInv(233, 1, 0);
        Player.addItemCreativeInv(234, 1, 0);
        Player.addItemCreativeInv(235, 1, 0);
        Player.addItemCreativeInv(236, 1, 0);
        Player.addItemCreativeInv(237, 1, 0);
        Player.addItemCreativeInv(238, 1, 0);
        Player.addItemCreativeInv(239, 1, 0);
        Player.addItemCreativeInv(240, 1, 0);
        Player.addItemCreativeInv(241, 1, 0);
        Player.addItemCreativeInv(242, 1, 0);
        Player.addItemCreativeInv(243, 1, 0);
        Player.addItemCreativeInv(244, 1, 0);
        Player.addItemCreativeInv(250, 1, 0);
        Player.addItemCreativeInv(251, 1, 0);
    }
}

Item.addShapedRecipe(3030, 1, 0, [
"   "

    
    , " s "

    
    , " t "
], ["s", 35, 0, "t", 280, 0]);

Item.addShapedRecipe(3031, 1, 0, [
"   "

    
    , " s "

    
    , " t "
], ["s", 351, 15, "t", 3030, 0]);

Item.addShapedRecipe(3032, 1, 0, [
"   "

    
    , " s "

    
    , " t "
], ["s", 351, 14, "t", 3030, 0]);

Item.addShapedRecipe(3033, 1, 0, [
"   "

    
    , " s "

    
    , " t "
], ["s", 351, 13, "t", 3030, 0]);

Item.addShapedRecipe(3034, 1, 0, [
"   "

    
    , " s "

    
    , " t "
], ["s", 351, 12, "t", 3030, 0]);

Item.addShapedRecipe(3035, 1, 0, [
"   "

    
    , " s "

    
    , " t "
], ["s", 351, 11, "t", 3030, 0]);

Item.addShapedRecipe(3036, 1, 0, [
"   "

    
    , " s "

    
    , " t "
], ["s", 351, 10, "t", 3030, 0]);

Item.addShapedRecipe(3037, 1, 0, [
"   "

    
    , " s "

    
    , " t "
], ["s", 351, 9, "t", 3030, 0]);

Item.addShapedRecipe(3038, 1, 0, [
"   "

    
    , " s "

    
    , " t "
], ["s", 351, 8, "t", 3030, 0]);

Item.addShapedRecipe(3039, 1, 0, [
"   "

    
    , " s "

    
    , " t "
], ["s", 351, 7, "t", 3030, 0]);

Item.addShapedRecipe(3040, 1, 0, [
"   "

    
    , " s "

    
    , " t "
], ["s", 351, 6, "t", 3030, 0]);

Item.addShapedRecipe(3041, 1, 0, [
"   "

    
    , " s "

    
    , " t "
], ["s", 351, 5, "t", 3030, 0]);

Item.addShapedRecipe(3042, 1, 0, [
"   "

    
    , " s "

    
    , " t "
], ["s", 351, 4, "t", 3030, 0]);

Item.addShapedRecipe(3043, 1, 0, [
"   "

    
    , " s "

    
    , " t "
], ["s", 351, 3, "t", 3030, 0]);

Item.addShapedRecipe(3044, 1, 0, [
"   "

    
    , " s "

    
    , " t "
], ["s", 351, 2, "t", 3030, 0]);

Item.addShapedRecipe(3045, 1, 0, [
"   "

    
    , " s "

    
    , " t "
], ["s", 351, 1, "t", 3030, 0]);

Item.addShapedRecipe(3046, 1, 0, [
"   "

    
    , " s "

    
    , " t "
], ["s", 351, 0, "t", 3030, 0]);

Item.addShapedRecipe(3493, 1, 0, [
"sss"

    
    , "gpg"

    
    , "sss"
], ["s", 265, 0, "p", 3047, 0, "g", 289, 1]);

Item.addShapedRecipe(255, 1, 0, [
"   "

    
    , " t "

    
    , "   "
], ["t", 265, 0]);

function Web(url) {
    activity.runOnUiThread(new java.lang.Runnable({
        run: function () {
            activity.startActivity(new android.content.Intent(android.content.Intent.ACTION_VIEW, android.net.Uri.parse(url)));
        }
    }));
}

var initialized = false;

function newLevel() {
	PaintModPE.loadMainSettings();
    if (initialized == false) {
		new java.lang.Thread(new java.lang.Runnable() {
            run: function () {
				ModPE.initCreativeItems();
                PaintModPE.getLatestVersion();
                if (latestVersion != CURRENT_VERSION && latestVersion != undefined) {
                    clientMessage(ChatColor.GREEN + "[AgameR Paint Mod PE]" + ChatColor.WHITE + " There is a new version available (v" + latestVersion + " for Minecraft Pocket Edition v" + latestPocketEditionVersion + ")!");
					PaintModPE.showMessage("update", "There is a new version available (v" + latestVersion + " for Minecraft Pocket Edition v" + latestPocketEditionVersion + ")!");
                } else {
                    currentActivity.runOnUiThread(new java.lang.Runnable() {
                        run: function () {
                            android.widget.Toast.makeText(currentActivity, new android.text.Html.fromHtml("<b>AgameR Paint Mod PE</b> You have the latest version"), 0)
                                .show();
                        }
                    });
                }
            }
        })
        .start();
        initialized = true;
        clientMessage(ChatColor.GREEN + "[AgameR Paint Mod PE]" + ChatColor.WHITE + " Initialized");
		if(PaintModPE.getMyScriptName() == null) {
			PaintModPE.showMessage("warning", "Rename the mod to AgameR Paint Mod PE v" + CURRENT_VERSION + ".js!");
		}
		if(ModPE.getMinecraftVersion < minimalMCPEVersion) {
			PaintModPE.showMessage("warning", "The Minecraft version you use is not supported! Upgrade your Minecraft PE or download a supported version!");
		}
    }
};
//activity and other Android variables
var currentActivity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

var displayingPopup1 = false;

function modTick() {
    if (betaDevelopment == true) {
        ModPE.showTipMessage("AgameR Paint Mod PE v" + CURRENT_VERSION + "" + "\nMCPE v" + ModPE.getMinecraftVersion());
    }
    //player carrying a paint gun
    if (Player.getCarriedItem() == 3493) {
        if (!displayingPopup1) {
            displayingPopup1 = true;

            currentActivity.runOnUiThread(new java.lang.Runnable({
                run: function () {
                    try {
                        // FIRST BUTTON
                        var button1 = MinecraftButton(18, true); // (textSize, enableSound); Set enableSound to true or leave blank for click sound
                        button1.setOnClickListener(new android.view.View.OnClickListener() {
                            onClick: function (v) {
                                clientMessage("Debug message: Works!");
                                p = ((Entity.getPitch(getPlayerEnt()) + 90) * Math.PI) / 180;
                                var y = ((Entity.getYaw(getPlayerEnt()) + 90) * Math.PI) / 180;
                                var xx = Math.sin(p) * Math.cos(y);
                                var yy = Math.sin(p) * Math.sin(y);
                                var zz = Math.cos(p);
                                paintball = Level.spawnMob(Player.getX() + xx, Player.getY() + zz, Player.getZ() + yy, 81);
                                setVelX(paintball, xx);
                                setVelY(paintball, zz);
                                setVelZ(paintball, yy);

                                //set it's speed by multiplying xx,yy,zz
                                //example : (paintball, 2*xx);

                                return false;
                            }
                        });
                        button1.setText("Shoot!");
                        button1.setLayoutParams(new android.view.ViewGroup.LayoutParams(android.view.ViewGroup.LayoutParams.WRAP_CONTENT, android.view.ViewGroup.LayoutParams.WRAP_CONTENT));

                        // POPUP FOR THE FIRST BUTTON
                        popup1 = new android.widget.PopupWindow(button1, android.view.ViewGroup.LayoutParams.WRAP_CONTENT, android.view.ViewGroup.LayoutParams.WRAP_CONTENT);
                        popup1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                        popup1.showAtLocation(currentActivity.getWindow()
                            .getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.CENTER, 0, 0);



                        // SECOND BUTTON
                        var colorButton = MinecraftButton(18, true); // (textSize, enableSound); Set textSize to null for default text size. Set enableSound to false for no click sound
                        colorButton.setOnClickListener(new android.view.View.OnClickListener() {
                            onClick: function (v) {
								switch(currentPaintGunColor) {
									case "White": {
										//TODO
										currentPaintGunColor = "Orange";
										choosenColorText.setText(currentPaintGunColor);
										choosenColorText.setTextColor(android.graphics.Color.parseColor("#FFA500"));
										break;
									} case "Orange": {
										currentPaintGunColor = "Magenta";
										choosenColorText.setText(currentPaintGunColor);
										choosenColorText.setTextColor(android.graphics.Color.parseColor("#D80073"));
										break;
									} case "Magenta": {
										currentPaintGunColor = "Light Blue";
										choosenColorText.setText(currentPaintGunColor);
										choosenColorText.setTextColor(android.graphics.Color.parseColor("#ADD8E6"));
										break;
									} case "Light Blue": {
										currentPaintGunColor = "Yellow";
										choosenColorText.setText(currentPaintGunColor);
										choosenColorText.setTextColor(android.graphics.Color.parseColor("#FFFF00"));
										break;
									} case "Yellow": {
										currentPaintGunColor = "Lime Green";
										choosenColorText.setText(currentPaintGunColor);
										choosenColorText.setTextColor(android.graphics.Color.parseColor("#32CD32"));
										break;
									} case "Lime Green": {
										currentPaintGunColor = "Pink";
										choosenColorText.setText(currentPaintGunColor);
										choosenColorText.setTextColor(android.graphics.Color.parseColor("#FF69B4"));
										break;
									} case "Pink": {
										currentPaintGunColor = "Gray";
										choosenColorText.setText(currentPaintGunColor);
										choosenColorText.setTextColor(android.graphics.Color.parseColor("#808080"));
										break;
									} case "Gray": {
										currentPaintGunColor = "Light Gray";
										choosenColorText.setText(currentPaintGunColor);
										choosenColorText.setTextColor(android.graphics.Color.parseColor("#D3D3D3"));
										break;
									} case "Light Gray": {
										currentPaintGunColor = "Cyan";
										choosenColorText.setText(currentPaintGunColor);
										choosenColorText.setTextColor(android.graphics.Color.parseColor("#00FFFF"));
										break;
									} case "Cyan": {
										currentPaintGunColor = "Purple";
										choosenColorText.setText(currentPaintGunColor);
										choosenColorText.setTextColor(android.graphics.Color.parseColor("#800080"));
										break;
									} case "Purple": {
										currentPaintGunColor = "Blue";
										choosenColorText.setText(currentPaintGunColor);
										choosenColorText.setTextColor(android.graphics.Color.BLUE);
										break;
									} case "Blue": {
										currentPaintGunColor = "Brown";
										choosenColorText.setText(currentPaintGunColor);
										choosenColorText.setTextColor(android.graphics.Color.parseColor("#7F462C"));
										break;
									} case "Brown": {
										currentPaintGunColor = "Green";
										choosenColorText.setText(currentPaintGunColor);
										choosenColorText.setTextColor(android.graphics.Color.GREEN);
										break;
									} case "Green": {
										currentPaintGunColor = "Red";
										choosenColorText.setText(currentPaintGunColor);
										choosenColorText.setTextColor(android.graphics.Color.RED);
										break;
									} case "Red": {
										currentPaintGunColor = "Black";
										choosenColorText.setText(currentPaintGunColor);
										choosenColorText.setTextColor(android.graphics.Color.BLACK);
										break;
									} case "Black": {
										currentPaintGunColor = "White";
										choosenColorText.setText(currentPaintGunColor);
										choosenColorText.setTextColor(android.graphics.Color.WHITE);
										break;
									}
								}
								choosenColorText.setGravity(android.view.Gravity.CENTER);
                                return false;
                            }
                        });
                        var colorText = "<font color=\"red\">C</font><font color=\"yellow\">o</font><font color=\"green\">l</font><font color=\"blue\">o</font><font color=\"purple\">r</font>";
                        colorButton.setText(new android.text.Html.fromHtml(colorText));
                        colorButton.setLayoutParams(new android.view.ViewGroup.LayoutParams(android.view.ViewGroup.LayoutParams.WRAP_CONTENT, android.view.ViewGroup.LayoutParams.WRAP_CONTENT));

                        // POPUP FOR THE SECOND BUTTON
                        popup2 = new android.widget.PopupWindow(colorButton, android.view.ViewGroup.LayoutParams.WRAP_CONTENT, android.view.ViewGroup.LayoutParams.WRAP_CONTENT);
                        popup2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                        popup2.showAtLocation(currentActivity.getWindow()
                            .getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.CENTER, 0, 0);
							
							
							
                        // CHOOSEN COLOR TEXT
                        var choosenColorText = new android.widget.TextView(ctx);
						MinecraftButtonLibrary.addMinecraftStyleToTextView(choosenColorText)
                        choosenColorText.setTextSize(18);
                        choosenColorText.setOnClickListener(new android.view.View.OnClickListener() {
                            onClick: function (v) {
                                clientMessage("Debug message: Works!");

                                return false;
                            }
                        });
                        choosenColorText.setText(currentPaintGunColor);
								switch(currentPaintGunColor) {
									case "White": {
										choosenColorText.setTextColor(android.graphics.Color.WHITE);
										break;
									} case "Orange": {
										choosenColorText.setTextColor(android.graphics.Color.parseColor("#FFA500"));
										break;
									} case "Magenta": {
										choosenColorText.setTextColor(android.graphics.Color.parseColor("#D80073"));
										break;
									} case "Light Blue": {
										choosenColorText.setTextColor(android.graphics.Color.parseColor("#ADD8E6"));
										break;
									} case "Yellow": {
										choosenColorText.setTextColor(android.graphics.Color.parseColor("#FFFF00"));
										break;
									} case "Lime Green": {
										choosenColorText.setTextColor(android.graphics.Color.parseColor("#32CD32"));
										break;
									} case "Pink": {
										choosenColorText.setTextColor(android.graphics.Color.parseColor("#FF69B4"));
										break;
									} case "Gray": {
										choosenColorText.setTextColor(android.graphics.Color.parseColor("#808080"));
										break;
									} case "Light Gray": {
										choosenColorText.setTextColor(android.graphics.Color.parseColor("#D3D3D3"));
										break;
									} case "Cyan": {
										choosenColorText.setTextColor(android.graphics.Color.parseColor("#00FFFF"));
										break;
									} case "Purple": {
										choosenColorText.setTextColor(android.graphics.Color.parseColor("#800080"));
										break;
									} case "Blue": {
										choosenColorText.setTextColor(android.graphics.Color.BLUE);
										break;
									} case "Brown": {
										choosenColorText.setTextColor(android.graphics.Color.parseColor("#7F462C"));
										break;
									} case "Green": {
										choosenColorText.setTextColor(android.graphics.Color.GREEN);
										break;
									} case "Red": {
										choosenColorText.setTextColor(android.graphics.Color.RED);
										break;
									} case "Black": {
										choosenColorText.setTextColor(android.graphics.Color.BLACK);
										break;
									}
								}
                        choosenColorText.setLayoutParams(new android.view.ViewGroup.LayoutParams(android.view.ViewGroup.LayoutParams.WRAP_CONTENT, android.view.ViewGroup.LayoutParams.WRAP_CONTENT));

                        // POPUP FOR THE CHOOSEN COLOR TEXT
                        popupText = new android.widget.PopupWindow(choosenColorText, android.view.ViewGroup.LayoutParams.WRAP_CONTENT, android.view.ViewGroup.LayoutParams.WRAP_CONTENT);
                        popupText.setTouchable(false);
                        popupText.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                        popupText.showAtLocation(currentActivity.getWindow()
                            .getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP, 0, 20);
							
							
						
						// CROSSHAIR
                        var button3 = new android.widget.TextView(ctx); // (textSize, enableSound); Set enableSound to true or leave blank for click sound
                        button3.setOnClickListener(new android.view.View.OnClickListener() {
                            onClick: function (v) {
                                clientMessage("Debug message!");

                                return false;
                            }
                        });
                        button3.setText("+");
                        button3.setTextSize(40);
                        button3.setLayoutParams(new android.view.ViewGroup.LayoutParams(android.view.ViewGroup.LayoutParams.WRAP_CONTENT, android.view.ViewGroup.LayoutParams.WRAP_CONTENT));

                        // POPUP FOR THE FIRST BUTTON
                        popup3 = new android.widget.PopupWindow(button3, android.view.ViewGroup.LayoutParams.WRAP_CONTENT, android.view.ViewGroup.LayoutParams.WRAP_CONTENT);
                        popup3.setTouchable(false);
                        popup3.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                        popup3.showAtLocation(currentActivity.getWindow()
                            .getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, 0, 0);
                    } catch (err) {
                        clientMessage("Error: " + err);
                    }
                }
            }));
        }
    } else {
        if (displayingPopup1) {
            currentActivity.runOnUiThread(new java.lang.Runnable({
                run: function () {
                    try {
                        popup1.dismiss();
                        popup2.dismiss();
                        popup3.dismiss();
						popupText.dismiss();
                    } catch (e) { /*popup already dismissed*/ }
                }
            }));

            displayingPopup1 = false;
        }
    }
}

function leaveGame() {
	PaintModPE.saveMainSettings();
    currentActivity.runOnUiThread(new java.lang.Runnable({
        run: function () {
            try {
                popup1.dismiss();
                popup2.dismiss();
            } catch (e) { /*popup already dismissed*/ }
        }
    }));
    displayingPopup1 = false;
}

function convertDpToPixel(dp) {
    var metrics = new android.util.DisplayMetrics();
    MinecraftButtonLibrary.context.getWindowManager()
        .getDefaultDisplay()
        .getMetrics(metrics);
    var density = metrics.density;

    return (dp * density);
}


// Library version: 1.2.4
// Made by Dennis Motta, also known as Desno365
// https://github.com/Desno365/Minecraft-Button-Library

/*
	The MIT License (MIT)
	Copyright (c) 2015 Dennis Motta 
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/

var MinecraftButtonLibrary = {};

// Customization
// These are the default values of the library, you can change them to make the buttons look how you want to.
MinecraftButtonLibrary.defaultButtonPadding = 8;
MinecraftButtonLibrary.defaultButtonTextSize = 16;
MinecraftButtonLibrary.defaultButtonTextLineSpacing = 4;
MinecraftButtonLibrary.defaultButtonTextColor = "#FFDDDDDD";
MinecraftButtonLibrary.defaultButtonTextPressedColor = "#FFFBFF97";
MinecraftButtonLibrary.defaultButtonTextShadowColor = "#FF292929";

// Variables
MinecraftButtonLibrary.Resources = {};
MinecraftButtonLibrary.ProcessedResources = {};

MinecraftButtonLibrary.context = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
MinecraftButtonLibrary.metrics = new android.util.DisplayMetrics();
MinecraftButtonLibrary.context.getWindowManager().getDefaultDisplay().getMetrics(MinecraftButtonLibrary.metrics);
MinecraftButtonLibrary.sdcard = new android.os.Environment.getExternalStorageDirectory();
MinecraftButtonLibrary.LOG_TAG = "Minecraft Button Library ";

MinecraftButtonLibrary.ProcessedResources.font = null;
MinecraftButtonLibrary.ProcessedResources.mcNormalNineDrawable = null;
MinecraftButtonLibrary.ProcessedResources.mcPressedNineDrawable = null;

//########################################################################################################################################################
// LIBRARY
//########################################################################################################################################################

// MinecraftButton(int textSize, bool enableSound, string customTextColor)
// set an argument null if you want to use the default value
function MinecraftButton(textSize, enableSound, customTextColor)
{
	if(textSize == null)
		textSize = MinecraftButtonLibrary.defaultButtonTextSize;
	if(enableSound == null)
		enableSound = true;
	if(customTextColor == null)
		customTextColor = MinecraftButtonLibrary.defaultButtonTextColor;

	var button = new android.widget.Button(MinecraftButtonLibrary.context);
	button.setTextSize(textSize);
	button.setOnTouchListener(new android.view.View.OnTouchListener()
	{
		onTouch: function(v, motionEvent)
		{
			MinecraftButtonLibrary.onTouch(v, motionEvent, enableSound, customTextColor);
			return false;
		}
	});
	if (android.os.Build.VERSION.SDK_INT >= 14)
		button.setAllCaps(false);
	MinecraftButtonLibrary.setButtonBackground(button, MinecraftButtonLibrary.ProcessedResources.mcNormalNineDrawable);
	button.setTag(false); // is pressed?
	button.setSoundEffectsEnabled(false);
	button.setGravity(android.view.Gravity.CENTER);
	button.setTextColor(android.graphics.Color.parseColor(customTextColor));
	button.setPadding(MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding));
	MinecraftButtonLibrary.addMinecraftStyleToTextView(button);

	return button;
}

// ######### BUTTON UTILS functions #########
MinecraftButtonLibrary.addMinecraftStyleToTextView = function(textview)
{
	// works also for subclasses of TextView
	// you must set the text size before calling this function!

	textview.setTypeface(MinecraftButtonLibrary.ProcessedResources.font);
	textview.setPaintFlags(textview.getPaintFlags() | android.graphics.Paint.SUBPIXEL_TEXT_FLAG);
	textview.setLineSpacing(MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonTextLineSpacing), 1);
	if (android.os.Build.VERSION.SDK_INT >= 19) // KitKat
		textview.setShadowLayer(1, Math.round((textview.getLineHeight() - MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonTextLineSpacing)) / 8), Math.round((textview.getLineHeight() - MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonTextLineSpacing)) / 8), android.graphics.Color.parseColor(MinecraftButtonLibrary.defaultButtonTextShadowColor));
	else
		textview.setShadowLayer(0.0001, Math.round((textview.getLineHeight() - MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonTextLineSpacing)) / 8), Math.round((textview.getLineHeight() - MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonTextLineSpacing)) / 8), android.graphics.Color.parseColor(MinecraftButtonLibrary.defaultButtonTextShadowColor));

}

MinecraftButtonLibrary.setButtonBackground = function(button, background)
{
	if (android.os.Build.VERSION.SDK_INT >= 16)
		button.setBackground(background);
	else
		button.setBackgroundDrawable(background);
}

MinecraftButtonLibrary.convertDpToPixel = function(dp)
{
	var density = MinecraftButtonLibrary.metrics.density;

	return (dp * density);
}

MinecraftButtonLibrary.onTouch = function(v, motionEvent, enableSound, customTextColor)
{
	var action = motionEvent.getActionMasked();
	if(action == android.view.MotionEvent.ACTION_DOWN)
	{
		// button pressed
		MinecraftButtonLibrary.changeToPressedState(v);
	}
	if(action == android.view.MotionEvent.ACTION_CANCEL || action == android.view.MotionEvent.ACTION_UP)
	{
		// button released
		MinecraftButtonLibrary.changeToNormalState(v, customTextColor);
		
		var rect = new android.graphics.Rect(v.getLeft(), v.getTop(), v.getRight(), v.getBottom());
		if(rect.contains(v.getLeft() + motionEvent.getX(), v.getTop() + motionEvent.getY())) // detect if the event happens inside the view
		{
			// onClick will run soon

			// play sound
			if(enableSound)
				Level.playSoundEnt(Player.getEntity(), "random.click", 100, 0);
		}
	}
	if(action == android.view.MotionEvent.ACTION_MOVE)
	{
		var rect = new android.graphics.Rect(v.getLeft(), v.getTop(), v.getRight(), v.getBottom());
		if(rect.contains(v.getLeft() + motionEvent.getX(), v.getTop() + motionEvent.getY())) // detect if the event happens inside the view
		{
			// pointer inside the view
			if(v.getTag() == false)
			{
				// restore pressed state
				v.setTag(true); // is pressed?

				MinecraftButtonLibrary.changeToPressedState(v);
			}
		} else
		{
			// pointer outside the view
			if(v.getTag() == true)
			{
				// restore pressed state
				v.setTag(false); // is pressed?

				MinecraftButtonLibrary.changeToNormalState(v, customTextColor);
			}
		}
	}
}

MinecraftButtonLibrary.changeToNormalState = function(button, customTextColor)
{
	MinecraftButtonLibrary.setButtonBackground(button, MinecraftButtonLibrary.ProcessedResources.mcNormalNineDrawable);
	button.setTextColor(android.graphics.Color.parseColor(customTextColor));
	// reset pressed padding
	button.setPadding(MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding));
}

MinecraftButtonLibrary.changeToPressedState = function(button)
{
	MinecraftButtonLibrary.setButtonBackground(button, MinecraftButtonLibrary.ProcessedResources.mcPressedNineDrawable);
	button.setTextColor(android.graphics.Color.parseColor(MinecraftButtonLibrary.defaultButtonTextPressedColor));
	// make the effect of a pressed button with padding
	button.setPadding(MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding) + MinecraftButtonLibrary.convertDpToPixel(2), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding) - MinecraftButtonLibrary.convertDpToPixel(2));
}
// ######### END - BUTTON UTILS functions #########


// ######### CREATE NINE PATCH functions #########
MinecraftButtonLibrary.createNinePatchDrawables = function()
{
	var mcButtonNormalBitmap = MinecraftButtonLibrary.getMinecraftButtonBitmap();
	var mcButtonPressedBitmap = MinecraftButtonLibrary.getMinecraftButtonPressedBitmap();

	var mcNormalNinePatch = new android.graphics.NinePatch(mcButtonNormalBitmap, mcButtonNormalBitmap.getNinePatchChunk(), null);
	var mcPressedNinePatch = new android.graphics.NinePatch(mcButtonPressedBitmap, mcButtonPressedBitmap.getNinePatchChunk(), null);

	// here is used a deprecated method that doesn't deals with density
	//noinspection deprecation
	MinecraftButtonLibrary.ProcessedResources.mcNormalNineDrawable = new android.graphics.drawable.NinePatchDrawable(mcNormalNinePatch);
	MinecraftButtonLibrary.ProcessedResources.mcNormalNineDrawable.setFilterBitmap(false);
	//noinspection deprecation
	MinecraftButtonLibrary.ProcessedResources.mcPressedNineDrawable = new android.graphics.drawable.NinePatchDrawable(mcPressedNinePatch);
	MinecraftButtonLibrary.ProcessedResources.mcPressedNineDrawable.setFilterBitmap(false);
}

MinecraftButtonLibrary.getMinecraftButtonBitmap = function()
{
	var density = MinecraftButtonLibrary.metrics.density;

	if(density < 1)
	{
		ModPE.log(MinecraftButtonLibrary.LOG_TAG + "Density: " + density + ", ldpi");
		return MinecraftButtonLibrary.decodeImageFromBase64(MinecraftButtonLibrary.Resources.minecraftButtonStateNormalLDPI);
	}
	if(density >= 1 && density < 1.5)
	{
		ModPE.log(MinecraftButtonLibrary.LOG_TAG + "Density: " + density + ", mdpi");
		return MinecraftButtonLibrary.decodeImageFromBase64(MinecraftButtonLibrary.Resources.minecraftButtonStateNormalMDPI);
	}
	if(density >= 1.5 && density < 2)
	{
		ModPE.log(MinecraftButtonLibrary.LOG_TAG + "Density: " + density + ", hdpi");
		return MinecraftButtonLibrary.decodeImageFromBase64(MinecraftButtonLibrary.Resources.minecraftButtonStateNormalHDPI);
	}
	if(density >= 2 && density < 2.5)
	{
		ModPE.log(MinecraftButtonLibrary.LOG_TAG + "Density: " + density + ", xhdpi");
		return MinecraftButtonLibrary.decodeImageFromBase64(MinecraftButtonLibrary.Resources.minecraftButtonStateNormalXHDPI);
	}
	if(density >= 2.5)
	{
		ModPE.log(MinecraftButtonLibrary.LOG_TAG + "Density: " + density + ", xxhdpi");
		return MinecraftButtonLibrary.decodeImageFromBase64(MinecraftButtonLibrary.Resources.minecraftButtonStateNormalXXHDPI);
	}

	ModPE.log(MinecraftButtonLibrary.LOG_TAG + "Error: " + density + ", xhdpi");
	return MinecraftButtonLibrary.decodeImageFromBase64(MinecraftButtonLibrary.Resources.minecraftButtonStateNormalXHDPI);
}

MinecraftButtonLibrary.getMinecraftButtonPressedBitmap = function()
{
	var density = MinecraftButtonLibrary.metrics.density;

	if(density < 1)
	{
		ModPE.log(MinecraftButtonLibrary.LOG_TAG + "Density: " + density + ", ldpi");
		return MinecraftButtonLibrary.decodeImageFromBase64(MinecraftButtonLibrary.Resources.minecraftButtonStatePressedLDPI);
	}
	if(density >= 1 && density < 1.5)
	{
		ModPE.log(MinecraftButtonLibrary.LOG_TAG + "Density: " + density + ", mdpi");
		return MinecraftButtonLibrary.decodeImageFromBase64(MinecraftButtonLibrary.Resources.minecraftButtonStatePressedMDPI);
	}
	if(density >= 1.5 && density < 2)
	{
		ModPE.log(MinecraftButtonLibrary.LOG_TAG + "Density: " + density + ", hdpi");
		return MinecraftButtonLibrary.decodeImageFromBase64(MinecraftButtonLibrary.Resources.minecraftButtonStatePressedHDPI);
	}
	if(density >= 2 && density < 2.5)
	{
		ModPE.log(MinecraftButtonLibrary.LOG_TAG + "Density: " + density + ", xhdpi");
		return MinecraftButtonLibrary.decodeImageFromBase64(MinecraftButtonLibrary.Resources.minecraftButtonStatePressedXHDPI);
	}
	if(density >= 2.5)
	{
		ModPE.log(MinecraftButtonLibrary.LOG_TAG + "Density: " + density + ", xxhdpi");
		return MinecraftButtonLibrary.decodeImageFromBase64(MinecraftButtonLibrary.Resources.minecraftButtonStatePressedXXHDPI);
	}

	ModPE.log(MinecraftButtonLibrary.LOG_TAG + "Error: " + density + ", xhdpi");
	return MinecraftButtonLibrary.decodeImageFromBase64(MinecraftButtonLibrary.Resources.minecraftButtonStatePressedXHDPI);
}

MinecraftButtonLibrary.decodeImageFromBase64 = function(base64String)
{
	var byteArray = android.util.Base64.decode(base64String, 0);
	return android.graphics.BitmapFactory.decodeByteArray(byteArray, 0, byteArray.length);
}
// ######### END - CREATE NINE PATCH functions #########


// ######### CREATE TYPEFACE functions #########
MinecraftButtonLibrary.createTypeface = function()
{
	MinecraftButtonLibrary.writeFileFromByteArray(android.util.Base64.decode(MinecraftButtonLibrary.Resources.base64Font, 0), MinecraftButtonLibrary.sdcard + "/minecraft.ttf");
	MinecraftButtonLibrary.ProcessedResources.font = android.graphics.Typeface.createFromFile(MinecraftButtonLibrary.sdcard + "/minecraft.ttf");
	MinecraftButtonLibrary.deleteFile(MinecraftButtonLibrary.sdcard + "/minecraft.ttf");
}

MinecraftButtonLibrary.writeFileFromByteArray = function(byteArray, path)
{
	var file = new java.io.File(path);
	if(file.exists())
		file.delete();
	file.createNewFile();
	var stream = new java.io.FileOutputStream(file);
	stream.write(byteArray);
	stream.close();
	byteArray = null;
}
// ######### END - CREATE TYPEFACE functions #########


// ######### UTILS functions #########
MinecraftButtonLibrary.removeResources = function()
{
	MinecraftButtonLibrary.Resources.minecraftButtonStateNormalLDPI = null;
	MinecraftButtonLibrary.Resources.minecraftButtonStateNormalMDPI = null;
	MinecraftButtonLibrary.Resources.minecraftButtonStateNormalHDPI = null;
	MinecraftButtonLibrary.Resources.minecraftButtonStateNormalXHDPI = null;
	MinecraftButtonLibrary.Resources.minecraftButtonStateNormalXXHDPI = null;
	MinecraftButtonLibrary.Resources.minecraftButtonStatePressedLDPI = null;
	MinecraftButtonLibrary.Resources.minecraftButtonStatePressedMDPI = null;
	MinecraftButtonLibrary.Resources.minecraftButtonStatePressedHDPI = null;
	MinecraftButtonLibrary.Resources.minecraftButtonStatePressedXHDPI = null;
	MinecraftButtonLibrary.Resources.minecraftButtonStatePressedXXHDPI = null;

	MinecraftButtonLibrary.Resources.base64Font = null;
}

MinecraftButtonLibrary.deleteFile = function(path)
{
	var file = new java.io.File(path);

	if(file.isDirectory())
	{
		var directoryFiles = file.listFiles();
		for(var i in directoryFiles)
		{
			deleteFile(directoryFiles[i].getAbsolutePath());
		}
		file.delete();
	}

	if(file.isFile())
		file.delete();
}
// ######### END - UTILS functions #########


//########################################################################################################################################################
// RESOURCES IN BASE64
//########################################################################################################################################################

// backgrounds
MinecraftButtonLibrary.Resources.minecraftButtonStateNormalLDPI = "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAGG5wT2wAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAADYHRhkAAAAVG5wVGMAAgIJIAAAACgAAAAAAAACAAAAAgAAAAMAAAACMAAAAAAAAAEAAAAHAAAAAgAAAAf/vLGr/7yxqwAAAAH/vLGr/5WGgQAAAAH/cmVnAAAAAf8oJyoMgs1WAAAASUlEQVQY02Pcs3H1fwY8gAmf5NYtexhYGBgYGG5evYZVwfZDh/GbwPD/PwEFjIwEFBByJAPDfwaWbVv2MGw7eIiBgRFuLrIdDADq5BFxvezsVAAAAABJRU5ErkJggg==";
MinecraftButtonLibrary.Resources.minecraftButtonStateNormalMDPI = "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGG5wT2wAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAADYHRhkAAAAVG5wVGMAAgIJIAAAACgAAAAAAAAEAAAABAAAAAYAAAAEMAAAAAAAAAIAAAAOAAAABAAAAA7/vLGr/7yxqwAAAAH/vLGr/5WGgQAAAAH/cmVnAAAAAf8oJyqdu2NqAAAAT0lEQVQ4y2Pcs3H1fwYKABMDhYCFXI1bt+yhsgtuXr1Gksbthw4PcBgw/P8/0C5gZKSOCwbeAPLDgIFasbANmqa3HTwEDV2M4MYVDdRxAQBscxGJWBLxyQAAAABJRU5ErkJggg==";
MinecraftButtonLibrary.Resources.minecraftButtonStateNormalHDPI = "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGG5wT2wAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAADYHRhkAAAAVG5wVGMAAgIJIAAAACgAAAAAAAAGAAAABgAAAAkAAAAGMAAAAAAAAAMAAAAVAAAABgAAABX/vLGr/7yxqwAAAAH/vLGr/5WGgQAAAAH/cmVnAAAAAf8oJyqPt1DfAAAAV0lEQVRIx2Pcs3H1fwYaAiYGGgOaW8BCC0O3btkzXIPo5tVrVDF0+6HDo6mIAPj/fzSICABGxmEURKMWDFAqYhhWGW0bUu2z7eAhpMyCMxcRk9OGURABAH/ZEZn4HdB3AAAAAElFTkSuQmCC";
MinecraftButtonLibrary.Resources.minecraftButtonStateNormalXHDPI = "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGG5wT2wAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAADYHRhkAAAAVG5wVGMAAgIJIAAAACgAAAAAAAAIAAAACAAAAAwAAAAIMAAAAAAAAAQAAAAcAAAACAAAABz/vLGr/7yxqwAAAAH/vLGr/5WGgQAAAAH/cmVnAAAAAf8oJypkuTlTAAAAZUlEQVRYw2Pcs3H1f4YBBEwMAwxGHcBCbwu3btkzGgWDPA3cvHqNphZuP3R4NApGeDnA8P//aBSM9DTAyDgaBaMOGHXASC8HGEbrgsGWBrahtdO3HTyEVnYTLNxJrQxGo2BwOQAAWckRqcYME3kAAAAASUVORK5CYII=";
MinecraftButtonLibrary.Resources.minecraftButtonStateNormalXXHDPI = "iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGG5wT2wAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAADYHRhkAAAAVG5wVGMAAgIJIAAAACgAAAAAAAAMAAAADAAAABIAAAAMMAAAAAAAAAYAAAAqAAAADAAAACr/vLGr/7yxqwAAAAH/vLGr/5WGgQAAAAH/cmVnAAAAAf8oJypAoV45AAAAg0lEQVRo3u3ZwQmAMAyF4UTcfxFPgtZLL9YZFJwmTtCDINQ0/5sgHzxCQzXPk4njDOI8AABEB4xeBl2XTIUAAAi1he7z+tWgWzmoEAAAvIVaxowKAQDAFmoZVSoEAAAAAAAAAIj7FhIuMgAA+txCqfL3lPZSuYxen1JfnWRUCACAHgEPIUcRyZ0dVsEAAAAASUVORK5CYII=";
MinecraftButtonLibrary.Resources.minecraftButtonStatePressedLDPI = "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAGG5wT2wAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAADYHRhkAAAAVG5wVGMAAgIJIAAAACgAAAAAAAACAAAAAgAAAAIAAAADMAAAAAAAAAEAAAAHAAAAAQAAAAb/KCcqAAAAAf9yZWcAAAABAAAAAQAAAAEAAAABAAAAAQAAAAGZYAV4AAAAb0lEQVQY012OQQqDMBRE34Scwp1QsHgHs7CbGnv9UjzNuIjRxuHD/wzzhq/nMBrKIIENAhA5TUQwS0pUiZIFeK8zEVSAQy5Vpxdq3k3HdYbLq2xTRwBht2T9QxJxSRP588I2d9kmPvqO7ftryb+9AxX7IG5YZYu3AAAAAElFTkSuQmCC";
MinecraftButtonLibrary.Resources.minecraftButtonStatePressedMDPI = "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGG5wT2wAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAADYHRhkAAAAVG5wVGMAAgIJIAAAACgAAAAAAAAEAAAABAAAAAQAAAAGMAAAAAAAAAIAAAAOAAAAAgAAAAz/KCcqAAAAAf9yZWcAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEDO+tuAAAAkklEQVQ4y62SwQrCMAyGvwyfwpswcOwd7EEvbu71Zfg08ZIgi10ZtLm0CSn5/r+R4ToqAGwPRCy3gqV+mdMNgI7KOPnIKaVsgw/WUH++7s0IZCsxhP5Myfa184CgVf5cyJvTgiDarUYixV/wQrtfUC1rjiRim1pPMNlOz8vDSPTQQ++rJ+gvZwA+77WseSevJvgCGagihHTV1j0AAAAASUVORK5CYII=";
MinecraftButtonLibrary.Resources.minecraftButtonStatePressedHDPI = "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGG5wT2wAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAADYHRhkAAAAVG5wVGMAAgIJIAAAACgAAAAAAAAGAAAABgAAAAYAAAAJMAAAAAAAAAMAAAAVAAAAAwAAABL/KCcqAAAAAf9yZWcAAAABAAAAAQAAAAEAAAABAAAAAQAAAAGqizz1AAAAl0lEQVRIx92VwQqAIAyGXfQU3YKg6B3yUJe0Xj+ip1k3+QOHGXhoO+l0Ch/flIZ+ZBMiPjREkIcFSOPE2ymMK1M4il9QIwtnbbIAqbCwZ91mXYgoLoUQ/NQrWavMIiMYQqJHadVUIJK6iAEXZTUaLihrNOY8WyRcBM+7AkQOfh+/L4CLPx+KtQoQdW0TJtdx5tnyIv9/RDcytSKUL7bTXAAAAABJRU5ErkJggg==";
MinecraftButtonLibrary.Resources.minecraftButtonStatePressedXHDPI = "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGG5wT2wAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAADYHRhkAAAAVG5wVGMAAgIJIAAAACgAAAAAAAAIAAAACAAAAAgAAAAMMAAAAAAAAAQAAAAcAAAABAAAABj/KCcqAAAAAf9yZWcAAAABAAAAAQAAAAEAAAABAAAAAQAAAAHs/TEDAAAAqUlEQVRYw+2WwQqAIAyGXfQU3YKg6B3yUJe0Xj+ip1ln/8AhBnrYbroxhe/frzSNM5sg4ktDBHkogDRueLsE68YUDr1Ai5CdtUkNEDkL9fuxKoLqNEDxMRaCv0aR1E8R1OcDRphrEp0gzTgUQQ0akMydQROU9RZggSKo7y1gzptzSRMEf0pFUF4DDv7p/txAE/zrgdhPEZTXwNB3wcZz3XlznphXBMUv8AJ9bSKkEsE9twAAAABJRU5ErkJggg==";
MinecraftButtonLibrary.Resources.minecraftButtonStatePressedXXHDPI = "iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGG5wT2wAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAADYHRhkAAAAVG5wVGMAAgIJIAAAACgAAAAAAAALAAAACwAAAAsAAAARMAAAAAAAAAYAAAAqAAAABgAAACT/KCcqAAAAAf9yZWcAAAABAAAAAQAAAAEAAAABAAAAAQAAAAGV/cSjAAAAzElEQVRo3u2ZQQrCMBBFM9JTuBMEi3cwC93Y6vVFPM14gfzFQIpMfLNMJk0ffD5/WptPZy/Nii0XM9EvDoh2tbHWS3N9V5IXAAD8O8CkbGWptcsFymw8+Jz744qEAABgUBeyWFQJluvw1OVeJAQAAKNmoRLMMBZOQ31CFRICAID8LhQdpVy4UyzbRCcydQAJAQDAqBOZ+7bZJupOJr5+IyEAAMjuQov497Q+b8Kd/Ccvqu5FQgAAkN2Fjod9c+Pzem+bbTr1IyEAAEheX2f8IsSeFAnbAAAAAElFTkSuQmCC";

// font
MinecraftButtonLibrary.Resources.base64Font = "AAEAAAANAIAAAwBQRkZUTV4dbQIAAE08AAAAHEdERUYA/QAEAABNHAAAACBPUy8yZi731QAAAVgAAABgY21hcBnSMe8AAAT4AAABwmdhc3D//wADAABNFAAAAAhnbHlmMIJYzgAACGAAADXkaGVhZAbv/L0AAADcAAAANmhoZWEIAwLRAAABFAAAACRobXR4LIADgAAAAbgAAANAbG9jYV+9UiwAAAa8AAABom1heHAA2wAoAAABOAAAACBuYW1l99attAAAPkQAAAzDcG9zdC5WmZcAAEsIAAACDAABAAAAAQAADPyv718PPPUACwQAAAAAANGoXGAAAAAA0ahcYAAA/4AEgAOAAAAACAACAAAAAAAAAAEAAAOA/4AAAAUAAAD9gASAAAEAAAAAAAAAAAAAAAAAAADQAAEAAADQACgACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgJnAZAABQAEAgACAAAA/8ACAAIAAAACAAAzAMwAAAAABAAAAAAAAACAAAAHAAAACgAAAAAAAAAARlNUUgBAAA0hIgOA/4AAAAOAAIAAAAH7AAAAAAKAA4AAAAAgAAEBAAAAAAAAAAAAAAABAAAAAQAAAAIAAAACgAAAAwAAAAMAAAADAAAAAQAAAAKAAAACgAAAAoAAAAMAAAABAAAAAwAAAAEAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAEAAAABAAAAAoAAAAMAAAACgAAAAoAAAAOAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAIAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAIAAAADAAAAAgAAAAMAAAADAAAAAYAAAAMAAAADAAAAAwAAAAMAAAADAAAAAoAAAAMAAAADAAAAAQAAAAMAAAACgAAAAYAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAACAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAoAAAAEAAAACgAAAA4AAAAEAAAACgAAAAoAAAAIAAAADAAAAAQAAAAMAAAADgAAAAgAAAAMAAAADAAAAAoAAgAOAAAADAAAAAgAAAAMAAAABgAAAAYAAAAMAAYADAAAAAwAAAAEAAAACgACAAQAAAAIAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAOAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAKAAAADAACAAwAAAAIAAAADgAAAA4AAAAMAAAADAAAAAwAAAAOAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADgAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAABgAAAAYAAAAMAAAACgACAA4AAAAMAAAADAAAAAwAAAAOAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAA4AAAAGAAAABgAAAAYAAAAGAAAACgAAAAoAAAAKAAAACAAAAAYAAAAMAAAAAgAAAAYAAAAMAAAAFAAAAAAAAAwAAAAMAAAAcAAEAAAAAALwAAwABAAAAHAAEAKAAAAAkACAABAAEAAAADQB+AKYA3gDvAP8BUwF4IBQgHiAgICIgJiA6IKwhIv//AAAAAAANACAAoQCoAOAA8QFSAXggFCAYICAgIiAmIDkgrCEi//8AAf/1/+P/wf/A/7//vv9s/0jgreCq4KngqOCl4JPgIt+tAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEGAAABAAAAAAAAAAECAAAAAgAAAAAAAAAAAAAAAAAAAAEAAAMEBQYHCAkKCwwNDg8QERITFBUWFxgZGhscHR4fICEiIyQlJicoKSorLC0uLzAxMjM0NTY3ODk6Ozw9Pj9AQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpbXF1eX2BhAISFh4mRlpygn6GjoqSmqKepqqyrra6vsbCytLO4t7m6yXBjZADKdgBuac90aACGmABxAABmdQAAAAAAanoApbZ/YmwAAAAAa3vLAICDlb6/AMHGx8LDtQC9wADOzM0AAAB3xMgAgoqBi4iNjo+Mk5QAkpqbmQAAAG8AAAB4AAAAAAAAAAAqACoAKgAqADwAUACAAK4A4AEgAS4BUgF2AZoBsgG+AcoB1gH4AigCPgJwAqQCyALuAxYDNANqA5YDqgO+A+wEAAQsBFgEfgSaBMAE5AT+BRQFKAVKBWIFdgWOBbwFygXuBhIGMgZOBnoGnAbIBtoG9AccB0AHegeeB8YH2AgACBIINAhACEwIbAiQCLQI1gj2CRIJNglWCWgJiAmyCcQJ6An+Ch4KRApoCogKqgrGCtwLAAsaC1ILcguSC7gLxAvqDAgMGgw0DFQMdgyqDL4M7A0MDR4NXA1sDXoNng2qDb4N3A3wDgIOEA4kDkQOUA5iDnAOhA7ADvoPLg9mD44Psg/UEAIQNBBcEH4QoBDSEPARDhE6EVwReBGUEbwR3BIAEjISWhKCErQS6hMWE04TeBOYE7gT5BQKFDYUXBSCFKgU2hUQFTwVYhWOFcAV6BYOFkAWbBaAFpIWshbKFvIXGhdCF3QXqhfWF/AYGBg0GFAYeBiYGMAY5hkSGTIZYBmQGZwZrhnAGdIZ5hoEGiIaQBpWGmQaehqQGqYa0BryAAAABQAAAAADgAOAAAMABwALABIAFgAAJTUjFSU1IRU3NSMVJTUjIgcGFQERIREBwI8BHf7jj48BHY48KSr+zwOAf46Opo+Ppo+Pp40pKjr9jgOA/IAAAgAAAAAAgAOAAAMABwAAMTUzFQMRMxGAgICAgAEAAoD9gAAAAgAAAgABgAOAAAMABwAAGQEzETMRMxGAgIACAAGA/oABgP6AAAAAAAIAAAAAAoADgAADAB8AAAE1IxUDESM1MzUjNTMRMxEzETMRMxUjFTMVIxEjESMRAYCAgICAgICAgICAgICAgIABgICA/oABAICAgAEA/wABAP8AgICA/wABAP8AAAAAAAUAAAAAAoADgAAHAAsADwATABsAACE1ITUhFSMVEzUzFSU1IRUlNTMVPQEzNTMVIRUBAP8AAgCAgID+AAGA/gCAgIABAICAgIABAICAgICAgICAgICAgIAAAAAABwAAAAACgAOAAAMABwALAA8AEwAXABsAADE1MxUhETMRJREzGQE1MxU1ETMRJREzESU1MxWAAYCA/gCAgID+AIABgICAgAEA/wCAAQD/AAEAgICAAQD/AIABAP8AgICAAAAAAAgAAAAAAoADgAADAAcACwAPABsAHwAjACcAADM1IRUzNTMVJREzEQE1MxUBNSM1IzUzNTMRMxEBNTMVMzUzFSU1MxWAAQCAgP2AgAGAgP8AgICAgID+gICAgP8AgICAgICAAQD/AAEAgID/AICAgID/AP8AAgCAgICAgICAAAAAAQAAAgAAgAOAAAMAABkBMxGAAgABgP6AAAAAAAUAAAAAAgADgAADAAcACwAPABMAACE1IRUlNTMVJREzGQE1MxU9ASEVAQABAP6AgP8AgIABAICAgICAgAGA/oABgICAgICAAAUAAAAAAgADgAADAAcACwAPABMAADE1IRU9ATMVNREzEQE1MxUlNSEVAQCAgP8AgP6AAQCAgICAgIABgP6AAYCAgICAgAAAAAUAAAEAAgACgAADAAcACwAPABMAABE1MxUhNTMVJTUhFSU1MxUhNTMVgAEAgP6AAQD+gIABAIABAICAgICAgICAgICAgAAAAAEAAACAAoADAAALAAAlESE1IREzESEVIREBAP8AAQCAAQD/AIABAIABAP8AgP8AAAEAAP+AAIABAAADAAAVETMRgIABgP6AAAEAAAGAAoACAAADAAARNSEVAoABgICAAAEAAAAAAIABAAADAAAxETMRgAEA/wAAAAUAAAAAAoADgAADAAcACwAPABMAADE1MxU1ETMZATUzFTURMxkBNTMVgICAgICAgIABAP8AAQCAgIABAP8AAQCAgAAABQAAAAACgAOAAAMABwAPABcAGwAAMzUhFQE1MxUBETMRMxUjFSERIzUzNTMRATUhFYABgP8AgP6AgICAAYCAgID+AAGAgIABgICA/wACgP6AgIABgICA/YACgICAAAAAAQAAAAACgAOAAAsAADE1IREjNTM1MxEhFQEAgICAAQCAAgCAgP0AgAAAAAAGAAAAAAKAA4AABwALAA8AEwAXABsAADERMxUhNTMRATUzFT0BIRUBNTMVBREzEQE1IRWAAYCA/gCAAQD+AIABgID+AAGAAQCAgP8AAQCAgICAgAEAgICAAQD/AAEAgIAAAAAABwAAAAACgAOAAAMABwALAA8AEwAXABsAADM1IRUlNTMVIREzEQE1IRUBNTMVBREzEQE1IRWAAYD+AIABgID+gAEA/gCAAYCA/gABgICAgICAAQD/AAEAgIABAICAgAEA/wABAICAAAADAAAAAAKAA4AAAwAHABMAABM1MxU9ATMVExEhETMVIREjNSERgICAgP4AgAGAgAEAAgCAgICAgP2AAQABAIABgID8gAAAAAAEAAAAAAKAA4AAAwAHAAsAEwAAMzUhFSU1MxUhETMRAREhFSEVIRWAAYD+AIABgID9gAKA/gABgICAgICAAYD+gAGAAYCAgIAAAAAABQAAAAACgAOAAAMABwAPABMAFwAAMzUhFTURMxEhETMVIRUhGQE1MxU9ASEVgAGAgP2AgAGA/oCAAQCAgIABAP8AAgCAgP8AAgCAgICAgAADAAAAAAKAA4AAAwAHAA8AACERMxkBNTMVNREhFSMRIREBAICA/oCAAoABgP6AAYCAgIABAIABAP6AAAAHAAAAAAKAA4AAAwAHAAsADwATABcAGwAAMzUhFSURMxEhETMRATUhFSURMxEhETMRATUhFYABgP4AgAGAgP4AAYD+AIABgID+AAGAgICAAQD/AAEA/wABAICAgAEA/wABAP8AAQCAgAAAAAAFAAAAAAKAA4AAAwAHAAsAEwAXAAAzNSEVPQEzFQERMxEBNSE1IREzEQE1IRWAAQCA/gCAAYD+gAGAgP4AAYCAgICAgAGAAQD/AP8AgIABAP4AAgCAgAAAAgAAAAAAgAKAAAMABwAAMREzEQMRMxGAgIABAP8AAYABAP8AAAAAAAIAAP+AAIACgAADAAcAABURMxEDETMRgICAgAGA/oACAAEA/wAAAAAHAAAAAAIAA4AAAwAHAAsADwATABcAGwAAITUzFSU1MxUlNTMVJTUzFT0BMxU9ATMVPQEzFQGAgP8AgP8AgP8AgICAgICAgICAgICAgICAgICAgICAgICAAAAAAAIAAACAAoACAAADAAcAAD0BIRUBNSEVAoD9gAKAgICAAQCAgAAAAAAHAAAAAAIAA4AAAwAHAAsADwATABcAGwAAMTUzFT0BMxU9ATMVPQEzFSU1MxUlNTMVJTUzFYCAgID/AID/AID/AICAgICAgICAgICAgICAgICAgICAgAAABgAAAAACgAOAAAMABwALAA8AEwAXAAAhNTMVAzUzFT0BMxUBNTMVBREzEQE1IRUBAICAgID+AIABgID+AAGAgIABAICAgICAAQCAgIABAP8AAQCAgAAAAAQAAAAAAwADgAADAAcADwATAAAzNSEVJREzETcRIREzETMRATUhFYACAP2AgIABAICA/YACAICAgAKA/YCAAYD/AAGA/gACAICAAAACAAAAAAKAA4AACwAPAAAxETMVITUzESMRIRkBNSEVgAGAgID+gAGAAwCAgP0AAgD+AAMAgIAAAAMAAAAAAoADgAADAAcAEwAAJREzEQM1MxUBESEVIRUhFSERIRUCAICAgP2AAgD+gAGA/oABgIABgP6AAgCAgP2AA4CAgID+gIAAAAAFAAAAAAKAA4AAAwAHAAsADwATAAAzNSEVPQEzFSERMxEBNTMVJTUhFYABgID9gIABgID+AAGAgICAgIACgP2AAgCAgICAgAACAAAAAAKAA4AAAwALAAAlETMRBREhFSERIRUCAID9gAIA/oABgIACgP2AgAOAgP2AgAAAAQAAAAACgAOAAAsAADERIRUhFSEVIREhFQKA/gABAP8AAgADgICAgP6AgAABAAAAAAKAA4AACQAAMREhFSEVIRUhEQKA/gABAP8AA4CAgID+AAAABAAAAAACgAOAAAMACQANABEAADM1IRU1ESM1IREhETMZATUhFYABgIABAP2AgAIAgICAAYCA/gACgP2AAoCAgAAAAAABAAAAAAKAA4AACwAAMREzESERMxEjESERgAGAgID+gAOA/wABAPyAAgD+AAAAAAABAAAAAAGAA4AACwAAMTUzESM1IRUjETMVgIABgICAgAKAgID9gIAAAwAAAAACgAOAAAMABwALAAAzNSEVJTUzFSERMxGAAYD+AIABgICAgICAgAMA/QAABQAAAAACgAOAAAMABwALABMAFwAAIREzEQE1MxUDNTMVAREzESEVIREBNTMVAgCA/wCAgID+AIABAP8AAYCAAYD+gAGAgIABAICA/YADgP8AgP4AAwCAgAAAAAABAAAAAAKAA4AABQAAMREzESEVgAIAA4D9AIAAAwAAAAACgAOAAAMACwATAAABNTMVAREzFTMVIxEhESM1MzUzEQEAgP6AgICAAYCAgIACAICA/gADgICA/YACgICA/IAAAAAAAwAAAAACgAOAAAMACwATAAABNTMVAREzFTMVIxEhESM1MxEzEQEAgP6AgICAAYCAgIACAICA/gADgICA/YABgIABgPyAAAAABAAAAAACgAOAAAMABwALAA8AADM1IRUlETMRIREzEQE1IRWAAYD+AIABgID+AAGAgICAAoD9gAKA/YACgICAAAIAAAAAAoADgAADAA0AAAE1MxUBESEVIRUhFSERAgCA/YACAP6AAYD+gAKAgID9gAOAgICA/gAABgAAAAACgAOAAAMABwALAA8AEwAXAAAzNSEVMzUzFSU1MxUhETMRJREzEQE1IRWAAQCAgP8AgP4AgAGAgP4AAYCAgICAgICAAoD9gIACAP4AAgCAgAAAAAMAAAAAAoADgAADAAcAEQAAIREzEQM1MxUBESEVIRUhFSERAgCAgID9gAIA/oABgP6AAgD+AAKAgID9gAOAgICA/gAABgAAAAACgAOAAAMABwALAA8AEwAXAAAzNSEVJTUzFSERMxEBNSEVJTUzFT0BIRWAAYD+AIABgID+AAGA/gCAAgCAgICAgAGA/oABgICAgICAgICAAAAAAAEAAAAAAoADgAAHAAAhESE1IRUhEQEA/wACgP8AAwCAgP0AAAMAAAAAAoADgAADAAcACwAAMzUhFSURMxEhETMRgAGA/gCAAYCAgICAAwD9AAMA/QAAAAAFAAAAAAKAA4AAAwAHAAsADwATAAAhNTMVJREzETMRMxEBETMRIREzEQEAgP8AgICA/gCAAYCAgICAAQD/AAEA/wABAAIA/gACAP4AAAAAAAMAAAAAAoADgAADAAsAEwAAATUzFQERMxEzFSMVITUjNTMRMxEBAID+gICAgAGAgICAAQCAgP8AA4D9gICAgIACgPyAAAAAAAkAAAAAAoADgAADAAcACwAPABMAFwAbAB8AIwAAMREzESERMxEBNTMVMzUzFSU1MxUlNTMVMzUzFSU1MxUhNTMVgAGAgP4AgICA/wCA/wCAgID+AIABgIABgP6AAYD+gAGAgICAgICAgICAgICAgICAgIAABQAAAAACgAOAAAMABwALAA8AEwAAIREzEQE1MxUzNTMVJTUzFSE1MxUBAID/AICAgP4AgAGAgAKA/YACgICAgICAgICAgAAABQAAAAACgAOAAAUACQANABEAFwAAMREzFSEVATUzFT0BMxU9ATMVPQEhNSERgAIA/gCAgID+AAKAAQCAgAEAgICAgICAgICAgID/AAAAAAABAAAAAAGAA4AABwAAMREhFSERIRUBgP8AAQADgID9gIAAAAAFAAAAAAKAA4AAAwAHAAsADwATAAAhNTMVJREzEQE1MxUlETMRATUzFQIAgP8AgP8AgP8AgP8AgICAgAEA/wABAICAgAEA/wABAICAAAAAAAEAAAAAAYADgAAHAAAxNSERITUhEQEA/wABgIACgID8gAAAAAUAAAIAAoADgAADAAcACwAPABMAABE1MxUhNTMVJTUzFTM1MxUlNTMVgAGAgP4AgICA/wCAAgCAgICAgICAgICAgIAAAQAA/4ACgAAAAAMAABU1IRUCgICAgAAAAQAAAwABAAOAAAMAABE1IRUBAAMAgIAAAwAAAAACgAKAAAMADQARAAA9ATMdATUhNSE1ITUzEQE1IRWAAYD+gAGAgP4AAYCAgICAgICAgP4AAgCAgAAAAAMAAAAAAoADgAADAAcAEQAAJREzEQE1IRUBETMRMxUjESEVAgCA/oABAP4AgICAAYCAAYD+gAGAgID+AAOA/oCA/wCAAAAAAAUAAAAAAoACgAADAAcACwAPABMAADM1IRU9ATMVIREzEQE1MxUlNSEVgAGAgP2AgAGAgP4AAYCAgICAgAGA/oABAICAgICAAAMAAAAAAoADgAADAAcAEQAANREzGQE1IRUBNSERIzUzETMRgAEA/wABgICAgIABgP6AAYCAgP4AgAEAgAGA/IAAAAAAAwAAAAACgAKAAAMADQARAAAzNSEVJREzFSE1MxEhFRE1IRWAAgD9gIABgID+AAGAgICAAYCAgP8AgAGAgIAAAAIAAAAAAgADgAALAA8AADMRIzUzNTMVIRUhGQE1IRWAgICAAQD/AAEAAgCAgICA/gADAICAAAAAAwAA/4ACgAKAAAMABwARAAAVNSEVAREzEQE1ITUhESE1IRECAP4AgAGA/oABgP6AAgCAgIABgAEA/wD/AICAAQCA/YAAAAAAAwAAAAACgAOAAAMABwAPAAAhETMRATUhFQERMxEzFSMRAgCA/oABAP4AgICAAgD+AAIAgID+AAOA/oCA/oAAAAIAAAAAAIADgAADAAcAADERMxEDNTMVgICAAoD9gAMAgIAAAAQAAP+AAoADAAADAAcACwAPAAAXNSEVJREzESERMxEDNTMVgAGA/gCAAYCAgICAgICAAQD/AAIA/gACgICAAAAFAAAAAAIAA4AAAwAHAAsADwAXAAAhNTMVJTUzFQM1MxU9ATMVAREzETMVIxEBgID/AICAgID+AICAgICAgICAAQCAgICAgP4AA4D+AID/AAAAAAACAAAAAAEAA4AAAwAHAAAzNTMVJREzEYCA/wCAgICAAwD9AAAEAAAAAAKAAoAAAwAHAA0AEQAAAREzERMRMxEhESEVIxEBNTMVAQCAgID9gAEAgAEAgAEAAQD/AP8AAgD+AAKAgP4AAgCAgAACAAAAAAKAAoAAAwAJAAAhETMRIREhFSERAgCA/YACAP6AAgD+AAKAgP4AAAQAAAAAAoACgAADAAcACwAPAAAzNSEVJREzESERMxEBNSEVgAGA/gCAAYCA/gABgICAgAGA/oABgP6AAYCAgAADAAD/gAKAAoAAAwAPABMAAAERMxEBETMVMxUjFSEVIRETNSEVAgCA/YCAgIABgP6AgAEAAQABAP8A/oADAICAgID/AAKAgIAAAAAAAwAA/4ACgAKAAAMABwATAAAZATMZATUhFRMRITUhNSM1MzUzEYABAID+gAGAgICAAQABAP8AAQCAgP2AAQCAgICA/QAAAAAAAwAAAAACgAKAAAMACwAPAAABNTMVAREzFTMVIxETNSEVAgCA/YCAgICAAQABgICA/oACgICA/oACAICAAAAAAAUAAAAAAoACgAADAAcACwAPABMAADE1IRU9ATMVJTUhFSU1MxU9ASEVAgCA/gABgP4AgAIAgICAgICAgICAgICAgIAAAgAAAAABgAOAAAMADwAAITUzFSURIzUzETMRMxUjEQEAgP8AgICAgICAgIABgIABAP8AgP6AAAACAAAAAAKAAoAAAwAJAAA1ETMRFTUhETMRgAGAgIACAP4AgIACAP2AAAAAAAUAAAAAAoACgAADAAcACwAPABMAACE1MxUlNTMVMzUzFSURMxEhETMRAQCA/wCAgID+AIABgICAgICAgICAgAGA/oABgP6AAAIAAAAAAoACgAADAA0AADURMxEVNTMRMxEzETMRgICAgICAAgD+AICAAQD/AAIA/YAAAAAJAAAAAAKAAoAAAwAHAAsADwATABcAGwAfACMAADE1MxUhNTMVJTUzFTM1MxUlNTMVJTUzFTM1MxUlNTMVITUzFYABgID+AICAgP8AgP8AgICA/gCAAYCAgICAgICAgICAgICAgICAgICAgICAgAAAAwAA/4ACgAKAAAMABwAPAAAXNSEVAREzEQE1ITUhETMRgAGA/gCAAYD+gAGAgICAgAGAAYD+gP8AgIABgP2AAAMAAAAAAoACgAAHAAsAEwAAMTUzNTMVIRUBNTMVPQEhNSEVIxWAgAGA/oCA/oACgICAgICAAQCAgICAgICAAAAFAAAAAAIAA4AAAwAHAAsADwATAAAhNSEVJREzEQE1MxU1ETMZATUhFQEAAQD+gID/AICAAQCAgIABAP8AAQCAgIABAP8AAQCAgAAAAQAAAAAAgAOAAAMAADERMxGAA4D8gAAABQAAAAACAAOAAAMABwALAA8AEwAAMTUhFTURMxkBNTMVJREzEQE1IRUBAICA/wCA/oABAICAgAEA/wABAICAgAEA/wABAICAAAAAAAQAAAKAAwADgAADAAcACwAPAAARNTMVITUhFSU1IRUhNTMVgAEAAQD+AAEAAQCAAoCAgICAgICAgIAAAAIAAAAAAIADgAADAAcAADERMxEDNTMVgICAAoD9gAMAgIAAAAMAAAAAAgADAAADAAcACwAAMzUhFSURMxkBNSEVgAGA/gCAAYCAgIACAP4AAgCAgAAAAAACAAAAAAIAAwAADwATAAAxNTMRIzUzNTMVMxUjESEVATUzFYCAgICAgAEA/wCAgAEAgICAgP8AgAKAgIAAAAAABQAAAQABgAKAAAMABwALAA8AEwAAETUzFTM1MxUlNTMVJTUzFTM1MxWAgID/AID/AICAgAEAgICAgICAgICAgICAAAAFAAAAAAKAA4AAEwAXABsAHwAjAAAhNSM1MzUjNTM1MxUzFSMVMxUjFQE1MxUzNTMVJTUzFSE1MxUBAICAgICAgICAgP8AgICA/gCAAYCAgICAgICAgICAgAKAgICAgICAgICAAAAAAAIAAAAAAIADgAADAAcAADERMxEDETMRgICAAYD+gAIAAYD+gAAAAAAFAAD/gAKAAwAABwALAA8AEwAbAAAFNSM1IRUjFRM1MxUhETMRATUzFSU1MzUzFTMVAQCAAYCAgID9gIABgID+AICAgICAgICAAQCAgAGA/oABAICAgICAgIAAAAMAAAAAAwADgAAHAAsADwAAAREhFSMVMxUXESERBxEhEQEAAQCAgID+AIADAAEAAYCAgICAAoD9gIADgPyAAAABAAABAAGAAwAABwAAGQEhNSE1IREBAP8AAYABAAEAgID+AAAKAAAAAAKAAoAAAwAHAAsADwATABcAGwAfACMAJwAAITUzFTM1MxUlNTMVMzUzFSU1MxUzNTMVJTUzFTM1MxUlNTMVMzUzFQEAgICA/gCAgID+AICAgP8AgICA/wCAgICAgICAgICAgICAgICAgICAgICAgICAgIAAAAAAAQAAAIACgAGAAAUAACU1ITUhEQIA/gACgICAgP8AAAABAIABAAIAAYAAAwAAEzUhFYABgAEAgIAAAAAAAwAAAAADAAOAAAUADQARAAABESERIxUFNSM1MxEhEQcRIREBAAEAgAEAgID+AIADAAEAAYD/AICAgIABgP2AgAOA/IAAAAAAAQAAAwACgAOAAAMAABE1IRUCgAMAgIAAAgAAAgABgAOAAAMABwAAATUjFQcRIREBAICAAYACgICAgAGA/oAAAAIAAP+AAoADAAADAA8AABU1IRUBESE1IREzESEVIRECgP6A/wABAIABAP8AgICAAQABAIABAP8AgP8AAAIAAAIAAQADgAAFAAkAABkBMxUzFQM1MxWAgICAAgABAICAAQCAgAABAAACAAEAA4AABwAAETUzNSM1IRGAgAEAAgCAgID+gAAAAAABAYADAAKAA4AAAwAAATUhFQGAAQADAICAAAAAAQAA/4ACgAMAAAkAABURMxEhETMRIRWAAYCA/gCAA4D9gAKA/QCAAAMAAAAAAoADAAADAA0AEQAAETUzFRMRIzUzNSM1IREzETMRgICAgIABAICAAgCAgP4AAYCAgID9AAMA/QAAAAABAAABgACAAgAAAwAAETUzFYABgICAAAACAID/gAIAAIAAAwAHAAAXNSEVPQEzFYABAICAgICAgIAAAAABAAACgACAA4AAAwAAGQEzEYACgAEA/wAAAAAAAgAAAgABgAOAAAMABwAAATUjFQcRIREBAICAAYACgICAgAGA/oAAAAoAAAAAAoACgAADAAcACwAPABMAFwAbAB8AIwAnAAAxNTMVMzUzFSU1MxUzNTMVJTUzFTM1MxUlNTMVMzUzFSU1MxUzNTMVgICA/wCAgID/AICAgP4AgICA/gCAgICAgICAgICAgICAgICAgICAgICAgICAgIAAAAgAAAAAAoADgAADAAkADQARABUAGQAdACEAADE1MxUhETMVMxUlETMRJTUzFSU1MxU1ETMRJREzESU1MxWAAQCAgP4AgAEAgP6AgID+AIABgICAgAEAgICAAQD/AICAgICAgIABAP8AgAEA/wCAgIAAAAAABwAAAAACgAOAAAMABwANABEAFQAZAB0AADE1MxU1ETMRBTUjESERATUzFTURMxElETMRJTUzFYCAAQCAAQD+gICA/gCAAYCAgICAAQD/AICAAQD+gAGAgICAAQD/AIABAP8AgICAAAAHAAAAAAKAA4AAAwAHAA0AEQAVAB0AIQAAMTUzFTURMxEFNSMRIREBNTMVNREzESE1MzUjNSERATUzFYCAAQCAAQD+gICA/gCAgAEAAQCAgICAAQD/AICAAQD+gAGAgICAAQD/AICAgP6AAQCAgAAABgAAAAACgAOAAAMABwALAA8AEwAXAAAzNSEVPQEzFSERMxkBNTMVPQEzFQM1MxWAAYCA/YCAgICAgICAgICAAQD/AAEAgICAgIABAICAAAADAAAAAAKAA4AACwAPABMAADERMxUhNTMRIxEhGQE1IRUBNSEVgAGAgID+gAGA/gABAAIAgID+AAEA/wACAICAAQCAgAAAAAADAAAAAAKAA4AACwAPABMAADERMxUhNTMRIxEhGQE1IRUDNSEVgAGAgID+gAGAgAEAAgCAgP4AAQD/AAIAgIABAICAAAUAAAAAAoADgAALAA8AEwAXABsAADERMxUhNTMRIxEhGQE1IRUlNTMVITUzFSU1IRWAAYCAgP6AAYD+AIABgID+AAGAAgCAgP4AAQD/AAIAgICAgICAgICAgAAABQAAAAADAAOAAAsADwAXABsAHwAAMREzFSE1MxEjESERAzUzHQE1ITUhFSMVATUhFSE1MxWAAYCAgP6AgIABAAEAgP6AAQABAIACAICA/gABAP8AAoCAgICAgICAAQCAgICAAAQAAAAAAoADgAALAA8AEwAXAAAxETMVITUzESMRIRkBNSEVATUzFTM1MxWAAYCAgP6AAYD+gICAgAIAgID+AAEA/wACAICAAQCAgICAAAAAAwAAAAACgAOAAAsADwATAAAxETMVITUzESMRIRkBNSEVATUzFYABgICA/oABgP8AgAIAgID+AAEA/wACAICAAQCAgAABAAAAAAKAA4AAFQAAMREzFTM1IzUhFSEVMxUjESEVIREjEYCAgAIA/wCAgAEA/oCAAwCAgICAgID+gIACAP4AAAAAAAcAAP+AAoADgAADAAcACwAPABMAFwAbAAAFNSEVPQEzFSU1IRU9ATMVIREzEQE1MxUlNSEVAQABAID+AAGAgP2AgAGAgP4AAYCAgICAgICAgICAgIACAP4AAYCAgICAgAAAAAACAAAAAAKAA4AACwAPAAAxESEVIRUhFSEVIRUBNSEVAoD+AAEA/wACAP2AAQACgICAgICAAwCAgAAAAAACAAAAAAKAA4AACwAPAAAxESEVIRUhFSEVIRUBNSEVAoD+AAEA/wACAP8AAQACgICAgICAAwCAgAAAAAAFAAAAAAKAA4AACQANABEAFQAZAAAxETMVIRUhFSEVATUhFSU1MxUhNTMVJTUhFYABAP8AAgD+AAGA/gCAAYCA/gABgAIAgICAgAIAgICAgICAgICAgAAAAwAAAAACgAOAAAsADwATAAAxESEVIRUhFSEVIRUBNTMVMzUzFQKA/gABAP8AAgD+AICAgAKAgICAgIADAICAgIAAAAACAAAAAAIAA4AACwAPAAAzNTMRIzUhFSMRMxUBNSEVgICAAYCAgP4AAQCAAYCAgP6AgAMAgIAAAAIAgAAAAoADgAALAA8AADM1MxEjNSEVIxEzFQM1IRWAgIABgICAgAEAgAGAgID+gIADAICAAAAABAAAAAACgAOAAAsADwATABcAADM1MxEjNSEVIxEzFQE1MxUhNTMVJTUhFYCAgAGAgID+AIABgID+AAGAgAGAgID+gIACgICAgICAgIAAAAADAAAAAAGAA4AACwAPABMAADE1MxEjNSEVIxEzFQE1MxUzNTMVgIABgICA/oCAgICAAYCAgP6AgAMAgICAgAAAAgAAAAADAAOAAAMAEwAAJREzEQURIzUzESEVIREzFSMRIRUCgID9gICAAgD+gICAAYCAAoD9gIABgIABgID/AID/AIAAAAAABQAAAAADAAOAAAMACwAVABkAHQAAATUzFQERMxEzFSMRITUjNTMRIzUhEQE1IRUhNTMVAQCA/oCAgIABgICAgAEA/gABAAEAgAEAgID/AAMA/wCA/oCAgAGAgP0AAwCAgICAAAUAAAAAAoADgAADAAcACwAPABMAADM1IRUlETMRIREzEQE1IRUBNSEVgAGA/gCAAYCA/gABgP4AAQCAgIABgP6AAYD+gAGAgIABAICAAAAABQAAAAACgAOAAAMABwALAA8AEwAAMzUhFSURMxEhETMRATUhFQM1IRWAAYD+AIABgID+AAGAgAEAgICAAYD+gAGA/oABgICAAQCAgAAAAAAHAAAAAAKAA4AAAwAHAAsADwATABcAGwAAMzUhFSURMxEhETMRATUhFSU1MxUhNTMVJTUhFYABgP4AgAGAgP4AAYD+AIABgID+AAGAgICAAYD+gAGA/oABgICAgICAgICAgIAABwAAAAADAAOAAAMABwALAA8AFwAbAB8AADM1IRUlETMRIREzEQE1Mx0BNSE1IRUjFQE1IRUhNTMVgAGA/gCAAYCA/YCAAQABAID+gAEAAQCAgICAAYD+gAGA/oACAICAgICAgIABAICAgIAABgAAAAACgAOAAAMABwALAA8AEwAXAAAzNSEVJREzESERMxEBNSEVJTUzFSE1MxWAAYD+AIABgID+AAGA/gCAAYCAgICAAgD+AAIA/gACAICAgICAgIAAAAkAAACAAoADAAADAAcACwAPABMAFwAbAB8AIwAAPQEzFSE1MxUlNTMVMzUzFSU1MxUlNTMVMzUzFSU1MxUhNTMVgAGAgP4AgICA/wCA/wCAgID+AIABgICAgICAgICAgICAgICAgICAgICAgICAgAADAAAAAAKAA4AAAwANABcAAAERMxEBNSMRMxEzFSEVNREjNSE1IRUzEQEAgP8AgICAAQCA/wABgIABAAGA/oD/AIACgP4AgICAAgCAgID9gAAAAAAEAAAAAAKAA4AAAwAHAAsADwAAMzUhFSURMxEhETMRATUhFYABgP4AgAGAgP2AAQCAgIACAP4AAgD+AAKAgIAABAAAAAACgAOAAAMABwALAA8AADM1IRUlETMRIREzEQE1IRWAAYD+AIABgID/AAEAgICAAgD+AAIA/gACgICAAAYAAAAAAoADgAADAAcACwAPABMAFwAAMzUhFSURMxEhETMRATUzFSE1MxUlNSEVgAGA/gCAAYCA/YCAAYCA/gABgICAgAGA/oABgP6AAgCAgICAgICAAAAFAAAAAAKAA4AAAwAHAAsADwATAAAzNSEVJREzESERMxEBNTMVMzUzFYABgP4AgAGAgP4AgICAgICAAgD+AAIA/gACgICAgIAAAAAABgAAAAACgAOAAAMABwALAA8AEwAXAAAhETMRATUzFTM1MxUlNTMVITUzFQE1IRUBAID/AICAgP4AgAGAgP2AAQABgP6AAYCAgICAgICAgIABAICAAAAAAAMAAP+AAoADAAADAAcAEwAAJREzEQE1IRUBETMRMxUjESEVIRUCAID+gAEA/gCAgIABgP6AgAGA/oABgICA/YADgP8AgP8AgIAAAAAEAAAAAAKAA4AAAwANABEAFQAAPQEzHQE1ITUhNSE1MxEBNSEVATUhFYABgP6AAYCA/gABgP4AAQCAgICAgICAgP4AAgCAgAEAgIAABAAAAAACgAOAAAMADQARABUAAD0BMx0BNSE1ITUhNTMRATUhFQM1IRWAAYD+gAGAgP4AAYCAAQCAgICAgICAgP4AAgCAgAEAgIAAAAYAAAAAAoADgAADAA0AEQAVABkAHQAAPQEzHQE1ITUhNSE1MxEBNSEVJTUzFSE1MxUlNSEVgAGA/oABgID+AAGA/gCAAYCA/gABgICAgICAgICA/gACAICAgICAgICAgIAAAAAGAAAAAAMAA4AAAwANABEAGQAdACEAAD0BMx0BNSE1ITUhNTMRATUzHQE1ITUhFSMVATUhFSE1MxWAAYD+gAGAgP2AgAEAAQCA/oABAAEAgICAgICAgICA/gACgICAgICAgIABAICAgIAAAAAFAAAAAAKAA4AAAwANABEAFQAZAAA9ATMdATUhNSE1ITUzEQE1IRUBNTMVMzUzFYABgP6AAYCA/gABgP6AgICAgICAgICAgID+AAIAgIABAICAgIAAAAAABAAAAAACgAOAAAMADQARABUAAD0BMx0BNSE1ITUhNTMRATUhFQE1MxWAAYD+gAGAgP4AAYD/AICAgICAgICAgP4AAgCAgAEAgIAAAAQAAAAAAoACgAADABUAGQAdAAA9ATMdATUzNSM1MzUzFTM1MxEhFSEVATUzFTM1MxWAgICAgICA/wABAP4AgICAgICAgICAgICAgP8AgIACAICAgIAAAAAHAAD/gAKAAwAAAwAHAAsADwATABcAGwAABTUhFT0BMxUlNSEVPQEzFSERMxEBNTMVJTUhFQEAAQCA/gABgID9gIABgID+AAGAgICAgICAgICAgICAAYD+gAEAgICAgIAAAAAABAAAAAACgAOAAAMADQARABUAADM1IRUlETMVITUzESEVETUhFQE1IRWAAgD9gIABgID+AAGA/gABAICAgAGAgID/AIABgICAAQCAgAAAAAAEAAAAAAKAA4AAAwANABEAFQAAMzUhFSURMxUhNTMRIRURNSEVAzUhFYACAP2AgAGAgP4AAYCAAQCAgIABgICA/wCAAYCAgAEAgIAABgAAAAACgAOAAAMADQARABUAGQAdAAAzNSEVJREzFSE1MxEhFRE1IRUlNTMVITUzFSU1IRWAAgD9gIABgID+AAGA/gCAAYCA/gABgICAgAGAgID/AIABgICAgICAgICAgIAAAAUAAAAAAoADgAADAA0AEQAVABkAADM1IRUlETMVITUzESEVETUhFQE1MxUzNTMVgAIA/YCAAYCA/gABgP6AgICAgICAAYCAgP8AgAGAgIABAICAgIAAAAACAAAAAAEAA4AAAwAHAAAzETMRATUhFYCA/wABAAKA/YADAICAAAAAAgAAAAABAAOAAAMABwAAMREzEQM1IRWAgAEAAoD9gAMAgIAABAAAAAACgAOAAAMABwALAA8AACERMxEBNTMVITUzFSU1IRUBAID+gIABgID+AAGAAoD9gAKAgICAgICAgAAAAAMAgAAAAgADgAADAAcACwAAIREzEQE1MxUzNTMVAQCA/wCAgIACgP2AAwCAgICAAAQAAAAAAwADgAADAA8AEwAXAAAhETMRIREzFSE1IRUjFSEZATUhFSE1MxUCAID9gIABAAEAgP6AAQABAIACAP4AAwCAgICA/gADAICAgIAABQAAAAACgAOAAAMABwALAA8AEwAAMzUhFSURMxEhETMRATUhFQE1IRWAAYD+AIABgID+AAGA/gABAICAgAGA/oABgP6AAYCAgAEAgIAAAAAFAAAAAAKAA4AAAwAHAAsADwATAAAzNSEVJREzESERMxEBNSEVAzUhFYABgP4AgAGAgP4AAYCAAQCAgIABgP6AAYD+gAGAgIABAICAAAAAAAcAAAAAAoADgAADAAcACwAPABMAFwAbAAAzNSEVJREzESERMxEBNSEVJTUzFSE1MxUlNSEVgAGA/gCAAYCA/gABgP4AgAGAgP4AAYCAgIABgP6AAYD+gAGAgICAgICAgICAgAAHAAAAAAMAA4AAAwAHAAsADwAXABsAHwAAMzUhFSURMxEhETMRATUzHQE1ITUhFSMVATUhFSE1MxWAAYD+AIABgID9gIABAAEAgP6AAQABAICAgIABgP6AAYD+gAIAgICAgICAgAEAgICAgAAGAAAAAAKAA4AAAwAHAAsADwATABcAADM1IRUlETMRIREzEQE1IRUBNTMVMzUzFYABgP4AgAGAgP4AAYD+gICAgICAgAGA/oABgP6AAYCAgAEAgICAgAAAAwAAAIACgAMAAAMABwALAAAlNTMVATUhFQE1MxUBAID+gAKA/oCAgICAAQCAgAEAgIAAAAMAAAAAAoACgAADAA0AFwAAATUzFQE1IxEzETMVIRU1ESM1ITUhFTMRAQCA/wCAgIABAID/AAGAgAEAgID/AIABgP8AgICAAQCAgID+gAAAAwAAAAACgAOAAAMACQANAAA1ETMRFTUhETMRATUhFYABgID9gAEAgAIA/gCAgAIA/YADAICAAAADAAAAAAKAA4AAAwAJAA0AADURMxEVNSERMxEBNSEVgAGAgP8AAQCAAgD+AICAAgD9gAMAgIAAAAUAAAAAAoADgAADAAkADQARABUAADURMxEVNSERMxEBNTMVITUzFSU1IRWAAYCA/YCAAYCA/gABgIABgP6AgIABgP4AAoCAgICAgICAAAAABAAAAAACgAOAAAMACQANABEAADURMxEVNSERMxEBNTMVMzUzFYABgID+AICAgIACAP4AgIACAP2AAwCAgICAAAQAAP+AAoADgAADAAcADwATAAAXNSEVAREzEQE1ITUhETMRATUhFYABgP4AgAGA/oABgID9gAEAgICAAYABgP6A/wCAgAGA/YADAICAAAAAAwAA/4ACgAOAAAMABwATAAAlETMRATUhFQERMxEzFSMRIRUhFQIAgP6AAQD+AICAgAGA/oCAAYD+gAGAgID9gAQA/oCA/wCAgAAAAAUAAP+AAoADgAADAAcADwATABcAABc1IRUBETMRATUhNSERMxEBNTMVMzUzFYABgP4AgAGA/oABgID+AICAgICAgAGAAYD+gP8AgIABgP2AAwCAgICAAAACAAAAAAKAA4AAAwATAAA1ETMRFTUzESM1IRUhFTMVIxEhFYCAgAIA/wCAgAEAgAKA/YCAgAKAgICAgP6AgAAABQAAAAACgAKAAAMABwALAA8AGwAAMzUzFTM1IRUlETMZATUzFRkBMxUzNSM1IREhFYCAgAEA/YCAgICAgAEA/wCAgICAgAGA/oABgICA/oABgICAgP6AgAAAAAAHAAAAAAKAA4AAAwAHAAsADwATABcAGwAAIREzEQE1MxUzNTMVJTUzFSE1MxUBNTMVMzUzFQEAgP8AgICA/gCAAYCA/gCAgIABgP6AAYCAgICAgICAgIABAICAgIAAAAABAAABgAMAAgAAAwAAETUhFQMAAYCAgAACAAACAAEAA4AAAwAHAAAZATMZATUzFYCAAgABAP8AAQCAgAACAAACAAEAA4AAAwAHAAARNTMVNREzEYCAAgCAgIABAP8AAAACAAD/gAEAAQAAAwAHAAAVNTMVNREzEYCAgICAgAEA/wAAAAACAAACAAEAA4AAAwAHAAATNTMVJREzEYCA/wCAAgCAgIABAP8AAAAABAAAAgACAAOAAAMABwALAA8AABkBMxEzETMRATUzFTM1MxWAgID/AICAgAIAAQD/AAEA/wABAICAgIAABAAAAgACAAOAAAMABwALAA8AABE1MxUzNTMVJREzETMRMxGAgID/AICAgAIAgICAgIABAP8AAQD/AAAABAAA/4ACAAEAAAMABwALAA8AABU1MxUzNTMVJREzETMRMxGAgID/AICAgICAgICAgAEA/wABAP8AAAAAAQAAAAABgAMAAAsAADMRIzUzETMRMxUjEYCAgICAgAGAgAEA/wCA/oAAAAABAAABgAEAAoAAAwAAGQEhEQEAAYABAP8AAAAAAwAAAAACgACAAAMABwALAAAxNTMVMzUzFTM1MxWAgICAgICAgICAgAAAAAADAAAAAAEAAYAAAwAHAAsAADM1MxUlNTMVPQEzFYCA/wCAgICAgICAgICAAAMAAAAAAQABgAADAAcACwAAMTUzFT0BMxUlNTMVgID/AICAgICAgICAgAAAAwAAAAACgAOAAAMAFwAbAAAhNSEVJTUjNTM1IzUzNTMVIRUhFSEVIRURNSEVAQABgP4AgICAgIABAP8AAQD/AAGAgICAgICAgICAgICAgAKAgIAAAgAAAgAEgAOAAAcAEwAAExEjNSEVIxEhESERIxEjFSM1IxGAgAGAgAEAAoCAgICAAgABAICA/wABgP6AAQCAgP8AAAAAACABhgABAAAAAAAAASUCTAABAAAAAAABAAkDhgABAAAAAAACAAcDoAABAAAAAAADABEDzAABAAAAAAAEABEEAgABAAAAAAAFAAsELAABAAAAAAAGAAkETAABAAAAAAAHAGMFHgABAAAAAAAIABYFsAABAAAAAAAJAAUF0wABAAAAAAAKASUIJQABAAAAAAALAB8JiwABAAAAAAAMABEJzwABAAAAAAANACgKMwABAAAAAAAOAC4KugABAAAAAAATABsLIQADAAEECQAAAkoAAAADAAEECQABABIDcgADAAEECQACAA4DkAADAAEECQADACIDqAADAAEECQAEACID3gADAAEECQAFABYEFAADAAEECQAGABIEOAADAAEECQAHAMYEVgADAAEECQAIACwFggADAAEECQAJAAoFxwADAAEECQAKAkoF2QADAAEECQALAD4JSwADAAEECQAMACIJqwADAAEECQANAFAJ4QADAAEECQAOAFwKXAADAAEECQATADYK6QBUAGgAaQBzACAAIgBNAGkAbgBlAGMAcgBhAGYAdAAiACAAZgBvAG4AdAAgAHcAYQBzACAAYQBkAGEAcAB0AGUAZAAgAGkAbgB0AG8AIABUAHIAdQBlAFQAeQBwAGUAIABmAGkAbABlACAAYgB5ACAAbQBlACAAKABEAGoARABDAEgAKQAuAA0ACgANAAoAVABoAGkAcwAgACIATQBpAG4AZQBjAHIAYQBmAHQAIgAgAGYAbwBuAHQAIABpAHMAIAB1AG4AZABlAHIAIABDAHIAZQBhAHQAaQB2AGUAIABDAG8AbQBtAG8AbgBzACAATABpAGMAZQBuAHMAZQAgACgAUwBoAGEAcgBlACAAQQBsAGkAawBlACkALgANAAoADQAKAFQAaABlACAAIgBEAGoARABDAEgAIgAgAG4AYQBtAGUAIABpAHMAIABvAHcAbgAgAGIAeQAgAG0AZQAgACgAZABqAGQAYwBoAC4AYwBvAG0AKQAuAA0ACgANAAoAVABoAGUAIAAiAE0AaQBuAGUAYwByAGEAZgB0ACIAIABmAG8AbgB0ACAAcwB0AHkAbABlACAAdwBhAHMAIABtAGEAZABlACAAYgB5ACAATgBvAHQAYwBoAC4ADQAKAA0ACgBUAGgAZQAgACIATQBpAG4AZQBjAHIAYQBmAHQAIgAgAGcAYQBtAGUAIABpAHMAIABvAHcAbgAgAGIAeQAgAE0AbwBqAGEAbgBnACAAUwBwAGUAYwBpAGYAaQBjAGEAdABpAG8AbgBzAC4AAFRoaXMgIk1pbmVjcmFmdCIgZm9udCB3YXMgYWRhcHRlZCBpbnRvIFRydWVUeXBlIGZpbGUgYnkgbWUgKERqRENIKS4NCg0KVGhpcyAiTWluZWNyYWZ0IiBmb250IGlzIHVuZGVyIENyZWF0aXZlIENvbW1vbnMgTGljZW5zZSAoU2hhcmUgQWxpa2UpLg0KDQpUaGUgIkRqRENIIiBuYW1lIGlzIG93biBieSBtZSAoZGpkY2guY29tKS4NCg0KVGhlICJNaW5lY3JhZnQiIGZvbnQgc3R5bGUgd2FzIG1hZGUgYnkgTm90Y2guDQoNClRoZSAiTWluZWNyYWZ0IiBnYW1lIGlzIG93biBieSBNb2phbmcgU3BlY2lmaWNhdGlvbnMuAABNAGkAbgBlAGMAcgBhAGYAdAAATWluZWNyYWZ0AABSAGUAZwB1AGwAYQByAABSZWd1bGFyAABNAGkAbgBlAGMAcgBhAGYAdAAgAFIAZQBnAHUAbABhAHIAAE1pbmVjcmFmdCBSZWd1bGFyAABNAGkAbgBlAGMAcgBhAGYAdAAgAFIAZQBnAHUAbABhAHIAAE1pbmVjcmFmdCBSZWd1bGFyAABWAGUAcgBzAGkAbwBuACAAMQAuADAAAFZlcnNpb24gMS4wAABNAGkAbgBlAGMAcgBhAGYAdAAATWluZWNyYWZ0AABUAGgAZQAgACIARABqAEQAQwBIACIAIABuAGEAbQBlACAAaQBzACAAbwB3AG4AIABiAHkAIABtAGUAIAAoAGQAagBkAGMAaAAuAGMAbwBtACkALgANAAoADQAKAFQAaABlACAAIgBNAGkAbgBlAGMAcgBhAGYAdAAiACAAZwBhAG0AZQAgAGkAcwAgAG8AdwBuACAAYgB5ACAATQBvAGoAYQBuAGcAIABTAHAAZQBjAGkAZgBpAGMAYQB0AGkAbwBuAHMALgAAVGhlICJEakRDSCIgbmFtZSBpcyBvd24gYnkgbWUgKGRqZGNoLmNvbSkuDQoNClRoZSAiTWluZWNyYWZ0IiBnYW1lIGlzIG93biBieSBNb2phbmcgU3BlY2lmaWNhdGlvbnMuAABGAG8AbgB0AHMAdAByAHUAYwB0ACAAYgB5ACAARgBvAG4AdABTAGgAbwBwAABGb250c3RydWN0IGJ5IEZvbnRTaG9wAABEAGoARABDAEgAAERqRENIAABUAGgAaQBzACAAIgBNAGkAbgBlAGMAcgBhAGYAdAAiACAAZgBvAG4AdAAgAHcAYQBzACAAYQBkAGEAcAB0AGUAZAAgAGkAbgB0AG8AIABUAHIAdQBlAFQAeQBwAGUAIABmAGkAbABlACAAYgB5ACAAbQBlACAAKABEAGoARABDAEgAKQAuAA0ACgANAAoAVABoAGkAcwAgACIATQBpAG4AZQBjAHIAYQBmAHQAIgAgAGYAbwBuAHQAIABpAHMAIAB1AG4AZABlAHIAIABDAHIAZQBhAHQAaQB2AGUAIABDAG8AbQBtAG8AbgBzACAATABpAGMAZQBuAHMAZQAgACgAUwBoAGEAcgBlACAAQQBsAGkAawBlACkALgANAAoADQAKAFQAaABlACAAIgBEAGoARABDAEgAIgAgAG4AYQBtAGUAIABpAHMAIABvAHcAbgAgAGIAeQAgAG0AZQAgACgAZABqAGQAYwBoAC4AYwBvAG0AKQAuAA0ACgANAAoAVABoAGUAIAAiAE0AaQBuAGUAYwByAGEAZgB0ACIAIABmAG8AbgB0ACAAcwB0AHkAbABlACAAdwBhAHMAIABtAGEAZABlACAAYgB5ACAATgBvAHQAYwBoAC4ADQAKAA0ACgBUAGgAZQAgACIATQBpAG4AZQBjAHIAYQBmAHQAIgAgAGcAYQBtAGUAIABpAHMAIABvAHcAbgAgAGIAeQAgAE0AbwBqAGEAbgBnACAAUwBwAGUAYwBpAGYAaQBjAGEAdABpAG8AbgBzAC4AAFRoaXMgIk1pbmVjcmFmdCIgZm9udCB3YXMgYWRhcHRlZCBpbnRvIFRydWVUeXBlIGZpbGUgYnkgbWUgKERqRENIKS4NCg0KVGhpcyAiTWluZWNyYWZ0IiBmb250IGlzIHVuZGVyIENyZWF0aXZlIENvbW1vbnMgTGljZW5zZSAoU2hhcmUgQWxpa2UpLg0KDQpUaGUgIkRqRENIIiBuYW1lIGlzIG93biBieSBtZSAoZGpkY2guY29tKS4NCg0KVGhlICJNaW5lY3JhZnQiIGZvbnQgc3R5bGUgd2FzIG1hZGUgYnkgTm90Y2guDQoNClRoZSAiTWluZWNyYWZ0IiBnYW1lIGlzIG93biBieSBNb2phbmcgU3BlY2lmaWNhdGlvbnMuAABoAHQAdABwADoALwAvAGYAbwBuAHQAcwB0AHIAdQBjAHQALgBmAG8AbgB0AHMAaABvAHAALgBjAG8AbQAvAABodHRwOi8vZm9udHN0cnVjdC5mb250c2hvcC5jb20vAABoAHQAdABwADoALwAvAGQAagBkAGMAaAAuAGMAbwBtAC8AAGh0dHA6Ly9kamRjaC5jb20vAABDAHIAZQBhAHQAaQB2AGUAIABDAG8AbQBtAG8AbgBzACAAQQB0AHQAcgBpAGIAdQB0AGkAbwBuACAAUwBoAGEAcgBlACAAQQBsAGkAawBlAABDcmVhdGl2ZSBDb21tb25zIEF0dHJpYnV0aW9uIFNoYXJlIEFsaWtlAABoAHQAdABwADoALwAvAGMAcgBlAGEAdABpAHYAZQBjAG8AbQBtAG8AbgBzAC4AbwByAGcALwBsAGkAYwBlAG4AcwBlAHMALwBiAHkALQBzAGEALwAzAC4AMAAvAABodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1zYS8zLjAvAABNAGkAbgBlAGMAcgBhAGYAdAAgAGkAcwAgAGoAdQBzAHQAIABhAHcAZQBzAG8AbQBlACAAIQAATWluZWNyYWZ0IGlzIGp1c3QgYXdlc29tZSAhAAAAAgAAAAAAAABlADMAAAAAAAAAAAAAAAAAAAAAAAAAAADQAAABAgEDAAMABAAFAAYABwAIAAkACgALAAwADQAOAA8AEAARABIAEwAUABUAFgAXABgAGQAaABsAHAAdAB4AHwAgACEAIgAjACQAJQAmACcAKAApACoAKwAsAC0ALgAvADAAMQAyADMANAA1ADYANwA4ADkAOgA7ADwAPQA+AD8AQABBAEIAQwBEAEUARgBHAEgASQBKAEsATABNAE4ATwBQAFEAUgBTAFQAVQBWAFcAWABZAFoAWwBcAF0AXgBfAGAAYQCjAIQAhQC9AJYA6ACOAIsAnQCpAKQBBACKANoAgwCTAQUBBgCNAQcAiADDAN4BCACeAKoA9QD0APYAogCtAMkAxwCuAGIAYwCQAGQAywBlAMgAygDPAMwAzQDOAOkAZgDTANAA0QCvAGcA8ACRANYA1ADVAGgA6wDtAGoAaQBrAG0AbABuAKAAbwBxAHAAcgBzAHUAdAB2AHcAeAB6AHkAewB9AHwAuAChAH8AfgCAAIEA7ADuALoAsACxALsAswC2ALcAxAEJALQAtQDFAIIAhwCrAL4AvwEKAIwGZ2x5cGgxB3VuaTAwMEQHdW5pMDBBRAd1bmkwMEIyB3VuaTAwQjMHdW5pMDBCNQd1bmkwMEI5DXF1b3RlcmV2ZXJzZWQERXVybwAAAAH//wACAAEAAAAOAAAAGAAAAAAAAgABAAEAzwABAAQAAAACAAAAAAABAAAAAMw9os8AAAAAyO86mAAAAADI8I+a";

//########################################################################################################################################################
// START CREATION OF RESOURCES
//########################################################################################################################################################

new java.lang.Thread(new java.lang.Runnable()
{
	run: function()
	{
		try
		{
			MinecraftButtonLibrary.createNinePatchDrawables();
			MinecraftButtonLibrary.createTypeface();

			MinecraftButtonLibrary.removeResources();
		} catch(e)
		{
			print("Error " + e);
		}
	}
}).start();

function procCmd(cmd) {
    cmd = cmd.split(" ");
    switch(cmd[0]) {
		case "changelog": {
			if (cmd[1] == "paintmodpe") {
				clientMessage("AgameR Paint Mod PE Changelog - 1.0: Initial release | 1.1: Added crafting recipes | 1.2: Paint any block you want, fixed item id conflict with the TooManyItems addon, added a new crafting recipe for the white Paintbrush | 1.2.1: Used paintbrushes will now turn into empty paintbrushes in survival; Added an easter egg | 1.2.2: Removed survival functionalities introduced in 1.2.1 due to crashes; Fixed some things | 1.2.3: Added a new and improved survival system; Fixed bugs | 1.3: Added carpet painting; Some improvements | 1.3.1: Painting mobs no longer damages them; Some improvements | 2.0: Added many new colored blocks *Colored Wooden Planks, Sponges, Glass Blocks and Leaves*; Added an update checker; New Paintbrush textures by @SimonP_GG64 *he is awesome, go follow him on Twitter!*; New Empty Paintbrush crafting recipe; Fixed some bugs; Overall improvements | 2.0.1: Updated to MCPE v0.11.x | 2.0.2: Fixed items not showing up in creative; Small code changes | 2.0.3: Fixed bugs | 3.0-pre: Support for 0.13.x; Added Bucket with Rainbow Paint, a Paint Gun and a Paint Bomb (WIP); Code rewrite; Overall improvements; Fixed bugs");
			}
			break;
		}case "paint": {
			PaintModPE.paintBlock(cmd[1], cmd[2], cmd[3], cmd[4], getTile(cmd[1], cmd[2], cmd[3]), paintAnyBlockSetting, true);
			break;
		}
    }
};

/*function redstoneUpdateHook(x, y, z, newCurrent, worldLoading, blockId, blockData) {
	if(blockId == 255) {
		PaintModPE.paintExplosion(x, y, z, getRandomPaintColor());
	}
}*/

function projectileHitEntityHook(projectile, targetEntity) {
	if(Player.getCarriedItem() == 3493 && projectile == paintball) {
		PaintModPE.paintEntity(currentPaintGunColor, targetEntity);
	}
}

function projectileHitBlockHook(projectile, blockX, blockY, blockZ, side) {
	if(Player.getCarriedItem() == 3493 && projectile == paintball) {
		PaintModPE.paintBlock(blockX, blockY, blockZ, currentPaintGunColor, getTile(blockX, blockY, blockZ), true, false);
	}
}

function attackHook(attacker, victim) {
    var i = Player.getCarriedItem();
    var gamemode = Level.getGameMode()
    if (attacker == Player.getEntity()) {
        if (i == 3031) {
            PaintModPE.paintEntity("White", victim);
            PaintModPE.damagePaintbrush();
        } else if (i == 3032) {
            PaintModPE.paintEntity("Orange", victim);
            PaintModPE.damagePaintbrush();
        } else if (i == 3033) {
            PaintModPE.paintEntity("Magenta", victim);
            PaintModPE.damagePaintbrush();
        } else if (i == 3034) {
            PaintModPE.paintEntity("Light Blue", victim);
            PaintModPE.damagePaintbrush();
        } else if (i == 3035) {
			PaintModPE.paintEntity("Yellow", victim);
            PaintModPE.damagePaintbrush();
        } else if (i == 3036) {
            PaintModPE.paintEntity("Lime Green", victim);
            PaintModPE.damagePaintbrush();
        } else if (i == 3037) {
            PaintModPE.paintEntity("Pink", victim);
            PaintModPE.damagePaintbrush();
        } else if (i == 3038) {
            PaintModPE.paintEntity("Gray", victim);
            PaintModPE.damagePaintbrush();
        } else if (i == 3039) {
            PaintModPE.paintEntity("Light Gray", victim);
            PaintModPE.damagePaintbrush();
        } else if (i == 3040) {
            PaintModPE.paintEntity("Cyan", victim);
            PaintModPE.damagePaintbrush();
        } else if (i == 3041) {
            PaintModPE.paintEntity("Purple", victim);
            PaintModPE.damagePaintbrush();
        } else if (i == 3042) {
            PaintModPE.paintEntity("Blue", victim);
            PaintModPE.damagePaintbrush();
        } else if (i == 3043) {
            PaintModPE.paintEntity("Brown", victim);
            PaintModPE.damagePaintbrush();
        } else if (i == 3044) {
            PaintModPE.paintEntity("Green", victim);
            PaintModPE.damagePaintbrush();
        } else if (i == 3045) {
            PaintModPE.paintEntity("Red", victim);
            PaintModPE.damagePaintbrush();
        } else if (i == 3046) {
            PaintModPE.paintEntity("Black", victim);
            PaintModPE.damagePaintbrush();
        }
    }
};

var randomPaintColor = ["White", "Orange", "Magenta", "Light Blue", "Yellow", "Lime Green", "Pink", "Gray", "Light Gray", "Cyan", "Purple", "Blue", "Brown", "Green", "Red", "Black"];

function getRandomPaintColor() {
    return randomPaintColor[Math.floor(randomPaintColor.length * Math.random())];
}

function useItem(x, y, z, i, b, s) {
    if (i == 259) {
        if (b == 255) {
			preventDefault();
			PaintModPE.paintExplosion(x, y, z, getRandomPaintColor());

        }
	} else if (i == 325) {
		if(b == 255) {
			setTile(x, y, z, 0);
			if(Level.getGameMode == 0) {
				Entity.setCarriedItem(Player.getEntity(), 3047, 1);
			}
		}
    } else if (i == 3031) {
        PaintModPE.paintBlock(x, y, z, "White", b, paintAnyBlockSetting, true);
        PaintModPE.damagePaintbrush();

    } else if (i == 3032) {
        PaintModPE.paintBlock(x, y, z, "Orange", b, paintAnyBlockSetting, true);
        PaintModPE.damagePaintbrush();

    } else if (i == 3033) {
        PaintModPE.paintBlock(x, y, z, "Magenta", b, paintAnyBlockSetting, true);
        PaintModPE.damagePaintbrush();

    } else if (i == 3034) {
        PaintModPE.paintBlock(x, y, z, "Light Blue", b, paintAnyBlockSetting, true);
        PaintModPE.damagePaintbrush();

    } else if (i == 3035) {
        PaintModPE.paintBlock(x, y, z, "Yellow", b, paintAnyBlockSetting, true);
        PaintModPE.damagePaintbrush();

    } else if (i == 3036) {
        PaintModPE.paintBlock(x, y, z, "Lime Green", b, paintAnyBlockSetting, true);
        PaintModPE.damagePaintbrush();

    } else if (i == 3037) {
        PaintModPE.paintBlock(x, y, z, "Pink", b, paintAnyBlockSetting, true);
        PaintModPE.damagePaintbrush();

    } else if (i == 3038) {
        PaintModPE.paintBlock(x, y, z, "Gray", b, paintAnyBlockSetting, true);
        PaintModPE.damagePaintbrush();

    } else if (i == 3039) {
        PaintModPE.paintBlock(x, y, z, "Light Gray", b, paintAnyBlockSetting, true);
        PaintModPE.damagePaintbrush();

    } else if (i == 3040) {
        PaintModPE.paintBlock(x, y, z, "Cyan", b, paintAnyBlockSetting, true);
        PaintModPE.damagePaintbrush();

    } else if (i == 3041) {
        PaintModPE.paintBlock(x, y, z, "Purple", b, paintAnyBlockSetting, true);
        PaintModPE.damagePaintbrush();

    } else if (i == 3042) {
        PaintModPE.paintBlock(x, y, z, "Blue", b, paintAnyBlockSetting, true);
        PaintModPE.damagePaintbrush();

    } else if (i == 3043) {
        PaintModPE.paintBlock(x, y, z, "Brown", b, paintAnyBlockSetting, true);
        PaintModPE.damagePaintbrush();

    } else if (i == 3044) {
        PaintModPE.paintBlock(x, y, z, "Green", b, paintAnyBlockSetting, true);
        PaintModPE.damagePaintbrush();

    } else if (i == 3045) {
        PaintModPE.paintBlock(x, y, z, "Red", b, paintAnyBlockSetting, true);
        PaintModPE.damagePaintbrush();

    } else if (i == 3046) {
        PaintModPE.paintBlock(x, y, z, "Black", b, paintAnyBlockSetting, true);
        PaintModPE.damagePaintbrush();

    } else if (i == 3047) {
		setTile(x-(s==4?1:0)+(s==5?1:0),y-(s==0?1:0)+(s==1?1:0),z-(s==2?1:0)+(s==3?1:0),255);
		if(Level.getGameMode() == 0) {
			Entity.setCarriedItem(Player.getEntity(), 325, 1);
		}

    }
}

function destroyBlock(x, y, z, shouldDropItem) {
	var b = Level.getTile(x, y, z);
	if(b == 255) {
		preventDefault();
	}
}

//*Copyright*
//-------------
//You may:
//Edit this mod for personal use
//Create a review of this mod *YOU MUST PUT THE LINK TO THE MINECRAFT FORUMS THREAD IN THE DESCRIPTION!*
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
//Mod version: 3.0-pre

//For full changelog, do /changelog paintmodpe

//*Ideas*
//---------
//If you have any ideas for this mod, please send them to my MC-Forum account, or on Twitter: @AgameR_Modder