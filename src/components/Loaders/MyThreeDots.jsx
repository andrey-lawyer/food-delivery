import { Watch } from 'react-loader-spinner';

export const MyThreeDots = () => (
  <Watch
    height="80"
    width="80"
    radius="48"
    color="#4fa94d"
    ariaLabel="watch-loading"
    visible={true}
    wrapperStyle={{
      position: 'fixed',
      top: '50%',
      left: '50%',
    }}
  />
);
