import React from "react";

import { Grid } from "@material-ui/core";
import { cloths, jewellery, bestPlaces } from "../imageAssets/ImageAssets";
import ImageList from "../components/ImageList";
import ImageMagnifier from "../components/ImageMagnifier";
import Typography from "@material-ui/core/Typography";

export default class ImageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentImgSet: [], currentImg: undefined };
    this.handleImgClick = this.handleImgClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleImgClick(selectedImg) {
    console.log(selectedImg);

    this.setState({ currentImgSet: selectedImg, currentImg: selectedImg[0] });
  }
  handleClick(direction) {
    if (direction === "next") {
      const imgList = this.state.currentImgSet;
      const index = imgList.indexOf(this.state.currentImg);
      const nextIndex = imgList.length - 1 > index ? index + 1 : 0;

      this.setState({ currentImg: imgList[nextIndex] });
    } else if (direction === "prev") {
      const imgList = this.state.currentImgSet;
      const index = imgList.indexOf(this.state.currentImg);
      const prevIndex =
        imgList.length - 1 < index ? index + 1 : imgList.length - 1;

      this.setState({ currentImg: imgList[prevIndex] });
    }
  }

  render() {
    return (
      <Grid item xs={12} spacing={12} container justify="center">
        <Grid
          item
          xs={12}
          spacing={12}
          container
          justify="center"
          className="img-list"
        >
          <ImageList
            handleClick={this.handleImgClick}
            imgList={[
              cloths.mens.mensClothsImg5,
              cloths.mens.mensClothsImg4,
              cloths.mens.mensClothsImg3,
              cloths.mens.mensClothsImg2,
              cloths.mens.mensClothsImg1
            ]}
            title="Mens Clothing"
          />
          <ImageList
            handleClick={this.handleImgClick}
            imgList={[
              cloths.womens.womensClothsImg1,
              cloths.womens.womensClothsImg2,
              cloths.womens.womensClothsImg3,
              cloths.womens.womensClothsImg4,
              cloths.womens.womensClothsImg5,
              cloths.womens.womensClothsImg6,
              cloths.womens.womensClothsImg7
            ]}
            title="Womens Clothing"
          />
          <ImageList
            handleClick={this.handleImgClick}
            imgList={[
              bestPlaces.place1,
              bestPlaces.place2,
              bestPlaces.place3,
              bestPlaces.place4,
              bestPlaces.place5,
              bestPlaces.place6,
              bestPlaces.place7,
            ]}
            title="Best Place"
          />
          <ImageList
            handleClick={this.handleImgClick}
            imgList={[jewellery.jewellery1]}
            title="Jewellery Clothing"
          />
          <ImageList
            handleClick={this.handleImgClick}
            imgList={[
              cloths.childrens.cloth1,
              cloths.childrens.cloth2,
              cloths.childrens.cloth3,
              cloths.childrens.cloth4,
              cloths.childrens.cloth5,
              cloths.childrens.cloth6,
              cloths.childrens.cloth7,
              cloths.childrens.cloth8,
              cloths.childrens.cloth9
            ]}
            title="Childrens Clothing"
          />
        </Grid>
        {this.state.currentImg &&
        <Grid item xs={12} spacing={12} container justify="center">
          <div className="nav-div">
            <Typography
              variant="h6"
              component="h4"
              color="textPrimary"
              className="nav-button"
              onClick={() => this.handleClick("prev")}
            >
              Prev
            </Typography>
          </div>
          <Grid
            item
            xs={8}
            container
            justify="center"
            className="img-magnifier-container"
          >
            <ImageMagnifier img={this.state.currentImg} />
          </Grid>
          <div className="nav-div">
            <Typography
              variant="h6"
              component="h4"
              color="textPrimary"
              className="nav-button"
              onClick={() => this.handleClick("next")}
            >
              Next
            </Typography>
          </div>
        </Grid>
        }
      </Grid>
    );
  }
}


