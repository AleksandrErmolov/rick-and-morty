import React, { useState, useEffect } from "react";
import { getApiResource } from "../../utils/network";
import { HEROES_DATA, SWAPI_PARAM_PAGE } from "../../constants/api";
import Heroeslist from "../../components/Heroeslist/Heroeslist";
import { withErrorApi } from "../../hoc-helpers/withErrorApi";
import HeroesNavigation from "../../components/HeroesNavigation/HeroesNavigation";
import { useQueryParams } from "../../hooks/useQueryParams";
import { getPeoplePageId } from "../../services/getPeopleData";

const Heroespage = ({ setErrorApi }) => {
  const [heroes, setHeroes] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [counterPage, setCounterPage] = useState(2);


  const query = useQueryParams();
  const queryPage = query.get("page");

  const getResource = async (url) => {
    const res = await getApiResource(url);

    if (res) {
      setHeroes(res);
      setNextPage(res.info.next);
      setPrevPage(res.info.prev);
      setCounterPage(getPeoplePageId(url));
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResource(HEROES_DATA + SWAPI_PARAM_PAGE + queryPage);
  }, []);

  return (
    <div>
      <HeroesNavigation
        nextPage={nextPage}
        prevPage={prevPage}
        counterPage={counterPage}
        getResource={getResource}
      />
      {heroes && <Heroeslist data={heroes} />}
    </div>
  );
};

export default withErrorApi(Heroespage);
