// function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = "No license selected";
  switch (data.license) { 
    case "MIT":
      licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "CC0":
      licenseBadge = "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
    case "ODC":
      licenseBadge = "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)";
      break;
  }  
  const mdTemplate = `
  ${licenseBadge}
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#contribute)
- [Tests](#tests)
- [Contact](#contact)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project uses ${data.license} license. Please refer to LICENSE file for more information.

## How to Contribute
${data.contribute}

## Tests
${data.tests}

## Contact
- **Github address:** github.com/${data.username}
- **Email:** ${data.email}
`;
  return mdTemplate
}

module.exports = generateMarkdown;
