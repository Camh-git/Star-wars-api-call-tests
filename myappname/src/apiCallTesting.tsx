import { useEffect } from "react";
import { useState } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
//import "@testing-library/jest-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";
import * as sampleData from "./returnedData.json";

/*
const server = setupServer(
  rest.get("https://swapi.dev/api/people/1", (req, res, ctx) => {
    return res(ctx.json(sampleData));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
*/

/*
test("Make sure luke skywalker is the first person returned", async () => {
  render(<CallApi />);
  //simple render test
  const header = screen.getByText("Char data:");
  expect(header).toBeInTheDocument();
  //check some data rendered(in this case luke's birth year)
  const dataSample = screen.getByText("19BBY");
  expect(dataSample).toBeInTheDocument();
});
*/

const CallApi: React.FC = () => {
  let returnedjson = sampleData;
  let [charData, setCharData] = useState([]);
  let response = "";
  useEffect(() => {
    const list = async () => {
      const result = await fetch("https://swapi.dev/api/people/1");
      result.json().then((json) => {
        response = json;
        setCharData(json);
        console.log("data:");
        console.log(response);
      });
    };
    list();
  }, []);
  return (
    <>
      <h2>Char data:</h2>
      {charData.length === 0 && "Loading..."}
      <p>
        {
          charData.length !== 0 &&
            //Apparently array.map isn't a function, this is driving me up the wall
            /*charData.map((item)=><p>{item}</p>)*/

            returnedjson.birth_year //using the returned sample since the code that displays this from state disapeard alongside the gitignore a few commits ago and i didnt notice untill it was too late
        }
      </p>
    </>
  );
};
export default CallApi;
//See returnedData.json for a copy of what this returned
// apparently the git breakage swallowed the gitignore and the update where displaying the data worked
// lots this is commented out because weird node issues keep saying that things like setupserver, expect or map dont exist
