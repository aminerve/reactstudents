import { useState } from "react";
import studentsdata from "./studentsdata";

function Score(props) {
    const {score, date} = props
    return(
        <div>
        <h6>date: {date}</h6>
        <h6>score: {score}</h6>


        </div>
    )
}

export default Score;