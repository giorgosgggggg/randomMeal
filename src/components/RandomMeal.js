import React, { useState, useEffect } from 'react'

const API_URL = "https://www.themealdb.com/api/json/v1/1/random.php"

const RandomMeal = () => {
    const [meal, seatMeal] = useState(undefined)

    useEffect(() => {
        async function getMeal() {
            const res = await fetch(API_URL)
            const data = await res.json()
            seatMeal(data.meals[0])
        }

        getMeal()
    }, [])







    if (!meal) return null;

    const {
        strMeal,
        strMealThumb,
        strInstructions,
        strArea,
        strCategory
    } = meal;


    return (
        <div className="meal">
            <div className="meal-img">
                <img src={strMealThumb} alt={strMeal} />
            </div>
            <div className="meal-details">
                <h3 className="meal-title">  {strMeal} </h3>
                <p className="meal-instruction">  {strInstructions.substring(0, 200) + "..."} </p>
                <ul className="meal-info">
                    <li>Category
                      <strong>  {strCategory}  </strong>
                    </li>
                    <li>
                        Area
                      <strong> {strArea}  </strong>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default RandomMeal
