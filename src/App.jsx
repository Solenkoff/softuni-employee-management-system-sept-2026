import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Pagination from './components/Pagination';
import SaveUserModal from './components/SaveUserModal';
import UserDeleteModal from './components/UserDeleteModal';
import UserDetails from './components/UserDetails';
import UserList from './components/UserList';
import UserSearch from './components/UserSearch';
import './styles.css';

function App() { 
    const [users, setUsers] = useState([]);
    console.log(users);
    

    useEffect(() => {
        fetch('https://zkkoreczibrcyvogpget.supabase.co/rest/v1/users', {
            headers: {
                'apikey': 'sb_publishable_WC8S0kzBzppRspsAbmwYOg_Yv01NV90',
            }
        })
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(error => console.log('Error fetching users:', error));
    }, []);

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
                    <button className="btn-add btn">Add new user</button>

                    <Pagination />

                </section>

                {/* <!-- User details component  --> */}
                {/* <UserDetails /> */}


                {/* <!-- Create/Edit Form component  --> */}
                {/* <SaveUserModal /> */}


                {/* <!-- Delete user component  --> */}
                {/* <UserDeleteModal /> */}

            </main>

            <Footer />

        </>
    )
}

export default App
