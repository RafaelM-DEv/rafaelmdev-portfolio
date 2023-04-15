import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';


const drawerWidth = 240;

const navItems = ['Blog', 'Hard Skills', 'Soft Skills', 'Projetos', 'Recomendações', 'Contato'];
function DrawerAppBar(props) {
  const { window } = props;
  const [open, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        RafaelM-Dev
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar className='bg-slate-600'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: {sm: 'block' } }}>
            RafaelM-<span className='text-purple-400'>DEv</span>
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'block' } }} >
            {navItems.map((item) => (
              <a key={item} href='/#'>
                <span className='capitalize hover:text-purple-400 px-3 font-semibold text-lg'>
                  { item }
                </span>
              </a>
            ))}
          </Box>

          <a href='https://github.com/RafaelM-DEv' target='_blank' className=" hover:text-purple-400 cursor-pointer ml-2" rel="noreferrer"> 
            <GitHubIcon />
          </a>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={ container }
          variant="temporary"
          open={ open }
          onClose={ handleDrawerToggle }
          ModalProps={{ keepMounted: true }}
          sx={{display: { xs: 'block', md: 'none' },'& .MuiDrawer-paper': { width: drawerWidth,  boxSizing: 'border-box' }}}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
