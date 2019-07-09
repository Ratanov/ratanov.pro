import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

import servicesPageStyle from "assets/jss/material-kit-react/views/servicesPageStyle.jsx";

import image from "assets/img/bg7.jpg";

import ScrollToTopOnMount from "components/ScrollToTop/ScrollToTop.jsx";
import { translate } from "react-i18next";

class ServicesPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden"
    };
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  render() {
    const { classes, t, ...rest } = this.props;
    return (
      <div>
        <ScrollToTopOnMount />
        <Header
          absolute
          color="transparent"
          brand="RATANOV.PRO"
          rightLinks={<HeaderLinks />}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              {/*<GridItem xs={12} sm={12} md={7}>*/}
                {/*<Card className={classes[this.state.cardAnimaton]+" get-in-touch"}>*/}
                  {/*<h1>{t('ServicesPage Title')}</h1>*/}
                  {/*<br />*/}
                  {/*<b>{t('Phone')}</b>*/}
                  {/*<p>+7 960 087 87 08</p>*/}
                  {/*<br />*/}
                  {/*<b>{t('Email')}</b>*/}
                  {/*<p>79600878708@yandex.ru</p>*/}
                {/*</Card>*/}
              {/*</GridItem>*/}
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]+" cardService"}>
                  <CardHeader color="primary" className={classes.cardHeader+" cardServiceHeader"}>
                    <h3>Создание сайтов</h3>
                  </CardHeader>
                  <CardBody className="contactInput">
                    <p>Это продуманный и взвешенный маркетинговый ход, который при правильном подходе выведет компанию на новый уровень. Основная цель сайта – конвертировать входящий трафик в поток клиентов, которые обращаются к вам посредством звонка/заявки.</p>
                  </CardBody>
                  {/*<CardFooter className={classes.cardFooter}>*/}
                    {/*<Button color="primary" size="lg">{t('Send')}</Button>*/}
                  {/*</CardFooter>*/}
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]+" cardService"}>
                  <CardHeader color="primary" className={classes.cardHeader+" cardServiceHeader"}>
                    <h3>Продвижение сайтов</h3>
                  </CardHeader>
                  <CardBody className="contactInput">
                    <p>Один из инструментов интернет-рекламы. Смысл его в том, чтобы из сотен и тысяч сайтов, предлагающих подобные услуги, поисковая система показала пользователю ваш сайт в числе первого десятка.</p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]+" cardService"}>
                  <CardHeader color="primary" className={classes.cardHeader+" cardServiceHeader"}>
                    <h3>Обслуживание сайтов</h3>
                  </CardHeader>
                  <CardBody className="contactInput">
                    <p>Квалифицированное и быстрое выполнение множества задач по обеспечению бесперебойного и эффективного функционирования вашего ресурса в сети, а также поддержка работоспособности сайта на протяжении его жизненного цикла.</p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]+" cardService"}>
                  <CardHeader color="primary" className={classes.cardHeader+" cardServiceHeader"}>
                    <h3>Фирменный стиль</h3>
                  </CardHeader>
                  <CardBody className="contactInput">
                    <p>Разработка дизайн-концепции для всей вашей компании, куда входит создание логотипа, визиток, фирменного бланка, презентаций, дизайна сувенирной продукции и прочего. Каждая концепция отображает образное мышление, воображение и творческие навыки дизайнера</p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]+" cardService"}>
                  <CardHeader color="primary" className={classes.cardHeader+" cardServiceHeader"}>
                    <h3>Контекстная реклама</h3>
                  </CardHeader>
                  <CardBody className="contactInput">
                    <p>Рекламные объявления, показанные в контексте. В контексте того, что ищет пользователь в поисковике. Ключевым словом является «ищет». Задача контекстной рекламы в том, чтобы потенциальный клиент нашел именно вас.</p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]+" cardService"}>
                  <CardHeader color="primary" className={classes.cardHeader+" cardServiceHeader"}>
                    <h3>Медийная реклама и SMM</h3>
                  </CardHeader>
                  <CardBody className="contactInput">
                    <p>Комплекс мероприятий, направленных на привлечение целевого трафика через социальные сети (VK, Facebook, Instagram и др.). Основной упор делается на контент, который создает «социальный эфффект» и люди сами распространяют его через своих знакомых и друзей.</p>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
      </div>
    );
  }
}

export default withStyles(servicesPageStyle)(translate("translations")(ServicesPage));
