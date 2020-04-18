import React from 'react';
import styled from 'styled-components';
import soccerImage1 from '../assets/images/ProjectsImages/1.jpg';
import soccerImage2 from '../assets/images/ProjectsImages/2.jpg';
import soccerImage3 from '../assets/images/ProjectsImages/3.jpg';
import soccerImage5 from '../assets/images/ProjectsImages/5.jpg';
import soccerImage6 from '../assets/images/ProjectsImages/6.jpg';
import soccerImage8 from '../assets/images/ProjectsImages/8.jpg';
import ResumeImage1 from '../assets/images/ProjectsImages/9.jpg';
import ResumeImage3 from '../assets/images/ProjectsImages/11.jpg';
import ResumeImage4 from '../assets/images/ProjectsImages/12.jpg';

const ImageCard = styled.div`
  height: 100px;
  width: 150px;
  padding: 10px;
  margin: 10px;
  background-size: 100% 100%;
  display: inline-block;

  &:hover {
    transform: scale(1.2, 1.2);
    cursor: pointer;
  }
`;

export const Images = [
  soccerImage1,
  soccerImage2,
  soccerImage3,
  soccerImage5,
  soccerImage6,
  soccerImage8,
  ResumeImage1,
  ResumeImage3,
  ResumeImage4,
];

const Gallery = ({ changePhotoFn }) => {
  const GalleryPhotos = Images.map((image, index) => (
    <ImageCard>
      <img
        src={image}
        onClick={changePhotoFn}
        style={{ width: 150, height: 100 }}
        alt="images"
        id={index}
      />
    </ImageCard>
  ));

  return GalleryPhotos;
};

export default Gallery;
