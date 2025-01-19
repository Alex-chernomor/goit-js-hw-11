const baseUrl = "https://pixabay.com/api/";

export const fetchImgByQury = seaechQuery =>{
    const paramsUrl = new URLSearchParams({
        key:"48264629-b593a4428d313ae96204c3007",
        q:seaechQuery,
        image_type:'photo',
        orientation:'horizontal',
        safesearch:true,
    });

    return fetch(`${baseUrl}?${paramsUrl}`)
        .then(response=>{
            if (!response.ok) {
                throw new Error(response.status);
              }
    
            return response.json();
        });
};