import React from "react";
import Loadable from "@loadable/component";
var e = React.createElement;

var Cat = function Cat(props) {

    return React.createElement("img", { src: "http://placekitten.com/200/300" });
};

var LoadCat = Loadable(function () {
    return import("./Cat");
});

{
    /* const domContainer = document.querySelector('#cat');
    ReactDOM.render(e(Cat), domContainer); */
}

export default LoadCat;