import { fallbackChips, getReply } from './tia';

const launcher = document.getElementById('tiaLauncher') as HTMLButtonElement | null;
const panel = document.getElementById('tiaPanel') as HTMLDivElement | null;
const closeBtn = document.getElementById('tiaClose') as HTMLButtonElement | null;
const log = document.getElementById('tiaLog') as HTMLDivElement | null;
const chips = document.getElementById('tiaChips') as HTMLDivElement | null;
const form = document.getElementById('tiaForm') as HTMLFormElement | null;
const input = document.getElementById('tiaInput') as HTMLInputElement | null;
const root = document.getElementById('tia') as HTMLDivElement | null;

if (launcher && panel && closeBtn && log && chips && form && input && root) {
  let started = false;
  let busy = false;

  const scrollDown = () => {
    log.scrollTop = log.scrollHeight;
  };

  const addMsg = (text: string, who: 'bot' | 'user') => {
    const el = document.createElement('div');
    el.className = `tia__msg tia__msg--${who}`;
    el.innerHTML = text;
    log.appendChild(el);
    scrollDown();
  };

  const setChips = (list: string[]) => {
    chips.innerHTML = '';
    list.forEach((label) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.textContent = label;
      b.addEventListener('click', () => {
        if (label === 'Start again') {
          log.innerHTML = '';
          started = false;
          openPanel();
          return;
        }
        ask(label);
      });
      chips.appendChild(b);
    });
  };

  function ask(text: string) {
    if (busy) return;
    busy = true;
    addMsg(text, 'user');
    setChips([]);
    input.value = '';

    const typing = document.createElement('div');
    typing.className = 'tia__msg tia__msg--bot tia__typing';
    typing.innerHTML = '<i></i><i></i><i></i>';
    log.appendChild(typing);
    scrollDown();

    const { text: reply, chips: nextChips } = getReply(text);

    window.setTimeout(
      () => {
        typing.remove();
        addMsg(reply, 'bot');
        setChips(nextChips);
        busy = false;
        input.focus({ preventScroll: true });
      },
      460 + Math.min(text.length * 10, 380),
    );
  }

  function openPanel() {
    panel.hidden = false;
    root.setAttribute('data-open', 'true');
    launcher.setAttribute('aria-expanded', 'true');
    if (!started) {
      started = true;
      addMsg(
        "Hi, I'm Tia — Teena's assistant. I can walk you through her skills, work history, prices or how to get in touch.",
        'bot',
      );
      setChips(['What does she build?', 'Experience', 'Is she available?', 'Contact']);
    }
    input.focus({ preventScroll: true });
  }

  const closePanel = () => {
    panel.hidden = true;
    root.setAttribute('data-open', 'false');
    launcher.setAttribute('aria-expanded', 'false');
    launcher.focus({ preventScroll: true });
  };

  launcher.addEventListener('click', () => {
    if (panel.hidden) openPanel();
    else closePanel();
  });

  // "Ask Tia" buttons elsewhere on the page
  document.querySelectorAll('[data-open-tia]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      if (panel.hidden) openPanel();
      input.focus({ preventScroll: true });
    });
  });

  closeBtn.addEventListener('click', closePanel);

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = input.value.trim();
    if (value) ask(value);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !panel.hidden) closePanel();
  });

  // Fallback in case the module somehow loads late: chips start populated.
  if (!chips.children.length) setChips(fallbackChips);
}
