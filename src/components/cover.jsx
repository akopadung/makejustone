import React, { Component } from "react";
import "../App.css";
import "./css/cover.css";
import "./css/cover1.css";
import "./css/cover2.css";
import "./css/cover3.css";
import cover11 from "./images/cover01/cover01.jpg";
import cover12 from "./images/cover01/cover02.jpg";
import cover13 from "./images/cover01/cover03.jpg";
import cover14 from "./images/cover01/cover04.jpg";
import cover15 from "./images/cover01/cover05.jpg";
import cover16 from "./images/cover01/cover06.jpg";

import cover21 from "./images/cover02/cover11.jpg";
import cover22 from "./images/cover02/cover12.jpg";
import cover23 from "./images/cover02/cover13.jpg";
import cover24 from "./images/cover02/cover14.jpg";
import cover25 from "./images/cover02/cover15.jpg";
import cover26 from "./images/cover02/cover16.jpg";

import cover31 from "./images/cover03/cover21.png";
import cover32 from "./images/cover03/cover22.png";
import cover33 from "./images/cover03/cover23.png";
import cover34 from "./images/cover03/cover24.png";
import cover35 from "./images/cover03/cover25.png";
import cover36 from "./images/cover03/cover26.png";

import im_top21 from "./images/cover02/cover11_top.png";
import im_middle21 from "./images/cover02/cover11_middle.png";
import im_bottom21 from "./images/cover02/cover11_bottomF.png";

import im_top31 from "./images/cover03/cover21_top.png";
import im_middle31 from "./images/cover03/cover21_middle.png";
import im_top32 from "./images/cover03/cover22_top.png";
import im_middle32 from "./images/cover03/cover22_middle.png";
import im_top33 from "./images/cover03/cover23_top.png";
import im_middle33 from "./images/cover03/cover23_middle.png";
import im_top34 from "./images/cover03/cover24_top.png";
import im_middle34 from "./images/cover03/cover24_middle.png";
import im_top35 from "./images/cover03/cover25_top.png";
import im_middle35 from "./images/cover03/cover25_middle.png";
import im_top36 from "./images/cover03/cover26_top.png";
import im_middle36 from "./images/cover03/cover26_middle.png";


import logo_ from "./images/sso_logo.png";

export default class Cover extends Component {
  render() {
    console.log("coverColor: ", this.props.coverColor)
    const obj = this.props.selectedOption;
    var background;
    var im1;
    var im2;
    var im3;
    
    var logo = obj.logo.replace("open?", "uc?export=view&");
    var profile = obj.profile.replace("open?", "uc?export=view&");
    var name = obj.name;
    var title = obj.title;
    var dept = obj.dept;
    var school = obj.school;
    var sso1 = obj.sso1;
    var sso2 = obj.sso2;
    var sso3 = obj.sso3;

    const fontTopSize = this.props.fontTopSize;
    const fontTitleSize = this.props.fontTitleSize;
    const fontSubSize = this.props.fontSubSize;
    const coverColor = this.props.coverColor;

    var app_logo_alt = "app_logo_sso";
    var app_logo = "app_logo";
    var im_top = "";
    var app_top_bg = "";
    var app_header = "";
    var app_top1 = "";
    var app_top2 = "";
    var app_sub = "";
    var app_profile = "";
    var app_story1 = "";
    var app_story2 = "";
    var app_story3 = "";
    var app_middle_bg = "";
    var im_middle = "";
    var app_bottom_bg = "";
    var im_bottom = "";

    var app_name = "";
    var app_title = "";
    var app_dept = "";
    var app_school = "";
    var app_sso1 = "";
    var app_sso2 = "";
    var app_sso3 = "";

    var coverId = obj.cover;

    var top;
    var sub;
    var ti;
    var topSize = '2.8';
    var subSize ='3.0';
    var tiSize = '2.5';

    var logoSizeF ='12';
    var logoLocateW = '12';

    var colorTxtTop1='';
    var colorTxtTop2='';
    var colorTxtTop3='';
    var colorTxtMiddle='';
    var colorTxtBottom='';

    if (coverId === "1") {
      im1 = obj.pic41.replace("open?", "uc?export=view&");
      im2 = obj.pic42.replace("open?", "uc?export=view&");
      im3 = obj.pic43.replace("open?", "uc?export=view&");
      
      im_top = "";
      app_top_bg = "app_top_bg1";
      app_header = "app_header1";
      app_top1 = "app_top11";
      app_top2 = "app_top12";
      app_sub = "app_sub1";
      app_profile = "app_profile1";
      app_story1 = "app_story11";
      app_story2 = "app_story12";
      app_story3 = "app_story13";
      app_middle_bg = "app_middle_bg1";
      im_middle = "";
      app_bottom_bg = "app_bottom_bg1";
      im_bottom = "";

      app_name = "app_name1";
      app_title = "app_title1";
      app_dept = "app_dept1";
      app_school = "app_school1";
      app_sso1 = "app_sso11";
      app_sso2 = "app_sso12";
      app_sso3 = "app_sso13";

      top = "3.0";
      ti = "10.0";
      sub = "20.0";

      colorTxtTop1='rgb(255, 255, 255)';
      colorTxtTop2='rgb(255, 255, 255)';
      colorTxtTop3='rgb(94, 84, 3)';
      colorTxtMiddle='rgb(89, 76, 0)';
      colorTxtBottom='rgb(89, 76, 0)';
      if (coverColor === "1") {
        background = cover11;
      }
      if (coverColor === "2") {
        background = cover12;
      }
      if (coverColor === "3") {
        background = cover13;
      }
      if (coverColor === "4") {
        background = cover14;
      }
      if (coverColor === "5") {
        background = cover15;
      }
      if (coverColor === "6") {
        background = cover16;
      }
    }
    if (coverId === "2") {
      im1 = obj.pic41.replace("open?", "uc?export=view&");
      im2 = obj.pic42.replace("open?", "uc?export=view&");
      im3 = obj.pic43.replace("open?", "uc?export=view&");

      im_top = im_top21;
      app_top_bg = "app_top_bg2";
      app_header = "app_header2";
      app_top1 = "app_top21";
      app_top2 = "app_top22";
      app_sub = "app_sub2";
      app_profile = "app_profile2";
      app_story1 = "app_story21";
      app_story2 = "app_story22";
      app_story3 = "app_story23";
      app_middle_bg = "app_middle_bg2";
      im_middle = im_middle21;
      app_bottom_bg = "app_bottom_bg2";
      im_bottom = im_bottom21;

      app_name = "app_name2";
      app_title = "app_title2";
      app_dept = "app_dept2";
      app_school = "app_school2";
      app_sso1 = "app_sso21";
      app_sso2 = "app_sso22";
      app_sso3 = "app_sso23";

      top = "2.5";
      ti = "9.5";
      sub = "18.5";
      if (coverColor === "1") {
        background = cover21;
        colorTxtTop1='rgb(37, 72, 112)';
      colorTxtTop2='rgb(19, 77, 143)';
      colorTxtTop3='rgb(255, 255, 255)';
      colorTxtMiddle='rgb(255, 255, 255)';
      colorTxtBottom='rgb(19, 77, 143)';
      }
      if (coverColor === "2") {
        background = cover22;
        colorTxtTop1='rgb(6, 64, 7)';
      colorTxtTop2='rgb(8, 99, 9)';
      colorTxtTop3='rgb(255, 255, 255)';
      colorTxtMiddle='rgb(255, 255, 255)';
      colorTxtBottom='rgb(8, 99, 9)';
      }
      if (coverColor === "3") {
        background = cover23;
        colorTxtTop1='rgb(112, 63, 20)';
      colorTxtTop2='rgb(143, 67, 0)';
      colorTxtTop3='rgb(255, 255, 255)';
      colorTxtMiddle='rgb(255, 255, 255)';
      colorTxtBottom='rgb(143, 67, 0)';
      }
      if (coverColor === "4") {
        background = cover24;
        colorTxtTop1='rgb(105, 4, 49)';
      colorTxtTop2='rgb(168, 19, 86)';
      colorTxtTop3='rgb(255, 255, 255)';
      colorTxtMiddle='rgb(255, 255, 255)';
      colorTxtBottom='rgb(140, 14, 71)';
      }
      if (coverColor === "5") {
        background = cover25;
        colorTxtTop1='rgb(140, 14, 26)';
      colorTxtTop2='rgb(181, 7, 24)';
      colorTxtTop3='rgb(255, 255, 255)';
      colorTxtMiddle='rgb(255, 255, 255)';
      colorTxtBottom='rgb(181, 7, 24)';
      }
      if (coverColor === "6") {
        background = cover26;
        colorTxtTop1='rgb(89, 27, 110)';
      colorTxtTop2='rgb(114, 20, 145)';
      colorTxtTop3='rgb(255, 255, 255)';
      colorTxtMiddle='rgb(255, 255, 255)';
      colorTxtBottom='rgb(78, 0, 105)';
      }
    }
    if (coverId === "3") {
      im1 = obj.pic21.replace("open?", "uc?export=view&");
      im2 = "";
      im3 = "";

      app_top_bg = "app_top_bg3";
      app_header = "app_header3";
      app_top2 = "app_top32";
      app_sub = "app_sub3";
      app_profile = "app_profile3";
      app_story1 = "app_story31";
      app_story2 = "app_story32";
      app_story3 = "app_story33";
      app_middle_bg = "app_middle_bg3";
      app_bottom_bg = "app_bottom_bg3";
      im_bottom = "";

      app_name = "app_name3";
      app_title = "app_title3";
      app_dept = "app_dept3";
      app_school = "app_school3";
      app_sso1 = "app_sso31";
      app_sso2 = "app_sso32";
      app_sso3 = "app_sso33";

      top = "4";
      ti = "10";
      sub = "20";

      if(this.props.fontTop.length > 33){

        app_top1 = "app_top31_2line";
      } else {
        app_top1 = "app_top31_1line";
      }
      if(this.props.fontTitle.length > 30){

        app_top2 = "app_top32_2line";
      } else {
        app_top2 = "app_top32_1line";
      }
      if(this.props.fontSub.length > 40){

        app_sub = "app_sub3_2line";
      } else {
        app_sub = "app_sub3_1line";
      }


      if (coverColor === "1") {
        background = cover31;

        im_top = im_top31;
      im_middle = im_middle31;
      colorTxtTop1='rgb(255, 255, 255)';
    colorTxtTop2='rgb(255, 255, 255)';
    colorTxtTop3='rgb(0, 41, 99)';
    colorTxtMiddle='rgb(255, 255, 255)';
    colorTxtBottom='rgb(0, 41, 99)';
      }
      if (coverColor === "2") {
        background = cover32;
        im_top = im_top32;
      im_middle = im_middle32;
      colorTxtTop1='rgb(255, 255, 255)';
    colorTxtTop2='rgb(255, 255, 255)';
    colorTxtTop3='rgb(3, 64, 0)';
    colorTxtMiddle='rgb(255, 255, 255)';
    colorTxtBottom='rgb(3, 64, 0)';
      }
      if (coverColor === "3") {
        background = cover33;
        im_top = im_top33;
      im_middle = im_middle33;
      colorTxtTop1='rgb(255, 255, 255)';
    colorTxtTop2='rgb(255, 255, 255)';
    colorTxtTop3='rgb(107, 55, 0)';
    colorTxtMiddle='rgb(255, 255, 255)';
    colorTxtBottom='rgb(107, 55, 0)';
      }
      if (coverColor === "4") {
        background = cover34;
        im_top = im_top34;
      im_middle = im_middle34;
      colorTxtTop1='rgb(255, 255, 255)';
    colorTxtTop2='rgb(255, 255, 255)';
    colorTxtTop3='rgb(97, 0, 78)';
    colorTxtMiddle='rgb(255, 255, 255)';
    colorTxtBottom='rgb(97, 0, 78)';
      }
      if (coverColor === "5") {
        background = cover35;
        im_top = im_top35;
      im_middle = im_middle35;
      colorTxtTop1='rgb(255, 255, 255)';
    colorTxtTop2='rgb(255, 255, 255)';
    colorTxtTop3='rgb(105, 0, 16)';
    colorTxtMiddle='rgb(255, 255, 255)';
    colorTxtBottom='rgb(105, 0, 16)';
      }
      if (coverColor === "6") {
        background = cover36;
        im_top = im_top36;
      im_middle = im_middle36;
      colorTxtTop1='rgb(255, 255, 255)';
    colorTxtTop2='rgb(255, 255, 255)';
    colorTxtTop3='rgb(44, 0, 69)';
    colorTxtMiddle='rgb(255, 255, 255)';
    colorTxtBottom='rgb(44, 0, 69)';
      }
    }
    this.props.updateLocation(top,ti,sub,topSize,tiSize,subSize, logoSizeF,logoLocateW);
    console.log("size: " ,this.props.logoSize);

    if (this.props.preview) {
      return (
      <div
        className="page"
        style={{
          fontFamily: this.props.font,
          backgroundImage: `url(${background})`,
        }}
      >
        <img className={app_top_bg} alt="" src={im_top} />
        <img src={logo} className={app_logo} alt="" style={{ marginLeft: this.props.logoLocate ,width: this.props.logoSize , height: this.props.logoSize }} />
        <img src={logo_} className={app_logo_alt} alt="" style={{ display: this.props.showSSO ,width: this.props.logoSize , height: this.props.logoSize }}/>
        
        <div className={app_header}>
            <p className={app_top1} style={{ color: colorTxtTop1, fontSize: fontTopSize , marginTop: this.props.fontTopLocate }}>
              {this.props.fontTop}
            </p>
            <p className={app_top2} style={{color: colorTxtTop2,  fontSize: fontTitleSize , marginTop: this.props.fontTitleLocate  }}>
              {this.props.fontTitle}
            </p>
            <p className={app_sub} style={{ color: colorTxtTop3, fontSize: fontSubSize , marginTop: this.props.fontSubLocate  }}>
              {this.props.fontSub}
            </p>
          </div>
    
      </div>
    );} else {
      return (
        <div
          className="page"
          style={{
            fontFamily: this.props.font,
            backgroundImage: `url(${background})`
          }}
        >
          
  
          <img className={app_story1} alt="" src={im1} />
  
          <img className={app_profile} alt="" src={profile} />
  
          <img className={app_story2} alt="" src={im2} />
          <img className={app_story3} alt="" src={im3} />
  
  
  
          <img className={app_top_bg} alt="" src={im_top} />
          <img src={logo} className={app_logo} alt="" style={{ marginLeft: this.props.logoLocate ,width: this.props.logoSize , height: this.props.logoSize }} />
          <img src={logo_} className={app_logo_alt} alt="" style={{ display: this.props.showSSO ,width: this.props.logoSize , height: this.props.logoSize }}/>
          <img className={app_middle_bg} alt="" src={im_middle} />
          <img className={app_bottom_bg} alt="" src={im_bottom} />
  
          <div className={app_header}>
            <p className={app_top1} style={{ color: colorTxtTop1, fontSize: fontTopSize , marginTop: this.props.fontTopLocate }}>
              {this.props.fontTop}
            </p>
            <p className={app_top2} style={{color: colorTxtTop2,  fontSize: fontTitleSize , marginTop: this.props.fontTitleLocate  }}>
              {this.props.fontTitle}
            </p>
            <p className={app_sub} style={{ color: colorTxtTop3, fontSize: fontSubSize , marginTop: this.props.fontSubLocate  }}>
              {this.props.fontSub}
            </p>
          </div>
          <p className={app_name} style={{ color: colorTxtMiddle}}>{name}</p>
          <p className={app_title} style={{ color: colorTxtMiddle}}>{title}</p>
          <p className={app_dept} style={{ color: colorTxtMiddle}}>{dept}</p>
          <p className={app_school} style={{ color: colorTxtBottom}}>{school}</p>
          <p className={app_sso1} style={{ color: colorTxtBottom}}>{sso1}</p>
          <p className={app_sso2} style={{ color: colorTxtBottom}}>{sso2}</p>
          <p className={app_sso3} style={{ color: colorTxtBottom}}>{sso3}</p>
        </div>
      );
    }
  }
}
