import axios from "axios";

export const executeCode = async (
  source_code: string,
  language_id: number
) => {
  const response = await axios.post(
   "http://localhost:2358/submissions?base64_encoded=false&wait=true",
    {
      source_code,
      language_id,
    }
  );

  return response.data;
};