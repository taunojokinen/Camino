

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
  	"Castrojeriz",
	"Frómesta",
	"Carrión de los Condes",
	"Calzadilla de la Cueza",
	"Sahagún",
	"El Burgo Ranero",
	"Mansilla de las Mulas",
	"León",
	"Takaisin alkuun"
	]

const city=[
	"<h3>Hornillos del Camino 21 km</h3><p>Hornillos del Camino on pieni kylä Espanjan Pohjois-Kastilian ja Leónin alueella, joka sijaitsee"+ 
	"Camino de Santiago -pyhiinvaellusreitin varrella. Kylässä asuu noin 70 asukasta. Hornillos del "+
	"Camino on ollut merkittävä pysähdyspaikka pyhiinvaeltajille vuosisatojen ajan, tarjoten levähdyspaikan "+ 
	"ja tarvikkeita matkan jatkamiseen. Kylä on myös tunnettu historiallisesta ja kulttuurisesta "+
	"merkityksestään, ja siellä voi nähdä muinaisia rakennuksia ja perinteitä.</br></br> Vaikka Hornillos del Camino"+
	"on pieni, sen ympäristö tarjoaa upeita maisemia ja mahdollisuuksia ulkoiluun ja luonnossa liikkumiseen."+
	"Kylässä on myös muutamia ravintoloita ja majoituspaikkoja, jotka palvelevat pyhiinvaeltajia ja muita"+ 
	"vierailijoita. Kaiken kaikkiaan Hornillos del Camino on rauhallinen ja viehättävä paikka, jossa voi kokea"+ 
	"perinteisen espanjalaisen kyläelämän ja pyhiinvaelluksen henkisen ilmapiirin.</p>",

	"<H3>Castrojeriz 20 km</H3><p>Castrojeriz on historiallinen kaupunki Espanjan Pohjois-Kastilian ja Leónin alueella,"+
	"jossa asuu noin 800 asukasta. Se sijaitsee Camino de Santiago -pyhiinvaellusreitin varrella ja on ollut tärkeä pysähdyspaikka "+
	"pyhiinvaeltajille vuosisatojen ajan. Kaupunki on tunnettu vaikuttavasta linnoituksestaan, joka kohoaa kaupungin yläpuolella tarjoten "+
	"upeat näkymät ympäröivälle maaseudulle. </br></br>Castrojerizillä on rikas historia, joka ulottuu roomalaisista ajoista lähtien, ja siellä "+
	"voi nähdä monia historiallisia nähtävyyksiä, kuten vanhoja kirkkoja ja linnoituksen raunioita. Kaupungin keskustassa on myös"+
	"viehättäviä kapeita kujia, aukioita ja historiallisia rakennuksia, jotka heijastavat sen pitkää ja monimuotoista historiaa. "+
	"Castrojeriz on myös tunnettu paikallisista viineistään ja gastronomiastaan, ja se tarjoaa vierailijoilleen ainutlaatuisen mahdollisuuden "+
	"kokea perinteistä espanjalaista kyläelämää ja pyhiinvaelluksen henkistä ilmapiiriä.</p>",

	"<H3>Frómesta 25 km</H3><p>Frómesta on viehättävä kaupunki Espanjan Pohjois-Kastilian ja Leónin alueella, jonka väkiluku on noin 2 500 asukasta."+
	" Se sijaitsee Camino de Santiago -pyhiinvaellusreitin varrella, mikä tekee siitä suositun kohteen pyhiinvaeltajille. Kaupungilla on rikas "+
	"historia, joka juontaa juurensa roomalaisajalle. Frómesta on tunnettu upeasta romaanisesta kirkostaan, San Martinin kirkosta, joka on yksi "+
	"parhaiten säilyneistä Espanjassa.</br></br> Lisäksi kaupungissa on mielenkiintoisia historiallisia rakennuksia, kuten linnoitus ja vanhat silat. Frómesta "+
	"tarjoaa vierailijoilleen viehättävän keskustan, jossa on kapeita kujia, aukioita ja perinteisiä espanjalaisia ​​ravintoloita. Kaupungin ympärillä"+
	"on myös kaunista maaseutua, jossa voi nauttia ulkoilusta ja luonnosta. Frómesta on ihanteellinen paikka tutustua Kastilian historian ja"+
	" kulttuurin rikkauteen samalla kun nauttii rauhallisesta ilmapiiristä ja kauniista maisemista.</p>",

  	"<H3>Carrión de los Condes 19 km</H3><p>Carrión de los Condes on historiallinen kaupunki Espanjan Castillan ja Leónin alueella, jossa "+
	"asuu noin 2 500 asukasta. Se on ollut tärkeä pysähdyspaikka Camino de Santiago -pyhiinvaellusreitillä jo vuosisatojen ajan. Kaupungin "+
	"historia ulottuu roomalaisaikaan asti, ja se kukoisti keskiajalla.</br></br> Carrión de los Condesin keskusta on täynnä historiallisia rakennuksia, "+
	"kuten romaanisia kirkkoja, linnoituksia ja keskiaikaisia rakennuksia, jotka heijastavat sen menneisyyttä. Kaupungin vanha linnoitus "+
	"muistuttaa sen strategisesta merkityksestä keskiajalla.</br></br> Nykyään Carrión de los Condes on rauhallinen ja viehättävä paikka, jossa voi "+
	"kokea perinteistä espanjalaista kyläelämää. Matkailijat voivat nauttia kaupungin historiasta ja kulttuurista sekä ihailla sen kaunista "+
	"arkkitehtuuria ja maisemia.</p>",

	"<H3>Calzadilla de la Cueza 17 km</H3><p>Calzadilla de la Cueza on pieni kylä Espanjan Kastilian ja Leónin alueella, jossa asuu noin 100 "+
	"asukasta. Se sijaitsee Camino de Santiago -pyhiinvaellusreitin varrella, tarjoten levähdyspaikan pyhiinvaeltajille. Kylän historia "+
	"juontaa juurensa antiikin aikoihin, ja se on ollut merkittävä pysähdyspaikka vuosisatojen ajan. Calzadilla de la Cueza on tunnettu "+
	"upeasta luonnostaan ja rauhallisesta ilmapiiristään.</br></br> Kylän keskusta on täynnä perinteisiä kivitaloja ja kapeita kujia, jotka heijastavat "+
	"sen pitkää historiaa. Vaikka kylä on pieni, siellä on muutamia ravintoloita ja majoituspaikkoja, jotka palvelevat pyhiinvaeltajia ja muita "+
	"matkailijoita. Calzadilla de la Cueza tarjoaa vierailijoilleen mahdollisuuden kokea aitoa espanjalaista kyläelämää ja nauttia kauniista "+
	"maaseudusta, mikä tekee siitä ihanteellisen paikan rentouttavaan pysähdykseen Camino de Santiago -matkalla.</p>",

	"<H3>Sahagún 23 km</H3><p>Sahagún on viehättävä kaupunki Espanjan Kastilian ja Leónin alueella, jossa asuu noin 2 500 asukasta. Se on ollut "+
	"merkittävä pysähdyspaikka Camino de Santiago -pyhiinvaellusreitillä vuosisatojen ajan. Kaupungin historia juontaa juurensa roomalaisaikaan, "+
	"mutta se kukoisti erityisesti keskiajalla, kun siitä tuli tärkeä kauppakeskus. Sahagún on tunnettu upeasta arkkitehtuuristaan, kuten "+
	"romaanisista kirkoistaan ja historiallisista rakennuksistaan, jotka kertovat sen menneisyydestä. </br></br>Kaupungin keskusta on täynnä kapeita "+
	"kujia, aukioita ja historiallisia monumentteja, jotka houkuttelevat matkailijoita tutkimaan. Nykyään Sahagún tarjoaa vierailijoilleen "+
	"mielenkiintoisen sekoituksen historiaa, kulttuuria ja kauniita maisemia. Matkailijat voivat nauttia paikallisista herkuista ja "+
	"vieraanvaraisesta ilmapiiristä, samalla kun he perehtyvät kaupungin rikkaaseen perintöön Camino de Santiago -pyhiinvaellusreitin varrella.</p>",

	"<h3>El Burgo Ranero 17 km</h3><p>El Burgo Ranero on pieni kaupunki Espanjan Kastilian ja Leónin alueella, jonka asukasluku on noin 500 "+
	"asukasta. Se sijaitsee Camino de Santiago -pyhiinvaellusreitin varrella, tarjoten levähdyspaikan ja palveluita pyhiinvaeltajille. Kaupungin "+
	"historia juontaa juurensa keskiajalle, jolloin se toimi tärkeänä pysähdyspaikkana keskiaikaisilla kauppareiteillä. El Burgo Ranero on "+
	"tunnettu viehättävästä keskustastaan, jossa on kapeita kujia, historiallisia rakennuksia ja rauhallinen ilmapiiri. </br></br>Matkailijat voivat "+
	"ihailla paikallista arkkitehtuuria ja tutustua kaupungin rikkaaseen kulttuuriperintöön. Lisäksi kaupungissa on muutamia ravintoloita, "+
	"baareja ja majoituspaikkoja, jotka tarjoavat palveluita pyhiinvaeltajille ja matkailijoille. El Burgo Ranero tarjoaa vierailijoilleen "+
	"mahdollisuuden kokea aitoa espanjalaista kyläelämää ja nauttia kauniista maaseudusta Camino de Santiago -reitin varrella.</p>",

	"<h3>Mansilla de las Mulas 19 km</h3><p>Mansilla de las Mulas on historiallinen kaupunki Espanjan Kastilian ja Leónin alueella, jossa asuu "+
	"noin 2 000 asukasta. Se sijaitsee Camino de Santiago -pyhiinvaellusreitin varrella ja on ollut merkittävä pysähdyspaikka pyhiinvaeltajille "+
	"vuosisatojen ajan. Kaupungin historia juontaa juurensa roomalaisaikaan, ja se kukoisti keskiajalla, kun siitä tuli tärkeä kauppakeskus. "+
	"Mansilla de las Mulas on tunnettu upeasta arkkitehtuuristaan, kuten romaanisista kirkoistaan ja keskiaikaisista linnoituksistaan, jotka "+
	"kertovat sen menneisyydestä. </br></br>Kaupungin keskusta on täynnä kapeita kujia, aukioita ja historiallisia monumentteja, jotka houkuttelevat "+
	"matkailijoita tutkimaan. Nykyään Mansilla de las Mulas tarjoaa vierailijoilleen mielenkiintoisen sekoituksen historiaa, kulttuuria ja "+
	"kauniita maisemia. Matkailijat voivat nauttia paikallisista herkuista ja vieraanvaraisesta ilmapiiristä, samalla kun he perehtyvät kaupungin "+
	"rikkaaseen perintöön Camino de Santiago -pyhiinvaellusreitin varrella.</p>",
	
	"<h3>León 19 km</h3><p>León on historiallinen kaupunki Espanjan Kastilian ja Leónin alueella, jossa asuu noin 125 000 asukasta. Se on yksi "+
	"alueen tärkeimmistä kaupungeista, joka tarjoaa rikkaan kulttuuriperinnön ja upean arkkitehtuurin. Kaupungin historia juontaa juurensa "+
	"roomalaisaikaan, ja se oli merkittävä keskiajalla, erityisesti kun siitä tuli kuningaskunnan pääkaupunki. </br></br>León on tunnettu upeasta "+
	"goottilaisesta katedraalistaan, joka on yksi Espanjan merkittävimmistä maamerkeistä. Lisäksi kaupungissa on viehättävä vanha kaupunki, jossa "+
	"on kapeita kujia, historiallisia rakennuksia ja elinvoimainen ilmapiiri. </br></br>Leónissa voi nauttia paikallisista herkuista, kuten tapaksista ja "+
	"pulpo a la gallegasta, sekä vieraanvaraisesta ilmapiiristä. Kaupungissa järjestetään myös lukuisia kulttuuritapahtumia ja festivaaleja ympäri "+
	"vuoden, mikä tekee siitä vilkkaan ja kiinnostavan matkakohteen kaikenlaisille matkailijoille.</p>"
]


const cityimages = [
	[	
	"images/e_1_Burgos_katetdral.jpg",
    "images/e_2_501_km.jpg",
    "images/e_3_tauko_delasCalzadasjpg.jpg",
	"images/e_4_hoitotauko.jpg"
	],[
   	"images/f_1_auringonnousu.jpg",
    "images/f_2_baari_tasangolla.jpg",
    "images/f_3_sairaala.jpg",
    "images/f_4_castrojeritz.jpg",
	],[
    "images/g_1_aamu_alkaa_sarastaa.jpg",
    "images/g_2_aurino_nousee.jpg",
    "images/g_3_silta.jpg",
    "images/g_4_kastelukanava.jpg",
	],[
	"images/h_1_aamu_fromiistassa.jpg",
	"images/h_2_katutaidetta.jpg",
    "images/h_3_aurinko_nousee.jpg",
    "images/h_4_taas_yksi.jpg"
	],[
	"images/i_1_polku.jpg",
	"images/i_2_pelto.jpg",
    "images/i_3_puolimatka.jpg",
    "images/i_4_pyykkipaivä.jpg"
	],[
	"images/j_1_aamu_calzadillassa.jpg",
	"images/j_2_bodecaDeTierra.jpg",
    "images/j_3_lounas.jpg",
    "images/j_4_siltaShaguniin.jpg"
	],[
	"images/jj_1_aurinko_nousee.jpg",
	"images/jj_2_tietä_riittaa.jpg",
	"images/jj_3_elBurgoRanero.jpg",
	"images/jj_4_kokolihapihvi.jpg"
	],[	
	"images/k_1_vuoret_taivaanrannassa.jpg",
	"images/k_2_puistoplataani.jpg",
	"images/k_3_dontWorry.jpg",
	"images/k_4_kaupunginporttiElBurgoRanero.jpg"
	],[
	"images/l_1RioPorma.jpg",
	"images/l_2_León.jpg",
	"images/l_3_kaupunginmuuri.jpg",
	"images/l_4_leonon_katetdraali.jpg"
    ]
]
const cityTexts = [
	[	
	"<p>Burgosin katetdraali on näyttävä</p>",
   	"<p>Matkaa jäljellä 501 km</p>",
	"<p>Tauko Rábe de las Calzadasissa</p>", 
	"<p>Jalkojakin pitää muistaa hoitaa</p>"
	],[
	"<p>Auringonnousu ja tuulimyllyt</p>",
	"<p>Baari keskellä ei mitään</p>",
   	"<p>Entinen pyhiinvaeltajien sairaala - nykyinen alberque</p>",
	"<p>Castrojeritz</p>"
	],[
   	"<p>Aamu alkaa sarastaa</p>",
   	"<p>Aurinko nousee</p>",
   	"<p>Puente Fitero on silta yli Rio Pisuergan. Samalla maakunta vaihtuu Burgsista Palenciaan.</p>",
   	"<p>Kastelukanavaa pitkin olisi päässyt laivalla Frómistaan.</p>"
	],[
	"<p>Aamu Frómistassa</p>",
	"<p>Teräslevyyn leikattua katutaidetta oli vähän siellä ja täällä</p>",
	"<p>Aurinkokin vähitellen nousee.</p>",
	"<p>Pyhän Pietarin kirkko paikassa Villalcázar de Sirga</p>"
	],[
	"<p>Suoraa tietä 18 km</p>",
	"<p>On aaketa laakeeta Espanjassakin</p>",
	"<p>Puolimatkan keidas</p>",
	"<p>Pyykkipäivä</p>"
	],[
	"<p>Aamu Calzadillassa</p>",
	"<p>Bodeca de Tierra, eli maahan kaivettu viininkypsyttämö paikassa Moratinos</p>",
	"<p>Lounas kuusi euroa</p>",
	"<p>Sahagúnin kaupungin portti 1100-luvulta. Silta on yhä tuossa, mutta joki on jo jossain muualla.</p>"
	],[
	"<p>Aurinko nousee</p>",
	"<p>Varjot</p>",
	"<p>El Burgo Raneron pääkatu/p>",
	"<p>Kokolihapihvi kokolihalla</p>"
	],[
	"<p>Leónin vuoret taiuvaanrannalla - noiden yli mennään.</p>",
	"<p>Puistoplataani</p>",
	"<p>La Cantina de Teddy, Reliegos - Dont Worry - Be Happy</p>",
	"<p>Mansilla de las Mukasin kaupunginportti - ikää tuhat vuotta.</p>"
	],[
	"<p>Puente Villarente - silta Rio Porman yli.</p>",
	"<p>Saapuminen Leóniin</p>",
	"<p>Leónin kaupunginmuuri</p>",
	"<p>Leónin katetdraali</p>",

    ]
]
