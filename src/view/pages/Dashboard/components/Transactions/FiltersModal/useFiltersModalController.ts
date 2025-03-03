import { useState } from "react";
import { useBankAccounts } from "../../../../../../app/hooks/useBankAccounts";

export function useFiltersModalController() {
  const [selectedBankAccountId, setSelectedBankAccountId] = useState<undefined | string>(undefined);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const { accounts } = useBankAccounts();

  function handleSelectBankAccount(backAccountId: string) {
    setSelectedBankAccountId(prevState => (
      prevState === backAccountId ? undefined : backAccountId
    ));
  }

  function handleChangeYear(step: number) {
    setSelectedYear(prevState => prevState + step);
  }

  return {
    handleSelectBankAccount,
    selectedBankAccountId,
    selectedYear,
    handleChangeYear,
    accounts,
  }
}
