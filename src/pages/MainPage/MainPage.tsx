import './MainPage.css';
import UsersList from "../../components/UsersList/UsersList";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {filterPostsByUserId, getPosts, getUsers} from "../../slice/messages";
import PostsList from "../../components/PostsList/PostsList";


function MainPage() {
    const data = useSelector((state: any) => state.message);
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(getUsers())
        dispatch(getPosts())
    }, [])

    const handleShowPosts = (userId: number) => {
        dispatch(filterPostsByUserId(userId));
    };

    return (<>
        <div className='container'>
            <div className='mainBlock'>
                <UsersList users={data.users} handleShowPosts={handleShowPosts} currentUserId={data.currentUserId}/>
                {data.filteredPosts.length > 0 ? <PostsList posts={data.filteredPosts}/> : null}
            </div>
        </div>
    </>);
}

export default MainPage;