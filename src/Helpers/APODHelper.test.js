const { LoadAPOD } = require("./APODHelper");

describe("APOD Helper tests", () => {
  it("APOD should get a 200 status response ", async () => {
    const date = new Date().toISOString().replace(/T.*/, "");

    const response = await LoadAPOD(date);

    expect(response.status).toEqual(200);
  });

  it("APOD should return image, explanation and title", async () => {
    const date = new Date().toISOString().replace(/T.*/, "");

    const response = await LoadAPOD(date);
    const { url, title, explanation } = (await response).data;

    expect(response.status).toEqual(200);
    expect(url).toMatch(/apod.nasa.gov/i);
    expect(title).not.toBeNull();
    expect(explanation).not.toBeNull();
  });
});
