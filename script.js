
const seccion = document.querySelector(".seccion")
const footer = document.getElementsByTagName("footer")[0];  
function createPortfolio(){

    const aside = document.createElement("aside");
    
    function createAside(){
      const arrIcon = [{icon:"fa-solid fa-bars" }]
     const logo = document.createElement("div")
     const logoIcon = document.createElement("i")
     const portfolio = document.createElement("p")

    logo.appendChild(logoIcon)
    logo.appendChild(portfolio)
     portfolio.classList.add("pfsidetext")
     portfolio.textContent = "Menu del Portfolio"
     logoIcon.classList.add(...arrIcon[0].icon.split(' '))
     logoIcon.classList.add("logoIcon")

     aside.appendChild(logo)

     logo.classList.add("logo")
      const asideIcons = [
        { icon: "fas fa-home" },
        { icon: "fas fa-project-diagram" },
        { icon: "fas fa-map" },
        { icon: "fas fa-arrow-up" },
        { icon: "fas fa-id-badge" },
        { icon: "fas fa-users" },
        { icon: "far fa-question-circle" }
      ];
      
      const asideText = [{text: "Inicio"},
      {text: "Proyectos"},
      {text: "Roadmap"},
      {text: "Habilidades"},
      {text: "Certificaciones"},
      {text: "Redes Sociales / Contacto"},
      {text: "Acerca de M1n0z"}];
      
      const asideMenu = document.createElement("ul");
      aside.appendChild(asideMenu)
      for (let i = 0; i < asideText.length; i++) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        const icon = document.createElement("i");
        icon.classList.add(...asideIcons[i].icon.split(' '));
        icon.classList.add("asideIcon")
        li.appendChild(icon);
        a.textContent = " " + asideText[i].text;
        a.classList.add("asideLink")
        li.classList.add("asideElements");
        li.appendChild(a);
        asideMenu.appendChild(li);
      }
      
      return asideMenu;
    }
    
    aside.style.opacity = "0";
 
    aside.style.transition = "opacity 0.3s ease-in-out, width 0.3s ease-in-out";
    document.body.appendChild(aside);
    const msgContainer = document.createElement("div")
    seccion.appendChild(msgContainer)
 
    const msg = document.createElement("p")
    msg.classList.add("prh")
    msg.style.border = "none"
    msg.style.float = "right"
    msgContainer.appendChild(msg)
    msg.innerHTML = "La barra lateral Ha sido Creada"
    createAside()
    setTimeout(() => {

        msg.innerHTML = "Creando elementos..."
        footer.classList.add("fadeIn")
        footer.style.display = "block"
        setTimeout(() => {
            msg.innerHTML = "Pie de Pagina Añadido"
            setTimeout(() => {
                msg.innerHTML = "Cargando Introduccion"
                const container = document.createElement("div")
           container.classList.add("container")
           const pfpContainer =document.createElement("div")
           const pfp = document.createElement("img")
           const separator = document.createElement("div")
           pfpContainer.classList.add("pfpcontainer")
                const intro = document.createElement("h3")
               const hero = document.createElement("div")
               hero.classList.add("hero")
               separator.classList.add("separator")
                container.appendChild(hero)
               hero.appendChild(intro)
                hero.appendChild(pfpContainer)
                pfpContainer.appendChild(pfp)
                pfp.src = "id1.png"
                pfp.classList.add("pfp")
                const typedScript = document.createElement("script")
                typedScript.src = "https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"
                  document.body.appendChild(typedScript);
                intro.classList.add("intro")
                document.body.appendChild(container)
        
pfp.addEventListener("mouseover", () => {
    pfp.classList.add("fadeOut");
  
    setTimeout(() => {
      pfp.style.transition = "all 0.5s ease-in-out";
      pfp.src = "id2.jpg";
      pfp.classList.remove("fadeOut");
    }, 1000);
  });
  
  pfp.addEventListener("mouseout", () => {
    setTimeout(() => {
        pfp.style.transition = "all 0.5s ease-in-out";
        pfp.classList.add("fadeOut");
       setTimeout(() => {
        pfp.src = "id1.png";
        pfp.classList.remove("fadeOut")
       }, 1000);

    }, 1000);

   
  });
                 const welcome2 = document.createElement("p")
                 welcome2.classList.add("welcomeMain")
                 document.body.appendChild(welcome2)
               const about = document.querySelector(".about")
               document.body.insertBefore(about, document.querySelector(".welcomeMain + *"));
               about.style.display = "block";

////

                 ///// 
                   typedScript.onload = function() {
                    var typed2 = new Typed('.intro', {
                        strings: ["Hola, Soy Omar Rivero y este es mi Portfolio."],
                        typeSpeed: 10,
                        loop: false
                      });
                    
    var typed = new Typed('.welcomeMain', {
      strings: ["Bienvenido, Usuario."],
      typeSpeed: 30,
      loop: false
    });
  };
                 document.body.style.overflowY = "scroll";
                document.body.style.minHeight = "100vh"
                 document.body.style.paddingBottom = "2em"
                 
window.addEventListener('scroll', function() {
    if (window.scrollY > 0 && document.documentElement.scrollTop < (document.documentElement.scrollHeight - document.documentElement.clientHeight)) {
      footer.style.opacity = "0";
    } else {
      footer.style.opacity = "1";
    }
  });
                 document.body.appendChild(separator)
          
                
            
            
            }, 2000);
        }, 1500);
    }, 2000);
    
    aside.addEventListener("mouseover", () => {
      aside.style.opacity = "1";
           aside.style.width = "20%";
    });
    
    aside.addEventListener("mouseout", () => {
      aside.style.opacity = "0";
      aside.style.width = "10%";

    });

}

///Estructura principal


const button = document.querySelector(".start");
const body = document.querySelector('body');
const section = document.querySelector(".section")
const loading = document.querySelector(".loading")
const bodyStyle = window.getComputedStyle(body, '::before');
const socialMedia = document.querySelector(".social-media")

const welcome = document.querySelector(".welcome")
const tip = document.querySelector(".tip")
const ricky = document.querySelector(".ricky")
const dialogo = document.querySelector(".dialogo")
let usedNumbers = [];
function rickystart(){
let positive = false;
const rickyeyeL = document.querySelector(".ricky-eyeL")
const rickyeyeR = document.querySelector(".ricky-eyeR")

//// respuestas de M1n0z dependiendo de la opcion

let respuestaP = [
{respuesta: "Ok esta bien, dame un segundo."},
{respuesta: "Dejame Hacer algo de magia entonces"},
{respuesta:"¿Haz visto algo como esto alguna vez?"},
{respuesta: "Vale, espera ahi."},
{respuesta: "Listo, ya casi estoy."},
{respuesta: "No te preocupes, esto será rápido."},
{respuesta: "Estoy trabajando en ello, ten paciencia."}
];

let respuestaN = [
{respuesta: "Vaya, el Sr Importante empezo a hablar"},
{respuesta: "Por favor se mas amable conmigo, dame tiempo"},
{respuesta: "Que rudo, ¿de donde vienes?"}, 
{respuesta: "¿No te enseñaron modales?"},
{respuesta: "No te pongas así, estoy haciendo lo mejor que puedo."},
{respuesta: "Trabajaré más rápido para que no te aburras."},
{respuesta: "Intentaré mejorar para que tengamos una mejor comunicación."}
];

let molesto = [
{respuesta: "¿Porque no vas a ver a otro lado, aqui no hay nada para ti"},
{respuesta: "Ok, Señor Gruñon, en vez de estar aqui ve a hacer algo mejor"},
{respuesta: "No creo Que debas ver este portfolio, es demasiado bueno para ti"},
{respuesta:"Bueno, Como sea Deberiamos empezar de una vez"},
{respuesta: "No me gusta tu actitud, pero trataré de mantenerme profesional."},
{respuesta: "No te preocupes, no tengo nada en contra de ti."},
{respuesta: "No es necesario que seas tan desagradable, podemos trabajar juntos sin problema."}
];

let feliz = [
{respuesta: "Parece que estas interesado en el Portfolio de Omar ¿no es asi?"},
{respuesta: "A Omar tambien le alegra que la gente se interese por sus proyectos, <br>tiene buenas ideas, pero a veces no sabe como ejecutarlas"},
{respuesta: "En este Portafolio Podras encontrar, <br> informacion Extendida acerca de Omar y sus proyectos"},
{respuesta: "Este portafolio esta especialmente diseñado para tenerme como asistente virtual"},
{respuesta: "Estoy muy contento de que estés interesado en el portafolio."},
{respuesta: "Si tienes alguna pregunta, no dudes en preguntarme."},
{respuesta: "Es un placer poder ayudarte, estoy aquí para lo que necesites."}
];

let respuestaFinalN = [
{respuesta: "Bueno estare por aqui por si acaso a ti, señor gruñon te interesa"},
{respuesta:"Me largo, estare por ahi explicandote cada cosa, <br>aunque tienes pinta de saberlo todo."},
{respuesta: "Me ire, en todo caso si alguien como tu me necesita, estare por ahi"},
{respuesta: "Creo que ire a leer algo, me caes mal, si acaso necesitas algo hazmelo saber"},
{respuesta: "No tengo nada más que decirte, espero que tengas un buen día."},
{respuesta: "Hasta nunca, no creo que vuelva a trabajar contigo."},
{respuesta: "Adiós, no soporto trabajar con personas tan desagradables como tú."}
];

let respuestaFinalP = [
{respuesta:"Espero que disfrutes el portafolio, esta hecho con mucho esfuerzo"},
{respuesta: "Este portafolio esta diseñado para que yo pueda<br> darte respuestas si necesitas algo dimelo"},
{respuesta: "Bien, si necesitas algo recuerda decirmelo estare complacido al ayudarte"},
{respuesta:"Recuerda que puedes contar conmigo si necesitas algo,<br> siempre me gusta ayudar a la gente"},
{respuesta: "Si tienes alguna sugerencia para mejorar el portafolio,<br> no dudes en hacérmelo saber."},
{respuesta: "Me alegro de haber podido ayudarte, espero que tengas un buen día."},
{respuesta: "Si necesitas algo más, no dudes en contactarme, estaré encantado de ayudarte."}
];

function rickyFly(){
ricky.classList.remove("float")
setTimeout(() => {
ricky.classList.add("shrink")

setTimeout(() => {
  dialogo.innerHTML = "Construyendo Estructura..."
  rickyeyeL.style.display = "none"  
  rickyeyeR.style.display = "none"  
      dialogo.style.transform ="translate(-50%, -50%)"

  setTimeout(() => {
      dialogo.classList.add("fadeOut")
      setTimeout(() => {
          dialogo.style.display = "none"
          createPortfolio();
      }, 3500);
      }, 2500);
}, 2500);
}, 2500);


}



function eyes(){

function getRandomNumber() {
let randomNumber = Math.floor(Math.random() * 7);
while (usedNumbers.includes(randomNumber)) {
randomNumber = Math.floor(Math.random() * 7);
}
usedNumbers.push(randomNumber);
if (usedNumbers.length === 7) {
usedNumbers = [];
}
return randomNumber;
}

let respuestaCounter2 = getRandomNumber();

rickyeyeL.classList.add("size1")
rickyeyeR.classList.add("size2")
setTimeout(() => {
  rickyeyeL.style.height = '90px';
  rickyeyeL.style.width = '70px';
  rickyeyeR.style.height = '90px';
  rickyeyeR.style.width = '70px';
  if(positive === true){
      dialogo.textContent= "Parece que estas interesado en el Portfolio de Omar ¿no es asi?"
      rickyeyeR.style.clipPath = 'polygon(0 0, 100% 0, 100% 80%, 0 80%)'; 
        rickyeyeL.style.clipPath = 'polygon(0 0, 100% 0, 100% 80%, 0 80%)'; 
         setTimeout(() => {
          dialogo.innerHTML= feliz[respuestaCounter2].respuesta
          setTimeout(() => {
              dialogo.innerHTML = respuestaFinalP[respuestaCounter2].respuesta
              if(usedNumbers.includes(4)){
                  setTimeout(() => {
                      respuestaFinalP[2].respuesta
                      rickyFly();
                  }, 3500);
              }else{
                  rickyFly();
              }
          }, 3500);
      }, 3500);
  }
  else{
      rickyeyeR.style.clipPath = 'polygon(0 20%, 100% 20%, 100% 100%, 0 100%)';
      rickyeyeR.style.clipPath = 'polygon(0 20%, 100% 20%, 100% 100%, 0 100%)';
      dialogo.innerHTML ="¿No te han dicho que no debes hablarle asi a la gente?,<br>es de mala educacion."
      setTimeout(() => {
          dialogo.innerHTML= molesto[respuestaCounter2].respuesta
          setTimeout(() => {
              dialogo.innerHTML = respuestaFinalN[respuestaCounter2].respuesta
              setTimeout(() => {
                  rickyFly();
              }, 1500);
          }, 3500);
      }, 3500);
  }
}, 5000);
}
document.body.style.display = "relative"
dialogo.style.display ="block"
dialogo.style.transform = "translate(-200px, 140px)";
setTimeout(() => {
let respuestaCounter =Math.floor(Math.random() * 4);
dialogo.textContent = "A ver, dejame Estirar los Ojos un poco ¿si?"
const opcion1 = document.createElement("button")
const opcion2 = document.createElement("button")
opcion1.classList.add("boton")
opcion2.classList.add("boton")
const botones = document.querySelector(".botones")
botones.appendChild(opcion1)

opcion1.textContent ="Apresurate, No tengo tiempo"
opcion1.addEventListener("click",()=>{
dialogo.textContent = respuestaN[respuestaCounter].respuesta

opcion2.style.display="none"
opcion1.style.display="none"
eyes()
})
botones.appendChild(opcion2)

opcion2.textContent ="Esta bien, Puedo esperar por ti"

opcion2.addEventListener("click",()=>{
  dialogo.textContent = respuestaP[respuestaCounter].respuesta
opcion2.style.display="none"
opcion1.style.display="none"
positive = true;
eyes()
})
}, 3500);
}


button.addEventListener("click", () => {
document.body.style.transition = "1s all"
body.style.setProperty('--before-background-image', 'none');
body.style.setProperty('--before-position', "relative");
body.style.setProperty('--after-background-display', 'none');
document.body.style.backgroundImage = "none"
document.body.style.backgroundColor = "whitesmoke"
button.style.display = "none"
loading.style.display="block"
section.style.display = "none"
socialMedia.style.transform = 'translate(-200px, -70px)';

let index =Math.floor(Math.random() * 8);
let tips = [{tip:"Cuando veas el Portfolio recuerda dar tu opinion :)"},
{tip: "Tomate un Cafe antes de ver este Portfolio"},
{tip: "¿Te gusta el pan?, a mi me gusta con Atun"},
{tip: "Me gustan mucho los juegos FPS ¿y a ti?"},
{tip:"Considero que el aprendizaje rapido es una Habilidad"},
{tip: "Me gusta hacer Ejercicios ¿y a ti?"},
{tip: "Mi cumpleaños es el 8 de agosto"},
{tip: "Me gusta Programar"}
]
tip.textContent = tips[index].tip


loading.classList.add('fadeIn');


setTimeout(() => {
loading.classList.add('fadeOut');
setTimeout(() => {
loading.style.display = 'none';
welcome.classList.add("fadeIn")
socialMedia.classList.add('move');
seccion.style.display = "block"
setTimeout(() => {
  socialMedia.style.transform = "translate(-200px, 120px)";
  socialMedia.classList.remove("move")    
  socialMedia.classList.add("fadeOut")

  welcome.classList.add("fadeOut")
  
  setTimeout(() => {

   

      socialMedia.style.display = "none"
  welcome.style.display = "none"

  ricky.style.display="block"
  setTimeout(() => {
      ricky.classList.add("float")
      rickystart()
  }, 1000);
  }, 1500);

}, 2500);
}, 1000);
}, 7000);
});
