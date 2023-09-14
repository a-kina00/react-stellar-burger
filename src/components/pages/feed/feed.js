import feedStyles from './feed.module.css'

import FeedConstructor from './feedConstructor/feedConstructor';

function Feed() {
    return (
        <>
            <h1>Лента заказов</h1>
            <section>
                <ul className={feedStyles.list}>
                    <FeedConstructor />
                </ul>
            </section>
        </>
    )
}

export default Feed;