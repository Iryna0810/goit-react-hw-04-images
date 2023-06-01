// import { nanoid } from "nanoid";
import { LiStyled } from '../styled'
import { Modal } from '../Modal/Modal'
import PropTypes from "prop-types";
import { Component } from "react";
import {Item} from '../styled'
import { useState } from 'react';

export const ImageGalleryItem = ({image}) => {
  const [showModal, setShowModal] = useState(false);

   const toggleModal = () => {
     setShowModal(!showModal)
   }


    const { id, webformatURL, largeImageURL } = image;

    return (
      <>
        {showModal && (<Modal onCloseModal={toggleModal}>
        <Item src={largeImageURL} alt=""></Item>
        </Modal>)}

        <LiStyled onClick={toggleModal} key={id} className="gallery-item">
        <img src={webformatURL} alt="" />
        </LiStyled>
        </>
    )
  }


ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
};
