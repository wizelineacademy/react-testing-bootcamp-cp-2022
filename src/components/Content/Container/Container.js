import styled from "styled-components";

const Box = styled.section`
  display: flex;
  justify-content: center;
`;

const StyledInput = styled.input`
  padding: 2rem;
  font-size: 1.8rem;
  margin: 2rem;
`;

const LeftSide = styled.div`
  width: 20%;
  border: 1px solid black;
  border-radius: 4px;
  margin-bottom: 3rem;
  margin-right: 3rem;
  background-color: lightgray;
`;

const StyledImg = styled.img`
  width: 80%;
  margin-bottom: 1rem;
`;

const RightSide = styled.div`
  width: 40%;
  font-size: 1.5rem;
  text-align: left;
  padding-bottom: 3rem;
`;

const ErrorComponent = styled.span`
  color: red;
`;

const Container = ({ nasaData, error, loading, handleSubmit }) => {
  const CorrectRequest = () => {
    return (
      <Box>
        <LeftSide>
          {!error && (
            <>
              <h1>{nasaData.title}</h1>
              <StyledImg
                src={nasaData.url}
                alt="nasaImage"
                aria-label="fancy"
              />
            </>
          )}
        </LeftSide>
        <RightSide>
          <div>{nasaData.explanation}</div>
        </RightSide>
      </Box>
    );
  };

  return (
    <>
      <label htmlFor="sergio" />
      <StyledInput
        placeholder="yyyy/mm/dd"
        type="date"
        id="sergio"
        onChange={(e) => handleSubmit(e.target.value)}
        disabled={loading}
      />
      <section>
        {loading && <p>Loading...</p>}
        {!loading && nasaData && <CorrectRequest />}
        {!loading && error && <ErrorComponent>{error}</ErrorComponent>}
      </section>
    </>
  );
};

export default Container;
