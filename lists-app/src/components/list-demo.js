import React from 'react';
import Card from './Card'



const cities = ['Madrid', 'BCN', 'Bilbao', 'Gijón']
export const citiesItems = cities.map((elm, idx) => <li key={idx}>{elm}</li>)



const numbers = [1, 2, 3, 4, 5]
export const numbersList = numbers.map((elm, idx) => <li key={idx}>{elm}</li>)



const movies = [
    { title: "Jurassic Park", director: "Steven Spielberg" },
    { title: "Sharknado", director: "Anthony C. Ferrante" },
    { title: "Titanic", director: "James Cameron" }
]
export const moviesList = movies.map((elm, idx) => {
    return <Card key={idx} movieTitle={elm.title} movieDirector={elm.director} />
})
