import React, { Component } from "react";
import "./App.css";
import chrome_ic from "./chome_ic.png";
import forms from "./forms.jpg";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import SelectReact, { components } from "react-select";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";

import Button from "@material-ui/core/Button";
import Loader from "react-loader";

import AccountCircle from "@material-ui/icons/MailOutline";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import Switch from "@material-ui/core/Switch";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Cover from "./components/cover";
import { purple , yellow, red, green} from "@material-ui/core/colors";
import { Table } from "@material-ui/core";
import SimpleModal from "./components/SimpleModal";
import { createMuiTheme } from '@material-ui/core/styles';

const blues = createMuiTheme({
  palette: {
      primary: { main: '#e91e63' },
      secondary: { main: '#0277bd' },

  }
});

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

const PurpleSwitch = withStyles({
  switchBase: {
    color: purple[300],
    "&$checked": {
      color: purple[500],
    },
    "&$checked + $track": {
      backgroundColor: purple[500],
    },
  },
  checked: {},
  track: {},
})(Switch);


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function valueLabelFormat(value) {
  const [coefficient, exponent] = value
    .toExponential()
    .split("e")
    .map((item) => Number(item));
  return `${Math.round(coefficient)}e^${exponent}`;
}

var selectedOption = "";
var fontOption = "";
var title;
var options = [];
var ready = false;
var generator = 1;
var item = [];
var font = "Sarabun";
var font_top_size = "";
var font_title_size = "";
var font_sub_size = "";
var fontTop = "";
var fontTitle = "";
var fontSub = "";
var fontTopSize = "";
var fontTitleSize = "";
var fontSubSize = "";
var fontTopLocate = "";
var fontTitleLocate = "";
var fontSubLocate = "";
var fontTopLocateF = "";
var fontTitleLocateF = "";
var fontSubLocateF = "";
var logoLocate = "";
var logoLocateW = "";
var logoSize = "";
var logoSizeF = "";
var coverColor = "1";
var state = 0;
var optionX = "none";
var optionZ = "none";
var showList = "none";
var showSSO = "none";
var showPrint = "none";
var showSetting = "none";
var showStart = "block";
export default class Render extends Component {
  state = {
    selectedOption: null,
    options: [],
    title,
    ready: true,
    item: [],
    font,
    font_top_size,
    font_title_size,
    font_sub_size,
    fontTop,
    fontSub,
    fontTitle,
    fontTopSize,
    fontSubSize,
    fontTitleSize,
    coverColor,
    fontTopLocate,
    fontTitleLocate,
    fontSubLocate,
    optionX: "none",
    optionZ: "none",
    showList: "none",
    logoLocateW,
    logoLocate,
    logoSize,
    logoSizeF,
    showPrint: "none",
    showSetting: "none",
    showStart: "block",
    isOpen: false,
    checkedA: false,
    checkedB: false,
    checkedC: false,
  };

  updateLocation(top, title, sub, topSize, titleSize, subSize, eF, eW) {
    console.log("state: ", state);
    if (state === 0) {
      fontTopLocateF = top;
      fontTitleLocateF = title;
      fontSubLocateF = sub;
      fontTopSize = topSize;
      fontTitleSize = titleSize;
      fontSubSize = subSize;
      logoLocateW = eW;
      logoSizeF = eF;
      state = 1;
    }
  }

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("cliked");
  };

  handleChangeSwitch = (event) => {
    if (event.target.checked) {
      this.setState({ optionZ: "inline" });
    } else {
      this.setState({ optionZ: "none" });
    }
    this.setState({ checkedA: !this.state.checkedA});
  };

  handleChangeSwitchLogo = (event) => {
    if (event.target.checked) {
      this.setState({ showSSO: "inline", logoLocate: "12vh" });
    } else {
      this.setState({ showSSO: "none", logoLocate: "1vh" });
    }
  };

  handleLogoLeft = (event) => {
    this.initFontsChange();
    if (state === 2) {
      if (parseFloat(logoLocateW) > 2 && parseFloat(logoLocateW) < 20) {
        logoLocateW = parseFloat(logoLocateW) - 0.5;
        this.setState({ logoLocateW: logoLocateW - 0.5 });
        this.setState({
          logoLocate: this.state.logoLocateW.toString().concat("vh"),
        });
      }
    } else {
    }
  };
  handleLogoRight = (event) => {
    this.initFontsChange();
    if (state === 2) {
      if (parseFloat(logoLocateW) > 0 && parseFloat(logoLocateW) < 19) {
        logoLocateW = parseFloat(logoLocateW) + 0.5;
        this.setState({ logoLocateW: logoLocateW + 0.5 });
        this.setState({
          logoLocate: this.state.logoLocateW.toString().concat("vh"),
        });
      }
    } else {
    }
  };

  handleLogoSizeDown = (event) => {
    this.initFontsChange();
    console.log("logo size F: ", logoSizeF);
    if (state === 2) {
      if (parseFloat(logoSizeF) > 9 && parseFloat(logoSizeF) < 17) {
        logoSizeF = parseFloat(logoSizeF) - 0.5;
        this.setState({ logoSizeF: logoSizeF - 0.5 });
        this.setState({
          logoSize: this.state.logoSizeF.toString().concat("vh"),
        });
      }
    } else {
    }
    console.log("logo size: ", this.state.logoSize);
  };
  handleLogoSizeUp = (event) => {
    this.initFontsChange();
    if (state === 2) {
      if (parseFloat(logoSizeF) > 8 && parseFloat(logoSizeF) < 16) {
        logoSizeF = parseFloat(logoSizeF) + 0.5;
        this.setState({ logoSizeF: logoSizeF + 0.5 });
        this.setState({
          logoSize: this.state.logoSizeF.toString().concat("vh"),
        });
      }
    } else {
    }
  };

  handleChange = (selectedOption) => {
    this.setState(
      {
        selectedOption,
        fontTop: selectedOption.value.topic11,
        fontTitle: selectedOption.value.topic12,
        fontSub: selectedOption.value.sub11,
        showPrint: "block",
      },
      () => console.log(`Option selected:`, this.state.selectedOption.value)
    );
    this.optionX = "inline";
  };

  handleFontChange = (event) => {
    console.log(event.target.value);
    this.setState({ font: event.target.value });
  };

  initFontsChange() {
    if (state === 1) {
      this.setState({ logoLocateW: parseFloat(logoLocateW) + 0.1 });
      this.setState({ logoLocate: logoLocateW.toString().concat("vh") });

      this.setState({ logoSizeF: parseFloat(logoSizeF) + 0.1 });
      this.setState({ logoSize: logoSizeF.toString().concat("vh") });

      this.setState({ fontTopSize: parseFloat(fontTopSize) + 0.1 });
      this.setState({ font_top_size: fontTopSize.toString().concat("vh") });
      this.setState({ fontTitleSize: parseFloat(fontTitleSize) + 0.1 });
      this.setState({
        font_title_size: fontTitleSize.toString().concat("vh"),
      });
      this.setState({ fontSubSize: parseFloat(fontSubSize) + 0.1 });
      this.setState({ font_sub_size: fontSubSize.toString().concat("vh") });

      this.setState({ fontTopLocateF: parseFloat(fontTopLocateF) - 0.5 });
      this.setState({ fontTopLocate: fontTopLocateF.toString().concat("vh") });
      this.setState({ fontTitleLocateF: parseFloat(fontTitleLocateF) - 0.5 });
      this.setState({
        fontTitleLocate: fontTitleLocateF.toString().concat("vh"),
      });
      this.setState({ fontSubLocateF: parseFloat(fontSubLocateF) - 0.5 });
      this.setState({ fontSubLocate: fontSubLocateF.toString().concat("vh") });

      state = 2;
    }
  }
  handleTopSizeChangeUp = (event) => {
    this.initFontsChange();
    if (state === 2) {
      if (parseFloat(fontTopSize) > 1 && parseFloat(fontTopSize) < 3) {
        fontTopSize = parseFloat(fontTopSize) + 0.1;
        this.setState({ fontTopSize: this.state.fontTopSize + 0.1 });
        this.setState({
          font_top_size: fontTopSize.toString().concat("vh"),
        });
      }
    } else {
    }
  };
  handleTopSizeChangeDown = (event) => {
    this.initFontsChange();
    if (state === 2) {
      if (parseFloat(fontTopSize) > 2 && parseFloat(fontTopSize) < 4) {
        fontTopSize = parseFloat(fontTopSize) - 0.1;
        this.setState({ fontTopSize: this.state.fontTopSize - 0.1 });
        this.setState({
          font_top_size: fontTopSize.toString().concat("vh"),
        });
      }
    } else {
    }
  };
  handleTitleSizeChangeUp = (event) => {
    this.initFontsChange();
    if (state === 2) {
      if (parseFloat(fontTitleSize) > 2 && parseFloat(fontTitleSize) < 4) {
        fontTitleSize = parseFloat(fontTitleSize) + 0.1;
        this.setState({ fontTitleSize: this.state.fontTitleSize + 0.1 });
        this.setState({
          font_title_size: fontTitleSize.toString().concat("vh"),
        });
      }
    } else {
    }
  };
  handleTitleSizeChangeDown = (event) => {
    this.initFontsChange();
    if (state === 2) {
      if (parseFloat(fontTitleSize) > 3 && parseFloat(fontTitleSize) < 5) {
        fontTitleSize = parseFloat(fontTitleSize) - 0.1;
        this.setState({ fontTitleSize: this.state.fontTitleSize - 0.1 });
        this.setState({
          font_title_size: fontTitleSize.toString().concat("vh"),
        });
      }
    } else {
    }
  };
  handleSubSizeChangeUp = (event) => {
    this.initFontsChange();
    if (state === 2) {
      if (parseFloat(fontSubSize) > 0 && parseFloat(fontSubSize) < 5) {
        fontSubSize = parseFloat(fontSubSize) + 0.1;
        this.setState({ fontSubSize: this.state.fontSubSize + 0.1 });
        this.setState({
          font_sub_size: fontSubSize.toString().concat("vh"),
        });
      }
    } else {
    }
  };
  handleSubSizeChangeDown = (event) => {
    this.initFontsChange();
    if (state === 2) {
      if (parseFloat(fontSubSize) > 2 && parseFloat(fontSubSize) < 6) {
        fontSubSize = parseFloat(fontSubSize) - 0.1;
        this.setState({ fontSubSize: this.state.fontSubSize - 0.1 });
        this.setState({
          font_sub_size: fontSubSize.toString().concat("vh"),
        });
      }
    } else {
    }
  };

  handleTopLocateChangeUp = (event) => {
    this.initFontsChange();
    if (state === 2) {
      if (parseFloat(fontTopLocateF) > 2 && parseFloat(fontTopLocateF) <= 11) {
        fontTopLocateF = parseFloat(fontTopLocateF) - 0.5;
        this.setState({ fontTopLocateF: this.state.fontTopLocateF - 0.5 });
        this.setState({
          fontTopLocate: fontTopLocateF.toString().concat("vh"),
        });
      }
    } else {
    }
    console.log("fontTopLocateF: ", fontTopLocateF);
    console.log("fontTopLocate: ", this.state.fontTopLocate);
  };
  handleTopLocateChangeDown = (event) => {
    if (state <= 1) {
      this.initFontsChange();
    } else {
      if (this.state.fontTopLocateF >= 0 && this.state.fontTopLocateF < 10) {
        fontTopLocateF = parseFloat(fontTopLocateF) + 0.5;
        this.setState({ fontTopLocateF: this.state.fontTopLocateF + 0.5 });
        this.setState({
          fontTopLocate: fontTopLocateF.toString().concat("vh"),
        });
      }
    }
    console.log("fontTopLocate: ", this.state.fontTopLocate);
  };

  handleTitleLocateChangeUp = (event) => {
    if (state <= 1) {
      this.initFontsChange();
    } else {
      if (
        parseFloat(fontTitleLocateF) > 5 &&
        parseFloat(fontTitleLocateF) <= 16
      ) {
        fontTitleLocateF = parseFloat(fontTitleLocateF) - 0.5;
        this.setState({ fontTitleLocateF: this.state.fontTitleLocateF - 0.5 });
        this.setState({
          fontTitleLocate: fontTitleLocateF.toString().concat("vh"),
        });
      }
    }
    console.log("fontTitleLocate: ", this.state.fontTitleLocate);
  };
  handleTitleLocateChangeDown = (event) => {
    if (state <= 1) {
      this.initFontsChange();
    } else {
      if (
        this.state.fontTitleLocateF >= 4 &&
        this.state.fontTitleLocateF < 15
      ) {
        fontTitleLocateF = parseFloat(fontTitleLocateF) + 0.5;
        this.setState({ fontTitleLocateF: this.state.fontTitleLocateF + 0.5 });
        this.setState({
          fontTitleLocate: fontTitleLocateF.toString().concat("vh"),
        });
      }
    }
    console.log("fontTitleLocate: ", this.state.fontTitleLocate);
  };

  handleSubLocateChangeUp = (event) => {
    if (state <= 1) {
      this.initFontsChange();
    } else {
      if (parseFloat(fontSubLocateF) > 15 && parseFloat(fontSubLocateF) <= 31) {
        fontSubLocateF = parseFloat(fontSubLocateF) - 0.5;
        this.setState({ fontSubLocateF: this.state.fontSubLocateF - 0.5 });
        this.setState({
          fontSubLocate: fontSubLocateF.toString().concat("vh"),
        });
      }
    }
    console.log("fontSubLocate: ", this.state.fontSubLocate);
  };
  handleSubLocateChangeDown = (event) => {
    if (state <= 1) {
      this.initFontsChange();
    } else {
      if (this.state.fontSubLocateF >= 14 && this.state.fontSubLocateF < 30) {
        fontSubLocateF = parseFloat(fontSubLocateF) + 0.5;
        this.setState({ fontSubLocateF: this.state.fontSubLocateF + 0.5 });
        this.setState({
          fontSubLocate: fontSubLocateF.toString().concat("vh"),
        });
      }
    }
    console.log("fontTitleLocate: ", this.state.fontSubLocate);
  };

  mouseEnter() {
    console.log("mouse enter");
    this.setState({ showStart: "block", showPrint: "block", showStart: "block" });
  }

  mouseLeave() {
    console.log("mouse leave");
    this.setState({ showStart: "block", showPrint: "block", showStart: "block" });
  }

  handleChangeTitle(event) {
    this.setState({ fontTitle: event.target.value });
  }
  handleChangeTopic(event) {
    this.setState({ fontTop: event.target.value });
  }
  handleChangeSub(event) {
    this.setState({ fontSub: event.target.value });
  }
  handleCoverColorChange = (event) => {
    console.log(event.target.value);
    this.setState({ coverColor: event.target.value });
  };

  handlePrint(event) {
    if (this.state.selectedOption != null) {
      //window.print();
      this.setState({ showSetting: "block" });
    } else {
      alert("อย่าลืมทำข้อ 2 ก่อนปริ้นปกนะครับ");
    }
  }
  handlePrintC(event) {
    if (this.state.selectedOption != null) {
      //window.print();
      this.setState({ showSetting: "none" });
    } else {
      alert("อย่าลืมทำข้อ 2 ก่อนปริ้นปกนะครับ");
    }
  }
  handlePrintP() {
    if (this.state.selectedOption != null) {
      this.setState(
        { showStart: "none", showSetting: "none", showPrint: "none", optionZ: "none" , checkedA: false},
        () => window.print()
      );
    }
  }

  handleChangeSearch(event) {
    //this.props.refresh();

    this.setState({
      ready: false,
    });
    var a = [];
    options.map((obj) => {
      if (event.target.value === obj.label) {
        a.push(obj);
      } else {
      }
    });
    this.setState({ options: a, ready: true, selectedOption: null });
    if (this.state.options.length > 0) {
      this.showList = "inline";
    }else{
      this.showList = "none";
      this.optionX = "none";
    }
  }

  render() {
    const classes = makeStyles((theme) => ({
      margin: {
        margin: theme.spacing(1),
      },
    }));

    const { data } = this.props.data;
    options = data.map((obj, index) => {
      var label = obj.email;
      return {
        label: label,
        value: obj,
        id: obj.Timestamp,
        cover: obj.type,
        key: index,
      };
    });
    if (this.state.options.length > 0) {
      this.showList = "inline";
    }else{
      this.showList = "none";
      this.optionX ="none";
      
    }
    if (this.state.ready) {
      return (
        <div>
          <div className="page1"
            style={{
              marginBottom: "10px",
              marginTop: "10px",
              display: this.state.showStart,
              margin: "5vh"
            }}
          >
            <TableContainer>
              <Table
                className={classes.table}
                aria-label="simple table"
                size="small"
              >
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </TableContainer>

            <h3>ทำตามขั้นตอนดังต่อไปนี้ให้ครบทุกขั้นตอนครับ</h3>
            <p style={{ paddingLeft: "20px", fontSize: "2vh" }}>
              หมายเหตุ: รองรับการใช้งานด้วย{" "}
              <img
                src={chrome_ic}
                style={{ wiidth: "20px", height: "20px" }}
              ></img>
              บนคอมพิวเตอร์เท่านั้น
            </p>
            <h4>
              1. กรอกข้อมูลลง{" "}
              <a href="https://forms.gle/tDa7XCtBiAgsgZpK7" target="_blank">
                Google Forms&ensp;
                <img
                  src={forms}
                  style={{
                    wiidth: "20px",
                    height: "20px",
                    borderRadius: "50%",
                  }}
                ></img>
              </a> (จำเป็นต้องลงชื่อเข้าใช้ด้วย GMAIL สำหรับการอัพโหลดรูปภาพ)
            </h4>
            <h4>
              2. เมื่อกรอกฟอร์มเสร็จแล้ว พิมพ์อีเมลตนเองลงในช่องด้านล่าง
              (ตัวอย่าง: anurak.k@phukhieo.ac.th)
            </h4>
            <div style={{ display: "inline-block" }}>
              <FormControl
                fullWidth
                className={classes.margin}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-amount">
                  กรอกอีเมล
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount1"
                  value={this.state.title}
                  onChange={this.handleChangeSearch.bind(this)}
                  startAdornment={<AccountCircle />}
                  labelWidth={60}
                />
              </FormControl>
</div>
              <div style={{ display: this.showList }}>
                <p>เลือกข้อมูลรายการด้านล่าง แล้วภาพหน้าปกจะแสดงด้านบนสุด</p>
                <SelectReact
                  value={selectedOption.label}
                  onChange={this.handleChange}
                  options={this.state.options}
                />
              </div>
             
                  <TableContainer style={{ display: this.optionX, marginTop: "10px" }}>
                    <Table
                      className={classes.table}
                      aria-label="simple table"
                      size="small"
                    >
                      <TableHead>
                        <TableRow>
                          <TableCell >
                            <FormControl
                              className={classes.margin}
                            >
                              <InputLabel htmlFor="demo-customized-select-native">
                                สีปก
                              </InputLabel>
                              <NativeSelect
                                id="demo-customized-select-native1"
                                value={this.state.coverColor}
                                onChange={this.handleCoverColorChange}
                                input={<BootstrapInput />}
                              >
                                <option value="1">สีฟ้า</option>
                                <option value="2">สีเขียว</option>
                                <option value="3">สีส้ม</option>
                                <option value="4">สีชมพู</option>
                                <option value="5">สีแดง</option>
                                <option value="6">สีม่วง</option>
                              </NativeSelect>
                            </FormControl>
                          </TableCell>
                          <TableCell>
                            <FormControl
                              className={classes.margin}
                            >
                              <InputLabel htmlFor="demo-customized-select-native">
                                แบบตัวอักษร
                              </InputLabel>
                              <NativeSelect
                                id="demo-customized-select-native2"
                                value={this.state.font}
                                onChange={this.handleFontChange}
                                input={<BootstrapInput />}
                              >
                                <option value="Sarabun">Sarabun</option>
                                <option value="Kanit">Kanit</option>
                                <option value="Chakra_Petch">
                                  Chakra_Petch
                                </option>
                                <option value="K2D">K2D</option>
                                <option value="Prompt">Prompt</option>
                              </NativeSelect>
                            </FormControl>
                          </TableCell>
                          <TableCell>
                            <h4>
                              ตั้งค่าเพิ่มเติม
                              <PurpleSwitch
                                size="large"
                                checked={this.state.checkedA}
                                onChange={this.handleChangeSwitch}
                                name="checkedA"
                              />
                            </h4>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                    </Table>
                  </TableContainer>
                
            
              <TableContainer style={{ display: this.state.optionZ, marginTop: "20px" }}>
                <Table
                  className={classes.table}
                  aria-label="simple table"
                  size="small"
                >
                  <TableHead>

                  <TableRow>
                      <TableCell align="center" colSpan={7}>
                        <p> </p>
                        <FormControl
                          fullWidth
                          className={classes.margin}
                          variant="outlined"
                        >
                          <InputLabel htmlFor="outlined-adornment-amount">
                            ข้อความหัวเรื่อง
                          </InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-amount2"
                            value={this.state.fontTop}
                            onChange={this.handleChangeTopic.bind(this)}
                            labelWidth={60}
                          />
                        </FormControl>
                        <p> </p>
                        <FormControl
                          fullWidth
                          className={classes.margin}
                          variant="outlined"
                        >
                          <InputLabel htmlFor="outlined-adornment-amount">
                            ข้อความหัวรอง
                          </InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-amount3"
                            value={this.state.fontTitle}
                            onChange={this.handleChangeTitle.bind(this)}
                            labelWidth={60}
                          />
                        </FormControl>
                        <p> </p>
                        <FormControl
                          fullWidth
                          className={classes.margin}
                          variant="outlined"
                        >
                          <InputLabel htmlFor="outlined-adornment-amount">
                            ข้อความหัวข้อ
                          </InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-amount4"
                            value={this.state.fontSub}
                            onChange={this.handleChangeSub.bind(this)}
                            labelWidth={60}
                          />
                        </FormControl>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center" colSpan={6}>
                        ขนาดและตำแหน่ง
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left">หัวเรื่อง</TableCell>
                      <TableCell align="left">หัวรอง</TableCell>
                      <TableCell align="left">หัวข้อ</TableCell>
                      <TableCell align="left">ใช้ สพฐ.</TableCell>
                      <TableCell align="left">โลโก้ รร.</TableCell>
                      <TableCell align="left">โลโก้ทั้งหมด</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <ButtonGroup
                          orientation="vertical"
                          aria-label="vertical contained primary button group"
                          variant="contained"
                          size="small"
                          color="primary"
                        >
                          <Button
                            onClick={this.handleTopSizeChangeUp}
                            value="up"
                          >
                            +
                          </Button>
                          <Button
                            onClick={this.handleTopSizeChangeDown}
                            value="down"
                          >
                            -
                          </Button>
                        </ButtonGroup>
                        <ButtonGroup
                          orientation="vertical"
                          aria-label="vertical contained primary button group"
                          variant="contained"
                          size="small"
                          color="primary"
                        >
                          <Button
                            onClick={this.handleTopLocateChangeUp}
                            value="up"
                          >
                            ขึ้น
                          </Button>
                          <Button
                            onClick={this.handleTopLocateChangeDown}
                            value="down"
                          >
                            ลง
                          </Button>
                        </ButtonGroup>
                      </TableCell>
                      <TableCell>
                        <ButtonGroup
                          orientation="vertical"
                          aria-label="vertical contained primary button group"
                          variant="contained"
                          size="small"
                          color="primary"
                        >
                          <Button
                            onClick={this.handleTitleSizeChangeUp}
                            value="up"
                          >
                            +
                          </Button>
                          <Button
                            onClick={this.handleTitleSizeChangeDown}
                            value="down"
                          >
                            -
                          </Button>
                        </ButtonGroup>
                        <ButtonGroup
                          orientation="vertical"
                          aria-label="vertical contained primary button group"
                          variant="contained"
                          size="small"
                          color="primary"
                        >
                          <Button onClick={this.handleTitleLocateChangeUp}>
                            ขึ้น
                          </Button>
                          <Button onClick={this.handleTitleLocateChangeDown}>
                            ลง
                          </Button>
                        </ButtonGroup>
                      </TableCell>
                      <TableCell>
                        <ButtonGroup
                          orientation="vertical"
                          aria-label="vertical contained primary button group"
                          variant="contained"
                          size="small"
                          color="primary"
                        >
                          <Button
                            onClick={this.handleSubSizeChangeUp}
                            value="up"
                          >
                            +
                          </Button>
                          <Button
                            onClick={this.handleSubSizeChangeDown}
                            value="down"
                          >
                            -
                          </Button>
                        </ButtonGroup>
                        <ButtonGroup
                          orientation="vertical"
                          aria-label="vertical contained primary button group"
                          variant="contained"
                          size="small"
                          color="primary"
                        >
                          <Button onClick={this.handleSubLocateChangeUp}>
                            ขึ้น
                          </Button>
                          <Button onClick={this.handleSubLocateChangeDown}>
                            ลง
                          </Button>
                        </ButtonGroup>
                      </TableCell>
                      <TableCell>
                        <PurpleSwitch
                          size="large"
                          checked={state.checkedAA}
                          onChange={this.handleChangeSwitchLogo}
                          name="checkedA"
                        />
                      </TableCell>
                      <TableCell>
                        <ButtonGroup
                          orientation="horizontal"
                          aria-label="vertical contained primary button group"
                          variant="contained"
                          size="small"
                          color="primary"
                        >
                          <Button onClick={this.handleLogoLeft}>ซ้าย</Button>
                          <Button onClick={this.handleLogoRight}>ขวา</Button>
                        </ButtonGroup>
                      </TableCell>
                      <TableCell>
                        <ButtonGroup
                          orientation="vertical"
                          aria-label="vertical contained primary button group"
                          variant="contained"
                          size="small"
                          color="primary"
                        >
                          <Button onClick={this.handleLogoSizeUp}>+</Button>
                          <Button onClick={this.handleLogoSizeDown}>-</Button>
                        </ButtonGroup>
                      </TableCell>
                    </TableRow>
                    
                  </TableBody>
                </Table>
              </TableContainer>
              <TableContainer style={{ display: this.optionX, marginTop: "10px" }}>
                <Table>
                  <TableBody>
                  <TableRow>
                          <TableCell align="left">
                            <SimpleModal
                            ></SimpleModal>
                          </TableCell>
                          <TableCell align="right">
                            <Button
                              id="print"
                              variant="contained"
                              color="primary"
                              onClick={this.handlePrintP.bind(this)}
                              style={{ paddingLeft: "20px" }}

            onMouseEnter={this.mouseEnter.bind(this)}
            onMouseLeave={this.mouseLeave.bind(this)}
                            >
                              พิมพ์หน้าปก
                            </Button>
                          </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
          </div>
          {this.state &&
            this.state.selectedOption &&
            this.state.selectedOption.value != null && (
              <Cover 
                selectedOption={this.state.selectedOption.value}
                font={this.state.font}
                fontTopSize={this.state.font_top_size}
                fontTitleSize={this.state.font_title_size}
                fontSubSize={this.state.font_sub_size}
                fontTop={this.state.fontTop}
                fontTitle={this.state.fontTitle}
                fontSub={this.state.fontSub}
                fontTopLocate={this.state.fontTopLocate}
                fontTitleLocate={this.state.fontTitleLocate}
                fontSubLocate={this.state.fontSubLocate}
                changeFont={this.onFontChange}
                coverColor={this.state.coverColor}
                updateLocation={this.updateLocation}
                logoSize={this.state.logoSize}
                logoLocate={this.state.logoLocate}
                showSSO={this.state.showSSO}
                preview={false}
                onMouseEnter={this.mouseEnter.bind(this)}
                onMouseLeave={this.mouseLeave.bind(this)}
              ></Cover>
            )}
        </div>
      );
    } else {
      return <Loader></Loader>;
    }
  }
}
