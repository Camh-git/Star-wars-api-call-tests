import { useEffect } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";
import * as sampleData from "./returnedData.json";

const server = setupServer(
  rest.get("https://swapi.dev/api/people/1", (req, res, ctx) => {
    return res(ctx.json(sampleData));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("Make sure luke skywalker is the first person returned", async () => {
  render(<CallApi />);
});

const CallApi: React.FC = () => {
  let response = "";
  useEffect(() => {
    const list = async () => {
      const result = await fetch("https://swapi.dev/api/people/1");
      result.json().then((json) => {
        response = json;
        console.log("data:");
        console.log(response);
      });
    };
    list();
  }, []);
  return <></>;
};
export default CallApi;
//See returnedData.json for a copy of what this returned
