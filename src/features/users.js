import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import User from './user';
import { getUsers } from '../JS/actions/actions'




const Users = () => {

    const isLoading = useSelector((state) => state.userReducer.isLoading)
    const users = useSelector((state) => state.userReducer.userList)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ getUsers })
        return () => { }
    }, [dispatch])
    return isLoading ? (
       
            <div>
              <p>loading ...</p>
            </div>
          
      ) : (
        <div >
          {users.map((user, key) => (
            <User user={user} key={key} />
          ))}
        </div>
      );
    };


export default Users;
