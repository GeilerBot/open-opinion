import axios from "axios";
import { Randomizer } from "encrypted-randomizer";

const setEncryption = new Randomizer(process.env.REACT_APP_RANDOMIZER_KEY);

export default async () =>
  axios.create({
    baseURL: "http://localhost:9000/",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      TS: setEncryption.encTs(),
      ERHS: await setEncryption.sendHeader(),
    },
  });
