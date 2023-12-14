


import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router";
import { BeatLoader } from "react-spinners";
import Card from "../components/Card";
import useSWR from "swr";
// import { setProducts } from '../pages/actions'; 
import { setProducts } from './reducer';

function HomeWithSWR() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickCard = (id) => {
    navigate(`/detail/${id}`);
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

    axios
      .post(" http://localhost:8000/products", payload)
      .then(() => {
        console.log("New pokemon added!");
        mutate();
      })
      .catch((error) => console.log(error));
  };

  //   use react swr to fetch data
  const getPokemon = (url) => axios.get(url).then((response) => response.data);

  const { data, isLoading, error, mutate } = useSWR(
    " http://localhost:8000/products",
    getPokemon,
    {
      onSuccess: (data) => {
        dispatch(setProducts(data.sort((a, b) => a.name.localeCompare(b.name))));
      },
    }
  );

  if (error) return alert(JSON.stringify(error));

  return (
    <section className="flex flex-col justify-center">
      <div className="flex justify-center gap-4">
        <button
          className="rounded-lg bg-sky-400 p-2 text-white self-center"
          onClick={onClickPostData}
        >
          Post Data
        </button>
      </div>

      <div className="flex justify-center gap-4 pt-5">
         <button className="rounded-lg bg-sky-400 p-2 text-white self-center"onClick={() => navigate("/admin")} 
            > Admin
          </button>
      </div>

      <div className="flex justify-center gap-4 pt-5">
         <button className="rounded-lg bg-sky-400 p-2 text-white self-center"onClick={() => navigate("/shop")} 
            > Wishlist
          </button>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        {isLoading ? (
          <BeatLoader color="#38BDF8" />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data?.map(({ id, name, image }) => (
              <Card
                title={name}
                image={image}
                key={id}
                onClick={() => onClickCard(id)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default HomeWithSWR;
