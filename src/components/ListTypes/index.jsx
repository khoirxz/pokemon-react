import React from "react";
import {
  GiGrass,
  GiPoisonGas,
  GiFireZone,
  GiBatWing,
  GiWaterSplash,
  GiInsectJaws,
  GiCircleClaws,
  GiElectric,
  GiEarthSpit,
  GiFairy,
  GiSwordsEmblem,
  GiPsychicWaves,
  GiEarthCrack,
  GiMetalBar,
  GiSnowflake1,
  GiGhost,
  GiDragonHead,
} from "react-icons/gi";

const ListTypes = ({ type }) => {
  return (
    <div className="mx-4 mt-3 py-3 flex">
      <div>
        <div className="flex justify-center flex-row">
          {type === "grass" ? (
            <GiGrass size={32} color="rgb(74 222 128)" />
          ) : type === "poison" ? (
            <GiPoisonGas size={32} color="rgb(252 165 165)" />
          ) : type === "fire" ? (
            <GiFireZone size={32} color="rgb(185 28 28)" />
          ) : type === "flying" ? (
            <GiBatWing size={32} color="rgb(212 212 212)" />
          ) : type === "water" ? (
            <GiWaterSplash size={32} color="rgb(6 182 212)" />
          ) : type === "bug" ? (
            <GiInsectJaws size={32} color="rgb(87 83 78)" />
          ) : type === "normal" ? (
            <GiCircleClaws size={32} color="rgb(255 251 235)" />
          ) : type === "electric" ? (
            <GiElectric size={32} color="rgb(245 158 11)" />
          ) : type === "ground" ? (
            <GiEarthSpit size={32} color="rgb(168 91 74)" />
          ) : type === "fairy" ? (
            <GiFairy size={32} color="rgb(254 249 195)" />
          ) : type === "fighting" ? (
            <GiSwordsEmblem size={32} color="rgb(226 232 240)" />
          ) : type === "psychic" ? (
            <GiPsychicWaves size={32} color="rgb(100 116 139)" />
          ) : type === "rock" ? (
            <GiEarthCrack size={32} color="rgb(97 55 48)" />
          ) : type === "steel" ? (
            <GiMetalBar size={32} color="rgb(255 255 255)" />
          ) : type === "ice" ? (
            <GiSnowflake1 size={32} color="rgb(224 242 254)" />
          ) : type === "ghost" ? (
            <GiGhost size={32} color="rgb(179 180 181)" />
          ) : type === "dragon" ? (
            <GiDragonHead size={32} color="rgb(255 221 87)" />
          ) : null}
        </div>
        <p className="text-center mt-2">{type}</p>
      </div>
    </div>
  );
};

export default ListTypes;
