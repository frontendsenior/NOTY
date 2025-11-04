import { MessageExcuse, MessageTone } from '@/interfaces';

export const EXAMPLES = {
  en: {
    [MessageTone.SARCASTIC]: {
      [MessageExcuse.EXCUSE]: "Nah, I'm allergic to heavy lifting on weekends.",
      [MessageExcuse.NORMAL]: "That's a hard pass from me.",
    },
    [MessageTone.NEUTRAL]: {
      [MessageExcuse.EXCUSE]: 'No, I already have plans that day.',
      [MessageExcuse.NORMAL]: "No, I can't.",
    },
    [MessageTone.FRIENDLY]: {
      [MessageExcuse.EXCUSE]: "Sorry, I can't! I'm swamped this weekend.",
      [MessageExcuse.NORMAL]: 'Sorry, I have to say no this time.',
    },
  },
  ru: {
    [MessageTone.SARCASTIC]: {
      [MessageExcuse.EXCUSE]: 'Не, у меня аллергия на тяжести в выходные.',
      [MessageExcuse.NORMAL]: 'Это жесткий отказ.',
    },
    [MessageTone.NEUTRAL]: {
      [MessageExcuse.EXCUSE]: 'Нет, у меня уже есть планы.',
      [MessageExcuse.NORMAL]: 'Нет, не могу.',
    },
    [MessageTone.FRIENDLY]: {
      [MessageExcuse.EXCUSE]: 'К сожалению, не смогу! Я занят в выходные.',
      [MessageExcuse.NORMAL]: 'К сожалению, на этот раз не получится.',
    },
  },
};
