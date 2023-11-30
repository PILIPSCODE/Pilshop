import React, { useRef } from "react";
import { BsInfoCircle } from "react-icons/bs";

const OrdersModal = () => {
  const modalref = useRef<HTMLDialogElement>(null);
  return (
    <div>
      <div
        data-tip="Order-Details"
        onClick={() => modalref.current?.showModal()}
        className="tooltip text-lg tooltip-top"
      >
        <BsInfoCircle />
      </div>

      <dialog ref={modalref} className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Click the button below to close</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default OrdersModal;
