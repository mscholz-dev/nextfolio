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
import NetworkLoader from "@/templates/components/Loader/NetworkLoader";
import NewsletterValidatorClass from "@/utils/validators/NewsletterValidator";
import { motion } from "framer-motion";
import FramerMotion from "@/utils/FramerMotion";

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
    <motion.section
      id="newsletter"
      className="newsletter wrapper-padding-y wrapper-padding-x"
      // motion
      initial={{
        clipPath:
          FramerMotion.clipPathPolygonLeftClose,
      }}
      whileInView={{
        clipPath:
          FramerMotion.clipPathPolygonOpen,
      }}
      viewport={FramerMotion.viewportOne}
      transition={FramerMotion.transitionEaseInOut(
        1,
      )}
    >
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
            max={255}
            asterix={false}
          />

          <button className="btn-primary-light btn-primary-fix-height btn-primary-fix-width btn-network-light-black">
            {!loading ? (
              "S'abonner"
            ) : (
              <NetworkLoader tiny />
            )}
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default Newsletter;
