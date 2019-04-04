import { colorTheme } from '../../../ColorThemeCenter/ColorThemeCenter';

export const styles = {
  'siteIcon': {
	display: 'flex',
	overflow: 'hidden',
	border: (colorTheme.header.disableBorder)?'none':`0.32vmin solid ${colorTheme.header.borderColor}`,
	borderRadius: (colorTheme.header.disableBorder)?'0':'12px',
	fontWeight: 'bold',
	justifyContent: 'center',
	alignItems: 'center',
	fontSize: '2.3vmin',
	margin: '0.3vmin',
  backgroundColor: colorTheme.header.textBackgroundColor,
  '& div': {
    backgroundColor: colorTheme.header.textBackgroundColor
  },
  '&:hover': {
    border: (colorTheme.header.disableBorder)?'none':`0.32vmin solid ${colorTheme.header.borderHoverColor}`
  }
},
'@keyframes rotate': {
  'from': {
    transform: 'rotateX(0deg) rotateY(0deg)'
  },
  'to': {
    transform: 'rotateX(360deg) rotateY(360deg)'
  }
},
'wrap': {
  perspective: '100vmin'
},
'cube': {
  margin: 'auto',
  position: 'relative',
  height: '6vmin',
  width: '6vmin',
  transformStyle: 'preserve-3d',
  animation: 'rotate 10s infinite linear',
  '& div': {
    position: 'absolute',
    height: '100%',
    width: '100%',
    opacity: '0.4',
    fontSize: '5vmin',
    display: 'flex',
    justifyContent: 'center'
  }
},
'front': {
  transform: 'translateZ(3.5vmin)',
  color: colorTheme.header.textColor,
  border: (colorTheme.header.disableBorder)?'none':`0.32vmin solid ${colorTheme.header.iconBorderColor}`
},
'back': {
  transform: 'translateZ(-3vmin) rotateY(180deg)',
  color: colorTheme.header.textColor,
  border: (colorTheme.header.disableBorder)?'none':`0.32vmin solid ${colorTheme.header.iconBorderColor}`
},
'right': {
  transform: 'rotateY(-270deg) translateX(3vmin)',
  transformOrigin: 'top right',
  color: colorTheme.header.textColor,
  border: (colorTheme.header.disableBorder)?'none':`0.32vmin solid ${colorTheme.header.iconBorderColor}`
},
'left': {
  transform: 'rotateY(270deg) translateX(-3vmin)',
  transformOrigin: 'center left',
  color: colorTheme.header.textColor,
  border: (colorTheme.header.disableBorder)?'none':`0.32vmin solid ${colorTheme.header.iconBorderColor}`
},
'top': {
  transform: 'rotateX(-270deg) translateY(-3vmin)',
  transformOrigin: 'top center',
  color: colorTheme.header.textColor,
  border: (colorTheme.header.disableBorder)?'none':`0.32vmin solid ${colorTheme.header.iconBorderColor}`
},
'bottom': {
  transform: 'rotateX(270deg) translateY(3vmin)',
  transformOrigin: 'bottom center',
  color: colorTheme.header.textColor,
  border: (colorTheme.header.disableBorder)?'none':`0.32vmin solid ${colorTheme.header.iconBorderColor}`
}
};