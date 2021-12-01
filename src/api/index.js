import axios from "axios";

const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          "x-rapidapi-key":
            "3a1b5d6699msh68d59492af6ccf4p1d6cfejsneff14f26830c",
        },
      }
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getWeatherData = async (lat, lng) => {
  try {
    const { data } = await axios.get(
      "https://community-open-weather-map.p.rapidapi.com/weather",
      {
        params: {
          lat: lat,
          lon: lng,
        },
        headers: {
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key":
            "3a1b5d6699msh68d59492af6ccf4p1d6cfejsneff14f26830c",
        },
      }
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};

export { getPlacesData, getWeatherData };
