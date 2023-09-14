import ingredientDetailsStyles from './ingredients.module.css'

function IngredientFullPage(ingredient) {

    return (
        <div className={ingredientDetailsStyles.block}>
            <div className={ingredientDetailsStyles.center}>
                <img className={ingredientDetailsStyles.img + ' ' + 'mb-4'} src={ingredient.image_large} alt={ingredient.name}></img>
                <h2 className="text text_type_main-medium mb-8">{ingredient.name}</h2>
                <ul className={ingredientDetailsStyles.list}>
                    <li className={ingredientDetailsStyles.center + ' ' + "text_color_inactive"}>
                        <p className='text text_type_main-default mb-2'>Калории, ккал</p>
                        <p className='text text_type_digits-default'>{ingredient.calories}</p>
                    </li>
                    <li className={ingredientDetailsStyles.center + ' ' + "text_color_inactive"}>
                        <p className='text text_type_main-default mb-2'>Белки, г</p>
                        <p className='text text_type_digits-default'>{ingredient.proteins}</p>
                    </li>
                    <li className={ingredientDetailsStyles.center + ' ' + "text_color_inactive"}>
                        <p className='text text_type_main-default mb-2'>Жиры, г</p>
                        <p className='text text_type_digits-default'>{ingredient.fat}</p>
                    </li>
                    <li className={ingredientDetailsStyles.center + ' ' + "text_color_inactive"}>
                        <p className='text text_type_main-default mb-2'>Углеводы, г</p>
                        <p className='text text_type_digits-default'>{ingredient.carbohydrates}</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default IngredientFullPage;