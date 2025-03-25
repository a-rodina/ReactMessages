import './CommentsList.css';
import {IComment} from "../../types";
import CommentsCard from "../CommentsCard/CommentsCard";


function CommentsList({comments}: {comments: IComment[]}) {
    return (<>
        <ul className='commentsList'>
            {comments.map((item: any) => <li key={item.id} className='commentsList__item'><CommentsCard comment={item}/>
            </li>)}
        </ul>
    </>);
}

export default CommentsList;