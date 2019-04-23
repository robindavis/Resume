import { centralDimension } from '../../../CentralCSS/Dimension/Dimension';

export const styles = {
  'createProfile': {
  width: '100%',
  fontSize: '14px',
  backgroundColor: '#fff176',
  color: 'black',
},
profilePhotoContainer: {
  width: centralDimension.tabContent.createProfile.profilePhotoContainer.width,
  marginTop: centralDimension.tabContent.createProfile.profilePhotoContainer.marginTop
},
profilePhoto: {
  width: centralDimension.tabContent.createProfile.profilePhotoContainer.profileWidth,
  height: centralDimension.tabContent.createProfile.profilePhotoContainer.profileHeight
},
formContainerContainer: {
  width: centralDimension.tabContent.createProfile.formContainerContainer.width,
  marginTop: centralDimension.tabContent.createProfile.formContainerContainer.marginTop
},
formElement: {
  margin: '10px'
},
nameContainer: {
  marginTop: '20px'
},
genderContainer: {
  marginTop: '20px'
},
radioGroup: {
  flexDirection: 'row'
},
ageContainer: {
  marginTop: '20px'
},
profilePhotoUploadContainer: {
  marginTop: '20px'
},
fileUploadButton: {
  display: 'none'
},
occupationContainer: {
  marginTop: '20px'
},
contactContainer: {
  marginTop: '20px'
},
buttonContainer: {
  marginTop: '20px'
},
formMessageContainer: {
  width: '90%',
  maxWidth: '350px',
  marginTop: '20px',
  border: '1px solid green',
  color: 'green',
  fontSize: '25px',
  textAlign: 'center',
  padding: '10px'
},
formMessageIcon: {
  fontSize: '60px'
},
formMessage: {
  fontSize: '20px'
},
formMessageButton: {
  marginTop: '20px'
},
imageSizeDialogHeading: {
  backgroundColor: 'orange',
  textAlign: 'center',
  border: '1px solid red',
},
imageSizeDialogIcon: {
  fontSize: '60px'
},
imageSizeDialogWrapper: {
  fontWeight: 'bold',
  color: 'red',
  fontSize: '20px'
},
imageSizeDialogNote: {
  fontSize: '18px',
  color: 'green'
}
};