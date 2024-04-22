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
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);


  return `# ${data.title}

  ## Description
    
  ${data.description}
    
  ${licenseBadge} ${licenseLink}

  ## Table of Contents

  ${data.contents}

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}

  ${licenseSection}

  ## Contributing

  ${data.contribute}

  ## Tests

  ${data.tests}

  ## Questions

  ${data.questions}

`;
}

module.exports = generateMarkdown;
