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
        sub_shared_usage_2D: "2D offset editor usage",
        sub_shared_usage_3D: "3D offset editor usage",
        sub_custom_avoid: "What you should avoid",
        nav_offset: "Character Editor",
        sub_offset_what: "What is Character Editor?",
        nav_scene: "Using functions on the scene",
        sub_scene_how: "How this works",
        scene2d_btn: "2D Scene",
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
        text_shared_voice: `
            <span class="mark">
                In the dialogue creation panel, you can select a specific voice clip for the character. These voices are automatically fetched from the character's designated 'Voices' folder in the roster. They will play exactly when the character's dialogue line starts.<br><br>
            </span>
            <img src="assets/examples/voice2d.png" alt="" width="50%" height="50%"><br><br>
        `,
        text_shared_snd: `
            <span class="mark">
                Similar to voices, you can assign sound effects (SFX) to a dialogue line. This is typically used for impact sounds, desk slams, or specific text-scroll noises to give more impact to the scene.<br><br>
            </span>
            <img src="assets/examples/sound2d.png" alt="" width="50%" height="50%"><br><br>
        `,
        text_shared_ba: `
            <span class="mark">
                You will notice a toggle switch (checkbox) next to Sounds and Action Scenes. By default (unchecked), the sound or action will play <b>before</b> the dialogue text appears. If you check the box, the effect will execute <b>after</b> the dialogue line is completely spoken and before moving to the next block.<br><br>
            </span>
            <img src="assets/examples/beforeafter2d.png" alt="" width="50%" height="50%"><br><br>
        `,
        text_shared_act: `
            <span class="mark">
                You can add multiple action rows to a single dialogue block using the "add action scene" button. This allows you to stack visual effects like Screen Shakes, Screen Flashes, Fades, or Waits simultaneously with the dialogue line..<br><br>
            </span>
            <img src="assets/examples/sceneaction2d.png" alt="" width="50%" height="50%"><br><br>
        `,
        text_shared_mem: `
            <span class="mark">
                Memory blocks allow you to create isolated timelines, perfect for flashbacks or evidence descriptions. Use the 'Memory' event button to create a Memory Start and End block with a unique ID. Anything placed inside will be hidden from the main flow. To trigger it, use the 'Call' button to insert a Memory Call block in your main timeline. Additionally, there is a button to switch the memory view mode to the normal view stream.<br><br>
            </span>
            <img src="assets/examples/Memory2d.png" alt="" width="50%" height="50%"><br><br>
        `,
        text_shared_bg: `
            <span class="mark">
                Using the 'Change Background' event block, you can switch the 2D environment background. You can use the default Danganronpa backgrounds or upload your own custom .png/.jpg images directly through the editor.<br><br>
            </span>
            <img src="assets/examples/bg2d.png" alt="" width="50%" height="50%"><br><br>
        `,
        text_shared_song: `
            <span class="mark">
                The 'Change Music' event block allows you to change the background music. The selected track will loop automatically until you stop it or change it to another song.<br><br>
            </span>
            <img src="assets/examples/music2d.png" alt="" width="50%" height="50%"><br><br>
        `,
        text_shared_court: `
            <span class="mark">
                The 'Show 3D Court' event block toggles the 3D court environment. When set to SHOW, it hides the 2D background and displays the 3D trial room behind your 2D characters. Setting it to HIDE reverts it back to the standard 2D background.<br><br>
            </span>
            <img src="assets/examples/3dcourt2d.png" alt="" width="50%" height="50%"><br><br>
        `,
        text_shared_img: `
            <span class="mark">
                The 'Set Image' event block allows you to display a custom static image overlay on the screen, which is extremely useful for showing evidence, clues, or cut-ins. The editor also provides a specific 'Remove Image' button to clear it from the screen.<br><br>
            </span>
            <img src="assets/examples/setimage2d.png" alt="" width="50%" height="50%"><br><br>
        `,
        text_shared_vid: `
            <span class="mark">
                Using the 'Set Video' event block, you can play full video cutscenes over your game. Please note that due to engine limitations, videos must be in .ogv format to be recognized.<br><br>
            </span>
            <img src="assets/examples/video2d.png" alt="" width="50%" height="50%"><br><br>
        `,
        text_shared_end: `
            <span class="mark">
                The 'End Chapter Dialogue' event block acts as a visual divider. Any dialogue or action placed below this block will be automatically separated and compiled as the ending sequence of the chapter.<br><br>
            </span>
        `,
        custom_script_title: "What is a Custom Script",
        custom_script_text: `
            <span class="mark">
                <span class="warning">WARNING: You must be careful when using these events; they are case-sensitive, and any typo will certainly cause a crash.</span><br>

                In the custom script events section, there's what's called a 'custom block'. It's just a normal block, but the difference is that you don't add actions through the editor; you add them through code (see Event Terms for more information). For example, thanks to the use of CharacterScript, you can call each function separately and combine them to create a specific event in the 2D editor. <br><br>

                An important point is that, for ease of use, whenever you write a function (this only applies to beta 1.0), 'do CharacterScript' will be written directly before your code. The only exception is when you call the 'GlobalSound' function.<br><br>
                
                If you write a colon ' : ' in the middle of a line of text, the editor interprets it as character dialogue, for example, 'Hajime: Hi'.<br><br>
                
                If you write an exclamation mark ' ! ' at the beginning of the line, you have to manually write the action you want to execute, for example, '! Script.Method'. You'll realize that this is the most basic and primitive way to program in the editor, but it can be used for very specific things and to execute functions that only exist in the current scene (see "Using functions on the scene" for more information).
            </span>
            <img src="assets/examples/custom_script.png" alt="" width="50%" height="50%"><br><br>
        `,
        custom_script_usage_title: "Usage",
        custom_script_usage_text: `
            <span class="mark">
                <span class="warning">WARNING: You must be careful when using these events; they are case-sensitive, and any typo will certainly cause a crash.</span><br>

                Functions that don't use ! are simply executing CharacterScript, and to generate dialogue text, simply type your character's name followed by : and the text you want it to say (See Event Terms for information on callable functions).<br><br>
            </span>
            <img src="assets/examples/scripting2.png" alt="" width="50%" height="50%"><br><br>
        `,
        Character_Editor_title: "What is the Character Editor?",
        Character_Editor_text: `
            <span class="mark">
                The Character Editor is a built-in visual tool that allows you to manage the cast of your Danganronpa trial. With this tool, you can explore the characters already included in the base game, add new custom sprites (expressions) to them, or create completely new original characters for your specific mod. It automatically handles the creation of the necessary folders (like the 'Voices' folder) and safely imports your images so they are ready to be used in the 2D and 3D scenes.<br><br>
            </span>
        `,
        Character_Editor_usage_title: "Usage",
        Character_Editor_usage_text: `
            <span class="mark">
                The interface is divided into two main panels:<br><br>
                
                <b>The Left Panel:</b> Here you can browse between 'Existing Characters' (the base game roster) and 'Your Characters' (custom characters created for your mod). You can use the search bar to easily find a specific character or click the '+ Create New Character' button at the bottom to start from scratch.<br><br>
                
                <b>The Right Panel (Editor):</b> Once you select or create a character, this panel activates. You can use the '+ Add sprite' button to select .png or .jpg images from your computer. The 'Sprites List' will show all the expressions the character currently has (marked as EXISTING) and the new ones you are adding. You can click on any sprite to see how it looks in the 'Preview' window. Finally, press the confirmation button at the bottom to save your changes and import the sprites.<br><br>
            </span>
            
        `,
        Character_Offset_title: "What is the 2D Character Offset Editor?",
        Character_Offset_text: `
            <span class="mark">
                The 2D Character Offset Editor is a visual tool designed to align and scale your character sprites correctly. Since custom images can vary greatly in resolution and blank space, they might not center perfectly on the screen by default. This tool allows you to adjust their exact position and size so they look flawless in your visual novel scenes. All adjustments are automatically saved in a 'config.json' file inside the character's specific folder.<br><br>
            </span>
        `,
        Character_Offset_usage_text: `
            <span class="mark">
                To use this tool, simply select a character from the dropdown menu on the left panel. The editor will automatically load their default 'idle' sprite onto the visual reference background. Use the <b>Scale</b> slider to make the character bigger or smaller, and the <b>Pos X</b> (horizontal) and <b>Pos Y</b> (vertical) sliders to position them exactly where they belong. Once you are happy with the visual alignment, click the pink <b>Save</b> button to generate the configuration file and apply the changes globally.<br><br>
            </span>
            
        `,
        Character_Offset_3D_title: "3D Character Offset Editor",
        Character_Offset_3D_usage_text: `
            <span class="mark">
                Just like the 2D Offset Editor, the 3D version allows you to adjust the scale and position of your characters, but specifically for the 3D trial environment. In the trial, characters are placed in physical 3D slots (podiums), so setting the correct height and size is crucial to prevent them from looking like they are floating or sinking into the floor.<br><br>

                To use it, select a character from the dropdown. The editor will place them in a real 3D slot using their default 'idle' sprite. Adjust the <b>Scale</b> to make them fit the podium, and use <b>Pos X</b> and <b>Pos Y</b> to center them and plant their feet firmly. Once you hit <b>Save</b>, these values are added to the character's 'config.json' file alongside the 2D settings, ensuring they look perfect in both modes.<br><br>
            </span>
        `,
        Scene2D_text: 
        `
        <span class="mark">
        The 2D scene, also known as the Intro, is where you plan the context for the story you want to tell. In this mode, it's similar to Danganronpa, where you tell a story in a 2D visual novel environment. The difference is that you have all the evidence from the start, so you'll have to make the story fit with the Bullets of Truth you've added. The limitation is your imagination; you can pretend you never had any evidence, but you gradually acquire it. How you tell the story is what matters. You have a ridiculous number of tools to make that story the best it can be, though obviously, those tools are limited by what the original Danganronpa can do.<br><br>
                        
                            
        </span>
        `,
        Scene2D_title: "2D Scene",
        CH_Expressions_title: "Character Expressions",
        functions_scene_title: "how to use functions in the scene",
        functions_scene_text:
        `
        <span class="mark">
            (Currently limited to 2D only in beta 1.0)
            This is used in conjunction with the custom script. It works by using '!' at the beginning of the line to write the method yourself. This can be used for very specific tasks, but it also allows you to call functions that already exist because they are loaded into the scene you are in. For example, in the 3D scene,<br><br>

            <code class="inline-code">! <span class="c-keyword"> CharacterScript</span>.<span class="c-method">Health_loss</span>(life: <span class="c-class">int</span> = <span class="c-number">15</span>)</code><br><br>

                <br><br>
                means you can also remove or even add life. That's its usefulness.
        </span>
        `,
        how_to_read_title: "Como leer la documentacion",
        how_to_read_text: `
            <span class="mark">
                When you look at the event sections, you will see lines that look like programming code. It's just a specific format to tell the engine exactly what to do. Here is a breakdown of how to read them:<br><br>

                <b>The Dot (.)</b><br>
                You will often see things like <code class="inline-code"><span class="c-class">CharacterScript</span>.<span class="c-method">Change_bg</span></code>. The first word (CharacterScript, GlobalSound, CharacterList) is the engine's internal manager. The dot ( . ) connects it to the specific action you want to execute.<br><br>

                <b>The Parentheses ( )</b><br>
                These contain the <b>Parameters</b> (the specific details the action needs to work). If an action doesn't need details, the parentheses will be empty <code class="inline-code">()</code>. If it does, you must put the values inside them.<br><br>

                <b>Parameters & Data Types</b><br>
                Inside the parentheses, the documentation tells you what kind of data to insert:
                <br>
                - <b>String:</b> Means text. You <b>must</b> write your value inside quotation marks. Example: <code class="inline-code"><span class="c-string">"Chiaki"</span></code> or <code class="inline-code"><span class="c-string">"Idle"</span></code>.<br>
                - <b>Int or Float:</b> Means numbers (Int is a whole number, Float is a decimal). Do not use quotation marks. Example: <code class="inline-code"><span class="c-number">50</span></code> or <code class="inline-code"><span class="c-number">1.5</span></code>.<br><br>

                <b>Default Values (=)</b><br>
                If a parameter has an equals sign (e.g., <code class="inline-code">FOV : <span class="c-class">Int</span> = <span class="c-number">50</span></code>), it means this parameter is <b>optional</b>. If you just leave it empty, the engine will automatically assume it is 50. You only need to write a number if you want a different result.<br><br>
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
        sub_shared_usage_2D: "Uso del editor de offset en 2D",
        sub_shared_usage_3D: "Uso del editor de offset en 3D",
        sub_custom_avoid: "Lo que debes evitar",
        nav_offset: "Editor de Personajes",
        sub_offset_what: "¿Que es el Editor de Personajes?",
        nav_scene: "Usar funciones en la escena",
        sub_scene_how: "Como funciona esto",
        scene2d_btn: "Escena 2D",
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
        text_shared_voice: `
            <span class="mark">
                En el panel de creación de diálogos, puedes seleccionar un clip de voz específico para el personaje. Estas voces se obtienen automáticamente de la carpeta 'Voices' asignada al personaje en el roster. Se reproducirán exactamente cuando comience la línea de diálogo del personaje.<br><br>
            </span>
            <img src="assets/examples/voice2d.png" alt="" width="50%" height="50%"><br><br>
        `,
        text_shared_snd: `
            <span class="mark">
                De manera similar a las voces, puedes asignar efectos de sonido (SFX) a una línea de diálogo. Esto se usa típicamente para sonidos de impacto, golpes en el escritorio o ruidos específicos de texto para darle más impacto a la escena.<br><br>
            </span>
            <img src="assets/examples/sound2d.png" alt="" width="50%" height="50%"><br><br>
        `,
        text_shared_ba: `
            <span class="mark">
                Notarás un interruptor (casilla de verificación) junto a Sonidos y Escenas de Acción. Por defecto (desmarcado), el sonido o acción se reproducirá <b>antes</b> de que aparezca el texto del diálogo. Si marcas la casilla, el efecto se ejecutará <b>después</b> de que la línea de diálogo se haya dicho por completo y antes de pasar al siguiente bloque.<br><br>
            </span>
            <img src="assets/examples/beforeafter2d.png" alt="" width="50%" height="50%"><br><br>
        `,
        text_shared_act: `
            <span class="mark">
                Puedes añadir múltiples filas de acción a un solo bloque de diálogo usando el botón "add action scene". Esto te permite acumular efectos visuales como Sacudidas de Pantalla, Destellos, Fundidos o Esperas simultáneamente con la línea de diálogo.<br><br>
            </span>
            <img src="assets/examples/sceneaction2d.png" alt="" width="50%" height="50%"><br><br>
        `,
        text_shared_mem: `
            <span class="mark">
                Los bloques de memoria te permiten crear líneas de tiempo aisladas, perfectas para flashbacks o descripciones de evidencia. Usa el botón del evento 'Memory' para crear un bloque de Inicio y Fin de Memoria con un ID único. Cualquier cosa colocada adentro estará oculta del flujo principal. Para activarlo, usa el botón 'Call' para insertar un bloque de Llamada de Memoria en tu línea de tiempo principal. Adicionalmente, hay un botón para cambiar el modo de vista de memoria al flujo de vista normal.<br><br>
            </span>
            <img src="assets/examples/Memory2d.png" alt="" width="50%" height="50%"><br><br>
        `,
        text_shared_bg: `
            <span class="mark">
                Usando el bloque de evento 'Change Background', puedes cambiar el fondo del entorno 2D. Puedes usar los fondos predeterminados de Danganronpa o subir tus propias imágenes .png/.jpg personalizadas directamente a través del editor.<br><br>
            </span>
            <img src="assets/examples/bg2d.png" alt="" width="50%" height="50%"><br><br>
        `,
        text_shared_song: `
            <span class="mark">
                El bloque de evento 'Change Music' te permite cambiar la música de fondo. La pista seleccionada se reproducirá en bucle automáticamente hasta que la detengas o la cambies por otra canción.<br><br>
            </span>
            <img src="assets/examples/music2d.png" alt="" width="50%" height="50%"><br><br>
        `,
        text_shared_court: `
            <span class="mark">
                El bloque de evento 'Show 3D Court' alterna el entorno 3D del tribunal. Cuando se establece en SHOW (Mostrar), oculta el fondo 2D y muestra la sala de juicio 3D detrás de tus personajes 2D. Establecerlo en HIDE (Ocultar) lo revierte al fondo 2D estándar.<br><br>
            </span>
            <img src="assets/examples/3dcourt2d.png" alt="" width="50%" height="50%"><br><br>
        `,
        text_shared_img: `
            <span class="mark">
                El bloque de evento 'Set Image' te permite mostrar una imagen estática personalizada superpuesta en la pantalla, lo cual es extremadamente útil para mostrar evidencia, pistas o recortes (cut-ins). El editor también proporciona un botón específico de 'Remove Image' (Quitar Imagen) para borrarla de la pantalla.<br><br>
            </span>
            <img src="assets/examples/setimage2d.png" alt="" width="50%" height="50%"><br><br>
        `,
        text_shared_vid: `
            <span class="mark">
                Usando el bloque de evento 'Set Video', puedes reproducir cinemáticas de video completas sobre tu juego. Ten en cuenta que, debido a limitaciones del motor, los videos deben estar en formato .ogv para ser reconocidos.<br><br>
            </span>
            <img src="assets/examples/video2d.png" alt="" width="50%" height="50%"><br><br>
        `,
        text_shared_end: `
            <span class="mark">
                El bloque de evento 'End Chapter Dialogue' actúa como un separador visual. Cualquier diálogo o acción que se coloque debajo de este bloque será automáticamente separado y compilado como la secuencia final del capítulo.<br><br>
            </span>
        `,
        custom_script_title: "¿Qué es un Script Personalizado?",
        custom_script_text: `
            <span class="mark">
                <span class="warning">ADVERTENCIA: Debes tener cuidado al usar estos eventos; distinguen entre mayúsculas y minúsculas, y cualquier error tipográfico ciertamente causará un cierre inesperado (crash).</span><br>

                En la sección de eventos de custom script (scripts personalizados), existe lo que se llama un 'bloque personalizado' (custom block). Es solo un bloque normal, pero la diferencia es que no añades las acciones a través del editor visual; las añades a través de código (consulta los Términos de Eventos para más información). Por ejemplo, gracias al uso de CharacterScript, puedes llamar cada función por separado y combinarlas para crear un evento específico en el editor 2D.<br><br>

                Un punto importante es que, para facilitar su uso, siempre que escribas una función (esto solo aplica a la beta 1.0), se escribirá 'do CharacterScript' automáticamente antes de tu código. La única excepción es cuando llamas a la función 'GlobalSound'.<br><br>
                
                Si escribes dos puntos ' : ' en el medio de una línea de texto, el editor lo interpreta como un diálogo de personaje, por ejemplo, 'Hajime: Hola'.<br><br>
                
                Si escribes un signo de exclamación ' ! ' al principio de la línea, tendrás que escribir manualmente la acción que quieres ejecutar, por ejemplo, '! Script.Method()'. Te darás cuenta de que esta es la forma más básica y primitiva de programar en el editor, pero se puede usar para cosas muy específicas y para ejecutar funciones que solo existen en la escena actual (consulta "Usar funciones en la escena" para más información).
            </span>
            <img src="assets/examples/custom_script.png" alt="" width="50%" height="50%"><br><br>
        `,
        custom_script_usage_title: "Uso",
        custom_script_usage_text: `
            <span class="mark">
                <span class="warning">ADVERTENCIA: Debes tener cuidado al usar estos eventos; distinguen entre mayúsculas y minúsculas, y cualquier error tipográfico ciertamente causará un cierre inesperado (crash).</span><br>

                Las funciones que no usan ! simplemente están ejecutando CharacterScript, y para generar el texto de diálogo, simplemente escribe el nombre de tu personaje seguido de : y el texto que quieres que diga (Consulta los Términos de Eventos para obtener información sobre las funciones llamables).<br><br>
            </span>
            <img src="assets/examples/scripting2.png" alt="" width="50%" height="50%"><br><br>
        `,
        Character_Editor_title: "¿Qué es el Editor de Personajes?",
        Character_Editor_text: `
            <span class="mark">
                El Editor de Personajes es una herramienta visual integrada que te permite gestionar el elenco de tu juicio de Danganronpa. Con esta herramienta, puedes explorar los personajes que ya vienen incluidos en el juego base, añadirles nuevos sprites (expresiones) personalizados, o crear personajes originales completamente nuevos para tu mod específico. Se encarga automáticamente de crear las carpetas necesarias (como la carpeta 'Voices') e importar tus imágenes de forma segura para que estén listas para usarse en las escenas 2D y 3D.<br><br>
            </span>
        `,
        Character_Editor_usage_title: "Uso",
        Character_Editor_usage_text: `
            <span class="mark">
                La interfaz está dividida en dos paneles principales:<br><br>
                
                <b>El Panel Izquierdo:</b> Aquí puedes navegar entre 'Existing Characters' (el elenco del juego base) y 'Your Characters' (personajes personalizados creados para tu mod). Puedes usar la barra de búsqueda para encontrar fácilmente a un personaje específico o hacer clic en el botón '+ Create New Character' en la parte inferior para empezar desde cero.<br><br>
                
                <b>El Panel Derecho (Editor):</b> Una vez que seleccionas o creas un personaje, este panel se activa. Puedes usar el botón '+ Add sprite' para seleccionar imágenes .png o .jpg desde tu computadora. La lista de sprites mostrará todas las expresiones que el personaje tiene actualmente (marcadas como EXISTING) y las nuevas que estás añadiendo. Puedes hacer clic en cualquier sprite para ver cómo luce en la ventana de 'Preview' (Vista previa). Finalmente, presiona el botón de confirmación en la parte inferior para guardar tus cambios e importar los sprites.<br><br>
            </span>
            
        `,
        Character_Offset_title: "¿Que es el Editor de Offset 2D?",
        Character_Offset_text: `
            <span class="mark">
                El Editor de Offset de Personajes 2D es una herramienta visual diseñada para alinear y escalar los sprites de tus personajes correctamente. Dado que las imágenes personalizadas pueden variar mucho en resolución y espacios en blanco, es posible que no se centren perfectamente en la pantalla por defecto. Esta herramienta te permite ajustar su posición y tamaño exactos para que luzcan impecables en las escenas de novela visual. Todos los ajustes se guardan automáticamente en un archivo 'config.json' dentro de la carpeta específica del personaje.<br><br>
            </span>
        `,
        Character_Offset_usage_text: `
            <span class="mark">
                Para usar esta herramienta, simplemente selecciona un personaje del menú desplegable en el panel izquierdo. El editor cargará automáticamente su sprite 'idle' predeterminado en el fondo de referencia visual. Usa el control deslizante <b>Scale</b> (Escala) para hacer al personaje más grande o más pequeño, y los controles <b>Pos X</b> (horizontal) y <b>Pos Y</b> (vertical) para ubicarlo exactamente donde pertenece. Una vez que estés satisfecho con la alineación visual, haz clic en el botón rosa de <b>Save</b> (Guardar) para generar el archivo de configuración y aplicar los cambios de forma global.<br><br>
            </span>
            
        `,
        Character_Offset_3D_title: "Editor de Desplazamiento 3D (3D Offset)",
        Character_Offset_3D_usage_text: `
            <span class="mark">
                Al igual que el editor 2D, la versión 3D te permite ajustar la escala y posición de tus personajes, pero específicamente para el entorno del juicio en 3D. En el juicio, los personajes se colocan en espacios físicos en 3D (estrados), por lo que configurar la altura y el tamaño correctos es crucial para evitar que parezca que están flotando o hundiéndose en el suelo.<br><br>

                Para usarlo, selecciona un personaje del menú desplegable. El editor lo colocará en un estrado 3D real usando su sprite 'idle' por defecto. Ajusta la <b>Scale</b> (Escala) para que encaje en el estrado, y usa <b>Pos X</b> y <b>Pos Y</b> para centrarlo y asentar sus pies firmemente. Una vez que presiones <b>Save</b> (Guardar), estos valores se añadirán al archivo 'config.json' del personaje junto con la configuración 2D, asegurando que se vean perfectos en ambos modos sin que uno afecte al otro.<br><br>
            </span>
        `,
        Scene2D_text: 
        `
        <span class="mark">
        La escena 2D, también conocida como Introducción, es donde planificas el contexto de la historia que quieres contar. En este modo, es similar a Danganronpa, donde narras una historia en un entorno de novela visual 2D. La diferencia es que tienes todas las pruebas desde el principio, así que tendrás que adaptar la historia a las Pruebas de la Verdad que has añadido. El límite es tu imaginación; puedes fingir que nunca tuviste ninguna prueba, pero la vas adquiriendo gradualmente. Lo que importa es cómo cuentas la historia. Tienes una cantidad increíble de herramientas para hacer que esa historia sea lo mejor posible, aunque, obviamente, esas herramientas están limitadas por lo que el Danganronpa original puede hacer.<br><br>       
                            
         </span>
        `,
        Scene2D_title: "Escena 2D",
        CH_Expressions_title: "Expresiones de Personajes",
        functions_scene_title: "Como usar funciones en la escena",
        functions_scene_text: 
        `
        <span class="mark">

        (Actualmente limitado a 2D solo en la versión beta 1.0)

        Esto se usa junto con el script personalizado. Funciona usando '!' al principio de la línea para escribir el método manualmente. Se puede usar para tareas muy específicas, pero también permite llamar a funciones que ya existen porque están cargadas en la escena actual. Por ejemplo, en la escena 3D:<br><br>

        <code class="inline-code">! <span class="c-keyword"> CharacterScript</span>.<span class="c-method">Health_loss</span>(life: <span class="c-class">int</span> = <span class="c-number">15</span>)</code><br><br>

        <br><br>

        Esto significa que también puedes quitar o incluso añadir vida. Esa es su utilidad.

        </span>
        `,
        how_to_read_title: "Como leer la documentación",
        how_to_read_text: `
            <span class="mark">
                Cuando mires las secciones de eventos, verás líneas que parecen código de programación. Es solo un formato específico para decirle al motor exactamente qué hacer. Aquí tienes un desglose de cómo leerlas:<br><br>

                <b>El Punto (.)</b><br>
                A menudo verás cosas como <code class="inline-code"><span class="c-class">CharacterScript</span>.<span class="c-method">Change_bg</span></code>. La primera palabra (CharacterScript, GlobalSound, CharacterList) es el administrador interno del motor. El punto ( . ) lo conecta con la acción específica que quieres ejecutar.<br><br>

                <b>Los Paréntesis ( )</b><br>
                Estos contienen los <b>Parámetros</b> (los detalles específicos que la acción necesita para funcionar). Si una acción no necesita detalles, los paréntesis estarán vacíos <code class="inline-code">()</code>. Si los necesita, debes poner los valores dentro de ellos.<br><br>

                <b>Parámetros y Tipos de Datos</b><br>
                Dentro de los paréntesis, la documentación te dice qué tipo de datos debes insertar:
                <br>
                - <b>String:</b> Significa texto. <b>Debes</b> escribir tu valor entre comillas. Ejemplo: <code class="inline-code"><span class="c-string">"Chiaki"</span></code> o <code class="inline-code"><span class="c-string">"Idle"</span></code>.<br>
                - <b>Int o Float:</b> Significa números (Int es un número entero, Float es un decimal). No uses comillas. Ejemplo: <code class="inline-code"><span class="c-number">50</span></code> o <code class="inline-code"><span class="c-number">1.5</span></code>.<br><br>

                <b>Valores Predeterminados (=)</b><br>
                Si un parámetro tiene un signo de igual (ej. <code class="inline-code">FOV : <span class="c-class">Int</span> = <span class="c-number">50</span></code>), significa que este parámetro es <b>opcional</b>. Si simplemente lo dejas vacío, el motor asumirá automáticamente que es 50. Solo necesitas escribir un número si quieres un resultado diferente.<br><br>
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