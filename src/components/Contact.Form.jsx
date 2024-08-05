import { input, input_box, text_area } from "../styles/utils";
import ContactBtn from "./btn/Contact.Btn";

function ContactForm() {
  return (
    <div className="w-[90%] md:w-[40%]">
      <form action="" className="flex flex-col gap-7">
        <div className={input_box}>
          <input type="text" className={input} placeholder="First Name" />
        </div>
        <div className={input_box}>
          <input type="text" className={input} placeholder="Last Name" />
        </div>
        <div className={input_box}>
          <input type="email" className={input} placeholder="Your EMail" />
        </div>
        <div className={input_box}>
          <input
            type="text"
            className={input}
            placeholder="Need More Information?"
          />
        </div>
        <textarea
          cols={51}
          rows={5}
          className={`${text_area} p-1`}
          contentEditable={false}
        />
        <ContactBtn />
      </form>
    </div>
  );
}

export default ContactForm;
