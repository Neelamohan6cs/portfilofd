export default function Contact() {
  return (
    <div className="container bg-white py-5" id="contact">
      <div className="row px-3">
        <div className="col-12">
          <h2 className="title position-relative pb-2 mb-4">Contact Me</h2>
        </div>
        <div className="col-12">
          <div className="contact-form">
            <div id="success"></div>
            <form name="sentMessage" id="contactForm" noValidate>
              <div className="form-row">
                <div className="control-group col-sm-6">
                  <input
                    type="text"
                    className="form-control p-4"
                    id="name"
                    placeholder="Your Name"
                    required
                    data-validation-required-message="Please enter your name"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group col-sm-6">
                  <input
                    type="email"
                    className="form-control p-4"
                    id="email"
                    placeholder="Your Email"
                    required
                    data-validation-required-message="Please enter your email"
                  />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="control-group">
                <input
                  type="text"
                  className="form-control p-4"
                  id="subject"
                  placeholder="Subject"
                  required
                  data-validation-required-message="Please enter a subject"
                />
                <p className="help-block text-danger"></p>
              </div>
              <div className="control-group">
                <textarea
                  className="form-control py-3 px-4"
                  rows="5"
                  id="message"
                  placeholder="Message"
                  required
                  data-validation-required-message="Please enter your message"
                ></textarea>
                <p className="help-block text-danger"></p>
              </div>
              <div>
                <button
                  className="btn btn-primary py-3 px-4"
                  type="submit"
                  id="sendMessageButton"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
