# socialhub
Fancy buttons for social media. Clone project and look into **demo.html** file.

**Socialhub element settings:**

Parameter name | Default value | Possible values | Description 
--- | --- | --- | ---
tile-size | 128px | all css units | Specifies width and height of tile 
randomize-tiles | false | boolean | Specifies that order of tiles should be randomized.

**Tile element settings:**

Parameter name | Default value | Possible values | Description 
--- | --- | --- | ---
front-face-image | [Google SVG icon](https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg) | URL | Link for icon which will be presented on front face. 
tile-color | random color | all css-possible color notations | Specifies the color of tile.

**Full Example:**

```html
<div class="social-hub" tile-size="5vw" randomize-tiles="true">
<a class="tile" front-face-image="icons/facebook.svg" tile-color="#4267B2" href="https://www.facebook.com/">Facebook</a>
<a class="tile" front-face-image="icons/instagram.svg" tile-color="#ED4956" href="https://www.instagram.com/">Instagram</a>
<a class="tile" front-face-image="icons/linkedin.svg" tile-color="#0077B5" href="https://www.linkedin.com/">Linkedin</a>
<a class="tile" front-face-image="icons/github.svg" tile-color="#24292E" href="https://www.github.com/">Github</a>
<a class="tile" front-face-image="icons/email.svg" tile-color="#2ECC40" href="mailto:igor.maculewicz@gmail.com">E-mail</a>
</div>
```
