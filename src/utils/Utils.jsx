 const DIGITS_AFTER_DOT = 1;

export const formatFloat = (floatValue) => {
    return Number.parseFloat(floatValue).toFixed(DIGITS_AFTER_DOT);
}