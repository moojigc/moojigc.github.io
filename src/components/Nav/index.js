import React, { useState } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Button, IconButton, Link } from '@material-ui/core/';
import TextContent from '../../pages/About/TextContent';
import { useEffect } from 'react';

const Nav = () => {
    const { lang } = useParams();
    const history = useHistory();
    const { pathname } = useLocation();
    const [languagePref, setLanguagePref] = useState(lang || 'en');
    const { about, portfolio } = TextContent(languagePref);
    const handleChangeLanguage = () => {
        setLanguagePref(languagePref === 'en' ? 'ja' : 'en');
    };
    useEffect(() => {
        const route = pathname
            .split('/')
            .filter((p) => !/en|ja/.test(p))
            .join("/");
        const newPathname = /\/$/.test(route) ? route + languagePref : `${route}/${languagePref}`
        history.push(newPathname);
    }, [languagePref])
    return (
        <AppBar position="static" style={{ backgroundColor: 'var(--dark-transluscent)' }}>
            <Toolbar style={{ display: 'Flex', justifyContent: 'space-between' }}>
                <IconButton edge="start" color="inherit">
                    <Link href="https://moojigbc.com/">
                        <img
                            style={{ width: '5rem' }}
                            src="/images/moojig-logo.png"
                            alt="Moojig logo"
                        />
                    </Link>
                </IconButton>
                <div>
                    <Link
                        color="secondary"
                        style={{ fontWeight: 'bold', marginRight: '0.5rem' }}
                        href={`https://moojigbc.com/${languagePref}`}>
                        <Button variant="contained" color="secondary">
                            {about}
                        </Button>
                    </Link>
                    <Link
                        color="secondary"
                        style={{ fontWeight: 'bold', marginRight: '0.5rem' }}
                        href={`https://moojigbc.com/portfolio/${languagePref}`}>
                        <Button variant="contained" color="secondary">
                            {portfolio}
                        </Button>
                    </Link>
                    <Button variant="outlined" size="small" onClick={handleChangeLanguage}>{languagePref.toUpperCase()}</Button>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Nav;
