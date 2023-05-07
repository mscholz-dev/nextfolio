import React, {
  ChangeEvent,
  FC,
  SyntheticEvent,
  useState,
} from "react";
import FormInput from "@/templates/components/Form/FormInput";
import IconNewspaper from "@/public/icons/newspaper.svg";
import FormClass from "@/utils/Form";
import { toast } from "react-toastify";
import axios from "axios";
import NewsletterValidatorClass from "@/utils/validators/NewsletterValidator";
import NetwordLoader from "@/templates/components/Loader/NetwordLoader";

// classes
const Form = new FormClass();
const NewsletterValidator =
  new NewsletterValidatorClass();

const Newsletter: FC = () => {
  const initForm = {
    newsletter: "",
  };

  const [form, setForm] = useState(initForm);

  const [loading, setLoading] =
    useState<boolean>(false);

  const handleSubmit = async (
    e: SyntheticEvent,
  ) => {
    e.preventDefault();

    // prevent spamming
    if (loading) return;

    setLoading(true);

    // errors
    const errors =
      NewsletterValidator.inspectNewsletterData(
        form,
      );

    if (errors.length) {
      // focus to first error element
      const firstErrorElement =
        document.getElementById(
          `form-${errors[0].key}`,
        );

      // existing ?
      if (firstErrorElement) {
        firstErrorElement.focus();
      }

      // add error aspect to all inputs
      for (const { key, message } of errors) {
        NewsletterValidator.errorStyle(key);
        toast.error(message);
      }

      setLoading(false);
      return;
    }

    try {
      await axios.post("/api/newsletter", form);

      toast.success(
        "Vous êtes abonné à la newsletter !",
      );

      setForm(initForm);
      setLoading(false);

      return;
    } catch (err: unknown) {
      toast.error("Une erreur est survenu");
      setLoading(false);

      return;
    }
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
            id="newsletter"
            handleChange={(e: ChangeEvent) =>
              Form.handleChange(
                e,
                "newsletter",
                setForm,
                form,
              )
            }
            label="Email"
            type="email"
            value={form.newsletter}
            min={0}
            max={60}
            asterix={false}
          />

          <button className="btn-primary-light btn-primary-fix-height btn-primary-fix-width">
            {!loading ? (
              "S'abonner"
            ) : (
              <NetwordLoader tiny />
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
