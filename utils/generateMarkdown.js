function getBadgeURL(license) {
  const licenseBadges = {
    'Apache': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    'GNU General Public': 'https://img.shields.io/badge/License-GPL%20v3-blue.svg',
    'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'BSD 2-Clause': 'https://img.shields.io/badge/License-BSD%202--Clause-orange.svg',
    'BSD 3-Clause': 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg',
    'Boost Software': 'https://img.shields.io/badge/License-Boost%201.0-lightblue.svg',
    'Eclipse Public': 'https://img.shields.io/badge/License-EPL%201.0-red.svg',
    'Mozilla Public': 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg',
    'The Unilicense': 'https://img.shields.io/badge/license-Unlicense-blue.svg',
  };

  return licenseBadges[license] || '';
}

function getLicenseLinkURL(license) {
  const licenseLinks = {
    'Apache': 'https://opensource.org/licenses/Apache-2.0',
    'GNU General Public': 'https://www.gnu.org/licenses/gpl-3.0',
    'MIT': 'https://opensource.org/licenses/MIT',
    'BSD 2-Clause': 'https://opensource.org/licenses/BSD-2-Clause',
    'BSD 3-Clause': 'https://opensource.org/licenses/BSD-3-Clause',
    'Boost Software': 'https://opensource.org/licenses/BSL-1.0',
    'Eclipse Public': 'https://opensource.org/licenses/EPL-1.0',
    'Mozilla Public': 'https://opensource.org/licenses/MPL-2.0',
    'The Unilicense': 'https://unlicense.org/',
  };

  return licenseLinks[license] || '';
}

function getLicenseSection(license) {
  const licenseSections = {
    'Apache': 'Licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).',
    'GNU General Public': 'Licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0).',
    'MIT': 'Licensed under the [MIT License](https://opensource.org/licenses/MIT).',
    'BSD 2-Clause': 'Licensed under the [BSD 2-Clause License](https://opensource.org/licenses/BSD-2-Clause).',
    'BSD 3-Clause': 'Licensed under the [BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause).',
    'Boost Software': 'Licensed under the [Boost Software License 1.0](https://opensource.org/licenses/BSL-1.0).',
    'Eclipse Public': 'Licensed under the [Eclipse Public License 1.0](https://opensource.org/licenses/EPL-1.0).',
    'Mozilla Public': 'Licensed under the [Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0).',
    'The Unilicense': 'Licensed under the [Unlicense](https://unlicense.org/).',
  };

  return licenseSections[license] || '';
}

function generateBadgeURLs(choices) {
  const badgeURLs = {
      'HTML': 'https://img.shields.io/badge/HTML-5-green',
      'CSS': 'https://img.shields.io/badge/CSS-3-blue',
      'JavaScript': 'https://img.shields.io/badge/JavaScript-ES6-yellow',
      'Node.js': 'https://img.shields.io/badge/Node.js-14.x-green',
      'Express.js': 'https://img.shields.io/badge/Express.js-4.x-lightgrey',
      'MySQL': 'https://img.shields.io/badge/MySQL-8.x-blue',
      'NoSQL': 'https://img.shields.io/badge/NoSQL-MongoDB-green',
      'React': 'https://img.shields.io/badge/React-17.x-blue',
  };

  return choices.filter(choice => choice && badgeURLs[choice]).map(choice => {
    return `![${choice}](https://img.shields.io/badge/${encodeURIComponent(choice)}-blue)`;
  });
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badgeURL = getBadgeURL(license);
  return badgeURL ? `![License](${badgeURL})` : '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const linkURL = getLicenseLinkURL(license);
  return linkURL ? `[${license} License](${linkURL})` : '';
  }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const sectionContent = getLicenseSection(license);
  return sectionContent ? `## License\n\n${sectionContent}` : '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Initialize the Table of Contents string
  const badgeURLs = generateBadgeURLs(data.badges);
  let tableOfContents = '## Table of Contents\n\n';

  // Check if each section has data and add it to the Table of Contents
  if (data.description) {
      tableOfContents += '- [Description](#description)\n';
  }
  if (data.install) {
      tableOfContents += '- [Installation](#installation)\n';
  }
  if (data.usageInputs) {
      tableOfContents += '- [Usage](#usage)\n';
  }
  if (data.credits) {
      tableOfContents += '- [Credits](#credits)\n';
  }
  if (data.license) {
      tableOfContents += '- [License](#license)\n';
  }
  if (data.contribute) {
      tableOfContents += '- [Contributing](#contributing)\n';
  }
  if (data.tests) {
      tableOfContents += '- [Tests](#tests)\n';
  }
  if (data.github) {
      tableOfContents += '- [Questions](#questions)\n\n';
  }

  // Generate the markdown content with the dynamic Table of Contents
  let markdownContent = `# ${data.title}\n\n${tableOfContents}`;

  // Add other sections based on user input
  
  if (badgeURLs.length > 0) {
      const licenseBadge = renderLicenseBadge(data.license);
      markdownContent += `## Description\n\n${badgeURLs.join(' ')} ${licenseBadge}\n\n${data.description}\n\n`;
  }
  if (data.install) {
      markdownContent += `## Installation\n\n${data.install}\n\n`;
  }
  if (data.usageInputs) {
      markdownContent += `## Usage\n\n${data.usageInputs}\n\n`;
  }
  if (data.credits) {
      markdownContent += `## Credits\n\n${data.credits}\n\n`;
  }
  if (data.license) {
    //   const licenseBadge = renderLicenseBadge(data.license);
    //   const licenseLink = renderLicenseLink(data.license);
      const licenseSection = renderLicenseSection(data.license);
      markdownContent += `${licenseSection}\n\n`;
  }
  if (data.contribute) {
      markdownContent += `## Contributing\n\n${data.contribute}\n\n`;
  }
  if (data.tests) {
      markdownContent += `## Tests\n\n${data.tests}\n\n`;
  }
  if (data.github) {
      markdownContent += `## Questions\n\n[My GitHub Repo](${data.github})\n`;
  }
  if (data.email) {
    markdownContent += `\n[My Email Address](${data.email})\n\n`;
}

  return markdownContent;
}

module.exports = generateMarkdown;
