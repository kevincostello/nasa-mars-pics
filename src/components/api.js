import axios from "axios";

const request = axios.create({
  baseURL: "https://api.nasa.gov/mars-photos/api/v1/",
});
export const getPictures = (
  rover = "curiosity",
  sol = 1200,
  camera = "FHAZ",
  api_key = "jaGJnQVJjY2UjOe0wdG120udV6fldqHG7E2gxsWf"
) => {
  return request
    .get(`/rovers/${rover}/photos`, { params: { sol, camera, api_key } })
    .then(({ data }) => {
      console.dir(data);
      return data.photos;
    })
    .catch((err) => {
      return console.dir(err);
    });
};

export const getMaxSol = (
  rover = "curiosity",
  api_key = "jaGJnQVJjY2UjOe0wdG120udV6fldqHG7E2gxsWf"
) => {
  return request
    .get(`/manifests/${rover}`, { params: { api_key } })
    .then(({ data }) => {
      console.dir(data);
      return data.photo_manifest;
    })
    .catch((err) => {
      return console.dir(err);
    });
};

// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY

// https://api.nasa.gov/mars-photos/api/v1/rovers/rovers/curiosity/photos?sol=1200&api_key=DEMO_KEY

// https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity/?api_key=jaGJnQVJjY2UjOe0wdG120udV6fldqHG7E2gxsWf

// https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=1000&camera=FHAZ&api_key=jaGJnQVJjY2UjOe0wdG120udV6fldqHG7E2gxsWf

// https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=1000&api_key=jaGJnQVJjY2UjOe0wdG120udV6fldqHG7E2gxsWf
