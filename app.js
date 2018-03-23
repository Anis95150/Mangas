var init = function(){

var btn = document.querySelector(".btn");
var btns = document.querySelector(".btns");
var liste = document.querySelector(".liste");
var fini = document.querySelector(".fini");
var cacher = document.querySelector(".cacher");
var para = document.getElementById("para");


    btn.onclick = function(){
        if(liste.style.visibility == "visible"){
            liste.style.visibility = "hidden";
        }

        else{
            liste.style.visibility = "visible"
        }   
    };

    btns.onclick = function(){
        if(fini.style.visibility == "visible"){
            fini.style.visibility = "hidden";
        }

        else{
            fini.style.visibility = "visible";
        }
    };

    cacher.onclick = function(){
        if(para.style.visibility == "visible"){
            para.style.visibility = "hidden"
        }

        else{
            para.style.visibility = "visible"
        }
    }
}



var liste_mangas = ["Hunter x Hunter ",
    "My Hero Academia ",
    "One piece ",
    "Black Clover ",
    "Shingeki no Kyojin ",
    "Berserk ",
    "Nanatsu no Taizai ",
    "The Promised ",
    "One punch man ",
    "Kingdom ",
    "Made in abyss ",
    "Ippo ",
    "Tokyo Ghoul ",
    "JoJO Bizzare adventure ",
    "Full metal alchimiste ",
    "Detective Conan ",
    "Sun Ken Rock ",
    "Bleach ",
    "Naruto ",
    "Dragon ball Z ", 
    "Fairy Tail ",
    "Death Note ",
    "Eyeshield 21 ",
    "Ken le survivant ",
    "Les Chevaliers du Zodiac ",
    "Olive et Tom ",
    "Beelzebub ",
    "Shaman King ",
    "Fate Stay Night"]

function filtreTexte(requete) {
	return liste_mangas.filter(function(el) {
		return el.toUpperCase().indexOf(requete.toUpperCase()) > -1;
	})
}

function mangas(){

var input = document.getElementById("texte").value; 
document.getElementById("para").innerHTML ="Les mangas qui contiennent "+ input +" sont :"+ filtreTexte(input);
}


window.addEventListener("DOMContentLoaded", init)

