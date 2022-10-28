import './App.css'
import logo from './logo.svg';
import Buttons from './Buttons';
import imgs from './imgs/slackIcon.png';
import img from './imgs/githubIcon.png';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
    <Buttons />
    <img src={imgs} alt="slack" />
    <img src={img} alt="git" />  
    <Footer />
    </div>
  );
}

export default App;
