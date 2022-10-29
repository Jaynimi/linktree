import imgs from './kkk.jpg';
import arrow from './imgs/arrow.png';

const Home = () => {
    return ( 
  <><div>
        <div>
          <nav className='pic'>
              <img src={imgs} alt=""  id="profile__img" />
          </nav>
          <nav className='pic'>
              <p className='jay'>EyesLikeJay</p>
          </nav>
        </div>
        <div className='arrow'>
          <img src= {arrow} alt="" />
        </div>
    </div>
        <div className="btn">
        <div id='buttonsD'>
           <a href="https://twitter.com/eyeslikejay" className='buttons'>
             <button id="twitter">Twitter Link</button>
           </a>

           {/*<a href="https://app.slack.com/client/T042F7V19Q8/C041JU70S5U">
             <button id="slack">Omoleegho Jonathan</button>
           </a>*/}

           <a href="https://training.zuri.team/" className='buttons'>
             <button id="btn__zuri">Zuri Team</button>
           </a>
           <a href="http://books.zuri.team/" className='buttons'>
             <button id="books">Zuri Books</button>
           </a>
           <a href="https://books.zuri.team/python-for-beginners?ref_id=eyeslikejay" className='buttons'>
             <button id="book__python">Python Books</button>
           </a>
           <a href="https://background.zuri.team/" className='buttons'>
             <button id="pitch">Background Check for Coders</button>
           </a>
           <a href="https://books.zuri.team/design-rules" className='buttons'>
             <button id="book__design">Design Books</button>
           </a>
        </div>
        </div>
        <div>

        </div></>
     );
}
 
export default Home;