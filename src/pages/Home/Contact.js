import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_xtvrtkt',
        'template_a6gdh6e',
        form.current,
        'mCtPdZLpXFYKpW6Sw'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="mt-16 w-11/12 mx-auto">
      <h1 className="lg:text-5xl mt-20 text-center uppercase text-3xl font-bold mb-16 text-white">
        contact ME
      </h1>
      <form className="w-3/5 mx-auto" ref={form} onSubmit={sendEmail}>
        <label class="label">
          <span class="label-text">Your Name</span>
        </label>
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          class="input input-bordered w-full max-w-md"
        />

        <label class="label">
          <span class="label-text">Your Email</span>
        </label>
        <input
          type="text"
          name="user_email"
          placeholder="Your Email"
          class="input input-bordered w-full max-w-md"
        />

        <label class="label">
          <span class="label-text">Your Message</span>
        </label>
        <textarea
          class="textarea textarea-bordered w-72 h-24"
          name="message"
          placeholder="Message"
        ></textarea>
        <br />
        <input type="submit" value="Send" class="btn mt-4" />
      </form>
    </div>
  );
};

export default Contact;
