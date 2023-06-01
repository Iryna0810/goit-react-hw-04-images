import { ImageGalleryItem } from "components/ImageGalleryItem";
import { Component } from "react";
import { List, Button } from '../styled'
import { serchPhoto } from "servises/fetch_img";
import { Vortex } from 'react-loader-spinner';
import PropTypes from "prop-types";

export class ImageGallery extends Component{

    state = {
        searchImages: [],
        currentImages: [],
        isLoading: false,
        error: '',
        currentPage: 1,
    }

    componentDidUpdate(prevProps, prevState) {
        const { searchImages, page } = this.props;
        const { currentPage } = this.state;

        if (prevProps.searchImages !== this.props.searchImages) {
            this.setState({
                isLoading: true,
                searchImages: [],
            });
                serchPhoto(searchImages, page)
                    .then(({ data }) => {    
                        this.setState(prevState => {
                            return {
                                searchImages: [...prevState.searchImages, ...data.hits],
                                currentImages: data.hits,
                            }
                        }             
                        )
                    })
                     .catch((error) => this.setState({error}))
                     .finally(() => {
                         this.setState({ isLoading: false })
                     }
            )            

        };

        if (prevState.currentPage !== this.state.currentPage) {
               this.setState({
                   isLoading: true,
            }) 
                serchPhoto(searchImages, currentPage)
                    .then(({ data }) => {    
                        this.setState(prevState => {
                            return {
                                searchImages: [...prevState.searchImages, ...data.hits],
                                currentImages: data.hits,
                            }
                        }             
                        )
                    })
                     .catch((error) => this.setState({error}))
                     .finally(() => {
                         this.setState({ isLoading: false })
                     }
            )            
        }
    }   

    handleMoreLoad = () => {
    this.setState(prevState => { return { currentPage: prevState.currentPage + 1 }; }
    );
  } 

render() {
    const { searchImages, isLoading, error, currentImages } = this.state;

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
                
        {searchImages && searchImages.map((image) =>
            <ImageGalleryItem key={image.id} image={image} />)}
                
            </List>
            
        {currentImages.length> 0 && <Button onClick={this.handleMoreLoad}>Load More</Button>}
        </>
        )
    }
};

ImageGallery.propTypes = {
    searchImages: PropTypes.string.isRequired,
};



    
