import axios from "axios";
import { userImagesConfig } from "./apiConfigs";

export const fetchUserImages = async (username: string, pageNumber: number) => {
  const userImages = await axios(userImagesConfig(username, pageNumber));

  return userImages.data;
};
