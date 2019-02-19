import React from "react";
import Typography from "@material-ui/core/Typography";

const renderImgList = (imgList, handleClick) => {
  var i = 0;
  return (
    <div id={i++} className="img-container">
      <img src={imgList[0]} className="img" onClick={e => handleClick(imgList)} />
    </div>
  );
};

const ImageList = props => {
  return (
    <div md={4} className="img-list-container">
      {renderImgList(props.imgList, props.handleClick)}
      <Typography
        variant="h6"
        component="h4"
        color="textPrimary"
        className="img-info"
      >
        {props.title}
      </Typography>
      <Typography
        variant="h6"
        component="h4"
        color="textSecondary"
        className="img-info"
      >
        {props.imgList.length} Photos
      </Typography>
    </div>
  );
};
export default ImageList;
