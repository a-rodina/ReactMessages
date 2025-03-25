import './PostsCard.css';
import {IPost} from "../../types";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {filterCommentsByPostId, getComments} from "../../slice/messages";
import CommentsList from "../CommentsList/CommentsList";

function PostsCard({post}: {post: IPost}) {
    const data = useSelector((state: any) => state.message);
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(getComments())
    }, [])

    const handleShowComments = () => {
        dispatch(filterCommentsByPostId(post.id))
    };


    return (<>
        <div className='postCard-container'>
            <h2 className={'postCard-container__title'}>{post.title}</h2>
            <p className={'postCard-container__body'}>{post.body}</p>
            <button className={'postCard-container__btn'}
                    onClick={handleShowComments}>{data.currentPostId === post.id ? 'Hide comments' : 'Show comments'}</button>
            {data.currentPostId === post.id && <CommentsList comments={data.filteredComments} />}
        </div>
    </>);
}

export default PostsCard;