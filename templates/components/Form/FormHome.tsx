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
import NetworkLoader from "@/templates/components/Loader/NetworkLoader";
import ContactValidatorClass from "@/utils/validators/ContactValidator";
import { toast } from "react-toastify";
import axios from "axios";
import TagTitle from "@/templates/components/Tag/TagTitle";
import TagSubtitle from "@/templates/components/Tag/TagSubtitle";
import { motion } from "framer-motion";
import FramerMotion from "@/utils/FramerMotion";

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
        "Votre demande de contact a été prise en compte !",
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
    <section
      id="contact"
      className="form-home wrapper-padding-x"
    >
      <TagTitle title="Contactez-moi pour votre projet web" />
      <TagSubtitle subtitle="Parlons de votre projet web sur mesure" />

      <div className="form-home-wrapper">
        <motion.p
          className="form-home-asterix"
          // motion
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={FramerMotion.viewportOne}
          transition={FramerMotion.transitionEaseInOut(
            1,
          )}
        >
          Tous les champs avec un astérix (*) sont
          obligatoires
        </motion.p>

        <form
          className="form-home-form"
          onSubmit={handleSubmit}
        >
          <motion.div
            // motion
            initial={{
              opacity: 0,
              x: -300,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={FramerMotion.viewportOne}
            transition={FramerMotion.transitionEaseInOut(
              1,
            )}
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
          </motion.div>

          <motion.div
            // motion
            initial={{
              opacity: 0,
              x: 300,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={FramerMotion.viewportOne}
            transition={FramerMotion.transitionEaseInOut(
              1,
            )}
          >
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
          </motion.div>

          <motion.div
            // motion
            initial={{
              opacity: 0,
              x: -300,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={FramerMotion.viewportOne}
            transition={FramerMotion.transitionEaseInOut(
              1,
            )}
          >
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
          </motion.div>

          <motion.div
            // motion
            initial={{
              opacity: 0,
              x: 300,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={FramerMotion.viewportOne}
            transition={FramerMotion.transitionEaseInOut(
              1,
            )}
          >
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
          </motion.div>

          <motion.div
            // motion
            initial={{
              opacity: 0,
              x: -300,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={FramerMotion.viewportOne}
            transition={FramerMotion.transitionEaseInOut(
              1,
            )}
          >
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
          </motion.div>

          <motion.div
            // motion
            initial={{
              opacity: 0,
              x: 300,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={FramerMotion.viewportOne}
            transition={FramerMotion.transitionEaseInOut(
              1,
            )}
          >
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
          </motion.div>

          <motion.div
            // motion
            initial={{
              opacity: 0,
              x: -300,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={FramerMotion.viewportOne}
            transition={FramerMotion.transitionEaseInOut(
              1,
            )}
          >
            <button className="form-home-btn btn-moise">
              {!loading ? (
                "Envoyer ma demande"
              ) : (
                <NetworkLoader />
              )}
            </button>
          </motion.div>
        </form>
      </div>
    </section>
  );
};

export default FormHome;
