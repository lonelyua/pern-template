const ROOT_URL = `http://localhost:${process.env.SERVER_PORT}/api`;

export const API = {
  addItem: `${ROOT_URL}/items`,
  items: `${ROOT_URL}/items/`,
  item: (id: number) => `${ROOT_URL}/items/${id}`,
  updateItem: (id: number) => `${ROOT_URL}/items/${id}`,
  deleteItem: (id: number) => `${ROOT_URL}/items/${id}`,
};
