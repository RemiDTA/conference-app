import TalkService from '../../common/talk.service';
let $ = require("jquery");
let talk = new TalkService();
export default class SpeakerList {

    render(idView) {
        let $modif = $('#' + idView);
        //On clean le truc
        $modif.empty();
        $modif.append("<ul>")
        talk.findAllSpeakers().then(
            speakers => JSON.parse(speakers).forEach(speaker => {
                $modif.append("<li> " + speaker.firstname + " </li>");
            }),
            erreur => console.log(erreur)
        );


    }
}