import React from "react";

import { createContext, useState } from "react";

export var Contexted = createContext("nivas");

function Context(props) {
  var [profile, updateprofile] = useState([]);

  let obj = { profile, updateprofile };

  return (
    <div>
      <Contexted.Provider value={obj}>{props.children}</Contexted.Provider>
    </div>
  );
}

export default Context;
