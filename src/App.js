import './App.module.css';
import styles from './components/css/loading.module.css';
import Header from "./components/Header";
import {useAuth0} from "@auth0/auth0-react";
import { CoffeeLoading } from 'react-loadingg';

const App = () => {

    const { isLoading } = useAuth0();

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
