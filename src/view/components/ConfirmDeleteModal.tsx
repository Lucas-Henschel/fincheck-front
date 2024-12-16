import { TrashIcon } from "./icons/TrashIcon";
import { Modal } from "./Modal";

interface ConfirmDeleteModalProps {
  onClose(): void;
}

export function ConfirmDeleteModal({ onClose }: ConfirmDeleteModalProps) {
  return (
    <Modal open onClose={onClose} title="Excluir">
      <div className="flex flex-col">
        <div className="w-[52px] h-[52px] rounded-full bg-red-0 flex items-center justify-center text-red-900">
          <TrashIcon className="w-6 h-6" />
        </div>

        <p>Tem certeza que desaja excluir essa conta?</p>
        <p>Ao excluir a conta, também serão excluídos todos os registros de receita e despesa relacionados.</p>
      </div>
    </Modal>
  )
}
