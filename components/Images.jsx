import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router';

class Image extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    };
  }

  componentDidMount() {
    Axios.get('http://localhost:8081/images')
      .then(res => {
        this.setState({ images: res.data });
      });
  }
  render() {
    return (
      <div>
        {this.state.images.map(image =>
          <div className="picogram-image-wrapper" key={image.id}>
            <Link to="/image/:image.id">
              <img src={"http://localhost:8081/" + image.file} alt={image.description} className="picogram-image" />
              <span className="picogram-image-description">{image.description}</span>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default Image;
