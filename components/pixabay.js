import React from 'react';

const api_key = "40711014-cce960eebdea59bf57eef5480";

export async function getPictures(keyword) {
    const url = `https://pixabay.com/api/?key=${api_key}&q=${keyword}&image_type=photo&pretty=true`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
export default getPictures;
