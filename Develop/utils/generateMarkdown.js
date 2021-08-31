// function to generate markdown for README



function renderLicenseBadge(License){
  if (license = "none")
  return (
    '## License

    Project licensed as {license} license. `
  )
}  
  
function generateMarkdown(data) { 
  return `# ${data.title}

  {renderLicenseBadge(data.license)]
  `;
  }

module.exports = generateMarkdown;
