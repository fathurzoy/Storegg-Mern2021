import React, { useCallback, useEffect, useState } from "react";
import { GameItemTypes } from "../../../services/data-types";
import { getFeaturedGame } from "../../../services/player";
import GameItem from "../../molecules/GameItem";

const FeaturedGame = () => {
  const [gameList, setGameList] = useState([]);

  const getFeatureGameList = useCallback(async () => {
    const data = await getFeaturedGame();
    setGameList(data);
  }, [getFeaturedGame]);

  useEffect(() => {
    getFeatureGameList();
  }, []);

  const API_IMG = process.env.NEXT_PUBLIC_IMG;

  // useEffect( () => {
  //   const response =  axios.get(
  //     "https://api-bwa-storegg.herokuapp.com/api/v1/players/landingpage"
  //   );
  //   console.log("data", response.data);
  //   setGameList(response.data.data);
  // }, []);

  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br /> Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          {gameList.map((item: GameItemTypes) => {
            return (
              <GameItem
                key={item._id}
                title={item.name}
                category={item.category.name}
                thumbnail={`${API_IMG}/${item.thumbnail}`}
                id={item._id}
              />
            );
          })}
          {/* <GameItem
            title="Super Mechs"
            category="Mobile"
            thumbnail="/img/Thumbnail-1.png"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGame;
