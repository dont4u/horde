/**
*	@filename	summoner.js
*	@author		Adpist
*	@desc		Move to & Kill summoner
*	@credits	Adpist, JeanMax / SiC-666 / Dark-f, Alogwe, Imba, Kolton, Larryw, Noah, QQValpen, Sam, YGM
*/

// Teleporting Sorc will be at least level 18 as required by MAIN to reach this stage.
function summoner(mfRun) {
	var i, journal;

	if (mfRun) 	{ print("mfing summoner"); }
	else		{ print("killing summoner"); }
	
	if (!me.inTown) {
		Town.goToTown();
	}
	
	if (!mfRun) {
		Town.repair();
		Town.buyPotions();
		Party.wholeTeamInGame();
	}

	if (Role.teleportingChar) {
	
		if (mfRun) {
			Pather.useWaypoint(74, true);
		}
		else {
			Pather.teleport = true;

			Config.ClearType = false;

			if (me.area !== 74) {
				if (!me.inTown) {
					Town.goToTown();
				}

				Town.move("waypoint");

				Pather.useWaypoint(74, true);
			}
		}

		Precast.doPrecast(true);

		journal = getPresetUnit(74, 2, 357);

		if (!journal) {
			throw new Error("HordeSystem.summoner: No preset unit in Arcane Sanctuary.");
		}

		while (getDistance(me.x, me.y, journal.roomx * 5 + journal.x - 3, journal.roomy * 5 + journal.y - 3) > 10) {
			try {
				Pather.moveToPreset(74, 2, 357, -3, -3, false, false);
			} catch (e) {
				print("Caught Error.");

				print(e);
			}
		}

		Pather.makePortal();
	} else {
		Town.goToTown(2);
		
		Town.move("portalspot");

		var j = 0;

		while (!Pather.usePortal(74, null)) {
			delay(250);

			if (j % 20 == 0) { // Check for Team Members every 5 seconds.
				Party.wholeTeamInGame();
			}

			j += 1;
		}
	}

	Party.wholeTeamInGame();

	try {
		Attack.kill(250);
	} catch (e) {
	
	}
	
	Attack.clear(20);

	Pickit.pickItems();

	Pather.moveToPreset(74, 2, 357, -3, -3, Config.ClearType);

	journal = getUnit(2, 357);

	for (i = 0; i < 5; i += 1) {
		if (journal) {
			sendPacket(1, 0x13, 4, journal.type, 4, journal.gid);

			delay(1000);

			me.cancel();
		}

		if (Pather.getPortal(46)) {
			break;
		}
	}

	if (i === 5) {
		throw new Error("summoner failed");
	}

	Pather.usePortal(46);

	if (mfRun) {
		Pather.useWaypoint(1);
	}
	else {
		Waypoint.clickWP();
	}

	return true;
}