import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
  // const x = useParams(); => id(App에서 설정한 path 변수값) 담김 => {'x' => 11351}
  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${ id }`)
    ).json();

    setMovie(json.data.movie);
    setLoading(false);
  }
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {
        loading ?
          (<h1>Detail Loading...</h1>) :
          (
            <div>
              <h1>{ movie.title } ({ movie.year })</h1>
              <img src={ movie.medium_cover_image } alt={ movie.title }/>
              <p>{ movie.description_full }</p>
            </div>
          )
      }
    </div>
  )
}

export default Detail;
