# matter-now

[![npm package version](https://img.shields.io/npm/v/matter-now)](https://www.npmjs.com/package/matter-now)
[![Build status](https://img.shields.io/github/workflow/status/rbardini/matter-now/Main)](https://github.com/rbardini/matter-now/actions)
[![Dependencies status](https://img.shields.io/david/rbardini/matter-now)](https://david-dm.org/rbardini/matter-now)
[![devDependencies status](https://img.shields.io/david/dev/rbardini/matter-now)](https://david-dm.org/rbardini/matter-now?type=dev)

Append the current date to the YAML front matter of Markdown files. Useful for adding the published date to static content files like blog posts.

![Demo](demo.gif)

## Installation

```console
npm install -g matter-now
```

## Usage

```console
$ matter-now
Usage: matter-now <file...>

Options:
  -f, --format <format>  Moment.js date format
  -v, --version          output the version number
  -h, --help             display help for command
```

matter-now can also be used with [lint-staged](https://github.com/okonet/lint-staged) to append dates to git staged Markdown files:

```json
{
  "*.md": "matter-now"
}
```

See it in action [here](https://github.com/rbardini/rbardini.com).
