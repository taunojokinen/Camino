

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
	"San Martín del Camino",
	"Astorga",
	"Rabanal del Camino",
	"El Acebo de San Miguel",
	"Ponferrada",
	"Cacabelos",
	"Trabadelo",
	"La Laguna",
	"Fonfrìa",
	"Triacastela",
	"Sarría",
	"Takaisin alkuun"
	]

const city=[
	"<h3>La Virgen del Camino 8 km</h3><p>La Virgen del Camino on kaupunki Espanjan Kastilian ja Leónin "+
	"alueella, jossa asuu noin 5 000 asukasta. Se sijaitsee lähellä Leónin kaupunkia ja on tunnettu Camino "+
	"de Santiago -pyhiinvaellusreitin varrella sijaitsevana tärkeänä pysähdyspaikkana. Kaupungin historia "+
	"juontaa juurensa pyhiinvaellusreitin merkitykseen, ja se on kasvanut merkittäväksi matkailukohteeksi. "+
	"</br></br>La Virgen del Camino tarjoaa vierailijoilleen upeita nähtävyyksiä, kuten Basilica de la Virgen del "+
	"Camino -kirkon, joka on omistettu kaupungin suojeluspyhimykselle. Lisäksi kaupungissa voi tutustua "+
	"moniin muihin historiallisiin rakennuksiin ja museoihin, jotka kertovat sen rikkaasta historiasta ja "+
	"kulttuurista. Luonnonystäville kaupungin ympäristö tarjoaa myös upeita retkeily- ja "+
	"ulkoilumahdollisuuksia. Kaiken kaikkiaan La Virgen del Camino tarjoaa vierailijoilleen "+
	"mielenkiintoisen yhdistelmän historiaa, kulttuuria ja luontoa.</p>",

	"<h3>San Martín del Camino 18 km</h3><p> San Martín del Caminoon viehättävä kylä Espanjan Kastilian ja Leónin alueella, jossa asuu noin "+
	"200 asukasta. Se sijaitsee Camino de Santiago -pyhiinvaellusreitin varrella ja on ollut merkittävä "+
	"pysähdyspaikka pyhiinvaeltajille vuosisatojen ajan. Kylän historia juontaa juurensa keskiajalle, jolloin "+
	"se toimi tärkeänä levähdyspaikkana matkaajille. </br></br>San Martín del Camino on säilyttänyt perinteisen "+
	"maalaiskylän tunnelman, jossa voi ihailla vanhoja kivirakennuksia ja kapeita kujia. Kylän keskustassa "+
	"sijaitsee kaunis San Martín de Toursin kirkko, joka on peräisin keskiajalta ja edustaa romaanista "+
	"arkkitehtuuria. Lisäksi alue tarjoaa upeita luontokohteita ja ulkoilumahdollisuuksia, kuten "+
	"vaellusreittejä ja retkipolkuja. San Martín del Camino tarjoaa vierailijoilleen rauhallisen ja idyllisen "+
	"paikan pysähtyä ja nauttia Camino de Santiago -reitin hengestä ja kauneudesta.</p>",

	"<H3>Astorga 25 km</H3><p>Astorga on historiallinen kaupunki Espanjan Kastilian ja Leónin alueella, jossa "+
	"asuu noin 12 000 asukasta. Se on ollut merkittävä kaupunki antiikin ajoista lähtien, ja sillä on rikas "+
	"historia. Astorga oli roomalaisten hallussa ja myöhemmin tärkeä keskiaikainen kauppapaikka. Kaupunki "+
	"tunnetaan upeasta arkkitehtuuristaan, ja sen nähtävyyksiin kuuluvat vaikuttava katedraali, romaaninen "+
	"Santa María de Astorga -kirkko ja Gaudi-palatsi, jonka suunnitteli arkkitehti Antoni Gaudí. </br></br>Astorga on "+
	"myös tunnettu gastronomiastaan, erityisesti suklaastaan ja leivonnaisistaan, kuten mantecadosista. "+
	"Kaupunki on tärkeä pysähdyspaikka Camino de Santiago -reitillä, ja se tarjoaa matkailijoilleen "+
	"ainutlaatuisen mahdollisuuden tutustua Espanjan historiaan ja kulttuuriin. Astorga yhdistää "+
	"menneisyyden ja nykyisyyden viehättäväksi matkakohteeksi, jossa vierailijat voivat kokea monipuolisen "+
	"kulttuurin ja upean arkkitehtuurin lumon.</p>",

  	"<H3>Rabanal del Camino 20 km</H3><p>Rabanal del Camino on pieni kylä Espanjan Kastilian ja Leónin "+
	"alueella, jossa asuu noin 50 asukasta. Se sijaitsee Camino de Santiago -pyhiinvaellusreitin varrella "+
	"ja on ollut tärkeä pysähdyspaikka pyhiinvaeltajille vuosisatojen ajan. Kylän historia juontaa juurensa "+
	"keskiajalle, jolloin se tarjosi suojaa ja lepoa matkaajille. </br></br>Rabanal del Camino on säilyttänyt "+
	"perinteisen charmiaan, ja sen keskusta on täynnä historiallisia rakennuksia ja kapeita kujia. "+
	"Kylän keskeinen nähtävyys on Santa María del Caminon kirkko, joka on romaaninen mestariteos. Lisäksi "+
	"alue tarjoaa upeita luontokohteita ja mahdollisuuksia ulkoiluun ja vaelluksiin. Rabanal del Camino on "+
	"rauhallinen ja tunnelmallinen paikka, joka houkuttelee matkailijoita ympäri maailman kokemaan Camino "+
	"de Santiago -reitin henkisen ilmapiirin ja kauneuden.</p>",

	"<H3>El Acebo de San Miguel 17 km</H3><p>Acebo de San Miguel on pieni kylä Espanjan Kastilian ja Leónin "+
	"alueella, jossa asuu noin 40 asukasta. Se sijaitsee upeissa vuoristoisissa maisemissa ja on tunnettu "+
	"rauhallisesta tunnelmastaan. Kylän historia juontaa juurensa keskiajalle, jolloin se toimi tärkeänä "+
	"pysähdyspaikkana matkailijoille ja kauppiaille. </br></br>Acebo de San Miguel on säilyttänyt perinteisen charmiaan, "+
	"ja sen keskusta on täynnä vanhoja kivitaloja ja kapeita kujia. Kylä on myös tunnettu läheisestä "+
	"luonnostaan ja tarjoaa upeita vaellus- ja retkeilymahdollisuuksia ympäröivissä vuoristoissa. "+
	"Nähtävyyksiin kuuluu San Miguelin kirkko, joka on peräisin keskiajalta ja edustaa perinteistä "+
	"maalaiskirkkoarkkitehtuuria. </br></br>Acebo de San Miguel tarjoaa vierailijoilleen ainutlaatuisen mahdollisuuden "+
	"kokea perinteistä espanjalaista kyläelämää ja nauttia kauniista luonnosta ja rauhallisesta ilmapiiristä.</p>",

	"<H3>Ponferrada 16 km</H3><p>Ponferrada on kaupunki Espanjan Kastilian ja Leónin alueella, jossa asuu noin 69 000 asukasta. Se on "+
	"tärkeä kaupallinen keskus Bierzon laaksossa ja historiallinen kaupunki, joka tunnetaan monista "+
	"kulttuurisista ja historiallisista nähtävyyksistään. Ponferradan historia juontaa juurensa "+
	"roomalaisaikaan, ja se oli keskiajalla tärkeä linnoitettu kaupunki. Kaupunki on tunnettu erityisesti "+
	"Temppeliherrain linnakkeestaan, joka on vaikuttava keskiaikainen linna, ja siellä sijaitsevasta "+
	"Temppeliherrain linnan museosta. </br></br>Ponferradassa voi myös vierailla historiallisissa kirkoissa, kuten "+
	"Basilica de la Encina, ja tutustua vanhaan kaupunkiin, jossa on viehättäviä kapeita kujia ja "+
	"perinteisiä kivitaloja. Lisäksi Ponferrada tarjoaa upeita ulkoilumahdollisuuksia ympäröivässä "+
	"luonnossa, kuten Bierzon laaksossa ja lähellä sijaitsevissa vuoristoissa.</p>",

	"<h3>Cacabelos 18 km</h3><p>Cacabelos on viehättävä kaupunki Espanjan Kastilian ja Leónin alueella, "+
	"jossa asuu noin 5 000 asukasta. Se sijaitsee Bierzon laaksossa ja on tunnettu viinintuotannostaan "+
	"sekä Camino de Santiago -pyhiinvaellusreitin varrella sijaitsevasta historiallisesta keskustastaan. "+
	"Cacabelosilla on rikas historia, joka ulottuu roomalaisaikaan asti, ja kaupungissa on useita "+
	"historiallisia rakennuksia ja monumentteja, kuten romaaninen Santa María de Cacabelos -kirkko. "+
	"Kaupungin viinimuseo kertoo alueen viinintuotannon perinteistä ja historiasta. </br></br>Cacabelos on myös "+
	"tunnettu gastronomiastaan, erityisesti paikallisista viineistä ja perinteisistä ruokalajeistaan. "+
	"Kaupunki tarjoaa vierailijoilleen ainutlaatuisen mahdollisuuden tutustua Galician maaseudun "+
	"rauhalliseen ilmapiiriin ja nauttia upeista maisemista. Lisäksi Cacabelos on suosittu "+
	"pysähdyspaikka Camino de Santiago -pyhiinvaeltajille, jotka voivat levätä ja tutustua "+
	"kaupungin historiaan ja kulttuuriin matkansa varrella.</p>",

	"<h3>Trabadelo 19,5 km</h3><p>Trabadelo on pieni kylä Espanjan Kastilian ja Leónin alueella, "+
	"jossa asuu noin 200 asukasta. Se sijaitsee Bierzon laaksossa Camino de Santiago -pyhiinvaellusreitin "+
	"varrella, tarjoten matkaajille levähdyspaikan ja palveluita. Kylän historia juontaa juurensa "+
	"keskiajalle, ja se on ollut merkittävä pysähdyspaikka pyhiinvaeltajille vuosisatojen ajan. "+
	"</br></br>Trabadelo on säilyttänyt perinteisen maalaiskylän tunnelman, ja sen keskusta on täynnä historiallisia "+
	"rakennuksia ja kapeita kujia. Kylän ympäristö tarjoaa upeita luontokohteita ja mahdollisuuksia "+
	"ulkoiluun, kuten vaellusreittejä ja retkipolkuja, jotka houkuttelevat luonnonystäviä tutkimaan "+
	"alueen kauneutta. Nähtävyyksiin kuuluu San Nicolás de Flüe -kirkko, joka on peräisin 1600-luvulta "+
	"ja edustaa perinteistä maalaiskirkkoarkkitehtuuria. Trabadelo tarjoaa rauhallisen ja idyllisen "+
	"paikan pysähtyä ja nauttia Camino de Santiago -reitin hengestä ja kauneudesta.</p>",
	
	"<h3>La Laguna 15 km</h3><p>León on historiallinen kaupunki Espanjan Kastilian ja Leónin alueella, jossa asuu noin 125 000 asukasta. Se on yksi "+
	"alueen tärkeimmistä kaupungeista, joka tarjoaa rikkaan kulttuuriperinnön ja upean arkkitehtuurin. Kaupungin historia juontaa juurensa "+
	"roomalaisaikaan, ja se oli merkittävä keskiajalla, erityisesti kun siitä tuli kuningaskunnan pääkaupunki. </br></br>León on tunnettu upeasta "+
	"goottilaisesta katedraalistaan, joka on yksi Espanjan merkittävimmistä maamerkeistä. Lisäksi kaupungissa on viehättävä vanha kaupunki, jossa "+
	"on kapeita kujia, historiallisia rakennuksia ja elinvoimainen ilmapiiri. </br></br>Leónissa voi nauttia paikallisista herkuista, kuten tapaksista ja "+
	"pulpo a la gallegasta, sekä vieraanvaraisesta ilmapiiristä. Kaupungissa järjestetään myös lukuisia kulttuuritapahtumia ja festivaaleja ympäri "+
	"vuoden, mikä tekee siitä vilkkaan ja kiinnostavan matkakohteen kaikenlaisille matkailijoille.</p>",

	"<h3>Fonfrìa 15 km</h3><p>Fonfría on pieni kylä Espanjan Kastilian ja Leónin alueella, jossa asuu noin "+
	"100 asukasta. Se sijaitsee Bierzon laaksossa Camino de Santiago -pyhiinvaellusreitin varrella. Kylä on "+
	"ollut merkittävä pysähdyspaikka pyhiinvaeltajille vuosisatojen ajan. </br></br>Fonfría on säilyttänyt perinteisen "+
	"maalaiskylän tunnelman, ja sen keskusta koostuu vanhoista kivitaloista ja kapeista kujista. Kylän "+
	"ympäristö tarjoaa upeita luontokohteita ja mahdollisuuksia ulkoiluun, kuten vaellusreittejä ja "+
	"retkipolkuja, jotka houkuttelevat luonnonystäviä tutkimaan alueen kauneutta. </br></br>Fonfría tarjoaa "+
	"rauhallisen ja idyllisen paikan pysähtyä ja nauttia Camino de Santiago -reitin hengestä ja "+
	"kauneudesta. Vaikka kylä itsessään ei ehkä tarjoa laajoja nähtävyyksiä, sen ympäristö ja sijainti "+
	"pyhiinvaellusreitin varrella tekevät siitä suositun paikan matkailijoille, jotka etsivät aitoa "+
	"kokemusta ja kauniita maisemia.</p>",

	"<h3>Triacastela 9 km</h3><p>Triacastela on kylä Espanjan Galiciassa, jossa asuu noin 700 asukasta. "+
	"Se sijaitsee Camino de Santiago -pyhiinvaellusreitin varrella ja on ollut tärkeä pysähdyspaikka "+
	"pyhiinvaeltajille vuosisatojen ajan. Kylän nimi Triacastela tarkoittaa \"kolmea linnaketta\", mikä "+
	"viittaa alueen historiallisiin linnoituksiin. Triacastela on tunnettu kauniista maaseudustaan ja "+
	"upeista vuoristoisista maisemistaan. </br></br>Nähtävyyksiin kuuluu useita historiallisia kirkkoja, kuten "+
	"Santa María-kirkko, joka edustaa perinteistä Galicialaista arkkitehtuuria. Lisäksi kylä tarjoaa "+
	"matkailijoille monia majoitus- ja ravintolavaihtoehtoja sekä kauppoja ja palveluita "+
	"pyhiinvaelluksen aikana. Triacastela on myös tunnettu paikallisista perinteistä ja kulttuurista, "+
	"ja siellä järjestetään vuosittain erilaisia juhlia ja tapahtumia. Kaiken kaikkiaan Triacastela "+
	"tarjoaa matkailijoilleen ainutlaatuisen mahdollisuuden kokea Galician maaseudun kauneus ja perinteet "+
	"Camino de Santiago -reitin varrella.</P>",

	"<h3>Sarría 25 km </h3><p>Sarrià on viehättävä kaupunki Espanjan Galiciassa, jossa asuu noin 12 000 "+
	"asukasta. Se sijaitsee Camino de Santiago -pyhiinvaellusreitin varrella ja on ollut tärkeä "+
	"pysähdyspaikka pyhiinvaeltajille vuosisatojen ajan. Kaupungin historia juontaa juurensa keskiajalle, "+
	"ja se oli merkittävä keskiaikainen kauppapaikka. Sarriàssa on monia historiallisia rakennuksia, "+
	"kuten keskiaikaisia kirkkoja ja linnoituksia, jotka kertovat sen menneisyydestä.</br></br> Nähtävyyksiin "+
	"kuuluu esimerkiksi Santiago el Mayorin kirkko, joka on peräisin 12. vuosisadalta ja edustaa "+
	"romaanista arkkitehtuuria. Lisäksi Sarriàssa voi tutustua vanhaan kaupunkiin, jossa on viehättäviä "+
	"kapeita kujia, aukioita ja perinteisiä kauppoja. Kaupungissa järjestetään myös lukuisia "+
	"kulttuuritapahtumia ja festivaaleja ympäri vuoden, mikä tekee siitä vilkkaan ja kiinnostavan "+
	"matkakohteen kaikenlaisille matkailijoille. Sarrià tarjoaa vierailijoilleen mahdollisuuden "+
	"kokea autenttista galicialaista kyläelämää ja nauttia upeasta maisemasta Camino de "+
	"Santiago -reitin varrella.</P>"


	
]


const cityimages = [
	[	
	"images/m_1_kuningas.jpg",
    "images/m_2_hobitit.jpg",
    "images/m_3_hotelli.jpg",
	"images/m_4_kalatiski.jpg"
	],[
   	"images/n_1_300km.jpg",
    "images/n_2_VilladangosDelParamo.jpg",
    "images/n_3_AlbergueLaHuella.jpg",
	],[
    "images/o_1_maantie.jpg",
    "images/o_4_turnajaiskentta.jpg",
    "images/o_3_pyhiinvaeltajat.jpg",
    "images/o_2_kultafasaani.jpg",
	],[
	"images/p_1_astorgan_katetdraali.jpg",
	"images/p_2_250km.jpg",
    "images/p_3_polku_kapenee.jpg",
    "images/p_4_El_Ganso.jpg"
	],[
	"images/q_1_kapuamista.jpg",
	"images/q_2_foncepadon.jpg",
    "images/q_3_rautaristi.jpg",
    "images/q_4_elAcepodeSanMiguel.jpg"
	],[
	"images/r_1_RiegodeAmbrosis.jpg",
	"images/r_2_Laskeutumista.jpg",
    "images/r_3_molinaseca.jpg",
    "images/r_4_ponferrada.jpg"
	],[
	"images/rr_1_ponferrada.jpg",
	"images/rr_2_silJokijpg.jpg",
	"images/rr_3_puistotie_Ponferradassa.jpg",
	"images/rr_lounasCacabelosa.jpg"
	],[	
	"images/s_1_cacabelos.jpg",
	"images/s_2_VillafrancadelPierzo.jpg",
	"images/s_3_Villafranca del Pierzo.jpg",
	"images/s_4_vuoret.jpg",
	"images/s_5_casaSusi.jpg"
	],[
	"images/ss_1_10kmYlamakea.jpg",
	"images/ss_2_tie_kapenee.jpg",
	"images/ss_3_yhaYlemmaksi.jpg",
	"images/ss_4_LaFaba.jpg",
	],[
		"images/t_1_Galicia.jpg",
		"images/t_2_oCebreiroA.jpg",
		"images/t_3_hobittikyla.jpg",
		"images/t_4_hobittikyläB.jpg",
		"images/t_5_nakoala.jpg",
		"images/t_6_AltodeSanRoque.jpg",
		"images/t_7_illallinenFonfrassa.jpg"
	],[
		"images/tt_1_Filobal.jpg",
		"images/tt_2_alberqueFilopaljpg.jpg",
		"images/tt_3_alamaki.jpg",
		"images/tt_4_Triacastela.jpg"
	],[
		"images/u_1_SanCristovodoReal.jpg",
		"images/u_2_polku.jpg",
		"images/u_3_samos.jpg",
		"images/u_4_polkuUrassajpg.jpg",
		"images/u_5_sarria.jpg",
		"images/u_6_bussi.jpg",
		"images/u_7_AlberqueDonAlfonso.jpg",
		"images/u_8_mirja.jpg"
	]
]
const cityTexts = [
	[	
	"<p>Leónin kuningas Alfonso IX</p>",
   	"<p>Espanjassa näillä hobittitaloilla on nimi 'la balloza'</p>",
	"<p>'Hostal  Central' paikassa La Virgen del Camino</p>", 
	"<p>Marketin kalatiski oli hyvässä järjestyksesä</p>"
	],[
	"<p>300 km jäljellä</p>",
	"<p>Villadangos del Páramo</p>",
   	"<p>Albergue La Huella</p>",

	],[
   	"<p>Maaantie</p>",
   	"<p>Aito turnajaiskenttä paikassa Hospital de Órbigo</p>",
   	"<p>Pyhiinvaeltajat</p>",
   	"<p>Kultafasaani</p>"
	],[
	"<p>Astrogan katetdraali</p>",
	"<p>250 km</p>",
	"<p>Polku kapenee, kun aletaan nousta Caminon korkeimmalle vuorelle</p>",
	"<p>El Ganson kylä häämöttää</p>"
	],[
	"<p>Kipuamista kohti vuorenhuippua</p>",
	"<p>Focepadón on levähdyspaikka 1400 metrin korkeudessa</p>",
	"<p>Rautaristi on Caminon korkein kohta 1500 metrin korkeudella</p>",
	"<p>Alamäki El Acebo de San Migueliin oli jyrkkä ja kivikkoinen/p>"
	],[
	"<p>Taukopaikka Riego de Ambrósissa</p>",
	"<p>Alamäki</p>",
	"<p>Jyrkkä alamäki päättyi vasta Molinasecassa</p>",
	"<p>Ponferrada - vuorelta laskeutuminen näkyy naamasta</p>"
	],[
	"<p>Temppeliherrojen linna Ponferradassa</p>",
	"<p>Näköala Sil-joelle</p>",
	"<p>Puistotie Ponferradossa/p>",
	"<p>Lounas Cacabelossa</p>"
	],[
	"<p>Cacapelos - Rio Cúa</p>",
	"<p>Villafranca del Bierzo</p>",
	"<p>Villafranca del Bierzo - Rio Burbia</p>",
	"<p>Noiden vuorten yli pitäisi kipaista.</p>",
	"<p>Trabadelo - illalline paikassa Alberque Casa Susi</p>"
	],[
	"<p>Alkuun 10 km ylämäkeä</p>",
	"<p>Tie kapenee, ylämääki jatkuu</p>",
	"<p>Tie muuttuu poluksi ja jyrkkenee</p>",
	"<p>La Faban kylässä oli muutama talo, baari ja majatalo.</p>",
	],[
	"<p>Siirryttiin Castillasta Galisiaan - vähän kuin Porista Raumalle.</p>",
	"<p>Saapuminen O Cebreiroon</p>",
	"<p>O Cebreiro - Joku sai päähänsä rakentaa tänne luostarin 800-luvulla</p>",
	"<p>Olkikatto on kestänyt isältä pojalle.</p>",
	"<p>Näköala 1200-metristä. Alhaalla pilvet kauas karkaavat</p>",
	"<p>1270-metriä. Tännekin on pitänyt kantaa pronssipatsas. (Tuo vasemmanpuolimmainen).</p>",
	"<p>Illalinen Fonfríassa</p>"
	],[
	"<p>Kivikirkko Filopalissa</p>",
	"<p>Alberque Fillopas - minä ja puumies.</p>",
	"<p>Leppoisa alamäki</p>",
	"<p>Triacastela</p>",
	],[
	"<p>San Cristovo do Real. Ei baaria, ei palveluita. Kylä nukkuu onnensa ohi.</p>",
	"<p>Tunturipuro kasvoi hiljalleen joeksi. Kuvasta puuttuu soliseva äänimaisema.</p>",
	"<p>Samoksen luostarin historia alkaa 600-luvulta ja se on edelleen benediktiinimunkkien käytössä.</p>",
	"<p>Kuinka monta kävelijää tarvitaan, että polku vajoaa 3 metriä maan sisään?</p>",
	"<p>Vanhan kaupungin pääkatu Sarríassa.</p>",
	"<p>Moni pyhiinvaeltaja aloittaa matkansa Sarrìasta</p>",
	"<p>Alberque de Don Álvaron majatalo</p>",
	"<p>Illallinen Mirjan kanssa</p>",
    ]
]
