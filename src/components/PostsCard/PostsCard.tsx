import './PostsCard.css';
import {IPost} from "../../types";

function PostsCard({post}: {post: IPost}) {
    return (<>
        <div className='postCard-container'>
            <h2 className={'postCard-container__title'}>{post.title}</h2>
            <p className={'postCard-container__body'}>{post.body}</p>
            <button className={'postCard-container__btn'}>Show comments</button>
        </div>
    </>);
}

export default PostsCard;