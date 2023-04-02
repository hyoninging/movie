import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import View from "../components/View";
import styles from "./Home.module.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovies] = useState([]);
  const { id } = useParams();
  useEffect(() => {
        const getDetail = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
            setMovies(json.data.movie);
            setLoading(false);
        };
    getDetail();
    }, [id]);
//   const getMovie = async () => {
//     const json = await (
//       await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
//     ).json();
//     console.log(json);
//   };
//   useEffect(() => {
//     getMovie();
//   }, []);
  return (
    <div  className={styles.container}>
      {loading ? (
        <div  className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div>
            <View
              key={movie.id}
              id={movie.id}
              year={movie.year}
              description={movie.description_intro}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              genres={movie.genres}
            />
        </div>
      )}
    </div>
  )
}
export default Detail;