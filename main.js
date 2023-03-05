const modal = document.querySelector('.modal');

function mostarModal(abricion){
    switch (abricion) {
        case 1:
            modal.innerHTML=`
                <div class="modal__container">
                    <h1 class="titulomodal">Cloud</h1>
                    <p class="pararfotexto">Tecnología que permite acceso remoto a softwares, almacenamiento de archivos y procesamiento de datos por medio de Internet.</p>
                    <a href="https://aws.amazon.com/es/" target="_blank" class="enlacemod">
                        Amazon
                    </a>
        
                    <button onclick="quitarModal()" class="botoncerrar">X</button>
                </div>
            `;
        break
        
        case 2:
            modal.innerHTML=`
            <div class="modal__container">
                <h1 class="titulomodal">Proxy</h1>
                <p class="pararfotexto">Un proxy es un ordenador intermedio que se usa en la comunicación de otros dos.</p>
                <a href="https://www.proxfree.com" target="_blank" class="enlacemod">
                    Proxfree
                </a>

                <button onclick="quitarModal()" class="botoncerrar">X</button>
            </div>
            `;
        break
        case 3:
            modal.innerHTML=`
            <div class="modal__container">
                <h1 class="titulomodal">VPN</h1>
                <p class="pararfotexto">Una red virtual que conecta dos puntos en la red</p>
                <a href="https://es.norton.com" target="_blank" class="enlacemod">
                    Proxfree
                </a>

                <button onclick="quitarModal()" class="botoncerrar">X</button>
            </div>
            `;
        break
        case 4:
            modal.innerHTML=`
            <div class="modal__container">
                <h1 class="titulomodal">Control Remoto</h1>
                <p class="pararfotexto">Capacidad de controlar un dispositivo desde otro lugar en la red</p>
                <a href="https://anydesk.com/es" target="_blank" class="enlacemod">
                    Anydesk
                </a>

                <button onclick="quitarModal()" class="botoncerrar">X</button>
            </div>
            `;
        break
        case 5:
            modal.innerHTML=`
            <div class="modal__container">
                <h1 class="titulomodal">Correo Electrónico</h1>
                <p class="pararfotexto">Envío de datos a distintos dispositivos en la red o a uno mismo</p>
                <a href="https://www.google.com/intl/es/gmail/about/" target="_blank" class="enlacemod">
                    Gmail
                </a>

                <button onclick="quitarModal()" class="botoncerrar">X</button>
            </div>
            `;
        break
        case 6:
            modal.innerHTML=`
            <div class="modal__container">
                <h1 class="titulomodal">VoIP</h1>
                <p class="pararfotexto">Llamada de teléfono fijo hecha por ip</p>
                <a href="https://www.zendesk.es" target="_blank" class="enlacemod">
                    Zendesk
                </a>

                <button onclick="quitarModal()" class="botoncerrar">X</button>
            </div>
            `;
        break
        case 7:
            modal.innerHTML=`
            <div class="modal__container">
                <h1 class="titulomodal">Proveedores de internet</h1>
                <p class="pararfotexto">El proveedor de servicios de internet es la empresa que brinda conexión a Internet a sus clientes</p>
                <a href="https://www.jazztel.com" target="_blank" class="enlacemod">
                    Jazztel
                </a>

                <button onclick="quitarModal()" class="botoncerrar">X</button>
            </div>
            `;
        break
        case 8:
            modal.innerHTML=`
            <div class="modal__container">
                <h1 class="titulomodal"> Portal cautivo</h1>
                <p class="pararfotexto">Herramienta que permite controlar y gestionar el acceso a redes WiFi a través de un proceso de autenticación o login</p>
                <a href="https://wifisafe.com" target="_blank" class="enlacemod">
                    Widisafe
                </a>

                <button onclick="quitarModal()" class="botoncerrar">X</button>
            </div>
            `;
        break
        case 9:
            modal.innerHTML=`
            <div class="modal__container">
                <h1 class="titulomodal"> Copias de seguridad</h1>
                <p class="pararfotexto">Copia de los datos originales que se realiza con el fin de disponer de un medio para recuperarlos en caso de su pérdida</p>
                <a href="https://go.carbonite.com/backup-for-office-365-ES.html" target="_blank" class="enlacemod">
                    carbonite
                </a>

                <button onclick="quitarModal()" class="botoncerrar">X</button>
            </div>
            `;
        break
        case 10:
            modal.innerHTML=`
            <div class="modal__container">
                <h1 class="titulomodal"> Gestión de contraseña</h1>
                <p class="pararfotexto">Permite almacenar los nombres de usuarios y contraseñas de cada sitio en el que estamos registrados</p>
                <a href="https://bitwarden.com" target="_blank" class="enlacemod">
                    Bitwarden
                </a>

                <button onclick="quitarModal()" class="botoncerrar">X</button>
            </div>
            `;
        break
        case 11:
            modal.innerHTML=`
            <div class="modal__container">
                <h1 class="titulomodal"> Antivirus</h1>
                <p class="pararfotexto">Servicio que se encarga de detectar cualquier tipo de malware o sus derivados en nuestro dispositivo</p>
                <a href="https://www.mcafee.com/es-es/index.html" target="_blank" class="enlacemod">
                    Mcafee
                </a>

                <button onclick="quitarModal()" class="botoncerrar">X</button>
            </div>
            `;
        break
        case 12:
            modal.innerHTML=`
            <div class="modal__container">
                <h1 class="titulomodal"> Incibe</h1>
                <p class="pararfotexto">Instituto Nacional de Ciberseguridad INCIBE </p>
                <a href="https://www.incibe.es" target="_blank" class="enlacemod">
                    Incibe
                </a>

                <button onclick="quitarModal()" class="botoncerrar">X</button>
            </div>
            `;
        break
        case 13:
            modal.innerHTML=`
            <div class="modal__container">
                <h1 class="titulomodal"> Para hacer webs</h1>
                <p class="pararfotexto">Página que nos permite crear una con facilidades, aparte no es necesario saber mucho de marcas</p>
                <a href="https://wordpress.com/es/" target="_blank" class="enlacemod">
                    Wordpress
                </a>

                <button onclick="quitarModal()" class="botoncerrar">X</button>
            </div>
            `;
        break
        case 14:
            modal.innerHTML=`
            <div class="modal__container">
                <h1 class="titulomodal"> Dominios</h1>
                <p class="pararfotexto">Un dominio de internet es un nombre único que identifica a una subárea de Internet</p>
                <a href="https://dominios.es/es" target="_blank" class="enlacemod">
                    Dominios.es
                </a>

                <button onclick="quitarModal()" class="botoncerrar">X</button>
            </div>
            `;
        break
        case 15:
            modal.innerHTML=`
            <div class="modal__container">
                <h1 class="titulomodal"> Hosting</h1>
                <p class="pararfotexto">Un hosting es un servicio de alojamiento para páginas web bajo un servidor</p>
                <a href="https://www.hostinger.es/hosting-web" target="_blank" class="enlacemod">
                    Hostinger
                </a>

                <button onclick="quitarModal()" class="botoncerrar">X</button>
            </div>
            `;
        break
        case 16:
            modal.innerHTML=`
            <div class="modal__container">
                <h1 class="titulomodal"> Analytics</h1>
                <p class="pararfotexto">Con está página web se busca controlar y ver quien accede a tus webs y de donde</p>
                <a href="https://analytics.google.com/analytics/web/#/p350754317/reports/intelligenthome" target="_blank" class="enlacemod">
                    Analytics
                </a>

                <button onclick="quitarModal()" class="botoncerrar">X</button>
            </div>
            `;
        break
        case 17:
            modal.innerHTML=`
            <div class="modal__container">
                <h1 class="titulomodal">Chat GPT</h1>
                <p class="pararfotexto">Chat GPT es un prototipo de chatbot de inteligencia artificial desarrollado en 2022 por Open AI que se especializa en el diálogo</p>
                <a href="https://openai.com/blog/chatgpt" target="_blank" class="enlacemod">
                    Chat GPT
                </a>

                <button onclick="quitarModal()" class="botoncerrar">X</button>
            </div>
            `;
        break
        case 18:
            modal.innerHTML=`
            <div class="modal__container">
                <h1 class="titulomodal">Open AI</h1>
                <p class="pararfotexto">OpenAI es una compañía de investigación de inteligencia artificial, que se anuncia sin fines de lucro, y que tiene como objetivo promover y desarrollar inteligencia artificial</p>
                <a href="https://openai.com" target="_blank" class="enlacemod">
                    OpenAI
                </a>

                <button onclick="quitarModal()" class="botoncerrar">X</button>
            </div>
            `;
        break
        case 19:
            modal.innerHTML=`
            <div class="modal__container">
                <h1 class="titulomodal">Replika</h1>
                <p class="pararfotexto">Replika es un compañero de chatbot n.º 1 impulsado por inteligencia artificial</p>
                <a href="https://openai.com" target="_blank" class="enlacemod">
                    OpenAI
                </a>

                <button onclick="quitarModal()" class="botoncerrar">X</button>
            </div>
            `;
        break
        case 20:
            modal.innerHTML=`
            <div class="modal__container">
                <h1 class="titulomodal">Gestores de tareas</h1>
                <p class="pararfotexto">Un gestor de tareas es una herramienta que sirve para coordinar y realizar un seguimiento de actividades</p>
                <a href="https://trello.com/es" target="_blank" class="enlacemod">
                    Trello
                </a>

                <button onclick="quitarModal()" class="botoncerrar">X</button>
            </div>
            `;
        break
        case 21:
            modal.innerHTML=`
            <div class="modal__container">
                <h1 class="titulomodal">ERP</h1>
                <p class="pararfotexto">Los sistemas de planificación de recursos empresariales son los sistemas de información gerenciales que integran y manejan muchos de los negocios asociados con las operaciones de producción</p>
                <a href="https://www.odoo.com/es_ES" target="_blank" class="enlacemod">
                    Odoo
                </a>

                <button onclick="quitarModal()" class="botoncerrar">X</button>
            </div>
            `;
        break
        case 22:
            modal.innerHTML=`
            <div class="modal__container">
                <h1 class="titulomodal">LOPD</h1>
                <p class="pararfotexto">La Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal fue una ley orgánica española y derogada con la entrada en vigor, el 5 de diciembre de 2018</p>
                <a href="https://www.boe.es/buscar/pdf/2018/BOE-A-2018-16673-consolidado.pdf" target="_blank" class="enlacemod">
                    LDPD
                </a>

                <button onclick="quitarModal()" class="botoncerrar">X</button>
            </div>
            `;
        break
        case 23:
            modal.innerHTML=`
            <div class="modal__container">
                <h1 class="titulomodal">Repositorios</h1>
                <p class="pararfotexto">Se llama control de versiones a la gestión de los diversos cambios que se realizan sobre los elementos de algún producto o una configuración del mismo</p>
                <a href="https://github.com" target="_blank" class="enlacemod">
                    Github
                </a>

                <button onclick="quitarModal()" class="botoncerrar">X</button>
            </div>
            `;
        break
    }
    modal.classList.remove('modal--hide');
}

function quitarModal(){
    modal.classList.add('modal--hide');
}
