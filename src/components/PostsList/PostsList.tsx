import './PostsList.css';
import {IPost} from "../../types";
import PostsCard from "../PostsCard/PostsCard";



function PostsList({posts}: {posts: IPost[]}) {
    return (<>
        <ul className='postsList'>
            {posts.map((item: any) => <li key={item.id} className='postsList__item'><PostsCard post={item}/>
            </li>)}
        </ul>
    </>);
}

export default PostsList;