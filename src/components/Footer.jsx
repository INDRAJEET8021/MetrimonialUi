import React from "react";
import { Container, Typography, Link, Grid, Box } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white py-12">
      <Container maxWidth="lg">
        <Grid container spacing={4} className="mb-8">
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="font-semibold mb-4 text-white">
              About Us
            </Typography>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-white hover:text-gray-300"
                  sx={{
                    "&:hover": {
                      color: "#D1D5DB", 
                    },
                  }}
                >
                  Who We Are
                </Link>
              </li>

              <li>
                <Link
                  href="/our-story"
                  className="text-white hover:text-gray-300"
                  sx={{
                    "&:hover": {
                      color: "#D1D5DB", 
                    },
                  }}
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-white hover:text-gray-300"
                  sx={{
                    "&:hover": {
                      color: "#D1D5DB", 
                    },
                  }}
                >
                  Success Stories
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="font-semibold mb-4 text-white">
              Services
            </Typography>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/matches"
                  className="text-white hover:text-gray-300"
                  sx={{
                    "&:hover": {
                      color: "#D1D5DB", 
                    },
                  }}
                >
                  Find Matches
                </Link>
              </li>
              <li>
                <Link
                  href="/premium"
                  className="text-white hover:text-gray-300"
                  sx={{
                    "&:hover": {
                      color: "#D1D5DB", 
                    },
                  }}
                >
                  Premium Membership
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-white hover:text-gray-300"
                  sx={{
                    "&:hover": {
                      color: "#D1D5DB", 
                    },
                  }}
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="font-semibold mb-4 text-white">
              Quick Links
            </Typography>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/faq"
                  className="text-white hover:text-gray-300"
                  sx={{
                    "&:hover": {
                      color: "#D1D5DB", 
                    },
                  }}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white hover:text-gray-300"
                  sx={{
                    "&:hover": {
                      color: "#D1D5DB", 
                    },
                  }}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-white hover:text-gray-300"
                  sx={{
                    "&:hover": {
                      color: "#D1D5DB", 
                    },
                  }}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="font-semibold mb-4 text-white">
              Contact Info
            </Typography>
            <ul className="space-y-2">
              <li className="text-white">Email: support@matrimony.com</li>
              <li className="text-white">Phone: +91 6207436721</li>
              <li className="text-white">
                Address: 123 Love Avenue, Delhi, India
              </li>
            </ul>
          </Grid>
        </Grid>

        {/* Social Media Section */}
        <Box className="flex justify-center space-x-6 mb-8">
          <Link
            href="#"
            target="_blank"
            className="text-white hover:text-red-300 transition-colors duration-300"
            sx={{
              "&:hover": {
                color: "#EF4444", 
              },
            }}
          >
            <Facebook fontSize="large" />
          </Link>
          <Link
            href="#"
            target="_blank"
            className="text-white hover:text-blue-400 transition-colors duration-300"
            sx={{
              "&:hover": {
                color: "#3B82F6", 
              },
            }}
          >
            <Twitter fontSize="large" />
          </Link>
          <Link
            href="#"
            target="_blank"
            className="text-white hover:text-pink-500 transition-colors duration-300"
            sx={{
              "&:hover": {
                color: "#EC4899", 
              },
            }}
          >
            <Instagram fontSize="large" />
          </Link>
          <Link
            href="#"
            target="_blank"
            className="text-white hover:text-blue-700 transition-colors duration-300"
            sx={{
              "&:hover": {
                color: "#1D4ED8", 
              },
            }}
          >
            <LinkedIn fontSize="large" />
          </Link>
        </Box>

        {/* Copyright */}
        <Typography
          variant="body2"
          className="text-center text-white opacity-70"
        >
          &copy; {new Date().getFullYear()} Matrimony.com. All Rights Reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
