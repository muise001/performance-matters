# Performance matters

## Changes

### Compressing files
Why would you compress your files?
File compressing is usefull to decrease the sizes (KB's or even MB's) of your files. This makes it easier for the browser to load your website fast, since there are less KB's to load.

* **Compress HTML, CSS, JS**
  * HTML : [textfixer.com](https://www.textfixer.com/html/compress-html-compression.php)
  * CSS : [csscompressor.com/](https://csscompressor.com/)
  * JS : [jscompress.com/](https://jscompress.com/)
* **images compressed**
  * PNG, JPEG : [compressjpeg.com/](http://compressjpeg.com/)

### fonts
* **fallback-font**
  * I added a fallback-font. I did this because the loading of a custom or google-font can take a lot of time. Using a fallback-font asures you that you'll always see text, even if the google-font isn't loaded in yet.
  * *How to use?* `font-family: sans-serif, "google-font"`. If you write your css like this. The browser will show the sans-serif first. If the "google-font" is loaded in, it will show that one.
* **`font-display : swap`**
  * If you include this line of code in your css, it will show your text inmediately

### javascript
* **defer on `<script>`**
  * "Defer" makes sure that the DOM is loaded in first. If that's loaded in, He'll load in your JS file
* **added caching**
  * Made sure the browser saves the files that it downloads for showing the website. Using this, slightly increases the time to load the website for the first time (a few hundered ms), but drasticly increases the speed of the site when you visit it for the second time. 

``` Emiel Muis```
