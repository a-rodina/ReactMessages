import './CommentsCard.css';
import {IComment} from "../../types";

function CommentsCard({comment}: {comment: IComment}) {

    return (<>
        <div className='commentsCard-container'>
            <h2 className={'commentsCard-container__title'}>{comment.name}</h2>
            <p className={'commentsCard-container__email'}>{comment.email}</p>
            <p className={'commentsCard-container__body'}>{comment.body}</p>
        </div>
    </>);
}

export default CommentsCard;