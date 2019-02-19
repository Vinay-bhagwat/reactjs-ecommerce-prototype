import React from "react";
import { Grid } from "@material-ui/core";
import ReactImageMagnify from "react-image-magnify";
const ImageMagnifier = props => {
  return (
    <Grid item container justify="center" className="img-magnifier-sub-container">
      {props.img && (
        <ReactImageMagnify className="img-magnifier"
          {...{
            smallImage: {
              isFluidWidth: true,
              src: props.img,
              sizes: "(min-width: 800px) 33.5vw, (min-width: 415px) 50vw, 100vw"
            },
            largeImage: {
              src: props.img,
              width: 1200,
              height: 1800,
              },
            isHintEnabled: true,
            enlargedImageContainerDimensions:{width:'250%',height:'150%'},
            enlargedImageContainerClassName:'img-enlarge-container'
        }
        
        }
        />
      )}
    </Grid>
  );
};
export default ImageMagnifier;
