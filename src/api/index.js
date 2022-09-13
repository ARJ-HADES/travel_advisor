import axios from 'axios'


 
export const getPlacesData = async (type,sw,ne) => {
    try {
        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,  {

            params: {
              bl_latitude: sw.lat ,
              tr_latitude: ne.lat ,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'X-RapidAPI-Key': 'cb711ccdc8msh7c2d738c0c9ea61p1c94acjsned3aa0a17f9e',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          });


        return data
    } catch (error) {
        console.log(error)
    }
}