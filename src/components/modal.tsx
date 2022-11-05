import React from 'react';
import './modal.css';

interface ModalProps {

  size?: 'small' | 'medium'| 'large';
  /**
   * Titulo del modal
   */
  title: string;
  /**
   * Texto del modal
   */
  text: string;
  /**
   * Texto del boton que abre el modal
   */
  buttonText: string;
 /**
   * Color del boton
   */
  buttonColor?: 'green' | 'blue'| 'red';
}

/**
 * Primary UI component for user interaction
 */
export const Modal = ({
  title ,
  text ,
  buttonText,
  size,
  buttonColor,
  ...props
}: ModalProps) => {
  return (
    <div>
      <input className="modal-state" id="modal-1" type="checkbox" />
      <div className="modal"  id="modal-1" {...props}>
        <label className="modal__bg" ></label>
        <div className={['modal__inner', `modal_size_${size}`].join(' ')}>
          <label className="modal__close" htmlFor="modal-1"></label>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
      <label className={['btn', `btn--${buttonColor}`].join(' ')} htmlFor="modal-1">{buttonText}</label>
    </div>
   
  );
};
