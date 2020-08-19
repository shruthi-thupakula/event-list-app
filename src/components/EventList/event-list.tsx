import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import React, { useEffect, useState } from "react";
import config from "../config";
import useFetch from "../custom-hook";
import { EventTiles } from "./components";
import { EventsEntity, FreeEvent } from "./interfaces";

interface EventListProps {}

export const EventList = (props: EventListProps) => {
  const { loading, data, error } = useFetch(config.DATA_END_POINT);
  const [localLoading, setLocalLoading] = useState<boolean>(false);
  const [filter, setFilter] = useState<"free" | "paid" | "all">("all");
  const [localData, setLocalData] = useState<EventsEntity>({} as EventsEntity);
  // for search text track
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("hey", (event.target as HTMLInputElement).value);
    setFilter((event.target as HTMLInputElement).value as any);
  };

  const handleLocalLoading = (state: boolean) => {
    console.log("called", state, localLoading);
    if (!localLoading) {
      // if still loading then only set to false
      setLocalLoading(state);
    }
  };
  const doesTextExist = (searchText: string) => (event: FreeEvent) =>
    event.confName.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
    event.city.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;

  const handleSearchClick = (event: any) => {
    if (event && event.preventDefault) {
      event.preventDefault();
    }

    const searchText = event.currentTarget.searchText.value;
    if (searchText) {
      // apply the search
      const filteredFreeData = data?.free.filter(doesTextExist(searchText));
      const filteredPaidData = data?.paid.filter(doesTextExist(searchText));
      console.log(filteredPaidData?.length, filteredFreeData?.length);
      setLocalData((prevLocalData) => ({
        ...prevLocalData,
        free: filteredFreeData,
        paid: filteredPaidData,
      }));
    } else {
      // clear the search
      setLocalData(data);
    }
  };
  // on each time data changes, lets have a copy for filter purpose
  useEffect(() => {
    setLocalData(data);
  }, [data]);
  return loading ? (
    <CircularProgress size={30} />
  ) : (
    <>
      {localLoading && <CircularProgress size={30} />}{" "}
      <form onSubmit={handleSearchClick}>
        <Box display="flex">
          {" "}
          <FormControl fullWidth>
            <TextField
              id="outlined-basic"
              label="Search"
              name="searchText"
              placeholder="Type to search name or city"
              variant="outlined"
            />
          </FormControl>
          <Button variant="contained" color="secondary" type="submit">
            Search
          </Button>
        </Box>
      </form>
      <Box display="flex" justifyContent="flex-end" m={1}>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="list"
            name="list"
            value={filter}
            onChange={handleRadioChange}
            row
          >
            <FormControlLabel value="all" control={<Radio />} label="All" />
            <FormControlLabel
              value="free"
              control={<Radio />}
              label="Free Only"
            />
            <FormControlLabel
              value="paid"
              control={<Radio />}
              label="Paid Only"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      {error && `${error}, please retry!`}
      {filter !== "free" && (
        <EventTiles
          events={localData?.paid}
          type="Paid"
          onLoadComplete={handleLocalLoading}
        />
      )}
      {filter !== "paid" && (
        <EventTiles
          events={localData?.free}
          type="Free"
          onLoadComplete={handleLocalLoading}
        />
      )}
    </>
  );
};

export default EventList;
