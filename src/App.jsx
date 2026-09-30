import { useEffect, useState } from 'react';
import { fetchUsers } from './api/usersApi';

import Footer from './components/Footer';
import Header from './components/Header';
import Pagination from './components/Pagination';
import SaveUserModal from './components/SaveUserModal';
import UserDeleteModal from './components/UserDeleteModal';
import UserList from './components/UserList';
import UserSearch from './components/UserSearch';

import './styles.css';

const baseUrl = 'https://zkkoreczibrcyvogpget.supabase.co/rest/v1/users';
const apiKey = 'sb_publishable_WC8S0kzBzppRspsAbmwYOg_Yv01NV90';

function App() {
    const [users, setUsers] = useState([]);
    const [showSaveUserModal, setShowSaveUserModal] = useState(false);


    useEffect(() => {
        fetchUsers()
            .then(data => setUsers(data))
            .catch(error => console.log('Error fetching users:', error));
    }, []);



    const addUserClickHandler = () => {
        setShowSaveUserModal(true);
    }

    const addUserCloseHandler = () => {
        setShowSaveUserModal(false);
    }

    const userUpdateHandler = async () => {
        try {
            const updatedUsers = await fetchUsers();
            setUsers(updatedUsers);
        } catch (error) {
            console.error('Error updating users:', error);
        }
    }

    const submitUserHandler = async (user) => {
        try {
            await fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': apiKey
                },
                body: JSON.stringify(user)
            });

            const updatedUsers = await fetchUsers();
            setUsers(updatedUsers);
        } catch (error) {
            alert('Error adding userr:' + err);
        } finally {
            setShowSaveUserModal(false);
        } 
    }

    return (
        <>

            <Header />

            {/* <!-- Main component  --> */}
            <main className="main">
                <section className="card users-container">

                    <UserSearch />

                    {/* <!-- Table component --> */}
                    <UserList users={users} />

                    {/* <!-- New user button  --> */}
                    <button className="btn-add btn" onClick={addUserClickHandler}>Add new user</button>

                    <Pagination />

                </section>

                {/* <!-- Create/Edit Form component  --> */}
                {showSaveUserModal && <SaveUserModal onClose={addUserCloseHandler} onSubmit={submitUserHandler} />}

                {/* <!-- Delete user component  --> */}
                {/* <UserDeleteModal /> */}

            </main>

            <Footer />

        </>
    )
}



export default App
