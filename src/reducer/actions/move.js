import actionTypes from '../actionTypes';

export const makeNewMove = ({newPosition,newMove}) => {
    return {
        type: actionTypes.NEW_MOVE,
        payload: {newPosition,newMove},
    }
}

export const clearCandidates = () => {
    return {
        type: actionTypes.CLEAR_CANDIDATE_MOVES,
    }
}

export const generateCandidates = ({candidateMoves, piece, rank, file}) => {
    return {
        type: actionTypes.GENERATE_CANDIDATE_MOVES,
        payload : {candidateMoves, piece, rank, file}
    }
}

export const takeBack = () => {
    return {
        type: actionTypes.TAKE_BACK,
    }
}
