import './MainPage.css';
import UsersList from "../../components/UsersList/UsersList";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getPosts, getUsers} from "../../slice/messages";
import PostsList from "../../components/PostsList/PostsList";


function MainPage() {
    const data = useSelector((state: any) => state.message);
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(getUsers())
        dispatch(getPosts())
    }, [])


    return (<>
        <div className='container'>
            <div className='mainBlock'>
                <UsersList users={data.users}/>
                <PostsList posts={data.posts}/>
            </div>
        </div>
    </>);
}

export default MainPage;