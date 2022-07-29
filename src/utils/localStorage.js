const loadData = (key) => {
  try {
    let res = localStorage.getItem(key);
    res = JSON.parse(res);
    return res;
  } catch (err) {
    return null;
  }
};
const saveData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
export {loadData,saveData};
