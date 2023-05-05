

document.addEventListener("DOMContentLoaded", function() {

  if (window.innerWidth <= 800){
    document.location.href = "mobile.html";
  }
  

    let interScroll = setInterval(showScroll,4000);
    let interScrollB = setInterval(showScrollB,4000);
    clearInterval(interScrollB);

    let scrolling = false;
    let info = false;
    let Pid = 1;
    let photoTop = 6;
    let photoMid = 1;
    let photoBot = 2;

    let tempIdP = 1;

    let aboutActive = 1;


    window.addEventListener("resize",function(){
      // console.log(window.innerWidth)
      if (window.innerWidth <= 800){
        document.location.href = "mobile.html";
      }
    })

    document.querySelector(".Ptop").style.backgroundImage = `url('images/projets/${photoTop}.png')`;
    document.querySelector(".Ptop").setAttribute("data-id", photoTop);

    document.querySelector(".Pmid").style.backgroundImage = `url('images/projets/${photoMid}.png')`;
    document.querySelector(".Pmid").setAttribute("data-id", photoMid);
    document.querySelector(".Pinfo").setAttribute("data-id", photoMid);
    document.querySelector(".Pinfo2").setAttribute("data-id", photoMid);

    document.querySelector(".Pbot").style.backgroundImage = `url('images/projets/${photoBot}.png')`;
    document.querySelector(".Pbot").setAttribute("data-id", photoBot);


    document.addEventListener("wheel", function(e){
        clearInterval(interScroll);
        clearInterval(interScrollB);
        
        // console.log("s");
        e.preventDefault;
        if ((e.deltaY > 0) && (scrolling === false)){
            
            scrollHaut();
            interScroll = setInterval(showScroll,15000);


        } else if ((e.deltaY < 0) && (scrolling === false)){
            scrollBas();
            interScrollB = setInterval(showScrollB,15000);
        }
    });

    function scrollBas(){
        // console.log("-");
        scrolling = true;

            
                
        document.querySelector(".slider").style.bottom = "0";
       document.querySelector(".slider").animate([{bottom:"-20vw"}],{duration:1000});
    setTimeout(function(){ 
        document.querySelector(".Pmid").style.backgroundImage = `url('images/projets/${photoTop}.png')`;
        document.querySelector(".Pmid").setAttribute("data-id", photoTop);
        document.querySelector(".Pinfo").setAttribute("data-id", photoTop);
        document.querySelector(".Pinfo2").setAttribute("data-id", photoTop);

        photoBot = changeNum(photoBot,"-");
        document.querySelector(".Pbot").style.backgroundImage = `url('images/projets/${photoBot}.png')`;
        document.querySelector(".Pbot").setAttribute("data-id", photoBot);


        photoTop = changeNum(photoTop,"-");
        document.querySelector(".Ptop").style.backgroundImage = `url('images/projets/${photoTop}.png')`;
        document.querySelector(".Ptop").setAttribute("data-id", photoTop);

        
      
        

    }, 1000);

    setTimeout(() => {
       
        document.querySelector(".slider").style.bottom = "0";
        Pid = document.querySelector(".Pinfo").getAttribute("data-id");
        updateInfo(Pid);
    }, 1050);

    setTimeout(() => {
        
        scrolling = false;
    }, 2000);
}
    

    function scrollHaut(){
        // console.log(scrolling)
            scrolling = true;
            // console.log("+");
            
                
                document.querySelector(".slider").style.bottom = "0";
               document.querySelector(".slider").animate([{bottom:"20vw"}],{duration:1000});
            setTimeout(function(){ 
                document.querySelector(".Pmid").style.backgroundImage = `url('images/projets/${photoBot}.png')`;
                document.querySelector(".Pmid").setAttribute("data-id", photoBot);
                document.querySelector(".Pinfo").setAttribute("data-id", photoBot);
                document.querySelector(".Pinfo2").setAttribute("data-id", photoBot);


                photoBot = changeNum(photoBot,"+");
                document.querySelector(".Pbot").style.backgroundImage = `url('images/projets/${photoBot}.png')`;
                document.querySelector(".Pbot").setAttribute("data-id", photoBot);

                photoTop = changeNum(photoTop,"+");
                document.querySelector(".Ptop").style.backgroundImage = `url('images/projets/${photoTop}.png')`;
                document.querySelector(".Ptop").setAttribute("data-id", photoTop);

                

    


    


                

                

            }, 1000);

            setTimeout(() => {
               
                document.querySelector(".slider").style.bottom = "0";
                Pid = document.querySelector(".Pinfo").getAttribute("data-id");
                updateInfo(Pid);
            }, 1050);

            setTimeout(() => {
               
                
                scrolling = false;
            }, 2000);


            
    }



   document.querySelector(".deroulProjets").addEventListener("mouseenter",function(){

    info = true;
       
    Pid = document.querySelector(".Pinfo").getAttribute("data-id");

    updateInfo(Pid);


    // scrolling = true;
    


    document.querySelector(".deroulProjets .Pinfo").style.display = "grid";

     
   })

   document.querySelector(".deroulProjets .Pinfo2").addEventListener("mouseout",function(){
    //    scrolling = false;
    info = false;
    document.querySelector(".deroulProjets .Pinfo").style.display = "none";
  
})

//   });

  function changeNum(num,dir){
      if (dir == "+"){
          if (num == 6){
              return 1;
          } else {
              num++
              return num;
          }
          
      } else if ( dir == "-"){
          if (num == 1){
              return 6;
          } else {
              num--
              return num;
          }
      }
  }


  function updateInfo(Pid){
    if (Pid == 1){
        document.querySelector(".Pinfo h2").innerHTML = "Ogrinami";
        document.querySelector(".Pinfo h4").innerHTML = "Tags : #jeuxJS #PHP #MobileFirst #React #d3.js";
    } else if (Pid == 2){
        document.querySelector(".Pinfo h2").innerHTML = "MMI (job) Dating Simulator";
        document.querySelector(".Pinfo h4").innerHTML = "Tags : #PHP #Dialogues #BaseDeDonnees #Jeu #Jquery";
    } else if (Pid == 3){
        document.querySelector(".Pinfo h2").innerHTML = "#BA0BAB, Projet Hex#words";
        document.querySelector(".Pinfo h4").innerHTML = "Tags : #CSS #Responsive #MobileFirst #CSS_Grid #ImagesOptimisees";
    } else if (Pid == 4){
        document.querySelector(".Pinfo h2").innerHTML = "Mini-jeux";
        document.querySelector(".Pinfo h4").innerHTML = "Tags : #Javasctipt #jeux #d3js #P.O.O #PHP";
    } else if (Pid == 5){
        document.querySelector(".Pinfo h2").innerHTML = "Blog du rhum";
        document.querySelector(".Pinfo h4").innerHTML = "Tags : #PHP #Blog #Ajax #BDD #back";
    } else if (Pid == 6){
        document.querySelector(".Pinfo h2").innerHTML = "Vaux tourisme";
        document.querySelector(".Pinfo h4").innerHTML = "Tags : #Photoshop #UI/UX #Figma #mockups";
    }
  }


  function showScroll(){
      document.querySelector(".home .blob_violet .scrollInfo").style.transform = "scale(1)";
      
      document.querySelector(".home .blob_violet .scrollInfo").animate([
        // keyframes
        { transform: 'scale(1)' },
        { transform: 'scale(1.2)' },
        { transform: 'scale(1)' }
      ], {
        // timing options
        duration: 1000,easing:"ease"
      });

        scrollHaut();
      
  }

  function showScrollB(){
    document.querySelector(".home .blob_violet .scrollInfo").style.transform = "scale(1)";
    
    document.querySelector(".home .blob_violet .scrollInfo").animate([
      // keyframes
      { transform: 'scale(1)' },
      { transform: 'scale(1.2)' },
      { transform: 'scale(1)' }
    ], {
      // timing options
      duration: 1000,easing:"ease"
    });

      scrollBas();
    
}


  document.querySelector(".home .a_liste-projets").addEventListener("click",function(){
      console.log("HalloOui")
    document.querySelector(".projets").style.transform = "translateX(100vw)";
    document.querySelector(".projets").style.display = "grid";
    document.querySelector(".home").animate([
        // keyframes
        { transform: 'translateX(0)' },
        { transform: 'translateX(-100vw)' }
      ], {
        // timing options
        duration: 600,easing:"ease"
      });

      document.querySelector(".projets").animate([
        // keyframes
        { transform: 'translateX(100vw)' },
        { transform: 'translateX(0)' }
      ], {
        // timing options
        duration: 600,easing:"ease"
      });

      setTimeout(() => {
          document.querySelector(".home").style.transform = "translateX(-100vw)";
          document.querySelector(".projets").style.transform = "translateX(0)";
          document.querySelector(".home").style.display = "none";
      }, 590);

  });


  
 

  document.querySelector(".projets .a_accueil").addEventListener("click",function(){
    document.querySelector(".home").style.transform = "translateX(-100vw)";
    document.querySelector(".home").style.display = "grid";
    document.querySelector(".home").animate([
        // keyframes
        { transform: 'translateX(-100vw)' },
        { transform: 'translateX(0)' }
      ], {
        // timing options
        duration: 600,easing:"ease"
      });

      document.querySelector(".projets").animate([
        // keyframes
        { transform: 'translateX(0)' },
        { transform: 'translateX(100vw)' }
      ], {
        // timing options
        duration: 600,easing:"ease"
      });

      setTimeout(() => {
          document.querySelector(".home").style.transform = "translateX(0)";
          document.querySelector(".projets").style.transform = "translateX(100vw)";
          document.querySelector(".projets").style.display = "none";
      }, 590);
  });

  document.querySelector(".home .a_contact").addEventListener("click",function(){
    document.querySelector(".contact").style.transform = "translateY(100vw)";
    document.querySelector(".contact").style.display = "grid";
    
      document.querySelector(".contact").animate([
        // keyframes
        { transform: 'translateY(100vw)' },
        { transform: 'translateX(0)' }
      ], {
        // timing options
        duration: 300,easing:"ease"
      });

      setTimeout(() => {
          document.querySelector(".contact").style.transform = "translateY(0)";
          document.querySelector(".home").style.display = "none";
      }, 290);

      setTimeout(() => {
        document.querySelector(".contact .petitBlob").style.opacity = "0";
        document.querySelector(".contact .petitBlob").style.display = "grid";
          document.querySelector(".contact .petitBlob").animate([
            // keyframes
            { opacity: '0' },
            { opacity: '1' }
          ], {
            // timing options
            duration: 500,easing:"ease"
          });
              
          
      }, 300);

      setTimeout(() => {
        document.querySelector(".contact .petitBlob").style.opacity = "1";

        document.querySelector(".contact .moyenBlob").style.opacity = "0";
        document.querySelector(".contact .moyenBlob").style.display = "grid";
          document.querySelector(".contact .moyenBlob").animate([
            // keyframes
            { opacity: '0' },
            { opacity: '1' }
          ], {
            // timing options
            duration: 500,easing:"ease"
          });
              
          
      }, 800);

      setTimeout(() => {
        document.querySelector(".contact .moyenBlob").style.opacity = "1";

        document.querySelector(".contact .grosBlob").style.opacity = "0";
        document.querySelector(".contact .grosBlob").style.display = "grid";
          document.querySelector(".contact .grosBlob").animate([
            // keyframes
            { opacity: '0' },
            { opacity: '1' }
          ], {
            // timing options
            duration: 700,easing:"ease"
          });
              
          
      }, 1200);

      setTimeout(() => {
        document.querySelector(".contact .grosBlob").style.opacity = "1";

        document.querySelector(".contact h1").style.opacity = "0";
        document.querySelector(".contact h1").style.display = "block";
        document.querySelector(".contact .copyMail").style.opacity = "0";
        document.querySelector(".contact .copyMail").style.display = "flex";

        document.querySelector(".contact .copyMail").animate([
            // keyframes
            { opacity: '0' },
            { opacity: '1' }
          ], {
            // timing options
            duration: 400,easing:"ease"
          });
          document.querySelector(".contact h1").animate([
            // keyframes
            { opacity: '0' },
            { opacity: '1' }
          ], {
            // timing options
            duration: 400,easing:"ease"
          });

          
              
          
      }, 1900);

      setTimeout(() => {
        document.querySelector(".contact h1").style.opacity = "1";
        document.querySelector(".contact .copyMail").style.opacity = "1";
        document.querySelector(".contact .a_accueil").style.opacity = "0";
        document.querySelector(".contact .a_accueil").style.display = "flex";
          document.querySelector(".contact .a_accueil").animate([
            // keyframes
            { opacity: '0' },
            { opacity: '1' }
          ], {
            // timing options
            duration: 800,easing:"ease"
          });
              
          
      }, 2300);

      setTimeout(() => {
        document.querySelector(".contact .a_accueil").style.opacity = "1";  
      }, 3100);

  });


  document.querySelector(".contact .a_accueil").addEventListener("click",function(){

    document.querySelector(".contact .copyMail").animate([
        // keyframes
        { opacity: '1' },
        { opacity: '0' }
      ], {
        // timing options
        duration: 800,easing:"ease"
      });
      document.querySelector(".contact h1").animate([
        // keyframes
        { opacity: '1' },
        { opacity: '0' }
      ], {
        // timing options
        duration: 800,easing:"ease"
      });

      document.querySelector(".contact .grosBlob").animate([
        // keyframes
        { opacity: '1' },
        { opacity: '0' }
      ], {
        // timing options
        duration: 800,easing:"ease"
      });

      document.querySelector(".contact .petitBlob").animate([
        // keyframes
        { opacity: '1' },
        { opacity: '0' }
      ], {
        // timing options
        duration: 800,easing:"ease"
      });

      document.querySelector(".contact .moyenBlob").animate([
        // keyframes
        { opacity: '1' },
        { opacity: '0' }
      ], {
        // timing options
        duration: 800,easing:"ease"
      });


      setTimeout(() => {
        document.querySelector(".contact .moyenBlob").style.opacity = "0";
        document.querySelector(".contact .copyMail").style.opacity = "0";
        document.querySelector(".contact h1").style.opacity = "0";
        document.querySelector(".contact .grosBlob").style.opacity = "0";
        document.querySelector(".contact .petitBlob").style.opacity = "0";
        document.querySelector(".contact .moyenBlob").style.opacity = "0";

        document.querySelector(".contact .moyenBlob").style.display = "none";
        document.querySelector(".contact .copyMail").style.display = "none";
        document.querySelector(".contact h1").style.display = "none";
        document.querySelector(".contact .grosBlob").style.display = "none";
        document.querySelector(".contact .petitBlob").style.display = "none";
        document.querySelector(".contact .moyenBlob").style.display = "none";

        document.querySelector(".contact").animate([
            // keyframes
            { transform: 'translateY(0)' },
            { transform: 'translateY(100vh)' }
          ], {
            // timing options
            duration: 300,easing:"ease"
          });

          document.querySelector(".home").style.display = "grid";

          

      }, 800);

      setTimeout(() => {
        document.querySelector(".contact .a_accueil").style.display = "none";
        document.querySelector(".contact").style.transform = "translateY(100vh)";
        document.querySelector(".contact").style.display = "none";
        document.querySelector(".home").style.display = "grid";
        document.querySelector(".home").style.transform = "translateY(0)";
        
      }, 1090);

  })




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
  

// Empecher le resize du blob au zoom.
document.querySelector(".projets .blob").style.width = window.screen.width + "px";

// console.log(window.screen.width);
let screenWidth = window.screen.width;

document.querySelector(".projets .blob").style.height = window.screen.height + "px";

document.querySelector(".projets .wrapper").style.maxWidth = window.screen.width*0.75 + "px"

window.addEventListener("resize",function(){
    // console.log(window.screen.width);
    if (window.screen.width != screenWidth){
        
        document.querySelector(".projets .blob").style.width = window.screen.width + "px";

        // console.log(window.screen.width);
        screenWidth = window.screen.width;

        document.querySelector(".projets .blob").style.height = window.screen.height + "px";
    }
})


// for (let i = 1; i < 7; i++) {
//     document.querySelector(`.projets .wrapper div[data-id='${i}']`).style.backgroundImage = `url('/images/projets/${i}.png')`;
// }


document.querySelectorAll(".projets .PLinfo2").forEach(element => {
    element.addEventListener("mouseenter",function(){
        // console.log(element);
        let idPL = element.getAttribute("data-id");
        // console.log(idPL);
        document.querySelector(`.projets div[data-id="${idPL}"] .PLinfo`).style.display = "grid";
        // element.target.querySelector(".projets .PLinfo").style.display = "grid";
    })
}); 

document.querySelectorAll(".projets .PLinfo2").forEach(element => {
    element.addEventListener("mouseout",function(){
        document.querySelectorAll(".projets .PLinfo").forEach(e => {
            e.style.display = "none";
        }); 
    })
    
}); 


document.querySelector(".home .a_a-propos").addEventListener("click", function(){
    changeAbout();
});
document.querySelector(".home .photo").addEventListener("click", function(){
    changeAbout();
});
document.querySelector(".about .a_accueil").addEventListener("click", function(){
    changeAboutReverse();
});


function changeAbout(){
    document.querySelector(".about").style.transform = "translateX(-100vw)";
    document.querySelector(".about").style.display = "grid";
    document.querySelector(".home").animate([
        // keyframes
        { transform: 'translateX(0)' },
        { transform: 'translateX(100vw)' }
      ], {
        // timing options
        duration: 600,easing:"ease"
      });

      document.querySelector(".about").animate([
        // keyframes
        { transform: 'translateX(-100vw)' },
        { transform: 'translateX(0)' }
      ], {
        // timing options
        duration: 600,easing:"ease"
      });

      setTimeout(() => {
          document.querySelector(".home").style.transform = "translateX(100vw)";
          document.querySelector(".about").style.transform = "translateX(0)";
          document.querySelector(".home").style.display = "none";
      }, 590);
    }

    function changeAboutReverse(){
        document.querySelector(".home").style.transform = "translateX(100vw)";
        document.querySelector(".home").style.display = "grid";
        document.querySelector(".home").animate([
            // keyframes
            { transform: 'translateX(100vw)' },
            { transform: 'translateX(0)' }
          ], {
            // timing options
            duration: 600,easing:"ease"
          });
    
          document.querySelector(".about").animate([
            // keyframes
            { transform: 'translateX(0)' },
            { transform: 'translateX(-100vw)' }
          ], {
            // timing options
            duration: 600,easing:"ease"
          });
    
          setTimeout(() => {
              document.querySelector(".home").style.transform = "translateX(0)";
              document.querySelector(".about").style.transform = "translateX(-100vw)";
              document.querySelector(".about").style.display = "none";
          }, 590);
        }
        
        aboutChangeText(aboutActive);
  
        document.querySelector(".about .controller .arrow.up").addEventListener("click",function(){
            aboutActive = aboutChangeNum(aboutActive,"-");
            aboutChangeText(aboutActive);
        })

        document.querySelector(".about .controller .arrow.down").addEventListener("click",function(){
            aboutActive = aboutChangeNum(aboutActive,"+");
            aboutChangeText(aboutActive);
        })

        function aboutChangeText(id){
            document.querySelectorAll(`.about .wrapper .aboutme .Acontrol .controller .dot`).forEach(element => {
                element.style.backgroundColor = "";
            });
            
            document.querySelector(`.about .wrapper .aboutme .Acontrol .controller .dot[data-id="${id}"]`).style.backgroundColor = "#49FF5B";
            if (id == 1){
                document.querySelector(".about .wrapper .aboutme .Atitre h2").innerHTML = "Profil";
                document.querySelector(".about .wrapper .aboutme .Atext p").innerHTML = `Je suis étudiant en deuxième année du DUT Métiers du Multimédia et de l’Internet. <br>
                C’est avec beaucoup de rigueur et de créativité que j'affectionne développer des sites web et autres mini-jeux. <br>
                Je suis passionné par le développement et j’aspire à devenir développeur full-stack.
                `
            } else if (id == 2){
                document.querySelector(".about .wrapper .aboutme .Atitre h2").innerHTML = "Formation";
                document.querySelector(".about .wrapper .aboutme .Atext p").innerHTML = `
                <span> <strong>2022 - 2023  </strong> Formation en alternance au métier de responsable développeur web à l'ESGI Lille. Développement sur frameworks JS et PHP</span>
                <span> <strong>2020 - 2022  </strong> Le DUT Métiers du Multimédia et de l’Internet, a l’avantage d’être très polyvalent. Nous sommes formés dans le domaine du développement web, qu’il soit front-end ou back-end, mais également dans les domaines de la communication, du design et du multimédia.<br> Les élèves du DUT MMI savent développer dans une myriade de langages de programmation et savent utiliser un grand nombre de logiciels de création.</span>
                `
            }
            else if (id == 3){
                document.querySelector(".about .wrapper .aboutme .Atitre h2").innerHTML = "Skills";
                document.querySelector(".about .wrapper .aboutme .Atext p").innerHTML = `<h5>Développement:</h5>
                <ul>
                  <li>HTML, CSS</li>
                  <li>Javascript (React, Express)</li>
                  <li>PHP (Laravel) </li>
                  <li>Programmation orientée objet</li>
                  <li>Bases de données (SQL, NoSQL)</li>
                </ul>
                
                <h5>Communication:</h5>
                <ul>
                  <li>Photoshop</li>
                  <li>Figma (UI/UX design)</li>
                  <li>Premiere Pro / After Effects</li>
                  <li>Illustrator</li>
                </ul>
                `
            }
            else if (id == 4){
                document.querySelector(".about .wrapper .aboutme .Atitre h2").innerHTML = "Soft skills";
                document.querySelector(".about .wrapper .aboutme .Atext p").innerHTML = `<ul>
                <li>Rigoureux</li>
                <li>Chalereux</li>
                <li>Polyvalent</li>
                <li>Ouvert aux autres</li>
                <li>Optimiste</li>
                <li>Esprit logique</li>
                <li>Apte à comprendre</li>
                <li>Curieux</li>
                </ul>
                `
            }
        }

        function aboutChangeNum(num,dir){
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

        document.querySelector(".home .a_cv-video").addEventListener("click",function(){
          document.querySelector(".cvVid").style.transform = "translate(0,-100vh)";
          document.querySelector(".cvVid").style.display = "grid";

          document.querySelector(".cvVid").animate([{transform:"translate(0,-100vh)"},{transform:"translate(0,0)"}],{duration:600,easing:"ease"});

          setTimeout(() => {
            document.querySelector(".cvVid").style.transform = "translate(-0,0)";
            document.querySelector(".home").style.display = "none";
            
          }, 600);
        })

        
        document.querySelector(".cvVid .a_accueil").addEventListener("click",function(){
          document.querySelector(".cvVid").style.transform = "translate(0,0)";
          document.querySelector(".home").style.display = "grid";
          document.querySelector(".home").style.transform = "translate(0,0)";

          document.querySelector(".cvVid").animate([{transform:"translate(0,0)"},{transform:"translate(0,-100vh)"}],{duration:600,easing:"ease"});

          setTimeout(() => {
            document.querySelector(".cvVid").style.transform = "translate(0,-100vh)";
            document.querySelector(".cvVid").style.display = "none";
            
          }, 600);
        })

        document.querySelector(".about .a_cv-video").addEventListener("click",function(){
          document.querySelector(".cvVid").style.transform = "translate(35vw,-100vh)";
          document.querySelector(".cvVid").style.display = "grid";

          document.querySelector(".cvVid").animate([{transform:"translate(35vw,-100vh)"},{transform:"translate(0,0)"}],{duration:600,easing:"ease"});

          setTimeout(() => {
            document.querySelector(".cvVid").style.transform = "translate(-0,0)";
            document.querySelector(".about").style.display = "none";
            
          }, 600);
        })

        document.querySelector(".cvVid .a_a-propos").addEventListener("click",function(){
          document.querySelector(".cvVid").style.transform = "translate(0,0)";
          document.querySelector(".about").style.display = "grid";
          document.querySelector(".about").style.transform = "translate(0,0)";

          document.querySelector(".cvVid").animate([{transform:"translate(0,-0)"},{transform:"translate(35vw,-100vh)"}],{duration:600,easing:"ease"});

          setTimeout(() => {
            document.querySelector(".cvVid").style.transform = "translate(35vw,-100vh)";
            document.querySelector(".cvVid").style.display = "none";
            
          }, 600);
        })


        document.querySelectorAll(".openP").forEach(element => {
          element.addEventListener("click",function(e){
            document.querySelector(".unProjet").style.display = "grid";
            tempIdP = e.target.getAttribute("data-id");
            console.log(tempIdP)
            changePageProjet(tempIdP)
            document.querySelector(".unProjet .photo").style.backgroundImage = `url("/images/projets/${tempIdP}/${photoC}.png")`;
            clearInterval(interPhoto);
            interPhoto = setInterval(scrollDroite, 6000);
          })
        }); 

        document.querySelector(".unProjet .goBack").addEventListener("click",function(){
          document.querySelector(".unProjet").style.display = "none"
          photoC = 1;
        clearInterval(interPhoto);
        })
        
        function changePageProjet(id){
          let h2P;
          let h3P;
          let h4P;
          let pP;
          let aP;
          if (id == 1){
            h2P = "Ogrinami (En cours)";
            h3P = "Projet tutoré de 2eme année , Développement full stack et product owner.";
            h4P= "#jeuxJS #PHP #MobileFirst #React #d3.js";
            pP = "<h4>Description:</h4> Ogrinami est un site internet et une web app qui à pour but de sensibiliser les enfants aux problèmes écologiques. Sur le site web, notre mascotte Grinouille invite les enfants à lire ou à écouter des courts articles illustrés sur l’écologie, ou bien à faire des quizz amusants pour en apprendre plus sur les enjeux climatiques. Sur le côté web app, l’enfant sera invité à parcourir un plateau de jeu et à jouer à des mini-jeux en rapport avec des problèmes écologiques. <br>"+
            "<h4>Mes missions :</h4><ul><li>Mise en place d’une base de données pour les articles et les quizz</li> <li>Création des pages article et quizz en PHP afin de chercher les données en PHP. Avec possibilité de changer de langue.</li> <li>Stylisation des pages article et quizz en mobile first, et entièrement responsive à l’aide de Sass.</li> <li>Développement de jeux en D3.js. (Shooter, clicker…). Programmation orientée objet.</li> <li>Web app en React.</li> <li>Création d’une API json, et interactions en React avec axios.</li><li>En tant que product owner, j'ai à organiser l'emploi du temps et à écrire les product back-logs et carnets de sprint.</li></ul>"

            aP ="https://www.ogrinami.com/"
          }else if (id ==2){
            h2P = "MMI (job) Dating Simulator |  Janvier à Juin 2021";
            h3P = "Projet tutoré de première année, développeur full stack orienté back-end."
            h4P = "#PHP #Dialogues #BaseDeDonnees #Jeu #Jquery"

            pP = "<h4>Description:</h4> MMI (job) Dating Simulator est un site interactif qui prend les allures de jeu de type visual novel, soit un jeu avec des des dialogues avec les personnages. Dans les visual novels de type “Dating Simulator”, le joueur interagit avec des personnages afin de potentiellement sortir avec eux. Dans notre jeu, le joueur interagit avec des personnages qui sont des professeurs, dans le but de découvrir le métier qui leur correspond après la formation MMI (Métiers du Multimédia et de l’Internet). D’où le jeu de mot avec “Job Dating”, et “Dating Simulator”. <br/>Le projet à été fait en première année, le site n’a donc pas comme principal but d’être responsive sur tous les appareils, il n’est donc pas adapté aux appareils mobiles. <br/><h4>Mes missions :</h4><ul>  <li>Organisation d’une arborescence complexe reliant les questions et les réponses aux métiers correspondants.</li>  <li>Mise en place d’une base de données autour de l’arborescence.</li>  <li>Développement d’un système de sauvegarde de la progression en localstorage.</li>  <li>Développement des pages en PHP reliés à la base de données.</li>  <li>Rendre les pages plus responsives.</li></ul>"

            aP ="https://www.lazalucas.fr/nolink"

          }else if (id ==3){
            h2P = "#BA0BAB, Projet Hex#words | fin 2021";
            h3P = "Projet d'intégration multimédia. Développement Front-end"
            h4P = "#CSS #Responsive #MobileFirst #CSS_Grid #ImagesOptimisees"

            pP = `<h4>Description:</h4> Ce site a été fait dans le cadre d'un projet en intégration multimédia, j'ai donc décidé de me concentrer sur le CSS avec un accent mis sur les grilles et les images responsives. Le site à été conçu avec l'aspect Mobile First en tête. Les animations au scroll sont faites en javascript. <br>
            Le projet consistait à prendre un mot, le passer en hexadécimal et faire un site à propos de ce mot avec comme couleur principale la couleur associée au code hexadécimal du mot en question. Ici le mot baobab nous donne la couleur #BA0BAB. <br>
            <h4>Mes missions :</h4>
            <ul>
              <li>Concevoir un site en mobile first.</li>
              <li>Avoir un univers graphique fort autour d’une couleur principale.</li>
              <li>Développement du site responsive autour des “break points” les plus communs.</li>
              <li>Optimisation des poids des images en fonction de leur taille à l’écran.</li>
              <li>Accent mis sur les grilles pour le positionnement.</li>
            </ul>
            `

            aP ="https://www.hexword.lazalucas.fr/"

          }else if (id ==4){
            h2P = "Mini-jeux | 2021 et 2022";
            h3P = "Assortiment de jeux en Javascript (vanilla ou d3.js) et PHP."
            h4P = "#Javasctipt #jeux #d3js #P.O.O #PHP"

            pP = `<h4>Description:</h4> Certains jeux ont été faits dans le cadre d’un projet en Programmation Orientée Objet à l’aide de la librairie D3.js. D’autres dans le cadre du projet tutoré de deuxième année. Un autre est en cours de développement; c’est un jeu de type “pokémon”, réalisé en PHP avec la logique de programmation orientée objet (classes, constructeurs…) tout ceci connecté à une base de données collaborative. <br>
            <h4>Mes missions :</h4>
            <ul>
              <li>Manipulation de classes d’objets</li>
              <li>Développer des systèmes de collisions.</li>
              <li>Gérer des tableaux d’objets.</li>
              <li>Gérer les déplacements des personnages.</li>
              <li>Penser les jeux pour qu’ils soient adaptés aux enfants.</li>
            </ul>
            
            `

            aP ="https://www.games.lazalucas.fr/"
          }else if (id ==5){
            h2P = "Blog du rhum | fin 2021";
            h3P = "Blog en PHP. Développement back-end."
            h4P = "#PHP #Blog #Ajax #BDD #back"

            pP = `<h4>Description:</h4> Projet de développement web. Le but était de concevoir un blog avec des billets pouvant être postés par un admin. Ces billets peuvent être consultés par les utilisateurs, de plus, les utilisateurs connectés peuvent commenter sous les billets. Les commentaires sont affichés en utilisant Ajax. <br>
            Le projet étant orienté back-end, le site n’est donc pas un chef d'œuvre visuel. <br>
            <h4>Mes missions :</h4>
            <ul>
              <li>Développement d’un système de connexion avec chiffrement des mots de passe.</li>
              <li>Développement d’une partie back-office seulement accessible par les utilisateurs admin. L’admin peut directement modifier certaines données de la base de données depuis cette interface.</li>
              <li>Développement d’une section commentaires, affichée grâce à Ajax, en accédant à une API connectée à la base de données.</li>
              <li>Tri des billets avec des requêtes SQL précises.</li>
            </ul>
            `

            aP = "https://www.lazalucas.fr/blogdurhum/"

          }else if (id ==6){
            h2P = "Vaux tourisme | 2021";
            h3P = "Campagne institutionnelle de communication."
            h4P = "#Photoshop #UI/UX #Figma #mockups"

            pP = `<h4>Description: </h4>Campagne institutionnelle de communication autour de la ville de Vaux-sur-Seine dans le 78. Le projet visait à promouvoir, en groupe, une ville en réalisant des affiches et des maquettes pour un site web autour de la ville.
            <h4>Mes missions :</h4>
            <ul>
              <li>Réalisation de maquettes low et high fidelity sur Figma dans l’univers des affiches réalisées par mes camarades.</li>
              <li>Adaptation des maquettes à tous les formats d’appareils.</li>
              <li>Réalisation de mockups et de retouches sur Photoshop.</li>
              <li>Recherche de slogans accrocheurs.</li>
            </ul>
            `

            aP ="https://www.lazalucas.fr/vaux.pdf"

          }
          document.querySelector(".unProjet .titres h2").innerHTML = h2P;
          document.querySelector(".unProjet .titres h3").innerHTML = h3P;
          document.querySelector(".unProjet .titres h4").innerHTML = h4P;
          document.querySelector(".unProjet .textes p").innerHTML = pP;
          document.querySelector(".unProjet .lien a").setAttribute("href",aP);
        }


        let photoC = 1;
        interPhoto = setInterval(scrollDroite, 6000);
        clearInterval(interPhoto);
        
        document.querySelector(".unProjet .photo").style.backgroundImage = `url("/images/projets/${tempIdP}/${photoC}.png")`
        // scrollGauche();
        
        //

        document.querySelector(".unProjet .ctrl .L").addEventListener("click", function(){
          clearInterval(interPhoto);
          interPhoto = setInterval(scrollGauche, 10000);
          scrollGauche();
        })

        document.querySelector(".unProjet .ctrl .R").addEventListener("click", function(){
          clearInterval(interPhoto);
          interPhoto = setInterval(scrollDroite, 10000);
          scrollDroite();
        })

    function scrollGauche(){
          photoC = changePhotoN(photoC,"-")
          document.querySelector(".unProjet .photo").style.backgroundImage = `url("/images/projets/${tempIdP}/${photoC}.png")`              
          
  }


  function scrollDroite(){
    photoC = changePhotoN(photoC,"+")
    document.querySelector(".unProjet .photo").style.backgroundImage = `url("/images/projets/${tempIdP}/${photoC}.png")`              
    
}

  function changePhotoN(num,dir){

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

