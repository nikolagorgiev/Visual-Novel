namespace Template {

    export async function Höhle(): ƒS.SceneReturn {

        let animation = {
            leftIn: {
                start: { translation: ƒS.positionPercent(-10, 100) },
                end: { translation: ƒS.positionPercent(40, 100) },
                duration: 1,
                playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
            },
            shakyIn: {
                start: { scaling: new ƒS.Position(0.5, 0.5) },
                end: { scaling: new ƒS.Position(1, 1) },
                duration: 0.4,
                playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
            },
            shakyOut: {
                start: { scaling: new ƒS.Position(1, 1) },
                end: { scaling: new ƒS.Position(0.5, 0.5) },
                duration: 0.4,
                playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
            },
            lowZoomOut: {
                start: { translation: ƒS.positionPercent(73, 55), scaling: new ƒS.Position(0.1, 0.1) },
                end: { translation: ƒS.positionPercent(58, 55), scaling: new ƒS.Position(0.3, 0.3) },
                duration: 0.6,
                playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
            },
            zoomOut: {
                start: { translation: ƒS.positionPercent(66, 73), scaling: new ƒS.Position(0.3, 0.3) },
                end: { translation: ƒS.positionPercent(50, 50), scaling: new ƒS.Position(30, 30) },
                duration: 1,
                playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
            },
            shackyBackgroundUp: {
                start: { translation: ƒS.positionPercent(52, 52) },
                end: { translation: ƒS.positionPercent(50, 50) },
                duration: 0.2,
                playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
            },
            shackyBackgroundDown: {
                start: { translation: ƒS.positionPercent(50, 50) },
                end: { translation: ƒS.positionPercent(52, 52) },
                duration: 0.2,
                playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
            },
            takeHammer: {
                start: { translation: ƒS.positionPercent(50, 120), rotation: -50, scaling: new ƒS.Position(1, 1) },
                end: { translation: ƒS.positionPercent(50, 50), rotation: 10, scaling: new ƒS.Position(0.6, 0.6) },
                duration: 0.5,
                playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
            }
        }

        let text = {
            Narrator: {
                T0000: "Rennend verlässt du den Wald und siehst frische Fußspuren",
                T0001: "Die Fußspuren führen zu eine Höhle die man in der Ferne sehen kann.",
                T0002: "Umso näher du der Höhle kommst, desto lauter hörst du Stimmen.",
                T0003: "Du Holst dein Hammer raus und schlägst ein paar mal kräftig gegen die Wand, bis der Eingang der Höhle zusammenstürzt.",
            },
            Protagonist: {
                T0000: "Ich höre Jemand in der Höhle, das muss die Truppe sein!",
                T0001: "Das ist meine Chance sie auszulöschen",
                T0002: "Ein Problem weniger, ich muss mich jetzt aber beeilen",
                T0003: "Hallo? Seit ihr die Truppe, die den Hackern auf den Grund gehen?",
                T0004: "Ich bin SPIELER und wurde geschickt euch zu unterstütz...",
            },
            Truppe: {
                T0000: "Ja die sind wir, wer will das wissen?",
                T0001: "Da will uns jemand austricksen, schnappt ihn euch!!",
            },
            Rowan: {
                T0000: "Funkgerät: 'Hey Boss, wir haben bis jetzt alles unter Kontrolle. Aber ich weiß nicht wie lange es noch so sein wird'",
                T0001: "Funkgerät: 'Hey Boss, wir haben ein Problem. Es gibt Störungen, manche Spieler können sich erfolgreich abmelden'"
            }
        }

        await ƒS.Location.show(locations.Hoehle);
        await ƒS.update(1);
        ƒS.Sound.fade(sound.Running, 0.5, 0.4, false);
        await ƒS.Text.print(text.Narrator.T0000);
        await ƒS.Text.print(text.Narrator.T0001);
        await ƒS.Text.print(text.Narrator.T0002);
        await ƒS.Sound.fade(sound.Running, 0, 0, false);
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(40, 100));
        await ƒS.update();

        await ƒS.Character.animate(characters.Protagonist, characters.Protagonist.pose.normal, animation.leftIn);
        await ƒS.Character.hide(characters.Protagonist);
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.talking, ƒS.positionPercent(40, 100));
        await ƒS.update();

        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0000);

        let choice = {
            choice1: "Höhle zum einstürzen bringen",
            choice2: "Die Truppe auf deine Seite ziehen"
        };

        let answer = await ƒS.Menu.getInput(choice, "choice");
        switch (answer) {
            case choice.choice1:
                await ƒS.Character.hide(characters.Protagonist);
                await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.talking, ƒS.positionPercent(40, 100));
                await ƒS.update();

                await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0001);
                await ƒS.Character.hide(characters.Protagonist);
                await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(40, 100));
                await ƒS.update();

                await ƒS.Text.print(text.Narrator.T0003);
                await ƒS.Character.animate(characters.Items, characters.Items.pose.hammer, animation.takeHammer);
                ƒS.Sound.fade(sound.Hammer, 0.5, 0.4, false);
                await ƒS.Character.animate(characters.Location, characters.Location.pose.hoehle, animation.shackyBackgroundUp);
                await ƒS.Character.animate(characters.Location, characters.Location.pose.hoehle, animation.shackyBackgroundDown);
                await ƒS.Character.animate(characters.Location, characters.Location.pose.hoehle, animation.shackyBackgroundUp);
                await ƒS.Character.animate(characters.Location, characters.Location.pose.hoehle, animation.shackyBackgroundDown);
                ƒS.Character.hide(characters.Location);
                await ƒS.Character.hide(characters.Items);
                await ƒS.update(1);

                await ƒS.Character.hide(characters.Protagonist);
                await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.talking, ƒS.positionPercent(40, 100));
                await ƒS.update();

                await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0002);
                await ƒS.Character.hide(characters.Protagonist);
                await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(40, 100));
                await ƒS.update();

                ƒS.Sound.fade(sound.Radio, 0.5, 0.5, false);
                await ƒS.Character.animate(characters.Items, characters.Items.pose.funk, animation.shakyIn);
                await ƒS.Character.animate(characters.Items, characters.Items.pose.funk, animation.shakyOut);
                await ƒS.Character.animate(characters.Items, characters.Items.pose.funk, animation.shakyIn);
                await ƒS.Sound.fade(sound.Radio, 0, 0, false);
                await ƒS.Speech.tell(characters.Unknown, text.Rowan.T0000);
                await ƒS.Speech.hide();
                await ƒS.Character.hideAll();
                await ƒS.update();
                return "Portal_Good"

            case choice.choice2:
                await ƒS.Character.hide(characters.Protagonist);
                await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.talking, ƒS.positionPercent(40, 100));
                await ƒS.update();

                await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0003);
                await ƒS.Character.hide(characters.Protagonist);
                await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(40, 100));
                await ƒS.update();

                await ƒS.Character.animate(characters.Unknown, characters.Unknown.pose.normal, animation.lowZoomOut);
                await ƒS.Speech.tell(characters.Unknown, text.Truppe.T0000);
                await ƒS.Character.hide(characters.Protagonist);
                await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.talking, ƒS.positionPercent(40, 100));
                await ƒS.update();

                await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0004);
                await ƒS.Character.hide(characters.Protagonist);
                await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(40, 100));
                await ƒS.update();

                ƒS.Sound.fade(sound.Radio, 0.5, 0.5, false);
                await ƒS.Character.animate(characters.Items, characters.Items.pose.funk, animation.shakyIn);
                await ƒS.Character.animate(characters.Items, characters.Items.pose.funk, animation.shakyOut);
                await ƒS.Character.animate(characters.Items, characters.Items.pose.funk, animation.shakyIn);
                await ƒS.Sound.fade(sound.Radio, 0, 0, false);
                await ƒS.Speech.tell(characters.Unknown, text.Rowan.T0001);
                await ƒS.Speech.tell(characters.Unknown, text.Truppe.T0001);
                await ƒS.Character.hide(characters.Protagonist);
                await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.shocked, ƒS.positionPercent(40, 100));
                await ƒS.update();

                await ƒS.Character.animate(characters.Unknown, characters.Unknown.pose.normal, animation.zoomOut);
                await ƒS.Speech.hide();
                await ƒS.Character.hideAll();
                await ƒS.update(1);

                return "Credits";
            default:
                break;
        }
    }
}