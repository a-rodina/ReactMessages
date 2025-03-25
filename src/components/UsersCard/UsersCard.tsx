import './UsersCard.css';
import {IUser} from "../../types";

function UsersCard({user}: {user: IUser}) {

    return (<>
        <div className='userCard-container'>
            <p className='card-container__item'><span>Name</span>: {user.name}</p>
            <p className='card-container__item'><span>Email</span>: {user.email}</p>
            <p className='card-container__item'><span>Phone</span>: {user.phone}</p>
            <p className='card-container__item'><span>Company</span>: {user.company.name}</p>
        </div>
    </>);
}

export default UsersCard;