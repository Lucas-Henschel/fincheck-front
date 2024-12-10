import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "../../app/utils/cn";

export function Modal() {
  return (
    <Dialog.Root>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            "fixed inset-0 bg-black/80 backdrop-blur-sm z-50",
            "data-[state=open]:animate-overlay-show"
          )}
        />

        <Dialog.Content
          className={cn(
            "",
            "data-[state=open]:animate-content-show",
          )}
        >
          <h1></h1>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
