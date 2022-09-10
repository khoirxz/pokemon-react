import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

import { ListTypes } from "../../components";

import DataContext from "../../ContextContainer";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const Single = () => {
  const param = useParams();
  const { fethData, dataPoke, loading, stats, label } = useContext(DataContext);

  useEffect(() => {
    const { id } = param;
    fethData(id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(dataPoke);
  console.log(stats);
  console.log(label);
  return (
    <div>
      {!loading ? (
        <>
          <div className="grid grid-cols-1 p-5">
            <div className="grid grid-cols-2 gap-20 p-5">
              <div className="flex flex-col justify-center items-center">
                <img
                  className="w-40 h-40 block"
                  src={dataPoke?.sprites?.front_default}
                  alt={dataPoke.name}
                />
              </div>
              <div className="border p-3 rounded ">
                <h1 className="text-2xl font-semibold capitalize mb-3 text-center">
                  {dataPoke.name}
                </h1>
                <p className="mb-3 text-center text-gray-400">
                  Species: {dataPoke?.species?.name}
                </p>
                <div className="mb-3 text-center">
                  <p>types</p>
                  <ul className="flex justify-center">
                    {dataPoke?.types?.map((item, i) => (
                      <li key={i}>
                        <ListTypes type={item.type.name} />
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h1 className="text-2xl font-semibold capitalize mb-3 text-center">
                    Stats
                  </h1>
                </div>
                <div className="w-96 h-96">
                  <Radar
                    data={{
                      labels: label,
                      datasets: [
                        {
                          label: "# of stats",
                          data: stats,
                          backgroundColor: "rgba(255, 99, 132, 0.2)",
                          borderColor: "rgba(255, 99, 132, 1)",
                          borderWidth: 1,
                        },
                      ],
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Single;
