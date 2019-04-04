import { colorTheme } from '../../../ColorThemeCenter/ColorThemeCenter';

export const styles ={
	'sidebarNavigationList': {
	display: 'flex',
	flexBasis: '93%',
	flexDirection: 'column',
	overflow: 'hidden',
	justifyContent: 'space-between',
	backgroundColor: colorTheme.common.sidebarBackground
},
'upperNavigationElements': {
	display: 'flex',
	flexDirection: 'column',
	flexBasis: '90%'
},
'lowerNavigationElements': {
	display: 'flex',
	flexDirection: 'column',
	flexBasis: '10%',
	backgroundColor: colorTheme.common.sidebarBackground
}
};