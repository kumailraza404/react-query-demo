import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error } = useQuery(
    "super-heroes",
    fetchSuperHeroes,
    {
      refetchInterval: 10000,
      //10 seconds
    }
  );

  if (isLoading) {
    return <h2> loading...</h2>;
  }
  if (isError) {
    return <h2> {error.message}</h2>;
  }

  return (
    <div>
      <h1>RQSuperHeroes page</h1>
      {data?.data.map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </div>
        );
      })}
    </div>
  );
};
