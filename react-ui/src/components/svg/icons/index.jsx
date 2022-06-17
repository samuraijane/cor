import Avatar from './avatar';


export const AVATAR  = 'avatar';

const iconMap = {
    [AVATAR] : (<Avatar />)
};

const SVGImage = (className, type) => {
    return (
        <div stye="width: 100px; height: 100px;" className={className}>
          {iconMap[type]}
        </div>
      )
};

export default SVGImage;