import { fetchImgByQury } from "./js/pixabay-api";
import { createGalleryCard } from "./js/render-functions";
import { toggleClass } from "./js/render-functions";
import iziToast from "izitoast";
import { simpleBox } from "./js/render-functions";


const formEl = document.querySelector('.form');
const galleryEl = document.querySelector('.gallery');
const loader = document.querySelector('.js-loader');



const searchSubmit = e =>{
    e.preventDefault();
    
    toggleClass(loader,'visually-hidden');
    galleryEl.innerHTML = ''
    const inputValue = e.currentTarget.elements.input.value.trim();
    if ( inputValue === ''){
        iziToast.error({
            title:'Error',
            message:'Please enter your search query'
        })
        toggleClass(loader,'visually-hidden');
       
        return;
    };

    
        fetchImgByQury(inputValue)
        .then(data=>{
            if(data.total === 0){
                iziToast.error({
                    title:'Error',
                    message:'Sorry, there are no images matching your search query. Please try again!'
                })
    
                galleryEl.innerHTML = '';
                toggleClass(loader,'visually-hidden');
                formEl.reset();
    
                return;
            }
            
            const galleryTemplate = data.hits.map(el=>createGalleryCard(el)).join('');
            toggleClass(loader,'visually-hidden');
            galleryEl.innerHTML = galleryTemplate;
            simpleBox();            
            
            formEl.reset()
        
        })    
           .catch(err=>console.log(err));
    
 
};

formEl.addEventListener('submit', searchSubmit);

