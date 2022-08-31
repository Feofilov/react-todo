import React, {useState} from 'react';
import './App.css';
import {
  AppBar,
  Box, Button,
  Container, Grid,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';


function App() {
  const [value, setValue] = useState<string>('')
  const [items, setItems] = useState<string[]>([])

  const onCLikMyButton = () => {
    setItems([value, ...items])
    setValue('')
  }

  const onChangeInput = (element: React.ChangeEvent<HTMLInputElement>) => {
    setValue(element.target.value)
  }

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <div>
              <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={() => {}}
                  color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                  id="menu-appbar"
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(false)}
                  onClose={() => {}}
              >
                <MenuItem onClick={() => {}}>Profile</MenuItem>
                <MenuItem onClick={() => {}}>My account</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
        <Container sx={{ mt: 4, mb: 4 }} >
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <TextField value={value} onChange={onChangeInput} label="Outlined secondary" color="secondary" focused />
            </Grid>
            <Grid  item xs={4}>
              <Button onClick={onCLikMyButton} variant="contained">Добавить</Button>
            </Grid>
          </Grid>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {items.map((value, index) => (
                <ListItem
                    key={`${index}-${value}`}
                    disableGutters
                >
                  <ListItemText primary={value} />
                </ListItem>
            ))}
          </List>
        </Container>
      </Box>
    </div>
  );
}

export default App;
function setItems(arg0: number[]) {
    throw new Error('Function not implemented.');
}

