import React from "react";
import { useState } from "react";

type Yes = {
    option: string
}

const Tests = () => {
    const opt: Yes = {
        option: "monday"
    }
    const [ac, act] = useState('mage');

    return (
        <React.Fragment>
            <input onClick={()=>{act(opt.option)}} />
            <p>{ac}</p>
        </React.Fragment>
    );
}

export default Tests;