type DeviceSize = {
  [key: string]: string;
  mobile: string;
  tablet: string;
  laptop: string;
};

type Theme = {
  device: DeviceSize;
};

const deviceSizes: DeviceSize = {
  mobile: '428px',
  tablet: '768px',
  laptop: '1024px',
};

const device: DeviceSize = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `screen and (max-width: ${deviceSizes.laptop})`,
  mobileHeight: `screen and (max-height: ${deviceSizes.mobile})`,
  tabletHeight: `screen and (max-height: ${deviceSizes.tablet})`,
};

const theme: Theme = {
  device,
};

export default theme;

/*
@media ${({theme}) => theme.device.laptop} {
    font-size: 2rem;
    letter-spacing: .5rem;
}
@media ${({theme}) => theme.device.tablet} {
    font-size: 1.5rem;
    letter-spacing: .25rem;
}
@media ${({theme}) => theme.device.mobile} {
    font-size: 1rem;
    letter-spacing: .125rem;
}
*/
