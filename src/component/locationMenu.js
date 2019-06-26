import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';




export default function LocationSimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Location
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>United Kingdom</MenuItem>
        <MenuItem onClick={handleClose}>Georgia</MenuItem>
        <MenuItem onClick={handleClose}>Greece</MenuItem>
        <MenuItem onClick={handleClose}>Jamaica</MenuItem>
        <MenuItem onClick={handleClose}>Iran</MenuItem>
      </Menu>
    </div>
  );
}
// export default SimpleMenu;