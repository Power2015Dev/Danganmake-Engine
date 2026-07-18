const translations = {
    en: {
        nav_intro: "Introduction",
        sub_intro_what: "What is Danganmake?",
        sub_intro_async: "What is an asynchronous function?",
        sub_intro_call: "Callable functions",
        nav_start: "Get Started",
        sub_start_ctrl: "Controls",
        sub_start_mod: "How to create your mod",
        sub_start_ed: "How Editors work",
        sub_start_assets: "Where your assets go",
        sub_start_chars: "Where your characters go",
        sub_start_cc: "Counter and Consent",
        nav_events: "Event terms",
        sub_ev_gs: "GlobalSound Events",
        sub_ev_cs: "CharacterScript Events",
        sub_ev_cl: "CharacterList Events",
        nav_2d: "2D Editor",
        nav_3d: "3D Editor",
        sub_shared_exp: "Character Expressions",
        sub_shared_voice: "Character Voices",
        sub_shared_snd: "Character Sounds",
        sub_shared_ba: "Before and After",
        sub_shared_act: "How to use actions scenes",
        sub_shared_mem: "How to use Memory block",
        sub_shared_bg: "Change Background",
        sub_shared_song: "Change Song",
        sub_shared_court: "Show 3D Court",
        sub_shared_img: "Set Images",
        sub_shared_vid: "Set Videos",
        nav_custom: "Custom Scripting",
        sub_custom_what: "What is Custom Scripting?",
        sub_shared_usage: "Usage",
        sub_custom_avoid: "What you should avoid",
        nav_offset: "Character Offset Editor",
        sub_offset_what: "What is Character Offset Editor?",
        nav_scene: "Using functions on the scene",
        sub_scene_how: "How this works"
    },
    es: {
        nav_intro: "Introduccion",
        sub_intro_what: "¿Que es Danganmake?",
        sub_intro_async: "¿Que es una funcion asincrona?",
        sub_intro_call: "Funciones invocables",
        nav_start: "Comenzar",
        sub_start_ctrl: "Controles",
        sub_start_mod: "Como crear tu mod",
        sub_start_ed: "Como funcionan los editores",
        sub_start_assets: "Donde van tus recursos",
        sub_start_chars: "Donde van tus personajes",
        sub_start_cc: "Contraataque y Consentimiento",
        nav_events: "Terminos de eventos",
        sub_ev_gs: "Eventos GlobalSound",
        sub_ev_cs: "Eventos CharacterScript",
        sub_ev_cl: "Eventos CharacterList",
        nav_2d: "Editor 2D",
        nav_3d: "Editor 3D",
        sub_shared_exp: "Expresiones de Personajes",
        sub_shared_voice: "Voces de Personajes",
        sub_shared_snd: "Sonidos de Personajes",
        sub_shared_ba: "Antes y Despues",
        sub_shared_act: "Como usar escenas de accion",
        sub_shared_mem: "Como usar el bloque de memoria",
        sub_shared_bg: "Cambiar Fondo",
        sub_shared_song: "Cambiar Cancion",
        sub_shared_court: "Mostrar Tribunal 3D",
        sub_shared_img: "Asignar Imagenes",
        sub_shared_vid: "Asignar Videos",
        nav_custom: "Scripts Personalizados",
        sub_custom_what: "¿Que son los Scripts Personalizados?",
        sub_shared_usage: "Uso",
        sub_custom_avoid: "Lo que debes evitar",
        nav_offset: "Editor de Desplazamiento",
        sub_offset_what: "¿Que es el Editor de Desplazamiento?",
        nav_scene: "Usar funciones en la escena",
        sub_scene_how: "Como funciona esto"
    }
};

let actualLang = "en";

document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('.bullet-toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const subMenu = this.nextElementSibling;
            if (!subMenu.style.maxHeight || subMenu.style.maxHeight === '0px') {
                subMenu.style.maxHeight = subMenu.scrollHeight + "px";
            } else {
                subMenu.style.maxHeight = '0px';
            }
        });
    });


    const btn_lang = document.getElementById("lang");

    btn_lang.addEventListener("click", () => {
        

        if (actualLang === "en") {
            actualLang = "es";

            btn_lang.src = "assets/img/opt_esp.png"; 
        } else {
            actualLang = "en";
            btn_lang.src = "assets/img/opt_eng.png";
        }
        

        const elements = document.querySelectorAll("[data-i18n]");
        

        elements.forEach((element) => {
            const key = element.getAttribute("data-i18n");
            
   
            if (translations[actualLang][key]) {
                element.textContent = translations[actualLang][key]; 
            }
        });

    });

});