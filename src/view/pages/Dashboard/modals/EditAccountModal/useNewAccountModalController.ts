import { z } from "zod";
import { useDashboard } from "../../components/DashboardContext/useDashboard";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { bankAccountsService } from "../../../../../app/services/bankAccountsService";
import toast from "react-hot-toast";
import { currencyStringToNumber } from "../../../../../app/utils/currencyStringToNumber";

const schema = z.object({
  initialBalance: z.string().nonempty("Saldo inicial é obrigatório"),
  name: z.string().nonempty("Nome da Conta é obrigatório"),
  type: z.enum(["CHECKING", "INVESTMENT", "CASH"]),
  color: z.string().nonempty("Cor é obrigatório"),
});

type FormData = z.infer<typeof schema>;

export function useNewAccountModalController() {
  const {
    isEditAccountModalOpen,
    closeEditAccountModal,
  } = useDashboard();

  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const queryClient = useQueryClient();
  const { isLoading, mutateAsync } = useMutation(bankAccountsService.create);

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await mutateAsync({
        ...data,
        initialBalance: currencyStringToNumber(data.initialBalance),
      });

      queryClient.invalidateQueries({ queryKey: ['bankAccounts'] });
      toast.success("Conta foi cadastrada com sucesso!");
      closeEditAccountModal();
      reset();
    } catch {
      toast.error("Erro ao cadastrar a conta!");
    }
  });

  return {
    isEditAccountModalOpen,
    closeEditAccountModal,
    register,
    errors,
    handleSubmit,
    control,
    isLoading,
  }
}
