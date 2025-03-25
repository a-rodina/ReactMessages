import './UsersList.css';
import {IUserList} from "../../types";
import UsersCard from "../UsersCard/UsersCard";


function UsersList({users, handleShowPosts, currentUserId}: IUserList) {
    return (<>
        <ul className='userList'>
            {users.map((item: any) => <li key={item.id} className={`userList__item ${currentUserId === item.id ? 'active' : ''}`} onClick={() => handleShowPosts(item.id)}>
                <UsersCard user={item}/>
            </li>)}
        </ul>
    </>);
}

export default UsersList;