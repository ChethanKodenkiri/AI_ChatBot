import React from "react";
import { Avatar, Box, Typography, Button } from "@mui/material";
import { useAuth } from "../components/context/AuthContext";

 const chatMessages =[
  {
    "role": "User",
    "content": "What's the weather like today?"
  },
  {
    "role": "Assistant",
    "content": "The weather today is partly cloudy with a high of 75°F."
  },
  {
    "role": "User",
    "content": "Can you set a reminder for my dentist appointment tomorrow at 10 AM?"
  },
  {
    "role": "Assistant",
    "content": "Sure, I've set a reminder for your dentist appointment tomorrow at 10 AM."
  },
  {
    "role": "User",
    "content": "How many centimeters are in an inch?"
  },
  {
    "role": "Assistant",
    "content": "There are 2.54 centimeters in an inch."
  },
  {
    "role": "User",
    "content": "What's the capital of France?"
  },
  {
    "role": "Assistant",
    "content": "The capital of France is Paris."
  }
]



const Chat = () => {
  const auth = useAuth();
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        width: "100%",
        height: "100%",
        mt: 3,
        gap: 3,
      }}
    >
      <Box
        sx={{
          display: { md: "flex", xs: "none", sm: "none" },
          flex: 0.2,
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "60vh",
            bgcolor: "rgb(17,29,29)",
            borderRadius: 5,
            flexDirection: "column",
            mx: 6,
            mt: "60px",
          }}
        >
          <Avatar
            sx={{
              mx: "auto",
              my: 2,
              bgcolor: "black",
              color: "white",
              fontWeight: 700,
            }}
          >
            {auth?.user?.name[0].toUpperCase()}
            {auth?.user?.name.split("")[1][0].toUpperCase()}
          </Avatar>
          <Typography
            sx={{
              mx: "auto",
            }}
          >
            You are talking to chat bot
          </Typography>
          <Typography
            sx={{
              mx: "auto",
              my: 4,
              p: 3,
            }}
          >
            You can ask some questions related to knowledge, business,
            Advices,Eduction, etc. But avoid sharing personal information
          </Typography>
          <Button
            sx={{
              width: "200px",
              my: "auto",
              color: "white",
              fontWeight: "700",
              borderRadius: 3,
              mx: "auto",
              bgcolor: "rgb(20,180,117)",
              ":hover": { bgcolor: "rgb(20,149,117)" },
            }}
          >
            Clear Chat
          </Button>
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", flex: { md: 0.8, xs: 1, sm: 1 }, flexDirection:'column',px:3 }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "40px",
            color: "white",
            mb: 2,
            mx: "auto",
            fontWeight:'600'
          }}
        >
          GPT-3.5-Turbo
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "60vh",
            borderRadius: 3,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            overflow: "scroll",
            overflowX:'hidden',
            overflowY:'auto',
            scrollBehavior:'smooth'
          }}
        >{chatMessages.map((chat)=><div>{chat.content}</div>)}</Box>
      </Box>
    </Box>
  );
};

export default Chat;
