
import './App.css';
import  { Hello,HelloFull,HelloPerson } from './components/Hello';
import Header from './components/Header';
import Car from './components/Car';
import Login from './components/Login';

function Home() {
  return (
    <div className="home">
      {/* <Hello/>
      <HelloPerson name="Peter"/> */}
      {/* <Header /> */}
      {/* <HelloFull  /> */}
      <Car/>
      {/* <Login/> */}
    </div>
  );
}

export default Home;
