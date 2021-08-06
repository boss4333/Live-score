import React, { useState } from "react";
import web from "./img/vs2.jpg";
import { makeStyles } from "@material-ui/core/styles";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
 Button,
 Card,
 CardActions,
 CardContent,
 Dialog,
 DialogActions,
 DialogContent,
 DialogContentText,
 DialogTitle,
 Grid,
 Typography,
} from "@material-ui/core";
import { getMatchDetail } from "./api/Api";

const MyCard = (props) => {
 const [detail, setDatail] = useState({});
 const [open, setOpen] = useState(false);

 const getMatchCard = () => (
   <div>
     <Card
       style={{
          
         // background: match.matchStarted ? "#e2e2e2" : "",
         marginTop: 15,
       }}
     >
       <CardContent>
         <Grid container justify="center" alignItems="center" spacing={4}>
           <Grid item>
             <Typography variant="h5">{props.match["team-1"]}</Typography>
           </Grid>
           <Grid item>
             <img
               style={{ width: 110 }}
               src={web}
                alt=""
             />
           </Grid>
           <Grid item>
             <Typography variant="h5">{ props.match["team-2"]}</Typography>
           </Grid>
         </Grid>
       </CardContent>

       <CardActions>
         <Grid container justify="center">
           <button type="button" className="btn btn-success" 
             onClick={() => {
               showDetailBtnClicked(props.match["unique_id"]);
             }}
            //  variant="contained"
            //  color="secondary"
                   >
             Show Detail
           </button>
           <button type="button" className="btn btn-info"
             style={{ marginLeft: 15 ,fontSize:18}}
            //  variant="contained"
            //  color="primary"
           >
             Starting time {new Date(props.match.dateTimeGMT).toLocaleString()}
           </button>
         </Grid>
       </CardActions>
     </Card>
   </div>
 );

 const showDetailBtnClicked = (id) => {
   getMatchDetail(id)
     .then((data) => {
       console.log(data);
       setDatail(data);
       handleClickOpen();
     })
     .catch((error) => {
       console.log(error);
     });
 };

 const handleClickOpen = () => {
   setOpen(true);
 };

 const handleClose = () => {
   setOpen(false);
 };

 return (
   <>
     {props.match.type ==  props.match_name ? getMatchCard() : ""}
     {/* {getMatchCard()} */}
     <Dialog
       open={open}
       onClose={handleClose}
       aria-labelledby="alert-dialog-title"
       aria-describedby="alert-dialog-description"
     >
       <DialogTitle id="alert-dialog-title">{"Match Detail..."}</DialogTitle>
       <DialogContent>
         <DialogContentText id="alert-dialog-description">
           <Typography>{detail.stat}</Typography>
           <Typography>
             Match
             <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
               {detail.matchStarted ? "Started" : "Still not started"}
             </span>
           </Typography>
           <Typography>
             Score
             <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
               {" "}
               {detail.score}
             </span>
           </Typography>
         </DialogContentText>
       </DialogContent>
       <DialogActions>
         <Button onClick={handleClose} color="primary" autoFocus>
           Close
         </Button>
       </DialogActions>
     </Dialog>
   </>
 );
};

export default MyCard;