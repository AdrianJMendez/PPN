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

    renderizarPag(pagina);

};

function renderizarPag(pagina){
    
   document.getElementById('pag-boton').innerHTML=`
   <div id="Modaldiv">
   <h1> Presiona el corazon. <i class="fa-solid fa-down-long" style="color: #ffffff;"></i></h1>

 
            <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header encabezadomodal" id="tituloModal">
                      <h1 class="modal-title fs-5" id="exampleModalToggleLabel" >Cosas que me gustan de ti:</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" id="cuerpo-modal">
                        
                    </div>
                  </div>
                </div>
              </div>

              <button class="botonmodal" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" onclick="cambiarMsj${pagina}()">
              
                <img src="assets/5.png" class="img-fluid" alt="">
                

              </button>


              </div>  
              
              <div id="guia" class="borde-arcoiris">
                <h2>¿Como funciona?</h2>
                <h4>Cada vez que presiones el ❤️, saldra un mensaje aleatorio, puede ser algo que me guste de ti, algo que me hagas sentir, algo que me recuerde a ti, algo que quiera que sepas... aunque las palabras no son suficientes para expresar todo mi amor por ti, debes saber que te amo mas que a nada y mi amor por ti no tiene limites<3</h4>


            </div>

   `;
   

};


function cambiarMsj1(){
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
    <h3>${mensajeAleatorio}</h3>
    `;

    
};


function cambiarMsj4(){
    const mensajes = [
        "Eres lo mejor que me ha pasado. Gracias por amarme, gracias por quedarte ❤️",
        "Significas absolutamente todo para mí. No podría vivir sin ti.",
        "Sueño con un futuro a tu lado y me esforzaré por conseguirlo. Me convertiré en alguien digno de tu amor.",
        "Gracias por hacerme feliz, por preocuparte y cuidar de mí, por escucharme, por hacerme sentir importante y amado. Eres la persona que mejor me ha hecho sentir en toda mi existencia.",
        "Lo quiero todo contigo, desde algo tan simple como hablar durante horas, hasta casarme y formar un futuro a tu lado.",
        "En ti lo encontré todo. Eres más que mi novia, eres lo más importante de mi vida.",
        "Nada nunca podrá igualar lo que siento por ti. Eres la niña de mis ojos, la dueña de mi corazón y de todos mis pensamientos, y eso será así por siempre.",
        "Sin importar por qué caminos nos lleve la vida, deseo estar siempre contigo. Eres mi debilidad pero al mismo tiempo mi mayor fortaleza.",
        "Gracias por elegirme y seguir aquí. Sé que he fallado en muchos aspectos como novio, pero prometo mejorar por ti y para ti.",
        "Eres lo único que me importa. Haría absolutamente cualquier cosa por ti. Mi amor por ti no tiene límites.",
        "Eres lo más hermoso que he visto. Físicamente eres una diosa, internamente eres la mejor persona que he conocido.",
        "Eres lo que más me hace feliz. Iluminas mis días, llenas mi corazón de paz y amor.",
        "Recuerdo cada promesa que te he hecho. No pienso fallarte. Eres mi mayor tesoro.",
        "Tengo tanto miedo de perderte. Para mí, eres más valiosa que todo el universo junto, y prefiero perderlo todo antes que a ti.",
        "Te extraño cada segundo del día. Vivo pensando en ti, esperando el momento en que vuelva a estar a tu lado.",
        "Eres mi otra mitad, la dueña de mi corazón y de todo de mí. Eres mucho más de lo que siempre quise. Soy el hombre más afortunado del mundo.",
        "Nada es tan hermoso como tú lo eres. Nada es tan maravilloso como tú. Nada es tan importante como tú. Eres lo mejor del mundo para mí.",
        "Eres la mayor bendición de mi vida. Agradezco a diario por tu existencia.",
        "Quiero hacerte la persona más feliz y amada. Si sientes que algo te falta a mi lado, o no te gusta algo en general, dímelo. Estoy dispuesto a hacerlo todo por ti."
      ];


    const indiceAleatorio = Math.floor(Math.random() * mensajes.length);

// Obtiene el mensaje aleatorio
    const mensajeAleatorio = mensajes[indiceAleatorio];

    document.getElementById('tituloModal').innerHTML=`
    <h1 class="modal-title fs-5" id="exampleModalToggleLabel" >Quiero que sepas que:</h1>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    `;


    document.getElementById('cuerpo-modal').innerHTML=`
    <h3>${mensajeAleatorio}</h3>
    `;

    
};


function cambiarMsj3(){
  const mensajes = [
    "Te amo porque tienes las raíces profundas de la pena, porque eres buena, porque eres mía. - Pablo Neruda",
    "Ríe, porque tu risa será para mis oídos como una campana fresca, tan cerca de mi alma. - Pablo Neruda",
    "Podrá nublarse el sol eternamente; Podrá secarse en un instante el mar; Podrá romperse el eje de la tierra como un débil cristal. ¡Todo sucederá! - Gustavo Adolfo Bécquer",
    "A veces tengo ganas de ser cursi para decir: ¡La amo a usted con locura! A veces tengo ganas de ser tonto para gritar: ¡La quiero tanto! - Nicolás Guillén",
    "Te quiero porque eres la luz de mi camino, porque eres la flor de mi jardín, porque eres el sueño de mi vida y la razón de mi vivir. - Luis Cernuda",
    "Tu voz es como una música que me llena de paz y emoción. Tu voz es como una caricia que me acaricia el alma y el corazón. - Antonio Machado",
    "Amor mío, eres tú, el milagro más grande que me ha dado la vida. Eres tú, el tesoro más precioso que guardo en mi interior. Eres tú, el poema más hermoso que escribo con amor. - Alfonsina Storni",
    "Eres un regalo que me hizo el destino y me hizo feliz. Eres un milagro que me dio la suerte y me hizo sentir. Eres un encanto que me dio la naturaleza y me hizo vivir. - Mario Benedetti",
    "Siempre te llevo en mi pensamiento y en mi corazón. Siempre te siento en mi aliento y en mi canción. Siempre te quiero con ternura y con pasión. Siempre te espero con locura y con ilusión. - Nicolás Guillén",
    "Solo tú eres el sueño que me hace despertar. Solo tú eres el fuego que me hace quemar. Solo tú eres la luna que me hace iluminar. Solo tú eres la única que me hace amar. - José Ángel Buesa",
    "Te necesito como el aire que respiro cada día. Te necesito como el agua que me sacia la sed. Te necesito como el sol que me calienta el alma. Te necesito como la estrella que me guía en la noche. - Gabriela Mistral",
    "Eres mi todo, mi universo, mi razón de existir. Eres mi todo, mi tesoro, mi motivo de vivir. Eres mi todo, mi delirio, mi pasión y mi placer. Eres mi todo, mi poesía, mi canción y mi mujer. - Rubén Darío",
    "Contigo, sí, contigo quiero vivir y morir. Contigo, sí, contigo quiero reír y sufrir. Contigo, sí, contigo quiero soñar y crear. Contigo, sí, contigo quiero cantar y callar. - Jorge Guillén"
  ];


  const indiceAleatorio = Math.floor(Math.random() * mensajes.length);

// Obtiene el mensaje aleatorio
  const mensajeAleatorio = mensajes[indiceAleatorio];

  document.getElementById('tituloModal').innerHTML=`
  <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Te amo mucho mucho <3</h1>
  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  `;


  document.getElementById('cuerpo-modal').innerHTML=`
  <h3>${mensajeAleatorio}</h3>
  `;

  
};

function cambiarMsj2(){
  const mensajes = [
    "Eres la única persona que no puede perder, nadie me ama como tú - Like You Do",
  "Eres todo lo que siempre querré, Eres todo lo que siempre necesitaré, Eres todo lo que soñé tener - Heaven Is You",
  "¿Te he dicho últimamente que te quiero? ¿Te he dicho que no hay nadie más por encima de ti? - Have I Told You Lately",
  "Llena mi corazón de alegría, me quita toda mi tristeza, alivia mis problemas, eso es lo que haces - Have I Told You Lately",
  "Me siento triste cuando estás triste, Me siento feliz cuando estás contenta - Can't Smile Without You",
  "Te miro y solo veo el cielo - Because Of You",
  "Es por ti, es por ti, todo es por ti, todo lo que hago, el paraíso es un lugar en la Tierra contigo - Videogames",
  "Te prometo que es para siempre - Wherever You Are",
  "Porque tú eres la razón por la que creo en el destino, tú eres mi paraíso, y haré cualquier cosa para ser tu amor - Infinity",
  "Tú eres la luna que brilla en mi corazón, eres mi día mi noche, mi mundo, eres mi vida - You Are My Life",
  "Es que no hay nadie como tú que me haga sentir así en un arrullo de estrellas - Arrullo de Estrellas",
  "Cuando estés sola te buscaré, cuando te sientas mal también estaré allí - Apocalypse",
  "Cómo no te voy a amar, si tú eres mi otra mitad, con quien siempre quiero estar - No Te Cambiaría",
  "Tengo suerte de que me hayas mantenido cerca, eres la estrella que busco cada noche - Compass",
  "Me muero por mostrarte todo lo que soy y es que hasta en mi inconsciente puedo darte amor - Soñar Contigo",
  "Quizá no pienses que eres una supermodelo, pero tú pareces una para mí, eres perfecta para mí - Perfectly Perfect",
  "Eres lo mejor que podría pasarle a mi vida - Catorce",
  "Bueno, no puedes tener lo que quieras, pero puedes tenerme, así que salgamos al mar, porque eres mi medicina cuando estás cerca de mí - On Melancholy Hill"
];
    


  const indiceAleatorio = Math.floor(Math.random() * mensajes.length);

// Obtiene el mensaje aleatorio
  const mensajeAleatorio = mensajes[indiceAleatorio];

  document.getElementById('tituloModal').innerHTML=`
  <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Eres mi fortuna <3</h1>
  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  `;


  document.getElementById('cuerpo-modal').innerHTML=`
  <h3>${mensajeAleatorio}</h3>
  `;

  
};
