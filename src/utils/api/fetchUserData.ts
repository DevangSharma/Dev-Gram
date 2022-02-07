import axios from "axios";
import { userConfig } from "./apiConfigs";

export const fetchUserData = async (username: string) => {
  const res = await axios(userConfig(username));

  return res.data;
};
