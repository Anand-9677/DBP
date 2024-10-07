import axios from "axios";

const Axios = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNTE1MDUxMGI4OTI3OWVhMzA5ZGIzMDU0OTcxMzg2YSIsIm5iZiI6MTcyODE4NzE3OC40MDA3MjEsInN1YiI6IjY3MDIwN2ExYzNjNWIzYTFhOGY3OWM0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p-nYabjGnqQ0inmriLzsWWy9nyE-lnPQYKgJfyWihvc'
    }
});

export default Axios;