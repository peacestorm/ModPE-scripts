/*Mod created by peacestorm
 *
 * Thanks to:
 * MyNameIsTriXz (for helping with some hacks and stuff to make this mod better)
 * Ethan061903 (for betatesting)
 * RedstoneGunMade (for some parts of the MCPE button API)
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
var showMainButton = "on"; //<-- Default = on
var gameSpeedHackSetting = "2";
var nameColor = "§b";
var healthColor = "§c";
var betterGlass = "off";
var experimentalFeatures = "off"; //<-- Default = off
var defaultUrl = "https://google.com/"; //<-- Default Webbrowser URL; Default: https://google.com/

/*Per world config*/
var HomeX;
var HomeY;
var HomeZ;
var hardcore = "off";
var spectator = "off";

/*Todo:
Add themes [Blue (done)]
Add more hacks, cheats, other things
~Save theme and other options~ DONE! Only some options left!
*/

//Some vars
var line0;
var line1;
var line2;
var line3;
var newScript;
var webViewer;
var MoreOptionsPE = {};
//End of Some vars

ModPE.getCurrentLanguage = function() {
    var file = new java.io.File("/sdcard/games/com.mojang/minecraftpe/options.txt");
    var br = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(file)));
    var read, lang;
    while((read = br.readLine()) != null) {
        if(read.split(":")[0] == "game_language") {
            lang = read.split(":")[1];
            break;
        }
    }
    br.close();
    return lang;
};

var Texts = {
	coming_soon: "Coming soon",
	off: "OFF",
	on: "ON",
	hacks: "Hacks",
	panic: "Panic",
	walk_through_blocks: "Walk through blocks",
	instaheal: "InstaHeal",
	fly: "Fly",
	set_entities_on_fire: "Set entities on fire",
	gamespeed: "Gamespeed",
	tapspammer: "TapSpammer",
	sneaking: "Sneaking",
	zoom: "Zoom",
	show_coords: "Show coords",
	instamine: "InstaMine",
	knockback: "Knockback",
	xray: "X-Ray",
	always_day: "Always Day",
	saddle_up: "Saddle Up",
	stackdrop: "StackDrop",
	tapteleporter: "TapTeleporter",
	instakill: "InstaKill",
	signeditor: "SignEditor",
	all_items_eatable: "All items eatable",
	sprinting: "Sprinting",
	jetpack: "JetPack",
	highjump: "HighJump",
	drone: "Drone",
	parachute: "Parachute",
	tapnuker: "TapNuker",
	walk_on_liquids: "Walk on Liquids",
	autospammer: "AutoSpammer",
	autoleave: "AutoLeave",
	instafood: "InstaFood",
	powerexplosions: "PowerExplosions",
	automine: "AutoMine",
	tapremover: "TapRemover",
	fun: "Fun",
	derp: "Derp",
	twerk: "Twerk",
	cheats: "Cheats",
	add_item_to_inventory: "Add item to inventory",
	gamemode: "Gamemode",
	time: "Time",
	health: "Health",
	effects: "Effects",
	teleport: "Teleport",
	clear_inventory: "Clear Inventory",
	add_experience: "Add experience",
	weather: "Weather",
	home: "Home",
	misc: "Miscellaneous",
	player_customizer: "Player Customizer",
	webbrowser: "Webbrowser",
	console: "Console",
	online_players_list: "Online Players List"
}

MoreOptionsPE.loadTextsInCurrentLanguage = function() {
	switch(ModPE.getCurrentLanguage()) {
		case "de_DE": {
			Texts.coming_soon = "Erscheint bald...";
			Texts.off = "AUS";
			Texts.on = "AN";
			Texts.hacks = "Hacks";
			Texts.panic = "Panik";
			Texts.walk_through_blocks = "Durch Blöcke laufen";
			Texts.instaheal = "Sofortheilung";
			Texts.fly = "Fliegen";
			Texts.set_entities_on_fire = "Tiere anzünden";
			Texts.gamespeed = "Spielgeschwindigkeit";
			Texts.tapspammer = "Klick-Spammer";
			Texts.sneaking = "Ducken";
			Texts.zoom = "Zoomen";
			Texts.show_coords = "Koordinaten";
			Texts.instamine = "Instant-Abbauen";
			Texts.knockback = "Rückschlag";
			Texts.xray = "X-Ray";
			Texts.always_day = "Immer Tag";
			Texts.saddle_up = "Reiten";
			Texts.stackdrop = "64er Blöcke";
			Texts.tapteleporter = "Klick-Teleport";
			Texts.instakill = "Instant-Töten";
			Texts.signeditor = "Schilder bearbeiten";
			Texts.all_items_eatable = "Alle Tools essbar";
			Texts.sprinting = "Sprinten";
			Texts.jetpack = "Jetpack";
			Texts.highjump = "Höher springen";
			Texts.drone = "Drohne";
			Texts.parachute = "Fallschirm";
			Texts.tapnuker = "Klick-Explosion";
			Texts.walk_on_liquids = "Auf Flüssigkeiten laufen";
			Texts.autospammer = "AutoSpammen";
			Texts.autoleave = "AutoVerlassen";
			Texts.instafood = "Sofortessen";
			Texts.powerexplosions = "PowerExplosion";
			Texts.automine = "AutoAbbauen";
			Texts.tapremover = "Klick-Entferner";
			Texts.fun = "Spaß";
			Texts.derp = "Derp";
			Texts.twerk = "Twerk";
			Texts.trails = "Trails";
			Texts.cheats = "Cheats";
			Texts.add_item_to_inventory = "Gegenstand ins inventar hinzufügen";
			Texts.gamemode = "Spielmodus";
			Texts.time = "Zeit";
			Texts.health = "Leben";
			Texts.effects = "Effekte";
			Texts.teleport = "Teleport";
			Texts.clear_inventory = "Inventar Leeren";
			Texts.add_experience = "Level hinzufügen";
			Texts.weather = "Wetter";
			Texts.home = "Haus";
			Texts.misc = "Sonstiges";
			Texts.player_customizer = "Spieler Bearbeiter";
			Texts.webbrowser = "Internet Browser";
			Texts.console = "Konsole";
			Texts.online_players_list = "Online Spieler Liste";
			ModPE.log("Übersetzung erfolgreich geladen. (de_DE)");
			break;
		} default: {
			ModPE.log("Default texts successfully loaded.");
			break;
		}
	}
}


var moreoptionspemenu = null;
var menubtn = null;

var tpopx=0,tpopy=0;
var mX,mY;
var down=false;

//Menu btn
MoreOptionsPE.showMainButton = function() {
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
				MoreOptionsPE.loadMainSettings();

                moreoptionspemenu = new android.widget.PopupWindow(ctx);
                var layout = new android.widget.LinearLayout(ctx);

                var menuBtn = new android.widget.Button(ctx);
                var consoleBtn = new android.widget.Button(ctx);

                if(useOldIcon == "on") {
					var display = new android.util.DisplayMetrics();
					com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
					menuBtn = new android.widget.Button(ctx);
					menuBtn.setBackgroundDrawable(settingsButton);
					menuBtn.setAlpha(0.54);
					menuBtn.setLayoutParams(new android.widget.LinearLayout.LayoutParams(display.heightPixels / 10, display.heightPixels / 10));
					consoleBtn = minecraftButtonO(">_");
					consoleBtn.setAlpha(0.54);
					consoleBtn.setLayoutParams(new android.widget.LinearLayout.LayoutParams(display.heightPixels / 10, display.heightPixels / 10));
				}
				if(useOldIcon == "off") {
					var display = new android.util.DisplayMetrics();
					com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
					menuBtn = minecraftButtonO("•••");
					menuBtn.setAlpha(0.54);
					menuBtn.setLayoutParams(new android.widget.LinearLayout.LayoutParams(display.heightPixels / 10, display.heightPixels / 10));
					consoleBtn = minecraftButtonO(">_");
					consoleBtn.setAlpha(0.54);
					consoleBtn.setLayoutParams(new android.widget.LinearLayout.LayoutParams(display.heightPixels / 10, display.heightPixels / 10));
				}

				consoleBtn.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
						Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
						if(MoreOptionsPE.getMyScriptName() == null) {
							MoreOptionsPE.showMessage("warning", "Rename the mod to AgameR MoreOptions PE v" + CURRENT_VERSION + ".js!");
						}else {
							//moreoptionspemenu.dismiss();
							//closeHacksList();
							openMenu("console");
							//consoleScreen();
							//exitConsole();
						}
                    }
                }));

                consoleBtn.setOnLongClickListener(new android.view.View.OnLongClickListener() {
                    onLongClick: function(v, t) {
                        down = true;
                        ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(37);
                        android.widget.Toast.makeText(currentActivity, new android.text.Html.fromHtml("<b>AgameR MoreOptions PE</b> Now you can move the button!"), 0).show();
                        return true;
                    }
                });
                consoleBtn.setOnTouchListener(new android.view.View.OnTouchListener({
                    onTouch: function(v, e) {
                        if(!down) {
                            mX = e.getX()
                            mY = e.getY()
                        }
                        if(down) {
                            var a = e.getAction()
                            if(a == 2) {
                                var X = parseInt(e.getX() - mX) * -1 / 10;
                                var Y = parseInt(e.getY() - mY) * -1 / 10;
                                tpopx = tpopx + X;
                                tpopy = tpopy + Y;
                                moreoptionspemenu.update(parseInt(tpopx), parseInt(tpopy), -1, -1);
                            }
                            if(a == 1) down = false;
                        }
                        return false;
                    }
                }));

                menuBtn.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
						Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
						if(MoreOptionsPE.getMyScriptName() == null) {
							MoreOptionsPE.showMessage("warning", "Rename the mod to AgameR MoreOptions PE v" + CURRENT_VERSION + ".js!");
						}else {
						moreoptionspemenu.dismiss();
						closeHacksList();
						mainMenu();
						exit();
						}
                    }
                }));

                menuBtn.setOnLongClickListener(new android.view.View.OnLongClickListener() {
                    onLongClick: function(v, t) {
                        down = true;
                        ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(37);
                        android.widget.Toast.makeText(currentActivity, new android.text.Html.fromHtml("<b>AgameR MoreOptions PE</b> Now you can move the button!"), 0).show();
                        return true;
                    }
                });
                menuBtn.setOnTouchListener(new android.view.View.OnTouchListener({
                    onTouch: function(v, e) {
                        if(!down) {
                            mX = e.getX()
                            mY = e.getY()
                        }
                        if(down) {
                            var a = e.getAction()
                            if(a == 2) {
                                var X = parseInt(e.getX() - mX) * -1 / 10;
                                var Y = parseInt(e.getY() - mY) * -1 / 10;
                                tpopx = tpopx + X;
                                tpopy = tpopy + Y;
                                moreoptionspemenu.update(parseInt(tpopx), parseInt(tpopy), -1, -1);
                            }
                            if(a == 1) down = false;
                        }
                        return false;
                    }
                }));

                //layout.addView(consoleBtn);
                layout.addView(menuBtn);

                moreoptionspemenu.setContentView(layout);

                moreoptionspemenu.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                moreoptionspemenu.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);

				if(showMainButton == "on") {
                moreoptionspemenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, tpopx, tpopy);
				}

            } catch(error) {
                print("Error: " + error);
            }
        }
    });
}

var randomMessage = ["Welcome back!", "Have fun!", "Enjoy!", "Thanks for installing the mod!"];

MoreOptionsPE.getRandomMessage = function() {
    return randomMessage[Math.floor(randomMessage.length * Math.random())];
}

MoreOptionsPE.getMessage = function() {
	var calendarInstance = java.util.Calendar.getInstance();
	var day = calendarInstance.get(java.util.Calendar.DAY_OF_MONTH);
	var month = calendarInstance.get(java.util.Calendar.MONTH);
	if(month == java.util.Calendar.DECEMBER) {
		if(day == 25) {
			return "Merry Christmas! " + MoreOptionsPE.getRandomMessage();
		}else{
			var daysLeft = (25 - day);
			return daysLeft.toString() + " days left until Christmas! " + MoreOptionsPE.getRandomMessage();
		}
	}if(day == 1 && month == java.util.Calendar.JANUARY) {
		return "Happy new year! " + MoreOptionsPE.getRandomMessage();
	}else{
		return MoreOptionsPE.getRandomMessage();
	}
}

MoreOptionsPE.setHome = function() {
	HomeX = Entity.getX(getPlayerEnt());
    HomeY = Entity.getY(getPlayerEnt());
    HomeZ = Entity.getZ(getPlayerEnt());
    MoreOptionsPE.savePerWorldSettings();
    MoreOptionsPE.loadPerWorldSettings();
    clientMessage(ChatColor.BLUE + "[AgameR MoreOptions PE] " + ChatColor.WHITE + "Home successfully set!");
}

MoreOptionsPE.tpHome = function() {
	MoreOptionsPE.loadPerWorldSettings();
	if(HomeX == null || HomeY == null || HomeZ == null || HomeX == " " || HomeY == " " || HomeZ == " ") {
		clientMessage(ChatColor.BLUE + "[AgameR MoreOptions PE] " + ChatColor.WHITE + "You need to set your home using .sethome or the Set Home button first!");
	} else {
		Entity.setPosition(getPlayerEnt(), HomeX, HomeY, HomeZ);
		clientMessage(ChatColor.BLUE + "[AgameR MoreOptions PE] " + ChatColor.WHITE + "Succesfully teleported player to the current home location!");
	}
}

MoreOptionsPE.clearHome = function() {
	HomeX = " ";
    HomeY = " ";
    HomeZ = " ";
    MoreOptionsPE.savePerWorldSettings();
    MoreOptionsPE.loadPerWorldSettings();
    clientMessage(ChatColor.BLUE + "[AgameR MoreOptions PE] " + ChatColor.WHITE + "Home successfully cleared!");
}

MoreOptionsPE.showExperimentalMenu = function() {
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
				MoreOptionsPE.loadMainSettings();

                moreoptionspebetamenu = new android.widget.PopupWindow(ctx);
                var layout = new android.widget.LinearLayout(ctx);
				
				var display = new android.util.DisplayMetrics();
				com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
				var lolBtn = minecraftButtonO(">_");
				lolBtn.setAlpha(0.54);
				lolBtn.setLayoutParams(new android.widget.LinearLayout.LayoutParams(display.heightPixels / 10, display.heightPixels / 10));
				var lolBtn2 = minecraftButtonO("•••");
				lolBtn2.setAlpha(0.54);
				lolBtn2.setLayoutParams(new android.widget.LinearLayout.LayoutParams(display.heightPixels / 10, display.heightPixels / 10));

                lolBtn.setOnLongClickListener(new android.view.View.OnLongClickListener() {
                    onLongClick: function(v, t) {
                        down = true;
                        ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(37);
                        print("Now you can move the button!");
                        return true;
                    }
                });
                lolBtn.setOnTouchListener(new android.view.View.OnTouchListener({
                    onTouch: function(v, e) {
                        if(!down) {
                            mX = e.getX()
                            mY = e.getY()
                        }
                        if(down) {
                            var a = e.getAction()
                            if(a == 2) {
                                var X = parseInt(e.getX() - mX) * -1 / 10;
                                var Y = parseInt(e.getY() - mY) * -1 / 10;
                                tpopx = tpopx + X;
                                tpopy = tpopy + Y;
                                moreoptionspebetamenu.update(parseInt(tpopx), parseInt(tpopy), -1, -1);
                            }
                            if(a == 1) down = false;
                        }
                        return false;
                    }
                }));
				
				lolBtn2.setOnLongClickListener(new android.view.View.OnLongClickListener() {
                    onLongClick: function(v, t) {
                        down = true;
                        ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(37);
                        print("Now you can move the button!");
                        return true;
                    }
                });
                lolBtn2.setOnTouchListener(new android.view.View.OnTouchListener({
                    onTouch: function(v, e) {
                        if(!down) {
                            mX = e.getX()
                            mY = e.getY()
                        }
                        if(down) {
                            var a = e.getAction()
                            if(a == 2) {
                                var X = parseInt(e.getX() - mX) * -1 / 10;
                                var Y = parseInt(e.getY() - mY) * -1 / 10;
                                tpopx = tpopx + X;
                                tpopy = tpopy + Y;
                                moreoptionspebetamenu.update(parseInt(tpopx), parseInt(tpopy), -1, -1);
                            }
                            if(a == 1) down = false;
                        }
                        return false;
                    }
                }));

                layout.addView(lolBtn);
                layout.addView(lolBtn2);

                moreoptionspebetamenu.setContentView(layout);

                moreoptionspebetamenu.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                moreoptionspebetamenu.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);

                moreoptionspebetamenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, tpopx, tpopy);

            } catch(error) {
                print("Error: " + error);
            }
        }
    });
}

MoreOptionsPE.showMessage = function(type, message) {
	if(type == "warning") {
		    ctx.runOnUiThread(new java.lang.Runnable() {
            run: function() {
                try {
                    dialogGUI = new android.widget.PopupWindow();
					var warningText = warningSubTitle("Warning!");
					var newLineTextView = minecraftText("\n");
                    var text = minecraftText(message);
					var newLineTextView2 = minecraftText("\n");
                    var btn = minecraftButton("Ok");
                    var dialogLayout = new android.widget.LinearLayout(ctx);
                    var spritesheet = android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 0, 0, 16, 16), 16 * GuiSize, 16 * GuiSize, false);
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
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            dialog.dismiss();
                        }
                    });
                } catch(e) {
                    print("Error: " + e)
                }
            }
        });
	}if(type == "update") {
			ctx.runOnUiThread(new java.lang.Runnable() {
            run: function() {
                try {
                    dialogGUI = new android.widget.PopupWindow();
					var updateText = normalSubTitle("New version available!");
					var newLineTextView = minecraftText("\n");
                    var text = minecraftText(message);
					var newLineTextView2 = minecraftText("\n");
                    var btn = minecraftButton("Later");
                    var btnUpdate = minecraftButton("Install now!");
                    var dialogLayout = new android.widget.LinearLayout(ctx);
                    var spritesheet = android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 0, 0, 16, 16), 16 * GuiSize, 16 * GuiSize, false);
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
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            dialog.dismiss();
                        }
                    });
					btnUpdate.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
							dialog.dismiss();
							MoreOptionsPE.autoUpdater();
                        }
                    });
                } catch(e) {
                    print("Error: " + e)
                }
            }
        });
	}
}

function healthIndicators() {
    var mobs = Entity.getAll();

    for(var i = 0; i < mobs.length; i++) {


        /* now the variable "mobs" is now "mobs[i]",
        if you are asking why they are they now like this, it is because we split all gotten entities as their own, that means you can personalize them, (that is very useful when you are using Entity.get() scripts. So I can give all entities a personalized (as example) nametag which shows their own health. */


        var xq = Entity.getX(mobs[i]) - getPlayerX();

        var yq = Entity.getY(mobs[i]) - getPlayerY();

        var zq = Entity.getZ(mobs[i]) - getPlayerZ();



        if(xq * xq + yq * yq + zq * zq <= 14 * 14 && mobs[i] != getPlayerEnt()) {

            /* the 14 stands for, that the entities you want to give (as example) a nametag need to be in a radius of 14 blocks */

            /* You can disable it by removing the above script. */
            if(Entity.getEntityTypeId(mobs[i]) == 10) {
                Entity.setNameTag(mobs[i], nameColor + "Chicken " + healthColor + Entity.getHealth(mobs[i]) + "/4"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 11) {
                Entity.setNameTag(mobs[i], nameColor + "Cow " + healthColor + Entity.getHealth(mobs[i]) + "/10"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 12) {
                Entity.setNameTag(mobs[i], nameColor + "Pig " + healthColor + Entity.getHealth(mobs[i]) + "/10"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 13) {
                Entity.setNameTag(mobs[i], nameColor + "Sheep " + healthColor + Entity.getHealth(mobs[i]) + "/8"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 14) {
                Entity.setNameTag(mobs[i], nameColor + "Wolf " + healthColor + Entity.getHealth(mobs[i]) + "/8"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 15) {
                Entity.setNameTag(mobs[i], nameColor + "Villager " + healthColor + Entity.getHealth(mobs[i]) + "/20"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 16) {
                Entity.setNameTag(mobs[i], nameColor + "Mooshroom " + healthColor + Entity.getHealth(mobs[i]) + "/10"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 17) {
                Entity.setNameTag(mobs[i], nameColor + "Squid " + healthColor + Entity.getHealth(mobs[i]) + "/10"); //spawn your wither in x y and z
            }
			if(Entity.getEntityTypeId(mobs[i]) == 18) {
                Entity.setNameTag(mobs[i], nameColor + "Rabbit " + healthColor + Entity.getHealth(mobs[i]) + "/3"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 19) {
                Entity.setNameTag(mobs[i], nameColor + "Bat " + healthColor + Entity.getHealth(mobs[i]) + "/6"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 20) {
                Entity.setNameTag(mobs[i], nameColor + "Iron Golem " + healthColor + Entity.getHealth(mobs[i]) + "/100"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 21) {
                Entity.setNameTag(mobs[i], nameColor + "Snow Golem " + healthColor + Entity.getHealth(mobs[i]) + "/10"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 22) {
                Entity.setNameTag(mobs[i], nameColor + "Ocelot " + healthColor + Entity.getHealth(mobs[i]) + "/10"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 32) {
                Entity.setNameTag(mobs[i], nameColor + "Zombie " + healthColor + Entity.getHealth(mobs[i]) + "/20"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 33) {
                Entity.setNameTag(mobs[i], nameColor + "Creeper " + healthColor + Entity.getHealth(mobs[i]) + "/20"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 34) {
                Entity.setNameTag(mobs[i], nameColor + "Skeleton " + healthColor + Entity.getHealth(mobs[i]) + "/20"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 35) {
                Entity.setNameTag(mobs[i], nameColor + "Spider " + healthColor + Entity.getHealth(mobs[i]) + "/16"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 36) {
                Entity.setNameTag(mobs[i], nameColor + "Zombie Pigman " + healthColor + Entity.getHealth(mobs[i]) + "/20"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 37) {
                Entity.setNameTag(mobs[i], nameColor + "Slime " + healthColor + Entity.getHealth(mobs[i]) + "/16"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 38) {
                Entity.setNameTag(mobs[i], nameColor + "Enderman " + healthColor + Entity.getHealth(mobs[i]) + "/40"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 39) {
                Entity.setNameTag(mobs[i], nameColor + "Silverfish " + healthColor + Entity.getHealth(mobs[i]) + "/8"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 40) {
                Entity.setNameTag(mobs[i], nameColor + "Cave Spider " + healthColor + Entity.getHealth(mobs[i]) + "/12"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 41) {
                Entity.setNameTag(mobs[i], nameColor + "Ghast " + healthColor + Entity.getHealth(mobs[i]) + "/10"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 42) {
                Entity.setNameTag(mobs[i], nameColor + "Magma Cube " + healthColor + Entity.getHealth(mobs[i]) + "/16"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 43) {
                Entity.setNameTag(mobs[i], nameColor + "Blaze " + healthColor + Entity.getHealth(mobs[i]) + "/20"); //spawn your wither in x y and z
            }
        }
    }
}

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

const CURRENT_VERSION = "1.2.3";
var latestVersion;
var latestPocketEditionVersion;
var minimalMCPEVersion = "0.12.0";
var targetMCPEVersion = "0.13.x";
var mcpeVersion = ModPE.getMinecraftVersion();
const MOD_AUTHOR = "peacestorm (@AgameR_Modder)";
const MOD_CREDITS = "@MyNameIsTriXz (helped me the most), @Desno365, @RedstoneGunMade, @AntiModPE, @tylernomc, @TBPM_MODDER_";
const MOD_CHANGELOG = "Fixed button sounds, Better Grass texture and particles aren't wrong anymore, fixed Player Customizer showing the same text 36 times when the selected inventory slot is empty, fixed the bug where the player could be teleported to bedrock after clearing the Home location and using the Teleport to Home function, improved Player Customizer UI, improved Settings UI, added more German translations";

var currentActivity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var sdcard = android.os.Environment.getExternalStorageDirectory();

var activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

var f = 0;
var count = 0;
var twerkCounter = 0;

var defaultDestroyTimeAll = [
    null, 1.5, 0.6, 0.5, 2, 2, 0, -1, null, null, null, null, 0.5, 0.6, 3, 3, 3, 2, 0.2, 0.6, 0.3, 3, 3, null, 0.8, null, 0.2, 0.7, null, null, 4, 0, 0, null, null, 0.8, null, 0, 0, 0, 0, 3, 5, 2, 2, 2, 0, 1.5, 2, 50, 0, 0, null, 2, 2.5, null, 3, 5, 2.5, 0, 0.6, 3.5, 3.5, 1, 3, 0.4, 0.7, 2, 1, null, null, 5, null, 3, 3, null, null, null, 0.1, 0.5, 0.2, 0.4, 0.6, 0, null, 2, 1, 0.4, 0.3, null, 1, 0.5, null, null, -1, 3, null, 1.5, null, null, 5, 0.3, 1, 0, 0, null, 2, 2, 1.5, null, null, 2, null, 2, null, null, null, null, null, null, null, null, null, null, null, null, null, 0.8, null, null, null, null, null, 2, 2, 2, null, null, 2, null, 0, 0, null, null, null, null, null, null, null, null, null, null, null, null, 0.8, 0.8, 2, 2, null, null, null, null, null, null, null, null, null, null, null, 0.5, 0.1, 5, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, 3.5, 50, 5, 0.6, 0.6, 5, null, null, null, null, 0
];

Block.setDestroyTimeAll = function(destroyTime) {
    for(i = 0; i < 256; i++) {
        Block.setDestroyTime(i, destroyTime);
    }
}

Block.setDestroyTimeDefaultAll = function() {
    for(i = 0; i < 256; i++) {
        Block.setDestroyTime(i, defaultDestroyTimeAll[i]);
    }
}

Block.setDestroyTimeDoubleDefaultAll = function() {
    for(i = 0; i < 256; i++) {
        Block.setDestroyTime(i, defaultDestroyTimeAll[i] * 2);
    }
}

ModPE.getCurrentUsedSkin = function() {
    var file = new java.io.File("/sdcard/games/com.mojang/minecraftpe/options.txt");
    var br = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(file)));
    var read, skin;
    while((read = br.readLine()) != null) {
        if(read.split(":")[0] == "game_skintypefull") {
            skin = read.split(":")[1];
            break;
        }
    }
    br.close();
    return skin;
};

var villagerSkin = ["butcher", "farmer", "librarian", "priest", "smith", "villager"];
var sheepSkin = ["sheep_0", "sheep_1", "sheep_2", "sheep_3", "sheep_4", "sheep_5", "sheep_6", "sheep_7", "sheep_8", "sheep_9", "sheep_10", "sheep_11", "sheep_12", "sheep_13", "sheep_14", "sheep_15"];

function getRandomVillagerSkin() {
    return villagerSkin[Math.floor(villagerSkin.length * Math.random())];
}

function getRandomSheepSkin() {
    return sheepSkin[Math.floor(sheepSkin.length * Math.random())];
}

var initialized = false;

function selectLevelHook() {
}

function newLevel() {
    if(initialized == false) {
		new java.lang.Thread(new java.lang.Runnable() {
        run: function() {
            MoreOptionsPE.getLatestVersion();
            if(latestVersion != CURRENT_VERSION && latestVersion != undefined) {
                clientMessage(ChatColor.BLUE + "[AgameR MoreOptions PE]" + ChatColor.WHITE + " There is a new version available (v" + latestVersion + " for Minecraft Pocket Edition v" + latestPocketEditionVersion + ")!");
				MoreOptionsPE.showMessage("update", "There is a new version available (v" + latestVersion + " for Minecraft Pocket Edition v" + latestPocketEditionVersion + ")!");
            } else {
                currentActivity.runOnUiThread(new java.lang.Runnable() {
                    run: function() {
                        android.widget.Toast.makeText(currentActivity, new android.text.Html.fromHtml("<b>AgameR MoreOptions PE</b> You have the latest version"), 0).show();
                    }
                });
            }
        }
		}).start();
        initialized = true;
        clientMessage(ChatColor.BLUE + "[AgameR MoreOptions PE]" + ChatColor.WHITE + " Initialized");
		if(MoreOptionsPE.getMyScriptName() == null) {
		MoreOptionsPE.showMessage("warning", "Rename the mod to AgameR MoreOptions PE v" + CURRENT_VERSION + ".js!");
		}
		if(ModPE.getMinecraftVersion < minimalMCPEVersion) {
		MoreOptionsPE.showMessage("warning", "The Minecraft version you use is not supported! Upgrade your Minecraft PE or download a supported version!");
		}
    }
    MoreOptionsPE.loadMainSettings();
    MoreOptionsPE.loadPerWorldSettings();
    MoreOptionsPE.loadPerWorldGamemodeSettings();
    MoreOptionsPE.initializeOptiFine();
	if(hardcore == "on") {
		Block.setDestroyTimeDoubleDefaultAll();
	}else {
		Block.setDestroyTimeDefaultAll();
	}
    if(Level.getGameMode() == 1) {
        State2 = true;
    }
    if(showList == "on") {
        showHacksList();
    }
}


MoreOptionsPE.getLatestVersion = function() {
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
        while((rowVersion = bufferedVersionReader.readLine()) != null) {
            loadedVersion += rowVersion;
        }
        latestVersion = loadedVersion.split(" ")[0];
        latestPocketEditionVersion = loadedVersion.split(" ")[1];

        // close what needs to be closed
        bufferedVersionReader.close();

        // test
        //clientMessage(CURRENT_VERSION + " " + latestVersion);
    } catch(err) {
        clientMessage(ChatColor.BLUE + "[AgameR MoreOptions PE]" + ChatColor.WHITE + " Can't check for updates, please check your Internet connection.");
        ModPE.log("[AgameR MoreOptions PE] MoreOptionsPE.getLatestVersion() caught an error: " + err);
    }
}

MoreOptionsPE.fullScreenMessage = function(text) {
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
                var newLineText = minecraftText("\n");
                var fullScreenText = minecraftText(text);
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

MoreOptionsPE.autoUpdater = function() {
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		var ru  = new java.lang.Runnable({ run: function() {
			try {
				var scriptUrl = new java.net.URL("https://raw.githubusercontent.com/peacestorm/ModPE-scripts/master/AgameR_MoreOptions_PE.js");
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
				var scriptFile = new java.io.File(patchesFolder, "AgameR MoreOptions PE v" + latestVersion + ".js");
				var printWriter = new java.io.PrintWriter(scriptFile);
				printWriter.write(newScript);
				printWriter.flush();
				printWriter.close();
				try {
					/*exitUI.dismiss();
					menu.dismiss();
					hacksList.dismiss();*/
					net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(scriptFile, false);
					net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(scriptFile, true);
					MoreOptionsPE.fullScreenMessage("Now disable the old version of the mod and restart BlockLauncher!");
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

MoreOptionsPE.getMyScriptName = function() {
	var scripts = net.zhuoweizhang.mcpelauncher.ScriptManager.scripts;
    for(var i = 0; i < scripts.size(); i++) {
        var script = scripts.get(i);
        var scope = script.scope;
        if(org.mozilla.javascript.ScriptableObject.hasProperty(scope, "MoreOptionsPE"))
            return script.name;
	}
}

MoreOptionsPE.allItemsEatable = function(onOrOff) {
    if(onOrOff == 1) {
        for(i = 255; i < 382; i++) {
            ModPE.setFoodItem(i, "apple_golden", 0, 5, "Item [EATABLE]");
        }
        for(i = 384; i < 512; i++) {
            ModPE.setFoodItem(i, "apple_golden", 0, 5, "Item [EATABLE]");
        }
    } else if(onOrOff == 0) {
        //ModPE.setItem(4000,"random_spawn_egg",0,"Spawn Random Mob");
    }
}

MoreOptionsPE.xRay = function(onOrOff) {
    if(onOrOff == 1) {
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
    } else if(onOrOff == 0) {
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
        Block.setRenderLayer(31, 1);
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
        Block.setRenderLayer(102, 1);
        Block.setRenderLayer(103, OpaqLayer);
        Block.setRenderLayer(104, OpaqLayer);
        Block.setRenderLayer(105, OpaqLayer);
        Block.setRenderLayer(106, 1);
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
        Block.setRenderLayer(175, 1);
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

MoreOptionsPE.saveMainSettings = function() {
    java.io.File(settingsPath).mkdirs();
    var newFile = new java.io.File(settingsPath, "moreoptionspe.txt");
    newFile.createNewFile();
    var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
    outWrite.append(theme.toString());
    outWrite.append("," + crossButtonPosition.toString()); //We need to separate all variables. We split them with ","
    outWrite.append("," + spamMessage.toString());
    outWrite.append("," + betterGrass.toString());
    outWrite.append("," + fullScreen.toString());
    outWrite.append("," + showList.toString());
    outWrite.append("," + useOldIcon.toString());
    outWrite.append("," + showMainButton.toString());
    outWrite.append("," + gameSpeedHackSetting.toString());
    outWrite.append("," + betterGlass.toString());
    outWrite.append("," + experimentalFeatures.toString());
    outWrite.append("," + defaultUrl.toString());
    //outWrite.append("," + notepadText.toString());

    outWrite.close();
}

MoreOptionsPE.loadMainSettings = function() {
    if(!java.io.File(settingsPath + "moreoptionspe.txt").exists())
        return;
    var file = new java.io.File(settingsPath + "moreoptionspe.txt");
    var fos = new java.io.FileInputStream(file);
    var str = new java.lang.StringBuilder();
    var ch;
    while((ch = fos.read()) != -1)
        str.append(java.lang.Character(ch));
	if(str.toString().split(",")[0] != null && str.toString().split(",")[0] != undefined) {
    theme = str.toString().split(",")[0]; //Here we split text by ","
	}if(str.toString().split(",")[1] != null && str.toString().split(",")[1] != undefined) {
    crossButtonPosition = str.toString().split(",")[1];
	}if(str.toString().split(",")[2] != null && str.toString().split(",")[2] != undefined) {
    spamMessage = str.toString().split(",")[2];
	}if(str.toString().split(",")[3] != null && str.toString().split(",")[3] != undefined) {
    betterGrass = str.toString().split(",")[3];
	}if(str.toString().split(",")[4] != null && str.toString().split(",")[4] != undefined) {
    fullScreen = str.toString().split(",")[4];
	}if(str.toString().split(",")[5] != null && str.toString().split(",")[5] != undefined) {
    showList = str.toString().split(",")[5];
	}if(str.toString().split(",")[6] != null && str.toString().split(",")[6] != undefined) {
    useOldIcon = str.toString().split(",")[6];
	}if(str.toString().split(",")[7] != null && str.toString().split(",")[7] != undefined) {
    showMainButton = str.toString().split(",")[7];
	}if(str.toString().split(",")[8] != null && str.toString().split(",")[8] != undefined) {
    gameSpeedHackSetting = str.toString().split(",")[8];
	}if(str.toString().split(",")[9] != null && str.toString().split(",")[9] != undefined) {
    betterGlass = str.toString().split(",")[9];
	}if(str.toString().split(",")[10] != null && str.toString().split(",")[10] != undefined) {
    experimentalFeatures = str.toString().split(",")[10];
	}if(str.toString().split(",")[11] != null && str.toString().split(",")[11] != undefined) {
    defaultUrl = str.toString().split(",")[11];
	}
    fos.close();
}

var worldPath = android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftWorlds/" + Level.getWorldDir() + "/";

MoreOptionsPE.savePerWorldSettings = function() {
    worldPath = android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftWorlds/" + Level.getWorldDir() + "/";
    java.io.File(worldPath).mkdirs();
    var newFile = new java.io.File(worldPath, "moreoptionspe_data.txt");
    newFile.createNewFile();
    var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
    outWrite.append(HomeX.toString());
    outWrite.append("," + HomeY.toString()); //We need to separate all variables. We split them with ","
    outWrite.append("," + HomeZ.toString());
    outWrite.close();
}

MoreOptionsPE.loadPerWorldSettings = function() {
    worldPath = android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftWorlds/" + Level.getWorldDir() + "/";
    if(!java.io.File(worldPath + "moreoptionspe_data.txt").exists())
        return;
    var file = new java.io.File(worldPath + "moreoptionspe_data.txt");
    var fos = new java.io.FileInputStream(file);
    var str = new java.lang.StringBuilder();
    var ch;
    while((ch = fos.read()) != -1)
        str.append(java.lang.Character(ch));
	if(str.toString().split(",")[0] != null && str.toString().split(",")[0] != undefined) {
    HomeX = str.toString().split(",")[0]; //Here we split text by ","
	}if(str.toString().split(",")[1] != null && str.toString().split(",")[1] != undefined) {
    HomeY = str.toString().split(",")[1];
	}if(str.toString().split(",")[2] != null && str.toString().split(",")[2] != undefined) {
    HomeZ = str.toString().split(",")[2];
	}
    fos.close();
}

MoreOptionsPE.savePerWorldGamemodeSettings = function() {
    worldPath = android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftWorlds/" + Level.getWorldDir() + "/";
    java.io.File(worldPath).mkdirs();
    var newFile = new java.io.File(worldPath, "moreoptionspe_gamemode_data.txt");
    newFile.createNewFile();
    var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
    outWrite.append(hardcore.toString());
    outWrite.append("," + spectator.toString()); //We need to separate all variables. We split them with ","
    outWrite.close();
}

MoreOptionsPE.loadPerWorldGamemodeSettings = function() {
    worldPath = android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftWorlds/" + Level.getWorldDir() + "/";
    if(!java.io.File(worldPath + "moreoptionspe_gamemode_data.txt").exists())
        return;
    var file = new java.io.File(worldPath + "moreoptionspe_gamemode_data.txt");
    var fos = new java.io.FileInputStream(file);
    var str = new java.lang.StringBuilder();
    var ch;
    while((ch = fos.read()) != -1)
        str.append(java.lang.Character(ch));
    hardcore = str.toString().split(",")[0]; //Here we split text by ","
    spectator = str.toString().split(",")[1];
    fos.close();
}

/*OptiFine things*/

MoreOptionsPE.initializeOptiFine = function() {
    if(betterGrass == "normal") {
        Block.defineBlock(2, "Grass Block", [
            ["dirt", 0], //bottom
            ["grass", 2], //top
            ["grass", 2],
            ["grass", 2],
            ["grass", 2],
            ["grass", 2]
        ], 2, 32, 4);
        Block.setDestroyTime(2, 0.6);
    }
    if(betterGrass == "fast") {
        Block.defineBlock(2, "Grass Block", [
            ["dirt", 0], //bottom
            ["grass", 2], //top
            ["grass", 2],
            ["grass", 2],
            ["grass", 2],
            ["grass", 2]
        ], 2);
        Block.setDestroyTime(2, 0.6);
    }
    if(betterGrass == "off") {
        Block.defineBlock(2, "Grass Block", [
            ["dirt", 0], //bottom
            ["grass", 2], //top
            ["grass", 3],
            ["grass", 3],
            ["grass", 3],
            ["grass", 3]
        ], 2);
        Block.setDestroyTime(2, 0.6);
    }
    if(betterGlass == "on") {
        Block.defineBlock(20, "Glass", [
            ["better_glass", 0], //bottom
            ["better_glass", 0], //top
            ["better_glass", 0],
            ["better_glass", 0],
            ["better_glass", 0],
            ["better_glass", 0]
        ]);
        Block.setDestroyTime(2, 0.6);
    }
    if(betterGlass == "off") {
        Block.defineBlock(20, "Glass", [
            ["glass", 0], //bottom
            ["glass", 0], //top
            ["glass", 0],
            ["glass", 0],
            ["glass", 0],
            ["glass", 0]
        ]);
        Block.setDestroyTime(2, 0.6);
    }
}

MoreOptionsPE.initializeOptiFine();
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
var GetGui = function() {
    return android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/gui.png"));
};
var TrimImage = function(bitmap, x, y, width, height) {
    return android.graphics.Bitmap.createBitmap(bitmap, x, y, width, height);
};
var GetSpritesheet = function() {
    return android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/spritesheet.png"));
};
var GetTouchgui = function() {
    return android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/touchgui.png"));
};
var GetGui = function() {
    return android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/gui.png"));
};

var trimImage = function(bitmap, x, y, width, height) {
    return android.graphics.Bitmap.createBitmap(bitmap, x, y, width, height);
};

var getStretchedImage = function(bm, x, y, stretchWidth, stretchHeight, width, height) {
    var blank = android.graphics.Bitmap.createBitmap(width, height, android.graphics.Bitmap.Config.ARGB_8888);
    var Bitmap = android.graphics.Bitmap;
    var part1 = Bitmap.createBitmap(bm, 0, 0, x, y);
    var part2 = Bitmap.createBitmap(bm, x, 0, stretchWidth, y);
    var part3 = Bitmap.createBitmap(bm, x + stretchWidth, 0, bm.getWidth() - x - stretchWidth, y);
    var part4 = Bitmap.createBitmap(bm, 0, y, x, stretchHeight);
    var part5 = Bitmap.createBitmap(bm, x, y, stretchWidth, stretchHeight);
    var part6 = Bitmap.createBitmap(bm, x + stretchWidth, y, bm.getWidth() - x - stretchWidth, stretchHeight);
    var part7 = Bitmap.createBitmap(bm, 0, y + stretchHeight, x, bm.getHeight() - y - stretchHeight);
    var part8 = Bitmap.createBitmap(bm, x, y + stretchHeight, stretchWidth, bm.getHeight() - y - stretchHeight);
    var part9 = Bitmap.createBitmap(bm, x + stretchWidth, y + stretchHeight, bm.getWidth() - x - stretchWidth, bm.getHeight() - y - stretchHeight);
    var canvas = new android.graphics.Canvas(blank);
    canvas.drawBitmap(part1, 0, 0, null);
    canvas.drawBitmap(Bitmap.createScaledBitmap(part2, width - bm.getWidth() + stretchWidth, y, false), x, 0, null);
    canvas.drawBitmap(part3, width - bm.getWidth() + stretchWidth + x, 0, null);
    canvas.drawBitmap(Bitmap.createScaledBitmap(part4, x, height - bm.getHeight() + stretchHeight, false), 0, y, null);
    canvas.drawBitmap(Bitmap.createScaledBitmap(part5, width - bm.getWidth() + stretchWidth, height - bm.getHeight() + stretchHeight, false), x, y, null);
    canvas.drawBitmap(Bitmap.createScaledBitmap(part6, part3.getWidth(), height - bm.getHeight() + stretchHeight, false), width - bm.getWidth() + stretchWidth + x, y, null);
    canvas.drawBitmap(part7, 0, height - bm.getHeight() + stretchHeight + y, null);
    canvas.drawBitmap(Bitmap.createScaledBitmap(part8, width - bm.getWidth() + stretchWidth, part7.getHeight(), false), x, height - bm.getHeight() + stretchHeight + y, null);
    canvas.drawBitmap(part9, width - bm.getWidth() + stretchWidth + x, height - bm.getHeight() + stretchHeight + y, null);

    return new android.graphics.drawable.BitmapDrawable(blank);
};

var metrics = new android.util.DisplayMetrics();
activity.getWindowManager().getDefaultDisplay().getMetrics(metrics);
var displayHeight = metrics.heightPixels;
var displayWidth = metrics.widthPixels;

var headerGUI = null;

function header(str) {
    activity.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var layout = new android.widget.LinearLayout(activity);
                layout.setOrientation(1);

                var spritesheet = android.graphics.Bitmap.createScaledBitmap(android.graphics.Bitmap.createBitmap(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/touchgui.png")), 153, 27, 8, 24), 256, 256, false);

                var button = new android.widget.Button(activity);

                button.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(spritesheet));

                button.setText(str);
                button.setTypeface(mcpeFont);
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

                headerGUI.showAtLocation(activity.getWindow().getDecorView(), android.view.Gravity.TOP | android.view.Gravity.CENTER, 0, 0);
            } catch(err) {
                print('An error occured: ' + err);
            }
        }
    }));
}

function minecraftText(text) {
    var defaultTextView = new android.widget.TextView(ctx);
    defaultTextView.setText(text);
    defaultTextView.setTypeface(mcpeFont);
    defaultTextView.setTextColor(android.graphics.Color.WHITE);
    if(android.os.Build.VERSION.SDK_INT > 19) { // KITKAT
        defaultTextView.setShadowLayer(1, Math.round(defaultTextView.getLineHeight() / 8), Math.round(defaultTextView.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
    } else {
        defaultTextView.setShadowLayer(0.0001, Math.round(defaultTextView.getLineHeight() / 8), Math.round(defaultTextView.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
    }
    return defaultTextView;
}

function minecraftEditText() {
    var defaultEditText = new android.widget.EditText(ctx);
    defaultEditText.setTypeface(mcpeFont);
    defaultEditText.setTextColor(android.graphics.Color.WHITE);
    if(android.os.Build.VERSION.SDK_INT > 19) { // KITKAT
        defaultEditText.setShadowLayer(1, Math.round(defaultEditText.getLineHeight() / 8), Math.round(defaultEditText.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
    } else {
        defaultEditText.setShadowLayer(0.0001, Math.round(defaultEditText.getLineHeight() / 8), Math.round(defaultEditText.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
    }
    return defaultEditText;
}

// The following code is copyright of Desno365, licensed under the Creative Commons Attribution-NonCommercial 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/4.0/

var deviceDensity = metrics.density;

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

	var title = minecraftText(subtitle);
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

	var title = minecraftText(subtitle);
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

	var title = minecraftText(subtitle);
	title.setTextColor(android.graphics.Color.WHITE);
	title.setBackgroundDrawable(bg);
	title.setPadding(padding, padding, padding, padding);

	return title;
}

//End of Desno365's code

function minecraftButtonO(text) //Main button
{
    var defaultButton = new android.widget.Button(ctx);
    defaultButton.setText(text);
    defaultButton.setOnTouchListener(new android.view.View.OnTouchListener() {
        onTouch: function(v, event) {
            defaultButton.setSoundEffectsEnabled(false);
            var action = event.getActionMasked();
            if(action == android.view.MotionEvent.ACTION_CANCEL || action == android.view.MotionEvent.ACTION_UP) {
                var bNP = unmcpeBtn;
                bNP.setFilterBitmap(false);
                bNP.setAntiAlias(false);
                defaultButton.setBackgroundDrawable(bNP);
                defaultButton.setTextColor(android.graphics.Color.parseColor("#FFDDDDDD"));
                defaultButton.setPadding(0, 0, 0, 0);
            } else {
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
    if(android.os.Build.VERSION.SDK_INT > 19) { // KITKAT
        defaultButton.setShadowLayer(1, Math.round(defaultButton.getLineHeight() / 8), Math.round(defaultButton.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
    } else {
        defaultButton.setShadowLayer(0.0001, Math.round(defaultButton.getLineHeight() / 8), Math.round(defaultButton.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
    }
    defaultButton.setPadding(0, 0, 0, 0);
    defaultButton.setLineSpacing(0, 1.15);
    return defaultButton;
}

function minecraftButtonRed(text) //menu buttons
{
    var defaultButton = new android.widget.Button(ctx);
    defaultButton.setText(text);
    defaultButton.setOnTouchListener(new android.view.View.OnTouchListener() {
        onTouch: function(v, event) {
            defaultButton.setSoundEffectsEnabled(false);
            var action = event.getActionMasked();
            if(action == android.view.MotionEvent.ACTION_CANCEL || action == android.view.MotionEvent.ACTION_UP) {
                var bNP = unclicked_image;
                bNP.setFilterBitmap(false);
                bNP.setAntiAlias(false);
                defaultButton.setBackgroundDrawable(bNP);
                defaultButton.setTextColor(android.graphics.Color.RED);
                defaultButton.setPadding(0, 0, 0, 0);
            } else {
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
    if(android.os.Build.VERSION.SDK_INT > 19) { // KITKAT
        defaultButton.setShadowLayer(1, Math.round(defaultButton.getLineHeight() / 8), Math.round(defaultButton.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
    } else {
        defaultButton.setShadowLayer(0.0001, Math.round(defaultButton.getLineHeight() / 8), Math.round(defaultButton.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
    }
    defaultButton.setPadding(0, 0, 0, 0);
    defaultButton.setLineSpacing(0, 1.15);
    return defaultButton;
}

function minecraftButton(text) //menu buttons
{
    var defaultButton = new android.widget.Button(ctx);
    defaultButton.setText(text);
    defaultButton.setOnTouchListener(new android.view.View.OnTouchListener() {
        onTouch: function(v, event) {
            defaultButton.setSoundEffectsEnabled(false);
            var action = event.getActionMasked();
            if(action == android.view.MotionEvent.ACTION_CANCEL || action == android.view.MotionEvent.ACTION_UP) {
                var bNP = unclicked_image;
                bNP.setFilterBitmap(false);
                bNP.setAntiAlias(false);
                defaultButton.setBackgroundDrawable(bNP);
                defaultButton.setTextColor(android.graphics.Color.parseColor("#FFDDDDDD"));
                defaultButton.setPadding(0, 0, 0, 0);
            } else {
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
    if(android.os.Build.VERSION.SDK_INT > 19) { // KITKAT
        defaultButton.setShadowLayer(1, Math.round(defaultButton.getLineHeight() / 8), Math.round(defaultButton.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
    } else {
        defaultButton.setShadowLayer(0.0001, Math.round(defaultButton.getLineHeight() / 8), Math.round(defaultButton.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
    }
    defaultButton.setPadding(0, 0, 0, 0);
    defaultButton.setLineSpacing(0, 1.15);
    return defaultButton;
}

function minecraftButtonX(text) //menu buttons
{
    var defaultButton = new android.widget.Button(ctx);
    defaultButton.setText(text);
    defaultButton.setOnTouchListener(new android.view.View.OnTouchListener() {
        onTouch: function(v, event) {
            defaultButton.setSoundEffectsEnabled(false);
            var action = event.getActionMasked();
            if(action == android.view.MotionEvent.ACTION_CANCEL || action == android.view.MotionEvent.ACTION_UP) {
                var bNP = unmcpeX;
                bNP.setFilterBitmap(false);
                bNP.setAntiAlias(false);
                defaultButton.setBackgroundDrawable(bNP);
                defaultButton.setTextColor(android.graphics.Color.parseColor("#FFDDDDDD"));
                defaultButton.setPadding(0, 0, 0, 0);
            } else {
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
    if(android.os.Build.VERSION.SDK_INT > 19) { // KITKAT
        defaultButton.setShadowLayer(1, Math.round(defaultButton.getLineHeight() / 8), Math.round(defaultButton.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
    } else {
        defaultButton.setShadowLayer(0.0001, Math.round(defaultButton.getLineHeight() / 8), Math.round(defaultButton.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
    }
    defaultButton.setPadding(0, 0, 0, 0);
    defaultButton.setLineSpacing(0, 1.15);
    return defaultButton;
}

var pathFont = android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang";
var fontFont = " AAEAAAAKAIAAAwAgT1MvMmYu99QAAAEoAAAAYGNtYXCJMItJAAAEyAAAALRnbHlmMIJYzgAAByAAADXkaGVhZPV0Di8AAACsAAAANmhoZWEIAwLRAAAA5AAAACRobXR4LIADgAAAAYgAAANAbG9jYV+9UiwAAAV8AAABom1heHAA2wAoAAABCAAAACBuYW1l4R57mwAAPQQAAAfmcG9zdABpADMAAETsAAAAIAABAAAAAQAAjaZTG18PPPUAAAQAAAAAAMjvOpgAAAAAyPCPmgAA/4AEgAOAAAAACAACAAAAAAAAAAEAAAOA/4AAAAUAAAD9gASAAAEAAAAAAAAAAAAAAAAAAADQAAEAAADQACgACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgJnAZAABQAEAgACAAAA/8ACAAIAAAACAAAzAMwAAAAABAAAAAAAAACAAAAHAAAACgAAAAAAAAAARlNUUgBAAA0hIgOA/4AAAAOAAIAAAAH7AAAAAAKAA4AAAAAgAAABAAAAAAAAAAAAAAABAAAAAQAAAAIAAAACgAAAAwAAAAMAAAADAAAAAQAAAAKAAAACgAAAAoAAAAMAAAABAAAAAwAAAAEAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAEAAAABAAAAAoAAAAMAAAACgAAAAoAAAAOAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAIAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAIAAAADAAAAAgAAAAMAAAADAAAAAYAAAAMAAAADAAAAAwAAAAMAAAADAAAAAoAAAAMAAAADAAAAAQAAAAMAAAACgAAAAYAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAACAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAoAAAAEAAAACgAAAA4AAAAEAAAACgAAAAoAAAAIAAAADAAAAAQAAAAMAAAADgAAAAgAAAAMAAAADAAAAAoAAgAOAAAADAAAAAgAAAAMAAAABgAAAAYAAAAMAAYADAAAAAwAAAAEAAAACgACAAQAAAAIAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAOAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAKAAAADAACAAwAAAAIAAAADgAAAA4AAAAMAAAADAAAAAwAAAAOAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADgAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAABgAAAAYAAAAMAAAACgACAA4AAAAMAAAADAAAAAwAAAAOAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAA4AAAAGAAAABgAAAAYAAAAGAAAACgAAAAoAAAAKAAAACAAAAAYAAAAMAAAAAgAAAAYAAAAMAAAAFAAAAAAAAAgAAAAMAAAAUAAMAAQAAABQABACgAAAAJAAgAAQABAAAAA0AfgCmAN4A7wD/AVMBeCAUIB4gICAiICYgOiCsISL//wAAAAAADQAgAKEAqADgAPEBUgF4IBQgGCAgICIgJiA5IKwhIv//AAH/9f/j/8H/wP+//77/bP9I4K3gquCp4KjgpeCT4CLfrQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKgAqACoAKgA8AFAAgACuAOABIAEuAVIBdgGaAbIBvgHKAdYB+AIoAj4CcAKkAsgC7gMWAzQDagOWA6oDvgPsBAAELARYBH4EmgTABOQE/gUUBSgFSgViBXYFjgW8BcoF7gYSBjIGTgZ6BpwGyAbaBvQHHAdAB3oHngfGB9gIAAgSCDQIQAhMCGwIkAi0CNYI9gkSCTYJVgloCYgJsgnECegJ/goeCkQKaAqICqoKxgrcCwALGgtSC3ILkgu4C8QL6gwIDBoMNAxUDHYMqgy+DOwNDA0eDVwNbA16DZ4Nqg2+DdwN8A4CDhAOJA5EDlAOYg5wDoQOwA76Dy4PZg+OD7IP1BACEDQQXBB+EKAQ0hDwEQ4ROhFcEXgRlBG8EdwSABIyEloSghK0EuoTFhNOE3gTmBO4E+QUChQ2FFwUghSoFNoVEBU8FWIVjhXAFegWDhZAFmwWgBaSFrIWyhbyFxoXQhd0F6oX1hfwGBgYNBhQGHgYmBjAGOYZEhkyGWAZkBmcGa4ZwBnSGeYaBBoiGkAaVhpkGnoakBqmGtAa8gAAAAUAAAAAA4ADgAADAAcACwASABYAACU1IxUlNSEVNzUjFSU1IyIHBhUBESERAcCPAR3+44+PAR2OPCkq/s8DgH+OjqaPj6aPj6eNKSo6/Y4DgPyAAAIAAAAAAIADgAADAAcAADE1MxUDETMRgICAgIABAAKA/YAAAAIAAAIAAYADgAADAAcAABkBMxEzETMRgICAAgABgP6AAYD+gAAAAAACAAAAAAKAA4AAAwAfAAABNSMVAxEjNTM1IzUzETMRMxEzETMVIxUzFSMRIxEjEQGAgICAgICAgICAgICAgICAAYCAgP6AAQCAgIABAP8AAQD/AICAgP8AAQD/AAAAAAAFAAAAAAKAA4AABwALAA8AEwAbAAAhNSE1IRUjFRM1MxUlNSEVJTUzFT0BMzUzFSEVAQD/AAIAgICA/gABgP4AgICAAQCAgICAAQCAgICAgICAgICAgICAAAAAAAcAAAAAAoADgAADAAcACwAPABMAFwAbAAAxNTMVIREzESURMxkBNTMVNREzESURMxElNTMVgAGAgP4AgICA/gCAAYCAgIABAP8AgAEA/wABAICAgAEA/wCAAQD/AICAgAAAAAAIAAAAAAKAA4AAAwAHAAsADwAbAB8AIwAnAAAzNSEVMzUzFSURMxEBNTMVATUjNSM1MzUzETMRATUzFTM1MxUlNTMVgAEAgID9gIABgID/AICAgICA/oCAgID/AICAgICAgAEA/wABAICA/wCAgICA/wD/AAIAgICAgICAgAAAAAEAAAIAAIADgAADAAAZATMRgAIAAYD+gAAAAAAFAAAAAAIAA4AAAwAHAAsADwATAAAhNSEVJTUzFSURMxkBNTMVPQEhFQEAAQD+gID/AICAAQCAgICAgIABgP6AAYCAgICAgAAFAAAAAAIAA4AAAwAHAAsADwATAAAxNSEVPQEzFTURMxEBNTMVJTUhFQEAgID/AID+gAEAgICAgICAAYD+gAGAgICAgIAAAAAFAAABAAIAAoAAAwAHAAsADwATAAARNTMVITUzFSU1IRUlNTMVITUzFYABAID+gAEA/oCAAQCAAQCAgICAgICAgICAgIAAAAABAAAAgAKAAwAACwAAJREhNSERMxEhFSERAQD/AAEAgAEA/wCAAQCAAQD/AID/AAABAAD/gACAAQAAAwAAFREzEYCAAYD+gAABAAABgAKAAgAAAwAAETUhFQKAAYCAgAABAAAAAACAAQAAAwAAMREzEYABAP8AAAAFAAAAAAKAA4AAAwAHAAsADwATAAAxNTMVNREzGQE1MxU1ETMZATUzFYCAgICAgICAAQD/AAEAgICAAQD/AAEAgIAAAAUAAAAAAoADgAADAAcADwAXABsAADM1IRUBNTMVAREzETMVIxUhESM1MzUzEQE1IRWAAYD/AID+gICAgAGAgICA/gABgICAAYCAgP8AAoD+gICAAYCAgP2AAoCAgAAAAAEAAAAAAoADgAALAAAxNSERIzUzNTMRIRUBAICAgAEAgAIAgID9AIAAAAAABgAAAAACgAOAAAcACwAPABMAFwAbAAAxETMVITUzEQE1MxU9ASEVATUzFQURMxEBNSEVgAGAgP4AgAEA/gCAAYCA/gABgAEAgID/AAEAgICAgIABAICAgAEA/wABAICAAAAAAAcAAAAAAoADgAADAAcACwAPABMAFwAbAAAzNSEVJTUzFSERMxEBNSEVATUzFQURMxEBNSEVgAGA/gCAAYCA/oABAP4AgAGAgP4AAYCAgICAgAEA/wABAICAAQCAgIABAP8AAQCAgAAAAwAAAAACgAOAAAMABwATAAATNTMVPQEzFRMRIREzFSERIzUhEYCAgID+AIABgIABAAIAgICAgID9gAEAAQCAAYCA/IAAAAAABAAAAAACgAOAAAMABwALABMAADM1IRUlNTMVIREzEQERIRUhFSEVgAGA/gCAAYCA/YACgP4AAYCAgICAgAGA/oABgAGAgICAAAAAAAUAAAAAAoADgAADAAcADwATABcAADM1IRU1ETMRIREzFSEVIRkBNTMVPQEhFYABgID9gIABgP6AgAEAgICAAQD/AAIAgID/AAIAgICAgIAAAwAAAAACgAOAAAMABwAPAAAhETMZATUzFTURIRUjESERAQCAgP6AgAKAAYD+gAGAgICAAQCAAQD+gAAABwAAAAACgAOAAAMABwALAA8AEwAXABsAADM1IRUlETMRIREzEQE1IRUlETMRIREzEQE1IRWAAYD+AIABgID+AAGA/gCAAYCA/gABgICAgAEA/wABAP8AAQCAgIABAP8AAQD/AAEAgIAAAAAABQAAAAACgAOAAAMABwALABMAFwAAMzUhFT0BMxUBETMRATUhNSERMxEBNSEVgAEAgP4AgAGA/oABgID+AAGAgICAgIABgAEA/wD/AICAAQD+AAIAgIAAAAIAAAAAAIACgAADAAcAADERMxEDETMRgICAAQD/AAGAAQD/AAAAAAACAAD/gACAAoAAAwAHAAAVETMRAxEzEYCAgIABgP6AAgABAP8AAAAABwAAAAACAAOAAAMABwALAA8AEwAXABsAACE1MxUlNTMVJTUzFSU1MxU9ATMVPQEzFT0BMxUBgID/AID/AID/AICAgICAgICAgICAgICAgICAgICAgICAgAAAAAACAAAAgAKAAgAAAwAHAAA9ASEVATUhFQKA/YACgICAgAEAgIAAAAAABwAAAAACAAOAAAMABwALAA8AEwAXABsAADE1MxU9ATMVPQEzFT0BMxUlNTMVJTUzFSU1MxWAgICA/wCA/wCA/wCAgICAgICAgICAgICAgICAgICAgIAAAAYAAAAAAoADgAADAAcACwAPABMAFwAAITUzFQM1MxU9ATMVATUzFQURMxEBNSEVAQCAgICA/gCAAYCA/gABgICAAQCAgICAgAEAgICAAQD/AAEAgIAAAAAEAAAAAAMAA4AAAwAHAA8AEwAAMzUhFSURMxE3ESERMxEzEQE1IRWAAgD9gICAAQCAgP2AAgCAgIACgP2AgAGA/wABgP4AAgCAgAAAAgAAAAACgAOAAAsADwAAMREzFSE1MxEjESEZATUhFYABgICA/oABgAMAgID9AAIA/gADAICAAAADAAAAAAKAA4AAAwAHABMAACURMxEDNTMVAREhFSEVIRUhESEVAgCAgID9gAIA/oABgP6AAYCAAYD+gAIAgID9gAOAgICA/oCAAAAABQAAAAACgAOAAAMABwALAA8AEwAAMzUhFT0BMxUhETMRATUzFSU1IRWAAYCA/YCAAYCA/gABgICAgICAAoD9gAIAgICAgIAAAgAAAAACgAOAAAMACwAAJREzEQURIRUhESEVAgCA/YACAP6AAYCAAoD9gIADgID9gIAAAAEAAAAAAoADgAALAAAxESEVIRUhFSERIRUCgP4AAQD/AAIAA4CAgID+gIAAAQAAAAACgAOAAAkAADERIRUhFSEVIRECgP4AAQD/AAOAgICA/gAAAAQAAAAAAoADgAADAAkADQARAAAzNSEVNREjNSERIREzGQE1IRWAAYCAAQD9gIACAICAgAGAgP4AAoD9gAKAgIAAAAAAAQAAAAACgAOAAAsAADERMxEhETMRIxEhEYABgICA/oADgP8AAQD8gAIA/gAAAAAAAQAAAAABgAOAAAsAADE1MxEjNSEVIxEzFYCAAYCAgIACgICA/YCAAAMAAAAAAoADgAADAAcACwAAMzUhFSU1MxUhETMRgAGA/gCAAYCAgICAgIADAP0AAAUAAAAAAoADgAADAAcACwATABcAACERMxEBNTMVAzUzFQERMxEhFSERATUzFQIAgP8AgICA/gCAAQD/AAGAgAGA/oABgICAAQCAgP2AA4D/AID+AAMAgIAAAAAAAQAAAAACgAOAAAUAADERMxEhFYACAAOA/QCAAAMAAAAAAoADgAADAAsAEwAAATUzFQERMxUzFSMRIREjNTM1MxEBAID+gICAgAGAgICAAgCAgP4AA4CAgP2AAoCAgPyAAAAAAAMAAAAAAoADgAADAAsAEwAAATUzFQERMxUzFSMRIREjNTMRMxEBAID+gICAgAGAgICAAgCAgP4AA4CAgP2AAYCAAYD8gAAAAAQAAAAAAoADgAADAAcACwAPAAAzNSEVJREzESERMxEBNSEVgAGA/gCAAYCA/gABgICAgAKA/YACgP2AAoCAgAACAAAAAAKAA4AAAwANAAABNTMVAREhFSEVIRUhEQIAgP2AAgD+gAGA/oACgICA/YADgICAgP4AAAYAAAAAAoADgAADAAcACwAPABMAFwAAMzUhFTM1MxUlNTMVIREzESURMxEBNSEVgAEAgID/AID+AIABgID+AAGAgICAgICAgAKA/YCAAgD+AAIAgIAAAAADAAAAAAKAA4AAAwAHABEAACERMxEDNTMVAREhFSEVIRUhEQIAgICA/YACAP6AAYD+gAIA/gACgICA/YADgICAgP4AAAYAAAAAAoADgAADAAcACwAPABMAFwAAMzUhFSU1MxUhETMRATUhFSU1MxU9ASEVgAGA/gCAAYCA/gABgP4AgAIAgICAgIABgP6AAYCAgICAgICAgAAAAAABAAAAAAKAA4AABwAAIREhNSEVIREBAP8AAoD/AAMAgID9AAADAAAAAAKAA4AAAwAHAAsAADM1IRUlETMRIREzEYABgP4AgAGAgICAgAMA/QADAP0AAAAABQAAAAACgAOAAAMABwALAA8AEwAAITUzFSURMxEzETMRAREzESERMxEBAID/AICAgP4AgAGAgICAgAEA/wABAP8AAQACAP4AAgD+AAAAAAADAAAAAAKAA4AAAwALABMAAAE1MxUBETMRMxUjFSE1IzUzETMRAQCA/oCAgIABgICAgAEAgID/AAOA/YCAgICAAoD8gAAAAAAJAAAAAAKAA4AAAwAHAAsADwATABcAGwAfACMAADERMxEhETMRATUzFTM1MxUlNTMVJTUzFTM1MxUlNTMVITUzFYABgID+AICAgP8AgP8AgICA/gCAAYCAAYD+gAGA/oABgICAgICAgICAgICAgICAgICAAAUAAAAAAoADgAADAAcACwAPABMAACERMxEBNTMVMzUzFSU1MxUhNTMVAQCA/wCAgID+AIABgIACgP2AAoCAgICAgICAgIAAAAUAAAAAAoADgAAFAAkADQARABcAADERMxUhFQE1MxU9ATMVPQEzFT0BITUhEYACAP4AgICA/gACgAEAgIABAICAgICAgICAgICA/wAAAAAAAQAAAAABgAOAAAcAADERIRUhESEVAYD/AAEAA4CA/YCAAAAABQAAAAACgAOAAAMABwALAA8AEwAAITUzFSURMxEBNTMVJREzEQE1MxUCAID/AID/AID/AID/AICAgIABAP8AAQCAgIABAP8AAQCAgAAAAAABAAAAAAGAA4AABwAAMTUhESE1IREBAP8AAYCAAoCA/IAAAAAFAAACAAKAA4AAAwAHAAsADwATAAARNTMVITUzFSU1MxUzNTMVJTUzFYABgID+AICAgP8AgAIAgICAgICAgICAgICAAAEAAP+AAoAAAAADAAAVNSEVAoCAgIAAAAEAAAMAAQADgAADAAARNSEVAQADAICAAAMAAAAAAoACgAADAA0AEQAAPQEzHQE1ITUhNSE1MxEBNSEVgAGA/oABgID+AAGAgICAgICAgID+AAIAgIAAAAADAAAAAAKAA4AAAwAHABEAACURMxEBNSEVAREzETMVIxEhFQIAgP6AAQD+AICAgAGAgAGA/oABgICA/gADgP6AgP8AgAAAAAAFAAAAAAKAAoAAAwAHAAsADwATAAAzNSEVPQEzFSERMxEBNTMVJTUhFYABgID9gIABgID+AAGAgICAgIABgP6AAQCAgICAgAADAAAAAAKAA4AAAwAHABEAADURMxkBNSEVATUhESM1MxEzEYABAP8AAYCAgICAAYD+gAGAgID+AIABAIABgPyAAAAAAAMAAAAAAoACgAADAA0AEQAAMzUhFSURMxUhNTMRIRURNSEVgAIA/YCAAYCA/gABgICAgAGAgID/AIABgICAAAACAAAAAAIAA4AACwAPAAAzESM1MzUzFSEVIRkBNSEVgICAgAEA/wABAAIAgICAgP4AAwCAgAAAAAMAAP+AAoACgAADAAcAEQAAFTUhFQERMxEBNSE1IREhNSERAgD+AIABgP6AAYD+gAIAgICAAYABAP8A/wCAgAEAgP2AAAAAAAMAAAAAAoADgAADAAcADwAAIREzEQE1IRUBETMRMxUjEQIAgP6AAQD+AICAgAIA/gACAICA/gADgP6AgP6AAAACAAAAAACAA4AAAwAHAAAxETMRAzUzFYCAgAKA/YADAICAAAAEAAD/gAKAAwAAAwAHAAsADwAAFzUhFSURMxEhETMRAzUzFYABgP4AgAGAgICAgICAgAEA/wACAP4AAoCAgAAABQAAAAACAAOAAAMABwALAA8AFwAAITUzFSU1MxUDNTMVPQEzFQERMxEzFSMRAYCA/wCAgICA/gCAgICAgICAgAEAgICAgID+AAOA/gCA/wAAAAAAAgAAAAABAAOAAAMABwAAMzUzFSURMxGAgP8AgICAgAMA/QAABAAAAAACgAKAAAMABwANABEAAAERMxETETMRIREhFSMRATUzFQEAgICA/YABAIABAIABAAEA/wD/AAIA/gACgID+AAIAgIAAAgAAAAACgAKAAAMACQAAIREzESERIRUhEQIAgP2AAgD+gAIA/gACgID+AAAEAAAAAAKAAoAAAwAHAAsADwAAMzUhFSURMxEhETMRATUhFYABgP4AgAGAgP4AAYCAgIABgP6AAYD+gAGAgIAAAwAA/4ACgAKAAAMADwATAAABETMRAREzFTMVIxUhFSEREzUhFQIAgP2AgICAAYD+gIABAAEAAQD/AP6AAwCAgICA/wACgICAAAAAAAMAAP+AAoACgAADAAcAEwAAGQEzGQE1IRUTESE1ITUjNTM1MxGAAQCA/oABgICAgAEAAQD/AAEAgID9gAEAgICAgP0AAAAAAAMAAAAAAoACgAADAAsADwAAATUzFQERMxUzFSMREzUhFQIAgP2AgICAgAEAAYCAgP6AAoCAgP6AAgCAgAAAAAAFAAAAAAKAAoAAAwAHAAsADwATAAAxNSEVPQEzFSU1IRUlNTMVPQEhFQIAgP4AAYD+AIACAICAgICAgICAgICAgICAAAIAAAAAAYADgAADAA8AACE1MxUlESM1MxEzETMVIxEBAID/AICAgICAgICAAYCAAQD/AID+gAAAAgAAAAACgAKAAAMACQAANREzERU1IREzEYABgICAAgD+AICAAgD9gAAAAAAFAAAAAAKAAoAAAwAHAAsADwATAAAhNTMVJTUzFTM1MxUlETMRIREzEQEAgP8AgICA/gCAAYCAgICAgICAgIABgP6AAYD+gAACAAAAAAKAAoAAAwANAAA1ETMRFTUzETMRMxEzEYCAgICAgAIA/gCAgAEA/wACAP2AAAAACQAAAAACgAKAAAMABwALAA8AEwAXABsAHwAjAAAxNTMVITUzFSU1MxUzNTMVJTUzFSU1MxUzNTMVJTUzFSE1MxWAAYCA/gCAgID/AID/AICAgP4AgAGAgICAgICAgICAgICAgICAgICAgICAgIAAAAMAAP+AAoACgAADAAcADwAAFzUhFQERMxEBNSE1IREzEYABgP4AgAGA/oABgICAgIABgAGA/oD/AICAAYD9gAADAAAAAAKAAoAABwALABMAADE1MzUzFSEVATUzFT0BITUhFSMVgIABgP6AgP6AAoCAgICAgAEAgICAgICAgAAABQAAAAACAAOAAAMABwALAA8AEwAAITUhFSURMxEBNTMVNREzGQE1IRUBAAEA/oCA/wCAgAEAgICAAQD/AAEAgICAAQD/AAEAgIAAAAEAAAAAAIADgAADAAAxETMRgAOA/IAAAAUAAAAAAgADgAADAAcACwAPABMAADE1IRU1ETMZATUzFSURMxEBNSEVAQCAgP8AgP6AAQCAgIABAP8AAQCAgIABAP8AAQCAgAAAAAAEAAACgAMAA4AAAwAHAAsADwAAETUzFSE1IRUlNSEVITUzFYABAAEA/gABAAEAgAKAgICAgICAgICAAAACAAAAAACAA4AAAwAHAAAxETMRAzUzFYCAgAKA/YADAICAAAADAAAAAAIAAwAAAwAHAAsAADM1IRUlETMZATUhFYABgP4AgAGAgICAAgD+AAIAgIAAAAAAAgAAAAACAAMAAA8AEwAAMTUzESM1MzUzFTMVIxEhFQE1MxWAgICAgIABAP8AgIABAICAgID/AIACgICAAAAAAAUAAAEAAYACgAADAAcACwAPABMAABE1MxUzNTMVJTUzFSU1MxUzNTMVgICA/wCA/wCAgIABAICAgICAgICAgICAgAAABQAAAAACgAOAABMAFwAbAB8AIwAAITUjNTM1IzUzNTMVMxUjFTMVIxUBNTMVMzUzFSU1MxUhNTMVAQCAgICAgICAgID/AICAgP4AgAGAgICAgICAgICAgIACgICAgICAgICAgAAAAAACAAAAAACAA4AAAwAHAAAxETMRAxEzEYCAgAGA/oACAAGA/oAAAAAABQAA/4ACgAMAAAcACwAPABMAGwAABTUjNSEVIxUTNTMVIREzEQE1MxUlNTM1MxUzFQEAgAGAgICA/YCAAYCA/gCAgICAgICAgAEAgIABgP6AAQCAgICAgICAAAADAAAAAAMAA4AABwALAA8AAAERIRUjFTMVFxEhEQcRIREBAAEAgICA/gCAAwABAAGAgICAgAKA/YCAA4D8gAAAAQAAAQABgAMAAAcAABkBITUhNSERAQD/AAGAAQABAICA/gAACgAAAAACgAKAAAMABwALAA8AEwAXABsAHwAjACcAACE1MxUzNTMVJTUzFTM1MxUlNTMVMzUzFSU1MxUzNTMVJTUzFTM1MxUBAICAgP4AgICA/gCAgID/AICAgP8AgICAgICAgICAgICAgICAgICAgICAgICAgICAAAAAAAEAAACAAoABgAAFAAAlNSE1IRECAP4AAoCAgID/AAAAAQCAAQACAAGAAAMAABM1IRWAAYABAICAAAAAAAMAAAAAAwADgAAFAA0AEQAAAREhESMVBTUjNTMRIREHESERAQABAIABAICA/gCAAwABAAGA/wCAgICAAYD9gIADgPyAAAAAAAEAAAMAAoADgAADAAARNSEVAoADAICAAAIAAAIAAYADgAADAAcAAAE1IxUHESERAQCAgAGAAoCAgIABgP6AAAACAAD/gAKAAwAAAwAPAAAVNSEVAREhNSERMxEhFSERAoD+gP8AAQCAAQD/AICAgAEAAQCAAQD/AID/AAACAAACAAEAA4AABQAJAAAZATMVMxUDNTMVgICAgAIAAQCAgAEAgIAAAQAAAgABAAOAAAcAABE1MzUjNSERgIABAAIAgICA/oAAAAAAAQGAAwACgAOAAAMAAAE1IRUBgAEAAwCAgAAAAAEAAP+AAoADAAAJAAAVETMRIREzESEVgAGAgP4AgAOA/YACgP0AgAADAAAAAAKAAwAAAwANABEAABE1MxUTESM1MzUjNSERMxEzEYCAgICAAQCAgAIAgID+AAGAgICA/QADAP0AAAAAAQAAAYAAgAIAAAMAABE1MxWAAYCAgAAAAgCA/4ACAACAAAMABwAAFzUhFT0BMxWAAQCAgICAgICAAAAAAQAAAoAAgAOAAAMAABkBMxGAAoABAP8AAAAAAAIAAAIAAYADgAADAAcAAAE1IxUHESERAQCAgAGAAoCAgIABgP6AAAAKAAAAAAKAAoAAAwAHAAsADwATABcAGwAfACMAJwAAMTUzFTM1MxUlNTMVMzUzFSU1MxUzNTMVJTUzFTM1MxUlNTMVMzUzFYCAgP8AgICA/wCAgID+AICAgP4AgICAgICAgICAgICAgICAgICAgICAgICAgICAAAAIAAAAAAKAA4AAAwAJAA0AEQAVABkAHQAhAAAxNTMVIREzFTMVJREzESU1MxUlNTMVNREzESURMxElNTMVgAEAgID+AIABAID+gICA/gCAAYCAgIABAICAgAEA/wCAgICAgICAAQD/AIABAP8AgICAAAAAAAcAAAAAAoADgAADAAcADQARABUAGQAdAAAxNTMVNREzEQU1IxEhEQE1MxU1ETMRJREzESU1MxWAgAEAgAEA/oCAgP4AgAGAgICAgAEA/wCAgAEA/oABgICAgAEA/wCAAQD/AICAgAAABwAAAAACgAOAAAMABwANABEAFQAdACEAADE1MxU1ETMRBTUjESERATUzFTURMxEhNTM1IzUhEQE1MxWAgAEAgAEA/oCAgP4AgIABAAEAgICAgAEA/wCAgAEA/oABgICAgAEA/wCAgID+gAEAgIAAAAYAAAAAAoADgAADAAcACwAPABMAFwAAMzUhFT0BMxUhETMZATUzFT0BMxUDNTMVgAGAgP2AgICAgICAgICAgAEA/wABAICAgICAAQCAgAAAAwAAAAACgAOAAAsADwATAAAxETMVITUzESMRIRkBNSEVATUhFYABgICA/oABgP4AAQACAICA/gABAP8AAgCAgAEAgIAAAAAAAwAAAAACgAOAAAsADwATAAAxETMVITUzESMRIRkBNSEVAzUhFYABgICA/oABgIABAAIAgID+AAEA/wACAICAAQCAgAAFAAAAAAKAA4AACwAPABMAFwAbAAAxETMVITUzESMRIRkBNSEVJTUzFSE1MxUlNSEVgAGAgID+gAGA/gCAAYCA/gABgAIAgID+AAEA/wACAICAgICAgICAgIAAAAUAAAAAAwADgAALAA8AFwAbAB8AADERMxUhNTMRIxEhEQM1Mx0BNSE1IRUjFQE1IRUhNTMVgAGAgID+gICAAQABAID+gAEAAQCAAgCAgP4AAQD/AAKAgICAgICAgAEAgICAgAAEAAAAAAKAA4AACwAPABMAFwAAMREzFSE1MxEjESEZATUhFQE1MxUzNTMVgAGAgID+gAGA/oCAgIACAICA/gABAP8AAgCAgAEAgICAgAAAAAMAAAAAAoADgAALAA8AEwAAMREzFSE1MxEjESEZATUhFQE1MxWAAYCAgP6AAYD/AIACAICA/gABAP8AAgCAgAEAgIAAAQAAAAACgAOAABUAADERMxUzNSM1IRUhFTMVIxEhFSERIxGAgIACAP8AgIABAP6AgAMAgICAgICA/oCAAgD+AAAAAAAHAAD/gAKAA4AAAwAHAAsADwATABcAGwAABTUhFT0BMxUlNSEVPQEzFSERMxEBNTMVJTUhFQEAAQCA/gABgID9gIABgID+AAGAgICAgICAgICAgICAAgD+AAGAgICAgIAAAAAAAgAAAAACgAOAAAsADwAAMREhFSEVIRUhFSEVATUhFQKA/gABAP8AAgD9gAEAAoCAgICAgAMAgIAAAAAAAgAAAAACgAOAAAsADwAAMREhFSEVIRUhFSEVATUhFQKA/gABAP8AAgD/AAEAAoCAgICAgAMAgIAAAAAABQAAAAACgAOAAAkADQARABUAGQAAMREzFSEVIRUhFQE1IRUlNTMVITUzFSU1IRWAAQD/AAIA/gABgP4AgAGAgP4AAYACAICAgIACAICAgICAgICAgIAAAAMAAAAAAoADgAALAA8AEwAAMREhFSEVIRUhFSEVATUzFTM1MxUCgP4AAQD/AAIA/gCAgIACgICAgICAAwCAgICAAAAAAgAAAAACAAOAAAsADwAAMzUzESM1IRUjETMVATUhFYCAgAGAgID+AAEAgAGAgID+gIADAICAAAACAIAAAAKAA4AACwAPAAAzNTMRIzUhFSMRMxUDNSEVgICAAYCAgIABAIABgICA/oCAAwCAgAAAAAQAAAAAAoADgAALAA8AEwAXAAAzNTMRIzUhFSMRMxUBNTMVITUzFSU1IRWAgIABgICA/gCAAYCA/gABgIABgICA/oCAAoCAgICAgICAAAAAAwAAAAABgAOAAAsADwATAAAxNTMRIzUhFSMRMxUBNTMVMzUzFYCAAYCAgP6AgICAgAGAgID+gIADAICAgIAAAAIAAAAAAwADgAADABMAACURMxEFESM1MxEhFSERMxUjESEVAoCA/YCAgAIA/oCAgAGAgAKA/YCAAYCAAYCA/wCA/wCAAAAAAAUAAAAAAwADgAADAAsAFQAZAB0AAAE1MxUBETMRMxUjESE1IzUzESM1IREBNSEVITUzFQEAgP6AgICAAYCAgIABAP4AAQABAIABAICA/wADAP8AgP6AgIABgID9AAMAgICAgAAFAAAAAAKAA4AAAwAHAAsADwATAAAzNSEVJREzESERMxEBNSEVATUhFYABgP4AgAGAgP4AAYD+AAEAgICAAYD+gAGA/oABgICAAQCAgAAAAAUAAAAAAoADgAADAAcACwAPABMAADM1IRUlETMRIREzEQE1IRUDNSEVgAGA/gCAAYCA/gABgIABAICAgAGA/oABgP6AAYCAgAEAgIAAAAAABwAAAAACgAOAAAMABwALAA8AEwAXABsAADM1IRUlETMRIREzEQE1IRUlNTMVITUzFSU1IRWAAYD+AIABgID+AAGA/gCAAYCA/gABgICAgAGA/oABgP6AAYCAgICAgICAgICAAAcAAAAAAwADgAADAAcACwAPABcAGwAfAAAzNSEVJREzESERMxEBNTMdATUhNSEVIxUBNSEVITUzFYABgP4AgAGAgP2AgAEAAQCA/oABAAEAgICAgAGA/oABgP6AAgCAgICAgICAAQCAgICAAAYAAAAAAoADgAADAAcACwAPABMAFwAAMzUhFSURMxEhETMRATUhFSU1MxUhNTMVgAGA/gCAAYCA/gABgP4AgAGAgICAgAIA/gACAP4AAgCAgICAgICAAAAJAAAAgAKAAwAAAwAHAAsADwATABcAGwAfACMAAD0BMxUhNTMVJTUzFTM1MxUlNTMVJTUzFTM1MxUlNTMVITUzFYABgID+AICAgP8AgP8AgICA/gCAAYCAgICAgICAgICAgICAgICAgICAgICAgIAAAwAAAAACgAOAAAMADQAXAAABETMRATUjETMRMxUhFTURIzUhNSEVMxEBAID/AICAgAEAgP8AAYCAAQABgP6A/wCAAoD+AICAgAIAgICA/YAAAAAABAAAAAACgAOAAAMABwALAA8AADM1IRUlETMRIREzEQE1IRWAAYD+AIABgID9gAEAgICAAgD+AAIA/gACgICAAAQAAAAAAoADgAADAAcACwAPAAAzNSEVJREzESERMxEBNSEVgAGA/gCAAYCA/wABAICAgAIA/gACAP4AAoCAgAAGAAAAAAKAA4AAAwAHAAsADwATABcAADM1IRUlETMRIREzEQE1MxUhNTMVJTUhFYABgP4AgAGAgP2AgAGAgP4AAYCAgIABgP6AAYD+gAIAgICAgICAgAAABQAAAAACgAOAAAMABwALAA8AEwAAMzUhFSURMxEhETMRATUzFTM1MxWAAYD+AIABgID+AICAgICAgAIA/gACAP4AAoCAgICAAAAAAAYAAAAAAoADgAADAAcACwAPABMAFwAAIREzEQE1MxUzNTMVJTUzFSE1MxUBNSEVAQCA/wCAgID+AIABgID9gAEAAYD+gAGAgICAgICAgICAAQCAgAAAAAADAAD/gAKAAwAAAwAHABMAACURMxEBNSEVAREzETMVIxEhFSEVAgCA/oABAP4AgICAAYD+gIABgP6AAYCAgP2AA4D/AID/AICAAAAABAAAAAACgAOAAAMADQARABUAAD0BMx0BNSE1ITUhNTMRATUhFQE1IRWAAYD+gAGAgP4AAYD+AAEAgICAgICAgID+AAIAgIABAICAAAQAAAAAAoADgAADAA0AEQAVAAA9ATMdATUhNSE1ITUzEQE1IRUDNSEVgAGA/oABgID+AAGAgAEAgICAgICAgID+AAIAgIABAICAAAAGAAAAAAKAA4AAAwANABEAFQAZAB0AAD0BMx0BNSE1ITUhNTMRATUhFSU1MxUhNTMVJTUhFYABgP6AAYCA/gABgP4AgAGAgP4AAYCAgICAgICAgP4AAgCAgICAgICAgICAAAAABgAAAAADAAOAAAMADQARABkAHQAhAAA9ATMdATUhNSE1ITUzEQE1Mx0BNSE1IRUjFQE1IRUhNTMVgAGA/oABgID9gIABAAEAgP6AAQABAICAgICAgICAgP4AAoCAgICAgICAAQCAgICAAAAABQAAAAACgAOAAAMADQARABUAGQAAPQEzHQE1ITUhNSE1MxEBNSEVATUzFTM1MxWAAYD+gAGAgP4AAYD+gICAgICAgICAgICA/gACAICAAQCAgICAAAAAAAQAAAAAAoADgAADAA0AEQAVAAA9ATMdATUhNSE1ITUzEQE1IRUBNTMVgAGA/oABgID+AAGA/wCAgICAgICAgID+AAIAgIABAICAAAAEAAAAAAKAAoAAAwAVABkAHQAAPQEzHQE1MzUjNTM1MxUzNTMRIRUhFQE1MxUzNTMVgICAgICAgP8AAQD+AICAgICAgICAgICAgID/AICAAgCAgICAAAAABwAA/4ACgAMAAAMABwALAA8AEwAXABsAAAU1IRU9ATMVJTUhFT0BMxUhETMRATUzFSU1IRUBAAEAgP4AAYCA/YCAAYCA/gABgICAgICAgICAgICAgAGA/oABAICAgICAAAAAAAQAAAAAAoADgAADAA0AEQAVAAAzNSEVJREzFSE1MxEhFRE1IRUBNSEVgAIA/YCAAYCA/gABgP4AAQCAgIABgICA/wCAAYCAgAEAgIAAAAAABAAAAAACgAOAAAMADQARABUAADM1IRUlETMVITUzESEVETUhFQM1IRWAAgD9gIABgID+AAGAgAEAgICAAYCAgP8AgAGAgIABAICAAAYAAAAAAoADgAADAA0AEQAVABkAHQAAMzUhFSURMxUhNTMRIRURNSEVJTUzFSE1MxUlNSEVgAIA/YCAAYCA/gABgP4AgAGAgP4AAYCAgIABgICA/wCAAYCAgICAgICAgICAAAAFAAAAAAKAA4AAAwANABEAFQAZAAAzNSEVJREzFSE1MxEhFRE1IRUBNTMVMzUzFYACAP2AgAGAgP4AAYD+gICAgICAgAGAgID/AIABgICAAQCAgICAAAAAAgAAAAABAAOAAAMABwAAMxEzEQE1IRWAgP8AAQACgP2AAwCAgAAAAAIAAAAAAQADgAADAAcAADERMxEDNSEVgIABAAKA/YADAICAAAQAAAAAAoADgAADAAcACwAPAAAhETMRATUzFSE1MxUlNSEVAQCA/oCAAYCA/gABgAKA/YACgICAgICAgIAAAAADAIAAAAIAA4AAAwAHAAsAACERMxEBNTMVMzUzFQEAgP8AgICAAoD9gAMAgICAgAAEAAAAAAMAA4AAAwAPABMAFwAAIREzESERMxUhNSEVIxUhGQE1IRUhNTMVAgCA/YCAAQABAID+gAEAAQCAAgD+AAMAgICAgP4AAwCAgICAAAUAAAAAAoADgAADAAcACwAPABMAADM1IRUlETMRIREzEQE1IRUBNSEVgAGA/gCAAYCA/gABgP4AAQCAgIABgP6AAYD+gAGAgIABAICAAAAABQAAAAACgAOAAAMABwALAA8AEwAAMzUhFSURMxEhETMRATUhFQM1IRWAAYD+AIABgID+AAGAgAEAgICAAYD+gAGA/oABgICAAQCAgAAAAAAHAAAAAAKAA4AAAwAHAAsADwATABcAGwAAMzUhFSURMxEhETMRATUhFSU1MxUhNTMVJTUhFYABgP4AgAGAgP4AAYD+AIABgID+AAGAgICAAYD+gAGA/oABgICAgICAgICAgIAABwAAAAADAAOAAAMABwALAA8AFwAbAB8AADM1IRUlETMRIREzEQE1Mx0BNSE1IRUjFQE1IRUhNTMVgAGA/gCAAYCA/YCAAQABAID+gAEAAQCAgICAAYD+gAGA/oACAICAgICAgIABAICAgIAABgAAAAACgAOAAAMABwALAA8AEwAXAAAzNSEVJREzESERMxEBNSEVATUzFTM1MxWAAYD+AIABgID+AAGA/oCAgICAgIABgP6AAYD+gAGAgIABAICAgIAAAAMAAACAAoADAAADAAcACwAAJTUzFQE1IRUBNTMVAQCA/oACgP6AgICAgAEAgIABAICAAAADAAAAAAKAAoAAAwANABcAAAE1MxUBNSMRMxEzFSEVNREjNSE1IRUzEQEAgP8AgICAAQCA/wABgIABAICA/wCAAYD/AICAgAEAgICA/oAAAAMAAAAAAoADgAADAAkADQAANREzERU1IREzEQE1IRWAAYCA/YABAIACAP4AgIACAP2AAwCAgAAAAwAAAAACgAOAAAMACQANAAA1ETMRFTUhETMRATUhFYABgID/AAEAgAIA/gCAgAIA/YADAICAAAAFAAAAAAKAA4AAAwAJAA0AEQAVAAA1ETMRFTUhETMRATUzFSE1MxUlNSEVgAGAgP2AgAGAgP4AAYCAAYD+gICAAYD+AAKAgICAgICAgAAAAAQAAAAAAoADgAADAAkADQARAAA1ETMRFTUhETMRATUzFTM1MxWAAYCA/gCAgICAAgD+AICAAgD9gAMAgICAgAAEAAD/gAKAA4AAAwAHAA8AEwAAFzUhFQERMxEBNSE1IREzEQE1IRWAAYD+AIABgP6AAYCA/YABAICAgAGAAYD+gP8AgIABgP2AAwCAgAAAAAMAAP+AAoADgAADAAcAEwAAJREzEQE1IRUBETMRMxUjESEVIRUCAID+gAEA/gCAgIABgP6AgAGA/oABgICA/YAEAP6AgP8AgIAAAAAFAAD/gAKAA4AAAwAHAA8AEwAXAAAXNSEVAREzEQE1ITUhETMRATUzFTM1MxWAAYD+AIABgP6AAYCA/gCAgICAgIABgAGA/oD/AICAAYD9gAMAgICAgAAAAgAAAAACgAOAAAMAEwAANREzERU1MxEjNSEVIRUzFSMRIRWAgIACAP8AgIABAIACgP2AgIACgICAgID+gIAAAAUAAAAAAoACgAADAAcACwAPABsAADM1MxUzNSEVJREzGQE1MxUZATMVMzUjNSERIRWAgIABAP2AgICAgIABAP8AgICAgIABgP6AAYCAgP6AAYCAgID+gIAAAAAABwAAAAACgAOAAAMABwALAA8AEwAXABsAACERMxEBNTMVMzUzFSU1MxUhNTMVATUzFTM1MxUBAID/AICAgP4AgAGAgP4AgICAAYD+gAGAgICAgICAgICAAQCAgICAAAAAAQAAAYADAAIAAAMAABE1IRUDAAGAgIAAAgAAAgABAAOAAAMABwAAGQEzGQE1MxWAgAIAAQD/AAEAgIAAAgAAAgABAAOAAAMABwAAETUzFTURMxGAgAIAgICAAQD/AAAAAgAA/4ABAAEAAAMABwAAFTUzFTURMxGAgICAgIABAP8AAAAAAgAAAgABAAOAAAMABwAAEzUzFSURMxGAgP8AgAIAgICAAQD/AAAAAAQAAAIAAgADgAADAAcACwAPAAAZATMRMxEzEQE1MxUzNTMVgICA/wCAgIACAAEA/wABAP8AAQCAgICAAAQAAAIAAgADgAADAAcACwAPAAARNTMVMzUzFSURMxEzETMRgICA/wCAgIACAICAgICAAQD/AAEA/wAAAAQAAP+AAgABAAADAAcACwAPAAAVNTMVMzUzFSURMxEzETMRgICA/wCAgICAgICAgIABAP8AAQD/AAAAAAEAAAAAAYADAAALAAAzESM1MxEzETMVIxGAgICAgIABgIABAP8AgP6AAAAAAQAAAYABAAKAAAMAABkBIREBAAGAAQD/AAAAAAMAAAAAAoAAgAADAAcACwAAMTUzFTM1MxUzNTMVgICAgICAgICAgIAAAAAAAwAAAAABAAGAAAMABwALAAAzNTMVJTUzFT0BMxWAgP8AgICAgICAgICAgAADAAAAAAEAAYAAAwAHAAsAADE1MxU9ATMVJTUzFYCA/wCAgICAgICAgIAAAAMAAAAAAoADgAADABcAGwAAITUhFSU1IzUzNSM1MzUzFSEVIRUhFSEVETUhFQEAAYD+AICAgICAAQD/AAEA/wABgICAgICAgICAgICAgIACgICAAAIAAAIABIADgAAHABMAABMRIzUhFSMRIREhESMRIxUjNSMRgIABgIABAAKAgICAgAIAAQCAgP8AAYD+gAEAgID/AAAAAAAiAZ4AAQAAAAAAAAAZAAAAAQAAAAAAAQAJAIYAAQAAAAAAAgAHADcAAQAAAAAAAwAUABkAAQAAAAAABAARAC0AAQAAAAAABQALAD4AAQAAAAAABgAJAIYAAQAAAAAABwA8AEkAAQAAAAAACAAeAMIAAQAAAAAACQAKAAoAAQAAAAAACgAmAIUAAQAAAAAACwAXAKsAAQAAAAAADAA5AMIAAQAAAAAADQAoAPsAAQAAAAAADgAuASMAAQAAAAAAEwApAVEAAQAAAAABAAAIAXoAAwABBAkAAAJKAqwAAwABBAkAAQASArgAAwABBAkAAgAOAZYAAwABBAkAAwAiAYIAAwABBAkABAAiAYIAAwABBAkABQAWAaQAAwABBAkABgASArgAAwABBAkABwDGAboAAwABBAkACAAsAoAAAwABBAkACQAKAyQAAwABBAkACgJKAqwAAwABBAkACwA+BPYAAwABBAkADAAiBTQAAwABBAkADQBQBVYAAwABBAkADgBcBaYAAwABBAkAEwA2BgIAAwABBAkBAAAQBjhDb3B5cmlnaHQgYm9iZ3JhdHRvbiAyMDEwRm9udFN0cnVjdCBNaW5lY3JhZnRNaW5lY3JhZnQgUmVndWxhclZlcnNpb24gMS4wRm9udFN0cnVjdCBpcyBhIHRyYWRlbWFyayBvZiBGU0kgRm9udFNob3AgSW50ZXJuYXRpb25hbCBHbWJIHE1pbmVjcmFmdB0gd2FzIGJ1aWx0IHdpdGggRm9udFN0cnVjdApodHRwOi8vd3d3LmZvbnRzaG9wLmNvbWh0dHA6Ly9mb250c3RydWN0LmZvbnRzaG9wLmNvbS9mb250c3RydWN0aW9ucy9zaG93LzM5NDEzM0NyZWF0aXZlIENvbW1vbnMgQXR0cmlidXRpb24gU2hhcmUgQWxpa2VodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1zYS8zLjAvRml2ZSBiaWcgcXVhY2tpbmcgemVwaHlycyBqb2x0IG15IHdheCBiZWRBUUFNZEZwbgBNAGkAbgBlAGMAcgBhAGYAdAAgAFIAZQBnAHUAbABhAHIAVgBlAHIAcwBpAG8AbgAgADEALgAwAFQAaABlACAAIgBEAGoARABDAEgAIgAgAG4AYQBtAGUAIABpAHMAIABvAHcAbgAgAGIAeQAgAG0AZQAgACgAZABqAGQAYwBoAC4AYwBvAG0AKQAuAA0ACgANAAoAVABoAGUAIAAiAE0AaQBuAGUAYwByAGEAZgB0ACIAIABnAGEAbQBlACAAaQBzACAAbwB3AG4AIABiAHkAIABNAG8AagBhAG4AZwAgAFMAcABlAGMAaQBmAGkAYwBhAHQAaQBvAG4AcwAuAEYAbwBuAHQAcwB0AHIAdQBjAHQAIABiAHkAIABGAG8AbgB0AFMAaABvAHAAVABoAGkAcwAgACIATQBpAG4AZQBjAHIAYQBmAHQAIgAgAGYAbwBuAHQAIAB3AGEAcwAgAGEAZABhAHAAdABlAGQAIABpAG4AdABvACAAVAByAHUAZQBUAHkAcABlACAAZgBpAGwAZQAgAGIAeQAgAG0AZQAgACgARABqAEQAQwBIACkALgANAAoADQAKAFQAaABpAHMAIAAiAE0AaQBuAGUAYwByAGEAZgB0ACIAIABmAG8AbgB0ACAAaQBzACAAdQBuAGQAZQByACAAQwByAGUAYQB0AGkAdgBlACAAQwBvAG0AbQBvAG4AcwAgAEwAaQBjAGUAbgBzAGUAIAAoAFMAaABhAHIAZQAgAEEAbABpAGsAZQApAC4ADQAKAA0ACgBUAGgAZQAgACIARABqAEQAQwBIACIAIABuAGEAbQBlACAAaQBzACAAbwB3AG4AIABiAHkAIABtAGUAIAAoAGQAagBkAGMAaAAuAGMAbwBtACkALgANAAoADQAKAFQAaABlACAAIgBNAGkAbgBlAGMAcgBhAGYAdAAiACAAZgBvAG4AdAAgAHMAdAB5AGwAZQAgAHcAYQBzACAAbQBhAGQAZQAgAGIAeQAgAE4AbwB0AGMAaAAuAA0ACgANAAoAVABoAGUAIAAiAE0AaQBuAGUAYwByAGEAZgB0ACIAIABnAGEAbQBlACAAaQBzACAAbwB3AG4AIABiAHkAIABNAG8AagBhAG4AZwAgAFMAcABlAGMAaQBmAGkAYwBhAHQAaQBvAG4AcwAuAGgAdAB0AHAAOgAvAC8AZgBvAG4AdABzAHQAcgB1AGMAdAAuAGYAbwBuAHQAcwBoAG8AcAAuAGMAbwBtAC8AaAB0AHQAcAA6AC8ALwBkAGoAZABjAGgALgBjAG8AbQAvAEMAcgBlAGEAdABpAHYAZQAgAEMAbwBtAG0AbwBuAHMAIABBAHQAdAByAGkAYgB1AHQAaQBvAG4AIABTAGgAYQByAGUAIABBAGwAaQBrAGUAaAB0AHQAcAA6AC8ALwBjAHIAZQBhAHQAaQB2AGUAYwBvAG0AbQBvAG4AcwAuAG8AcgBnAC8AbABpAGMAZQBuAHMAZQBzAC8AYgB5AC0AcwBhAC8AMwAuADAALwBNAGkAbgBlAGMAcgBhAGYAdAAgAGkAcwAgAGoAdQBzAHQAIABhAHcAZQBzAG8AbQBlACAAIQBBAFEAQQBNAGQARgBwAG4AAAADAAAAAAAAAGYAMwAAAAAAAAAAAAAAAAAAAAAAAAAA ";
var mcpeFont;

var path = android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/minecraftpe/mods";
//var settingsIcon = " iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAIAAADZrBkAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAAFCSURBVDhPlY7/SsJQFMfvq+zeu102386BN/slxtpIW39EQaRoYCWK0JaVlQQhPoCB/qUPEdQDdO7OtihoLvbh8N0557MzMn0arhZvyHIxW85naVZ1rjrYT6e+7ysN+B7gduKsooDgDjimsMj0WWmNupsTUxRMA7To2q9ZBkpT1xKtGXUzKgY4ZYnCv67tQwUHDpLJYzgZhY2ac15zsisCf6iuvT4EwJlXzYkwLKGb5GU4AE6cyqlT+fx4B7KzMITQDTIOeuOgf1zdBnD8Z95TWeeGwQUZDbrA0U45F7tlTnXOdHLX69z3O/XN0nq2VKWUM8ZJeN2+7V4cbNi5kDbVOKOcBFetm8uWWyrmhGmMajTWPFn0pJ1dUQMHTKUB6cfWkl5rSynxhVEG4WemaYagMmrNQxffsRXvJUtpPw7wQNDoF3gj74+Vc8xUAAAAAElFTkSuQmCC ";
var settingsIcon = " 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 ";
var mcpeButtonOldIcon = " iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAABhSURBVEhLY9izcTVNEW0tKExNB1kwta2RRkhDXYvGFqhpDnUf0N6C0SAigEZTEUE0mooIotFURBCNpiKCaDQVEUSjqYggGk1FBBEoFRWlpgNDCsgCIy0EwhTErwyrrLoWAI4KV9f/jHdkAAAAAElFTkSuQmCC ";
var blackIconTransparent = " iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGElEQVR42mNkYGCoZyABMDGQCEY1jBQNAD+jAJe/Rx5TAAAAAElFTkSuQmCC ";
var mcpeExitButtonIcon = " iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAAHMSURBVDhPjZDbSgJRFIb3qzgHx3oE38nCySxRyvJQGIFk2IUJBuLUdDQC6XBfN3XVCxgk5Eus1loza9weggY+9t7/+te/1x71fOfD5/tbwEe4/snrAu0NqtUqcNBL/3Kh4T9QSMJZAkUhL30fjsvbTCNcdUgTZj0JZ5kJJ/LnzEylONcomkDTJOI8kQ8UFpiC4s/3kOGz1jgeDWGMun4hhfBEFETP4wI2SkgUFjbQnoJEj4LkaU+35/CIHJW2oIGIURrHo68pTXTxR08bXHswuO5BfbcA9Z08JJPJ6aaZlSAP+xHHTjDqwe8CcbiVi5AwvVnOVNO9ju0w6t7rQL/XgYPCBlMrZHmV/0FPY8KwWj47Ab1xywHbioO66baB2NvMMPu5TBigTRKG8R4hj3gt0wbLsEFdnbXgstOCStaF8no6aoxCFpxprWTT7DcMi1EX7RM4R0prq7Drrga3a830Twh9QoK8hBGzwESUd9oED4OK6RQjP1pCiu4KbC/QSSu6KTANk1Fem4KaXBDIKOagYRI2radwIgMnwqAeT9RkUYpi1Bsm+yCU9wiFBBNhkOu6QTIKcgOPjOusrp91TdEXNYbNUtSNs7qOGTPhF1U7V2AcJE8CAAAAAElFTkSuQmCC "
var reloadButtonIcon = " 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 ";
var closeButtonIcon = " iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAAEBAQICAgMDAwQEBAUFBQYGBgcHBwgICAkJCQoKCgsLCwwMDA0NDQ4ODg8PDxERERISEhMTExQUFBUVFRYWFhcXFxgYGBkZGRsbGxwcHB0dHR4eHiAgICQkJCUlJSYmJicnJykpKSoqKisrKywsLC0tLS4uLi8vLzAwMDExMTIyMjMzMzU1NTc3Nzg4ODk5OTs7Ozw8PD09PT4+Pj8/P0BAQEFBQUJCQkREREZGRkdHR05OTlNTU1RUVFVVVVZWVldXV1hYWFlZWVxcXF1dXWBgYGRkZGVlZWlpaWpqamtra21tbXFxcXJycnx8fI2NjY6OjpCQkJKSkpOTk5WVlZeXl5iYmJqampubm5ycnJ2dnZ6enp+fn6GhoaOjo6ioqKmpqbq6uru7u7y8vL29vb6+vr+/v8DAwMLCwsPDw8TExMbGxsjIyMnJycrKytDQ0NHR0dLS0tPT09TU1NbW1tjY2Nvb29zc3N3d3d7e3t/f3+Dg4OHh4eLi4uPj4+Tk5Ofn5+rq6uvr6+3t7QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAi956kAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAQXRFWHRDb21tZW50AENSRUFUT1I6IGdkLWpwZWcgdjEuMCAodXNpbmcgSUpHIEpQRUcgdjgwKSwgcXVhbGl0eSA9IDkwCn1U2t0AAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNvyMY98AAAqgSURBVHhexVuLfxRFEq55byBweAaCKAh5mYAG5Y16AQni2/gKp4iveHqo+H5dUATU/zv3fdW1u7M7M7szy+bXXwjZqe7p+rq6urq6d0a2RsLmV1fXVpamJ9Mozianl1bWrn61aUUN0ZzAT28/s0ckFCCM8CcI+TnAf3ueefsnq1QfzQjcfu8QtKpu6ORf/U+CgAREQOjQe7etcj00ILC5NpmqxiBxHFzPKVAaUcKPIunkWoPhqE3g+nRGfU6XhLhof3b6MzWBCbPp63bbUNQjcO9F7bm08BtEEXWoEYIophvgQ6xXKHGV8O/Fe3bzYNQh8PN56lAtqrZjfZpf/4bot8qASGIVi5z/2RoYhOEE/jiDtmLaGT/oaFuRItCJ0AHLoB4/AW4ROfOHNVKNoQSeb8HjY5121n1hxyNe0NRqbnftZgIv8Otuaj1vzVRiCIFrQcLm6H+YAXHKNkMJ8Rn6nDN0/qYoINsUfWcF3BRJElyzpiowkMCtZbQTJuwjLc1fHXb2WpXS5M4feKlFlIAyfnGZsGz5ljVXikEErrM9tB+gL+gdLJCxVTICNCBRHf6YI1BfIBkdheKMnknGg+bkAALLHGBqQRP0/xiK0RydSw69du3TXMdufXrttUOUw1mhOdHqziSwRCDLVq8ElQS+maTuOEg17NEJ0CI+JnL6owqb3vroNIpZiSR5S5SkGiGiyW+sTgFVBN7J2Jb2FpOPFsbnXdK6ctMq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 "
//var mcpeExitButtonPressedIcon = " iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC41ZYUyZQAAAYpJREFUOE+dkN1OwkAQRtc34IWQ0AKKoFQo8S8hUhMCwaiUIkHUhKhcwo1eeY+JJPKI485sZ7uFmqhNTnZ39pvTacXLXQDvr3PFW7j+yCyhNgfXdYFE0/EgMfAbSCIECJRMxwF41X2iGa4mWGPWM0JsKdREwUaYqB1sNHKNoWlQhBKUqZC6/PpcEHQ2GlfLBaxk3XyhnghF+Hl0IRtZomVhA+5RxPUN0fPIhyfJ+WEZmhIOcuNq+RGrcZ3z+tMmwx5MhjfQcPagUSlCKpWKN62tCGYoL1EiyWNwBchZeUfDMrOZz3hnZrXowe/Cfa8Lp6UCcVLK08r/Az+NCGWc46wWja7bgBzt5ojjYi4UGJOEMtpLMMNZLRpetuC224J6wQI3n9WNWpJwxrVeyFJeiwadCwgkNTsDVSuj3m404z9BzAkRzCJa1G970JciJ5sm+EezxLG2oZJQx5pjpQ1RB0UeXTAY5LBqiGTxuiHyaSKPinzJQbMh2isp7SXRRFJk23ZU+D/0JF38AQHf5C2bwVq5FZkAAAAASUVORK5CYII="
var mcpeBackground = " iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC41ZYUyZQAAAtZJREFUeF7tmMGJXEEMRDedTcHgm0++G2xwCHP0xQGYyWBzcXRrXjOvqdV8B1DQByGppFJDMd2f0cvfPz/f325fl/3+9mnZFfbj8+uHur6d/0JAYzaQ3+/3jTkw69SsN/PXL8ACQObYzCWKt/NfUON2u20g1QQjVz29uFgzfwlgkQJkMXEHctDE2vnrDZAk0QYNzD5jjAPFW/nrDcgCj0c2eEjGeVA7fz+CNgDaYBMHXOFYO3+/AYLpVdZm+2ZNrJG/BMAELGaeptLEcpv5W4BZxDt4kjDvWjv/6Qpg2cynQxyMgVdxK//DZ/BqyP+Muj3N/P1fwMKv71+WdxAxB9CMJyfOejN/XwGbjNNrmTugnb8FSFXIeSTMxZJIzEDjVv7ZBxDQmA3kKCjmwKxTs97MP/sA1OBbKZBqgpGrnl5crJm/H0E8Bchi4g7koIm1888+QNUEeTyywUMyzoPa+WcfMMH0KmuzfbMm1shfAmACFjNPU2liuc38LcAs4h08SZh3rZ3/dAWwbObTIQ7GwKu4lX/2ASSSsbMPeMTptcwd0M7fAqQq5DwS5mJJJGagcSv/7AMIaMwGchQUc2DWqVlv5p99AGrwrRRINcHIVU8vLtbM348gngJkMXEHctDE2vlnH6Bqgjwe2eAhGedB7fyzD5hgepW12b5ZE2vkLwEwAYuZp6k0sdxm/hZgFvEOniTMu9bOf7oCWDbz6RAHY+BV3Mo/+wASydjZBzzi9FrmDmjnbwFSFXIeCXOxJBIz0LiVf/YBBDRmAzkKijkw69SsN/PPPgA1+FYKpJpg5KqnFxdr5u9HEE8Bspi4AzloYu38sw9QNUEej2zwkIzzoHb+2QdMML3K2mzfrIk18pcAmIDFzNNUmlhuM38LMIt4B08S5l1r5z9dASyb+XSIgzHwKm7ln30AiWTs7AMecXotcwe087cAqQo5j4S5WBKJGWjcyX99/wcRaXxvqKBwrwAAAABJRU5ErkJggg== "
var logoImage = " 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 ";
var dividerImage = " iVBORw0KGgoAAAANSUhEUgAAAgAAAAADCAIAAABqESAqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAAAtSURBVFhH7dUxEQAwCASw91DBddEVURjqjgVyFw/JqwZgoeRcADYaIQCwQvUH6c9EiHECEccAAAAASUVORK5CYII= ";
var playButtonIcon = " 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 ";
var playButtonClickedIcon = " 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 ";
var splashTwitterButtonIcon = " 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 ";
var splashTwitterButtonClickedIcon = " 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 ";
Base64Decode(android.util.Base64.decode(fontFont, 0), pathFont + "/minecraft-moreoptionspe.ttf");
Base64Decode(android.util.Base64.decode(settingsIcon, 0), path + "/settings.png");
Base64Decode(android.util.Base64.decode(mcpeButtonOldIcon, 0), path + "/mcpebutton.png");
Base64Decode(android.util.Base64.decode(blackIconTransparent, 0), path + "/blackt.png");
Base64Decode(android.util.Base64.decode(mcpeExitButtonIcon, 0), path + "/mcpeexitbutton.png");
Base64Decode(android.util.Base64.decode(reloadButtonIcon, 0), path + "/reloadbutton.png");
Base64Decode(android.util.Base64.decode(closeButtonIcon, 0), path + "/closebutton.png");
Base64Decode(android.util.Base64.decode(playButtonIcon, 0), path + "/playbutton.png");
Base64Decode(android.util.Base64.decode(playButtonClickedIcon, 0), pathFont + "/play_button_clicked.png");
Base64Decode(android.util.Base64.decode(splashTwitterButtonIcon, 0), path + "/splashtwitterbutton.png");
Base64Decode(android.util.Base64.decode(splashTwitterButtonClickedIcon, 0), pathFont + "/twitter_button_clicked.png");
//Base64Decode(android.util.Base64.decode(mcpeExitButtonPressedIcon, 0), path + "/mcpeexitbuttonpressed.png");
//Base64Decode(android.util.Base64.decode(mcpeBackground, 0), path + "/mcpebackground.png");

function Base64Decode(byteArray, Path) {
    try {
        var File = new java.io.File(Path);
        if(!File.exists()) {
            File.createNewFile();
            var Stream = new java.io.FileOutputStream(File);
            Stream.write(byteArray);
            Stream.close();
        }
		mcpeFont = new android.graphics.Typeface.createFromFile(pathFont + "/minecraft-moreoptionspe.ttf");
    } catch(err) {
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
var reloadBtn = new android.graphics.BitmapFactory.decodeFile(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/minecraftpe/mods/reloadbutton.png");
var closeBtn = new android.graphics.BitmapFactory.decodeFile(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/minecraftpe/mods/closebutton.png");
var playBtn = new android.graphics.BitmapFactory.decodeFile(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/minecraftpe/mods/playbutton.png");
var playBtnClicked = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/play_button_clicked.png");
var splashTwitterBtn = new android.graphics.BitmapFactory.decodeFile(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/minecraftpe/mods/splashtwitterbutton.png");
var splashTwitterBtnClicked = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/twitter_button_clicked.png");
//var mcpeBckgrnd = new android.graphics.BitmapFactory.decodeFile(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/minecraftpe/mods/mcpebackground.png");

var settingsButton = new android.graphics.drawable.BitmapDrawable(sBtn);
var mcpeButtonOldImage = new android.graphics.drawable.BitmapDrawable(mcpeBtnOld);
var blackTImage = new android.graphics.drawable.BitmapDrawable(blackTBtn);
var mcpeExitButtonImage = new android.graphics.drawable.BitmapDrawable(mcpeExitBtn);
var reloadButtonImage = new android.graphics.drawable.BitmapDrawable(reloadBtn);
var closeButtonImage = new android.graphics.drawable.BitmapDrawable(closeBtn);
var playButtonImage = new android.graphics.drawable.BitmapDrawable(playBtn);
var playButtonClickedImage = new android.graphics.drawable.BitmapDrawable(playBtnClicked);
var splashTwitterButtonImage = new android.graphics.drawable.BitmapDrawable(splashTwitterBtn);
var splashTwitterButtonClickedImage = new android.graphics.drawable.BitmapDrawable(splashTwitterBtnClicked);
//var mcpeExitButtonPressedImage = new android.graphics.drawable.BitmapDrawable(mcpeExitBtn);
//var mcpeBackgroundImage = new android.graphics.drawable.BitmapDrawable(mcpeBckgrnd);*/

var mcpeBtn = getStretchedImage(android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 0, 32, 8, 8), 8 * GuiSize, 8 * GuiSize, false), 3.7 * GuiSize, 4 * GuiSize, 2 * GuiSize, 2 * GuiSize, getContext().getScreenWidth() / 11, getContext().getScreenHeight() / 14);
var unmcpeBtn = getStretchedImage(android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 8, 32, 8, 8), 8 * GuiSize, 8 * GuiSize, false), 3.7 * GuiSize, 4 * GuiSize, 2 * GuiSize, 2 * GuiSize, getContext().getScreenWidth() / 11, getContext().getScreenHeight() / 14);
var clicked_image = getStretchedImage(android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 0, 32, 8, 8), 8 * GuiSize, 8 * GuiSize, false), 3.7 * GuiSize, 4 * GuiSize, 2 * GuiSize, 2 * GuiSize, getContext().getScreenWidth() / 2, getContext().getScreenHeight() / 10);
var unclicked_image = getStretchedImage(android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 8, 32, 8, 8), 8 * GuiSize, 8 * GuiSize, false), 3.7 * GuiSize, 4 * GuiSize, 2 * GuiSize, 2 * GuiSize, getContext().getScreenWidth() / 2, getContext().getScreenHeight() / 10);
//var mcpeExitBtn = new android.graphics.BitmapFactory.decodeFile(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/mcpeexitbutton.png");
var unmcpeX = getStretchedImage(android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 8, 32, 8, 8), 8 * GuiSize, 8 * GuiSize, false), 3.7 * GuiSize, 4 * GuiSize, 2 * GuiSize, 2 * GuiSize, getContext().getScreenWidth() / 18.5, getContext().getScreenHeight() / 19);
var mcpeX = getStretchedImage(android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 0, 32, 8, 8), 8 * GuiSize, 8 * GuiSize, false), 3.7 * GuiSize, 4 * GuiSize, 2 * GuiSize, 2 * GuiSize, getContext().getScreenWidth() / 19.5, getContext().getScreenHeight() / 19);

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
var State22 = false;
var State23 = false;
var State24 = false;
var State25 = false;
var State26 = false;
var State27 = false;
var State28 = false;
var StatePowerExplosions = false;
var StateAutoMine = false;
var StateTapRemover = false;
var StateTwerk = false;
var StateDerp = false;
var StateTrails = false;

var spawn = false;
var entityId;

function spawnEntity(entityId) {

}

function destroyBlock(x, y, z, side) {
    var data = Level.getData(x, y, z);
    var tile = Level.getTile(x, y, z);
    var gamemode = Level.getGameMode();
    if(gamemode == 0) {
        if(State14 == true) {
            if(tile == 1 && getCarriedItem() == 270 || tile == 1 && getCarriedItem() == 257 || tile == 1 && getCarriedItem() == 274 || tile == 1 && getCarriedItem() == 278 || tile == 1 && getCarriedItem() == 285 || tile == 4 && getCarriedItem() == 270 || tile == 4 && getCarriedItem() == 257 || tile == 4 && getCarriedItem() == 274 || tile == 4 && getCarriedItem() == 278 || tile == 4 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 4, 63);
            } else if(tile == 1 && getCarriedItem() != 270 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285 || tile == 4 && getCarriedItem() != 270 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 4, 64);
            }
            if(tile == 2 || tile == 3) {
                Level.dropItem(x, y, z, 0.5, 3, 63);
            }
            if(tile == 5 || tile == 6 || tile == 12 || tile == 13) {
                Level.dropItem(x, y, z, 0.5, tile, 63, data);
            }
            if(tile == 14 && getCarriedItem() == 257 || tile == 14 && getCarriedItem() == 278 || tile == 14 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 14, 63);
            } else if(tile == 14 && getCarriedItem() != 257 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 14, 64);
            }
            if(tile == 15 && getCarriedItem() == 257 || tile == 15 && getCarriedItem() == 274 || tile == 15 && getCarriedItem() == 278 || tile == 15 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 15, 63);
            } else if(tile == 15 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 15, 64);
            }
            if(tile == 16 && getCarriedItem() == 270 || tile == 16 && getCarriedItem() == 257 || tile == 16 && getCarriedItem() == 274 || tile == 16 && getCarriedItem() == 278 || tile == 16 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 263, 63);
            } else if(tile == 16 && getCarriedItem() != 270 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 263, 64);
            }
            if(tile == 17) {
                Level.dropItem(x, y, z, 0.5, 17, 63, data);
            }
            if(tile == 18 && getCarriedItem() == 359) {
                Level.dropItem(x, y, z, 0.5, 18, 63);
            } else if(tile == 18 && getCarriedItem() != 359) {
                Level.dropItem(x, y, z, 0.5, 18, 64);
            }
            if(tile == 19 || tile == 20) {
                Level.dropItem(x, y, z, 0.5, tile, 63, data);
            }
            if(tile == 21 && getCarriedItem() == 257 || tile == 21 && getCarriedItem() == 274 || tile == 21 && getCarriedItem() == 278 || tile == 21 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 21, 63);
            } else if(tile == 21 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 21, 64);
            }
            if(tile == 22 && getCarriedItem() == 257 || tile == 22 && getCarriedItem() == 274 || tile == 22 && getCarriedItem() == 278 || tile == 22 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 22, 63);
            } else if(tile == 22 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 22, 64);
            }
            if(tile == 24 && getCarriedItem() == 270 || tile == 24 && getCarriedItem() == 257 || tile == 24 && getCarriedItem() == 274 || tile == 24 && getCarriedItem() == 278 || tile == 24 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 24, 63);
            } else if(tile == 24 && getCarriedItem() != 270 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 24, 64);
            }
            if(tile == 26) {
                Level.dropItem(x, y, z, 0.5, 26, 63, data);
            }
            if(tile == 27 && getCarriedItem() == 270 || tile == 27 && getCarriedItem() == 257 || tile == 27 && getCarriedItem() == 274 || tile == 27 && getCarriedItem() == 278 || tile == 27 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 27, 63);
            } else if(tile == 27 && getCarriedItem() != 270 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 27, 64);
            }
            if(tile == 30 && getCarriedItem() == 359) {
                Level.dropItem(x, y, z, 0.5, 287, 63);
            } else if(tile == 30 && getCarriedItem() != 359) {
                Level.dropItem(x, y, z, 0.5, 287, 64);
            }
            if(tile == 31 && getCarriedItem() == 359 || tile == 32 & getCarriedItem() == 359) {
                Level.dropItem(x, y, z, 0.5, tile, 63, data);
            } else if(tile == 31 && getCarriedItem() != 359 || tile == 32 && getCarriedItem() != 359) {
                Level.dropItem(x, y, z, 0.5, tile, 64, data);
            }
            if(tile == 37 || tile == 38 || tile == 39 || tile == 40) {
                Level.dropItem(x, y, z, 0.5, tile, 63);
            }
            if(tile == 41 && getCarriedItem() == 257 || tile == 41 && getCarriedItem() == 278 || tile == 41 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 41, 63);
            } else if(tile == 41 && getCarriedItem() != 257 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 41, 64);
            }
            if(tile == 42 && getCarriedItem() == 257 || tile == 42 && getCarriedItem() == 274 || tile == 42 && getCarriedItem() == 278 || tile == 42 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 42, 63);
            } else if(tile == 42 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 42, 64);
            }
            if(tile == 44 && getCarriedItem() == 257 || tile == 44 && getCarriedItem() == 270 || tile == 44 && getCarriedItem() == 274 || tile == 44 && getCarriedItem() == 278 || tile == 44 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 44, 63);
            } else if(tile == 44 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 44, 64);
            }
            if(tile == 45 && getCarriedItem() == 270 || tile == 45 && getCarriedItem() == 257 || tile == 45 && getCarriedItem() == 274 || tile == 45 && getCarriedItem() == 278 || tile == 45 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 45, 63);
            } else if(tile == 45 && getCarriedItem() != 270 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 45, 64);
            }
            if(tile == 47) {
                Level.dropItem(x, y, z, 0.5, 340, 61);
            }
            if(tile == 48 && getCarriedItem() == 270 || tile == 48 && getCarriedItem() == 257 || tile == 48 && getCarriedItem() == 274 || tile == 48 && getCarriedItem() == 278 || tile == 48 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 48, 63);
            } else if(tile == 48 && getCarriedItem() != 270 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 48, 64);
            }
            if(tile == 49 && getCarriedItem() == 278 || tile == 246 && getCarriedItem() == 278) {
                Level.dropItem(x, y, z, 0.5, 49, 63);
            } else if(tile == 49 && getCarriedItem() != 278 || tile == 246 && getCarriedItem() != 278) {
                Level.dropItem(x, y, z, 0.5, 49, 64);
            }
            if(tile == 50 || tile == 53 || tile == 54) {
                Level.dropItem(x, y, z, 0.5, tile, 63);
            }
            if(tile == 56 && getCarriedItem() == 257 || tile == 57 && getCarriedItem() == 257 || tile == 56 && getCarriedItem() == 278 || tile == 57 && getCarriedItem() == 278 || tile == 56 && getCarriedItem() == 285 || tile == 57 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, tile, 63);
            } else if(tile == 56 && getCarriedItem() != 257 && getCarriedItem() != 278 && getCarriedItem() != 285 || tile == 57 && getCarriedItem() != 257 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, tile, 64);
            }
            if(tile == 61 && getCarriedItem() == 270 || tile == 61 && getCarriedItem() == 257 || tile == 61 && getCarriedItem() == 274 || tile == 61 && getCarriedItem() == 278 || tile == 61 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 61, 63);
            } else if(tile == 61 && getCarriedItem() != 270 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 61, 64);
            }
            if(tile == 63 || tile == 64 || tile == 65 || tile == 66) {
                Level.dropItem(x, y, z, 0.5, tile, 63);
            }
            if(tile == 67 && getCarriedItem() == 270 || tile == 67 && getCarriedItem() == 257 || tile == 67 && getCarriedItem() == 274 || tile == 67 && getCarriedItem() == 278 || tile == 67 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 67, 63);
            } else if(tile == 67 && getCarriedItem() != 270 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 67, 64);
            }
            if(tile == 73 && getCarriedItem() == 257 || tile == 73 && getCarriedItem() == 278 || tile == 73 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 331, 63);
            } else if(tile == 73 && getCarriedItem() != 257 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 331, 64);
            }
            if(tile == 78 && getCarriedItem() == 256 || tile == 78 && getCarriedItem() == 269 || tile == 78 && getCarriedItem() == 273 || tile == 78 && getCarriedItem() == 277 || tile == 78 && getCarriedItem() == 284) {
                Level.dropItem(x, y, z, 0.5, 332, 63);
            } else if(tile == 78 && getCarriedItem() != 256 && getCarriedItem() != 269 && getCarriedItem() != 273 && getCarriedItem() != 277 && getCarriedItem() != 284) {
                Level.dropItem(x, y, z, 0.5, 332, 64);
            }
            if(tile == 80 && getCarriedItem() == 256 || tile == 80 && getCarriedItem() == 269 || tile == 80 && getCarriedItem() == 273 || tile == 80 && getCarriedItem() == 277 || tile == 80 && getCarriedItem() == 284) {
                Level.dropItem(x, y, z, 0.5, 332, 60);
            } else if(tile == 80 && getCarriedItem() != 256 && getCarriedItem() != 269 && getCarriedItem() != 273 && getCarriedItem() != 277 && getCarriedItem() != 284) {
                Level.dropItem(x, y, z, 0.5, 332, 64);
            }
            if(tile == 81 || tile == 82 || tile == 83 || tile == 85 || tile == 86 || tile == 89 || tile == 91 || tile == 96 || tile == 102 || tile == 107) {
                Level.dropItem(x, y, z, 0.5, tile, 63);
            }
            if(tile == 87 && getCarriedItem() == 257 || tile == 87 && getCarriedItem() == 270 || tile == 87 && getCarriedItem() == 274 || tile == 87 && getCarriedItem() == 278 || tile == 87 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 87, 63);
            } else if(tile == 87 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 87, 64);
            }
            if(tile == 98 && getCarriedItem() == 257 || tile == 98 && getCarriedItem() == 270 || tile == 98 && getCarriedItem() == 274 || tile == 98 && getCarriedItem() == 278 || tile == 98 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 98, 63);
            } else if(tile == 98 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 98, 64);
            }
            if(tile == 101 && getCarriedItem() == 257 || tile == 101 && getCarriedItem() == 270 || tile == 101 && getCarriedItem() == 274 || tile == 101 && getCarriedItem() == 278 || tile == 101 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 101, 63);
            } else if(tile == 101 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 101, 64);
            }
            if(tile == 103) {
                Level.dropItem(x, y, z, 0.5, 360, 57);
            }
            if(tile == 108 && getCarriedItem() == 257 || tile == 108 && getCarriedItem() == 270 || tile == 108 && getCarriedItem() == 274 || tile == 108 && getCarriedItem() == 278 || tile == 108 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 108, 63);
            } else if(tile == 108 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 108, 64);
            }
            if(tile == 109 && getCarriedItem() == 257 || tile == 109 && getCarriedItem() == 270 || tile == 109 && getCarriedItem() == 274 || tile == 109 && getCarriedItem() == 278 || tile == 109 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 109, 63);
            } else if(tile == 109 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 109, 64);
            }
            if(tile == 112 && getCarriedItem() == 257 || tile == 112 && getCarriedItem() == 270 || tile == 112 && getCarriedItem() == 274 || tile == 112 && getCarriedItem() == 278 || tile == 112 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 112, 63);
            } else if(tile == 112 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 112, 64);
            }
            if(tile == 114 && getCarriedItem() == 257 || tile == 114 && getCarriedItem() == 270 || tile == 114 && getCarriedItem() == 274 || tile == 114 && getCarriedItem() == 278 || tile == 114 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 114, 63);
            } else if(tile == 114 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 114, 64);
            }
            if(tile == 128 && getCarriedItem() == 257 || tile == 128 && getCarriedItem() == 270 || tile == 128 && getCarriedItem() == 274 || tile == 128 && getCarriedItem() == 278 || tile == 128 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 128, 63);
            } else if(tile == 128 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 128, 64);
            }
            if(tile == 134 || tile == 135 || tile == 136 || tile == 158 || tile == 170 || tile == 171 || tile == 245 || tile == 247) {
                Level.dropItem(x, y, z, 0.5, tile, 63, data);
            }
            if(tile == 139 && getCarriedItem() == 257 || tile == 139 && getCarriedItem() == 270 || tile == 139 && getCarriedItem() == 274 || tile == 139 && getCarriedItem() == 278 || tile == 139 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 139, 63);
            } else if(tile == 139 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 139, 64);
            }
            if(tile == 155 && getCarriedItem() == 257 || tile == 155 && getCarriedItem() == 270 || tile == 155 && getCarriedItem() == 274 || tile == 155 && getCarriedItem() == 278 || tile == 155 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 155, 63);
            } else if(tile == 155 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 155, 64);
            }
            if(tile == 156 && getCarriedItem() == 257 || tile == 156 && getCarriedItem() == 270 || tile == 156 && getCarriedItem() == 274 || tile == 156 && getCarriedItem() == 278 || tile == 156 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 156, 63);
            } else if(tile == 156 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 156, 64);
            }
            if(tile == 173 && getCarriedItem() == 257 || tile == 173 && getCarriedItem() == 270 || tile == 173 && getCarriedItem() == 274 || tile == 173 && getCarriedItem() == 278 || tile == 173 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 173, 63);
            } else if(tile == 173 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 173, 64);
            }
            if(tile == 244 && getCarriedItem() == 257 || tile == 244 && getCarriedItem() == 270 || tile == 244 && getCarriedItem() == 274 || tile == 244 && getCarriedItem() == 278 || tile == 244 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 457, 63);
            } else if(tile == 244 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 457, 64);
            }
            if(tile == 250) {
                Level.dropItem(x, y, z, 0, 247, 64);
            }
        }
    }if(gamemode == 1) {
		if(spectator == "on") {
			preventDefault();
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
    State22 = false;
    State23 = false;
    State24 = false;
    State25 = false;
    State26 = false;
    State27 = false;
	State28 = false;
	StatePowerExplosions = false;
	StateAutoMine = false;
	StateTapRemover = false;
    StateTwerk = false;
    StateDerp = false;
    closeMenu();
    if(showList == "on") {
        closeHacksList();
    }
    MoreOptionsPE.saveMainSettings();
    if(HomeX != null || HomeY != null || HomeZ != null) {
        MoreOptionsPE.savePerWorldSettings();
    }
    HomeX = null;
    HomeY = null;
    HomeZ = null;
}

function dip2px(dips) {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}
//Add menu button
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
/*ctx.runOnUiThread(new java.lang.Runnable({
    run: function() {
        try {
            MoreOptionsPE.loadMainSettings();
            var layout = new android.widget.LinearLayout(ctx);
            layout.setOrientation(1);

            var menuBtn = new android.widget.Button(ctx);
            if(useOldIcon == "on") {
                var display = new android.util.DisplayMetrics();
                com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
                menuBtn = new android.widget.Button(ctx);
                menuBtn.setBackgroundDrawable(settingsButton);
                menuBtn.setAlpha(0.54);
                menuBtn.setLayoutParams(new android.widget.LinearLayout.LayoutParams(display.heightPixels / 10, display.heightPixels / 10));
            }
            if(useOldIcon == "off") {
                var display = new android.util.DisplayMetrics();
                com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
                menuBtn = minecraftButtonO("•••");
                menuBtn.setAlpha(0.54);
                menuBtn.setLayoutParams(new android.widget.LinearLayout.LayoutParams(display.heightPixels / 10, display.heightPixels / 10));
            }

            menuBtn.setTextSize(20);
            menuBtn.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg) {
                    Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
					closeHacksList();
                    mainMenu();
                    exit();
                }
            }));
            layout.addView(menuBtn);

            GUI = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
            GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            if(showMainButton == "on") {
                GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 90, 0);
            }
        } catch(err) {
            print('An error occured: ' + err);
        }
    }
}));*/

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
                    StateText = Texts.walk_through_blocks + " | ";
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

function showHacksList() {
    if(showList == "on") {
        var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                try {
                    var hacksListLayout = new android.widget.LinearLayout(ctx);
                    hacksListLayout.setOrientation(1);
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
                    var State22Text = "";
                    var State23Text = "";
                    var State24Text = "";
                    var State25Text = "";
                    var State26Text = "";
                    var State27Text = "";
                    var State28Text = "";
                    var StatePowerExplosionsText = "";
                    var StateTwerkText = "";
                    var StateDerpText = "";
					var MoreOptionsHacksListText =  "AgameR MoreOptions PE v" + CURRENT_VERSION;
                    if(State == true) {
                        StateText = " [" + Texts.walk_through_blocks + "] ";
                    } else if(State == false) {
                        StateText = "";
                    }
                    if(State1 == true) {
                        State1Text = " [" + Texts.instaheal + "] ";
                    } else if(State1 == false) {
                        State1Text = "";
                    }
                    if(State2 == true) {
                        State2Text = " [" + Texts.fly + "] ";
                    } else if(State2 == false) {
                        State2Text = "";
                    }
                    if(State3 == true) {
                        State3Text = " [" + Texts.set_entities_on_fire + "] ";
                    } else if(State3 == false) {
                        State3Text = "";
                    }
                    if(State4 == true) {
                        State4Text = " [" + Texts.gamespeed + " x" + gameSpeedHackSetting + "] ";
                    } else if(State4 == false) {
                        State4Text = "";
                    }
                    if(State5 == true) {
                        State5Text = " [" + Texts.tapspammer + "] ";
                    } else if(State5 == false) {
                        State5Text = "";
                    }
                    if(State6 == true) {
                        State6Text = " [" + Texts.sneaking + "] ";
                    } else if(State6 == false) {
                        State6Text = "";
                    }
                    if(State7 == true) {
                        State7Text = " [" + Texts.zoom + "] ";
                    } else if(State7 == false) {
                        State7Text = "";
                    }
                    if(State8 == true) {
                        State8Text = " [" + Texts.show_coords + "] ";
                    } else if(State8 == false) {
                        State8Text = "";
                    }
                    if(State9 == true) {
                        State9Text = " [" + Texts.instamine + "] ";
                    } else if(State9 == false) {
                        State9Text = "";
                    }
                    if(State10 == true) {
                        State10Text = " [" + Texts.knockback + "] ";
                    } else if(State10 == false) {
                        State10Text = "";
                    }
                    if(State11 == true) {
                        State11Text = " [" + Texts.xray + "] ";
                    } else if(State11 == false) {
                        State11Text = "";
                    }
                    if(State12 == true) {
                        State12Text = " [" + Texts.always_day + "] ";
                    } else if(State12 == false) {
                        State12Text = "";
                    }
                    if(State13 == true) {
                        State13Text = " [" + Texts.saddle_up + "] ";
                    } else if(State13 == false) {
                        State13Text = "";
                    }
                    if(State14 == true) {
                        State14Text = " [" + Texts.stackdrop + "] ";
                    } else if(State14 == false) {
                        State14Text = "";
                    }
                    if(State15 == true) {
                        State15Text = " [" + Texts.teleporter + "] ";
                    } else if(State15 == false) {
                        State15Text = "";
                    }
                    if(State16 == true) {
                        State16Text = " [" + Texts.instakill + "] ";
                    } else if(State16 == false) {
                        State16Text = "";
                    }
                    if(State17 == true) {
                        State17Text = " [" + Texts.signeditor + " (EXPERIMENTAL)] ";
                    } else if(State17 == false) {
                        State17Text = "";
                    }
                    if(State18 == true) {
                        State18Text = " [" + Texts.all_items_eatable + "] ";
                    } else if(State18 == false) {
                        State18Text = "";
                    }
                    if(State19 == true) {
                        State19Text = " [" + Texts.sprinting + "] ";
                    } else if(State19 == false) {
                        State19Text = "";
                    }
                    if(State20 == true) {
                        State20Text = " [" + Texts.jetpack + "] ";
                    } else if(State20 == false) {
                        State20Text = "";
                    }
                    if(State21 == true) {
                        State21Text = " [" + Texts.highjump + "] ";
                    } else if(State21 == false) {
                        State21Text = "";
                    }
                    if(State22 == true) {
                        State22Text = " [" + Texts.drone + "] ";
                    } else if(State22 == false) {
                        State22Text = "";
                    }
                    if(State23 == true) {
                        State23Text = " [" + Texts.parachute + "] ";
                    } else if(State23 == false) {
                        State23Text = "";
                    }
                    if(State24 == true) {
                        State24Text = " [" + Texts.tapnuker + "] ";
                    } else if(State24 == false) {
                        State24Text = "";
                    }
                    if(State25 == true) {
                        State25Text = " [" + Texts.walk_on_liquids + "] ";
                    } else if(State25 == false) {
                        State25Text = "";
                    }
					if(State26 == true) {
                        State26Text = " [" + Texts.autospammer + "] ";
                    } else if(State26 == false) {
                        State26Text = "";
                    }
					if(State27 == true) {
                        State27Text = " [" + Texts.autoleave + "] ";
                    } else if(State27 == false) {
                        State27Text = "";
                    }
					if(State28 == true) {
                        State28Text = " [" + Texts.instafood + "] ";
                    } else if(State28 == false) {
                        State28Text = "";
                    }
					if(StatePowerExplosions == true) {
                        StatePowerExplosionsText = " [" + Texts.powerexplosions + "] ";
                    } else if(StatePowerExplosions == false) {
                        StatePowerExplosionsText = "";
                    }
					if(StateAutoMine == true) {
                        StateAutoMineText = " [" + Texts.automine + "] ";
                    } else if(StateAutoMine == false) {
                        StateAutoMineText = "";
                    }
					if(StateTapRemover == true) {
                        StateTapRemoverText = " [" + Texts.tapremover + "] ";
                    } else if(StateTapRemover == false) {
                        StateTapRemoverText = "";
                    }
                    if(StateTwerk == true) {
                        StateTwerkText = " [" + Texts.twerk + "] ";
                    } else if(StateTwerk == false) {
                        StateTwerkText = "";
                    }
                    if(StateDerp == true) {
                        StateDerpText = " [" + Texts.derp + "] ";
                    } else if(StateDerp == false) {
                        StateDerpText = "";
                    }
                    var MoreOptionsHacksListTextView = minecraftText(MoreOptionsHacksListText);
					var StatesText = minecraftText(StateText + State1Text + State2Text + State3Text + State4Text + State5Text + State6Text + State7Text + State8Text + State9Text + State10Text + State11Text + State12Text + State13Text + State14Text + State15Text + State16Text + State17Text + State18Text + State19Text + State20Text + State21Text + State22Text + State23Text + State24Text + State25Text + State26Text + State27Text + State28Text + StatePowerExplosionsText + StateAutoMineText + StateTapRemoverText + StateTwerkText + StateDerpText);
                    MoreOptionsHacksListTextView.setTextSize(15);
					MoreOptionsHacksListTextView.setTextColor(android.graphics.Color.parseColor("#0099FF"));
                    StatesText.setTextSize(15);
					StatesText.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
					StatesText.setMarqueeRepeatLimit(-1);
					StatesText.setSingleLine();
					StatesText.setHorizontallyScrolling(true);
					StatesText.setSelected(true);
                    //StatesText.setText(StateText + State1Text); //Title
                    hacksListLayout.addView(MoreOptionsHacksListTextView);
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
                    hacksList = new android.widget.PopupWindow(hacksListLayout, ctx.getWindowManager().getDefaultDisplay().getWidth() / 2, ctx.getWindowManager().getDefaultDisplay().getHeight() / 10);
                    //hacksList.setBackgroundDrawable(getStretchedImage(spritesheet, 4*GuiSize, 4*GuiSize, 8*GuiSize, 8*GuiSize,getContext().getScreenWidth()/2, getContext().getScreenHeight()));
                    hacksList.setTouchable(false);
                    hacksList.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
                } catch(error) {
                    print('An error occured: ' + error);
                }
            }
        }));
    }
}

function reloadHacksList() {
    if(showList == "on") {
        var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                try {
                    hacksList.dismiss();
                    showHacksList();
                } catch(error) {
                    print('An error occured: ' + error);
                }
            }
        }));
    }
}

function showMainMenuList() {
	var display = new android.util.DisplayMetrics();
	com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                try {
                    var mainMenuListLayout = new android.widget.LinearLayout(ctx);
                    mainMenuListLayout.setOrientation(1);
                    mainMenuListLayout.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
                    //--------Add Buttons-------//
                    /*var newLineText = new android.widget.TextView(ctx);
                    var authorText = new android.widget.TextView(ctx);
                    var currentModVersionText = new android.widget.TextView(ctx);
                    var targetMCPEVersionText = new android.widget.TextView(ctx);
                    var MCPEVersionText = new android.widget.TextView(ctx);
                    var newLine2Text = new android.widget.TextView(ctx);
                    var btn = new android.widget.Button(ctx);*/
					var MoreOptionsMainMenuText = "<font color='#0099FF'>AgameR MoreOptions PE v" + CURRENT_VERSION + "</font>";
					var MoreOptionsMainMenuSplashTipMessageText = "<font color='#FFFF00'>" + MoreOptionsPE.getMessage() + "</font>";
					var text = MoreOptionsMainMenuText + " - " + MOD_CHANGELOG;
					var ChangelogText = minecraftText(android.text.Html.fromHtml(text), android.widget.TextView.BufferType.SPANNABLE);
                    ChangelogText.setTextSize(15);
					ChangelogText.setGravity(android.view.Gravity.CENTER);
					ChangelogText.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
					ChangelogText.setMarqueeRepeatLimit(-1);
					ChangelogText.setSingleLine();
					ChangelogText.setHorizontallyScrolling(true);
					ChangelogText.setSelected(true);
					var newLineText = minecraftText("\n");
					var splashTipMessage = minecraftText(android.text.Html.fromHtml(MoreOptionsMainMenuSplashTipMessageText), android.widget.TextView.BufferType.SPANNABLE);
					splashTipMessage.setGravity(android.view.Gravity.CENTER);
					var newLineText2 = minecraftText("\n\n\n");
					var playButton = new android.widget.Button(ctx);
					playButton.setBackground(playButtonImage);
					playButton.setGravity(android.view.Gravity.CENTER);
					playButton.setLayoutParams(new android.widget.LinearLayout.LayoutParams(display.heightPixels / 3, display.heightPixels / 3));
					playButton.setOnTouchListener(new android.view.View.OnTouchListener() {
						onTouch: function(v, event) {
							playButton.setSoundEffectsEnabled(false);
							var action = event.getActionMasked();
							if(action == android.view.MotionEvent.ACTION_CANCEL || action == android.view.MotionEvent.ACTION_UP) {
								var bNP = playButtonImage;
								bNP.setFilterBitmap(false);
								bNP.setAntiAlias(false);
								playButton.setBackgroundDrawable(bNP);
								playButton.setPadding(0, 0, 0, 0);
							} else {
								var bNP = playButtonClickedImage;
								bNP.setFilterBitmap(false);
								bNP.setAntiAlias(false);
								playButton.setBackgroundDrawable(bNP);
								playButton.setPadding(0, Math.round(playButton.getLineHeight() / 8), 0, 0);
							}
							return false;
						}
					});
					var newLineText3 = new android.widget.TextView(ctx);
					newLineText3.setText("\n");
					var splashTwitterButton = new android.widget.Button(ctx);
					splashTwitterButton.setBackgroundDrawable(splashTwitterButtonImage);
					splashTwitterButton.setGravity(android.view.Gravity.CENTER);
					splashTwitterButton.setLayoutParams(new android.widget.LinearLayout.LayoutParams(display.heightPixels / 5, display.heightPixels / 5));
					splashTwitterButton.setOnTouchListener(new android.view.View.OnTouchListener() {
						onTouch: function(v, event) {
							splashTwitterButton.setSoundEffectsEnabled(false);
							var action = event.getActionMasked();
							if(action == android.view.MotionEvent.ACTION_CANCEL || action == android.view.MotionEvent.ACTION_UP) {
								var bNP = splashTwitterButtonImage;
								bNP.setFilterBitmap(false);
								bNP.setAntiAlias(false);
								splashTwitterButton.setBackgroundDrawable(bNP);
								splashTwitterButton.setPadding(0, 0, 0, 0);
							} else {
								var bNP = splashTwitterButtonClickedImage;
								bNP.setFilterBitmap(false);
								bNP.setAntiAlias(false);
								splashTwitterButton.setBackgroundDrawable(bNP);
								splashTwitterButton.setPadding(0, Math.round(splashTwitterButton.getLineHeight() / 8), 0, 0);
							}
							return false;
						}
					});
					
					playButton.setOnClickListener(new android.view.View.OnClickListener({
						onClick: function(viewarg) {
							mainMenuTextList.dismiss();
							MoreOptionsPE.loadTextsInCurrentLanguage();
							MoreOptionsPE.showMainButton();
					}}));
					splashTwitterButton.setOnClickListener(new android.view.View.OnClickListener({
						onClick: function(viewarg) {
							mainMenuTextList.dismiss();
							MoreOptionsPE.loadTextsInCurrentLanguage();
							MoreOptionsPE.showMainButton();
							ModPE.goToUrl("https://twitter.com/AgameR_Modder");
					}}))
                    //ChangelogText.setText(StateText + State1Text); //Title
                    //mainMenuListLayout.addView(MoreOptionsMainMenuTextTextView);
                    mainMenuListLayout.addView(ChangelogText);
                    mainMenuListLayout.addView(newLineText);
                    mainMenuListLayout.addView(splashTipMessage);
                    mainMenuListLayout.addView(newLineText2);
                    mainMenuListLayout.addView(playButton);
                    mainMenuListLayout.addView(newLineText3);
                    mainMenuListLayout.addView(splashTwitterButton);
                    //var spritesheet = android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 0, 0, 16, 16), 16*GuiSize, 16*GuiSize, false);
                    /*newLineText.setText("\n");
					authorText.setText("Author : " + MOD_AUTHOR);
					currentModVersionText.setText("Current mod version : v" + CURRENT_VERSION);
					targetMCPEVersionText.setText("Target MCPE version : v" + targetMCPEVersion);
					MCPEVersionText.setText("Current MCPE version : v" + mcpeVersion);
					newLine2Text.setText("\n");
                    //btn.setText("Ok");*/

                    //More buttons...
                    mainMenuTextList = new android.widget.PopupWindow(mainMenuListLayout, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight());
                    //mainMenuTextList.setBackgroundDrawable(getStretchedImage(spritesheet, 4*GuiSize, 4*GuiSize, 8*GuiSize, 8*GuiSize,getContext().getScreenWidth()/2, getContext().getScreenHeight()));
                    mainMenuTextList.setBackgroundDrawable(blackTImage);
                    mainMenuTextList.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
                } catch(error) {
                    print('An error occured: ' + error);
                }
            }
        }));
}

showMainMenuList();

function settingsScreen() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var settingsMenuLayout = new android.widget.LinearLayout(ctx);
                var settingsMenuScroll = new android.widget.ScrollView(ctx);
                var settingsMenuLayout1 = new android.widget.LinearLayout(ctx);
                settingsMenuLayout.setOrientation(1);
                settingsMenuLayout1.setOrientation(1);
                settingsMenuScroll.addView(settingsMenuLayout);
                settingsMenuLayout1.addView(settingsMenuScroll);
                //--------Add Buttons-------//
                var spritesheet = android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 0, 0, 16, 16), 16 * GuiSize, 16 * GuiSize, false);
                var layoutTitle = defaultSubTitle("Theme & Layout");
                layoutTitle.setTextSize(16);
                //layoutTitle.setText("Theme & Layout"); //Title
                //layoutTitle.setTypeface(mcpeFont);
                layoutTitle.setTextColor(android.graphics.Color.WHITE); //Color
                layoutTitle.setGravity(android.view.Gravity.CENTER);

                settingsMenuLayout.addView(layoutTitle);

                var exitPositionButton = new android.widget.Button(ctx);
                if(theme == "Alternative" && crossButtonPosition == "right") {
                    exitPositionButton = minecraftButton("Exit button position | RIGHT");
                } else if(theme == "Alternative" && crossButtonPosition == "left") {
                    exitPositionButton = minecraftButton("Exit button position | LEFT");
                } else if(theme == "MCPE" && crossButtonPosition == "right") {
                    exitPositionButton = minecraftButton("Exit button position | RIGHT");
                    //exitPositionButton.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(theme == "MCPE" && crossButtonPosition == "left") {
                    exitPositionButton = minecraftButton("Exit button position | LEFT");
                    //exitPositionButton.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(theme == "Blue" && crossButtonPosition == "right") {
                    exitPositionButton = minecraftButton("Exit button position | RIGHT");
                } else if(theme == "Blue" && crossButtonPosition == "left") {
                    exitPositionButton = minecraftButton("Exit button position | LEFT");
                }
                exitPositionButton.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if(theme == "Alternative" && crossButtonPosition == "right") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            crossButtonPosition = "left";
                            MoreOptionsPE.saveMainSettings();
                            exitPositionButton.setText("Exit button position | LEFT");
                        } else if(theme == "Alternative" && crossButtonPosition == "left") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            crossButtonPosition = "right";
                            MoreOptionsPE.saveMainSettings();
                            exitPositionButton.setText("Exit button position | RIGHT");
                        } else if(theme == "MCPE" && crossButtonPosition == "right") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            crossButtonPosition = "left";
                            MoreOptionsPE.saveMainSettings();
                            exitPositionButton.setText("Exit button position | LEFT");
                            //exitPositionButton.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(theme == "MCPE" && crossButtonPosition == "left") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            crossButtonPosition = "right";
                            MoreOptionsPE.saveMainSettings();
                            exitPositionButton.setText("Exit button position | RIGHT");
                            //exitPositionButton.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(theme == "Blue" && crossButtonPosition == "right") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            crossButtonPosition = "left";
                            MoreOptionsPE.saveMainSettings();
                            exitPositionButton.setText("Exit button position | LEFT");
                        } else if(theme == "Blue" && crossButtonPosition == "left") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            crossButtonPosition = "right";
                            MoreOptionsPE.saveMainSettings();
                            exitPositionButton.setText("Exit button position | RIGHT");
                        }
                    }
                }));
                settingsMenuLayout.addView(exitPositionButton);

                var themeButton = new android.widget.Button(ctx);
                if(theme == "Alternative") {
                    themeButton = minecraftButton("Theme | Alternative");
                } else if(theme == "MCPE") {
                    themeButton = minecraftButton("Theme | MCPE");
                    //themeButton.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(theme == "Blue") {
                    themeButton = minecraftButton("Theme | Blue");
                }
                themeButton.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if(theme == "Alternative") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            theme = "MCPE";
                            MoreOptionsPE.saveMainSettings();
                            themeButton.setText("Theme | MCPE");
                            //themeButton.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(theme == "MCPE") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            theme = "Blue";
                            MoreOptionsPE.saveMainSettings();
                            themeButton.setText("Theme | Blue");
                        } else if(theme == "Blue") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            theme = "Alternative";
                            MoreOptionsPE.saveMainSettings();
                            themeButton.setText("Theme | Alternative");
                        }
                    }
                }));
                settingsMenuLayout.addView(themeButton);

                var fullScreenButton = new android.widget.Button(ctx);
                if(theme == "Alternative" && fullScreen == "off") {
                    fullScreenButton = minecraftButton("Fullscreen | " + Texts.off);
                } else if(theme == "Alternative" && fullScreen == "on") {
                    fullScreenButton = minecraftButton("Fullscreen | " + Texts.on);
                } else if(theme == "MCPE" && fullScreen == "off") {
                    fullScreenButton = minecraftButton("Fullscreen | " + Texts.off);
                    //fullScreenButton.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(theme == "MCPE" && fullScreen == "on") {
                    fullScreenButton = minecraftButton("Fullscreen | " + Texts.on);
                    //fullScreenButton.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(theme == "Blue" && fullScreen == "off") {
                    fullScreenButton = minecraftButton("Fullscreen | " + Texts.off);
                } else if(theme == "Blue" && fullScreen == "on") {
                    fullScreenButton = minecraftButton("Fullscreen | " + Texts.on);
                }
                fullScreenButton.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if(theme == "Alternative" && fullScreen == "off") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            fullScreen = "on";
                            MoreOptionsPE.saveMainSettings();
                            fullScreenButton.setText("Fullscreen | " + Texts.on);
                        } else if(theme == "Alternative" && fullScreen == "on") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            fullScreen = "off";
                            MoreOptionsPE.saveMainSettings();
                            fullScreenButton.setText("Fullscreen | " + Texts.off);
                        } else if(theme == "MCPE" && fullScreen == "off") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            fullScreen = "on";
                            MoreOptionsPE.saveMainSettings();
                            fullScreenButton.setText("Fullscreen | " + Texts.on);
                            //fullScreenButton.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(theme == "MCPE" && fullScreen == "on") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            fullScreen = "off";
                            MoreOptionsPE.saveMainSettings();
                            fullScreenButton.setText("Fullscreen | " + Texts.off);
                            //fullScreenButton.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(theme == "Blue" && fullScreen == "off") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            fullScreen = "on";
                            MoreOptionsPE.saveMainSettings();
                            fullScreenButton.setText("Fullscreen | " + Texts.on);
                        } else if(theme == "Blue" && fullScreen == "on") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            fullScreen = "off";
                            MoreOptionsPE.saveMainSettings();
                            fullScreenButton.setText("Fullscreen | " + Texts.off);
                        }
                    }
                }));
                settingsMenuLayout.addView(fullScreenButton);

                var hacksListButton = new android.widget.Button(ctx);
                if(theme == "Alternative" && showList == "off") {
                    hacksListButton = minecraftButton("Show hack list | " + Texts.off);
                } else if(theme == "Alternative" && showList == "on") {
                    hacksListButton = minecraftButton("Show hack list | " + Texts.on);
                } else if(theme == "MCPE" && showList == "off") {
                    hacksListButton = minecraftButton("Show hack list | " + Texts.off);
                    //hacksListButton.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(theme == "MCPE" && showList == "on") {
                    hacksListButton = minecraftButton("Show hack list | " + Texts.on);
                    //hacksListButton.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(theme == "Blue" && showList == "off") {
                    hacksListButton = minecraftButton("Show hack list | " + Texts.off);
                } else if(theme == "Blue" && showList == "on") {
                    hacksListButton = minecraftButton("Show hack list | " + Texts.on);
                }
                hacksListButton.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if(theme == "Alternative" && showList == "off") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            showList = "on";
                            MoreOptionsPE.saveMainSettings();
                            hacksListButton.setText("Show hack list | " + Texts.on);
                        } else if(theme == "Alternative" && showList == "on") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            showList = "off";
                            MoreOptionsPE.saveMainSettings();
                            hacksListButton.setText("Show hack list | " + Texts.off);
                        } else if(theme == "MCPE" && showList == "off") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            showList = "on";
                            MoreOptionsPE.saveMainSettings();
                            hacksListButton.setText("Show hack list | " + Texts.on);
                            //hacksListButton.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(theme == "MCPE" && showList == "on") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            showList = "off";
                            MoreOptionsPE.saveMainSettings();
                            hacksListButton.setText("Show hack list | " + Texts.off);
                            //hacksListButton.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(theme == "Blue" && showList == "off") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            showList = "on";
                            MoreOptionsPE.saveMainSettings();
                            hacksListButton.setText("Show hack list | " + Texts.on);
                        } else if(theme == "Blue" && showList == "on") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            showList = "off";
                            MoreOptionsPE.saveMainSettings();
                            hacksListButton.setText("Show hack list | " + Texts.off);
                        }
                    }
                }));
                settingsMenuLayout.addView(hacksListButton);

                var oldIconButton = new android.widget.Button(ctx);
                if(theme == "Alternative" && useOldIcon == "off") {
                    oldIconButton = minecraftButton("Use old icon | " + Texts.off);
                } else if(theme == "Alternative" && useOldIcon == "on") {
                    oldIconButton = minecraftButton("Use old icon | " + Texts.on);
                } else if(theme == "MCPE" && useOldIcon == "off") {
                    oldIconButton = minecraftButton("Use old icon | " + Texts.off);
                    //oldIconButton.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(theme == "MCPE" && useOldIcon == "on") {
                    oldIconButton = minecraftButton("Use old icon | " + Texts.on);
                    //oldIconButton.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(theme == "Blue" && useOldIcon == "off") {
                    oldIconButton = minecraftButton("Use old icon | " + Texts.off);
                } else if(theme == "Blue" && useOldIcon == "on") {
                    oldIconButton = minecraftButton("Use old icon | " + Texts.on);
                }
                oldIconButton.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if(theme == "Alternative" && useOldIcon == "off") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            useOldIcon = "on";
                            MoreOptionsPE.saveMainSettings();
                            oldIconButton.setText("Use old icon | " + Texts.on);
                        } else if(theme == "Alternative" && useOldIcon == "on") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            useOldIcon = "off";
                            MoreOptionsPE.saveMainSettings();
                            oldIconButton.setText("Use old icon | " + Texts.off);
                        } else if(theme == "MCPE" && useOldIcon == "off") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            useOldIcon = "on";
                            MoreOptionsPE.saveMainSettings();
                            oldIconButton.setText("Use old icon | " + Texts.on);
                            //oldIconButton.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(theme == "MCPE" && useOldIcon == "on") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            useOldIcon = "off";
                            MoreOptionsPE.saveMainSettings();
                            oldIconButton.setText("Use old icon | " + Texts.off);
                            //oldIconButton.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(theme == "Blue" && useOldIcon == "off") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            useOldIcon = "on";
                            MoreOptionsPE.saveMainSettings();
                            oldIconButton.setText("Use old icon | " + Texts.on);
                        } else if(theme == "Blue" && useOldIcon == "on") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            useOldIcon = "off";
                            MoreOptionsPE.saveMainSettings();
                            oldIconButton.setText("Use old icon | " + Texts.off);
                        }
                    }
                }));
                settingsMenuLayout.addView(oldIconButton);

                var showMainButtonButton = new android.widget.Button(ctx);
                if(theme == "Alternative" && showMainButton == "off") {
                    showMainButtonButton = minecraftButton("Show main button | " + Texts.off);
                } else if(theme == "Alternative" && showMainButton == "on") {
                    showMainButtonButton = minecraftButton("Show main button | " + Texts.on);
                } else if(theme == "MCPE" && showMainButton == "off") {
                    showMainButtonButton = minecraftButton("Show main button | " + Texts.off);
                    //showMainButtonButton.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(theme == "MCPE" && showMainButton == "on") {
                    showMainButtonButton = minecraftButton("Show main button | " + Texts.on);
                    //showMainButtonButton.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(theme == "Blue" && showMainButton == "off") {
                    showMainButtonButton = minecraftButton("Show main button | " + Texts.off);
                } else if(theme == "Blue" && showMainButton == "on") {
                    showMainButtonButton = minecraftButton("Show main button | " + Texts.on);
                }
                showMainButtonButton.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if(theme == "Alternative" && showMainButton == "off") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            showMainButton = "on";
                            MoreOptionsPE.saveMainSettings();
                            showMainButtonButton.setText("Show main button | " + Texts.on);
                        } else if(theme == "Alternative" && showMainButton == "on") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            showMainButton = "off";
                            MoreOptionsPE.saveMainSettings();
                            showMainButtonButton.setText("Show main button | " + Texts.off);
                        } else if(theme == "MCPE" && showMainButton == "off") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            showMainButton = "on";
                            MoreOptionsPE.saveMainSettings();
                            showMainButtonButton.setText("Show main button | " + Texts.on);
                            //showMainButtonButton.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(theme == "MCPE" && showMainButton == "on") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            showMainButton = "off";
                            MoreOptionsPE.saveMainSettings();
                            showMainButtonButton.setText("Show main button | " + Texts.off);
                            //showMainButtonButton.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(theme == "Blue" && showMainButton == "off") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            showMainButton = "on";
                            MoreOptionsPE.saveMainSettings();
                            showMainButtonButton.setText("Show main button | " + Texts.on);
                        } else if(theme == "Blue" && showMainButton == "on") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            showMainButton = "off";
                            MoreOptionsPE.saveMainSettings();
                            showMainButtonButton.setText("Show main button | " + Texts.off);
                        }
                    }
                }));
                settingsMenuLayout.addView(showMainButtonButton);

                var hacksSettingsTitle = defaultSubTitle("Hack Settings");
                hacksSettingsTitle.setTextSize(16);
                //hacksSettingsTitle.setText("\nHack Settings"); //Title
                //hacksSettingsTitle.setTypeface(mcpeFont);
                hacksSettingsTitle.setTextColor(android.graphics.Color.WHITE); //Color
                hacksSettingsTitle.setGravity(android.view.Gravity.CENTER);

                settingsMenuLayout.addView(hacksSettingsTitle);

                var spamMessageButton = new android.widget.Button(ctx);
                if(theme == "Alternative") {
                    spamMessageButton = minecraftButton("Change TapSpammer / AutoSpammer Message...");
                } else if(theme == "MCPE") {
                    spamMessageButton = minecraftButton("Change TapSpammer / AutoSpammer Message...");
                    //spamMessageButton.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(theme == "Blue") {
                    spamMessageButton = minecraftButton("Change TapSpammer / AutoSpammer Message...");
                }
                spamMessageButton.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if(theme == "Alternative") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            openMenu("tapspammersetting");
                        } else if(theme == "MCPE") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            openMenu("tapspammersetting");
                        } else if(theme == "Blue") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            openMenu("tapspammersetting");
                        }
                    }
                }));
                settingsMenuLayout.addView(spamMessageButton);

                var gameSpeedHackSettingButton = new android.widget.Button(ctx);
                if(theme == "Alternative") {
                    gameSpeedHackSettingButton = minecraftButton("Change speed of Gamespeed hack...");
                } else if(theme == "MCPE") {
                    gameSpeedHackSettingButton = minecraftButton("Change speed of Gamespeed hack...");
                    //spamMessageButton.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(theme == "Blue") {
                    gameSpeedHackSettingButton = minecraftButton("Change speed of Gamespeed hack...");
                }
                gameSpeedHackSettingButton.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if(theme == "Alternative") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            openMenu("gamespeedsetting");
                        } else if(theme == "MCPE") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            openMenu("gamespeedsetting");
                        } else if(theme == "Blue") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            openMenu("gamespeedsetting");
                        }
                    }
                }));
                settingsMenuLayout.addView(gameSpeedHackSettingButton);

                var optiFineTitle = defaultSubTitle("OptiFine");
                optiFineTitle.setTextSize(16);
                //optiFineTitle.setText("\n"); //Title
                //optiFineTitle.setTypeface(mcpeFont);
                optiFineTitle.setTextColor(android.graphics.Color.WHITE); //Color
                optiFineTitle.setGravity(android.view.Gravity.CENTER);

                settingsMenuLayout.addView(optiFineTitle);

                var betterGrassButton = new android.widget.Button(ctx);
                if(theme == "Alternative" && betterGrass == "normal") {
                    betterGrassButton = minecraftButton("Better Grass | NORMAL");
                } else if(theme == "Alternative" && betterGrass == "fast") {
                    betterGrassButton = minecraftButton("Better Grass | FAST");
                } else if(theme == "Alternative" && betterGrass == "off") {
                    betterGrassButton = minecraftButton("Better Grass | " + Texts.off);
                } else if(theme == "MCPE" && betterGrass == "normal") {
                    betterGrassButton = minecraftButton("Better Grass | NORMAL");
                    //betterGrassButton.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(theme == "MCPE" && betterGrass == "fast") {
                    betterGrassButton = minecraftButton("Better Grass | FAST");
                    //betterGrassButton.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(theme == "MCPE" && betterGrass == "off") {
                    betterGrassButton = minecraftButton("Better Grass | " + Texts.off);
                    //betterGrassButton.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(theme == "Blue" && betterGrass == "normal") {
                    betterGrassButton = minecraftButton("Better Grass | NORMAL");
                } else if(theme == "Blue" && betterGrass == "fast") {
                    betterGrassButton = minecraftButton("Better Grass | FAST");
                } else if(theme == "Blue" && betterGrass == "off") {
                    betterGrassButton = minecraftButton("Better Grass | " + Texts.off);
                }
                betterGrassButton.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if(theme == "Alternative" && betterGrass == "normal") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            betterGrass = "fast";
                            MoreOptionsPE.initializeOptiFine();
                            MoreOptionsPE.saveMainSettings();
                            betterGrassButton.setText("Better Grass | FAST");
                        } else if(theme == "Alternative" && betterGrass == "fast") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            betterGrass = "off";
                            MoreOptionsPE.initializeOptiFine();
                            MoreOptionsPE.saveMainSettings();
                            betterGrassButton.setText("Better Grass | " + Texts.off);
                        } else if(theme == "Alternative" && betterGrass == "off") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            betterGrass = "normal";
                            MoreOptionsPE.initializeOptiFine();
                            MoreOptionsPE.saveMainSettings();
                            betterGrassButton.setText("Better Grass | NORMAL");
                        } else if(theme == "MCPE" && betterGrass == "normal") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            betterGrass = "fast";
                            MoreOptionsPE.initializeOptiFine();
                            MoreOptionsPE.saveMainSettings();
                            betterGrassButton.setText("Better Grass | FAST");
                        } else if(theme == "MCPE" && betterGrass == "fast") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            betterGrass = "off";
                            MoreOptionsPE.initializeOptiFine();
                            MoreOptionsPE.saveMainSettings();
                            betterGrassButton.setText("Better Grass | " + Texts.off);
                        } else if(theme == "MCPE" && betterGrass == "off") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            betterGrass = "normal";
                            MoreOptionsPE.initializeOptiFine();
                            MoreOptionsPE.saveMainSettings();
                            betterGrassButton.setText("Better Grass | NORMAL");
                        } else if(theme == "Blue" && betterGrass == "normal") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            betterGrass = "fast";
                            MoreOptionsPE.initializeOptiFine();
                            MoreOptionsPE.saveMainSettings();
                            betterGrassButton.setText("Better Grass | FAST");
                        } else if(theme == "Blue" && betterGrass == "fast") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            betterGrass = "off";
                            MoreOptionsPE.initializeOptiFine();
                            MoreOptionsPE.saveMainSettings();
                            betterGrassButton.setText("Better Grass | " + Texts.off);
                        } else if(theme == "Blue" && betterGrass == "off") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            betterGrass = "normal";
                            MoreOptionsPE.initializeOptiFine();
                            MoreOptionsPE.saveMainSettings();
                            betterGrassButton.setText("Better Grass | NORMAL");
                        }
                    }
                }));
                settingsMenuLayout.addView(betterGrassButton);

                var betterGlassButton = new android.widget.Button(ctx);
                if(theme == "Alternative" && betterGlass == "on") {
                    betterGlassButton = minecraftButton("Better Glass | " + Texts.on);
                } else if(theme == "Alternative" && betterGlass == "off") {
                    betterGlassButton = minecraftButton("Better Glass | " + Texts.off);
                } else if(theme == "MCPE" && betterGlass == "on") {
                    betterGlassButton = minecraftButton("Better Glass | " + Texts.on);
                    //betterGlassButton.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(theme == "MCPE" && betterGlass == "off") {
                    betterGlassButton = minecraftButton("Better Glass | " + Texts.off);
                    //betterGlassButton.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(theme == "Blue" && betterGlass == "on") {
                    betterGlassButton = minecraftButton("Better Glass | " + Texts.on);
                } else if(theme == "Blue" && betterGlass == "off") {
                    betterGlassButton = minecraftButton("Better Glass | " + Texts.off);
                }
                betterGlassButton.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if(theme == "Alternative" && betterGlass == "on") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            betterGlass = "off";
                            initializeOptiFine();
                            MoreOptionsPE.saveMainSettings();
                            betterGlassButton.setText("Better Glass | " + Texts.off);
                        } else if(theme == "Alternative" && betterGlass == "off") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            betterGlass = "on";
                            initializeOptiFine();
                            MoreOptionsPE.saveMainSettings();
                            betterGlassButton.setText("Better Glass | " + Texts.on);
                        } else if(theme == "MCPE" && betterGlass == "on") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            betterGlass = "off";
                            initializeOptiFine();
                            MoreOptionsPE.saveMainSettings();
                            betterGlassButton.setText("Better Glass | " + Texts.off);
                        } else if(theme == "MCPE" && betterGlass == "off") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            betterGlass = "on";
                            initializeOptiFine();
                            MoreOptionsPE.saveMainSettings();
                            betterGlassButton.setText("Better Glass | " + Texts.on);
                        } else if(theme == "Blue" && betterGlass == "on") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            betterGlass = "off";
                            initializeOptiFine();
                            MoreOptionsPE.saveMainSettings();
                            betterGlassButton.setText("Better Glass | " + Texts.off);
                        } else if(theme == "Blue" && betterGlass == "off") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            betterGlass = "on";
                            initializeOptiFine();
                            MoreOptionsPE.saveMainSettings();
                            betterGlassButton.setText("Better Glass | " + Texts.on);
                        }
                    }
                }));
                settingsMenuLayout.addView(betterGlassButton);

                var miscSettingsTitle = defaultSubTitle("Misc Settings");
                miscSettingsTitle.setTextSize(16);
                //miscSettingsTitle.setText("\nMisc Settings"); //Title
                //miscSettingsTitle.setTypeface(mcpeFont);
                miscSettingsTitle.setTextColor(android.graphics.Color.WHITE); //Color
                miscSettingsTitle.setGravity(android.view.Gravity.CENTER);

                settingsMenuLayout.addView(miscSettingsTitle);

                var experimentalFeaturesButton = new android.widget.Button(ctx);
                if(theme == "Alternative" && experimentalFeatures == "off") {
                    experimentalFeaturesButton = minecraftButton("Experimental Features | " + Texts.off);
                } else if(theme == "Alternative" && experimentalFeatures == "on") {
                    experimentalFeaturesButton = minecraftButton("Experimental Features | " + Texts.on);
                } else if(theme == "MCPE" && experimentalFeatures == "off") {
                    experimentalFeaturesButton = minecraftButton("Experimental Features | " + Texts.off);
                    //experimentalFeaturesButton.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(theme == "MCPE" && experimentalFeatures == "on") {
                    experimentalFeaturesButton = minecraftButton("Experimental Features | " + Texts.on);
                    //experimentalFeaturesButton.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(theme == "Blue" && experimentalFeatures == "off") {
                    experimentalFeaturesButton = minecraftButton("Experimental Features | " + Texts.off);
                } else if(theme == "Blue" && experimentalFeatures == "on") {
                    experimentalFeaturesButton = minecraftButton("Experimental Features | " + Texts.on);
                }
                experimentalFeaturesButton.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if(theme == "Alternative" && experimentalFeatures == "off") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            experimentalFeatures = "on";
                            MoreOptionsPE.saveMainSettings();
                            experimentalFeaturesButton.setText("Experimental Features | " + Texts.on);
                        } else if(theme == "Alternative" && experimentalFeatures == "on") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            experimentalFeatures = "off";
                            MoreOptionsPE.saveMainSettings();
                            experimentalFeaturesButton.setText("Experimental Features | " + Texts.off);
                        } else if(theme == "MCPE" && experimentalFeatures == "off") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            experimentalFeatures = "on";
                            MoreOptionsPE.saveMainSettings();
                            experimentalFeaturesButton.setText("Experimental Features | " + Texts.on);
                            //experimentalFeaturesButton.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(theme == "MCPE" && experimentalFeatures == "on") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            experimentalFeatures = "off";
                            MoreOptionsPE.saveMainSettings();
                            experimentalFeaturesButton.setText("Experimental Features | " + Texts.off);
                            //experimentalFeaturesButton.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(theme == "Blue" && experimentalFeatures == "off") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            experimentalFeatures = "on";
                            MoreOptionsPE.saveMainSettings();
                            experimentalFeaturesButton.setText("Experimental Features | " + Texts.on);
                        } else if(theme == "Blue" && experimentalFeatures == "on") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            experimentalFeatures = "off";
                            MoreOptionsPE.saveMainSettings();
                            experimentalFeaturesButton.setText("Experimental Features | " + Texts.off);
                        }
                    }
                }));
                settingsMenuLayout.addView(experimentalFeaturesButton);
				
				var defaultUrlButton = new android.widget.Button(ctx);
                if(theme == "Alternative") {
                    defaultUrlButton = minecraftButton("Change default Webbrowser URL...");
                } else if(theme == "MCPE") {
                    defaultUrlButton = minecraftButton("Change default Webbrowser URL...");
                    //defaultUrlButton.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(theme == "Blue") {
                    defaultUrlButton = minecraftButton("Change default Webbrowser URL...");
                }
                defaultUrlButton.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if(theme == "Alternative") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            openMenu("defaulturlsetting");
                            defaultUrlButton.setText("Change default Webbrowser URL..");
                        } else if(theme == "MCPE") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            openMenu("defaulturlsetting");
                            defaultUrlButton.setText("Change default Webbrowser URL...");
                            //defaultUrlButton.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(theme == "Blue") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            openMenu("defaulturlsetting");
                            defaultUrlButton.setText("Change default Webbrowser URL...");
                        }
                    }
                }));
                settingsMenuLayout.addView(defaultUrlButton);
				
				var headerHeight = displayHeight / (displayHeight / 104);

                //More buttons...
                settingsMenu = new android.widget.PopupWindow(settingsMenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight() - headerHeight);
                settingsMenu.setBackgroundDrawable(getStretchedImage(spritesheet, 4 * GuiSize, 4 * GuiSize, 8 * GuiSize, 8 * GuiSize, getContext().getScreenWidth() / 2, getContext().getScreenHeight()));
                settingsMenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.BOTTOM, 0, 0);
            } catch(error) {
                print('An error occured: ' + error);
            }
        }
    }));
}

function aboutScreen() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
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
                var aboutOkBtn = new android.widget.Button(ctx);*/
                var newLineText = minecraftText("\n");
                var authorsText = minecraftText("Author : " + MOD_AUTHOR);
                var creditsText = minecraftText("Credits : " + MOD_CREDITS);
                var currentModVersionText = minecraftText("Current mod version : v" + CURRENT_VERSION);
                var targetMCPEVersionText = minecraftText("Target MCPE version : v" + targetMCPEVersion);
                var MCPEVersionText = minecraftText("Current MCPE version : v" + mcpeVersion);
                var newLine2Text = minecraftText("\n");
                var aboutOkBtn = minecraftButton("Ok");
                var dialogLayout = new android.widget.LinearLayout(ctx);
                var spritesheet = android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 0, 0, 16, 16), 16 * GuiSize, 16 * GuiSize, false);
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
                aboutMenuLayout.addView(aboutOkBtn);
                /*newLineText.setText("\n");
					authorText.setText("Author : " + MOD_AUTHOR);
					currentModVersionText.setText("Current mod version : v" + CURRENT_VERSION);
					targetMCPEVersionText.setText("Target MCPE version : v" + targetMCPEVersion);
					MCPEVersionText.setText("Current MCPE version : v" + mcpeVersion);
					newLine2Text.setText("\n");
                    //btn.setText("Ok");*/
                aboutOkBtn.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        aboutMenu.dismiss();
						showHacksList();
						MoreOptionsPE.showMainButton();
                    }
                });

                //More buttons...
                aboutMenu = new android.widget.PopupWindow(aboutMenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight());
                aboutMenu.setBackgroundDrawable(getStretchedImage(spritesheet, 4 * GuiSize, 4 * GuiSize, 8 * GuiSize, 8 * GuiSize, getContext().getScreenWidth() / 2, getContext().getScreenHeight()));
                aboutMenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP, 0, 0);
            } catch(error) {
                print('An error occured: ' + error);
            }
        }
    }));
}

function onlinePlayersListScreen() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var onlinePlayersListLayout = new android.widget.LinearLayout(ctx);
                var onlinePlayersListScroll = new android.widget.ScrollView(ctx);
                var onlinePlayersListLayout1 = new android.widget.LinearLayout(ctx);
                onlinePlayersListLayout.setOrientation(1);
                onlinePlayersListLayout1.setOrientation(1);
                onlinePlayersListScroll.addView(onlinePlayersListLayout);
                onlinePlayersListLayout1.addView(onlinePlayersListScroll);
                //--------Add Buttons-------//
                /*var newLineText = new android.widget.TextView(ctx);
                var authorText = new android.widget.TextView(ctx);
                var currentModVersionText = new android.widget.TextView(ctx);
                var targetMCPEVersionText = new android.widget.TextView(ctx);
                var MCPEVersionText = new android.widget.TextView(ctx);
                var newLine2Text = new android.widget.TextView(ctx);
                var aboutOkBtn = new android.widget.Button(ctx);*/
                var newLineText = minecraftText("\n");
                var i;
				var onlinePlayers = Server.getAllPlayerNames();
				var playersListText;
				for(i = 0; i < onlinePlayers.length(); i++){
					playersListText = minecraftText(onlinePlayers[i]);
					playersListText.setGravity(android.view.Gravity.CENTER);
					onlinePlayersListLayout.addView(playersListText);
				}
                var spritesheet = android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 0, 0, 16, 16), 16 * GuiSize, 16 * GuiSize, false);
				var comingSoonTextView = minecraftText(Texts.coming_soon + "!");
				comingSoonTextView.setGravity(android.view.Gravity.CENTER);
				
				onlinePlayersListLayout.addView(newLineText);
				onlinePlayersListLayout.addView(comingSoonTextView);
                /*newLineText.setText("\n");
					authorText.setText("Author : " + MOD_AUTHOR);
					currentModVersionText.setText("Current mod version : v" + CURRENT_VERSION);
					targetMCPEVersionText.setText("Target MCPE version : v" + targetMCPEVersion);
					MCPEVersionText.setText("Current MCPE version : v" + mcpeVersion);
					newLine2Text.setText("\n");
                    //btn.setText("Ok");*/
                /*aboutOkBtn.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        onlinePlayersListMenu.dismiss();
						showHacksList();
						MoreOptionsPE.showMainButton();
                    }
                });*/

                //More buttons...
                onlinePlayersListMenu = new android.widget.PopupWindow(onlinePlayersListLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight());
                onlinePlayersListMenu.setBackgroundDrawable(getStretchedImage(spritesheet, 4 * GuiSize, 4 * GuiSize, 8 * GuiSize, 8 * GuiSize, getContext().getScreenWidth() / 2, getContext().getScreenHeight()));
                onlinePlayersListMenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP, 0, 0);
            } catch(error) {
                print('An error occured: ' + error);
            }
        }
    }));
}

var inputText;

function consoleScreen() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var consoleMenuLayout = new android.widget.LinearLayout(ctx);
                var consoleMenuScroll = new android.widget.ScrollView(ctx);
                var consoleMenuLayout1 = new android.widget.LinearLayout(ctx);
                consoleMenuLayout.setOrientation(1);
                consoleMenuLayout1.setOrientation(1);
                consoleMenuScroll.addView(consoleMenuLayout);
                consoleMenuLayout1.addView(consoleMenuScroll);
                //--------Add Buttons-------//
                /*var newLineText = new android.widget.TextView(ctx);
                var authorText = new android.widget.TextView(ctx);
                var currentModVersionText = new android.widget.TextView(ctx);
                var targetMCPEVersionText = new android.widget.TextView(ctx);
                var MCPEVersionText = new android.widget.TextView(ctx);
                var newLine2Text = new android.widget.TextView(ctx);
                var consoleSendBtn = new android.widget.Button(ctx);*/
				var consoleOutputText = minecraftText("Welcome to the console! Use .help for a list of commands!");
                var consoleInput = minecraftEditText();
                var consoleSendBtn = minecraftButton("Send");
                var dialogLayout = new android.widget.LinearLayout(ctx);
                var spritesheet = android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 0, 0, 16, 16), 16 * GuiSize, 16 * GuiSize, false);
                consoleMenuLayout.addView(consoleOutputText);
                consoleMenuLayout.addView(consoleInput);
                consoleMenuLayout.addView(consoleSendBtn);
                /*newLineText.setText("\n");
					authorText.setText("Author : " + MOD_AUTHOR);
					currentModVersionText.setText("Current mod version : v" + CURRENT_VERSION);
					targetMCPEVersionText.setText("Target MCPE version : v" + targetMCPEVersion);
					MCPEVersionText.setText("Current MCPE version : v" + mcpeVersion);
					newLine2Text.setText("\n");
                    //btn.setText("Ok");*/
                consoleSendBtn.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
						inputText = consoleInput.getText().toString().split(" ");
						    if(inputText[0] == ".help" || inputText[0] == ".?") {
								if(inputText[1] == null || inputText[1] == "1") {
									clientMessage(ChatColor.GREEN + "--- Showing AgameR MoreOptions PE commands help page 1 of 2 (.help <page>) ---");
									clientMessage(" > .help <page> - Shows a list of availabe commands");
									clientMessage(" > .menu - Opens the AgameR MoreOptions PE menu");
									clientMessage(" > .panic - Disables all hacks");
									clientMessage(" > .getpos - Returns your position (x, y, z)");
									clientMessage(" > .tp <x> <y> <z> - Teleports your player to the given position (x, y, z)");
									clientMessage(" > .sethome - Sets your home at the current player location");
									clientMessage(" > .home - Teleports your player to your current set home location");
									clientMessage(" > .leave - Leaves the world");
								} else if(inputText[1] == "2") {
									clientMessage(ChatColor.GREEN + "Showing AgameR MoreOptions PE commands help page 2 of 2");
									clientMessage(" > .version - Tells the current AgameR MoreOptions PE version");
									clientMessage(" > .about - Opens the AgameR MoreOptions PE about screen");
									clientMessage(" > .settings - Opens the AgameR MoreOptions PE settings screen");
									clientMessage(" > .update - Checks for updates");
								} else {
									clientMessage(ChatColor.BLUE + "[AgameR MoreOptions PE] " + ChatColor.RED + "Usage: .help <page>");
								}
							}
							if(inputText[0] == ".menu") {
								closeHacksList();
								mainMenu();
								exit();
							}
							if(inputText[0] == ".panic") {
								disableHacks();
								reloadHacksList();
							}
							if(inputText[0] == ".getpos") {
								clientMessage(ChatColor.BLUE + "[AgameR MoreOptions PE] " + ChatColor.WHITE + "X: " + parseInt(Entity.getX(getPlayerEnt())) + " Y: " + parseInt(Entity.getY(getPlayerEnt())) + " Z: " + parseInt(Entity.getZ(getPlayerEnt())));
							}
							if(inputText[0] == ".tp") {
								if(parseInt(inputText[1]) == null || parseInt(inputText[2]) == null || parseInt(inputText) == null) {
									clientMessage(ChatColor.BLUE + "[AgameR MoreOptions PE] " + ChatColor.RED + "Usage: .tp <x> <y> <z>");
								} else {
									Entity.setPosition(getPlayerEnt(), parseInt(inputText[1]), parseInt(inputText[2]), parseInt(inputText[3]));
									clientMessage(ChatColor.BLUE + "[AgameR MoreOptions PE] " + ChatColor.WHITE + "Successfully teleported player to X: " + parseInt(inputText[1]) + " Y: " + parseInt(inputText[2]) + " Z: " + parseInt(commandText[3]));
								}
							}
							if(inputText[0] == ".sethome") {
								MoreOptionsPE.setHome();
								clientMessage(ChatColor.BLUE + "[AgameR MoreOptions PE] " + ChatColor.WHITE + "Home successfully set!");
							}
							if(inputText[0] == ".home") {
								MoreOptionsPE.tpHome();
							}
							if(inputText[0] == ".leave") {
								ModPE.leaveGame();
							}
							if(inputText[0] == ".version") {
								clientMessage(ChatColor.BLUE + "[AgameR MoreOptions PE] " + ChatColor.WHITE + "Current version: " + CURRENT_VERSION);
							}
							if(inputText[0] == ".about") {
								consoleMenu.dismiss();
								aboutScreen();
							}
							if(inputText[0] == ".settings") {
								consoleMenu.dismiss();
								settingsScreen();
								header("Settings");
								exitSettings();
							}
							if(inputText[0] == ".update") {
								//Check for updates
								consoleMenu.dismiss();
								new java.lang.Thread(new java.lang.Runnable() {
									run: function() {
										MoreOptionsPE.getLatestVersion();
										if(latestVersion != CURRENT_VERSION && latestVersion != undefined) {
											clientMessage(ChatColor.BLUE + "[AgameR MoreOptions PE]" + ChatColor.WHITE + " There is a new version available (v" + latestVersion + " for Minecraft Pocket Edition v" + latestPocketEditionVersion + ")!");
											MoreOptionsPE.showMessage("update", "There is a new version available (v" + latestVersion + " for Minecraft Pocket Edition v" + latestPocketEditionVersion + ")!");
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
							if(commandText[0] == ".easteregg") {
								consoleMenu.dismiss();
								ModPE.goToURL("http://peacestorm.github.io/easter-egg/");
							}
						//consoleOutputText.setText(consoleOutputText.getText() + "\n" + inputText);
                        /*consoleMenu.dismiss();
						showHacksList();
						MoreOptionsPE.showMainButton();*/
                    }
                });

                //More buttons...
                consoleMenu = new android.widget.PopupWindow(consoleMenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight());
                consoleMenu.setBackgroundDrawable(blackTImage);
                consoleMenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP, 0, 0);
            } catch(error) {
                print('An error occured: ' + error);
            }
        }
    }));
}

function exitConsole() {
    var ctxe = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctxe.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var xConsoleLayout = new android.widget.LinearLayout(ctxe);
                var xConsoleButton = new android.widget.Button(ctxe);
                if(theme == "Alternative") {
                    xConsoleButton = minecraftButtonX("X");
                } else if(theme == "MCPE") {
                    xConsoleButton = minecraftButtonX("X");
                } else if(theme == "Blue") {
                    xConsoleButton = minecraftButtonX("X");
                }
                /*xButton.setOnTouchListener(new android.view.View.OnTouchListener({
                    onClick: function(viewarg) {
						if(theme == "MCPE"){
						xButton.setBackgroundDrawable(mcpeExitButtonPressedImage);
                    }
                }}));*/
                xConsoleButton.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        exitConsoleUI.dismiss(); //Close
                        consoleMenu.dismiss(); //Close
						showHacksList();
						MoreOptionsPE.showMainButton();
                    }
                }));
                xConsoleLayout.addView(xConsoleButton);
                exitConsoleUI = new android.widget.PopupWindow(xConsoleLayout, dip2px(40), dip2px(40));
                exitConsoleUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                exitConsoleUI.showAtLocation(ctxe.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
            } catch(exception) {
                print(exception);
            }
        }
    }));
}

function playerCustomizerScreen() {
    var display = new android.util.DisplayMetrics();
    com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                if(Player.getCarriedItem() == 0) {
					android.widget.Toast.makeText(currentActivity, new android.text.Html.fromHtml("<b>AgameR MoreOptions PE</b> Make sure that the selected inventory slot isn't empty!"), 0).show();
				}
                var playerCustomizerMenuLayout = new android.widget.LinearLayout(ctx);
                var playerCustomizerMenuLeftScroll = new android.widget.ScrollView(ctx);
                var playerCustomizerMenuMiddleScroll = new android.widget.ScrollView(ctx);
                var playerCustomizerMenuRightScroll = new android.widget.ScrollView(ctx);
                var playerCustomizerMenuLeftLayout = new android.widget.LinearLayout(ctx);
                var playerCustomizerMenuMiddleLayout = new android.widget.LinearLayout(ctx);
                var playerCustomizerMenuRightLayout = new android.widget.LinearLayout(ctx);
                playerCustomizerMenuLayout.setOrientation(android.widget.LinearLayout.HORIZONTAL);
                playerCustomizerMenuLeftLayout.setOrientation(1);
                playerCustomizerMenuLeftLayout.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 2.1, display.heightPixels / 1.23));
				playerCustomizerMenuMiddleLayout.setOrientation(1);
                playerCustomizerMenuMiddleLayout.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels - display.widthPixels / 2.1 - display.widthPixels / 2.1, display.heightPixels / 1.23));
                playerCustomizerMenuRightLayout.setOrientation(1);
                playerCustomizerMenuRightLayout.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 2.1, display.heightPixels / 1.23));
                playerCustomizerMenuLayout.addView(playerCustomizerMenuLeftScroll);
                playerCustomizerMenuLeftScroll.addView(playerCustomizerMenuLeftLayout);
				playerCustomizerMenuLayout.addView(playerCustomizerMenuMiddleScroll);
                playerCustomizerMenuMiddleScroll.addView(playerCustomizerMenuMiddleLayout);
                playerCustomizerMenuLayout.addView(playerCustomizerMenuRightScroll);
                playerCustomizerMenuRightScroll.addView(playerCustomizerMenuRightLayout);
                //--------Add Buttons-------//
                /*var newLineText = new android.widget.TextView(ctx);
                var authorText = new android.widget.TextView(ctx);
                var currentModVersionText = new android.widget.TextView(ctx);
                var targetMCPEVersionText = new android.widget.TextView(ctx);
                var MCPEVersionText = new android.widget.TextView(ctx);
                var newLine2Text = new android.widget.TextView(ctx);
                var morphOkBtn = new android.widget.Button(ctx);*/
                var morphTitle = minecraftText("Morphing");
                var morphEnter = minecraftText("\n");
                var skinImage = new android.graphics.BitmapFactory.decodeFile(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/minecraftpe/custom.png");
				var steveImage = new android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/mob/steve.png"));
				var alexImage = new android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/mob/alex.png"));
                var skinViewer = new android.widget.ImageView(ctx);
                var skinViewerText = minecraftText("Sorry, your skin can't be viewed");
				if(ModPE.getCurrentUsedSkin() == "Standard_Alex") {
					skinViewer.setImageBitmap(alexImage);
				}if(ModPE.getCurrentUsedSkin() == "Standard_Steve") {
					skinViewer.setImageBitmap(steveImage);
				}if(ModPE.getCurrentUsedSkin() == "Standard_Custom") {
					skinViewer.setImageBitmap(skinImage);
				}else{
					playerCustomizerMenuLeftLayout.addView(skinViewerText);
				}
                var layoutParams = new android.widget.LinearLayout.LayoutParams(750, 750);
                skinViewer.setLayoutParams(layoutParams);
                var spritesheet = android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 0, 0, 16, 16), 16 * GuiSize, 16 * GuiSize, false);
                var btn = minecraftButton("TNT");
                var btn1 = minecraftButton("Chicken");
                var btn2 = minecraftButton("Cow");
                var btn3 = minecraftButton("Mooshroom");
                var btn4 = minecraftButton("Pig");
                var btn5 = minecraftButton("Sheep");
                var btn6 = minecraftButton("Steve");
                var btn7 = minecraftButton("Skeleton");
                var btn8 = minecraftButton("Spider");
                var btn9 = minecraftButton("Silverfish");
                var btn10 = minecraftButton("Creeper");
                var btn11 = minecraftButton("Enderman");
                var btn12 = minecraftButton("Minecart");
                var btn13 = minecraftButton("Villager");
                var btn14 = minecraftButton("Bat");
                var btn15 = minecraftButton("Iron Golem");
                var btn16 = minecraftButton("Zombie");
                var btn17 = minecraftButton("Arrow");
                var btn18 = minecraftButton("Boat");
                var btn19 = minecraftButton("Ghast");
                var btn20 = minecraftButton("Squid");
                var btnCircular = new android.widget.Button(ctx);
                /*circularDrawable = new android.graphics.drawable.GradientDrawable();
                circularDrawable.setColor(android.graphics.Color.TRANSPARENT);
                circularDrawable.setShape(android.graphics.drawable.GradientDrawable.OVAL);
                btnCircular.setBackgroundDrawable(circularDrawable);
                //circularDrawable.setStroke(cET.dpToPx(2), android.graphics.Color.parseColor("#EEEEEE"));
                //circularDrawable.setSize(cET.dpToPx(240), cET.dpToPx(240));*/
                playerCustomizerMenuLeftLayout.addView(skinViewer);
                playerCustomizerMenuRightLayout.addView(morphTitle);
                playerCustomizerMenuRightLayout.addView(morphEnter);
                playerCustomizerMenuRightLayout.addView(btn);
                playerCustomizerMenuRightLayout.addView(btn1);
                playerCustomizerMenuRightLayout.addView(btn2);
                playerCustomizerMenuRightLayout.addView(btn3);
                playerCustomizerMenuRightLayout.addView(btn4);
                playerCustomizerMenuRightLayout.addView(btn5);
                playerCustomizerMenuRightLayout.addView(btn6);
                playerCustomizerMenuRightLayout.addView(btn7);
                playerCustomizerMenuRightLayout.addView(btn8);
                playerCustomizerMenuRightLayout.addView(btn9);
                playerCustomizerMenuRightLayout.addView(btn10);
                playerCustomizerMenuRightLayout.addView(btn11);
                playerCustomizerMenuRightLayout.addView(btn12);
                playerCustomizerMenuRightLayout.addView(btn13);
                playerCustomizerMenuRightLayout.addView(btn14);
                playerCustomizerMenuRightLayout.addView(btn15);
                playerCustomizerMenuRightLayout.addView(btn16);
                //playerCustomizerMenuRightLayout.addView(btn17);
                playerCustomizerMenuRightLayout.addView(btn18);
                playerCustomizerMenuRightLayout.addView(btn19);
                playerCustomizerMenuRightLayout.addView(btn20);
                //playerCustomizerMenuRightLayout.addView(btnCircular);
                /*newLineText.setText("\n");
					authorText.setText("Author : " + MOD_AUTHOR);
					currentModVersionText.setText("Current mod version : v" + CURRENT_VERSION);
					targetMCPEVersionText.setText("Target MCPE version : v" + targetMCPEVersion);
					MCPEVersionText.setText("Current MCPE version : v" + mcpeVersion);
					newLine2Text.setText("\n");
                    //morphOkBtn.setText("Ok");*/
                btn.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        Entity.setRenderType(Player.getEntity(), EntityRenderType.tnt);
                        playerCustomizerMenu.dismiss();
                        exitPlayerCustomizerUI.dismiss();
						headerGUI.dismiss();
						showHacksList();
						MoreOptionsPE.showMainButton();
                    }
                });
                btn1.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        Entity.setRenderType(Player.getEntity(), EntityRenderType.chicken);
                        Entity.setMobSkin(Player.getEntity(), "mob/chicken.png");
                        playerCustomizerMenu.dismiss();
                        exitPlayerCustomizerUI.dismiss();
						headerGUI.dismiss();
						showHacksList();
						MoreOptionsPE.showMainButton();
                    }
                });
                btn2.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        Entity.setRenderType(Player.getEntity(), EntityRenderType.cow);
                        Entity.setMobSkin(Player.getEntity(), "mob/cow.png");
                        playerCustomizerMenu.dismiss();
                        exitPlayerCustomizerUI.dismiss();
						headerGUI.dismiss();
						showHacksList();
						MoreOptionsPE.showMainButton();
                    }
                });
                btn3.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        Entity.setRenderType(Player.getEntity(), 7);
                        Entity.setMobSkin(Player.getEntity(), "mob/mooshroom.png");
                        playerCustomizerMenu.dismiss();
                        exitPlayerCustomizerUI.dismiss();
						headerGUI.dismiss();
						showHacksList();
						MoreOptionsPE.showMainButton();
                    }
                });
                btn4.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        Entity.setRenderType(Player.getEntity(), EntityRenderType.pig);
                        Entity.setMobSkin(Player.getEntity(), "mob/pig.png");
                        playerCustomizerMenu.dismiss();
                        exitPlayerCustomizerUI.dismiss();
						headerGUI.dismiss();
						showHacksList();
						MoreOptionsPE.showMainButton();
                    }
                });
                btn5.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        Entity.setRenderType(Player.getEntity(), EntityRenderType.sheep);
                        Entity.setMobSkin(Player.getEntity(), "mob/sheep_0.png");
                        playerCustomizerMenu.dismiss();
                        exitPlayerCustomizerUI.dismiss();
						headerGUI.dismiss();
						showHacksList();
						MoreOptionsPE.showMainButton();
                    }
                });
                btn6.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        Entity.setRenderType(Player.getEntity(), EntityRenderType.human);
                        Entity.setMobSkin(Player.getEntity(), "mob/steve.png");
                        playerCustomizerMenu.dismiss();
                        exitPlayerCustomizerUI.dismiss();
						headerGUI.dismiss();
						showHacksList();
						MoreOptionsPE.showMainButton();
                    }
                });
                btn7.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        Entity.setRenderType(Player.getEntity(), EntityRenderType.skeleton);
                        Entity.setMobSkin(Player.getEntity(), "mob/skeleton.png");
                        playerCustomizerMenu.dismiss();
                        exitPlayerCustomizerUI.dismiss();
						headerGUI.dismiss();
						showHacksList();
						MoreOptionsPE.showMainButton();
                    }
                });
                btn8.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        Entity.setRenderType(Player.getEntity(), EntityRenderType.spider);
                        Entity.setMobSkin(Player.getEntity(), "mob/spider.tga");
                        playerCustomizerMenu.dismiss();
                        exitPlayerCustomizerUI.dismiss();
						headerGUI.dismiss();
						showHacksList();
						MoreOptionsPE.showMainButton();
                    }
                });
                btn9.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        Entity.setRenderType(Player.getEntity(), EntityRenderType.silverfish);
                        Entity.setMobSkin(Player.getEntity(), "mob/silverfish.png");
                        playerCustomizerMenu.dismiss();
                        exitPlayerCustomizerUI.dismiss();
						headerGUI.dismiss();
						showHacksList();
						MoreOptionsPE.showMainButton();
                    }
                });
                btn10.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        Entity.setRenderType(Player.getEntity(), EntityRenderType.creeper);
                        Entity.setMobSkin(Player.getEntity(), "mob/creeper.png");
                        playerCustomizerMenu.dismiss();
                        exitPlayerCustomizerUI.dismiss();
						headerGUI.dismiss();
						showHacksList();
						MoreOptionsPE.showMainButton();
                    }
                });
                btn11.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        Entity.setRenderType(Player.getEntity(), EntityRenderType.enderman);
                        Entity.setMobSkin(Player.getEntity(), "mob/enderman.tga");
                        playerCustomizerMenu.dismiss();
                        exitPlayerCustomizerUI.dismiss();
						headerGUI.dismiss();
						showHacksList();
						MoreOptionsPE.showMainButton();
                    }
                });
                btn12.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        Entity.setRenderType(Player.getEntity(), EntityRenderType.minecart);
                        Entity.setMobSkin(Player.getEntity(), "entity/minecart.png");
                        playerCustomizerMenu.dismiss();
                        exitPlayerCustomizerUI.dismiss();
						headerGUI.dismiss();
						showHacksList();
						MoreOptionsPE.showMainButton();
                    }
                });
                btn13.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        Entity.setRenderType(Player.getEntity(), EntityRenderType.villager);
                        Entity.setMobSkin(Player.getEntity(), "mob/villager/butcher.png");
                        playerCustomizerMenu.dismiss();
                        exitPlayerCustomizerUI.dismiss();
						headerGUI.dismiss();
						showHacksList();
						MoreOptionsPE.showMainButton();
                    }
                });
                btn14.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        Entity.setRenderType(Player.getEntity(), EntityRenderType.bat);
                        Entity.setMobSkin(Player.getEntity(), "mob/bat.png");
                        playerCustomizerMenu.dismiss();
                        exitPlayerCustomizerUI.dismiss();
						headerGUI.dismiss();
						showHacksList();
						MoreOptionsPE.showMainButton();
                    }
                });
                btn15.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        Entity.setRenderType(Player.getEntity(), EntityRenderType.ironGolem);
                        Entity.setMobSkin(Player.getEntity(), "mob/iron_golem.png");
                        playerCustomizerMenu.dismiss();
                        exitPlayerCustomizerUI.dismiss();
						headerGUI.dismiss();
						showHacksList();
						MoreOptionsPE.showMainButton();
					}
                });
                btn16.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        Entity.setRenderType(Player.getEntity(), EntityRenderType.zombie);
                        Entity.setMobSkin(Player.getEntity(), "mob/zombie.png");
                        playerCustomizerMenu.dismiss();
                        exitPlayerCustomizerUI.dismiss();
						headerGUI.dismiss();
						showHacksList();
						MoreOptionsPE.showMainButton();
                    }
                });
                btn17.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        Entity.setRenderType(Player.getEntity(), EntityRenderType.arrow);
                        Entity.setMobSkin(Player.getEntity(), "item/arrows.png");
                        playerCustomizerMenu.dismiss();
                        exitPlayerCustomizerUI.dismiss();
						headerGUI.dismiss();
						showHacksList();
						MoreOptionsPE.showMainButton();
                    }
                });
                btn18.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        Entity.setRenderType(Player.getEntity(), EntityRenderType.boat);
                        Entity.setMobSkin(Player.getEntity(), "entity/boat/boat_oak.png");
                        playerCustomizerMenu.dismiss();
                        exitPlayerCustomizerUI.dismiss();
						headerGUI.dismiss();
						showHacksList();
						MoreOptionsPE.showMainButton();
                    }
                });
                btn19.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        Entity.setRenderType(Player.getEntity(), EntityRenderType.ghast);
                        Entity.setMobSkin(Player.getEntity(), "mob/ghast.png");
                        playerCustomizerMenu.dismiss();
                        exitPlayerCustomizerUI.dismiss();
						headerGUI.dismiss();
						showHacksList();
						MoreOptionsPE.showMainButton();
                    }
                });
				btn20.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        Entity.setRenderType(Player.getEntity(), EntityRenderType.squid);
                        Entity.setMobSkin(Player.getEntity(), "mob/squid.png");
                        playerCustomizerMenu.dismiss();
                        exitPlayerCustomizerUI.dismiss();
						headerGUI.dismiss();
						showHacksList();
						MoreOptionsPE.showMainButton();
                    }
                });
				
				//Background stuff...
				var dirt = new android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createScaledBitmap(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/background.png")), dip2px(64), dip2px(64), false));
				dirt.setColorFilter(android.graphics.Color.rgb(70, 70, 70), android.graphics.PorterDuff.Mode.MULTIPLY);
				dirt.setTileModeXY(android.graphics.Shader.TileMode.REPEAT, android.graphics.Shader.TileMode.REPEAT);

				var headerHeight = displayHeight / (displayHeight / 104);
				
                //More buttons...
                playerCustomizerMenu = new android.widget.PopupWindow(playerCustomizerMenuLayout, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight() - headerHeight);
                playerCustomizerMenu.setBackgroundDrawable(dirt);
                playerCustomizerMenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.BOTTOM, 0, 0);
            } catch(error) {
                print('An error occured: ' + error);
            }
        }
    }));
}

function disableHacks() {
    State = false;
    State1 = false;
    State2 = false;
    if(Level.getGameMode == 1) {
        Player.setCanFly(1);
    } else if(Level.getGameMode == 0) {
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
    State22 = false;
    State23 = false;
    State24 = false;
    State25 = false;
    State26 = false;
    State27 = false;
    State28 = false;
	StatePowerExplosions = false;
	StateAutoMine = false;
	StateTapRemover = false;
	StateTwerk = false;
	StateDerp = false;
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
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
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
                if(theme == "Blue") {
                    version.setTypeface(mcpeFont);
                }

                menuLayout.addView(version);


                var hacksTitle = new android.widget.TextView(ctx);
                hacksTitle.setTextSize(12);
                hacksTitle.setText("\nHacks"); //Title
                //hacksTitle.setTypeface(mcpeFont);
                hacksTitle.setTextColor(android.graphics.Color.WHITE); //Color
                hacksTitle.setGravity(android.view.Gravity.CENTER);
                if(theme == "Blue") {
                    hacksTitle.setTypeface(mcpeFont);
                    hacksTitle.setTextColor(android.graphics.Color.WHITE);
                    if(android.os.Build.VERSION.SDK_INT > 19) { // KITKAT
                        hacksTitle.setShadowLayer(1, Math.round(hacksTitle.getLineHeight() / 8), Math.round(hacksTitle.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    } else {
                        hacksTitle.setShadowLayer(0.0001, Math.round(hacksTitle.getLineHeight() / 8), Math.round(hacksTitle.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    }
                }



                var panicButton = new android.widget.Button(ctx);
                if(theme == "Alternative") {
                    panicButton = new android.widget.Button(ctx);
                    panicButton.setText(Texts.panic);
                    panicButton.setTextColor(android.graphics.Color.RED);
                    panicButton.setBackgroundColor(android.graphics.Color.GRAY);
                } else if(theme == "MCPE") {
                    panicButton = minecraftButtonRed(Texts.panic);
                    panicButton.setTextColor(android.graphics.Color.RED);
                    //panicButton.setTypeface(mcpeFont);
                    //panicButton.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(theme == "Blue") {
                    panicButton = new android.widget.Button(ctx);
                    panicButton.setText(Texts.panic);
                    panicButton.setTextColor(android.graphics.Color.RED);
                    panicButton.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    panicButton.setTypeface(mcpeFont);
                }
                panicButton.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        disableHacks();
                        menu.dismiss();
                        exitUI.dismiss();
                        mainMenu();
                        exit();
                        
                        if(theme == "Alternative") {
                            panicButton.setText(Texts.panic);
                            panicButton.setTextColor(android.graphics.Color.RED);
                            panicButton.setBackgroundColor(android.graphics.Color.GRAY);
                        } else if(theme == "MCPE") {
                            panicButton.setText(Texts.panic);
                            //panicButton.setTypeface(mcpeFont);
                            //panicButton.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(theme == "Blue") {
                            panicButton.setText(Texts.panic);
                            panicButton.setTextColor(android.graphics.Color.RED);
                            panicButton.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            panicButton.setTypeface(mcpeFont);
                        }
                    }
                }));


                var button = new android.widget.Button(ctx);
                if(State == false && theme == "Alternative") {
					if(Level.getGameMode() == 1 && spectator == "on") {
						button = new android.widget.Button(ctx);
						Entity.setCollisionSize(Player.getEntity(), 0, 0);
						button.setText(Texts.walk_through_blocks + " | " + Texts.on);
						button.setBackgroundColor(android.graphics.Color.GREEN);
						State = true;
					}else {
						button = new android.widget.Button(ctx);
						Entity.setCollisionSize(Player.getEntity(), 0.6, 1.8);
						button.setText(Texts.walk_through_blocks + " | " + Texts.off);
						button.setBackgroundColor(android.graphics.Color.RED);
						State = false;
					}
                } else if(State == true && theme == "Alternative") {
					if(Level.getGameMode() == 1 && spectator == "on") {
						button = new android.widget.Button(ctx);
						Entity.setCollisionSize(Player.getEntity(), 0, 0);
						button.setText(Texts.walk_through_blocks + " | " + Texts.on);
						button.setBackgroundColor(android.graphics.Color.GREEN);
						State = true;
					}else {
						button = new android.widget.Button(ctx);
						Entity.setCollisionSize(Player.getEntity(), 0, 0);
						button.setText(Texts.walk_through_blocks + " | " + Texts.on);
						button.setBackgroundColor(android.graphics.Color.GREEN);
						State = true;
					}
                } else if(State == false && theme == "MCPE") {
					if(Level.getGameMode() == 1 && spectator == "on") {
						button = minecraftButton(Texts.walk_through_blocks + " | " + Texts.on);
						Entity.setCollisionSize(Player.getEntity(), 0, 0);
						State = true;
						//button.setTypeface(mcpeFont);
						//button.setBackgroundDrawable(mcpeButtonOldImage);
					}else {
						button = minecraftButton(Texts.walk_through_blocks + " | " + Texts.off);
						Entity.setCollisionSize(Player.getEntity(), 0.6, 1.8);
						State = false;
						//button.setTypeface(mcpeFont);
						//button.setBackgroundDrawable(mcpeButtonOldImage);
					}
                } else if(State == true && theme == "MCPE") {
					if(Level.getGameMode() == 1 && spectator == "on") {
						button = minecraftButton(Texts.walk_through_blocks + " | " + Texts.on);
						Entity.setCollisionSize(Player.getEntity(), 0, 0);
						State = true;
						//button.setTypeface(mcpeFont);
						//button.setBackgroundDrawable(mcpeButtonOldImage);
					}else {
						button = minecraftButton(Texts.walk_through_blocks + " | " + Texts.on);
						Entity.setCollisionSize(Player.getEntity(), 0, 0);
						State = true;
						//button.setTypeface(mcpeFont);
						//button.setBackgroundDrawable(mcpeButtonOldImage);
					}
                } else if(State == false && theme == "Blue") {
					if(Level.getGameMode() == 1 && spectator == "on") {
						button = new android.widget.Button(ctx);
						Entity.setCollisionSize(Player.getEntity(), 0, 0);
						button.setText(Texts.walk_through_blocks + " | " + Texts.on);
						button.setTextColor(android.graphics.Color.BLUE);
						button.setBackgroundColor(android.graphics.Color.TRANSPARENT);
						button.setTypeface(mcpeFont);
						State = true;
					}else {
						button = new android.widget.Button(ctx);
						Entity.setCollisionSize(Player.getEntity(), 0.6, 1.8);
						button.setText(Texts.walk_through_blocks + " | " + Texts.off);
						button.setTextColor(android.graphics.Color.WHITE);
						button.setBackgroundColor(android.graphics.Color.TRANSPARENT);
						button.setTypeface(mcpeFont);
						State = false;
					}
                } else if(State == true && theme == "Blue") {
                    if(Level.getGameMode() == 1 && spectator == "on") {
						button = new android.widget.Button(ctx);
						Entity.setCollisionSize(Player.getEntity(), 0, 0);
						button.setText(Texts.walk_through_blocks + " | " + Texts.on);
						button.setTextColor(android.graphics.Color.BLUE);
						button.setBackgroundColor(android.graphics.Color.TRANSPARENT);
						button.setTypeface(mcpeFont);
						State = true;
					}else {
						button = new android.widget.Button(ctx);
						Entity.setCollisionSize(Player.getEntity(), 0, 0);
						button.setText(Texts.walk_through_blocks + " | " + Texts.on);
						button.setTextColor(android.graphics.Color.BLUE);
						button.setBackgroundColor(android.graphics.Color.TRANSPARENT);
						button.setTypeface(mcpeFont);
						State = false;
					}
                }

                button.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(State == false && theme == "Alternative") {
							if(Level.getGameMode() == 1 && spectator == "on") {
								State = true;
								
								Entity.setCollisionSize(Player.getEntity(), 0, 0);
								button.setText(Texts.walk_through_blocks + " | " + Texts.on);
								button.setBackgroundColor(android.graphics.Color.GREEN);
							}else {
								State = true;
								
								Entity.setCollisionSize(Player.getEntity(), 0, 0);
								button.setText(Texts.walk_through_blocks + " | " + Texts.on);
								button.setBackgroundColor(android.graphics.Color.GREEN);
							}
                        } else if(State == true && theme == "Alternative") {
							if(Level.getGameMode() == 1 && spectator == "on") {
								State = true;
								
								Entity.setCollisionSize(Player.getEntity(), 0, 0);
								button.setText(Texts.walk_through_blocks + " | " + Texts.on);
								button.setBackgroundColor(android.graphics.Color.GREEN);
							}else {
								State = false;
								
								Entity.setCollisionSize(Player.getEntity(), 0.6, 1.8);
								button.setText(Texts.walk_through_blocks + " | " + Texts.off);
								button.setBackgroundColor(android.graphics.Color.RED);
							}
                        } else if(State == false && theme == "MCPE") {
							if(Level.getGameMode() == 1 && spectator == "on") {
								State = true;
								
								Entity.setCollisionSize(Player.getEntity(), 0, 0);
								button.setText(Texts.walk_through_blocks + " | " + Texts.on);
								//button.setTypeface(mcpeFont);
								//button.setBackgroundDrawable(mcpeButtonOldImage);
							}else {
								State = true;
								
								Entity.setCollisionSize(Player.getEntity(), 0, 0);
								button.setText(Texts.walk_through_blocks + " | " + Texts.on);
								//button.setTypeface(mcpeFont);
								//button.setBackgroundDrawable(mcpeButtonOldImage);
							}
                        } else if(State == true && theme == "MCPE") {
							if(Level.getGameMode() == 1 && spectator == "on") {
								State = true;
								
								Entity.setCollisionSize(Player.getEntity(), 0, 0);
								button.setText(Texts.walk_through_blocks + " | " + Texts.on);
								//button.setTypeface(mcpeFont);
								//button.setBackgroundDrawable(mcpeButtonOldImage);
							}else {
								State = false;
								
								Entity.setCollisionSize(Player.getEntity(), 0.6, 1.8);
								button.setText(Texts.walk_through_blocks + " | " + Texts.off);
								//button.setTypeface(mcpeFont);
								//button.setBackgroundDrawable(mcpeButtonOldImage);
							}
                        } else if(State == false && theme == "Blue") {
							if(Level.getGameMode() == 1 && spectator == "on") {
								State = true;
								
								Entity.setCollisionSize(Player.getEntity(), 0, 0);
								button.setText(Texts.walk_through_blocks + " | " + Texts.on);
								button.setTextColor(android.graphics.Color.BLUE);
								button.setBackgroundColor(android.graphics.Color.TRANSPARENT);
								button.setTypeface(mcpeFont);
							}else {
								State = true;
								
								Entity.setCollisionSize(Player.getEntity(), 0, 0);
								button.setText(Texts.walk_through_blocks + " | " + Texts.on);
								button.setTextColor(android.graphics.Color.BLUE);
								button.setBackgroundColor(android.graphics.Color.TRANSPARENT);
								button.setTypeface(mcpeFont);
							}
                        } else if(State == true && theme == "Blue") {
							if(Level.getGameMode() == 1 && spectator == "on") {
								State = true;
								
								Entity.setCollisionSize(Player.getEntity(), 0, 0);
								button.setText(Texts.walk_through_blocks + " | " + Texts.on);
								button.setTextColor(android.graphics.Color.BLUE);
								button.setBackgroundColor(android.graphics.Color.TRANSPARENT);
								button.setTypeface(mcpeFont);
							}else {
								State = false;
								
								Entity.setCollisionSize(Player.getEntity(), 0.6, 1.8);
								button.setText(Texts.walk_through_blocks + " | " + Texts.off);
								button.setTextColor(android.graphics.Color.WHITE);
								button.setBackgroundColor(android.graphics.Color.TRANSPARENT);
								button.setTypeface(mcpeFont);
							}
                        }
                    }
                }));


                var button1 = new android.widget.Button(ctx);
                if(State1 == false && theme == "Alternative") {
                    button1 = new android.widget.Button(ctx);
                    button1.setText(Texts.instaheal + " | " + Texts.off);
                    button1.setBackgroundColor(android.graphics.Color.RED);
                } else if(State1 == true && theme == "Alternative") {
                    button1 = new android.widget.Button(ctx);
                    button1.setText(Texts.instaheal + " | " + Texts.on);
                    button1.setBackgroundColor(android.graphics.Color.GREEN);
                } else if(State1 == false && theme == "MCPE") {
                    button1 = minecraftButton(Texts.instaheal + " | " + Texts.off);
                    //button1.setTypeface(mcpeFont);
                    //button1.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State1 == true && theme == "MCPE") {
                    button1 = minecraftButton(Texts.instaheal + " | " + Texts.on);
                    //button1.setTypeface(mcpeFont);
                    //button1.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State1 == false && theme == "Blue") {
                    button1 = new android.widget.Button(ctx);
                    button1.setText(Texts.instaheal + " | " + Texts.off);
                    button1.setTextColor(android.graphics.Color.WHITE);
                    button1.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button1.setTypeface(mcpeFont);
                } else if(State1 == true && theme == "Blue") {
                    button1 = new android.widget.Button(ctx);
                    button1.setText(Texts.instaheal + " | " + Texts.on);
                    button1.setTextColor(android.graphics.Color.BLUE);
                    button1.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button1.setTypeface(mcpeFont);
                }

                button1.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(State1 == false && theme == "Alternative") {
                            State1 = true;
                            
                            button1.setText(Texts.instaheal + " | " + Texts.on);
                            button1.setBackgroundColor(android.graphics.Color.GREEN);
                        } else if(State1 == true && theme == "Alternative") {
                            State1 = false;
                            
                            button1.setText(Texts.instaheal + " | " + Texts.off);
                            button1.setBackgroundColor(android.graphics.Color.RED);
                        } else if(State1 == false && theme == "MCPE") {
                            State1 = true;
                            
                            button1.setText(Texts.instaheal + " | " + Texts.on);
                            //button1.setTypeface(mcpeFont);
                            //button1.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State1 == true && theme == "MCPE") {
                            State1 = false;
                            
                            button1.setText(Texts.instaheal + " | " + Texts.off);
                            //button1.setTypeface(mcpeFont);
                            //button1.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State1 == false && theme == "Blue") {
                            State1 = true;
                            
                            button1.setText(Texts.instaheal + " | " + Texts.on);
                            button1.setTextColor(android.graphics.Color.BLUE);
                            button1.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button1.setTypeface(mcpeFont);
                        } else if(State1 == true && theme == "Blue") {
                            State1 = false;
                            
                            button1.setText(Texts.instaheal + " | " + Texts.off);
                            button1.setTextColor(android.graphics.Color.WHITE);
                            button1.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button1.setTypeface(mcpeFont);
                        }
                    }
                }));


                var button2 = new android.widget.Button(ctx);
                if(State2 == false && theme == "Alternative") {
                    if(Level.getGameMode() == 1) {
                        button2 = new android.widget.Button(ctx);
                        State2 = true;
                        button2.setText(Texts.fly + " | " + Texts.on);
						button2.setBackgroundColor(android.graphics.Color.GREEN);
                        Player.setCanFly(1);
                    } else if(Level.getGameMode() == 0) {
                        button2 = new android.widget.Button(ctx);
                        State2 = false;
                        button2.setText(Texts.fly + " | " + Texts.off);
						button2.setBackgroundColor(android.graphics.Color.RED);
                        Player.setCanFly(0);
                    }
                    
                } else if(State2 == true && theme == "Alternative") {
                    if(Level.getGameMode() == 1) {
                        button2 = new android.widget.Button(ctx);
                        State2 = true;
                        button2.setText(Texts.fly + " | " + Texts.on);
						button2.setBackgroundColor(android.graphics.Color.GREEN);
                        Player.setCanFly(1);
                    } else if(Level.getGameMode() == 0) {
                        button2 = new android.widget.Button(ctx);
                        State2 = true;
                        button2.setText(Texts.fly + " | " + Texts.on);
						button2.setBackgroundColor(android.graphics.Color.GREEN);
                        Player.setCanFly(1);
                    }
                } else if(State2 == false && theme == "MCPE") {
                    if(Level.getGameMode() == 1) {
                        button2 = minecraftButton(Texts.fly + " | " + Texts.on);
                        State2 = true;
                        Player.setCanFly(1);
                    } else if(Level.getGameMode() == 0) {
                        button2 = minecraftButton(Texts.fly + " | " + Texts.off);
                        State2 = false;
                        Player.setCanFly(0);
                    }
                    //button2.setTypeface(mcpeFont);
                    //button2.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State2 == true && theme == "MCPE") {
                    if(Level.getGameMode() == 1) {
                        button2 = minecraftButton(Texts.fly + " | " + Texts.on);
                        State2 = true;
                        Player.setCanFly(1);
                    } else if(Level.getGameMode() == 0) {
                        button2 = minecraftButton(Texts.fly + " | " + Texts.on);
                        State2 = true;
                        Player.setCanFly(1);
                    }
                    //button2.setTypeface(mcpeFont);
                    //button2.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State2 == false && theme == "Blue") {
                    if(Level.getGameMode() == 1) {
                        button2 = new android.widget.Button(ctx);
                        button2.setText(Texts.fly + " | " + Texts.on);
                        button2.setTextColor(android.graphics.Color.BLUE);
                        button2.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                        button2.setTypeface(mcpeFont);
                        State2 = true;
                        Player.setCanFly(1);
                    } else if(Level.getGameMode() == 0) {
                        button2 = new android.widget.Button(ctx);
                        button2.setText(Texts.fly + " | " + Texts.off);
                        button2.setTextColor(android.graphics.Color.WHITE);
                        button2.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                        button2.setTypeface(mcpeFont);
                        State2 = false;
                        Player.setCanFly(0);
                    }
                    //button2.setTypeface(mcpeFont);
                    //button2.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State2 == true && theme == "Blue") {
                    if(Level.getGameMode() == 1) {
                        button2 = new android.widget.Button(ctx);
                        button2.setText(Texts.fly + " | " + Texts.on);
                        button2.setTextColor(android.graphics.Color.BLUE);
                        button2.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                        button2.setTypeface(mcpeFont);
                        State2 = true;
                        Player.setCanFly(1);
                    } else if(Level.getGameMode() == 0) {
                        button2 = new android.widget.Button(ctx);
                        button2.setText(Texts.fly + " | " + Texts.on);
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
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(State2 == false && theme == "Alternative") {
                            if(Level.getGameMode() == 1) {
                                State2 = true;
                                
                                button2.setText(Texts.fly + " | " + Texts.on);
                                button2.setBackgroundColor(android.graphics.Color.GREEN);
                                Player.setCanFly(1);
                            } else if(Level.getGameMode() == 0) {
                                State2 = true;
                                
                                button2.setText(Texts.fly + " | " + Texts.on);
                                button2.setBackgroundColor(android.graphics.Color.GREEN);
                                Player.setCanFly(1);
                            }
                        } else if(State2 == true && theme == "Alternative") {
                            if(Level.getGameMode() == 1) {
                                State2 = true;
                                
                                button2.setText(Texts.fly + " | " + Texts.on);
                                button2.setBackgroundColor(android.graphics.Color.GREEN);
                                Player.setCanFly(1);
                            } else if(Level.getGameMode() == 0) {
                                State2 = false;
                                
                                button2.setText(Texts.fly + " | " + Texts.off);
                                button2.setBackgroundColor(android.graphics.Color.RED);
                                Player.setCanFly(0);
                            }
                        } else if(State2 == false && theme == "MCPE") {
                            if(Level.getGameMode() == 1) {
                                State2 = true;
                                
                                button2.setText(Texts.fly + " | " + Texts.on);
                                Player.setCanFly(1);
                            } else if(Level.getGameMode() == 0) {
                                State2 = true;
                                
                                button2.setText(Texts.fly + " | " + Texts.on);
                                Player.setCanFly(1);
                            }
                            //button2.setTypeface(mcpeFont);
                            //button2.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State2 == true && theme == "MCPE") {
                            if(Level.getGameMode() == 1) {
                                State2 = true;
                                
                                button2.setText(Texts.fly + " | " + Texts.on);
                                Player.setCanFly(1);
                            } else if(Level.getGameMode() == 0) {
                                State2 = false;
                                
                                button2.setText(Texts.fly + " | " + Texts.off);
                                Player.setCanFly(0);
                            }
                            //button2.setTypeface(mcpeFont);
                            //button2.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State2 == false && theme == "Blue") {
                            if(Level.getGameMode() == 1) {
                                State2 = true;
                                
                                button2.setText(Texts.fly + " | " + Texts.on);
                                button2.setTextColor(android.graphics.Color.BLUE);
                                button2.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                                button2.setTypeface(mcpeFont);
                                Player.setCanFly(1);
                            } else if(Level.getGameMode() == 0) {
                                State2 = true;
                                
                                button2.setText(Texts.fly + " | " + Texts.on);
                                button2.setTextColor(android.graphics.Color.BLUE);
                                button2.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                                button2.setTypeface(mcpeFont);
                                Player.setCanFly(1);
                            }
                            //button2.setTypeface(mcpeFont);
                            //button2.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State2 == true && theme == "Blue") {
                            if(Level.getGameMode() == 1) {
                                State2 = true;
                                
                                button2.setText(Texts.fly + " | " + Texts.on);
                                button2.setTextColor(android.graphics.Color.BLUE);
                                button2.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                                button2.setTypeface(mcpeFont);
                                Player.setCanFly(1);
                            } else if(Level.getGameMode() == 0) {
                                State2 = false;
                                
                                button2.setText(Texts.fly + " | " + Texts.off);
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
                if(State3 == false && theme == "Alternative") {
                    button3 = new android.widget.Button(ctx);
                    button3.setText(Texts.set_entities_on_fire + " | " + Texts.off);
                    button3.setBackgroundColor(android.graphics.Color.RED);
                } else if(State3 == true && theme == "Alternative") {
                    button3 = new android.widget.Button(ctx);
                    button3.setText(Texts.set_entities_on_fire + " | " + Texts.on);
                    button3.setBackgroundColor(android.graphics.Color.GREEN);
                } else if(State3 == false && theme == "MCPE") {
                    button3 = minecraftButton(Texts.set_entities_on_fire + " | " + Texts.off);
                    //button3.setTypeface(mcpeFont);
                    //button3.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State3 == true && theme == "MCPE") {
                    button3 = minecraftButton(Texts.set_entities_on_fire + " | " + Texts.on);
                    //button3.setTypeface(mcpeFont);
                    //button3.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State3 == false && theme == "Blue") {
                    button3 = new android.widget.Button(ctx);
                    button3.setText(Texts.set_entities_on_fire + " | " + Texts.off);
                    button3.setTextColor(android.graphics.Color.WHITE);
                    button3.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button3.setTypeface(mcpeFont);
                } else if(State3 == true && theme == "Blue") {
                    button3 = new android.widget.Button(ctx);
                    button3.setText(Texts.set_entities_on_fire + " | " + Texts.on);
                    button3.setTextColor(android.graphics.Color.BLUE);
                    button3.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button3.setTypeface(mcpeFont);
                }

                button3.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(State3 == false && theme == "Alternative") {
                            State3 = true;
                            
                            button3.setText(Texts.set_entities_on_fire + " | " + Texts.on);
                            button3.setBackgroundColor(android.graphics.Color.GREEN);
                        } else if(State3 == true && theme == "Alternative") {
                            State3 = false;
                            
                            button3.setText(Texts.set_entities_on_fire + " | " + Texts.off);
                            button3.setBackgroundColor(android.graphics.Color.RED);
                        } else if(State3 == false && theme == "MCPE") {
                            State3 = true;
                            
                            button3.setText(Texts.set_entities_on_fire + " | " + Texts.on);
                            //button3.setTypeface(mcpeFont);
                            //button3.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State3 == true && theme == "MCPE") {
                            State3 = false;
                            
                            button3.setText(Texts.set_entities_on_fire + " | " + Texts.off);
                            //button3.setTypeface(mcpeFont);
                            //button3.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State3 == false && theme == "Blue") {
                            State3 = true;
                            
                            button3.setText(Texts.set_entities_on_fire + " | " + Texts.on);
                            button3.setTextColor(android.graphics.Color.BLUE);
                            button3.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button3.setTypeface(mcpeFont);
                        } else if(State3 == true && theme == "Blue") {
                            State3 = false;
                            
                            button3.setText(Texts.set_entities_on_fire + " | " + Texts.off);
                            button3.setTextColor(android.graphics.Color.WHITE);
                            button3.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button3.setTypeface(mcpeFont);
                        }
                    }
                }));


                var button4 = new android.widget.Button(ctx);
                if(State4 == false && theme == "Alternative") {
                    button4 = new android.widget.Button(ctx);
                    ModPE.setGameSpeed(20);
                    button4.setText(Texts.gamespeed + " x" + gameSpeedHackSetting + " | " + Texts.off);
                    button4.setBackgroundColor(android.graphics.Color.RED);
                } else if(State4 == true && theme == "Alternative") {
                    button4 = new android.widget.Button(ctx);
                    ModPE.setGameSpeed(20 * gameSpeedHackSetting);
                    button4.setText(Texts.gamespeed + " x" + gameSpeedHackSetting + " | " + Texts.on);
                    button4.setBackgroundColor(android.graphics.Color.GREEN);
                } else if(State4 == false && theme == "MCPE") {
                    button4 = minecraftButton(Texts.gamespeed + " x" + gameSpeedHackSetting + " | " + Texts.off);
                    ModPE.setGameSpeed(20);
                    //button4.setTypeface(mcpeFont);
                    //button4.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State4 == true && theme == "MCPE") {
                    button4 = minecraftButton(Texts.gamespeed + " x" + gameSpeedHackSetting + " | " + Texts.on);
                    ModPE.setGameSpeed(20 * gameSpeedHackSetting);
                    //button4.setTypeface(mcpeFont);
                    //button4.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State4 == false && theme == "Blue") {
                    button4 = new android.widget.Button(ctx);
                    ModPE.setGameSpeed(20);
                    button4.setText(Texts.gamespeed + " x" + gameSpeedHackSetting + " | " + Texts.off);
                    button4.setTextColor(android.graphics.Color.WHITE);
                    button4.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button4.setTypeface(mcpeFont);
                } else if(State4 == true && theme == "Blue") {
                    button4 = new android.widget.Button(ctx);
                    ModPE.setGameSpeed(20 * gameSpeedHackSetting);
                    button4.setText(Texts.gamespeed + " x" + gameSpeedHackSetting + " | " + Texts.on);
                    button4.setTextColor(android.graphics.Color.BLUE);
                    button4.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button4.setTypeface(mcpeFont);
                }

                button4.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(State4 == false && theme == "Alternative") {
                            State4 = true;
                            
                            ModPE.setGameSpeed(20 * gameSpeedHackSetting);
                            button4.setText(Texts.gamespeed + " x" + gameSpeedHackSetting + " | " + Texts.on);
                            button4.setBackgroundColor(android.graphics.Color.GREEN);
                        } else if(State4 == true && theme == "Alternative") {
                            State4 = false;
                            
                            ModPE.setGameSpeed(20);
                            button4.setText(Texts.gamespeed + " x" + gameSpeedHackSetting + " | " + Texts.off);
                            button4.setBackgroundColor(android.graphics.Color.RED);
                        } else if(State4 == false && theme == "MCPE") {
                            State4 = true;
                            
                            ModPE.setGameSpeed(20 * gameSpeedHackSetting);
                            button4.setText(Texts.gamespeed + " x" + gameSpeedHackSetting + " | " + Texts.on);
                            //button4.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State4 == true && theme == "MCPE") {
                            State4 = false;
                            
                            ModPE.setGameSpeed(20);
                            button4.setText(Texts.gamespeed + " x" + gameSpeedHackSetting + " | " + Texts.off);
                            //button4.setTypeface(mcpeFont);
                            //button4.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State4 == false && theme == "Blue") {
                            State4 = true;
                            
                            ModPE.setGameSpeed(20 * gameSpeedHackSetting);
                            button4.setText(Texts.gamespeed + " x" + gameSpeedHackSetting + " | " + Texts.on);
                            button4.setTextColor(android.graphics.Color.BLUE);
                            button4.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button4.setTypeface(mcpeFont);
                        } else if(State4 == true && theme == "Blue") {
                            State4 = false;
                            
                            ModPE.setGameSpeed(20);
                            button4.setText(Texts.gamespeed + " x" + gameSpeedHackSetting + " | " + Texts.off);
                            button4.setTextColor(android.graphics.Color.WHITE);
                            button4.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button4.setTypeface(mcpeFont);
                        }
                    }
                }));


                var button5 = new android.widget.Button(ctx);
                if(State5 == false && theme == "Alternative") {
                    button5 = new android.widget.Button(ctx);
                    button5.setText(Texts.tapspammer+ " | " + Texts.off);
                    button5.setBackgroundColor(android.graphics.Color.RED);
                } else if(State5 == true && theme == "Alternative") {
                    button5 = new android.widget.Button(ctx);
                    button5.setText(Texts.tapspammer+ " | " + Texts.on);
                    button5.setBackgroundColor(android.graphics.Color.GREEN);
                } else if(State5 == false && theme == "MCPE") {
                    button5 = minecraftButton(Texts.tapspammer+ " | " + Texts.off);
                    //button5.setTypeface(mcpeFont);
                    //button5.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State5 == true && theme == "MCPE") {
                    button5 = minecraftButton(Texts.tapspammer+ " | " + Texts.on);
                    //button5.setTypeface(mcpeFont);
                    //button5.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State5 == false && theme == "Blue") {
                    button5 = new android.widget.Button(ctx);
                    button5.setText(Texts.tapspammer+ " | " + Texts.off);
                    button5.setTextColor(android.graphics.Color.WHITE);
                    button5.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button5.setTypeface(mcpeFont);
                } else if(State5 == true && theme == "Blue") {
                    button5 = new android.widget.Button(ctx);
                    button5.setText(Texts.tapspammer+ " | " + Texts.on);
                    button5.setTextColor(android.graphics.Color.BLUE);
                    button5.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button5.setTypeface(mcpeFont);
                }

                button5.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(State5 == false && theme == "Alternative") {
                            State5 = true;
                            
                            button5.setText(Texts.tapspammer+ " | " + Texts.on);
                            button5.setBackgroundColor(android.graphics.Color.GREEN);
                        } else if(State5 == true && theme == "Alternative") {
                            State5 = false;
                            
                            button5.setText(Texts.tapspammer+ " | " + Texts.off);
                            button5.setBackgroundColor(android.graphics.Color.RED);
                        } else if(State5 == false && theme == "MCPE") {
                            State5 = true;
                            
                            button5.setText(Texts.tapspammer+ " | " + Texts.on);
                            //button5.setTypeface(mcpeFont);
                            //button5.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State5 == true && theme == "MCPE") {
                            State5 = false;
                            
                            button5.setText(Texts.tapspammer+ " | " + Texts.off);
                            //button5.setTypeface(mcpeFont);
                            //button5.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State5 == false && theme == "Blue") {
                            State5 = true;
                            
                            button5.setText(Texts.tapspammer+ " | " + Texts.on);
                            button5.setTextColor(android.graphics.Color.BLUE);
                            button5.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button5.setTypeface(mcpeFont);
                        } else if(State5 == true && theme == "Blue") {
                            State5 = false;
                            
                            button5.setText(Texts.tapspammer+ " | " + Texts.off);
                            button5.setTextColor(android.graphics.Color.WHITE);
                            button5.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button5.setTypeface(mcpeFont);
                        }
                    }
                }));


                var button6 = new android.widget.Button(ctx);
                if(State6 == false && theme == "Alternative") {
                    button6 = new android.widget.Button(ctx);
                    button6.setText(Texts.sneaking + " | " + Texts.off);
                    button6.setBackgroundColor(android.graphics.Color.RED);
                    Entity.setSneaking(Player.getEntity(), 0);
                } else if(State6 == true && theme == "Alternative") {
                    button6 = new android.widget.Button(ctx);
                    button6.setText(Texts.sneaking + " | " + Texts.on);
                    button6.setBackgroundColor(android.graphics.Color.GREEN);
                    Entity.setSneaking(Player.getEntity(), 1);
                } else if(State6 == false && theme == "MCPE") {
                    button6 = minecraftButton(Texts.sneaking + " | " + Texts.off);
                    //button6.setTypeface(mcpeFont);
                    //button6.setBackgroundDrawable(mcpeButtonOldImage);
                    Entity.setSneaking(Player.getEntity(), 0);
                } else if(State6 == true && theme == "MCPE") {
                    button6 = minecraftButton(Texts.sneaking + " | " + Texts.on);
                    //button6.setTypeface(mcpeFont);
                    //button6.setBackgroundDrawable(mcpeButtonOldImage);
                    Entity.setSneaking(Player.getEntity(), 1);
                } else if(State6 == false && theme == "Blue") {
                    button6 = new android.widget.Button(ctx);
                    button6.setText(Texts.sneaking + " | " + Texts.off);
                    button6.setTextColor(android.graphics.Color.WHITE);
                    button6.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button6.setTypeface(mcpeFont);
                    Entity.setSneaking(Player.getEntity(), 0);
                } else if(State6 == true && theme == "Blue") {
                    button6 = new android.widget.Button(ctx);
                    button6.setText(Texts.sneaking + " | " + Texts.on);
                    button6.setTextColor(android.graphics.Color.BLUE);
                    button6.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button6.setTypeface(mcpeFont);
                    Entity.setSneaking(Player.getEntity(), 1);
                }

                button6.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(State6 == false && theme == "Alternative") {
                            State6 = true;
                            
                            Entity.setSneaking(Player.getEntity(), 1);
                            button6.setText(Texts.sneaking + " | " + Texts.on);
                            button6.setBackgroundColor(android.graphics.Color.GREEN);
                        } else if(State6 == true && theme == "Alternative") {
                            State6 = false;
                            
                            Entity.setSneaking(Player.getEntity(), 0);
                            button6.setText(Texts.sneaking + " | " + Texts.off);
                            button6.setBackgroundColor(android.graphics.Color.RED);
                        } else if(State6 == false && theme == "MCPE") {
                            State6 = true;
                            
                            Entity.setSneaking(Player.getEntity(), 1);
                            button6.setText(Texts.sneaking + " | " + Texts.on);
                            //button6.setTypeface(mcpeFont);
                            //button6.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State6 == true && theme == "MCPE") {
                            State6 = false;
                            
                            Entity.setSneaking(Player.getEntity(), 0);
                            button6.setText(Texts.sneaking + " | " + Texts.off);
                            //button6.setTypeface(mcpeFont);
                            //button6.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State6 == false && theme == "Blue") {
                            State6 = true;
                            
                            Entity.setSneaking(Player.getEntity(), 1);
                            button6.setText(Texts.sneaking + " | " + Texts.on);
                            button6.setTextColor(android.graphics.Color.BLUE);
                            button6.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button6.setTypeface(mcpeFont);
                        } else if(State6 == true && theme == "Blue") {
                            State6 = false;
                            
                            Entity.setSneaking(Player.getEntity(), 0);
                            button6.setText(Texts.sneaking + " | " + Texts.off);
                            button6.setTextColor(android.graphics.Color.WHITE);
                            button6.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button6.setTypeface(mcpeFont);
                        }
                    }
                }));


                var button7 = new android.widget.Button(ctx);
                if(State7 == false && theme == "Alternative") {
                    button7 = new android.widget.Button(ctx);
                    button7.setText(Texts.zoom + " | " + Texts.off);
                    button7.setBackgroundColor(android.graphics.Color.RED);
                    ModPE.resetFov();
                } else if(State7 == true && theme == "Alternative") {
                    button7 = new android.widget.Button(ctx);
                    button7.setText(Texts.zoom + " | " + Texts.on);
                    button7.setBackgroundColor(android.graphics.Color.GREEN);
                    ModPE.setFov(10);
                } else if(State7 == false && theme == "MCPE") {
                    button7 = minecraftButton(Texts.zoom + " | " + Texts.off);
                    //button7.setTypeface(mcpeFont);
                    //button7.setBackgroundDrawable(mcpeButtonOldImage);
                    ModPE.resetFov();
                } else if(State7 == true && theme == "MCPE") {
                    button7 = minecraftButton(Texts.zoom + " | " + Texts.on);
                    //button7.setTypeface(mcpeFont);
                    //button7.setBackgroundDrawable(mcpeButtonOldImage);
                    ModPE.setFov(10);
                } else if(State7 == false && theme == "Blue") {
                    button7 = new android.widget.Button(ctx);
                    button7.setText(Texts.zoom + " | " + Texts.off);
                    button7.setTextColor(android.graphics.Color.WHITE);
                    button7.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button7.setTypeface(mcpeFont);
                    ModPE.resetFov();
                } else if(State7 == true && theme == "Blue") {
                    button7 = new android.widget.Button(ctx);
                    button7.setText(Texts.zoom + " | " + Texts.on);
                    button7.setTextColor(android.graphics.Color.BLUE);
                    button7.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button7.setTypeface(mcpeFont);
                    ModPE.setFov(10);
                }

                button7.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(State7 == false && theme == "Alternative") {
                            State7 = true;
                            
                            ModPE.setFov(10);
                            button7.setText(Texts.zoom + " | " + Texts.on);
                            button7.setBackgroundColor(android.graphics.Color.GREEN);
                        } else if(State7 == true && theme == "Alternative") {
                            State7 = false;
                            
                            ModPE.resetFov();
                            button7.setText(Texts.zoom + " | " + Texts.off);
                            button7.setBackgroundColor(android.graphics.Color.RED);
                        } else if(State7 == false && theme == "MCPE") {
                            State7 = true;
                            
                            ModPE.setFov(10);
                            button7.setText(Texts.zoom + " | " + Texts.on);
                            //button7.setTypeface(mcpeFont);
                            //button7.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State7 == true && theme == "MCPE") {
                            State7 = false;
                            
                            ModPE.resetFov();
                            button7.setText(Texts.zoom + " | " + Texts.off);
                            //button7.setTypeface(mcpeFont);
                            //button7.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State7 == false && theme == "Blue") {
                            State7 = true;
                            
                            ModPE.setFov(10);
                            button7.setText(Texts.zoom + " | " + Texts.on);
                            button7.setTextColor(android.graphics.Color.BLUE);
                            button7.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button7.setTypeface(mcpeFont);
                        } else if(State7 == true && theme == "Blue") {
                            State7 = false;
                            
                            ModPE.resetFov();
                            button7.setText(Texts.zoom + " | " + Texts.off);
                            button7.setTextColor(android.graphics.Color.WHITE);
                            button7.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button7.setTypeface(mcpeFont);
                        }
                    }
                }));


                var button8 = new android.widget.Button(ctx);
                if(State8 == false && theme == "Alternative") {
                    button8 = new android.widget.Button(ctx);
                    button8.setText(Texts.show_coords + " | " + Texts.off);
                    button8.setBackgroundColor(android.graphics.Color.RED);
                } else if(State8 == true && theme == "Alternative") {
                    button8 = new android.widget.Button(ctx);
                    button8.setText(Texts.show_coords + " | " + Texts.on);
                    button8.setBackgroundColor(android.graphics.Color.GREEN);
                } else if(State8 == false && theme == "MCPE") {
                    button8 = minecraftButton(Texts.show_coords + " | " + Texts.off);
                    //button8.setTypeface(mcpeFont);
                    //button8.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State8 == true && theme == "MCPE") {
                    button8 = minecraftButton(Texts.show_coords + " | " + Texts.on);
                    //button8.setTypeface(mcpeFont);
                    //button8.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State8 == false && theme == "Blue") {
                    button8 = new android.widget.Button(ctx);
                    button8.setText(Texts.show_coords + " | " + Texts.off);
                    button8.setTextColor(android.graphics.Color.WHITE);
                    button8.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button8.setTypeface(mcpeFont);
                } else if(State8 == true && theme == "Blue") {
                    button8 = new android.widget.Button(ctx);
                    button8.setText(Texts.show_coords + " | " + Texts.on);
                    button8.setTextColor(android.graphics.Color.BLUE);
                    button8.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button8.setTypeface(mcpeFont);
                }

                button8.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(State8 == false && theme == "Alternative") {
                            State8 = true;
                            
                            button8.setText(Texts.show_coords + " | " + Texts.on);
                            button8.setBackgroundColor(android.graphics.Color.GREEN);
                        } else if(State8 == true && theme == "Alternative") {
                            State8 = false;
                            
                            button8.setText(Texts.show_coords + " | " + Texts.off);
                            button8.setBackgroundColor(android.graphics.Color.RED);
                        } else if(State8 == false && theme == "MCPE") {
                            State8 = true;
                            
                            button8.setText(Texts.show_coords + " | " + Texts.on);
                            //button8.setTypeface(mcpeFont);
                            //button8.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State8 == true && theme == "MCPE") {
                            State8 = false;
                            
                            button8.setText(Texts.show_coords + " | " + Texts.off);
                            //button8.setTypeface(mcpeFont);
                            //button8.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State8 == false && theme == "Blue") {
                            State8 = true;
                            
                            button8.setText(Texts.show_coords + " | " + Texts.on);
                            button8.setTextColor(android.graphics.Color.BLUE);
                            button8.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button8.setTypeface(mcpeFont);
                        } else if(State8 == true && theme == "Blue") {
                            State8 = false;
                            
                            button8.setText(Texts.show_coords + " | " + Texts.off);
                            button8.setTextColor(android.graphics.Color.WHITE);
                            button8.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button8.setTypeface(mcpeFont);
                        }
                    }
                }));


                var button9 = new android.widget.Button(ctx);
                if(State9 == false && theme == "Alternative") {
                    button9 = new android.widget.Button(ctx);
                    Block.setDestroyTimeDefaultAll();
                    button9.setText(Texts.instamine + " | " + Texts.off);
                    button9.setBackgroundColor(android.graphics.Color.RED);
                } else if(State9 == true && theme == "Alternative") {
                    button9 = new android.widget.Button(ctx);
                    Block.setDestroyTimeAll(0);
                    button9.setText(Texts.instamine + " | " + Texts.on);
                    button9.setBackgroundColor(android.graphics.Color.GREEN);
                } else if(State9 == false && theme == "MCPE") {
                    button9 = minecraftButton(Texts.instamine + " | " + Texts.off);
                    Block.setDestroyTimeDefaultAll();
                    //button9.setTypeface(mcpeFont);
                    //button9.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State9 == true && theme == "MCPE") {
                    button9 = minecraftButton(Texts.instamine + " | " + Texts.on);
                    Block.setDestroyTimeAll(0);
                    //button9.setTypeface(mcpeFont);
                    //button9.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State9 == false && theme == "Blue") {
                    button9 = new android.widget.Button(ctx);
                    button9.setText(Texts.instamine + " | " + Texts.off);
                    button9.setTextColor(android.graphics.Color.WHITE);
                    button9.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button9.setTypeface(mcpeFont);
                } else if(State9 == true && theme == "Blue") {
                    button9 = new android.widget.Button(ctx);
                    button9.setText(Texts.instamine + " | " + Texts.on);
                    button9.setTextColor(android.graphics.Color.BLUE);
                    button9.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button9.setTypeface(mcpeFont);
                }

                button9.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(State9 == false && theme == "Alternative") {
                            State9 = true;
                            
                            Block.setDestroyTimeAll(0);
                            button9.setText(Texts.instamine + " | " + Texts.on);
                            button9.setBackgroundColor(android.graphics.Color.GREEN);
                        } else if(State9 == true && theme == "Alternative") {
                            State9 = false;
                            
                            Block.setDestroyTimeDefaultAll(0);
                            button9.setText(Texts.instamine + " | " + Texts.off);
                            button9.setBackgroundColor(android.graphics.Color.RED);
                        } else if(State9 == false && theme == "MCPE") {
                            State9 = true;
                            
                            Block.setDestroyTimeAll(0);
                            button9.setText(Texts.instamine + " | " + Texts.on);
                            //button8.setTypeface(mcpeFont);
                            //button9.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State9 == true && theme == "MCPE") {
                            State9 = false;
                            
                            Block.setDestroyTimeDefaultAll();
                            button9.setText(Texts.instamine + " | " + Texts.off);
                            //button8.setTypeface(mcpeFont);
                            //button9.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State9 == false && theme == "Blue") {
                            State9 = true;
                            
                            button9.setText(Texts.instamine + " | " + Texts.on);
                            button9.setTextColor(android.graphics.Color.BLUE);
                            button9.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button9.setTypeface(mcpeFont);
                        } else if(State9 == true && theme == "Blue") {
                            State9 = false;
                            
                            button9.setText(Texts.instamine + " | " + Texts.off);
                            button9.setTextColor(android.graphics.Color.WHITE);
                            button9.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button9.setTypeface(mcpeFont);
                        }
                    }
                }));


                var button10 = new android.widget.Button(ctx);
                if(State10 == false && theme == "Alternative") {
                    button10 = new android.widget.Button(ctx);
                    button10.setText(Texts.knockback + " | " + Texts.off);
                    button10.setBackgroundColor(android.graphics.Color.RED);
                } else if(State10 == true && theme == "Alternative") {
                    button10 = new android.widget.Button(ctx);
                    button10.setText(Texts.knockback + " | " + Texts.on);
                    button10.setBackgroundColor(android.graphics.Color.GREEN);
                } else if(State10 == false && theme == "MCPE") {
                    button10 = minecraftButton(Texts.knockback + " | " + Texts.off);
                    //button10.setTypeface(mcpeFont);
                    //button10.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State10 == true && theme == "MCPE") {
                    button10 = minecraftButton(Texts.knockback + " | " + Texts.on);
                    //button10.setTypeface(mcpeFont);
                    //button10.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State10 == false && theme == "Blue") {
                    button10 = new android.widget.Button(ctx);
                    button10.setText(Texts.knockback + " | " + Texts.off);
                    button10.setTextColor(android.graphics.Color.WHITE);
                    button10.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button10.setTypeface(mcpeFont);
                } else if(State10 == true && theme == "Blue") {
                    button10 = new android.widget.Button(ctx);
                    button10.setText(Texts.knockback + " | " + Texts.on);
                    button10.setTextColor(android.graphics.Color.BLUE);
                    button10.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button10.setTypeface(mcpeFont);
                }

                button10.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(State10 == false && theme == "Alternative") {
                            State10 = true;
                            
                            State10.setText(Texts.knockback + " | " + Texts.on);
                            button10.setBackgroundColor(android.graphics.Color.GREEN);
                        } else if(State10 == true && theme == "Alternative") {
                            State10 = false;
                            
                            button10.setText(Texts.knockback + " | " + Texts.off);
                            button10.setBackgroundColor(android.graphics.Color.RED);
                        } else if(State10 == false && theme == "MCPE") {
                            State10 = true;
                            
                            button10.setText(Texts.knockback + " | " + Texts.on);
                            //button10.setTypeface(mcpeFont);
                            //button10.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State10 == true && theme == "MCPE") {
                            State10 = false;
                            
                            button10.setText(Texts.knockback + " | " + Texts.off);
                            //button10.setTypeface(mcpeFont);
                            //button10.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State10 == false && theme == "Blue") {
                            State10 = true;
                            
                            button10.setText(Texts.knockback + " | " + Texts.on);
                            button10.setTextColor(android.graphics.Color.BLUE);
                            button10.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button10.setTypeface(mcpeFont);
                        } else if(State10 == true && theme == "Blue") {
                            State10 = false;
                            
                            button10.setText(Texts.knockback + " | " + Texts.off);
                            button10.setTextColor(android.graphics.Color.WHITE);
                            button10.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button10.setTypeface(mcpeFont);
                        }
                    }
                }));


                var button11 = new android.widget.Button(ctx);
                if(State11 == false && theme == "Alternative") {
                    button11 = new android.widget.Button(ctx);
                    MoreOptionsPE.xRay(0);
                    button11.setText(Texts.xray + " | " + Texts.off);
                    button11.setBackgroundColor(android.graphics.Color.RED);
                } else if(State11 == true && theme == "Alternative") {
                    button11 = new android.widget.Button(ctx);
                    MoreOptionsPE.xRay(1);
                    button11.setText(Texts.xray + " | " + Texts.on);
                    button11.setBackgroundColor(android.graphics.Color.GREEN);
                } else if(State11 == false && theme == "MCPE") {
                    button11 = minecraftButton(Texts.xray + " | " + Texts.off);
                    MoreOptionsPE.xRay(0);
                    //button11.setTypeface(mcpeFont);
                    //button11.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State11 == true && theme == "MCPE") {
                    button11 = minecraftButton(Texts.xray + " | " + Texts.on);
                    MoreOptionsPE.xRay(1);
                    //button11.setTypeface(mcpeFont);
                    //button11.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State11 == false && theme == "Blue") {
                    button11 = new android.widget.Button(ctx);
                    MoreOptionsPE.xRay(0);
                    button11.setText(Texts.xray + " | " + Texts.off);
                    button11.setTextColor(android.graphics.Color.WHITE);
                    button11.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button11.setTypeface(mcpeFont);
                    //button11.setTypeface(mcpeFont);
                    //button11.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State11 == true && theme == "Blue") {
                    button11 = new android.widget.Button(ctx);
                    MoreOptionsPE.xRay(1);
                    button11.setText(Texts.xray + " | " + Texts.on);
                    button11.setTextColor(android.graphics.Color.BLUE);
                    button11.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button11.setTypeface(mcpeFont);
                    //button11.setTypeface(mcpeFont);
                    //button11.setBackgroundDrawable(mcpeButtonOldImage);
                }

                button11.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(State11 == false && theme == "Alternative") {
                            State11 = true;
                            
                            MoreOptionsPE.xRay(1);
                            State11.setText(Texts.xray + " | " + Texts.on);
                            button11.setBackgroundColor(android.graphics.Color.GREEN);
                        } else if(State11 == true && theme == "Alternative") {
                            State11 = false;
                            
                            MoreOptionsPE.xRay(0);
                            button11.setText(Texts.xray + " | " + Texts.off);
                            button11.setBackgroundColor(android.graphics.Color.RED);
                        } else if(State11 == false && theme == "MCPE") {
                            State11 = true;
                            
                            MoreOptionsPE.xRay(1);
                            button11.setText(Texts.xray + " | " + Texts.on);
                            //button11.setTypeface(mcpeFont);
                            //button11.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State11 == true && theme == "MCPE") {
                            State11 = false;
                            
                            MoreOptionsPE.xRay(0);
                            button11.setText(Texts.xray + " | " + Texts.off);
                            //button11.setTypeface(mcpeFont);
                            //button11.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State11 == false && theme == "Blue") {
                            State11 = true;
                            
                            MoreOptionsPE.xRay(1);
                            button11.setText(Texts.xray + " | " + Texts.on);
                            button11.setTextColor(android.graphics.Color.BLUE);
                            button11.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button11.setTypeface(mcpeFont);
                        } else if(State11 == true && theme == "Blue") {
                            State11 = false;
                            
                            MoreOptionsPE.xRay(0);
                            button11.setText(Texts.xray + " | " + Texts.off);
                            button11.setTextColor(android.graphics.Color.WHITE);
                            button11.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button11.setTypeface(mcpeFont);
                        }
                    }
                }));


                var button12 = new android.widget.Button(ctx);
                if(State12 == false && theme == "Alternative") {
                    button12 = new android.widget.Button(ctx);
                    button12.setText(Texts.always_day + " | " + Texts.off);
                    button12.setBackgroundColor(android.graphics.Color.RED);
                } else if(State12 == true && theme == "Alternative") {
                    button12 = new android.widget.Button(ctx);
                    button12.setText(Texts.always_day + " | " + Texts.on);
                    button12.setBackgroundColor(android.graphics.Color.GREEN);
                } else if(State12 == false && theme == "MCPE") {
                    button12 = minecraftButton(Texts.always_day + " | " + Texts.off);
                    //button11.setTypeface(mcpeFont);
                    //button12.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State12 == true && theme == "MCPE") {
                    button12 = minecraftButton(Texts.always_day + " | " + Texts.on);
                    //button11.setTypeface(mcpeFont);
                    //button12.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State12 == false && theme == "Blue") {
                    button12 = new android.widget.Button(ctx);
                    button12.setText(Texts.always_day + " | " + Texts.off);
                    button12.setTextColor(android.graphics.Color.WHITE);
                    button12.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button12.setTypeface(mcpeFont);
                    //button12.setTypeface(mcpeFont);
                    //button12.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State12 == true && theme == "Blue") {
                    button12 = new android.widget.Button(ctx);
                    button12.setText(Texts.always_day + " | " + Texts.on);
                    button12.setTextColor(android.graphics.Color.BLUE);
                    button12.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button12.setTypeface(mcpeFont);
                    //button12.setTypeface(mcpeFont);
                    //button12.setBackgroundDrawable(mcpeButtonOldImage);
                }

                button12.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(State12 == false && theme == "Alternative") {
                            State12 = true;
                            
                            button12.setText(Texts.always_day + " | " + Texts.on);
                            button12.setBackgroundColor(android.graphics.Color.GREEN);
                        } else if(State12 == true && theme == "Alternative") {
                            State12 = false;
                            
                            button12.setText(Texts.always_day + " | " + Texts.off);
                            button12.setBackgroundColor(android.graphics.Color.RED);
                        } else if(State12 == false && theme == "MCPE") {
                            State12 = true;
                            
                            button12.setText(Texts.always_day + " | " + Texts.on);
                            //button12.setTypeface(mcpeFont);
                            //button12.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State12 == true && theme == "MCPE") {
                            State12 = false;
                            
                            button12.setText(Texts.always_day + " | " + Texts.off);
                            //button12.setTypeface(mcpeFont);
                            //button12.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State12 == false && theme == "Blue") {
                            State12 = true;
                            
                            button12.setText(Texts.always_day + " | " + Texts.on);
                            button12.setTextColor(android.graphics.Color.BLUE);
                            button12.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button12.setTypeface(mcpeFont);
                        } else if(State12 == true && theme == "Blue") {
                            State12 = false;
                            
                            button12.setText(Texts.always_day + " | " + Texts.off);
                            button12.setTextColor(android.graphics.Color.WHITE);
                            button12.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button12.setTypeface(mcpeFont);
                        }
                    }
                }));


                var button13 = new android.widget.Button(ctx);
                if(State13 == false && theme == "Alternative") {
                    button13 = new android.widget.Button(ctx);
                    button13.setText(Texts.saddle_up + " | " + Texts.off);
                    button13.setBackgroundColor(android.graphics.Color.RED);
                } else if(State13 == true && theme == "Alternative") {
                    button13 = new android.widget.Button(ctx);
                    button13.setText(Texts.saddle_up + " | " + Texts.on);
                    button13.setBackgroundColor(android.graphics.Color.GREEN);
                } else if(State13 == false && theme == "MCPE") {
                    button13 = minecraftButton(Texts.saddle_up + " | " + Texts.off);
                    //button13.setTypeface(mcpeFont);
                    //button13.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State13 == true && theme == "MCPE") {
                    button13 = minecraftButton(Texts.saddle_up + " | " + Texts.on);
                    //button13.setTypeface(mcpeFont);
                    //button13.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State13 == false && theme == "Blue") {
                    button13 = new android.widget.Button(ctx);
                    button13.setText(Texts.saddle_up + " | " + Texts.off);
                    button13.setTextColor(android.graphics.Color.WHITE);
                    button13.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button13.setTypeface(mcpeFont);
                    //button13.setTypeface(mcpeFont);
                    //button13.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State13 == true && theme == "Blue") {
                    button13 = new android.widget.Button(ctx);
                    button13.setText(Texts.saddle_up + " | " + Texts.on);
                    button13.setTextColor(android.graphics.Color.BLUE);
                    button13.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button13.setTypeface(mcpeFont);
                    //button13.setTypeface(mcpeFont);
                    //button13.setBackgroundDrawable(mcpeButtonOldImage);
                }

                button13.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(State13 == false && theme == "Alternative") {
                            State13 = true;
                            
                            button13.setText(Texts.saddle_up + " | " + Texts.on);
                            button13.setBackgroundColor(android.graphics.Color.GREEN);
                        } else if(State13 == true && theme == "Alternative") {
                            State13 = false;
                            
                            button13.setText(Texts.saddle_up + " | " + Texts.off);
                            button13.setBackgroundColor(android.graphics.Color.RED);
                        } else if(State13 == false && theme == "MCPE") {
                            State13 = true;
                            
                            button13.setText(Texts.saddle_up + " | " + Texts.on);
                            //button13.setTypeface(mcpeFont);
                            //button13.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State13 == true && theme == "MCPE") {
                            State13 = false;
                            
                            button13.setText(Texts.saddle_up + " | " + Texts.off);
                            //button13.setTypeface(mcpeFont);
                            //button13.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State13 == false && theme == "Blue") {
                            State13 = true;
                            
                            button13.setText(Texts.saddle_up + " | " + Texts.on);
                            button13.setTextColor(android.graphics.Color.BLUE);
                            button13.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button13.setTypeface(mcpeFont);
                        } else if(State13 == true && theme == "Blue") {
                            State13 = false;
                            
                            button13.setText(Texts.saddle_up + " | " + Texts.off);
                            button13.setTextColor(android.graphics.Color.WHITE);
                            button13.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button13.setTypeface(mcpeFont);
                        }
                    }
                }));


                var button14 = new android.widget.Button(ctx);
                if(State14 == false && theme == "Alternative") {
                    button14 = new android.widget.Button(ctx);
                    button14.setText(Texts.stackdrop + " | " + Texts.off);
                    button14.setBackgroundColor(android.graphics.Color.RED);
                } else if(State14 == true && theme == "Alternative") {
                    button14 = new android.widget.Button(ctx);
                    button14.setText(Texts.stackdrop + " | " + Texts.on);
                    button14.setBackgroundColor(android.graphics.Color.GREEN);
                } else if(State14 == false && theme == "MCPE") {
                    button14 = minecraftButton(Texts.stackdrop + " | " + Texts.off);
                    //button14.setTypeface(mcpeFont);
                    //button14.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State14 == true && theme == "MCPE") {
                    button14 = minecraftButton(Texts.stackdrop + " | " + Texts.on);
                    //button14.setTypeface(mcpeFont);
                    //button14.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State14 == false && theme == "Blue") {
                    button14 = new android.widget.Button(ctx);
                    button14.setText(Texts.stackdrop + " | " + Texts.off);
                    button14.setTextColor(android.graphics.Color.WHITE);
                    button14.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button14.setTypeface(mcpeFont);
                    //button14.setTypeface(mcpeFont);
                    //button14.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State14 == true && theme == "Blue") {
                    button14 = new android.widget.Button(ctx);
                    button14.setText(Texts.stackdrop + " | " + Texts.on);
                    button14.setTextColor(android.graphics.Color.BLUE);
                    button14.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button14.setTypeface(mcpeFont);
                    //button14.setTypeface(mcpeFont);
                    //button14.setBackgroundDrawable(mcpeButtonOldImage);
                }

                button14.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(State14 == false && theme == "Alternative") {
                            State14 = true;
                            
                            button14.setText(Texts.stackdrop + " | " + Texts.on);
                            button14.setBackgroundColor(android.graphics.Color.GREEN);
                        } else if(State14 == true && theme == "Alternative") {
                            State14 = false;
                            
                            button14.setText(Texts.stackdrop + " | " + Texts.off);
                            button14.setBackgroundColor(android.graphics.Color.RED);
                        } else if(State14 == false && theme == "MCPE") {
                            State14 = true;
                            
                            button14.setText(Texts.stackdrop + " | " + Texts.on);
                            //button14.setTypeface(mcpeFont);
                            //button14.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State14 == true && theme == "MCPE") {
                            State14 = false;
                            
                            button14.setText(Texts.stackdrop + " | " + Texts.off);
                            //button14.setTypeface(mcpeFont);
                            //button14.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State14 == false && theme == "Blue") {
                            State14 = true;
                            
                            button14.setText(Texts.stackdrop + " | " + Texts.on);
                            button14.setTextColor(android.graphics.Color.BLUE);
                            button14.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button14.setTypeface(mcpeFont);
                        } else if(State14 == true && theme == "Blue") {
                            State14 = false;
                            
                            button14.setText(Texts.stackdrop + " | " + Texts.off);
                            button14.setTextColor(android.graphics.Color.WHITE);
                            button14.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button14.setTypeface(mcpeFont);
                        }
                    }
                }));


                var button15 = new android.widget.Button(ctx);
                if(State15 == false && theme == "Alternative") {
                    button15 = new android.widget.Button(ctx);
                    button15.setText(Texts.tapteleporter + " | " + Texts.off);
                    button15.setBackgroundColor(android.graphics.Color.RED);
                } else if(State15 == true && theme == "Alternative") {
                    button15 = new android.widget.Button(ctx);
                    button15.setText(Texts.tapteleporter + " | " + Texts.on);
                    button15.setBackgroundColor(android.graphics.Color.GREEN);
                } else if(State15 == false && theme == "MCPE") {
                    button15 = minecraftButton(Texts.tapteleporter + " | " + Texts.off);
                    //button15.setTypeface(mcpeFont);
                    //button15.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State15 == true && theme == "MCPE") {
                    button15 = minecraftButton(Texts.tapteleporter + " | " + Texts.on);
                    //button15.setTypeface(mcpeFont);
                    //button15.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State15 == false && theme == "Blue") {
                    button15 = new android.widget.Button(ctx);
                    button15.setText(Texts.tapteleporter + " | " + Texts.off);
                    button15.setTextColor(android.graphics.Color.WHITE);
                    button15.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button15.setTypeface(mcpeFont);
                } else if(State15 == true && theme == "Blue") {
                    button15 = new android.widget.Button(ctx);
                    button15.setText(Texts.tapteleporter + " | " + Texts.on);
                    button15.setTextColor(android.graphics.Color.BLUE);
                    button15.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button15.setTypeface(mcpeFont);
                }

                button15.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(State15 == false && theme == "Alternative") {
                            State15 = true;
                            
                            button15.setText(Texts.tapteleporter + " | " + Texts.on);
                            button15.setBackgroundColor(android.graphics.Color.GREEN);
                        } else if(State15 == true && theme == "Alternative") {
                            State15 = false;
                            
                            button15.setText(Texts.tapteleporter + " | " + Texts.off);
                            button15.setBackgroundColor(android.graphics.Color.RED);
                        } else if(State15 == false && theme == "MCPE") {
                            State15 = true;
                            
                            button15.setText(Texts.tapteleporter + " | " + Texts.on);
                            //button15.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State15 == true && theme == "MCPE") {
                            State15 = false;
                            
                            button15.setText(Texts.tapteleporter + " | " + Texts.off);
                            //button15.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State15 == false && theme == "Blue") {
                            State15 = true;
                            
                            button15.setText(Texts.tapteleporter + " | " + Texts.on);
                            button15.setTextColor(android.graphics.Color.BLUE);
                            button15.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button15.setTypeface(mcpeFont);
                        } else if(State15 == true && theme == "Blue") {
                            State15 = false;
                            
                            button15.setText(Texts.tapteleporter + " | " + Texts.off);
                            button15.setTextColor(android.graphics.Color.WHITE);
                            button15.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button15.setTypeface(mcpeFont);
                        }
                    }
                }));


                var button16 = new android.widget.Button(ctx);
                if(State16 == false && theme == "Alternative") {
                    button16 = new android.widget.Button(ctx);
                    button16.setText(Texts.instakill + " | " + Texts.off);
                    button16.setBackgroundColor(android.graphics.Color.RED);
                } else if(State16 == true && theme == "Alternative") {
                    button16 = new android.widget.Button(ctx);
                    button16.setText(Texts.instakill + " | " + Texts.on);
                    button16.setBackgroundColor(android.graphics.Color.GREEN);
                } else if(State16 == false && theme == "MCPE") {
                    button16 = minecraftButton(Texts.instakill + " | " + Texts.off);
                    //button16.setTypeface(mcpeFont);
                    //button16.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State16 == true && theme == "MCPE") {
                    button16 = minecraftButton(Texts.instakill + " | " + Texts.on);
                    //button16.setTypeface(mcpeFont);
                    //button16.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State16 == false && theme == "Blue") {
                    button16 = new android.widget.Button(ctx);
                    button16.setText(Texts.instakill + " | " + Texts.off);
                    button16.setTextColor(android.graphics.Color.WHITE);
                    button16.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button16.setTypeface(mcpeFont);
                } else if(State16 == true && theme == "Blue") {
                    button16 = new android.widget.Button(ctx);
                    button16.setText(Texts.instakill + " | " + Texts.on);
                    button16.setTextColor(android.graphics.Color.BLUE);
                    button16.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button16.setTypeface(mcpeFont);
                }

                button16.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(State16 == false && theme == "Alternative") {
                            State16 = true;
                            
                            button16.setText(Texts.instakill + " | " + Texts.on);
                            button16.setBackgroundColor(android.graphics.Color.GREEN);
                        } else if(State16 == true && theme == "Alternative") {
                            State16 = false;
                            
                            button16.setText(Texts.instakill + " | " + Texts.off);
                            button16.setBackgroundColor(android.graphics.Color.RED);
                        } else if(State16 == false && theme == "MCPE") {
                            State16 = true;
                            
                            button16.setText(Texts.instakill + " | " + Texts.on);
                            //button16.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State16 == true && theme == "MCPE") {
                            State16 = false;
                            
                            button16.setText(Texts.instakill + " | " + Texts.off);
                            //button16.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State16 == false && theme == "Blue") {
                            State16 = true;
                            
                            button16.setText(Texts.instakill + " | " + Texts.on);
                            button16.setTextColor(android.graphics.Color.BLUE);
                            button16.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button16.setTypeface(mcpeFont);
                        } else if(State16 == true && theme == "Blue") {
                            State16 = false;
                            
                            button16.setText(Texts.instakill + " | " + Texts.off);
                            button16.setTextColor(android.graphics.Color.WHITE);
                            button16.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button16.setTypeface(mcpeFont);
                        }
                    }
                }));


                var button17 = new android.widget.Button(ctx);
                if(State17 == false && theme == "Alternative") {
                    button17 = new android.widget.Button(ctx);
                    button17.setText(Texts.signeditor + " (EXPERIMENTAL) | " + Texts.off);
                    button17.setBackgroundColor(android.graphics.Color.RED);
                } else if(State17 == true && theme == "Alternative") {
                    button17 = new android.widget.Button(ctx);
                    button17.setText(Texts.signeditor + " (EXPERIMENTAL) | " + Texts.on);
                    button17.setBackgroundColor(android.graphics.Color.GREEN);
                } else if(State17 == false && theme == "MCPE") {
                    button17 = minecraftButton(Texts.signeditor + " (EXPERIMENTAL) | " + Texts.off);
                    //button17.setTypeface(mcpeFont);
                    //button17.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State17 == true && theme == "MCPE") {
                    button17 = minecraftButton(Texts.signeditor + " (EXPERIMENTAL) | " + Texts.on);
                    //button17.setTypeface(mcpeFont);
                    //button17.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State17 == false && theme == "Blue") {
                    button17 = new android.widget.Button(ctx);
                    button17.setText(Texts.signeditor + " (EXPERIMENTAL) | " + Texts.off);
                    button17.setTextColor(android.graphics.Color.WHITE);
                    button17.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button17.setTypeface(mcpeFont);
                } else if(State17 == true && theme == "Blue") {
                    button17 = new android.widget.Button(ctx);
                    button17.setText(Texts.signeditor + " (EXPERIMENTAL) | " + Texts.on);
                    button17.setTextColor(android.graphics.Color.BLUE);
                    button17.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button17.setTypeface(mcpeFont);
                }

                button17.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(State17 == false && theme == "Alternative") {
                            State17 = true;
                            
                            button17.setText(Texts.signeditor + " (EXPERIMENTAL) | " + Texts.on);
                            button17.setBackgroundColor(android.graphics.Color.GREEN);
                        } else if(State17 == true && theme == "Alternative") {
                            State17 = false;
                            
                            button17.setText(Texts.signeditor + " (EXPERIMENTAL) | " + Texts.off);
                            button17.setBackgroundColor(android.graphics.Color.RED);
                        } else if(State17 == false && theme == "MCPE") {
                            State17 = true;
                            
                            button17.setText(Texts.signeditor + " (EXPERIMENTAL) | " + Texts.on);
                            //button17.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State17 == true && theme == "MCPE") {
                            State17 = false;
                            
                            button17.setText(Texts.signeditor + " (EXPERIMENTAL) | " + Texts.off);
                            //button17.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State17 == false && theme == "Blue") {
                            State17 = true;
                            
                            button17.setText(Texts.signeditor + " (EXPERIMENTAL) | " + Texts.on);
                            button17.setTextColor(android.graphics.Color.BLUE);
                            button17.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button17.setTypeface(mcpeFont);
                        } else if(State17 == true && theme == "Blue") {
                            State17 = false;
                            
                            button17.setText(Texts.signeditor + " (EXPERIMENTAL) | " + Texts.off);
                            button17.setTextColor(android.graphics.Color.WHITE);
                            button17.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button17.setTypeface(mcpeFont);
                        }
                    }
                }));


                var button18 = new android.widget.Button(ctx);
                if(State18 == false && theme == "Alternative") {
                    button18 = new android.widget.Button(ctx);
                    MoreOptionsPE.allItemsEatable(0);
                    button18.setText(Texts.all_items_eatable + " (EXPERIMENTAL) | " + Texts.off);
                    button18.setBackgroundColor(android.graphics.Color.RED);
                } else if(State18 == true && theme == "Alternative") {
                    button18 = new android.widget.Button(ctx);
                    MoreOptionsPE.allItemsEatable(1);
                    button18.setText(Texts.all_items_eatable + " (EXPERIMENTAL) | " + Texts.on);
                    button18.setBackgroundColor(android.graphics.Color.GREEN);
                } else if(State18 == false && theme == "MCPE") {
                    button18 = minecraftButton(Texts.all_items_eatable + " (EXPERIMENTAL) | " + Texts.off);
                    MoreOptionsPE.allItemsEatable(0);
                    //button18.setTypeface(mcpeFont);
                    //button18.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State18 == true && theme == "MCPE") {
                    button18 = minecraftButton(Texts.all_items_eatable + " (EXPERIMENTAL) | " + Texts.on);
                    MoreOptionsPE.allItemsEatable(1);
                    //button18.setTypeface(mcpeFont);
                    //button18.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State18 == false && theme == "Blue") {
                    button18 = new android.widget.Button(ctx);
                    MoreOptionsPE.allItemsEatable(0);
                    button18.setText(Texts.all_items_eatable + " (EXPERIMENTAL) | " + Texts.off);
                    button18.setTextColor(android.graphics.Color.WHITE);
                    button18.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button18.setTypeface(mcpeFont);
                } else if(State18 == true && theme == "Blue") {
                    button18 = new android.widget.Button(ctx);
                    MoreOptionsPE.allItemsEatable(1);
                    button18.setText(Texts.all_items_eatable + " (EXPERIMENTAL) | " + Texts.on);
                    button18.setTextColor(android.graphics.Color.BLUE);
                    button18.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button18.setTypeface(mcpeFont);
                }

                button18.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(State18 == false && theme == "Alternative") {
                            State18 = true;
                            
                            MoreOptionsPE.allItemsEatable(1);
                            button18.setText(Texts.all_items_eatable + " (EXPERIMENTAL) | " + Texts.on);
                            button18.setBackgroundColor(android.graphics.Color.GREEN);
                        } else if(State18 == true && theme == "Alternative") {
                            State18 = false;
                            
                            MoreOptionsPE.allItemsEatable(0);
                            button18.setText(Texts.all_items_eatable + " (EXPERIMENTAL) | " + Texts.off);
                            button18.setBackgroundColor(android.graphics.Color.RED);
                        } else if(State18 == false && theme == "MCPE") {
                            State18 = true;
                            
                            MoreOptionsPE.allItemsEatable(1);
                            button18.setText(Texts.all_items_eatable + " (EXPERIMENTAL) | " + Texts.on);
                            //button18.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State18 == true && theme == "MCPE") {
                            State18 = false;
                            
                            MoreOptionsPE.allItemsEatable(0);
                            button18.setText(Texts.all_items_eatable + " (EXPERIMENTAL) | " + Texts.off);
                            //button18.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State18 == false && theme == "Blue") {
                            State18 = true;
                            
                            MoreOptionsPE.allItemsEatable(1);
                            button18.setText(Texts.all_items_eatable + " (EXPERIMENTAL) | " + Texts.on);
                            button18.setTextColor(android.graphics.Color.BLUE);
                            button18.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button18.setTypeface(mcpeFont);
                        } else if(State18 == true && theme == "Blue") {
                            State18 = false;
                            
                            MoreOptionsPE.allItemsEatable(0);
                            button18.setText(Texts.all_items_eatable + " (EXPERIMENTAL) | " + Texts.off);
                            button18.setTextColor(android.graphics.Color.WHITE);
                            button18.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button18.setTypeface(mcpeFont);
                        }
                    }
                }));


                var button19 = new android.widget.Button(ctx);
                if(State19 == false && theme == "Alternative") {
                    button19 = new android.widget.Button(ctx);
                    button19.setText(Texts.sprinting + " | " + Texts.off);
                    button19.setBackgroundColor(android.graphics.Color.RED);
                } else if(State19 == true && theme == "Alternative") {
                    button19 = new android.widget.Button(ctx);
                    button19.setText(Texts.sprinting + " | " + Texts.on);
                    button19.setBackgroundColor(android.graphics.Color.GREEN);
                } else if(State19 == false && theme == "MCPE") {
                    button19 = minecraftButton(Texts.sprinting + " | " + Texts.off);
                    //button19.setTypeface(mcpeFont);
                    //button19.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State19 == true && theme == "MCPE") {
                    button19 = minecraftButton(Texts.sprinting + " | " + Texts.on);
                    //button19.setTypeface(mcpeFont);
                    //button19.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State19 == false && theme == "Blue") {
                    button19 = new android.widget.Button(ctx);
                    button19.setText(Texts.sprinting + " | " + Texts.off);
                    button19.setTextColor(android.graphics.Color.WHITE);
                    button19.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button19.setTypeface(mcpeFont);
                } else if(State19 == true && theme == "Blue") {
                    button19 = new android.widget.Button(ctx);
                    button19.setText(Texts.sprinting + " | " + Texts.on);
                    button19.setTextColor(android.graphics.Color.BLUE);
                    button19.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button19.setTypeface(mcpeFont);
                }

                button19.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(State19 == false && theme == "Alternative") {
                            State19 = true;
                            
                            f = 1;
                            button19.setText(Texts.sprinting + " | " + Texts.on);
                            button19.setBackgroundColor(android.graphics.Color.GREEN);
                        } else if(State19 == true && theme == "Alternative") {
                            State19 = false;
                            
                            f = 0;
                            button19.setText(Texts.sprinting + " | " + Texts.off);
                            button19.setBackgroundColor(android.graphics.Color.RED);
                        } else if(State19 == false && theme == "MCPE") {
                            State19 = true;
                            
                            f = 1;
                            button19.setText(Texts.sprinting + " | " + Texts.on);
                            //button19.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State19 == true && theme == "MCPE") {
                            State19 = false;
                            
                            f = 0;
                            button19.setText(Texts.sprinting + " | " + Texts.off);
                            //button19.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State19 == false && theme == "Blue") {
                            State19 = true;
                            
                            f = 1;
                            button19.setText(Texts.sprinting + " | " + Texts.on);
                            button19.setTextColor(android.graphics.Color.BLUE);
                            button19.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button19.setTypeface(mcpeFont);
                        } else if(State19 == true && theme == "Blue") {
                            State19 = false;
                            
                            f = 0;
                            button19.setText(Texts.sprinting + " | " + Texts.off);
                            button19.setTextColor(android.graphics.Color.WHITE);
                            button19.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button19.setTypeface(mcpeFont);
                        }
                    }
                }));


                var button20 = new android.widget.Button(ctx);
                if(State20 == false && theme == "Alternative") {
                    button20 = new android.widget.Button(ctx);
                    button20.setText(Texts.jetpack + " | " + Texts.off);
                    button20.setBackgroundColor(android.graphics.Color.RED);
                } else if(State20 == true && theme == "Alternative") {
                    button20 = new android.widget.Button(ctx);
                    button20.setText(Texts.jetpack + " | " + Texts.on);
                    button20.setBackgroundColor(android.graphics.Color.GREEN);
                } else if(State20 == false && theme == "MCPE") {
                    button20 = minecraftButton(Texts.jetpack + " | " + Texts.off);
                    //button20.setTypeface(mcpeFont);
                    //button20.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State20 == true && theme == "MCPE") {
                    button20 = minecraftButton(Texts.jetpack + " | " + Texts.on);
                    //button20.setTypeface(mcpeFont);
                    //button20.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State20 == false && theme == "Blue") {
                    button20 = new android.widget.Button(ctx);
                    button20.setText(Texts.jetpack + " | " + Texts.off);
                    button20.setTextColor(android.graphics.Color.WHITE);
                    button20.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button20.setTypeface(mcpeFont);
                } else if(State20 == true && theme == "Blue") {
                    button20 = new android.widget.Button(ctx);
                    button20.setText(Texts.jetpack + " | " + Texts.on);
                    button20.setTextColor(android.graphics.Color.BLUE);
                    button20.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button20.setTypeface(mcpeFont);
                }

                button20.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(State20 == false && theme == "Alternative") {
                            State20 = true;
                            
                            button20.setText(Texts.jetpack + " | " + Texts.on);
                            button20.setBackgroundColor(android.graphics.Color.GREEN);
                        } else if(State20 == true && theme == "Alternative") {
                            State20 = false;
                            
                            button20.setText(Texts.jetpack + " | " + Texts.off);
                            button20.setBackgroundColor(android.graphics.Color.RED);
                        } else if(State20 == false && theme == "MCPE") {
                            State20 = true;
                            
                            button20.setText(Texts.jetpack + " | " + Texts.on);
                            //button20.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State20 == true && theme == "MCPE") {
                            State20 = false;
                            
                            button20.setText(Texts.jetpack + " | " + Texts.off);
                            //button20.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State20 == false && theme == "Blue") {
                            State20 = true;
                            
                            button20.setText(Texts.jetpack + " | " + Texts.on);
                            button20.setTextColor(android.graphics.Color.BLUE);
                            button20.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button20.setTypeface(mcpeFont);
                        } else if(State20 == true && theme == "Blue") {
                            State20 = false;
                            
                            button20.setText(Texts.jetpack + " | " + Texts.off);
                            button20.setTextColor(android.graphics.Color.WHITE);
                            button20.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button20.setTypeface(mcpeFont);
                        }
                    }
                }));


                var button21 = new android.widget.Button(ctx);
                if(State21 == false && theme == "Alternative") {
                    button21 = new android.widget.Button(ctx);
                    button21.setText(Texts.highjump + " | " + Texts.off);
                    button21.setBackgroundColor(android.graphics.Color.RED);
                } else if(State21 == true && theme == "Alternative") {
                    button21 = new android.widget.Button(ctx);
                    button21.setText(Texts.highjump + " | " + Texts.on);
                    button21.setBackgroundColor(android.graphics.Color.GREEN);
                } else if(State21 == false && theme == "MCPE") {
                    button21 = minecraftButton(Texts.highjump + " | " + Texts.off);
                    //button21.setTypeface(mcpeFont);
                    //button21.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State21 == true && theme == "MCPE") {
                    button21 = minecraftButton(Texts.highjump + " | " + Texts.on);
                    //button21.setTypeface(mcpeFont);
                    //button21.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State21 == false && theme == "Blue") {
                    button21 = new android.widget.Button(ctx);
                    button21.setText(Texts.highjump + " | " + Texts.off);
                    button21.setTextColor(android.graphics.Color.WHITE);
                    button21.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button21.setTypeface(mcpeFont);
                } else if(State21 == true && theme == "Blue") {
                    button21 = new android.widget.Button(ctx);
                    button21.setText(Texts.highjump + " | " + Texts.on);
                    button21.setTextColor(android.graphics.Color.BLUE);
                    button21.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button21.setTypeface(mcpeFont);
                }

                button21.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(State21 == false && theme == "Alternative") {
                            State21 = true;
                            
                            button21.setText(Texts.highjump + " | " + Texts.on);
                            button21.setBackgroundColor(android.graphics.Color.GREEN);
                        } else if(State21 == true && theme == "Alternative") {
                            State21 = false;
                            
                            button21.setText(Texts.highjump + " | " + Texts.off);
                            button21.setBackgroundColor(android.graphics.Color.RED);
                        } else if(State21 == false && theme == "MCPE") {
                            State21 = true;
                            
                            button21.setText(Texts.highjump + " | " + Texts.on);
                            //button21.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State21 == true && theme == "MCPE") {
                            State21 = false;
                            
                            button21.setText(Texts.highjump + " | " + Texts.off);
                            //button21.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State21 == false && theme == "Blue") {
                            State21 = true;
                            
                            button21.setText(Texts.highjump + " | " + Texts.on);
                            button21.setTextColor(android.graphics.Color.BLUE);
                            button21.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button21.setTypeface(mcpeFont);
                        } else if(State21 == true && theme == "Blue") {
                            State21 = false;
                            
                            button21.setText(Texts.highjump + " | " + Texts.off);
                            button21.setTextColor(android.graphics.Color.WHITE);
                            button21.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button21.setTypeface(mcpeFont);
                        }
                    }
                }));

                var button22 = new android.widget.Button(ctx);
                if(State22 == false && theme == "Alternative") {
                    button22 = new android.widget.Button(ctx);
                    button22.setText(Texts.drone + " | " + Texts.off);
                    button22.setBackgroundColor(android.graphics.Color.RED);
                } else if(State22 == true && theme == "Alternative") {
                    button22 = new android.widget.Button(ctx);
                    button22.setText(Texts.drone + " | " + Texts.on);
                    button22.setBackgroundColor(android.graphics.Color.GREEN);
                } else if(State22 == false && theme == "MCPE") {
                    button22 = minecraftButton(Texts.drone + " | " + Texts.off);
                    //button22.setTypeface(mcpeFont);
                    //button22.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State22 == true && theme == "MCPE") {
                    button22 = minecraftButton(Texts.drone + " | " + Texts.on);
                    //button22.setTypeface(mcpeFont);
                    //button22.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State22 == false && theme == "Blue") {
                    button22 = new android.widget.Button(ctx);
                    button22.setText(Texts.drone + " | " + Texts.off);
                    button22.setTextColor(android.graphics.Color.WHITE);
                    button22.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button22.setTypeface(mcpeFont);
                } else if(State22 == true && theme == "Blue") {
                    button22 = new android.widget.Button(ctx);
                    button22.setText(Texts.drone + " | " + Texts.on);
                    button22.setTextColor(android.graphics.Color.BLUE);
                    button22.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button22.setTypeface(mcpeFont);
                }

                button22.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(State22 == false && theme == "Alternative") {
                            State22 = true;
                            
                            button22.setText(Texts.drone + " | " + Texts.on);
                            button22.setBackgroundColor(android.graphics.Color.GREEN);
                        } else if(State22 == true && theme == "Alternative") {
                            State22 = false;
                            
                            button22.setText(Texts.drone + " | " + Texts.off);
                            button22.setBackgroundColor(android.graphics.Color.RED);
                        } else if(State22 == false && theme == "MCPE") {
                            State22 = true;
                            
                            button22.setText(Texts.drone + " | " + Texts.on);
                            //button22.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State22 == true && theme == "MCPE") {
                            State22 = false;
                            
                            button22.setText(Texts.drone + " | " + Texts.off);
                            //button22.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State22 == false && theme == "Blue") {
                            State22 = true;
                            
                            button22.setText(Texts.drone + " | " + Texts.on);
                            button22.setTextColor(android.graphics.Color.BLUE);
                            button22.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button22.setTypeface(mcpeFont);
                        } else if(State22 == true && theme == "Blue") {
                            State22 = false;
                            
                            button22.setText(Texts.drone + " | " + Texts.off);
                            button22.setTextColor(android.graphics.Color.WHITE);
                            button22.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button22.setTypeface(mcpeFont);
                        }
                    }
                }));

                var button23 = new android.widget.Button(ctx);
                if(State23 == false && theme == "Alternative") {
                    button23 = new android.widget.Button(ctx);
                    button23.setText(Texts.parachute + " | " + Texts.off);
                    button23.setBackgroundColor(android.graphics.Color.RED);
                } else if(State23 == true && theme == "Alternative") {
                    button23 = new android.widget.Button(ctx);
                    button23.setText(Texts.parachute + " | " + Texts.on);
                    button23.setBackgroundColor(android.graphics.Color.GREEN);
                } else if(State23 == false && theme == "MCPE") {
                    button23 = minecraftButton(Texts.parachute + " | " + Texts.off);
                    //button23.setTypeface(mcpeFont);
                    //button23.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State23 == true && theme == "MCPE") {
                    button23 = minecraftButton(Texts.parachute + " | " + Texts.on);
                    //button23.setTypeface(mcpeFont);
                    //button23.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State23 == false && theme == "Blue") {
                    button23 = new android.widget.Button(ctx);
                    button23.setText(Texts.parachute + " | " + Texts.off);
                    button23.setTextColor(android.graphics.Color.WHITE);
                    button23.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button23.setTypeface(mcpeFont);
                } else if(State23 == true && theme == "Blue") {
                    button23 = new android.widget.Button(ctx);
                    button23.setText(Texts.parachute + " | " + Texts.on);
                    button23.setTextColor(android.graphics.Color.BLUE);
                    button23.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button23.setTypeface(mcpeFont);
                }

                button23.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(State23 == false && theme == "Alternative") {
                            State23 = true;
                            
                            button23.setText(Texts.parachute + " | " + Texts.on);
                            button23.setBackgroundColor(android.graphics.Color.GREEN);
                        } else if(State23 == true && theme == "Alternative") {
                            State23 = false;
                            
                            button23.setText(Texts.parachute + " | " + Texts.off);
                            button23.setBackgroundColor(android.graphics.Color.RED);
                        } else if(State23 == false && theme == "MCPE") {
                            State23 = true;
                            
                            button23.setText(Texts.parachute + " | " + Texts.on);
                            //button23.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State23 == true && theme == "MCPE") {
                            State23 = false;
                            
                            button23.setText(Texts.parachute + " | " + Texts.off);
                            //button23.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State23 == false && theme == "Blue") {
                            State23 = true;
                            
                            button23.setText(Texts.parachute + " | " + Texts.on);
                            button23.setTextColor(android.graphics.Color.BLUE);
                            button23.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button23.setTypeface(mcpeFont);
                        } else if(State23 == true && theme == "Blue") {
                            State23 = false;
                            
                            button23.setText(Texts.parachute + " | " + Texts.off);
                            button23.setTextColor(android.graphics.Color.WHITE);
                            button23.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button24.setTypeface(mcpeFont);
                        }
                    }
                }));

                var button24 = new android.widget.Button(ctx);
                if(State24 == false && theme == "Alternative") {
                    button24 = new android.widget.Button(ctx);
                    button24.setText("TapNuker | " + Texts.off);
                    button24.setBackgroundColor(android.graphics.Color.RED);
                } else if(State24 == true && theme == "Alternative") {
                    button24 = new android.widget.Button(ctx);
                    button24.setText("TapNuker | " + Texts.on);
                    button24.setBackgroundColor(android.graphics.Color.GREEN);
                } else if(State24 == false && theme == "MCPE") {
                    button24 = minecraftButton("TapNuker | " + Texts.off);
                    //button24.setTypeface(mcpeFont);
                    //button24.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State24 == true && theme == "MCPE") {
                    button24 = minecraftButton("TapNuker | " + Texts.on);
                    //button24.setTypeface(mcpeFont);
                    //button24.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State24 == false && theme == "Blue") {
                    button24 = new android.widget.Button(ctx);
                    button24.setText("TapNuker | " + Texts.off);
                    button24.setTextColor(android.graphics.Color.WHITE);
                    button24.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button24.setTypeface(mcpeFont);
                } else if(State24 == true && theme == "Blue") {
                    button24 = new android.widget.Button(ctx);
                    button24.setText("TapNuker | " + Texts.on);
                    button24.setTextColor(android.graphics.Color.BLUE);
                    button24.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button24.setTypeface(mcpeFont);
                }

                button24.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(State24 == false && theme == "Alternative") {
                            State24 = true;
                            
                            button24.setText("TapNuker | " + Texts.on);
                            button24.setBackgroundColor(android.graphics.Color.GREEN);
                        } else if(State24 == true && theme == "Alternative") {
                            State24 = false;
                            
                            button24.setText("TapNuker | " + Texts.off);
                            button24.setBackgroundColor(android.graphics.Color.RED);
                        } else if(State24 == false && theme == "MCPE") {
                            State24 = true;
                            
                            button24.setText("TapNuker | " + Texts.on);
                            //button24.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State24 == true && theme == "MCPE") {
                            State24 = false;
                            
                            button24.setText("TapNuker | " + Texts.off);
                            //button24.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State24 == false && theme == "Blue") {
                            State24 = true;
                            
                            button24.setText("TapNuker | " + Texts.on);
                            button24.setTextColor(android.graphics.Color.BLUE);
                            button24.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button24.setTypeface(mcpeFont);
                        } else if(State24 == true && theme == "Blue") {
                            State24 = false;
                            
                            button24.setText("TapNuker | " + Texts.off);
                            button24.setTextColor(android.graphics.Color.WHITE);
                            button24.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button24.setTypeface(mcpeFont);
                        }
                    }
                }));

                var button25 = new android.widget.Button(ctx);
                if(State25 == false && theme == "Alternative") {
                    button25 = new android.widget.Button(ctx);
                    button25.setText(Texts.walk_on_liquids + " | " + Texts.off);
                    button25.setBackgroundColor(android.graphics.Color.RED);
                } else if(State25 == true && theme == "Alternative") {
                    button25 = new android.widget.Button(ctx);
                    button25.setText(Texts.walk_on_liquids + " | " + Texts.on);
                    button25.setBackgroundColor(android.graphics.Color.GREEN);
                } else if(State25 == false && theme == "MCPE") {
                    button25 = minecraftButton(Texts.walk_on_liquids + " | " + Texts.off);
                    //button25.setTypeface(mcpeFont);
                    //button25.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State25 == true && theme == "MCPE") {
                    button25 = minecraftButton(Texts.walk_on_liquids + " | " + Texts.on);
                    //button25.setTypeface(mcpeFont);
                    //button25.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State25 == false && theme == "Blue") {
                    button25 = new android.widget.Button(ctx);
                    button25.setText(Texts.walk_on_liquids + " | " + Texts.off);
                    button25.setTextColor(android.graphics.Color.WHITE);
                    button25.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button25.setTypeface(mcpeFont);
                } else if(State25 == true && theme == "Blue") {
                    button25 = new android.widget.Button(ctx);
                    button25.setText(Texts.walk_on_liquids + " | " + Texts.on);
                    button25.setTextColor(android.graphics.Color.BLUE);
                    button25.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button25.setTypeface(mcpeFont);
                }

                button25.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(State25 == false && theme == "Alternative") {
                            State25 = true;
                            
                            button25.setText(Texts.walk_on_liquids + " | " + Texts.on);
                            button25.setBackgroundColor(android.graphics.Color.GREEN);
                        } else if(State25 == true && theme == "Alternative") {
                            State25 = false;
                            
                            button25.setText(Texts.walk_on_liquids + " | " + Texts.off);
                            button25.setBackgroundColor(android.graphics.Color.RED);
                        } else if(State25 == false && theme == "MCPE") {
                            State25 = true;
                            
                            button25.setText(Texts.walk_on_liquids + " | " + Texts.on);
                            //button25.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State25 == true && theme == "MCPE") {
                            State25 = false;
                            
                            button25.setText(Texts.walk_on_liquids + " | " + Texts.off);
                            //button25.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State25 == false && theme == "Blue") {
                            State25 = true;
                            
                            button25.setText(Texts.walk_on_liquids + " | " + Texts.on);
                            button25.setTextColor(android.graphics.Color.BLUE);
                            button25.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button25.setTypeface(mcpeFont);
                        } else if(State25 == true && theme == "Blue") {
                            State25 = false;
                            
                            button25.setText(Texts.walk_on_liquids + " | " + Texts.off);
                            button25.setTextColor(android.graphics.Color.WHITE);
                            button25.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button25.setTypeface(mcpeFont);
                        }
                    }
                }));
				
				var button26 = new android.widget.Button(ctx);
                if(State26 == false && theme == "Alternative") {
                    button26 = new android.widget.Button(ctx);
                    button26.setText(Texts.autospammer + " | " + Texts.off);
                    button26.setBackgroundColor(android.graphics.Color.RED);
                } else if(State26 == true && theme == "Alternative") {
                    button26 = new android.widget.Button(ctx);
                    button26.setText(Texts.autospammer + " | " + Texts.on);
                    button26.setBackgroundColor(android.graphics.Color.GREEN);
                } else if(State26 == false && theme == "MCPE") {
                    button26 = minecraftButton(Texts.autospammer + " | " + Texts.off);
                    //button26.setTypeface(mcpeFont);
                    //button26.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State26 == true && theme == "MCPE") {
                    button26 = minecraftButton(Texts.autospammer + " | " + Texts.on);
                    //button26.setTypeface(mcpeFont);
                    //button26.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State26 == false && theme == "Blue") {
                    button26 = new android.widget.Button(ctx);
                    button26.setText(Texts.autospammer + " | " + Texts.off);
                    button26.setTextColor(android.graphics.Color.WHITE);
                    button26.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button26.setTypeface(mcpeFont);
                } else if(State26 == true && theme == "Blue") {
                    button26 = new android.widget.Button(ctx);
                    button26.setText(Texts.autospammer + " | " + Texts.on);
                    button26.setTextColor(android.graphics.Color.BLUE);
                    button26.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button26.setTypeface(mcpeFont);
                }

                button26.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(State26 == false && theme == "Alternative") {
                            State26 = true;
                            
                            button26.setText(Texts.autospammer + " | " + Texts.on);
                            button26.setBackgroundColor(android.graphics.Color.GREEN);
                        } else if(State26 == true && theme == "Alternative") {
                            State26 = false;
                            
                            button26.setText(Texts.autospammer + " | " + Texts.off);
                            button26.setBackgroundColor(android.graphics.Color.RED);
                        } else if(State26 == false && theme == "MCPE") {
                            State26 = true;
                            
                            button26.setText(Texts.autospammer + " | " + Texts.on);
                            //button26.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State26 == true && theme == "MCPE") {
                            State26 = false;
                            
                            button26.setText(Texts.autospammer + " | " + Texts.off);
                            //button26.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State26 == false && theme == "Blue") {
                            State26 = true;
                            
                            button26.setText(Texts.autospammer + " | " + Texts.on);
                            button26.setTextColor(android.graphics.Color.BLUE);
                            button26.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button26.setTypeface(mcpeFont);
                        } else if(State26 == true && theme == "Blue") {
                            State26 = false;
                            
                            button26.setText(Texts.autospammer + " | " + Texts.off);
                            button26.setTextColor(android.graphics.Color.WHITE);
                            button26.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button26.setTypeface(mcpeFont);
                        }
                    }
                }));
				
				var button27 = new android.widget.Button(ctx);
                if(State27 == false && theme == "Alternative") {
                    button27 = new android.widget.Button(ctx);
                    button27.setText(Texts.autoleave + " | " + Texts.off);
                    button27.setBackgroundColor(android.graphics.Color.RED);
                } else if(State27 == true && theme == "Alternative") {
                    button27 = new android.widget.Button(ctx);
                    button27.setText(Texts.autoleave + " | " + Texts.on);
                    button27.setBackgroundColor(android.graphics.Color.GREEN);
                } else if(State27 == false && theme == "MCPE") {
                    button27 = minecraftButton(Texts.autoleave + " | " + Texts.off);
                    //button27.setTypeface(mcpeFont);
                    //button27.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State27 == true && theme == "MCPE") {
                    button27 = minecraftButton(Texts.autoleave + " | " + Texts.on);
                    //button27.setTypeface(mcpeFont);
                    //button27.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State27 == false && theme == "Blue") {
                    button27 = new android.widget.Button(ctx);
                    button27.setText(Texts.autoleave + " | " + Texts.off);
                    button27.setTextColor(android.graphics.Color.WHITE);
                    button27.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button27.setTypeface(mcpeFont);
                } else if(State27 == true && theme == "Blue") {
                    button27 = new android.widget.Button(ctx);
                    button27.setText(Texts.autoleave + " | " + Texts.on);
                    button27.setTextColor(android.graphics.Color.BLUE);
                    button27.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button27.setTypeface(mcpeFont);
                }

                button27.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(State27 == false && theme == "Alternative") {
                            State27 = true;
                            
                            button27.setText(Texts.autoleave + " | " + Texts.on);
                            button27.setBackgroundColor(android.graphics.Color.GREEN);
                        } else if(State27 == true && theme == "Alternative") {
                            State27 = false;
                            
                            button27.setText(Texts.autoleave + " | " + Texts.off);
                            button27.setBackgroundColor(android.graphics.Color.RED);
                        } else if(State27 == false && theme == "MCPE") {
                            State27 = true;
                            
                            button27.setText(Texts.autoleave + " | " + Texts.on);
                            //button27.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State27 == true && theme == "MCPE") {
                            State27 = false;
                            
                            button27.setText(Texts.autoleave + " | " + Texts.off);
                            //button27.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State27 == false && theme == "Blue") {
                            State27 = true;
                            
                            button27.setText(Texts.autoleave + " | " + Texts.on);
                            button27.setTextColor(android.graphics.Color.BLUE);
                            button27.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button27.setTypeface(mcpeFont);
                        } else if(State27 == true && theme == "Blue") {
                            State27 = false;
                            
                            button27.setText(Texts.autoleave + " | " + Texts.off);
                            button27.setTextColor(android.graphics.Color.WHITE);
                            button27.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button27.setTypeface(mcpeFont);
                        }
                    }
                }));
				
				var button28 = new android.widget.Button(ctx);
                if(State28 == false && theme == "Alternative") {
                    button28 = new android.widget.Button(ctx);
                    button28.setText(Texts.instafood + " | " + Texts.off);
                    button28.setBackgroundColor(android.graphics.Color.RED);
                } else if(State28 == true && theme == "Alternative") {
                    button28 = new android.widget.Button(ctx);
                    button28.setText(Texts.instafood + " | " + Texts.on);
                    button28.setBackgroundColor(android.graphics.Color.GREEN);
                } else if(State28 == false && theme == "MCPE") {
                    button28 = minecraftButton(Texts.instafood + " | " + Texts.off);
                    //button28.setTypeface(mcpeFont);
                    //button28.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State28 == true && theme == "MCPE") {
                    button28 = minecraftButton(Texts.instafood + " | " + Texts.on);
                    //button28.setTypeface(mcpeFont);
                    //button28.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(State28 == false && theme == "Blue") {
                    button28 = new android.widget.Button(ctx);
                    button28.setText(Texts.instafood + " | " + Texts.off);
                    button28.setTextColor(android.graphics.Color.WHITE);
                    button28.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button28.setTypeface(mcpeFont);
                } else if(State28 == true && theme == "Blue") {
                    button28 = new android.widget.Button(ctx);
                    button28.setText(Texts.instafood + " | " + Texts.on);
                    button28.setTextColor(android.graphics.Color.BLUE);
                    button28.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button28.setTypeface(mcpeFont);
                }

                button28.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(State28 == false && theme == "Alternative") {
                            State28 = true;
                            
                            button28.setText(Texts.instafood + " | " + Texts.on);
                            button28.setBackgroundColor(android.graphics.Color.GREEN);
                        } else if(State28 == true && theme == "Alternative") {
                            State28 = false;
                            
                            button28.setText(Texts.instafood + " | " + Texts.off);
                            button28.setBackgroundColor(android.graphics.Color.RED);
                        } else if(State28 == false && theme == "MCPE") {
                            State28 = true;
                            
                            button28.setText(Texts.instafood + " | " + Texts.on);
                            //button28.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State28 == true && theme == "MCPE") {
                            State28 = false;
                            
                            button28.setText(Texts.instafood + " | " + Texts.off);
                            //button28.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(State28 == false && theme == "Blue") {
                            State28 = true;
                            
                            button28.setText(Texts.instafood + " | " + Texts.on);
                            button28.setTextColor(android.graphics.Color.BLUE);
                            button28.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button28.setTypeface(mcpeFont);
                        } else if(State28 == true && theme == "Blue") {
                            State28 = false;
                            
                            button28.setText(Texts.instafood + " | " + Texts.off);
                            button28.setTextColor(android.graphics.Color.WHITE);
                            button28.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button28.setTypeface(mcpeFont);
                        }
                    }
                }));
				
				var button29 = new android.widget.Button(ctx);
                if(StatePowerExplosions == false && theme == "Alternative") {
                    button29 = new android.widget.Button(ctx);
                    button29.setText(Texts.powerexplosions + " | " + Texts.off);
                    button29.setBackgroundColor(android.graphics.Color.RED);
                } else if(StatePowerExplosions == true && theme == "Alternative") {
                    button29 = new android.widget.Button(ctx);
                    button29.setText(Texts.powerexplosions + " | " + Texts.on);
                    button29.setBackgroundColor(android.graphics.Color.GREEN);
                } else if(StatePowerExplosions == false && theme == "MCPE") {
                    button29 = minecraftButton(Texts.powerexplosions + " | " + Texts.off);
                    //button29.setTypeface(mcpeFont);
                    //button29.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(StatePowerExplosions == true && theme == "MCPE") {
                    button29 = minecraftButton(Texts.powerexplosions + " | " + Texts.on);
                    //button29.setTypeface(mcpeFont);
                    //button29.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(StatePowerExplosions == false && theme == "Blue") {
                    button29 = new android.widget.Button(ctx);
                    button29.setText(Texts.powerexplosions + " | " + Texts.off);
                    button29.setTextColor(android.graphics.Color.WHITE);
                    button29.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button29.setTypeface(mcpeFont);
                } else if(StatePowerExplosions == true && theme == "Blue") {
                    button29 = new android.widget.Button(ctx);
                    button29.setText(Texts.powerexplosions + " | " + Texts.on);
                    button29.setTextColor(android.graphics.Color.BLUE);
                    button29.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button29.setTypeface(mcpeFont);
                }

                button29.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(StatePowerExplosions == false && theme == "Alternative") {
                            StatePowerExplosions = true;
                            
                            button29.setText(Texts.powerexplosions + " | " + Texts.on);
                            button29.setBackgroundColor(android.graphics.Color.GREEN);
                        } else if(StatePowerExplosions == true && theme == "Alternative") {
                            StatePowerExplosions = false;
                            
                            button29.setText(Texts.powerexplosions + " | " + Texts.off);
                            button29.setBackgroundColor(android.graphics.Color.RED);
                        } else if(StatePowerExplosions == false && theme == "MCPE") {
                            StatePowerExplosions = true;
                            
                            button29.setText(Texts.powerexplosions + " | " + Texts.on);
                            //button29.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(StatePowerExplosions == true && theme == "MCPE") {
                            StatePowerExplosions = false;
                            
                            button29.setText(Texts.powerexplosions + " | " + Texts.off);
                            //button29.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(StatePowerExplosions == false && theme == "Blue") {
                            StatePowerExplosions = true;
                            
                            button29.setText(Texts.powerexplosions + " | " + Texts.on);
                            button29.setTextColor(android.graphics.Color.BLUE);
                            button29.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button29.setTypeface(mcpeFont);
                        } else if(StatePowerExplosions == true && theme == "Blue") {
                            StatePowerExplosions = false;
                            
                            button29.setText(Texts.powerexplosions + " | " + Texts.off);
                            button29.setTextColor(android.graphics.Color.WHITE);
                            button29.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button29.setTypeface(mcpeFont);
                        }
                    }
                }));
				
				var button30 = new android.widget.Button(ctx);
                if(StateAutoMine == false && theme == "Alternative") {
                    button30 = new android.widget.Button(ctx);
                    button30.setText(Texts.automine + " | " + Texts.off);
                    button30.setBackgroundColor(android.graphics.Color.RED);
                } else if(StateAutoMine == true && theme == "Alternative") {
                    button30 = new android.widget.Button(ctx);
                    button30.setText(Texts.automine + " | " + Texts.on);
                    button30.setBackgroundColor(android.graphics.Color.GREEN);
                } else if(StateAutoMine == false && theme == "MCPE") {
                    button30 = minecraftButton(Texts.automine + " | " + Texts.off);
                    //button30.setTypeface(mcpeFont);
                    //button30.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(StateAutoMine == true && theme == "MCPE") {
                    button30 = minecraftButton(Texts.automine + " | " + Texts.on);
                    //button30.setTypeface(mcpeFont);
                    //button30.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(StateAutoMine == false && theme == "Blue") {
                    button30 = new android.widget.Button(ctx);
                    button30.setText(Texts.automine + " | " + Texts.off);
                    button30.setTextColor(android.graphics.Color.WHITE);
                    button30.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button30.setTypeface(mcpeFont);
                } else if(StateAutoMine == true && theme == "Blue") {
                    button30 = new android.widget.Button(ctx);
                    button30.setText(Texts.automine + " | " + Texts.on);
                    button30.setTextColor(android.graphics.Color.BLUE);
                    button30.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button30.setTypeface(mcpeFont);
                }

                button30.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(StateAutoMine == false && theme == "Alternative") {
                            StateAutoMine = true;
                            
                            button30.setText(Texts.automine + " | " + Texts.on);
                            button30.setBackgroundColor(android.graphics.Color.GREEN);
                        } else if(StateAutoMine == true && theme == "Alternative") {
                            StateAutoMine = false;
                            
                            button30.setText(Texts.automine + " | " + Texts.off);
                            button30.setBackgroundColor(android.graphics.Color.RED);
                        } else if(StateAutoMine == false && theme == "MCPE") {
                            StateAutoMine = true;
                            
                            button30.setText(Texts.automine + " | " + Texts.on);
                            //button30.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(StateAutoMine == true && theme == "MCPE") {
                            StateAutoMine = false;
                            
                            button30.setText(Texts.automine + " | " + Texts.off);
                            //button30.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(StateAutoMine == false && theme == "Blue") {
                            StateAutoMine = true;
                            
                            button30.setText(Texts.automine + " | " + Texts.on);
                            button30.setTextColor(android.graphics.Color.BLUE);
                            button30.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button30.setTypeface(mcpeFont);
                        } else if(StateAutoMine == true && theme == "Blue") {
                            StateAutoMine = false;
                            
                            button30.setText(Texts.automine + " | " + Texts.off);
                            button30.setTextColor(android.graphics.Color.WHITE);
                            button30.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button30.setTypeface(mcpeFont);
                        }
                    }
                }));
				
				var button31 = new android.widget.Button(ctx);
                if(StateTapRemover == false && theme == "Alternative") {
                    button31 = new android.widget.Button(ctx);
                    button31.setText(Texts.tapremover + " | " + Texts.off);
                    button31.setBackgroundColor(android.graphics.Color.RED);
                } else if(StateTapRemover == true && theme == "Alternative") {
                    button31 = new android.widget.Button(ctx);
                    button31.setText(Texts.tapremover + " | " + Texts.on);
                    button31.setBackgroundColor(android.graphics.Color.GREEN);
                } else if(StateTapRemover == false && theme == "MCPE") {
                    button31 = minecraftButton(Texts.tapremover + " | " + Texts.off);
                    //button31.setTypeface(mcpeFont);
                    //button31.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(StateTapRemover == true && theme == "MCPE") {
                    button31 = minecraftButton(Texts.tapremover + " | " + Texts.on);
                    //button31.setTypeface(mcpeFont);
                    //button31.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(StateTapRemover == false && theme == "Blue") {
                    button31 = new android.widget.Button(ctx);
                    button31.setText(Texts.tapremover + " | " + Texts.off);
                    button31.setTextColor(android.graphics.Color.WHITE);
                    button31.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button31.setTypeface(mcpeFont);
                } else if(StateTapRemover == true && theme == "Blue") {
                    button31 = new android.widget.Button(ctx);
                    button31.setText(Texts.tapremover + " | " + Texts.on);
                    button31.setTextColor(android.graphics.Color.BLUE);
                    button31.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    button31.setTypeface(mcpeFont);
                }

                button31.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(StateTapRemover == false && theme == "Alternative") {
                            StateTapRemover = true;
                            
                            button31.setText(Texts.tapremover + " | " + Texts.on);
                            button31.setBackgroundColor(android.graphics.Color.GREEN);
                        } else if(StateTapRemover == true && theme == "Alternative") {
                            StateTapRemover = false;
                            
                            button31.setText(Texts.tapremover + " | " + Texts.off);
                            button31.setBackgroundColor(android.graphics.Color.RED);
                        } else if(StateTapRemover == false && theme == "MCPE") {
                            StateTapRemover = true;
                            
                            button31.setText(Texts.tapremover + " | " + Texts.on);
                            //button31.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(StateTapRemover == true && theme == "MCPE") {
                            StateTapRemover = false;
                            
                            button31.setText(Texts.tapremover + " | " + Texts.off);
                            //button31.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(StateTapRemover == false && theme == "Blue") {
                            StateTapRemover = true;
                            
                            button31.setText(Texts.tapremover + " | " + Texts.on);
                            button31.setTextColor(android.graphics.Color.BLUE);
                            button31.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button31.setTypeface(mcpeFont);
                        } else if(StateTapRemover == true && theme == "Blue") {
                            StateTapRemover = false;
                            
                            button31.setText(Texts.tapremover + " | " + Texts.off);
                            button31.setTextColor(android.graphics.Color.WHITE);
                            button31.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            button31.setTypeface(mcpeFont);
                        }
                    }
                }));

                var dividerViewer = new android.widget.ImageView(ctx);
                dividerViewer.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(divider, 0, divider.length));

                var funTitle = new android.widget.TextView(ctx);
                funTitle.setTextSize(12);
                funTitle.setText("\n" + Texts.fun); //Title
                //funTitle.setTypeface(mcpeFont);
                funTitle.setTextColor(android.graphics.Color.WHITE); //Color
                funTitle.setGravity(android.view.Gravity.CENTER);
                if(theme == "Blue") {
                    funTitle.setTypeface(mcpeFont);
                    funTitle.setTextColor(android.graphics.Color.WHITE);
                    if(android.os.Build.VERSION.SDK_INT > 19) { // KITKAT
                        funTitle.setShadowLayer(1, Math.round(funTitle.getLineHeight() / 8), Math.round(funTitle.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    } else {
                        funTitle.setShadowLayer(0.0001, Math.round(funTitle.getLineHeight() / 8), Math.round(funTitle.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    }
                }

                var twerkButton = new android.widget.Button(ctx);
                if(StateTwerk == false && theme == "Alternative") {
                    twerkButton = new android.widget.Button(ctx);
                    twerkButton.setText("Twerk | " + Texts.off);
                    twerkButton.setBackgroundColor(android.graphics.Color.RED);
                } else if(StateTwerk == true && theme == "Alternative") {
                    twerkButton = new android.widget.Button(ctx);
                    twerkButton.setText("Twerk | " + Texts.on);
                    twerkButton.setBackgroundColor(android.graphics.Color.GREEN);
                } else if(StateTwerk == false && theme == "MCPE") {
                    twerkButton = minecraftButton("Twerk | " + Texts.off);
                    //twerkButton.setTypeface(mcpeFont);
                    //twerkButton.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(StateTwerk == true && theme == "MCPE") {
                    twerkButton = minecraftButton("Twerk | " + Texts.on);
                    //twerkButton.setTypeface(mcpeFont);
                    //twerkButton.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(StateTwerk == false && theme == "Blue") {
                    twerkButton = new android.widget.Button(ctx);
                    twerkButton.setText("Twerk | " + Texts.off);
                    twerkButton.setTextColor(android.graphics.Color.WHITE);
                    twerkButton.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    twerkButton.setTypeface(mcpeFont);
                } else if(StateTwerk == true && theme == "Blue") {
                    twerkButton = new android.widget.Button(ctx);
                    twerkButton.setText("Twerk | " + Texts.on);
                    twerkButton.setTextColor(android.graphics.Color.BLUE);
                    twerkButton.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    twerkButton.setTypeface(mcpeFont);
                }

                twerkButton.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(StateTwerk == false && theme == "Alternative") {
                            StateTwerk = true;
                            twerkCounter = 1;
                            
                            twerkButton.setText("Twerk | " + Texts.on);
                            twerkButton.setBackgroundColor(android.graphics.Color.GREEN);
                        } else if(StateTwerk == true && theme == "Alternative") {
                            StateTwerk = false;
                            twerkCounter = 0;
                            
                            if(State6 == true) {
                                Entity.setSneaking(Player.getEntity(), 1);
                            } else if(State6 == false) {
                                Entity.setSneaking(Player.getEntity(), 0);
                            }
                            twerkButton.setText("Twerk | " + Texts.off);
                            twerkButton.setBackgroundColor(android.graphics.Color.RED);
                        } else if(StateTwerk == false && theme == "MCPE") {
                            StateTwerk = true;
                            twerkCounter = 1;
                            
                            twerkButton.setText("Twerk | " + Texts.on);
                            //twerkButton.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(StateTwerk == true && theme == "MCPE") {
                            StateTwerk = false;
                            twerkCounter = 0;
                            
                            if(State6 == true) {
                                Entity.setSneaking(Player.getEntity(), 1);
                            } else if(State6 == false) {
                                Entity.setSneaking(Player.getEntity(), 0);
                            }
                            twerkButton.setText("Twerk | " + Texts.off);
                            //twerkButton.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(StateTwerk == false && theme == "Blue") {
                            StateTwerk = true;
                            twerkCounter = 1;
                            
                            twerkButton.setText("Twerk | " + Texts.on);
                            twerkButton.setTextColor(android.graphics.Color.BLUE);
                            twerkButton.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            twerkButton.setTypeface(mcpeFont);
                        } else if(StateTwerk == true && theme == "Blue") {
                            StateTwerk = false;
                            twerkCounter = 0;
                            
                            if(State6 == true) {
                                Entity.setSneaking(Player.getEntity(), 1);
                            } else if(State6 == false) {
                                Entity.setSneaking(Player.getEntity(), 0);
                            }
                            twerkButton.setText("Twerk | " + Texts.off);
                            twerkButton.setTextColor(android.graphics.Color.WHITE);
                            twerkButton.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            twerkButton.setTypeface(mcpeFont);
                        }
                    }
                }));

                var derpButton = new android.widget.Button(ctx);
                if(StateDerp == false && theme == "Alternative") {
                    derpButton = new android.widget.Button(ctx);
                    derpButton.setText("Derp | " + Texts.off);
                    derpButton.setBackgroundColor(android.graphics.Color.RED);
                } else if(StateDerp == true && theme == "Alternative") {
                    derpButton = new android.widget.Button(ctx);
                    derpButton.setText("Derp | " + Texts.on);
                    derpButton.setBackgroundColor(android.graphics.Color.GREEN);
                } else if(StateDerp == false && theme == "MCPE") {
                    derpButton = minecraftButton("Derp | " + Texts.off);
                    //derpButton.setTypeface(mcpeFont);
                    //derpButton.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(StateDerp == true && theme == "MCPE") {
                    derpButton = minecraftButton("Derp | " + Texts.on);
                    //derpButton.setTypeface(mcpeFont);
                    //derpButton.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(StateDerp == false && theme == "Blue") {
                    derpButton = new android.widget.Button(ctx);
                    derpButton.setText("Derp | " + Texts.off);
                    derpButton.setTextColor(android.graphics.Color.WHITE);
                    derpButton.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    derpButton.setTypeface(mcpeFont);
                } else if(StateDerp == true && theme == "Blue") {
                    derpButton = new android.widget.Button(ctx);
                    derpButton.setText("Derp | " + Texts.on);
                    derpButton.setTextColor(android.graphics.Color.BLUE);
                    derpButton.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    derpButton.setTypeface(mcpeFont);
                }

                derpButton.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(StateDerp == false && theme == "Alternative") {
                            StateDerp = true;
                            
                            derpButton.setText("Derp | " + Texts.on);
                            derpButton.setBackgroundColor(android.graphics.Color.GREEN);
                        } else if(StateDerp == true && theme == "Alternative") {
                            StateDerp = false;
                            
                            derpButton.setText("Derp | " + Texts.off);
                            derpButton.setBackgroundColor(android.graphics.Color.RED);
                        } else if(StateDerp == false && theme == "MCPE") {
                            StateDerp = true;
                            
                            derpButton.setText("Derp | " + Texts.on);
                            //derpButton.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(StateDerp == true && theme == "MCPE") {
                            StateDerp = false;
                            
                            derpButton.setText("Derp | " + Texts.off);
                            //derpButton.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(StateDerp == false && theme == "Blue") {
                            StateDerp = true;
                            
                            derpButton.setText("Derp | " + Texts.on);
                            derpButton.setTextColor(android.graphics.Color.BLUE);
                            derpButton.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            derpButton.setTypeface(mcpeFont);
                        } else if(StateDerp == true && theme == "Blue") {
                            StateDerp = false;
                            
                            derpButton.setText("Derp | " + Texts.off);
                            derpButton.setTextColor(android.graphics.Color.WHITE);
                            derpButton.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            derpButton.setTypeface(mcpeFont);
                        }
                    }
                }));
				
				var trailsButton = new android.widget.Button(ctx);
                if(StateTrails == false && theme == "Alternative") {
                    trailsButton = new android.widget.Button(ctx);
                    trailsButton.setText("Trails | " + Texts.off);
                    trailsButton.setBackgroundColor(android.graphics.Color.RED);
                } else if(StateTrails == true && theme == "Alternative") {
                    trailsButton = new android.widget.Button(ctx);
                    trailsButton.setText("Trails | " + Texts.on);
                    trailsButton.setBackgroundColor(android.graphics.Color.GREEN);
                } else if(StateTrails == false && theme == "MCPE") {
                    trailsButton = minecraftButton("Trails | " + Texts.off);
                    //trailsButton.setTypeface(mcpeFont);
                    //trailsButton.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(StateTrails == true && theme == "MCPE") {
                    trailsButton = minecraftButton("Trails | " + Texts.on);
                    //trailsButton.setTypeface(mcpeFont);
                    //trailsButton.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(StateTrails == false && theme == "Blue") {
                    trailsButton = new android.widget.Button(ctx);
                    trailsButton.setText("Trails | " + Texts.off);
                    trailsButton.setTextColor(android.graphics.Color.WHITE);
                    trailsButton.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    trailsButton.setTypeface(mcpeFont);
                } else if(StateTrails == true && theme == "Blue") {
                    trailsButton = new android.widget.Button(ctx);
                    trailsButton.setText("Trails | " + Texts.on);
                    trailsButton.setTextColor(android.graphics.Color.BLUE);
                    trailsButton.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    trailsButton.setTypeface(mcpeFont);
                }

                trailsButton.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(StateTrails == false && theme == "Alternative") {
                            StateTrails = true;
                            
                            trailsButton.setText("Trails | " + Texts.on);
                            trailsButton.setBackgroundColor(android.graphics.Color.GREEN);
                        } else if(StateTrails == true && theme == "Alternative") {
                            StateTrails = false;
                            
                            trailsButton.setText("Trails | " + Texts.off);
                            trailsButton.setBackgroundColor(android.graphics.Color.RED);
                        } else if(StateTrails == false && theme == "MCPE") {
                            StateTrails = true;
                            
                            trailsButton.setText("Trails | " + Texts.on);
                            //trailsButton.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(StateTrails == true && theme == "MCPE") {
                            StateTrails = false;
                            
                            trailsButton.setText("Trails | " + Texts.off);
                            //trailsButton.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(StateTrails == false && theme == "Blue") {
                            StateTrails = true;
                            
                            trailsButton.setText("Trails | " + Texts.on);
                            trailsButton.setTextColor(android.graphics.Color.BLUE);
                            trailsButton.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            trailsButton.setTypeface(mcpeFont);
                        } else if(StateTrails == true && theme == "Blue") {
                            StateTrails = false;
                            
                            trailsButton.setText("Trails | " + Texts.off);
                            trailsButton.setTextColor(android.graphics.Color.WHITE);
                            trailsButton.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            trailsButton.setTypeface(mcpeFont);
                        }
                    }
                }));

                var dividerViewer1 = new android.widget.ImageView(ctx);
                dividerViewer1.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(divider, 0, divider.length));

                var cheatsTitle = new android.widget.TextView(ctx);
                cheatsTitle.setTextSize(12);
                cheatsTitle.setText("\n" + Texts.cheats); //Title
                //cheatsTitle.setTypeface(mcpeFont);
                cheatsTitle.setTextColor(android.graphics.Color.WHITE); //Color
                cheatsTitle.setGravity(android.view.Gravity.CENTER);
                if(theme == "Blue") {
                    cheatsTitle.setTypeface(mcpeFont);
                    cheatsTitle.setTextColor(android.graphics.Color.WHITE);
                    if(android.os.Build.VERSION.SDK_INT > 19) { // KITKAT
                        cheatsTitle.setShadowLayer(1, Math.round(cheatsTitle.getLineHeight() / 8), Math.round(cheatsTitle.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    } else {
                        cheatsTitle.setShadowLayer(0.0001, Math.round(cheatsTitle.getLineHeight() / 8), Math.round(cheatsTitle.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    }
                }



                var cheatsButton1 = new android.widget.Button(ctx);
                if(theme == "Alternative") {
                    cheatsButton1 = new android.widget.Button(ctx);
                    cheatsButton1.setText(Texts.add_item_to_inventory);
                    cheatsButton1.setBackgroundColor(android.graphics.Color.GRAY);
                } else if(theme == "MCPE") {
                    cheatsButton1 = minecraftButton(Texts.add_item_to_inventory);
                    //cheatsButton1.setTypeface(mcpeFont);
                    //cheatsButton1.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(theme == "Blue") {
                    cheatsButton1 = new android.widget.Button(ctx);
                    cheatsButton1.setText(Texts.add_item_to_inventory);
                    cheatsButton1.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    cheatsButton1.setTypeface(mcpeFont);
                }
                cheatsButton1.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(theme == "Alternative") {
                            cheatsButton1.setText(Texts.add_item_to_inventory);
                            cheatsButton1.setBackgroundColor(android.graphics.Color.GRAY);
                        } else if(theme == "MCPE") {
                            cheatsButton1.setText(Texts.add_item_to_inventory);
                            //cheatsButton1.setTypeface(mcpeFont);
                            //cheatsButton1.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(theme == "Blue") {
                            cheatsButton1.setText(Texts.add_item_to_inventory);
                            cheatsButton1.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            cheatsButton1.setTypeface(mcpeFont);
                        }
                        openMenu("additem");
                    }
                }));


                var cheatsButton2 = new android.widget.Button(ctx);
                if(theme == "Alternative") {
                    cheatsButton2 = new android.widget.Button(ctx);
                    cheatsButton2.setText(Texts.gamemode);
                    cheatsButton2.setBackgroundColor(android.graphics.Color.GRAY);
                } else if(theme == "MCPE") {
                    cheatsButton2 = minecraftButton(Texts.gamemode);
                    //cheatsButton2.setTypeface(mcpeFont);
                    //cheatsButton2.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(theme == "Blue") {
                    cheatsButton2 = new android.widget.Button(ctx);
                    cheatsButton2.setText(Texts.gamemode);
                    cheatsButton2.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    cheatsButton2.setTypeface(mcpeFont);
                }

                cheatsButton2.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(theme == "Alternative") {
                            cheatsButton2.setText(Texts.gamemode);
                            cheatsButton2.setBackgroundColor(android.graphics.Color.GRAY);
                        } else if(theme == "MCPE") {
                            cheatsButton2.setText(Texts.gamemode);
                            //cheatsButton2.setTypeface(mcpeFont);
                            //cheatsButton2.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(theme == "Blue") {
                            cheatsButton2.setText(Texts.gamemode);
                            cheatsButton2.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            cheatsButton2.setTypeface(mcpeFont);
                        }
                        openMenu("gamemode");
                    }
                }));


                var cheatsButton3 = new android.widget.Button(ctx);
                if(theme == "Alternative") {
                    cheatsButton3 = new android.widget.Button(ctx);
                    cheatsButton3.setText(Texts.time);
                    cheatsButton3.setBackgroundColor(android.graphics.Color.GRAY);
                } else if(theme == "MCPE") {
                    cheatsButton3 = minecraftButton(Texts.time);
                    //cheatsButton3.setTypeface(mcpeFont);
                    //cheatsButton3.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(theme == "Blue") {
                    cheatsButton3 = new android.widget.Button(ctx);
                    cheatsButton3.setText(Texts.time);
                    cheatsButton3.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    cheatsButton3.setTypeface(mcpeFont);
                }

                cheatsButton3.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(theme == "Alternative") {
                            cheatsButton3.setText(Texts.time);
                            cheatsButton3.setBackgroundColor(android.graphics.Color.GRAY);
                        } else if(theme == "MCPE") {
                            cheatsButton3.setText(Texts.time);
                            //cheatsButton3.setTypeface(mcpeFont);
                            //cheatsButton3.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(theme == "Blue") {
                            cheatsButton3.setText(Texts.time);
                            cheatsButton3.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            cheatsButton3.setTypeface(mcpeFont);
                        }
                        openMenu("time");
                    }
                }));


                var cheatsButton4 = new android.widget.Button(ctx);
                if(theme == "Alternative") {
                    cheatsButton4 = new android.widget.Button(ctx);
                    cheatsButton4.setText(Texts.health);
                    cheatsButton4.setBackgroundColor(android.graphics.Color.GRAY);
                } else if(theme == "MCPE") {
                    cheatsButton4 = minecraftButton(Texts.health);
                    //cheatsButton4.setTypeface(mcpeFont);
                    //cheatsButton4.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(theme == "Blue") {
                    cheatsButton4 = new android.widget.Button(ctx);
                    cheatsButton4.setText(Texts.health);
                    cheatsButton4.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    cheatsButton4.setTypeface(mcpeFont);
                }

                cheatsButton4.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(theme == "Alternative") {
                            cheatsButton4.setText(Texts.health);
                            cheatsButton4.setBackgroundColor(android.graphics.Color.GRAY);
                        } else if(theme == "MCPE") {
                            cheatsButton4.setText(Texts.health);
                            //cheatsButton4.setTypeface(mcpeFont);
                            //cheatsButton4.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(theme == "Blue") {
                            cheatsButton4.setText(Texts.health);
                            cheatsButton4.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            cheatsButton4.setTypeface(mcpeFont);
                        }
                        openMenu("health");
                    }
                }));


                var cheatsButton5 = new android.widget.Button(ctx);
                if(theme == "Alternative") {
                    cheatsButton5 = new android.widget.Button(ctx);
                    cheatsButton5.setText(Texts.effects);
                    cheatsButton5.setBackgroundColor(android.graphics.Color.GRAY);
                } else if(theme == "MCPE") {
                    cheatsButton5 = minecraftButton(Texts.effects);
                    //cheatsButton5.setTypeface(mcpeFont);
                    //cheatsButton5.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(theme == "Blue") {
                    cheatsButton5 = new android.widget.Button(ctx);
                    cheatsButton5.setText(Texts.effects);
                    cheatsButton5.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    cheatsButton5.setTypeface(mcpeFont);
                }

                cheatsButton5.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(theme == "Alternative") {
                            cheatsButton5.setText(Texts.effects);
                            cheatsButton5.setBackgroundColor(android.graphics.Color.GRAY);
                        } else if(theme == "MCPE") {
                            cheatsButton5.setText(Texts.effects);
                            //cheatsButton5.setTypeface(mcpeFont);
                            //cheatsButton5.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(theme == "Blue") {
                            cheatsButton5.setText(Texts.effects);
                            cheatsButton5.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            cheatsButton5.setTypeface(mcpeFont);
                        }
                        openMenu("effects");
                    }
                }));

                var cheatsButton6 = new android.widget.Button(ctx);
                if(theme == "Alternative") {
                    cheatsButton6 = new android.widget.Button(ctx);
                    cheatsButton6.setText(Texts.teleport);
                    cheatsButton6.setBackgroundColor(android.graphics.Color.GRAY);
                } else if(theme == "MCPE") {
                    cheatsButton6 = minecraftButton(Texts.teleport);
                    //cheatsButton6.setTypeface(mcpeFont);
                    //cheatsButton6.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(theme == "Blue") {
                    cheatsButton6 = new android.widget.Button(ctx);
                    cheatsButton6.setText(Texts.teleport);
                    cheatsButton6.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    cheatsButton6.setTypeface(mcpeFont);
                }

                cheatsButton6.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(theme == "Alternative") {
                            cheatsButton6.setText(Texts.teleport);
                            cheatsButton6.setBackgroundColor(android.graphics.Color.GRAY);
                        } else if(theme == "MCPE") {
                            cheatsButton6.setText(Texts.teleport);
                            //cheatsButton6.setTypeface(mcpeFont);
                            //cheatsButton6.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(theme == "Blue") {
                            cheatsButton6.setText(Texts.teleport);
                            cheatsButton6.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            cheatsButton6.setTypeface(mcpeFont);
                        }
                        openMenu("teleport");
                    }
                }));

                var cheatsButton7 = new android.widget.Button(ctx);
                if(theme == "Alternative") {
                    cheatsButton7 = new android.widget.Button(ctx);
                    cheatsButton7.setText(Texts.clear_inventory);
                    cheatsButton7.setBackgroundColor(android.graphics.Color.GRAY);
                } else if(theme == "MCPE") {
                    cheatsButton7 = minecraftButton(Texts.clear_inventory);
                    //cheatsButton7.setTypeface(mcpeFont);
                    //cheatsButton7.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(theme == "Blue") {
                    cheatsButton7 = new android.widget.Button(ctx);
                    cheatsButton7.setText(Texts.clear_inventory);
                    cheatsButton7.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    cheatsButton7.setTypeface(mcpeFont);
                }

                cheatsButton7.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(theme == "Alternative") {
                            cheatsButton7.setText(Texts.clear_inventory);
                            cheatsButton7.setBackgroundColor(android.graphics.Color.GRAY);
                        } else if(theme == "MCPE") {
                            cheatsButton7.setText(Texts.clear_inventory);
                            //cheatsButton7.setTypeface(mcpeFont);
                            //cheatsButton7.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(theme == "Blue") {
                            cheatsButton7.setText(Texts.clear_inventory);
                            cheatsButton7.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            cheatsButton7.setTypeface(mcpeFont);
                        }
                        for(var i = 0; i < 37; i++) {
                            Player.clearInventorySlot(i);
                        }
                    }
                }));
				
				var cheatsButton8 = new android.widget.Button(ctx);
                if(theme == "Alternative") {
                    cheatsButton8 = new android.widget.Button(ctx);
                    cheatsButton8.setText(Texts.add_experience);
                    cheatsButton8.setBackgroundColor(android.graphics.Color.GRAY);
                } else if(theme == "MCPE") {
                    cheatsButton8 = minecraftButton(Texts.add_experience);
                    //cheatsButton8.setTypeface(mcpeFont);
                    //cheatsButton8.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(theme == "Blue") {
                    cheatsButton8 = new android.widget.Button(ctx);
                    cheatsButton8.setText(Texts.add_experience);
                    cheatsButton8.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    cheatsButton8.setTypeface(mcpeFont);
                }

                cheatsButton8.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(theme == "Alternative") {
                            cheatsButton8.setText(Texts.add_experience);
                            cheatsButton8.setBackgroundColor(android.graphics.Color.GRAY);
                        } else if(theme == "MCPE") {
                            cheatsButton8.setText(Texts.add_experience);
                            //cheatsButton8.setTypeface(mcpeFont);
                            //cheatsButton8.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(theme == "Blue") {
                            cheatsButton8.setText(Texts.add_experience);
                            cheatsButton8.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            cheatsButton8.setTypeface(mcpeFont);
                        }
                        openMenu("exp");
                    }
                }));
				
				var cheatsButton9 = new android.widget.Button(ctx);
                if(theme == "Alternative") {
                    cheatsButton9 = new android.widget.Button(ctx);
                    cheatsButton9.setText(Texts.weather);
                    cheatsButton9.setBackgroundColor(android.graphics.Color.GRAY);
                } else if(theme == "MCPE") {
                    cheatsButton9 = minecraftButton(Texts.weather);
                    //cheatsButton9.setTypeface(mcpeFont);
                    //cheatsButton9.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(theme == "Blue") {
                    cheatsButton9 = new android.widget.Button(ctx);
                    cheatsButton9.setText(Texts.weather);
                    cheatsButton9.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    cheatsButton9.setTypeface(mcpeFont);
                }

                cheatsButton9.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(theme == "Alternative") {
                            cheatsButton9.setText(Texts.weather);
                            cheatsButton9.setBackgroundColor(android.graphics.Color.GRAY);
                        } else if(theme == "MCPE") {
                            cheatsButton9.setText(Texts.weather);
                            //cheatsButton9.setTypeface(mcpeFont);
                            //cheatsButton9.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(theme == "Blue") {
                            cheatsButton9.setText(Texts.weather);
                            cheatsButton9.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            cheatsButton9.setTypeface(mcpeFont);
                        }
                        openMenu("weather");
                    }
                }));
				
				var cheatsButton10 = new android.widget.Button(ctx);
                if(theme == "Alternative") {
                    cheatsButton10 = new android.widget.Button(ctx);
                    cheatsButton10.setText(Texts.home);
                    cheatsButton10.setBackgroundColor(android.graphics.Color.GRAY);
                } else if(theme == "MCPE") {
                    cheatsButton10 = minecraftButton(Texts.home);
                    //cheatsButton10.setTypeface(mcpeFont);
                    //cheatsButton10.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(theme == "Blue") {
                    cheatsButton10 = new android.widget.Button(ctx);
                    cheatsButton10.setText(Texts.home);
                    cheatsButton10.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    cheatsButton10.setTypeface(mcpeFont);
                }

                cheatsButton10.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(theme == "Alternative") {
                            cheatsButton10.setText(Texts.home);
                            cheatsButton10.setBackgroundColor(android.graphics.Color.GRAY);
                        } else if(theme == "MCPE") {
                            cheatsButton10.setText(Texts.home);
                            //cheatsButton10.setTypeface(mcpeFont);
                            //cheatsButton10.setBackgroundDrawable(mcpeButtonOldImage);
                        } else if(theme == "Blue") {
                            cheatsButton10.setText(Texts.home);
                            cheatsButton10.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                            cheatsButton10.setTypeface(mcpeFont);
                        }
                        openMenu("home");
                    }
                }));

                var dividerViewer2 = new android.widget.ImageView(ctx);
                dividerViewer2.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(divider, 0, divider.length));

                var miscTitle = new android.widget.TextView(ctx);
                miscTitle.setTextSize(12);
                miscTitle.setText("\n" + Texts.misc); //Title
                miscTitle.setTextColor(android.graphics.Color.WHITE); //Color
                miscTitle.setGravity(android.view.Gravity.CENTER);
                if(theme == "Blue") {
                    miscTitle.setTypeface(mcpeFont);
                    miscTitle.setTextColor(android.graphics.Color.WHITE);
                    if(android.os.Build.VERSION.SDK_INT > 19) { // KITKAT
                        miscTitle.setShadowLayer(1, Math.round(miscTitle.getLineHeight() / 8), Math.round(miscTitle.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    } else {
                        miscTitle.setShadowLayer(0.0001, Math.round(miscTitle.getLineHeight() / 8), Math.round(miscTitle.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    }
                }



                var miscButton1 = new android.widget.Button(ctx);
                if(theme == "Alternative") {
                    miscButton1 = new android.widget.Button(ctx);
                    miscButton1.setText(Texts.player_customizer);
                    miscButton1.setBackgroundColor(android.graphics.Color.GRAY);
                } else if(theme == "MCPE") {
                    miscButton1 = minecraftButton(Texts.player_customizer);
                    //miscButton1.setTypeface(mcpeFont);
                    //miscButton1.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(theme == "Blue") {
                    miscButton1 = new android.widget.Button(ctx);
                    miscButton1.setText(Texts.player_customizer);
                    miscButton1.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    miscButton1.setTypeface(mcpeFont);
                }

                miscButton1.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(theme == "Alternative") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            exitUI.dismiss(); //Close
                            menu.dismiss();
                            playerCustomizerScreen();
							header(Texts.player_customizer);
                            exitPlayerCustomizer();
                        } else if(theme == "MCPE") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            exitUI.dismiss(); //Close
                            menu.dismiss();
                            playerCustomizerScreen();
							header(Texts.player_customizer);
                            exitPlayerCustomizer();
                        } else if(theme == "Blue") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            exitUI.dismiss(); //Close
                            menu.dismiss();
                            playerCustomizerScreen();
							header(Texts.player_customizer);
                            exitPlayerCustomizer();
                        }
                    }
                }));
				
				var miscButton2 = new android.widget.Button(ctx);
                if(theme == "Alternative") {
                    miscButton2 = new android.widget.Button(ctx);
                    miscButton2.setText(Texts.webbrowser);
                    miscButton2.setBackgroundColor(android.graphics.Color.GRAY);
                } else if(theme == "MCPE") {
                    miscButton2 = minecraftButton(Texts.webbrowser);
                    //miscButton2.setTypeface(mcpeFont);
                    //miscButton2.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(theme == "Blue") {
                    miscButton2 = new android.widget.Button(ctx);
                    miscButton2.setText(Texts.webbrowser);
                    miscButton2.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    miscButton2.setTypeface(mcpeFont);
                }

                miscButton2.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(theme == "Alternative") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            exitUI.dismiss(); //Close
                            menu.dismiss();
                            openWebbrowser(defaultUrl);
							webbrowserButtons();
                        } else if(theme == "MCPE") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            exitUI.dismiss(); //Close
                            menu.dismiss();
                            openWebbrowser(defaultUrl);
							webbrowserButtons();
                        } else if(theme == "Blue") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            exitUI.dismiss(); //Close
                            menu.dismiss();
                            openWebbrowser(defaultUrl);
							webbrowserButtons();
                        }
                    }
                }));
				
				var miscButton3 = new android.widget.Button(ctx);
                if(theme == "Alternative") {
                    miscButton3 = new android.widget.Button(ctx);
                    miscButton3.setText(Texts.console);
                    miscButton3.setBackgroundColor(android.graphics.Color.GRAY);
                } else if(theme == "MCPE") {
                    miscButton3 = minecraftButton(Texts.console);
                    //miscButton3.setTypeface(mcpeFont);
                    //miscButton3.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(theme == "Blue") {
                    miscButton3 = new android.widget.Button(ctx);
                    miscButton3.setText(Texts.console);
                    miscButton3.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    miscButton3.setTypeface(mcpeFont);
                }

                miscButton3.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(theme == "Alternative") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            exitUI.dismiss(); //Close
                            menu.dismiss();
                            consoleScreen();
							exitConsole();
                        } else if(theme == "MCPE") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            exitUI.dismiss(); //Close
                            menu.dismiss();
                            consoleScreen();
							exitConsole();
                        } else if(theme == "Blue") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            exitUI.dismiss(); //Close
                            menu.dismiss();
                            consoleScreen();
							exitConsole();
                        }
                    }
                }));
				
				var miscButton4 = new android.widget.Button(ctx);
                if(theme == "Alternative") {
                    miscButton4 = new android.widget.Button(ctx);
                    miscButton4.setText(Texts.online_players_list);
                    miscButton4.setBackgroundColor(android.graphics.Color.GRAY);
                } else if(theme == "MCPE") {
                    miscButton4 = minecraftButton(Texts.online_players_list);
                    //miscButton4.setTypeface(mcpeFont);
                    //miscButton4.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(theme == "Blue") {
                    miscButton4 = new android.widget.Button(ctx);
                    miscButton4.setText(Texts.online_players_list);
                    miscButton4.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    miscButton4.setTypeface(mcpeFont);
                }

                miscButton4.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        if(theme == "Alternative") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            exitUI.dismiss(); //Close
                            menu.dismiss();
                            onlinePlayersListScreen();
                        } else if(theme == "MCPE") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            exitUI.dismiss(); //Close
                            menu.dismiss();
                            onlinePlayersListScreen();
                        } else if(theme == "Blue") {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            exitUI.dismiss(); //Close
                            menu.dismiss();
                            onlinePlayersListScreen();
                        }
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
                //menuLayout.addView(button6);
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
                if(experimentalFeatures == "on") {
                    menuLayout.addView(button17);
                    menuLayout.addView(button18);
                }
                menuLayout.addView(button19);
                menuLayout.addView(button20);
                menuLayout.addView(button21);
                menuLayout.addView(button22);
                menuLayout.addView(button23);
                menuLayout.addView(button24);
                menuLayout.addView(button25);
				menuLayout.addView(button26);
				menuLayout.addView(button27);
				menuLayout.addView(button28);
				menuLayout.addView(button29);
				menuLayout.addView(button30);
				menuLayout.addView(button31);
                if(theme == "Blue") {
                    menuLayout.addView(dividerViewer);
                }
                menuLayout.addView(funTitle);
                //menuLayout.addView(twerkButton);
                menuLayout.addView(derpButton);
                menuLayout.addView(trailsButton);
                if(theme == "Blue") {
                    menuLayout.addView(dividerViewer1);
                }
                menuLayout.addView(cheatsTitle);
                menuLayout.addView(cheatsButton1);
                menuLayout.addView(cheatsButton2);
                menuLayout.addView(cheatsButton3);
                menuLayout.addView(cheatsButton4);
                menuLayout.addView(cheatsButton5);
                menuLayout.addView(cheatsButton6);
                menuLayout.addView(cheatsButton7);
                menuLayout.addView(cheatsButton8);
                menuLayout.addView(cheatsButton9);
                menuLayout.addView(cheatsButton10);
                if(theme == "Blue") {
                    menuLayout.addView(dividerViewer2);
                }
                menuLayout.addView(miscTitle);
                menuLayout.addView(miscButton1);
                menuLayout.addView(miscButton2);
                //menuLayout.addView(miscButton3);
                //menuLayout.addView(miscButton4);

                var dividerViewer3 = new android.widget.ImageView(ctx);
                dividerViewer3.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(divider, 0, divider.length));
                if(theme == "Blue") {
                    menuLayout.addView(dividerViewer3);
                }

                var infoTitle = new android.widget.TextView(ctx);
                infoTitle.setTextSize(12);
                infoTitle.setText("\nInfo"); //Title
                infoTitle.setTextColor(android.graphics.Color.WHITE); //Color
                infoTitle.setGravity(android.view.Gravity.CENTER);
                if(theme == "Blue") {
                    infoTitle.setTypeface(mcpeFont);
                    infoTitle.setTextColor(android.graphics.Color.WHITE);
                    if(android.os.Build.VERSION.SDK_INT > 19) { // KITKAT
                        infoTitle.setShadowLayer(1, Math.round(infoTitle.getLineHeight() / 8), Math.round(infoTitle.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    } else {
                        infoTitle.setShadowLayer(0.0001, Math.round(infoTitle.getLineHeight() / 8), Math.round(infoTitle.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    }
                }

                menuLayout.addView(infoTitle);

                var settingsButton = new android.widget.Button(ctx);
                if(theme == "Alternative") {
                    settingsButton = new android.widget.Button(ctx);
                    settingsButton.setText("Settings");
                    settingsButton.setBackgroundColor(android.graphics.Color.GRAY);
                } else if(theme == "MCPE") {
                    settingsButton = minecraftButton("Settings");
                    //settingsButton.setTypeface(mcpeFont);
                    //settingsButton.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(theme == "Blue") {
                    settingsButton = new android.widget.Button(ctx);
                    settingsButton.setText("Settings");
                    settingsButton.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    settingsButton.setTypeface(mcpeFont);
                }
                settingsButton.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        exitUI.dismiss(); //Close
                        menu.dismiss();
                        settingsScreen();
						header("Settings");
                        exitSettings();
                    }
                }));
                menuLayout.addView(settingsButton);

                var aboutButton = new android.widget.Button(ctx);
                if(theme == "Alternative") {
                    aboutButton = new android.widget.Button(ctx);
                    aboutButton.setText("About");
                    aboutButton.setBackgroundColor(android.graphics.Color.GRAY);
                } else if(theme == "MCPE") {
                    aboutButton = minecraftButton("About");
                    //aboutButton.setTypeface(mcpeFont);
                    //aboutButton.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(theme == "Blue") {
                    aboutButton = new android.widget.Button(ctx);
                    aboutButton.setText("About");
                    aboutButton.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    aboutButton.setTypeface(mcpeFont);
                }
                aboutButton.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        openMenu("about");
                    }
                }));
                menuLayout.addView(aboutButton);

                var changelogButton = new android.widget.Button(ctx);
                if(theme == "Alternative") {
                    changelogButton = new android.widget.Button(ctx);
                    changelogButton.setText("Changelog");
                    changelogButton.setBackgroundColor(android.graphics.Color.GRAY);
                } else if(theme == "MCPE") {
                    changelogButton = minecraftButton("Changelog");
                    //changelogButton.setTypeface(mcpeFont);
                    //changelogButton.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(theme == "Blue") {
                    changelogButton = new android.widget.Button(ctx);
                    changelogButton.setText("Changelog");
                    changelogButton.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    changelogButton.setTypeface(mcpeFont);
                }
                changelogButton.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        openMenu("changelog");
                    }
                }));
                menuLayout.addView(changelogButton);

                var updateButton = new android.widget.Button(ctx);
                if(theme == "Alternative") {
                    updateButton = new android.widget.Button(ctx);
                    updateButton.setText("Check for updates");
                    updateButton.setBackgroundColor(android.graphics.Color.GRAY);
                } else if(theme == "MCPE") {
                    updateButton = minecraftButton("Check for updates");
                    //updateButton.setTypeface(mcpeFont);
                    //updateButton.setBackgroundDrawable(mcpeButtonOldImage);
                } else if(theme == "Blue") {
                    updateButton = new android.widget.Button(ctx);
                    updateButton.setText("Check for updates");
                    updateButton.setBackgroundColor(android.graphics.Color.TRANSPARENT);
                    updateButton.setTypeface(mcpeFont);
                }
                updateButton.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        // check for updates
                        new java.lang.Thread(new java.lang.Runnable() {
                            run: function() {
                                MoreOptionsPE.getLatestVersion();
                                if(latestVersion != CURRENT_VERSION && latestVersion != undefined) {
                                    clientMessage(ChatColor.BLUE + "[AgameR MoreOptions PE]" + ChatColor.WHITE + " There is a new version available (v" + latestVersion + " for Minecraft Pocket Edition v" + latestPocketEditionVersion + ")!");
									MoreOptionsPE.showMessage("update", "There is a new version available (v" + latestVersion + " for Minecraft Pocket Edition v" + latestPocketEditionVersion + ")!");
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
                if(fullScreen == "off") {
                    menu = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth() / 2, ctx.getWindowManager().getDefaultDisplay().getHeight());
                } else if(fullScreen == "on") {
                    menu = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight());
                }

                if(theme == "Alternative") {
                    menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
                } else if(theme == "MCPE") {
                    menu.setBackgroundDrawable(blackTImage /*mcpeBackgroundImage*/ /*new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK)*/ );
                } else if(theme == "Blue") {
                    menu.setBackgroundDrawable(blackTImage /*mcpeBackgroundImage*/ /*new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK)*/ );
                }
                menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);

                /*var WindowManager = ctx.getSystemService(ctx.WINDOW_SERVICE);
                ctx.getWindow().addFlags(ctx.getWindowManager().LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
                ctx.getWindow().setStatusBarColor(android.graphics.Color.RED);*/
            } catch(error) {
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
                if(theme == "Alternative") {
                    xButton = new android.widget.Button(ctxe);
                    xButton.setText("X"); //Text
                } else if(theme == "MCPE") {
                    xButton = minecraftButtonX("X");
                } else if(theme == "Blue") {
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
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        exitUI.dismiss(); //Close
                        menu.dismiss(); //Close
						showHacksList();
						MoreOptionsPE.showMainButton();
                    }
                }));
                xLayout.addView(xButton);
                exitUI = new android.widget.PopupWindow(xLayout, dip2px(40), dip2px(40));
                exitUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                if(crossButtonPosition == "right") {
                    exitUI.showAtLocation(ctxe.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
                } else if(crossButtonPosition == "left") {
                    exitUI.showAtLocation(ctxe.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
                }
            } catch(exception) {
                print(exception);
            }
        }
    }));
}

function exitPlayerCustomizer() {
    var ctxe = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctxe.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var trailsPlayerCustomizerLayout = new android.widget.LinearLayout(ctxe);
                var xPlayerCustomizerLayout = new android.widget.LinearLayout(ctxe);
				var xPlayerCustomizerButton = minecraftButtonX("X");
                /*xButton.setOnTouchListener(new android.view.View.OnTouchListener({
                    onClick: function(viewarg) {
						if(theme == "MCPE"){
						xButton.setBackgroundDrawable(mcpeExitButtonPressedImage);
                    }
                }}));*/
                xPlayerCustomizerButton.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        exitPlayerCustomizerUI.dismiss(); //Close
						headerGUI.dismiss(); //Close
                        playerCustomizerMenu.dismiss(); //Close
						showHacksList();
						MoreOptionsPE.showMainButton();
                    }
                }));
                xPlayerCustomizerLayout.addView(xPlayerCustomizerButton);
                exitPlayerCustomizerUI = new android.widget.PopupWindow(xPlayerCustomizerLayout, dip2px(40), dip2px(40));
                exitPlayerCustomizerUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                exitPlayerCustomizerUI.showAtLocation(ctxe.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 10, 10);
            } catch(exception) {
                print(exception);
            }
        }
    }));
}

function exitSettings() {
    var ctxe = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctxe.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var xSettingsLayout = new android.widget.LinearLayout(ctxe);
                var xSettingsButton = new android.widget.Button(ctxe);
                if(theme == "Alternative") {
                    xSettingsButton = minecraftButtonX("X");
                } else if(theme == "MCPE") {
                    xSettingsButton = minecraftButtonX("X");
                } else if(theme == "Blue") {
                    xSettingsButton = minecraftButtonX("X");
                }
                /*xButton.setOnTouchListener(new android.view.View.OnTouchListener({
                    onClick: function(viewarg) {
						if(theme == "MCPE"){
						xButton.setBackgroundDrawable(mcpeExitButtonPressedImage);
                    }
                }}));*/
                xSettingsButton.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        exitSettingsUI.dismiss(); //Close
						headerGUI.dismiss(); //Close
                        settingsMenu.dismiss(); //Close
						showHacksList();
						MoreOptionsPE.showMainButton();
                    }
                }));
                xSettingsLayout.addView(xSettingsButton);
                exitSettingsUI = new android.widget.PopupWindow(xSettingsLayout, dip2px(40), dip2px(40));
                exitSettingsUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                exitSettingsUI.showAtLocation(ctxe.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 10, 10);
            } catch(exception) {
                print(exception);
            }
        }
    }));
}

function webbrowserButtons() {
    var ctxe = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctxe.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var xWebbrowserLayout = new android.widget.LinearLayout(ctxe);
                var reloadWebbrowserLayout = new android.widget.LinearLayout(ctxe);
				var loadWebbrowserLayout = new android.widget.LinearLayout(ctxe);
                var xWebbrowserButton = new android.widget.Button(ctxe);
                var reloadWebbrowserButton = new android.widget.Button(ctxe);
                var loadWebbrowserButton = new android.widget.Button(ctxe);
                xWebbrowserButton = new android.widget.Button(ctx);
				xWebbrowserButton.setBackgroundDrawable(closeButtonImage);
				xWebbrowserButton.setAlpha(0.54);
                reloadWebbrowserButton = new android.widget.Button(ctx);
				reloadWebbrowserButton.setBackgroundDrawable(reloadButtonImage);
				reloadWebbrowserButton.setAlpha(0.54);
				loadWebbrowserButton = new android.widget.Button(ctx);
				loadWebbrowserButton.setText("...");
				loadWebbrowserButton.setAlpha(0.54);
                /*xButton.setOnTouchListener(new android.view.View.OnTouchListener({
                    onClick: function(viewarg) {
						if(theme == "MCPE"){
						xButton.setBackgroundDrawable(mcpeExitButtonPressedImage);
                    }
                }}));*/
                xWebbrowserButton.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                        exitWebbrowserUI.dismiss(); //Close
                        reloadWebbrowserUI.dismiss(); //Close
                        loadWebbrowserUI.dismiss(); //Close
                        webbrowserMenu.dismiss(); //Close
						showHacksList();
						MoreOptionsPE.showMainButton();
                    }
                }));
				reloadWebbrowserButton.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
						webViewer.reload();
                        //print(webViewer.getUrl());
                    }
                }));
				loadWebbrowserButton.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
						openMenu("loadwebsite");
                        //print(webViewer.getUrl());
                    }
                }));
                xWebbrowserLayout.addView(xWebbrowserButton);
                reloadWebbrowserLayout.addView(reloadWebbrowserButton);
                loadWebbrowserLayout.addView(loadWebbrowserButton);
                exitWebbrowserUI = new android.widget.PopupWindow(xWebbrowserLayout, dip2px(40), dip2px(40));
                exitWebbrowserUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                exitWebbrowserUI.showAtLocation(ctxe.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
				reloadWebbrowserUI = new android.widget.PopupWindow(reloadWebbrowserLayout, dip2px(40), dip2px(40));
                reloadWebbrowserUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                reloadWebbrowserUI.showAtLocation(ctxe.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
				loadWebbrowserUI = new android.widget.PopupWindow(loadWebbrowserLayout, dip2px(40), dip2px(40));
                loadWebbrowserUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                loadWebbrowserUI.showAtLocation(ctxe.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP, 0, 0);
            } catch(exception) {
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
            } catch(exception) {
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
            } catch(exception) {
                //print(exception);
            };
        }
    }));
}

function closeMainMenuList() {
    var ctxe = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctxe.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                mainMenuTextList.dismiss(); //Close
            } catch(exception) {
                //print(exception);
            };
        }
    }));
}

function attackHook(attacker, victim) {
	var gamemode = Level.getGameMode();
	if(gamemode == 1) {
		if(spectator == "on") {
			preventDefault();
		}
	}
    if(State3 == true) {
        if(Player.getEntity() == attacker) {
            Entity.setFireTicks(victim, 9999);
        }
    }
    if(State10 == true) {
        if(Player.getEntity() == attacker) {
            setVelX(victim, 4);
            setVelY(victim, 2);
        }
    }
    if(State13 == true) {
        if(Player.getEntity() == attacker) {
            Entity.rideAnimal(attacker, victim);
            ModPE.showTipMessage("Tap Jump to jump off the entity");
        }
    }
    if(State16 == true) {
        if(Player.getEntity() == attacker) {
            Entity.setHealth(victim, 1);
        }
    }
	if(StateTapRemover == true) {
		if(Player.getEntity() == attacker) {
			Entity.remove(victim);
		}
    }
}

function modTick() {
    healthIndicators();
    var randomAki = Math.floor((Math.random() *  5));
    var xcoord = Player.getX();
    var ycoord = Player.getY();
    var zcoord = Player.getZ();
    if(State8 == true) {
        ModPE.showTipMessage("X: " + parseInt(xcoord) + " Y: " + parseInt(ycoord) + " Z: " + parseInt(zcoord));
    }
    if(State12 == true) {
        Level.setTime(1400);
    }
    if(State1 == true) {
        Player.setHealth(20);
    }
    if(State19 == true) {
        if(f == 1) {
            Xpos = getPlayerX();
            Zpos = getPlayerZ();
            f = f + 1;
        } else if(f == 3) {
            f = 1;
            Xdiff = getPlayerX() - Xpos;
            Zdiff = getPlayerZ() - Zpos;
            setVelX(getPlayerEnt(), Xdiff);
            setVelZ(getPlayerEnt(), Zdiff);
            Xdiff = 0;
            Zdiff = 0;
        }
        if(f != 1) {
            f = f + 1;

        }
    }
    if(State20 == true) {
        //JetPack
        var hit = getYaw() + 90;
        var hitY = getPitch() - 180;
        x = Math.cos(hit * (Math.PI / 180));
        y = Math.sin(hitY * (Math.PI / 180));
        z = Math.sin(hit * (Math.PI / 180));
        setVelX(Player.getEntity(), x * 1);
        setVelY(Player.getEntity(), y * 1);
        setVelZ(Player.getEntity(), z * 1);
    }
    if(State21 == true) {
        if(Player.isFlying() == false) {

            GetVY = Entity.getVelY(Player.getEntity())
            if(GetVY > 0.06) {

                Entity.setVelY(Player.getEntity(), 0.54);
                count++

            }




            if(count == 1) {
                Entity.setVelY(Player.getEntity(), 0.48);
            }



            if(count == 2) {
                Entity.setVelY(Player.getEntity(), 0.42);
            }


            if(count == 3) {
                Entity.setVelY(Player.getEntity(), 0.36);
            }

            if(count == 4) {
                Entity.setVelY(Player.getEntity(), 0.31);
            }



            if(count == 5) {
                Entity.setVelY(Player.getEntity(), 0.26);
            }

            if(count == 6) {
                Entity.setVelY(Player.getEntity(), 0.22);
            }


            if(count == 7) {
                Entity.setVelY(Player.getEntity(), -0.078);
                count = 0;
            }


        }
    }
    if(StateTwerk == true) {
        twerkCounter++
        if(twerkCounter == 6) {
            Entity.setSneaking(Player.getEntity(), 1);
        }
        if(twerkCounter == 11) {
            Entity.setSneaking(Player.getEntity(), 0);
            twerkCounter = 1;
        }
    }
    if(StateDerp == true) {
        var player = getPlayerEnt();
        var yaw = Math.floor(Entity.getYaw(player));
        var pitch = Math.floor(Entity.getPitch(player));
        Entity.setRot(player, yaw + 3, pitch);
    }
    if(State22 == true) {


        var mobs = Entity.getAll();

        for(var i = 0; i < mobs.length; i++)

        {

            var x = Entity.getX(mobs[i]) - getPlayerX();

            var y = Entity.getY(mobs[i]) - getPlayerY();

            var z = Entity.getZ(mobs[i]) - getPlayerZ();

            mobYaw = getYaw(mobs[i])

            if(Entity.getEntityTypeId(mobs[i]) == 63) {
                zahl = 0;
            }

            if(Entity.getEntityTypeId(mobs[i]) != 63) {
                zahl = 2;
            }

            if(x * x + y * y + z * z <= 4.5 * 4.5 && mobs[i] != getPlayerEnt())

            {

                if(randomAki == 1) {
                    Entity.setPosition(Player.getEntity(), Entity.getX(mobs[i]) - 2.75, Entity.getY(mobs[i]) + zahl, Entity.getZ(mobs[i]));

                    Entity.setRot(Player.getEntity(), 270, getPitch(Player.getEntity()));
                }


                if(randomAki == 2) {
                    Entity.setPosition(Player.getEntity(), Entity.getX(mobs[i]) + 2.75, Entity.getY(mobs[i]) + zahl, Entity.getZ(mobs[i]));

                    Entity.setRot(Player.getEntity(), 90, getPitch(Player.getEntity()));

                }


                if(randomAki == 3) {
                    Entity.setPosition(Player.getEntity(), Entity.getX(mobs[i]), Entity.getY(mobs[i]) + zahl, Entity.getZ(mobs[i]) + 2.75);

                    Entity.setRot(Player.getEntity(), 180, getPitch(Player.getEntity()));
                }

                if(randomAki == 4) {

                    Entity.setPosition(Player.getEntity(), Entity.getX(mobs[i]), Entity.getY(mobs[i]) + zahl, Entity.getZ(mobs[i]) - 2.75);

                    Entity.setRot(Player.getEntity(), 0, getPitch(Player.getEntity()));
                }
            }
        }
    }
    if(State23 == true) {
        setVelY(Player.getEntity(), -0.1);
    }
    if(State25 == true) {
        if(Level.getTile(getPlayerX(), getPlayerY() - 2, getPlayerZ()) == 8 || Level.getTile(getPlayerX(), getPlayerY() - 2, getPlayerZ()) == 9 || Level.getTile(getPlayerX(), getPlayerY() - 2, getPlayerZ()) == 10 || Level.getTile(getPlayerX(), getPlayerY() - 2, getPlayerZ()) == 10) {
            setVelY(Player.getEntity(), 0);
        }
    }if(State26 == true) {
        clientMessage(spamMessage);
        chatHook(spamMessage);
        Server.sendChat(spamMessage);
    }if(State27 == true) {
        if(Entity.getHealth(Player.getEntity()) < 1) {
			ModPE.leaveGame();
		}
    }if(State28 == true) {
        Player.setHunger(20);
    }if(StateAutoMine == true && ModPE.playerHasSplitControls() == "1") {
		Level.destroyBlock(Player.getPointedBlockX(), Player.getPointedBlockY(), Player.getPointedBlockZ());
	}if(StateTrails == true) {
        var x = Player.getX();
        var y = Player.getY();
        var z = Player.getZ();
        Level.addParticle(ParticleType.flame, x, y, z, 0, 0, 0, 1);
    }
    if(Entity.getHealth(Player.getEntity()) < 1) {
        State = false;
        State1 = false;
        State2 = false;
        if(Level.getGameMode == 1) {
            Player.setCanFly(1);
        } else if(Level.getGameMode == 0) {
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
        State22 = false;
        State23 = false;
        State24 = false;
        State25 = false;
        State26 = false;
        State27 = false;
		State28 = false;
		StatePowerExplosions = false;
		StateAutoMine = false;
		StateTapRemover = false;
        StateTwerk = false;
        StateDerp = false;
		StateTrails = false;
    }
}

ModPE.goToURL = function(url) {
    var ctx = getContext();
    var uri = android.net.Uri.parse(url);
    var intent = new android.content.Intent(android.content.Intent.ACTION_VIEW, uri);
    ctx.startActivity(intent);
};

ModPE.playerHasSplitControls = function() {
    var file = new java.io.File("/sdcard/games/com.mojang/minecraftpe/options.txt");
    var br = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(file)));
    var read, splitcontrols;
    while((read = br.readLine()) != null) {
        if(read.split(":")[0] == "ctrl_usetouchjoypad") {
            splitcontrols = read.split(":")[1];
            break;
        }
    }
    br.close();
    return splitcontrols;
};

var signX;
var signY;
var signZ;

function useItem(x, y, z, itemId, blockId) {
	var gamemode = Level.getGameMode();
    if(State5 == true) {
        clientMessage(spamMessage);
        chatHook(spamMessage);
        Server.sendChat(spamMessage);
    }
    if(State15 == true) {
        Entity.setPosition(Player.getEntity(), x, y + 3, z);
    }
    if(State17 == true) {
        if(blockId == 63 || blockId == 68) {
            signX = x;
            signY = y;
            signZ = z;
            openMenu("signeditor");
        }
    }
    if(State24 == true) {
        setTile(x, y, z, 0);
		setTile(x, y+1, z, 0);
		setTile(x, y-1, z, 0);
		setTile(x-1, y, z, 0);
		setTile(x+1, y, z, 0);
		setTile(x, y, z-1, 0);
		setTile(x, y, z+1, 0);
    }
	if(StateTapRemover == true) {
		preventDefault();
		setTile(x, y, z, 0);
	}
	if(gamemode == 1) {
		if(spectator == "on") {
			preventDefault();
		}
	}
}

var powerExplosionsStage = 0;

function explodeHook(entity, x, y, z, power, onFire) {
	if(StatePowerExplosions == true && powerExplosionsStage == 0) {
		powerExplosionsStage = 1;
		preventDefault();
		Level.explode(x, y, z, 10);
		powerExplosionsStage = 0;
	}
}

function addItemInv(itemId, amount, damage) {
    var gamemode = Level.getGameMode();
    if(gamemode == 0) {
        Player.addItemInventory(itemId, amount, damage);
    } else if(gamemode == 1) {
        Entity.setCarriedItem(Player.getEntity(), itemId, 1, damage);
    }
}

function openWebbrowser(url) {
	webViewer = new android.webkit.WebView(currentActivity);
	var webSettings = webViewer.getSettings();

	webSettings.setJavaScriptEnabled(true);
	webViewer.setWebChromeClient(new android.webkit.WebChromeClient());
	webViewer.setWebViewClient(new android.webkit.WebViewClient());

	webViewer.loadUrl(url);
	
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
				var display = new android.util.DisplayMetrics();
				com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
                /*var webbrowserMenuLayout = new android.widget.LinearLayout(ctx);
                var webbrowserMenuScroll = new android.widget.ScrollView(ctx);
                var webbrowserMenuLayout1 = new android.widget.LinearLayout(ctx);
                webbrowserMenuLayout.setOrientation(1);
                webbrowserMenuLayout1.setOrientation(1);
				webbrowserMenuLayout1.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels, display.heightPixels));
                webbrowserMenuScroll.addView(webbrowserMenuLayout);
                webbrowserMenuLayout1.addView(webbrowserMenuScroll);*/
                //--------Add Buttons-------//
                /*var newLineText = new android.widget.TextView(ctx);
                var authorText = new android.widget.TextView(ctx);
                var currentModVersionText = new android.widget.TextView(ctx);
                var targetMCPEVersionText = new android.widget.TextView(ctx);
                var MCPEVersionText = new android.widget.TextView(ctx);
                var newLine2Text = new android.widget.TextView(ctx);
                var aboutOkBtn = new android.widget.Button(ctx);*/
                var spritesheet = android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 0, 0, 16, 16), 16 * GuiSize, 16 * GuiSize, false);
                //webbrowserMenuLayout.addView(webViewer);
                /*newLineText.setText("\n");
					authorText.setText("Author : " + MOD_AUTHOR);
					currentModVersionText.setText("Current mod version : v" + CURRENT_VERSION);
					targetMCPEVersionText.setText("Target MCPE version : v" + targetMCPEVersion);
					MCPEVersionText.setText("Current MCPE version : v" + mcpeVersion);
					newLine2Text.setText("\n");
                    //btn.setText("Ok");*/

                //More buttons...
                webbrowserMenu = new android.widget.PopupWindow(webViewer, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight());
				webViewer.requestFocus(android.view.View.FOCUS_DOWN);
                webbrowserMenu.setBackgroundDrawable(getStretchedImage(spritesheet, 4 * GuiSize, 4 * GuiSize, 8 * GuiSize, 8 * GuiSize, getContext().getScreenWidth() / 2, getContext().getScreenHeight()));
                webbrowserMenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP, 0, 0);
            } catch(error) {
                print('An error occured: ' + error);
            }
        }
    }));
}

function openMenu(menu) {
    if(menu == "time") {
        ctx.runOnUiThread(new java.lang.Runnable() {
            run: function() {
                try {
                    dialogGUI = new android.widget.PopupWindow();
                    var btn = minecraftButton("Day");
                    var btn1 = minecraftButton("Night");
                    var btn2 = minecraftButton("Cancel");
                    var newLineTextView = minecraftText("\n");
                    var dialogLayout = new android.widget.LinearLayout(ctx);
                    var spritesheet = android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 0, 0, 16, 16), 16 * GuiSize, 16 * GuiSize, false);
                    dialogLayout.setBackgroundDrawable(getStretchedImage(spritesheet, 4 * GuiSize, 4 * GuiSize, 8 * GuiSize, 8 * GuiSize, getContext().getScreenWidth() / 2, getContext().getScreenHeight()));
                    dialogLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
                    dialogLayout.addView(btn);
                    dialogLayout.addView(btn1);
                    dialogLayout.addView(newLineTextView);
                    dialogLayout.addView(btn2);
                    var dialog = new android.app.Dialog(ctx);
                    dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
                    dialog.setContentView(dialogLayout);
                    dialog.setTitle(Texts.time);
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
                    btn2.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            dialog.dismiss();
                        }
                    });
                } catch(e) {
                    print("Error: " + e);
                }
            }
        });
		
	} else if(menu == "console") {
        ctx.runOnUiThread(new java.lang.Runnable() {
            run: function() {
                try {
                    dialogGUI = new android.widget.PopupWindow();
                    var btn = minecraftButton("Send");
                    var btn1 = minecraftButton("Close");
                    var inputBar = new android.widget.EditText(ctx);
                    var dialogLayout = new android.widget.LinearLayout(ctx);
                    var spritesheet = android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 0, 0, 16, 16), 16 * GuiSize, 16 * GuiSize, false);
                    dialogLayout.setBackgroundDrawable(getStretchedImage(spritesheet, 4 * GuiSize, 4 * GuiSize, 8 * GuiSize, 8 * GuiSize, getContext().getScreenWidth() / 2, getContext().getScreenHeight()));
                    dialogLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
                    dialogLayout.addView(inputBar);
                    dialogLayout.addView(btn);
                    dialogLayout.addView(btn1);
                    var dialog = new android.app.Dialog(ctx);
                    dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
                    dialog.setContentView(dialogLayout);
                    dialog.setTitle("Console");
                    inputBar.setHint("Console Input");
                    inputBar.setTypeface(mcpeFont);
                    if(android.os.Build.VERSION.SDK_INT > 19) { // KITKAT
                        inputBar.setShadowLayer(1, Math.round(inputBar.getLineHeight() / 8), Math.round(inputBar.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    } else {
                        inputBar.setShadowLayer(0.0001, Math.round(inputBar.getLineHeight() / 8), Math.round(inputBar.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    }
                    dialogGUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                    dialog.show();
                    btn.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            var consoleInputText = inputBar.getText();
                            chatHook(consoleInputText);
                            dialog.dismiss();
                        }
                    });
                    btn1.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            dialog.dismiss();
                        }
                    });
                } catch(e) {
                    print("Error: " + e)
                }
            }
        });
		
    } else if(menu == "exp") {
        ctx.runOnUiThread(new java.lang.Runnable() {
            run: function() {
                try {
                    dialogGUI = new android.widget.PopupWindow();
                    var btn = minecraftButton(Texts.add_experience);
                    var btn1 = minecraftButton("Cancel");
                    var inputBar = new android.widget.EditText(ctx);
                    inputBar.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
                    var dialogLayout = new android.widget.LinearLayout(ctx);
                    var spritesheet = android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 0, 0, 16, 16), 16 * GuiSize, 16 * GuiSize, false);
                    dialogLayout.setBackgroundDrawable(getStretchedImage(spritesheet, 4 * GuiSize, 4 * GuiSize, 8 * GuiSize, 8 * GuiSize, getContext().getScreenWidth() / 2, getContext().getScreenHeight()));
                    dialogLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
                    dialogLayout.addView(inputBar);
                    dialogLayout.addView(btn);
                    dialogLayout.addView(btn1);
                    var dialog = new android.app.Dialog(ctx);
                    dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
                    dialog.setContentView(dialogLayout);
                    dialog.setTitle(Texts.add_experience);
                    inputBar.setHint("Amount of experience");
                    inputBar.setTypeface(mcpeFont);
                    if(android.os.Build.VERSION.SDK_INT > 19) { // KITKAT
                        inputBar.setShadowLayer(1, Math.round(inputBar.getLineHeight() / 8), Math.round(inputBar.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    } else {
                        inputBar.setShadowLayer(0.0001, Math.round(inputBar.getLineHeight() / 8), Math.round(inputBar.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    }
                    dialogGUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                    dialog.show();
                    btn.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            var experienceAmount = inputBar.getText();
                            Player.addExp(experienceAmount);
                            dialog.dismiss();
                        }
                    });
                    btn1.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            dialog.dismiss();
                        }
                    });
                } catch(e) {
                    print("Error: " + e)
                }
            }
        });
    } else if(menu == "about") {
        ctx.runOnUiThread(new java.lang.Runnable() {
            run: function() {
                try {
                    dialogGUI = new android.widget.PopupWindow();
                    var aboutText = minecraftText("Thanks for using AgameR MoreOptions PE! Special thanks to Ethan061903 for betatesting, MyNameIsTriXz, RedstoneGunMade, AntiModPE, Desno365 and everyone else who helped with making this mod possible!");
                    var btn = minecraftButton("Ok");
                    var btn1 = minecraftButton("Follow @AgameR_Modder on Twitter");
                    var newLineTextView = minecraftText("\n");
                    var dialogLayout = new android.widget.LinearLayout(ctx);
                    var spritesheet = android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 0, 0, 16, 16), 16 * GuiSize, 16 * GuiSize, false);
                    dialogLayout.setBackgroundDrawable(getStretchedImage(spritesheet, 4 * GuiSize, 4 * GuiSize, 8 * GuiSize, 8 * GuiSize, getContext().getScreenWidth() / 2, getContext().getScreenHeight()));
                    dialogLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
                    dialogLayout.addView(newLineTextView);
                    dialogLayout.addView(aboutText);
                    dialogLayout.addView(btn);
                    dialogLayout.addView(btn1);
                    var dialog = new android.app.Dialog(ctx);
                    dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
                    dialog.setContentView(dialogLayout);
                    dialog.setTitle("About");
                    dialogGUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                    dialog.show();
                    btn.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            dialog.dismiss();
                        }
                    });
                    btn1.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            dialog.dismiss();
                            ModPE.goToURL("https://twitter.com/AgameR_Modder");
                        }
                    });
                } catch(e) {
                    print("Error: " + e)
                }
            }
        });

    } else if(menu == "changelog") {
        ctx.runOnUiThread(new java.lang.Runnable() {
            run: function() {
                try {
                    dialogGUI = new android.widget.PopupWindow();
                    var changelogText = minecraftText( /*"v1.0 Beta 1: Initial release | v1.0 Beta 2: Name changed to AgameR MoreOptions PE, new icon, added coords option, added better grass, added every item eatable, added changelog, improved some things | v1.0 Beta 3: Added themes, added sneaking, improved fly, fixed grass being unbreakable | "*/ /*"v1.0.0-pre: Added zoom, InstaMine, X-ray, cheats, knockback, 64 item drop, improved layout, added an update checker (thanks @desno365!), fixed some hacks and more | v1.0.0-pre2: Added Morph (not finished yet), finished the new theme called Blue, improved cheats, improved Better Grass, improved menu layout (added logo), fixed bugs, improved the update checker to support Android 5.1 (thanks @desno365!), settings now save and added more settings | v1.0.0: First official non-beta release! Added some more stuff ((Texts.drone + ", Parachute, Twerk and Derp), fixed glitches, fixed bugs, overall improvements, Morphing now works, SignEditor is not on the menu anymore (for now, as it currently crashes when trying to use it), all dialogs have the MCPE style now. | */ CURRENT_VERSION + ": " + MOD_CHANGELOG);
					changelogText.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
					changelogText.setMarqueeRepeatLimit(-1);
					changelogText.setSingleLine();
					changelogText.setHorizontallyScrolling(true);
					changelogText.setSelected(true);
					var btn = minecraftButton("Ok");
                    var btn1 = minecraftButton("Follow @AgameR_Modder on Twitter for updates");
                    var newLineTextView = minecraftText("\n");
                    var dialogLayout = new android.widget.LinearLayout(ctx);
                    var spritesheet = android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 0, 0, 16, 16), 16 * GuiSize, 16 * GuiSize, false);
                    dialogLayout.setBackgroundDrawable(getStretchedImage(spritesheet, 4 * GuiSize, 4 * GuiSize, 8 * GuiSize, 8 * GuiSize, getContext().getScreenWidth() / 2, getContext().getScreenHeight()));
                    dialogLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
                    dialogLayout.addView(newLineTextView);
                    dialogLayout.addView(changelogText);
                    dialogLayout.addView(btn);
                    dialogLayout.addView(btn1);
                    var dialog = new android.app.Dialog(ctx);
                    dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
                    dialog.setContentView(dialogLayout);
                    dialog.setTitle("About");
                    dialogGUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                    dialog.show();
                    btn.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            dialog.dismiss();
                        }
                    });
                    btn1.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            dialog.dismiss();
                            ModPE.goToURL("https://twitter.com/AgameR_Modder");
                        }
                    });
                } catch(e) {
                    print("Error: " + e)
                }
            }
        });

    } else if(menu == "modinfo") {
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
                    var spritesheet = android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 0, 0, 16, 16), 16 * GuiSize, 16 * GuiSize, false);
                    dialogLayout.setBackgroundDrawable(getStretchedImage(spritesheet, 4 * GuiSize, 4 * GuiSize, 8 * GuiSize, 8 * GuiSize, getContext().getScreenWidth() / 2, getContext().getScreenHeight()));
                    dialogLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
                    authorText.setGravity(android.view.Gravity.CENTER);
                    currentModVersionText.setGravity(android.view.Gravity.CENTER);
                    targetMCPEVersionText.setGravity(android.view.Gravity.CENTER);
                    MCPEVersionText.setGravity(android.view.Gravity.CENTER);
                    var paddingPixel = 25;
                    var density = ctx.getResources().getDisplayMetrics().density
                    var paddingDp = paddingPixel * density;
                    dialogLayout.setPadding(0, paddingDp, 0, 0);
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
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            dialog.dismiss();
                        }
                    });
                } catch(e) {
                    print("Error: " + e)
                }
            }
        });

    } else if(menu == "signeditor") {
        ctx.runOnUiThread(new java.lang.Runnable() {
            run: function() {
                try {
                    dialogGUI = new android.widget.PopupWindow();
                    var btn = minecraftButton("Ok");
                    var btn1 = minecraftButton("Cancel");
                    var inputBar = new android.widget.EditText(ctx);
                    var inputBar1 = new android.widget.EditText(ctx);
                    var inputBar2 = new android.widget.EditText(ctx);
                    var inputBar3 = new android.widget.EditText(ctx);
                    var dialogLayout = new android.widget.LinearLayout(ctx);
                    var spritesheet = android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 0, 0, 16, 16), 16 * GuiSize, 16 * GuiSize, false);
                    dialogLayout.setBackgroundDrawable(getStretchedImage(spritesheet, 4 * GuiSize, 4 * GuiSize, 8 * GuiSize, 8 * GuiSize, getContext().getScreenWidth() / 2, getContext().getScreenHeight()));
                    dialogLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
                    dialogLayout.addView(inputBar);
                    dialogLayout.addView(inputBar1);
                    dialogLayout.addView(inputBar2);
                    dialogLayout.addView(inputBar3);
                    dialogLayout.addView(btn);
                    dialogLayout.addView(btn1);
                    var dialog = new android.app.Dialog(ctx);
                    dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
                    dialog.setContentView(dialogLayout);
                    dialog.setTitle(Texts.signeditor + " [WIP]");
                    inputBar.setHint("Line 1");
                    inputBar.setTypeface(mcpeFont);
                    if(android.os.Build.VERSION.SDK_INT > 19) { // KITKAT
                        inputBar.setShadowLayer(1, Math.round(inputBar.getLineHeight() / 8), Math.round(inputBar.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    } else {
                        inputBar.setShadowLayer(0.0001, Math.round(inputBar.getLineHeight() / 8), Math.round(inputBar.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    }
                    inputBar1.setHint("Line 2");
                    inputBar1.setTypeface(mcpeFont);
                    if(android.os.Build.VERSION.SDK_INT > 19) { // KITKAT
                        inputBar1.setShadowLayer(1, Math.round(inputBar1.getLineHeight() / 8), Math.round(inputBar1.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    } else {
                        inputBar1.setShadowLayer(0.0001, Math.round(inputBar1.getLineHeight() / 8), Math.round(inputBar1.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    }
                    inputBar2.setHint("Line 3");
                    inputBar2.setTypeface(mcpeFont);
                    if(android.os.Build.VERSION.SDK_INT > 19) { // KITKAT
                        inputBar2.setShadowLayer(1, Math.round(inputBar2.getLineHeight() / 8), Math.round(inputBar2.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    } else {
                        inputBar2.setShadowLayer(0.0001, Math.round(inputBar2.getLineHeight() / 8), Math.round(inputBar2.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    }
                    inputBar3.setHint("Line 4");
                    inputBar3.setTypeface(mcpeFont);
                    if(android.os.Build.VERSION.SDK_INT > 19) { // KITKAT
                        inputBar3.setShadowLayer(1, Math.round(inputBar3.getLineHeight() / 8), Math.round(inputBar3.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    } else {
                        inputBar3.setShadowLayer(0.0001, Math.round(inputBar3.getLineHeight() / 8), Math.round(inputBar3.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    }
                    dialogGUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                    dialog.show();
                    btn.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            line0 = inputBar.getText();
                            line1 = inputBar1.getText();
                            line2 = inputBar2.getText();
                            line3 = inputBar3.getText();
                            Level.setSignText(signX, signY, signZ, 0, line0);
                            Level.setSignText(signX, signY, signZ, 1, line1);
                            Level.setSignText(signX, signY, signZ, 2, line2);
                            Level.setSignText(signX, signY, signZ, 3, line3);
                            dialog.dismiss();
                        }
                    });
                    btn1.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            dialog.dismiss();
                        }
                    });
                } catch(e) {
                    print("Error: " + e)
                }
            }
        });

    } else if(menu == "gamemode") {
        ctx.runOnUiThread(new java.lang.Runnable() {
            run: function() {
                try {
                    dialogGUI = new android.widget.PopupWindow();
                    var btn = minecraftButton("Survival");
                    var btn1 = minecraftButton("Creative");
                    var btn2 = minecraftButton("Hardcore");
                    var btn3 = minecraftButton("Spectator");
                    var btn4 = minecraftButton("Cancel");
                    var newLineTextView = minecraftText("\n");
                    var dialogLayout = new android.widget.LinearLayout(ctx);
                    var spritesheet = android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 0, 0, 16, 16), 16 * GuiSize, 16 * GuiSize, false);
                    dialogLayout.setBackgroundDrawable(getStretchedImage(spritesheet, 4 * GuiSize, 4 * GuiSize, 8 * GuiSize, 8 * GuiSize, getContext().getScreenWidth() / 2, getContext().getScreenHeight()));
                    dialogLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
                    dialogLayout.addView(btn);
                    dialogLayout.addView(btn1);
                    dialogLayout.addView(btn2);
                    dialogLayout.addView(btn3);
                    dialogLayout.addView(newLineTextView);
                    dialogLayout.addView(btn4);
                    var dialog = new android.app.Dialog(ctx);
                    dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
                    dialog.setContentView(dialogLayout);
                    dialog.setTitle(Texts.gamemode);
                    dialogGUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                    dialog.show();
                    btn.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            Level.setGameMode(0);
							hardcore = "off";
							spectator = "off";
							Block.setDestroyTimeDefaultAll();
							MoreOptionsPE.savePerWorldGamemodeSettings();
                            dialog.dismiss();
                        }
                    });
                    btn1.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            Level.setGameMode(1);
							hardcore = "off";
							spectator = "off";
							Block.setDestroyTimeDefaultAll();
							State2 = true;
							Player.setCanFly(1);
							MoreOptionsPE.savePerWorldGamemodeSettings();
                            dialog.dismiss();
                        }
                    });
					btn2.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            Level.setGameMode(0);
							hardcore = "on";
							spectator = "off";
							Block.setDestroyTimeDoubleDefaultAll();
							MoreOptionsPE.savePerWorldGamemodeSettings();
                            dialog.dismiss();
                        }
                    });
                    btn3.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            Level.setGameMode(1);
							hardcore = "off";
							spectator = "on";
							Block.setDestroyTimeDefaultAll();
							State = true;
							Entity.setCollisionSize(Player.getEntity(), 0, 0);
							State2 = true;
							Player.setCanFly(1);
							MoreOptionsPE.savePerWorldGamemodeSettings();
                            dialog.dismiss();
                        }
                    });
                    btn4.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            dialog.dismiss();
                        }
                    });
                } catch(e) {
                    print("Error: " + e)
                }
            }
        });
		
	    } else if(menu == "weather") {
        ctx.runOnUiThread(new java.lang.Runnable() {
            run: function() {
                try {
                    dialogGUI = new android.widget.PopupWindow();
                    var btn = minecraftButton("Rain");
                    var btn1 = minecraftButton("Lightning/Thunder");
                    var btn2 = minecraftButton("Clear");
                    var btn3 = minecraftButton("Cancel");
                    var newLineTextView = minecraftText("\n");
                    var dialogLayout = new android.widget.LinearLayout(ctx);
                    var spritesheet = android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 0, 0, 16, 16), 16 * GuiSize, 16 * GuiSize, false);
                    dialogLayout.setBackgroundDrawable(getStretchedImage(spritesheet, 4 * GuiSize, 4 * GuiSize, 8 * GuiSize, 8 * GuiSize, getContext().getScreenWidth() / 2, getContext().getScreenHeight()));
                    dialogLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
                    dialogLayout.addView(btn);
                    dialogLayout.addView(btn1);
                    dialogLayout.addView(btn2);
                    dialogLayout.addView(newLineTextView);
                    dialogLayout.addView(btn3);
                    var dialog = new android.app.Dialog(ctx);
                    dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
                    dialog.setContentView(dialogLayout);
                    dialog.setTitle(Texts.gamemode);
                    dialogGUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                    dialog.show();
                    btn.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            Level.setRainLevel(1);
							Level.setLightningLevel(0);
                            dialog.dismiss();
                        }
                    });
                    btn1.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            Level.setRainLevel(0);
							Level.setLightningLevel(1);
                            dialog.dismiss();
                        }
                    });
					btn2.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            Level.setRainLevel(0);
							Level.setLightningLevel(0);
                            dialog.dismiss();
                        }
                    });
                    btn3.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            dialog.dismiss();
                        }
                    });
                } catch(e) {
                    print("Error: " + e)
                }
            }
        });
		
	} else if(menu == "home") {
        ctx.runOnUiThread(new java.lang.Runnable() {
            run: function() {
                try {
                    dialogGUI = new android.widget.PopupWindow();
                    var btn = minecraftButton("Teleport to Home");
                    var btn1 = minecraftButton("Set Home");
                    var btn2 = minecraftButton("Clear Home");
                    var btn3 = minecraftButton("Cancel");
                    var newLineTextView = minecraftText("\n");
                    var dialogLayout = new android.widget.LinearLayout(ctx);
                    var spritesheet = android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 0, 0, 16, 16), 16 * GuiSize, 16 * GuiSize, false);
                    dialogLayout.setBackgroundDrawable(getStretchedImage(spritesheet, 4 * GuiSize, 4 * GuiSize, 8 * GuiSize, 8 * GuiSize, getContext().getScreenWidth() / 2, getContext().getScreenHeight()));
                    dialogLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
                    dialogLayout.addView(btn);
                    dialogLayout.addView(btn1);
                    dialogLayout.addView(btn2);
                    dialogLayout.addView(newLineTextView);
                    dialogLayout.addView(btn3);
                    var dialog = new android.app.Dialog(ctx);
                    dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
                    dialog.setContentView(dialogLayout);
                    dialog.setTitle("Home");
                    dialogGUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                    dialog.show();
                    btn.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            MoreOptionsPE.tpHome();
                            dialog.dismiss();
                        }
                    });
                    btn1.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            MoreOptionsPE.setHome();
                            dialog.dismiss();
                        }
                    });
					btn2.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            MoreOptionsPE.clearHome();
                            dialog.dismiss();
                        }
                    });
                    btn3.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            dialog.dismiss();
                        }
                    });
                } catch(e) {
                    print("Error: " + e)
                }
            }
        });

    } else if(menu == "additem") {
        ctx.runOnUiThread(new java.lang.Runnable() {
            run: function() {
                try {
                    dialogGUI = new android.widget.PopupWindow();
                    var btn = minecraftButton("Add item");
                    var btn1 = minecraftButton("Cancel");
                    var inputBar = new android.widget.EditText(ctx);
                    var inputBar1 = new android.widget.EditText(ctx);
                    var inputBar2 = new android.widget.EditText(ctx);
                    inputBar.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
                    inputBar1.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
                    inputBar2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
                    var dialogLayout = new android.widget.LinearLayout(ctx);
                    var spritesheet = android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 0, 0, 16, 16), 16 * GuiSize, 16 * GuiSize, false);
                    dialogLayout.setBackgroundDrawable(getStretchedImage(spritesheet, 4 * GuiSize, 4 * GuiSize, 8 * GuiSize, 8 * GuiSize, getContext().getScreenWidth() / 2, getContext().getScreenHeight()));
                    dialogLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
                    dialogLayout.addView(inputBar);
                    dialogLayout.addView(inputBar1);
                    dialogLayout.addView(inputBar2);
                    dialogLayout.addView(btn);
                    dialogLayout.addView(btn1);
                    var dialog = new android.app.Dialog(ctx);
                    dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
                    dialog.setContentView(dialogLayout);
                    dialog.setTitle(Texts.add_item_to_inventory);
                    inputBar.setHint("ID");
                    inputBar.setTypeface(mcpeFont);
                    if(android.os.Build.VERSION.SDK_INT > 19) { // KITKAT
                        inputBar.setShadowLayer(1, Math.round(inputBar.getLineHeight() / 8), Math.round(inputBar.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    } else {
                        inputBar.setShadowLayer(0.0001, Math.round(inputBar.getLineHeight() / 8), Math.round(inputBar.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    }
                    inputBar1.setHint("Damage");
                    inputBar1.setTypeface(mcpeFont);
                    if(android.os.Build.VERSION.SDK_INT > 19) { // KITKAT
                        inputBar1.setShadowLayer(1, Math.round(inputBar1.getLineHeight() / 8), Math.round(inputBar1.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    } else {
                        inputBar1.setShadowLayer(0.0001, Math.round(inputBar1.getLineHeight() / 8), Math.round(inputBar1.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    }
                    inputBar2.setHint("Amount");
                    inputBar2.setTypeface(mcpeFont);
                    if(android.os.Build.VERSION.SDK_INT > 19) { // KITKAT
                        inputBar2.setShadowLayer(1, Math.round(inputBar2.getLineHeight() / 8), Math.round(inputBar2.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    } else {
                        inputBar2.setShadowLayer(0.0001, Math.round(inputBar2.getLineHeight() / 8), Math.round(inputBar2.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    }
                    dialogGUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                    dialog.show();
                    btn.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            var itemId = inputBar.getText();
                            var damage = inputBar1.getText();
                            var amount = inputBar2.getText();
                            addItemInv(itemId, amount, damage);
                            dialog.dismiss();
                        }
                    });
                    btn1.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            dialog.dismiss();
                        }
                    });
                } catch(e) {
                    print("Error: " + e)
                }
            }
        });

    } else if(menu == "health") {
        ctx.runOnUiThread(new java.lang.Runnable() {
            run: function() {
                try {
                    dialogGUI = new android.widget.PopupWindow();
                    var btn = minecraftButton("Ok");
                    var btn1 = minecraftButton("Cancel");
                    var inputBar = new android.widget.EditText(ctx);
                    inputBar.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
                    var dialogLayout = new android.widget.LinearLayout(ctx);
                    var spritesheet = android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 0, 0, 16, 16), 16 * GuiSize, 16 * GuiSize, false);
                    dialogLayout.setBackgroundDrawable(getStretchedImage(spritesheet, 4 * GuiSize, 4 * GuiSize, 8 * GuiSize, 8 * GuiSize, getContext().getScreenWidth() / 2, getContext().getScreenHeight()));
                    dialogLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
                    dialogLayout.addView(inputBar);
                    dialogLayout.addView(btn);
                    dialogLayout.addView(btn1);
                    var dialog = new android.app.Dialog(ctx);
                    dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
                    dialog.setContentView(dialogLayout);
                    dialog.setTitle(Texts.health);
                    inputBar.setHint("0 = kill; 20 = full health");
                    inputBar.setTypeface(mcpeFont);
                    if(android.os.Build.VERSION.SDK_INT > 19) { // KITKAT
                        inputBar.setShadowLayer(1, Math.round(inputBar.getLineHeight() / 8), Math.round(inputBar.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    } else {
                        inputBar.setShadowLayer(0.0001, Math.round(inputBar.getLineHeight() / 8), Math.round(inputBar.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    }
                    dialogGUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                    dialog.show();
                    btn.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            var health = inputBar.getText();
                            Entity.setHealth(Player.getEntity(), health);
                            dialog.dismiss();
                        }
                    });
                    btn1.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            dialog.dismiss();
                        }
                    });
                } catch(e) {
                    print("Error: " + e)
                }
            }
        });


        /*} else if (menu == "morph") {
        ctx.runOnUiThread(new java.lang.Runnable() {
            run: function() {
                try {
                    dialogGUI = new android.widget.PopupWindow();
                    var btn = minecraftButton("TNT");
                    var btn1 = minecraftButton("Chicken");
                    var btn2 = minecraftButton("Cow");
					var btn3 = minecraftButton("Mooshroom");
					var btn4 = minecraftButton("Pig");
					var btn5 = minecraftButton("Sheep");
					var btn6 = minecraftButton("Steve");
					var btn7 = minecraftButton("Skeleton");
					var btn8 = minecraftButton("Spider");
					var btn9 = minecraftButton("Silverfish");
					var btn10 = minecraftButton("Creeper");
					var btn11 = minecraftButton("Enderman");
					var btn12 = minecraftButton("Minecart");
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
					dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
                    dialog.setContentView(dialogLayout);
                    dialog.setTitle("Morph");
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
        });*/
    } else if(menu == "effects") {
        ctx.runOnUiThread(new java.lang.Runnable() {
            run: function() {
                try {
                    dialogGUI = new android.widget.PopupWindow();
                    var btn = minecraftButton("Set effect");
                    var btn1 = minecraftButton("Cancel");
                    var particlesTitle = minecraftText("Particles");
                    particlesTitle.setGravity(android.view.Gravity.CENTER);
                    var toggleButton = new android.widget.ToggleButton(ctx);
                    toggleButton.setTypeface(mcpeFont);
                    if(android.os.Build.VERSION.SDK_INT > 19) { // KITKAT
                        toggleButton.setShadowLayer(1, Math.round(toggleButton.getLineHeight() / 8), Math.round(toggleButton.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    } else {
                        toggleButton.setShadowLayer(0.0001, Math.round(toggleButton.getLineHeight() / 8), Math.round(toggleButton.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    }
                    var inputBar = new android.widget.EditText(ctx);
                    var inputBar1 = new android.widget.EditText(ctx);
                    inputBar.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
                    inputBar1.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
                    var dialogLayout = new android.widget.LinearLayout(ctx);
                    var spritesheet = android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 0, 0, 16, 16), 16 * GuiSize, 16 * GuiSize, false);
                    dialogLayout.setBackgroundDrawable(getStretchedImage(spritesheet, 4 * GuiSize, 4 * GuiSize, 8 * GuiSize, 8 * GuiSize, getContext().getScreenWidth() / 2, getContext().getScreenHeight()));
                    dialogLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
                    dialogLayout.addView(inputBar);
                    dialogLayout.addView(inputBar1);
                    dialogLayout.addView(particlesTitle);
                    dialogLayout.addView(toggleButton);
                    dialogLayout.addView(btn);
                    dialogLayout.addView(btn1);
                    var dialog = new android.app.Dialog(ctx);
                    dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
                    dialog.setContentView(dialogLayout);
                    dialog.setTitle(Texts.effects);
                    particlesTitle.setTextSize(10);
                    inputBar.setHint("Effect ID");
                    inputBar.setTypeface(mcpeFont);
                    if(android.os.Build.VERSION.SDK_INT > 19) { // KITKAT
                        inputBar.setShadowLayer(1, Math.round(inputBar.getLineHeight() / 8), Math.round(inputBar.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    } else {
                        inputBar.setShadowLayer(0.0001, Math.round(inputBar.getLineHeight() / 8), Math.round(inputBar.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    }
                    inputBar1.setHint("Duration in seconds");
                    inputBar1.setTypeface(mcpeFont);
                    if(android.os.Build.VERSION.SDK_INT > 19) { // KITKAT
                        inputBar1.setShadowLayer(1, Math.round(inputBar1.getLineHeight() / 8), Math.round(inputBar1.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    } else {
                        inputBar1.setShadowLayer(0.0001, Math.round(inputBar1.getLineHeight() / 8), Math.round(inputBar1.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    }
                    dialogGUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                    dialog.show();
                    var toggled = true;
                    toggleButton.setChecked(toggled);
                    toggleButton.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            if(toggled == true) {
                                toggled = false;
                            }
                            if(toggled == false) {
                                toggled = true;
                            }
                        }
                    });
                    btn.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            var effectId = inputBar.getText();
                            var seconds = inputBar1.getText();
                            Entity.addEffect(getPlayerEnt(), parseInt(effectId), parseInt(seconds) * 20, toggled, toggled);
                            dialog.dismiss();
                        }
                    });
                    btn1.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            dialog.dismiss();
                        }
                    });
                } catch(e) {
                    print("Error: " + e)
                }
            }
        });

    } else if(menu == "teleport") {
        ctx.runOnUiThread(new java.lang.Runnable() {
            run: function() {
                try {
                    dialogGUI = new android.widget.PopupWindow();
                    var btn = minecraftButton(Texts.teleport);
                    var btn1 = minecraftButton("Cancel");
                    var inputBar = new android.widget.EditText(ctx);
                    inputBar.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
                    var inputBar1 = new android.widget.EditText(ctx);
                    inputBar1.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
                    var inputBar2 = new android.widget.EditText(ctx);
                    inputBar2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
                    var dialogLayout = new android.widget.LinearLayout(ctx);
                    var spritesheet = android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 0, 0, 16, 16), 16 * GuiSize, 16 * GuiSize, false);
                    dialogLayout.setBackgroundDrawable(getStretchedImage(spritesheet, 4 * GuiSize, 4 * GuiSize, 8 * GuiSize, 8 * GuiSize, getContext().getScreenWidth() / 2, getContext().getScreenHeight()));
                    dialogLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
                    dialogLayout.addView(inputBar);
                    dialogLayout.addView(inputBar1);
                    dialogLayout.addView(inputBar2);
                    dialogLayout.addView(btn);
                    dialogLayout.addView(btn1);
                    var dialog = new android.app.Dialog(ctx);
                    dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
                    dialog.setContentView(dialogLayout);
                    dialog.setTitle(Texts.teleport);
                    inputBar.setHint("X");
                    inputBar1.setHint("Y");
                    inputBar2.setHint("Z");
                    inputBar.setTypeface(mcpeFont);
                    if(android.os.Build.VERSION.SDK_INT > 19) { // KITKAT
                        inputBar.setShadowLayer(1, Math.round(inputBar.getLineHeight() / 8), Math.round(inputBar.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    } else {
                        inputBar.setShadowLayer(0.0001, Math.round(inputBar.getLineHeight() / 8), Math.round(inputBar.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    }
                    inputBar1.setTypeface(mcpeFont);
                    if(android.os.Build.VERSION.SDK_INT > 19) { // KITKAT
                        inputBar1.setShadowLayer(1, Math.round(inputBar1.getLineHeight() / 8), Math.round(inputBar1.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    } else {
                        inputBar1.setShadowLayer(0.0001, Math.round(inputBar1.getLineHeight() / 8), Math.round(inputBar1.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    }
                    inputBar2.setTypeface(mcpeFont);
                    if(android.os.Build.VERSION.SDK_INT > 19) { // KITKAT
                        inputBar2.setShadowLayer(1, Math.round(inputBar2.getLineHeight() / 8), Math.round(inputBar2.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    } else {
                        inputBar2.setShadowLayer(0.0001, Math.round(inputBar2.getLineHeight() / 8), Math.round(inputBar2.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    }
                    dialogGUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                    dialog.show();
                    btn.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            var tpX = inputBar.getText();
                            var tpY = inputBar1.getText();
                            var tpZ = inputBar2.getText();
                            Entity.setPosition(getPlayerEnt(), tpX, tpY, tpZ);
                            dialog.dismiss();
                        }
                    });
                    btn1.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            dialog.dismiss();
                        }
                    });
                } catch(e) {
                    print("Error: " + e)
                }
            }
        });

        /*} else if (menu == "modsettings") {
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
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                                crossButtonPosition = "left";
								MoreOptionsPE.saveMainSettings();
                                exitPositionButton.setText("Exit button position | LEFT");
                            } else if (theme == "Alternative" && crossButtonPosition == "left") {
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                                crossButtonPosition = "right";
								MoreOptionsPE.saveMainSettings();
                                exitPositionButton.setText("Exit button position | RIGHT");
                            } else if (theme == "MCPE" && crossButtonPosition == "right") {
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                                crossButtonPosition = "left";
								MoreOptionsPE.saveMainSettings();
                                exitPositionButton.setText("Exit button position | LEFT");
                                //exitPositionButton.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (theme == "MCPE" && crossButtonPosition == "left") {
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                                crossButtonPosition = "right";
								MoreOptionsPE.saveMainSettings();
                                exitPositionButton.setText("Exit button position | RIGHT");
                                //exitPositionButton.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (theme == "Blue" && crossButtonPosition == "right") {
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                                crossButtonPosition = "left";
								MoreOptionsPE.saveMainSettings();
                                exitPositionButton.setText("Exit button position | LEFT");
                            } else if (theme == "Blue" && crossButtonPosition == "left") {
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                                crossButtonPosition = "right";
								MoreOptionsPE.saveMainSettings();
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
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                                theme = "MCPE";
								MoreOptionsPE.saveMainSettings();
                                themeButton.setText("Theme | MCPE");
                                //themeButton.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (theme == "MCPE") {
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                                theme = "Blue";
								MoreOptionsPE.saveMainSettings();
                                themeButton.setText("Theme | Blue");
                            } else if (theme == "Blue") {
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                                theme = "Alternative";
								MoreOptionsPE.saveMainSettings();
                                themeButton.setText("Theme | Alternative");
                            }
                        }
                    }));
                    dialogLayout.addView(themeButton);
					
                    var fullScreenButton = new android.widget.Button(ctx);
                    if (theme == "Alternative" && fullScreen == "off") {
                        fullScreenButton = minecraftButton("Fullscreen | " + Texts.off);
                    } else if (theme == "Alternative" && fullScreen == "on") {
                        fullScreenButton = minecraftButton("Fullscreen | " + Texts.on);
                    } else if (theme == "MCPE" && fullScreen == "off") {
                        fullScreenButton = minecraftButton("Fullscreen | " + Texts.off);
                        //fullScreenButton.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (theme == "MCPE" && fullScreen == "on") {
                        fullScreenButton = minecraftButton("Fullscreen | " + Texts.on);
                        //fullScreenButton.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (theme == "Blue" && fullScreen == "off") {
                        fullScreenButton = minecraftButton("Fullscreen | " + Texts.off);
                    } else if (theme == "Blue" && fullScreen == "on") {
                        fullScreenButton = minecraftButton("Fullscreen | " + Texts.on);
                    }
                    fullScreenButton.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            if (theme == "Alternative" && fullScreen == "off") {
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                                fullScreen = "on";
								MoreOptionsPE.saveMainSettings();
                                fullScreenButton.setText("Fullscreen | " + Texts.on);
                            } else if (theme == "Alternative" && fullScreen == "on") {
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                                fullScreen = "off";
								MoreOptionsPE.saveMainSettings();
                                fullScreenButton.setText("Fullscreen | " + Texts.off);
                            } else if (theme == "MCPE" && fullScreen == "off") {
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                                fullScreen = "on";
								MoreOptionsPE.saveMainSettings();
                                fullScreenButton.setText("Fullscreen | " + Texts.on);
                                //fullScreenButton.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (theme == "MCPE" && fullScreen == "on") {
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                                fullScreen = "off";
								MoreOptionsPE.saveMainSettings();
                                fullScreenButton.setText("Fullscreen | " + Texts.off);
                                //fullScreenButton.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (theme == "Blue" && fullScreen == "off") {
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                                fullScreen = "on";
								MoreOptionsPE.saveMainSettings();
                                fullScreenButton.setText("Fullscreen | " + Texts.on);
                            } else if (theme == "Blue" && fullScreen == "on") {
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                                fullScreen = "off";
								MoreOptionsPE.saveMainSettings();
                                fullScreenButton.setText("Fullscreen | " + Texts.off);
                            }
                        }
                    }));
                    dialogLayout.addView(fullScreenButton);
					
					var hacksListButton = new android.widget.Button(ctx);
                    if (theme == "Alternative" && showList == "off") {
						hacksListButton = minecraftButton("Show hack list | " + Texts.off);
                    } else if (theme == "Alternative" && showList == "on") {
						hacksListButton = minecraftButton("Show hack list | " + Texts.on);
                    } else if (theme == "MCPE" && showList == "off") {
                        hacksListButton = minecraftButton("Show hack list | " + Texts.off);
                        //hacksListButton.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (theme == "MCPE" && showList == "on") {
                        hacksListButton = minecraftButton("Show hack list | " + Texts.on);
                        //hacksListButton.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (theme == "Blue" && showList == "off") {
                        hacksListButton = minecraftButton("Show hack list | " + Texts.off);
                    } else if (theme == "Blue" && showList == "on") {
                        hacksListButton = minecraftButton("Show hack list | " + Texts.on);
                    }
                    hacksListButton.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            if (theme == "Alternative" && showList == "off") {
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                                showList = "on";
								MoreOptionsPE.saveMainSettings();
								showHacksList();
                                hacksListButton.setText("Show hack list | " + Texts.on);
                            } else if (theme == "Alternative" && showList == "on") {
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                                showList = "off";
								MoreOptionsPE.saveMainSettings();
								hacksList.dismiss();
                                hacksListButton.setText("Show hack list | " + Texts.off);
                            } else if (theme == "MCPE" && showList == "off") {
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                                showList = "on";
								MoreOptionsPE.saveMainSettings();
								showHacksList();
                                hacksListButton.setText("Show hack list | " + Texts.on);
                                //hacksListButton.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (theme == "MCPE" && showList == "on") {
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                                showList = "off";
								MoreOptionsPE.saveMainSettings();
								hacksList.dismiss();
                                hacksListButton.setText("Show hack list | " + Texts.off);
                                //hacksListButton.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (theme == "Blue" && showList == "off") {
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                                showList = "on";
								MoreOptionsPE.saveMainSettings();
								showHacksList();
                                hacksListButton.setText("Show hack list | " + Texts.on);
                            } else if (theme == "Blue" && showList == "on") {
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                                showList = "off";
								MoreOptionsPE.saveMainSettings();
								hacksList.dismiss();
                                hacksListButton.setText("Show hack list | " + Texts.off);
                            }
                        }
                    }));
                    dialogLayout.addView(hacksListButton);
					
		    var oldIconButton = new android.widget.Button(ctx);
                    if (theme == "Alternative" && useOldIcon == "off") {
			oldIconButton = minecraftButton("Use old icon | " + Texts.off);
                    } else if (theme == "Alternative" && useOldIcon == "on") {
                        oldIconButton = minecraftButton("Use old icon | " + Texts.on);
                    } else if (theme == "MCPE" && useOldIcon == "off") {
                        oldIconButton = minecraftButton("Use old icon | " + Texts.off);
                        //oldIconButton.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (theme == "MCPE" && useOldIcon == "on") {
                        oldIconButton = minecraftButton("Use old icon | " + Texts.on);
                        //oldIconButton.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (theme == "Blue" && useOldIcon == "off") {
                        oldIconButton = minecraftButton("Use old icon | " + Texts.off);
                    } else if (theme == "Blue" && useOldIcon == "on") {
                        oldIconButton = minecraftButton("Use old icon | " + Texts.on);
                    }
                    oldIconButton.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            if (theme == "Alternative" && useOldIcon == "off") {
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                                useOldIcon = "on";
								MoreOptionsPE.saveMainSettings();
                                oldIconButton.setText("Use old icon | " + Texts.on);
                            } else if (theme == "Alternative" && useOldIcon == "on") {
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                                useOldIcon = "off";
								MoreOptionsPE.saveMainSettings();
                                oldIconButton.setText("Use old icon | " + Texts.off);
                            } else if (theme == "MCPE" && useOldIcon == "off") {
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                                useOldIcon = "on";
								MoreOptionsPE.saveMainSettings();
                                oldIconButton.setText("Use old icon | " + Texts.on);
                                //oldIconButton.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (theme == "MCPE" && useOldIcon == "on") {
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                                useOldIcon = "off";
								MoreOptionsPE.saveMainSettings();
                                oldIconButton.setText("Use old icon | " + Texts.off);
                                //oldIconButton.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (theme == "Blue" && useOldIcon == "off") {
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                                useOldIcon = "on";
								MoreOptionsPE.saveMainSettings();
                                oldIconButton.setText("Use old icon | " + Texts.on);
                            } else if (theme == "Blue" && useOldIcon == "on") {
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                                useOldIcon = "off";
								MoreOptionsPE.saveMainSettings();
                                oldIconButton.setText("Use old icon | " + Texts.off);
                            }
                        }
                    }));
                    dialogLayout.addView(oldIconButton);

		    var showMainButtonButton = new android.widget.Button(ctx);
                    if (theme == "Alternative" && showMainButton == "off") {
			showMainButtonButton = minecraftButton("Show main button | " + Texts.off);
                    } else if (theme == "Alternative" && showMainButton == "on") {
                        showMainButtonButton = minecraftButton("Show main button | " + Texts.on);
                    } else if (theme == "MCPE" && showMainButton == "off") {
                        showMainButtonButton = minecraftButton("Show main button | " + Texts.off);
                        //showMainButtonButton.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (theme == "MCPE" && showMainButton == "on") {
                        showMainButtonButton = minecraftButton("Show main button | " + Texts.on);
                        //showMainButtonButton.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (theme == "Blue" && showMainButton == "off") {
                        showMainButtonButton = minecraftButton("Show main button | " + Texts.off);
                    } else if (theme == "Blue" && useOldIcon == "on") {
                        showMainButtonButton = minecraftButton("Show main button | " + Texts.on);
                    }
                    showMainButtonButton.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            if (theme == "Alternative" && showMainButton == "off") {
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                                showMainButton = "on";
								MoreOptionsPE.saveMainSettings();
                                showMainButtonButton.setText("Show main button | " + Texts.on);
                            } else if (theme == "Alternative" && showMainButton == "on") {
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                                showMainButton = "off";
								MoreOptionsPE.saveMainSettings();
                                showMainButtonButton.setText("Show main button | " + Texts.off);
                            } else if (theme == "MCPE" && showMainButton == "off") {
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                                showMainButton = "on";
								MoreOptionsPE.saveMainSettings();
                                showMainButtonButton.setText("Show main button | " + Texts.on);
                                //showMainButtonButton.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (theme == "MCPE" && showMainButton == "on") {
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                                showMainButton = "off";
								MoreOptionsPE.saveMainSettings();
                                showMainButtonButton.setText("Show main button | " + Texts.off);
                                //showMainButtonButton.setBackgroundDrawable(mcpeButtonOldImage);
                            } else if (theme == "Blue" && showMainButton == "off") {
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                                showMainButton = "on";
								MoreOptionsPE.saveMainSettings();
                                showMainButtonButton.setText("Show main button | " + Texts.on);
                            } else if (theme == "Blue" && showMainButton == "on") {
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                                showMainButton = "off";
								MoreOptionsPE.saveMainSettings();
                                showMainButtonButton.setText("Show main button | " + Texts.off);
                            }
                        }
                    }));
                    dialogLayout.addView(showMainButtonButton);

                    var hacksSettingsTitle = new android.widget.TextView(ctx);
                    hacksSettingsTitle.setTextSize(12);
                    hacksSettingsTitle.setText("\nHack Settings"); //Title
                    //hacksSettingsTitle.setTypeface(mcpeFont);
                    hacksSettingsTitle.setTextColor(android.graphics.Color.WHITE); //Color
                    hacksSettingsTitle.setGravity(android.view.Gravity.CENTER);

                    dialogLayout.addView(hacksSettingsTitle);

                    var spamMessageButton = new android.widget.Button(ctx);
                    if (theme == "Alternative") {
			spamMessageButton = minecraftButton("Change TapSpammer Message...");
                    } else if (theme == "MCPE") {
                        spamMessageButton = minecraftButton("Change TapSpammer Message...");
                        //spamMessageButton.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (theme == "Blue") {
                        spamMessageButton = minecraftButton("Change TapSpammer Message...");
                    }
                    spamMessageButton.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            if (theme == "Alternative") {
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            } else if (theme == "MCPE") {
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            } else if (theme == "Blue") {
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            }
                        }
                    }));
                    dialogLayout.addView(spamMessageButton);

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
                        betterGrassButton = minecraftButton("Better Grass | " + Texts.off);
                    } else if (theme == "MCPE" && betterGrass == "normal") {
                        betterGrassButton = minecraftButton("Better Grass | NORMAL");
                        //betterGrassButton.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (theme == "MCPE" && betterGrass == "fast") {
                        betterGrassButton = minecraftButton("Better Grass | FAST");
                        //betterGrassButton.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (theme == "MCPE" && betterGrass == "off") {
                        betterGrassButton = minecraftButton("Better Grass | " + Texts.off);
                        //betterGrassButton.setBackgroundDrawable(mcpeButtonOldImage);
                    } else if (theme == "Blue" && betterGrass == "normal") {
                        betterGrassButton = minecraftButton("Better Grass | NORMAL");
                    } else if (theme == "Blue" && betterGrass == "fast") {
                        betterGrassButton = minecraftButton("Better Grass | FAST");
                    } else if (theme == "Blue" && betterGrass == "off") {
                        betterGrassButton = minecraftButton("Better Grass | " + Texts.off);
                    }
                    betterGrassButton.setOnClickListener(new android.view.View.OnClickListener({
                        onClick: function(viewarg) {
                            if (theme == "Alternative" && betterGrass == "normal") {
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                                betterGrass = "fast";
								initializeOptiFine();
								MoreOptionsPE.saveMainSettings();
                                betterGrassButton.setText("Better Grass | FAST");
                            } else if (theme == "Alternative" && betterGrass == "fast") {
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                                betterGrass = "off";
								initializeOptiFine();
								MoreOptionsPE.saveMainSettings();
                                betterGrassButton.setText("Better Grass | " + Texts.off);
                            } else if (theme == "Alternative" && betterGrass == "off") {
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                                betterGrass = "normal";
								initializeOptiFine();
								MoreOptionsPE.saveMainSettings();
                                betterGrassButton.setText("Better Grass | NORMAL");
                            } else if (theme == "MCPE" && betterGrass == "normal") {
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                                betterGrass = "fast";
								initializeOptiFine();
								MoreOptionsPE.saveMainSettings();
                                betterGrassButton.setText("Better Grass | FAST");
                            } else if (theme == "MCPE" && betterGrass == "fast") {
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                                betterGrass = "off";
								initializeOptiFine();
								MoreOptionsPE.saveMainSettings();
                                betterGrassButton.setText("Better Grass | " + Texts.off);
                            } else if (theme == "MCPE" && betterGrass == "off") {
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                                betterGrass = "normal";
								initializeOptiFine();
								MoreOptionsPE.saveMainSettings();
                                betterGrassButton.setText("Better Grass | NORMAL");
                            } else if (theme == "Blue" && betterGrass == "normal") {
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                                betterGrass = "fast";
								initializeOptiFine();
								MoreOptionsPE.saveMainSettings();
                                betterGrassButton.setText("Better Grass | FAST");
                            } else if (theme == "Blue" && betterGrass == "fast") {
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                                betterGrass = "off";
								initializeOptiFine();
								MoreOptionsPE.saveMainSettings();
                                betterGrassButton.setText("Better Grass | " + Texts.off);
                            } else if (theme == "Blue" && betterGrass == "off") {
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                                betterGrass = "normal";
								initializeOptiFine();
								MoreOptionsPE.saveMainSettings();
                                betterGrassButton.setText("Better Grass | NORMAL");
                            }
                        }
                    }));
                    dialogLayout.addView(betterGrassButton);

                } catch (e) {
                    print("Error: " + e)
                }
            }
        });*/

    } else if(menu == "tapspammersetting") {
        ctx.runOnUiThread(new java.lang.Runnable() {
            run: function() {
                try {
                    dialogGUI = new android.widget.PopupWindow();
                    var btn = minecraftButton("Change setting");
                    var btn1 = minecraftButton("Cancel");
                    var inputBar = new android.widget.EditText(ctx);
                    var dialogLayout = new android.widget.LinearLayout(ctx);
                    var spritesheet = android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 0, 0, 16, 16), 16 * GuiSize, 16 * GuiSize, false);
                    dialogLayout.setBackgroundDrawable(getStretchedImage(spritesheet, 4 * GuiSize, 4 * GuiSize, 8 * GuiSize, 8 * GuiSize, getContext().getScreenWidth() / 2, getContext().getScreenHeight()));
                    dialogLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
                    dialogLayout.addView(inputBar);
                    dialogLayout.addView(btn);
                    dialogLayout.addView(btn1);
                    var dialog = new android.app.Dialog(ctx);
                    dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
                    dialog.setContentView(dialogLayout);
                    dialog.setTitle("Edit TapSpammer / AutoSpammer Message");
                    inputBar.setHint(Texts.tapspammer + " / " + Texts.autospammer + " Message");
                    inputBar.setText(spamMessage);
                    inputBar.setTypeface(mcpeFont);
                    if(android.os.Build.VERSION.SDK_INT > 19) { // KITKAT
                        inputBar.setShadowLayer(1, Math.round(inputBar.getLineHeight() / 8), Math.round(inputBar.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    } else {
                        inputBar.setShadowLayer(0.0001, Math.round(inputBar.getLineHeight() / 8), Math.round(inputBar.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    }
                    dialogGUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                    dialog.show();
                    btn.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            spamMessage = inputBar.getText();
                            MoreOptionsPE.saveMainSettings();
                            MoreOptionsPE.loadMainSettings();
                            dialog.dismiss();
                        }
                    });
                    btn1.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            dialog.dismiss();
                        }
                    });
                } catch(e) {
                    print("Error: " + e)
                }
            }
        });
    } else if(menu == "gamespeedsetting") {
        ctx.runOnUiThread(new java.lang.Runnable() {
            run: function() {
                try {
                    dialogGUI = new android.widget.PopupWindow();
                    var btn = minecraftButton("Change setting");
                    var btn1 = minecraftButton("Cancel");
                    var inputBar = new android.widget.EditText(ctx);
                    inputBar.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
                    var dialogLayout = new android.widget.LinearLayout(ctx);
                    var spritesheet = android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 0, 0, 16, 16), 16 * GuiSize, 16 * GuiSize, false);
                    dialogLayout.setBackgroundDrawable(getStretchedImage(spritesheet, 4 * GuiSize, 4 * GuiSize, 8 * GuiSize, 8 * GuiSize, getContext().getScreenWidth() / 2, getContext().getScreenHeight()));
                    dialogLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
                    dialogLayout.addView(inputBar);
                    dialogLayout.addView(btn);
                    dialogLayout.addView(btn1);
                    var dialog = new android.app.Dialog(ctx);
                    dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
                    dialog.setContentView(dialogLayout);
                    dialog.setTitle("Gamespeed hack speed");
                    inputBar.setHint("Gamespeed hack speed (how many times x the default gamespeed)");
                    inputBar.setText(gameSpeedHackSetting);
                    inputBar.setTypeface(mcpeFont);
                    if(android.os.Build.VERSION.SDK_INT > 19) { // KITKAT
                        inputBar.setShadowLayer(1, Math.round(inputBar.getLineHeight() / 8), Math.round(inputBar.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    } else {
                        inputBar.setShadowLayer(0.0001, Math.round(inputBar.getLineHeight() / 8), Math.round(inputBar.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    }
                    dialogGUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                    dialog.show();
                    btn.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            gameSpeedHackSetting = inputBar.getText().toString();
                            MoreOptionsPE.saveMainSettings();
                            MoreOptionsPE.loadMainSettings();
                            dialog.dismiss();
                        }
                    });
                    btn1.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            dialog.dismiss();
                        }
                    });
                } catch(e) {
                    print("Error: " + e)
                }
            }
        });
		
    } else if(menu == "defaulturlsetting") {
        ctx.runOnUiThread(new java.lang.Runnable() {
            run: function() {
                try {
                    dialogGUI = new android.widget.PopupWindow();
                    var btn = minecraftButton("Change setting");
                    var btn1 = minecraftButton("Cancel");
                    var inputBar = new android.widget.EditText(ctx);
                    var dialogLayout = new android.widget.LinearLayout(ctx);
                    var spritesheet = android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 0, 0, 16, 16), 16 * GuiSize, 16 * GuiSize, false);
                    dialogLayout.setBackgroundDrawable(getStretchedImage(spritesheet, 4 * GuiSize, 4 * GuiSize, 8 * GuiSize, 8 * GuiSize, getContext().getScreenWidth() / 2, getContext().getScreenHeight()));
                    dialogLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
                    dialogLayout.addView(inputBar);
                    dialogLayout.addView(btn);
                    dialogLayout.addView(btn1);
                    var dialog = new android.app.Dialog(ctx);
                    dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
                    dialog.setContentView(dialogLayout);
                    dialog.setTitle("Default Webbrowser URL");
                    inputBar.setHint("Default Webbrowser URL (use http:// or https://)");
                    inputBar.setText(defaultUrl);
                    inputBar.setTypeface(mcpeFont);
                    if(android.os.Build.VERSION.SDK_INT > 19) { // KITKAT
                        inputBar.setShadowLayer(1, Math.round(inputBar.getLineHeight() / 8), Math.round(inputBar.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    } else {
                        inputBar.setShadowLayer(0.0001, Math.round(inputBar.getLineHeight() / 8), Math.round(inputBar.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    }
                    dialogGUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                    dialog.show();
                    btn.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            defaultUrl = inputBar.getText().toString();
                            MoreOptionsPE.saveMainSettings();
                            MoreOptionsPE.loadMainSettings();
                            dialog.dismiss();
                        }
                    });
                    btn1.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            dialog.dismiss();
                        }
                    });
                } catch(e) {
                    print("Error: " + e)
                }
            }
        });
		
		} else if(menu == "loadwebsite") {
        ctx.runOnUiThread(new java.lang.Runnable() {
            run: function() {
                try {
                    dialogGUI = new android.widget.PopupWindow();
                    var btn = minecraftButton("Go to this page");
                    var btn1 = minecraftButton("Cancel");
                    var inputBar = new android.widget.EditText(ctx);
                    var dialogLayout = new android.widget.LinearLayout(ctx);
                    var spritesheet = android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 0, 0, 16, 16), 16 * GuiSize, 16 * GuiSize, false);
                    dialogLayout.setBackgroundDrawable(getStretchedImage(spritesheet, 4 * GuiSize, 4 * GuiSize, 8 * GuiSize, 8 * GuiSize, getContext().getScreenWidth() / 2, getContext().getScreenHeight()));
                    dialogLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
                    dialogLayout.addView(inputBar);
                    dialogLayout.addView(btn);
                    dialogLayout.addView(btn1);
                    var dialog = new android.app.Dialog(ctx);
                    dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
                    dialog.setContentView(dialogLayout);
                    dialog.setTitle("Go to a webpage");
                    inputBar.setHint("Enter an url here");
                    inputBar.setText(webViewer.getUrl());
                    inputBar.setTypeface(mcpeFont);
                    if(android.os.Build.VERSION.SDK_INT > 19) { // KITKAT
                        inputBar.setShadowLayer(1, Math.round(inputBar.getLineHeight() / 8), Math.round(inputBar.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    } else {
                        inputBar.setShadowLayer(0.0001, Math.round(inputBar.getLineHeight() / 8), Math.round(inputBar.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                    }
                    dialogGUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                    dialogGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                    dialog.show();
                    btn.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
							webViewer.loadUrl(inputBar.getText());
                            dialog.dismiss();
                        }
                    });
                    btn1.setOnClickListener(new android.view.View.OnClickListener() {
                        onClick: function(view) {
                            Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
                            dialog.dismiss();
                        }
                    });
                } catch(e) {
                    print("Error: " + e)
                }
            }
        });
    }
}

function chatHook(text) {
    var commandText = text.split(" ");
    if(commandText[0] == ".help" || commandText[0] == ".?") {
        preventDefault();
        if(commandText[1] == null || commandText[1] == "1") {
            clientMessage(ChatColor.GREEN + "--- Showing AgameR MoreOptions PE commands help page 1 of 2 (.help <page>) ---");
            clientMessage(ChatColor.GRAY + " > .help <page> - Shows a list of availabe commands");
            clientMessage(ChatColor.GRAY + " > .menu - Opens the AgameR MoreOptions PE menu");
            clientMessage(ChatColor.GRAY + " > .panic - Disables all hacks");
            clientMessage(ChatColor.GRAY + " > .getpos - Returns your position (x, y, z)");
            clientMessage(ChatColor.GRAY + " > .tp <x> <y> <z> - Teleports your player to the given position (x, y, z)");
            clientMessage(ChatColor.GRAY + " > .sethome - Sets your home at the current player location");
            clientMessage(ChatColor.GRAY + " > .home - Teleports your player to your current set home location");
        } else if(commandText[1] == "2") {
            clientMessage(ChatColor.GREEN + "--- Showing AgameR MoreOptions PE commands help page 2 of 2 (.help <page>) ---");
			clientMessage(ChatColor.GRAY + " > .clearhome - Clears your current home location");
			clientMessage(ChatColor.GRAY + " > .leave - Leaves the world");
            clientMessage(ChatColor.GRAY + " > .version - Tells the current AgameR MoreOptions PE version");
            clientMessage(ChatColor.GRAY + " > .about - Opens the AgameR MoreOptions PE about screen");
            clientMessage(ChatColor.GRAY + " > .settings - Opens the AgameR MoreOptions PE settings screen");
            clientMessage(ChatColor.GRAY + " > .update - Checks for updates");
            clientMessage(ChatColor.GRAY + " > .twitter - Go to peacestorm on Twitter");
        } else {
            clientMessage(ChatColor.BLUE + "[AgameR MoreOptions PE] " + ChatColor.RED + "Usage: .help <page>");
        }
    }
    if(commandText[0] == ".menu") {
        preventDefault();
		closeHacksList();
        mainMenu();
        exit();
    }
    if(commandText[0] == ".panic") {
        preventDefault();
        disableHacks();
        reloadHacksList();
    }
    if(commandText[0] == ".getpos") {
        preventDefault();
        clientMessage(ChatColor.BLUE + "[AgameR MoreOptions PE] " + ChatColor.WHITE + "X: " + parseInt(Entity.getX(getPlayerEnt())) + " Y: " + parseInt(Entity.getY(getPlayerEnt())) + " Z: " + parseInt(Entity.getZ(getPlayerEnt())));
    }
    if(commandText[0] == ".tp") {
        preventDefault();
        if(parseInt(commandText[1]) == null || parseInt(commandText[2]) == null || parseInt(commandText[3]) == null) {
            clientMessage(ChatColor.BLUE + "[AgameR MoreOptions PE] " + ChatColor.RED + "Usage: .tp <x> <y> <z>");
        } else {
            Entity.setPosition(getPlayerEnt(), parseInt(commandText[1]), parseInt(commandText[2]), parseInt(commandText[3]));
            clientMessage(ChatColor.BLUE + "[AgameR MoreOptions PE] " + ChatColor.WHITE + "Successfully teleported player to X: " + parseInt(commandText[1]) + " Y: " + parseInt(commandText[2]) + " Z: " + parseInt(commandText[3]));
        }
    }
    if(commandText[0] == ".sethome") {
        preventDefault();
        MoreOptionsPE.setHome();
    }
    if(commandText[0] == ".home") {
        preventDefault();
        MoreOptionsPE.tpHome();
    }
	if(commandText[0] == ".clearhome") {
        preventDefault();
        MoreOptionsPE.clearHome();
    }
    if(commandText[0] == ".leave") {
        preventDefault();
        ModPE.leaveGame();
    }
    if(commandText[0] == ".version") {
        preventDefault();
        clientMessage(ChatColor.BLUE + "[AgameR MoreOptions PE] " + ChatColor.WHITE + "Current version: " + CURRENT_VERSION);
    }
    if(commandText[0] == ".about") {
        preventDefault();
		closeHacksList();
        aboutScreen();
    }
    if(commandText[0] == ".settings") {
        preventDefault();
		closeHacksList();
        settingsScreen();
		header("Settings");
        exitSettings();
    }
    if(commandText[0] == ".update") {
        preventDefault();
        //Check for updates
        new java.lang.Thread(new java.lang.Runnable() {
            run: function() {
                MoreOptionsPE.getLatestVersion();
                if(latestVersion != CURRENT_VERSION && latestVersion != undefined) {
                    clientMessage(ChatColor.BLUE + "[AgameR MoreOptions PE]" + ChatColor.WHITE + " There is a new version available (v" + latestVersion + " for Minecraft Pocket Edition v" + latestPocketEditionVersion + ")!");
					MoreOptionsPE.showMessage("update", "There is a new version available (v" + latestVersion + " for Minecraft Pocket Edition v" + latestPocketEditionVersion + ")!");
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
	if(commandText[0] == ".easteregg") {
        preventDefault();
        ModPE.goToURL("http://peacestorm.github.io/easter-egg/");
    }
	if(commandText[0] == ".twitter") {
        preventDefault();
        ModPE.goToURL("https://twitter.com/AgameR_Modder/");
    }
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
//Mod version: 1.2.3
//For full changelog, look at the mod's menu ingame


//*Ideas*
//---------
//If you have any ideas for this mod, please send them to my MC-Forum account, or on Twitter: @AgameR_Moddery