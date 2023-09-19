import { useEffect } from "react";
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
