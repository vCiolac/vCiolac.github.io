import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import JsIcon from '../../assets/icons/js-icon.svg';
import htmlIcon from '../../assets/icons/html-icon.svg';
import cssIcon from '../../assets/icons/css-icon.svg';
import reactIcon from '../../assets/icons/react-icon.svg';
import { AppBar, Avatar, Box, Button, IconButton, Toolbar, useMediaQuery } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './styles.css';
import { LoaderContext } from '../../context/LoaderContext';
import { LayoutContext } from '../../context/LayoutContext';
import ViewListIcon from '@mui/icons-material/ViewList';
import CloseIcon from '@mui/icons-material/Close';

interface CustomButtonProps {
  to: string;
  isActive: boolean;
  children: React.ReactNode;
  sx: React.CSSProperties;
  variant: 'outlined' | 'contained';
  color: 'inherit' | 'primary' | 'secondary' | 'default';
};

interface CloseButtonProps {
  message: string;
  id: string;
};

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
  const [clickCount, setClickCount] = useState<{ [key: string]: number }>({
    home: 0,
    about: 0,
    projects: 0,
    skills: 0,
  });
  const [showMessage, setShowMessage] = useState<CloseButtonProps>({ message: '', id: '' });

  const handleClick = (id: string) => {
    const updatedClickCount = { ...clickCount, [id]: clickCount[id] + 1 };
    setClickCount(updatedClickCount);

    if (updatedClickCount[id] === 2) {
      setShowMessage({
        message: `Eu não vou fechar, sou só um "x" para lembrar abas de navegador.  🤓​`,
        id,
      });
    }
    else if (updatedClickCount[id] === 3) {
      setShowMessage({
        message: `Não adianta! Eu não vou fechar! 😂​`,
        id,
      });
    } else if (updatedClickCount[id] === 5) {
      setShowMessage({
        message: `Ei! Vai clicar em outra coisa 😡`,
        id,
      });
    } else {
      setShowMessage({ message: '', id: '' });
    }

  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage({ message: '', id: '' });
    }, 4000);

    return () => clearTimeout(timer);
  }, [showMessage]);

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
        <Toolbar sx={!isMobile ?
          { minHeight: { xs: 0, sm: 0 }, paddingLeft: { xs: 0, sm: 0 }, display: '' }
          : { display: 'grid', gridTemplateColumns: '1fr 1fr', padding: 0, }
        }>
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
                    display: isMobile ? 'grid' : 'flex',
                    gridTemplateColumns: '2fr 2fr',
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
                              display: 'flex',
                              justifyContent: 'center',
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
                            <IconButton
                              onClick={() => handleClick(button.id)}
                              sx={{ ml: 1, padding: 0, mr: 0 }}
                              size="small"
                            >
                              <CloseIcon fontSize="small" style={{ fontSize: 14 }} />
                            </IconButton>
                            {showMessage.id === button.id &&
                              <Box
                                sx={{
                                  position: 'absolute',
                                  top: '100%',
                                  left: 0,
                                  mt: 1,
                                  p: 1,
                                  bgcolor: 'background.paper',
                                  border: '1px solid',
                                  borderColor: 'divider',
                                  borderRadius: 2,
                                  fontSize: '0.8rem',
                                  maxWidth: '200px',
                                  textAlign: 'center',
                                  zIndex: '1000001',
                                }}
                              >
                                {showMessage.message}
                              </Box>
                            }
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