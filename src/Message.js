//es7 snippets
import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import "./Message.css"

function Message(props) {
  return <div>
      <Card className="message">
          <CardContent>
              <Typography
               color="black"
               variant='h5'
               component="h2"
               >
{props.username}:{props.text}
               </Typography>
          </CardContent>

      </Card>
  </div>;
}

export default Message;
