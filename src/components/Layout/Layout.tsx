import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { mainListItems, secondaryListItems } from '../DashBoard/listItems';
import Footer from '../Footer/Footer';
import TopMenu from '../TopMenu/TopMenu';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { LayoutContext } from '../../context/LayoutContext';


export default function Layout({ children }: any) {
  const [open, setOpen] = React.useState(false);
  const { darkMode } = React.useContext(LayoutContext);

  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        position: 'fixed',
        whiteSpace: 'nowrap',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          backgroundColor: 'transparent',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(7),
          },
        }),
      },
    }),
  );

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
    typography: {
      fontFamily: 'Droid Serif',
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
    typography: {
      fontFamily: 'Droid Serif',
    },
  });

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <ThemeProvider theme={!darkMode ? darkTheme : lightTheme}>
      <Box sx={{ display: 'flex' }} ref={ref}>
        <CssBaseline />
        <Drawer variant="permanent" open={open} sx={{ width: !open ? 56 : 185 }}>
          <Divider />
          <List component="nav" >
            <ListItemButton onClick={toggleDrawer}>
              <ListItemIcon>
                <ContentCopyIcon />
              </ListItemIcon>
              <ListItemText primary="Explorer" />
            </ListItemButton>
            {mainListItems}
          </List>
          <List component="nav" sx={{ marginTop: 'auto', marginBottom: 1 }}>
            {secondaryListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[500]
                : theme.palette.grey[900],
            flexGrow: 1,
            minHeight: '100vh',
          }}
        >
          <TopMenu />
          <Container sx={{ ml: 0, mb: 1.5, paddingLeft: { xs: 0, sm: 0 } }}>
            {children}
          </Container>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

