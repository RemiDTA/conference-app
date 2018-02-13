export default class TalkService {
    findAllSpeakers() {
        return new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();
            req.open('GET', 'http://localhost:3000/speakers', true);
            req.onreadystatechange = (aEvt) => {
                if (req.readyState == 4) {
                if (req.status == 200) {
                    //console.log("Dans le talkservice"+req.response);
                    resolve(req.response); // corps de la réponse
                }
                else
                    reject("Erreur pendant le chargement de la page");
            }}
            req.send(null);
        }
        )
    };
}