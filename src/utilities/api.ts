import { InfoContent } from "../types/data";
import { infoMock } from "./mockData";

export const getInfoContent = async () => {
  const data = await infoMock;
  return data as InfoContent;
};
