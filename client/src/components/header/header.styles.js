import { makeStyles } from "@material-ui/core/styles";

export const useHeaderStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    },
    ul: {
      margin: 0,
      padding: 0
    },
    li: {
      listStyle: "none"
    }
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: "wrap"
  },
  sidebar: theme.mixins.toolbar,
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5)
  },
  userWelcome: {
    fontSize: `1rem`,
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: `0.00938em`
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  fullList: {
    width: "auto"
  },
  list: {
    width: 250
  }
}));
