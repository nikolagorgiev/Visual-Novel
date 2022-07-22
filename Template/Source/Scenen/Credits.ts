namespace Template {
    export async function Credits(): ƒS.SceneReturn {
        ƒS.Sound.fade(sound.End, 0.5, 2, true);
        let endScreen: string =
            "<strong><center>Thank you for playing!</strong><br></br> \
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
        await ƒS.Location.show(locations.Splash);
        await ƒS.update(1);
        ƒS.Text.print(endScreen + "The end");
    }
}