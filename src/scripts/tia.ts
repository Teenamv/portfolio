// Tia — the reply engine. Pure functions, no DOM, so it can be tested on its own.

export type Intent = {
  keys: string[];
  reply: () => string;
  chips?: string[];
};

const link = (href: string, text: string) => `<a href="${href}">${text}</a>`;

const contact = () =>
  `The fastest route: ${link('mailto:teen.mvarghese@gmail.com', 'email')} or ${link(
    'https://wa.me/971502669804',
    'WhatsApp',
  )} on +971 50 266 9804. She answers within a working day.`;

export const intents: Intent[] = [
  {
    keys: ['hi', 'hello', 'hey', 'salam', 'hola', 'good morning', 'good evening', 'namaste'],
    reply: () =>
      "Hello! I'm Tia — I keep tabs on this portfolio. Ask me about Teena's stack, her work history, availability or how to reach her.",
    chips: ['What does she build?', 'Experience', 'Is she available?', 'Contact'],
  },
  {
    keys: ['who is teena', 'about teena', 'about her', 'yourself', 'introduce', 'bio', 'summary', 'teena'],
    reply: () =>
      "Teena M Varghese is a web developer in Dubai with an MCA and roughly a decade around websites. She builds WordPress, WooCommerce and Shopify sites, and writes React, Next.js and Nuxt.js front-ends. Right now she's at WebNFX in Kakkanad.",
    chips: ['Skills', 'Experience', 'Education', 'Contact'],
  },
  {
    keys: ['what does she build', 'what does she do', 'what can she build', 'services'],
    reply: () =>
      'Six things, mostly: WordPress builds, e-commerce (WooCommerce and Shopify), React / Next.js front-ends, speed and Core Web Vitals, technical SEO, and looking after a site after launch.',
    chips: ['WordPress work', 'E-commerce', 'Prices'],
  },
  {
    keys: ['skill', 'stack', 'tech', 'tools', 'javascript', 'react', 'nuxt', 'htmx'],
    reply: () =>
      'Her toolkit: WordPress, WooCommerce, Shopify, Elementor Pro, React, Next.js, Nuxt.js, htmx, JavaScript (ES6+), HTML5 and CSS3. Plus technical SEO, Core Web Vitals work and AI tools (ChatGPT, Claude, Gemini).',
    chips: ['WordPress work', 'E-commerce', 'Speed & SEO', 'Availability'],
  },
  {
    keys: ['wordpress', 'elementor', 'theme', 'plugin', 'cms'],
    reply: () =>
      'WordPress is her home turf: custom themes, plugin customisation and Elementor Pro layouts. At WebNFX she builds and customises themes and plugins, focusing on mobile responsiveness and cross-browser behaviour.',
    chips: ['E-commerce', 'Speed & SEO', 'See experience'],
  },
  {
    keys: ['ecommerce', 'e-commerce', 'woocommerce', 'shopify', 'shop', 'store', 'product'],
    reply: () =>
      'She has run stores end to end — WooCommerce and Shopify — uploading catalogues (images, descriptions, prices, inventory), keeping product data accurate, and integrating apps for analytics, email and reviews. At Ziphoenix that was the day job.',
    chips: ['Experience', 'Contact', 'Prices'],
  },
  {
    keys: ['experience', 'jobs', 'history', 'company', 'employ', 'career', 'webnfx', 'ziphoenix', 'alanzo'],
    reply: () =>
      'WebNFX (Oct 2025 – now), Web Developer in Kakkanad. Before that Ziphoenix (2023–24) on e-commerce, St. Thomas LPG School (2017–21) teaching computer science, and Alanzo (2015–17) building client WordPress sites and Shopify storefronts.',
    chips: ['What does she build?', 'Education', 'Contact'],
  },
  {
    keys: ['educat', 'study', 'degree', 'mca', 'college', 'university', 'certif', 'course'],
    reply: () =>
      'MCA from Kerala University (2015) and a B.Sc. in Computer Science (2012). Recently certified in Prompt Engineering through the One Million Prompters Initiative (Dubai Future Foundation) and in Strategic Planning in the AI Age from HP LIFE.',
    chips: ['Skills', 'Experience'],
  },
  {
    keys: [' ai ', 'chatgpt', 'claude', 'gemini', 'prompt', 'automation'],
    reply: () =>
      'She works with ChatGPT, Claude and Gemini daily, and holds a prompt engineering certification from Dubai Future Foundation. Practical use — drafting, refactoring, content and QA — not hype.',
    chips: ['Skills', 'Contact'],
  },
  {
    keys: ['seo', 'speed', 'performance', 'core web vitals', 'optim', 'google'],
    reply: () =>
      'Speed and search are part of the build: compressed images, caching, asset and database clean-up, clean heading structure and analytics set up properly. She checks Core Web Vitals before launch, not after a complaint.',
    chips: ['What does she build?', 'Contact'],
  },
  {
    keys: ['avail', 'hire', 'freelance', 'project', 'timeline', 'deadline', 'start'],
    reply: () =>
      "She's open to freelance work alongside her full-time role — WordPress builds, store set-ups, redesigns and front-end jobs — and keeps the number of projects small. Send the idea, a deadline and a budget range, and you'll get an honest yes or no with a timeline.",
    chips: ['Contact', 'Prices', 'What does she build?'],
  },
  {
    keys: ['price', 'cost', 'budget', 'charge', 'quote', 'rate', 'much'],
    reply: () =>
      "No fixed rate card — every project is scoped on its own. Share the pages, features and deadline and she'll send a clear quote with nothing hidden in it.",
    chips: ['Contact', 'Availability'],
  },
  {
    keys: ['contact', 'email', 'phone', 'reach', 'whatsapp', 'call', 'message', 'hire her'],
    reply: contact,
    chips: ['Availability', 'Location'],
  },
  {
    keys: ['location', 'where', 'dubai', 'uae', 'remote', 'onsite', 'based', 'relocat'],
    reply: () =>
      "She's based in Al Baraha, Deira, Dubai, and works remotely with clients across time zones — calls plus written updates so nothing gets lost. Open to on-site work around the UAE too.",
    chips: ['Availability', 'Contact'],
  },
  {
    keys: ['language', 'english', 'hindi', 'malayalam', 'speak'],
    reply: () =>
      "English (fluent), Hindi (proficient) and Malayalam (native). The site itself is in English only — that's deliberate.",
    chips: ['About Teena', 'Skills'],
  },
  {
    keys: ['cv', 'resume', 'download', 'pdf'],
    reply: () =>
      `The full CV is available on request — ${link(
        'mailto:teen.mvarghese@gmail.com?subject=CV%20request',
        'email her',
      )} and she'll send it over. Everything on this page is the short version.`,
    chips: ['Experience', 'Contact'],
  },
  {
    keys: ['redesign', 'fix', 'old site', 'improve', 'maintain', 'maintenance', 'bug'],
    reply: () =>
      "Yes — most of her work is on sites that already exist: auditing structure, speed, mobile behaviour and plugin health, then repairing or rebuilding only what's holding the site back.",
    chips: ['Prices', 'Contact'],
  },
  {
    keys: ['who are you', 'are you ai', 'are you human', 'bot', 'tia'],
    reply: () =>
      "I'm Tia — a small scripted assistant, not an AI model. Every answer I give was written into this page, so I only know Teena's work. For anything else, email her.",
    chips: ['About Teena', 'Contact'],
  },
  {
    keys: ['thank', 'cheers', 'nice', 'cool', 'great'],
    reply: () =>
      'Anytime. If it turns into a project, the quickest way in is teen.mvarghese@gmail.com.',
    chips: ['Contact', 'Availability'],
  },
  {
    keys: ['bye', 'goodbye', 'see you', 'later'],
    reply: () => "See you. I'll be right here in the corner if you think of anything else.",
    chips: ['Start again'],
  },
];

export const fallbackReply =
  "That one's outside what I know — I only cover Teena's work. Try skills, experience, availability or contact, or email teen.mvarghese@gmail.com.";

export const fallbackChips = ['Skills', 'Experience', 'Availability', 'Contact'];

const normalise = (question: string) =>
  ` ${question.toLowerCase().replace(/[^a-z0-9\s-]/g, ' ').replace(/\s+/g, ' ')} `;

/**
 * Keywords match at a word start (so "avail" finds "available", but "hi"
 * does not fire inside "spaceship"). The longest matching keyword wins.
 */
export function findIntent(question: string): Intent | null {
  const q = normalise(question);
  let best: { intent: Intent; score: number } | null = null;

  for (const intent of intents) {
    for (const key of intent.keys) {
      const needle = key.trim();
      if (!needle) continue;
      const escaped = needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const pattern = new RegExp(`(^|[^a-z0-9])${escaped}`, 'i');
      if (!pattern.test(q)) continue;
      if (!best || needle.length > best.score) best = { intent, score: needle.length };
    }
  }

  return best ? best.intent : null;
}

export function getReply(question: string): { text: string; chips: string[] } {
  const intent = findIntent(question);
  return intent
    ? { text: intent.reply(), chips: intent.chips ?? fallbackChips }
    : { text: fallbackReply, chips: fallbackChips };
}
