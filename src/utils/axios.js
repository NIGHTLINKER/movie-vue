import axios from "axios"

const request=axios.create({
	baseURL:"https://api.themoviedb.org/3",
	params:{
		api_key:"3710db0b82c07ce7fc0cbda6a61b8a41",
		language:"ko-KR"
	}
});

export const movieApi={
	nowPlaying:()=>request.get("/movie/now_playing"),
	popular:()=>request.get("/movie/popular"),
	upComing:()=>request.get("/movie/upcoming"),
	movieDetail:(id)=>request.get(`/movie/${id}`, {
		params:{append_to_response:"videos"},
	}),
	search:(keyword)=>request.get("/search/movie", {
		params:{
			query:keyword,
		},
	})
}