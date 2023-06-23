import React from 'react';
import PropTypes from 'prop-types';
import { Context } from '../../utils/context';

import { CurrencyIcon, LockIcon, DeleteIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import constructorBlockStyles from './constructorBlock.module.css';

function ConstructorBlock(props) {
    
    React.useEffect(() => {
        props.updateData(ingredient.price, ingredient._id)
    });
    const data = React.useContext(Context).data;
    const ingredient = findIngredient();
   
    function findIngredient() {
        const index = data.findIndex(el => el._id === props.id);
        return data[index];
    }

    let position = constructorBlockStyles.middle;
    let caption ='';

    if (props.position === 'top') {
        position = constructorBlockStyles.top;
        caption = ' (Верх)';
    }
    if (props.position === 'bottom') {
        position = constructorBlockStyles.bottom;
        caption = ' (Низ)'
    }

    return (
        <li className={constructorBlockStyles.flex}>
            {!(props.position) ? <div className={constructorBlockStyles.icon_grab}><DragIcon type="primary" /></div> : ''}
            <div className={position + ' ' + 'pr-8'}>
                <img className={constructorBlockStyles.image + ' ' + 'ml-6'} src={ingredient.image} alt={ingredient.name + caption}></img>
                <p className={constructorBlockStyles.name + ' ' + "text text_type_main-default"}>{ingredient.name + caption}</p>
                <div className={constructorBlockStyles.flex}>
                    <p className="text text_type_digits-default mr-2">{ingredient.price}</p>
                    <CurrencyIcon type="primary" />

                </div>
                {!(props.position) ? <DeleteIcon type="primary" /> : <LockIcon type="secondary" />}
            </div>
        </li>
    )
}



ConstructorBlock.propTypes = {
    id: PropTypes.string.isRequired,
    position: PropTypes.string,
    updateData: PropTypes.func,
  }

export default ConstructorBlock;