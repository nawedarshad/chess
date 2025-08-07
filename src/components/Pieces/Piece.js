import arbiter from '../../arbiter/arbiter';
import { useAppContext }from '../../contexts/Context'
import { generateCandidates } from '../../reducer/actions/move';

const Piece = ({
    rank,
    file,
    piece,
}) => {

    const { appState, dispatch } = useAppContext();
    const { turn, castleDirection, position : currentPosition } = appState

    const onClickPiece = e => {
        e.stopPropagation();

        if (turn === piece[0]){
            const candidateMoves =
                arbiter.getValidMoves({
                    position : currentPosition[currentPosition.length - 1],
                    prevPosition : currentPosition[currentPosition.length - 2],
                    castleDirection : castleDirection[turn],
                    piece,
                    file,
                    rank
                })
            dispatch(generateCandidates({candidateMoves, piece, rank, file}))
        }

    }
 
    return (
        <div
            className={`piece ${piece} p-${file}${rank}`}
            onClick={onClickPiece}

        />)
}

export default Piece