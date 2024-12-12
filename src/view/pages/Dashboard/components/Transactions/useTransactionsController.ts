import { useState } from "react";
import { useDashboard } from "../DashboardContext/useDashboard";

export function useTransactionsController() {
  const { areValuesVisible } = useDashboard();

  const [isFilltersModalOpen, setIsFilltersModalOpen] = useState(false);

  function handleOpenFiltersModal() {
    setIsFilltersModalOpen(true);
  }

  function handleCloseFiltersModal() {
    setIsFilltersModalOpen(false);
  }

  return {
    areValuesVisible,
    transactions: [],
    isInitialLoading: false,
    isLoading: false,
    handleOpenFiltersModal,
    handleCloseFiltersModal,
    isFilltersModalOpen,
  }
}
