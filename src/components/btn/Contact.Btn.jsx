import { btn_hero } from "../../styles/utils";

function ContactBtn() {
  return (
    <button
      className={`px-10 py-3 mt-3 lg:mt-3  ${btn_hero} hover:!text-deep`}
      type="submit"
    >
      Submit
    </button>
  );
}

export default ContactBtn;
