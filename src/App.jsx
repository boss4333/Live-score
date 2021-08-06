import React, { useEffect, useState } from "react"; 
import "./App.css";
 
 import MyCard from './MyCard';
import { getMatches } from "./api/Api";
import { Container, Grid, Typography } from "@material-ui/core";

const App = (props)=> {
  const [matches, setMatches] = useState([]);
 
  useEffect(() => {
    getMatches()
      .then((data) => {
        console.log(matches);
        setMatches(data.matches);
      })
      .catch((error) => {});
  }, []);

  return (            
    <div className="App">           
    
      <Container>
        <Grid container>
          <Grid sm="2"></Grid>
          <Grid sm="8">
          {matches.map((match) => (
              <>
       <MyCard match_name= {props.mtype} key={match.series_id} match={match} />       
       
          </>  ))}
          </Grid>
        </Grid>
      </Container>
    </div>     
  );
}
export default App;