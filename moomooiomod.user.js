// ==UserScript==
// @name           moomoo.io mod,hack,cheat unblocked for 2018
// @description    Its the mod of moomoo.io with police mod,animal mod,free hats mod,animal caps mod,numpad keys mod,menu interval etc...
// @version        1.1
// @namespace      moomooioplay.com
// @author         moomooioplay.com
// @match          *://moomoo.io/*
// @match          http://dev.moomoo.io/*
// @require        https://code.jquery.com/jquery-3.3.1.min.js
// @require        https://raw.githubusercontent.com/jsuploader/msgpack5/master/msgpack5.js
// ==/UserScript==

//document functions
document.getElementById("gameName").innerHTML = '<a target="_blank" id="gameName3" hreF="https://slithere.com">MOOMOO.io</a>';
document.querySelector("head").innerHTML = document.querySelector("head").innerHTML + '<link rel="stylesheet" href="http://wormax.org/chrome3kafa/moomods.css" type="text/css" media="screen, projection" /><link rel="stylesheet" href="https://iogameslist.org/wp-content/uploads/modal.css" type="text/css">';
$("#adCard").html('<div align="left"><div class="menuHeader">How To Use Mod?</div><div id="desktopInstructions" class="menuText"><a class="menuText" title="When you press *P* Key it will change police hats automatically. Please be sure that you have enough gold for Bummble Hat and Winter Cap, else it wont work.">Police Mod <font style="font-size: 18px;" color="red">(?)</font>:</a><a href="https://slithere.com" target="_blank" style="font-size:18px;padding-left:46px;">P key</a><br><a title="When you press *O* it will change free animal hats automatically." class="menuText">Animals Mod <font style="font-size: 18px;" color="red">(?)</font>:</a><a href="https://survivio.info" target="_blank" style="font-size:18px;padding-left:28px;">O key</a><br><a title="When you press *K* it will change all free hats automatically. (not Caps)" class="menuText">Free Hats Mod <font style="font-size: 18px;" color="red">(?)</font>:</a><a href="https://moomooioplay.com" target="_blank" style="font-size:18px;padding-left:13px;">K key</a><br><a title="When you press *L* key it will change animal caps automatically." class="menuText">Animal Caps <font style="font-size: 18px;" color="red">(?)</font>:</a><a href="https://mopeiogame.com" target="_blank" style="font-size:18px;padding-left:34px;">L key</a></br><a title="When you press *F* key it will put trap and no one will see that you put it there." class="menuText">Booby Trap <font style="font-size: 18px;" color="red">(?)</font>:</a><a href="https://slitherioplay.org" target="_blank" style="font-size:18px;padding-left:42px;">F key</a></br><a title="When you press *M* key it will on/off background of map." class="menuText">Mini Map <font style="font-size: 18px;" color="red">(?)</font>:</a><a href="https://foesio.org" target="_blank" style="font-size:18px;padding-left:60px;">M key</a><br><a title="When you press *N* key it will show or hide objects which you and your clan put." class="menuText">Object Pointer <font style="font-size: 18px;" color="red">(?)</font>:</a><a href="https://diepioplay.org" target="_blank" style="font-size:18px;padding-left:14px;">N key</a><br>Heal-Bull On/Off: <a href="https://zombsroyaleio.org" target="_blank" style="font-size:18px;padding-left:21px;">T key</a><br><br>Auto Heal: Collect Food<br>Bull Helmet: <a title="If you buy the bull helmet, any time you swing this mod will put the bull helmet on and take it off automatically. If you put on another hat, the mod will automatically remember that hat and put it on after its done with the bull helmet. The mod will also take of the monkey tail (if its on) when you swing. ---> Imagine the combinations! Soldier +bull and plague +bull are good combos to get started with" style="font-size: 18px;color:dodgerblue;">Read Me (?)</a><br></div><hr><button class="trigger">Modify Interval Speed</button><div class="modal"><div class="modal-content"><span class="close-button">&times;</span><div align="left"><a title="Its the speed of auto healing, default is 150 | Doing lower is faster, but moomoo.io game has pinocchio mode for fast healing that canceling healing..">Auto Heal Speed (?): </a><input onchange="handleMessage();" id="autospeed" type="number" value="150" style="width:60px;"></br><a title="Its the speed of animals mod, default is 200">Animals Mod Speed (?): </a><input onchange="anspeedupdate();" id="aspeed" type="number" value="200" style="width:60px;"></br><a title="Its the speed of free hats mod, default is 200">Free Hats Mod Speed (?): </a><input onchange="plspeedupdate();" id="pspeed" type="number" value="200" style="width:60px;"></br><a title="Its the speed of animal caps mod, default is 200">Animal Caps Mod Speed (?): </a><input onchange="clspeedupdate();" id="caspeed" type="number" value="200" style="width:60px;"></br><a title="Its the speed of police mod, default is 250">Police Mod Speed (?): </a><input onchange="frspeedupdate();" id="fspeed" type="number" value="250" style="width:60px;"></div></div></div> - <button class="trigger2">Extra Feature Keys</button><div class="modal2"><div class="modal-content"><span class="close-button2">&times;</span>Numpad0 = <input onchange="nm0(this.value)" type="number" value="0" id="nm00" style="width:60px;"></br>Numpad1 = <input onchange="nm1(this.value)" type="number" value="7" id="nm11" style="width:60px;"></br>Numpad2 = <input onchange="nm2(this.value)" type="number" value="6" id="nm22" style="width:60px;"></br>Numpad3 = <input onchange="nm3(this.value)" type="number" value="20" id="nm33" style="width:60px;"></br>Numpad4 = <input onchange="nm4(this.value)" id="nm44" type="number" value="31" style="width:60px;"></br>Numpad5 = <input onchange="nm5(this.value)" id="nm55" type="number" value="10" style="width:60px;"></br>Numpad6 = <input onchange="nm6(this.value)" id="nm66" type="number" value="11" style="width:60px;"></br>Numpad7 = <input onchange="nm7(this.value)" type="number" id="nm77" value="22" style="width:60px;"></br>Numpad8 = <input onchange="nm8(this.value)" id="nm88" type="number" value="12" style="width:60px;"></br>Numpad9 = <input onchange="nm9(this.value)" type="number" id="nm99" value="9" style="width:60px;"></br><div id="storeHolder" style="width:270px;" >     <div style="font-size:20px;" class="storeItem" id="storeDisplay0"> <img class="hatPreview" src="https://i.hizliresim.com/5y9PBD.png"><span>Default : 0</span> </div><div style="font-size:20px;" class="storeItem" id="storeDisplay1"> <img class="hatPreview" src="../img/hats/hat_51.png"><span>Moo Cap : 51</span> </div><div style="font-size:20px;" class="storeItem" id="storeDisplay2"> <img class="hatPreview" src="../img/hats/hat_50.png"><span>Apple Cap : 50</span> </div><div style="font-size:20px;" class="storeItem" id="storeDisplay3"> <img class="hatPreview" src="../img/hats/hat_28.png"><span>Moo Head : 28</span> </div><div style="font-size:20px;" class="storeItem" id="storeDisplay4"> <img class="hatPreview" src="../img/hats/hat_29.png"><span>Pig Head : 29</span> </div><div style="font-size:20px;" class="storeItem" id="storeDisplay5"> <img class="hatPreview" src="../img/hats/hat_30.png"><span>Fluff Head : 30</span> </div><div style="font-size:20px;" class="storeItem" id="storeDisplay6"> <img class="hatPreview" src="../img/hats/hat_36.png"><span>Pandou Head : 36</span> </div><div style="font-size:20px;" class="storeItem" id="storeDisplay7"> <img class="hatPreview" src="../img/hats/hat_37.png"><span>Bear Head : 37</span> </div><div style="font-size:20px;" class="storeItem" id="storeDisplay8"> <img class="hatPreview" src="../img/hats/hat_38.png"><span>Monkey Head : 38</span> </div><div style="font-size:20px;" class="storeItem" id="storeDisplay9"> <img class="hatPreview" src="../img/hats/hat_44.png"><span>Polar Head : 44</span> </div><div style="font-size:20px;" class="storeItem" id="storeDisplay10"> <img class="hatPreview" src="../img/hats/hat_35.png"><span>Fez Hat : 35</span> </div><div style="font-size:20px;" class="storeItem" id="storeDisplay11"> <img class="hatPreview" src="../img/hats/hat_42.png"><span>Enigma Hat : 42</span> </div><div style="font-size:20px;" class="storeItem" id="storeDisplay12"> <img class="hatPreview" src="../img/hats/hat_43.png"><span>Blitz Hat : 43</span> </div><div style="font-size:20px;" class="storeItem" id="storeDisplay13"> <img class="hatPreview" src="../img/hats/hat_49.png"><span>Bob XIII Hat : 49</span> </div><div style="font-size:20px;" class="storeItem" id="storeDisplay14"> <img class="hatPreview" src="../img/hats/hat_8.png"><span>Bummle Hat : 8</span> </div><div style="font-size:20px;" class="storeItem" id="storeDisplay15"> <img class="hatPreview" src="../img/hats/hat_2.png"><span>Straw Hat : 2</span> </div><div style="font-size:20px;" class="storeItem" id="storeDisplay16"> <img class="hatPreview" src="../img/hats/hat_15.png"><span>Winter Cap : 15</span> </div><div style="font-size:20px;" class="storeItem" id="storeDisplay17"> <img class="hatPreview" src="../img/hats/hat_5.png"><span>Cowboy Hat : 5</span> </div><div style="font-size:20px;" class="storeItem" id="storeDisplay18"> <img class="hatPreview" src="../img/hats/hat_4.png"><span>Ranger Hat : 4</span> </div><div style="font-size:20px;" class="storeItem" id="storeDisplay19"> <img class="hatPreview" src="../img/hats/hat_18.png"><span>Explorer Hat : 18</span> </div><div style="font-size:20px;" class="storeItem" id="storeDisplay20"> <img class="hatPreview" src="../img/hats/hat_31.png"><span>Flipper Hat : 31</span> </div><div style="font-size:20px;" class="storeItem" id="storeDisplay21"> <img class="hatPreview" src="../img/hats/hat_1.png"><span>Marksman Cap : 1</span> </div><div style="font-size:20px;" class="storeItem" id="storeDisplay22"> <img class="hatPreview" src="../img/hats/hat_10.png"><span>Bush Gear : 10</span> </div><div style="font-size:20px;" class="storeItem" id="storeDisplay23"> <img class="hatPreview" src="../img/hats/hat_48.png"><span>Halo : 48</span> </div><div style="font-size:20px;" class="storeItem" id="storeDisplay24"> <img class="hatPreview" src="../img/hats/hat_6.png"><span>Soldier Helmet : 6</span> </div><div style="font-size:18px;" class="storeItem" id="storeDisplay25"> <img class="hatPreview" src="../img/hats/hat_23.png"><span>Anti Venom Gear : 23</span> </div><div style="font-size:20px;" class="storeItem" id="storeDisplay26"> <img class="hatPreview" src="../img/hats/hat_13.png"><span>Medic Gear : 13</span> </div><div style="font-size:20px;" class="storeItem" id="storeDisplay27"> <img class="hatPreview" src="../img/hats/hat_9.png"><span>Miners Helmet : 9</span> </div><div style="font-size:20px;" class="storeItem" id="storeDisplay28"> <img class="hatPreview" src="../img/hats/hat_32.png"><span>Musketeer Hat : 32</span> </div><div style="font-size:20px;" class="storeItem" id="storeDisplay29"> <img class="hatPreview" src="../img/hats/hat_7.png"><span>Bull Helmet : 7</span> </div><div style="font-size:20px;" class="storeItem" id="storeDisplay30"> <img class="hatPreview" src="../img/hats/hat_22.png"><span>Emp Helmet : 22</span> </div><div style="font-size:20px;" class="storeItem" id="storeDisplay31"> <img class="hatPreview" src="../img/hats/hat_12.png"><span>Booster Hat : 12</span> </div><div style="font-size:19px;" class="storeItem" id="storeDisplay32"> <img class="hatPreview" src="../img/hats/hat_26.png"><span>Barbarian Armor : 26</span> </div><div style="font-size:20px;" class="storeItem" id="storeDisplay33"> <img class="hatPreview" src="../img/hats/hat_21.png"><span>Plague Mask : 21</span> </div><div style="font-size:20px;" class="storeItem" id="storeDisplay34"> <img class="hatPreview" src="../img/hats/hat_46.png"><span>Bull Mask : 46</span> </div><div style="font-size:20px;" class="storeItem" id="storeDisplay35"> <img class="hatPreview" src="../img/hats/hat_14_p.png"><span>Windmill Hat : 14</span> </div><div style="font-size:20px;" class="storeItem" id="storeDisplay36"> <img class="hatPreview" src="../img/hats/hat_11_p.png"><span>Spike Gear : 11</span> </div><div style="font-size:20px;" class="storeItem" id="storeDisplay37"> <img class="hatPreview" src="../img/hats/hat_53_p.png"><span>Turret Gear : 53</span> </div><div style="font-size:20px;" class="storeItem" id="storeDisplay38"> <img class="hatPreview" src="../img/hats/hat_20.png"><span>Samurai Armor : 20</span> </div><div style="font-size:20px;" class="storeItem" id="storeDisplay39"> <img class="hatPreview" src="../img/hats/hat_16.png"><span>Bushido Armor : 16</span> </div><div style="font-size:20px;" class="storeItem" id="storeDisplay40"> <img class="hatPreview" src="../img/hats/hat_27.png"><span>Scavenger Gear : 27</span> </div><div style="font-size:20px;" class="storeItem" id="storeDisplay41"> <img class="hatPreview" src="../img/hats/hat_40.png"><span>Tank Gear : 40</span> </div></div></div></div><hr><div id="durum">Heal <font color="green">ON</font> / Bull Hat OFF</div><div id="durump">Police Mod: OFF</div><div id="duruma">Animals Mod: OFF</div><div id="durumc">Animal Caps: OFF</div><div id="durumf">Free Hats Mod: OFF</div><div id="durumm">Mini Map: <font color="green">ON</font></div><div id="durumo">Object Pointer: <font color="green">ON</font></div></div><hr><div align="left"> <center> <div class="menuHeader">Websites & Mods:</div></center> <div id="desktopInstructions" class="menuText"><a href="https://slithere.com" target="_blank" style="font-size:12px;">SLITHERE.COM</a>, <a href="https://zombsroyaleio.org" target="_blank" style="font-size:12px;">ZOMBSROYALEIO.ORG</a>, <a href="https://foesio.org" target="_blank" style="font-size:12px;">FOESIO.ORG</a></br><a href="https://slitherioplay.org" target="_blank" style="font-size:12px;">SLITHERIOPLAY.ORG</a>,<a href="https://diepioplay.org" target="_blank" style="font-size:12px;">DIEPIOPLAY.ORG</a>,<a href="https://diepioplay.com" target="_blank" style="font-size:12px;">DIEPIOPLAY.COM</a></br><a href="https://moomooioplay.com" target="_blank" style="font-size:12px;">MOOMOOIOPLAY.COM</a>, <a href="https://survivio.info" target="_blank" style="font-size:12px;">SURVIVIO.INFO</a>, <a href="https://bonk-io.net" target="_blank" style="font-size:12px;">BONK-IO.NET</a></br><a href="https://mope-io.net" target="_blank" style="font-size:12px;">MOPE-IO.NET</a>, <a href="https://mopeiogame.com" target="_blank" style="font-size:12px;">MOPEIOGAME.COM</a>, <a href="https://skribbl-io.net" target="_blank" style="font-size:12px;">SKRIBBL-IO.NET</a></br><a href="https://pubgmobile.org" target="_blank" style="font-size:12px;">PUBGMOBILE.ORG</a>, <a href="https://fortniteplay.net" target="_blank" style="font-size:12px;">FORTNITEPLAY.NET</a>, <a href="https://spinz-io.net" target="_blank" style="font-size:12px;">SPINZ-IO.NET</a></br><a href="https://deeeep-io.net" target="_blank" style="font-size:12px;">DEEEEP-IO.NET</a>, <a href="https://iogameslist.org" target="_blank" style="font-size:12px;">IOGAMESLIST.ORG</a>, <a href="https://io-oyunlar.com" target="_blank" style="font-size:12px;">IO-OYUNLAR.COM</a></div></div>');
$("#ageBarContainer").append('</br><div id="hacktext"></div><div style="width: 100%;position: absolute;bottom: 94px;text-align: center;color:blue;font-size: 24px;" id="freetext"></div><div style="width: 100%;position: absolute;bottom: 144px;text-align: center;color: #ed3f00;font-size: 24px;" id="ptext"></div><div style="width: 100%;position: absolute;bottom: 224px;text-align: center;color: #9a008b;font-size: 24px;" id="ctext"></div><div style="width: 100%;position: absolute;top: 100px;text-align: center;color: white;font-size: 12px;" id="bilgitext">M - Mini Map | N - Object Pointer | P - Police Mod | O - Animals Mod | K - Free Hats Mod | L - Animal Caps | F - Booby Trap | J - Close Menu</div><div style="width: 100%;position: absolute;bottom: 170px;text-align: center;color: darkgreen;font-size: 24px;" id="atext"></div><div style="width: 100%;position: absolute;bottom: 196px;text-align: center;color: black;font-size: 24px;" id="mtext"></div>');
document.getElementById("followText").innerHTML = '<a href="https://moomooioplay.com" target="_blank" style="font-size:20px;color:white;">CLICK TO START WITH MORE RESOURCES</a>';
document.getElementById("promoImgHolder").innerHTML = '<a href="https://chrome.google.com/webstore/detail/slitherio-mods-zoom-creat/gkfpaolkkchfafkhdleklbddpcolkdea" target="_blank"><img id="promoImg" src="https://slithere.com/wp-content/uploads/slither-io-mod-chrome-store.jpg" style="width:300px;cursor:pointer"></a><hr><div align="left"><center><div class="menuHeader">Websites & Mods:</div></center><div id="desktopInstructions" class="menuText"><a href="https://slithere.com" target="_blank" style="font-size:12px;">SLITHERE.COM</a>, <a href="https://zombsroyaleio.org" target="_blank" style="font-size:12px;">ZOMBSROYALEIO.ORG</a>, <a href="https://foesio.org" target="_blank" style="font-size:12px;">FOESIO.ORG</a></br><a href="https://slitherioplay.org" target="_blank" style="font-size:12px;">SLITHERIOPLAY.ORG</a>,<a href="https://diepioplay.org" target="_blank" style="font-size:12px;">DIEPIOPLAY.ORG</a>,<a href="https://diepioplay.com" target="_blank" style="font-size:12px;">DIEPIOPLAY.COM</a></br><a href="https://moomooioplay.com" target="_blank" style="font-size:12px;">MOOMOOIOPLAY.COM</a>, <a href="https://survivio.info" target="_blank" style="font-size:12px;">SURVIVIO.INFO</a>, <a href="https://bonk-io.net" target="_blank" style="font-size:12px;">BONK-IO.NET</a></br><a href="https://mope-io.net" target="_blank" style="font-size:12px;">MOPE-IO.NET</a>, <a href="https://mopeiogame.com" target="_blank" style="font-size:12px;">MOPEIOGAME.COM</a>, <a href="https://skribbl-io.net" target="_blank" style="font-size:12px;">SKRIBBL-IO.NET</a></br><a href="https://pubgmobile.org" target="_blank" style="font-size:12px;">PUBGMOBILE.ORG</a>, <a href="https://fortniteplay.net" target="_blank" style="font-size:12px;">FORTNITEPLAY.NET</a>, <a href="https://spinz-io.net" target="_blank" style="font-size:12px;">SPINZ-IO.NET</a></br><a href="https://deeeep-io.net" target="_blank" style="font-size:12px;">DEEEEP-IO.NET</a>, <a href="https://iogameslist.org" target="_blank" style="font-size:12px;">IOGAMESLIST.ORG</a>, <a href="https://io-oyunlar.com" target="_blank" style="font-size:12px;">IO-OYUNLAR.COM</a></div></div>';
document.getElementById("youtuberOf").innerHTML = '<iframe frameBorder="0" height="220" width="240" src="http://www.wormax.org/chrome3kafa/sosyalbu.html"></iframe>';
document.getElementById("linksContainer2").innerHTML = '<a href="./docs/versions.txt" target="_blank" class="menuLink">Changelog</a> |<a href="https://discord.gg/Z7ESFFK" target="_blank" class="menuLink">Discord</a> |<a href="https://www.reddit.com/r/moomooio/" target="_blank" class="menuLink">Reddit</a> |<a href="./docs/privacy.txt" target="_blank" class="menuLink">Privacy</a> |<a href="http://iogameslist.org" target="_blank" class="menuLink">More Games</a>';

$('#adCard').css({
	'max-height': '430px',
	'width': '320px',
	'overflow-y': 'scroll',
	'-webkit-overflow-scrolling': 'touch'
});

//minimap jquery
$('#mapDisplay').css({
'background': 'url("https://iogameslist.org/wp-content/uploads/moomooio-background.png")'
});

//leaderboard
var relative = document.getElementById("leaderboard")
var wrapper = document.createElement('a');
wrapper.innerHTML = '<div id="leaderboard">SLITHERE.COM</div>';
relative.appendChild(wrapper);

//Interval Modal
	var modal = document.querySelector(".modal");
    var trigger = document.querySelector(".trigger");
    var closeButton = document.querySelector(".close-button");
    function toggleModal() {
        modal.classList.toggle("show-modal");
    }
    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }
    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);

	//Extra Features Modal
	var modal2 = document.querySelector(".modal2");
    var trigger2 = document.querySelector(".trigger2");
    var closeButton2 = document.querySelector(".close-button2");

    function toggleModal2() {
        modal2.classList.toggle("show-modal");
    }
    function windowOnClick2(event) {
        if (event.target === modal2) {
            toggleModal2();
        }
    }
    trigger2.addEventListener("click", toggleModal2);
    closeButton2.addEventListener("click", toggleModal2);
    window.addEventListener("click", windowOnClick2);


//var and consts
const START_SSWX = [4, 132, 164, 116, 121, 112, 101, 2, 164, 100, 97, 116, 97, 147, 161, 52, 1, 192, 167, 111, 112, 116, 105, 111, 110, 115, 129, 168, 99, 111, 109, 112, 114, 101, 115, 115, 195, 163, 110, 115, 112, 161, 47];
const END_SSWX = [4, 132, 164, 116, 121, 112, 101, 2, 164, 100, 97, 116, 97, 147, 161, 52, 0, 192, 167, 111, 112, 116, 105, 111, 110, 115, 129, 168, 99, 111, 109, 112, 114, 101, 115, 115, 195, 163, 110, 115, 112, 161, 47];
const TAKEOUT = [4, 132, 164, 116, 121, 112, 101, 2, 164, 100, 97, 116, 97, 147, 161, 53, 15, 212, 0, 0, 167, 111, 112, 116, 105, 111, 110, 115, 129, 168, 99, 111, 109, 112, 114, 101, 115, 115, 195, 163, 110, 115, 112, 161, 47];
const APPLE = [4, 132, 164, 116, 121, 112, 101, 2, 164, 100, 97, 116, 97, 147, 161, 53, 0, 212, 0, 0, 167, 111, 112, 116, 105, 111, 110, 115, 129, 168, 99, 111, 109, 112, 114, 101, 115, 115, 195, 163, 110, 115, 112, 161, 47];
const COOKIE = [4, 132, 164, 116, 121, 112, 101, 2, 164, 100, 97, 116, 97, 147, 161, 53, 1, 212, 0, 0, 167, 111, 112, 116, 105, 111, 110, 115, 129, 168, 99, 111, 109, 112, 114, 101, 115, 115, 195, 163, 110, 115, 112, 161, 47];
const PIZZA =  [97, 117, 116, 111, 115, 112, 101, 101, 100]
var currentHat = 0;
var currentAccessory = 0;
var IN_PROCESS = false;
var justDied = false;
var recentHealth = 100;
var ws;
var MYID;
var hasApple = true;
var hasCookie = false;
var hasPizza = false;
var foodInHand = false;
var autoheal = true;
var autobull = false;
var STATE = 0;
var allMooMooObjects = {};

//encoder
function encodeSEND(json){
    let OC = msgpack.encode(json);
        var aAdd = Array.from(OC);
        aAdd.unshift(4);
        return new Uint8Array(aAdd).buffer;
}

//bulhelmet
function bullHelmet2(status){
    var dataTemplate = {"data":[], "options":{"compress":false}, "nsp": "/", "type": 2};
    if (!status.includes("m")){
        dataTemplate["data"] = ["13", 0, status == "on" ? 7  : currentHat, 0];
    } else {
        if (currentAccessory == 11){
            dataTemplate["data"] = ["13", 0, status == "mOn" ? 11: 0, 1];
        } else {
             dataTemplate["data"] = ["13", 0, currentAccessory, 1];
        }
    }
    let encoded = encodeSEND(dataTemplate);
    return encoded;
}

//websockets
WebSocket.prototype.oldSend = WebSocket.prototype.send;
WebSocket.prototype.send = function(m){
    if (!ws){
        ws = this;
        socketFound(this);
    }
    let x = new Uint8Array(m);

    let x_arr_SSX = Array.from(x);
    if (x_arr_SSX.length === 43 && autobull){
         if (x_arr_SSX.every( (num, idx) => START_SSWX[idx]==num )){
             IN_PROCESS = true;
             this.oldSend(bullHelmet2("on"));
             this.oldSend(bullHelmet2("mOff"));
         } else if (x_arr_SSX.every( (num, idx) => END_SSWX[idx]==num ) ){
             this.oldSend(bullHelmet2("off"));
             this.oldSend(bullHelmet2("mOn"));
             IN_PROCESS = false;
         }
    }



    this.oldSend(m);
    let realData = msgpack.decode(x.slice(1 , x.length));

    if (realData.data[0]=="1"){
       for (var elem of Object.values(allMooMooObjects)){
          elem.style.opacity = 1;
        }
       justDied = false;
    } else if (realData.data[0]=="13"){
        if (!IN_PROCESS && realData.data.length == 4 && realData.data[3]==0 &&realData.data[1]==0){
            currentHat = realData.data[2];

        } else if (!IN_PROCESS && realData.data.length == 4 && realData.data[3]==1 &&realData.data[1]==0){
            currentAccessory = realData.data[2];
        }

    }
};

//socket founder
function socketFound(socket){
    socket.addEventListener('message', function(message){
        handleMessage(message);
    });
}

//element check
function isElementVisible(e) {
    return (e.offsetParent !== null);
}

//autoheal
function heal(){
    if (recentHealth>=100) return;
    var dataTemplate = {"data":[], "options":{"compress":false}, "nsp": "/", "type": 2};
    if (hasApple){
        if (!haveApple()){
            hasCookie = true;
            heal();
            return;
        }
        else { //User has apple
            var data2 = dataTemplate;
            data2['data'] = ["5", 0, null];
            ws.send(encodeSEND(data2));

        }
    } else {
        if (hasCookie){
            if (!haveCookie()){
                hasCookie = false;
                hasPizza = true;
                heal();
                return;
            }
            else {
                var data2 = dataTemplate;
                data2['data'] = ["5", 1, null];
                ws.send(encodeSEND(data2));
            }
        } else {
            if (hasPizza){
                if (!havePizza()){
                    hasPizza = false;
                    heal();
                    return;
                }
                else {
                    var data2 = dataTemplate;
                    data2['data'] = ["5", 2, null];
                    ws.send(encodeSEND(data2));
                }
            }
        }
    }
    dataTemplate["data"]=["4", 1, null];
    let encoded = encodeSEND(dataTemplate);
    ws.send(encoded);

    recentHealth += hasApple ? 20 : 40;

}

//message handler
function handleMessage(m){
	const autoHealSpeed = document.getElementById("autospeed").value;
    let td = new Uint8Array(m.data);
    var info = msgpack.decode(td.slice(1, td.length)).data;
    if(!info) return;
    if (info[0]=="6"){
        var locInfo = info[1];
        if (locInfo[locInfo.length-1].toString() == MYID){ //Object created
        if (window.innerWidth >= 770){
            var itemID = `actionBarItem${locInfo[locInfo.length-2]+13}`;
            var imgURL = document.getElementById(itemID).style.backgroundImage.toString().match(/url\("(.+)?(?=")/)[1];
            let mapDisplay = document.getElementById("mapDisplay").getBoundingClientRect();
            let mapSize = [14365, 14365];
            let boxSize = [130, 130];
            let targets = [locInfo[1], locInfo[2]].map(item => (130*item)/14365);
            let x = targets[0] + mapDisplay.x - 6;
            let y = targets[1] + mapDisplay.y - 6;
            let newTarget = document.createElement("div");
            newTarget.style = `background-image: url("${imgURL}"); background-size: 12px 12px; width:12px; height:12px; position:absolute; left: ${x}px; top:${y}px; z-index:100`;
            newTarget.className = "mapTarget";
            document.getElementsByTagName("body")[0].appendChild(newTarget);
            allMooMooObjects[locInfo[0]] = newTarget;

        }
    }
    }

    if (info[0]=="12"){
       if (Object.keys(allMooMooObjects).includes(info[1].toString())){
            allMooMooObjects[info[1]].remove();
      }
    }

    if (info[0] == "1" && !MYID){
        MYID =  info[1];
    }

    if (info[0] == "10" && info[1] == MYID && autoheal){
        if (info[2] < 100 && info[2] > 0){
       recentHealth = info[2];
       setTimeout( () => {
           heal();
       }, autoHealSpeed);
        } else if (info[2] > 0) {
            recentHealth = 100;
            if (foodInHand){
             var dataTemplate5 = {"type": 2, "data":[], "options":{"compress":false}, "nsp": "/"};
             dataTemplate5["data"]=["5", 0, null];
             let encoded5 = encodeSEND(dataTemplate5);
             ws.send(encoded5);
            }

        } else {
            hasApple = true; //You've died tragically in combat; back to the apple for you!
        }
    }
    else if(info[0] == "11"){
        for (var elem of Object.values(allMooMooObjects)){
          elem.style.opacity = 0;
        }
        hasApple = true;
        justDied = true;
        recentHealth = 100;

    }

}

//have apple food
function haveApple(){
    if (justDied){
        hasApple = true;
        return true;
    }
    if (hasApple) hasApple = isElementVisible(document.getElementById("actionBarItem13"));
    return hasApple;
}

//have cookie food
function haveCookie(){
    if (hasCookie) hasCookie = isElementVisible(document.getElementById("actionBarItem14"));
    return hasCookie;
}

//have pizza food
function havePizza(){
    if (hasPizza) hasPizza = isElementVisible(document.getElementById("actionBarItem15"));
    return hasPizza;
}

(function() {
	var police1, police2, c1head, c2head, animalhead1, animalhead2, animalhead3, animalhead4, animalhead5, animalhead6, animalhead7, mohead, mohead2, mohead3, mohead4, mohead5, mohead6, mohead7, mohead8, mohead9, mohead10, mohead11;
    var revertmoder, revertfree, revertpolice, revertcaps, revertanimal, revertmap;
    var itemshower = true;
	var zaman = true;
	var zaman2 = true;
	var zaman3 = true;
	var zaman4 = false;
	var zaman5 = false;
    var zaman6 = true;
	var policehead1 = 8;
	var policehead2 = 15;
   	var caps1 = 51;
	var caps2 = 50;
    var ID_FAZE = 45;
    var ID_Moo_Head = 28;
	var ID_Pig_Head = 29;
    var ID_Fluff_Head = 30;
    var ID_Pandou_Head = 36;
    var ID_Bear_Head = 37;
    var ID_Monkey_Head = 38;
    var ID_Polar_Head = 44;
    var ID_Fez_Hat = 35;
    var ID_Enigma_Hat = 42;
    var ID_Blitz_Hat = 43;
    var ID_Bob_XIII_Hat = 49;

   	var nmh0 = 0,nmh1 = 7,nmh2 = 6,nmh3 = 20,nmh4 = 31,nmh5 = 10,nmh6 = 11,mnh7 = 22,nmh8 = 12,nmh9 = 9;
    function nm0(ish) {
	nmh0 = document.getElementById("nm00").value;
    }
	function nm1(ish) {
	nmh1 = document.getElementById("nm11").value;
    }
	function nm2(ish) {
	nmh2 = document.getElementById("nm22").value;
    }
	function nm3(ish) {
	nmh3 = document.getElementById("nm33").value;
    }
	function nm4(ish) {
	nmh4 = document.getElementById("nm44").value;
    }
	function nm5(ish) {
	nmh5 = document.getElementById("nm55").value;
    }
	function nm6(ish) {
	nmh6 = document.getElementById("nm66").value;
    }
	function nm7(ish) {
	nmh7 = document.getElementById("nm77").value;
    }
	function nm8(ish) {
	nmh8 = document.getElementById("nm88").value;
    }
	function nm9(ish) {
	nmh9 = document.getElementById("nm99").value;
    }

	document.addEventListener('keydown', function(e) {
		switch (e.keyCode - 96) {
			case 0: nmh0 = document.getElementById("nm00").value;storeBuy(nmh0),storeEquip(nmh0); break; // UnEquip
			case 1: nmh1 = document.getElementById("nm11").value;storeBuy(nmh1),storeEquip(nmh1); break;
			case 2: nmh2 = document.getElementById("nm22").value;storeBuy(nmh2),storeEquip(nmh2); break;
			case 3: nmh3 = document.getElementById("nm33").value;storeBuy(nmh3),storeEquip(nmh3); break;
			case 4: nmh4 = document.getElementById("nm44").value;storeBuy(nmh4),storeEquip(nmh4); break;
			case 5: nmh5 = document.getElementById("nm55").value;storeBuy(nmh5),storeEquip(nmh5); break;
			case 6: nmh6 = document.getElementById("nm66").value;storeBuy(nmh6),storeEquip(nmh6); break;
			case 7: nmh7 = document.getElementById("nm77").value;storeBuy(nmh7),storeEquip(nmh7); break;
			case 8: nmh8 = document.getElementById("nm88").value;storeBuy(nmh8),storeEquip(nmh8); break;
			case 9: nmh9 = document.getElementById("nm99").value;storeBuy(nmh9),storeEquip(nmh9); break;
		}
	});

	document.addEventListener('keypress', (e)=>{
	   if (e.keyCode == 116 && document.activeElement.id.toLowerCase() !== 'chatbox'){
		   STATE+=1;
		   let coreIndex = STATE%4;
		   let truthArray = [ [1,2].includes(coreIndex), [0,1].includes(coreIndex)];
		   autobull = truthArray[0];
		   autoheal = truthArray[1];
		   clearTimeout(revertmoder);
		   document.getElementById("hacktext").innerHTML = "Heal " + (autoheal ? "ON" : "OFF") + " / Bull Hat " + (autobull ? "ON" : "OFF");
		   document.getElementById("durum").innerHTML = "Heal " + (autoheal ? "<font color=\"green\">ON</font>" : "OFF") + " / Bull Hat " + (autobull ? "<font color=\"green\">ON</font>" : "OFF");
		   revertmoder = setTimeout(function(){ reverttext(); }, 1000);
	   }
    if (e.keyCode == 102 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        var dataTemplate = {"data":[], "options":{"compress":false}, "nsp": "/", "type": 2};
        var data50 = dataTemplate;
        data50["data"]=["5", 15, 0];
        ws.send(encodeSEND(data50));
        var data51 = dataTemplate;
        data51["data"]=["4", 1, null];
        let encoded2 = encodeSEND(data51);
        ws.send(encoded2);
        dataTemplate["data"]=["4",0, null];
        let encoded = encodeSEND(dataTemplate);
        ws.send(encoded);
   }
	   if (e.keyCode == 107 && document.activeElement.id.toLowerCase() !== 'chatbox') {
			if (zaman) {
			clearTimeout(revertfree);
			document.getElementById("freetext").innerHTML = 'Free Hats Mod: ON';
			document.getElementById("durumf").innerHTML = 'Free Hats Mod: <font color=\"green\">ON</font>';
			revertfree = setTimeout(function(){ freetexter(); }, 1000);
            storeEquip(ID_Moo_Head);
            mohead = setTimeout(function(){ h1(); }, 180);
			} else {
			clearTimeout(revertfree);
			document.getElementById("freetext").innerHTML = 'Free Hats Mod: OFF';
			document.getElementById("durumf").innerHTML = 'Free Hats Mod: OFF';
			revertfree = setTimeout(function(){ freetexter(); }, 1000);
            clearTimeout(mohead);
            clearTimeout(mohead2);
            clearTimeout(mohead3);
            clearTimeout(mohead4);
            clearTimeout(mohead5);
            clearTimeout(mohead6);
            clearTimeout(mohead7);
            clearTimeout(mohead8);
            clearTimeout(mohead9);
            clearTimeout(mohead10);
            clearTimeout(mohead11);
            storeEquip(ID_FAZE);
			}
			zaman = !zaman;
		}

		if (e.keyCode == 109 && document.activeElement.id.toLowerCase() !== 'chatbox') {
		   clearTimeout(revertmap);
			revertmap = setTimeout(function(){ maptexter(); }, 1000);
			if (zaman4) {
            document.getElementById("mtext").innerHTML = 'Mini Map: ON';
			document.getElementById("durumm").innerHTML = 'Mini Map: <font color=\"green\">ON</font>';
			$('#mapDisplay').css({
			'background': 'url("https://iogameslist.org/wp-content/uploads/moomooio-background.png")'
			});
			} else {
            document.getElementById("mtext").innerHTML = 'Mini Map: OFF';
			document.getElementById("durumm").innerHTML = 'Mini Map: OFF';
			$('#mapDisplay').css({
			'background': 'rgba(0, 0, 0, 0.25)'
			});
			}
			zaman4 = !zaman4;
		}
        if (e.keyCode == 110 && document.activeElement.id.toLowerCase() !== 'chatbox') {
			itemshower = !itemshower;
            if(itemshower==true)
            {
                $(".mapTarget").show();
                document.getElementById("durumo").innerHTML = 'Object Pointer: <font color=\"green\">ON</font>';
            } else {
                $('.mapTarget').hide();
                document.getElementById("durumo").innerHTML = 'Object Pointer: OFF';
            }
		}
		if (e.keyCode == 111 && document.activeElement.id.toLowerCase() !== 'chatbox') {
			if (zaman3) {

			clearTimeout(revertanimal);
			document.getElementById("atext").innerHTML = 'Animals Mod: ON';
			document.getElementById("duruma").innerHTML = 'Animals Mod: <font color=\"green\">ON</font>';
			revertanimal = setTimeout(function(){ animaltexter(); }, 1000);

            storeEquip(ID_Moo_Head);
            animalhead = setTimeout(function(){ animals1(); }, 230);
			} else {
			clearTimeout(revertanimal);
			document.getElementById("atext").innerHTML = 'Animals Mod: OFF';
			document.getElementById("duruma").innerHTML = 'Animals Mod: OFF';
			revertanimal = setTimeout(function(){ animaltexter(); }, 1000);

            clearTimeout(animalhead1);
            clearTimeout(animalhead2);
			clearTimeout(animalhead3);
			clearTimeout(animalhead4);
			clearTimeout(animalhead5);
			clearTimeout(animalhead6);
			clearTimeout(animalhead7);
            storeEquip(ID_FAZE);
			}
			zaman3 = !zaman3;
		}
		if (e.keyCode == 106 && document.activeElement.id.toLowerCase() !== 'chatbox') {
			if (zaman5) {
				document.getElementById("bilgitext").innerHTML = 'M - Mini Map | N - Object Pointer | P - Police Mod | O - Animals Mod | K - Free Hats Mod | L - Animal Caps | F - Booby Trap | J - Close Menu';
			} else {
				document.getElementById("bilgitext").innerHTML = null;
			}
			zaman5 = !zaman5;
		}
		if (e.keyCode == 112 && document.activeElement.id.toLowerCase() !== 'chatbox') {

			if (zaman2) {
			clearTimeout(revertpolice);
			document.getElementById("ptext").innerHTML = 'Police Mod: ON';
			document.getElementById("durump").innerHTML = 'Police Mod: <font color=\"green\">ON</font>';
			revertpolice = setTimeout(function(){ policetexter(); }, 1000);
			storeBuy(policehead1);
			storeBuy(policehead2);
            storeEquip(policehead1);
            police2 = setTimeout(function(){ p1(); }, 200);
			} else {
			clearTimeout(revertpolice);
			document.getElementById("ptext").innerHTML = 'Police Mod: OFF';
			document.getElementById("durump").innerHTML = 'Police Mod: OFF';
			revertpolice = setTimeout(function(){ policetexter(); }, 1000);


            clearTimeout(police1);
            clearTimeout(police2);
            storeEquip(ID_FAZE);
			}
			zaman2 = !zaman2;
		}
       if (e.keyCode == 108 && document.activeElement.id.toLowerCase() !== 'chatbox') {

			if (zaman6) {
			clearTimeout(revertcaps);
			document.getElementById("ctext").innerHTML = 'Animal Caps: ON';
			document.getElementById("durumc").innerHTML = 'Animal Caps: <font color=\"green\">ON</font>';
			revertcaps = setTimeout(function(){ capstexter(); }, 1000);
            storeEquip(caps1);
            c2head = setTimeout(function(){ c1(); }, 200);
			} else {
			clearTimeout(revertcaps);
			document.getElementById("ctext").innerHTML = 'Animal Caps: OFF';
			document.getElementById("durumc").innerHTML = 'Animal Caps: OFF';
			revertcaps = setTimeout(function(){ capstexter(); }, 1000);
            clearTimeout(c1head);
            clearTimeout(c2head);
            storeEquip(ID_FAZE);
			}
			zaman6 = !zaman6;
		}
	});

		function reverttext(){
		document.getElementById("hacktext").innerHTML = '<div id="ageText"></div>';
		clearTimeout(revertmoder);
		}

        function capstexter(){
		document.getElementById("ctext").innerHTML = '<div id="ageText"></div>';
		clearTimeout(revertcaps);
		}

		function freetexter(){
		document.getElementById("freetext").innerHTML = '<div id="ageText"></div>';
		clearTimeout(revertfree);
		}

		function policetexter(){
		document.getElementById("ptext").innerHTML = '<div id="ageText"></div>';
		clearTimeout(revertpolice);
		}

		function animaltexter(){
		document.getElementById("atext").innerHTML = '<div id="ageText"></div>';
		clearTimeout(revertanimal);
		}

		function maptexter(){
		document.getElementById("mtext").innerHTML = '<div id="ageText"></div>';
		clearTimeout(revertmap);
		}

	// all free animals
	function animals1() {
	var anspeed = document.getElementById("aspeed").value;
    storeEquip(ID_Moo_Head);
    clearTimeout(animalhead1);
    animalhead2 = setTimeout(function(){ animals2(); }, anspeed);
    }
    function animals2() {
	var anspeed = document.getElementById("aspeed").value;
    storeEquip(ID_Pig_Head);
    clearTimeout(animalhead2);
    animalhead3 = setTimeout(function(){ animals3(); }, anspeed);
    }
    function animals3() {
	var anspeed = document.getElementById("aspeed").value;
    storeEquip(ID_Fluff_Head);
    clearTimeout(animalhead3);
    animalhead4 = setTimeout(function(){ animals4(); }, anspeed);
    }
    function animals4() {
	var anspeed = document.getElementById("aspeed").value;
    storeEquip(ID_Pandou_Head);
    clearTimeout(animalhead4);
    animalhead5 = setTimeout(function(){ animals5(); }, anspeed);
    }
    function animals5() {
	var anspeed = document.getElementById("aspeed").value;
    storeEquip(ID_Bear_Head);
    clearTimeout(animalhead5);
    animalhead6 = setTimeout(function(){ animals6(); }, anspeed);
    }
    function animals6() {
	var anspeed = document.getElementById("aspeed").value;
    storeEquip(ID_Monkey_Head);
    clearTimeout(animalhead6);
    animalhead7 = setTimeout(function(){ animals7(); }, anspeed);
    }
    function animals7() {
	var anspeed = document.getElementById("aspeed").value;
    storeEquip(ID_Polar_Head);
    clearTimeout(animalhead7);
    animalhead1 = setTimeout(function(){ animals1(); }, anspeed);
    }

	//police
	function p1() {
	var plspeed = document.getElementById("pspeed").value;
    storeEquip(policehead1);
    clearTimeout(police2);
    police1 = setTimeout(function(){ p2(); }, plspeed);
    }
	function p2() {
	var plspeed = document.getElementById("pspeed").value;
    storeEquip(policehead2);
    clearTimeout(police1);
    police2 = setTimeout(function(){ p1(); }, plspeed);
    }

    //animal caps mod
    function c1() {
	var clspeed = document.getElementById("caspeed").value;
    storeEquip(caps1);
    clearTimeout(c1head);
    c1head = setTimeout(function(){ c2(); }, clspeed);
    }
    function c2() {
	var clspeed = document.getElementById("caspeed").value;
    storeEquip(caps2);
    clearTimeout(c2head);
    c2head = setTimeout(function(){ c1(); }, clspeed);
    }

	//all free hats
    function h1() {
	var frspeed = document.getElementById("fspeed").value;
    storeEquip(ID_Moo_Head);
    clearTimeout(mohead);
    mohead2 = setTimeout(function(){ h2(); }, frspeed);
    }
    function h2() {
	var frspeed = document.getElementById("fspeed").value;
    storeEquip(ID_Pig_Head);
    clearTimeout(mohead2);
    mohead3 = setTimeout(function(){ h3(); }, frspeed);
    }
    function h3() {
	var frspeed = document.getElementById("fspeed").value;
    storeEquip(ID_Fluff_Head);
    clearTimeout(mohead3);
    mohead4 = setTimeout(function(){ h4(); }, frspeed);
    }
    function h4() {
	var frspeed = document.getElementById("fspeed").value;
    storeEquip(ID_Pandou_Head);
    clearTimeout(mohead4);
    mohead5 = setTimeout(function(){ h5(); }, frspeed);
    }
    function h5() {
	var frspeed = document.getElementById("fspeed").value;
    storeEquip(ID_Bear_Head);
    clearTimeout(mohead5);
    mohead6 = setTimeout(function(){ h6(); }, frspeed);
    }
    function h6() {
	var frspeed = document.getElementById("fspeed").value;
    storeEquip(ID_Monkey_Head);
    clearTimeout(mohead6);
    mohead7 = setTimeout(function(){ h7(); }, frspeed);
    }
    function h7() {
	var frspeed = document.getElementById("fspeed").value;
    storeEquip(ID_Polar_Head);
    clearTimeout(mohead7);
    mohead8 = setTimeout(function(){ h8(); }, frspeed);
    }
    function h8() {
	var frspeed = document.getElementById("fspeed").value;
    storeEquip(ID_Fez_Hat);
    clearTimeout(mohead8);
    mohead9 = setTimeout(function(){ h9(); }, frspeed);
    }
    function h9() {
	var frspeed = document.getElementById("fspeed").value;
    storeEquip(ID_Enigma_Hat);
    clearTimeout(mohead9);
    mohead10 = setTimeout(function(){ h10(); }, frspeed);
    }
    function h10() {
	var frspeed = document.getElementById("fspeed").value;
    storeEquip(ID_Blitz_Hat);
    clearTimeout(mohead10);
    mohead11 = setTimeout(function(){ h11(); }, frspeed);
    }
    function h11() {
	var frspeed = document.getElementById("fspeed").value;
    storeEquip(ID_Bob_XIII_Hat);
    clearTimeout(mohead11);
    mohead = setTimeout(function(){ h1(); }, frspeed);
    }
})();
