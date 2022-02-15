import { Typography, Stack, Avatar } from "@mui/material";


const UserDetails = (props) => {
  const { avatar, first_name, last_name, email } = props;
  
  return (
    <Stack direction="row" alignItems="center">
      <Avatar
        alt={`${first_name} ${last_name}`}
        src={avatar}
        sx={{ width: 100, height: 100 }}
      />
      <Typography variant='h3' color='primary'>
        {`${first_name} ${last_name}`}
      </Typography>
    </Stack>
  );
};

export default UserDetails;