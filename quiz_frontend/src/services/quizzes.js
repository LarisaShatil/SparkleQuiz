import axios from 'axios'

const baseUrl = '/api/quizzes'

const getAll = async () => {
  const res = await axios.get(baseUrl)

  return res.data
}

export default {
  getAll,
}
