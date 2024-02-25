

const cityButton = document.getElementsByClassName("buttonChangeImage")[1];
let cityIndex = 0;

const imageButton = document.getElementsByClassName("buttonChangeImage")[0];
let imageIndex = -1;
let timerReset = false

cityButton.addEventListener('click', function() {
	cityIndex++;
    if (cityIndex == city.length) {
        cityIndex = 0;
    }	
    document.getElementById("city").innerHTML = city[cityIndex];
	document.getElementById("cityButton").innerHTML = nextCity[cityIndex]
	imageIndex=0;
	imageButtonPressed();
});

imageButton.addEventListener('click', function(){imageButtonPressed();});

function imageButtonPressed() {
	timerReset = true;
	console.log(timerReset)
	change();
	}
function timerInterrupt() {
	console.log(timerReset)
	if (timerReset == true) timerReset = false;
	else change();
}
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

const myInterval = setInterval(timerInterrupt,10000);



const nextCity=[
	"Palas de Rei",
	"Arzúa",
	"O Pedrouzo",
	"Santiago de Compostela",

	"Takaisin alkuun"
	]

const city=[
	
	"<h3>Portomarín 22 km</h3><p>Portomarín on kaunis kaupunki Espanjan Galiciassa, jossa asuu noin 2000 "+
	"asukasta. Se sijaitsee Camino de Santiago -pyhiinvaellusreitin varrella ja on ollut tärkeä pysähdyspaikka "+
	"pyhiinvaeltajille vuosisatojen ajan. Kaupungin historia juontaa juurensa roomalaisaikaan, ja se oli aikoinaan "+
	"strateginen linnoitettu kaupunki. Nykyään Portomarín tunnetaan viehättävästä keskiaikaisesta arkkitehtuuristaan "+
	"ja upeista maisemistaan. </br></br>Kaupungin keskustassa voi ihailla historiallisia rakennuksia, kuten San Nicolás de "+
	"Portomarínin kirkkoa, joka siirrettiin nykyiselle paikalleen 1900-luvun alussa vedenpaisumuksen tieltä. "+
	"Nähtävyyksiin kuuluu myös vanha roomalainen silta ja linnoituksen rauniot, jotka tarjoavat mielenkiintoisen "+
	"näkökulman kaupungin historiaan. Portomarín tarjoaa matkailijoilleen autenttisen galicialaisen kokemuksen ja "+
	"mahdollisuuden kokea Camino de Santiago -reitin lumo ja merkitys historiallisessa ympäristössä.</p>",

	"<h3>Palas de Rei 25 km</h3><p> Palas de Rei on kaupunki Espanjan Galiciassa. Sen asukasluku on noin 3 000. Se "+
	"sijaitsee Camino de Santiago -pyhiinvaellusreitin varrella ja on ollut tärkeä pysähdyspaikka jo vuosisatojen ajan. "+
	"Kaupungin historia juontaa juurensa roomalaisaikaan, ja se oli keskiajalla merkittävä linnoitettu kaupunki. "+
	"Nykyään Palas de Rei tunnetaan viehättävästä keskustastaan, joka on täynnä historiallisia rakennuksia, "+
	"kapeita katuja ja aukioita. </br></br>Nähtävyyksiin kuuluu muun muassa San Tirson kirkko, joka edustaa romaanista "+
	"arkkitehtuuria, sekä keskiaikainen linnoitus. Kaupungissa voi myös tutustua paikalliseen kulttuuriin ja "+
	"perinteisiin, kuten gastronomiaan ja käsityöläisyyteen. Palas de Rei tarjoaa matkailijoilleen mielenkiintoisen "+
	"sekoituksen historiaa, kulttuuria ja luontoa, ja se on suosittu pysähdyspaikka Camino de Santiago -reitin "+
	"varrella vaeltaville pyhiinvaeltajille.</p>",

	"<h3>Arzúa 29 km</h3><p>Arzúa on kaupunki Espanjan Galiciassa. Siellä asuu noin 6000 asukasta. Se sijaitsee Camino"+
	" de Santiago -pyhiinvaellusreitin varrella. Arzúan historia juontaa juurensa roomalaisaikaan, ja se on ollut "+
	"tärkeä pysähdyspaikka matkaajille vuosisatojen ajan. Kaupungin keskustassa voi ihailla kauniita historiallisia "+
	"rakennuksia ja kapeita katuja. Tunnettu nähtävyys on Iglesia de Santiago de Arzúa, kirkko, joka on omistettu "+
	"kaupungin suojeluspyhimykselle, ja joka edustaa paikallista arkkitehtuuria. </br></br>Arzúa on myös tunnettu herkullisesta "+
	"paikallisesta juustostaan, jonka valmistus on peräisin antiikin ajalta. Kaupunki tarjoaa vierailijoilleen "+
	"mahdollisuuden tutustua Galician maaseudun rauhalliseen ilmapiiriin ja nauttia upeista maisemista. Camino de "+
	"Santiago -reitin läsnäolo tekee Arzúasta suositun pysähdyspaikan niin pyhiinvaeltajille kuin matkailijoillekin, "+
	"jotka arvostavat kaupungin historian ja kulttuurin rikkautta.</p>",

	"<H3>O Pedrouzo 19 km</H3><p>O Pedrouzo, joka tunnetaan myös nimellä O Pino, on kaupunki Espanjan Galiciassa, "+
	"jonka asukasluku on noin 2 000. Se sijaitsee Camino de Santiago -pyhiinvaellusreitin varrella ja on tärkeä "+
	"pysähdyspaikka matkaajille. Kaupungilla on rikas historia, joka juontaa juurensa muinaiseen roomalaiseen "+
	"tieverkostoon. Nykyään O Pedrouzo on moderni kaupunki, joka tarjoaa monipuolisia palveluita ja majoitusvaihtoehtoja "+
	"pyhiinvaeltajille. </br></br>Nähtävyyksiin kuuluvat muun muassa San Paio de Abeledan kirkko, joka on peräisin 12. "+
	"vuosisadalta, sekä pyhiinvaeltajien suosima O Pino -puisto. O Pedrouzossa voi myös nauttia paikallisista herkuista "+
	"ja kokea Galician perinteitä vierailemalla paikallisissa ravintoloissa ja toreilla. Kaupunki tarjoaa "+
	"vierailijoilleen mielenkiintoisen sekoituksen historiaa, kulttuuria ja nykyaikaista elämää, ja se on suosittu "+
	"kohde Camino de Santiago -reitillä vaeltaville matkaajille.</p>",

  	"<H3>Santiago de Compostela 20 km</H3><p> Santiago de Compostela on merkittävä kaupunki Espanjan Galiciassa, jossa "+
	"asuu noin 95 000 asukasta. Se on kuuluisa Camino de Santiago -pyhiinvaellusreitin päätepisteenä, jossa pyhiinvaeltajat "+
	"saavuttavat katedraalin, joka sanotaan olevan apostoli Jaakobin haudalla. Kaupungin historia ulottuu antiikin aikaan "+
	"asti, ja se on ollut tärkeä uskonnollinen ja kulttuurinen keskus vuosisatojen ajan.</br></br> Santiago de Compostelassa voi "+
	"vierailla monissa historiallisissa ja arkkitehtonisesti merkittävissä rakennuksissa, kuten Santiago de Compostelan "+
	"katedraalissa, joka on UNESCO:n maailmanperintökohde, sekä Obradoiron aukiolla ja Alamedan puistossa. Kaupunki "+
	"tarjoaa myös monia kulttuuritapahtumia, festivaaleja ja gastronomisia herkkuja, jotka houkuttelevat matkailijoita "+
	"ympäri maailman kokemaan sen ainutlaatuisen tunnelman ja historiallisen perinnön.</p>"
	
]


const cityimages = [
	[	
	"images/v_1_katkerasilta.jpg",
    "images/v_2_varjoisaPolku.jpg",
    "images/v_3_KauppakeskusSello.jpg",
	"images/v_4_100km.jpg",
	"images/v_5_Portomarin.jpg"
	],[
   	"images/vv_1_pyhiinvaeltajia.jpg",
    "images/vv_2_lounas.jpg",
    "images/vv_3_ukonsieni.jpg",
	"images/vv_tammilehto.jpg"
	],[
    "images/x_1_horeo.jpg",
    "images/x_2_polku.jpg",
    "images/x_3_Melide.jpg",
    "images/x_4_hampurilainen.jpg",
	],[
	"images/xx_1_aasi.jpg",
	"images/xx_2_santiago33.jpg",
    "images/xx_3_istutettuMetsa.jpg",
    "images/xx_4_eukalyptus.jpg",
	"images/xx_5_kulkijoita.jpg"
	],[
	"images/y_1_pientaSadetta.jpg",
	"images/y_2_10km.jpg",
    "images/y_3_viimeisetKilometrit.jpg",
    "images/y_4_SantiagoDeCompostela.jpg"
	]
]


const cityTexts = [
	["<p>Rio Pequeño ja Puente de Aspera, eli Kärsimysten Silta yli pienen virran</p>",	
	"<p>Puut kaareutuvat varjoksi vaeltajalle.</p>",
   	"<p>Pyhiinvaeltajanpassin leimaaminen paikassa Sello</p>",
	"<p>100 km</p>", 
	"<p>Portomarín</p>"
	],[
	"<p>Syys-lokakuussa Santiago de Compostelaan saapuu joka päivä yli 2000 pyhiinvaeltajaa.</p>",
	"<p>Kahvia ja Perunamunakasta paikassa Albergue Municipal de Peregrinos de Gonzar</p>",
   	"<p>Ukonsieni (Macrolepiota procera) näyttää ruskokärpässieneltä, mutta on herkullinen.</p>",
	"<p>Päivän viimeiset kilometrit tammilehdossa</p>"
	],[
   	"<p>Horeo on Galicialainen aittarakennus, jossa ruoka on suojassa jyrsijöiltä</p>",
   	"<p>Polku</p>",
   	"<p>Ponte de San Xoán de Furelos - paikassa Melide</p>",
   	"<p>Hampurilaisateria Melidassa</p>"
	],[
	"<p>Mitähän tuo aasi minusta ajattelee</p>",
	"<p>33 km</p>",
	"<p>Metsä on istutettu tarkasti",
	"<p>Eukalyptuspuita",
	"<p>Pyhiinvaeltajia on todella paljon</p>"
	],[
	"<p>Reissun ainoa sadepäivä</p>",
	"<p>10 km - vähiin käy, ennekuin loppuu</p>",
	"<p>Viimeiset kilometrit</p>",
	"<p>Olihan siinä kävelemistä/p>"
	]
]