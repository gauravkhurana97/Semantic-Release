import { MockedProvider } from "@apollo/client/testing";
import { GET_DOG_QUERY, Dog } from "./Dog";
import { render, fireEvent, screen } from "@testing-library/react";

const dogMock = {
  request: {
    query: GET_DOG_QUERY,
    variables: { name: "Buck" },
  },
  result: {
    data: { dog: { id: 1, name: "Buck", breed: "poodle" } },
  },
};

it("renders without error", async () => {
  render(
    <MockedProvider mocks={[dogMock]} addTypename={false}>
      <Dog name="Buck" />
    </MockedProvider>
  );

  await screen.findByText("Buck is a poodle");
  screen.debug();
});
