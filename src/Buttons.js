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
        <div className='dot'>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAECAYAAACHtL/sAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACpSURBVHgBnY/BCcJgDIVftFW8dQQ30BF0Ez1YvJmjCtK/oPbo31v1oiM5giP0IgWLjYnSBXwQ+EjCSx5BFXOWECQiUF74zcN6zC6q0EuMB3il3rvSeMnZUNAkoO79fFrnwYIPM6Bxgq/GWlODJ0KnpivjCiGZp7FArro7gbz18JE6ejXCn+pAyuDitz7mPdRopJW2wxq16yPEL0Lt2r7uzPUP1hhl4Xe3D9ZbNY7hCTIUAAAAAElFTkSuQmCC" alt="" />
        </div>
    </div>
        <div className="btn">
        <div id='buttonsD'>
           <a href="https://twitter.com/eyeslikejay" className='buttons forA' id="twitter">
             <button>Twitter Link</button>
           </a>

           {/*<a href="https://app.slack.com/client/T042F7V19Q8/C041JU70S5U">
             <button id="slack">Omoleegho Jonathan</button>
           </a>*/}

           <a href="https://training.zuri.team/" className='buttons forA' id="btn__zuri">
             <button>Zuri Team</button>
           </a>
           <a href="http://books.zuri.team/" className='buttons forA' id="books" title='Get useful books about coding and design'>
             <button>Zuri Books</button>
           </a>
           <a href="https://books.zuri.team/python-for-beginners?ref_id=eyeslikejay" title='Handy tool to guide you  and simplify coding in Python' className='buttons forA' id="book__python">
             <button>Python Books</button>
           </a>
           <a href="https://background.zuri.team/" className='buttons forA' id="pitch" title='Verify your coders integrity'>
             <button>Background Check for Coders</button>
           </a>
           <a href="https://books.zuri.team/design-rules" className='buttons forA' id="book__design">
             <button>Design Books</button>
           </a>
        </div>
        </div>
        <div>

        </div></>
     );
}
 
export default Home;