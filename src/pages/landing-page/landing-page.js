import React, { useState, useEffect } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

import { getTodayPicture, getDatePicture } from "../../services";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import Typography from "@mui/material/Typography";

export const LandingPage = () => {
  const [response, setResponse] = useState("");
  const [date, setDate] = useState();
  const [error, setError] = useState("");

  const loadImage = async () => {
    try {
      const response = await getTodayPicture();
      const { data } = response;
      setResponse(data);
    } catch (e) {
      console.log(e);
    }
  };

  const updateImage = async () => {
    try {
      const strDate = JSON.stringify(date).split("T")[0].slice(1);
      const response = await getDatePicture({ date: strDate });
      const { data } = response;
      setResponse(data);
      setError("");
    } catch (e) {
      try {
        if (e.response.status === 400) {
          const data = {
            code: "400 BAD REQUEST",
            message: e.message,
          };
          setError(data);
          setResponse("");
        }
      } catch (e) {
        const data = {
          code: "500 INTERNAL SERVER ERROR",
          message: "There was an error, please try again.",
        };
        setError(data);
        setResponse("");
      }
    }
  };

  useEffect(() => {
    loadImage();
  }, []);

  return (
    <Container>
      <Header />
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        alignItems="center"
      >
        <Grid item xs={12} textAlign="center">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Picture of the Day"
              value={date}
              onChange={(newValue) => {
                setDate(newValue);
                updateImage();
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Typography
            variant="h5"
            component="h5"
            align="center"
            sx={{ paddingBottom: "10px" }}
          >
            {error.code}
          </Typography>
          <Typography variant="body2" align="justify">
            {error.message}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant="h5"
            component="h5"
            align="center"
            sx={{ paddingBottom: "10px" }}
          >
            {response.title}
          </Typography>
          <Typography variant="body2" align="right">
            {response.date}
          </Typography>
          <Box
            component="img"
            sx={{
              width: "100%",
            }}
            alt="Picture of the day"
            src={response.url}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" align="justify" component={"span"}>
            {response.explanation}
          </Typography>
        </Grid>
      </Grid>
      <Footer />
    </Container>
  );
};
