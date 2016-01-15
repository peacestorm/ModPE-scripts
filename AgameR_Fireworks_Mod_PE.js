//AgameR Fireworks Mod PE by peacestorm

/**
 * #############################
 * @name AgameR Fireworks Mod PE
 * @version v1.1
 * @author peacestorm
 * @credits MrAndyPE
 * #############################
 **/

// ###########################
// MOD FUNCTIONS AND VARIABLES
// ###########################

var FireworksModPE = {};

const CURRENT_VERSION = "1.1";
var latestVersion;
var latestPocketEditionVersion;

const FIREWORK_ROCKET_ID = 1000;
const FIREWORK_FOUNTAIN_ID = 1001;
const FIREWORK_SUPERROCKET_ID = 1002;

ModPE.setItem(FIREWORK_ROCKET_ID, "fireworks", 0, "Firework Rocket");
ModPE.setItem(FIREWORK_FOUNTAIN_ID, "fireworks", 0, "Firework Fountain");
ModPE.setItem(FIREWORK_SUPERROCKET_ID, "fireworks", 0, "Super Firework Rocket");

/*Item.addShapedRecipe(FIREWORK_ROCKET_ID, 32, 0, ["   ", "pg ", "   "], ["p", 339, 0, "g", 289, 0]);
Item.addShapedRecipe(FIREWORK_SUPERROCKET_ID, 32, 0, ["ggg", "pgp", "ggg"], ["p", 339, 0, "g", 289, 0]);*/
Item.addCraftRecipe(FIREWORK_ROCKET_ID, 16, 0, [339, 2, 0, 289, 2, 0]);
Item.addCraftRecipe(FIREWORK_FOUNTAIN_ID, 16, 0, [339, 1, 0, 289, 1, 0]);
Item.addCraftRecipe(FIREWORK_SUPERROCKET_ID, 1, 0, [FIREWORK_ROCKET_ID, 4, 0]);

FireworksModPE.clientMessage = function(text) {
	clientMessage(ChatColor.RED + "[AgameR Fireworks Mod PE] " + ChatColor.WHITE + text);
}

FireworksModPE.initCreativeItems = function() {
	Player.addItemCreativeInv(FIREWORK_ROCKET_ID, 1, 0);
	Player.addItemCreativeInv(FIREWORK_FOUNTAIN_ID, 1, 0);
	Player.addItemCreativeInv(FIREWORK_SUPERROCKET_ID, 1, 0);
}

FireworksModPE.getLatestVersion = function() {
    try {
        // download content
        var url = new java.net.URL("https://raw.githubusercontent.com/peacestorm/ModPE-scripts/master/version/agamer-fireworksmodpe-version");
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
        FireworksModPE.clientMessage("Can't check for updates, please check your Internet connection.");
        ModPE.log("[AgameR Fireworks Mod PE] FireworksModPE.getLatestVersion() caught an error: " + err);
    }
}

FireworksModPE.reduceSelectedSlotAmount = function() {
	if(Level.getGameMode() == 0) {
		Entity.setCarriedItem(Player.getEntity(), Player.getCarriedItem(), Player.getCarriedItemCount() - 1);
	}
}

function random(min, max) {
	return Math.floor((Math.random() * max) + min);
}

FireworksModPE.currentFireworks = [];
	// {type, counter, isPlaced, x, y, z, side}
	
FireworksModPE.randomCoord = [-3, -2, -1, 0, 1, 2, 3];

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

var tts = new android.speech.tts.TextToSpeech(ctx, new android.speech.tts.TextToSpeech.OnInitListener({
	onInit: function(status) {
		tts.setLanguage(java.util.Locale.US);
	}
}));

FireworksModPE.placeFirework = function(x, y, z, type, counter, side) {
	FireworksModPE.currentFireworks.push({
		type: type, //"rocket", "fountain", "superrocket"
		counter: counter,
		x: x,
		y: y,
		z: z,
		side: side
	});
}

FireworksModPE.newLevel = function() {
	FireworksModPE.initCreativeItems();
	FireworksModPE.clientMessage("Mod Initialized!");
	new java.lang.Thread(new java.lang.Runnable() {
        run: function() {
            FireworksModPE.getLatestVersion();
            if (latestVersion != CURRENT_VERSION && latestVersion != undefined) {
                clientMessage(ChatColor.RED + "[AgameR Fireworks Mod PE]" + ChatColor.WHITE + " There is a new version available (v" + latestVersion + " for Minecraft Pocket Edition v" + latestPocketEditionVersion + ")!");
            } else {
                ctx.runOnUiThread(new java.lang.Runnable() {
                    run: function() {
                        android.widget.Toast.makeText(ctx, new android.text.Html.fromHtml("<b>AgameR Fireworks Mod PE</b> You have the latest version"), 0).show();
                    }
                });
            }
        }
    }).start();
	//tts.speak("Happy new year!", android.speech.tts.TextToSpeech.QUEUE_FLUSH, null);
}

FireworksModPE.useItem = function(x, y, z, itemId, blockId, side, data) {
	switch(itemId) {
		case FIREWORK_ROCKET_ID: {
			FireworksModPE.reduceSelectedSlotAmount();
			FireworksModPE.placeFirework(x, y, z, "rocket", 0, side);
			break;
		}case FIREWORK_FOUNTAIN_ID: {
			FireworksModPE.reduceSelectedSlotAmount();
			FireworksModPE.placeFirework(x, y, z, "fountain", 0, side);
			break;
		}case FIREWORK_SUPERROCKET_ID: {
			FireworksModPE.reduceSelectedSlotAmount();
			FireworksModPE.placeFirework(x, y, z, "superrocket", 0, side);
			break;
		}
	}
}

FireworksModPE.modTick = function() {
	if(FireworksModPE.currentFireworks.length != 0) {
		for(var t = 0; t < FireworksModPE.currentFireworks.length; t++) {
			FireworksModPE.currentFireworks[t].counter++;
			
			var type = FireworksModPE.currentFireworks[t].type;
			var x = FireworksModPE.currentFireworks[t].x;
			var y = FireworksModPE.currentFireworks[t].y;
			var z = FireworksModPE.currentFireworks[t].z;
			var side = FireworksModPE.currentFireworks[t].side;
			var counter = FireworksModPE.currentFireworks[t].counter;
			
			var randomX = FireworksModPE.randomCoord[random(0, 6)];
			var randomY = FireworksModPE.randomCoord[random(0, 6)];
			var randomZ = FireworksModPE.randomCoord[random(0, 6)];
			
			
			if(type == "rocket") {
				if(counter > 0 && counter < 180) {
					Level.addParticle(ParticleType.flame, x-(side==4?1:0)+(side==5?1:0)+0.5,(y-(side==0?1:0)+(side==1?1:0)+0.5)+counter/10,z-(side==2?1:0)+(side==3?1:0)+0.5, 0, 0, 0, 100);
					Level.playSound(x-(side==4?1:0)+(side==5?1:0)+0.5,(y-(side==0?1:0)+(side==1?1:0)+0.5)+counter/10,z-(side==2?1:0)+(side==3?1:0)+0.5, "mob.creeper", 100, 0);
				}
				else if(counter > 180 && counter < 201) {
					Level.addParticle(ParticleType.flame, x-(side==4?1:0)+(side==5?1:0)+0.5,(y-(side==0?1:0)+(side==1?1:0)+0.5)+counter/10,z-(side==2?1:0)+(side==3?1:0)+0.5, 0, 0, 0, 100);
					Level.playSound(x-(side==4?1:0)+(side==5?1:0)+0.5,(y-(side==0?1:0)+(side==1?1:0)+0.5)+counter/10,z-(side==2?1:0)+(side==3?1:0)+0.5, "mob.creeper", 100, 0);
					if(getTile(x-(side==4?1:0)+(side==5?1:0)+0.5,(y-(side==0?1:0)+(side==1?1:0)+0.5)+counter/10,z-(side==2?1:0)+(side==3?1:0)+0.5) == 0) {
						Level.setTile(x-(side==4?1:0)+(side==5?1:0)+0.5,(y-(side==0?1:0)+(side==1?1:0)+0.5)+counter/10,z-(side==2?1:0)+(side==3?1:0)+0.5, 35, random(0, 16));
						Level.destroyBlock(x-(side==4?1:0)+(side==5?1:0)+0.5,(y-(side==0?1:0)+(side==1?1:0)+0.5)+counter/10,z-(side==2?1:0)+(side==3?1:0)+0.5, false);
					}
				}
				else if(counter == 201) {
					Level.addParticle(ParticleType.flame, x-(side==4?1:0)+(side==5?1:0)+0.5,(y-(side==0?1:0)+(side==1?1:0)+0.5)+counter/10,z-(side==2?1:0)+(side==3?1:0)+0.5, 0, 0, 0, 100);
					Level.playSound(x-(side==4?1:0)+(side==5?1:0)+0.5,(y-(side==0?1:0)+(side==1?1:0)+0.5)+counter/10,z-(side==2?1:0)+(side==3?1:0)+0.5, "random.explode", 100, 0);
					Level.explode(x-(side==4?1:0)+(side==5?1:0)+0.5,(y-(side==0?1:0)+(side==1?1:0)+0.5)+counter/10,z-(side==2?1:0)+(side==3?1:0)+0.5, 1);
					if(getTile(x-(side==4?1:0)+(side==5?1:0)+0.5,(y-(side==0?1:0)+(side==1?1:0)+0.5)+counter/10,z-(side==2?1:0)+(side==3?1:0)+0.5) == 0) {
						Level.setTile(x-(side==4?1:0)+(side==5?1:0)+0.5,(y-(side==0?1:0)+(side==1?1:0)+0.5)+counter/10,z-(side==2?1:0)+(side==3?1:0)+0.5, 35, random(0, 16));
						Level.destroyBlock(x-(side==4?1:0)+(side==5?1:0)+0.5,(y-(side==0?1:0)+(side==1?1:0)+0.5)+counter/10,z-(side==2?1:0)+(side==3?1:0)+0.5, false);
					}
					FireworksModPE.currentFireworks.splice(t, 1);
				}
			}
			else if(type == "fountain"){
				if(counter > 0 && counter < 100) {
					Level.addParticle(ParticleType.flame, x-(side==4?1:0)+(side==5?1:0)+0.5,(y-(side==0?1:0)+(side==1?1:0)+0.5)+2,z-(side==2?1:0)+(side==3?1:0)+0.5, 0, 0, 0, 100);
					Level.playSound(x-(side==4?1:0)+(side==5?1:0)+0.5,(y-(side==0?1:0)+(side==1?1:0)+0.5)+2,z-(side==2?1:0)+(side==3?1:0)+0.5, "mob.creeper", 100, 0);
					if(getTile(x-(side==4?1:0)+(side==5?1:0)+0.5,(y-(side==0?1:0)+(side==1?1:0)+0.5)+2,z-(side==2?1:0)+(side==3?1:0)+0.5) == 0) {
						Level.setTile(x-(side==4?1:0)+(side==5?1:0)+0.5,(y-(side==0?1:0)+(side==1?1:0)+0.5)+2,z-(side==2?1:0)+(side==3?1:0)+0.5, 35, random(0, 16));
						Level.destroyBlock(x-(side==4?1:0)+(side==5?1:0)+0.5,(y-(side==0?1:0)+(side==1?1:0)+0.5)+2,z-(side==2?1:0)+(side==3?1:0)+0.5, false);
					}
				}
				else if(counter == 101) {
					Level.addParticle(ParticleType.flame, x-(side==4?1:0)+(side==5?1:0)+0.5,(y-(side==0?1:0)+(side==1?1:0)+0.5)+2,z-(side==2?1:0)+(side==3?1:0)+0.5, 0, 0, 0, 100);
					Level.playSound(x-(side==4?1:0)+(side==5?1:0)+0.5,(y-(side==0?1:0)+(side==1?1:0)+0.5)+2,z-(side==2?1:0)+(side==3?1:0)+0.5, "random.explode", 100, 0);
					if(getTile(x-(side==4?1:0)+(side==5?1:0)+0.5,(y-(side==0?1:0)+(side==1?1:0)+0.5)+2,z-(side==2?1:0)+(side==3?1:0)+0.5) == 0) {
						Level.setTile(x-(side==4?1:0)+(side==5?1:0)+0.5,(y-(side==0?1:0)+(side==1?1:0)+0.5)+2,z-(side==2?1:0)+(side==3?1:0)+0.5, 35, random(0, 16));
						Level.destroyBlock(x-(side==4?1:0)+(side==5?1:0)+0.5,(y-(side==0?1:0)+(side==1?1:0)+0.5)+2,z-(side==2?1:0)+(side==3?1:0)+0.5, false);
					}
					FireworksModPE.currentFireworks.splice(t, 1);
				}
			}
			else if(type == "superrocket"){
				if(counter > 0 && counter < 220) {
					Level.addParticle(ParticleType.flame, x-(side==4?1:0)+(side==5?1:0)+0.5,(y-(side==0?1:0)+(side==1?1:0)+0.5)+counter/10,z-(side==2?1:0)+(side==3?1:0)+0.5, 0, 0, 0, 100);
					Level.playSound(x-(side==4?1:0)+(side==5?1:0)+0.5,(y-(side==0?1:0)+(side==1?1:0)+0.5)+counter/10,z-(side==2?1:0)+(side==3?1:0)+0.5, "mob.creeper", 100, 0);
				}
				else if(counter > 220 && counter < 241) {
					Level.addParticle(ParticleType.flame, x-(side==4?1:0)+(side==5?1:0)+0.5,(y-(side==0?1:0)+(side==1?1:0)+0.5)+counter/10,z-(side==2?1:0)+(side==3?1:0)+0.5, 0, 0, 0, 100);
					Level.playSound(x-(side==4?1:0)+(side==5?1:0)+0.5,(y-(side==0?1:0)+(side==1?1:0)+0.5)+counter/10,z-(side==2?1:0)+(side==3?1:0)+0.5, "random.explode", 100, 0);
					Level.addParticle(ParticleType.redstone, x-(side==4?1:0)+(side==5?1:0)+0.5+randomX,(y-(side==0?1:0)+(side==1?1:0)+0.5)+counter/10+randomY,z-(side==2?1:0)+(side==3?1:0)+0.5+randomZ, 0, 0, 0, 2);
					if(getTile(x-(side==4?1:0)+(side==5?1:0)+0.5+randomX,(y-(side==0?1:0)+(side==1?1:0)+0.5)+counter/10+randomY,(z-(side==2?1:0)+(side==3?1:0)+0.5)+randomZ) == 0) {
						Level.setTile((x-(side==4?1:0)+(side==5?1:0)+0.5)+randomX,(y-(side==0?1:0)+(side==1?1:0)+0.5)+counter/10+randomY,(z-(side==2?1:0)+(side==3?1:0)+0.5)+randomZ, 35, random(0, 16));
						Level.destroyBlock((x-(side==4?1:0)+(side==5?1:0)+0.5)+randomX,(y-(side==0?1:0)+(side==1?1:0)+0.5)+counter/10+randomY,(z-(side==2?1:0)+(side==3?1:0)+0.5)+randomZ, false);
					}
				}
				else if(counter == 241) {
					Level.addParticle(ParticleType.flame, x-(side==4?1:0)+(side==5?1:0)+0.5,(y-(side==0?1:0)+(side==1?1:0)+0.5)+counter/10,z-(side==2?1:0)+(side==3?1:0)+0.5, 0, 0, 0, 100);
					Level.playSound(x-(side==4?1:0)+(side==5?1:0)+0.5+randomX,(y-(side==0?1:0)+(side==1?1:0)+0.5)+counter/10+randomY,z-(side==2?1:0)+(side==3?1:0)+0.5+randomZ, "random.explode", 100, 0);
					Level.addParticle(ParticleType.redstone, x-(side==4?1:0)+(side==5?1:0)+0.5+randomX,(y-(side==0?1:0)+(side==1?1:0)+0.5)+counter/10+randomY,z-(side==2?1:0)+(side==3?1:0)+0.5+randomZ, 0, 0, 0, 1);
					if(getTile(x-(side==4?1:0)+(side==5?1:0)+0.5+randomX,(y-(side==0?1:0)+(side==1?1:0)+0.5)+counter/10+randomY,(z-(side==2?1:0)+(side==3?1:0)+0.5)+randomZ) == 0) {
						Level.setTile((x-(side==4?1:0)+(side==5?1:0)+0.5)+randomX,(y-(side==0?1:0)+(side==1?1:0)+0.5)+counter/10+randomY,(z-(side==2?1:0)+(side==3?1:0)+0.5)+randomZ, 35, random(0, 16));
						Level.destroyBlock((x-(side==4?1:0)+(side==5?1:0)+0.5)+randomX,(y-(side==0?1:0)+(side==1?1:0)+0.5)+counter/10+randomY,(z-(side==2?1:0)+(side==3?1:0)+0.5)+randomZ, false);
					}
					FireworksModPE.currentFireworks.splice(t, 1);
				}
			}
		}
	}
}

FireworksModPE.procCmd = function(cmd) {
	cmd = cmd.split(" ");
	switch(cmd[0]) {
		case "changelog": {
			switch(cmd[1]) {
				case "fireworksmodpe": {
					FireworksModPE.clientMessage("v1.0: Initial release");
					FireworksModPE.clientMessage("v1.1: Added Super Firework Rocket, you can now place multiple fireworks at the same time, added crafting recipes, added survival mechanics, added /changelog fireworksmodpe command, code improvements");
					break;
				}
			}
			break;
		}
	}
}

// ########################
// HOOKS AND INITIALIZATION
// ########################

function newLevel() {
	FireworksModPE.newLevel();
}

function useItem(x, y, z, itemId, blockId, side, data) {
	FireworksModPE.useItem(x, y, z, itemId, blockId, side, data);
}

function modTick() {
	FireworksModPE.modTick();
}

function procCmd(cmd) {
	FireworksModPE.procCmd(cmd);
}
