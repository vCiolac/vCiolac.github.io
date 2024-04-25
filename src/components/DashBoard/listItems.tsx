import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SearchIcon from '@mui/icons-material/Search';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import GitHubIcon from '@mui/icons-material/GitHub';
import PestControlIcon from '@mui/icons-material/PestControl';
import { Link } from 'react-router-dom';
import styles from './listItems.module.css';
import SettingsIcon from '@mui/icons-material/Settings';
import { Menu, MenuItem } from '@mui/material';
import { LayoutContext } from '../../context/LayoutContext';

function ConfigMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const context = React.useContext(LayoutContext);
  const { showCodeContent, toggleCodeContent, darkMode, toogleDarkMode } = context;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChoise = (param: string) => {
    switch (param) {
      case 'code':
        toggleCodeContent();
        break;
      case 'dark':
        toogleDarkMode();
        break;
    }
    handleClose();
  };
  return (
    <React.Fragment>
      <ListItemButton component="button" onClick={handleClick}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Configuration" />
      </ListItemButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => handleChoise('code')}>
          {showCodeContent ? 'Visualização em Código' : 'Visualização normal'}
        </MenuItem>
        <MenuItem onClick={() => handleChoise('dark')}>
          {darkMode ? 'Dark mode' : 'Light mode'}
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

function CustomLink({ to, icon, text }: { to: string, icon: JSX.Element, text: string }) {
  return (
    <Link className={styles.noLink} to={to} style={{ textDecoration: 'none' }}>
      <ListItemButton>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </Link>
  );
}

function CustomBlankLink({ to, icon, text }: { to: string, icon: JSX.Element, text: string }) {
  const context = React.useContext(LayoutContext);
  const { darkMode } = context;
  const linkStyle = {
    textDecoration: 'none',
    color: !darkMode ? 'white' : 'rgba(0, 0, 0, 0.87)',
  };
  return (
    <a href={to} target="_blank" rel="noopener noreferrer" style={linkStyle}>
      <ListItemButton>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </a>
  );
}
export const mainListItems = (
  <React.Fragment>
    <CustomLink to="/projects" icon={<SearchIcon />} text="Projects" />
    <CustomLink to="/skills" icon={<AccountTreeIcon />} text="Skills" />
    <CustomLink to="/certifications" icon={<PestControlIcon />} text="Certifications" />
    <CustomBlankLink to="https://linkedin.com/in/vciolac" icon={<LinkedInIcon />} text="LinkedIn" />
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <CustomLink to="/about" icon={<AccountCircleIcon />} text="About me" />
    <CustomBlankLink to="https://github.com/vciolac" icon={<GitHubIcon />} text="GitHub" />
    <ConfigMenu />
  </React.Fragment>
);
