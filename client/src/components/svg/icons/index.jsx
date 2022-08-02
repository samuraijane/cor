import Avatar from './avatar';
import Facebook from './facebook';
import Github from './github';
import Google from './google';
import Instagram from './instagram';




export const AVATAR  = 'avatar';
export const FACEBOOK  = 'facebook';
export const GITHUB  = 'github';
export const GOOGLE  = 'google';
export const INSTAGRAM  = 'instagram';




const iconMap = {
    [AVATAR] : (<Avatar />), 
    [FACEBOOK] : (<Facebook />),
    [GITHUB] : (<Github />),
    [GOOGLE] : (<Google />),
    [INSTAGRAM] : (<Instagram />),  
};

const SVGImage = ({className, type}) => {
    return (
        <div stye="width: 100px; height: 100px;" className={className}>
          {iconMap[type]}
        </div>
      )
};

export default SVGImage;