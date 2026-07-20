const langData = {
    en: {
        nav_intro: "Introduction",
        sub_intro_what: "What is Danganmake?",
        sub_intro_async: "What is an asynchronous function?",
        read_intro: "How to read the documentation",
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
        nav_offset: "Character Editor",
        sub_offset_what: "What is Character Offset Editor?",
        nav_scene: "Using functions on the scene",
        sub_scene_how: "How this works",
        title_intro: "Introduction",
        text_intro: `
        Hello, and welcome to Danganmake This is a Danganronpa class trial editor. The purpose of this editor is to allow you to create your own trials and customize them to fit your preferences. With this tool, you can make your own fangames, what-if scenarios, or anything else you'd like.

        We made this project for you, and only for you. We do not want to harm Spike Chunsoft's reputation, nor do we claim ownership over anything. Spike Chunsoft is the sole owner of the Danganronpa franchise, and it belongs entirely to them.
        `,
        what_is_dangan_title: "What is Danganmake?",
        what_is_dangan_text: `
        It's a Danganronpa game engine that lets you create your own fangames. Specifically designed
        to mimic the Danganronpa experience

        The engine's main purpose is to be user-friendly and require no programming knowledge
        to create your own fangames. <br><br>

        The engine is built entirely with Godot Engine, an open-source game engine.
        To facilitate the use and creation of this engine, popular asset libraries were used, such as:<br><br>

        Dialogue Manager - Nathan Road<br>
        Phantom Camera - Ramokz<br>
        Sparkle Lite - Neohex<br>

        It's an experience to create your own mods and share them with the community, or just for yourself.<br>

        If you're interested in sharing your creations or playing community creations, we recommend joining the Discord server.<br><br>

        <a href="https://discord.gg/nfuBdQRmH8"><img src="assets/img/discord.png" alt="" width="40px" height="40px"></a>
        `,
        async_title: "Asynchronous Function",
        async_text: `
        It's a block of code that runs in the background without interrupting the main program flow.<br><br>

        This simply means that if there's a block that says it will display a fade-in in the middle of the visual novel, it will perform this action first and then queue up the text until it finishes processing and the text can be displayed. Keep in mind that not all actions are necessarily asynchronous functions and won't necessarily wait for their own event to finish before the next one can play. Examples include functions for changing expressions on the 2D stage or left and right swipe movements.<br><br>

        The point of this explanation is that the engine doesn't have every action built in to handle every detail, but thanks to asynchronous functions, you can create certain execution orders for events to achieve what you're looking for. For example, if you need a black fade at the beginning of the intro, you can insert a 'screen_fade in' and a 'wait' together to make it wait for the desired duration.<br>
        `,
        controls_title: "Controls",
        controls_text: `
        <p>
        The current game design is computer-based, so there is no controller support at this time.<br><br>
        <span class="mark">During visual novel dialogues, you can press the action key to skip a dialogue. This key includes:<br> - space<br> - enter<br> - left click<br> - controller action button</span><br>
        <img src="assets/examples/Skip_dialogue.png" alt="" width="100%" height="100%">
        <br><br>
        <span class="mark">
        When we talk about the general gameplay of Non-Stop Debate, you can move the cursor with the mouse and change the bullet selection with the arrow keys:<br> - up arrow<br> - down arrow<br> - left arrow<br> - right arrow
        </span><br>
        <img src="assets/examples/changeBullet.gif" alt="" width="100%" height="100%">
        <br><br>
        <span class="mark">
        Just like in Danganronpa, you can also advance or rewind time with your focus gauge using the following keys:<br> - Shift (Focus gauge)<br> - Space (advance time)
        </span><br>
        <img src="assets/examples/focusgauge.gif" alt="" width="100%" height="100%">
        <br><br>
        <span class="mark">
        When you choose a culprit, you can move with the arrow keys:<br> - Left arrow<br> - Right arrow<br> and you can also select with the action key:<br>
        - Space<br> - Enter<br> - Left click<br> - Action button Command
        </span><br>
        <img src="assets/examples/choose_culprit.gif" alt="" width="100%" height="100%">
        <br><br>
        <span class="mark">
        When you have multiple choice, you can navigate with the arrow keys:<br> - Up arrow<br> - Down arrow<br>
        </span><br>
        <img src="assets/examples/choose.gif" alt="" width="100%" height="100%">
        <br><br>
        <span class="mark">
        Here you are presented with evidence where you have to choose the correct answer. To choose a bullet, you must:<br>
        - Right-click<br><br>
        You can also see the description by left-clicking on the details box<br>
        </span><br>
        <img src="assets/examples/presentevidence.gif" alt="" width="100%" height="100%"> 
        </p>
        `,
        how_to_make_your_mod_title: "How to make your mod",
        how_to_make_your_mod_text: `
        <span class="mark">
            You can make your own mod by pressing the new button in make mode
        </span>
        <img src="assets/examples/new button.png" alt="" width="100%" height="100%"><br><br>

        <span class="mark">
            The next thing you'll need to do is choose a title and description for the mod; optionally, you can add an icon and a thumbnail.
        </span>
        <img src="assets/examples/titledescription.png" alt="" width="100%" height="100%"><br><br>

        Now you can work comfortably using the tools!
        `,
        how_editor_work_title: "How Editors Work",
        how_editor_work_text: `
        <span class="mark">
            The editor is divided into several sections:<br>
            - Characters -> This is where you configure the characters present<br>
            - Intro -> This is simply the 2D editor for character dialogue<br>
            - Trial -> This is simply the 3D editor for controlling gameplay and dialogue<br>
            - Settings -> Return to the section to configure the title and description<br>
            - Test -> This is for testing your creation in either the 2D or 3D scene<br>
        </span>
        <img src="assets/examples/editor_section.png" alt="" width="100%" height="100%"><br><br>
        `,
        where_your_assets_go_title: "Where your assets go?",
        where_your_assets_go_text: `
        <span class="mark">
            All your assets go in the folder with the same name. If it doesn't already exist, using some of the editor's functions will create it, but if necessary you can create it yourself. You can do the same with the folders inside.<br>
        </span>
        <img src="assets/examples/assets.png" alt="" width="50%" height="50%"><br><br>
        `,
        where_your_characters_go_title: "Where your characters go?",
        where_your_characters_go_text: `
        <span class="mark">
            When you create a new character that isn't in the base game, a folder called Custom_Characters will be created. You should add your characters using the editor.<br>
        </span>
        <img src="assets/examples/CustomChar.png" alt="" width="30%" height="30%"><br><br>
        `,
        callable_functions_title: "Callable Functions",
        callable_functions_text: `
        <span class="mark">
            One advantage of using the Dialogue Manager is that its creator provided ways to execute actions. The actions that can be executed for Danganmake are:
            <br>
            - GlobalSound<br>
            - CharacterScript<br>
            - CharacterList<br>
            - Scene-specific functions (See using functions on the scene)<br>

            Each of these tags can execute different functions within the same editor.<br>

            Fun fact: The GlobalSound tag is used throughout the game, both in the menu and the editor, to display any type of sound.<br><br>
        </span>
        `,
        globalsound_events_title: "GlobalSound Events",
        globalsound_events_text: `
        <span class="mark">
            GlobalSound is a script that runs when the game starts, as it's responsible for loading all the sounds in the game, including voices, sound effects, and songs. It also has a repertoire of functions that the user can utilize.<br><br>

            <code class="inline-code">
                <span class="c-keyword">do</span> 
                <span class="c-class">GlobalSound</span>.<span class="c-method">Method</span>(<span class="c-string">"Parameter"</span>)
            </code>
            <br>
            The repertoire of events that GlobalSound can use are as follows:<br><br>

            <code class="inline-code">
                <span class="c-keyword">Load_SFX</span>(SoundName : <span class="c-string">String</span>) -> it's self explanatory plays a sound by his name only if exist <br><br>
                <span class="c-keyword">Load_MUSIC</span>(SongName : <span class="c-string">String</span>) -> same goes for music<br><br>
                <span class="c-keyword">Load_VOICE</span>(VoiceName :<span class="c-string">String</span>) -> also same goes for voices one details is this only can play custom voices of your current roster<br><br>
                <span class="c-keyword">Stop_SFX</span>() -> if an sfx is playing it will stop it<br><br>
                <span class="c-keyword">Stop_MUSIC</span>() -> same goes for music<br><br>
                <span class="c-keyword">Stop_VOICE</span>() -> same goes for voices<br><br>
                <span class="c-keyword">Pitch_Voice</span>(Pitch : <span class="c-class">Float</span> = <span class="c-number">1.0</span>) -> If there is a voice playing right now, this function will change its pitch, this indirectly also changes its speed due to the pitch<br><br>
            </code>
            <br><br>
        </span>
        `,
       characterscript_events_title: "CharacterScript Events",
        characterscript_events_text: `
        <span class="mark">
            CharacterScript is one of the most important autoloads in the engine. It is responsible for handling all visual novel elements, screen effects, backgrounds, transitions, and character animations on the 2D stage.<br><br>

            <code class="inline-code">
                <span class="c-keyword">do</span> 
                <span class="c-class">CharacterScript</span>.<span class="c-method">Method</span>(<span class="c-string">"Parameter"</span>)
            </code>
            <br>
            <span class="warning">WARNING: The use of these methods should be limited to the 2D scene; using them in other scenes, including 3D, will certainly cause a crash.</span><br><br>
            The repertoire of events that CharacterScript can use are as follows:<br><br>

            <code class="inline-code">
                <span class="c-keyword">Change_bg</span>(BackgroundName : <span class="c-string">String</span>) -> Changes the current 2D background.<br><br>
                <span class="c-keyword">CH_EXPRESSION</span>(CharacterName : <span class="c-string">String</span>, EmotionName : <span class="c-string">String</span>) -> Changes the character's sprite smoothly creating a shadow of its previous image.<br><br>
                <span class="c-keyword">CH_EXPRESSION_OLD</span>(CharacterName : <span class="c-string">String</span>, EmotionName : <span class="c-string">String</span>) -> Changes the character's sprite instantly (legacy).<br><br>
                <span class="c-keyword">Left_Slide</span>(CharacterName : <span class="c-string">String</span>, EmotionName : <span class="c-string">String</span>) -> Makes a character enter the screen sliding from the left.<br><br>
                <span class="c-keyword">Right_Slide</span>(CharacterName : <span class="c-string">String</span>, EmotionName : <span class="c-string">String</span>) -> Makes a character enter the screen sliding from the right.<br><br>
                <span class="c-keyword">fadein</span>() -> Fades in the current character sprite on screen.<br><br>
                <span class="c-keyword">fadeout</span>() -> Fades out the current character sprite.<br><br>
                <span class="c-keyword">Show_image</span>(ImageName : <span class="c-string">String</span>) -> Displays an image from your assets folder on the screen.<br><br>
                <span class="c-keyword">Remove_image</span>() -> Removes the currently displayed image.<br><br>
                <span class="c-keyword">Play_Video</span>(VideoName : <span class="c-string">String</span>) -> Plays an .ogv video from your assets folder.<br><br>
                <span class="c-keyword">screen_fade_in</span>(Speed : <span class="c-class">Float</span> = <span class="c-number">1.0</span>, ColorName : <span class="c-string">Color</span> = <span class="c-class">Color</span>.BLACK) -> Fades the screen to a specific color.<br><br>
                <span class="c-keyword">screen_fade_out</span>(Speed : <span class="c-class">Float</span> = <span class="c-number">1.0</span>, ColorName : <span class="c-string">Color</span> = <span class="c-class">Color</span>.BLACK) -> Fades the screen back to normal from a solid color.<br><br>
                <span class="c-keyword">Screen_Shake</span>(NodeName : <span class="c-string">String</span>, Intensity : <span class="c-class">Float</span>, Time : <span class="c-class">Float</span>) -> Shakes the screen or a specific node (e.g., "all", "bg", "Character") for a set duration.<br><br>
                <span class="c-keyword">Stop_Screen_Shake</span>() -> Stops any active screen shake immediately.<br><br>
                <span class="c-keyword">Screen_Flash</span>() -> Creates a quick flash effect on the screen.<br><br>
                <span class="c-keyword">Wait</span>(Time : <span class="c-class">Float</span>) -> Pauses the execution of the next dialogue/action for the specified time in seconds.<br><br>
                <span class="c-keyword">Memory</span>(MemoryID : <span class="c-class">Int</span>) -> Calls and plays a specific Memory block by its ID.<br><br>
                <span class="c-keyword">Show_3D_Court</span>() -> Displays the 3D trial background environment.<br><br>
                <span class="c-keyword">Hide_3D_Court</span>() -> Hides the 3D trial background and returns to the 2D background.<br><br>
            </code>
            <br><br>
        </span>
        `,
        characterlist_events_title: "CharacterList Events",
        characterlist_events_text: `
        <span class="mark">
            CharacterList is the core autoload managing the 3D court environment and character interactions within it.<br><br>

            <span class="warning">WARNING: The use of these methods should be limited to the 3D scene; using them in other scenes, including 2D, will certainly cause a crash.</span><br><br>

                <code class="inline-code">
                    <span class="c-keyword">do</span> 
                    <span class="c-class">CharacterList</span>.<span class="c-method">Method</span>(<span class="c-string">"Parameter"</span>)
                </code>
                <br>
                The repertoire of events that CharacterList can use are as follows:<br><br>

                <code class="inline-code">
                    <span class="c-keyword">CH_EXPRESSION_3D</span>(CharacterName : <span class="c-string">String</span>, EmotionName : <span class="c-string">String</span>) -> Changes the expression of a character currently in the 3D room.<br><br>

                    <span class="c-keyword">focus_CH</span>(CharacterName : <span class="c-string">String</span>, FOV : <span class="c-class">Int</span> = <span class="c-number">50</span>, Speed : <span class="c-class">Float</span> = <span class="c-number">0.2</span>) -> The camera will perform a simple linear movement to focus on a character with the specified FOV and speed.<br><br>

                    <span class="c-keyword">focus_CH_zoom_in_rotated</span>(CharacterName : <span class="c-string">String</span>, FOV : <span class="c-class">Int</span> = <span class="c-number">50</span>, Duration : <span class="c-class">Float</span> = <span class="c-number">5.0</span>, Angle : <span class="c-class">Float</span> = <span class="c-number">-15.0</span>, Z_Pos : <span class="c-class">Float</span> = <span class="c-number">1.8</span>, Y_Rot : <span class="c-class">Float</span> = <span class="c-number">0</span>) -> The camera will start at the specified angle and smoothly rotate back to its original position while zooming in.<br><br>

                    <span class="c-keyword">focus_CH_zoom_out_rotated</span>(CharacterName : <span class="c-string">String</span>, FOV : <span class="c-class">Int</span> = <span class="c-number">50</span>, ... ) -> Same as above, but zooming out.<br><br>

                    <span class="c-keyword">focus_CH_zoom_in</span>(CharacterName : <span class="c-string">String</span>, FOV : <span class="c-class">Int</span> = <span class="c-number">50</span>, Duration : <span class="c-class">Float</span> = <span class="c-number">5.0</span>, Z_Pos : <span class="c-class">Float</span> = <span class="c-number">1.8</span>) -> Standard zoom in animation towards the character.<br><br>
                    
                    <span class="c-keyword">focus_CH_zoom_out</span>(CharacterName : <span class="c-string">String</span>, FOV : <span class="c-class">Int</span> = <span class="c-number">50</span>, Duration : <span class="c-class">Float</span> = <span class="c-number">5.0</span>, Z_Pos : <span class="c-class">Float</span> = <span class="c-number">1.8</span>) -> Standard zoom out animation from the character.<br><br>

                    <span class="c-keyword">focus_CH_zoom_in_Top</span>(CharacterName : <span class="c-string">String</span>, FOV : <span class="c-class">Int</span> = <span class="c-number">50</span>, Duration : <span class="c-class">Float</span> = <span class="c-number">5.0</span>, Z_Pos : <span class="c-class">Float</span> = <span class="c-number">1.8</span>) -> Zooms in focusing slightly higher on the character.<br><br>

                    <span class="c-keyword">focus_CH_slow_camera_L</span>(CharacterName : <span class="c-string">String</span>, FOV : <span class="c-class">Int</span> = <span class="c-number">50</span>) -> The camera is positioned slightly to the Left (L) and slowly centers itself.<br><br>

                    <span class="c-keyword">focus_CH_slow_camera_R</span>(CharacterName : <span class="c-string">String</span>, FOV : <span class="c-class">Int</span> = <span class="c-number">50</span>) -> The camera is positioned slightly to the Right (R) and slowly centers itself.<br><br>

                    <span class="c-keyword">Choose_culprit</span>(ID : <span class="c-class">Int</span>) -> Enters the culprit selection mode. <i style="color: #ffcc00;">Note: It is highly recommended NOT to use this function manually from the root, as its ID depends entirely on specific data existing in a JSON file generated by the editor.</i><br><br>

                    <span class="c-keyword">Shake</span>(NodeName : <span class="c-string">String</span>, Intensity : <span class="c-class">Float</span>, Duration : <span class="c-class">Float</span>) -> Shakes a specific node within the 3D scene for a set duration e.g(GUI, Bullets_Gui, dialogue [dialogue is most common one]).<br><br>

                    <span class="c-keyword">Wait</span>(Time : <span class="c-class">Float</span>) -> Pauses the execution for the specified time in seconds.<br><br>

                    <span class="c-keyword">Play_I_See</span>() -> Prepares and plays the "I See" (cut-in) animation sequence.<br><br>

                    <span class="c-keyword">present_evidence</span>(CorrectAnswer : <span class="c-string">String</span>) -> Opens the truth bullet menu to present evidence. <i style="color: #ffcc00;">Note: It is strongly recommended NOT to use this function manually. It requires formulating the question with specific boolean values and structure that is currently only manageable through the editor.</i><br><br>
                </code>
                <br><br>
            </span>
        `,
        
    },
    es: {
        nav_intro: "Introduccion",
        sub_intro_what: "¿Que es Danganmake?",
        sub_intro_async: "¿Que es una funcion asincrona?",
        read_intro: "Como leer la documentacion",
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
        sub_scene_how: "Como funciona esto",
        title_intro: "Introduccion",
        text_intro: `
        Hola bienvenido a danganmake este es un editor de juicios de danganronpa, el punto de este
        editor es que te permita crear tus propios juicios y personalizarlos para que se adapten a tus
        gustos. con esto puedes hacer tus propios fangames, what if, o cualquier cosa que quieras, hicimos
        este fangame para ti y solo para ti. no queremos danar el prestigio de spike chunsoft ni aduenarnos de nada.
        Spike Chunsoft es el dueno de la franquicia danganronpa y le pertenece solo a ellos todos los derechos reservados. Dicho esto
        te explicamos que es danganmake, y como funciona.
        `,
        what_is_dangan_title: "¿Que es Danganmake?",
        what_is_dangan_text: `
        Es un motor de juegos de danganronpa que te permite crear tus propios fangames. hecho especificamente
        para imitar la experiencia de danganronpa
        el punto del motor es que sea facil de usar para el usuario y no requiera saber programacion
        para poder crear sus propios fangames. <br><br>

        El motor esta hecho enteramente en Godot Engine, el cual es un motor de juegos de codigo abierto
        Para facilitar el uso y la creacion de este motor se usaron librerias de assets populares como:<br><br> 

        Dialogue Manager - Nathan Road<br>
        Phamtom Camera - Ramokz<br>
        Sparkle Lite - Neohex<br>

        Es una experiencia para crear tus propios mods compartirlos con la comunidad o solo para ti.<br>

        Si te interesa compartir tus creaciones o jugar creaciones de la comunidad te recomendamos entrar al discord<br><br>
        <a href="https://discord.gg/nfuBdQRmH8"><img src="assets/img/discord.png" alt="" width="40px" height="40px"></a>
        `,
        async_title: "Funcion Asincrona",
        async_text: `
        es un bloque de codigo que se ejecuta en segundo plano sin detener el flujo principal del programa.<br><br>

        esto solo significa que si hay un bloque diciendo que mostrara un fade in en medio de la novela visual hara esta accion primero y dejara en una cola esperando al texto hasta que esta termine de ser atendida y el texto pueda mostrarse, ten en cuenta que todas las acciones no necesariamente son funciones asincronas y no esperaran a que termine de pasar su propio evento para que el siguiente pueda reproducirse. ejemplos pueden ser como las funciones para cambiar expresion en el escenario en 2D O los movimientos de deslizamiento de izquierda y derecha.

        el punto de esta explicacion es que en el motor no esta hecha cada accion para hacer cada detalle pero gracias a las funciones asincronas  puedes inventar ciertos ordenes de ejecucion del evento que pueda hacer lo que estas buscando ej: si necesitas un fundido negro al inicio de la intro puedes insertar un screen_fade in y un wait en conjunto para hacer esperar el tiempo que quieras.
        `,
        controls_title: "Controles",
        controls_text: `
        <p>
        El diseno actual del juego es computadora asi que por el momento no hay soporte para mandos.<br><br>
        <span class="mark">En momentos de dialogos de novela visual puedes presionar la tecla de accion para saltar un dialogo esta tecla incluye:<br> - espacio<br> - enter<br> - click izquierdo<br> - boton de accion de un mando</span><br>
        <img src="assets/examples/Skip_dialogue.png" alt="" width="100%" height="100%">
        <br><br>
        <span class="mark">
        Cuando hablamos de el gameplay general del non stop debate, puedes mover el cursor con el mouse, y cambiar la seleccion de balas con las flechas:<br> - flecha arriba<br> - flecha abajo<br> - flecha izquierda<br> - flecha derecha
        </span><br>
        <img src="assets/examples/changeBullet.gif" alt="" width="100%" height="100%">
        <br><br>
        <span class="mark">
        Igual que en el danganronpa tambien puedes adelantar o atrasar el tiempo con tu focus gauge con las teclas:<br> - Shift (Focus gauge)<br> - Espacio (adelantar el tiempo)
        </span><br>
        <img src="assets/examples/focusgauge.gif" alt="" width="100%" height="100%">
        <br><br>
        <span class="mark">
        Cuando escojas a un culpable puedes desplazarte con las flechas:<br> - flecha izquierda<br> - flecha derecha<br>y tambien puedes elegir con la tecla de accion:<br> 
        - espacio<br> - enter<br> - click izquierdo<br> - boton de accion de un mando
        </span><br>
        <img src="assets/examples/choose_culprit.gif" alt="" width="100%" height="100%">
        <br><br>
        <span class="mark">
        Cuando tengas una opcion multiple puedes desplazarte con las flechas:<br> - flecha arriba<br> - flecha abajo<br>
        </span><br>
        <img src="assets/examples/choose.gif" alt="" width="100%" height="100%">
        <br><br>
        <span class="mark">
        Aqui te presentan evidencias donde tienes que escojer la respuesta correcta para escojer una bala es:<br>
        - Click derecho<br><br>
        ademas puedes ver la descripcion dando click izquierdo en la caja de detalles<br>
        </span><br>
        <img src="assets/examples/presentevidence.gif" alt="" width="100%" height="100%">
        </p>
        `,
        how_to_make_your_mod_title: "Como hacer tu propio mod",
        how_to_make_your_mod_text: `
        <span class="mark">
        Puedes crear tu propio mod pulsando el boton "Nuevo" en el modo de creacion.
        </span>
        <img src="assets/examples/new button.png" alt="" width="100%" height="100%"><br><br>

        <span class="mark">
        Lo siguiente que debes hacer es elegir un titulo y una descripcion para el mod; opcionalmente, puedes anadir un icono y una miniatura.
        </span>
        <img src="assets/examples/titledescription.png" alt="" width="100%" height="100%"><br><br>

        Ahora puedes trabajar comodamente con las herramientas!
        `,
        how_editor_work_title: "Como funciona el editor",
        how_editor_work_text: `
        <span class="mark">
            El editor esta dividido en varias secciones:<br>
            - Characters -> Aqui es donde configuras los personajes presentes<br>
            - Intro -> Este es simplemente el editor 2D para el dialogo de personajes<br>
            - Trial -> Este es simplemente el editor 3D para controlar el juego y el dialogo<br>
            - Settings -> Regresa a la seccion para configurar el titulo y la descripcion<br>
            - Test -> Esto es para probar tu creacion en la escena 2D o 3D<br>
        </span>
        <img src="assets/examples/editor_section.png" alt="" width="100%" height="100%"><br><br>
        `,
        where_your_assets_go_title: "Donde van tus recursos?",
        where_your_assets_go_text: `
        <span class="mark">
            Todos tus assets van en la carpeta con el mismo nombre si aun no esta creada con usar algunas de las funciones del editor la creara, pero si es necesario puedes crearla por ti mismo, lo mismo puedes hacer con las carpetas de adentro.<br>
        </span>
        <img src="assets/examples/assets.png" alt="" width="50%" height="50%"><br><br>
        `,
        where_your_characters_go_title: "Donde van tus personajes?",
        where_your_characters_go_text: `
        <span class="mark">
            Cuando creas un nuevo personaje que no esta en el juego base, se creara una carpeta llamada Custom_Characters. Debes agregar tus personajes usando el editor.<br>
        </span>
        <img src="assets/examples/CustomChar.png" alt="" width="30%" height="30%"><br><br>
        `,
        callable_functions_title: "Funciones Invocables",
        callable_functions_text: `
        <span class="mark">
        Una ventaja de usar el Administrador de Dialogos es que su creador proporciono formas de ejecutar acciones. Las acciones que se pueden ejecutar en Danganmake son:
        <br>
        - GlobalSound<br>
        - CharacterScript<br>
        - CharacterList<br>
        - Funciones especificas de la escena (Ver usar funciones en la escena)<br>

        Cada una de estas etiquetas puede ejecutar diferentes funciones dentro del mismo editor.<br>

        Dato curioso: La etiqueta GlobalSound se usa en todo el juego, tanto en el menu como en el editor, para mostrar cualquier tipo de sonido.<br><br>
        </span>
        `,
        globalsound_events_title: "Eventos de GlobalSound",
        globalsound_events_text: `
        <span class="mark">
            GlobalSound es un script que se ejecuta al iniciar el juego, ya que es responsable de cargar todos los sonidos del juego, incluyendo voces, efectos de sonido y canciones. Tambien cuenta con un repertorio de funciones que el usuario puede utilizar.<br><br>

            <code class="inline-code">
            <span class="c-keyword">do</span>
            <span class="c-class">GlobalSound</span>.<span class="c-method">Method</span>(<span class="c-string">"Parametro"</span>)
            </code>
            <br>
            El repertorio de eventos que GlobalSound puede utilizar es el siguiente:<br><br>

            <code class="inline-code">
            <span class="c-keyword">Load_SFX</span>(SoundName : <span class="c-string">String</span>) -> reproduce un sonido por su nombre solo si existe.<br><br>
            <span class="c-keyword">Load_MUSIC</span>(SongName : <span class="c-string">String</span>) -> lo mismo aplica para la musica<br><br>
            <span class="c-keyword">Load_VOICE</span>(VoiceName :<span class="c-string">String</span>) -> tambien aplica para las voces. Un detalle importante es que solo puede reproducir voces personalizadas de tu lista actual<br><br>
            <span class="c-keyword">Stop_SFX</span>() -> si se esta reproduciendo un efecto de sonido, lo detendra<br><br>
            <span class="c-keyword">Stop_MUSIC</span>() -> lo mismo aplica para la musica<br><br>
            <span class="c-keyword">Stop_VOICE</span>() -> lo mismo aplica para las voces<br><br>
            <span class="c-keyword">Pitch_Voice</span>(Pitch : <span class="c-class">Float</span> = <span class="c-number">1.0</span>) -> Si hay una voz reproduciendose en este momento, esta funcion cambiara su tono, lo que indirectamente tambien cambia su velocidad debido al tono.<br><br>
            </code>
            <br><br>
        </span>
        `,
        characterscript_events_title: "Eventos CharacterScript",
        characterscript_events_text: `
        <span class="mark">
            CharacterScript es uno de los autoloads más importantes en el motor. Es responsable de manejar todos los elementos de novela visual, efectos de pantalla, fondos, transiciones y animaciones de personajes en el escenario 2D.<br><br>

            <code class="inline-code">
                <span class="c-keyword">do</span> 
                <span class="c-class">CharacterScript</span>.<span class="c-method">Method</span>(<span class="c-string">"Parametro"</span>)
            </code>
            <br>
            <span class="warning">ADVERTENCIA: el uso de estos metodos debe ser unicamente en la escena 2D el uso de esto en otras escenas incluyendo la 3D ciertamente va a causar un crash.</span><br><br>
            El repertorio de eventos que CharacterScript puede utilizar es el siguiente:<br><br>

            <code class="inline-code">
                <span class="c-keyword">Change_bg</span>(BackgroundName : <span class="c-string">String</span>) -> Cambia el fondo 2D actual.<br><br>
                <span class="c-keyword">CH_EXPRESSION</span>(CharacterName : <span class="c-string">String</span>, EmotionName : <span class="c-string">String</span>) -> Cambia el sprite del personaje suavemente con una sombra de su imagen anterior.<br><br>
                <span class="c-keyword">CH_EXPRESSION_OLD</span>(CharacterName : <span class="c-string">String</span>, EmotionName : <span class="c-string">String</span>) -> Cambia el sprite del personaje instantáneamente (metodo antiguo).<br><br>
                <span class="c-keyword">Left_Slide</span>(CharacterName : <span class="c-string">String</span>, EmotionName : <span class="c-string">String</span>) -> Hace que un personaje entre a la pantalla deslizándose desde la izquierda.<br><br>
                <span class="c-keyword">Right_Slide</span>(CharacterName : <span class="c-string">String</span>, EmotionName : <span class="c-string">String</span>) -> Hace que un personaje entre a la pantalla deslizándose desde la derecha.<br><br>
                <span class="c-keyword">fadein</span>() -> Aparece gradualmente (fade in) el sprite del personaje actual en pantalla.<br><br>
                <span class="c-keyword">fadeout</span>() -> Desvanece (fade out) el sprite del personaje actual.<br><br>
                <span class="c-keyword">Show_image</span>(ImageName : <span class="c-string">String</span>) -> Muestra una imagen desde tu carpeta de assets en la pantalla.<br><br>
                <span class="c-keyword">Remove_image</span>() -> Elimina la imagen que se está mostrando actualmente en pantalla.<br><br>
                <span class="c-keyword">Play_Video</span>(VideoName : <span class="c-string">String</span>) -> Reproduce un video en formato .ogv desde tu carpeta de assets.<br><br>
                <span class="c-keyword">screen_fade_in</span>(Speed : <span class="c-class">Float</span> = <span class="c-number">1.0</span>, ColorName : <span class="c-string">Color</span> = <span class="c-class">Color</span>.BLACK) -> Funde la pantalla hacia un color específico.<br><br>
                <span class="c-keyword">screen_fade_out</span>(Speed : <span class="c-class">Float</span> = <span class="c-number">1.0</span>, ColorName : <span class="c-string">Color</span> = <span class="c-class">Color</span>.BLACK) -> Devuelve la pantalla a la normalidad desde un color sólido.<br><br>
                <span class="c-keyword">Screen_Shake</span>(NodeName : <span class="c-string">String</span>, Intensity : <span class="c-class">Float</span>, Time : <span class="c-class">Float</span>) -> Sacude la pantalla o un nodo específico (ej. "all", "bg", "Character") por una duración determinada.<br><br>
                <span class="c-keyword">Stop_Screen_Shake</span>() -> Detiene cualquier sacudida de pantalla activa de inmediato.<br><br>
                <span class="c-keyword">Screen_Flash</span>() -> Crea un efecto de destello rápido en la pantalla.<br><br>
                <span class="c-keyword">Wait</span>(Time : <span class="c-class">Float</span>) -> Pausa la ejecución del siguiente diálogo/acción por el tiempo especificado en segundos.<br><br>
                <span class="c-keyword">Memory</span>(MemoryID : <span class="c-class">Int</span>) -> Llama y reproduce un bloque de Memoria específico mediante su ID.<br><br>
                <span class="c-keyword">Show_3D_Court</span>() -> Muestra el entorno 3D del tribunal de fondo.<br><br>
                <span class="c-keyword">Hide_3D_Court</span>() -> Oculta el tribunal 3D y regresa al fondo 2D.<br><br>
            </code>
            <br><br>
        </span>
        `,
        characterlist_events_title: "Eventos CharacterList",
        characterlist_events_text: `
        <span class="mark">
            CharacterList es el autoload principal encargado de gestionar el entorno 3D del tribunal y las interacciones de los personajes dentro del mismo.<br><br>

            <span class="warning">ADVERTENCIA: El uso de estos métodos debe limitarse a la escena 3D; usarlos en otras escenas, incluida la 2D, ciertamente causará un cierre inesperado (crash).</span><br><br>

                <code class="inline-code">
                    <span class="c-keyword">do</span> 
                    <span class="c-class">CharacterList</span>.<span class="c-method">Method</span>(<span class="c-string">"Parametro"</span>)
                </code>
                <br>
                El repertorio de eventos que CharacterList puede utilizar es el siguiente:<br><br>

                <code class="inline-code">
                    <span class="c-keyword">CH_EXPRESSION_3D</span>(CharacterName : <span class="c-string">String</span>, EmotionName : <span class="c-string">String</span>) -> Cambia la expresión de un personaje que se encuentre actualmente en la sala 3D.<br><br>

                    <span class="c-keyword">focus_CH</span>(CharacterName : <span class="c-string">String</span>, FOV : <span class="c-class">Int</span> = <span class="c-number">50</span>, Speed : <span class="c-class">Float</span> = <span class="c-number">0.2</span>) -> La cámara hará un movimiento lineal simple hacia el personaje con el FOV y la velocidad configurados.<br><br>

                    <span class="c-keyword">focus_CH_zoom_in_rotated</span>(CharacterName : <span class="c-string">String</span>, FOV : <span class="c-class">Int</span> = <span class="c-number">50</span>, Duration : <span class="c-class">Float</span> = <span class="c-number">5.0</span>, Angle : <span class="c-class">Float</span> = <span class="c-number">-15.0</span>, Z_Pos : <span class="c-class">Float</span> = <span class="c-number">1.8</span>, Y_Rot : <span class="c-class">Float</span> = <span class="c-number">0</span>) -> La cámara iniciará en el ángulo (angle) indicado e irá volviendo suavemente a su posición original mientras se acerca (zoom in).<br><br>

                    <span class="c-keyword">focus_CH_zoom_out_rotated</span>(CharacterName : <span class="c-string">String</span>, FOV : <span class="c-class">Int</span> = <span class="c-number">50</span>, ... ) -> Igual que el anterior, pero alejándose (zoom out).<br><br>

                    <span class="c-keyword">focus_CH_zoom_in</span>(CharacterName : <span class="c-string">String</span>, FOV : <span class="c-class">Int</span> = <span class="c-number">50</span>, Duration : <span class="c-class">Float</span> = <span class="c-number">5.0</span>, Z_Pos : <span class="c-class">Float</span> = <span class="c-number">1.8</span>) -> Animación estándar de acercamiento (zoom in) hacia el personaje.<br><br>
                    
                    <span class="c-keyword">focus_CH_zoom_out</span>(CharacterName : <span class="c-string">String</span>, FOV : <span class="c-class">Int</span> = <span class="c-number">50</span>, Duration : <span class="c-class">Float</span> = <span class="c-number">5.0</span>, Z_Pos : <span class="c-class">Float</span> = <span class="c-number">1.8</span>) -> Animación estándar de alejamiento (zoom out) del personaje.<br><br>

                    <span class="c-keyword">focus_CH_zoom_in_Top</span>(CharacterName : <span class="c-string">String</span>, FOV : <span class="c-class">Int</span> = <span class="c-number">50</span>, Duration : <span class="c-class">Float</span> = <span class="c-number">5.0</span>, Z_Pos : <span class="c-class">Float</span> = <span class="c-number">1.8</span>) -> Se acerca (zoom in) enfocándose ligeramente en la parte superior del personaje.<br><br>

                    <span class="c-keyword">focus_CH_slow_camera_L</span>(CharacterName : <span class="c-string">String</span>, FOV : <span class="c-class">Int</span> = <span class="c-number">50</span>) -> La cámara se posiciona un poco alejada hacia la Izquierda (L) y poco a poco vuelve a su posición central.<br><br>

                    <span class="c-keyword">focus_CH_slow_camera_R</span>(CharacterName : <span class="c-string">String</span>, FOV : <span class="c-class">Int</span> = <span class="c-number">50</span>) -> La cámara se posiciona un poco alejada hacia la Derecha (R) y poco a poco vuelve a su posición central.<br><br>

                    <span class="c-keyword">Choose_culprit</span>(ID : <span class="c-class">Int</span>) -> Entra en el modo para escoger al culpable. <i style="color: #ffcc00;">Nota: Es muy recomendable NO usar esta función manualmente desde la raíz, ya que su ID depende totalmente de que exista un dato específico generado en un archivo JSON por el editor.</i><br><br>

                    <span class="c-keyword">Shake</span>(NodeName : <span class="c-string">String</span>, Intensity : <span class="c-class">Float</span>, Duration : <span class="c-class">Float</span>) -> Sacude un nodo específico dentro de la escena 3D por una duración determinada, por ejemplo (GUI, Bullets_Gui, dialogue [dialogue es el más común]).<br><br>

                    <span class="c-keyword">Wait</span>(Time : <span class="c-class">Float</span>) -> Pausa la ejecución por el tiempo especificado en segundos.<br><br>

                    <span class="c-keyword">Play_I_See</span>() -> Prepara y reproduce la secuencia de animación de corte (cut-in) "I See".<br><br>

                    <span class="c-keyword">present_evidence</span>(CorrectAnswer : <span class="c-string">String</span>) -> Abre el menú de balas de la verdad para presentar evidencia. <i style="color: #ffcc00;">Nota: Se recomienda fuertemente NO usar esta función de forma manual. Requiere formular la pregunta con valores booleanos y una estructura que actualmente solo es manejable a través del editor.</i><br><br>
                </code>
                <br><br>
            </span>
        `,
        
    }
};

let currentLanguage = "en";

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

    const langToggleBtn = document.getElementById("lang");

    langToggleBtn.addEventListener("click", () => {
        if (currentLanguage === "en") {
            currentLanguage = "es";
            langToggleBtn.src = "assets/img/opt_esp.png"; 
        } else {
            currentLanguage = "en";
            langToggleBtn.src = "assets/img/opt_eng.png";
        }

        const elements = document.querySelectorAll("[data-i18n]");

        elements.forEach((element) => {
            const key = element.getAttribute("data-i18n");
            
            if (langData[currentLanguage][key]) {
                element.innerHTML = langData[currentLanguage][key]; 
            }
        });
    });
});