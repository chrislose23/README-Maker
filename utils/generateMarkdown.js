function getBadgeURL(license) {
  const licenseBadges = {
      'Apache': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
      'GNU General Public': 'https://img.shields.io/badge/License-GPL%20v3-blue.svg',
      'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
      // Add URLs for other licenses
  };

  return licenseBadges[license] || '';
}

function getLicenseLinkURL(license) {
  const licenseLinks = {
      'Apache': 'https://opensource.org/licenses/Apache-2.0',
      'GNU General Public': 'https://www.gnu.org/licenses/gpl-3.0',
      'MIT': 'https://opensource.org/licenses/MIT',
      // Add URLs for other licenses
  };

  return licenseLinks[license] || '';
}

function getLicenseSection(license) {
  const licenseSections = {
      'Apache': 'Licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).',
      'GNU General Public': 'Licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0).',
      'MIT': 'Licensed under the [MIT License](https://opensource.org/licenses/MIT).',
      // Add section content for other licenses
  };

  return licenseSections[license] || '';
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
  let tableOfContents = '## Table of Contents\n\n';

  // Check if each section has data and add it to the Table of Contents
  if (data.description) {
      tableOfContents += '- [Description](#description)\n';
  }
  if (data.install) {
      tableOfContents += '- [Installation](#installation)\n';
  }
  if (data.usage) {
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
  if (data.questions) {
      tableOfContents += '- [Questions](#questions)\n\n';
  }

  // Generate the markdown content with the dynamic Table of Contents
  let markdownContent = `# ${data.title}\n\n${tableOfContents}`;

  // Add other sections based on user input
  if (data.description) {
      const licenseBadge = renderLicenseBadge(data.license);
      markdownContent += `## Description\n\n${licenseBadge}\n\n${data.description}\n\n`;
  }
  if (data.install) {
      markdownContent += `## Installation\n\n${data.install}\n\n`;
  }
  if (data.usage) {
      markdownContent += `## Usage\n\n${data.usage}\n\n`;
  }
  if (data.credits) {
      markdownContent += `## Credits\n\n${data.credits}\n\n`;
  }
  if (data.license) {
      const licenseBadge = renderLicenseBadge(data.license);
      const licenseLink = renderLicenseLink(data.license);
      const licenseSection = renderLicenseSection(data.license);
      markdownContent += `## License\n\n${licenseSection}\n\n`;
  }
  if (data.contribute) {
      markdownContent += `## Contributing\n\n${data.contribute}\n\n`;
  }
  if (data.tests) {
      markdownContent += `## Tests\n\n${data.tests}\n\n`;
  }
  if (data.questions) {
      markdownContent += `## Questions\n\n${data.questions}\n\n`;
  }

  return markdownContent;
}

module.exports = generateMarkdown;
