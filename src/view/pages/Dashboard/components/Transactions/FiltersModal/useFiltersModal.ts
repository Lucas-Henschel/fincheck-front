import { useState } from "react";

export function useFiltersModal() {
  const [selectedBankAccountId, setSelectedBankAccountId] = useState<null | string>(null);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  function handleSelectBankAccount(backAccountId: string) {
    setSelectedBankAccountId(prevState => (
      prevState === backAccountId ? null : backAccountId
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
  }
}
