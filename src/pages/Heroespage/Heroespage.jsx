import React, { useState, useEffect } from "react";
import { getApiResource } from "../../utils/network";
import { HEROES_DATA } from "../../constants/api";
import Heroeslist from "../../components/Heroeslist/Heroeslist";
import { withErrorApi } from "../../hoc-helpers/withErrorApi";

const Heroespage = ({ setErrorApi }) => {
  const [heroes, setHeroes] = useState(null);

  const getResource = async (url) => {
    const res = await getApiResource(url);
    console.log(res);

    if (res) {
      setHeroes(res);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResource(HEROES_DATA);
  }, []);

  return (
    <div>
      <h1 className="header__text">Navigation</h1>
      {heroes && <Heroeslist data={heroes} />}
    </div>
  );
};

export default withErrorApi(Heroespage);
