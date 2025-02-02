import {
  Button,
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  Container,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchIcon from "@mui/icons-material/Search";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("bride");

  // Profile data for bride and groom
  const profiles = {
    bride: [
      {
        name: "Sita Kumari",
        age: 25,
        location: "Delhi",
        education: "M.A. in English Literature",
        image:
          "https://cdn.pixabay.com/photo/2019/04/27/14/00/indian-4160039_1280.jpg",
      },
      {
        name: "Anjali Mehra",
        age: 28,
        location: "Mumbai",
        education: "B.A. in Fine Arts",
        image:
          "https://cdn.pixabay.com/photo/2023/12/19/11/16/indian-bride-8457513_1280.jpg",
      },
      {
        name: "Sita Kumari",
        age: 25,
        location: "Delhi",
        education: "M.A. in English Literature",
        image:
          "https://cdn.pixabay.com/photo/2019/04/27/14/00/indian-4160039_1280.jpg",
      },
      {
        name: "Anjali Mehra",
        age: 28,
        location: "Mumbai",
        education: "B.A. in Fine Arts",
        image:
          "https://cdn.pixabay.com/photo/2023/12/19/11/16/indian-bride-8457513_1280.jpg",
      },
      {
        name: "Sita Kumari",
        age: 25,
        location: "Delhi",
        education: "M.A. in English Literature",
        image:
          "https://cdn.pixabay.com/photo/2019/04/27/14/00/indian-4160039_1280.jpg",
      },
      {
        name: "Anjali Mehra",
        age: 28,
        location: "Mumbai",
        education: "B.A. in Fine Arts",
        image:
          "https://cdn.pixabay.com/photo/2023/12/19/11/16/indian-bride-8457513_1280.jpg",
      },
      {
        name: "Sita Kumari",
        age: 25,
        location: "Delhi",
        education: "M.A. in English Literature",
        image:
          "https://cdn.pixabay.com/photo/2019/04/27/14/00/indian-4160039_1280.jpg",
      },
      {
        name: "Anjali Mehra",
        age: 28,
        location: "Mumbai",
        education: "B.A. in Fine Arts",
        image:
          "https://cdn.pixabay.com/photo/2023/12/19/11/16/indian-bride-8457513_1280.jpg",
      },
      // Add more bride profiles as needed
    ],
    groom: [
      {
        name: "Ravi Kumar",
        age: 28,
        location: "Mumbai",
        education: "B.Tech in Computer Science",
        image:
          "https://cdn.pixabay.com/photo/2021/01/19/03/16/wedding-5929956_1280.jpg",
      },
      {
        name: "Ravi Kumar",
        age: 28,
        location: "Mumbai",
        education: "B.Tech in Computer Science",
        image:
          "https://cdn.pixabay.com/photo/2025/01/11/09/08/wedding-9325558_1280.jpg",
      },
      {
        name: "Ravi Kumar",
        age: 28,
        location: "Mumbai",
        education: "B.Tech in Computer Science",
        image:
          "https://cdn.pixabay.com/photo/2021/01/19/03/16/wedding-5929956_1280.jpg",
      },
      {
        name: "Ravi Kumar",
        age: 28,
        location: "Mumbai",
        education: "B.Tech in Computer Science",
        image:
          "https://cdn.pixabay.com/photo/2025/01/11/09/08/wedding-9325558_1280.jpg",
      },
      {
        name: "Ravi Kumar",
        age: 28,
        location: "Mumbai",
        education: "B.Tech in Computer Science",
        image:
          "https://cdn.pixabay.com/photo/2021/01/19/03/16/wedding-5929956_1280.jpg",
      },
      {
        name: "Ravi Kumar",
        age: 28,
        location: "Mumbai",
        education: "B.Tech in Computer Science",
        image:
          "https://cdn.pixabay.com/photo/2025/01/11/09/08/wedding-9325558_1280.jpg",
      },
      {
        name: "Ravi Kumar",
        age: 28,
        location: "Mumbai",
        education: "B.Tech in Computer Science",
        image:
          "https://cdn.pixabay.com/photo/2021/01/19/03/16/wedding-5929956_1280.jpg",
      },
      {
        name: "Ravi Kumar",
        age: 28,
        location: "Mumbai",
        education: "B.Tech in Computer Science",
        image:
          "https://cdn.pixabay.com/photo/2025/01/11/09/08/wedding-9325558_1280.jpg",
      },
    ],
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Navbar />

      <div className="relative w-full h-[70vh] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <img
          src="https://cdn.pixabay.com/photo/2021/04/05/19/55/wedding-6154519_1280.jpg"
          alt="Matrimony Banner"
          className="object-cover w-full h-full opacity-40"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl font-extrabold mb-4">
            Find Your Perfect Match
          </h1>
          <p className="text-xl mb-6">
            Connecting hearts, creating lifelong bonds
          </p>
          <Button variant="contained" color="secondary" size="large">
            <Link
              to="/signup"
              style={{ color: "white", textDecoration: "none" }}
            >
              Join Now
            </Link>
          </Button>
        </div>
      </div>

      {/* Search Section */}
      <div className="flex justify-center py-12 bg-gray-50">
        <Container>
          <div className="flex justify-center items-center space-x-4">
            <TextField
              label="Search for Matches"
              variant="outlined"
              className="w-full max-w-md"
              sx={{
                borderRadius: "30px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "30px",
                },
              }}
              InputProps={{
                endAdornment: (
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ borderRadius: "51%" }}
                  >
                    <SearchIcon />
                  </Button>
                ),
              }}
            />
          </div>
        </Container>
      </div>

      {/* Featured Matches Section */}
      <Container className="py-16">
        <h2 className="text-4xl font-semibold text-gray-800 text-center mb-10">
          Featured Matches
        </h2>
        <div className="flex justify-center mb-6 gap-8">
          <Button
            onClick={() => handleCategoryChange("bride")}
            variant={selectedCategory === "bride" ? "contained" : "outlined"}
            color={selectedCategory === "bride" ? "secondary" : "default"}
            className={`transition-all duration-300 px-8 py-4 rounded-md text-xl ${
              selectedCategory === "bride"
                ? "bg-indigo-600 text-white shadow-lg"
                : "border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white"
            }`}
          >
            Bride
          </Button>
          <Button
            onClick={() => handleCategoryChange("groom")}
            variant={selectedCategory === "groom" ? "contained" : "outlined"}
            color={selectedCategory === "groom" ? "secondary" : "default"}
            className={`transition-all duration-300 px-8 py-4 rounded-md text-xl ${
              selectedCategory === "groom"
                ? "bg-indigo-600 text-white shadow-lg"
                : "border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white"
            }`}
          >
            Groom
          </Button>
        </div>

        {/* Profile Cards */}
        <Grid container spacing={4} justifyContent="center">
          {profiles[selectedCategory].map((profile, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  maxWidth: 345,
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  borderRadius: "15px",
                  "&:hover": {
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-80 object-cover rounded-t-lg"
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    className="font-semibold text-gray-800"
                  >
                    {profile.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Age: {profile.age} | Location: {profile.location} |
                    Education: {profile.education}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Testimonials Section */}
      <div className="bg-gray-200 py-10 mt-16">
        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          What Our Users Say
        </h3>
        <Box className="flex justify-center gap-8">
          <div className="text-center max-w-sm">
            <p className="text-gray-600 mb-4">
              "Matrimony made my search for a soulmate so much easier! The
              platform connected me with amazing matches."
            </p>
            <p className="font-semibold text-gray-800">Aarti Sharma</p>
          </div>
          <div className="text-center max-w-sm">
            <p className="text-gray-600 mb-4">
              "I found my perfect match here! The process was simple, and the
              profile suggestions were spot on."
            </p>
            <p className="font-semibold text-gray-800">Anand Verma</p>
          </div>
        </Box>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-500 text-white py-10 mt-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-black">
            Ready to Find Your Perfect Match?
          </h2>
          <p className="text-lg mb-6 text-black">
            Join Matrimony today and start your journey towards love and
            companionship.
          </p>
          <Link to="/signup">
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{ textTransform: "none" }}
            >
              Sign Up Now
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
