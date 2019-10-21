import axios from 'axios'


export const getGif = async (input) => {
  try {
    const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=4U0PVhxOfDITL46CHMTrUUXOxSs0J4Wg&q=${input}&limit=25&offset=0&rating=G&lang=en`)

    return response.data.data[Math.floor(Math.random() * response.data.data.length - 1)].images.original.url
  } catch (error) {

  }
}
export default getGif

// export const getGames = async function () {
//   let response = await axios.get(`https://flynn-cors.herokuapp.com/https://api-v3.igdb.com/games?search=zelda&fields=id,name,screenshots`, {
//     headers: {
//       "user-key": 'e10cd9cc47a86de8828eb2ef7baf41e1'
//     }
//   })
//   return response.data
// }
// export default getGames