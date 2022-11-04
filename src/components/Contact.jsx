
const Contact = () => {
    return ( 
        <div className="borderTry">
            <div className="contactContainer">
                
                <form name="contact" class="form">
                    <h2 className="contactHeading">Contact Me</h2>
                    <p className="contactGreeting">Hi there, contact me to ask about anything you have in mind.</p>
                    <div class="flnames">
                    <div className="contactNameBoxes fname">
                    <label htmlFor="first-name" className="contactLabel">
                        First name
                    </label>
                    <input type="text" id="first_name" name="First-Name" placeholder="Enter your first name" />
                    </div>
                    <div className="contactNameBoxes lname">
                    <label htmlFor="last-name" className="contactLabel">
                        Last name
                    </label>
                    <input type="text" id="Last_name" name="First-Name" placeholder="Enter your last name" />
                    </div>
                    </div>
                    <div className="contactEmail">
                    <label htmlFor="email" className="contactLabel">
                        Email
                    </label>
                    <input type="email" id="email" name="email" placeholder="yourname@email.com" />
                    </div>
                    <div className="contactMessage">
                    <label htmlFor="message" className="contactLabel messageQuery">
                        Message
                    </label>
                    <textarea id ="message" name="message" placeholder="Send me a message and i will reply you as soon as possible...">
                    </textarea>
                    </div>
                    <div className="agreeDiv">
                    <div className="checkboxDiv">
                    <input type="checkbox" id="radio"></input>
                    </div>
                    <div className="agreeTextDiv">
                    <label htmlFor="radio" className="contactAgree"> You agree to providing your data to Eyeslikejay who may contact you.</label>
                    </div>
                    </div>
                    <button type="submit" id="btn__submit"  className="">
                    Send Message
                    </button>
                </form>
            </div>
            <div>
                <div className="contactFooterLine">
                    
                </div>
            </div>
        </div>
     );
}
 
export default Contact;