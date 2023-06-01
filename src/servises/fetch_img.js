    import axios from 'axios';

    const API_KEY = '34769662-caad36a1f3170139f3332b200';  
    const BASE_URL = 'https://pixabay.com/api/';

    const baseSearchParameters = {
        
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch:'true',
    };

    export const serchPhoto = (searchImages, currentPage) => {

        const searchParameters = new URLSearchParams({
            q: searchImages,
            page: Number(currentPage),
            per_page: 12,
            ...baseSearchParameters,
        });

        try {
            return axios.get(`${BASE_URL}/?${searchParameters}`);
        }
        
        catch (error) {
            throw new Error(error.message);
        }
};
    


