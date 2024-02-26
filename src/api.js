import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 23ydWC1qn_aZWl76P8h78kN4NEUa-y7gDnwC5uYq1dE",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
