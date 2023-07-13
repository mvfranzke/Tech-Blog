# Tech-Blog
Module # 14 Model-View-Controller (MVC): Tech Blog

## Description
This is the 14th assignment or challenge for our bootcamp class. Our assignment this week is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well and deploy it to Heroku. The app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Installation

Set up package.json
```
npm init-y
```

Install additional package needed
```
npm i express sequelize mysql2 dotenv bcrypt express-session connect-session-sequelize express-handlebars
```

Create the database in mySql Workbench

```
DROP DATABASE IF EXISTS tech_blog_db;
CREATE DATABASE tech_blog_db
```

## Usage
Given a CMS Style blog site, user will first have to create a new account to login. Once they're login they can create a new blog with title and contents. Once it's save, it will reflect on the page and will have a link to be able to delete or edit the blog post.


URL of Github repository : https://github.com/mvfranzke/Tech-Blog

Video Link (user flow): https://drive.google.com/file/d/11L4UjozUntE7f-cddXkqF6u1iTU2xQLu/view

Heroku Deployed Link: https://tech-blog-mvfranzke-0d6e84c65085.herokuapp.com/auth

## Credits

Below are additional resources/tutorial I used:

* https://getbootstrap.com/
* https://www.restapitutorial.com/
* https://sequelize.org/
* https://expressjs.com/
* https://expressjs.com/en/4x/api.html
* https://developer.mozilla.org/en-US/docs/Web/JavaScript
* https://www.youtube.com/watch?v=DQk3zJlY-eE

## License
N/A
