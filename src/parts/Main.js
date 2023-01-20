import React from "react";
import Button from "elements/Button";
import imgAvatar2 from "../assets/images/icon/avatar-02.jpg";
import imgAvatar5 from "../assets/images/icon/avatar-05.jpg";
import imgAvatar3 from "../assets/images/icon/avatar-03.jpg";
import imgAvatar4 from "../assets/images/icon/avatar-04.jpg";
import { Link } from "react-router-dom";


// import {InputText} from '../elements/InputText/index'

export default function Main(props) {

  return (
    <div className="main-content">
      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="overview-wrap">
                <h2 className="title-1">overview</h2>
                <Button isIcon isBlue>
                  <i className="zmdi zmdi-plus"></i>add item
                </Button>
              </div>
            </div>
          </div>
          <div className="row m-t-25">
            <div className="col-sm-6 col-lg-3">
              <div className="overview-item overview-item--c1">
                <div className="overview__inner">
                  <div className="overview-box clearfix">
                    <div className="icon">
                      <i className="zmdi zmdi-account-o"></i>
                    </div>
                    <div className="text">
                      <h2>10368</h2>
                      <span>members online</span>
                    </div>
                  </div>
                  <div className="overview-chart">
                    <canvas id="widgetChart1"></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="overview-item overview-item--c2">
                <div className="overview__inner">
                  <div className="overview-box clearfix">
                    <div className="icon">
                      <i className="zmdi zmdi-shopping-cart"></i>
                    </div>
                    <div className="text">
                      <h2>388,688</h2>
                      <span>items solid</span>
                    </div>
                  </div>
                  <div className="overview-chart">
                    <canvas id="widgetChart2"></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div
                className="overview-item overview-item--c3"
                style={{
                  background: `-ms-linear-gradient(90deg, #ee0979 0%, #ff6a00 100%)`,
                }}
              >
                <div className="overview__inner">
                  <div className="overview-box clearfix">
                    <div className="icon">
                      <i className="zmdi zmdi-calendar-note"></i>
                    </div>
                    <div className="text">
                      <h2>1,086</h2>
                      <span>this week</span>
                    </div>
                  </div>
                  <div className="overview-chart">
                    <canvas id="widgetChart3"></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="overview-item overview-item--c4">
                <div className="overview__inner">
                  <div className="overview-box clearfix">
                    <div className="icon">
                      <i className="zmdi zmdi-money"></i>
                    </div>
                    <div className="text">
                      <h2>$1,060,386</h2>
                      <span>total earnings</span>
                    </div>
                  </div>
                  <div className="overview-chart">
                    <canvas id="widgetChart4"></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="au-card recent-report">
                <div className="au-card-inner">
                  <h3 className="title-2">recent reports</h3>
                  <div className="chart-info">
                    <div className="chart-info__left">
                      <div className="chart-note">
                        <span className="dot dot--blue"></span>
                        <span>products</span>
                      </div>
                      <div className="chart-note mr-0">
                        <span className="dot dot--green"></span>
                        <span>services</span>
                      </div>
                    </div>
                    <div className="chart-info__right">
                      <div className="chart-statis">
                        <span className="index incre">
                          <i className="zmdi zmdi-long-arrow-up"></i>25%
                        </span>
                        <span className="label">products</span>
                      </div>
                      <div className="chart-statis mr-0">
                        <span className="index decre">
                          <i className="zmdi zmdi-long-arrow-down"></i>10%
                        </span>
                        <span className="label">services</span>
                      </div>
                    </div>
                  </div>
                  <div className="recent-report__chart">
                    <canvas id="recent-rep-chart"></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="au-card chart-percent-card">
                <div className="au-card-inner">
                  <h3 className="title-2 tm-b-5">char by %</h3>
                  <div className="row no-gutters">
                    <div className="col-xl-6">
                      <div className="chart-note-wrap">
                        <div className="chart-note mr-0 d-block">
                          <span className="dot dot--blue"></span>
                          <span>products</span>
                        </div>
                        <div className="chart-note mr-0 d-block">
                          <span className="dot dot--red"></span>
                          <span>services</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="percent-chart">
                        <canvas id="percent-chart"></canvas>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <h2 className="title-1 m-b-25">Earnings By Items</h2>
              <div className="table-responsive table--no-card m-b-40">
                <table className="table table-borderless table-striped table-earning">
                  <thead>
                    <tr>
                      <th>date</th>
                      <th>order ID</th>
                      <th>name</th>
                      <th className="text-right">price</th>
                      <th className="text-right">quantity</th>
                      <th className="text-right">total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2018-09-29 05:57</td>
                      <td>100398</td>
                      <td>iPhone X 64Gb Grey</td>
                      <td className="text-right">$999.00</td>
                      <td className="text-right">1</td>
                      <td className="text-right">$999.00</td>
                    </tr>
                    <tr>
                      <td>2018-09-28 01:22</td>
                      <td>100397</td>
                      <td>Samsung S8 Black</td>
                      <td className="text-right">$756.00</td>
                      <td className="text-right">1</td>
                      <td className="text-right">$756.00</td>
                    </tr>
                    <tr>
                      <td>2018-09-27 02:12</td>
                      <td>100396</td>
                      <td>Game Console Controller</td>
                      <td className="text-right">$22.00</td>
                      <td className="text-right">2</td>
                      <td className="text-right">$44.00</td>
                    </tr>
                    <tr>
                      <td>2018-09-26 23:06</td>
                      <td>100395</td>
                      <td>iPhone X 256Gb Black</td>
                      <td className="text-right">$1199.00</td>
                      <td className="text-right">1</td>
                      <td className="text-right">$1199.00</td>
                    </tr>
                    <tr>
                      <td>2018-09-25 19:03</td>
                      <td>100393</td>
                      <td>USB 3.0 Cable</td>
                      <td className="text-right">$10.00</td>
                      <td className="text-right">3</td>
                      <td className="text-right">$30.00</td>
                    </tr>
                    <tr>
                      <td>2018-09-29 05:57</td>
                      <td>100392</td>
                      <td>Smartwatch 4.0 LTE Wifi</td>
                      <td className="text-right">$199.00</td>
                      <td className="text-right">6</td>
                      <td className="text-right">$1494.00</td>
                    </tr>
                    <tr>
                      <td>2018-09-24 19:10</td>
                      <td>100391</td>
                      <td>Camera C430W 4k</td>
                      <td className="text-right">$699.00</td>
                      <td className="text-right">1</td>
                      <td className="text-right">$699.00</td>
                    </tr>
                    <tr>
                      <td>2018-09-22 00:43</td>
                      <td>100393</td>
                      <td>USB 3.0 Cable</td>
                      <td className="text-right">$10.00</td>
                      <td className="text-right">3</td>
                      <td className="text-right">$30.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-3">
              <h2 className="title-1 m-b-25">Top countries</h2>
              <div className="au-card au-card--bg-blue au-card-top-countries m-b-40">
                <div className="au-card-inner">
                  <div className="table-responsive">
                    <table className="table table-top-countries">
                      <tbody>
                        <tr>
                          <td>United States</td>
                          <td className="text-right">$119,366.96</td>
                        </tr>
                        <tr>
                          <td>Australia</td>
                          <td className="text-right">$70,261.65</td>
                        </tr>
                        <tr>
                          <td>United Kingdom</td>
                          <td className="text-right">$46,399.22</td>
                        </tr>
                        <tr>
                          <td>Turkey</td>
                          <td className="text-right">$35,364.90</td>
                        </tr>
                        <tr>
                          <td>Germany</td>
                          <td className="text-right">$20,366.96</td>
                        </tr>
                        <tr>
                          <td>France</td>
                          <td className="text-right">$10,366.96</td>
                        </tr>
                        <tr>
                          <td>Australia</td>
                          <td className="text-right">$5,366.96</td>
                        </tr>
                        <tr>
                          <td>Italy</td>
                          <td className="text-right">$1639.32</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="au-card au-card--no-shadow au-card--no-pad m-b-40">
                <div
                  className="au-card-title"
                  style={{
                    backgroundImage: `url("../assets/images/bg-title-01.jpg")`,
                  }}
                >
                  <div className="bg-overlay bg-overlay--blue"></div>
                  <h3>
                    <i className="zmdi zmdi-account-calendar"></i>26 April, 2018
                  </h3>
                  <button className="au-btn-plus">
                    <i className="zmdi zmdi-plus"></i>
                  </button>
                </div>
                <div className="au-task js-list-load">
                  <div className="au-task__title">
                    <p>Tasks for John Doe</p>
                  </div>
                  <div className="au-task-list js-scrollbar3">
                    <div className="au-task__item au-task__item--danger">
                      <div className="au-task__item-inner">
                        <h5 className="task">
                          <Link to="#">
                            Meeting about plan for Admin Template 2018
                          </Link>
                        </h5>
                        <span className="time">10:00 AM</span>
                      </div>
                    </div>
                    <div className="au-task__item au-task__item--warning">
                      <div className="au-task__item-inner">
                        <h5 className="task">
                          <Link to="#">Create new task for Dashboard</Link>
                        </h5>
                        <span className="time">11:00 AM</span>
                      </div>
                    </div>
                    <div className="au-task__item au-task__item--primary">
                      <div className="au-task__item-inner">
                        <h5 className="task">
                          <Link to="#">
                            Meeting about plan for Admin Template 2018
                          </Link>
                        </h5>
                        <span className="time">02:00 PM</span>
                      </div>
                    </div>
                    <div className="au-task__item au-task__item--success">
                      <div className="au-task__item-inner">
                        <h5 className="task">
                          <Link to="#">Create new task for Dashboard</Link>
                        </h5>
                        <span className="time">03:30 PM</span>
                      </div>
                    </div>
                    <div className="au-task__item au-task__item--danger js-load-item">
                      <div className="au-task__item-inner">
                        <h5 className="task">
                          <Link to="#">
                            Meeting about plan for Admin Template 2018
                          </Link>
                        </h5>
                        <span className="time">10:00 AM</span>
                      </div>
                    </div>
                    <div className="au-task__item au-task__item--warning js-load-item">
                      <div className="au-task__item-inner">
                        <h5 className="task">
                          <Link to="#">Create new task for Dashboard</Link>
                        </h5>
                        <span className="time">11:00 AM</span>
                      </div>
                    </div>
                  </div>
                  <div className="au-task__footer">
                    <button className="au-btn au-btn-load js-load-btn">
                      load more
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="au-card au-card--no-shadow au-card--no-pad m-b-40">
                <div
                  className="au-card-title"
                  style={{
                    backgroundImage: `url("../assets/images/bg-title-02.jpg")`,
                  }}
                >
                  <div className="bg-overlay bg-overlay--blue"></div>
                  <h3>
                    <i className="zmdi zmdi-comment-text"></i>New Messages
                  </h3>
                  <button className="au-btn-plus">
                    <i className="zmdi zmdi-plus"></i>
                  </button>
                </div>
                <div className="au-inbox-wrap js-inbox-wrap">
                  <div className="au-message js-list-load">
                    <div className="au-message__noti">
                      <p>
                        You Have
                        <span>2</span>
                        new messages
                      </p>
                    </div>
                    <div className="au-message-list">
                      <div className="au-message__item unread">
                        <div className="au-message__item-inner">
                          <div className="au-message__item-text">
                            <div className="avatar-wrap">
                              <div className="avatar">
                                <img src={imgAvatar2} alt="John Smith" />
                              </div>
                            </div>
                            <div className="text">
                              <h5 className="name">John Smith</h5>
                              <p>Have sent a photo</p>
                            </div>
                          </div>
                          <div className="au-message__item-time">
                            <span>12 Min ago</span>
                          </div>
                        </div>
                      </div>
                      <div className="au-message__item unread">
                        <div className="au-message__item-inner">
                          <div className="au-message__item-text">
                            <div className="avatar-wrap online">
                              <div className="avatar">
                                <img src={imgAvatar3} alt="Nicholas Martinez" />
                              </div>
                            </div>
                            <div className="text">
                              <h5 className="name">Nicholas Martinez</h5>
                              <p>You are now connected on message</p>
                            </div>
                          </div>
                          <div className="au-message__item-time">
                            <span>11:00 PM</span>
                          </div>
                        </div>
                      </div>
                      <div className="au-message__item">
                        <div className="au-message__item-inner">
                          <div className="au-message__item-text">
                            <div className="avatar-wrap online">
                              <div className="avatar">
                                <img src={imgAvatar4} alt="Michelle Sims" />
                              </div>
                            </div>
                            <div className="text">
                              <h5 className="name">Michelle Sims</h5>
                              <p>Lorem ipsum dolor sit amet</p>
                            </div>
                          </div>
                          <div className="au-message__item-time">
                            <span>Yesterday</span>
                          </div>
                        </div>
                      </div>
                      <div className="au-message__item">
                        <div className="au-message__item-inner">
                          <div className="au-message__item-text">
                            <div className="avatar-wrap">
                              <div className="avatar">
                                <img src={imgAvatar5} alt="Michelle Sims" />
                              </div>
                            </div>
                            <div className="text">
                              <h5 className="name">Michelle Sims</h5>
                              <p>Purus feugiat finibus</p>
                            </div>
                          </div>
                          <div className="au-message__item-time">
                            <span>Sunday</span>
                          </div>
                        </div>
                      </div>
                      <div className="au-message__item js-load-item">
                        <div className="au-message__item-inner">
                          <div className="au-message__item-text">
                            <div className="avatar-wrap online">
                              <div className="avatar">
                                <img src={imgAvatar4} alt="Michelle Sims" />
                              </div>
                            </div>
                            <div className="text">
                              <h5 className="name">Michelle Sims</h5>
                              <p>Lorem ipsum dolor sit amet</p>
                            </div>
                          </div>
                          <div className="au-message__item-time">
                            <span>Yesterday</span>
                          </div>
                        </div>
                      </div>
                      <div className="au-message__item js-load-item">
                        <div className="au-message__item-inner">
                          <div className="au-message__item-text">
                            <div className="avatar-wrap">
                              <div className="avatar">
                                <img src={imgAvatar5} alt="Michelle Sims" />
                              </div>
                            </div>
                            <div className="text">
                              <h5 className="name">Michelle Sims</h5>
                              <p>Purus feugiat finibus</p>
                            </div>
                          </div>
                          <div className="au-message__item-time">
                            <span>Sunday</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="au-message__footer">
                      <button className="au-btn au-btn-load js-load-btn">
                        load more
                      </button>
                    </div>
                  </div>
                  <div className="au-chat">
                    <div className="au-chat__title">
                      <div className="au-chat-info">
                        <div className="avatar-wrap online">
                          <div className="avatar avatar--small">
                            <img src={imgAvatar2} alt="John Smith" />
                          </div>
                        </div>
                        <span className="nick">
                          <Link to="#">John Smith</Link>
                        </span>
                      </div>
                    </div>
                    <div className="au-chat__content">
                      <div className="recei-mess-wrap">
                        <span className="mess-time">12 Min ago</span>
                        <div className="recei-mess__inner">
                          <div className="avatar avatar--tiny">
                            <img src={imgAvatar2} alt="John Smith" />
                          </div>
                          <div className="recei-mess-list">
                            <div className="recei-mess">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit non iaculis
                            </div>
                            <div className="recei-mess">
                              Donec tempor, sapien ac viverra
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="send-mess-wrap">
                        <span className="mess-time">30 Sec ago</span>
                        <div className="send-mess__inner">
                          <div className="send-mess-list">
                            <div className="send-mess">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit non iaculis
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="au-chat-textfield">
                      <form className="au-form-icon">
                        <button className="au-input-icon">
                          <i className="zmdi zmdi-camera"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="copyright">
                <p>
                  Copyright © 2018 Colorlib. All rights reserved. Template by{" "}
                  <Link to="https://colorlib.com">Colorlib</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

