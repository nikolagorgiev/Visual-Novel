"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    Template.dataForSave = {
        Protagonist: {
            name: ""
        },
    };
    //Menu Buttons
    let inGameMenu = {
        save: "Save",
        load: "Load",
        close: "Close",
        turnUpVolume: "+",
        turnDownVolume: "-",
    };
    //Music volume
    let volume = 1.0;
    function incrementSound() {
        if (volume < 1.0) {
            volume += 0.1;
            Template.ƒS.Sound.setMasterVolume(volume);
        }
    }
    Template.incrementSound = incrementSound;
    function decrementSound() {
        if (volume > 0) {
            volume -= 0.1;
            Template.ƒS.Sound.setMasterVolume(volume);
        }
    }
    Template.decrementSound = decrementSound;
    // Menu
    let gameMenu;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        if (_option == inGameMenu.save) {
            await Template.ƒS.Progress.save();
        }
        else if (_option == inGameMenu.load) {
            await Template.ƒS.Progress.load();
        }
        else if (_option == inGameMenu.turnUpVolume) {
            incrementSound();
        }
        else if (_option == inGameMenu.turnDownVolume) {
            decrementSound();
        }
        if (_option == inGameMenu.close) {
            gameMenu.close();
        }
    }
    Template.gameStarted = false;
    //Speicherfunktion
    document.addEventListener("keydown", hndKeypress);
    async function hndKeypress(_event) {
        switch (_event.code) {
            case Template.ƒ.KEYBOARD_CODE.F4:
                console.log("Save");
                await Template.ƒS.Progress.save();
                break;
            case Template.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await Template.ƒS.Progress.load();
                break;
            case Template.ƒ.KEYBOARD_CODE.I:
                if (Template.gameStarted) {
                    Template.ƒS.Inventory.open();
                }
                break;
            case Template.ƒ.KEYBOARD_CODE.ESC:
                gameMenu.open();
                break;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        //Menu
        gameMenu = Template.ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");
        gameMenu.close();
        Template.ƒS.Speech.hide();
        let scenes = [
            //Story
            { scene: Template.Introduction, name: "Introduction" },
            { scene: Template.Dorf_Tane, name: "Dorf_Tane", id: "again" },
            { scene: Template.Dorf_Oscar, name: "Dorf_Oscar", id: "Dorf_Oscar" },
            { scene: Template.Wald, name: "Wald", id: "Wald" },
            { scene: Template.Höhle, name: "Höhle", id: "Höhle" },
            { scene: Template.Portal_A, name: "Portal", id: "Portal_Bad" },
            { scene: Template.Portal_B, name: "Portal", id: "Portal_Good" },
            { scene: Template.Credits, name: "Credits", id: "Credits" }
        ];
        //start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.characters = {
        Protagonist: {
            name: "Default",
            origin: Template.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                normal: "Images/Characters/Player_Normal.png",
                smile: "Images/Characters/Player_Smile.png",
                mad: "Images/Characters/Player_Mad.png",
                happy: "Images/Characters/Player_Happy.png",
                shocked: "Images/Characters/Player_Shocked.png",
                talking: "Images/Characters/Player_Talking.png",
                shockedOp: "Images/Characters/Player_Shocked_Op.png",
                smileOp: "Images/Characters/Player_Smile_Op.png"
            },
        },
        Narrator: {
            name: "Narrator"
        },
        Unknown: {
            name: "???",
            origin: Template.ƒS.ORIGIN.CENTER,
            pose: {
                normal: "Images/Characters/Group.png"
            },
        },
        Tane: {
            name: "Tane",
            origin: Template.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                normal: "Images/Characters/Tane_Normal.png",
                smile: "Images/Characters/Tane_Smile.png",
                shocked: "Images/Characters/Tane_Shocked.png",
                talking: "Images/Characters/Tane_Talking.png"
            }
        },
        Rowan: {
            name: "Rowan",
            origin: Template.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                normal: "Images/Characters/Rowan.png"
            }
        },
        Oscar: {
            name: "Oscar",
            origin: Template.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                scared: "Images/Characters/Oscar_Scared.png",
                normal: "Images/Characters/Oscar_Normal.png"
            }
        },
        Items: {
            name: "Items",
            origin: Template.ƒS.ORIGIN.CENTER,
            pose: {
                funk: "Images/Items/Funkgeraet.png",
                hammer: "Images/Items/Hammer.png",
                tree: "Images/Items/Tree.png"
            }
        },
        Location: {
            name: "Location",
            origin: Template.ƒS.ORIGIN.CENTER,
            pose: {
                hoehle: "Images/Locations/Höhle.jpg"
            }
        }
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.items = {
        Hammer: {
            name: "Zu großer Hammer",
            description: "Sieht aus wie ein Hammer, ist auch einer",
            image: "Images/Items/Hammer.png",
        },
        FunkTane: {
            name: "Funkgerät-Tane",
            description: "Funkgerät, um sich mit Tane zu verbinde",
            image: "Images/Items/Funkgerät.png",
        },
        FunkRowan: {
            name: "Funkgerät-Rowan",
            description: "Funkgerät, um sich mit Rowan zu verbinde",
            image: "Images/Items/Funkgerät.png",
        },
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.locations = {
        Dorf: {
            name: "Dorf",
            background: "Images/Locations/Dorf.jpg"
        },
        Außerhalb: {
            name: "Außerhalb",
            background: "Images/Locations/Abseits.png"
        },
        Hoehle: {
            name: "Höhle",
            background: "Images/Locations/Höhle.jpg"
        },
        Portal: {
            name: "Portal",
            background: "Images/Locations/Portal.jpg"
        },
        Wald: {
            name: "Wald",
            background: "Images/Locations/Wald.jpg"
        },
        Blackscreen: {
            name: "Blackscreen",
            background: "Images/Locations/Blackscreen.jpg"
        },
        Splash: {
            name: "Splash",
            background: "Images/Splash.jpg"
        },
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.sound = {
        Bush: "Sound/Bush.mp3",
        Dramatic: "Sound/Dramatic.mp3",
        Forest: "Sound/Forest.mp3",
        Hammer: "Sound/Hammer.mp3",
        Radio: "Sound/Radio.mp3",
        Running: "Sound/Running.mp3",
        Town: "Sound/Town_Panic.mp3",
        End: "Sound/End.mp3"
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Introduction() {
        let animation = {
            fromLeftToRght: {
                start: { translation: Template.ƒS.positionPercent(40, 100) },
                end: { translation: Template.ƒS.positionPercent(80, 100) },
                duration: 3,
                playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
            },
            rightIn: {
                start: { translation: Template.ƒS.positionPercent(120, 100) },
                end: { translation: Template.ƒS.positionPercent(80, 100) },
                duration: 3,
                playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
            },
            fromRightToLeft: {
                start: { translation: Template.ƒS.positionPercent(80, 100) },
                end: { translation: Template.ƒS.positionPercent(40, 100) },
                duration: 3,
                playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
            },
        };
        let text = {
            Narrator: {
                T0000: "Es ist ein riesen Tumult im Dorf. Es scheint, als wäre etwas Schlimmes passiert!"
            },
            Protagonist: {
                T0000: "Hey, du da vor dem Bildschirm! Ich habe keine Zeit für lange Erklärungen...",
                T0001: "Kurz und knapp... Wir sind in einem VR-Spiel, ich bin für die Panik hier im Dorf verantwortlich und du wirst mir dabei Helfen meinen Plan zu vollenden.",
                T0002: "Los, wir dürfen keine Zeit verlieren...",
                T0003: "...sieh an, da haben wir schon unser erstes Opfer 'he he he'",
            }
        };
        Template.ƒS.Inventory.add(Template.items.Hammer);
        Template.ƒS.Inventory.add(Template.items.FunkRowan);
        await Template.ƒS.Text.print(text.Narrator.T0000);
        await Template.ƒS.Location.show(Template.locations.Dorf);
        await Template.ƒS.update(1);
        Template.ƒS.Sound.fade(Template.sound.Town, 0.5, 1, true);
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.talking, Template.ƒS.positionPercent(40, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Unknown, text.Protagonist.T0000);
        await Template.ƒS.Speech.tell(Template.characters.Unknown, text.Protagonist.T0001);
        await Template.ƒS.Speech.tell(Template.characters.Unknown, text.Protagonist.T0002);
        await Template.ƒS.Character.hide(Template.characters.Protagonist);
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.happy, Template.ƒS.positionPercent(40, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.Unknown, text.Protagonist.T0003);
        await Template.ƒS.Character.hide(Template.characters.Protagonist);
        await Template.ƒS.Character.animate(Template.characters.Protagonist, Template.characters.Protagonist.pose.smile, animation.fromLeftToRght);
        await Template.ƒS.update();
        await Template.ƒS.Character.hide(Template.characters.Protagonist);
        Template.ƒS.Character.animate(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, animation.fromRightToLeft);
        await Template.ƒS.Character.animate(Template.characters.Tane, Template.characters.Tane.pose.shocked, animation.rightIn);
        await Template.ƒS.update();
    }
    Template.Introduction = Introduction;
    async function Dorf_Tane() {
        let animation = {
            shakyIn: {
                start: { scaling: new Template.ƒS.Position(0.5, 0.5) },
                end: { scaling: new Template.ƒS.Position(1, 1) },
                duration: 0.4,
                playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
            },
            shakyOut: {
                start: { scaling: new Template.ƒS.Position(1, 1) },
                end: { scaling: new Template.ƒS.Position(0.5, 0.5) },
                duration: 0.4,
                playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
            }
        };
        let text = {
            Narrator: {
                T0000: "Etwas außerhalb vom Dorf"
            },
            Protagonist: {
                T0000: "Hey, alles gut bei dir? Ich bin ... ",
                T0001: "Ich kann dir sagen was ich gehört habe...",
                T0002: "Jemand mit einer rauen Stimme sprach: 'Dont quit the game, or you will die', also können wir diese Möglichkeit, das Spiel zu verlassen, ausschließen.",
                T0003: "Keiner kann sich mehr abmelden und das Problem ist noch unbekannt",
                T0004: "Das ist sehr wahrscheinlich.",
                T0005: "Ja lass uns aufbrechen!",
                T0006: "Hey, ich sehe du bist verwirrt, aber wir haben keine Zeit um zu trödeln!",
                T0007: "Ich hilf mir!",
                T0008: "...übrigens, ich bin: ",
                T0009: "Das weiß keiner genau, aber wir müssen schnell handeln! Ich mache mich auf dem Weg, um Verbündete zu sammeln!",
                T0010: "Und du versuchst mehr Informationen zu bekommen. Ich hoffe wir sehen uns Morgen wieder.",
            },
            Tane: {
                T0000: "Ja, ich bin nur gerade etwas verwirrt. Ich habe versucht mich auszulogen aber ich bin immer noch hier.",
                T0001: "Weißt du vielleicht was hier los ist?",
                T0002: "Wie ist das möglich? Ist das etwa ein Hackangriff?",
                T0003: "Ok wir sollten auf jeden Fall etwas dagegen tun.",
                T0004: "...warte! Ich habe ein Funkgerät für dich. So können wir in Kontakt bleiben.",
                T0005: "Ich konnte mich nicht auslogen!! Was ist hier los, gibt es einen Grund dafür?",
            },
            Rowan: {
                T0000: "Funkgerät: 'Hey Boss, wir haben ein Problem. Es gibt Störungen, manche Spieler können sich erfolgreich abmelden'.",
            }
        };
        let choice = {
            choice1: "Hecktisch und aufdringlich ansprechen",
            choice2: "Ruhig und besorgt ansprechen"
        };
        let answer = await Template.ƒS.Menu.getInput(choice, "choice");
        switch (answer) {
            case choice.choice2:
                await Template.ƒS.Character.hide(Template.characters.Protagonist);
                await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.talking, Template.ƒS.positionPercent(40, 100));
                await Template.ƒS.update();
                await Template.ƒS.Speech.tell(Template.characters.Unknown, text.Protagonist.T0000);
                Template.dataForSave.Protagonist.name = await Template.ƒS.Speech.getInput();
                Template.gameStarted = true;
                await Template.ƒS.Character.hide(Template.characters.Tane);
                await Template.ƒS.Character.show(Template.characters.Tane, Template.characters.Tane.pose.normal, Template.ƒS.positionPercent(80, 100));
                await Template.ƒS.update();
                await Template.ƒS.Character.hide(Template.characters.Protagonist);
                Template.characters.Protagonist.name = Template.dataForSave.Protagonist.name;
                await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(40, 100));
                await Template.ƒS.update();
                await Template.ƒS.Speech.tell(Template.characters.Tane, text.Tane.T0000);
                await Template.ƒS.Speech.tell(Template.characters.Tane, text.Tane.T0001);
                await Template.ƒS.Character.hide(Template.characters.Tane);
                await Template.ƒS.Character.show(Template.characters.Tane, Template.characters.Tane.pose.normal, Template.ƒS.positionPercent(80, 100));
                await Template.ƒS.update();
                await followingSpeech();
                break;
            case choice.choice1:
                await Template.ƒS.Character.hide(Template.characters.Protagonist);
                await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.talking, Template.ƒS.positionPercent(40, 100));
                await Template.ƒS.update();
                await Template.ƒS.Speech.tell(Template.characters.Unknown, text.Protagonist.T0006);
                await Template.ƒS.Speech.tell(Template.characters.Unknown, text.Protagonist.T0007);
                await Template.ƒS.Speech.tell(Template.characters.Unknown, text.Protagonist.T0008);
                await Template.ƒS.Character.hide(Template.characters.Protagonist);
                await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(40, 100));
                await Template.ƒS.update();
                Template.dataForSave.Protagonist.name = await Template.ƒS.Speech.getInput();
                Template.gameStarted = true;
                await Template.ƒS.Character.hide(Template.characters.Protagonist);
                Template.characters.Protagonist.name = Template.dataForSave.Protagonist.name;
                await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(40, 100));
                await Template.ƒS.update();
                await Template.ƒS.Character.hide(Template.characters.Tane);
                await Template.ƒS.Character.show(Template.characters.Tane, Template.characters.Tane.pose.talking, Template.ƒS.positionPercent(80, 100));
                await Template.ƒS.update();
                await Template.ƒS.Speech.tell(Template.characters.Tane, text.Tane.T0005);
                choice = {
                    choice1: "In Ruhe 'erklären'",
                    choice2: "Anlügen"
                };
                answer = await Template.ƒS.Menu.getInput(choice, "choice");
                switch (answer) {
                    case choice.choice1:
                        await followingSpeech();
                        break;
                    case choice.choice2:
                        await Template.ƒS.Character.hide(Template.characters.Protagonist);
                        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.talking, Template.ƒS.positionPercent(40, 100));
                        await Template.ƒS.update();
                        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0009);
                        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0010);
                        await Template.ƒS.Sound.fade(Template.sound.Town, 0, 0, false);
                        await Template.ƒS.Speech.hide();
                        await Template.ƒS.Character.hideAll();
                        choice = {
                            choice1: "Andere Spieler suchen, um sie zu erledigen",
                            choice2: "Zum Portal gehen und schauen, ob alles okay ist"
                        };
                        answer = await Template.ƒS.Menu.getInput(choice, "choice");
                        switch (answer) {
                            case choice.choice1:
                                await Template.ƒS.Character.hide(Template.characters.Protagonist);
                                await Template.ƒS.update(1);
                                break;
                            case choice.choice2:
                                await Template.ƒS.Location.show(Template.locations.Blackscreen);
                                await Template.ƒS.update(1);
                                await Template.ƒS.Text.print(text.Narrator.T0000);
                                await Template.ƒS.Location.show(Template.locations.Außerhalb);
                                await Template.ƒS.update(1);
                                await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(40, 100));
                                await Template.ƒS.update();
                                Template.ƒS.Sound.fade(Template.sound.Radio, 0.5, 0.5, false);
                                await Template.ƒS.Character.animate(Template.characters.Items, Template.characters.Items.pose.funk, animation.shakyIn);
                                await Template.ƒS.Character.animate(Template.characters.Items, Template.characters.Items.pose.funk, animation.shakyOut);
                                await Template.ƒS.Character.animate(Template.characters.Items, Template.characters.Items.pose.funk, animation.shakyIn);
                                await Template.ƒS.Sound.fade(Template.sound.Radio, 0, 0, false);
                                await Template.ƒS.Speech.tell(Template.characters.Unknown, text.Rowan.T0000);
                                await Template.ƒS.Character.hide(Template.characters.Items);
                                await Template.ƒS.Speech.hide();
                                await Template.ƒS.update(1);
                                return "Dorf_Oscar";
                            default:
                                break;
                        }
                        break;
                    default:
                        break;
                }
                break;
        }
        async function followingSpeech() {
            await Template.ƒS.Character.hide(Template.characters.Protagonist);
            await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.talking, Template.ƒS.positionPercent(40, 100));
            await Template.ƒS.update();
            await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0001);
            await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0002);
            await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0003);
            await Template.ƒS.Character.hide(Template.characters.Protagonist);
            await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(40, 100));
            await Template.ƒS.update();
            await Template.ƒS.Character.hide(Template.characters.Tane);
            await Template.ƒS.Character.show(Template.characters.Tane, Template.characters.Tane.pose.talking, Template.ƒS.positionPercent(80, 100));
            await Template.ƒS.update();
            await Template.ƒS.Speech.tell(Template.characters.Tane, text.Tane.T0002);
            await Template.ƒS.Character.hide(Template.characters.Tane);
            await Template.ƒS.Character.show(Template.characters.Tane, Template.characters.Tane.pose.normal, Template.ƒS.positionPercent(80, 100));
            await Template.ƒS.update();
            await Template.ƒS.Character.hide(Template.characters.Protagonist);
            await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.talking, Template.ƒS.positionPercent(40, 100));
            await Template.ƒS.update();
            await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0004);
            await Template.ƒS.Character.hide(Template.characters.Protagonist);
            await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(40, 100));
            await Template.ƒS.update();
            await Template.ƒS.Character.hide(Template.characters.Tane);
            await Template.ƒS.Character.show(Template.characters.Tane, Template.characters.Tane.pose.talking, Template.ƒS.positionPercent(80, 100));
            await Template.ƒS.update();
            await Template.ƒS.Speech.tell(Template.characters.Tane, text.Tane.T0003);
            await Template.ƒS.Character.hide(Template.characters.Tane);
            await Template.ƒS.Character.show(Template.characters.Tane, Template.characters.Tane.pose.normal, Template.ƒS.positionPercent(80, 100));
            await Template.ƒS.update();
            await Template.ƒS.Character.hide(Template.characters.Protagonist);
            await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.talking, Template.ƒS.positionPercent(40, 100));
            await Template.ƒS.update();
            await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0005);
            await Template.ƒS.Character.hide(Template.characters.Protagonist);
            await Template.ƒS.update();
            await goAwayAnimation();
            await Template.ƒS.Sound.fade(Template.sound.Town, 0, 0, false);
        }
        async function goAwayAnimation() {
            let animation = {
                leftOut: {
                    start: { translation: Template.ƒS.positionPercent(40, 100) },
                    end: { translation: Template.ƒS.positionPercent(15, 100) },
                    duration: 2,
                    playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
                }
            };
            await Template.ƒS.Character.hide(Template.characters.Protagonist);
            await Template.ƒS.update();
            await Template.ƒS.Character.animate(Template.characters.Protagonist, Template.characters.Protagonist.pose.smileOp, animation.leftOut);
            await Template.ƒS.Character.hide(Template.characters.Tane);
            await Template.ƒS.Character.show(Template.characters.Tane, Template.characters.Tane.pose.talking, Template.ƒS.positionPercent(80, 100));
            await Template.ƒS.update();
            await Template.ƒS.Speech.tell(Template.characters.Tane, text.Tane.T0004);
            Template.ƒS.Inventory.add(Template.items.FunkTane);
            await Template.ƒS.Text.print("Du hast ein Funkgerät erhalten.");
            await Template.ƒS.Speech.hide();
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.update(1);
        }
        return "Wald";
    }
    Template.Dorf_Tane = Dorf_Tane;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Dorf_Oscar() {
        let animation = {
            rightOut: {
                start: { translation: Template.ƒS.positionPercent(40, 100) },
                end: { translation: Template.ƒS.positionPercent(120, 100) },
                duration: 3,
                playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
            },
            rightToLeft: {
                start: { translation: Template.ƒS.positionPercent(60, 100) },
                end: { translation: Template.ƒS.positionPercent(40, 100) },
                duration: 2,
                playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
            },
            leftToRight: {
                start: { translation: Template.ƒS.positionPercent(40, 100) },
                end: { translation: Template.ƒS.positionPercent(60, 100) },
                duration: 2,
                playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
            },
            showOscar: {
                start: { translation: Template.ƒS.positionPercent(95, 100) },
                end: { translation: Template.ƒS.positionPercent(89, 100) },
                duration: 0.5,
                playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
            }
        };
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
        };
        Template.ƒS.Sound.fade(Template.sound.Bush, 0.5, 2, false);
        await Template.ƒS.Text.print(text.Narrator.T0000);
        await Template.ƒS.Character.show(Template.characters.Items, Template.characters.Items.pose.tree, Template.ƒS.positionPercent(90, 50));
        await Template.ƒS.update(1);
        let choice = {
            choice1: "Baum untersuchen",
            choice2: "Ignorieren"
        };
        let answer = await Template.ƒS.Menu.getInput(choice, "choice");
        switch (answer) {
            case choice.choice1:
                await Template.ƒS.Character.hide(Template.characters.Protagonist);
                await Template.ƒS.update();
                await Template.ƒS.Character.animate(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, animation.leftToRight);
                await Template.ƒS.Character.hide(Template.characters.Protagonist);
                await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.talking, Template.ƒS.positionPercent(60, 100));
                await Template.ƒS.update();
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0000);
                await Template.ƒS.Character.hide(Template.characters.Protagonist);
                await Template.ƒS.update();
                Template.ƒS.Character.animate(Template.characters.Oscar, Template.characters.Oscar.pose.scared, animation.showOscar);
                await Template.ƒS.Character.animate(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, animation.rightToLeft);
                await Template.ƒS.Speech.tell(Template.characters.Oscar, text.Oscar.T0000);
                choice = {
                    choice1: "Beruhigend ansprechen",
                    choice2: "Drohen"
                };
                let answer = await Template.ƒS.Menu.getInput(choice, "choice");
                switch (answer) {
                    case choice.choice1:
                        await Template.ƒS.Character.hide(Template.characters.Protagonist);
                        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.happy, Template.ƒS.positionPercent(40, 100));
                        await Template.ƒS.update();
                        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0001);
                        await Template.ƒS.Character.hide(Template.characters.Protagonist);
                        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.smile, Template.ƒS.positionPercent(40, 100));
                        await Template.ƒS.update();
                        await Template.ƒS.Character.hide(Template.characters.Oscar);
                        await Template.ƒS.Character.show(Template.characters.Oscar, Template.characters.Oscar.pose.normal, Template.ƒS.positionPercent(89, 100));
                        await Template.ƒS.update();
                        await Template.ƒS.Speech.tell(Template.characters.Oscar, text.Oscar.T0001);
                        await Template.ƒS.Character.hide(Template.characters.Protagonist);
                        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.happy, Template.ƒS.positionPercent(40, 100));
                        await Template.ƒS.update();
                        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0002);
                        await Template.ƒS.Character.hide(Template.characters.Protagonist);
                        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.smile, Template.ƒS.positionPercent(40, 100));
                        await Template.ƒS.update();
                        await Template.ƒS.Speech.tell(Template.characters.Oscar, text.Oscar.T0002);
                        await Template.ƒS.Character.hide(Template.characters.Protagonist);
                        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.happy, Template.ƒS.positionPercent(40, 100));
                        await Template.ƒS.update();
                        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0003);
                        await Template.ƒS.Character.hide(Template.characters.Protagonist);
                        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.smile, Template.ƒS.positionPercent(40, 100));
                        await Template.ƒS.update();
                        await Template.ƒS.Speech.hide();
                        await Template.ƒS.Character.hideAll();
                        await Template.ƒS.update(1);
                        return "Höhle";
                    case choice.choice2:
                        await Template.ƒS.Character.hide(Template.characters.Protagonist);
                        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.talking, Template.ƒS.positionPercent(40, 100));
                        await Template.ƒS.update();
                        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0004);
                        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0005);
                        await Template.ƒS.Character.hide(Template.characters.Protagonist);
                        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(40, 100));
                        await Template.ƒS.update();
                        await Template.ƒS.Speech.tell(Template.characters.Unknown, text.Oscar.T0003);
                        await Template.ƒS.Character.hide(Template.characters.Protagonist);
                        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.mad, Template.ƒS.positionPercent(40, 100));
                        await Template.ƒS.update();
                        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0006);
                        await Template.ƒS.Speech.hide();
                        await Template.ƒS.Character.hideAll();
                        await Template.ƒS.update(1);
                        return "Portal_Bad";
                }
                break;
            case choice.choice2:
                await Template.ƒS.Character.hide(Template.characters.Items);
                await Template.ƒS.update();
                await Template.ƒS.Character.hide(Template.characters.Protagonist);
                await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.talking, Template.ƒS.positionPercent(40, 100));
                await Template.ƒS.update();
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0007);
                await Template.ƒS.Character.hide(Template.characters.Protagonist);
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.hide();
                await Template.ƒS.Character.hideAll();
                await Template.ƒS.update();
                return "Portal_Bad";
        }
    }
    Template.Dorf_Oscar = Dorf_Oscar;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Wald() {
        let animation = {
            fromLeftToRght: {
                start: { translation: Template.ƒS.positionPercent(40, 100) },
                end: { translation: Template.ƒS.positionPercent(90, 100) },
                duration: 2,
                playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
            },
            shakyIn: {
                start: { scaling: new Template.ƒS.Position(0.5, 0.5) },
                end: { scaling: new Template.ƒS.Position(1, 1) },
                duration: 0.4,
                playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
            },
            shakyOut: {
                start: { scaling: new Template.ƒS.Position(1, 1) },
                end: { scaling: new Template.ƒS.Position(0.5, 0.5) },
                duration: 0.4,
                playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
            }
        };
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
                T0000: "Funkgerät: 'Hi " + Template.dataForSave.Protagonist.name + ", wir haben ein paar Informationen bekommen, wo sich die Hacker befinden könnten. Wir machen uns gleich auf dem weg zum Wald und melden uns dann wieder.'",
                T0001: "... ach und eine Gruppe hat sich schon auf dem Weg dahin gemacht.",
            },
            Rowan: {
                T0000: "Funkgerät: 'Hey Boss, wir haben ein Problem. Es gibt Störungen, manche Spieler können sich erfolgreich abmelden'"
            }
        };
        Template.ƒS.Sound.fade(Template.sound.Forest, 0.7, 4, false);
        await Template.ƒS.Location.show(Template.locations.Wald);
        await Template.ƒS.update(2, "Images/Locations/Transition.jpg");
        Template.ƒS.Text.print(text.Narrator.T0000);
        Template.ƒS.Sound.fade(Template.sound.Radio, 0.5, 2, false);
        await Template.ƒS.Character.animate(Template.characters.Items, Template.characters.Items.pose.funk, animation.shakyIn);
        await Template.ƒS.Character.animate(Template.characters.Items, Template.characters.Items.pose.funk, animation.shakyOut);
        await Template.ƒS.Character.animate(Template.characters.Items, Template.characters.Items.pose.funk, animation.shakyIn);
        await Template.ƒS.Sound.fade(Template.sound.Radio, 0, 0, false);
        await Template.ƒS.Speech.tell(Template.characters.Tane, text.Tane.T0000);
        await Template.ƒS.Speech.tell(Template.characters.Tane, text.Tane.T0001);
        await Template.ƒS.Character.hide(Template.characters.Items);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(40, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Character.hide(Template.characters.Protagonist);
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.talking, Template.ƒS.positionPercent(40, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0000);
        await Template.ƒS.Character.hide(Template.characters.Protagonist);
        await Template.ƒS.Character.animate(Template.characters.Protagonist, Template.characters.Protagonist.pose.mad, animation.fromLeftToRght);
        await Template.ƒS.update();
        let choice = {
            choice1: "Truppe ignorieren und zum Portal gehen",
            choice2: "Truppe suchen"
        };
        let answer = await Template.ƒS.Menu.getInput(choice, "choice");
        switch (answer) {
            case choice.choice1:
                await Template.ƒS.Character.hide(Template.characters.Protagonist);
                await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.talking, Template.ƒS.positionPercent(90, 100));
                await Template.ƒS.update();
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0001);
                await Template.ƒS.Character.hide(Template.characters.Protagonist);
                await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(90, 100));
                await Template.ƒS.update();
                Template.ƒS.Sound.fade(Template.sound.Radio, 0.5, 2, false);
                await Template.ƒS.Character.animate(Template.characters.Items, Template.characters.Items.pose.funk, animation.shakyIn);
                await Template.ƒS.Character.animate(Template.characters.Items, Template.characters.Items.pose.funk, animation.shakyOut);
                await Template.ƒS.Character.animate(Template.characters.Items, Template.characters.Items.pose.funk, animation.shakyIn);
                await Template.ƒS.Sound.fade(Template.sound.Radio, 0, 0, false);
                await Template.ƒS.Speech.tell(Template.characters.Unknown, text.Rowan.T0000);
                await Template.ƒS.Speech.hide();
                await Template.ƒS.Character.hideAll();
                await Template.ƒS.update(1);
                await Template.ƒS.Sound.fade(Template.sound.Town, 0, 0, false);
                return "Portal_Bad";
            case choice.choice2:
                await Template.ƒS.Speech.hide();
                await Template.ƒS.Character.hideAll();
                await Template.ƒS.update(1);
                Template.ƒS.Sound.fade(Template.sound.Radio, 0.5, 2, false);
                await Template.ƒS.Sound.fade(Template.sound.Forest, 0, 0, false);
                return "Höhle";
            default:
                break;
        }
    }
    Template.Wald = Wald;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Höhle() {
        let animation = {
            leftIn: {
                start: { translation: Template.ƒS.positionPercent(-10, 100) },
                end: { translation: Template.ƒS.positionPercent(40, 100) },
                duration: 1,
                playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
            },
            shakyIn: {
                start: { scaling: new Template.ƒS.Position(0.5, 0.5) },
                end: { scaling: new Template.ƒS.Position(1, 1) },
                duration: 0.4,
                playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
            },
            shakyOut: {
                start: { scaling: new Template.ƒS.Position(1, 1) },
                end: { scaling: new Template.ƒS.Position(0.5, 0.5) },
                duration: 0.4,
                playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
            },
            lowZoomOut: {
                start: { translation: Template.ƒS.positionPercent(73, 55), scaling: new Template.ƒS.Position(0.1, 0.1) },
                end: { translation: Template.ƒS.positionPercent(58, 55), scaling: new Template.ƒS.Position(0.3, 0.3) },
                duration: 0.6,
                playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
            },
            zoomOut: {
                start: { translation: Template.ƒS.positionPercent(66, 73), scaling: new Template.ƒS.Position(0.3, 0.3) },
                end: { translation: Template.ƒS.positionPercent(50, 50), scaling: new Template.ƒS.Position(30, 30) },
                duration: 1,
                playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
            },
            shackyBackgroundUp: {
                start: { translation: Template.ƒS.positionPercent(52, 52) },
                end: { translation: Template.ƒS.positionPercent(50, 50) },
                duration: 0.2,
                playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
            },
            shackyBackgroundDown: {
                start: { translation: Template.ƒS.positionPercent(50, 50) },
                end: { translation: Template.ƒS.positionPercent(52, 52) },
                duration: 0.2,
                playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
            },
            takeHammer: {
                start: { translation: Template.ƒS.positionPercent(50, 120), rotation: -50, scaling: new Template.ƒS.Position(1, 1) },
                end: { translation: Template.ƒS.positionPercent(50, 50), rotation: 10, scaling: new Template.ƒS.Position(0.6, 0.6) },
                duration: 0.5,
                playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
            }
        };
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
        };
        await Template.ƒS.Location.show(Template.locations.Hoehle);
        await Template.ƒS.update(1);
        Template.ƒS.Sound.fade(Template.sound.Running, 0.5, 0.4, false);
        await Template.ƒS.Text.print(text.Narrator.T0000);
        await Template.ƒS.Text.print(text.Narrator.T0001);
        await Template.ƒS.Text.print(text.Narrator.T0002);
        await Template.ƒS.Sound.fade(Template.sound.Running, 0, 0, false);
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(40, 100));
        await Template.ƒS.update();
        await Template.ƒS.Character.animate(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, animation.leftIn);
        await Template.ƒS.Character.hide(Template.characters.Protagonist);
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.talking, Template.ƒS.positionPercent(40, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0000);
        let choice = {
            choice1: "Höhle zum einstürzen bringen",
            choice2: "Die Truppe auf deine Seite ziehen"
        };
        let answer = await Template.ƒS.Menu.getInput(choice, "choice");
        switch (answer) {
            case choice.choice1:
                await Template.ƒS.Character.hide(Template.characters.Protagonist);
                await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.talking, Template.ƒS.positionPercent(40, 100));
                await Template.ƒS.update();
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0001);
                await Template.ƒS.Character.hide(Template.characters.Protagonist);
                await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(40, 100));
                await Template.ƒS.update();
                await Template.ƒS.Text.print(text.Narrator.T0003);
                await Template.ƒS.Character.animate(Template.characters.Items, Template.characters.Items.pose.hammer, animation.takeHammer);
                Template.ƒS.Sound.fade(Template.sound.Hammer, 0.5, 0.4, false);
                await Template.ƒS.Character.animate(Template.characters.Location, Template.characters.Location.pose.hoehle, animation.shackyBackgroundUp);
                await Template.ƒS.Character.animate(Template.characters.Location, Template.characters.Location.pose.hoehle, animation.shackyBackgroundDown);
                await Template.ƒS.Character.animate(Template.characters.Location, Template.characters.Location.pose.hoehle, animation.shackyBackgroundUp);
                await Template.ƒS.Character.animate(Template.characters.Location, Template.characters.Location.pose.hoehle, animation.shackyBackgroundDown);
                Template.ƒS.Character.hide(Template.characters.Location);
                await Template.ƒS.Character.hide(Template.characters.Items);
                await Template.ƒS.update(1);
                await Template.ƒS.Character.hide(Template.characters.Protagonist);
                await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.talking, Template.ƒS.positionPercent(40, 100));
                await Template.ƒS.update();
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0002);
                await Template.ƒS.Character.hide(Template.characters.Protagonist);
                await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(40, 100));
                await Template.ƒS.update();
                Template.ƒS.Sound.fade(Template.sound.Radio, 0.5, 0.5, false);
                await Template.ƒS.Character.animate(Template.characters.Items, Template.characters.Items.pose.funk, animation.shakyIn);
                await Template.ƒS.Character.animate(Template.characters.Items, Template.characters.Items.pose.funk, animation.shakyOut);
                await Template.ƒS.Character.animate(Template.characters.Items, Template.characters.Items.pose.funk, animation.shakyIn);
                await Template.ƒS.Sound.fade(Template.sound.Radio, 0, 0, false);
                await Template.ƒS.Speech.tell(Template.characters.Unknown, text.Rowan.T0000);
                await Template.ƒS.Speech.hide();
                await Template.ƒS.Character.hideAll();
                await Template.ƒS.update();
                return "Portal_Good";
            case choice.choice2:
                await Template.ƒS.Character.hide(Template.characters.Protagonist);
                await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.talking, Template.ƒS.positionPercent(40, 100));
                await Template.ƒS.update();
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0003);
                await Template.ƒS.Character.hide(Template.characters.Protagonist);
                await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(40, 100));
                await Template.ƒS.update();
                await Template.ƒS.Character.animate(Template.characters.Unknown, Template.characters.Unknown.pose.normal, animation.lowZoomOut);
                await Template.ƒS.Speech.tell(Template.characters.Unknown, text.Truppe.T0000);
                await Template.ƒS.Character.hide(Template.characters.Protagonist);
                await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.talking, Template.ƒS.positionPercent(40, 100));
                await Template.ƒS.update();
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0004);
                await Template.ƒS.Character.hide(Template.characters.Protagonist);
                await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(40, 100));
                await Template.ƒS.update();
                Template.ƒS.Sound.fade(Template.sound.Radio, 0.5, 0.5, false);
                await Template.ƒS.Character.animate(Template.characters.Items, Template.characters.Items.pose.funk, animation.shakyIn);
                await Template.ƒS.Character.animate(Template.characters.Items, Template.characters.Items.pose.funk, animation.shakyOut);
                await Template.ƒS.Character.animate(Template.characters.Items, Template.characters.Items.pose.funk, animation.shakyIn);
                await Template.ƒS.Sound.fade(Template.sound.Radio, 0, 0, false);
                await Template.ƒS.Speech.tell(Template.characters.Unknown, text.Rowan.T0001);
                await Template.ƒS.Speech.tell(Template.characters.Unknown, text.Truppe.T0001);
                await Template.ƒS.Character.hide(Template.characters.Protagonist);
                await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.shocked, Template.ƒS.positionPercent(40, 100));
                await Template.ƒS.update();
                await Template.ƒS.Character.animate(Template.characters.Unknown, Template.characters.Unknown.pose.normal, animation.zoomOut);
                await Template.ƒS.Speech.hide();
                await Template.ƒS.Character.hideAll();
                await Template.ƒS.update(1);
                return "Credits";
            default:
                break;
        }
    }
    Template.Höhle = Höhle;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Portal_A() {
        let animation = {
            rightIn: {
                start: { translation: Template.ƒS.positionPercent(120, 100) },
                end: { translation: Template.ƒS.positionPercent(90, 100) },
                duration: 3,
                playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
            },
            rightToLeft: {
                start: { translation: Template.ƒS.positionPercent(90, 100) },
                end: { translation: Template.ƒS.positionPercent(-10, 100) },
                duration: 1,
                playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
            },
            rightInGroup: {
                start: { translation: Template.ƒS.positionPercent(120, 70) },
                end: { translation: Template.ƒS.positionPercent(37, 70) },
                duration: 2,
                playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
            }
        };
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
                T0000: "HEY! Was macht ... " + Template.dataForSave.Protagonist.name + "? Moment mal, steckst du da etwa dahinter?.",
                T0001: "Jaaaaaa!!"
            }
        };
        Template.ƒS.Sound.fade(Template.sound.Dramatic, 0.5, 110, true);
        await Template.ƒS.Location.show(Template.locations.Portal);
        await Template.ƒS.update(3, "./Images/Locations/Transition1.jpg", 1);
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.talking, Template.ƒS.positionPercent(40, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0000);
        await Template.ƒS.Character.hide(Template.characters.Protagonist);
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(40, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.Rowan, text.Rowan.T0000);
        await Template.ƒS.Character.show(Template.characters.Rowan, Template.characters.Rowan.pose.normal, Template.ƒS.positionPercent(90, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Character.hide(Template.characters.Protagonist);
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.talking, Template.ƒS.positionPercent(40, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0001);
        await Template.ƒS.Character.hide(Template.characters.Protagonist);
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(40, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.Rowan, text.Rowan.T0001);
        await Template.ƒS.Character.hide(Template.characters.Protagonist);
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.talking, Template.ƒS.positionPercent(40, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0002);
        await Template.ƒS.Character.hide(Template.characters.Protagonist);
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(40, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.Rowan, text.Rowan.T0002);
        await Template.ƒS.Speech.tell(Template.characters.Unknown, text.Unknown.T0000);
        await Template.ƒS.Character.hide(Template.characters.Protagonist);
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.mad, Template.ƒS.positionPercent(40, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0003);
        Template.ƒS.Character.animate(Template.characters.Rowan, Template.characters.Rowan.pose.normal, animation.rightToLeft);
        await Template.ƒS.Sound.fade(Template.sound.Running, 0.5, 0.1, false);
        await Template.ƒS.Character.hide(Template.characters.Rowan);
        await Template.ƒS.Sound.fade(Template.sound.Running, 0, 0, false);
        await Template.ƒS.update();
        await Template.ƒS.Character.animate(Template.characters.Tane, Template.characters.Tane.pose.shocked, animation.rightIn);
        await Template.ƒS.Character.hide(Template.characters.Tane);
        await Template.ƒS.Character.show(Template.characters.Tane, Template.characters.Tane.pose.talking, Template.ƒS.positionPercent(90, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.Tane, text.Tane.T0000);
        await Template.ƒS.Speech.tell(Template.characters.Tane, text.Tane.T0001);
        await Template.ƒS.Character.hide(Template.characters.Protagonist);
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.shocked, Template.ƒS.positionPercent(40, 100));
        await Template.ƒS.update();
        await Template.ƒS.Character.animate(Template.characters.Unknown, Template.characters.Unknown.pose.normal, animation.rightInGroup);
        await Template.ƒS.Sound.fade(Template.sound.Running, 0.5, 0.1, false);
        await Template.ƒS.Speech.hide();
        await Template.ƒS.Character.hideAll();
        await Template.ƒS.Sound.fade(Template.sound.Running, 0, 0, false);
        await Template.ƒS.update();
        await Template.ƒS.Sound.fade(Template.sound.Dramatic, 0, 0, false);
        return "Credits";
    }
    Template.Portal_A = Portal_A;
    async function Portal_B() {
        let animation = {
            rightIn: {
                start: { translation: Template.ƒS.positionPercent(120, 100) },
                end: { translation: Template.ƒS.positionPercent(90, 100) },
                duration: 3,
                playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
            },
            rightToLeft: {
                start: { translation: Template.ƒS.positionPercent(90, 100) },
                end: { translation: Template.ƒS.positionPercent(-10, 100) },
                duration: 1,
                playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
            }
        };
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
                T0000: Template.dataForSave.Protagonist.name + "? Steckst du hinter dem ganzen? Warum nur?",
                T0001: "Warst du für die ganze Opfer verantwortlich? Und auch die Truppe die dich aufhalten sollte??",
                T0002: "Ich bitte dich!! Hör endlich auf. Draußen warten Familien auf uns! Wir sind doch alle Menschen, alle gleich.",
                T0003: "Das stimmt, aber es ist nicht zu spät die Zukunft zu ändern!"
            }
        };
        Template.ƒS.Sound.fade(Template.sound.Dramatic, 0.5, 110, true);
        await Template.ƒS.Location.show(Template.locations.Portal);
        await Template.ƒS.update(3, "./Images/Locations/Transition1.jpg", 1);
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.happy, Template.ƒS.positionPercent(40, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0000);
        await Template.ƒS.Character.hide(Template.characters.Protagonist);
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(40, 100));
        await Template.ƒS.update();
        await Template.ƒS.Character.show(Template.characters.Rowan, Template.characters.Rowan.pose.normal, Template.ƒS.positionPercent(90, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Rowan, text.Rowan.T0000);
        await Template.ƒS.Character.hide(Template.characters.Protagonist);
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.talking, Template.ƒS.positionPercent(40, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0001);
        await Template.ƒS.Character.hide(Template.characters.Protagonist);
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(40, 100));
        await Template.ƒS.update();
        Template.ƒS.Character.animate(Template.characters.Rowan, Template.characters.Rowan.pose.normal, animation.rightToLeft);
        await Template.ƒS.Sound.fade(Template.sound.Running, 0.5, 0.1, false);
        await Template.ƒS.Character.hide(Template.characters.Rowan);
        await Template.ƒS.Sound.fade(Template.sound.Running, 0, 0, false);
        await Template.ƒS.update();
        await Template.ƒS.Character.animate(Template.characters.Tane, Template.characters.Tane.pose.shocked, animation.rightIn);
        await Template.ƒS.Speech.tell(Template.characters.Tane, text.Tane.T0000);
        await Template.ƒS.Character.hide(Template.characters.Tane);
        await Template.ƒS.Character.show(Template.characters.Tane, Template.characters.Tane.pose.normal, Template.ƒS.positionPercent(90, 100));
        await Template.ƒS.update();
        await Template.ƒS.Character.hide(Template.characters.Protagonist);
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.talking, Template.ƒS.positionPercent(40, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0002);
        await Template.ƒS.Character.hide(Template.characters.Protagonist);
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(40, 100));
        await Template.ƒS.update();
        await Template.ƒS.Character.hide(Template.characters.Tane);
        await Template.ƒS.Character.show(Template.characters.Tane, Template.characters.Tane.pose.talking, Template.ƒS.positionPercent(90, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.Tane, text.Tane.T0001);
        await Template.ƒS.Character.hide(Template.characters.Tane);
        await Template.ƒS.Character.show(Template.characters.Tane, Template.characters.Tane.pose.normal, Template.ƒS.positionPercent(90, 100));
        await Template.ƒS.update();
        await Template.ƒS.Character.hide(Template.characters.Protagonist);
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.talking, Template.ƒS.positionPercent(40, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0003);
        await Template.ƒS.Character.hide(Template.characters.Protagonist);
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(40, 100));
        await Template.ƒS.update();
        await Template.ƒS.Character.hide(Template.characters.Tane);
        await Template.ƒS.Character.show(Template.characters.Tane, Template.characters.Tane.pose.talking, Template.ƒS.positionPercent(90, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.Tane, text.Tane.T0002);
        await Template.ƒS.Character.hide(Template.characters.Tane);
        await Template.ƒS.Character.show(Template.characters.Tane, Template.characters.Tane.pose.normal, Template.ƒS.positionPercent(90, 100));
        await Template.ƒS.update();
        let choice = {
            choice1: "Gnade Zeigen",
            choice2: "Portal schließen"
        };
        let answer = await Template.ƒS.Menu.getInput(choice, "choice");
        switch (answer) {
            case choice.choice1:
                await Template.ƒS.Character.hide(Template.characters.Protagonist);
                await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.talking, Template.ƒS.positionPercent(40, 100));
                await Template.ƒS.update();
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0004);
                await Template.ƒS.Character.hide(Template.characters.Protagonist);
                await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(40, 100));
                await Template.ƒS.update();
                await Template.ƒS.Character.hide(Template.characters.Tane);
                await Template.ƒS.Character.show(Template.characters.Tane, Template.characters.Tane.pose.talking, Template.ƒS.positionPercent(90, 100));
                await Template.ƒS.update();
                await Template.ƒS.Speech.tell(Template.characters.Tane, text.Tane.T0003);
                await Template.ƒS.Character.hide(Template.characters.Tane);
                await Template.ƒS.Character.show(Template.characters.Tane, Template.characters.Tane.pose.normal, Template.ƒS.positionPercent(90, 100));
                await Template.ƒS.update();
                await Template.ƒS.Character.hide(Template.characters.Protagonist);
                await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.happy, Template.ƒS.positionPercent(40, 100));
                await Template.ƒS.update();
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0007);
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0008);
                await Template.ƒS.Speech.hide();
                await Template.ƒS.Character.hideAll();
                await Template.ƒS.update(1);
                await Template.ƒS.Sound.fade(Template.sound.Dramatic, 0, 0, false);
                return "again";
            case choice.choice2:
                await Template.ƒS.Character.hide(Template.characters.Protagonist);
                await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.mad, Template.ƒS.positionPercent(40, 100));
                await Template.ƒS.update();
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0005);
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0006);
                await Template.ƒS.Speech.hide();
                await Template.ƒS.Character.hideAll();
                await Template.ƒS.update(1);
                await Template.ƒS.Text.print(text.Narrator.T0000);
                break;
            default:
                break;
        }
        await Template.ƒS.Sound.fade(Template.sound.Dramatic, 0, 0, false);
        return "Credits";
    }
    Template.Portal_B = Portal_B;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Credits() {
        Template.ƒS.Sound.fade(Template.sound.End, 0.5, 2, true);
        let endScreen = "<strong><center>Thank you for playing!</strong><br></br> \
            <br><b>Autor</b></br> \
            <br>Nikola Gorgiev</br> \
            <br>         </br> \
            <br><b>Charaktere</b></br> \
            <br>Nikola Gorgiev</br> \
            <br>         </br> \
            <br><b>Hintergründe</b></br> \
            <br>Amazon Game Studios New World</br> \
            <br>         </br> \
            <br><b>Musik and Sounds</b></br> \
            <br>pixabay.com         </br> \
            <br>youtube.com         </br> \
            <br>Nikola Gorgiev</br> \
            ";
        await Template.ƒS.Location.show(Template.locations.Splash);
        await Template.ƒS.update(1);
        Template.ƒS.Text.print(endScreen + "The end");
    }
    Template.Credits = Credits;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map