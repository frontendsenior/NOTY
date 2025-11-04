import axios from 'axios';

import { OPENAI_API_KEY } from '@env';
import { MessageExcuse, MessageTone } from '@/interfaces';

import { getPrompt } from './prompt';

const openAI = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${OPENAI_API_KEY}`,
  },
});

export const generateRejection = async (
  userInput: string,
  tone: MessageTone,
  excuse: MessageExcuse,
) => {
  const response = await openAI.post('/responses', {
    model: 'gpt-4o-mini',
    instructions: getPrompt(tone, excuse),
    input: userInput,
    temperature: 0.8,
    max_output_tokens: 100,
  });

  const result = response.data.output[0].content[0].text.trim();
  if (result === 'NOT_A_REQUEST') {
    throw new Error('NOT_A_REQUEST');
  }

  return result;
};
