import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

import { baseUri } from "./api/index";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [pokelist, setPokelist] = useState([]);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await axios.get(baseUri + "/pokemon");

      // fetch api from response
      const fullData = await Promise.all(
        response.data.results.map(
          async (item) => await (await axios.get(item.url)).data
        )
      );

      setPokelist(fullData);

      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        pokelist,
        setPokelist,
        loading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
