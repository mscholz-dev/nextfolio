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

// classes
const Form = new FormClass();

const FormHome: FC = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    consent: false,
  });

  const [loading, setLoading] =
    useState<boolean>(false);

  const handleSubmit = (
    e: SyntheticEvent,
  ): void => {
    e.preventDefault();
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
            ariaDescribedby=""
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
            ariaDescribedby=""
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
            ariaDescribedby=""
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
            ariaDescribedby=""
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
            ariaDescribedby=""
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
            ariaDescribedby=""
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
