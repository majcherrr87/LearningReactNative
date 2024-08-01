import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import "react-native-get-random-values";
import { v4 as uuidV4 } from "uuid";

export interface ListItem {
  id: string;
  title: string;
  value: string;
}

export const useLocationList = () => {
  const [list, setList] = useState<ListItem[]>([]);
  const { getItem, setItem } = useAsyncStorage("locationList");

  useEffect(() => {
    const init = async () => {
      const storageItems = await getItem();
      if (storageItems) {
        setList(JSON.parse(storageItems));
      }
    };
    init();
  }, []);

  const addTOList = (item: Omit<ListItem, "id">) => {
    const newList = [...list, { ...item, id: uuidV4() }];
    setList(newList);
    setItem(JSON.stringify(newList));
  };

  const removeFromList = (item: ListItem) => {
    const newList = [...list];
    const toRemoveIndex = newList.findIndex(
      (listElement) => listElement.id === item.id
    );
    if (toRemoveIndex !== -1) {
      newList.splice(toRemoveIndex, 1);
      setList(newList);
      setItem(JSON.stringify(newList));
    }
  };

  return {
    list,
    addTOList,
    removeFromList,
  };
};
