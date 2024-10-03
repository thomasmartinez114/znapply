import openai from '../config/openaiConfig.js';

export const generateSOAP = async input => {
  try {
    // console.log('Input received:', input); // Log input from frontend

    const description = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `As a massage therapist, please generate SOAP notes according to this information provided by the patient. Here is the patient information: ${input}`,
        },
      ],
      max_tokens: 100,
    });

    // console.log('OpenAI response:', description.choices[0].message.content); // Log the response from OpenAI

    return {
      description: description.choices[0].message.content,
    };
  } catch (error) {
    console.error(
      'Error generating SOAP:',
      error.response?.data || error.message
    ); // Log error if it occurs
    throw new Error('Failed to generate SOAP notes');
  }
};
