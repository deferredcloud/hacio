import { basicModal } from "../state/global";
import type { ModalState, ModalTypes } from "../types";

export const showModal = (value: ModalState): void => {
  const { _tag, title, content, icon, actions, type, isOpen = true } = value;
  basicModal.value = {
    _tag,
    title,
    content,
    icon,
    actions,
    isOpen,
    type,
  };
};

export const hideModal = (): void => {
  basicModal.value = {
    _tag: "",
    title: "",
    content: "",
    icon: "Help",
    actions: [],
    isOpen: false,
  };
};

export const getIconColour = (type?: ModalTypes): string => {
  if (!type) return "black";
  switch (type) {
    case "warning":
      return "text-yellow-500";
    case "error":
      return "text-red-500";
    case "success":
      return "text-green-500";
    case "info":
      return "text-blue-500";
    default:
      return "text-gray-500";
  }
};
