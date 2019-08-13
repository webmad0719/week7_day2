import React from 'react'

const ImprovedCard = ({ title, director, hasOscars, deleteMovie }) =>
    <li className="col-md-4 oneMovie">
        <p>{title}</p>
        <small>Director: {director} {hasOscars ? 'Tiene Oscar!' : 'No tiene Oscar :('}</small>
        <button className="btn btn-dark btn-sm" onClick={deleteMovie}>Eliminar película</button>
    </li>

export default ImprovedCard