import request from "superagent";

const internalApiURL = "http://localhost:3001/";
// const weatherURL = 'https://api.openweathermap.org/data/2.5/find?q={0}&appid=73e726a73af3f97bfe6eb3fdb989d3ba&units=metric'
// const photoURl = `http://openweathermap.org/img/wn/${idFormat}@2x.png{1}`

export function getTemp(city) {
  const weatherURL = `https://api.openweathermap.org/data/2.5/find?q=${city}&appid=73e726a73af3f97bfe6eb3fdb989d3ba&units=metric`;
  return request.get(weatherURL).then((response) => response.body.list[0]);
}

export function getWeather(city) {
  const weatherURL = `https://api.openweathermap.org/data/2.5/find?q=${city}&appid=73e726a73af3f97bfe6eb3fdb989d3ba&units=metric`;
  return request.get(weatherURL).then((response) => response.body.weather[0]);
}
export function getPhoto(id) {
  const photoURl = `http://openweathermap.org/img/wn/${id}@2x.png`;
  return request.get(photoURl).then((response) => {
    return response;
  });
}

export function getComments() {
  return request.get("http://localhost:3001/comments");
}

export function postNewComment(newComment) {
  return request
    .post("http://localhost:3001/comments/add")
    .send(newComment)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err.message);
    });
}
