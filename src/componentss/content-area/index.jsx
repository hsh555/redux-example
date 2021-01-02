import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editCardAction, deleteCardAction, currentElementIdAction } from '../../store/main/action';
import './style.css';

const ContentArea = () => {
    const { cards, currentElementId } = useSelector(state => state.mainReducer);
    const dispatch = useDispatch();

    const handleOnClick = (e) => {
        if (e.target.dataset.action === 'edit') {
            dispatch(currentElementIdAction(e.currentTarget.id));
        }
        if (e.target.dataset.action === 'delete') {
            dispatch(deleteCardAction(e.currentTarget.id))
        }
    }

    const HandleEditCard = (e) => {
        if (e.keyCode == 13) {
            const id = e.currentTarget.nextSibling.id;
            dispatch(editCardAction({ title: e.currentTarget.value, id: Number(id) }));
            dispatch(currentElementIdAction(undefined));
        }
    }

    useEffect(() => {
        if (currentElementId >= 0) {
            document.querySelector(".card-input").focus()
        }
    }, [currentElementId]);

    return (
        <div className="content-area">
            {cards.map(card => {
                return (
                    <div className="card" key={card.id} id={`card-${card.id}`}>
                        {card.id === Number(currentElementId) && <input type="text" className="card-input" onKeyUp={HandleEditCard} />}
                        <div className="card-body" id={card.id} onClick={handleOnClick}>
                            <p className="card-text">{card.title}</p>
                            <span className="card-icons">
                                <span className="edit-icon">
                                    <i className="edit fa fa-pencil" data-action="edit"></i>
                                </span>
                                <span className="delete-icon">
                                    <i className="delete fa fa-trash" data-action="delete"></i>
                                </span>
                            </span>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default ContentArea;