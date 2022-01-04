import { createStyles, Theme, withWidth } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
export const HeaderStyle = makeStyles((theme: Theme) =>
  createStyles({
    // root: {
    //   margin: "48px 0px",
    //   padding: "0px 24px",
    //   width: "100%",
    //   [theme.breakpoints.down(760)]: {
    //     margin: "48px 0px 48px 0px",
    //     padding: "0px 16px 0px 16px",
    //   },
    // },
    root: {
      marginTop: "0px",
      borderBottom: "none",
      width: "100%",
      position: "relative",
    },
    container: {
      position: "relative",
      display: "flex",
      flexFlow: "row no wrap",
      alignItems: "center",
      justifyContent: "space-between",
      height: "100%",
      backgroundColor: "transparent",
      width: "1064px",
      marginLeft: "auto !important",
      marginRight: "auto !important",
    },
    headermenu_container: {
      margin: "0px",
      borderRadius: "0px",
      border: "none",
      boxShadow: "none",
      display: "flex",
    },
    logo: {
      cursor: "pointer",
      width: "36px",
      height: "36px",
      marginTop: "2px",
    },
  })
);

export const StyledHeaderBtn = withStyles({
  root: {
    fontWeight: 400,
    color: "#676370",
    borderRadius: "6px",
    textTransform: "uppercase",
    fontFamily: "Roboto",
    marginLeft: "left",
    padding: "0px",
    fontSize: "13px",
    lineHeight: "18px",
    "&:hover": {
      color: "#fff",
      cursor: "pointer",
    },
    "&.Mui-disabled": {
      fontWeight: 700,
      color: "#ffffff",
      cursor: "pointer",
    },
  },
})(Button);
