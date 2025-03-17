export interface priceProps {
  price: string;
  image: string;
  textButton: string;
  label: string;
  list: list[];
}

export interface list {
  text: string;
  none: boolean;
}

export interface portofolioModel {
  title: string;
  subTitle: string;
  category: string[];
  data: portofolioData[];
}

export interface portofolioData {
  label: string;
  subLabel: string;
  image: string;
  type: string;
}

export interface testimonialModel {
  content: string;
  name: string;
  image: string;
  country: string;
}

export interface overviewModel {
  title: string;
  titleHeader: string;
  content: string;
  image: string;
  list: string[];
}

export interface overviewBasicModel {
  title: string;
  titleHeader: string;
  content: string;
}

export interface cardServiceModel {
  title: string;
  content: string;
  image: string;
  imageHover: string;
}

export interface cardServiceAnimatedModel {
  title: string;
  content: string;
  image: string;
  imageHover: string;
}
