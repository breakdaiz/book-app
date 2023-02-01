import React, { Component } from "react";

class Gallery extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { items } = this.props;
    return (
      <div>
        {items
          ? items.map((item, index) => {
              let { title, imageLinks, infoLink } = item.volumeInfo;
              return (
                <a href={infoLink} target="_blank" key={index} className="book">
                  <img
                    className="book-img"
                    src={imageLinks !== undefined ? imageLinks.thumbnail : null}
                    alt="book-display"
                  />
                  <div className="book-text"> {title}</div>
                </a>
              );
            })
          : null}
      </div>
    );
  }
}

export default Gallery;
