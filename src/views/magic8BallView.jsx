import React, { useState } from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { Cached as ShakeIcon } from "@mui/icons-material";

const responses = [
    "Have you tried turning it off and on again?",
    "The bug is between keyboard and chair",
    "It works on my machine ¯\\_(ツ)_/¯",
    "Maybe it's time to delete node_modules",
    "Coffee.exe has stopped working",
    "404: Answer not found",
    "Are you sure you saved the file?",
    "It's not a bug, it's a feature!",
    "Try adding more console.log()",
    "Did you check Stack Overflow?",
    "Blame it on cosmic rays",
    "Your code is now legacy code",
];

export const Magic8BallView = () => {
    const [answer, setAnswer] = useState("");
    const [isShaking, setIsShaking] = useState(false);

    const shakeBall = () => {
        setIsShaking(true);
        setAnswer("");
        
        // Simulate thinking time
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * responses.length);
            setAnswer(responses[randomIndex]);
            setIsShaking(false);
        }, 1000);
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: { xs: "70vh", md: "80vh" },
                padding: { xs: 2, md: 3 },
                textAlign: "center",
            }}
        >
            <Typography variant="h4" gutterBottom>
                Programming Magic 8 Ball
            </Typography>
            <Typography variant="subtitle1" gutterBottom sx={{ mb: 4, maxWidth: 520 }}>
                Ask any programming question, and the Magic 8 Ball will guide you!
            </Typography>
            
            <Card
                sx={{
                    width: { xs: 220, sm: 260, md: 300 },
                    height: { xs: 220, sm: 260, md: 300 },
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #0B0B0B 0%, #2F2F2F 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transform: isShaking ? "translateX(-5px)" : "none",
                    animation: isShaking ? "shake 0.5s infinite" : "none",
                    mb: 4,
                    boxShadow: "0 18px 45px rgba(0, 0, 0, 0.25)",
                }}
            >
                <CardContent sx={{ px: 2 }}>
                    <Typography
                        variant="body1"
                        sx={{
                            color: "#fff",
                            textAlign: "center",
                            opacity: answer ? 1 : 0,
                            transition: "opacity 0.5s",
                        }}
                    >
                        {answer}
                    </Typography>
                </CardContent>
            </Card>

            <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<ShakeIcon />}
                onClick={shakeBall}
                disabled={isShaking}
            >
                Shake the Ball
            </Button>
        </Box>
    );
};
