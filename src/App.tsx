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
  Card,
} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

interface MyListItemProps {
  text: string,
  padded: boolean,
}

interface TodoItemModel {
  title: string
  doneStatus: boolean
}


function App() {
  const [value, setValue] = useState<string>('')
  const [items, setItems] = useState<TodoItemModel[]>([])

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const MyListItemText = (props: MyListItemProps) => {
    return (
        <div className={`${props.padded ? "padded" : ""}`}>
          { props.text }
        </div>
    )
  }

  const renderItem = (item: TodoItemModel, index: number) => (
      <ListItem key={`${index}-${value}`}>
        <Card variant="outlined" sx={{ width: 1 }} style={{background: item.doneStatus ? 'green' : 'red'}}>
          <MyListItemText text={item.title} padded={true} />
        </Card>
      </ListItem>
  )

  const onCLikMyButton = () => {
    const newItem = { title: value, doneStatus: false }
    setItems([newItem, ...items])
    setValue('')
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
              <TextField
                value={value}
                onChange={onChangeInput}
                label="Outlined secondary"
                color="secondary"
                focused
              />
            </Grid>
            <Grid  item xs={4}>
              <Button onClick={onCLikMyButton} variant="contained">Добавить</Button>
            </Grid>
          </Grid>
          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {items.map(renderItem)}
          </List>
        </Container>
      </Box>
    </div>
  );
}

export default App;

