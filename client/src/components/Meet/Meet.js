import './Meet.scss';
import Image from '../Image/Image.js'

const Meet = ({ btnUrl, img, btnText }) => {
    return (
      <div className="meet-container">
        {/* image container to center and crop picture */}
        <div className="img-container">
          {/* image will link to same page as button */}
          <a href={btnUrl}>
            <Image alt={btnText} url={img} shape="square" />
          </a>
        </div>
  
        <a href={btnUrl}>
          <button className="btn">{btnText}</button>
        </a>
      </div>
    );
  };
  
  export default Meet;
