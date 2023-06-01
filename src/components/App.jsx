import { ImageGallery } from "./ImageGallery";
import { Searchbar } from "./Searchbar";
import { useState } from "react";

export const App = () => {
  const [searchImages, setSearchImages] = useState('');
  const [page, setPage] = useState(1);

 const handleSearch = (searchImages) => {
   setSearchImages(searchImages);
  }
  
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: '16px',
        paddingBottom: '24px',
        height: '100vh',
        fontSize: 40,
        color: '#010101'
       
      }}
    >
      <Searchbar handleSearch={handleSearch} />
      <ImageGallery searchImages={searchImages} page={page} />
    </div>
  );
};



