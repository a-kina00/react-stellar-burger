import feedStyles from './feedConstructor.module.css'
import { FormattedDate, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function FeedConstructor() {

    const today = new Date()
    return (
        <li className={feedStyles.box}>
            <div>
                <h3 className="text text_type_digits-default">#34389</h3>
                <div className="text text_type_main-small text_color_inactive"> <FormattedDate
                    date={
                        new Date(
                            today.getFullYear(),
                            today.getMonth(),
                            today.getDate(),
                            today.getHours(),
                            today.getMinutes() - 1,
                            0,
                        )
                    }
                /> <p>i-GTM +3</p></div>
            </div>
            <h2 className="text text_type_main-medium">Death Star Starship Main бургер</h2>
            <div>
                <div className="text text_type_digits-default">480</div>
                <CurrencyIcon />
            </div>
        </li>
    )
}

export default FeedConstructor;