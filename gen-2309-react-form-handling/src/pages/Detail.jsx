import { useLocation, useParams } from "react-router";
import { useSearchParams } from "react-router-dom";

function Detail() {
  // useParams
  // const { id } = useParams();
  // console.log(id);

  // get data with useSearchParams (params showed in url)
  // const [searchParams] = useSearchParams();
  // console.log(searchParams.get("name"));

  // get data with useLocation (state not showed in url)
  // const location = useLocation();
  // console.log("location", location.state.name);

  return (
    <div>Detail</div>
  );
}

export default Detail;
