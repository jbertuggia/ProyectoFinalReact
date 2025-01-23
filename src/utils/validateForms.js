import { object, string } from "yup";
import * as Yup from "yup";

let userSchema = object({
    fullname: string()
      .min(3, "El nombre debe tener al menos 3 caracteres")
      .required("El campo nombre es obligatorio"),
    phone: string()
      .min(10, "El número de teléfono debe tener al menos 10 dígitos")
      .required("El número de teléfono es obligatorio"),
    email: string()
      .email("El email debe tener un formato válido")
      .required("El email es obligatorio"),
    email2: string()
      .email("El email debe tener un formato válido")
      .oneOf([Yup.ref("email"), null], "Los correos deben coincidir")
    .required("Confirma tu correo"),
    tc: string()
      .length(16, "La tarjeta debe tener exactamente 16 dígitos")
      .required("La tarjeta de crédito es obligatoria para efectuar la compra"),
    cvc: string()
      .length(3, "El CVC debe tener exactamente 3 dígitos")
      .required("El CVC es obligatorio para efectuar la compra"),
  });

const validateForm = async (dataForm) => {
    try {
        await userSchema.validate(dataForm)
        return { status: "success", message: "Validaciones pasadas correctamente!" }
    } catch (error) {
        return { status: "error", message: error.message }
    }
}

export default validateForm