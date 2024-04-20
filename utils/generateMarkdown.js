// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  
  ${data.description}

  ## Table of Contents

  ${data.contents}

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}

  ## License

  ${data.license}

  ## Badges

  ${data.badges}

  ## Features

  ${data.features}

  ## Contributing

  ${data.contribute}

  ## Tests

  ${data.tests}

  ## Questions

  ${data.questions}



`;
}

module.exports = generateMarkdown;
