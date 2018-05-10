export default (transcript, document, root, format = `T`, speakers = false, digits = 2) => {
  const unit = format.startsWith(`T`) ? 1 : 1000;
  const article = document.createElement(`article`);
  root.appendChild(article);

  transcript.paragraphs.forEach(pData => {
    const para = document.createElement(`p`);
    if (speakers && pData.speaker) {
      const word = document.createElement(format.startsWith(`T`) ? `span` : `a`);
      word.appendChild(document.createTextNode(pData.speaker));
      word.setAttribute(`class`, `speaker`);

      if (format === `M`) word.setAttribute(`data-m`, parseFloat((pData.start * unit).toFixed(digits)));

      para.appendChild(word);
      para.appendChild(document.createTextNode(` `));
    }

    // TODO do not loop all words for each para
    transcript.words.forEach((wData, i, words) => {
      if (!wData.start) return;
      if (speakers && wData.speaker) return;
      if (wData.start < pData.start || wData.start >= pData.end) return;

      const word = document.createElement(format.startsWith(`T`) ? `span` : `a`);
      word.appendChild(document.createTextNode(`${wData.text} `));

      const prevEnd = i > 0 ? words[i - 1].end || words[i - 1].start : 0;
      const delta = parseFloat(((unit * (wData.start - prevEnd))).toFixed(digits));
      const start = parseFloat((wData.start * unit).toFixed(digits));
      const end = parseFloat((wData.end ? wData.end * unit : wData.start).toFixed(digits));
      const duration = parseFloat((unit * (wData.end - wData.start)).toFixed(digits));

      if (format === `T`) {
        word.setAttribute(`data-t`, `${start},${end}`.replace(/^0/, ``).replace(/,0/, `,`));
      } else if (format === `T+`) {
        word.setAttribute(`data-t`, `${start}+${duration}`.replace(/^0/, ``).replace(/\+0/, `+`));
      // } else if (format === `T++`) {
      //   word.setAttribute(`data-t`, `+${delta}+${duration}`.replace(/\+0/g, `+`));
      } else if (format === `T~`) {
        word.setAttribute(`data-t`, `${delta}~${duration}`.replace(/^0/, ``).replace(/^-0/, `-`).replace(/~0/, `~`));
      } else if (format === `M`) {
        word.setAttribute(`data-m`, start);
        if (wData.end) word.setAttribute(`data-d`, duration);
      }

      para.appendChild(word);
    });

    article.appendChild(para);
  });

  return root;
};
