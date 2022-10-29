import img from './imgs/hngIcon.png'
const Footer = () => {
    return ( 
    <div>
        <footer>
            <div className='footerDiv2'>
                <div className='internship'><h3>Zuri <span>.</span> Internship</h3></div>
                <p>HNG Internship 9 Frontend Task</p>
                <div>
                    <img src={img} alt="" className='footerImg' />
                </div>
            </div>
        </footer>
    </div> );
}
 
export default Footer;