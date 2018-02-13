export default class Layout {
    render(){
        document.body.innerHTML=require("html-loader!./layout.html");
    }
}