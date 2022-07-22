namespace Template {

    export async function Dorf_Oscar(): ƒS.SceneReturn {

        let animation = {
            rightOut: {
                start: { translation: ƒS.positionPercent(40, 100) },
                end: { translation: ƒS.positionPercent(120, 100) },
                duration: 3,
                playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
            },
            rightToLeft: {
                start: { translation: ƒS.positionPercent(60, 100) },
                end: { translation: ƒS.positionPercent(40, 100) },
                duration: 2,
                playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
            },
            leftToRight: {
                start: { translation: ƒS.positionPercent(40, 100) },
                end: { translation: ƒS.positionPercent(60, 100) },
                duration: 2,
                playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
            },
            showOscar: {
                start: { translation: ƒS.positionPercent(95, 100) },
                end: { translation: ƒS.positionPercent(89, 100) },
                duration: 0.5,
                playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
            }
        }

        let text = {
            Narrator: {
                T0000: "Du hörst ein rauschen hinter einem Baum",
            },
            Protagonist: {
                T0000: "Hey du!! Komm raus!!",
                T0001: "Ich mache dir nichts, keine Angst. Ich spiele nur ein Rollenspiel mit meinem Freund.",
                T0002: "Du erwähntest eine Truppe.. was meinst du damit?",
                T0003: "Achso... Ja ich habe auch davon gehört. Danke!",
                T0004: "Haben dir deine Eltern nicht beigebracht, dass man fremde Leute nicht belauschen sollte?",
                T0005: "Sag mir was du gehört hast, sonst bist du tot!",
                T0006: "Du hast Glück, dass ich es eilig habe. Diesmal kommst du davon.",
                T0007: "Es war bestimmt nur ein Tier."
            },
            Oscar: {
                T0000: "... I.. Ich habe nicht gelauscht! Ich weiß nichts von der Truppe und ich bin nicht Oscar!!! Hilfee!",
                T0001: "Ah dann bin ich beruhigt. ",
                T0002: "Ach ja, eine Truppe hat sich auf dem Weg gemacht, um die Hacker zu suchen. Sie werden es schaffen!",
                T0003: "Ni... Nichts... Ich habe nichts gehört. Ich spiele nur verstecken."
            },
        }

        ƒS.Sound.fade(sound.Bush, 0.5, 2, false);
        await ƒS.Text.print(text.Narrator.T0000);
        await ƒS.Character.show(characters.Items, characters.Items.pose.tree, ƒS.positionPercent(90, 50));
        await ƒS.update(1);

        let choice = {
            choice1: "Baum untersuchen",
            choice2: "Ignorieren"
        };

        let answer = await ƒS.Menu.getInput(choice, "choice");
        switch (answer) {

            case choice.choice1:

                await ƒS.Character.hide(characters.Protagonist);
                await ƒS.update();

                await ƒS.Character.animate(characters.Protagonist, characters.Protagonist.pose.normal, animation.leftToRight);
                await ƒS.Character.hide(characters.Protagonist);
                await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.talking, ƒS.positionPercent(60, 100));
                await ƒS.update();

                await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0000);
                await ƒS.Character.hide(characters.Protagonist);
                await ƒS.update();

                ƒS.Character.animate(characters.Oscar, characters.Oscar.pose.scared, animation.showOscar);
                await ƒS.Character.animate(characters.Protagonist, characters.Protagonist.pose.normal, animation.rightToLeft);
                await ƒS.Speech.tell(characters.Oscar, text.Oscar.T0000);

                choice = {
                    choice1: "Beruhigend ansprechen",
                    choice2: "Drohen"
                };
                let answer = await ƒS.Menu.getInput(choice, "choice");
                switch (answer) {

                    case choice.choice1:
                        await ƒS.Character.hide(characters.Protagonist);
                        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.happy, ƒS.positionPercent(40, 100));
                        await ƒS.update();

                        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0001);
                        await ƒS.Character.hide(characters.Protagonist);
                        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.smile, ƒS.positionPercent(40, 100));
                        await ƒS.update();

                        await ƒS.Character.hide(characters.Oscar);
                        await ƒS.Character.show(characters.Oscar, characters.Oscar.pose.normal, ƒS.positionPercent(89, 100));
                        await ƒS.update();


                        await ƒS.Speech.tell(characters.Oscar, text.Oscar.T0001);
                        await ƒS.Character.hide(characters.Protagonist);
                        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.happy, ƒS.positionPercent(40, 100));
                        await ƒS.update();

                        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0002);
                        await ƒS.Character.hide(characters.Protagonist);
                        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.smile, ƒS.positionPercent(40, 100));
                        await ƒS.update();

                        await ƒS.Speech.tell(characters.Oscar, text.Oscar.T0002);
                        await ƒS.Character.hide(characters.Protagonist);
                        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.happy, ƒS.positionPercent(40, 100));
                        await ƒS.update();

                        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0003);
                        await ƒS.Character.hide(characters.Protagonist);
                        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.smile, ƒS.positionPercent(40, 100));
                        await ƒS.update();

                        await ƒS.Speech.hide();
                        await ƒS.Character.hideAll();
                        await ƒS.update(1);

                        return "Höhle";

                    case choice.choice2:
                        await ƒS.Character.hide(characters.Protagonist);
                        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.talking, ƒS.positionPercent(40, 100));
                        await ƒS.update();

                        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0004);
                        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0005);
                        await ƒS.Character.hide(characters.Protagonist);
                        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(40, 100));
                        await ƒS.update();

                        await ƒS.Speech.tell(characters.Unknown, text.Oscar.T0003);
                        await ƒS.Character.hide(characters.Protagonist);
                        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.mad, ƒS.positionPercent(40, 100));
                        await ƒS.update();

                        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0006);
                        await ƒS.Speech.hide();
                        await ƒS.Character.hideAll();
                        await ƒS.update(1);

                        return "Portal_Bad"
                }
                break;

            case choice.choice2:
                await ƒS.Character.hide(characters.Items);
                await ƒS.update();

                await ƒS.Character.hide(characters.Protagonist);
                await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.talking, ƒS.positionPercent(40, 100));
                await ƒS.update();

                await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0007);
                await ƒS.Character.hide(characters.Protagonist);
                await ƒS.update(1);

                await ƒS.Speech.hide();
                await ƒS.Character.hideAll();
                await ƒS.update();

                return "Portal_Bad"
        }

    }

}