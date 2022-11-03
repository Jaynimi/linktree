
const Contact = () => {
    return ( 
        <div>
            <div>
            <div>
      <form name="contact" class="form">
        <h2>Contact Me</h2>
        <p>Hi there, contact me to ask about anything you have in mind</p>
        <div class="">
          <label htmlFor="first-name" className="">
            First name
          </label>
          <input type="text" id="first_name" name="First-Name" placeholder="Enter your first name" />
          <label htmlFor="last-name" className="">
            Last name
          </label>
          <input type="text" id="Last_name" name="First-Name" placeholder="Enter your last name" />
        </div>
        <div className="">
          <label htmlFor="email" className="">
            Email
          </label>
          <input type="email" id="email" name="email" placeholder="yourname@email.com" />
        </div>
        <div className="">
          <label htmlFor="message" className="">
            Message
          </label>
          <textarea id ="message" name="message" placeholder="Send me a message and i will reply you as soon as possible">
          </textarea>
        </div>
        <div>
          <input type="radio" id="radio"></input>
          <label htmlFor="radio"> You agree to providing your data to Eyeslikejay who may contact you</label>
        </div>
        <button type="submit" id="btn__submit"  className="">
          Send Message
        </button>
      </form>
    </div>
            </div>
        </div>
     );
}
 
export default Contact;