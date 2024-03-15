import React from "react";

const Thumbnails = ({ images, current, onChange }) => {
  return (
    <div className="thumbnails">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Thumbnail ${index}`}
          className={index === current ? 'active' : ''}
          onClick={() => onChange(index)}
        />
      ))}
    </div>
  )
}
class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentImageIndex: 0
    }
  }
  handleChangeImage = (index) => {
    this.setState({ currentImageIndex: index })
  }
  handlePrevImage = () => {
    const { currentImageIndex } = this.state
    const newIndex = (currentImageIndex - 1 + this.props.images.length) % this.props.images.length
    this.setState({ currentImageIndex: newIndex })
  };
  handleNextImage = () => {
    const { currentImageIndex } = this.state
    const newIndex = (currentImageIndex + 1) % this.props.images.length
    this.setState({ currentImageIndex: newIndex })
  }
  render() {
    const { images } = this.props
    const { currentImageIndex } = this.state

    return (
      <div className="carousel">
        <div className="main-image-container">
          <div className="arrow left" onClick={this.handlePrevImage}></div>
          <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} onClick={this.handleNextImage} />
          <div className="arrow right" onClick={this.handleNextImage}></div>
        </div>
        <Thumbnails images={images} current={currentImageIndex} onChange={this.handleChangeImage} />
      </div>
    )
  }
}
export default Carousel