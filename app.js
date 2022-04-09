const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const cloudinary = require('cloudinary').v2;
const fileUpload = require('express-fileupload');

const userRouter = require('./routes/userRoutes');
const categoryRouter = require('./routes/CategoryRoute/categoryRoute')
const adoptionPostRouter = require('./routes/AdoptionPostRoute/adoptionPostRoute')
const patBlogPostRouter = require('./routes/PatBlogPostRoute/patBlogPostRoute')
const vetRouter = require('./routes/VetRoute/vetRoute')

const app = express();

// 1) GLOBAL MIDDLEWARES
// Set security HTTP headers
app.use(helmet());
app.use(fileUpload({
  useTempFiles:true
})); 
// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//cloudnary
cloudinary.config({ 
  cloud_name: 'sifat-it', 
  api_key: '152464894557898', 
  api_secret: 'f4bN19XFCndeyzFqvUsR-DlBSzY' 
});

// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!'
});
app.use('/api', limiter);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
app.use(
  hpp({
    whitelist: [
      'duration',
      'ratingsQuantity',
      'ratingsAverage',
      'maxGroupSize',
      'difficulty',
      'price'
    ]
  })
);

// Serving static files
// app.use(express.static(`${__dirname}/public`));

// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.headers);
  next();
});


 
// 3) ROUTES and endpoint
app.use('/api/v1/users', userRouter);
app.use('/api/v1/category', categoryRouter)
app.use('/api/v1/adoptionPost', adoptionPostRouter)
app.use('/api/v1/patBlogPost', patBlogPostRouter)
app.use('/api/v1/vet', vetRouter)



app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
