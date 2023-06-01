// import { nanoid } from "nanoid";
import { LiStyled } from '../styled'
import { Modal } from '../Modal/Modal'
import PropTypes from "prop-types";
import { Component } from "react";
import {Item} from '../styled'

export class ImageGalleryItem extends Component {
  state = {
      showModal: false,
  };
  
   toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
    } 

  render() {
    const { id, webformatURL, largeImageURL } = this.props.image;

    return (
      <>
        {this.state.showModal && (<Modal onCloseModal={this.toggleModal}>
        <Item src={largeImageURL} alt=""></Item>
        </Modal>)}

        <LiStyled onClick={this.toggleModal} key={id} className="gallery-item">
        <img src={webformatURL} alt="" />
        </LiStyled>
        </>
    )
  }
};

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  toggleModal: PropTypes.func,
};
