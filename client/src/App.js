import Annonces from './components/Annonces/Annonces';
import RepeatMenuAside from './components/repeatMenuAside/Repeat';

import './App.css';


const App = () => {

    return (
        <div className="container-fluid d-flex" id="wrapper">
            <RepeatMenuAside />
            <Annonces />
        </div>
    )
};

export default App;