import orderDetailsStyles from './orderDetails.module.css'
import graphics from '../../images/graphics.svg'

function OrderDetails(order) {

    return (<>
    {<div className={orderDetailsStyles.section}>
            <h1 className={orderDetailsStyles.number + ' ' + "text text_type_digits-large mb-8"}>{order}</h1>
            <h3 className="text text_type_main-medium mb-15">идентификатор заказа</h3>
            <img className="text text_type_main-medium mb-15" src={graphics}></img>
            <p className="text text_type_main-small mb-2">Ваш заказ начали готовить</p>
            <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
        </div>}
        </>
    )
}

export default OrderDetails;