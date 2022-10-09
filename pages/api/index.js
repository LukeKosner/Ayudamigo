import axios from "axios";

export default async function handler(req, res) {
  const { Configuration, OpenAIApi } = require("openai");
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: `
    Translate this letter from Spanish to English:
    
    Letter: ${req.body.letter}
    Response: `,
    max_tokens: 300,
    temperature: 0,
  });

  await axios
    .post(
      "https://api.openai.com/v1/moderations",
      { input: completion.data.choices[0].text },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.OPENAI_API_KEY,
        },
      }
    )
    .then((response) => {
      console.log(response.data);
      const flagged = response.data.results[0].flagged;
      if (flagged) {
        res.status(451).send("La traduccion ha sido bloqueada.");
      }
    });

  res.status(200).send(completion.data.choices[0].text);
}
