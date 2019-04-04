import { colorTheme } from '../../../ColorThemeCenter/ColorThemeCenter';

export const styles = {
  'rootSideNavigationBar': {
  display: 'flex',
  position: 'fixed',
  top: '0',
  left: '0',
  zIndex: '1',
  height: '99%',
  color: colorTheme.common.textColor,
  border: (colorTheme.common.disableBorder)?'none':`0.32vmin solid ${colorTheme.common.borderColor}`,
  borderRadius: (colorTheme.common.disableBorder)?'0':'12px',
  flexDirection: 'column',
  overflow: 'hidden',
  width: '65vmin',
  transition: '0.5s'
}
};