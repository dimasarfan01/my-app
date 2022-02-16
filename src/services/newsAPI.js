import axios from 'axios';

const baseUrl = 'http://localhost:8080';

const getAllNewsAPI = async ({ page = 1, limit = 1, category = '' }) => {
  try {
    const response = await axios({
      url: `${baseUrl}/api/v1/news?limit=${limit}&page=${page}&category=${category}`,
      method: 'GET',
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { getAllNewsAPI };
