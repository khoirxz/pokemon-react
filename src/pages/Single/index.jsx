import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import DataContext from "../../ContextContainer";

const Single = () => {
  const param = useParams();
  const { fethData, dataPoke } = useContext(DataContext);

  useEffect(() => {
    const { id } = param;
    fethData(id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(dataPoke);
  return (
    <div>
      <p>Single</p>
    </div>
  );
};

export default Single;
