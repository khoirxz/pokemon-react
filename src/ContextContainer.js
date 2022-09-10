import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

import { baseUri } from "./api/index";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [pokelist, setPokelist] = useState([]);
  const [dataPoke, setDataPoke] = useState("");
  const [stats, setStats] = useState([]);
  const [label, setLabel] = useState([]);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await axios.get(baseUri + "/pokemon?limit=50&offset=0");

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

  const fetchMore = async () => {
    try {
      const response = await axios.get(
        baseUri + `/pokemon?limit=${pokelist.length}&offset=${pokelist.length}`
      );

      // fetch api from response
      const fullData = await Promise.all(
        response.data.results.map(
          async (item) => await (await axios.get(item.url)).data
        )
      );

      setPokelist(pokelist.concat(fullData));
    } catch (error) {
      console.error(error);
    }
  };

  const fethData = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(baseUri + "/pokemon/" + id);

      setDataPoke(response.data);
      setStats(response.data.stats.map((item) => item.base_stat));
      setLabel(response.data.stats.map((item) => item.stat.name));
      setLoading(false);
    } catch (error) {
      console.log(error);
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
        fetchMore,
        fethData,
        dataPoke,
        stats,
        label,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
