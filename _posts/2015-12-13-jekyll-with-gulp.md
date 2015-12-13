---
layout: blog
title: Gulp With Jekyll
---

{: .content-title}
Gulp With Jekyll
=============

{: .content-p}
Jekyll standalone is great. You can use it pretty easily to set up a blogging platform with the bonus of it being static; no more WordPress! Jekyll uses a Ruby Gem and currently is at 3.0.1. I used Jekyll for this site and another client rather than using a heavy CMS with huge bloat. 

{: .content-p}
Jekyll uses liquid templating, mark down and naturally comes with Sass. Liquid templating means you get the power of using "modules" of code without running server side languages, such as PHP. Jekyll makes use of this pre-build so you can include multiple files as you would with say, PHP header, footer and so on files. 
<!--more-->

{: .content-p}
It's worth noting Jekyll is a static site generator, so you don't need a server side lanaguage meaning you're free to use Github Pages to avoid purchasing your own domain or VPS. 

{: .content-p}
Now down to Gulp, hopefully you have an idea what Gulp is, if not, head over to [Gulp's website](http://gulpjs.com/). Here we're using Gulp to minify both CSS and JS files while also compiling scss (or sass) to css directory ready to be serverd to the site generated in Jekyll's (default) directory, "_site". We're also using gulp-connect plug into create a localhost so we can test and work locally. I opted not to use livereload because the constant refreshing becomes annoying. 

{: .content-p}
One of my projects has a Jekyll with Gulp boilerplate, feel free to use and suggest fixes. I'm always updating to more I work with Jekyll and figure out it's qwerks along with Gulp. 

{: .content-p}
You'll notice Gulp is asynchronous, so if you want to run gulp tasks in a specfic order, which we'll need to, you can use gulp-run-sequence and define the order in which tasks are run. 

