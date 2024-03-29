import React from "react";
import { getApiResource } from "../../utils/network";
import { withErrorApi } from "../../hoc-helpers/withErrorApi";
import { useEffect, useState, Suspense } from "react";
import { useParams } from "react-router-dom";
import { HEROES_DATA } from "../../constants/api";
import { useSelector } from "react-redux";

import styles from "./HeroPage.module.css";
import HeroFoto from "../../components/HeroFoto/HeroFoto";
import HeroInfo from "../../components/HeroInfo/HeroInfo";
import HeroLinkBack from "../../components/HeroLinkBack/HeroLinkBack";
import UILoading from "../../components/UI/UILoading/UILoading";

const HeroFilm = React.lazy(() =>
  import("../../components/PersonFilm/HeroFilm")
);


function HeroPage({ setErrorApi }) {

  const [heroId, setHeroId] = useState(null);
  const [heroInfo, setHeroInfo] = useState(null);
  const [heroName, setHeroName] = useState(null);
  const [heroFoto, setHeroFoto] = useState(null);
  const [heroFilms, setHeroFilms] = useState(null);
  const [heroFavorite, setHeroFavorite] = useState(false);

  const storeData = useSelector((state) => state.favoriteReducer);

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${HEROES_DATA}/${id}`);


      setHeroId(id);
      storeData[id] ? setHeroFavorite(true) : setHeroFavorite(false);


      if (res) {
        setHeroInfo([
          { title: "Created", data: res.created },
          { title: "Status", data: res.status },
          { title: "Species", data: res.species },
          { title: "From", data: res.origin.name },
          { title: "Gender", data: res.gender },
          { title: "Type", data: res.type },
        ]);
        setHeroName(res.name);
        setHeroFoto(res.image);
        res.episode.length && setHeroFilms(res.episode);
        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, []);

  
  return (
    <>
      <HeroLinkBack />
      <div className={styles.wrapper}>
        <span className={styles.person__name}>{heroName}</span>
        <div className={styles.container}>
          <HeroFoto
            heroId={heroId}
            heroFoto={heroFoto}
            heroName={heroName}
            heroFavorite={heroFavorite}
            setHeroFavorite={setHeroFavorite}
          />
          {heroInfo && <HeroInfo heroInfo={heroInfo} />}

          {heroFilms && (
            <Suspense fallback={<UILoading />}>
              <HeroFilm heroFilms={heroFilms} />
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
}


export default withErrorApi(HeroPage);
