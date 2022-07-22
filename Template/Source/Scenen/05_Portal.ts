namespace Template {
    export async function Portal_A(): ƒS.SceneReturn {

        let animation = {

            rightIn: {
                start: { translation: ƒS.positionPercent(120, 100) },
                end: { translation: ƒS.positionPercent(90, 100) },
                duration: 3,
                playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
            },
            rightToLeft: {
                start: { translation: ƒS.positionPercent(90, 100) },
                end: { translation: ƒS.positionPercent(-10, 100) },
                duration: 1,
                playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
            },
            rightInGroup: {
                start: { translation: ƒS.positionPercent(120, 70) },
                end: { translation: ƒS.positionPercent(37, 70) },
                duration: 2,
                playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
            }
        }

        let text = {
            Rowan: {
                T0000: "Das Portal lässt sich nicht schließen. Es gibt ein Störfaktor.",
                T0001: "Ja, aber das wird dir nicht gefallen.",
                T0002: "... Es ist die Willenskraft der Spieler. Wenn sie gebrochen ist, wird sich das Portal schließen."
            },
            Protagonist: {
                T0000: "Was ist hier los?",
                T0001: "Das ist nicht gut. Gibt es Vermutungen.",
                T0002: "Raus damit!",
                T0003: "Oh hallo Tane, ich habe dich nicht so schnell hier erwartet."
            },
            Tane: {
                T0000: "Ich bin auch nicht alleine hier. Ich will keine Erklärungen, sondern einfach nur raus von hier!",
                T0001: "Schnappt ihn euch!"
            },
            Unknown: {
                T0000: "HEY! Was macht ... " + dataForSave.Protagonist.name + "? Moment mal, steckst du da etwa dahinter?.",
                T0001: "Jaaaaaa!!"
            }
        }

        ƒS.Sound.fade(sound.Dramatic, 0.5, 110, true);

        await ƒS.Location.show(locations.Portal);
        await ƒS.update(3, "./Images/Locations/Transition1.jpg", 1);

        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.talking, ƒS.positionPercent(40, 100));
        await ƒS.update(1);

        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0000);
        await ƒS.Character.hide(characters.Protagonist);
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(40, 100));
        await ƒS.update();

        await ƒS.Speech.tell(characters.Rowan, text.Rowan.T0000);
        await ƒS.Character.show(characters.Rowan, characters.Rowan.pose.normal, ƒS.positionPercent(90, 100));
        await ƒS.update(1);

        await ƒS.Character.hide(characters.Protagonist);
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.talking, ƒS.positionPercent(40, 100));
        await ƒS.update();

        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0001);
        await ƒS.Character.hide(characters.Protagonist);
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(40, 100));
        await ƒS.update();

        await ƒS.Speech.tell(characters.Rowan, text.Rowan.T0001);
        await ƒS.Character.hide(characters.Protagonist);
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.talking, ƒS.positionPercent(40, 100));
        await ƒS.update();

        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0002);
        await ƒS.Character.hide(characters.Protagonist);
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(40, 100));
        await ƒS.update();

        await ƒS.Speech.tell(characters.Rowan, text.Rowan.T0002);
        await ƒS.Speech.tell(characters.Unknown, text.Unknown.T0000);

        await ƒS.Character.hide(characters.Protagonist);
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.mad, ƒS.positionPercent(40, 100));
        await ƒS.update();

        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0003);
        ƒS.Character.animate(characters.Rowan, characters.Rowan.pose.normal, animation.rightToLeft);
        await ƒS.Sound.fade(sound.Running, 0.5, 0.1, false);
        await ƒS.Character.hide(characters.Rowan);
        await ƒS.Sound.fade(sound.Running, 0, 0, false);
        await ƒS.update();

        await ƒS.Character.animate(characters.Tane, characters.Tane.pose.shocked, animation.rightIn);
        await ƒS.Character.hide(characters.Tane);
        await ƒS.Character.show(characters.Tane, characters.Tane.pose.talking, ƒS.positionPercent(90, 100));
        await ƒS.update();

        await ƒS.Speech.tell(characters.Tane, text.Tane.T0000);
        await ƒS.Speech.tell(characters.Tane, text.Tane.T0001);

        await ƒS.Character.hide(characters.Protagonist);
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.shocked, ƒS.positionPercent(40, 100));
        await ƒS.update();

        await ƒS.Character.animate(characters.Unknown, characters.Unknown.pose.normal, animation.rightInGroup);
        await ƒS.Sound.fade(sound.Running, 0.5, 0.1, false);
        await ƒS.Speech.hide();
        await ƒS.Character.hideAll();
        await ƒS.Sound.fade(sound.Running, 0, 0, false);
        await ƒS.update();

        await ƒS.Sound.fade(sound.Dramatic, 0, 0, false);

        return "Credits";
    }

    export async function Portal_B(): ƒS.SceneReturn {
        let animation = {

            rightIn: {
                start: { translation: ƒS.positionPercent(120, 100) },
                end: { translation: ƒS.positionPercent(90, 100) },
                duration: 3,
                playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
            },
            rightToLeft: {
                start: { translation: ƒS.positionPercent(90, 100) },
                end: { translation: ƒS.positionPercent(-10, 100) },
                duration: 1,
                playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
            }
        }

        let text = {
            Narrator: {
                T0000: "Und wenn sie nicht gestorben sind, stecken sie immernoch verzweifelt im Spiel fest",
            },
            Rowan: {
                T0000: "Ja Boss, es kann kaum besser sein.",
            },
            Protagonist: {
                T0000: "Ich bin wieder da und ich sehe es läuft alles nach Plan.",
                T0001: "Sie werden schon sehen was passiert, wenn die Spielsucht von einem das Leben übernimmt uhahahaha.",
                T0002: "Oh hallo Tane, ich habe dich nicht so schnell hier erwartet.",
                T0003: "Opfer sind immer notwendig, wenn man ein Ziel verfolgt. Und jetzt stehst du alleine hier. Was willst du tun?",
                T0004: "Du hast recht. Ich bin etwas zu weit gegangen. Aber ich kann nichts mehr rückgängig machen.",
                T0005: "Das wars mit euch!",
                T0006: "Das wars mit euch! Denkst du ich falle auf so eine Heuchlerei rein? SCHLIEßT DAS PORTAL!.",
                T0007: "... ich werde es ändern! Die ganzen Opfer sollen nicht umsonst gewesen sein.",
                T0008: "Deshalb gebe ich euch nochmal eine Chance mich aufzuhalten und viel spaß!! "
            },
            Tane: {
                T0000: dataForSave.Protagonist.name + "? Steckst du hinter dem ganzen? Warum nur?",
                T0001: "Warst du für die ganze Opfer verantwortlich? Und auch die Truppe die dich aufhalten sollte??",
                T0002: "Ich bitte dich!! Hör endlich auf. Draußen warten Familien auf uns! Wir sind doch alle Menschen, alle gleich.",
                T0003: "Das stimmt, aber es ist nicht zu spät die Zukunft zu ändern!"
            }
        }

        ƒS.Sound.fade(sound.Dramatic, 0.5, 110, true);
        await ƒS.Location.show(locations.Portal);
        await ƒS.update(3, "./Images/Locations/Transition1.jpg", 1);

        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.happy, ƒS.positionPercent(40, 100));
        await ƒS.update(1);

        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0000);
        await ƒS.Character.hide(characters.Protagonist);
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(40, 100));
        await ƒS.update();

        await ƒS.Character.show(characters.Rowan, characters.Rowan.pose.normal, ƒS.positionPercent(90, 100));
        await ƒS.update(1);

        await ƒS.Speech.tell(characters.Rowan, text.Rowan.T0000);
        await ƒS.Character.hide(characters.Protagonist);
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.talking, ƒS.positionPercent(40, 100));
        await ƒS.update();

        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0001);
        await ƒS.Character.hide(characters.Protagonist);
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(40, 100));
        await ƒS.update();

        ƒS.Character.animate(characters.Rowan, characters.Rowan.pose.normal, animation.rightToLeft);
        await ƒS.Sound.fade(sound.Running, 0.5, 0.1, false);
        await ƒS.Character.hide(characters.Rowan);
        await ƒS.Sound.fade(sound.Running, 0, 0, false);
        await ƒS.update();

        await ƒS.Character.animate(characters.Tane, characters.Tane.pose.shocked, animation.rightIn);
        await ƒS.Speech.tell(characters.Tane, text.Tane.T0000);
        await ƒS.Character.hide(characters.Tane);
        await ƒS.Character.show(characters.Tane, characters.Tane.pose.normal, ƒS.positionPercent(90, 100));
        await ƒS.update();

        await ƒS.Character.hide(characters.Protagonist);
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.talking, ƒS.positionPercent(40, 100));
        await ƒS.update();

        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0002);
        await ƒS.Character.hide(characters.Protagonist);
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(40, 100));
        await ƒS.update();

        await ƒS.Character.hide(characters.Tane);
        await ƒS.Character.show(characters.Tane, characters.Tane.pose.talking, ƒS.positionPercent(90, 100));
        await ƒS.update();

        await ƒS.Speech.tell(characters.Tane, text.Tane.T0001);
        await ƒS.Character.hide(characters.Tane);
        await ƒS.Character.show(characters.Tane, characters.Tane.pose.normal, ƒS.positionPercent(90, 100));
        await ƒS.update();

        await ƒS.Character.hide(characters.Protagonist);
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.talking, ƒS.positionPercent(40, 100));
        await ƒS.update();

        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0003);
        await ƒS.Character.hide(characters.Protagonist);
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(40, 100));
        await ƒS.update();

        await ƒS.Character.hide(characters.Tane);
        await ƒS.Character.show(characters.Tane, characters.Tane.pose.talking, ƒS.positionPercent(90, 100));
        await ƒS.update();

        await ƒS.Speech.tell(characters.Tane, text.Tane.T0002);
        await ƒS.Character.hide(characters.Tane);
        await ƒS.Character.show(characters.Tane, characters.Tane.pose.normal, ƒS.positionPercent(90, 100));
        await ƒS.update();



        let choice = {
            choice1: "Gnade Zeigen",
            choice2: "Portal schließen"
        };

        let answer = await ƒS.Menu.getInput(choice, "choice");
        switch (answer) {
            case choice.choice1:
                await ƒS.Character.hide(characters.Protagonist);
                await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.talking, ƒS.positionPercent(40, 100));
                await ƒS.update();

                await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0004);
                await ƒS.Character.hide(characters.Protagonist);
                await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(40, 100));
                await ƒS.update();

                await ƒS.Character.hide(characters.Tane);
                await ƒS.Character.show(characters.Tane, characters.Tane.pose.talking, ƒS.positionPercent(90, 100));
                await ƒS.update();

                await ƒS.Speech.tell(characters.Tane, text.Tane.T0003);
                await ƒS.Character.hide(characters.Tane);
                await ƒS.Character.show(characters.Tane, characters.Tane.pose.normal, ƒS.positionPercent(90, 100));
                await ƒS.update();

                await ƒS.Character.hide(characters.Protagonist);
                await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.happy, ƒS.positionPercent(40, 100));
                await ƒS.update();

                await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0007);
                await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0008);

                await ƒS.Speech.hide();
                await ƒS.Character.hideAll();
                await ƒS.update(1);

                await ƒS.Sound.fade(sound.Dramatic, 0, 0, false);

                return "again";

            case choice.choice2:

                await ƒS.Character.hide(characters.Protagonist);
                await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.mad, ƒS.positionPercent(40, 100));
                await ƒS.update();

                await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0005);
                await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0006);

                await ƒS.Speech.hide();
                await ƒS.Character.hideAll();
                await ƒS.update(1);

                await ƒS.Text.print(text.Narrator.T0000);
                break;
            default:
                break;
        }
        await ƒS.Sound.fade(sound.Dramatic, 0, 0, false);
        return "Credits";
    }
}