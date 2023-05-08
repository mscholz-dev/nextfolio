import React, {
  ChangeEvent,
  FC,
  SyntheticEvent,
  useState,
} from "react";
import FormInput from "./FormInput";
import NetworkLoader from "@/templates/components/Loader/NetworkLoader";
import IconNewspaper from "@/public/icons/newspaper.svg";
import FormClass from "@/utils/Form";
import { toast } from "react-toastify";
import axios from "axios";
import NewsletterValidatorClass from "@/utils/validators/NewsletterValidator";

// interfaces
import { IFormUnsubscribe } from "@/utils/interfaces";

// classes
const Form = new FormClass();
const NewsletterValidator =
  new NewsletterValidatorClass();

const FormUnsubscribe: FC<IFormUnsubscribe> = ({
  email,
}) => {
  const initForm = { newsletter: "" };

  const [form, setForm] = useState({
    newsletter: email,
  });
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
      await axios.delete(
        `/api/newsletter?email=${form.newsletter}`,
      );

      toast.success(
        "Vous êtes désabonné de la newsletter !",
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
    <section className="form-unsubscribe wrapper-padding-x">
      <h2 className="title-home-secondary">
        Se désabonner de la newsletter ?
      </h2>

      <p className="title-home-subtitle">
        Tous les champs sont obligatoires
      </p>

      <form
        onSubmit={handleSubmit}
        className="form-unsubscribe-form"
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
          max={255}
          asterix={false}
        />

        <button className="btn-primary-light btn-primary-fix-height btn-primary-fix-width btn-network-light-black btn-width-full">
          {!loading ? (
            "Se désabonner"
          ) : (
            <NetworkLoader tiny />
          )}
        </button>
      </form>
    </section>
  );
};

export default FormUnsubscribe;
