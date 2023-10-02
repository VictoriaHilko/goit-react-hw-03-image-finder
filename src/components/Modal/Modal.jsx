import { Component } from "react";

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.closeByEsc);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.closeByEsc);
    }

    closeByEsc = event => {
        if (event.code !== 'Escape') {
            return;
        }
        this.props.closeModal();
    };

    render() {
        const { closeModal, tags, modalImg } = this.props;

        return (
            <div onClick={closeModal}>
                <div>
                    <img src={modalImg} alt={tags} />
                </div>
            </div>,
            modalRoot
        );

    };
}