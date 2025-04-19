// userSession.ts

let userID: number | null = null;

export const setUserID = (id: number) => {
  userID = id;
};

export const getUserID = () => {
  return userID;
};
