namespace Template {

    export async function Wald(): ƒS.SceneReturn {

        let animation = {
            fromLeftToRght: {
                start: { translation: ƒS.positionPercent(40, 100) },
                end: { translation: ƒS.positionPercent(90, 100) },
                duration: 2,
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
            }
        }

        let text = {
            Narrator: {
                T0000: "Du kommst in dem Wald an und hörst plötzlich jemand reden",
                T0001: "in der ganzen hecktik  verlierst du das Funkgerät von Tane"
            },
            Protagonist: {
                T0000: "Das ist nicht gut, ich sollte schnell handeln, aber was mache ich nur?",
                T0001: "Ach sie werden kein Problem sein. Vielleicht werden sie sogar für etwas Unterhaltung sorgen.",
            },
            Tane: {
                T0000: "Funkgerät: 'Hi " + dataForSave.Protagonist.name + ", wir haben ein paar Informationen bekommen, wo sich die Hacker befinden könnten. Wir machen uns gleich auf dem weg zum Wald und melden uns dann wieder.'",
                T0001: "... ach und eine Gruppe hat sich schon auf dem Weg dahin gemacht.",
            },
            Rowan: {
                T0000: "Funkgerät: 'Hey Boss, wir haben ein Problem. Es gibt Störungen, manche Spieler können sich erfolgreich abmelden'"
            }
        }

        ƒS.Sound.fade(sound.Forest, 0.7, 4, false);
        await ƒS.Location.show(locations.Wald);
        await ƒS.update(2, "Images/Locations/Transition.jpg");

        ƒS.Text.print(text.Narrator.T0000);
        ƒS.Sound.fade(sound.Radio, 0.5, 2, false);
        await ƒS.Character.animate(characters.Items, characters.Items.pose.funk, animation.shakyIn);
        await ƒS.Character.animate(characters.Items, characters.Items.pose.funk, animation.shakyOut);
        await ƒS.Character.animate(characters.Items, characters.Items.pose.funk, animation.shakyIn);
        await ƒS.Sound.fade(sound.Radio, 0, 0, false);
        await ƒS.Speech.tell(characters.Tane, text.Tane.T0000);
        await ƒS.Speech.tell(characters.Tane, text.Tane.T0001);
        await ƒS.Character.hide(characters.Items);
        await ƒS.update(1);

        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(40, 100));
        await ƒS.update(1);

        await ƒS.Character.hide(characters.Protagonist);
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.talking, ƒS.positionPercent(40, 100));
        await ƒS.update();

        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0000);
        await ƒS.Character.hide(characters.Protagonist);
        await ƒS.Character.animate(characters.Protagonist, characters.Protagonist.pose.mad, animation.fromLeftToRght);
        await ƒS.update();

        let choice = {
            choice1: "Truppe ignorieren und zum Portal gehen",
            choice2: "Truppe suchen"
        };

        let answer = await ƒS.Menu.getInput(choice, "choice");
        switch (answer) {
            case choice.choice1:
                await ƒS.Character.hide(characters.Protagonist);
                await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.talking, ƒS.positionPercent(90, 100));
                await ƒS.update();

                await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0001);
                await ƒS.Character.hide(characters.Protagonist);
                await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(90, 100));
                await ƒS.update();

                ƒS.Sound.fade(sound.Radio, 0.5, 2, false);
                await ƒS.Character.animate(characters.Items, characters.Items.pose.funk, animation.shakyIn);
                await ƒS.Character.animate(characters.Items, characters.Items.pose.funk, animation.shakyOut);
                await ƒS.Character.animate(characters.Items, characters.Items.pose.funk, animation.shakyIn);
                await ƒS.Sound.fade(sound.Radio, 0, 0, false);
                await ƒS.Speech.tell(characters.Unknown, text.Rowan.T0000);
                await ƒS.Speech.hide();
                await ƒS.Character.hideAll();
                await ƒS.update(1);
                await ƒS.Sound.fade(sound.Town, 0, 0, false);

                return "Portal_Bad";
            case choice.choice2:
                await ƒS.Speech.hide();
                await ƒS.Character.hideAll();
                await ƒS.update(1);

                ƒS.Sound.fade(sound.Radio, 0.5, 2, false);
                await ƒS.Sound.fade(sound.Forest, 0, 0, false);

                return "Höhle";
            default:
                break;
        }
    }
}