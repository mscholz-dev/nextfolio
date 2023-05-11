import Validator from "@/utils/validators/Validator";
import RegexClass from "@/utils/Regex";

// types
import { TNewsletterData } from "@/utils/types";

// classes
const Regex = new RegexClass();

export default class NewsletterValidator extends Validator {
  inspectNewsletterData(schema: TNewsletterData) {
    const errors = this.inspectData(
      schema,
      this.errorMessage,
    );

    return errors;
  }

  inspectUnsubscribeData(token: string) {
    const errors = this.inspectData(
      { token },
      this.errorMessage,
    );

    return errors;
  }

  errorMessage(id: string, value: string) {
    switch (id) {
      // newsletter
      case "newsletter":
        if (!value)
          return "Le champ Email est requis";
        if (value.length > 255)
          return "Le champ Email ne doit pas dépasser 255 caractères";
        if (!Regex.email(value))
          return "Le champ Email est invalide";
        return "";

      // token
      case "token":
        if (!value)
          return "Le champ Jeton est requis";
        return "";

      default:
        return "Une erreur est survenu";
    }
  }
}
