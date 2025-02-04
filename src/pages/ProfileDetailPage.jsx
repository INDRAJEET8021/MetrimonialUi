import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Typography,
  Avatar,
  Grid,
  Box,
  Divider,
  IconButton,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Slider from "react-slick";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// Dummy data for profiles and recommendations
const profiles = [
  {
    name: "Anjali Mehara",
    age: 28,
    bio: "Loves traveling, exploring new cultures, and reading books. Looking for a partner who enjoys outdoor activities and cultural experiences.",
    photos: [
      "https://images.pexels.com/photos/725463/pexels-photo-725463.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://cdn.pixabay.com/photo/2023/12/19/11/16/indian-bride-8457513_1280.jpg",
      "https://images.pexels.com/photos/2100868/pexels-photo-2100868.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    interests: ["Traveling", "Books", "Cooking", "Photography"],
  },
  {
    name: "Jane Smith",
    age: 26,
    bio: "Enjoys cooking, painting, and spending weekends outdoors. Looking for someone to share life’s little moments and create memories together.",
    photos: [
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x400",
    ],
    interests: ["Cooking", "Art", "Travel", "Yoga"],
  },
];

const recommendations = [
  {
    name: "Shiyali Kumari",
    age: 24,
    photo:
      "https://images.pexels.com/photos/2808556/pexels-photo-2808556.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Komal Gupta",
    age: 30,
    photo: "https://images.pexels.com/photos/2119095/pexels-photo-2119095.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Divya Mishra",
    age: 29,
    photo: "https://images.pexels.com/photos/936554/pexels-photo-936554.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const ProfileDetailPage = () => {
  const [selectedProfile, setSelectedProfile] = useState(profiles[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Slider settings for recommended matches
  const recommendationSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <ArrowForwardIcon />,
    prevArrow: <ArrowBackIcon />,
  };

  // Handle the image navigation for profile
  const handleImageChange = (direction) => {
    if (direction === "next") {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedProfile.photos.length);
    } else if (direction === "prev") {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + selectedProfile.photos.length) % selectedProfile.photos.length
      );
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-normal min-h-screen bg-gray-50 ">
        <div className="w-full max-w-7xl flex flex-wrap p-8 rounded-lg shadow-md bg-white space-x-6">
          {/* Left Side: Selected Profile Details */}
          <Box className="flex-2 w-full md:w-2/3 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-center mb-6">Profile Details</h2>

            {/* Profile Info Card */}
            <Card className="mb-6 p-6 shadow-lg">
              <Grid container spacing={3}>
                <Grid item xs={12} sm={5}>
                  {/* Profile Images with Next/Previous Buttons */}
                  <div style={{ position: "relative" }}>
                    <img
                      src={selectedProfile.photos[currentImageIndex]}
                      alt={`Profile Photo ${currentImageIndex + 1}`}
                      style={{
                        width: "100%",
                        height: "250px",
                        borderRadius: "10px",
                        objectFit: "cover",
                      }}
                    />
                    <IconButton
                      onClick={() => handleImageChange("prev")}
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "10px",
                        transform: "translateY(-50%)",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                      }}
                    >
                      <KeyboardArrowLeftIcon style={{ color: "white" }} />
                    </IconButton>
                    <IconButton
                      onClick={() => handleImageChange("next")}
                      style={{
                        position: "absolute",
                        top: "50%",
                        right: "10px",
                        transform: "translateY(-50%)",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                      }}
                    >
                      <ChevronRightIcon style={{ color: "white" }} />
                    </IconButton>
                  </div>
                </Grid>
                <Grid item xs={12} sm={7}>
                  <Typography variant="h5" className="font-bold">
                    {selectedProfile.name}
                  </Typography>
                  <Typography variant="h6" color="textSecondary">
                    Age: {selectedProfile.age}
                  </Typography>
                  <Divider className="my-2" />
                  <Typography variant="body1">{selectedProfile.bio}</Typography>
                  <Divider className="my-2" />

                  {/* Display Interests */}
                  <Typography variant="body2" className="font-semibold mt-4">
                    Interests:
                  </Typography>
                  <ul className="list-disc pl-5">
                    {selectedProfile.interests.map((interest, index) => (
                      <li key={index}>{interest}</li>
                    ))}
                  </ul>

                  {/* Buttons to interact */}
                  <div className=" flex flex-row items-center mt-4 gap-3">
                    <Button variant="contained" color="primary" className="mr-2">
                      Send Request
                    </Button>
                    <Button variant="outlined" color="secondary">
                      Add to Favorites
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </Card>
          </Box>

          {/* Right Side: Recommended Matches (Slider) */}
          <Box className="flex-1 w-full md:w-1/3 space-y-4">
            <h3 className="text-xl font-semibold mb-4">Recommended Matches</h3>

            {/* Recommended Matches Slider */}
            <Slider {...recommendationSettings}>
              {recommendations.map((rec, index) => (
                <Card key={index} className="p-4">
                  <CardContent>
                    <Avatar
                      alt={rec.name}
                      src={rec.photo}
                      sx={{
                        width: 80,
                        height: 80,
                        margin: "0 auto",
                        borderRadius: "10px",
                      }}
                    />
                    <Typography variant="body2" className="mt-2 text-center">
                      {rec.name}, Age: {rec.age}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Slider>
          </Box>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfileDetailPage 
  
