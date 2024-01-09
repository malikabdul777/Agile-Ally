// React

// Thirdparty
import Board, {
  moveCard,
  moveColumn,
  removeCard,
  addCard,
} from "@asseinfo/react-kanban";
import "@asseinfo/react-kanban/dist/styles.css";
import { RxCross2 } from "react-icons/rx";
import { IoMdAdd } from "react-icons/io";
// Utils

// APISlices

// Slice
import useBoard from "../../store/Board";

// CustomHooks

// Components

// Constants

// Enums

// Interfaces

// Styles
import "./Board.css";
import AddCardModal from "../../components/AddCardModal/AddCardModal";
import { useState } from "react";

// Local enums

// Local constants

// Local Interfaces

const BoardPage = () => {
  const { board, setBoard } = useBoard();

  const handleColumnMove = (_card, source, destination) => {
    const updatedBoard = moveColumn(board, source, destination);
    setBoard(updatedBoard);
  };
  const handleCardMove = (_card, source, destination) => {
    const updatedBoard = moveCard(board, source, destination);
    setBoard(updatedBoard);
  };

  const getColumn = (card) => {
    const column = board.columns.filter((column) =>
      column.cards.includes(card)
    );

    return column[0];
  };

  return (
    <div className="board-container">
      <span>Board</span>
      <Board
        allowAddColumn
        allowRenameColumn
        allowRemoveCard
        onCardDragEnd={handleCardMove}
        onColumnDragEnd={handleColumnMove}
        renderCard={(props) => (
          <div className="kanban-card">
            <div>
              <span>{props.title}</span>
              <button
                className="remove-button"
                type="button"
                onClick={() => {
                  const updatedBoard = removeCard(
                    board,
                    getColumn(props),
                    props
                  );
                  setBoard(updatedBoard);
                }}
              >
                <RxCross2 color="white" size={15} />
              </button>
            </div>
            <span>{props.description}</span>
          </div>
        )}
        renderColumnHeader={(props) => {
          const [modalOpened, setModalOpened] = useState(false);

          const handleCardAdd = (title, detail) => {
            const card = {
              id: new Date().getTime(),
              title,
              description: detail,
            };
            const updatedBoard = addCard(board, props, card);
            setBoard(updatedBoard);
            setModalOpened(false);
          };

          return (
            <div className="column-header">
              <span>{props.title}</span>
              <IoMdAdd
                color="black"
                size={25}
                title="Add Card"
                onClick={() => setModalOpened(true)}
              />
              <AddCardModal
                visible={modalOpened}
                onClose={() => setModalOpened(false)}
                handleCardAdd={handleCardAdd}
              />
            </div>
          );
        }}
      >
        {board}
      </Board>
    </div>
  );
};

export default BoardPage;
