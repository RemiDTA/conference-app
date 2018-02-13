//Import du /index par defaut
import Layout from './layout';
import SpeakerList from './speakers/list';
import SessionList from './sessions/list';

var modifVueSpeak = new SpeakerList();
var modifVueSess = new SessionList();

var layout = new Layout();
layout.render();


var router = () => {
    if (location.hash == '#speakers-list') {
        modifVueSpeak.render("main-view");
    } else if (location.hash == '#sessions-list' && location.search == '') {
        modifVueSess.render("main-view");
    } else if (location.search != null)
    {
        modifVueSess.renderId("main-view");
    }
    else
    {
        layout.render();
    }
}
window.addEventListener('load', () => {
    window.onhashchange = () => {
        router();
    };
    router();
});