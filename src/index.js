import TalkService from './common/talk.service';
import Layout from './layout/index';
import SpeakerList from './speakers/list/index';

var modifVue = new SpeakerList();

var layout = new Layout();
layout.render();


var router = () => {
    if (location.hash == '#speakers-list') {
        // TODO afficher vue liste des présentateurs
        modifVue.render("main-view");

    } else if (location.hash == '#sessions-list') {
        // TODO afficher vue liste des sessions
    } else {
        // TODO afficher vue par défaut
    }
}
window.addEventListener('load', () => {
    window.onhashchange = () => {
        router();
    };
    router();
});