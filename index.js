const fs = require('fs');
const grayMatter = require('gray-matter');
const moment = require('moment');

const hasMatter = (matter) => matter.isEmpty || Object.keys(matter.data).length > 0;
const hasAttr = (matter, attr) => attr in matter.data;

module.exports = (files, { attr, format }) => files.forEach((file) => {
  const matter = grayMatter.read(file, {});

  if (!hasMatter(matter) || hasAttr(matter, attr)) {
    return;
  }

  const date = moment().format(format);
  const newMatter = `${matter.matter}\n${attr}: ${date}`;
  const newData = `---${newMatter}\n---\n${matter.content}`;

  fs.writeFileSync(file, newData);
});
