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

export interface sponsorModel {
  title: string;
  subTitle: string;
  image: string[];
}

export interface imageGridModel {
  image: string;
  name: string;
  subName: string;
}

export interface cardServiceBodyModel {
  title: string;
  subTitle: string;
  list: string[];
}

export interface commentsModel {
  title: string;
  comments: commentsDetail[];
}

export interface commentsDetail {
  title: string;
  date: string;
  comments: string;
  image: string;
}

export interface faqModel {
  title: string;
  subtitle: string;
  image: string;
  list: faqDetail[];
}

export interface faqDetail {
  question: string;
  answer: string;
}

export interface blogModel {
  title: string;
  subTitle: string;
  list: blogDetailModel[];
}

export interface blogDetailModel {
  title: string;
  name: string;
  date: string;
  content: string;
  image: string;
  link: string;
}

export interface articleDetail {
  classbg: string;
  title: string;
  subTitle: string;
  name: string;
  date: string;
  articleTitle: string;
  articleContent: string;
  image1: string;
  image2: string;
  image3: string;
  articleTitle2: string;
  articleContent2: string;
  articleContent3: articleContentUl;
  comments: commentsModel;
  serviceTitle: string;
  article: articleSubDetail[];
  rating: rating[];
  tags: string[];
}

export interface articleContentUl {
  title: string;
  content: string[];
  body: string;
}

export interface articleSubDetail {
  title: string;
  date: string;
  link: string;
  image: string;
}

export interface rating {
  title: string;
  number: string;
}

export interface sidebarModel {
  title: string;
  article: articleSubDetail[];
  rating: rating[];
  tags: string[];
}

export interface counterModel {
  image: string;
  counterDetail: counterDetailModel[];
}

export interface counterDetailModel {
  title: string;
  subtitle: string;
  icon: string;
}
