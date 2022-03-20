import {
  Card,
  Grid,
  TextField,
  Typography,
  CardContent,
  Button
} from "@mui/material";

const Form = () => {
  return (
    <>
      <Typography variant="h3">React App</Typography>
      <Card
        sx={{
          maxWidth: "450px",
          margin: "0 auto",
          padding: "10px 5px"
        }}
      >
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Service Now
          </Typography>
          <Typography
            variant="body2"
            component="p"
            color="textSecondary"
            textAlign="start"
            gutterBottom
          >
            Please fill the form and our team will be get to you in 24 hrs.
          </Typography>
          <Grid container spacing={1}>
            <Grid xs={12} sm={6} item>
              <TextField variant="outlined" label="First Name" fullWidth />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField variant="outlined" label="Last Name" fullWidth />
            </Grid>
            <Grid xs={12} item>
              <TextField
                variant="outlined"
                label="Email"
                type="email"
                fullWidth
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                variant="outlined"
                label="Phone Number"
                type="number"
                fullWidth
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                variant="outlined"
                label="Descriptioin"
                multiline
                rows={4}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};
export default Form;
