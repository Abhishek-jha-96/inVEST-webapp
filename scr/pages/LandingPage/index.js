import React from "react";

import {
  Column,
  Row,
  Text,
  Line,
  Button,
  Stack,
  Img,
  Input,
  List,
} from "components";

const LandingPagePage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-poppins items-center justify-end mx-[auto] lg:pt-[34px] xl:pt-[42px] 2xl:pt-[48px] 3xl:pt-[57px] w-[100%]">
        <Column className="items-center justify-end w-[100%]">
          <Row className="items-center justify-between w-[86%]">
            <Column className="pt-[1px] w-[7%]">
              <Text
                className="bg-clip-text bg-gradient2  text-transparent w-[auto]"
                variant="body1"
              >
                in
              </Text>
              <Text
                className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] text-black_900 w-[auto]"
                as="h4"
                variant="h4"
              >
                VEST
              </Text>
            </Column>
            <Row className="items-start rounded-radius2698 w-[69%]">
              <Column className="items-center justify-start lg:mt-[15px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[44%]">
                <Column className="justify-start w-[100%]">
                  <Row className="items-start justify-between w-[100%]">
                    <Text className="About" variant="body5">
                      Home
                    </Text>
                    <Text
                      className="font-bold text-bluegray_900 w-[auto]"
                      variant="body5"
                    >
                      About Us
                    </Text>
                    <Text className="About" variant="body5">
                      Blog
                    </Text>
                    <Text className="About" variant="body5">
                      INVEST
                    </Text>
                  </Row>
                  <Line className="bg-gradient1  h-[3px] 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[4px] w-[6%]" />
                </Column>
              </Column>
              <Text
                className="font-bold lg:ml-[125px] xl:ml-[157px] 2xl:ml-[176px] 3xl:ml-[212px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] text-bluegray_900 w-[auto]"
                variant="body5"
              >
                Sell / BUY
              </Text>
              <Button
                className="font-bold 3xl:ml-[103px] lg:ml-[61px] xl:ml-[76px] 2xl:ml-[86px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[18%]"
                shape="RoundedBorder26"
              >
                LOGIN
              </Button>
            </Row>
          </Row>
          <Column className="items-center justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[100%]">
            <Stack className="lg:h-[1694px] xl:h-[2118px] 2xl:h-[2383px] 3xl:h-[2859px] w-[100%]">
              <Column className="absolute items-center justify-start top-[0] w-[100%]">
                <Column className="items-center justify-start w-[100%]">
                  <Stack
                    className="bg-cover bg-repeat lg:h-[557px] xl:h-[697px] 2xl:h-[783px] 3xl:h-[940px] lg:px-[40px] xl:px-[50px] 2xl:px-[56px] 3xl:px-[68px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_hero.png')" }}
                  >
                    <Stack className="absolute lg:h-[354px] xl:h-[443px] 2xl:h-[498px] 3xl:h-[598px] right-[2%] top-[0] w-[82%]">
                      <Column className="absolute h-[max-content] inset-y-[0] items-center justify-start left-[0] my-[auto] w-[51%]">
                        <Column className="justify-start w-[100%]">
                          <Text
                            className="font-opensans leading-[normal] text-white_A700 w-[100%]"
                            as="h2"
                            variant="h2"
                          >
                            <span className="text-white_A700 font-poppins font-normal not-italic lg:text-[27px] xl:text-[34px] 2xl:text-[38px] 3xl:text-[46px]">
                              We provide easy solution <br />
                              to exchange your
                            </span>
                            <span className="text-white_A700 font-poppins font-light lg:text-[27px] xl:text-[34px] 2xl:text-[38px] 3xl:text-[46px]">
                              {" "}
                            </span>
                            <span className="text-white_A700 font-poppins font-bold lg:text-[27px] xl:text-[34px] 2xl:text-[38px] 3xl:text-[46px]">
                              Daily SAVINGS to your inVESTment
                            </span>
                          </Text>
                          <Button
                            className="font-bold font-poppins 3xl:mt-[119px] lg:mt-[70px] xl:mt-[88px] 2xl:mt-[99px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[25%]"
                            shape="RoundedBorder26"
                            variant="FillWhiteA700"
                          >
                            GET STARTED
                          </Button>
                        </Column>
                      </Column>
                      <Text
                        className="absolute bottom-[35%] font-normal leading-[normal] left-[0] not-italic text-white_A700 w-[36%]"
                        variant="body3"
                      >
                        inVEST is a platform for trading of small amounts and
                        safer at the best rate, why not give us a trial.
                      </Text>
                      <Img
                        src="images/img_img.png"
                        className="absolute lg:h-[354px] xl:h-[443px] 2xl:h-[498px] 3xl:h-[598px] right-[0] w-[51%]"
                        alt="IMG"
                      />
                    </Stack>
                  </Stack>
                  <Column
                    className="bg-cover bg-repeat items-center justify-end lg:mt-[116px] xl:mt-[146px] 2xl:mt-[164px] 3xl:mt-[197px] lg:p-[116px] xl:p-[145px] 2xl:p-[163px] 3xl:p-[195px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_rates.png')" }}
                  >
                    <Column className="items-center justify-start xl:mb-[109px] 2xl:mb-[122px] 3xl:mb-[147px] lg:mb-[87px] lg:mt-[199px] xl:mt-[249px] 2xl:mt-[280px] 3xl:mt-[336px] w-[100%]">
                      <Stack className="bg-white_A700 lg:h-[250px] xl:h-[313px] 2xl:h-[352px] 3xl:h-[422px] rounded-radius30 shadow-bs w-[100%]">
                        <Stack className="absolute bottom-[2%] lg:h-[166px] xl:h-[207px] 2xl:h-[233px] 3xl:h-[279px] right-[2%] w-[24%]">
                          <Line className="absolute bg-gray_400 bottom-[31%] h-[1px] left-[0] w-[81%]" />
                          <Stack className="absolute lg:h-[166px] xl:h-[207px] 2xl:h-[233px] 3xl:h-[279px] w-[100%]">
                            <Column className="absolute bottom-[3%] items-center justify-start w-[100%]">
                              <Column className="justify-start w-[100%]">
                                <Button
                                  className="font-bold 3xl:ml-[101px] lg:ml-[60px] xl:ml-[75px] 2xl:ml-[84px] lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[9px] text-center w-[31%]"
                                  shape="RoundedBorder5"
                                  size="sm"
                                >
                                  8 hours ago
                                </Button>
                                <Column className="justify-start 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                                  <Stack className="lg:h-[36px] xl:h-[45px] 2xl:h-[50px] 3xl:h-[60px] w-[100%]">
                                    <Text
                                      className="absolute font-normal lg:leading-[17px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] not-italic text-bluegray_900 w-[100%]"
                                      variant="body5"
                                    >
                                      Bitcoin BTC Bank <br />
                                      Transfer NGN
                                    </Text>
                                    <Img
                                      src="images/img_transfer.png"
                                      className="absolute lg:h-[4px] 2xl:h-[5px] xl:h-[5px] 3xl:h-[6px] left-[30%] top-[12%] w-[5%]"
                                      alt="Transfer"
                                    />
                                  </Stack>
                                  <Row className="font-opensans items-start lg:mt-[23px] xl:mt-[29px] 2xl:mt-[32px] 3xl:mt-[39px] w-[81%]">
                                    <Text
                                      className="font-bold mt-[2px] text-bluegray_900 w-[auto]"
                                      variant="body6"
                                    >
                                      <span className="text-bluegray_900 font-poppins lg:text-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px]">
                                        1.16{" "}
                                      </span>
                                      <span className="text-bluegray_900 font-poppins font-normal not-italic lg:text-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px]">
                                        BTC
                                      </span>
                                    </Text>
                                    <Img
                                      src="images/img_doubletransfer.png"
                                      className="2xl:h-[10px] 3xl:h-[12px] lg:h-[7px] xl:h-[9px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] mt-[2px] w-[6%]"
                                      alt="Doubletransfer"
                                    />
                                    <Text
                                      className="font-bold mb-[2px] lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] text-bluegray_900 w-[auto]"
                                      variant="body6"
                                    >
                                      <span className="text-bluegray_900 font-poppins lg:text-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px]">
                                        696152299929.23{" "}
                                      </span>
                                      <span className="text-bluegray_900 font-poppins font-normal not-italic lg:text-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px]">
                                        NGN
                                      </span>
                                    </Text>
                                  </Row>
                                  <Stack className="font-poppins lg:h-[36px] xl:h-[45px] 2xl:h-[50px] 3xl:h-[60px] lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[53px] w-[100%]">
                                    <Text
                                      className="absolute font-normal lg:leading-[17px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] not-italic text-bluegray_900 w-[100%]"
                                      variant="body5"
                                    >
                                      Amazon Card Bank <br />
                                      Transfer NGN
                                    </Text>
                                    <Img
                                      src="images/img_transfer.png"
                                      className="absolute lg:h-[4px] 2xl:h-[5px] xl:h-[5px] 3xl:h-[6px] left-[37%] top-[12%] w-[5%]"
                                      alt="Vector"
                                    />
                                  </Stack>
                                </Column>
                              </Column>
                            </Column>
                            <Img
                              src="images/img_scroll.png"
                              className="absolute lg:h-[160px] xl:h-[199px] 2xl:h-[224px] 3xl:h-[269px] inset-y-[0] my-[auto] right-[4%] w-[1px]"
                              alt="Scroll"
                            />
                          </Stack>
                        </Stack>
                        <Column className="absolute bottom-[7%] items-center justify-start left-[6%] w-[56%]">
                          <Row className="items-start w-[100%]">
                            <Img
                              src="images/img_bitcoin.png"
                              className="lg:h-[19px] xl:h-[24px] 2xl:h-[26px] 3xl:h-[32px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] lg:w-[18px] xl:w-[23px] 2xl:w-[25px] 3xl:w-[31px]"
                              alt="bitcoin"
                            />
                            <Text
                              className="font-normal font-poppins lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic text-bluegray_900 w-[auto]"
                              variant="body5"
                            >
                              BTC
                            </Text>
                            <Text
                              className="font-normal font-opensans lg:ml-[23px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[40px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] not-italic text-bluegray_900 w-[auto]"
                              variant="body5"
                            >
                              <span className="text-bluegray_900 font-poppins lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                We Buy @
                              </span>
                              <span className="text-bluegray_900 font-poppins lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                {" "}
                              </span>
                              <span className="text-bluegray_900 font-poppins font-bold lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                ₦350/$
                              </span>
                            </Text>
                            <Img
                              src="images/img_bankbuilding.png"
                              className="lg:h-[18px] xl:h-[23px] 2xl:h-[25px] 3xl:h-[30px] xl:ml-[111px] 2xl:ml-[124px] 3xl:ml-[149px] lg:ml-[88px] w-[4%]"
                              alt="bankbuilding"
                            />
                            <Text
                              className="font-normal font-poppins xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] mt-[3px] not-italic text-bluegray_900 w-[auto]"
                              variant="body5"
                            >
                              Bank Transfer
                            </Text>
                            <Text
                              className="font-normal font-poppins xl:ml-[107px] 2xl:ml-[121px] 3xl:ml-[145px] lg:ml-[86px] mt-[4px] not-italic text-bluegray_900 w-[auto]"
                              variant="body5"
                            >
                              NGN
                            </Text>
                          </Row>
                          <Row className="items-start justify-end ml-[auto] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[8px] w-[81%]">
                            <Text
                              className="font-light font-opensans lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] text-bluegray_900 w-[auto]"
                              variant="body5"
                            >
                              <span className="text-bluegray_900 font-poppins font-normal not-italic lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                We Sell @
                              </span>
                              <span className="text-bluegray_900 font-poppins lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                {" "}
                              </span>
                              <span className="text-bluegray_900 font-poppins font-bold lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                ₦370/$
                              </span>
                            </Text>
                            <Text
                              className="font-bold font-poppins lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] lg:ml-[165px] xl:ml-[207px] 2xl:ml-[233px] 3xl:ml-[280px] text-bluegray_900 w-[auto]"
                              variant="body5"
                            >
                              #3452030300303.24/$
                            </Text>
                          </Row>
                          <Row className="items-center lg:mt-[22px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[38px] w-[98%]">
                            <Img
                              src="images/img_group2.png"
                              className="lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[3%]"
                              alt="GroupTwo"
                            />
                            <Text
                              className="font-normal font-opensans lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] not-italic text-bluegray_900 w-[auto]"
                              variant="body5"
                            >
                              ETH
                            </Text>
                            <Text
                              className="font-normal font-opensans lg:ml-[25px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] not-italic text-bluegray_900 w-[auto]"
                              variant="body5"
                            >
                              <span className="text-bluegray_900 lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                We Buy @
                              </span>
                              <span className="text-bluegray_900 lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                {" "}
                              </span>
                              <span className="text-bluegray_900 font-bold lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                ₦345/$
                              </span>
                            </Text>
                            <Img
                              src="images/img_bitcoin.png"
                              className="lg:h-[19px] xl:h-[24px] 2xl:h-[26px] 3xl:h-[32px] xl:ml-[117px] 2xl:ml-[132px] 3xl:ml-[159px] lg:ml-[94px] lg:w-[18px] xl:w-[23px] 2xl:w-[25px] 3xl:w-[31px]"
                              alt="bitcoin One"
                            />
                            <Text
                              className="font-normal font-poppins xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] not-italic text-bluegray_900 w-[auto]"
                              variant="body5"
                            >
                              Bitcoin
                            </Text>
                            <Text
                              className="font-bold font-poppins xl:ml-[102px] 2xl:ml-[115px] 3xl:ml-[138px] lg:ml-[81px] text-bluegray_900 w-[auto]"
                              variant="body5"
                            >
                              <span className="text-bluegray_900 lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                399.98{" "}
                              </span>
                              <span className="text-bluegray_900 font-normal not-italic lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                BTC
                              </span>
                            </Text>
                          </Row>
                          <Row className="items-start justify-end ml-[auto] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[82%]">
                            <Text
                              className="font-light font-opensans text-bluegray_900 w-[auto]"
                              variant="body5"
                            >
                              <span className="text-bluegray_900 font-normal not-italic lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                We Sell @
                              </span>
                              <span className="text-bluegray_900 lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                {" "}
                              </span>
                              <span className="text-bluegray_900 font-bold lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                ₦370/$
                              </span>
                            </Text>
                            <Img
                              src="images/img_group2.png"
                              className="lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] xl:ml-[123px] 2xl:ml-[139px] 3xl:ml-[167px] lg:ml-[98px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[3%]"
                              alt="GroupTwo One"
                            />
                            <Text
                              className="font-normal font-poppins lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] not-italic text-bluegray_900 w-[auto]"
                              variant="body5"
                            >
                              Ethereum
                            </Text>
                            <Text
                              className="font-normal font-poppins 3xl:ml-[102px] lg:ml-[60px] xl:ml-[76px] 2xl:ml-[85px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] not-italic text-bluegray_900 w-[auto]"
                              variant="body5"
                            >
                              <span className="text-bluegray_900 font-bold lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                1000.00
                              </span>
                              <span className="text-bluegray_900 lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                {" "}
                                ETH
                              </span>
                            </Text>
                          </Row>
                        </Column>
                        <Column className="absolute items-center justify-start top-[0] w-[100%]">
                          <Row className="items-center w-[89%]">
                            <Text
                              className="font-bold columnwelovedevelop_seven"
                              variant="body3"
                            >
                              OUR RATES
                            </Text>
                            <Text
                              className="font-bold lg:ml-[233px] xl:ml-[292px] 2xl:ml-[328px] 3xl:ml-[394px] columnwelovedevelop_seven"
                              variant="body3"
                            >
                              OUR RESERVES
                            </Text>
                            <Text
                              className="font-bold lg:ml-[187px] xl:ml-[234px] 2xl:ml-[264px] 3xl:ml-[316px] columnwelovedevelop_seven"
                              variant="body3"
                            >
                              LATEST EXCHANGES
                            </Text>
                          </Row>
                          <Line className="bg-gray_400 h-[1px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]" />
                        </Column>
                      </Stack>
                    </Column>
                  </Column>
                </Column>
              </Column>
              <Column className="absolute inset-x-[0] items-center justify-start mx-[auto] top-[32%] w-[80%]">
                <Row className="items-start justify-between w-[100%]">
                  <Img
                    src="images/img_layer2.png"
                    className="lg:h-[268px] xl:h-[335px] 2xl:h-[377px] 3xl:h-[452px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[52%]"
                    alt="LayerTwo"
                  />
                  <Column className="justify-start w-[45%]">
                    <Text
                      className="text-pink_400 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Welcome to inVEST
                    </Text>
                    <Line className="bg-pink_A100 h-[7px] ml-[4px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[9%]" />
                    <Text
                      className="font-normal lg:leading-[27px] xl:leading-[34px] 2xl:leading-[38px] 3xl:leading-[46px] lg:mt-[25px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] not-italic text-bluegray_900 w-[100%]"
                      variant="body4"
                    >
                      We have the best rates . Simply start your exchange right
                      now. Sign up for our Affiliate program and earn commission
                      from each exchange. The earnings are credited in your
                      account instantly and can be withdrawn right away. Also
                      note some exchange directions are hidden for unregistered
                      user. To ensure to have access to all our exchange
                      directions and benefits kindly sign up and verify your
                      identity.
                    </Text>
                    <Button
                      className="font-bold lg:mt-[23px] xl:mt-[29px] 2xl:mt-[32px] 3xl:mt-[39px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[29%]"
                      shape="RoundedBorder26"
                    >
                      DISCOVER
                    </Button>
                  </Column>
                </Row>
              </Column>
              <Column className="absolute bottom-[0] inset-x-[0] items-center justify-start mx-[auto] w-[74%]">
                <Row className="items-center justify-between w-[100%]">
                  <Column className="w-[49%]">
                    <Text
                      className="bg-clip-text bg-gradient1  leading-[normal] text-transparent w-[47%]"
                      as="h5"
                      variant="h5"
                    >
                      Great experience <br />
                      with inVEST
                    </Text>
                    <Line className="bg-gradient1  h-[7px] ml-[4px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[9%]" />
                    <Text
                      className="font-normal lg:leading-[27px] xl:leading-[34px] 2xl:leading-[38px] 3xl:leading-[46px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] not-italic text-bluegray_900 w-[100%]"
                      variant="body4"
                    >
                      inVEST is an online site and a p2admin platform that
                      allows users to buy, sell and/ or exchange digital and
                      fiat assets safely. Owned and managed by inVEST Business
                      Services established and Incoperated in Nigeria.
                      <br />
                    </Text>
                    <Button
                      className="font-bold lg:mt-[19px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[32px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[29%]"
                      shape="RoundedBorder26"
                    >
                      DISCOVER
                    </Button>
                  </Column>
                  <Img
                    src="images/img_11.png"
                    className="lg:h-[282px] xl:h-[352px] 2xl:h-[396px] 3xl:h-[475px] w-[46%]"
                    alt="Eleven"
                  />
                </Row>
              </Column>
            </Stack>
            <Stack className="lg:h-[426px] xl:h-[533px] 2xl:h-[600px] 3xl:h-[720px] 2xl:mt-[110px] 3xl:mt-[132px] lg:mt-[78px] xl:mt-[98px] w-[100%]">
              <Img
                src="images/img_bg.png"
                className="absolute lg:h-[355px] xl:h-[444px] 2xl:h-[499px] 3xl:h-[599px] top-[0] w-[100%]"
                alt="BG"
              />
              <Column className="absolute bg-white_A700 bottom-[0] inset-x-[0] items-center justify-start mx-[auto] lg:p-[49px] xl:p-[62px] 2xl:p-[70px] 3xl:p-[84px] rounded-radius30 shadow-bs1 w-[65%]">
                <Column className="items-center justify-start 3xl:mb-[11px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] w-[70%]">
                  <Text
                    className="columnwelovedevelop_seven"
                    as="h5"
                    variant="h5"
                  >
                    Trade from anywhere
                  </Text>
                  <Line className="bg-gradient1  h-[7px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[9%]" />
                  <Row className="items-center justify-between lg:mt-[35px] xl:mt-[44px] 2xl:mt-[49px] 3xl:mt-[59px] w-[100%]">
                    <div className="bg-gradient1  p-[1px] rounded-radius15 w-[45%] ">
                      <Column className="bg-white_A700 border-solid items-center lg:p-[27px] xl:p-[35px] 2xl:p-[39px] 3xl:p-[47px] rounded-radius15">
                        <Img
                          src="images/img_bitcoin.png"
                          className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] w-[32%]"
                          alt="bitcoin Two"
                        />
                        <Text
                          className="font-bold lg:mb-[10px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[17px] lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] text-bluegray_900 w-[auto]"
                          variant="body4"
                        >
                          Bitcoin
                        </Text>
                      </Column>
                    </div>
                    <div className="bg-gradient1  p-[1px] rounded-radius15 w-[45%] ">
                      <Column className="bg-white_A700 border-solid items-center lg:p-[37px] xl:p-[46px] 2xl:p-[52px] 3xl:p-[63px] rounded-radius15">
                        <Img
                          src="images/img_giftcards.png"
                          className="lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] mt-[3px] rounded-radius5 w-[45%]"
                          alt="Giftcards"
                        />
                        <Text
                          className="font-bold lg:mt-[36px] xl:mt-[45px] 2xl:mt-[50px] 3xl:mt-[61px] text-bluegray_900 w-[auto]"
                          variant="body4"
                        >
                          Gift Cards
                        </Text>
                      </Column>
                    </div>
                  </Row>
                </Column>
              </Column>
            </Stack>
            <Stack className="lg:h-[1269px] xl:h-[1587px] 2xl:h-[1785px] 3xl:h-[2142px] xl:mt-[120px] 2xl:mt-[135px] 3xl:mt-[162px] lg:mt-[96px] w-[100%]">
              <Column
                className="absolute bg-cover bg-repeat bottom-[0] items-center justify-end xl:p-[105px] 2xl:p-[119px] 3xl:p-[142px] lg:p-[84px] w-[100%]"
                style={{ backgroundImage: "url('images/img_rates.png')" }}
              >
                <Column className="items-center justify-start lg:mb-[107px] xl:mb-[134px] 2xl:mb-[150px] 3xl:mb-[180px] lg:mt-[235px] xl:mt-[294px] 2xl:mt-[331px] 3xl:mt-[397px] w-[97%]">
                  <Column className="justify-start w-[100%]">
                    <Row className="items-start w-[62%]">
                      <Img
                        src="images/img_graphics2.png"
                        className="xl:h-[112px] 2xl:h-[125px] 3xl:h-[150px] lg:h-[89px] lg:mb-[19px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[33px] w-[21%]"
                        alt="GraphicsTwo"
                      />
                      <Text
                        className="leading-[normal] lg:ml-[184px] xl:ml-[230px] 2xl:ml-[259px] 3xl:ml-[311px] lg:mt-[51px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] text-center text-white_A700 uppercase w-[43%]"
                        as="h5"
                        variant="h5"
                      >
                        <span className="text-white_A700 font-poppins font-bold lg:text-[19px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px]">
                          10,000 S
                        </span>
                        <span className="text-white_A700 font-poppins font-bold lg:text-[19px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px]">
                          atisfied clients
                          <br />
                          around the world
                        </span>
                      </Text>
                    </Row>
                    <Line className="bg-gradient1  h-[7px] lg:ml-[385px] xl:ml-[481px] 2xl:ml-[541px] 3xl:ml-[650px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[25px] 3xl:mt-[31px] w-[4%]" />
                    <Text
                      className="font-normal lg:ml-[217px] xl:ml-[271px] 2xl:ml-[305px] 3xl:ml-[366px] lg:mt-[25px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] not-italic text-white_A700 w-[auto]"
                      variant="body4"
                    >
                      Yeah! we’re proud with numbers. We’ve helped thousands of
                      clients all around the world with our bespoke service.
                      Hover ontop of them pic to view their testimonials.
                    </Text>
                    <Row className="items-start justify-end ml-[auto] 2xl:mt-[101px] 3xl:mt-[122px] lg:mt-[72px] xl:mt-[90px] w-[95%]">
                      <Column
                        className="bg-cover bg-repeat items-end justify-end lg:mb-[23px] xl:mb-[29px] 2xl:mb-[32px] 3xl:mb-[39px] lg:p-[40px] xl:p-[50px] 2xl:p-[56px] 3xl:p-[68px] w-[92%]"
                        style={{
                          backgroundImage: "url('images/img_group10.svg')",
                        }}
                      >
                        <Stack className="xl:h-[100px] 2xl:h-[112px] 3xl:h-[134px] lg:h-[80px] mr-[4px] lg:mt-[103px] xl:mt-[129px] 2xl:mt-[146px] 3xl:mt-[175px] w-[49%]">
                          <Column
                            className="absolute bg-cover bg-repeat font-poppins items-end justify-start left-[0] lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[92%]"
                            style={{
                              backgroundImage: "url('images/img_group11.svg')",
                            }}
                          >
                            <Column className="justify-start lg:mb-[28px] xl:mb-[35px] 2xl:mb-[40px] 3xl:mb-[48px] mt-[2px] w-[92%]">
                              <Row className="items-start justify-between w-[100%]">
                                <Text
                                  className="font-normal mt-[1px] not-italic text-bluegray_900 w-[auto]"
                                  variant="body5"
                                >
                                  Femi from Nigeria
                                </Text>
                                <Img
                                  src="images/img_bitcoin.png"
                                  className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] w-[7%]"
                                  alt="Bitcoin Four"
                                />
                              </Row>
                              <Img
                                src="images/img_star.png"
                                className="xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] mt-[1px] w-[21%]"
                                alt="Star"
                              />
                            </Column>
                          </Column>
                          <Text
                            className="absolute bottom-[15%] font-normal font-opensans lg:leading-[13px] xl:leading-[17px] 2xl:leading-[19px] 3xl:leading-[23px] not-italic right-[0] text-bluegray_900 w-[90%]"
                            variant="body6"
                          >
                            <span className="text-bluegray_900 font-poppins font-bold lg:text-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px]">
                              Wonderful service
                            </span>
                            <span className="text-bluegray_900 font-poppins lg:text-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px]">
                              <br />
                              <br />
                              Good deal and very wonderful service thank you.
                            </span>
                          </Text>
                        </Stack>
                      </Column>
                      <Img
                        src="images/img_graphics2.png"
                        className="lg:h-[52px] xl:h-[65px] 2xl:h-[74px] 3xl:h-[88px] lg:mt-[235px] xl:mt-[294px] 2xl:mt-[331px] 3xl:mt-[397px] w-[8%]"
                        alt="GraphicsOne"
                      />
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Column className="absolute inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[72%]">
                <Text
                  className="columnwelovedevelop_seven"
                  as="h5"
                  variant="h5"
                >
                  Our blog
                </Text>
                <Line className="bg-gradient1  h-[7px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[5%]" />
                <Text
                  className="font-normal lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] not-italic text-bluegray_900 w-[auto]"
                  variant="body4"
                >
                  Get to know the latest stuff via our blog post.
                </Text>
                <Stack className="lg:h-[244px] xl:h-[305px] 2xl:h-[343px] 3xl:h-[412px] lg:mt-[33px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[100%]">
                  <Stack className="absolute lg:h-[244px] xl:h-[305px] 2xl:h-[343px] 3xl:h-[412px] w-[100%]">
                    <Column className="absolute inset-y-[10%] items-center justify-start w-[100%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Column className="bg-white_A700 border border-bluegray_400 border-solid lg:p-[18px] xl:p-[23px] 2xl:p-[25px] 3xl:p-[31px] rounded-radius15 w-[34%]">
                          <Row className="items-start lg:ml-[18px] xl:ml-[23px] 2xl:ml-[25px] 3xl:ml-[31px] mr-[auto] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] rounded-radius5 w-[46%]">
                            <Text
                              className="mt-[3px] not-italic text-bluegray_400 w-[auto]"
                              variant="body7"
                            >
                              01 FEB, 2019
                            </Text>
                            <div className="border border-bluegray_400 border-solid lg:h-[10px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[17px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] rounded-radius05 w-[1%]"></div>
                            <Text
                              className="3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[2px] not-italic text-bluegray_400 w-[auto]"
                              variant="body7"
                            >
                              TECHNOLOGY
                            </Text>
                          </Row>
                          <Text
                            className="lg:leading-[20px] xl:leading-[25px] 2xl:leading-[28px] 3xl:leading-[34px] lg:ml-[18px] xl:ml-[23px] 2xl:ml-[25px] 3xl:ml-[31px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] text-bluegray_400 w-[85%]"
                            variant="body2"
                          >
                            HOW TO SELL YOUR ITUNES <br />
                            GIFTCARD WITH US .
                          </Text>
                          <Column className="bg-bluegray_400 items-center justify-start lg:ml-[18px] xl:ml-[23px] 2xl:ml-[25px] 3xl:ml-[31px] lg:mt-[53px] xl:mt-[67px] 2xl:mt-[75px] 3xl:mt-[91px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[9px] rounded-radius1804 w-[33%]">
                            <Text
                              className="mb-[3px] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              READ MORE
                            </Text>
                          </Column>
                        </Column>
                        <Column className="bg-white_A700 border border-bluegray_400 border-solid lg:p-[22px] xl:p-[28px] 2xl:p-[31px] 3xl:p-[38px] rounded-radius15 w-[34%]">
                          <Row className="items-start lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] mr-[auto] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[8px] rounded-radius5 w-[40%]">
                            <Text
                              className="mt-[3px] not-italic text-bluegray_400 w-[auto]"
                              variant="body7"
                            >
                              01 FDEC, 2019
                            </Text>
                            <div className="border border-bluegray_400 border-solid lg:h-[10px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[17px] ml-[4px] rounded-radius05 w-[1%]"></div>
                            <Text
                              className="3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[2px] not-italic text-bluegray_400 w-[auto]"
                              variant="body7"
                            >
                              LIFESTYLE
                            </Text>
                          </Row>
                          <Text
                            className="lg:leading-[20px] xl:leading-[25px] 2xl:leading-[28px] 3xl:leading-[34px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] text-bluegray_400 w-[88%]"
                            variant="body2"
                          >
                            EXCHANGE 5 PRODUCTS & <br />
                            GET 1 FREE PRODUCT.
                          </Text>
                          <Stack className="2xl:h-[100px] 3xl:h-[120px] lg:h-[71px] xl:h-[89px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[88%]">
                            <Column className="absolute bg-bluegray_400 bottom-[0] items-center justify-start left-[0] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[9px] rounded-radius1804 w-[39%]">
                              <Text
                                className="mb-[3px] text-white_A700 w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                READ MORE
                              </Text>
                            </Column>
                            <Text
                              className="absolute lg:leading-[12px] xl:leading-[15px] 2xl:leading-[17px] 3xl:leading-[21px] not-italic text-bluegray_400 top-[0] w-[100%]"
                              variant="body7"
                            >
                              Lorem ipsum dolor sit amet, magna habemus
                              <br />
                              ius ad, qui minimum voluptaria in. Ad mei modus{" "}
                              <br />
                              quodsi complectitur, postea...
                            </Text>
                          </Stack>
                        </Column>
                      </Row>
                    </Column>
                    <div className="2xl:mx-[298px] 3xl:mx-[358px] absolute bg-gradient1  inset-x-[29%] lg:mx-[212px] p-[1px] rounded-radius15 w-[43%] xl:mx-[265px] ">
                      <Column className="absolute bg-white_A700 border-solid justify-end lg:p-[27px] xl:p-[34px] 2xl:p-[38px] 3xl:p-[46px] rounded-radius15 shadow-bs1">
                        <Row className="items-start lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] mr-[auto] mt-[3px] rounded-radius5 w-[34%]">
                          <Text
                            className="mt-[3px] not-italic text-bluegray_900 w-[auto]"
                            variant="body7"
                          >
                            19 JUNE, 2019
                          </Text>
                          <div className="border border-bluegray_900 border-solid lg:h-[10px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[17px] 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] rounded-radius05 w-[1%]"></div>
                          <Text
                            className="3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[2px] not-italic text-bluegray_900 w-[auto]"
                            variant="body7"
                          >
                            BUSINESS
                          </Text>
                        </Row>
                        <Text
                          className="bg-clip-text bg-gradient1  lg:leading-[26px] xl:leading-[33px] 2xl:leading-[37px] 3xl:leading-[44px] lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] text-transparent w-[80%]"
                          as="h6"
                          variant="h6"
                        >
                          ETH TO NAIRA EXCHANGE <br />
                          RATE IS NOW #400 PER...
                        </Text>
                        <Text
                          className="font-normal lg:leading-[19px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[32px] lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] not-italic text-bluegray_900 w-[92%]"
                          variant="body6"
                        >
                          Lorem ipsum dolor sit amet, magna habemus
                          <br />
                          ius ad, qui minimum voluptaria in. Ad mei modus <br />
                          quodsi complectitur, postea...
                        </Text>
                        <Button
                          className="font-bold lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] lg:mt-[15px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[33%]"
                          shape="RoundedBorder21"
                          size="md"
                        >
                          READ MORE
                        </Button>
                      </Column>
                    </div>
                  </Stack>
                  <Text
                    className="absolute bottom-[26%] lg:leading-[12px] xl:leading-[15px] 2xl:leading-[17px] 3xl:leading-[21px] left-[5%] not-italic text-bluegray_400 w-[33%]"
                    variant="body7"
                  >
                    Lorem ipsum dolor sit amet, magna habemus
                    <br />
                    ius ad, qui minimum voluptaria in. Ad mei modus <br />
                    quodsi complectitur, postea...
                  </Text>
                </Stack>
              </Column>
            </Stack>
            <Text
              className="lg:mt-[591px] xl:mt-[740px] 2xl:mt-[832px] 3xl:mt-[999px] columnwelovedevelop_seven"
              as="h5"
              variant="h5"
            >
              Subscribe our newsletter
            </Text>
            <Line className="bg-gradient1  h-[7px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[3%]" />
            <Text
              className="font-normal lg:leading-[27px] xl:leading-[34px] 2xl:leading-[38px] 3xl:leading-[46px] lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] not-italic text-bluegray_900 text-center w-[25%]"
              variant="body4"
            >
              Subscribe to our newsletter for daily/weekly update of our
              products and services.
            </Text>
            <Row className="items-center justify-center lg:mt-[15px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius2698 w-[37%]">
              <div className="bg-white_A700 w-[70%] ">
                <Input
                  className="font-normal not-italic p-[0] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] placeholder:text-bluegray_900 text-bluegray_900 w-[100%]"
                  wrapClassName="bg-white_A700 w-[70%]"
                  type="email"
                  name="Form"
                  placeholder="EMAIL"
                ></Input>
              </div>
              <Button
                className="font-bold 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[28%]"
                shape="RoundedBorder26"
              >
                DISCOVER
              </Button>
            </Row>
            <Stack className="lg:h-[239px] xl:h-[299px] 2xl:h-[337px] 3xl:h-[404px] 3xl:mt-[103px] lg:mt-[61px] xl:mt-[76px] 2xl:mt-[86px] w-[100%]">
              <Column className="absolute bg-gray_900 items-center justify-end left-[0] lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] w-[100%]">
                <Column className="items-center justify-start lg:mt-[35px] xl:mt-[44px] 2xl:mt-[49px] 3xl:mt-[59px] w-[93%]">
                  <Row className="items-start w-[100%]">
                    <Column className="font-poppins justify-start lg:mt-[46px] xl:mt-[58px] 2xl:mt-[65px] 3xl:mt-[78px] w-[27%]">
                      <Text
                        className="font-normal lg:leading-[16px] xl:leading-[20px] 2xl:leading-[23px] 3xl:leading-[27px] not-italic text-gray_500 w-[100%]"
                        variant="body5"
                      >
                        {" "}
                        Fusce ut elit aliquet, fermentum leo vel, tempus nunc.
                        Fusce eu rhoncus augue. Fusce vel metus pharetra,
                        fermentum
                      </Text>
                      <Img
                        src="images/img_socialmediaic.svg"
                        className="xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[29%]"
                        alt="SocialMediaIc"
                      />
                      <Text
                        className="font-normal lg:mt-[49px] xl:mt-[61px] 2xl:mt-[69px] 3xl:mt-[82px] not-italic text-gray_500_7e w-[auto]"
                        variant="body6"
                      >
                        © 2019 Designed by Cr8tiv_yemmy
                      </Text>
                    </Column>
                    <Text
                      className="font-normal font-opensans lg:leading-[20px] xl:leading-[25px] 2xl:leading-[28px] 3xl:leading-[34px] lg:mb-[20px] xl:mb-[25px] 2xl:mb-[28px] 3xl:mb-[34px] lg:ml-[115px] xl:ml-[144px] 2xl:ml-[162px] 3xl:ml-[194px] not-italic text-white_A700 w-[12%]"
                      variant="body3"
                    >
                      <span className="text-white_A700 font-poppins lg:text-[12px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px]">
                        inVEST
                      </span>
                      <span className="text-white_A700 font-poppins lg:text-[12px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px]">
                        {" "}
                        Links
                        <br />
                      </span>
                      <span className="text-gray_500 font-poppins lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                        <br />
                      </span>
                      <span className="text-gray_500 font-poppins lg:text-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px]">
                        Home
                        <br />
                        About Us
                        <br />
                        Blog
                        <br />
                        Sell
                        <br />
                        Contact Us
                      </span>
                    </Text>
                    <Column className="justify-start lg:ml-[43px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] w-[16%]">
                      <Text
                        className="font-normal font-opensans lg:leading-[16px] xl:leading-[20px] 2xl:leading-[23px] 3xl:leading-[27px] not-italic text-white_A700 w-[100%]"
                        variant="body3"
                      >
                        <span className="text-white_A700 font-poppins lg:text-[12px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px]">
                          Contact Us
                          <br />
                        </span>
                        <span className="text-gray_500 font-poppins lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                          <br />
                        </span>
                        <span className="text-gray_500 font-poppins lg:text-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px]">
                          (+234) 137632128 <br />
                        </span>
                        <span className="text-gray_500 font-poppins lg:text-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px]">
                          inVEST
                        </span>
                        <span className="text-gray_500 font-poppins lg:text-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px]">
                          @yahoo.com
                          <br />
                          Address goes here
                        </span>
                      </Text>
                      <Text
                        className="font-normal font-poppins lg:mt-[18px] xl:mt-[23px] 2xl:mt-[25px] 3xl:mt-[31px] not-italic text-gray_500 w-[auto]"
                        variant="body6"
                      >
                        Download Our App
                      </Text>
                    </Column>
                    <Column className="font-poppins justify-start lg:ml-[43px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] w-[23%]">
                      <Text
                        className="font-normal not-italic text-white_A700 w-[auto]"
                        variant="body3"
                      >
                        inVEST Instagram
                      </Text>
                      <List
                        className="gap-[0] min-h-[auto] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[100%]"
                        orientation="vertical"
                      >
                        <Row className="items-center justify-between lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] w-[100%]">
                          <div className="bg-gray_401 lg:h-[48px] xl:h-[59px] 2xl:h-[67px] 3xl:h-[80px] w-[23%]"></div>
                          <Button
                            className="flex items-center justify-center w-[23%]"
                            size="smIcn"
                            variant="icbFillBluegray100"
                          >
                            <Img
                              src="images/img_plus.svg"
                              className="flex items-center justify-center"
                              alt="plus"
                            />
                          </Button>
                          <div className="bg-gray_401 lg:h-[48px] xl:h-[59px] 2xl:h-[67px] 3xl:h-[80px] w-[23%]"></div>
                          <div className="bg-gray_401 lg:h-[48px] xl:h-[59px] 2xl:h-[67px] 3xl:h-[80px] w-[23%]"></div>
                        </Row>
                        <Row className="items-center justify-between lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] w-[100%]">
                          <div className="bg-gray_401 lg:h-[48px] xl:h-[59px] 2xl:h-[67px] 3xl:h-[80px] w-[23%]"></div>
                          <div className="bg-gray_401 lg:h-[48px] xl:h-[59px] 2xl:h-[67px] 3xl:h-[80px] w-[23%]"></div>
                          <div className="bg-gray_401 lg:h-[48px] xl:h-[59px] 2xl:h-[67px] 3xl:h-[80px] w-[23%]"></div>
                          <div className="bg-gray_401 lg:h-[48px] xl:h-[59px] 2xl:h-[67px] 3xl:h-[80px] w-[23%]"></div>
                        </Row>
                      </List>
                    </Column>
                  </Row>
                </Column>
              </Column>
              <Stack className="absolute lg:h-[104px] xl:h-[130px] 2xl:h-[147px] 3xl:h-[176px] left-[0] top-[4%] w-[27%]">
                <Text
                  className="absolute font-normal lg:leading-[27px] xl:leading-[34px] 2xl:leading-[38px] 3xl:leading-[46px] not-italic text-bluegray_900 w-[100%]"
                  variant="body4"
                >
                  inVEST
                </Text>
                <Text
                  className="absolute left-[21%] not-italic text-white_A700 top-[36%] w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  inVEST
                </Text>
              </Stack>
            </Stack>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default LandingPagePage;
