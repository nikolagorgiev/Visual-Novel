namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  export let dataForSave = {
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
  let volume: number = 1.0;

  export function incrementSound(): void {
    if (volume < 1.0) {
      volume += 0.1;
      ƒS.Sound.setMasterVolume(volume);
    }
  }

  export function decrementSound(): void {
    if (volume > 0) {
      volume -= 0.1;
      ƒS.Sound.setMasterVolume(volume);
    }
  }

  // Menu
  let gameMenu: ƒS.Menu;

  async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option);
    if (_option == inGameMenu.save) {
      await ƒS.Progress.save();
    }
    else if (_option == inGameMenu.load) {
      await ƒS.Progress.load();
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

  export let gameStarted: boolean = false;

  //Speicherfunktion
  document.addEventListener("keydown", hndKeypress);
  async function hndKeypress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.F4:
        console.log("Save");
        await ƒS.Progress.save();
        break;

      case ƒ.KEYBOARD_CODE.F9:
        console.log("Load");
        await ƒS.Progress.load();
        break;

      case ƒ.KEYBOARD_CODE.I:
        if (gameStarted) {
          ƒS.Inventory.open();
        }
        break;

      case ƒ.KEYBOARD_CODE.ESC:
        gameMenu.open();
        break;
    }
  }

  window.addEventListener("load", start);
  function start(_event: Event): void {
    //Menu
    gameMenu = ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");
    gameMenu.close();


    ƒS.Speech.hide();
    let scenes: ƒS.Scenes = [
      //Story
      { scene: Introduction, name: "Introduction" },
      { scene: Dorf_Tane, name: "Dorf_Tane", id: "again" },
      { scene: Dorf_Oscar, name: "Dorf_Oscar", id: "Dorf_Oscar" },
      { scene: Wald, name: "Wald", id: "Wald" },
      { scene: Höhle, name: "Höhle", id: "Höhle" },
      { scene: Portal_A, name: "Portal", id: "Portal_Bad" },
      { scene: Portal_B, name: "Portal", id: "Portal_Good" },
      { scene: Credits, name: "Credits", id: "Credits" }
    ];

    //start the sequence
    ƒS.Progress.go(scenes);
  }

}