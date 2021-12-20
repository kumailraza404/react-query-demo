import { useParams } from "react-router-dom";
import { useSuperHeroData } from "../hooks/useSuperHeroData";

export const RQSuperHeroPage = () => {
  const { heroId } = useParams();
  const { isLoading, isError, isFetched, data, error } =
    useSuperHeroData(heroId);

  if (isLoading) {
    return <div>Loading..</div>;
  }

  if (isError) {
    return <div>Error.. {error.message}</div>;
  }

  return (
    <div>
      {data?.data.name} - {data?.data.alterEgo}
    </div>
  );
};
