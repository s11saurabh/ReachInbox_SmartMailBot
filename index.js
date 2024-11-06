const express = require('express');
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const authRoutes = require('./routes/authRoutes');
const emailRoutes = require('./routes/emailRoutes');
const oauth2Client = require('./config/gmailConfig');


const path = require('path');



const app = express();
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({
    secret: process.env.SESSION_SECRET || 'your_session_secret',
    resave: false,
    saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/auto-replier'
}, (accessToken, refreshToken, profile, done) => {
    oauth2Client.setCredentials({
        access_token: accessToken,
        refresh_token: refreshToken,
    });
    profile.accessToken = accessToken;
    return done(null, profile);
}));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

app.use('/auth', authRoutes);
app.use('/process-emails', emailRoutes);

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});

