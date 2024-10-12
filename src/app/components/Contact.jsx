import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SecondaryButton } from "./Button";

const ContactSection = () => {
  return (
    <section>
      <h1 className="font-serif font-semibold text-4xl  md:text-right sm:text-left text-center py-3">
        Get in Touch
      </h1>
      <div className="contact__content">
        <p className="text-lg text-center md:text-right">
          I’d love to hear about what you’re working on and how I could help.
          <br />
          Please do feel free to check out my online profiles below and get in
          touch.
        </p>
        <ul className="flex justify-end  pt-4">
          <li>
            <a
              href="https://github.com/PhilJG"
              className=" text-dark-blue dark:text-white "
            >
              <FaGithub
                size={40}
                className=" hover:fill-cyan dark:fill-white dark:hover:fill-yellow-500 fill-dark"
              />
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/phil-j-gray/"
              className="dark:text-white text-dark-blue  hover:bg-cyan"
            >
              <FaLinkedin
                size={40}
                className=" hover:fill-cyan dark:fill-white dark:hover:fill-yellow-500 fill-dark"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

const ContactPage = () => {
  return (
    <section id="contact">
      <form
        action="https://formsubmit.co/me@philjgray.ca"
        method="POST"
        className="form"
      >
        <label htmlFor="">Name</label>
        <br />
        <input
          className="border font-bold text-lg  rounded-md px-2 py-1 w-full dark:bg-transparent"
          placeholder="Jane Appleseed"
          type="text"
          name="name"
          required
        />
        <br />
        <label htmlFor="">Email</label>
        <br />

        <input
          className="border font-bold text-lg  rounded-md px-2 py-1 w-full dark:bg-transparent"
          placeholder="example@email.com"
          type="email"
          name="email"
          required
        />
        <br />
        <label htmlFor="">Message</label>
        <br />
        <textarea
          className="border font-bold text-lg  rounded-md px-2 py-1 w-full dark:bg-transparent"
          placeholder="How can I help"
          type="text"
          name="message"
          required
        ></textarea>
        <input type="hidden" name="_next" value="https://philjgray.ca/" />
        <br />
        <SecondaryButton type={"submit"} text={"Send Message"} />
      </form>
    </section>
  );
};

export default function Contact() {
  return (
    <div className="grid gap-16 md:grid-cols-2 grid-cols-1 py-16">
      <ContactSection />
      <ContactPage />
    </div>
  );
}
