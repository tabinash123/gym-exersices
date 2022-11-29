import React from 'react';
import { Box, Stack, Typography } from '@mui/material';



const ExerciseVideo = ({ exerciseVideos, name }) => {

  return (
    <Box
      sx={{
        marginTop: { lg: "203px", xs: "20px" },
        mb: { lg: 4, xs: 10 },
      }} p='20px'
    >
      <Typography variant="h4" mb="13px">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {" "}
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        sx={{ flexDirection: { lg: "row",sm:'row' }, gap: { lg: "50px", xs: "0px", sm:5 } }}
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="flex-start"
        overflow='auto'
      >
        {exerciseVideos.slice(0, 7)?.map((item, index) => {
          return (
            <Box >
              <a
                key={index}
                className="exercise-video"
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={item.video.thumbnails[0].url}
                  alt={item.video.title}
                />
                <Box>
                  <Typography variant="h6" fontWeight="bold" color="black">
                    {item.video.title}
                  </Typography>
                  <Typography variant="h7" color="black" fontWeight="bold">
                    {item.video.channelName}
                  </Typography>
                </Box>
              </a>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default ExerciseVideo