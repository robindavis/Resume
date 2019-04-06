// Theme Bundles
const basicTheme = {
  textColor: 'black',
  textBackgroundColor: 'orange',
  linkColor: 'black',
  linkBackgroundColor: 'orange',
  buttonTextColor: 'black',
  buttonBackgroundColor: 'orange',
  buttonHoverTextColor: 'black',
  buttonHoverBackgroundColor: 'orange',
  buttonSelectedTextColor: 'orange',
  buttonSelectedBackgroundColor: 'black',
  imageBackgroundColor: 'orange',
  disableBorder: false,
  borderColor: 'black',
  borderHoverColor: 'red',
  iconBorderColor: 'black',
  sidebarBackground: '#95B9C7'
};

// Selecting particular Theme Bundle 
const selectedTheme = basicTheme;

// Export selected Theme Bundle
export const colorTheme = {
  mainApp: {
    textColor: 'black',
    backgroundColor: 'white',
  },
  common: {
    textColor: selectedTheme.textColor,
    textBackgroundColor: selectedTheme.textBackgroundColor,
    linkColor: selectedTheme.linkColor,
    linkBackgroundColor: selectedTheme.linkBackgroundColor,
    buttonTextColor: selectedTheme.buttonTextColor,
    buttonBackgroundColor: selectedTheme.buttonBackgroundColor,
    buttonHoverTextColor: selectedTheme.buttonHoverTextColor,
    buttonHoverBackgroundColor: selectedTheme.buttonHoverBackgroundColor,
    buttonSelectedTextColor: selectedTheme.buttonSelectedTextColor,
    buttonSelectedBackgroundColor: selectedTheme.buttonSelectedBackgroundColor,
    imageBackgroundColor: selectedTheme.imageBackgroundColor,
    disableBorder: selectedTheme.disableBorder,
    borderColor: selectedTheme.borderColor,
    borderHoverColor: selectedTheme.borderHoverColor,
    iconBorderColor: selectedTheme.iconBorderColor,
    sidebarBackground: selectedTheme.sidebarBackground
  },
  header: {
    textColor: selectedTheme.textColor,
    textBackgroundColor: selectedTheme.textBackgroundColor,
    linkColor: selectedTheme.linkColor,
    linkBackgroundColor: selectedTheme.linkBackgroundColor,
    buttonTextColor: selectedTheme.buttonTextColor,
    buttonBackgroundColor: selectedTheme.buttonBackgroundColor,
    buttonHoverTextColor: selectedTheme.buttonHoverTextColor,
    buttonHoverBackgroundColor: selectedTheme.buttonHoverBackgroundColor,
    buttonSelectedTextColor: selectedTheme.buttonSelectedTextColor,
    buttonSelectedBackgroundColor: selectedTheme.buttonSelectedBackgroundColor,
    imageBackgroundColor: selectedTheme.imageBackgroundColor,
    disableBorder: selectedTheme.disableBorder,
    borderColor: selectedTheme.borderColor,
    borderHoverColor: selectedTheme.borderHoverColor,
    iconBorderColor: selectedTheme.iconBorderColor,
    sidebarBackground: selectedTheme.sidebarBackground
  },
  tabContent: {
    textColor: selectedTheme.textColor,
    textBackgroundColor: selectedTheme.textBackgroundColor,
    linkColor: selectedTheme.linkColor,
    linkBackgroundColor: selectedTheme.linkBackgroundColor,
    buttonTextColor: selectedTheme.buttonTextColor,
    buttonBackgroundColor: selectedTheme.buttonBackgroundColor,
    buttonHoverTextColor: selectedTheme.buttonHoverTextColor,
    buttonHoverBackgroundColor: selectedTheme.buttonHoverBackgroundColor,
    buttonSelectedTextColor: selectedTheme.buttonSelectedTextColor,
    buttonSelectedBackgroundColor: selectedTheme.buttonSelectedBackgroundColor,
    imageBackgroundColor: selectedTheme.imageBackgroundColor,
    disableBorder: selectedTheme.disableBorder,
    borderColor: selectedTheme.borderColor,
    borderHoverColor: selectedTheme.borderHoverColor,
    iconBorderColor: selectedTheme.iconBorderColor,
    sidebarBackground: selectedTheme.sidebarBackground
  },
  footer: {
    textColor: selectedTheme.textColor,
    textBackgroundColor: selectedTheme.textBackgroundColor,
    linkColor: selectedTheme.linkColor,
    linkBackgroundColor: selectedTheme.linkBackgroundColor,
    buttonTextColor: selectedTheme.buttonTextColor,
    buttonBackgroundColor: selectedTheme.buttonBackgroundColor,
    buttonHoverTextColor: selectedTheme.buttonHoverTextColor,
    buttonHoverBackgroundColor: selectedTheme.buttonHoverBackgroundColor,
    buttonSelectedTextColor: selectedTheme.buttonSelectedTextColor,
    buttonSelectedBackgroundColor: selectedTheme.buttonSelectedBackgroundColor,
    imageBackgroundColor: selectedTheme.imageBackgroundColor,
    disableBorder: selectedTheme.disableBorder,
    borderColor: selectedTheme.borderColor,
    borderHoverColor: selectedTheme.borderHoverColor,
    iconBorderColor: selectedTheme.iconBorderColor,
    sidebarBackground: selectedTheme.sidebarBackground
  },
  sidebar: {
    textColor: 'black',
    backgroundColor: 'orange'
  }
};