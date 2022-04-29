import { useEffect, useState } from 'react';
import {
  Placeholder,
  Form,
  Image,
  Container,
  Row,
  Col,
  Alert,
  Card
} from 'react-bootstrap';
import axios from 'axios';
import styled from 'styled-components';

const Description = styled.aside`
  font-size: 14px;
`;

const fetchData = async ({ setApiData, setLoader, date }) => {
  // set to the isApiFetched state false
  try {
    //  make ajax call
    const info = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`
    );

    // adding the code status
    setApiData({ ...info.data, sucess: true });
  } catch (error) {
    //  handleError
    if (error.response.data) {
      setApiData({ ...error.response.data, sucess: false });
    }
  }

  setLoader(false);
};

const Loading = () => (
  <Row data-testid='loader'>
    <Col xs={7}>
      <Placeholder animation='glow'>
        <Placeholder xs={12} size='lg' />
      </Placeholder>{' '}
    </Col>
    <Col xs={1}></Col>
    <Col xs={4}>
      <Placeholder animation='glow'>
        <Placeholder xs={12} size='lg' />
      </Placeholder>
    </Col>
    <Col xs={7}>
      <Placeholder animation='glow'>
        <Placeholder xs={12} size='lg' />
      </Placeholder>{' '}
    </Col>
    <Col xs={1}></Col>
    <Col xs={4}>
      <Placeholder animation='glow'>
        <Placeholder xs={12} size='lg' />
      </Placeholder>
    </Col>
    <Col xs={7}>
      <Placeholder animation='glow'>
        <Placeholder xs={12} size='lg' />
      </Placeholder>{' '}
    </Col>
    <Col xs={1}></Col>
    <Col xs={4}>
      <Placeholder animation='glow'>
        <Placeholder xs={12} size='lg' />
      </Placeholder>
    </Col>
    <Col xs={7}>
      <Placeholder animation='glow'>
        <Placeholder xs={12} size='lg' />
      </Placeholder>{' '}
    </Col>
    <Col xs={1}></Col>
    <Col xs={4}>
      <Placeholder animation='glow'>
        <Placeholder xs={12} size='lg' />
      </Placeholder>
    </Col>
    <Col xs={7}>
      <Placeholder animation='glow'>
        <Placeholder xs={12} size='lg' />
      </Placeholder>{' '}
    </Col>
    <Col xs={1}></Col>
    <Col xs={4}>
      <Placeholder animation='glow'>
        <Placeholder xs={12} size='lg' />
      </Placeholder>
    </Col>
    <Col xs={7}>
      <Placeholder animation='glow'>
        <Placeholder xs={12} size='lg' />
      </Placeholder>{' '}
    </Col>
    <Col xs={1}></Col>
    <Col xs={4}>
      <Placeholder animation='glow'>
        <Placeholder xs={12} size='lg' />
      </Placeholder>
    </Col>
    <Col xs={7}>
      <Placeholder animation='glow'>
        <Placeholder xs={12} size='lg' />
      </Placeholder>{' '}
    </Col>
    <Col xs={1}></Col>
    <Col xs={4}>
      <Placeholder animation='glow'>
        <Placeholder xs={12} size='lg' />
      </Placeholder>
    </Col>
    <Col xs={7}>
      <Placeholder animation='glow'>
        <Placeholder xs={12} size='lg' />
      </Placeholder>{' '}
    </Col>
    <Col xs={1}></Col>
    <Col xs={4}>
      <Placeholder animation='glow'>
        <Placeholder xs={12} size='lg' />
      </Placeholder>
    </Col>
  </Row>
);

export const todayDate = new Date().toISOString().split('T')[0];

const Body = () => {
  const [apiData, setApiData] = useState({});
  const [loader, setLoader] = useState(true);
  const [date, setDate] = useState(todayDate);

  useEffect(() => {
    fetchData({ setApiData, setLoader, date });
  }, [date]);

  const changeDate = e => {
    setDate(e.target.value);
    setApiData({});
    setLoader(true);
  };

  let ApodView;
  if (Object.keys(apiData).length !== 0) {
    if (apiData.sucess) {
      ApodView = (
        <Row data-testid='content'>
          <Col xs={6} className='align-items-center'>
            <Card>
              <Card.Body>
                {apiData.title && (
                  <Card.Title>
                    <h1>{apiData.title}</h1>
                  </Card.Title>
                )}
                {apiData.date && (
                  <Card.Text className='text-right font-weight-light'>
                    {apiData.date}
                  </Card.Text>
                )}
              </Card.Body>
              {apiData.url && (
                <Card.Img variant='bottom' src={apiData.url} alt='apo img' />
              )}
            </Card>
          </Col>
          <Col xs={6}>
            {apiData.explanation && (
              <Description>{apiData.explanation}</Description>
            )}
          </Col>
        </Row>
      );
    } else {
      ApodView = (
        <Row data-testid='error'>
          {apiData.msg && <h1>{apiData.msg}</h1>}
          {apiData.error && apiData.error.message && (
            <Alert variant='danger'>
              <h1>{apiData.error.message}</h1>
            </Alert>
          )}
        </Row>
      );
    }
  }
  return (
    <Container>
      <Row>
        <Col xs={4} />
        <Col xs={4}>
          <Form.Group className='mb-3' controlId='formGroupPassword'>
            <Form.Label>Choose the date</Form.Label>
            <Form.Control
              type='date'
              defaultValue={date}
              onChange={changeDate}
            />
          </Form.Group>
        </Col>
        <Col xs={4} />
      </Row>

      {loader ? <Loading /> : ApodView}
    </Container>
  );
};
export default Body;
