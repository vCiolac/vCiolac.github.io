import React, { useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import JsIcon from '../../assets/icons/js-icon.svg';
import htmlIcon from '../../assets/icons/html-icon.svg';
import cssIcon from '../../assets/icons/css-icon.svg';
import reactIcon from '../../assets/icons/react-icon.svg';
import { AppBar, Avatar, Box, Button, Toolbar, useMediaQuery } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './styles.css';
import { LoaderContext } from '../../context/LoaderContext';
import { LayoutContext } from '../../context/LayoutContext';
import ViewListIcon from '@mui/icons-material/ViewList';

interface CustomButtonProps {
  to: string;
  isActive: boolean;
  children: React.ReactNode;
  sx: React.CSSProperties;
  variant: 'outlined' | 'contained';
  color: 'inherit' | 'primary' | 'secondary' | 'default';
}

function CustomButton({ to, isActive, children, sx, variant, color }: CustomButtonProps) {
  const navigate = useNavigate();
  const { darkMode } = useContext(LayoutContext);

  return (
    <Button
      onClick={() => { navigate(to) }}
      to={to}
      sx={{
        ...sx,
        textTransform: 'lowercase',
        borderBottom: '0',
        borderLeft: '0',
        borderRight: '0',
        borderColor: '#0047AB',
        paddingBottom: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        color: !darkMode ? '#fff' : '#000',
        ...(isActive ? {
          backgroundColor: !darkMode ? '#1E1E1E' : "#707070",
        } : {}),
      }}
      variant={variant}
      color={color}
    >
      {children}
    </Button>
  );
}

function TopMenu({ showContent, toggleContent }: { showContent: boolean; toggleContent: () => void }) {
  const { isLoading } = useContext(LoaderContext);
  const { darkMode } = useContext(LayoutContext);
  const isMobile = useMediaQuery('(max-width: 600px)');
  const [buttons, setButtons] = useState([
    {
      id: 'home',
      to: '/',
      label: 'Home.js',
      icon: JsIcon,
    },
    {
      id: 'about',
      to: '/about',
      label: 'About.html',
      icon: htmlIcon,
    },
    {
      id: 'projects',
      to: '/projects',
      label: 'Projects.css',
      icon: cssIcon,
    },
    {
      id: 'skills',
      to: '/skills',
      label: 'Skills.tsx',
      icon: reactIcon,
    },
  ]);

  const location = useLocation();

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const reorderedButtons = [...buttons];
    const [movedButton] = reorderedButtons.splice(result.source.index, 1);
    reorderedButtons.splice(result.destination.index, 0, movedButton);

    setButtons(reorderedButtons);
  };

  if (isLoading) return null;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky"
        sx={{ boxShadow: 'none', backgroundColor: !darkMode ? "#121212" : "#C0C0C0", backgroundImage: 'none' }} enableColorOnDark>
        <Toolbar sx={!isMobile ? {minHeight: { xs: 0, sm: 0 }, paddingLeft: { xs: 0, sm: 0 }, display: '' } : {display: 'grid'}}>
          {!showContent && (
          <Button
            onClick={toggleContent}
          >
            <ViewListIcon />
          </Button>
          )}
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="menu" direction="horizontal">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: isMobile ? (showContent ? 'nowrap' : 'wrap') : 'nowrap',
                    justifyContent: 'center',
                  }}
                >
                  {buttons.map((button, index) => (
                    <Draggable
                      key={button.id}
                      draggableId={button.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <CustomButton
                            to={button.to}
                            isActive={location.pathname === button.to}
                            sx={{
                              borderColor: '#0047AB',
                            }}
                            variant="outlined"
                            color='inherit'
                          >
                            <Avatar
                              sx={{ width: 20, height: 20, ml: -1, mr: 1 }}
                              alt={`${button.id}.js`}
                              src={button.icon}
                            />
                            {button.label}
                          </CustomButton>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TopMenu;
