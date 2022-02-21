import { useState, useEffect } from 'react';
import { Box, IconButton, makeStyles } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const ScrollToTop = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  const handleScrollClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  return (
    <Box sx={{ transition: 'all .2s' }}>
      {show && (
        <IconButton
          onClick={handleScrollClick}
          sx={{
            zIndex: '5000',
            position: 'fixed',
            bottom: '5vh',
            right: '5%',
            color: '#fff',
            backgroundColor: 'rgb(25, 118, 210)',
            '&:hover, &.Mui-focusVisible': {
              backgroundColor: 'rgb(24, 113, 205)',
              boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
              transform: 'scale(1.1)',
            },
          }}>
          <ExpandLessIcon />
        </IconButton>
      )}
    </Box>
  );
};

export default ScrollToTop;
