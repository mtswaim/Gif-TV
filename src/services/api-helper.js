import axios from 'axios'



export const getGames = async function () {
  let response = await axios(`https://api-v3.igdb.com/games/`, {
    headers: {
      "user-key": 'e10cd9cc47a86de8828eb2ef7baf41e1'
    }
  })
  return response.data
}
export default getGames

