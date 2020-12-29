import './App.module.css';
import styles from './components/css/loading.module.css';
import Profile from "./components/Profile";
import Header from "./components/Header";
import {useAuth0} from "@auth0/auth0-react";

const App = () => {

    const { isLoading } = useAuth0();

    while (isLoading) {
        return (
            <div className={styles.animationContainer}>
                <div className={styles.container}>
                    <div className={styles.yellow}></div>
                    <div className={styles.red}></div>
                    <div className={styles.blue}></div>
                    <div className={styles.violet}></div>
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
