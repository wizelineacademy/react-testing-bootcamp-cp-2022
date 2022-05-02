import React, { useState, useEffect, useCallback } from "react";
import Style from "./Main.module.css";
import { Row, Col, DatePicker, Image, Spin, notification } from "antd";
import moment from "moment";

const Main = () => {
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState(null);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [infoImage, setInfoImage] = useState(null);
  const { REACT_APP_API_KEY_NASA_POD, REACT_APP_API_URL } = process.env;

  const onChangeDate = useCallback(
    async (datemoment, datestring) => {
      setLoading(true);
      setDate(datemoment);
      try {
        const response = await fetch(
          `${REACT_APP_API_URL}?api_key=${REACT_APP_API_KEY_NASA_POD}&date=${datestring}`
        );
        const POD = await response.json();
        updateStates(POD);
        if (POD.msg) {
          sendNotificationError(POD);
        }
      } catch (error) {
        sendNotificationError("There was an error, please try again.");
      }
      setLoading(false);
    },
    [REACT_APP_API_KEY_NASA_POD, REACT_APP_API_URL]
  );

  const sendNotificationError = ({ msg = "estoy mandnando error" }) => {
    notification["error"]({
      message: "Error",
      description: msg,
    });
  };

  const updateStates = ({ url = "", explanation = "", title = "" }) => {
    setImage(url);
    setInfoImage(explanation);
    setTitle(title);
  };

  useEffect(() => {
    const today = moment();
    onChangeDate(today, today.format("YYYY-MM-DD"));
  }, [onChangeDate]);

  return (
    <div className={Style.container}>
      <Row>
        <Col span={6} offset={9} className={Style.calendar}>
          <DatePicker onChange={onChangeDate} value={date} />
        </Col>
      </Row>
      <Spin
        tip="Loading..."
        spinning={loading}
        wrapperClassName={Style.spinner}
      >
        <Row>
          <Col span={10} offset={1}>
            {image && <Image src={image} alt={title} />}
          </Col>
          <Col span={8} offset={2}>
            {infoImage && <p>{infoImage}</p>}
          </Col>
        </Row>
      </Spin>
    </div>
  );
};

export default Main;
