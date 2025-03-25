import './MainPage.css';
import UsersList from "../../components/UsersList/UsersList";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUsers} from "../../slice/messages";


function MainPage() {
    const data = useSelector((state: any) => state.message.users);
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(getUsers())
    }, [])


    return (<>
        <div className='container'>
            <UsersList users={data}/>
        </div>
    </>);
}

export default MainPage;