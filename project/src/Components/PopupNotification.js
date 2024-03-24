import "../Style/Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { useRef, useEffect } from 'react';

function PopupNotification({ message, showPopup, closePopup }) {
    const timerRef = useRef(null);
    useEffect(() => {
        if (showPopup) {
            timerRef.current = setTimeout(() => {
                closePopup();
            }, 5000);
        }
        return () => {
            clearTimeout(timerRef.current);
        }
    }, [showPopup]);
    return (
        <>
            <style>{`
            .popup {
                position: fixed;
                top: 10%;
                left: 50%;
            }
            .showPopup {
                display: flex;
                gap: 10px;
                transform: translate(-50%, -50%);
                background-color: ${message.theme.backgroundColor};
                color: ${message.theme.color};
                font-weight: bold;
                padding: 10px 20px;
                border-radius: 25px;
                z-index: 9999;
                opacity: 1;
                white-space: nowrap;
                text-align: center;
                transition: opacity 0.5s;
            }
            .popupText {
                width: 100%;
            }
            .showPopup button {
                background-color: transparent;
                border: none;
                color: white;
                font-size: 14px;
                cursor: pointer;
            }
            .hidePopup {
                opacity: 0;
                transition: opacity 0.5s;
            }
            .hidePopup .popupText{
                opacity: 0;
            }
            .hidePopup button{
                opacity: 0;
            }
        `}</style>
            <div
                className={'popup ' + (showPopup ? 'showPopup' : 'hidePopup')}>
                <button onClick={closePopup}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <div className='popupText'>{message.text}</div>
            </div>
        </>
    )
}

export default PopupNotification;