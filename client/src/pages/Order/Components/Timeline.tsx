import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import CheckIcon from "@mui/icons-material/Check";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import RecommendIcon from "@mui/icons-material/Recommend";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { Typography } from "@mui/material";

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate" sx={{ minWidth: "300px" }}>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          9:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ bgcolor: "#63422d" }}>
            <RecommendIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography fontWeight="500" component="span">
            Order Confirmed
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color={"text.secondary"}
        >
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ bgcolor: "#63422d" }}>
            <HomeRepairServiceIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ pt: "12px", px: 2 }}>
          <Typography fontWeight="500" component="span" display="inline-block">
            Order
          </Typography>
          <Typography fontWeight="500" component="span" display="inline-block">
            Packaging
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ bgcolor: "#63422d" }} variant="outlined">
            <AirportShuttleIcon sx={{ color: "white" }} />
          </TimelineDot>
          <TimelineConnector color="primary" />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography fontWeight="500" component="span" display="inline-block">
            Order is
          </Typography>
          <Typography fontWeight="500" component="span" display="inline-block">
            On the way
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector color="primary" />
          <TimelineDot sx={{ bgcolor: "#63422d" }}>
            <CheckIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography fontWeight="500" component="span" display="inline-block">
            Order
          </Typography>
          <Typography fontWeight="500" component="span" display="inline-block">
            Delivered
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
