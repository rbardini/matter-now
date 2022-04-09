import fs from 'node:fs';
import grayMatter from 'gray-matter';
import { format as dateFnsFormat } from 'date-fns';

const hasMatter = (matter) => matter.isEmpty || Object.keys(matter.data).length > 0;
const hasAttr = (matter, attr) => attr in matter.data;

export default (files, { attr, format }) => files.forEach((file) => {
  const matter = grayMatter.read(file, {});

  if (!hasMatter(matter) || hasAttr(matter, attr)) {
    return;
  }

  const date = dateFnsFormat(new Date(), format);
  const newMatter = `${matter.matter}\n${attr}: ${date}`;
  const newData = `---${newMatter}\n---\n${matter.content}`;

  fs.writeFileSync(file, newData);
});
