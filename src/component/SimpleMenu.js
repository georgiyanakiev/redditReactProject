import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import fireIcn from '../component/fire.png';
import newIcn from '../component/newIcn.png';
import boltIcn from '../component/boltIcn.png';
import topIcn from '../component/topIcn.png';
import risingIcn from '../component/risingIcn.png';


export default function SimpleMenu() {
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
        SortMenu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><img className="sortMenuIcns" src={fireIcn} />Hot</MenuItem>
        <MenuItem onClick={handleClose}><img className="sortMenuIcns" src={newIcn} />New</MenuItem>
        <MenuItem onClick={handleClose}><img className="sortMenuIcns" src={boltIcn} />Controversial</MenuItem>
        <MenuItem onClick={handleClose}><img className="sortMenuIcns" src={topIcn} />Top</MenuItem>
        <MenuItem onClick={handleClose}><img className="sortMenuIcns" src={risingIcn} />Rising</MenuItem>
      </Menu>
    </div>
  );
}
// export default SimpleMenu;