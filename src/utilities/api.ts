import { InfoContent } from "../types/data";
import { infoMock } from "./mockData";

export const getInfoContent = async () => {
  const data = await fetch("https://sheetdb.io/api/v1/5j1o3zkhqcg63");
  console.log({ data });

  return data.json();
};

export const getPublicationContent = async () => {
  const data = await fetch(
    "https://sheetdb.io/api/v1/5j1o3zkhqcg63?sheet=PUBLICATION"
  );

  console.log({ data });

  return data.json();
};