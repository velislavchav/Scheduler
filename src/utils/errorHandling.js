export const handleApiError = (errMessage = null) => {
    return errMessage ? alert(errMessage) : null;
}