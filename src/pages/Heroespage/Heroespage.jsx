import React, { useState, useEffect } from "react";
import { getApiResource } from "../../utils/network";
import { HEROES_DATA } from "../../constants/api";
import Heroeslist from "../../components/Heroeslist/Heroeslist";

export default function Heroespage() {
  const [heroes, setHeroes] = useState(null);

  const getResource = async (url) => {
    const res = await getApiResource(url);
    setHeroes(res);
    console.log(res);
  };

  useEffect(() => {
    getResource(HEROES_DATA);
  }, []);

    return (
        
    <div>
            {heroes && <Heroeslist data={heroes} />}
    </div>
        
    )
}
