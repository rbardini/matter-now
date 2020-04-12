const fs = require('fs');
const grayMatter = require('gray-matter');
const moment = require('moment');

const hasMatter = (matter) => matter.isEmpty || Object.keys(matter.data).length > 0;
const hasDate = (matter) => 'date' in matter.data;

module.exports = (files, { format }) => files.forEach((file) => {
  const matter = grayMatter.read(file, {});

  if (!hasMatter(matter) || hasDate(matter)) {
    return;
  }

  const date = moment().format(format);
  const newMatter = `${matter.matter}\ndate: ${date}`;
  const newData = `---${newMatter}\n---\n${matter.content}`;

  fs.writeFileSync(file, newData);
});
