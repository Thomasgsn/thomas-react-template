import { Dispatch, ReactNode, SetStateAction, useEffect } from "react";

const modalVariants = {
  size: {
    fit: "size-fit",
    screen: "w-screen h-screen",
    height: "h-screen min-w-48",
    width: "w-screen min-h-48",
  },

  modalPosition: {
    topLeft: "justify-start items-start",
    topRight: "justify-end items-start",
    bottomLeft: "justify-start items-end",
    bottomRight: "justify-end items-end",
    center: "justify-center items-center",
  },

  transitionTiming: {
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    linear: "ease-linear",
  },

  animation: {
    slideFromLeft: { open: "translate-x-0", close: "-translate-x-full" },
    slideFromRight: { open: "translate-x-0", close: "translate-x-full" },
    slideFromTop: { open: "translate-y-0", close: "-translate-y-full" },
    slideFromBottom: { open: "translate-y-0", close: "translate-y-full" },
    scale: { open: "scale-100", close: "scale-0" },
  },
};

const closeVariants = {
  position: {
    topLeft: "top-0 left-0",
    topRight: "top-0 right-0",
    bottomLeft: "bottom-0 left-0",
    bottomRight: "bottom-0 right-0",
    center: "-translate-1/2 top-1/2 left-1/2",
  },
};

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: keyof typeof modalVariants.size;
  modalPosition?: keyof typeof modalVariants.modalPosition;
  transitionTiming?: keyof typeof modalVariants.transitionTiming;
  animation?: keyof typeof modalVariants.animation;
  padding?: number;
  transitionDuration?: number;
  animationWithOpacity?: boolean;
  clickAwayClose?: boolean;
  openCtrl?: string;
  outerClassName?: string;
  open: boolean;
  onClose: () => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const Modal = ({
  size = "fit",
  modalPosition = "center",
  transitionTiming = "linear",
  animation = "scale",
  padding = 8,
  transitionDuration = 300,
  animationWithOpacity = false,
  clickAwayClose = true,
  openCtrl,
  className,
  outerClassName,
  open,
  onClose,
  children,
  setOpen,
  ...props
}: ModalProps) => {

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (openCtrl && openCtrl.length == 1) {
        if (e.key === openCtrl && (e.metaKey || e.ctrlKey)) {
          e.preventDefault()
          setOpen((open: any) => !open)
        }
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const sizeClass = modalVariants.size[size];
  const modalPositionClass = modalVariants.modalPosition[modalPosition];
  const animationClass = modalVariants.animation[animation];
  const transitionTimingClass = modalVariants.transitionTiming[transitionTiming];

  return (
    <div
      onClick={clickAwayClose ? onClose : undefined}
      className={`top-0 left-0 z-[99] w-screen h-screen fixed inset-0 flex justify-center items-center transition-colors overflow-hidden
        ${open ? "visible bg-black/75 dark:bg-black/75" : "invisible bg-black/0"}
        ${modalPositionClass}
        ${transitionTimingClass}
        ${outerClassName ? outerClassName : ''}`}
      style={{ transitionDuration: `${transitionDuration}ms` }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`shadow-xl transition-all duration-300 bg-primary-bg ${open ? `${animationClass.open} opacity-100` : `${animationClass.close} ${animationWithOpacity ? "opacity-0" : ""}`} ${sizeClass} ${transitionTimingClass} ${className ? className : ''}`}
        style={{ padding: `${padding}px`, transitionDuration: `${transitionDuration}ms` }}
        {...props}
      >
        {children}
      </div>
    </div>
  );
};

interface CloseProps extends React.HTMLAttributes<HTMLButtonElement> {
  position?: keyof typeof closeVariants.position;
  padding?: number;
  onClose: () => void;
}

export const ModalCloseButton = ({
  position = "topRight", onClose,
  padding = 8,
  children,
  ...props
}: CloseProps) => {
  const positionClass = closeVariants.position[position];

  return (
    <button
      onClick={onClose}
      className={`group rounded-lg mt-0.5 absolute flex items-center justify-center
      ${positionClass}`}
      style={{ padding: `${padding}px` }}
      {...props}
    >
      {children}
    </button>
  );
};

interface TriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  onOpen: () => void;
}

export const ModalTrigger = ({ children, onOpen, ...props }: TriggerProps) => {
  return (
    <button onClick={onOpen} {...props}>
      {children}
    </button>
  );
};
