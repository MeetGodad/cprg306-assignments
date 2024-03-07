"use client"

import { useState , useEffect } from "react";



export default function MealIdeas( {ingredient} ) {
    const [mealIdeas, setMealIdeas] = useState([]);
    const [ingredientsList, setIngredientsList] = useState("");

    const fetchMealIdeas = async (ingredient) => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals;
    };

    const loadMealIdeas = async () => {
        const ideas = await fetchMealIdeas(ingredient);
        setMealIdeas(ideas);
    };

    const fetchIngredientName = async (mealName) => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list${mealName}`);
        const data = await response.json();
        return data.meals;
    };

    const loadIngredientsList = async () => {
        const ingredientList = await fetchIngredientName();
        setIngredientsList(ingredientList);
    }



    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    useEffect(() => {
        loadIngredientsList();
    }, [ingredientsList]);

    return (
        <div>
        <h1 className="text-4xl font-semibold m-4">Meal Ideas</h1>
        {mealIdeas && (
            <ul className=" text-xl font-medium text-black  ">
                {mealIdeas.map((idea) => (
                <li key={idea.idMeal}  onClick={} className=" bg-white w-96 hover:bg-slate-700 p-2 border mb-2">
                    <p>{idea.strMeal}</p>

                </li>
                ))}
            </ul>
        )}
        </div>
    );
    
   
}