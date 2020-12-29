import './App.module.css';
import styles from './components/css/loading.module.css';
import Profile from "./components/Profile";
import Header from "./components/Header";
import {useAuth0} from "@auth0/auth0-react";
import Footer from './Footer';
import Spinner from "react-bootstrap/Spinner";
import logo from './components/img/logo.jpg';
import { CoffeeLoading } from 'react-loadingg';

const App = () => {

    const { isLoading } = useAuth0();

    const loading = () => {
        return(
            <div className={styles.animationContainer}>
                <div className={styles.container}>
                    <img src={logo} alt=""/>
                </div>
            </div>
        )
    }

    while (isLoading) {
        return (
            <div className={styles.animationContainer}>
                <div className={styles.container}>
                    <CoffeeLoading />
                </div>
            </div>
        )
    }

    return (
        <div>
            <Header />
        </div>
    );
}

export default App;
