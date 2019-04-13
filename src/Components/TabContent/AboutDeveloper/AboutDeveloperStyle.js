import { centralColor } from '../../../CentralCSS/Color/Color';
import { centralDimension } from '../../../CentralCSS/Dimension/Dimension';

export const styles = {
  AboutDeveloper: {
    width: centralDimension.tabContent.aboutDeveloper.outerMainContainer.width,
    fontSize: centralDimension.tabContent.aboutDeveloper.outerMainContainer.fontSize,
    backgroundColor: centralColor.tabContent.aboutDeveloper.backgroundColor,
    color: centralColor.tabContent.aboutDeveloper.textColor
  },
 avatar: {
  width: centralDimension.tabContent.aboutDeveloper.avatarContainer.profileWidth,
  height: centralDimension.tabContent.aboutDeveloper.avatarContainer.profileHeight
 },
 avatarContainer: {
  width: centralDimension.tabContent.aboutDeveloper.avatarContainer.width,
  marginTop: centralDimension.tabContent.aboutDeveloper.avatarContainer.marginTop
 },
 avatarText: {
  fontWeight: 'bold',
  textAlign: 'center'
 },
 techStackContainer: {
  marginTop: centralDimension.tabContent.aboutDeveloper.techStackContainer.marginTop,
  overflow: 'hidden'
 },
 techStackHeading: {
  fontWeight: 'bold',
  textAlign: 'center',
  fontSize: centralDimension.tabContent.aboutDeveloper.techStackContainer.fontSize
 },
 techStackItem: {
  flexGrow: '1',
  width: centralDimension.tabContent.aboutDeveloper.techStackContainer.itemWidth
 },
 techStackLogo: {
  height: centralDimension.tabContent.aboutDeveloper.techStackContainer.logoHeight
 },
 techStackItemContainer: {
  flexWrap: 'wrap',
  fontWeight: 'bold'
 },
 onlineConnectContainer: {
  marginTop: centralDimension.tabContent.aboutDeveloper.onlineConnectContainer.marginTop,
  marginBottom: centralDimension.tabContent.aboutDeveloper.onlineConnectContainer.marginBottom,
  overflow: 'hidden'
 },
 onlineConnectHeading: {
  fontWeight: 'bold',
  textAlign: 'center',
  fontSize: centralDimension.tabContent.aboutDeveloper.onlineConnectContainer.fontSize,
  marginBottom: centralDimension.tabContent.aboutDeveloper.onlineConnectContainer.headingMarginBottom
 },
 onlineConnectItem: {
  flexGrow: '1',
  width: centralDimension.tabContent.aboutDeveloper.onlineConnectContainer.itemWidth
 },
 onlineConnectLogo: {
  height: centralDimension.tabContent.aboutDeveloper.onlineConnectContainer.logoHeight,
  margin: centralDimension.tabContent.aboutDeveloper.onlineConnectContainer.logoMargin
 },
 onlineConnnectItemContainer: {
  flexWrap: 'wrap',
  fontWeight: 'bold'
 },
 sourceCodeContainer: {
  marginTop: centralDimension.tabContent.aboutDeveloper.sourceCodeContainer.marginTop,
  marginBottom: centralDimension.tabContent.aboutDeveloper.sourceCodeContainer.marginBottom,
  overflow: 'hidden'
 },
 sourceCodeHeading: {
  fontWeight: 'bold',
  textAlign: 'center',
  fontSize: centralDimension.tabContent.aboutDeveloper.sourceCodeContainer.fontSize,
  marginBottom: centralDimension.tabContent.aboutDeveloper.sourceCodeContainer.headingMarginBottom
 },
 sourceCodeItem: {
  flexGrow: '1',
  width: centralDimension.tabContent.aboutDeveloper.sourceCodeContainer.itemWidth
 },
 sourceCodeLogo: {
  height: centralDimension.tabContent.aboutDeveloper.sourceCodeContainer.logoHeight,
  margin: centralDimension.tabContent.aboutDeveloper.sourceCodeContainer.logoMargin
 },
 sourceCodeItemContainer: {
  flexWrap: 'wrap',
  fontWeight: 'bold'
 }
};