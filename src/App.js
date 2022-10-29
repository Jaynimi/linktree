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
    <div className='slackngit'>
      <img src={imgs} alt="slack" className='slack' />
      <a href="https://github.com/Jaynimi"><img src={img} alt="git" className='git' /></a>  
    </div>
    <Footer />
    </div>
  );
}

export default App;
