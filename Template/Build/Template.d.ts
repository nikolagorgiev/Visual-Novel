declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let dataForSave: {
        Protagonist: {
            name: string;
        };
    };
    function incrementSound(): void;
    function decrementSound(): void;
    let gameStarted: boolean;
}
declare namespace Template {
    let characters: {
        Protagonist: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                smile: string;
                mad: string;
                happy: string;
                shocked: string;
                talking: string;
                shockedOp: string;
                smileOp: string;
            };
        };
        Narrator: {
            name: string;
        };
        Unknown: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        Tane: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                smile: string;
                shocked: string;
                talking: string;
            };
        };
        Rowan: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        Oscar: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                scared: string;
                normal: string;
            };
        };
        Items: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                funk: string;
                hammer: string;
                tree: string;
            };
        };
        Location: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                hoehle: string;
            };
        };
    };
}
declare namespace Template {
    let items: {
        Hammer: {
            name: string;
            description: string;
            image: string;
        };
        FunkTane: {
            name: string;
            description: string;
            image: string;
        };
        FunkRowan: {
            name: string;
            description: string;
            image: string;
        };
    };
}
declare namespace Template {
    let locations: {
        Dorf: {
            name: string;
            background: string;
        };
        Außerhalb: {
            name: string;
            background: string;
        };
        Hoehle: {
            name: string;
            background: string;
        };
        Portal: {
            name: string;
            background: string;
        };
        Wald: {
            name: string;
            background: string;
        };
        Blackscreen: {
            name: string;
            background: string;
        };
        Splash: {
            name: string;
            background: string;
        };
    };
}
declare namespace Template {
    let sound: {
        Bush: string;
        Dramatic: string;
        Forest: string;
        Hammer: string;
        Radio: string;
        Running: string;
        Town: string;
        End: string;
    };
}
declare namespace Template {
    function Introduction(): ƒS.SceneReturn;
    function Dorf_Tane(): ƒS.SceneReturn;
}
declare namespace Template {
    function Dorf_Oscar(): ƒS.SceneReturn;
}
declare namespace Template {
    function Wald(): ƒS.SceneReturn;
}
declare namespace Template {
    function Höhle(): ƒS.SceneReturn;
}
declare namespace Template {
    function Portal_A(): ƒS.SceneReturn;
    function Portal_B(): ƒS.SceneReturn;
}
declare namespace Template {
    function Credits(): ƒS.SceneReturn;
}
