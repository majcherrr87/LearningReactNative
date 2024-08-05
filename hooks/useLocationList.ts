import { addLocation, removeLocation } from "@/src/store/location";
import { useAppDispatch, useAppSelector } from "@/src/store/store";

export interface ListItem {
  id: string;
  title: string;
  value: string;
}

export const useLocationList = () => {
  const { locations } = useAppSelector((state) => state.location);
  const dispatch = useAppDispatch();

  const addTOList = (item: Omit<ListItem, "id">) => {
    dispatch(addLocation(item));
  };

  const removeFromList = (item: ListItem) => {
    dispatch(removeLocation(item));
  };

  return {
    list: locations,
    addTOList,
    removeFromList,
  };
};
