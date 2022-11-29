import { Divider, Typography, Button } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <Box
            sx={{
                bgcolor: '#000000',
                py: 8,
            }}
        >
            <Container>
                <Box
                    sx={{
                        display: 'flex',
                        justiFyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '1.5rem',
                            color: '#fff',
                            flex: 1,
                        }}
                    >
                        Creative Agency
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            justiFyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            sx={{
                                color: 'rgba(255, 255, 255, 0.5)',
                            }}
                        >
                            Creative Agency
                        </Typography>
                        <Button
                            sx={{
                                bgcolor: 'primary.green',
                                '&:hover': {
                                    bgcolor: 'primary.green',
                                },
                                ml: 2,
                            }}
                        >
                            Get Started
                        </Button>
                    </Box>
                </Box>
                <Divider
                    sx={{
                        mt: 3,
                        bgcolor: 'rgba(255,255,255,0.5)'
                    }}
                />
            </Container>
        </Box>
    );
};

export default Footer;