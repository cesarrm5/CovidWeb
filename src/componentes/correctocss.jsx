import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
        margin: theme.spacing(2),
        text: "center",
        width: "100%",
        height: "30px",
        display: "flex",
        align_items: "center",
        justify_content: "center",
        
      },
  },
  paper: {
    backgroundColor: '#2f4050',
    border: '2px solid #90d44c',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    color: "#90d44c",
    justifyContent: 'center',
    ss: {
        border: "1px solid",
        padding: "0 1rem",
        margin: "1rem",
    },
  },
}));
export default useStyles