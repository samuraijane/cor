import './Image.scss';

const Image = ({ url, shape, alt }) => {
    return ( 
        <div className={shape}>
            <img alt={alt} src={url} />
        </div>
     );
};
 
export default Image;
