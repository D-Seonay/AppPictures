import React from 'react';

const api_key = "40711014-cce960eebdea59bf57eef5480"

export default function GetPictures(keyword) {
    const url = 'https://pixabay.com/api/?key=' + api_key + "&q" + keyword + "&image_type=photo&pretty=true"
    return fetch(url)
    .then((reponse) => reponse.json)
    .catch((error) => console.log(error))
}
