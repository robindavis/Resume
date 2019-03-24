const date = new Date();

export const getCurrentDate = () => date.toLocaleDateString();

export const getCurrentTime = () => date.toLocaleTimeString();
