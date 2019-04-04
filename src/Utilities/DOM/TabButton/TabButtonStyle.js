import { colorTheme } from '../../../ColorThemeCenter/ColorThemeCenter';

export const styles = {
  tabButton : {
  display: 'inline-block',
  overflow: 'hidden',
  textAlign: 'center',
  fontWeight: 'bold',
  padding: '0px',
  margin: '0.3vmin',
  border: (colorTheme.common.disableBorder)?'none':`0.32vmin solid ${colorTheme.common.borderColor}`,
  borderRadius: (colorTheme.common.disableBorder)?'0':'12px',
  '&:focus' : {
    outlineWidth: '0'
  }
},
normal: {
   color: colorTheme.common.buttonTextColor,
   backgroundColor: colorTheme.common.buttonBackgroundColor,
   '&:hover': {
      color: colorTheme.common.buttonHoverTextColor,
      backgroundColor: colorTheme.common.buttonHoverBackgroundColor,
   }
},
selected : {
  color: colorTheme.common.buttonSelectedTextColor,
  backgroundColor: colorTheme.common.buttonSelectedBackgroundColor,
  '&:hover': {
    color: colorTheme.common.buttonSelectedTextColor,
    backgroundColor: colorTheme.common.buttonSelectedBackgroundColor,
  }
}
};
