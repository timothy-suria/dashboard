// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//     apikey: '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',
// });

// const openai = new OpenAIApi(configuration);

// const completion = openai.createCompletion({
//     model:'text-davinci-003',
//     prompt: process.argv.slice(2).toString(),
//     max_tokens: 1000,
//     // temperature: 0.5,
// });

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

const completion = openai.createCompletion({
  model: "text-davinci-003",
//   prompt: "<|endoftext|>SOMERSET, NJ - An elderly man was struck and killed by a car on Wednesday night, according to a report from MyCentralJersey.\n\nThe report states that the man, who was in his late 70s, was crossing Easton Avenue around 6:30 p.m. when he was struck by a car. He was taken to Robert Wood Johnson University Hospital in New Brunswick, where he was pronounced dead.\n\nThe driver of the car that struck the man remained at the scene and is cooperating with authorities.\n\nThe incident is still under investigation.",
    prompt: process.argv.slice(2).toString(),

  temperature: 0.7,
  max_tokens: 2560,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});

console.info('lagi nyari cebong...')
completion.then((r) => {
    console.info(r.data.choices[0].text)
})

// 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