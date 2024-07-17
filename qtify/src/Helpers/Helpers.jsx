// src/helpers/helpers.js
export const truncate = (str, length) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };
  