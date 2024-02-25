const cityButton = document.getElementsByClassName("buttonChangeImage")[1];
let cityIndex = 0;

const nextCity=[
  	"Nájera",
  	"Santo Domingo de la Calzada",
	"Belorado",
	"San Juan de Ortega",
	"Burgos",
	"Takaisin alkuun"
	]

const city=[
	"<h3>Navarrete 13 km</h3> <p>Navarrete on viehättävä kylä Espanjan La Riojan alueella, jossa asuu noin 3 000 ihmistä. Sijaiten Camino de Santiago -pyhiinvaellusreiti" + 
	" varrella, se houkuttelee vuosittain lukuisia pyhiinvaeltajia ja matkailijoita. Kylä on tunnettu historiallisista rakennuksistaan, kuten Santa Maria de la Asunciónin" + 
	"kirkosta ja San Juanin kappelista, jotka heijastavat alueen rikasta perinnettä.</br></br> Navarreten keskusta on täynnä viehättäviä kujia, aukioita ja vanhoja kivitaloja, jotka" + 
	" luovat tunnelmallisen ympäristön tutkittavaksi. Paikallinen ruokakulttuuri ja viinitarjonta ovat myös huomionarvoisia, ja vierailijat voivat nauttia paikallisista" + 
	" herkuista ja viineistä useissa ravintoloissa ja baareissa. Navarrete tarjoaa vierailijoilleen rauhallisen ja aitoa espanjalaista tunnelmaa huokuvan kokemuksen La " + 
	"Riojan kauniissa maaseutumaisemassa.</p>",

	"<H3>Nájera 15 km</H3><p>Nájera on historiallinen kaupunki Espanjan La Riojan alueella, jossa asuu noin 8 000 ihmistä. Se on tunnettu rikkaasta kulttuuriperinnöstään"+
	" ja kauniista maisemistaan. Nájera sijaitsee Camino de Santiago -pyhiinvaellusreitin varrella, mikä tekee siitä suositun kohteen pyhiinvaeltajille. Kaupungissa voi "+
	"ihailla historiallisia nähtävyyksiä, kuten Santa María La Realin luostaria ja San Miguelin linnaa. </br></br>Nájeran keskusta on viehättävä, ja siellä on kapeita kujia, vanhoja "+
	"kivitaloja ja aukioita, jotka houkuttelevat kävelyretkille. Lisäksi kaupungissa on tarjolla monia ulkoilumahdollisuuksia, kuten patikointia ja retkeilyä ympäröivissä "+
	"vuoristoisissa maisemissa. Nájera on myös kuuluisa paikallisista viineistään, ja siellä voi nauttia La Riojan alueen herkullisista viineistä ja gastronomiasta. "+
	"Kaiken kaikkiaan Nájera tarjoaa vierailijoilleen mielenkiintoisen yhdistelmän kulttuuria, historiaa ja luontoa.</p>",

	"<H3>Santo Domingo de la Calzada 21 km</H3><p>Santo Domingo de la Calzada on historiallinen kaupunki Espanjan La Riojan alueella, jossa asuu noin 6 000 ihmistä."+
	" Se on tunnettu rikkaasta kulttuuriperinnöstään ja keskeisestä roolistaan Camino de Santiago -pyhiinvaellusreitillä.</br></br> Kaupunki on nimetty Santo Domingo de la Calzadan mukaan, "+
	"joka perusti sen 11. vuosisadalla. Tärkeitä nähtävyyksiä ovat Santo Domingo de la Calzadan katedraali, jossa sijaitsee pyhiinvaeltajien suosima kana, sekä Santo Domingon pyhän "+
	"Dominicon reliikki. Kaupungin keskusta on viehättävä, siellä on vanhoja kivirakennuksia, aukioita ja kujia.</br></br> Santo Domingo de la Calzada on myös tunnettu paikallisista viineistään, "+
	"ja vierailijat voivat nauttia alueen herkullisista viineistä ja ruoista lukuisissa ravintoloissa ja baareissa. Kaiken kaikkiaan Santo Domingo de la Calzada tarjoaa "+
	"vierailijoilleen unohtumattoman matkan historian, kulttuurin ja gastronomian maailmaan.</p>",

  	"<H3>Belorado 23 km</H3><p>Belorado on kaunis kaupunki Espanjan Pohjois-Kastilian ja Leónin autonomisessa yhteisössä. Sen väkiluku on noin 2 000 asukasta. Sijaiten "+
	"Camino de Santiago -reitin varrella, Belorado on suosittu pysähdyspaikka pyhiinvaeltajille. Kaupunki tarjoaa viehättävän yhdistelmän historiallisia nähtävyyksiä ja "+
	"luonnonkauneutta. Beloradon keskustassa voi ihailla vanhoja kivitaloja, kapeita kujia ja aukioita, jotka heijastavat sen pitkää historiaa.</br></br> Tärkeimpiin nähtävyyksiin "+
	"kuuluvat Pyhän Antoniuksen kirkko ja Beloradon linna. Lisäksi kaupunki on tunnettu paikallisista viineistään ja gastronomiastaan, ja vierailijat voivat nauttia "+
	"herkullisista paikallisista ruoista ja viineistä lukuisissa ravintoloissa ja baareissa. Belorado tarjoaa rauhallisen ja viehättävän ympäristön, jossa voi rentoutua "+
	"ja nauttia kauniista maisemista sekä vieraanvaraisesta ilmapiiristä.</p>",

	"<H3>San Juan de Ortega 23 km</H3><p>San Juan de Ortega on pieni kaupunki Espanjan Pohjois-Kastilian ja Leónin autonomisessa yhteisössä, jonka asukasluku on noin "+
	"100-200 asukasta. Se sijaitsee Camino de Santiago -pyhiinvaellusreitin varrella, mikä tekee siitä suositun pysähdyspaikan pyhiinvaeltajille. Kaupunki tunnetaan"+
	" erityisesti San Juan de Ortegan mukaan, joka oli merkittävä hahmo pyhiinvaellusten historiassa.</br></br> Tärkeimmät nähtävyydet ovat San Juan de Ortegan kirkko ja luostari, "+
	"jotka ovat olleet keskeisessä roolissa pyhiinvaellusten historiassa. Kaupungin keskusta on pieni, mutta siellä on viehättäviä kapeita kujia ja historiallisia"+
	"rakennuksia. San Juan de Ortega tarjoaa rauhallisen ja hengellisen ilmapiirin, ja se on suosittu pysähdyspaikka pyhiinvaellusmatkallaan oleville, jotka haluavat "+
	"kokea kaupungin historiallisen ja kulttuurisen merkityksen.</p>",

	"<H3>Burgos 24 km</H3><p>Burgos on historiallinen kaupunki Espanjan Pohjois-Kastilian ja Leónin autonomisessa yhteisössä, jonka väkiluku on noin 180 000 asukasta."+
	"Se on tunnettu upeasta goottilaisesta katedraalistaan, joka on UNESCO:n maailmanperintökohde. Kaupunki on rikas historiallisista ja kulttuurisista nähtävyyksistä, "+
	"kuten linnoista, kirkoista ja museoista.</br></br> Burgos tarjoaa myös kauniita puistoja ja viehättäviä kävelykatuja, joilla voi nauttia kaupungin tunnelmasta ja kauneudesta. "+
	"Lisäksi se on tunnettu herkullisesta gastronomiastaan, erityisesti paikallisista erikoisuuksista, kuten morcilla-makkarasta ja lechazo-asadosta. Burgos on myös "+
	"tärkeä pysähdyspaikka Camino de Santiago -pyhiinvaellusreitillä, mikä tekee siitä suositun kohteen pyhiinvaeltajille ympäri maailman. Kaiken kaikkiaan Burgos tarjoaa "+
	"vierailijoilleen unohtumattoman yhdistelmän historiaa, kulttuuria ja gastronomiaa.</p>"
]

cityButton.addEventListener('click', function() {
	cityIndex++;
    if (cityIndex == city.length) {
        cityIndex = 0;
    }
	
    document.getElementById("city").innerHTML = city[cityIndex];
	document.getElementById("cityButton").innerHTML = nextCity[cityIndex]
	imageIndex=0;
	change();
      });

const cityimages = [
	[	
	"images/8_1_logrono_aamulla.jpg",
    "images/8_2_Parque_de_la_Grajera.jpg",
    "images/8_3_puistotie.jpg",
	"images/8_4_campo_de_golf_logrono.jpg"
	],[
   	"images/9_1_aamu_Navarretessa.jpg",
    "images/9_2_593_km.jpg",
    "images/9_3_viinitarja_riojassa.jpg",
    "images/9_4_majatalo_narejassa.jpg",
	],[
    "images/a_1_aamu najerassa.jpg",
    "images/a_2_peltojen_poikki.jpg",
    "images/a_3_rioja_alta_golf_club.jpg",
    "images/a_4_AlbergueCofradía_delSanto.jpg",
	],[
	"images/b_1_maantie.jpg",
	"images/b_2_aamiainen_granonissa.jpg",
    "images/b_3_granonin_tori.jpg",
    "images/b_4_auringonkukat.jpg"
	],[
	"images/c_1_belorado.jpg",
	"images/c_2_550_santiagoon.jpg",
    "images/c_3_kilometrin_korkeudessa.jpg",
    "images/c_4_atlannin_puolen_rinne.jpg"
	],[
	"images/d_1_kengat_rivissa.jpg",
	"images/d_2_paljakkaa.jpg",
    "images/d_3_virvalilja.jpg",
    "images/d_4_burgos.jpg"
    ]
]
const cityTexts = [
	[	
	"<p>Logroño aamulla</p>",
   	"<p>Parque de la Grajera</p>n",
	"<p>Puistotie</p>", 
	"<p>Campo de Golf Logroño</p>"
	],[
	"<p>Aamu Navarretessa</p>",
   	"<p>593 km jäljellä</p>",
   	"<p>Viinitarha Riojassa</p>",
	"<p>Majatalo Nájerassa</p>"
	],[
   	"<p>Aamu Nájerassa</p>",
   	"<p>Tietä ja peltoa riittää.jpg</p>",
   	"<p>Rioja Alta Golf Club</p>",
   	"<p>Albergue Cofradía del Santo</p>"
	],[
	"<p>Maantie on pitkä kävellä</p>",
	"<p>Aamiainen Grañónissa.jpg</p>",
	"<p>Grañónin tori ja kirkko</p>",
	"<p>Auringonkukat olivat saaneet aurinkoa</p>"
	],[
	"<p>Belorado</p>",
	"<p>550 kilometriä Santiagoon</p>",
	"<p>Kilometrin korkeudella on näin vehreää</p>",
	"<p>Atlannin puolella harjannetta on mäntymetsää</p>"
	],[
	"<p>Kengät hyvässä järjestyksessä</p>",
	"<p>Paljakka alkoi 1050 metrin korkeudessa</p>",
	"<p>Virvalilja viihtyy kulkijoiden jaloissa</p>",
	"<p>Lämmintä 35 astetta. Kadut kaupungin ovat pitkiä suoroa ...</p>"
    ]
]
const imageButton = document.getElementsByClassName("buttonChangeImage")[0];
let imageIndex = -1;

imageButton.addEventListener('click', function(){change();});

function change(){
	imageSources = cityimages[cityIndex];
	imageTexts = cityTexts[cityIndex];
	if (imageIndex == imageSources.length) {
		imageIndex = 0;
    }
	if (imageIndex == -1 ) {
		imageIndex = 1;
    }
    document.getElementById("image").src = imageSources[imageIndex];
	document.getElementById("imagetext").innerHTML = imageTexts[imageIndex];

    imageIndex++;


}

const myInterval = setInterval(change,10000);