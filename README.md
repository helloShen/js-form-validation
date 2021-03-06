# form-validation
![javascript](https://img.shields.io/badge/javascript-ES6-brightgreen)  ![flexbox](https://img.shields.io/badge/flexbox-1.0-brightgreen) ![css3](https://img.shields.io/badge/css-3.0-brightgreen) ![html5](https://img.shields.io/badge/html-5.0-brightgreen) ![svg](https://img.shields.io/badge/svg-1.1-brightgreen)


Need a sign-up or sign-in page or simple toolkit to craft one, but don't want a heavy CSS framework to disrupt your existing style? `form-validation` might be what you're looking for. 

It's a very light-weight reusable floating label form with pattern validation. Include 100 lines of pure javascript and css library into your project, then they are at your disposal.

<img src="./imgs/email-empty.png" width="200" alt="email-empty.png"> <img src="./imgs/email-valid.png" width="200" alt="email-valid.png"> <img src="./imgs/email-invalid.png" width="200" alt="email-invalid.png">

It also comes with an out-of-the-box sign-up page. Feel free to use it directly in your project to safe your time. Here's the online preview: <a href="http://www.ciaoshen.com/js-form-validation/">ciaoshen.com/js-form-validation</a>

<img src="./imgs/empty.png" height="300" alt="empty.png"> <img src="./imgs/valid.png" height="300" alt="valid.png"> <img src="./imgs/invalid.png" height="300" alt="invalid.png">



## Download
Download the release `form-validation-v1.0` package. Unzip the package you will have a folder structured as below. 
```
.
├── LICENSE
├── README.md
├── assets
│   └── img
│       ├── check-circle-green.svg
│       ├── logo.png
│       └── x-circle-red.svg
├── css
│   ├── form-validation.css
│   └── sign-up.css
├── sign-up.html
└── js
    ├── form-validation.js
    └── sign-up.js
```



## Use directly the demo sign-up page
To use directly the `sign-up.html` as your sign up page, or to customize your personal version based on it, the following files are **required**. 

```
.
├── sign-up.html
├── assets
│   └── img
│       ├── check-circle-green.svg
│       └── x-circle-red.svg
├── css
│   ├── form-validation.css
│   └── sign-up.css
└── js
    ├── form-validation.js
    └── sign-up.js
```
Make sure that the svg icon files `check-circle-green.svg` and `x-circle-red.svg` are under `./assets/img/` direction.



## Reuse the form-validation unit
To implement a single `form-validation` form alone, you need,

First include `form-validation.css` into your own CSS file.
```css
@import url(./form-validation.css);
```
Also import `form-validation.js` into your javascript file,
```js
import { formValidation } from "./form-validation.js";
```

To create a `form-validation` in your HTML page,
1. You need a pair of `<input>` and `<lable>` element. Then add a class `class="form-control"` to your `<input>` element.
2. Wrap the `<input>` and `<label>` elements with a `<div>` container, then add 2 classes: `class="form-floating form-validation"`.

The following code is an simple example,
```html
<div class="form-floating form-validation email">
    <input type="email" class="form-control" name="email" id="email">
    <label for="email">Email address</label>
</div>
```

At last, create a regular expression pattern. Invoke `formValidation.bindPattern()` API in your javascript file to bind the pattern to your own form element. 

That's all! With only 3 lines of code, you have this well designed floating label form with pattern validation.
```js
/* email form element */
const emailForm = document.querySelector('.form-validation.email');
/* email pattern */
const emailPattern = /^[\w\.-]+@[\w-]+\.[\w-]{2,}$/g;
/* bind pattern to the form */
formValidation.bindPattern(emailForm, emailPattern);
```

Life is hard, let's make it easy! Happy coding!