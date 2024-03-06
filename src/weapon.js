
import React from "react";

const Weapon = ({ a, selecta }) => {
  return (
    <button className="weaponBtn" onClick={() => selecta(a)}>
      {a}
    </button>
  );
};

export default Weapon;