import React, { useContext } from "react";

import DataContext from "./ContextContainer";

function App() {
  const { pokelist, loading } = useContext(DataContext);
  // console.log(pokelist); done
  return (
    <div className="text-gray-700">
      <div className="my-10">
        <h1 className="text-center font-bold text-3xl">Pokemon database</h1>
      </div>
      <div className="max-w-5xl my-8 mx-auto p-4 shadow-lg rounded-md">
        {!loading ? (
          <div className="grid gap-6 grid-cols-4">
            {pokelist.map((item, i) => (
              <div
                key={i}
                className="cursor-pointer p-3 rounded-md hover:bg-gray-200 transition-all ease-in"
              >
                <div>
                  <img
                    src={item.sprites.front_default}
                    alt={item.name}
                    className="w-28 h-28 block mx-auto"
                  />
                </div>
                <h1 className="text-center">{item.name}</h1>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid">
            <h1>Loading</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
