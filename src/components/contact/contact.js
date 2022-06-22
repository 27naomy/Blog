import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div id="back">
      <div id="contact" className="section layout_padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 padding_left_0">
              {/* <div className="full">
                <img
                  className="float-left"
                  src="images/fruit_img.png"
                  alt="#"
                />
              </div> */}
            </div>

            <div className="col-md-6">
              <div className="heading">
                <h2>Contactez-nous !</h2>
              </div>
              <div className="full margin_top_20">
                <form>
                  <div className="row">
                    <div className="col-sm-12">
                      <input
                        className="form-control"
                        placeholder="Your Name"
                        type="text"
                        required=""
                      />
                    </div>
                    <div className="col-sm-12">
                      <input
                        className="form-control"
                        placeholder="Email"
                        type="Email"
                        required=""
                      />
                    </div>
                    <div className="col-sm-12">
                      <input
                        className="form-control"
                        placeholder="Phone"
                        type="text"
                        required=""
                      />
                    </div>
                    <div className="col-sm-12">
                      <textarea
                        className="form-control textarea"
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>
                  <button className="main_bt">Send</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
