document.addEventListener("DOMContentLoaded", function() {

    

if (window.innerWidth > 800){
  console.log("aaa");
    document.location.href = "index.html";
  }

window.addEventListener("resize",function(){
    if (window.innerWidth > 800){
      console.log("aaa");
      document.location.href = "index.html";
    }
  })



  let interphotos = setInterval(scrollDroite, 6000);
  let tempIdP = 1;

  function copy() {
    var copyText = document.querySelector(".mailHidden");
    copyText.select();
    document.execCommand("copy");

    document.querySelector(".copie").style.opacity = "1";

    setTimeout(() => {
        document.querySelector(".copie").animate([
            // keyframes
            {opacity: "1" },
            { opacity: "0" }
          ], {
            // timing options
            duration: 200
          });

          document.querySelector(".copie").style.opacity = "0";
    }, 500);
  }
  
  document.querySelector(".copyMail").addEventListener("click", copy);


  for (let i = 1; i < 7; i++) {
        document.querySelector(`.mobile .Mprojets .image[data-id='${i}']`).style.backgroundImage = `url('./images/projets/${i}.png')`;
    }

  document.querySelectorAll(".projet.openP").forEach(element => {
    element.addEventListener("click",function(e){
      document.querySelector(".modaleProjet").style.display = "grid";
      tempIdP = e.target.getAttribute("data-id");
      console.log(e.target)
      changePageProjet(tempIdP)
      document.querySelector(".modaleProjet .photos").style.backgroundImage = `url("./images/projets/${tempIdP}/${photosC}.png")`;
      clearInterval(interphotos);
      interphotos = setInterval(scrollDroite, 6000);
    })
  }); 

  document.querySelector(".modaleProjet .goBack").addEventListener("click",function(){
    document.querySelector(".modaleProjet").style.display = "none"
    photosC = 1;
  clearInterval(interphotos);
  })
  
  function changePageProjet(id){
    let h2P;
    let h3P;
    let h4P;
    let pP;
    let aP;
    if (id == 1){
      h2P = "Ogrinami (En cours)";
      h3P = "Projet tutor?? de 2eme ann??e , D??veloppement full stack et product owner.";
      h4P= "#jeuxJS #PHP #MobileFirst #React #d3.js";
      pP = "<h4>Description:</h4> Ogrinami est un site internet et une web app qui ?? pour but de sensibiliser les enfants aux probl??mes ??cologiques. Sur le site web, notre mascotte Grinouille invite les enfants ?? lire ou ?? ??couter des courts articles illustr??s sur l?????cologie, ou bien ?? faire des quizz amusants pour en apprendre plus sur les enjeux climatiques. Sur le c??t?? web app, l???enfant sera invit?? ?? parcourir un plateau de jeu et ?? jouer ?? des mini-jeux en rapport avec des probl??mes ??cologiques. <br>"+
      "<h4>Mes missions :</h4><ul><li>Mise en place d???une base de donn??es pour les articles et les quizz</li> <li>Cr??ation des pages article et quizz en PHP afin de chercher les donn??es en PHP. Avec possibilit?? de changer de langue.</li> <li>Stylisation des pages article et quizz en mobile first, et enti??rement responsive ?? l???aide de Sass.</li> <li>D??veloppement de jeux en D3.js. (Shooter, clicker???). Programmation orient??e objet.</li> <li>Web app en React.</li> <li>Cr??ation d???une API json, et interactions en React avec axios.</li><li>En tant que product owner, j'ai ?? organiser l'emploi du temps et ?? ??crire les product back-logs et carnets de sprint.</li></ul>"

      aP ="https://www.ogrinami.com/"
    }else if (id ==2){
      h2P = "MMI (job) Dating Simulator |  Janvier ?? Juin 2021";
      h3P = "Projet tutor?? de premi??re ann??e, d??veloppeur full stack orient?? back-end."
      h4P = "#PHP #Dialogues #BaseDeDonnees #Jeu #Jquery"

      pP = "<h4>Description:</h4> MMI (job) Dating Simulator est un site interactif qui prend les allures de jeu de type visual novel, soit un jeu avec des des dialogues avec les personnages. Dans les visual novels de type ???Dating Simulator???, le joueur interagit avec des personnages afin de potentiellement sortir avec eux. Dans notre jeu, le joueur interagit avec des personnages qui sont des professeurs, dans le but de d??couvrir le m??tier qui leur correspond apr??s la formation MMI (M??tiers du Multim??dia et de l???Internet). D???o?? le jeu de mot avec ???Job Dating???, et ???Dating Simulator???. <br/>Le projet ?? ??t?? fait en premi??re ann??e, le site n???a donc pas comme principal but d?????tre responsive sur tous les appareils, il n???est donc pas adapt?? aux appareils mobiles. <br/><h4>Mes missions :</h4><ul>  <li>Organisation d???une arborescence complexe reliant les questions et les r??ponses aux m??tiers correspondants.</li>  <li>Mise en place d???une base de donn??es autour de l???arborescence.</li>  <li>D??veloppement d???un syst??me de sauvegarde de la progression en localstorage.</li>  <li>D??veloppement des pages en PHP reli??s ?? la base de donn??es.</li>  <li>Rendre les pages plus responsives.</li></ul>"

      aP ="https://www.lazalucas.fr/nolink"

    }else if (id ==3){
      h2P = "#BA0BAB, Projet Hex#words | fin 2021";
      h3P = "Projet d'int??gration multim??dia. D??veloppement Front-end"
      h4P = "#CSS #Responsive #MobileFirst #CSS_Grid #ImagesOptimisees"

      pP = `<h4>Description:</h4> Ce site a ??t?? fait dans le cadre d'un projet en int??gration multim??dia, j'ai donc d??cid?? de me concentrer sur le CSS avec un accent mis sur les grilles et les images responsives. Le site ?? ??t?? con??u avec l'aspect Mobile First en t??te. Les animations au scroll sont faites en javascript. <br>
      Le projet consistait ?? prendre un mot, le passer en hexad??cimal et faire un site ?? propos de ce mot avec comme couleur principale la couleur associ??e au code hexad??cimal du mot en question. Ici le mot baobab nous donne la couleur #BA0BAB. <br>
      <h4>Mes missions :</h4>
      <ul>
        <li>Concevoir un site en mobile first.</li>
        <li>Avoir un univers graphique fort autour d???une couleur principale.</li>
        <li>D??veloppement du site responsive autour des ???break points??? les plus communs.</li>
        <li>Optimisation des poids des images en fonction de leur taille ?? l?????cran.</li>
        <li>Accent mis sur les grilles pour le positionnement.</li>
      </ul>
      `

      aP ="https://www.hexword.lazalucas.fr/"

    }else if (id ==4){
      h2P = "Mini-jeux | 2021 et 2022";
      h3P = "Assortiment de jeux en Javascript (vanilla ou d3.js) et PHP."
      h4P = "#Javasctipt #jeux #d3js #P.O.O #PHP"

      pP = `<h4>Description:</h4> Certains jeux ont ??t?? faits dans le cadre d???un projet en Programmation Orient??e Objet ?? l???aide de la librairie D3.js. D???autres dans le cadre du projet tutor?? de deuxi??me ann??e. Un autre est en cours de d??veloppement; c???est un jeu de type ???pok??mon???, r??alis?? en PHP avec la logique de programmation orient??e objet (classes, constructeurs???) tout ceci connect?? ?? une base de donn??es collaborative. <br>
      <h4>Mes missions :</h4>
      <ul>
        <li>Manipulation de classes d???objets</li>
        <li>D??velopper des syst??mes de collisions.</li>
        <li>G??rer des tableaux d???objets.</li>
        <li>G??rer les d??placements des personnages.</li>
        <li>Penser les jeux pour qu???ils soient adapt??s aux enfants.</li>
      </ul>
      
      `

      aP ="https://www.games.lazalucas.fr/"
    }else if (id ==5){
      h2P = "Blog du rhum | fin 2021";
      h3P = "Blog en PHP. D??veloppement back-end."
      h4P = "#PHP #Blog #Ajax #BDD #back"

      pP = `<h4>Description:</h4> Projet de d??veloppement web. Le but ??tait de concevoir un blog avec des billets pouvant ??tre post??s par un admin. Ces billets peuvent ??tre consult??s par les utilisateurs, de plus, les utilisateurs connect??s peuvent commenter sous les billets. Les commentaires sont affich??s en utilisant Ajax. <br>
      Le projet ??tant orient?? back-end, le site n???est donc pas un chef d'??uvre visuel. <br>
      <h4>Mes missions :</h4>
      <ul>
        <li>D??veloppement d???un syst??me de connexion avec chiffrement des mots de passe.</li>
        <li>D??veloppement d???une partie back-office seulement accessible par les utilisateurs admin. L???admin peut directement modifier certaines donn??es de la base de donn??es depuis cette interface.</li>
        <li>D??veloppement d???une section commentaires, affich??e gr??ce ?? Ajax, en acc??dant ?? une API connect??e ?? la base de donn??es.</li>
        <li>Tri des billets avec des requ??tes SQL pr??cises.</li>
      </ul>
      `

      aP = "https://www.lazalucas.fr/blogdurhum/"

    }else if (id ==6){
      h2P = "Vaux tourisme | 2021";
      h3P = "Campagne institutionnelle de communication."
      h4P = "#photosshop #UI/UX #Figma #mockups"

      pP = `<h4>Description: </h4>Campagne institutionnelle de communication autour de la ville de Vaux-sur-Seine dans le 78. Le projet visait ?? promouvoir, en groupe, une ville en r??alisant des affiches et des maquettes pour un site web autour de la ville.
      <h4>Mes missions :</h4>
      <ul>
        <li>R??alisation de maquettes low et high fidelity sur Figma dans l???univers des affiches r??alis??es par mes camarades.</li>
        <li>Adaptation des maquettes ?? tous les formats d???appareils.</li>
        <li>R??alisation de mockups et de retouches sur photosshop.</li>
        <li>Recherche de slogans accrocheurs.</li>
      </ul>
      `

      aP ="https://www.lazalucas.fr/vaux.pdf"

    }
    document.querySelector(".modaleProjet .titres h2").innerHTML = h2P;
    document.querySelector(".modaleProjet .titres h3").innerHTML = h3P;
    document.querySelector(".modaleProjet .titres h4").innerHTML = h4P;
    document.querySelector(".modaleProjet .texte p").innerHTML = pP;
    document.querySelector(".modaleProjet .lien a").setAttribute("href",aP);
  }


  let photosC = 1;
  clearInterval(interphotos)
  interphotos = setInterval(scrollDroite, 6000);
  clearInterval(interphotos);
  
  document.querySelector(".modaleProjet .photos").style.backgroundImage = `url("./images/projets/${tempIdP}/${photosC}.png")`
  // scrollGauche();
  
  //


  




function scrollDroite(){
photosC = changephotosN(photosC,"+")
document.querySelector(".modaleProjet .photos").style.backgroundImage = `url("./images/projets/${tempIdP}/${photosC}.png")`              

}

function changephotosN(num,dir){

if (dir == "+"){
if(num >= 4){
    num = 1;
    return num;
} else {
    num++;
    return num;
}
}else if (dir == "-"){
if(num <= 1){
    num = 4;
    return num;
} else {
    num--;
    return num;
}
}

}



});