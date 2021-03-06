import { 
    BUILD_CARD,
    UPDATE_FILE_NAME,
    UPDATE_FORM_ELEMENT_DATA,
    UPDATE_FORMAT_FORM_ELEMENT_DATA,
    UPDATE_FORMAT_FORM_ELEMENTS,
    UPDATE_BUILD_FILE_ID,
    UPDATE_BUILD_CARD_FORMAT,
    RESET_BUILD_DATA
} from './types';

export const buildCard = (cardData) => dispatch => {
    dispatch({
        type: BUILD_CARD,
        payload: cardData
    });

    return Promise.resolve();
};
export const updateFileName = (fileName) => dispatch => {
    dispatch({
        type: UPDATE_FILE_NAME,
        payload: fileName
    });
};
export const updateFormElementData = (formElementData) => dispatch => {
    dispatch({
        type: UPDATE_FORM_ELEMENT_DATA,
        payload: formElementData
    });
};
export const updateFormatFormElementData = (formElementData) => dispatch => {
    dispatch({
        type: UPDATE_FORMAT_FORM_ELEMENT_DATA,
        payload: formElementData
    });
};
export const updateFormatFormElements = (formElementData) => dispatch => {
    dispatch({
        type: UPDATE_FORMAT_FORM_ELEMENTS,
        payload: formElementData
    });
};
export const updateBuildFileId = (buildFileId) => dispatch => {
    dispatch({
        type: UPDATE_BUILD_FILE_ID,
        payload: buildFileId
    });
};
export const updateBuildCardFormat = (buildCardFormat) => dispatch => {
    dispatch({
        type: UPDATE_BUILD_CARD_FORMAT,
        payload: buildCardFormat
    });
};
export const resetBuildData = () => dispatch => {
    dispatch({
        type: RESET_BUILD_DATA
    });
};
