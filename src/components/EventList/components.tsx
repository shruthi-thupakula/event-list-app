import Box from "@material-ui/core/Box";
import CardMedia from "@material-ui/core/CardMedia";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import { DateRange, LocationOn } from "@material-ui/icons";
import React, { useEffect } from "react";
import { FreeEvent, PaidEvent } from "./interfaces";
import PlainCard from "./plain-card";
interface EventTilesProps {
  events: Array<FreeEvent | PaidEvent>;
  type: "Free" | "Paid";
  onLoadComplete: (state: boolean) => void;
}

//  poster image, date, name of the conference, is it free or paid & place, and the link
export const EventTiles = (props: EventTilesProps) => {
  const { events, onLoadComplete, type } = props;

  useEffect(() => {
    console.log("called");
    // onLoadComplete(true);
  }, []);
  return (
    <Grid container spacing={2}>
      {
        // the basic tile generation code
        events &&
          events.length &&
          events.map((event: FreeEvent | PaidEvent, index: number) => (
            <Grid item xs key={index}>
              <Box mb={2.25}>
                <PlainCard>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={event.imageURL}
                    title="Contemplative Reptile"
                    onError={(event: any) =>
                      (event.target.src =
                        "https://www.ieee.org/content/dam/ieee-org/ieee/web/org/conferences/landingpage-audienceimage-418x350.jpg")
                    }
                  />
                  <Box textAlign="left">
                    {event?.confName?.length > 25 ? (
                      <Tooltip title={event?.confName}>
                        <Typography variant="h4">
                          {event?.confName?.slice(0, 25)}...
                        </Typography>
                      </Tooltip>
                    ) : (
                      <Typography variant="h4">{event?.confName}</Typography>
                    )}
                  </Box>{" "}
                  <Box display="flex" alignItems="center" mt={1.25}>
                    <Box display="flex" alignItems="center">
                      <Box>
                        <Typography variant="h5"></Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignContent="center"
                  >
                    <Box>
                      <DateRange />
                    </Box>
                    <Typography variant="h6">{`${event.confStartDate}-${event.confEndDate}`}</Typography>{" "}
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignContent="center"
                  >
                    <Box>
                      <LocationOn />
                    </Box>
                    <Typography variant="h6">{`${event.city}, ${event.country}`}</Typography>{" "}
                  </Box>
                  <Box>
                    <Typography variant="h6"></Typography>
                    <Typography variant="h6"></Typography>
                  </Box>
                  <Box p={2}>
                    <Divider />
                  </Box>
                  <Box m={1.25} display="flex" justifyContent="space-between">
                    <Box>
                      <Chip label={type} variant="outlined" />
                    </Box>
                    <Box>
                      <a
                        href={event.confRegUrl}
                        target="_blank"
                        style={{ textDecoration: "none", fontSize: "13px" }}
                      >
                        View Details
                      </a>
                    </Box>
                  </Box>
                </PlainCard>
              </Box>
            </Grid>
          ))
      }
    </Grid>
  );
};
