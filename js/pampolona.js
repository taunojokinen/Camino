var cityButton = document.getElementsByClassName("buttonChangeImage")[1];
var cityIndex = 0;
var nextCity=[
	"Zubiri 22 km",
	"Pamplona 21 km",
	"Takaisin alkuun",
	
]
var city=[
	"<h3 >Roncesvalles 25 km</h3> <p>Ensimmäinen matkapäivä alkoi aamuhämärissä kiipeämällä Pydrenneiden yli. Reitin korkein kohta oli 1430 m, " +
	"joten nousua Saien Jean Pied de Prtista tuli liki 1300 m. Minkä jälkeen oli vielä laskeutumista liki 600 m. Osa alamäestä oli aikamoista" +
	"hyppelyä kiveltä kivelle. Kun luostarin hahmo vihdoin tuli näkyviin, ilta alkoi jo hämärtyä. Kaikki majapaikat pienessä vuoristokylässä" +
	"olivat loppuneet, mikä ei väsyneenä tuntunut lainkaan mukavalta.<br><br> En varmaankaan ollut ensimmäinen väsynyt ja pettynyt majapaikan" +
	"etsijä Roncesvallessa, joten ongelmaan oli ratkaisu olemassa. Paikallinen taksi kuljetti matkalaisia lähietäisyydellä oleviin"+
	"majoituspaikkoihin sitä mukaa kuin suinkin ehti. Niinpä löytyi minullekin sänky ja katto pään päälle leirintä-alueelta viiden kilometrin päässä Ronkevallesta</p>",

	"<H3>Zubiri 22 km</H3> <p>Aamulla soi jollain herätyskello kello kuusi. Hampaanpesu, vaatteet ylle, tavarat reppuun ja ulos. Meitä matkalaisia oli puolenkymmentä" +
	" aloittelemassa päivää. Aamiaista ei ollut näin aikaisin majapaikassa saatavilla, joten päätimme etsiä aamiaispaikkaa parin kilometrin päästä Espinalista," +
	"missä myös pääsisimme takaisin oikealle reitille. Innoissamme painelimme aluksi kilometrin verran vikasuuntaan ja jouduimme palaaman takaisin." + 
	"<br><br>Aamiaisen jälkeen pääsimme oikealle polulle, joka kulki metsän siimeksessä. Matkanteko tuntui mukavalta, kun ei tarvcinnut kiivetä. Zubiri on pieni"+
	"kylä, jossa asuu viitisenastaa ihmistä. Ensimmäisen majapaikan ikkunalle oli laitettu lappu, jonka mukaan paikka on täysi. Viereisestä alberquesta löytyi onneksi"+
	"yksi vapaa vuode</p>",

	"<H3>Pamplona 21 km</H3><p> Zubirista matka jatkuu Arga rantaa seuraillen kahden päivätaipaleen verran. " +
	"Ensimmäiset pari kilometria kuljetaan magnesium kaivoksen aidan viertä. Kun jo tässä vaiheessa matkaa on alkanut tottua luontomaisemaan vanhassa" +
	" historiallisessa ympäristössä, avolouhos tuntuu häiritsevältä. Kaivosmaiseman jälkeen taival jatkuu tasaisena ja rauhallisena, kunnes saavutaan " +
	"Pamplonan esikaupunkialueelle ja lopulta vanhaan kaupungiin. Ensimmäisen isomman etapin kunniaksi olin varannut oman huoneen aivan vanhan kaupungin keskustasta"+
	"<br><br>Pamplona Navarran pääkaupunki. Sen väkiluku on noin 196 000. Pamplona on tunnettu vuosittain" +
	" järjestettävästä San Fermínin festivaalista ja siihen kuuluvasta härkäjuoksusta. 100-luvulta Pamplona oli roomalainen kaupunki" +
	" nimeltä Pompeiopolis. Pamplonan vanha kaupunki on todella sokkeloinen.</p>"
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

var cityimages = [
		[	
		"images/1_1_saintJean.jpg",
   		"images/1_2_orisson.jpg",
		"images/1_3_kukka.jpg",
   		"images/1_4_rocesvalles.jpg"
		],[
   		"images/2_1_polku.jpg",
   		"images/2_2_zubiri.jpg",
		"images/2_3_zubiri.jpg"
		],[
   		"images/3_2_aamuZubirissa.jpg",
		"images/3_4_aurinko_nousee.jpg",
   		"images/3_3_maantie.jpg",
   		"images/3_5_pamplona.jpg",
		"images/3_6_pamplona.jpg"
		]
]
var cityTexts = [
		[	
		"<p>Tästä se alkaa. Portista ulos ja vanhaa siltaa pitkin 'Nive de Beherobie'-joen yli. Edessä rankka ylämäki.</p>",
		"<p>Alberque Orisson</p>",
		"<p>Carlina acaulis L. Hopeakurho</p>",
		"<p>Roncesvallesin luostari</p>"

		],[
   		"<p>Matkareitti sujui mukavasti tasaisella polulla. Viimeisellä neljällä kilometrilla tosin oli 300 m laskeutumista Arga-joen laaksoon.</p>",
   		"<p>Albergue Zaldigo oli pieni mukava yksityinen majapaikka Zubirissa.</p>",
		"<p>Päivataival taukoineen kesti täyden työpäivän verran. Perillä suihku ja pieni lepotauko tulivat tarpeeseen ennen illallisen etsimistä.<p>"
		],[
   		"<p>Herätys kello 6, aamutoimet, aamiainen ja matkaan.<p>",
   		"<p>Valokuvaustauko Arga-joen sillala</p>",
   		"<p>Camino de Santiagon matkareitti kiertelee omia polkujaan pitkin kylästä kylään.</p>",
   		"<p>Jälleen ylitetään Arga-joki. Tällä kertaa ollaan jo Pamplonan kaupungin porteilla</p>",
		"<p>Pamplona on vanha linnoituskaupunki. Sisäänkäynti kulkee näyttävän portin läpi.</p>"
		]
]
var imageButton = document.getElementsByClassName("buttonChangeImage")[0];
var imageIndex = -1;

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