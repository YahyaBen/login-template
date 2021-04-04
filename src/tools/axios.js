import axios from "axios";

const RZK = axios.create({
  baseURL: "http://localhost/breaktool/api",
  delayed: true,
});

async function login(mail,Password) {
  return await RZK({
    method: "post",
    url: "/user/globalData?id=" ,
    auth:{
        username: mail,
        password: Password
    }
  });
}

export{login}

