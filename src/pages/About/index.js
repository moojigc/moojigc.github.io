import React, { useState } from 'react';
import moment from 'moment';
import { Link as A, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import {
    Link,
    Container,
    Grid,
    CardMedia,
    CardContent,
    Button,
    Box,
    useMediaQuery,
    Typography
} from '@material-ui/core';
import ContactButtons from './ContactButtons';
import TextContent from './TextContent';

const About = ({setMounted}) => {
    const { lang } = useParams();
    const age = parseInt(moment('19960229', 'YYYYMMDD').fromNow());
    const isMobile = useMediaQuery('(max-width:900px)');
    const cardOffset = isMobile ? 'unset' : '-3rem';
	const [nameJA, setNameJA] = useState(false);
	const { bio, caption, about } = TextContent(lang, age)

    return (
        <Container maxWidth="lg" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
            <Box component="main" style={{ background: 'var(--wrapper)' }}>
                <Header overlaid={-1}>{about}</Header>
                <Grid container spacing={2}>
                    <Grid
                        style={{
                            padding: isMobile ? '1.5rem' : '1rem 1rem 1.5rem 1.5rem',
                            position: 'relative',
                            top: cardOffset,
                            marginBottom: cardOffset
                        }}
                        item
                        md={4}>
                        <div style={{ width: '100%', background: 'transparent' }}>
                            <CardMedia
							 onLoad={() => setMounted(true)}
                                component="img"
                                alt="Profile picture"
                                height="auto"
                                image="/images/DSC02773.jpg"
                                style={{ borderRadius: '50%', boxShadow: 'var(--box-shadow)' }}
                            />
                            <CardContent
                                style={{
                                    backgroundColor: 'var(--card-bg)',
                                    borderRadius: '0.25rem',
                                    marginTop: '0.5rem',
                                    boxShadow: '#0000006b 0px 0px 0.5rem 0.1rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center'
                                }}>
                                <Button
                                    onClick={() => setNameJA(!nameJA)}
                                    color="secondary"
                                    variant="contained"
                                    style={{ width: '100%' }}>
                                    {nameJA ? 'ムージグ・バっツォクト' : 'Moojig Battsogt'}
                                </Button>
                                <Grid container direction="column">
                                    <Typography
                                        variant="caption"
                                        style={{ fontFamily: 'inherit !important' }}>
                                        {caption}: <strong>Munkhtsogt</strong>
                                    </Typography>
                                    me@moojig.dev | (347) 391-6941
                                </Grid>
                            </CardContent>
                        </div>
                    </Grid>
                    <Grid item md={8}>
                        <Box
                            style={{
                                height: '100%',
                                lineHeight: lang === 'ja' ? '1.5' : 'inherit'
                            }}>
                            {bio}
                            <div
                                style={{
                                    padding: '0.5rem',
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                <ContactButtons lang={lang}/>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default About;
