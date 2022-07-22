namespace Template {
  export async function Introduction(): ƒS.SceneReturn {



    let text = {
      Prof: {
        T0000: "Hello there! Welcome to the world of monster people! My name is Pine! People call me the monster prof!",
        T0001: "This world is inhabited by many different kind of monster people. I myself study the differences between monster people and humans.",
        T0002: "The only thing we know until now about monster people is that they one day appeared and ever since then live alongside the human.",
        T0003: "But enough with the exposition. Tell me about yourself. What is your name ?"
      }
    };
    
    await ƒS.Speech.tell(character.Prof, text.Prof.T0000),
      //await ƒS.Location.show(locations.HFU);
    //await ƒS.Character.show(character.Prof, character.Prof.pose.normal, ƒS.positionPercent(65, 155));
    //Show Professor here
    await ƒS.update(2);
    await ƒS.Speech.tell(character.Prof, text.Prof.T0001),
      await ƒS.Speech.tell(character.Prof, text.Prof.T0002),
      await ƒS.Speech.tell(character.Prof, text.Prof.T0003),
      saveData.Protagonist.name = await ƒS.Speech.getInput();
    await ƒS.Speech.tell(character.Prof, "I see. So your name is " + saveData.Protagonist.name);
    await ƒS.Speech.tell(character.Prof, "So, " + saveData.Protagonist.name + ", your own adventure is about to start. A world of monsters awaits. Let´s Go.");
    await ƒS.Location.show(locations.Black);
    //await ƒS.Character.hide(character.Prof);

    saveData.state.a += 12;
    await ƒS.update(1); 
  }
};