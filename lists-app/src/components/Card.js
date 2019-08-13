import React from 'react'

const Card = ({ movieTitle, movieDirector }) =>
    <li className="col-md-4">
        <p>{movieTitle}</p>
        <small>Director: {movieDirector}</small>
    </li>

export default Card