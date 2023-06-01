import { ImageGalleryItem } from "components/ImageGalleryItem";
import { List, Button } from '../styled'
import { serchPhoto } from "servises/fetch_img";
import { Vortex } from 'react-loader-spinner';
import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";

export const ImageGallery = ({ searchImages, page }) => {
    const [images, setImages] = useState([]);
    const [currentImages, setCurrentImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        if (!searchImages) return;
        setIsLoading(true);
        setImages([]);
        setCurrentPage(1);
        serchPhoto(searchImages, page)
            .then(({ data }) => {
                setImages(images => [...images, ...data.hits]);
                setCurrentImages(data.hits)
            })
            .catch((error) => setError(error))
            .finally(() => {
                setIsLoading(false)
            })

    }, [page, searchImages]);
    
    useEffect(() => {
        if (!searchImages || currentPage === 1) return;
        setIsLoading(true);
        serchPhoto(searchImages, currentPage)
            .then(({ data }) => {
                setImages(images => [...images, ...data.hits]);
                setCurrentImages(data.hits)
            })
            .catch((error) => setError(error))
            .finally(() => {
                setIsLoading(false)
            })

    }, [currentPage]);

    const handleMoreLoad = () => {
        setCurrentPage(prev => prev + 1)
    }

    return (
        <>
            <List className="gallery">
                
                {isLoading && <Vortex
                    visible={true}
                    height="280"
                    width="280"
                    ariaLabel="vortex-loading"
                    wrapperStyle={{}}
                    wrapperClass="vortex-wrapper"
                    colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                />}
                
                {error && <div>Something went wrong. Try again later</div>}
                
                {images && images.map((image) =>
                    <ImageGalleryItem key={image.id} image={image} />)}
                
            </List>
            
            {currentImages.length > 0 && <Button onClick={handleMoreLoad}>Load More</Button>}
    
        </>
    )
};


ImageGallery.propTypes = {
    searchImages: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
};