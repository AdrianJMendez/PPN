function abrirLadmin(){
    //mostrar elementos
    document.getElementById('pag-boton').style.display='none';

    //ocultar elementos
    document.getElementById('landing').style.display='flex';



};

function CerrarLadmin(pagina){
    //mostrar elementos
    document.getElementById('pag-boton').style.display='flex';

    //ocultar elementos
    document.getElementById('landing').style.display='none';

    switch (pagina) {
        case 1:
            renderizarPag1();
            break;
        case 2:
            renderizarPag1();
            break;
        case 3:
            renderizarPag1();
            break;
        case 4:
            renderizarPag1();
            break;
        // Puedes agregar más casos según sea necesario
        default:
            abrirLadmin();
    }

};

function renderizarPag1(){
    
   document.getElementById('pag-boton').innerHTML=`
   <div id="Modaldiv">
   <h1>Presiona el corazon.</h1>
 
            <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header encabezadomodal">
                      <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Cosas que me gustan de ti</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" id="cuerpo-modal">
                        
                    </div>
                  </div>
                </div>
              </div>

              <button class="botonmodal" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" onclick="cambiarMsj()">
              
                <img src="assets/5.png" class="img-fluid" alt="">
                

              </button>


              </div>  
              
              <div id="guia">
                <h2>¿Como funciona?</h2>
                <p>Cada ❤️ en la parte superior de la página te llevará a una sección especial.</p>
                <p>1❤️. El primer corazón te llevará a la página principal.</p>
                <p>2❤️. El segundo corazón te mostrará las cosas que me gustan de ti.</p>
                <p>3❤️. El tercer corazón te mostrará las canciones que me recuerdan a ti.</p>
                <p>4❤️. El cuarto corazón te mostrará poemas que he querido dedicarte.</p>
                <p>5❤️. El quinto corazón te mostrará, en palabras, todo eso que siento por ti.</p>


            </div>

   `;
   

};


function cambiarMsj(){
    const mensajes = [
        "Me gusta es poco, yo amo absolutamente todo de ti",
        "Me gusta cuando me miras, haces que todo lo demas deje de ser importante y en ese momento solo existimos tu y yo",
        "Me gustan y fascinan cada una de nuestras platicas, no importa el tema, hablar contigo es lo lindo",
        "Me gustas de todas las maneras y formas posibles, me gustabas ayer, me gustas hoy y me gustaras toda la eternidad",
        "Me gustas por tu madurez, tu forma de pensar y tu increible personalidad",
        "Me encantan tu cuerpo, cada parte de el, sos lo mas hermoso que existe",
        "Me encanta como eres con las personas que amas, sos una bendicion mi amor",
        "Me gustas por que a tu lado me siento seguro, me siento el hombre mas feliz y afortunado del mundo",
        "Me encanta como eres, hasta el mas minimo detalle, eres una persona sumamente increible",
        "Me encanta tu sonrisa, tus ojos, tu nariz, tu pelo, todo",
        "Me gustas por que eres la mejor novia que podria desear",
        "Me gustas por que a tu lado me siento mas que bien, me haces sentir amado y feliz",
        "Me gustas por lo trabajadora que eres, te admiro mucho",
        "Me encanta tu aroma, me encanta el sonido de tu voz, me encantan tus besos, tus abrazos, todoooo."
    ]


    const indiceAleatorio = Math.floor(Math.random() * mensajes.length);

// Obtiene el mensaje aleatorio
    const mensajeAleatorio = mensajes[indiceAleatorio];


    document.getElementById('cuerpo-modal').innerHTML=`
    <h1>${mensajeAleatorio}</h1>
    `;

    
};