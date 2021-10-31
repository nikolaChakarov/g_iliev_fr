import './App.css';
import Repeat from './components/repeat/Repeat';

// import MenuAside from './components/Bootstrap/MenuAside/MenuAside';

const App = () => {

    return (
        <div className="container-fluid d-flex" id="wrapper">

            <Repeat />
            <div className="row">
                <div className="col">
                    <h1>Test</h1>
                </div>
            </div>
        </div>
    )
};

export default App;