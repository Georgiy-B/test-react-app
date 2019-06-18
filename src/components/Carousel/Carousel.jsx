import React from 'react';
import './Carousel.css';

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      leftItemIndex: 0
    };

    this.onLeftSlide = this.onLeftSlide.bind(this);
    this.onRightSlide = this.onRightSlide.bind(this);
  }

  componentDidUpdate() {
    let offsetLeft = 0;

    for (let i = 0; i < Math.min(this.refs.scroller.children.length, this.state.leftItemIndex); i++) {
        offsetLeft += this.refs.scroller.children[i].offsetWidth;
    }

    if (this.refs.carousel) {
      this.refs.carousel.scrollLeft = offsetLeft;
    };
  }

  onLeftSlide() {
    if (this.state.leftItemIndex > 0) {
      this.setState({
        leftItemIndex: this.state.leftItemIndex - 1
      });
    }
  }

  onRightSlide() {
    if (this.refs.carousel.offsetWidth < this.refs.scroller.offsetWidth - this.refs.carousel.scrollLeft) {
      this.setState({
        leftItemIndex: this.state.leftItemIndex + 1
      });
    }
  }

  render() {
    const hidden = !!this.props.children && this.props.children.length === 0;

    return (
      <div className={`carousel-container ${this.props.className}`}>
        <button onClick={this.onLeftSlide} className={hidden ? 'd-none' : ''}>
          <img src={`${process.env.PUBLIC_URL}/img/arrow-left.png`} alt="Left"/>
        </button>
        <div className="carousel" ref="carousel">
          <div ref="scroller">
            {this.props.children}
          </div>
        </div>
        <button onClick={this.onRightSlide} className={hidden ? 'd-none' : ''}>
          <img src={`${process.env.PUBLIC_URL}/img/arrow-right.png`} alt="Rigth"/>
        </button>
      </div>
    );
  }
}

export default Carousel;