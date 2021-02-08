import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewCardAction } from '../../store/main/action';
import './style.css';

const InputArea = () => {
    const inputElement = useRef(null);
    const cardId = useSelector(state => state.mainReducer.cards.length);
    const dispatch = useDispatch();

    const handleAddNewCard = () => {
        if (inputElement.current.value.trim().length > 0) {
            dispatch(addNewCardAction({ title: inputElement.current.value, id: cardId }));
        }
        inputElement.current.value = '';
        inputElement.current.focus();
    }

    return (
        <div className="input-area">
            <input ref={inputElement} type="text" placeholder="add a new..." />
            <button onClick={handleAddNewCard}>Add</button>
        </div>
    );
}

export default InputArea;