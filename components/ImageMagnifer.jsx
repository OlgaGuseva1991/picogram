var ImageMagnifer = require('react-image-magnifier');

var App = React.createClass({

    render () {
        return (
            <ImageMagnifier
                image={{
                    src: "img/beach-small.jpg",
                    width: 300,
                    height: 200
                }}
                zoomImage={{
                    src: "img/beach-large.jpg",
                    width: 600,
                    height: 400
                }}
                cursorOffset={{ x: 80, y: -80 }}
            />
        );
    }
});
