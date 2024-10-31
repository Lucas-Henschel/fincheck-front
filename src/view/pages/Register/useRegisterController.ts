import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { authService } from "../../../app/services/authService";

const schema = z.object({
  name: z.string().nonempty("Nome é obrigátorio"),
  email:
    z.string()
    .nonempty("E-mail é obrigatório")
    .email("Informe o e-mail válido"),
  password:
    z.string()
    .nonempty("Senha é obrigatória")
    .min(8, "Senha deve conter pelo menos 8 dígitos"),
});

type FormData = z.infer<typeof schema>;

export function useRegisterController() {
  const {
    handleSubmit: hookFormSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleSubmit = hookFormSubmit(async (data) => {
    const { accessToken } = await authService.signup(data);
    console.log(accessToken);
  });

  return { register, errors, handleSubmit };
}
