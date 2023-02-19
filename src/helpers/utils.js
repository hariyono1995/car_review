import axios from "axios";

var base_url =
  // "https://final-beckend-nlih030xc-hariyono1995.vercel.app";
  // "https://final-beckend-64xyn1n13-hariyono1995.vercel.app";

  "https://final-beckend-o4wu8cw4l-hariyono1995.vercel.app";
async function getData(pathUrl, header = null) {
  console.log(`${base_url}/${pathUrl}`);
  return await axios.get(`${base_url}/${pathUrl}`, header);
}

async function postData(pathUrl, payload, header = null) {
  console.log(`${base_url}/${pathUrl}`);
  return axios.post(
    `${base_url}/${pathUrl}`,
    payload,
    header
  );
}

async function deleteData(pathUrl, header = null) {
  console.log(`${base_url}/${pathUrl}`);
  return axios.delete(
    `${base_url}/${pathUrl}`,

    header
  );
}

async function updateData(pathUrl, payload, header = null) {
  console.log(`${base_url}/${pathUrl}`);
  return axios.put(
    `${base_url}/${pathUrl}`,
    payload,
    header
  );
}

function setLocalStorage(key, payload) {
  localStorage.setItem(key, JSON.stringify(payload));
}

function getUserLoginLocalStorage() {
  return JSON.parse(localStorage.getItem("userLogin"));
}

function formatDate(date) {
  return new Intl.DateTimeFormat(navigator.language, {
    dateStyle: "long",
  }).format(date);
}

function formatCurrency(currency) {
  return new Intl.NumberFormat(navigator.language, {
    style: "currency",
    currency: "IDR",
  }).format(currency);
}

function getDateNow(date = new Date()) {
  // const date = new Date();
  return new Intl.DateTimeFormat(navigator.language, {
    dateStyle: "medium",
  }).format(date);
}

function randomDate() {
  const start = new Date(2010, 0, 1);
  const end = new Date();
  const randomdate = new Date(
    start.getTime() +
      Math.random() * (end.getTime() - start.getTime())
  );

  return getDateNow(randomdate);
}

export {
  formatDate,
  formatCurrency,
  getData,
  postData,
  deleteData,
  updateData,
  setLocalStorage,
  getUserLoginLocalStorage,
  base_url,
  getDateNow,
  randomDate,
};
