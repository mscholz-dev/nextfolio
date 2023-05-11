import Validator from "@/utils/validators/Validator";
import RegexClass from "@/utils/Regex";

// types
import { TContactData } from "@/utils/types";

// classes
const Regex = new RegexClass();

export default class ContactValidator extends Validator {
  inspectContactData(schema: TContactData) {
    const errors = this.inspectData(
      schema,
      this.errorMessage,
    );

    return errors;
  }

  inspectDeleteData(token: string) {
    const errors = this.inspectData(
      { token },
      this.errorMessage,
    );

    return errors;
  }

  errorMessage(
    id: string,
    value: string,
  ): string {
    switch (id) {
      // fullName
      case "fullName":
        if (!value)
          return "Le champ Nom et prénom est requis";
        if (value.length > 60)
          return "Le champ Nom et prénom ne doit pas dépasser 60 caractères";
        return "";

      // email
      case "email":
        if (!value)
          return "Le champ Email est requis";
        if (value.length > 255)
          return "Le champ Email ne doit pas dépasser 255 caractères";
        if (!Regex.email(value))
          return "Le champ Email est invalide";
        return "";

      // phone
      case "phone":
        if (value && !Regex.phone(value))
          return "Le champ Numéro de téléphone est invalide";
        return "";

      // subject
      case "subject":
        if (!value)
          return "Le champ Sujet et prénom est requis";
        if (value.length > 255)
          return "Le champ Sujet ne doit pas dépasser 255 caractères";
        return "";

      // message
      case "message":
        if (!value)
          return "Le champ Message est requis";
        if (value.length > 5_000)
          return "Le champ Message ne doit pas dépasser 5 000 caractères";
        return "";

      // consent
      case "consent":
        if (typeof value !== "boolean" || !value)
          return "Vous devez accepter que vos données soient traitées dans le cadre de votre demande";
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
