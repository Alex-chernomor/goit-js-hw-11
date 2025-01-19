import SimpleLightbox from "simplelightbox";

export const createGalleryCard = imgInfo =>{
    return `
        <li class ='card'>
    <a class = 'gallery-link' href = '${imgInfo.largeImageURL}'>
        <img 
            class = 'card__image'
            src='${imgInfo.webformatURL}' 
            alt='${imgInfo.tags}'>

            <div class = 'stats'>
                <p class = 'stats-item'>Likes ${imgInfo.likes}</p>
                <p class = 'stats-item'>Views ${imgInfo.views}</p>
                <p class = 'stats-item'>Comments ${imgInfo.comments}</p>
                <p class = 'stats-item'>Downloads ${imgInfo.downloads}</p>
            </div>
      
<a/>
    </li>
    `
};


// //<p class="stats-item">
// <i class="material-icons">thumb_up</i>
// {{likes}}
// </p>
// <p class="stats-item">
// <i class="material-icons">visibility</i>
// {{views}}
// </p>
// <p class="stats-item">
// <i class="material-icons">comment</i>
// {{comments}}
// </p>
// <p class="stats-item">
// <i class="material-icons">cloud_download</i>
// {{downloads}} 

export const toggleClass = function(elem, className){
    return elem.classList.toggle(className)
};

export const simpleBox = function(){
    return new SimpleLightbox('.gallery a');
};