import TalkService from '../../common/talk.service';
let $ = require("jquery");
let talk = new TalkService();
export default class SessionList {

    render(idView) {
        let $modif = $('#' + idView);
        //On clean le truc
        $modif.empty();
        $modif.append("<ul>")
        talk.findAllSessions().then(
            sessions => JSON.parse(sessions).forEach(session => {
                $modif.append("<li> <a href=?id=" + session.id + "#sessions-list>" + session.title + " </li>");
            }),
            erreur => console.log(erreur)
        );
    }
    renderId(idView) {
        let $modif = $('#' + idView);
        let searchParam = new URLSearchParams(location.search);
        //On clean le truc
        $modif.empty();
        talk.findSessionById(searchParam.get("id")).then(
            sessions => JSON.parse(sessions).forEach(session => {
                $modif.append("<h1>"+session.title+"</h1>")
                $modif.append("<p>"+session.desc+"</p>");
            }),
            erreur => console.log(erreur)
        );
    }
}