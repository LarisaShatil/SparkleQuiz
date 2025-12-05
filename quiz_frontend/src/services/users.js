import axios from 'axios'
const baseUrl = '/api/users'

const register = async ({name, email, password}) => {
  const result = await axios.post(baseUrl,
    { name, email, password }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

  return result.data
}

export default {
  register,
}