import React, {
  ChangeEvent,
  FC,
  SyntheticEvent,
  useState,
} from "react";
import FormInput from "@/templates/components/Form/FormInput";
import IconNewspaper from "@/public/icons/newspaper.svg";
import FormClass from "@/utils/Form";

// classes
const Form = new FormClass();

const Newsletter: FC = () => {
  const [form, setForm] = useState({ email: "" });

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    console.log(form);
  };

  return (
    <section className="newsletter wrapper-padding-y wrapper-padding-x">
      <div className="newsletter-wrapper">
        <h2 className="newsletter-title">
          S&apos;abonner à la newsletter
        </h2>

        <form
          className="newsletter-form"
          onSubmit={handleSubmit}
        >
          <FormInput
            icon={<IconNewspaper />}
            id="email"
            handleChange={(e: ChangeEvent) =>
              Form.handleChange(
                e,
                "email",
                setForm,
                form,
              )
            }
            label="Adresse email"
            type="email"
            value={form.email}
            min={0}
            max={60}
            ariaDescribedby="Veuillez renseigner votre adresse email pour recevoir les newsletters"
          />

          <button className="btn-primary-light">
            S&apos;abonner
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
