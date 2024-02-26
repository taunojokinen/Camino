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
	"Estella",
  	"Sansol",
  	"Logrõno",
	"Takaisin alkuun"
	]

const city=[
	"<h3>Puente la Reina 24 km</h3> <p>Pamplonasta matka jatkui kaupunkin katuja pitkin kohti. Reitti kohosi hiljalleen 350 m Alto de Perdónia, "+
  	"joka on tämän päivätaipaleen korkein kohta. Ylhäällä on tunnettu pyhiinvaeltajajoukko esittävä taideteos. Täältä laskeuduttiin kolmen pienen"+
  	"kylän kautta Puente la Reinaan, jonka vanhaa pääkatua pitkin päädyttiin sillale, jonka mukaan kaupunki on saanut nimensä.<br><br>"+
  	"Puente la Reinan nimi  tarkoittaa kuningattaren siltaa, joka rakennettiin 1000-luvulla pyhiinvaeltajien matkantekoa helpottamaan."+
  	"Kaupungissa asuu vajaa 3000 ihmistä, joten tämäkin kaupunki on oikeastaan olemassa pyhiinvaletajien palvelemista varten. Majapaikkana oli"+ 
  	"tällä kertaa Albergue Santiago Apostol, joka sijaitsi kaupunkiin nähden joen vastakkaisella puolella. Albergue oli varsin siisti ja nykyaikainen," +
  	"joskin hieman syrjäinen.</p>",

	"<H3>Estella 22 km</H3><p> Viides matkapäivä on helteisen lämmin. Iltapäivän alkaessa lämpötila nousu 35 asteeseen, mikä allkaa jo tuntua hieman paljolta,"+
  	"Estellan halki kulkevalla Calle San Nicolasilla aurinko paistoi suoraan edesstäpäin siten, ettei kadun kumpikaan puolisko tarjonnut varjoa" +
  	"Estella on noin vuonna 1100 perustettu 13000 asukkaan kaupunki. Estellassa on useita romaanisen aikakauden arvorakennuksia "+
  	"kuten 1100-luvulta peräisin oleva Navarron kuninkaan palatsi. <br><br>Majapaikan varasin Booking.comin kautta 1,5 kilometri'ä Estellasta eteenpäin Ayeguin pikkukylästä, "+
  	"joka on hieman modernimpi, kuin Estella. Albergue Municipal San Cipriano on nimensä mukaisesti kunnan ylläpitämä albergue. Majapaikassa ei sinällään ollut mitään" + 
  	"vikaa, mutta suosituimmat majapaikat eivät ilmeisesti halua maksaa provisiota Bookin.comille, joten tästä eteenpäin päätin varata majoituksen astumalla" + 
  	"ovesta sisään ja luottamalla hyvään onneen.</p>",

	"<H3>Sansol 28 km</H3><p> Heti Ayeguista lähtemisen jälkeen tuli vastaan Irachen viinitila. Viinitilan erikoisuus on seinässä seinässä oleva viinihana,   " +
	"josta ohikulkija voi täyttää mukinsa virkistävällä ja tervehdyttävällä annoksella punaviiniä, kuten viinitilaa ylläpitävät munkit ovat tervehtineet ohikulkevia " +
	" pyhiinvaeltajia jo tuhannen vuopden ajan. Viinitilat ovat olennainen osa maisemaa tässä osassa Navarraa, jossa matkareitti polveilee viiniviljeysten keskellä."+
	"<br><br>Sansol on sokkeloinen sadan asukkaan kylä, josta löytyy kolme Albergueta. 'Palacio de Sansol' oli pieni yksityinen albergue, jossa oli 28 makupaikka ja " +
	"lisäksi kaksi 2-hengen huonetta. Albergue oli vanhassa hyvin arvokkaan oloisessa rakennuksessa ja sisustukseltaan todella hienosti viimeistelty. Illalisella  " +
	"talon isäntä ylpeänä esitteli taloa ja sen talon historiaa.</p>",

  	"<H3>Logrõno 21 km</H3><p>Logroño on sykkivä kaupunki Espanjan pohjoisosassa, La Riojan alueella, joka hurmaa vierailijansa ainutlaatuisella sekoituksella kulttuuria,"+
  	"historiaa ja gastronomiaa. Sen keskusta on täynnä viehättäviä kapeita kujia, historiallisia rakennuksia ja aukioita, jotka heijastavat sen rikasta menneisyyttä. "+
  	"Katedraali, Santa Maria de la Redonda -kirkko ja vanhat linnoitukset ovat vain muutamia kaupungin historiallisista nähtävyyksistä.</br></br>"+
  	"Logroño tunnetaan myös maailmanluokan Rioja-viineistään. Kaupungissa voi nauttia viininmaistelusta lukuisissa viinitiloissa ja baareissa. Espanjalainen ruokakulttuuri "+
  	"kukoistaa Logroñossa, ja sen lukuisat pinxtos-baarit tarjoavat herkullisia paikallisia ruokia.</br></br>"+
  	"Logroño on myös tunnettu festivaaleistaan, erityisesti San Mateon juhlista, jotka täyttävät kadut musiikilla, tanssilla ja iloisella ilmapiirillä syyskuussa. Kaiken kaikkiaan "+
  	"Logroño on eläväinen kaupunki, joka tarjoaa vierailijoilleen unohtumattomia kokemuksia niin kulttuurin, historian kuin gastronomiankin saralla.</p>"]


const cityimages = [
	[	
	"images/4_1_aamu_pamplonassa.jpg",
    "images/4_2_Saapuminen_puento_de_la_Reinaan.jpg",
    "images/4_3_Arga_joen_silta.jpg"
	],[
   	"images/5_1_aamiainen_alberguessa.jpg",
    "images/5_2_matkantekoa.jpg",
    "images/5_3_Cirauqui_haamottaa.jpg",
    "images/5_4_santiago_655.jpg",
	],[
    "images/6_1_aamu.jpg",
    "images/6_2_viinihana.jpg",
    "images/6_3_bar_axcetago.jpg",
    "images/6_4_PldeStaMaría_Arcos.jpg",
	], [
	"images/7_1_Casita Lucia_Bargota.jpg",
	"images/7_2_Viana.jpg",
    "images/7_3_kolmenKuninkaanJuhlaViana.jpg",
    "images/7_4_Logrono_saapuminen.jpg",
    ]
	
]
const cityTexts = [
	[	
		"<p>Aamu Pamplonassa</p>",
   		"<p>Saapuminen_puento_de_la_Reinaa</p>",
		"<p>Arga-joen silta</p>", 
		],[
		"<p>Aamiainen</p>",
   		"<p>Matkantekoa</p>",
   		"<p>Cirauqui häämöttää</p>",
		"<p>Santiago 655 km</p>"
		],[
   		"<p>Herätys kello 6, aamutoimet, aamiainen ja matkaan.</p>",
   		"<p>Irachen viinitilan erikoisuus on seinässä seinässä oleva viinihana, josta ohikulkija voi täyttää mukinsa virkistävällä ja tervehdyttävällä"+
      " annoksella punaviiniä, kuten viinitilaa ylläpitävät munkit ovat tervehtineet ohikulkevia pyhiinvaeltajia jo tuhannen vuopden ajan. </p>",
   		"<p>Bar Axcetago</p>",
   		"<p>Plaza de Santa María Arcos</p>",

    ] , [
    "Logroño"
    ]
]
