import React, { useState } from "react";
import { Button, Card, CardContent, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Grid, Box, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

const countries = ["India", "USA", "Canada", "Australia", "UK"];
const religions = ["Hindu", "Muslim", "Christian", "Sikh"];
const communities = ["Brahmin", "Kshatriya", "Vaishya", "Other"];

const SearchCard = ({ handleClose }) => {
  const [seeking, setSeeking] = useState("");
  const [ageFrom, setAgeFrom] = useState("");
  const [ageTo, setAgeTo] = useState("");
  const [country, setCountry] = useState("");
  const [religion, setReligion] = useState("");
  const [community, setCommunity] = useState("");

  const handleSearch = () => {
    console.log("Search Criteria:", {
      seeking,
      ageFrom,
      ageTo,
      country,
      religion,
      community,
    });
    handleClose(); // Close modal after search
  };

  return (
    <Dialog open={true} onClose={handleClose} className="">
      <DialogTitle>Search Criteria</DialogTitle>
      <DialogContent>
        <Card className="p-6">
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Seek Profile
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth >
                  <InputLabel>Seeking</InputLabel>
                  <Select value={seeking} onChange={(e) => setSeeking(e.target.value)}>
                    <MenuItem value="Bride">Bride</MenuItem>
                    <MenuItem value="Groom">Groom</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  label="Age From"
                  type="number"
                  fullWidth
                  value={ageFrom}
                  onChange={(e) => setAgeFrom(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  label="Age To"
                  type="number"
                  fullWidth
                  value={ageTo}
                  onChange={(e) => setAgeTo(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel>Country</InputLabel>
                  <Select value={country} onChange={(e) => setCountry(e.target.value)}>
                    {countries.map((country, index) => (
                      <MenuItem key={index} value={country}>
                        {country}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel>Religion</InputLabel>
                  <Select value={religion} onChange={(e) => setReligion(e.target.value)}>
                    {religions.map((religion, index) => (
                      <MenuItem key={index} value={religion}>
                        {religion}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel>Community</InputLabel>
                  <Select value={community} onChange={(e) => setCommunity(e.target.value)}>
                    {communities.map((community, index) => (
                      <MenuItem key={index} value={community}>
                        {community}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSearch} color="primary">
          Search
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SearchCard;
