namespace Template {

  export async function Introduction(): ƒS.SceneReturn {

    let animation = {
      fromLeftToRght: {
        start: { translation: ƒS.positionPercent(40, 100) },
        end: { translation: ƒS.positionPercent(80, 100) },
        duration: 3,
        playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
      },
      rightIn: {
        start: { translation: ƒS.positionPercent(120, 100) },
        end: { translation: ƒS.positionPercent(80, 100) },
        duration: 3,
        playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
      },
      fromRightToLeft: {
        start: { translation: ƒS.positionPercent(80, 100) },
        end: { translation: ƒS.positionPercent(40, 100) },
        duration: 3,
        playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
      },
    }

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
    }
    ƒS.Inventory.add(items.Hammer);
    ƒS.Inventory.add(items.FunkRowan);
    await ƒS.Text.print(text.Narrator.T0000);

    await ƒS.Location.show(locations.Dorf);
    await ƒS.update(1);

    ƒS.Sound.fade(sound.Town, 0.5, 1, true);
    await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.talking, ƒS.positionPercent(40, 100));
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.Unknown, text.Protagonist.T0000);
    await ƒS.Speech.tell(characters.Unknown, text.Protagonist.T0001);
    await ƒS.Speech.tell(characters.Unknown, text.Protagonist.T0002);
    await ƒS.Character.hide(characters.Protagonist);
    await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.happy, ƒS.positionPercent(40, 100));
    await ƒS.update();

    await ƒS.Speech.tell(characters.Unknown, text.Protagonist.T0003);
    await ƒS.Character.hide(characters.Protagonist);
    await ƒS.Character.animate(characters.Protagonist, characters.Protagonist.pose.smile, animation.fromLeftToRght);
    await ƒS.update();

    await ƒS.Character.hide(characters.Protagonist);
    ƒS.Character.animate(characters.Protagonist, characters.Protagonist.pose.normal, animation.fromRightToLeft);
    await ƒS.Character.animate(characters.Tane, characters.Tane.pose.shocked, animation.rightIn);
    await ƒS.update();
  }

  export async function Dorf_Tane(): ƒS.SceneReturn {

    let animation = {
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
    }
    let choice = {
      choice1: "Hecktisch und aufdringlich ansprechen",
      choice2: "Ruhig und besorgt ansprechen"
    };

    let answer = await ƒS.Menu.getInput(choice, "choice");
    switch (answer) {

      case choice.choice2:

        await ƒS.Character.hide(characters.Protagonist);
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.talking, ƒS.positionPercent(40, 100));
        await ƒS.update();

        await ƒS.Speech.tell(characters.Unknown, text.Protagonist.T0000);
        dataForSave.Protagonist.name = await ƒS.Speech.getInput();
        gameStarted = true;
        await ƒS.Character.hide(characters.Tane);
        await ƒS.Character.show(characters.Tane, characters.Tane.pose.normal, ƒS.positionPercent(80, 100));
        await ƒS.update();

        await ƒS.Character.hide(characters.Protagonist);
        characters.Protagonist.name = dataForSave.Protagonist.name;
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(40, 100));
        await ƒS.update();

        await ƒS.Speech.tell(characters.Tane, text.Tane.T0000);
        await ƒS.Speech.tell(characters.Tane, text.Tane.T0001);
        await ƒS.Character.hide(characters.Tane);
        await ƒS.Character.show(characters.Tane, characters.Tane.pose.normal, ƒS.positionPercent(80, 100));
        await ƒS.update();

        await followingSpeech();

        break;

      case choice.choice1:
        await ƒS.Character.hide(characters.Protagonist);
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.talking, ƒS.positionPercent(40, 100));
        await ƒS.update();

        await ƒS.Speech.tell(characters.Unknown, text.Protagonist.T0006);
        await ƒS.Speech.tell(characters.Unknown, text.Protagonist.T0007);
        await ƒS.Speech.tell(characters.Unknown, text.Protagonist.T0008);
        await ƒS.Character.hide(characters.Protagonist);
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(40, 100));
        await ƒS.update();

        dataForSave.Protagonist.name = await ƒS.Speech.getInput();
        gameStarted = true;
        await ƒS.Character.hide(characters.Protagonist);
        characters.Protagonist.name = dataForSave.Protagonist.name;
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(40, 100));
        await ƒS.update();

        await ƒS.Character.hide(characters.Tane);
        await ƒS.Character.show(characters.Tane, characters.Tane.pose.talking, ƒS.positionPercent(80, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.Tane, text.Tane.T0005);

        choice = {
          choice1: "In Ruhe 'erklären'",
          choice2: "Anlügen"
        };

        answer = await ƒS.Menu.getInput(choice, "choice");
        switch (answer) {
          case choice.choice1:
            await followingSpeech();

            break;
          case choice.choice2:
            await ƒS.Character.hide(characters.Protagonist);
            await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.talking, ƒS.positionPercent(40, 100));
            await ƒS.update();

            await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0009);
            await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0010);
            await ƒS.Sound.fade(sound.Town, 0, 0, false);
            await ƒS.Speech.hide();
            await ƒS.Character.hideAll();

            choice = {
              choice1: "Andere Spieler suchen, um sie zu erledigen",
              choice2: "Zum Portal gehen und schauen, ob alles okay ist"
            };

            answer = await ƒS.Menu.getInput(choice, "choice");
            switch (answer) {
              case choice.choice1:
                await ƒS.Character.hide(characters.Protagonist);
                await ƒS.update(1);
                break;
              case choice.choice2:

                await ƒS.Location.show(locations.Blackscreen);
                await ƒS.update(1);
                await ƒS.Text.print(text.Narrator.T0000);

                await ƒS.Location.show(locations.Außerhalb);
                await ƒS.update(1);

                await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(40, 100));
                await ƒS.update();

                ƒS.Sound.fade(sound.Radio, 0.5, 0.5, false);
                await ƒS.Character.animate(characters.Items, characters.Items.pose.funk, animation.shakyIn);
                await ƒS.Character.animate(characters.Items, characters.Items.pose.funk, animation.shakyOut);
                await ƒS.Character.animate(characters.Items, characters.Items.pose.funk, animation.shakyIn);
                await ƒS.Sound.fade(sound.Radio, 0, 0, false);
                await ƒS.Speech.tell(characters.Unknown, text.Rowan.T0000);
                await ƒS.Character.hide(characters.Items);
                await ƒS.Speech.hide();
                await ƒS.update(1);

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
      await ƒS.Character.hide(characters.Protagonist);
      await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.talking, ƒS.positionPercent(40, 100));
      await ƒS.update();

      await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0001);
      await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0002);
      await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0003);
      await ƒS.Character.hide(characters.Protagonist);
      await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(40, 100));
      await ƒS.update();

      await ƒS.Character.hide(characters.Tane);
      await ƒS.Character.show(characters.Tane, characters.Tane.pose.talking, ƒS.positionPercent(80, 100));
      await ƒS.update();

      await ƒS.Speech.tell(characters.Tane, text.Tane.T0002);
      await ƒS.Character.hide(characters.Tane);
      await ƒS.Character.show(characters.Tane, characters.Tane.pose.normal, ƒS.positionPercent(80, 100));
      await ƒS.update();

      await ƒS.Character.hide(characters.Protagonist);
      await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.talking, ƒS.positionPercent(40, 100));
      await ƒS.update();

      await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0004);
      await ƒS.Character.hide(characters.Protagonist);
      await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(40, 100));
      await ƒS.update();

      await ƒS.Character.hide(characters.Tane);
      await ƒS.Character.show(characters.Tane, characters.Tane.pose.talking, ƒS.positionPercent(80, 100));
      await ƒS.update();

      await ƒS.Speech.tell(characters.Tane, text.Tane.T0003);
      await ƒS.Character.hide(characters.Tane);
      await ƒS.Character.show(characters.Tane, characters.Tane.pose.normal, ƒS.positionPercent(80, 100));
      await ƒS.update();

      await ƒS.Character.hide(characters.Protagonist);
      await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.talking, ƒS.positionPercent(40, 100));
      await ƒS.update();

      await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0005);
      await ƒS.Character.hide(characters.Protagonist);
      await ƒS.update();

      await goAwayAnimation();
      await ƒS.Sound.fade(sound.Town, 0, 0, false);
    }

    async function goAwayAnimation() {

      let animation = {

        leftOut: {
          start: { translation: ƒS.positionPercent(40, 100) },
          end: { translation: ƒS.positionPercent(15, 100) },
          duration: 2,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        }
      }

      await ƒS.Character.hide(characters.Protagonist);
      await ƒS.update();

      await ƒS.Character.animate(characters.Protagonist, characters.Protagonist.pose.smileOp, animation.leftOut);

      await ƒS.Character.hide(characters.Tane);
      await ƒS.Character.show(characters.Tane, characters.Tane.pose.talking, ƒS.positionPercent(80, 100));
      await ƒS.update();

      await ƒS.Speech.tell(characters.Tane, text.Tane.T0004);
      ƒS.Inventory.add(items.FunkTane);
      await ƒS.Text.print("Du hast ein Funkgerät erhalten.");
      await ƒS.Speech.hide();
      await ƒS.Character.hideAll();
      await ƒS.update(1);
    }

    return "Wald";

  }
}

