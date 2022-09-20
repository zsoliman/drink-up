const FoodCard = ({ food }) => {
    return (
        <div>
            {food.strMeal}
            <img src={food.strMealThumb} />
        </div>
    )
}

export default FoodCard;