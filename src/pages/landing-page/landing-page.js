import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { getDatePicture } from "../../services";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import Typography from "@mui/material/Typography";

import "react-datepicker/dist/react-datepicker.css";

export const LandingPage = () => {
  const [data, setData] = useState({
    title: "",
    date: "",
    url: "",
    explanation: "",
    error: "",
    message: "",
  });
  const [date, setDate] = useState(new Date());

  const loadImage = async () => {
    try {
      const strDate = new Date(
        date.getTime() - date.getTimezoneOffset() * 60000
      )
        .toISOString()
        .split("T")[0];
      const response = await getDatePicture({ date: strDate });
      const { data } = response;
      setData({
        title: data.title,
        date: data.date,
        url: data.url,
        explanation: data.explanation,
      });
    } catch (e) {
      try {
        if (e.response.status === 400 || e.response.status === 404) {
          setData({
            error: "Error " + e.response.data.code,
            message: e.response.data.msg,
          });
        }
      } catch (err) {
        setData({
          error: "Error 500",
          message: "There was an error, please try again.",
        });
      }
    }
  };

  useEffect(() => {
    loadImage();
  }, [date]);

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
          <DatePicker
            popperPlacement="bottom"
            selected={date}
            onChange={(date) => setDate(date)}
            dateFormat="dd/MM/yyyy"
          />
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Typography
            variant="h5"
            component="h5"
            align="center"
            sx={{ paddingBottom: "10px" }}
          >
            {data.error}
          </Typography>
          <Typography variant="body2" align="justify">
            {data.message}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant="h5"
            component="h5"
            align="center"
            sx={{ paddingBottom: "10px" }}
          >
            {data.title}
          </Typography>
          <Typography variant="body2" align="right">
            {data.date}
          </Typography>
          <Box
            component="img"
            sx={{
              width: "100%",
            }}
            alt="Picture of the day"
            src={data.url}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" align="justify" component={"span"}>
            {data.explanation}
          </Typography>
        </Grid>
      </Grid>
      <Footer />
    </Container>
  );
};

export default LandingPage;
