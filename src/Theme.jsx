import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

// Colours:
// https://coolors.co/000000-800020-660019-666666-d6d6d6-ffffff
const pallets = {

  // ### Dark Themes ###
  // https://coolors.co/141414-a30029-660019-666666-d6d6d6
  crimson_red: {
    colors: {
      primary: "#141414",
      secondary: "#A30029",
      tertiary: "#660019",
      quinary: "#666666",
      text: "#D6D6D6",
    },
    materials: {
      primaryMaterial: {
        color: "#141414",
        roughness: 0.5,
        metalness: 0.2,
      },
      secondaryMaterial: {
        color: "#A30029",
        roughness: 0.8,
        metalness: 0,
        emissiveIntensity: 0,
        emissive: "#A30029",
      },
    },
  },

  // https://coolors.co/141414-6021c0-46188c-666666-d6d6d6
  purple: {
    colors: {
      primary: "#141414",
      secondary: "#6021c0",
      tertiary: "#46188c",
      quinary: "#666666",
      text: "#d6d6d6",
    },
    materials: {
      primaryMaterial: {
        color: "#141414",
        roughness: 0.5,
        metalness: 0.2,
      },
      secondaryMaterial: {
        color: "#6622CC",
        roughness: 0.8,
        metalness: 0,
        emissiveIntensity: 0.1,
        emissive: "#A755C2",
      },
    },
  },

  // ### Light Themes ###
  // https://coolors.co/fdffff-b10f2e-570000-280000-de7c5a
  madder: {
    colors: {
      primary: "#fdffff",
      secondary: "#b10f2e",
      tertiary: "#570000",
      quinary: "#280000",
      text: "#280000",
    },
    materials: {
      primaryMaterial: {
        color: "#fdffff",
        roughness: 0.5,
        metalness: 0.2,
      },
      secondaryMaterial: {
        color: "#b10f2e",
        roughness: 0.8,
        metalness: 0,
        emissiveIntensity: 0.1,
        emissive: "#b10f2e",
      },
    },
  },
};
 
export const selectedPallet = pallets.purple

// Other tweakables
export const shadow = "0px 4px 6px rgba(0, 0, 0, 0.1)"
export const bevelRadius = "20px"
export const pagePadding = "4%"
export const contentMargin = "4%"

const theme = createTheme({
  palette: {
    primary: {
      main: selectedPallet.colors.primary,
    },
    secondary: {
      main: selectedPallet.colors.secondary,
    },
    text: {
      primary: selectedPallet.colors.text,
      secondary: selectedPallet.colors.text,
      disabled: selectedPallet.colors.text,
      hint: selectedPallet.colors.text,
    },
  },
  typography: {
    fontFamily:
      "'Poppins', 'Inter', 'Fira Sans', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: "3.5rem",
      color: selectedPallet.colors.text,
    },
    h2: {
      fontWeight: 600,
      fontSize: "2rem",
      color: selectedPallet.colors.text,
    },
    h3: {
      fontWeight: 500,
      fontSize: "1.75rem",
      color: selectedPallet.colors.text,
    },
    body1: {
      fontWeight: 400,
      fontSize: "1rem",
      color: selectedPallet.colors.text,
    },
    body2: {
      fontWeight: 400,
      fontSize: "0.875rem",
      color: selectedPallet.colors.text,
    },
  },
  // Style override for Background gradient
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage:
            `linear-gradient(to top right, ${selectedPallet.colors.secondary}, ${selectedPallet.colors.primary}, ${selectedPallet.colors.primary})`,
          minHeight: "100vh",
          // Add this to customize scrollbar
          '&::-webkit-scrollbar': {
            width: '10px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: selectedPallet.colors.tertiary,
            borderRadius: '10px',
          },
          '&::-webkit-scrollbar-track-piece': {
            background: selectedPallet.colors.primary,
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: selectedPallet.colors.secondary,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: selectedPallet.colors.text,
          transition: 'background-color 0.3s ease-in', // 0.3s is the duration of the transition. You can adjust this value.
          '&:hover': {
            backgroundColor: selectedPallet.colors.tertiary, // Use whatever color you want for the hover color
          },
        },
      },
    },
  },
});

const ThemeWrapper = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box padding={pagePadding}>
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default ThemeWrapper;
