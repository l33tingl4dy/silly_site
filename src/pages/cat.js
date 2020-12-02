import React from "react"
import Loadable from "@loadable/component"
const e = React.createElement;

const Cat = props => {

    return <img src = "http://placekitten.com/200/300" / >
}


const LoadCat = Loadable(() =>
    import ("./Cat"))


{
    /* const domContainer = document.querySelector('#cat');
    ReactDOM.render(e(Cat), domContainer); */
}

export default LoadCat;