import PropTypes from 'prop-types';

import ingredientDetailsStyles from './ingredientDetails.module.css'

function IngredientDetails(props) {

    return (
        <div>
            <img className={ingredientDetailsStyles.img + ' ' + 'mb-4'} src={props.image_large} alt={props.name}></img>
            <h2 className="text text_type_main-medium mb-8">{props.name}</h2>
            <ul className={ingredientDetailsStyles.list}>
                <li className={ingredientDetailsStyles.option + ' ' + "text_color_inactive"}>
                    <p className='text text_type_main-default mb-2'>Калории, ккал</p>
                    <p className='text text_type_digits-default'>{props.calories}</p>
                </li>
                <li className={ingredientDetailsStyles.option + ' ' + "text_color_inactive"}>
                    <p className='text text_type_main-default mb-2'>Белки, г</p>
                    <p className='text text_type_digits-default'>{props.proteins}</p>
                </li>
                <li className={ingredientDetailsStyles.option + ' ' + "text_color_inactive"}>
                    <p className='text text_type_main-default mb-2'>Жиры, г</p>
                    <p className='text text_type_digits-default'>{props.fat}</p>
                </li>
                <li className={ingredientDetailsStyles.option + ' ' + "text_color_inactive"}>
                    <p className='text text_type_main-default mb-2'>Углеводы, г</p>
                    <p className='text text_type_digits-default'>{props.carbohydrates}</p>
                </li>
            </ul>
        </div>
    )
}

IngredientDetails.propTypes = {
    name: PropTypes.string,
    image_large: PropTypes.string,
    calories: PropTypes.number,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number
}


export default IngredientDetails;