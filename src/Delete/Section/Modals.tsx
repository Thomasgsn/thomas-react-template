import { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";
import { Modal, ModalCloseButton, ModalTrigger } from "@/components";

type Pos = "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | "center";
type modalSize = "fit" | "screen" | "height" | "width";
type modalAnim = "slideFromLeft" | "slideFromRight" | "slideFromTop" | "slideFromBottom" | "scale";
type transitionTiming = "easeIn" | "easeOut" | "easeInOut" | "linear";

interface ModalProps {
    size: modalSize;
    modalPosition: Pos;
    transitionTiming?: transitionTiming;
    animation: modalAnim;
    animationWithOpacity: boolean;
    clickAwayClose: boolean;
    padding?: number;
    transitionDuration?: number;
    openCtrl: string;
    className?: string;
    outerClassname?: string;
}

interface CloseProps {
    position: Pos;
    padding: number;
    className?: string;
}

export const Modals = () => {
    const defaultModal: ModalProps = {
        size: 'fit',
        modalPosition: 'center',
        animation: 'scale',
        animationWithOpacity: false,
        clickAwayClose: true,
        padding: 8,
        transitionTiming: 'linear',
        transitionDuration: 300,
        openCtrl: "",
        className: "",
        outerClassname: "",
    };
    const sideModal: ModalProps = {
        size: 'height',
        modalPosition: 'topRight',
        animation: 'slideFromRight',
        animationWithOpacity: false,
        clickAwayClose: true, padding: 10,
        transitionTiming: 'easeOut',
        transitionDuration: 300,
        openCtrl: "",
        className: "",
    };

    const defaultClose: CloseProps = { position: 'topRight', padding: 8, className: "" };

    const [modalSettings, setModal] = useState<ModalProps>(defaultModal);
    const [closeSettings, setClose] = useState<CloseProps>(defaultClose);

    const handleClear = () => { setModal(defaultModal), setClose(defaultClose) };
    const setSideModal = () => { setModal(sideModal), setClose(defaultClose) };

    const handleChangeModal = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setModal((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleChangeClose = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setClose((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const [open, setOpen] = useState(false);
    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);

    const size: modalSize[] = ["fit", "screen", "height", "width"];
    const position: Pos[] = ["topLeft", "topRight", "bottomLeft", "bottomRight", "center"];
    const animation: modalAnim[] = ["slideFromLeft", "slideFromRight", "slideFromTop", "slideFromBottom", "scale"];
    const transitionTiming: transitionTiming[] = ["easeIn", "easeOut", "easeInOut", "linear"];

    const labelClass = "ml-1 font-medium text-sm text-neutral-700 dark:text-neutral-200 capitalize";
    const inputClass = "w-full focus:outline-none focus:ring-2 border-0 rounded-md placeholder-neutral-400 dark:placeholder-neutral-500 text-sm px-2.5 py-1.5 shadow-sm bg-white dark:bg-neutral-900 ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 disabled:cursor-not-allowed disabled:opacity-75";
    const iconRightClass = "absolute bottom-0 -translate-y-1/2 right-2 flex items-center"

    return (
        <div className="p-2" id="modal">
            <div className="grid grid-cols-2 gap-6">

                <div>
                    Modal settings :
                    <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col flex-1">
                            <label htmlFor="size" className="relative">
                                <span className={labelClass}>Size:</span>
                                <select
                                    required
                                    id="size"
                                    name="size"
                                    onChange={handleChangeModal}
                                    value={modalSettings.size}
                                    defaultValue={defaultModal.size}
                                    className="input appearance-none"
                                >
                                    {size.map((s) => <option key={s} selected={s == defaultModal.size} value={s}>{s}</option>)}
                                </select>
                                <span className={`${iconRightClass} pointer-events-none`}>
                                    <IoIosArrowDown />
                                </span>
                            </label>
                        </div>

                        <div className="flex flex-col flex-1">
                            <label htmlFor="modalPosition" className="relative">
                                <span className={labelClass}>Position:</span>
                                <select
                                    required
                                    id="modalPosition"
                                    name="modalPosition"
                                    onChange={handleChangeModal}
                                    defaultValue={defaultModal.modalPosition}
                                    value={modalSettings.modalPosition}
                                    className="input appearance-none"
                                >
                                    {position.map((s) => <option key={s} selected={s == defaultModal.modalPosition} value={s}>{s}</option>)}
                                </select>
                                <span className={`${iconRightClass} pointer-events-none`}>
                                    <IoIosArrowDown />
                                </span>
                            </label>
                        </div>

                        <div className="flex flex-col flex-1">
                            <label htmlFor="transitionTiming" className="relative">
                                <span className={labelClass}>Transition Timing:</span>
                                <select
                                    required
                                    id="transitionTiming"
                                    name="transitionTiming"
                                    onChange={handleChangeModal}
                                    defaultValue={defaultModal.transitionTiming}
                                    value={modalSettings.transitionTiming}
                                    className="input appearance-none"
                                >
                                    {transitionTiming.map((s) => <option key={s} selected={s == defaultModal.transitionTiming} value={s}>{s}</option>)}
                                </select>
                                <span className={`${iconRightClass} pointer-events-none`}>
                                    <IoIosArrowDown />
                                </span>
                            </label>
                        </div>

                        <div className="flex flex-col flex-1">
                            <label htmlFor="animation" className="relative">
                                <span className={labelClass}>Animation:</span>
                                <select
                                    required
                                    id="animation"
                                    name="animation"
                                    onChange={handleChangeModal}
                                    value={modalSettings.animation}
                                    defaultValue={defaultModal.animation}
                                    className="input appearance-none"
                                >
                                    {animation.map((s) => <option key={s} selected={s == defaultModal.animation} value={s}>{s}</option>)}
                                </select>
                                <span className={`${iconRightClass} pointer-events-none`}>
                                    <IoIosArrowDown />
                                </span>
                            </label>
                        </div>

                        <div className="flex gap-2 *:flex-1 items-center">
                            <label htmlFor="padding">
                                <span className={labelClass}>Padding:</span>
                                <input
                                    type="number"
                                    id="padding"
                                    name="padding"
                                    placeholder="8"
                                    className={inputClass}
                                    onChange={handleChangeModal}
                                    value={modalSettings.padding}
                                    defaultValue={defaultModal.padding}
                                />
                            </label>

                            <label htmlFor="transitionDuration">
                                <span className={labelClass}>Transition Duration:</span>
                                <input
                                    step={100}
                                    type="number"
                                    placeholder="300"
                                    id="transitionDuration"
                                    name="transitionDuration"
                                    className={inputClass}
                                    onChange={handleChangeModal}
                                    value={modalSettings.transitionDuration}
                                    defaultValue={defaultModal.transitionDuration}
                                />
                            </label>

                            <label htmlFor="openCtrl">
                                <span className={labelClass}>Ctrl or ⌘ + {modalSettings.openCtrl}:</span>
                                <input
                                    type="text"
                                    maxLength={1}
                                    id="openCtrl"
                                    name="openCtrl"
                                    placeholder="Nothing"
                                    className={inputClass}
                                    onChange={handleChangeModal}
                                    value={modalSettings.openCtrl}
                                    defaultValue={defaultModal.openCtrl}
                                />
                            </label>
                        </div>

                        <div className="flex flex-wrap justify-center items-center *:w-fit">
                            <label htmlFor="opacity">
                                <div className="text-xs *:py-1 *:px-3 *:border *:rounded-full cursor-pointer">
                                    {modalSettings.animationWithOpacity ? (
                                        <p className="bg-blue-200">✓ Opacity during animation</p>
                                    ) : (
                                        <p>Opacity during animation</p>
                                    )}
                                </div>
                                <input
                                    id="opacity"
                                    name="opacity"
                                    type="checkbox"
                                    defaultChecked={defaultModal.animationWithOpacity}
                                    checked={modalSettings.animationWithOpacity}
                                    className="hidden"
                                    onChange={() => setModal((prev) => ({ ...prev, animationWithOpacity: !prev.animationWithOpacity }))}
                                />
                            </label>

                            <label htmlFor="clickAwayClose">
                                <div className="text-xs *:py-1 *:px-3 *:border *:rounded-full cursor-pointer">
                                    {modalSettings.clickAwayClose ? (
                                        <p className="bg-blue-200">✓ Click outside close the modal</p>
                                    ) : (
                                        <p>Click outside close the modal</p>
                                    )}
                                </div>
                                <input
                                    id="clickAwayClose"
                                    name="clickAwayClose"
                                    type="checkbox"
                                    defaultChecked={defaultModal.clickAwayClose}
                                    checked={modalSettings.clickAwayClose}
                                    className="hidden"
                                    onChange={() => setModal((prev) => ({ ...prev, clickAwayClose: !prev.clickAwayClose }))}
                                />
                            </label>
                        </div>

                    </div>
                    <div className="flex flex-col flex-1">
                        <label htmlFor="className" className="relative">
                            <span className={labelClass}>custom className (tailwindcss):</span>
                            <input
                                required
                                id="className"
                                name="className"
                                onChange={handleChangeModal}
                                value={modalSettings.className}
                                defaultValue={defaultModal.className}
                                className="input appearance-none"
                            />
                        </label>
                    </div>
                </div>

                <div>
                    Close button settings :
                    <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col flex-1">
                            <label htmlFor="position" className="relative">
                                <span className={labelClass}>Position:</span>
                                <select
                                    required
                                    id="position"
                                    name="position"
                                    onChange={handleChangeClose}
                                    defaultValue={defaultClose.position}
                                    value={closeSettings.position}
                                    className="input appearance-none"
                                >
                                    {position.map((s) => <option key={s} selected={s == defaultClose.position} value={s}>{s}</option>)}
                                </select>
                                <span className={`${iconRightClass} pointer-events-none`}>
                                    <IoIosArrowDown />
                                </span>
                            </label>
                        </div>

                        <div className="flex gap-2 *:flex-1 items-center">
                            <label htmlFor="padding">
                                <span className={labelClass}>Padding:</span>
                                <input
                                    type="number"
                                    id="padding"
                                    name="padding"
                                    placeholder="8"
                                    className={inputClass}
                                    onChange={handleChangeClose}
                                    value={closeSettings.padding}
                                    defaultValue={closeSettings.padding}
                                />
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center space-x-3 my-3">
                <p>preset :</p>
                <div className="*:py-1 *:px-3 *:border *:rounded-full space-x-3 text-xs">
                    <button onClick={handleClear}>Default</button>
                    <button onClick={setSideModal}>Sidebar</button>
                </div>
            </div>

            <ModalTrigger className="submit" {...{ onOpen }}>
                Open Modal
            </ModalTrigger>

            <Modal
                {...{ open, onClose, setOpen }}
                size={modalSettings.size}
                padding={modalSettings.padding}
                animation={modalSettings.animation}
                className={modalSettings.className}
                modalPosition={modalSettings.modalPosition}
                clickAwayClose={modalSettings.clickAwayClose}
                transitionTiming={modalSettings.transitionTiming}
                transitionDuration={modalSettings.transitionDuration}
                animationWithOpacity={modalSettings.animationWithOpacity}
            >

                <code>
                    <div className="ml-6">
                        const [open, setOpen] = useState(false);<br />
                        const onOpen = () ={">"} setOpen(true);<br />
                        const onClose = () ={">"} setOpen(false);<br /><br />
                        return (<br />
                        <div className="ml-6">
                            &#60;&#62;<br />
                            <div className="ml-6">
                                &#60;ModalTrigger &#123;...&#123; onOpen &#125;&#125;&#62;<br />
                                <div className="ml-6">
                                    Open Modal<br />
                                </div>
                                &#60;/ModalTrigger&#62;<br />

                                <br />
                                &#60;Modal &#123;...&#123; open, onClose, setOpen &#125;&#125;

                                <div className="ml-6">
                                    {modalSettings.className && modalSettings.className != "" && <>className="{modalSettings.className}"<br /></>}
                                    {modalSettings.padding && modalSettings.padding != defaultModal.padding && <>padding=&#123;{modalSettings.padding}&#125;<br /></>}
                                    {modalSettings.size != defaultModal.size && <>size="{modalSettings.size}"<br /></>}
                                    {modalSettings.openCtrl != "" && <>openCtrl="{modalSettings.openCtrl}"<br /></>}
                                    {modalSettings.animationWithOpacity && <>animationWithOpacity <br /></>}
                                    {modalSettings.clickAwayClose != defaultModal.clickAwayClose && <>clickAwayClose=&#123;false&#125;<br /></>}
                                    {modalSettings.modalPosition != defaultModal.modalPosition && <>modalPosition="{modalSettings.modalPosition}"<br /></>}
                                    {modalSettings.transitionDuration != defaultModal.transitionDuration && <>transitionDuration=&#123;{modalSettings.transitionDuration}&#125;<br /></>}
                                    {modalSettings.animation != defaultModal.animation && <>animation="{modalSettings.animation}"<br /></>}
                                    {modalSettings.transitionTiming != defaultModal.transitionTiming && <>transitionTiming="{modalSettings.transitionTiming}"<br /></>}
                                </div>

                                &#62;

                                <div className="ml-6">
                                    {modalSettings.className && modalSettings.className != "" && <i>Class-related changes are not always visible here!<br /></i>}

                                    &#60;ModalCloseButton {closeSettings.padding != defaultClose.padding && <>position=&#123;{closeSettings.padding}&#125;</>} {closeSettings.position != defaultClose.position && <>position=&#123;"{closeSettings.position}"&#125;</>} &#123;...&#123; onClose &#125;&#125;&#62;<br />
                                    <div className="ml-6">
                                        &#60;LiaTimesSolid /&#62;<br />
                                    </div>
                                    &#60;/ModalCloseButton&#62;<br />
                                </div>
                                &#60;/Modal&#62;<br />
                            </div>
                            &#60;/&#62;
                            <br />
                        </div>
                        )
                    </div>
                </code>

                <ModalCloseButton padding={closeSettings.padding} position={closeSettings.position} {...{ onClose }}>
                    <LiaTimesSolid className="text-xl rounded-[8px] group-hover:scale-90 transition-transform" />
                </ModalCloseButton>
            </Modal>
        </div>
    );
};
