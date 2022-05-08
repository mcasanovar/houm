import axios from 'axios'

const axiosClient = axios.create()

axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
}

export const getRequest = async (URL) => {
  return axiosClient.get(`${URL}`).then((response) => response)
}

export const postRequest = async (URL, payload) => {
  return axiosClient.post(`${URL}`, payload).then((response) => response)
}
