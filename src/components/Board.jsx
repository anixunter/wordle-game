import Letter from "./Letter";

const Board = () => {
  return (
    <div className="board">
      <div className="row">
        <Letter attemptVal={0} letterPosVal={0} />
        <Letter attemptVal={0} letterPosVal={1} />
        <Letter attemptVal={0} letterPosVal={2} />
        <Letter attemptVal={0} letterPosVal={3} />
        <Letter attemptVal={0} letterPosVal={4} />
      </div>
      <div className="row">
        <Letter attemptVal={1} letterPosVal={0} />
        <Letter attemptVal={1} letterPosVal={1} />
        <Letter attemptVal={1} letterPosVal={2} />
        <Letter attemptVal={1} letterPosVal={3} />
        <Letter attemptVal={1} letterPosVal={4} />
      </div>
      <div className="row">
        <Letter attemptVal={2} letterPosVal={0} />
        <Letter attemptVal={2} letterPosVal={1} />
        <Letter attemptVal={2} letterPosVal={2} />
        <Letter attemptVal={2} letterPosVal={3} />
        <Letter attemptVal={2} letterPosVal={4} />
      </div>
      <div className="row">
        <Letter attemptVal={3} letterPosVal={0} />
        <Letter attemptVal={3} letterPosVal={1} />
        <Letter attemptVal={3} letterPosVal={2} />
        <Letter attemptVal={3} letterPosVal={3} />
        <Letter attemptVal={3} letterPosVal={4} />
      </div>
      <div className="row">
        <Letter attemptVal={4} letterPosVal={0} />
        <Letter attemptVal={4} letterPosVal={1} />
        <Letter attemptVal={4} letterPosVal={2} />
        <Letter attemptVal={4} letterPosVal={3} />
        <Letter attemptVal={4} letterPosVal={4} />
      </div>
      <div className="row">
        <Letter attemptVal={5} letterPosVal={0} />
        <Letter attemptVal={5} letterPosVal={1} />
        <Letter attemptVal={5} letterPosVal={2} />
        <Letter attemptVal={5} letterPosVal={3} />
        <Letter attemptVal={5} letterPosVal={4} />
      </div>
    </div>
  );
};

export default Board;
