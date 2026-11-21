/**
 * Copy shapes shared by the video-call route and its booking form.
 * They live outside the route folder so components can import them without a
 * path that carries parentheses.
 */

export type AgendaPhoto = {
  src: string;
  alt: string;
  caption: string;
};

export type AgendaFormCopy = {
  fields: {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    phone: string;
    phoneOptional: string;
    topic: string;
    topicOptions: string[];
    language: string;
    languageOptions: string[];
    message: string;
    messagePlaceholder: string;
  };
  errors: {
    name: string;
    email: string;
    topic: string;
    slot: string;
  };
  submit: {
    button: string;
    sending: string;
    note: string;
  };
  success: {
    title: string;
    text: string;
    summaryLabel: string;
    again: string;
  };
};

export type SlotsCopy = {
  dayLabel: string;
  timeLabel: string;
  timezoneNote: string;
  empty: string;
  chosen: string;
  continueCta: string;
  previousMonth: string;
  nextMonth: string;
  available: string;
  reserved: string;
};
