import './UsersList.css';
import {IUser} from "../../types";
import UsersCard from "../UsersCard/UsersCard";


function UsersList({users}: {users: IUser[]}) {
    return (<>
        <ul className='userList'>
            {users.map((item: any) => <li key={item.id} className='userList__item'><UsersCard user={item}/>
            </li>)}
        </ul>
    </>);
}

export default UsersList;