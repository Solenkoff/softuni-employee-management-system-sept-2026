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
    return (
        <>

            <Header />

            {/* <!-- Main component  --> */}
            <main className="main">
                <section className="card users-container">

                    <UserSearch />

                    {/* <!-- Table component --> */}
                    <UserList />

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
