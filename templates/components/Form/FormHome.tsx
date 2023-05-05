import React, {
  ChangeEvent,
  FC,
  SyntheticEvent,
  useState,
} from "react";
import IconUser from "@/public/icons/user.svg";
import IconEnvelope from "@/public/icons/envelope.svg";
import IconPhone from "@/public/icons/phone.svg";
import IconBellConcierge from "@/public/icons/bell-concierge.svg";
import FormInput from "@/templates/components/Form/FormInput";
import FormTextarea from "@/templates/components/Form/FormTextarea";
import FormCheckbox from "@/templates/components/Form/FormCheckbox";
import FormClass from "@/utils/Form";
import NetwordLoader from "@/templates/components/Loader/NetwordLoader";
import ContactValidatorClass from "@/utils/validators/ContactValidator";
import { toast } from "react-toastify";
import axios from "axios";

// types
import { TContactData } from "@/utils/types";

// classes
const Form = new FormClass();
const ContactValidator =
  new ContactValidatorClass();

const FormHome: FC = () => {
  const initForm: TContactData = {
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    consent: false,
  };

  const [form, setForm] =
    useState<TContactData>(initForm);

  const [loading, setLoading] =
    useState<boolean>(false);

  const handleSubmit = async (
    e: SyntheticEvent,
  ): Promise<void> => {
    e.preventDefault();

    // prevent spamming
    if (loading) return;

    setLoading(true);

    const errors =
      ContactValidator.inspectContactData(form);

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
        ContactValidator.errorStyle(key);
        toast.error(message);
      }

      setLoading(false);
      return;
    }

    try {
      await axios.post("/api/contact", form);

      toast.success(
        "Votre demande a été pris en compte",
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
    <section className="form-home wrapper-padding-x">
      <h2 className="title-home-secondary">
        Contactez-moi pour votre projet web
      </h2>

      <p className="title-home-subtitle">
        Parlons de votre projet web sur mesure
      </p>

      <div className="form-home-wrapper">
        <p className="form-home-asterix">
          Tous les champs avec un astérix (*) sont
          obligatoires
        </p>

        <form
          className="form-home-form"
          onSubmit={handleSubmit}
        >
          <FormInput
            icon={<IconUser />}
            id="fullName"
            handleChange={(e: ChangeEvent) =>
              Form.handleChange(
                e,
                "fullName",
                setForm,
                form,
              )
            }
            label="Nom et prénom"
            type="text"
            value={form.fullName}
            min={0}
            max={60}
            asterix={true}
          />

          <FormInput
            icon={<IconEnvelope />}
            id="email"
            handleChange={(e: ChangeEvent) =>
              Form.handleChange(
                e,
                "email",
                setForm,
                form,
              )
            }
            label="Email"
            type="email"
            value={form.email}
            min={0}
            max={255}
            asterix={true}
          />

          <FormInput
            icon={<IconPhone />}
            id="phone"
            handleChange={(e: ChangeEvent) =>
              Form.handleChange(
                e,
                "phone",
                setForm,
                form,
              )
            }
            label="Numéro de téléphone"
            type="number"
            value={form.phone}
            min={0}
            max={10}
            asterix={false}
          />

          <FormInput
            icon={<IconBellConcierge />}
            id="subject"
            handleChange={(e: ChangeEvent) =>
              Form.handleChange(
                e,
                "subject",
                setForm,
                form,
              )
            }
            label="Sujet"
            type="text"
            value={form.subject}
            min={0}
            max={255}
            asterix={true}
          />
          <FormTextarea
            id="message"
            handleChange={(e: ChangeEvent) =>
              Form.handleChange(
                e,
                "message",
                setForm,
                form,
              )
            }
            label="Message"
            value={form.message}
            min={0}
            max={5_000}
            rows={4}
            asterix={true}
          />

          <FormCheckbox
            id="consent"
            handleChange={(e: ChangeEvent) =>
              Form.handleCheckboxChange(
                e,
                "consent",
                setForm,
                form,
              )
            }
            label="J'accepte que mes données soient traitées dans le cadre de ma demande"
            checked={form.consent}
            asterix={true}
          />

          <button className="form-home-btn btn-moise">
            {!loading ? (
              "Envoyer ma demande"
            ) : (
              <NetwordLoader />
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormHome;
