export const getApiResource = async (url) => {
  try {
    const res = await fetch("https://rickandmortyapi.com/api/character");

    if (!res.ok) {
      console.log("Could not fetch.", res.status);
      return false;
    }

    return await res.json();
  } catch (error) {
    console.error("Could not fetch.", error.message);
    return false;
  }
};
