import axios from "axios";

const RZK = axios.create({
  baseURL: "192.168.1.29:8000/api",
  delayed: true,
});

async function login(mail,Password) {
  console.log(RZK.baseURL);
  return await RZK({
    method: "post",
    url: "/login",
    auth: {
      username: mail,
      password: Password,
    },
  });
}

export{login}

