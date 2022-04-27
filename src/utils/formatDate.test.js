import formatDate from ".";

describe("Format date", () => {
	it("should return the date formatted in DD/MM/YYYY", () => {
		const formattedDate = formatDate("2022-04-26");

		expect(formattedDate).toBe("26/04/2022");
	});
});
