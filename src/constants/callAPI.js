import axios  from "axios";
const axiosClient = axios.create({
    baseURL: 'https://6236c218b08c39a3af79b351.mockapi.io/api',
    headers: {
        'content-type': 'application/json',
    }
})
export async function getUsers() {
    try {
      const response = await axios.get('/users');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }