import React from "react";
import { FeatureContainer, FeatureButton } from "./FeatureElements";

export const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Featured Dish</h1>
      <p>Lorem ipsum dolor sit amet</p>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
