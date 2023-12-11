import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { BeatLoader } from "react-spinners";
import Card from "../components/Card";
import useSWR from "swr";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onClickCard = (id) => {
    navigate(`/detail/${id}`);
  };

  // get data
  const onClickGetData = () => {
    fetch(" http://localhost:8000/products")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => console.log(error));
  };

  // add new data
  const onClickPostData = () => {
    const payload = {
      id: "11",
      name: "Samsung S11 Pro",
      image: "https://www.sammobile.com/wp-content/uploads/2019/11/galaxy-s11-plus-leaked-renders-3.jpg",
      description:"Newly designed by Samsung",
      productType: "Psychic",
      price: 600,
      rating: 3,
      timeLeft: 0,
      totalSales: 0,
      releaseDate: 2023, 
    };
    fetch("  http://localhost:8000/products", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => alert("New pokemon added!"));

    // axios
    //   .post("http://localhost:3000/pokemon", payload)
    //   .then(() => {
    //     console.log("New pokemon added!")
    //     fetchData();
    //   })
    //   .catch((error) => console.log(error));
  };
  // const getPokemon = (url) => axios.get(url).then((response) => response.data);

  // const { data, isLoading, error, mutate } = useSWR(
  //   "http://localhost:3000/pokemon",
  //   getPokemon,
  //   {
  //     onSuccess: (data) => data.sort((a, b) => a.name.localeCompare(b.name)),
  //   }
  // );

  // if (error) return alert(JSON.stringify(error));

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(" http://localhost:8000/products");
      console.log(response)
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="flex flex-col justify-center">
      <div className="flex justify-center gap-4">
        <button
          className="rounded-lg bg-sky-400 p-2 text-white self-center"
          onClick={onClickGetData}
        >
          Get Data
        </button>

        <button
          className="rounded-lg bg-sky-400 p-2 text-white self-center"
          onClick={onClickPostData}
        >
          Post Data
        </button>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        {loading ? (
          <BeatLoader color="#38BDF8" />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data?.map(({ id, name, image }) => (
              <Card
                title={name}
                image={image}
                key={id}
                onClick={() => onClickCard(id, name)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Home;
