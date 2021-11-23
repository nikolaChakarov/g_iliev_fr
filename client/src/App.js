import RepeatMenuAside from './components/repeatMenuAside/Repeat';
import Header from './components/Header/Header';
// import Order from './components/Order/Order';
// import OrderRowCol from './components/OrderRowCol/OrderRowCol';
// import Boxes from './components/Boxes/Boxes';
// import Boxes from './components/Boxes-NOT/Boxes-not';
// import TwoBox from './components/TwoBox/TwoBox';

import Boxes03 from './components/Boxes03/Boxes03';

import './App.css';


const App = () => {

    return (
        <div className="container-fluid d-flex" id="wrapper">
            <RepeatMenuAside />

            <div className="wrapper-body d-flex">
                <Header />
                <Boxes03 />
                {/* <Boxes /> */}
                {/* <TwoBox /> */}

            </div>


        </div>
        // <div className="wrapper-body d-flex">
        //     <div className="d-flex flex-column flex-grow-1">

        //         <header>Header</header>
        //         <div className="content flex-grow-1">Content</div>
        //         <footer className="mt-auto">Footer</footer>

        //     </div>
        // </div>
    )
};

export default App;